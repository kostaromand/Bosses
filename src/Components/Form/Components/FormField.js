import React from 'react'
import PropTypes from 'prop-types'

const FormField = ({children, classes}) => {
    return (
        <div className={`boss-form__field ${classes}`}>
            {children}
        </div>
    )
}

FormField.propTypes = {
    classes:PropTypes.string
}

export default FormField;