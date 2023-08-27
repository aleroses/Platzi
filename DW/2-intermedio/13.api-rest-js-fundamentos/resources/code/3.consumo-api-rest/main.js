
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
const API = "https://api.thecatapi.com/v1/images/search";
const img = document.querySelector("img");
const button = document.querySelector("button");

async function cat() {
  const resolve = await fetch(API);
  const data = await resolve.json();
  console.log(data);
  img.src = data[0].url;
}

window.addEventListener("load", cat);
button.addEventListener("click", cat);
