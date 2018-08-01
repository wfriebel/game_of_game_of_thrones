import api from '.'
import store from '../store'

export const getCharacters = async () => {
    const response = await api({
      method: 'get',
      url: '/characters',
      headers: {
          authorization: store.getState().auth.token
      }
    })
    return response.data.characters
  }