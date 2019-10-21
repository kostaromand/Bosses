import React from 'react'
import Navigation from './Navigation'
import { Route, Switch, Redirect } from 'react-router-dom'
import EmpoymentForm from './Forms/EmpoymentForm'
import PersonalForm from './Forms/PersonalForm'
import ContactForm from './Forms/ContactForm'

const ProfileEditContent = (props) => {
    const { id, form } = props.match.params;
    return (
        <div className="boss-content-switcher">
            <div className="boss-content-switcher__inner">
                <Navigation form={form} />
                <Switch>
                    <Route exact path="/profile/:id/edit">
                        <Redirect to={`/profile/${id}/edit/employment`} />
                    </Route>
                    <Route
                        exact path="/profile/:id/edit/employment"
                        component={EmpoymentForm}
                    />
                    <Route
                        exact path="/profile/:id/edit/personal"
                        component={PersonalForm}
                    />
                    <Route
                        exact path="/profile/:id/edit/contact"
                        component={ContactForm}
                    />
                </Switch>
            </div>
        </div>
    )
}

export default ProfileEditContent
