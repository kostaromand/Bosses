import React from 'react'
import Main from '../Main'
import ProfileDashboard from './ProfileDashboard'
import ProfilePage from './ProfilePage'
import HolidaysPage from './HolidaysPage'
import {Route, Switch } from 'react-router-dom'

const Profile = () => {
    return (
        <Main
            dashboard={ProfileDashboard}
            content={() => (
                <Switch>
                    <Route exact path="/profile" component={ProfilePage} />
                    <Route path="/profile/holidays" component={HolidaysPage} />
                </Switch>
            )}
        />
    )
}

export default Profile;
