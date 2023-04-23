import React, {useContext} from 'react'
import { cartContext } from '../../context/cartContext';
import { createOrder } from '../../services/firestore';
import { useNavigate } from "react-router-dom";

export default function CartContainer() {
   const context = useContext(cartContext);
   const { cart, getTotalPrice } = context;
   const navigateTo = useNavigate();
   
   async function handleCheckout(){
    const order = {
      items: cart,
      buyer: {name: "ana"},
      time: new Date(),
      total: getTotalPrice(),   /*ojo*/
     };

     const orderId = await createOrder(order);
     navigateTo(`/checkout/${orderId}`)
     
    
   }



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
        <span>El total de tu compra es: {getTotalPrice()}</span>
        <br />
        <button onClick={handleCheckout}>Finalizar compra</button>
    </div>
  )
}
 