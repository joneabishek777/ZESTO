/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setcartItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("zesto-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("zesto-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removrFromCart = (itemId) => {
    if (cartItems[itemId] && cartItems[itemId] > 0) {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const deleteCartItem = (itemId) => {
    if (cartItems[itemId]) {
      setcartItems((prev) => {
        const newCartItems = { ...prev };
        delete newCartItems[itemId];
        return newCartItems;
      });
    }
  };

  const cartItemCount = Object.values(cartItems).reduce(
    (sum, qty) => sum + qty,
    0
  );

  const contextValue = {
    cartItems,
    setcartItems,
    addToCart,
    removrFromCart,
    deleteCartItem,
    cartItemCount,
    searchTerm,
    setSearchTerm,
    theme,
    toggleTheme,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
