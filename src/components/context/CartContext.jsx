import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (newItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...newItem, cantidad: 1 }];
      }
    });
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, cantidad: newQuantity } : item
      )
    );
  };

  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        updateItemQuantity,
        removeFromCart: removeItemFromCart,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
