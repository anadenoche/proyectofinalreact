import React, {useState} from "react";


export default function Counter ({onAddToCart}) {
    let [count, setCount] = useState(1)
   
    function Substract() {
        if(count>1) {
        setCount(count - 1)
    }
    }


    function Add(Item) {
        if (count < 10) {
          setCount(count + 1);
        }
      }


    return (
        <div className="container">
             <button onClick={Substract}>-</button>
             <span> {count} </span>
            <button onClick={Add}>+</button>
            <br />
            <button onClick={ () => onAddToCart(count)}>Agregar al carrito </button>
        </div>
    )
 }


 


