import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';

import VideoDetail from '../components/VideoDetail/VideoDetail';
import VideoList from '../components/VideoList/VideoList';

import { container, loader } from './styles';

function VideoSearch({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <>
      {selectedVideo ? (
        <Grid container sx={container}>
          <Grid item lg={8} md={12}>
            <VideoDetail selectedVideo={selectedVideo} />
          </Grid>
          <Grid item lg={4} md={12} sx={{ width: '100%' }}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      ) : (
        <Box sx={loader} style={{ marginTop: '2rem' }}>
          <CircularProgress size={80} sx={{ color: '#673ab7' }} />
        </Box>
      )}
    </>
  );
}

export default VideoSearch;
