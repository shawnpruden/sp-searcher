import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

import { modal, button, image } from './styles';

function ImageCard({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [spans, setSpans] = useState(0);

  const imgRef = useRef();

  useEffect(() => {
    imgRef.current.addEventListener('load', handleSpans);
  }, []);

  const handleSpans = () => {
    const height = imgRef.current.clientHeight;

    setSpans(Math.ceil(height));
  };

  return (
    <Box
      component="div"
      sx={{ position: 'relative', gridRowEnd: `span ${spans}` }}
    >
      <img
        ref={imgRef}
        src={images.urls.regular}
        alt={images.description}
        style={image}
      />
      <Button onClick={() => setIsOpen((prevState) => !prevState)} sx={button}>
        <ZoomInIcon />
      </Button>
      <Modal open={isOpen} onClose={(prevState) => setIsOpen(!prevState)}>
        <Box sx={modal}>
          <img
            src={images.urls.regular}
            alt={images.description}
            style={{ verticalAlign: 'bottom', maxHeight: '95vh' }}
          />
        </Box>
      </Modal>
    </Box>
  );
}

export default ImageCard;
