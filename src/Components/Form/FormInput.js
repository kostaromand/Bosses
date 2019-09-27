import React from 'react'
import FormField from './FormField'
import Label from './Label'
import { Input } from './UI'

export default function FormInput({ input, labelText }) {
    return (
        <FormField>
            <Label labelText={labelText}>
                <Input input = {input} className = "boss-form__input"/>
            </Label>
        </FormField>
    )
}   
