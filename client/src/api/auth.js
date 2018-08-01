import api, { authRoutes } from '.'

import store from '../store'

export const getUser = async () => {
    const response = await api({
      method: 'get',
      url: '/users/me',
      headers: {
          authorization: store.getState().auth.token
      }
    })
    return response.data
  }