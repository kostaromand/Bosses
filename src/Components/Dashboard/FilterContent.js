import React, { Component } from 'react'
import Form from "./Form"

export default function DashboardFilterContent({ opened }) {
    const contentClasses = "boss-dropdown__content" + (opened ? " boss-dropdown__content_state_opened" : "")
    const contentStyle = opened ? { display: "block" } : { display: "none" };
    return (
        <div className={contentClasses} style={contentStyle}>
            <div className="boss-dropdown__content-inner">
            <Form/>
            </div>
        </div>
    )
}
