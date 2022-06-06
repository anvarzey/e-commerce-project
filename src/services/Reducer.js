export let initialState = {
  basket: [],
}

// Get the total price

export const GetBasketTotal = (basket) =>
 basket?.reduce((amount, item) => (item.price * item.quant) + amount, 0)

const reducer = ( state, action ) => {
  switch(action.type){
    case "ADD_TO_BASKET":
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.item.id)
      let newBasket = [...state.basket]
      if(index < 0){
        return {
          ...state,
          basket: [...state.basket, action.item]
        }
      } else {
        let num = newBasket[index].quant
        action.item.quant = 1 + num
        newBasket.splice(index, 1)
        return {
          ...state,
          basket: [...newBasket, action.item]
          }
      }

    case "REMOVE_FROM_BASKET":
      const index2 = state.basket.findIndex((basketItem) => basketItem.id === action.id)
      let newerBasket = [...state.basket]

      if(index2 >= 0){
        newerBasket.splice(index2, 1)
      } else {
        console.warn("Can't remove a product that is not in the basket")
      }
      return {
        ...state,
        basket: newerBasket
      }

      case "DELETE_ITEM":
      const index3 = state.basket.findIndex((basketItem) => basketItem.id === action.item.id)
      let delBasket = [...state.basket]
      if(index3 < 0){
        return {
          ...state,
          basket: [...state.basket]
        }
      } else {
        let num = delBasket[index3].quant
        if(num >= 2){
          action.item.quant = num - 1
          delBasket.splice(index3, 1)
          return {
            ...state,
            basket: [...delBasket, action.item]
            }
        } else {
          return {
            ...state,
            basket: [...state.basket]
          }
        }
      }

      default:
        return state;
  }
}

export default reducer