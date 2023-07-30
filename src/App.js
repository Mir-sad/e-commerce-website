import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (item) => {
    const ndx = cart.findIndex((e) => e.id === item.id);
    if (ndx !== 1) {
      setCart([...cart, item]);
    }
    console.log(cart);
  };



  return (
    <div className="app">
      <Router>
        <Header size={cart.length} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home handleCart={handleCart} size={cart.length} />}
          />
          <Route path={`/product/:productId`} element={<ProductDetail handleCart={handleCart}/>} />
          <Route
            path="/cart"
            element={
              <Cart handleCart={handleCart} cart={cart} setCart={setCart}  />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
