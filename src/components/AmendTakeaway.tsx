import React from 'react'
import styles from './AmendTakeaway.module.css'
import {useState, useEffect} from 'react'

interface AmendTakeawayInt {
    takeawayClickedInCart: any;
    cart: [];
    setCart: any;
    amendTakeaway: boolean;
    setAmendTakeaway: (amendTakeaway: boolean) => void;
}
// setCartIconClicked: (CartIconClicked: boolean) => void;

const AmendTakeaway = ({takeawayClickedInCart, cart, setCart, amendTakeaway, setAmendTakeaway}:AmendTakeawayInt) => {

    // quantity of current dish
    const [dishQuantity, setDishQuantity] = useState(takeawayClickedInCart.quantity)
     // name of of current dish
    const [dishName, setDishName] = useState(takeawayClickedInCart.takeaway);
     // total cost of of current dish
    const [dishTotal, setDishTotal] = useState(takeawayClickedInCart.totalCost)
     //  sinlgle price of of current dish
    const [dishPrice, setDishPrice] = useState(takeawayClickedInCart.price)


     console.log(dishName);
     console.log(dishQuantity);
     console.log(dishTotal);


     const increaseQuantity = () => {
        setDishQuantity(dishQuantity + 1)
    }

     useEffect(() => {
        amendQuantity(dishName, dishQuantity, dishTotal, dishPrice);
    }, [dishQuantity])
     

    const amendQuantity = (dishName: string, dishQuantity: number, dishTotal: number, dishPrice: number) => {
        // somehow we need to wait for setDishQuantity state to update before running
        // setCart(prevState => { below

        setCart((prevState:any) => {
            // Loop over cart (prevState gets whatever is already in the cart and starts to loop over it with map)
            return prevState.map((item: any) => {
                // find the object in Cart where 'takeaway' key (item.takeaway) is the same as takeaway passed in,
                // if so return that object with the updated quantity and totalCost which is passed in
                // otherwise just return the item with  ": item"
                return item.takeaway === dishName ? {...item, quantity: dishQuantity, totalCost: dishQuantity * dishPrice} : item
            })
        })
    }


    const decreaseQuantity = () => {
        if (dishQuantity === 1) {
            return;
        }
        setDishQuantity(dishQuantity - 1)
    }


    return (
        <>
            <div className={styles.open}>
                {/* modal cross */}
                <div className={styles.modal}>
                    <div className={styles.close__modal} onClick={()=>setAmendTakeaway(!amendTakeaway)}>
                        <div className={styles.style__modal}>
                            <div className={styles.style__modal__cross}></div>
                        </div>
                    </div>
                </div>
                <h2>{takeawayClickedInCart.takeaway}</h2>
                    <div className={styles.quantity__buttons}>
                        <div onClick={()=>decreaseQuantity()}>-</div>
                        <div onClick={()=>increaseQuantity()}>+</div>
                    </div>
                <h2>{dishQuantity}</h2>
            </div>
        </>
    )
}

export default AmendTakeaway