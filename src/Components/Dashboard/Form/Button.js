import React from 'react'

export default function Button({ text }) {
    return (
        <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">
            {text}
        </button>
    )
}
