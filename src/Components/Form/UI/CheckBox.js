import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({ input, className }) => {
    return (
        <input {...input} className = {className} type="checkbox" />
    )
}

CheckBox.propTypes = {
    input: PropTypes.shape(
        {
            type: PropTypes.string,
            onChange: PropTypes.func,
            name: PropTypes.string
        }
    ).isRequired,
    className: PropTypes.string
}

export default CheckBox;