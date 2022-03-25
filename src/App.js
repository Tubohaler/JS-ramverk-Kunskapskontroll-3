import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { commerce } from "./lib/commerce";
import { Home, Products, Navbar, Cart } from "./components";
import IndividualProduct from "./components/Products/Product/IndividualProduct";
import { useRecoilValue } from "recoil";
import { cartState } from "./stores/Cart/atom";

function App() {
  // const [products, setProducts] = useState([]);
  const itemsInCart = useRecoilValue(cartState);

  return (
    <div>
      <Navbar totalItems={itemsInCart.length} />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/products" element={<Products />} />
        {/* <Products products={products} onAddToCart={handleAddToCart} />
        </Route> */}
        <Route exact path="/products/:id" element={<IndividualProduct />} />

        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
