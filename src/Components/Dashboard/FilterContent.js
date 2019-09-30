import React from 'react'
import DashboardForm from "../Form/DashboardForm"
import PropTypes from 'prop-types'

export default function DashboardFilterContent({ opened }) {
    const contentClasses = "boss-dropdown__content" + (opened ? " boss-dropdown__content_state_opened" : "")
    const contentStyle = opened ? { display: "block" } : { display: "none" };
    return (
        <div className={contentClasses} style={contentStyle}>
            <div className="boss-dropdown__content-inner">
            <DashboardForm/>
            </div>
        </div>
    )
}

DashboardFilterContent.propTypes = {
    opened: PropTypes.bool.isRequired
}
