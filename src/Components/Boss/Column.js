import React from 'react'

export default function Column({ children, labelName }) {
    return (
        <div className="boss-table__cell">
            <div className="boss-table__info">
                <p className="boss-table__label">{labelName}</p>
                <p className="boss-table__text">
                    {children}
                </p>
            </div>
        </div>
    )
}
