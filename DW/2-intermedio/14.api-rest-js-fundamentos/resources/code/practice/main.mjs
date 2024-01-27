import { fetchData } from "./get.mjs";
import { randomImg } from "./random.mjs";
import { favorites } from "./post.mjs";

const showImages = async () => {
  const data = await fetchData();

  const container =
    document.querySelector(".container");
  container.innerHTML = "";
  let content = "";

  data.map(img => {
    console.log(img);
    content += `
			<figure class="random-cats">
				<img src="${img.url}" class="cat-image" alt="" />
				<button type="button" class="like-button">💙</button>
			</figure>
		`;

    container.innerHTML = content;
  });
};

const showFavorites = async () => {
  const data = await favorites();

  const container = document.querySelector(
    ".favorite-cats"
  );

  data.map(favorite => {
    const content = document.createElement("img");

    content.src = favorite.image.url;

    console.log(content);

    container.append(content);
  });
};

// window.addEventListener("load", showImages);
showImages();
randomImg();
//showFavorites();

export { showImages };
