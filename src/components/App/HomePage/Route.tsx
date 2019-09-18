import React from 'react'
import { Switch, Route, withRouter, Redirect} from 'react-router'
import PlaceHolder from '../common/_dev/PlaceHolder'
import HomeView from './HomeView/HomeView'
import DiscoverView from './DiscoverView/DiscoverView'
import MeView from './MeView/MeView'

const HomeRoute = ({match}) => {
    console.log(match)
    return (
        <Switch>
            <Route path={`${match.path}/fooder`} component={HomeView} />
            <Route path={`${match.path}/discover`} component={DiscoverView} />
            <Route path={`${match.path}/me`} component={MeView} />
            <Redirect to='/fooder' />
        </Switch>
    )
}

export default withRouter(HomeRoute)