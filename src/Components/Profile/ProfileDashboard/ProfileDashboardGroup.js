import React from 'react'
import ButtonsGroup from './ButtonsGroup'
import DashboardGroup from '../../Dashboard/DashboardGroup'
import UserSummary from './UserSummary/UserSummary'

const ProfileDashboardGroup = () => {
    return (
        <DashboardGroup>
            <UserSummary />
            <ButtonsGroup />
        </DashboardGroup>
    )
}

export default ProfileDashboardGroup
