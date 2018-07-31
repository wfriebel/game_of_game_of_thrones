import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + 'api'
  });

export const authRoutes = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + 'auth'
})

// export const setAxiosAuthToken = () => {
//   api.defaults.headers.common['Authorization'] = localStorage.getItem('token');
// }
// export const removeAxiosAuthToken = () => {
//   api.defaults.headers.common['Authorization'] = undefined;
// }

export default api;