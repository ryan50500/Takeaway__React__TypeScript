import React from 'react'
import styles from './CartPage.module.css'
import {useState} from 'react';

const CartPage = ({CartIconClicked, cart}) => {
    return (
        <div className={CartIconClicked ? styles.show : styles.hide}>
                <h2> this is cart page</h2>
                {/* {cart.map((cartItems) => {
                    return (
                        // conditional styling - we check two things  1) the div that has 'bhaji' as the dishName value in the array (Images.map((image)) and 2) window.innerWidth is less than 600 
                        <div key={image.id} className={styles.holder} id={image.dishName} style={image.dishName === 'bhaji' && window.innerWidth < 600 ? {flexBasis: '100%', maxWidth: '100%'} : null} onClick={()=>handleClick(image.id)}>
                            <h3 className={styles.dish__name}>{image.dishName}</h3>
                            <img src={image.image} alt="takeaway dish"/>
                        </div>
                    )
           })} */}
        </div>
    )
}

export default CartPage;