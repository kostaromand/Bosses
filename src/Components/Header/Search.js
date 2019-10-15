import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({ searchState, toggleSearch }) => {
    const classes = "boss-page-header__action boss-page-header__action_role_search " +
        (searchState ? "boss-page-header__action_state_active" : "")
    return (
        <Link to="#"
            onClick={toggleSearch}
            className={classes}
            data-dropdown="search"
        >
            Search
        </Link>
    )
}

export default Search;