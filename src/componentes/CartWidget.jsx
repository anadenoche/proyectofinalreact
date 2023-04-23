
import { cartContext } from "../context/cartContext";
import { useContext } from "react";


function CartWidget () {
    
const { cart, Total } = useContext(cartContext);
    return (
        <span role="img" aria-label="cart">🛒<span>
            {Total() > 0 && (Total())}
            </span>
        </span>
    )
}

export default CartWidget 