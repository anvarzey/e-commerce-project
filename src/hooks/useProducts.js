import {useState, useEffect} from 'react';
import GetProducts from '../services/GetProducts';

export default function useProducts({keyword}) {
  const [items, setItems] = useState([]);
  const [actual, setActual] = useState([]);
  const [loading, setLoading] = useState(true);
  const favourites = "favourites";

  useEffect(() => {
    GetProducts()
      .then((result) => {
        if(result[0].message == 'error'){
           throw Error(result[0].cause)
        } else {
          setItems(result);
        }
      })
      .catch((err) => {
        setActual(err)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filtering the products by category

  useEffect(() => {
    if (items !== undefined || items.length !== 0) {
      if (keyword === favourites) {
        setActual(
          items
            .map((single) => single)
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .splice(0, 8)
        );
      } else {
        setActual(
          items
            .map((element) => (element.category === keyword ? element : ""))
            .filter((element) => element !== "")
        );
      }
    }
  }, [keyword, items]);

  return {actual, loading}
}