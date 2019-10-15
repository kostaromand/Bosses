import React from 'react'
import Dashboard from '../../../Components/Dashboard'
import Filter from './Filter'
import BossDashboardGroup from './BossDashboardGroup'

const BossStuffDashboard = () => {
    return (
        <Dashboard classes="boss-page-dashboard_page_staff-members-index">
            <BossDashboardGroup />
            <Filter />
        </Dashboard>
    )
}

export default BossStuffDashboard
