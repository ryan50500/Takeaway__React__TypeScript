import React from 'react'
import styles from './AmendTakeaway.module.css'

const AmendTakeaway = ({takeawayClickedInCart}) => {
    // console.log(amendOrder)
    console.log(takeawayClickedInCart)
    return (
        <>
            <div className={styles.open}>
                <h2>{takeawayClickedInCart.takeaway}</h2>
                <h2>{takeawayClickedInCart.quantity}</h2>
            </div>
        </>
    )
}

export default AmendTakeaway
