import { fetchData } from "./get.mjs";
import { randomImg } from "./random.mjs";

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

// window.addEventListener("load", showImages);
showImages();
randomImg();

export { showImages };
