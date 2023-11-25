// Component
import Item from "./Item";

// Data
import { data } from "../data/data";

// Context
import { useCart } from "../contexts/CartContext";

const Items = () => {
  const { addItemsToCart } = useCart();

  return (
    <>
      <div className="container mx-auto px-4 my-10 mt-24">
        {data.map((data) => (
          <Item key={data.id} data={data} addItemsToCart={addItemsToCart} />
        ))}
      </div>
    </>
  );
};

export default Items;
