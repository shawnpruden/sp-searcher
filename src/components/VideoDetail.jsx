import { Box, Typography } from '@mui/material';
import React from 'react';

export default function VideoDetail({ selectedVideo }) {
  return (
    <>
      {selectedVideo && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 0',
            textAlign: 'start',
          }}
        >
          <Box
            component="iframe"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            height="500px"
            sx={{ border: 'none', borderRadius: '5px' }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginTop: '1rem' }}
          >
            {selectedVideo.snippet.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedVideo.snippet.description}
          </Typography>
        </Box>
      )}
    </>
  );
}
// <div>{selectedVideo && <div></div>}</div>
