import React from 'react'
import FormField from './FormField'
import Label from './Label'
import ReactSelect from 'react-select'

export default function FormSelect({input,labelText, options, placeholder }) {
    return (
        <FormField>
            <Label labelText={labelText}/>
            <ReactSelect {...input} options = {options} placeholder = {placeholder}/>
        </FormField>
    )
}
