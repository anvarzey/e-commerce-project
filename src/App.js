import React from "react";
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Products from "./components/Products";
import ShoppingCart from "./ShoppingCart";

function App() {

  return (
      <div className="body">
          <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<Products key="favourites" keyword="favourites" />} />
              <Route path="/electronics" element={<Products key="electronics" keyword="electronics" />} />
              <Route path="/womens-clothing" element={<Products key="women" keyword="women's clothing" />} />
              <Route path="/mens-clothing" element={<Products key="men" keyword={"men's clothing"} />} />
              <Route path="/jewelery" element={<Products keyword="jewelery" />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </BrowserRouter>
          <br className="d-none d-md-block" /><br className="d-none d-md-block" /><br className="d-none d-md-block" />
      </div>
  );

}
export default App;
