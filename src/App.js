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
    const [CartItems, setCartItems] = useState([]);

    console.log(CartItems);
    return (
      <>
        <CartIcon CartIconClicked={CartIconClicked} setCartIconClicked={setCartIconClicked}/>
        <CartPage CartIconClicked={CartIconClicked}/> 
        <Display setModal={setModal} modal={modal} setIndex={setIndex} CartItems={CartItems} setCartItems={setCartItems}/>
        <Modal setModal={setModal} modal={modal} index={index} CartItems={CartItems} setCartItems={setCartItems}/>
      </>
    )
}

export default App


