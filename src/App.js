import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import { StateProvider } from "./services/StateProvider";
import reducer, { initialState } from "./services/Reducer";

function App() {
  return (
    <div className="body">
      <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Products key="favourites" keyword="favourites" />}
            />
            <Route
              path="/electronics"
              element={<Products key="electronics" keyword="electronics" />}
            />
            <Route
              path="/womens-clothing"
              element={<Products key="women" keyword="women's clothing" />}
            />
            <Route
              path="/mens-clothing"
              element={<Products key="men" keyword={"men's clothing"} />}
            />
            <Route path="/jewelery" element={<Products keyword="jewelery" />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}
export default App;
