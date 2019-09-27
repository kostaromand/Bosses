import React from 'react'

export default function FormField({children, classes}) {
    return (
        <div className={`boss-form__field ${classes}`}>
            {children}
        </div>
    )
}

