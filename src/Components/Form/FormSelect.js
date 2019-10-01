import React from 'react'
import FormField from './FormField'
import Label from './Label'
import ReactSelect from 'react-select'
import PropTypes from 'prop-types'

const FormSelect=({input,labelText, options, placeholder }) => {
    return (
        <FormField>
            <Label labelText={labelText}/>
            <ReactSelect {...input} options = {options} placeholder = {placeholder}/>
        </FormField>
    )
}

FormSelect.propTypes = {
    input: PropTypes.shape(
        {
            type:PropTypes.string,
            onChange:PropTypes.func,
            name:PropTypes.string
        }
    ).isRequired,
    labelText:PropTypes.string,
    options:PropTypes.array
}

export default FormSelect;