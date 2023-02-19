import React from 'react'
import styles from './AmendTakeaway.module.css'

const AmendTakeaway = ({takeawayClickedInCart, cart, setCart}) => {
    // console.log(amendOrder)
    console.log(takeawayClickedInCart);

    const increaseQuantity = () => {
        // setQuantity(quantity + 1)
        console.log('INCREASE')
        
    }
    const decreaseQuantity = () => {
        // if (quantity === 1) {
        //     return;
        // }
        // setQuantity(quantity - 1)
    }


    return (
        <>
            <div className={styles.open}>
                <h2>{takeawayClickedInCart.takeaway}</h2>
                <div className={styles.open}>
                    <div className={styles.quantity__buttons}>
                        <div onClick={()=>decreaseQuantity()}>-</div>
                        <div onClick={()=>increaseQuantity()}>+</div>
                    </div>
                </div>
                <h2>{takeawayClickedInCart.quantity}</h2>
            </div>
        </>
    )
}

export default AmendTakeaway
