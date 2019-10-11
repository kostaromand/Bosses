import React from 'react'
import { CheckBox } from '../../Form/UI'
import PropTypes from 'prop-types'

const DashboardLabelGroup = ({ input, labelText, checkBoxText }) => {
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

DashboardLabelGroup.propTypes = {
    input: PropTypes.shape(
        {
            type:PropTypes.string,
            onChange:PropTypes.func,
            name:PropTypes.string
        }
    ).isRequired,
    labelText:PropTypes.string,
    checkBoxText:PropTypes.string
}

export default DashboardLabelGroup;