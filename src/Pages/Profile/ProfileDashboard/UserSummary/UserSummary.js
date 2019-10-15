import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import UserSummaryContent from './UserSummaryContent'
import { connect } from "react-redux"
import { getUserData } from '../../../../redux/selectors'

const UserSummary = ({ userData }) => {
    const { avatar, ...content } = userData;
    return (
        <div className="boss-page-dashboard__user-summary">
            <div className="boss-user-summary">
                <div className="boss-user-summary__side">
                    <ProfileAvatar avatar={avatar} />
                </div>
                <UserSummaryContent content={content} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: getUserData(state)
    }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(UserSummary);