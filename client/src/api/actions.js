import api from '.'
import store from '../store'

export const getActions = async (leagueId) => {
    const response = await api({
      method: 'get',
      url: `/leagues/${leagueId}/actions`,
      headers: {
          authorization: store.getState().auth.token
      }
    })
    return response.data
  }