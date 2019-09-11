import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FavInit from './FavInit/favInit'
import Login from './Login/login'

import './App.css';
import Home from './Home/home';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                {/* <Route path='/discover' component={} /> */}
                {/* <Route path='/me' component={} /> */}
                <Route path='/user_init/fav' component={FavInit} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
