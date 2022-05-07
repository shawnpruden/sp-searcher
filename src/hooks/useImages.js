import { useEffect, useState } from 'react';
import { getImageData } from '../apis/unsplash';

export default function useImages(defaultTerm) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    searchImages(defaultTerm);
  }, [defaultTerm]);

  const searchImages = async (term) => {
    const data = await getImageData(term);

    setImages(data.results);
  };
  return [images, searchImages];
}
