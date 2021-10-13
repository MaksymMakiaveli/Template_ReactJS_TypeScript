import axios from 'axios';

export default axios.create({
  // withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
  auth: {
    username: process.env.REACT_APP_API_USERNAME || '',
    password: process.env.REACT_APP_API_PASSWORD || '',
  },
});
