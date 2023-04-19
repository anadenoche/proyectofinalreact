import React, { useState, useEffect } from "react";
import Item from "../Item";
import Flex from "../Flex/Flex";
import productsDatabase from "../../data/products";
import { useParams } from "react-router-dom";

function getItems() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDatabase);
    }, 1000);
  });

  return promesa;
}

function getItemsByCategory(categoryURL) {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
     const filtro = productsDatabase.filter(item => item.category === categoryURL)
     resolve(filtro)
    }, 1000);
  });

  return promesa;
}


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoryid} = useParams();

  useEffect(() => {
    if (categoryid === undefined) {

   
    getItems().then((respuesta) => {
     
      setProducts(respuesta);
    });
  }
  else{
    getItemsByCategory(categoryid).then(
      (respuesta) => setProducts(respuesta)
    )

  }
  }, [categoryid],);

  return (
   
    <Flex>
      {products.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          title={producto.title}
          price={producto.price}
          img={producto.img}
        />
      ))}
    </Flex>
  );
}

export default ItemListContainer;