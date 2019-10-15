import React from 'react'
import Dashboard from '../../../Components/Dashboard'
import TabContainer from './TabContainer'
import ProfileDashboardGroup from './ProfileDashboardGroup'

const ProfileDashboard = () => {
    return (
        <Dashboard classes="boss-page-dashboard_page_profile">
            <ProfileDashboardGroup />
            <TabContainer />
        </Dashboard>

    )
}

export default ProfileDashboard
