import React from 'react'
import { Link } from 'react-router-dom'
const Tab = ({ tab, isActive, onClick, memberId }) => {
    const {
        name,
        role,
        isSource
    } = tab;
    return (
        <Link
            onClick={onClick}
            to={`/profile/${memberId}/${!isSource ? name : ""}`}
            className={`boss-button boss-button_type_small boss-page-dashboard__switch ${role} ${isActive && "boss-button_state_active"}`}>
            {name}
        </Link>

    )
}

export default Tab
