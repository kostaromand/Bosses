import React from 'react'

const Row = ({children, classes}) => {
    return (
        <div className = {`boss-table__row ${classes}`}>
            {children}
        </div>
    )
}

export default Row
