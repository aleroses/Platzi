import { randomImg } from "./random.mjs";
import { fetchData } from "./methods/get.mjs";
import { favorites } from "./methods/post.mjs";
import { getFavorites } from "./methods/get-favorites.mjs";
import { deleteFavorites } from "./methods/delete-favorites.mjs";

const showImages = async () => {
  const data = await fetchData();

  const container =
    document.querySelector(".container");
  container.innerHTML = "";
  // let content = "";

  data.map(img => {
    const figure = document.createElement("figure");
    figure.className = "random-cats";

    const image = document.createElement("img");
    image.className = "cat-image";
    image.src = img.url;
    image.alt = "";
    figure.appendChild(image);

    const button = document.createElement("button");
    button.className = "like-button";
    button.innerHTML = "💙";
    button.addEventListener("click", () => {
      favorites(img.id);
      loadFavorites();
    });
    figure.appendChild(button);

    container.appendChild(figure);
  });
};

const loadFavorites = async () => {
  const data = await getFavorites();

  const container = document.querySelector(
    ".favorite-cats"
  );
  container.innerHTML = "";

  if (data.length === 0) {
    // Mostrar un mensaje u otra acción cuando no hay favoritos disponibles
    container.innerHTML =
      "No hay favoritos disponibles.";
  } else {
    data.map(favorite => {
      //console.log(favorite.id);
      const figure =
        document.createElement("figure");
      figure.className = "delete";
      const image = document.createElement("img");
      image.src = favorite.image.url;
      image.className = "favorite-cat";

      const button =
        document.createElement("button");
      button.className = "delete-button";
      button.innerHTML = "❌";
      button.addEventListener("click", () => {
        deleteFavorites(favorite.id);
      });

      figure.append(image);
      figure.append(button);
      container.append(figure);
    });
  }
};

// window.addEventListener("load", showImages);
showImages();
randomImg();
loadFavorites();

export { showImages, loadFavorites };
