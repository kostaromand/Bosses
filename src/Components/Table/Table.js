import React from 'react'

const Table = ({ children,classes }) => {
    return (
        <div className={`boss-table ${classes}`}>
            {children}
        </div>
    )
}

export default Table
