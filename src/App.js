import Display from './Display';
import Modal from './Modal';
import CartIcon from './CartIcon';
import CartPage from './CartPage';
import {useState} from 'react';


const App = () => {
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);
    const [CartIconClicked, setCartIconClicked] = useState(false);

    console.log('did it render?');
    return (
      <>
        <CartIcon CartIconClicked={CartIconClicked} setCartIconClicked={setCartIconClicked}/>
        <CartPage CartIconClicked={CartIconClicked}/> 
        <Display setModal={setModal} modal={modal} setIndex={setIndex}/>
        <Modal setModal={setModal} modal={modal} index={index}/>
      </>
    )
}

export default App


