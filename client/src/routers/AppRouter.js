import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import TeamPage from '../components/TeamPage'
import LoginPage from '../components/LoginPage'
import CharacterPage from '../components/CharacterPage'
import StatsPage from '../components/StatsPage'
import UpdatePage from '../components/UpdatePage'
import AboutPage from '../components/AboutPage'
import PrivateRoute from '../routers/PrivateRoute'
import PublicRoute from '../routers/PublicRoute'

const AppRouter = () => (
    
    <BrowserRouter>
        <div>
            <Switch>
                <PublicRoute exact path='/' component={LoginPage} />
                <PrivateRoute path='/about' component={AboutPage} />
                <PrivateRoute path='/teams' component={TeamPage} />
                <PrivateRoute path='/characters' component={CharacterPage} />
                <PrivateRoute path='/stats' component={StatsPage} />
                <PrivateRoute path='/update' component={UpdatePage} />
            </Switch>
        </div>
    </BrowserRouter>
)

// TODO
// Make a 404 route
// How to deal with multiple views on the dashboard page
    // Should I create different routes or use different query params

export default AppRouter