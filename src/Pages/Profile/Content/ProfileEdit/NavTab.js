import React from 'react'
import { Link } from 'react-router-dom'

const NavTab = ({ isActive, tab }) => {
    const { form, text } = tab;
    return (
        <Link
            to={form}
            className={`boss-content-switcher__nav-link ${isActive && "boss-content-switcher__nav-link_state_active"}`}
        >
            {text}
        </Link >
    )
}

export default NavTab
