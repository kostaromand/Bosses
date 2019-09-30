import React from 'react'
import { Form, Field } from 'react-final-form'
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormField from './FormField';
import DashboardLabelGroup from './DashboardLabelGroup';
import ReactSelect from 'react-select'
import Button from "./Button"

const onSubmit = (value) => {
    alert(JSON.stringify(value));
}
const options = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" }
]

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
                            component={FormInput} />
                        <Field
                            name="email"
                            labelText="Email"
                            component={FormInput} />
                        <Field
                            name="status"
                            options={options}

                            labelText="Status"
                            type="select"
                            placeholder="Any"
                            component={FormSelect} />
                    </div>
                    <div className="boss-form__group boss-form__group_layout_half">
                        <FormField>
                            <Field>
                                {
                                    () => (
                                        <input name="master-venue" type="checkbox" />
                                    )
                                }
                            </Field>
                            <Field
                                name="venue"
                                options={options}
                                type="select"
                                placeholder="Any"
                            >
                                {
                                    ({ input, options, placeholder }) => (
                                        <ReactSelect {...input} options={options} placeholder={placeholder} />
                                    )
                                }
                            </Field>
                        </FormField>
                        <Field
                            name="stuff-type"
                            options={options}
                            type="select"
                            labelText="Stuff type"
                            placeholder="Any"
                            component={FormSelect} />
                        <Field type="submit">
                            {
                                () => (
                                    <FormField classes="boss-form__field boss-form__field_justify_end boss-form__field_no-label">
                                        <Button text="Update" />
                                    </FormField>
                                )
                            }
                        </Field>
                    </div>
                </div>
            </form>
        }
    />
)

export default FinalForm;