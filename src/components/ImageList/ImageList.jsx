import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import ImageCard from '../ImageCard/ImageCard';

import { container } from './styles';

function ImageList({ images, type, input }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => {
      setIsVisible(false);
    };
  }, [type, input]);

  const renderedList = images.map((images) => (
    <ImageCard key={images.id} images={images} />
  ));

  return (
    <Box
      sx={container}
      className="img-container"
      style={isVisible ? { opacity: 1 } : {}}
    >
      {renderedList}
    </Box>
  );
}

export default ImageList;
