import axios from 'axios';

const URL = 'https://www.googleapis.com/youtube/v3/search';

const options = (term) => {
  return {
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: 'AIzaSyBj7aa_VhZ1_8HfikqDAPbrn1hcjVtfYiE',
      q: term,
    },
  };
};

export const getVideoData = async (term) => {
  try {
    const { data } = await axios.get(URL, options(term));

    return data;
  } catch (err) {
    console.log(err);
  }
};
