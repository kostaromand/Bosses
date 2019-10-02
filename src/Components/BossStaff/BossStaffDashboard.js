import React from 'react'
import Dashboard from '../Dashboard'
import Filter from './Filter'
import BossStuffDashboardGroup from './BossStuffDashboardGroup'

const BossStuffDashboard = () => {
    return (
        <Dashboard classes="boss-page-dashboard_page_staff-members-index">
            <BossStuffDashboardGroup />
            <Filter />
        </Dashboard>
    )
}

export default BossStuffDashboard
