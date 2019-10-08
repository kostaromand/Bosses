import React from 'react'
import PropTypes from 'prop-types'

const CellHeader = ({ children, classes }) => {
    return (
        <div className={`boss-table__cell ${classes}`}>
            {children}
        </div>
    )
}

CellHeader.propTypes = {
    classes: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default CellHeader;
