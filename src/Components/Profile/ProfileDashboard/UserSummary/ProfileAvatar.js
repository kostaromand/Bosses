import React from 'react'
import { connect } from 'react-redux'
import { EDIT_AVATAR_MODAL } from '../../../../constants'
import { openModal } from '../../../../redux/reducers/modalWindows/actions'
import { bindActionCreators } from 'redux'

const ProfileAvatar = ({ avatar, openModal }) => {
    return (
        <div className="boss-user-summary__avatar">
            <div className="boss-user-summary__avatar-inner">
                <img src={avatar} alt="Trulla Collier" className="boss-user-summary__pic" />
            </div>
            <a
                href="#"
                className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit"
                onClick={() => { openModal(EDIT_AVATAR_MODAL) }}
            >
                Edit
            </a>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        openModal
    },
        dispatch
    )
)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileAvatar);
