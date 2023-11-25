import { FaStar } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const Item = ({ data, addItemsToCart }) => {
  const {
    id,
    ItemName,
    ItemBrand,
    ItemDescription,
    ItemPrice,
    ItemRating,
    ItemOffer,
    ItemImage,
    ItemQuantity,
  } = data;
  return (
    <>
      <div className="bg-white drop-shadow-xl flex flex-col md:flex-row items-center md:justify-between md:items-start p-4 my-4 rounded-md">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6">
          <div className="w-40 md:w-52">
            <img src={ItemImage} alt="nothing" className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="font-bold text-xl">{ItemName}</h1>
            <h1>by {ItemBrand}</h1>
            <h1 className="flex items-center gap-1 font-bold text-green-500">
              {ItemRating} <FaStar className="text-green-500" />
              <span>5000+ Ratings</span>
            </h1>
            <p className="hidden md:flex w-80 text-sm">{ItemDescription}</p>
          </div>
        </div>
        <div className="flex flex-row items-center md:flex-col gap-2 text-center">
          <h1 className="font-bold text-xl">₹{ItemPrice}</h1>
          <h1 className="hidden md:flex text-cartBlue">{ItemOffer} Off</h1>
          <h1 className="hidden md:flex text-xs">Delivery by 11pm tomorrow</h1>
          <button
            className="my-10 md:text-xl bg-cartBlue text-white px-3 rounded-md py-1 hover:bg-cartButton hover:text-cartBlue font-semibold"
            onClick={() =>
              addItemsToCart(
                id,
                ItemName,
                ItemPrice,
                ItemBrand,
                ItemImage,
                ItemQuantity
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
