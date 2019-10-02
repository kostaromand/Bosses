import React from 'react'
import { Link } from 'react-router-dom'

const Tab = ({ name, isActive, role, isSource, onClick }) => {
    return (
        <Link
            onClick={onClick}
            to={isSource ? "/profile" : `/profile/${name}`}
            className={`boss-button boss-button_type_small boss-page-dashboard__switch ${role} ${isActive && "boss-button_state_active"}`}>
            {name}
        </Link>

    )
}

export default Tab
