import { FETCH_ACTIONS_START, FETCH_ACTIONS_SUCCESS, FETCH_ACTIONS_ERROR } from './actionTypes'

const characterActionsReducerDefaultState = {
    items: [],
    loading: false,
    error: null
}

const characterActionsReducer = (state = characterActionsReducerDefaultState, action) => {
    switch (action.type) {
        case FETCH_ACTIONS_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_ACTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.actions
            }
        case FETCH_ACTIONS_ERROR:
            return {
                ...state,
                loading: false,
                items: action.payload.error
            }
        default:
            return state;
    }
}