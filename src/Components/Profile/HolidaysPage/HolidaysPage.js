import React from 'react'
import HeaderButton from './HeaderButton'
import Board from './Board'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { getEditModalFlag } from '../../../redux/selectors'
import { toggleEditModal } from '../../../redux/reducers/modalWindows/actions'
import { fetchHolidaysThunk as fetchHolidays } from '../../../redux/reducers/holidays/actions'
import { getHolidayInEdit } from '../../../redux/selectors'
import { bindActionCreators } from 'redux'
import HolidayEditModal from '../../Modals/HolidayEditModal'

class HolidaysPage extends React.Component {
    componentWillMount = () => {
        const { fetchHolidays } = this.props;
        fetchHolidays();
    }

    onHolidayChange = (holiday) => {
        console.log(holiday)
    }
    render = () => {
        
        const { editModalFlag, toggleEditModal, holidayInEdit } = this.props;
        console.log(holidayInEdit)
        const isModalOpen = editModalFlag;
        return (
            <>
                <Modal
                    ariaHideApp={false}
                    isOpen={isModalOpen}
                    onRequestClose={toggleEditModal}
                    className="boss-modal-window boss-modal-window_role_edit"
                >
                    <HolidayEditModal onSubmit={this.onHolidayChange} holiday={holidayInEdit} />
                </Modal>
                <section className="boss-board">
                    <header className="boss-board__header">
                        <h2 className="boss-board__title">Holidays and holiday requests</h2>
                        <HeaderButton />
                    </header>
                    <div className="boss-board__main">
                        <Board />
                    </div>
                </section>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        editModalFlag: getEditModalFlag(state),
        holidayInEdit: getHolidayInEdit(state)
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            toggleEditModal,
            fetchHolidays
        },
        dispatch
    )
)


export default connect(mapStateToProps, mapDispatchToProps)(HolidaysPage);
