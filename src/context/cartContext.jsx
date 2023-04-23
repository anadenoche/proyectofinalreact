import { createContext, useState } from "react";

const cartContext = createContext({ default: "default" });
const Provider = cartContext.Provider;

function CartProvider(props) {
    const [cart, setCart] = useState([]);

    
  function addItem(product, count) {
    /* product.quantity = count;
    setCart(product); */

    const newCart = [...cart]; // deep copy/shallow copy
  

    newCart.push({ ...product, count });
    setCart(newCart);
  }

 //ojo aca

    function getTotalPrice() {
    // cantidad * precio
    return 1099;
  }

   




  //PREGUNTAR!!! CLASE 10: 1:57:11


 /* function getCountInCart() {
    // reduce
    let total = 0;
    cart.forEach{
      
    };

    return 5;
  }
 */

    return (
    <Provider value={{ cart, addItem, getTotalPrice }}>{props.children}   
    
    </Provider>
    );
}
export { cartContext, CartProvider };