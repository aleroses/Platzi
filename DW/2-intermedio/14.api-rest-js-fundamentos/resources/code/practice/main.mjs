import { fetchData } from "./methods/get.mjs";
import { randomImg } from "./random.mjs";
import { favorites } from "./methods/post.mjs";

/* const saveFavorites = async id => {
  const data = await favorites(id);
  return data;
}; */

const showImages = async () => {
  const data = await fetchData();

  const container =
    document.querySelector(".container");
  container.innerHTML = "";
  let content = "";

  data.map(img => {
    //console.log(img);
    content += `
			<figure class="random-cats">
				<img src="${img.url}" class="cat-image" alt="" />
				<button type="button" class="like-button">💙</button>
			</figure>
		`;
    favorites(img.id);
    // onclick="saveFavorites('${img.id}')"

    container.innerHTML = content;
  });
};

// window.addEventListener("load", showImages);
showImages();
randomImg();

export { showImages };
