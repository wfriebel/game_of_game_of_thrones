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