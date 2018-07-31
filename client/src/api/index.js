import axios from 'axios'

export const authRoutes = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + 'auth'
})

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + 'api'
  });

export default api;