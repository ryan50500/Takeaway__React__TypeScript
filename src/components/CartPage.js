import React from 'react'
import styles from './CartPage.module.css'

const CartPage = ({CartIconClicked, cart}) => {
    return (
        <div className={styles.cart__page + ' ' + (CartIconClicked ? styles.show : styles.hide)}>
        {/* <div className={CartIconClicked ? styles.show : styles.hide}> */}
                <h2 className={styles.cursive}>My Orders</h2>
                {cart.map((cartItems) => {
                    return (
                        // conditional styling - we check two things  1) the div that has 'bhaji' as the dishName value in the array (Images.map((image)) and 2) window.innerWidth is less than 600 
                        <div key={cartItems.takeaway}>
                            <h3>{cartItems.takeaway}</h3>
                            <h4>{cartItems.totalCost}</h4>
                            <img className={styles.takeaway__image} src={cartItems.takeawayImage} alt="takeaway dish"/>
                        </div>
                    )
           })}
        </div>
    )
}

export default CartPage;