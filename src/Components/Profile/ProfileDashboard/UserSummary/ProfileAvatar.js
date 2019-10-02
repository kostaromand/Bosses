import React from 'react'

const ProfileAvatar = ({avatar}) => {
    return (
        <div className="boss-user-summary__avatar">
            <div className="boss-user-summary__avatar-inner">
                <img src={avatar} alt="Trulla Collier" className="boss-user-summary__pic" />
            </div>
            <a href="/" className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit">
                Edit
            </a>
        </div>
    )
}

export default ProfileAvatar
