import { Divider, List } from '@mui/material';
import React, { Fragment } from 'react';
import VideoItem from '../VideoItem/VideoItem';

export default function VideoList({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => (
    <Fragment key={video.id.videoId}>
      <VideoItem onVideoSelect={onVideoSelect} video={video} />
      <Divider />
    </Fragment>
  ));
  return <List sx={{ padding: '0 8px', width: '100%' }}>{renderedList}</List>;
}
