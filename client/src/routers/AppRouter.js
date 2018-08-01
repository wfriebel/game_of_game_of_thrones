import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TeamPage from '../components/TeamPage'
import LoginPage from '../components/LoginPage'
import CharacterPage from '../components/CharacterPage'
import StatsPage from '../components/StatsPage'
import AboutPage from '../components/AboutPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => (
    
    <BrowserRouter>
        <div>
            <Switch>
                <PublicRoute exact path='/' component={LoginPage} />
                <PrivateRoute path='/about' component={AboutPage} />
                <PrivateRoute path='/teams' component={TeamPage} />
                <PrivateRoute path='/characters' component={CharacterPage} />
                <PrivateRoute path='/stats' component={StatsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter