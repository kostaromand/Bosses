import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children }) => {
    return (
        <a href="/" className="boss-table__link">
            {children}
        </a>
    )
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Link;