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

const query_string = ["?", "limit=2"].join("");
const API_KEY = [
  "&",
  "api_key=",
  "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY",
].join("");

const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search${query_string}${API_KEY}`;
const API_URL_FAVORITES = `https://api.thecatapi.com/v1/favourites${query_string}${API_KEY}`;

async function load_random() {
  try {
    const response = await fetch(API_URL_RANDOM);
    const container = document.querySelector(".container");
    const request_failed = document.createElement("span");

    if (response.status === 200) {
      const data = await response.json();

      /* console.log("Random");
      console.log(data); */
      container.innerHTML = "";
      let n_buttons = 1;

      data.map((img) => {
        const content = document.createElement("figure");
        content.innerHTML = `
        <img src="${img.url}" alt="Kitten pictures">
        <img class="save btn${n_buttons++}" onclick="save_favorites()" src="./heart.svg" alt="Heart icon">
        `;
        container.append(content);
      });
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

async function load_favorites() {
  try {
    const response = await fetch(API_URL_FAVORITES);
    const request_failed = document.createElement("span");

    if (response.status === 200) {
      const data = await response.json();

      console.log("Favorites");
      console.log(data);
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

async function save_favorites() {
  try {
    const response = await fetch(API_URL_FAVORITES, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_id: "dje", //cma.jpg
      }),
    });
    const favorite_cat = document.querySelector(".favorite__cat");
    const request_failed = document.createElement("span");

    if (response.status === 200) {
      const data = await response.json();
      console.log(response);
      console.log(data);
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      favorite_cat.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

load_random();
load_favorites();
save_favorites();
