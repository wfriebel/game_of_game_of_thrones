import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR } from './actionTypes'
import { getCharacters } from '../api/characters'

const fetchCharactersStart = () => ({
    type: FETCH_CHARACTERS_START
})

const fetchCharactersSuccess = (characters) => ({
    type: FETCH_CHARACTERS_SUCCESS,
    payload: { characters }
})

const fetchCharactersError = (error) => ({
    type: FETCH_CHARACTERS_ERROR,
    payload: { error }
})

export const fetchCharacters = () => async dispatch => {
    try {
        dispatch(fetchCharactersStart())
        const characters = await getCharacters()
        dispatch(fetchCharactersSuccess(characters))
    } catch (error) {
        dispatch(fetchCharactersError(error))
    }
}