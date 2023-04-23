


function ItemDetail ({product}) {
    return (
        <div>
        <img src={product.img} alt = "foto"></img>
        <h1>{product.title}</h1>
        <p>Precio: ${product.price}</p>
        </div>
    )

}

export default ItemDetail