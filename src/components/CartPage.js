import React from 'react'
import styles from './CartPage.module.css'
import {useState, useEffect} from 'react';
import AmendTakeaway from './AmendTakeaway';

const CartPage = ({CartIconClicked, cart, setCart}) => {
    
        const [cartTotal, setCartTotal] = useState(0);
        const [amendTakeaway, setAmendTakeaway] = useState(false);

        useEffect(() => {
                // showing the total cost on cart page
                let totalForCart = cart.reduce((sum, item) => sum + item.totalCost, 0);
                let newTotalForCart = totalForCart.toFixed(2)
                setCartTotal(newTotalForCart);
        }, [cart])

        const removeFromCart = (takeaway) => {
            const newCart = cart.filter(cartItem => cartItem.takeaway !== takeaway);
            setCart(newCart);
        }

        // Amend order of takeaway
        const amendOrder = () => {
            console.log('afaafdfsd')
            setAmendTakeaway(!amendTakeaway);
            // setCart(prevState => {
            //     // Loop over cart (prevState gets whatever is already in the cart and starts to loop over it with map)
            //     return prevState.map((item) => {
            //         // find the object in Cart where 'takeaway' key (item.takeaway) is the same as takeaway passed in,
            //         // if so return that object with the updated quantity and totalCost which is passed in
            //         // otherwise just return the item with  ": item"
            //         return item.takeaway === takeaway ? {...item, quantity: quantity, totalCost: totalCost} : item
            //     })
            // })
        }

    return (
        <>
        {amendTakeaway && <AmendTakeaway/>}
        <div className={styles.cart__page + ' ' + (CartIconClicked ? styles.show : styles.hide)}>
                <h2>Total Cost:£{cartTotal}</h2>
                <h2>My Orders</h2>
            <div className={styles.cart__wrapper}>
                {cart.map((cartItems, index) => {
                    return (
                        <div key={index} className={styles.takeaway__wrapper}>
                            <h3>{cartItems.takeaway}</h3>
                            <h4>Quantity: {cartItems.quantity}</h4>
                            <img onClick={amendOrder} className={styles.takeaway__image} src={cartItems.takeawayImage} alt="takeaway dish"/>
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