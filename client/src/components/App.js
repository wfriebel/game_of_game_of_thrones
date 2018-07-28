import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from '../routers/AppRouter'
import createStore from '../store'

const store = createStore();

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

export default App


// console.log(store.getState())
// const user = {
//     name: 'will',
//     description: 'I am a person'
// }
// const token = '124rhowe90urd'
// store.dispatch(login(user, token))
console.log(store.getState())