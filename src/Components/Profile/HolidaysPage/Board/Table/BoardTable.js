import React from 'react'
import { Table, Row, Column } from '../../../../Table'
import { holidaysData } from '../../../../../data'
import HolidayRow from './HolidayRow';

const columnHeaders = ["Types", "Status", "Dates", "Note", "Created", "Payslip Date"];

const BoardTable = () => {
    return (
        <div className="boss-board__manager-table">
            <Table classes="boss-table_page_smp-holiday-requests">
                <Row classes=" boss-table_page_smp-holiday-requests">
                    {
                        columnHeaders.map(header => (
                            <Column key={header} classes="boss-table__cell_role_header">
                                {header}
                            </Column>
                        ))
                    }
                </Row>
                {
                    holidaysData.map((holiday, id) => (
                        <HolidayRow
                            key={id}
                            holiday={holiday}
                            onEdit = {()=>{}}
                            onDelete = {()=>{}}
                        />
                    ))
                }
            </Table>
        </div>
    )
}

export default BoardTable
