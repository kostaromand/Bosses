import React from 'react'
const IsleItem = ({ label, children }) => {
    return (
        <li className="boss-details__item">
            {
                label &&
                <p className="boss-details__label boss-details__label_size_small">{label}</p>
            }
            <p className="boss-details__value">
                {children}
            </p>
        </li>
    )
}

export default IsleItem
