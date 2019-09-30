import React from 'react'
import PropTypes from 'prop-types'

const Cell = ({ children, classes }) => {
    return (
        <div className={`boss-table__cell ${classes}`}>
            {children}
        </div>
    )
}

Cell.propTypes = {
    classes: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Cell


