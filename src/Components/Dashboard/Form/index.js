import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import FormInput from './FormInput';
import Select from './Select';

const onSubmit = (value) => {
    alert(JSON.stringify(value));
}

const FinalForm = () => (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) =>
            <form onSubmit={handleSubmit} className="boss-form">
                <div className="boss-form__row boss-form__row_position_last">
                    <div className="boss-form__group boss-form__group_layout_half">
                        <Field
                            name="name"
                            labelText="Name"
                            component={FormInput}>
                        </Field>
                        <Field
                            name="email"
                            labelText="Email"
                            component={FormInput}>
                        </Field>
                        <Field
                            name="status"
                            options = {["One","Two"]}
                            labelText="Status"
                            component={Select}>
                        </Field>
                    </div>
                    <div className="boss-form__group boss-form__group_layout_half">
                    </div>
                </div>
            </form>
        }
    />
)

export default FinalForm;