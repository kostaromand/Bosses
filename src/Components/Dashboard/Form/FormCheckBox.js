import React from 'react'
import CheckBox from './CheckBox'

export default function FormCheckBox({input,labelText,checkBoxText }) {
    return (
        <div className="boss-form__label-group">
            <p className="boss-form__label">
                <span className="boss-form__label-text">
                    {labelText}
                </span>
            </p>
            <label className="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
                <CheckBox input={input} checked/>
                <span className="boss-form__checkbox-label-text">
                    {checkBoxText}
                </span>
            </label>
        </div>
    )
}
