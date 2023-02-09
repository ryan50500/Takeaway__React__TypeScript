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
        // (1st method) if item is already in cart...
        // if (cart.filter(cartObjects => cartObjects.takeaway === takeaway).length > 0) {
        
         // (2nd method) if item is already in cart...
        // const memberExists = cart.some(items => items.takeaway === takeaway);
        // if(memberExists) {

        // (3rd method) if item is already in cart... 
        let takeawayExists = cart.find(cartObjects => cartObjects.takeaway === takeaway);
        if (takeawayExists) {
            
            setCart(prevState => {
                // Loop over cart (prevState gets whatever is already in the cart and starts to loop over it with map)
                return prevState.map((item) => {
                    // find the object in Cart where 'takeaway' key (item.takeaway) is the same as takeaway passed in,
                    // if so return that object with the updated quantity which is passed in
                    // otherwise just return the item with  ": item"
                    return item.takeaway === takeaway ? {...item, quantity: quantity} : item
                })
            })
            console.log('item already in cart so update quantity')
            console.log(cart);
            return;
        }
        // otherwise just add the takeaway and its quantity to the Cart
        else {
            setCart([...cart, {takeaway, quantity}]);
            console.log(cart);
    }
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