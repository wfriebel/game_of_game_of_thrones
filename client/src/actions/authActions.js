import { LOGIN, LOGOUT } from './authActionTypes';
import api, { setAxiosAuthToken, removeAxiosAuthToken } from '../ApiCalls'

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
    const serverResponse = await api.post('/auth/google', { access_token: accessToken });    
    const user = serverResponse.data.user;
    const token = serverResponse.data.token;
    setAxiosAuthToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(loginAction(user, token));
}

export const logout = () => dispatch => {
    removeAxiosAuthToken();
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    dispatch(logoutAction());
}