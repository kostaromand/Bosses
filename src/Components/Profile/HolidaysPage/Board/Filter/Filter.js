import React from 'react'
import { Form, Field } from 'react-final-form'
import FormSelect from '../../../../Form/FormSelect';

const onSubmit = (value) => {
    alert(JSON.stringify(value));
}

const options = [
    "One",
    "Two"
]

const Filter = () => {
    return (
        <div className="boss-board__manager-filter">
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="boss-form__group boss-form__group_position_last">
                            <h3 className="boss-form__group-title">Filter</h3>
                            <div
                                className="boss-form__row boss-form__row_align_center boss-form__row_desktop boss-form__row_position_last"
                            >
                                <Field name="quarter" type="checkbox">
                                    {() => (
                                        <FormSelect
                                            options={options}
                                            fieldClasses="boss-form__field_layout_quarter"
                                            labelText="Type"
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default Filter
