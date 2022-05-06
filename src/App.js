import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';

import { Container, CssBaseline, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme, container } from './styles';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';
import useVideos from './hooks/useVideos';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('しばいぬ');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container align="center">
        <SearchBar onTermSubmit={search} />

        {selectedVideo && (
          <Grid container sx={container}>
            <Grid item lg={8} md={12}>
              <VideoDetail selectedVideo={selectedVideo} />
            </Grid>
            <Grid item lg={4} md={12} sx={{ width: '100%' }}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
