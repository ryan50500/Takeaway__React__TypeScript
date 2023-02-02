import React from 'react'
import ModalData from './ModalData.js'
import styles from './Modal.module.css'

const Modal = ({modal, index}) => {
    return (
        <div className={styles.modal + ' ' + (modal ? styles.visible : '')}>
                <div className={styles.close__modal}>
                    <div className={styles.style__modal}>
                        <div className={styles.style__modal__cross}></div>
                    </div>
                </div>
                <div className={styles.modal__info}>
                    <h2>{ModalData[index].name}</h2>
                    <h2>{ModalData[index].description}</h2>
                </div>
        </div>
    )
}

export default Modal