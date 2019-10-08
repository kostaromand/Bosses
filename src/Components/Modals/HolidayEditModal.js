import React from 'react'
import HolidayEditModalForm from './HolidayEditModalForm'

const HolidayEditModal = ({ onSubmit, holiday }) => {
    console.log(holiday)
    return (
        <>
            <div className="boss-modal-window__header">Edit Holiday</div>
            <div className="boss-modal-window__content">
                <HolidayEditModalForm onSubmit={onSubmit} holiday={holiday} />
            </div>
        </>
    )
}

export default HolidayEditModal
