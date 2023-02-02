import React from 'react'
import ModalData from './ModalData.js'

const Modal = ({modal, index}) => {
    return (
        <div className={modal ? 'modal visible' : "modal invisible"}>
                <div className="close__modal">
                    <div className="style__modal">
                        <div className="style__modal__cross"></div>
                    </div>
                </div>
                <div className="modal__info">
                    <h2>{ModalData[index].name}</h2>
                    <h2>{ModalData[index].description}</h2>
                </div>
        </div>
    )
}

export default Modal
