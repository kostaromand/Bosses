import React from 'react'
import getItemValueComponent from './getItemValueComponent'
const IsleItem = ({ label, value }) => {
    const ItemValueComponent = getItemValueComponent(value);
    return (
        <li className="boss-details__item">
            {
                label &&
                <p className="boss-details__label boss-details__label_size_small">{label}</p>
            }

            <ItemValueComponent />
        </li>
    )
}

export default IsleItem
