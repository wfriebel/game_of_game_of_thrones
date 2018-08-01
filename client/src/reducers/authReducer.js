import { LOGIN, LOGOUT, SET_USER } from '../actions/actionTypes';

const tokenFromStorage = localStorage.getItem('token')

const authReducerDefaultState = {
    user: '',
    token: !!tokenFromStorage ? tokenFromStorage : ''
}

const authReducer = (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload.user,
                token: action.payload.token
            }
        case LOGOUT:
            return {
                user: '',
                token: ''
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state;
    }
}

export default authReducer