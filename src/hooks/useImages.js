import { useEffect, useState } from 'react';
import { getImageData } from '../apis/unsplash';

export default function useImages(input, type) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    type === 'video' && searchImages(input, 1);
  }, []);

  useEffect(() => {
    setImages([]);
  }, [input, type]);

  const searchImages = async (term, page) => {
    const data = await getImageData(term, page);

    setImages((prevImages) => [...prevImages, ...data.results]);
  };

  return [images, searchImages];
}
