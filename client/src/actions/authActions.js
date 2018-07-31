import { LOGIN, LOGOUT } from './actionTypes';
import { authRoutes } from '../api'

const loginAction = (user, token) => (
    {
        type: LOGIN,
        payload: { user, token }
    }
)

const logoutAction = () => ({
    type: LOGOUT
})

export const googleLogin = (accessToken) => async dispatch => {
    const serverResponse = await authRoutes.post('/google', { access_token: accessToken });    
    const user = serverResponse.data.user;
    const token = serverResponse.data.token;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(loginAction(user, token));
}

export const logout = () => dispatch => {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    dispatch(logoutAction());
}