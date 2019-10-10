import React from 'react'
import { Form, Field } from 'react-final-form'
import Label from '../Form/Label'
import DatePicker from '../Form/DatePicker'
import FormSelect from '../Form/FormSelect'
import FormField from '../Form/FormField'
import Textarea from '../Form/UI/Textarea'
import Button from '../Form/UI/Button'

const options = [
    { label: "Unpaid Holiday", value: "unpaidHoliday" },
    { label: "Paid Holiday", value: "paidHoliday" }
]

const HolidayModal = ({ onSubmit, holiday, buttonText }) => {
    const { dates, type, note } = holiday;

    return (
        <div className="boss-modal-window__form">
            <Form onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="boss-form">
                        <div className="boss-form__row">
                            <FormField classes="boss-form__field_layout_max">
                                <Label labelText="Date" />
                                <Field
                                    initialValue={dates}
                                    name="datePicker"
                                    type="select"
                                    component={DatePicker}
                                />
                            </FormField>
                            <FormField classes="boss-form__field_layout_third">
                                <Field
                                    name="holidayType"
                                    type="select"
                                    options={options}
                                    labelText="Holiday Type"
                                    initialValue={type}
                                    component={FormSelect}
                                />
                            </FormField>
                        </div>
                        <FormField>
                            <Label labelText="Note" />
                            <Field
                                name="note"
                                type="textarea"
                                initialValue={note}
                                component={Textarea}
                            />
                        </FormField>
                        <FormField>
                            <Field
                                name="submit"
                                text={buttonText}
                                component={Button}
                            />
                        </FormField>
                    </form>
                )}
            />
        </div>
    )
}

HolidayModal.defaultProps = {
    holiday: {
        dates: null,
        note: "",
        type: "Unpaid Holiday"
    }
}

export default HolidayModal
