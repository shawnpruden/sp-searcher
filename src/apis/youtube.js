import axios from 'axios';

const KEY = 'AIzaSyBj7aa_VhZ1_8HfikqDAPbrn1hcjVtfYiE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
