import React from 'react'

const HeaderButton = ({onClick}) => {
    return (
        <div className="boss-board__button-group">
            <p onClick={onClick} className="boss-button boss-button_role_add">Add Holiday</p>
        </div>
    )
}

export default HeaderButton
