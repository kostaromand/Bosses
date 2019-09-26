import React from 'react'

export default function FormField({children, style}) {
    return (
        <div className={style || "boss-form__field"}>
            {children}
        </div>
    )
}

