import React from 'react'

const Search = ({ searchState, toggleSearch }) => {
    const classes = "boss-page-header__action boss-page-header__action_role_search " +
        (searchState ? "boss-page-header__action_state_active" : "")
    return (
        <a href="#"
            onClick={toggleSearch}
            className={classes}
            data-dropdown="search"
        >
            Search
        </a>
    )
}

export default Search;