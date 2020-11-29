import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./screen/ProductScreen";
import HomeScreen from "./screen/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              Harshitona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All Right Reserverd</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
