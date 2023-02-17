import Menu from './components/Menu';
import Modal from './components/Modal';
import CartIcon from './components/CartIcon';
import CartPage from './components/CartPage';
import mainStyles from './index.css';
import {useState} from 'react';


const App = () => {
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);
    const [CartIconClicked, setCartIconClicked] = useState(false);
    // added takeaways will be added to this array
    const [cart, setCart] = useState([]);
    // total cost on cart page
    const [cartTotal, setCartTotal] = useState(0);

    
    const addToCart = (takeaway, quantity, totalCost, takeawayImage) => {
        // (1st method) if item is already in cart...
        // if (cart.filter(cartObjects => cartObjects.takeaway === takeaway).length > 0) {
        
        // (2rd method) if item is already in cart... 
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

            // showing the total cost on cart page
            // totalForCart = cart.reduce((sum, item) => sum + item.totalCost, 0);
            // totalAsInteger = parseInt(totalForCart);
            // setCartTotal(totalAsInteger);

    }

    return (
      <>
        <CartIcon CartIconClicked={CartIconClicked} setCartIconClicked={setCartIconClicked} cart={cart}/>
        <CartPage CartIconClicked={CartIconClicked} cart={cart} cartTotal={cartTotal}/> 
        <Menu setModal={setModal} modal={modal} setIndex={setIndex} cart={cart} setCart={setCart} CartIconClicked={CartIconClicked}/>
        <Modal setModal={setModal} modal={modal} index={index} cart={cart} setCart={setCart} addToCart={addToCart}/>
      </>
    )
}

export default App