import React from 'react'
import styles from './AmendTakeaway.module.css'
import {useState} from 'react'

const AmendTakeaway = ({takeawayClickedInCart, cart, setCart}) => {

    // quantity of current dish
    const [dishQuantity, setDishQuantity] = useState(takeawayClickedInCart.quantity)
     // name of of current dish
     const [dishName, setDishName] = useState(takeawayClickedInCart.takeaway)
     // total cost of of current dish
     const [dishTotal, setDishTotal] = useState(takeawayClickedInCart.totalCost)
       //  sinlgle price of of current dish
       const [dishPrice, setDishPrice] = useState(takeawayClickedInCart.price)


     console.log(dishName);
     console.log(dishQuantity);
     console.log(dishTotal);

 
    const increaseQuantity = (dishName, dishQuantity, dishTotal, dishPrice) => {
        setDishQuantity(dishQuantity + 1)

        setCart(prevState => {
            // Loop over cart (prevState gets whatever is already in the cart and starts to loop over it with map)
            return prevState.map((item) => {
                // find the object in Cart where 'takeaway' key (item.takeaway) is the same as takeaway passed in,
                // if so return that object with the updated quantity and totalCost which is passed in
                // otherwise just return the item with  ": item"
                return item.takeaway === dishName ? {...item, quantity: dishQuantity, totalCost: dishQuantity * dishPrice} : item
            })
        })
    }


    const decreaseQuantity = () => {
        setDishQuantity(dishQuantity - 1)
    }


    return (
        <>
            <div className={styles.open}>
                <h2>{takeawayClickedInCart.takeaway}</h2>
                <div className={styles.open}>
                    <div className={styles.quantity__buttons}>
                        <div onClick={()=>decreaseQuantity()}>-</div>
                        <div onClick={()=>increaseQuantity(dishName, dishQuantity, dishTotal, dishPrice)}>+</div>
                    </div>
                </div>
                <h2>{dishQuantity}</h2>
            </div>
        </>
    )
}

export default AmendTakeaway