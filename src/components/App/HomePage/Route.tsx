import React from 'react'
import { Switch, Route } from 'react-router'

const HomeRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={} />
            <Route path='/discover' component={} />
            <Route path='/me' component={} />
        </Switch>
    )
}

export default HomeRoute