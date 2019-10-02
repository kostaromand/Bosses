import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import UserSummaryContent from './UserSummaryContent'
import { connect } from "react-redux"
import { getProfileData } from '../../../../redux/selectors'

const UserSummary = ({ profileData }) => {
    const { avatar, ...content } = profileData;
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
        profileData: getProfileData(state)
    }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(UserSummary);