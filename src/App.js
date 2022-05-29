import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import SearchBar from './components/SearchBar/SearchBar';

import {
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Box,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import useVideos from './hooks/useVideos';
import useImages from './hooks/useImages';

import { theme, navBar } from './styles';
import VideoSearch from './pages/VideoSearch';
import ImageSearch from './pages/ImageSearch';

function App() {
  const { pathname } = useLocation();
  const [type, setType] = useState(pathname.slice(1));
  const [input, setInput] = useState('shiba');

  const [videos, searchVideos] = useVideos('しばいぬ');
  const [images, searchImages] = useImages(input, type);

  useEffect(() => {
    if (!type) {
      setType('video');
    }

    window.addEventListener('resize', () => window.location.reload());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleType = () => {
    if (type === 'video') {
      return searchVideos;
    } else if (type === 'image') {
      return searchImages;
    }
  };

  const selectedType = handleType();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container align="center">
        <Box component="nav" sx={navBar}>
          <ButtonGroup variant="outlined" size="small" sx={{ height: 30 }}>
            <Button sx={{ padding: 0 }}>
              <Link
                to="/video"
                style={{ padding: '0.2rem 0.4rem' }}
                onClick={() => setType('video')}
              >
                Video
              </Link>
            </Button>
            <Button sx={{ padding: 0 }}>
              <Link
                to="/image"
                style={{ padding: '0.2rem 0.4rem' }}
                onClick={() => setType('image')}
              >
                Image
              </Link>
            </Button>
          </ButtonGroup>
          <SearchBar
            onTermSubmit={selectedType}
            type={type}
            input={input}
            setInput={setInput}
          />
        </Box>
        <Routes>
          <Route path="/" element={<Navigate replace to="/video" />} />
          <Route
            path="/video"
            element={<VideoSearch videos={videos} type={type} />}
          />
          <Route
            path="/image"
            element={<ImageSearch images={images} type={type} input={input} />}
          />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
