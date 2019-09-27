import React from 'react'
import { connect } from "react-redux";
import { getSearchToggleState } from '../../../redux/selectors'
import DropdownHeader from './DropdownHeader';
import DropdownContent from './DropdownContent';

const Dropdown = ({ searchState }) => {
    const classes = "boss-page-header__dropdown boss-page-header__dropdown_role_search boss-page-header__dropdown_no-select "
        + (searchState ? "boss-page-header__dropdown_state_opened" : "")
    return (
        <div
            className={classes}
            data-dropdown="search"
        >
            <DropdownHeader />
            <DropdownContent/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchState: getSearchToggleState(state)
    }
}

export default connect(mapStateToProps)(Dropdown)
