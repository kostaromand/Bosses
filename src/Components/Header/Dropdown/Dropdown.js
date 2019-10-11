import React from 'react'
import DropdownContent from './DropdownContent';
import PropTypes from 'prop-types'
import HeaderDropdownForm from './HeaderDropdownForm';

const Dropdown = ({ searchState, toggleSearch }) => {
    const classes = "boss-page-header__dropdown boss-page-header__dropdown_role_search boss-page-header__dropdown_no-select "
        + (searchState ? "boss-page-header__dropdown_state_opened" : "")
    return (
        <div
            className={classes}
            data-dropdown="search"
        >
            <div>
                <div className="boss-page-header__dropdown-header">
                    <p className="boss-page-header__dropdown-label boss-page-header__dropdown-label_role_search">
                        Search
                </p>
                    <div className="boss-page-header__dropdown-filter">
                        <HeaderDropdownForm />
                    </div>
                    <a
                        href="/"
                        className="boss-page-header__dropdown-label boss-page-header__dropdown-label_role_action boss-page-header__dropdown-label_role_close boss-page-header__dropdown-label_type_icon"
                        onClick={toggleSearch}>
                        Close
                </a>
                </div>
            </div>
            <DropdownContent />
        </div>
    )
}

Dropdown.propTypes = {
    searchState: PropTypes.bool.isRequired
}

export default Dropdown;