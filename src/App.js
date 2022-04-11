import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';

import { Container, CssBaseline, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './styles';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    handleTermSubmit('しばいぬ');
  }, []);

  const handleTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container align="center">
        <SearchBar onTermSubmit={handleTermSubmit} />
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
              <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
            </Grid>
          </Grid>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
