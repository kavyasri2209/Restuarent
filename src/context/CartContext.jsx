import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existing = cartItems.find(i => i.id === item.id);
    if (existing) {
      updateQuantity(item.id, existing.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCartItems(cartItems.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const removeFromCart = (id) => setCartItems(cartItems.filter(i => i.id !== id));

  const clearCart = () => setCartItems([]);

  const getTotalItems = () => cartItems.reduce((acc, i) => acc + i.quantity, 0);

  const getTotalPrice = () => cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
