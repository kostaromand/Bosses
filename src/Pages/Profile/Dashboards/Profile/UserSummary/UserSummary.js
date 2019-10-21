import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import UserSummaryContent from './UserSummaryContent'
const UserSummary = ({ userData }) => {
    const { avatarUrl, ...content } = userData;
    return (
        <div className="boss-page-dashboard__user-summary">
            <div className="boss-user-summary">
                <div className="boss-user-summary__side">
                    <ProfileAvatar avatar={avatarUrl} />
                </div>
                <UserSummaryContent content = {content} />
            </div>
        </div>
    )
}

export default UserSummary;