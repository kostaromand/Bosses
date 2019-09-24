import React from 'react'

export default function CheckBox({name,checked}) {
    return (
        <input name={name} value="true" type="checkbox" className="boss-form__checkbox-input" checked={checked} />
    )
}
