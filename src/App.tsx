import React from 'react'
import Menu from './components/Menu';
import Modal from './components/Modal';
import CartIcon from './components/CartIcon';
import CartPage from './components/CartPage';
import AmendTakeaway from './components/AmendTakeaway';
import { Icart, ITakeawayClicked } from './interfaces';
import {useState} from 'react';


const App = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const [CartIconClicked, setCartIconClicked] = useState<boolean>(false);
    const [cart, setCart] = useState<Icart[]>([])
    const [amendTakeaway, setAmendTakeaway] = useState<boolean>(false);
    const [takeawayClickedInCart, setTakeawayClickedInCart] = useState<ITakeawayClicked>(null);

    const addToCart = (takeaway:string, quantity:number, totalCost:number, takeawayImage:any, price:number) => {
        // if item is already in cart... 
        let takeawayExists = cart.find(cartObject => cartObject.takeaway === takeaway);
        if (takeawayExists) {
            
            setCart((prevState:any) => {
                // Loop over cart (prevState gets whatever is already in the cart and starts to loop over it with map)
                return prevState.map((item: any) => {
                    // find the object in Cart where 'takeaway' key (item.takeaway) is the same as takeaway passed in,
                    // if so return that object with the updated quantity and totalCost which is passed in
                    // otherwise just return the item with  ": item"
                    return item.takeaway === takeaway ? {...item, quantity: quantity, totalCost: totalCost, price: price } : item
                })
            })
            console.log(cart);
        }
        // otherwise just add the takeaway and its quantity to the Cart
        else {
            setCart([...cart, {takeaway, quantity, totalCost, takeawayImage, price}]);
            console.log(cart);
        }
    }

        // Amend order of takeaway
        // looping through cart items and getting 'takeaway' from object of THAT item
        const amendOrder = (takeawayClicked:string) => {
            // console.log(takeawayClicked)
            setAmendTakeaway(!amendTakeaway);
            // get matching takeaway that is passed in and loop through cart
             let takeawayClickedInCart = cart.find(cartObject => cartObject.takeaway === takeawayClicked);
            //  console.log(takeawayClickedInCart);
            setTakeawayClickedInCart(takeawayClickedInCart);
        }


    return (
      <>
        {amendTakeaway && <AmendTakeaway takeawayClickedInCart={takeawayClickedInCart} setCart={setCart} amendTakeaway={amendTakeaway} setAmendTakeaway={setAmendTakeaway}/>}
        <CartIcon CartIconClicked={CartIconClicked} setCartIconClicked={setCartIconClicked} cart={cart}/>
        <CartPage CartIconClicked={CartIconClicked} cart={cart} setCart={setCart} amendOrder={amendOrder} /> 
        <Menu setModal={setModal} modal={modal} setIndex={setIndex} CartIconClicked={CartIconClicked}/>
        <Modal setModal={setModal} modal={modal} index={index} addToCart={addToCart}/>
      </>
    )
}

export default App