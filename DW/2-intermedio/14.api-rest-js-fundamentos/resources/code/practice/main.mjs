import { fetchData } from "./get.mjs";
import { randomImg } from "./random.mjs";
import { favorites } from "./post.mjs";

const showImages = async () => {
  const data = await fetchData();

  const container = document.querySelector(
    ".random-cats"
  );
  container.innerHTML = "";

  data.map(img => {
    const content = document.createElement("img");
    content.src = img.url;

    container.append(content);
  });
};

const showFavorites = async () => {};

// window.addEventListener("load", showImages);
showImages();
randomImg();

export { showImages };
