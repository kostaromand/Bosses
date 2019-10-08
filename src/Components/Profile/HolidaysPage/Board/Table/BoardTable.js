import React from 'react'
import HolidayRow from './HolidayRow';
import { Table, Row, CellHeader } from '../../../../Table'
import { getHolidays } from '../../../../../redux/selectors'
import { connect } from 'react-redux'
import { toggleEditModal } from '../../../../../redux/reducers/modalWindows/actions'
import { setHolidayInEdit } from '../../../../../redux/reducers/holidays/actions'
import { bindActionCreators } from 'redux'

const columnHeaders = ["Types", "Status", "Dates", "Note", "Created", "Payslip Date", ""];
class BoardTable extends React.Component {

    onHolidayEdit = (id) => {
        const { toggleEditModal, setHolidayInEdit } = this.props;
        toggleEditModal();
        setHolidayInEdit(id);
    }
    render = () => {
        const { holidaysData } = this.props;
        return (
            <div className="boss-board__manager-table">
                <Table classes="boss-table_page_smp-holiday-requests">
                    <Row classes=" boss-table_page_smp-holiday-requests">
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
                                key={id}
                                holiday={holiday}
                                onEdit={()=>this.onHolidayEdit(holiday.id)}
                                onDelete={() => { }}
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
            toggleEditModal,
            setHolidayInEdit
        },
        dispatch
    )
)
export default connect(mapStateToProps, mapDispatchToProps)(BoardTable);
