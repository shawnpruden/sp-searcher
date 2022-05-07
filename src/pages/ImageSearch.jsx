import { Container } from '@mui/material';
import React from 'react';
import ImageList from '../components/ImageList/ImageList';

function ImageSearch({ images }) {
  return (
    <>
      <Container style={{ marginTop: '2rem' }}>
        <ImageList images={images} />
      </Container>
    </>
  );
}

export default ImageSearch;
