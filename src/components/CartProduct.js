import React from "react";
import "../styles/CartProduct.css";
import CurrencyFormat from "react-currency-format";
 import useDispatch from "../hooks/useDispatch"

export default function CartProduct({ id, image, title, price, quant, category, rate, count }) {
  const { removeFromBasket, changeNumber, deleteItem } = useDispatch({ id, image, title, price, quant, category, rate, count })

  // Giving the stars to the product according to its rate
    let num = rate
    let arr = []
    for(let i = 0; i < 5; i++){
      num--

      if(num >= 0){
        arr.push(<i key={Date.now() + Math.floor(Math.random() * (99999 - 999) + 999)} className="bi bi-star-fill star"></i>)
      } else {
        if(num > -1 ){
          arr.push(<i key={Date.now() + Math.floor(Math.random() * (99999 - 999) + 999)} className="bi bi-star-half star"></i>)
        } else{
          arr.push(<i key={Date.now() + Math.floor(Math.random() * (99999 - 999) + 999)} className="bi bi-star star"></i>)
        }
      }
    }

  return (
    <li className="list-group-item d-flex">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="col-4 col-md-3 d-flex justify-content-center">
              <img src={image} alt="cartItem" className="cardImage" />
            </div>
            <div className="col-6 col-md-7">
              <h2 className="itemTitle mb-0 fs-3 text-truncate ">{title}</h2>
              <p className="category mb-0">{category}</p>
              <p className="mb-1">
                {arr.map(element => element)} <span className="votesCounter">from {count} votes</span></p>
              <p className="inStock mb-3 m-0">In Stock</p>
              <div className="d-flex container align-items-center p-0 ">
                <button onClick={deleteItem} className="btn btn-warning px-3 p-sm-0 d-flex justify-content-center align-items-center minusAndPlusButton">-</button>
                <input value={quant} type="text" className="text-center border form-control d-inline itemLabel" readOnly />
                <button onClick={changeNumber} className="btn btn-warning px-3 p-sm-0 d-flex justify-content-center align-items-center minusAndPlusButton">+</button>
              </div>
            </div>
            <div className="col-2 col-md-2 d-flex flex-column justify-content-between itemLastContainer align-items-center">
              <button onClick={removeFromBasket} className="deleteButton align-self-end">
                <i className="bi bi-x-circle text-danger"></i>
              </button>
              <div className="max-w-90 text-end">{quant} X </div>
              <div className="fs-custom fw-bold max-w-90 d-flex justify-content-end">{value}</div>
            </div>
          </>
        )}
        decimalScale={2}
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"€"}
      />
    </li>
  );
}
