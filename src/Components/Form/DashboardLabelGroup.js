import React from 'react'
import { CheckBox } from './UI'

export default function DashboardLabelGroup({ input, labelText, checkBoxText }) {
    return (
        <div className="boss-form__label-group">
            <p className="boss-form__label">
                <span className="boss-form__label-text">
                    {labelText}
                </span>
            </p>
            <label className="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
                <CheckBox input={input} className = "boss-form__checkbox-input"/>
                <span className="boss-form__checkbox-label-text">
                    {checkBoxText}
                </span>
            </label>
        </div>
    )
}
