import { useState, useEffect } from 'react';

import { getVideoData } from '../apis';

export default function useVideos(defaultTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const data = await getVideoData(term);

    setVideos(data.items);
  };

  return [videos, search];
}
