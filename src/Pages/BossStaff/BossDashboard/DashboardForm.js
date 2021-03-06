import React from 'react'
import { Form, Field } from 'react-final-form'
import { FormInput, FormSelect, FormField } from '../../../Components/Form/Components';
import { Button } from "../../../Components/Form/UI"
import DashboardLabelGroup from './DashboardLabelGroup';

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
                            <Field
                                name="master-venue"
                                labelText="Venue"
                                initialValue="true"
                                type="checkbox"
                                checkBoxText="Master venue only"
                                component={DashboardLabelGroup}
                            />
                            <Field
                                name="venue"
                                options={options}
                                type="select"
                                placeholder="Any"
                                component={FormSelect}
                                style={{ marginTop: "-12px" }}
                            >

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