import React from "react";
import { useStateValue } from "../services/StateProvider";
import "../styles/CartProduct.css";
import CurrencyFormat from "react-currency-format";

export default function CartProduct({ id, image, title, price, quant, category, rate, count }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

   const changeNumber = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        category: category,
        rate: rate,
        count: count,
        quant: 1
      }
    })
  }

    const deleteItem = () => {
      dispatch({
        type: "DELETE_ITEM",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        category: category,
        rate: rate,
        count: count,
        quant: 1
      }
      })
    }
    let num = rate
    let arr = []
    for(let i = 0; i < 5; i++){
      num--

      if(num >= 0){
        arr.push(<i class="bi bi-star-fill star"></i>)
      } else {
        if(num > -1 ){
          arr.push(<i class="bi bi-star-half star"></i>)
        } else{
          arr.push(<i class="bi bi-star star"></i>)
        }
      }
    }

  return (
    <li className="list-group-item container d-flex">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="col-4 col-md-3">
              <span className="imageProductCart">
              <img src={image} alt="cartItem" className="imageProductCart p-3 img-thumbnail" />
              </span>
            </div>
            <div className="col-6 col-md-7">
              <h2 className="itemTitle mb-0 fs-3 text-truncate ">{title}</h2>
              <p className="category mb-0">{category}</p>
              <p className="mb-4">
                {arr.map(element => element)} <span className="votesCounter">from {count} votes</span></p>
              <p className="inStock m-0">In Stock</p>
              <div className="d-flex container align-items-center ">
                <button onClick={deleteItem} className="btn btn-warning minusAndPlusButton">-</button>
                <input value={quant} type="text" className=" border form-control d-inline itemLabel" readonly />
                <button onClick={changeNumber} className="btn btn-warning minusAndPlusButton">+</button>
              </div>
            </div>
            <div className="col-2 col-md-2 d-flex flex-column justify-content-between itemLastContainer align-items-end">
              <button onClick={removeFromBasket} className="deleteButton">
                <i className="bi bi-x-circle text-danger"></i>
              </button>
              <div>{quant} X </div>
              <div className="fs-2">{value}</div>
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
