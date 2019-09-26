import React from 'react'

export default function CheckBox({input,checked}) {
    return (
        <input {...input} value="true" type="checkbox" className="boss-form__checkbox-input" checked={checked} />
    )
}
