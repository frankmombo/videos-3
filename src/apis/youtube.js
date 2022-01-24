import axios from 'axios';

const KEY = 'AIzaSyDDEU7yb7DUqW9gr6ZofqxFGRxmiZVgdNM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
      part: 'snippet',
      maxResults: '5',
      type: 'video',
      key: KEY
  }
});
