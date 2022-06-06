import React from 'react'
import { useStateValue } from "../services/StateProvider";
import "../styles/ShoppingCart.css";
import { GetBasketTotal } from "../services/Reducer";
import CartProduct from "../components/CartProduct";
import CurrencyFormat from 'react-currency-format';

export default function ShoppingCart() {
  const [{basket}, dispatch] = useStateValue();

  function checkOutFunction() {
    alert("Sorry! This page is under construction.");
  }

  return (
    <>
      <h1 className="text-center mx-auto text-capitalize fw-bold mt-4 mb-5">Shopping Cart</h1>
      <div className="container-fluid">
        <div className="row max-w-1 mx-auto justify-content-center">
          <div className="col-12 col-lg-8  mx-0 px-md-0 container">
            {
              basket.length > 0 ?
              <ol className="list-group p-0 list-group-numbered">
              {

                basket.sort((a,b) => a.id - b.id).map(item => (
                  <CartProduct
                  key={Date.now() + Math.floor(Math.random() * (999 - 11) + 11)}
                  id={item.id}
                  category={item.category}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rate={item.rate}
                  count={item.count}
                  quant={item.quant} />
                ))

              }
              </ol>
              : <div className='d-flex flex-column align-items-center'><h1 className='d-inline-block'> Oh! Your cart is empty <i className="bi bi-emoji-frown fs-3 sadIcon"></i> </h1>
                <h3 className='d-inline-block px-5 text-center'>Let's fill it with some lovely products <i className="bi boxy bi-box2-heart"></i> </h3></div>
            }
          </div>
          <div className="col-12 col-sm-2 mx-auto my-3 my-md-0 me-md-3 d-flex flex-column checkOutContainer">
          <CurrencyFormat renderText={(value) => (
            <>
             <div className="fs-4 align-self-start">Total ({basket.map(item => item.quant).reduce((previousValue, currentValue) => previousValue + currentValue, 0)} items):</div>
             <div className="fs-4 align-self-start">{value}</div>
             <small className="align-self-start">+ Taxes included</small>
             <small className="align-self-start">+ Free shipping</small>
             <button onClick={checkOutFunction} className="align-self-center checkOutButton mt-3 rounded-3">Proceed to checkout</button>
             <div className="col-md-1"></div>
             </>
             )}

             decimalScale={2}
             value={GetBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             suffix={"€"}
             />
             </div>

        </div>
      </div>
    </>
  );
}

