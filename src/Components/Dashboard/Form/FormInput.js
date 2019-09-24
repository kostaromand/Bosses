import React from 'react'
import FormField from './FormField'
import Label from './Label'

export default function FormInput({ input, labelText }) {
    return (
        <FormField>
            <Label labelText={labelText}>
                <input {...input} type="text" className="boss-form__input" />
            </Label>
        </FormField>
    )
}
