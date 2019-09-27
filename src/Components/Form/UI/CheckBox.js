import React from 'react'

export default function CheckBox({input,...rest}) {
    return (
        <input {...input} {...rest} type="checkbox" />
    )
}
