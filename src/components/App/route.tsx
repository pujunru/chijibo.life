import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import UserInitPage from './UserInitPage/UserInitPage'
import LoginPage from './LoginPage/loginPage'

const AppRoute: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/userInit' component={UserInitPage} />
                <Route path='/login' component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute