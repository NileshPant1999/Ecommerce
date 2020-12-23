import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ProductScreen from "./screen/ProductScreen";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Harshitona
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
        </main>
        <footer className="row center">All Right Reserverd</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
