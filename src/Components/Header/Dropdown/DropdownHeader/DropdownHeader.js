import React from 'react'
import HeaderDropdownForm from '../../../Form/HeaderDropdownForm'
import CloseButton from './CloseButton'

const DropdownHeader = () => {
    return (
        <div>
            <div className="boss-page-header__dropdown-header">
                <p className="boss-page-header__dropdown-label boss-page-header__dropdown-label_role_search">
                    Search
                </p>
                <div className="boss-page-header__dropdown-filter">
                    <HeaderDropdownForm />
                </div>
                <CloseButton />
            </div>
        </div>
    )
}

export default DropdownHeader;

