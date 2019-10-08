import React from 'react'
import FormField from './FormField'
import Label from './Label'
import ReactSelect from 'react-select'
import PropTypes from 'prop-types'

const FormSelect = ({ input, labelText, options, placeholder, fieldClasses,style }) => {
    return (
        <FormField classes={fieldClasses}>
            <Label labelText={labelText} />
            <div className="boss-form__select" style={style}>
                <ReactSelect
                    className="Select-container"
                    classNamePrefix="Select" {...input}
                    options={options} placeholder={placeholder}
                />
            </div>
        </FormField>
    )
}

FormSelect.propTypes = {
    input: PropTypes.shape(
        {
            type: PropTypes.string,
            onChange: PropTypes.func,
            name: PropTypes.string
        }
    ).isRequired,
    labelText: PropTypes.string,
    options: PropTypes.array
}

export default FormSelect;