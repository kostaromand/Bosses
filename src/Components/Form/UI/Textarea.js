import React from 'react'

const Textarea = ({ input, classes }) => {
    return (
        <textarea {...input} className={`boss-form__textarea + ${classes}`} />
    )
}

export default Textarea
