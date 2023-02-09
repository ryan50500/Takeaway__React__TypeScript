import React from 'react'
import ModalData from './ModalData.js'
import styles from './Modal.module.css'
import {useState} from 'react';

const Modal = ({modal, index, setModal, addToCart}) => {

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decreaseQuantity = () => {
        if (quantity === 1) {
            return;
        }
        setQuantity(quantity - 1)
    }
    const closeModal = () => {
        setModal(false)
        // when modal is closed by user, set the quantity back to 1
        setQuantity(1);
    }

    return (
        <div className={styles.modal + ' ' + (modal ? styles.visible : ' ')}>
                <div className={styles.close__modal} onClick={() => closeModal()}>
                    <div className={styles.style__modal}>
                        <div className={styles.style__modal__cross}></div>
                    </div>
                </div>
                <div className={styles.modal__info}>
                    <h2>{ModalData[index].name}</h2>
                    <h2>{ModalData[index].description}</h2>
                    <div className={styles.modal__quantity}><div className={styles.decrease__amount} onClick={()=>decreaseQuantity()}>-</div><div>{quantity}</div><div className={styles.increase__amount} onClick={()=>increaseQuantity()}>+</div></div>
                    <h3 className={styles.modal__cart} onClick={() => addToCart(ModalData[index].name, quantity, (parseFloat(ModalData[index].price) * quantity).toFixed(2) )}>Add to order<span>£{(parseFloat(ModalData[index].price) * quantity).toFixed(2)}</span></h3>
                </div>
        </div>
    )
}

export default Modal