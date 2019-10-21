import React from 'react'
import Dashboard from '../../../Components/Dashboard/Dashboard'
import DashboardGroup from '../../../Components/Dashboard/DashboardGroup'
import { Link } from 'react-router-dom'
const EditDashboard = ({ id }) => {
    return (
        <Dashboard classes="boss-page-dashboard_page_profile-edit">
            <DashboardGroup>
                <h1 className="boss-page-dashboard__title">Edit Profile</h1>
                <div
                    className="boss-page-dashboard__buttons-group boss-page-dashboard__buttons-group_position_last"
                >
                    <Link
                        to={`/profile/${id}`}
                        className="boss-button boss-button_role_cancel boss-page-dashboard__button"
                    >
                        Cancel Editing
                    </Link>
                </div>
            </DashboardGroup>
        </Dashboard>
    )
}

export default EditDashboard
