import React from 'react'
import PropTypes from 'prop-types'

export default function FormField({children, classes}) {
    return (
        <div className={`boss-form__field ${classes}`}>
            {children}
        </div>
    )
}

FormField.propTypes = {
    classes:PropTypes.string
}


