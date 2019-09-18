import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import UserInitPage from './UserInitPage/UserInitPage'
import LoginPage from './LoginPage/loginPage'
import { Redirect } from 'react-router'

const AppRoute: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from='/' to='/app/fooder' />
                {/* <Route exact path='/' component={HomePage} /> */}
                <Route path='/app' component={HomePage} />
                <Route path='/userInit' component={UserInitPage} />
                <Route path='/login' component={LoginPage} />
                <Redirect to='/app/fooder' />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute