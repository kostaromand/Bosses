import React from 'react'

const Cell = ({ children, classes }) => {
    return (
        <div className={`boss-table__cell ${classes}`}>
            {children}
        </div>
    )
}

export default Cell
