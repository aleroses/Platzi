import { randomImg } from "./random.mjs";
import { fetchData } from "./methods/get.mjs";
import { favorites } from "./methods/post.mjs";
import { getFavorites } from "./methods/get-favorites.mjs";

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

  data &&
    data.map(favorite => {
      const figure =
        document.createElement("figure");
      const image = document.createElement("img");
      image.src = favorite.image.url;

      figure.append(image);
      container.append(figure);
    });
};

// window.addEventListener("load", showImages);
showImages();
randomImg();
loadFavorites();

export { showImages, loadFavorites };
