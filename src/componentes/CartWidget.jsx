
import { cartContext } from "../context/cartContext";
import { useContext } from "react";


function CartWidget () {
    
const { cart } = useContext(cartContext);
    return (
        <span role="img" aria-label="cart">🛒<span>{cart.length}</span></span>
    )
}

export default CartWidget 