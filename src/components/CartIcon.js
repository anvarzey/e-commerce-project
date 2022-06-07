import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from "../services/StateProvider";


export default function CartIcon() {
  const [{ basket }, dispatch] = useStateValue();


  return(
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
  )
}