
const apiData = 'https://fakestoreapi.com/products'

export default function GetProducts() {
  let result = fetch(apiData)
    .then(response => {
      if (!response.ok){
        throw Error('error', {cause: response.status})
      } else {
        return response
      }
    })
    .then(response => response.json())
    .catch(error => [error])

    return result
}

