// npm i node-fetch

/* import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
  })
  .catch(e => {
    console.log(e);
  }); */

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);

    return fetchData(
      `${API}/products/${products[0].id}`
    );
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title);
    return fetchData(
      `${API}/categories/${product.category.id}`
    );
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(e => console.log(e))
  .finally(() => console.log("Finally"));
