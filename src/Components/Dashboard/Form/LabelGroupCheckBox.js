import React from 'react'
import CheckBox from './CheckBox'

export default function LabelGroupCheckBox({ labelText,checkBoxText,checkBoxName }) {
    return (
        <div class="boss-form__label-group">
            <p class="boss-form__label">
                <span class="boss-form__label-text">
                </span>
            </p>
            <label class="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
                <CheckBox/>
                <span class="boss-form__checkbox-label-text"></span>
            </label>
        </div>
    )
}
