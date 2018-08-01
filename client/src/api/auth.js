import api, { authRoutes } from './index'
import store from '../store'

export const getCurrentUser = async () => {
    const response = await api({
      method: 'get',
      url: '/users/me',
      headers: {
          authorization: store.getState().auth.token
      }
    })
    return response.data.user
  }

export const signInWithGoogle = async (accessToken) => {
  const response = await authRoutes({
    method: 'post',
    url: '/google',
    data: {
      access_token: accessToken
    },
    headers: {
        authorization: store.getState().auth.token
    }
  })

  const user = response.data.user;
  const token = response.data.token;

  return { user, token }
}