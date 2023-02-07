import Display from './Display';
import Modal from './Modal';
import CartIcon from './CartIcon';
import CartPage from './CartPage';
import {useState} from 'react';


const App = () => {
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);
    const [CartIconClicked, setCartIconClicked] = useState(false);

    // added takeaways will be added to this array
    const [cart, setCart] = useState([]);

    const addToCart = (takeaway, quantity) => {
        // if item is already in cart, exit function
        if (cart.filter(cartObjects => cartObjects.takeaway === takeaway).length > 0) {
            return;
        }
        
        console.log(takeaway, quantity)
        setCart([...cart, {takeaway, quantity}]);
        console.log(cart);
    }
    
    return (
      <>
        <CartIcon CartIconClicked={CartIconClicked} setCartIconClicked={setCartIconClicked} cart={cart}/>
        <CartPage CartIconClicked={CartIconClicked}/> 
        <Display setModal={setModal} modal={modal} setIndex={setIndex} cart={cart} setCart={setCart}/>
        <Modal setModal={setModal} modal={modal} index={index} cart={cart} setCart={setCart} addToCart={addToCart}/>
      </>
    )
}

export default App

