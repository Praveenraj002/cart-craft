/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import CartPopup from "../components/CartPopup";

const CartContext = createContext();

const initialState = {
  cartItems: 0,
  itemAddedToCart: false,
  cartItemsData: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  if (action.type === "ADD_ITEMS_TO_CART") {
    const newItem = {
      id: action.payload.id,
      name: action.payload.itemName,
      price: action.payload.itemPrice,
      brand: action.payload.itemBrand,
      image: action.payload.itemImage,
      quantity: action.payload.itemQuantity,
    };
    // Check if an item with the same ID already exists in the cart
    const existingItemIndex = state.cartItemsData.findIndex(
      (item) => item.id === newItem.id
    );
    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity
      const updatedCartItemsData = [...state.cartItemsData];
      updatedCartItemsData[existingItemIndex].quantity += newItem.quantity;
      const updatedTotalAmount =
        state.totalAmount + newItem.price * newItem.quantity; // Adjust the calculation if needed

      return {
        ...state,
        cartItems: state.cartItems + 1, // Remove newItem.quantity from here
        itemAddedToCart: true,
        cartItemsData: updatedCartItemsData,
        totalAmount: updatedTotalAmount,
      };
    } else {
      // If the item does not exist, add it to the cart
      const updatedCartItemsData = [...state.cartItemsData, newItem];
      const updatedTotalAmount =
        state.totalAmount + newItem.price * newItem.quantity; // Adjust the calculation if needed

      return {
        ...state,
        cartItems: state.cartItems + newItem.quantity,
        itemAddedToCart: true,
        cartItemsData: updatedCartItemsData,
        totalAmount: updatedTotalAmount,
      };
    }
  }
  if (action.type === "CLEAR_CART_ITEMS") {
    return { ...state, cartItemsData: [], cartItems: 0 };
  }
  if (action.type === "DELETE_ITEM") {
    const updatedCartItemsData = action.payload;
    const updatedTotalAmount = updatedCartItemsData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return {
      ...state,
      cartItemsData: action.payload,
      cartItems: state.cartItems - 1,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "UPDATE_QUANTITY") {
    const { id, newQuantity } = action.payload;
    const updatedCartItemsData = state.cartItemsData.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    const updatedTotalAmount = updatedCartItemsData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return {
      ...state,
      cartItemsData: updatedCartItemsData,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
};

const CartProvider = ({ children }) => {
  const [{ cartItems, itemAddedToCart, cartItemsData, totalAmount }, dispatch] =
    useReducer(reducer, initialState);
  const [showPopup, setShowPopup] = useState(false);

  const addItemsToCart = (
    id,
    itemName,
    itemPrice,
    itemBrand,
    itemImage,
    itemQuantity
  ) => {
    dispatch({
      type: "ADD_ITEMS_TO_CART",
      payload: { id, itemName, itemPrice, itemBrand, itemImage, itemQuantity },
    });
    setShowPopup(true);
  };

  const clearCartItems = () => {
    dispatch({
      type: "CLEAR_CART_ITEMS",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const deleteItem = (id) => {
    const updatedCartItemsData = cartItemsData.filter((item) => item.id !== id);
    dispatch({ type: "DELETE_ITEM", payload: updatedCartItemsData });
  };

  // Add the following action creator function
  const updateQuantity = (id, newQuantity) => ({
    type: "UPDATE_QUANTITY",
    payload: { id, newQuantity },
  });

  return (
    <CartContext.Provider
      value={{
        addItemsToCart,
        clearCartItems,
        cartItems,
        cartItemsData,
        itemAddedToCart,
        closePopup,
        deleteItem,
        totalAmount,
        updateQuantity,
      }}
    >
      {children}
      {showPopup && <CartPopup closePopup={closePopup} />}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the cities provider");
  return context;
};

export { CartProvider, useCart };
