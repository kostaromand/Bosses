import React from 'react'
import PropTypes from 'prop-types'

export default function CheckBox({input,...rest}) {
    return (
        <input {...input} {...rest} type="checkbox"/>
    )
}

CheckBox.propTypes = {
    input: PropTypes.shape(
        {
            type:PropTypes.string,
            onChange:PropTypes.func,
            name:PropTypes.string
        }
    ).isRequired,
    rest:PropTypes.object
}

