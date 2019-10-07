import React from 'react'

const FilterButton = ({ input, text }) => {
    return (
        <button className="boss-button boss-form__submit" {...input}>
            {text}
        </button>
    )
}

export default FilterButton
