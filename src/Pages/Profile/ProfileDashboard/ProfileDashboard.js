import React from 'react'
import Dashboard from '../../../Components/Dashboard'
import TabContainer from './TabContainer'
import DashboardGroup from '../../../Components/Dashboard/DashboardGroup'
import UserSummary from './UserSummary'
import { Link } from 'react-router-dom'

const ProfileDashboard = () => {
    return (
        <Dashboard classes="boss-page-dashboard_page_profile">
            <DashboardGroup>
                <UserSummary />
                <div className="boss-page-dashboard__buttons-group">
                    <Link
                        to="#"
                        className="boss-button boss-button_role_edit boss-page-dashboard__button">
                        Edit Profile
                    </Link>
                    <Link
                        to="#"
                        className="boss-button boss-button_role_block boss-page-dashboard__button">
                        Disable Staff Member
                    </Link>
                </div>
            </DashboardGroup>
            <TabContainer />
        </Dashboard>

    )
}

export default ProfileDashboard
