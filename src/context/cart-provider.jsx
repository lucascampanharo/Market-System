import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

const CartContext = createContext({});

export function CartProvider() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Outlet />
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}
