import React from 'react'

const IsleButton = ({ role, text }) => {
    return (
        <button className={`boss-button boss-button_type_small ${role}`}>
            {text}
        </button>
    )
}

export default IsleButton
