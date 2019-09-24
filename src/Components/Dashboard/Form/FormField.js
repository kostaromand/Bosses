import React from 'react'

export default function FormField({children, style}) {
    return (
        <div className={"boss-form__field " + style}>
            {children}
        </div>
    )
}

