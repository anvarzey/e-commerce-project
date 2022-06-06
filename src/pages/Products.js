import React from "react";
import Product from "../components/Product";
import "../styles/Products.css";
import ErrorMessage from "../components/ErrorMessage";
import useProducts from '../hooks/useProducts';

export default function Products({ keyword }) {
  const favourites = "favourites";
  const { actual, loading, errorM } = useProducts({keyword})

  const parse = (amount) => {
    let newAmount = parseFloat(amount.toFixed(2));
    return newAmount;
  };

  if (loading) {
    return (
      <div
        className="spinner-border ms-lg-4 text-primary loading"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (errorM !== "") return <ErrorMessage err={errorM} />;

  return (
    <div className="justify-content-center flex-wrap  d-flex mx-auto newFont">
      <h1 className="mt-5 text-capitalize fw-bold pageTitle text-center">
        {keyword !== favourites ? keyword : "Our most popular products"}
      </h1>
      <div className="d-flex flex-wrap container justify-content-around mt-4">
        {actual.map((single) => (
          <Product
            key={single.id}
            id={single.id}
            title={single.title}
            category={single.category}
            image={single.image}
            rating={single.rating}
            price={parse(single.price)}
          />
        ))}
      </div>
    </div>
  );
}
