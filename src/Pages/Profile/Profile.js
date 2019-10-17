import React from 'react'
import ProfileDashboard from './ProfileDashboard'
import ProfilePage from './ProfilePage'
import HolidaysPage from './HolidaysPage'
import { Route, Switch } from 'react-router-dom'
import { getHolidayInEdit, getOpenedModalName } from '../../redux/selectors'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import { closeModal } from '../../redux/reducers/modalWindows/actions'
import { bindActionCreators } from 'redux'
import { HolidayModal, EditAvatarModal, Modal } from '../../Components/Modals'
import { EDIT_MODAL, ADD_MODAL, EDIT_AVATAR_MODAL } from '../../constants'
import { fetchHolidays } from '../../redux/reducers/holidays/actions'
import { fetchProfileData } from '../../redux/reducers/profileData/actions'
import MainLayout from '../../layouts/MainLayout'
import ProfilePageContainer from './ProfilePage/ProfilePageContainer'

class Profile extends React.Component {
    componentDidMount = () => {
        const { fetchHolidays, fetchProfileData } = this.props;
        const id = this.props.match.params.id;
        fetchHolidays();
        fetchProfileData(id);
    }

    getModalContext = () => {
        const {
            openedModalName,
            holidayInEdit
        } = this.props

        switch (openedModalName) {
            case EDIT_MODAL:
                return (
                    <Modal headerText="Edit Holiday">
                        <HolidayModal
                            onSubmit={this.onHolidayChange}
                            holiday={holidayInEdit}
                            buttonText="Update"
                        />
                    </Modal>
                )
            case ADD_MODAL:
                return (
                    <Modal headerText="Add Holiday">
                        <HolidayModal
                            onSubmit={this.onHolidayAdd}
                            buttonText="Add"
                        />
                    </Modal>
                )
            case EDIT_AVATAR_MODAL:
                return (
                    <Modal headerText="Edit Avatar">
                        <EditAvatarModal
                            headerText="Edit Avatar"
                            onSubmit={(value) => { console.log(value) }}
                        />
                    </Modal>
                )
            default:
                return (
                    <Modal>
                        Default modal
                    </Modal>
                )
        }
    }

    onHolidayChange = (holiday) => {
        this.props.closeModal()
        console.log(holiday)
    }

    onHolidayAdd = (holiday) => {
        this.props.closeModal()
        console.log(holiday)
    }

    render = () => {
        const {
            closeModal,
            openedModalName,
        } = this.props
        return (
            <>
                <ReactModal
                    ariaHideApp={false}
                    isOpen={openedModalName !== null}
                    onRequestClose={closeModal}
                    className="boss-modal-window boss-modal-window_role_edit"
                >
                    {this.getModalContext()}
                </ReactModal>
                <MainLayout
                    Dashboard={ProfileDashboard}
                    Content={() => (
                        <Switch>
                            <Route path="/profile/:id" component={ProfilePageContainer} />
                            <Route path="/profile/holidays" component={HolidaysPage} />
                        </Switch>
                    )}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        holidayInEdit: getHolidayInEdit(state),
        openedModalName: getOpenedModalName(state)
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            closeModal,
            fetchHolidays,
            fetchProfileData,
        },
        dispatch
    )
)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);