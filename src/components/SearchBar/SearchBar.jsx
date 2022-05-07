import React, { useState } from 'react';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { form, input } from './styles.js';

export default function SearchBar({ onTermSubmit }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={form}
      className="search-bar"
    >
      <TextField
        type="text"
        variant="outlined"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        InputProps={{
          style: {
            fontSize: '1rem',
            padding: '0.8rem',
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 30, color: 'primary.main' }} />
            </InputAdornment>
          ),
        }}
        inputProps={{ style: { padding: '0' } }}
        sx={input}
      />

      <Button type="submit" variant="contained" sx={{ height: 40 }}>
        Search
      </Button>
    </Box>
  );
}
