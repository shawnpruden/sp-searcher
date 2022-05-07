import axios from 'axios';

const URL = 'https://api.unsplash.com/search/photos';

const options = (term) => {
  return {
    headers: {
      Authorization: 'Client-ID A8UMKv59BsX2WHkoRKVk9wH1jxZLzQ6nd4yWIsDJu54',
    },

    params: { query: term },
  };
};

export const getImageData = async (term) => {
  try {
    const { data } = await axios.get(URL, options(term));

    return data;
  } catch (err) {
    console.log(err);
  }
};
