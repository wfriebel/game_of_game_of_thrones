const userFromStorage = localStorage.getItem('user')
const tokenFromStorage = localStorage.getItem('token')

const authReducerDefaultState = {
    user: !!userFromStorage ? JSON.parse(userFromStorage) : '',
    token: !!tokenFromStorage ? tokenFromStorage : ''
}

const authReducer = (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload.user,
                token: action.payload.token
            }
        case 'LOGOUT':
            return {
                user: '',
                token: ''
            }
        default:
            return state;
    }
}

export default authReducer