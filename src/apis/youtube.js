import axios from 'axios';

const KEY = 'AIzaSyClTzD4_Muc1CO3PD08pyMbRnOfA0Ssaks';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
