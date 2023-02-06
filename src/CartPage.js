import React from 'react'
import styles from './CartPage.module.css'
import {useState} from 'react';

const CartPage = ({CartIconClicked}) => {
    return (
        <div className={CartIconClicked ? styles.show : styles.hide}>
                <h2> this is cart page</h2>
        </div>
    )
}

export default CartPage;