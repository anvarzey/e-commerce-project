import React, { useEffect, useState } from "react";
import Product from "./Product";
import GetProducts from "../services/GetProducts";
import "../styles/Products.css"

export default function Products({ keyword }) {
  const [keyW, setKeyW] = useState(keyword);
  const [items, setItems] = useState([]);
  const [actual, setActual] = useState([]);
  const [loading, setLoading] = useState(true);
  const favourites = "favourites"

  const parse = (amount) => {
    let newAmount = parseFloat(amount.toFixed(2))
    return newAmount
  }

  useEffect(() => {
    GetProducts()
    .then((result) => setItems(result))
    .then(() => {
        setLoading(false);
      });
    }, []);

    useEffect(() => {
      if (keyW === favourites) {
        setActual(
          items
          .map((single) => single)
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .splice(0, 8)
          );
        } else {
          setActual(
            items
            .map((element) => (element.category === keyW ? element : ""))
            .filter((element) => element !== "")
            );
          }
        }, [keyW, items]);

        if (loading) {
          return (
            <div className="spinner-border ms-lg-4 text-primary loading" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          );
        }

        return (
          <div className="justify-content-center flex-wrap  d-flex mx-auto newFont">
      <h1 className="mt-5 text-capitalize fw-bold pageTitle text-center">{keyword !== favourites ? keyword : "Our most popular products"}</h1>
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
