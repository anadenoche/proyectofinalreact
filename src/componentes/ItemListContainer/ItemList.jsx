import Item from "../Item"
import Flex from "../Flex/Flex"


function ItemList ({products}) {
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
             )}

                export default ItemList