import React from 'react'
import PropTypes from 'prop-types'

const Input = ({input, ...rest}) => {
    return (
        <input {...input} {...rest}/>
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
    rest:PropTypes.object
}

export default Input
