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
  //"?", ? &
  "api_key=",
  "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY",
].join("");

// Api Key que si funciona: c08d415f-dea7-4a38-bb28-7b2188202e46

const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search${query_string}&${API_KEY}`;
const API_URL_FAVORITES = `https://api.thecatapi.com/v1/favourites?${API_KEY}`;
//const API_URL_IMAGES = `https://api.thecatapi.com/v1/images?${API_KEY}`;
const API_URL_FAVORITES_DELETE = (id) =>
  `https://api.thecatapi.com/v1/favourites/:${id}?${API_KEY}`;

const request_failed = document.createElement("span");
const container = document.querySelector(".container");
const favorite_cat = document.querySelector(".favorite__cat");

async function load_random() {
  try {
    const response = await fetch(API_URL_RANDOM);

    if (response.status === 200) {
      const data = await response.json();

      console.log("Random");
      console.log(data);
      container.innerHTML = "";
      let n = 0;

      data.map((img) => {
        const content = document.createElement("figure");
        content.innerHTML = `
        <img class="img${n++}" src="${img.url}" alt="Kitten pictures">
        <img class="save btn${n}" onclick="save_favorites('${
          img.id
        }')" src="./svg/heart.svg" alt="Heart icon"> 
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

    if (response.status === 200) {
      const data = await response.json();

      console.log("Favorites");
      console.log(data);

      let n = 0;

      const content = document.createElement("figure");
      content.innerHTML = "";

      data.forEach((kitten) => {
        content.innerHTML = `
        <img class="img${n++}" src="${kitten.image.url}" alt="Kitten pictures">
        <img class="delete btn${n}" onclick="delete_favorites(${kitten.id.toString()})" src="./svg/delete.svg" alt="Delete icon">
        `;
        //console.log(kitten.id);
        favorite_cat.append(content);
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

async function save_favorites(id) {
  try {
    const response = await fetch(API_URL_FAVORITES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify({
        image_id: id, //cma.jpg
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      //console.log('Save');
      console.log("Save ", response);
      console.log(data);

      load_favorites();
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      favorite_cat.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    favorite_cat.append(request_failed);
  }
}

async function delete_favorites(id) {
  try {
    const response = await fetch(API_URL_FAVORITES_DELETE(id), {
      method: "DELETE",
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log("Delete", response);
      console.log(data);

      load_favorites();
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      favorite_cat.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    favorite_cat.append(request_failed);
  }
}

load_random();
load_favorites();
//save_favorites();
