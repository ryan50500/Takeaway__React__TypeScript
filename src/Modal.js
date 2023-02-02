import React from 'react'

const Modal = ({modal}) => {
    return (
        <div className={modal ? 'modal visible' : "modal invisible"}>
            <h2>This will be our Modal</h2>
            <h2>This will be our Modal</h2>
            <h2>This will be our Modal</h2>
            <h2>This will be our Modal</h2>
            <h2>This will be our Modal</h2>
        </div>
    )
}

export default Modal
