import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BossLink = ({ children, to, classes }) => {
    return (
        <Link to={to} className={`boss-table__link ${classes}`}>
            {children}
        </Link>
    )
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default BossLink;