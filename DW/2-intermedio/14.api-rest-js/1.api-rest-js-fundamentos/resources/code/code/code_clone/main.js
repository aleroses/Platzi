const API_URL_RANDOM =
  "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY";
const API_URL_FAVORITES =
  "https://api.thecatapi.com/v1/favourites?api_key=live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY";

const span_error = document.getElementById("error");

async function load_random() {
  const response = await fetch(API_URL_RANDOM);
  const data = await response.json();
  console.log("Random");
  console.log(data);

  if (response.status !== 200) {
    span_error.innerHTML = "Error: " + response.status;
  } else {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = () => save_favorites(data[0].id);
    btn2.onclick = () => save_favorites(data[1].id);
  }
}

async function load_favorites() {
  const response = await fetch(API_URL_FAVORITES);
  const data = await response.json();
  console.log("Favorites");
  console.log(data);

  if (response.status !== 200) {
    span_error.innerHTML = "Error: " + (await response).status + data.message;
  } else {
    data.forEach((kitten) => {
      const section = document.getElementById("favorite");
      const article = document.createElement("article");
      const img = document.createElement("img");
      const btn = document.createElement("button");
      const btn_text = document.createTextNode("Delete");

      img.src = kitten.image.url;
      img.width = 150;
      btn.appendChild(btn_text);
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
    });
  }
}

async function save_favorites(id) {
  const response = await fetch(API_URL_FAVORITES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });

  const data = await response.json();

  console.log("Save");
  console.log(response);

  if (response.status !== 200) {
    span_error.innerHTML = "Error: " + response.status + data.message;
  }
}

load_random();
load_favorites();
