import React from "react";
import { Link } from "react-router-dom"
import "../styles/Product.css"
import { useStateValue } from "../services/StateProvider";

export default function Product( {id, title, category, image, rating, price} ) {

  const [ state, dispatch ] = useStateValue()
   let cat = ""
   switch (category) {
     case "women's clothing":
        cat = "womens-clothing";
       break;
     case "men's clothing":
        cat = "mens-clothing";
       break;
       case "jewelery":
          cat = "jewelery";
         break;
         case "electronics":
            cat = "electronics";
         break;
     default: cat= "/";
       break;
   }
    const addToBasket = () => {
     // Dispatch the data into the data layer
     dispatch({
       type: "ADD_TO_BASKET",
       item: {
         id: id,
         title: title,
         image: image,
         price: price,
         category: category,
         rate: rating.rate,
         count: rating.count,
         quant: 1
       }
     })
   }


  return (

      <div className="col-12 col-md-4 cardContainer card cards mt-3 d-flex justify-items-center align-items-center" >
        <img src={image} className="card-img-top cardImage mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title cardTitle fs-5">{title}</h5>
          <Link to={cat} className="text-decoration-none">
          <h6 className="card-subtitle categoryCard">
            <small>{category}</small>
          </h6>
          </Link>
          <div className="container mt-2">
          <h4 className="priceCard">
           <strong>{price}€</strong>
          </h4>
          <span className="card-text rateCard">
          <i className="bi bi-star-fill star"></i> {rating.rate} / 5
          </span>
          </div>
          <div className="container buttonCardContainer">
          <button onClick={addToBasket} className="btn addButtonCard">Add to cart <i className="bi bi-cart4 cartIcon"></i></button>
          </div>
        </div>
      </div>

  );
}

