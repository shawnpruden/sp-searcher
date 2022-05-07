import { useState, useEffect } from 'react';

import { getVideoData } from '../apis/youtube';

export default function useVideos(defaultTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos(defaultTerm);
  }, [defaultTerm]);

  const searchVideos = async (term) => {
    const data = await getVideoData(term);

    setVideos(data.items);
  };

  return [videos, searchVideos];
}
