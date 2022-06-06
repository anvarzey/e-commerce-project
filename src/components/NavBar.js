import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useStateValue } from "../services/StateProvider";

export default function NavBar() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="headerColor d-flex flex-column container-fluid">
      <div className="navBarTop align-items-center">
          <div className="nameLogoContainer mx-auto">
            <Link to="/" className="flex">
              <img
                src="../images/capybara.svg"
                alt="plentyImg"
                width={42}
                height={34}
                className="logo mb-3"
              />
              <span className="navBarBottom mt-5 nameLogo ">Plenty</span>
            </Link>
          </div>
      </div>
      <div className="max-w-1 d-flex flex-xl-row mx-auto gap-5 justify-content-between">
        <div className="inline-block">
          <div className="btn-group">
            <button
              type="button"
              className="btn categoriesButton dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </button>
            <ul className="dropdown-menu menuContainer">
              <li className="dropdown-item">
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/electronics">Electronics</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/womens-clothing">Women's Clothing</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/mens-clothing">Men's Clothing</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/jewelery">Jewelery</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="inline-block text-center">
          <Link to="/cart">
            <button className="shoppingCartContainer pr-2 pt-1 position-relative">
              <i className="bi bi-cart4 shoppingCartIcon fs-3"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badgeNumber">
                {basket.length > 0 &&
                  basket
                    .map((element) => element.quant)
                    .reduce((prev, curr) => prev + curr, 0)}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
