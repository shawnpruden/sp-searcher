import React from 'react';
import { Box } from '@mui/material';

import ImageCard from '../ImageCard/ImageCard';

import { container } from './styles';

function ImageList({ images }) {
  const renderedList = images.map((images) => (
    <ImageCard key={images.id} images={images} />
  ));
  return (
    <Box sx={container} className="img-container">
      {renderedList}
    </Box>
  );
}

export default ImageList;
