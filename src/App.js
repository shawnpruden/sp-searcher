import React, { useState } from 'react';
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

import { Link, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [videos, searchVideos] = useVideos('しばいぬ');
  const [images, searchImages] = useImages('shiba');

  const [toggle, setToggle] = useState(false);

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
                onClick={() => setToggle(false)}
              >
                Video
              </Link>
            </Button>
            <Button sx={{ padding: 0 }}>
              <Link
                to="/image"
                style={{ padding: '0.2rem 0.4rem' }}
                onClick={() => setToggle(true)}
              >
                Image
              </Link>
            </Button>
          </ButtonGroup>
          <SearchBar onTermSubmit={toggle ? searchImages : searchVideos} />
        </Box>
        <Routes>
          <Route path="/" element={<Navigate replace to="/video" />} />
          <Route path="/video" element={<VideoSearch videos={videos} />} />
          <Route path="/image" element={<ImageSearch images={images} />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
