import React from 'react';
import { Form, Field } from 'react-final-form'
import { Input } from './UI'
import FormField from './FormField'
import Label from './Label'

const HeaderDropdownForm = () => {
    return (
        <Form
            onSubmit={() => { }}
            render={() =>
                (<form action="#" className="boss-form">
                    <FormField classes="boss-form__field boss-form__field_position_last">
                        <Label>
                            <Field
                                name="search"
                                type="text"
                                className="boss-form__input boss-form__input_type_narrow"
                                component={Input}
                            />
                        </Label>
                    </FormField>
                </form>
                )}
        />
    );
}

export default HeaderDropdownForm;
