import React from 'react'
import DashboardGroup from '../Dashboard/DashboardGroup'

const BossStuffDashboardGroup = () => {
    return (
        <DashboardGroup>
            <h1 className="boss-page-dashboard__title">
                <span className="boss-page-dashboard__title-text">Staff Members</span>
                <span className="boss-page-dashboard__title-info">+695</span>
            </h1>
            <div className="boss-page-dashboard__buttons-group">
                <a href="/" className="boss-button boss-button_role_add boss-page-dashboard__button">Add Staff Members</a>
            </div>
        </DashboardGroup>
    )
}

export default BossStuffDashboardGroup
