import React from 'react'
import Main from '../Main'
import BossDashboard from './BossDashboard/BossDashboard'
import BossTable from './BossTable'

const BossStaff = () => {
    return (
        <Main
            Dashboard={BossDashboard}
            Content={() => <BossTable />}
        />
    )
}

export default BossStaff;