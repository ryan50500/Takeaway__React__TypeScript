import React from 'react'
import styles from './CartPage.module.css'

const CartPage = ({CartIconClicked, cart, cartTotal}) => {
    return (
        <div className={styles.cart__page + ' ' + (CartIconClicked ? styles.show : styles.hide)}>
                <h2>Total Cost:£{cartTotal}</h2>
                <h2>My Orders</h2>
            <div className={styles.cart__wrapper}>
                {cart.map((cartItems, index) => {
                    return (
                        <div key={index} className={styles.takeaway__wrapper}>
                            <h3>{cartItems.takeaway}</h3>
                            <h4>Quantity: {cartItems.quantity}</h4>
                            <img className={styles.takeaway__image} src={cartItems.takeawayImage} alt="takeaway dish"/>
                        </div>
                    )
                 })}
           </div>
        </div>
    )
}

export default CartPage;