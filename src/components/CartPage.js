import React from 'react'
import styles from './CartPage.module.css'
import {useState, useEffect} from 'react';

const CartPage = ({CartIconClicked, cart, setCart, amendOrder}) => {
    
        const [cartTotal, setCartTotal] = useState(0);

        useEffect(() => {
            console.log("does it??")
                // showing the total cost on cart page
                let totalForCart = cart.reduce((sum, item) => sum + item.totalCost, 0);
                let newTotalForCart = totalForCart.toFixed(2)
                setCartTotal(newTotalForCart);
        }, [cart])

        const removeFromCart = (takeaway) => {
            const newCart = cart.filter(cartItem => cartItem.takeaway !== takeaway);
            setCart(newCart);
        }


    return (
        <>
        <div className={styles.cart__page + ' ' + (CartIconClicked ? styles.show : styles.hide)}>
                <h2>Total Cost: £{cartTotal}</h2>
                <h2>My Orders</h2>
            <div className={styles.cart__wrapper}>
                {cart.map((cartItems, index) => {
                    return (
                        <div key={index} className={styles.takeaway__wrapper}>
                            <h3>{cartItems.takeaway}</h3>
                            <h4>Quantity: {cartItems.quantity}</h4>
                            <img onClick={() => amendOrder(cartItems.takeaway)} className={styles.takeaway__image} src={cartItems.takeawayImage} alt="takeaway dish"/>
                            <button onClick={()=>removeFromCart(cartItems.takeaway)}>remove from cart</button>
                        </div>
                    )
                 })}
           </div>
        </div>
        </>
    )
}

export default CartPage;