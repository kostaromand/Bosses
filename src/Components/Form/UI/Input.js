import React from 'react'

const Input = ({input, ...rest}) => {
    return (
        <input {...input} {...rest}/>
    )
}

export default Input
