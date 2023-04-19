

import React, { useState, useEffect } from "react";
import productsDataBase from "../../data/products";
import { useParams } from "react-router-dom";
import Flex from "../Flex/Flex";
import Counter from "../Counter";

function getSingleItem(idURL) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const encontrado = productsDataBase.find( item => {
        return (item.id == idURL)
      })
      resolve(encontrado);
    }, 1000);
  });

  return promesa;
}


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

    let { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      
      setProduct(respuesta);
    });
  }, []);

  function onAddToCart (count){
    console.log("agregaste:", count);
  

  }


  return (
    <Flex>
    <div>
      <img src={product.img}></img>
      <h1>{product.title}</h1>
      <h3>{product.category}</h3>
      <p>Precio: ${product.price}</p>
      <Counter onAddToCart={onAddToCart}/>
     
    </div>
    </Flex>
  );
}

export default ItemDetailContainer;