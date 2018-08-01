import { LOGIN, LOGOUT, SET_USER } from './actionTypes';
import { authRoutes } from '../api'
import { getUser } from '../api/auth'

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
    const serverResponse = await authRoutes.post('/google', { access_token: accessToken });    
    const user = serverResponse.data.user;
    const token = serverResponse.data.token;
    localStorage.setItem('token', token);
    dispatch(loginAction(user, token));
}

export const logout = () => dispatch => {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    dispatch(logoutAction());
}

export const fetchUser = () => async dispatch => {
    try {
        const user = await getUser();
        dispatch(setUser(user))
    } catch (error) {
        console.log('An error occured while attempting to fetch the user:', error)
    }
}