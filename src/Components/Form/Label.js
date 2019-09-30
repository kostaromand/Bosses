import React from 'react'
import PropTypes from 'prop-types'

export default function Label({labelText, children}) {
    return (
        <label className="boss-form__label">
            <span className="boss-form__label-text">{labelText}</span>
            {children}
        </label>
    )
}

Label.propTypes = {
    labelText: PropTypes.string
}

