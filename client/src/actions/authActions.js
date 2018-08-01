import { LOGIN, LOGOUT, SET_USER } from './actionTypes';
import { signInWithGoogle } from '../api/auth'
import { getCurrentUser } from '../api/auth'

const loginAction = (user, token) => (
    {
        type: LOGIN,
        payload: { user, token }
    }
)

const logoutAction = () => ({
    type: LOGOUT
})

const setUser = (user) => ({
    type: SET_USER,
    payload: { user }
})

export const googleLogin = (accessToken) => async dispatch => {
    const response = await signInWithGoogle(accessToken)
    const user = response.user
    const token = response.token
    localStorage.setItem('token', token);
    dispatch(loginAction(user, token));
}

export const logout = () => dispatch => {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    dispatch(logoutAction());
}

export const fetchCurrentUser = () => async dispatch => {
    try {
        const user = await getCurrentUser();
        dispatch(setUser(user))
    } catch (error) {
        console.log('An error occured while attempting to fetch the user:', error)
    }
}