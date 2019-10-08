import React from 'react'
import Main from '../Main'
import BossDashboard from './BossDashboard/BossDashboard'
import BossTable from './BossTable'

const BossStaff = () => {
    return (
        <Main
            dashboard={BossDashboard}
            content={BossTable}
        />
    )
}

export default BossStaff
