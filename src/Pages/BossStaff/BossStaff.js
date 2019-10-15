import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import BossDashboard from './BossDashboard/BossDashboard'
import BossTable from './BossTable'

const BossStaff = () => {
    return (
        <MainLayout
            Dashboard={BossDashboard}
            Content={() => <BossTable />}
        />
    )
}

export default BossStaff;