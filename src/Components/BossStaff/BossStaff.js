import React from 'react'
import Main from '../Main'
import BossStaffDashboard from './BossStaffDashboard'
import BossTable from './Boss/BossTable'

const BossStaff = () => {
    return (
        <Main
            dashboard={BossStaffDashboard}
            content={BossTable}
        />
    )
}

export default BossStaff
