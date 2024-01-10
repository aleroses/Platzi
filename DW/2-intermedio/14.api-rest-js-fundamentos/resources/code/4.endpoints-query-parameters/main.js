/* ----------------- Usando fetch ---------------------- */
/* 
const URL = "https://api.thecatapi.com/v1/images/search";
const button = document.querySelector("button");

function cat() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].url);

      const img = document.querySelector("img");
      img.src = data[0].url;
    });
}

window.addEventListener("load", cat);
button.addEventListener("click", cat); 
*/

/* ---------- Usando async await --------- */
/* const API = "https://api.thecatapi.com/v1/images/search";
const img = document.querySelector("img");
const button = document.querySelector("button");

async function cat() {
  const resolve = await fetch(API);
  const data = await resolve.json();
  console.log(data);
  img.src = data[0].url;
}

window.addEventListener("load", cat);
button.addEventListener("click", cat); */

/* --------------- Solución PLATZI -------- */
const querystring = ["?", "limit=3"].join("");
const x =
  "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY";

const API_URL = `https://api.thecatapi.com/v1/images/search${querystring}&api_key=${x}`;

async function reload() {
  const response = await fetch(API_URL);
  const data = await response.json();

  //console.log(data);
  const container = document.querySelector("main");
  container.innerHTML = "";

  data.map((img) => {
    const content = document.createElement("figure");
    content.innerHTML = `<img src="${img.url}" alt="Kitten pictures">`;
    container.append(content);
  });
}

reload();
//window.addEventListener('load', reload)
