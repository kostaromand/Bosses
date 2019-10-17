import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import UserSummaryContent from './UserSummaryContent'
import { connect } from "react-redux"
import { getUserSummary } from '../../../../redux/selectors'
import { isEmpty } from "lodash";
const UserSummary = ({ userData }) => {
    if (isEmpty(userData)) {
        return <div>Loading</div>
    }
    const { avatarUrl, ...content } = userData;
    return (
        <div className="boss-page-dashboard__user-summary">
            <div className="boss-user-summary">
                <div className="boss-user-summary__side">
                    <ProfileAvatar avatar={avatarUrl} />
                </div>
                <UserSummaryContent {...content} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: getUserSummary(state)
    }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(UserSummary);