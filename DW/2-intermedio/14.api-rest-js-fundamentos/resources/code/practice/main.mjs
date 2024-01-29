import { randomImg } from "./random.mjs";
import { fetchData } from "./methods/get.mjs";
import { favorites } from "./methods/post.mjs";

const showImages = async () => {
  const data = await fetchData();

  const container =
    document.querySelector(".container");
  container.innerHTML = "";
  // let content = "";

  data.map(img => {
    /* content += `
			<figure class="random-cats">
				<img src="${img.url}" class="cat-image" alt="" />
        <button class="like-button">💙</button>
			</figure>
		`;

    container.innerHTML = content; */

    const figure = document.createElement("figure");
    figure.className = "random-cats";

    const image = document.createElement("img");
    image.src = img.url;
    image.alt = "";
    figure.appendChild(image);

    const button = document.createElement("button");
    button.className = "like-button";
    button.innerHTML = "💙";
    button.addEventListener("click", () => {
      saveFavorites(img.id);
    });
    figure.appendChild(button);

    container.appendChild(figure);
  });
};

const saveFavorites = async id => {
  const data = await favorites(id);
  return data;
};

// window.addEventListener("load", showImages);
showImages();
randomImg();

export { showImages };
