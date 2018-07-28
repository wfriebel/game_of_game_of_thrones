import { LOGIN, LOGOUT } from './authActionTypes';
import axios from 'axios'

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
    const serverResponse = await axios.post('http://localhost:5000/auth/google', { access_token: accessToken });    
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