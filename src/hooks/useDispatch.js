import { useStateValue } from "../services/StateProvider";

export default function useDispatch({ id, image, title, price, quant, category, rate, count, rating }){
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

  return {removeFromBasket, changeNumber, deleteItem, addToBasket}

}