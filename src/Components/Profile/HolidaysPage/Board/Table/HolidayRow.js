import React from 'react'
import { Row, Cell, InfoGroupCell, ActionCell } from '../../../../Table'

const statusStyles = {
    "pending": "boss-table__text_role_pending-status",
    "success": "boss-table__text_role_success-status",
    "rejected": "boss-table__text boss-table__text_role_alert-status"
}

const HolidayRow = ({ holiday, onDelete, onEdit }) => {
    const { isFrozen, type, status, dates, note, created, payslipDate, canEdit, canDelete } = holiday;
    return (
        <Row classes={isFrozen && "boss-table__row_state_frozen"}>
            <Cell labelName="Types">
                {type}
            </Cell>
            <Cell labelName="Status" textStyle={statusStyles[status.type]}>
                {status.text}
            </Cell>
            <Cell labelName="Dates">
                {dates}
            </Cell>
            <Cell labelName="Note">
                {note}
            </Cell>
            <Cell labelName="Created">
                {note}
            </Cell>
            <InfoGroupCell>
                <span className="boss-table__text-line">
                    <span className="boss-table__text-label">Requested: </span>
                    John Doe
                </span>
                <span className="boss-table__text-meta">(09:30 Mon 14/11/2016)</span>
            </InfoGroupCell>
            <Cell>
                {payslipDate}
            </Cell>
            <ActionCell>
                {
                    canEdit &&
                    <a
                        href="#"
                        onClick={onEdit}
                        className="boss-button boss-button_type_small boss-button_role_update boss-table__action"
                    >
                        Edit
                    </a>
                }
                {
                    canDelete &&
                    <a
                        href="#"
                        onClick={onDelete}
                        className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action"
                    >
                        Delete
                    </a>
                }
            </ActionCell>
        </Row>
    )
}

export default HolidayRow
