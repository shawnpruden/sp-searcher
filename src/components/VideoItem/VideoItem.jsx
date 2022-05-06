import React from 'react';
import { Box, ListItem, ListItemText } from '@mui/material';

import { listItem } from './styles';

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <ListItem
      onClick={() => onVideoSelect(video)}
      alignItems="flex-start"
      sx={listItem}
    >
      <Box
        component="img"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
        style={{ verticalAlign: 'bottom' }}
        sx={{ width: '160px', borderRadius: '5px', marginRight: '8px' }}
      />
      <ListItemText
        primary={video.snippet.title}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: '500',
          noWrap: true,
        }}
        secondary={video.snippet.channelTitle}
        secondaryTypographyProps={{
          fontSize: '12px',
          marginTop: '4px',
          noWrap: true,
        }}
      />
    </ListItem>
  );
}
