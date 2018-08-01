import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import AppRouterContainer from './AppRouterContainer'

const App = () => (
    <Provider store={store}>
        <AppRouterContainer />
    </Provider>
)

export default App
