

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Flex from "../Flex/Flex";
import Counter from "../Counter";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { getSingleItem } from "../../services/firestore";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

    let { id } = useParams();


    const { addItem, getCountInCart } = useContext(cartContext);


  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      
      setProduct(respuesta);
    });
  }, [id]);



  function onAddToCart (count){
    addItem(product, count);
    setAddedToCart(true)
  }
   

  return (
    <Flex>
    <div>
    <ItemDetail product={product}/>
    {
        addedToCart ? 
        ( <div>
          <Link to="/cart"><button> ir al carrito   </button></Link>
          <Link to="/"><button> volver a inicio </button></Link>
          </div> 
        )
          :
          (<div>
            {product.stock < 1 && <small>no está disponible</small> }
            { product.stock > 0 && 
           ( <Counter stock={product.stock - getCountInCart} onAddToCart={onAddToCart} />)
          }
          </div>)
      }


   
 
     
    </div>
    </Flex>
  );
}

export default ItemDetailContainer;