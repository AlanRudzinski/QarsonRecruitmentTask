export const getAllTableCars = () => {
  return fetch('data.json')
    .then(data => data.json())
    .then(data => data.offers)
}
