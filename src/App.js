import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';

import { Container, CssBaseline, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './styles';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
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
          <Grid
            container
            sx={{
              background: '#FBF6F0',
              margin: '2rem 0',
              padding: '0 16px 16px 16px',
              border: '2px solid #D9D7F1',
              borderRadius: '5px',
            }}
          >
            <Grid item lg={8} md={12}>
              <VideoDetail selectedVideo={selectedVideo} />
            </Grid>
            <Grid item lg={4} md={12}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
