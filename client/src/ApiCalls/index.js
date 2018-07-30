import axios from 'axios'

let api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
  });

export const setAxiosAuthToken = token => api.defaults.headers.common['Authorization'] = token;
export const removeAxiosAuthToken = () => api.defaults.headers.common['Authorization'] = undefined;

export default api;
