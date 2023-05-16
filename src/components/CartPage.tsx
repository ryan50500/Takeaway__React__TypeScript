import React from 'react'
import styles from './CartPage.module.css'
import { useState, useEffect } from 'react';

interface CartPageInterface {
    CartIconClicked: boolean;
    cart: any;
    setCart: any;
    amendOrder: (takeawayClicked: string) => void;
}


const CartPage = ({ CartIconClicked, cart, setCart, amendOrder }: CartPageInterface) => {

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        // showing the total cost on cart page
        let totalForCart = cart.reduce((sum: number, item: any) => sum + item.totalCost, 0);
        let newTotalForCart = totalForCart.toFixed(2)
        setCartTotal(newTotalForCart);
    }, [cart])

    const removeFromCart = (takeaway: string) => {
        const newCart = cart.filter((cartItem: any) => cartItem.takeaway !== takeaway);
        setCart(newCart);
    }

    return (
        <>
            <div className={styles.cart__page}>
                <h2>Total Cost: £{cartTotal}</h2>
                <div className={styles.cart__wrapper}>
                    {cart.length === 0 && <div className={styles.cart__empty}>Cart is empty</div>}
                    {cart.map((cartItems: any, index: number) => {
                        return (
                            <div key={index} className={styles.takeaway__wrapper}>
                                <h3>{cartItems.takeaway}</h3>
                                <h4>Quantity: {cartItems.quantity}</h4>
                                <img onClick={() => amendOrder(cartItems.takeaway)} className={styles.takeaway__image} src={cartItems.takeawayImage} alt="takeaway dish" />
                                <button className={styles.remove__cart} onClick={() => removeFromCart(cartItems.takeaway)}>remove from cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CartPage;