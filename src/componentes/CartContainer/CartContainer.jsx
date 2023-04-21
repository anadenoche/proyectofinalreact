import React, {useContext} from 'react'
import { cartContext } from '../../context/cartContext'
export default function CartContainer() {
   const context = useContext(cartContext);
   const cart = context.cart;
   const getPriceInCart = context.getPriceInCart;

// rendering condicional. si el carrito está vacio mosntramo un mensaje "volver a home"
//2 desglose del carrito, mostrar el contenido
    return (
    <div>
        <h1>Tu carrito</h1>
        {
            cart.map( item => 
            <div>
              <h3>{item.title}</h3>
              <p>Cantidad: {item.count}</p>
              <p>precio: {item.price}</p>
            </div>

            
        )}

        <br />
        <br />
        <span>El total de tu compra es: {getPriceInCart()}</span>
    </div>
  )
}
 