import Menu from './components/Menu';
import Modal from './components/Modal';
import CartIcon from './components/CartIcon';
import CartPage from './components/CartPage';
import AmendTakeaway from './components/AmendTakeaway';
import mainStyles from './index.css';
import {useState} from 'react';


const App = () => {
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);
    const [CartIconClicked, setCartIconClicked] = useState(false);
    const [cart, setCart] = useState([]);
    const [amendTakeaway, setAmendTakeaway] = useState(false);
    const [takeawayClickedInCart, setTakeawayClickedInCart] = useState(0);
    
    const addToCart = (takeaway, quantity, totalCost, takeawayImage) => {
        // if item is already in cart... 
        let takeawayExists = cart.find(cartObjects => cartObjects.takeaway === takeaway);
        if (takeawayExists) {
            
            setCart(prevState => {
                // Loop over cart (prevState gets whatever is already in the cart and starts to loop over it with map)
                return prevState.map((item) => {
                    // find the object in Cart where 'takeaway' key (item.takeaway) is the same as takeaway passed in,
                    // if so return that object with the updated quantity and totalCost which is passed in
                    // otherwise just return the item with  ": item"
                    return item.takeaway === takeaway ? {...item, quantity: quantity, totalCost: totalCost} : item
                })
            })
            console.log(cart);
        }
        // otherwise just add the takeaway and its quantity to the Cart
        else {
            setCart([...cart, {takeaway, quantity, totalCost, takeawayImage}]);
            console.log(cart);
        }
    }

        // Amend order of takeaway
        // looping through cart items and getting 'takeaway' from object of THAT item
        const amendOrder = (takeawayClicked) => {
            // console.log(takeawayClicked)
            setAmendTakeaway(!amendTakeaway);
            // get matching takeaway that is passed in and loop through cart
             let takeawayClickedInCart = cart.find(cartObjects => cartObjects.takeaway === takeawayClicked);
            //  console.log(takeawayClickedInCart);
            setTakeawayClickedInCart(takeawayClickedInCart);
        }

    console.log('did this re-render?')

    return (
      <>
        {amendTakeaway && <AmendTakeaway takeawayClickedInCart={takeawayClickedInCart} cart={cart} setCart={setCart}/>}
        <CartIcon CartIconClicked={CartIconClicked} setCartIconClicked={setCartIconClicked} cart={cart}/>
        <CartPage CartIconClicked={CartIconClicked} cart={cart} setCart={setCart} amendOrder={amendOrder} amendTakeaway={amendTakeaway} setAmendTakeaway={setAmendTakeaway} /> 
        <Menu setModal={setModal} modal={modal} setIndex={setIndex} cart={cart} setCart={setCart} CartIconClicked={CartIconClicked}/>
        <Modal setModal={setModal} modal={modal} index={index} cart={cart} setCart={setCart} addToCart={addToCart}/>
      </>
    )
}

export default App