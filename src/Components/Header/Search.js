import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { toggleSearch } from '../../redux/reducers/header/actions'
import { getSearchToggleState } from '../../redux/selectors'

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

const mapStateToProps = (state) => {
    return {
        searchState: getSearchToggleState(state)
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        toggleSearch
    },
        dispatch
    );


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
