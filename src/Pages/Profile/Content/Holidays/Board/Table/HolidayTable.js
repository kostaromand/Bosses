import React from 'react'
import HolidayRow from './HolidayRow';
import { Table, Row, CellHeader } from '../../../../../../Components/Table'
import { getHolidays } from '../../../../../../redux/selectors'
import { connect } from 'react-redux'
import { openModal } from '../../../../../../redux/reducers/modalWindows/actions'
import { setHolidayInEdit, deleteHoliday } from '../../../../../../redux/reducers/holidays/actions'
import { bindActionCreators } from 'redux'
import { EDIT_MODAL } from '../../../../../../constants'

const columnHeaders = ["Types", "Status", "Dates", "Note", "Created", "Payslip Date", ""];
class HolidayTable extends React.Component {
    onHolidayEdit = (id) => {
        const { openModal, setHolidayInEdit } = this.props;
        openModal(EDIT_MODAL);
        setHolidayInEdit(id);
    }
    render = () => {
        const { holidaysData, deleteHoliday } = this.props;
        return (
            <div className="boss-board__manager-table">
                <Table classes="boss-table_page_smp-holiday-requests">
                    <Row>
                        {
                            columnHeaders.map(header => (
                                <CellHeader key={header} classes="boss-table__cell_role_header">
                                    {header}
                                </CellHeader>
                            ))
                        }
                    </Row>
                    {
                        holidaysData.map((holiday, id) => (
                            <HolidayRow
                                key={holiday.id}
                                holiday={holiday}
                                onEdit={() => this.onHolidayEdit(holiday.id)}
                                onDelete={() => { deleteHoliday(holiday.id) }}
                            />
                        ))
                    }
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        holidaysData: getHolidays(state)
    }
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            openModal,
            setHolidayInEdit,
            deleteHoliday
        },
        dispatch
    )
)
export default connect(mapStateToProps, mapDispatchToProps)(HolidayTable);
