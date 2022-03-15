import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Products />} />
            <Route path="/" element={<Cart />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
