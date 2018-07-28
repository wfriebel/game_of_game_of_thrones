import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
                <Route path='/teams' component={TeamPage} />
                <Route path='/characters' component={CharacterPage} />
                <Route path='/stats' component={StatsPage} />
                <Route path='/update' component={UpdatePage} />
            </Switch>
        </div>
    </BrowserRouter>
)

// TODO
// Make a 404 route

export default AppRouter