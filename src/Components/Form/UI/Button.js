import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text }) => {
    return (
        <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;