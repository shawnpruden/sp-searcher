import { useState, useEffect } from 'react';

import { getVideoData } from '../apis/youtube';

export default function useVideos(defaultTerm, type) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    type === 'video' && searchVideos(defaultTerm);
  }, [defaultTerm, type]);

  const searchVideos = async (term) => {
    const data = await getVideoData(term);

    setVideos(data.items);
  };

  return [videos, searchVideos];
}
