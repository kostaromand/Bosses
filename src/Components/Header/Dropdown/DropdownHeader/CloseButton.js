import React from 'react'
import { toggleSearch } from "../../../../redux/reducers/header/actions";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
const CloseButton = ({ toggleSearch }) => {
    return (
        <a
            href="/"
            className="boss-page-header__dropdown-label boss-page-header__dropdown-label_role_action boss-page-header__dropdown-label_role_close boss-page-header__dropdown-label_type_icon"
            onClick={toggleSearch}
        >
            Close
        </a>
    )
}
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
            toggleSearch
        },
            dispatch
        );

export default connect(null,mapDispatchToProps)(CloseButton);
