import React, {useState, createContext} from 'react';
import CartIcon from './CartIcon.js'
import CartPage from './CartPage.js'
import Modal from './Modal.js'
import Display from './Display.js'

export const AppContext = createContext("");

function ContextTutorial(){
    const [cartQuantity, setCartQuantity] = useState(0);
    const [CartIconClicked, setCartIconClicked] = useState(true);
    const [modal, setModal] = useState(false);
    const [TheIndex, SetTheIndex] = useState(0);

    return (
        <AppContext.Provider value={{cartQuantity, setCartQuantity, CartIconClicked, setCartIconClicked, modal, setModal, TheIndex, SetTheIndex}}>
            <CartIcon/>
            <CartPage/> 
            <Display/> 
            <Modal/> 
        </AppContext.Provider>
    );
}

export default ContextTutorial