import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { form, textField } from './styles.js';

export default function SearchBar({ onTermSubmit, type, setInput }) {
  const [term, setTerm] = useState('shiba');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (term) {
      type === 'image' && onTermSubmit(term, page);
    }
  }, [page, type]);

  useEffect(() => {
    setPage(1);
  }, [term, type]);

  const handleScroll = useCallback(() => {
    if (
      Math.floor(window.innerHeight + window.scrollY) ===
      document.documentElement.scrollHeight
    ) {
      type === 'image' && setPage((preState) => preState + 1);
    }
  }, [type]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [type, handleScroll]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput(term);
    onTermSubmit(term, page);
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
        sx={textField}
      />

      <Button type="submit" variant="contained" sx={{ height: 40 }}>
        Search
      </Button>
    </Box>
  );
}
