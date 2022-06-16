import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params:{
    api_key: '4f18ee7748048ed112f5132c82014bc7',
    language: 'en-US',
    page: 1
  }
});

export default movieDB;