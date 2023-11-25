// Component
import CartItem from "./CartItem";

// Context
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { cartItemsData, clearCartItems, totalAmount } = useCart();

  const payHandler = () => {
    alert(`Payment Successful :)`);
  };

  return (
    <>
      <div className="container mx-auto px-4 md:px-32 my-10 mt-24">
        {cartItemsData.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        {cartItemsData.length !== 0 && (
          <div className="flex flex-row justify-between mt-10">
            <h1 className="text-xl md:text-xl rounded-md py-1 font-semibold">
              Total Amount :
            </h1>
            <button className="text-xl md:text-xl w-32 rounded-md py-1 font-semibold">
              ₹{totalAmount}.00
            </button>
          </div>
        )}
        {cartItemsData.length !== 0 && (
          <div className="flex items-center gap-4 md:gap-0 flex-col-reverse md:flex-row justify-between mt-10">
            <Link to={"/"}>
              <button className="md:text-base bg-cartBlue text-white w-80 md:w-36  rounded-md py-1 hover:bg-cartButton hover:text-cartBlue font-semibold">
                Get more items
              </button>
            </Link>
            <button
              className="md:text-base bg-cartBlue text-white w-80 md:w-36 rounded-md py-1 hover:bg-cartButton hover:text-cartBlue font-semibold"
              onClick={clearCartItems}
            >
              Clear Cart
            </button>
            <button
              className="md:text-base bg-cartBlue text-white w-80 md:w-36 rounded-md py-1 hover:bg-cartButton hover:text-cartBlue font-semibold"
              onClick={payHandler}
            >
              Pay
            </button>
          </div>
        )}
      </div>
      {cartItemsData.length === 0 && (
        <div className="flex flex-col gap-8 items-center text-center justify-center w-full h-96">
          <h1 className="font-bold text-3xl ">Your Cart is Empty :(</h1>
          <Link to={"/"}>
            <button className="md:text-base bg-cartBlue text-white px-3 rounded-md py-1 hover:bg-cartButton hover:text-cartBlue font-semibold">
              Back to shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartItems;
