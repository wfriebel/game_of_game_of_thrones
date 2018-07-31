import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppRouter from '../routers/AppRouter'
import createStore from '../store'

export const store = createStore();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
}

export default App
