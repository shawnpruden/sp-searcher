import React, { useState } from 'react';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onTermSubmit, onVideoSelect }) {
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
      sx={{ marginTop: 3, display: 'flex', justifyContent: 'center' }}
    >
      <TextField
        type="text"
        variant="outlined"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        InputProps={{
          style: { fontSize: '1rem' },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 30, color: 'primary.main' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: '50%',
          marginRight: '2rem',
          color: 'primary.main',
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ height: 40, alignSelf: 'center' }}
      >
        Search
      </Button>
    </Box>
  );
}
