import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopProvider from "../context/shopContext";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Navbar from "./Navbar";
import Cart from "./Cart";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <BrowserRouter>
          <Navbar />
          <Cart />
          <Switch>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </StyletronProvider>
    </ShopProvider>
  );
}
export default App;