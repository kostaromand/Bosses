import React from 'react'
import { Link } from 'react-router-dom'

const ButtonsGroup = () => {
    return (
        <div className="boss-page-dashboard__buttons-group">
            <Link to="#" className="boss-button boss-button_role_edit boss-page-dashboard__button">Edit Profile</Link>
            <Link to="#" className="boss-button boss-button_role_block boss-page-dashboard__button">Disable Staff Member</Link>
        </div>
    )
}

export default ButtonsGroup
