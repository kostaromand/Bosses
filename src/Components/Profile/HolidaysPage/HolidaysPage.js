import React from 'react'
import HeaderButton from './HeaderButton'
import Board from './Board'
import { connect } from 'react-redux'
import { openModal } from '../../../redux/reducers/modalWindows/actions'
import { bindActionCreators } from 'redux'
import { ADD_MODAL } from '../../../constants'

const HolidaysPage = ({ openModal }) => {
    return (
        <section className="boss-board">
            <header className="boss-board__header">
                <h2 className="boss-board__title">Holidays and holiday requests</h2>
                <HeaderButton onClick={() => { openModal(ADD_MODAL) }} />
            </header>
            <div className="boss-board__main">
                <Board />
            </div>
        </section>
    )
}

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            openModal
        },
        dispatch
    )
)

export default connect(mapStateToProps, mapDispatchToProps)(HolidaysPage);
