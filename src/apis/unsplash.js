import axios from 'axios';

const URL = 'https://api.unsplash.com/search/photos';

const options = (term, page) => {
  return {
    headers: {
      Authorization: 'Client-ID A8UMKv59BsX2WHkoRKVk9wH1jxZLzQ6nd4yWIsDJu54',
    },

    params: { query: term, per_page: 20, page: page },
  };
};

export const getImageData = async (term, page) => {
  try {
    const { data } = await axios.get(URL, options(term, page));

    return data;
  } catch (err) {
    console.log(err);
  }
};
