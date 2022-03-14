
const apiData = 'https://fakestoreapi.com/products'

export default function GetProducts() {
  let result = fetch(apiData)
    .then(res => res.json())
    .then(response => response)

    return result
}

