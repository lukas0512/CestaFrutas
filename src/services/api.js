import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-pesada.herokuapp.com'
});

export default api;
