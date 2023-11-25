import { useCart } from "../contexts/CartContext";

/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
  const { id, name, price, brand, image, quantity } = item;
  const { deleteItem, updateQuantity } = useCart();

  const handleIncrement = () => {
    console.log(`INCREMENT`);
    updateQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    console.log(`DECREMENT`);
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      // If quantity is 1, remove the item
      deleteItem(id);
    }
  };

  return (
    <>
      <div
        className="bg-white drop-shadow-xl flex flex-col md:flex-row items-center md:justify-between md:items-start p-4 my-4 rounded-md"
        id={id}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6">
          <div className="w-16 md:w-20">
            <img src={image} alt="nothing" className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="font-bold text-xl">{name}</h1>
            <h1>by {brand}</h1>
          </div>
        </div>
        <div className="flex flex-row items-center md:flex-col gap-4 text-center">
          <h1 className="font-bold text-xl">₹{price}</h1>
          <div className="flex flex-row items-center gap-3">
            <button
              className="bg-cartBlue text-white rounded-full px-2 text-lg hover:bg-cartButton hover:text-cartBlue"
              onClick={handleIncrement}
            >
              +
            </button>
            <h1>{quantity}</h1>
            <button
              className="bg-cartBlue text-white rounded-full px-2.5 text-lg hover:bg-cartButton hover:text-cartBlue"
              onClick={handleDecrement}
            >
              -
            </button>
          </div>
          <button
            className="md:text-sm bg-cartBlue text-white px-3 rounded-md py-1 hover:bg-cartButton hover:text-cartBlue font-semibold"
            onClick={() => deleteItem(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
