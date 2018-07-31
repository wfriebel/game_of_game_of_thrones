import api from './index'
import store from '../store'

const token = store.getState().auth.token

export const getCharacters = async () => {
    const response = await api({
      method: 'get',
      url: '/characters',
      headers: {
          authorization: token
      }
    })
    return response.data
  }