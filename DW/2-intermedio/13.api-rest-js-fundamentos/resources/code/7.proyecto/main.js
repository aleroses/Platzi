/* const querystring = ["?", "limit=3"].join("");

const API_URL = `https://api.thecatapi.com/v1/images/search${querystring}&api_key=live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY`;

async function load_random() {
  const response = await fetch(API_URL);
  const data = await response.json();

  //console.log(data);
  const container = document.querySelector(".container");
  container.innerHTML = "";

  data.map((img) => {
    const content = document.createElement("figure");
    content.innerHTML = `
      <img src="${img.url}" alt="Kitten pictures">
      <img class="save" src="./heart.svg" alt="Heart icon">
    `;
    container.append(content);
  });
}

load_random(); */

const querystring = ["?", "limit=3"].join("");

const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search${querystring}&api_key=live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY`;
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites';

async function load_random() {
  const response = await fetch(API_URL_RANDOM);
  const data = await response.json();

  //console.log(data);
  const container = document.querySelector(".container");
  container.innerHTML = "";

  data.map((img) => {
    const content = document.createElement("figure");
    content.innerHTML = `
      <img src="${img.url}" alt="Kitten pictures">
      <img class="save" src="./heart.svg" alt="Heart icon">
    `;
    container.append(content);
  });
}

load_random();