import React from 'react'
import ModalData from './ModalData.js'

const Modal = ({modal, index}) => {
    return (
        <div className={modal ? 'modal visible' : "modal invisible"}>
                <div className="modal__info">
                    <h2>{ModalData[index].name}</h2>
                    <h2>{ModalData[index].age}</h2>
                </div>
        </div>
    )
}

export default Modal
