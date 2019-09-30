import React from 'react'
import PropTypes from 'prop-types'

const Input = ({input, className}) => {
    return (
        <input {...input} className = {className}/>
    )
}

Input.propTypes = {
    input: PropTypes.shape(
        {
            type:PropTypes.string,
            onChange:PropTypes.func,
            name:PropTypes.string
        }
    ).isRequired,
    className:PropTypes.string
}

export default Input
