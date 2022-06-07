import React from "react";
import { Link } from "react-router-dom"
import "../styles/Product.css"
import useDispatch from '../hooks/useDispatch';

function Product( {id, title, category, image, rating, price} ) {
  const { addToBasket } = useDispatch({ id, title, category, image, rating, price })

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

  return (

      <div className="col-12 col-md-4 cardContainer card cards mt-3 d-flex justify-items-center align-items-center shadow-sm" >
          <img src={image} className="cardImage mx-auto mt-2" alt={title} loading="lazy" />
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

 export default React.memo(Product, (prevProps, nextProps) => {
   return prevProps.id === nextProps.id
 })