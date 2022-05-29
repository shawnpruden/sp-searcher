import React from 'react';

import { Box, CircularProgress, Container } from '@mui/material';
import ImageList from '../components/ImageList/ImageList';
import { loader } from './styles';

function ImageSearch({ images, type, input }) {
  return (
    <Container style={{ marginTop: '2rem', position: 'relative' }}>
      <Box sx={loader}>
        <CircularProgress size={80} sx={{ color: '#673ab7' }} />
      </Box>
      <ImageList images={images} type={type} input={input} />
    </Container>
  );
}

export default ImageSearch;
