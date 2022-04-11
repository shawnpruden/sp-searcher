import { Divider, List } from '@mui/material';
import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    return (
      <React.Fragment key={video.id.videoId}>
        <VideoItem onVideoSelect={onVideoSelect} video={video} />
        <Divider />
      </React.Fragment>
    );
  });
  return <List sx={{ padding: '0 8px' }}>{renderedList}</List>;
}
