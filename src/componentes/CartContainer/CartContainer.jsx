import React, {useContext} from 'react'
import { cartContext } from '../../context/cartContext';
import { createOrder } from '../../services/firestore';
import { useNavigate } from "react-router-dom";
import Flex from '../Flex/Flex';
import FormCheckout from '../FormCheckout/FormCheckout';
import { Link } from "react-router-dom";

export default function CartContainer() {
   const context = useContext(cartContext);
   const { cart, getTotalPrice, removeItem, clearCart } = context;
   const navigateTo = useNavigate();
   
   async function handleCheckout(userData){
    const order = {
      items: cart,
      buyer: userData,
      time: new Date(),
      total: getTotalPrice(),   
     };

     const orderId = await createOrder(order);

     navigateTo(`/checkout/${orderId}`)
    
     clearCart()
   }


return (
  <Flex>
<div>
{cart.length < 1 && 
<div><h1> Tu carrito está vacío </h1>
<h3>
<Link to="/"> Ir a Inicio</Link>
</h3>
</div>
}


{cart.length > 0 && ( <div>
<h1>Tu carrito</h1>
{
  cart.map( (item) => 
  <div style={{ border: "1px solid black" }}>
   <h1> {item.title} </h1>
   <p>cantidad: {item.count} </p>
   <p>precio: ${((item.price)*(item.count)).toFixed(2)} </p>
   <button onClick={()=> removeItem(item.id)}> remover </button>
  
   </div>
   ) 
}
<br />
<h2>El total de tu compra es de: <span  style={{ border: "1px solid black" }}> ${getTotalPrice()}  </span></h2>
<br />
<br />
<FormCheckout onCheckout={handleCheckout} />
</div>  )  }

</div>
</Flex>
)
}


