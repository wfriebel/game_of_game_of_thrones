import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR } from '../actions/actionTypes'

const charactersReducerDefaultState = {
    items: [],
    loading: false,
    error: null,
    initialLoadComplete: false
}

const charactersReducer = (state = charactersReducerDefaultState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.characters,
                initialLoadComplete: true
            }
        case FETCH_CHARACTERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default charactersReducer