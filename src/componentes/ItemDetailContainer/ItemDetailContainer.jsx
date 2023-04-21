

import React, { useState, useEffect } from "react";
import productsDataBase from "../../data/products";
import { useParams } from "react-router-dom";
import Flex from "../Flex/Flex";
import Counter from "../Counter";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { getSingleItem } from "../../services/firestore";



function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  /*const [addedToCart, setAddedToCart] = useState(false);*/

    let { id } = useParams();


    const { cart, addItem } = useContext(cartContext);


  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      
      setProduct(respuesta);
    });
  }, [id]);



  function onAddToCart (count){
   /* setaddedToCart = true;*/
    addItem(product, count);

  }
   

  return (
    <Flex>
    <div>
      <img src={product.img}></img>
      <h1>{product.title}</h1>
      <h3>{product.category}</h3>
      <p>Precio: ${product.price}</p>
   {/* Rendering condicional */}
      {/* si addedToCart === true? <ItemCount> : <>ir al carrito<> */}
      <Counter onAddToCart={onAddToCart}/>
     
    </div>
    </Flex>
  );
}

export default ItemDetailContainer;