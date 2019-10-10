import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, input }) => {
    return (
        <button {...input} className="boss-button boss-form__submit boss-form__submit_adjust_single">
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;