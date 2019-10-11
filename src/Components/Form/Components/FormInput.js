import React from 'react'
import FormField from './FormField'
import Label from './Label'
import { Input } from '../UI'
import PropTypes from 'prop-types'

const FormInput = ({ input, labelText }) => {
    return (
        <FormField>
            <Label labelText={labelText}>
                <Input input={input} className="boss-form__input" />
            </Label>
        </FormField>
    )
}

FormInput.propTypes = {
    input: PropTypes.shape(
        {
            type: PropTypes.string,
            onChange: PropTypes.func,
            name: PropTypes.string
        }
    ).isRequired,
    labelText: PropTypes.string
}

export default FormInput;