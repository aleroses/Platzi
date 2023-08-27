const querystring = ["?", "limit=3"].join("");

const API_URL = `https://api.thecatapi.com/v1/images/search${querystring}&api_key=lover_xdW5fCl0zzlol50jHsAhxdFJV6jC9RT3YY5lolcP78HvGH80daxzY`;

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
