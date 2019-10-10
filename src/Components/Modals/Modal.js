import React from 'react'

const Modal = ({ headerText, children }) => {
    return (
        <>
            <div className="boss-modal-window__header">{headerText}</div>
            <div className="boss-modal-window__content">
                {children}
            </div>
        </>
    )
}

export default Modal
