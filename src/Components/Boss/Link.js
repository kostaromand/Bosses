import React from 'react'
import PropTypes from 'prop-types'

export default function Link({ children }) {
    return (
        <>
            <a href="#" className="boss-table__link">{children}</a>
        </>
    )
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}