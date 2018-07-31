import { SET_CHARACTERS } from './actionTypes'
import api from '../api'
import { store } from '../components/App'

const setCharactersAction = (characters) => ({
    type: SET_CHARACTERS,
    payload: characters
})

export const fetchCharacters = () => async dispatch => {
    try {
        console.log('fetching characters')
        const response = await api({
            method: 'get',
            url: '/characters',
            headers: {
                authorization: store.getState().auth.token
            }
        })
        dispatch(setCharactersAction(response.data))
    } catch (error) {
        console.log('Error setting characters:', error)
    }
    
}