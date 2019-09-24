import React from 'react'

export default function Label({labelText, children}) {
    return (
        <label className="boss-form__label">
            <span className="boss-form__label-text">{labelText}</span>
            {children}
        </label>
    )
}
