import axios, { AxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
  baseURL: `https://flowrspot-api.herokuapp.com/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  if (userData.token) {
    config.headers = config.headers || {};
    config.headers.Authorization = userData.token;
  }

  return config;
});

export { axiosClient };
