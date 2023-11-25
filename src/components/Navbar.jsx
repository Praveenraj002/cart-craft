import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <>
      <div className="bg-cartBlue text-white w-full py-3 fixed left-0 right-0 top-0 z-10">
        <div
          className="flex flex-row justify-between
         items-center container mx-auto px-4"
        >
          <Link to={"/"}>
            <div className="text-2xl italic font-medium navbar-icon">
              CartCraft
            </div>
          </Link>
          <Link to={"/cart"}>
            <button className="bg-cartButton text-cartBlue px-2 py-1 text-base font-semibold">
              Cart{" "}
              <span className="bg-cartBlue  text-white font-bold text-sm rounded-xl px-2 py-1">
                {cartItems}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
