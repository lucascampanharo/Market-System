import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { ProductPage } from "./pages/products/products";
import { CartPage } from "./pages/cart/cart";
import { CartProvider } from "./context/cart-provider";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CartProvider />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
