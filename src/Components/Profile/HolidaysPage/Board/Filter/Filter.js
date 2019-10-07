import React from 'react'
import { Form, Field } from 'react-final-form'
import FormSelect from '../../../../Form/FormSelect';
import DatePicker from './DatePicker';
import FilterButton from './FilterButton';
const onSubmit = (value) => {
    alert(JSON.stringify(value));
}

const options = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" }
]

const Filter = () => {
    return (
        <div className="boss-board__manager-filter">
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="boss-form">
                        <div className="boss-form__group boss-form__group_position_last">
                            <h3 className="boss-form__group-title">Filter</h3>
                            <div
                                className="boss-form__row boss-form__row_align_center boss-form__row_desktop boss-form__row_position_last"
                            >
                                <Field name="quarter" type="select">
                                    {({ input }) => (
                                        <FormSelect
                                            options={options}
                                            fieldClasses="boss-form__field_layout_quarter"
                                            labelText="Type"
                                            placeholder="Any"
                                            input={input}
                                        />
                                    )}
                                </Field>
                                <div className="boss-form__field boss-form__field_layout_max boss-form__field_no-label">
                                    <Field
                                        name="dateRange"
                                        type="select"
                                        component={DatePicker}
                                    />
                                </div>

                                <div className="boss-form__field boss-form__field_layout_min boss-form__field_no-label">
                                    <Field
                                        type="submit"
                                        name="update"
                                        component={FilterButton}
                                    >
                                        {
                                            ({ input }) => (
                                                <FilterButton text="Update" {...input} />
                                            )
                                        }
                                    </Field>
                                </div>
                            </div>

                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default Filter
