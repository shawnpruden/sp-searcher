import React, { useState } from 'react';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { form, input, button } from './styles.js';

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
            <InputAdornment>
              <SearchIcon sx={{ fontSize: 30, color: 'primary.main' }} />
            </InputAdornment>
          ),
        }}
        inputProps={{ style: { padding: '0 0.5rem' } }}
        sx={input}
      />

      <Button type="submit" variant="contained" sx={button}>
        Search
      </Button>
    </Box>
  );
}
