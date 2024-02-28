import { previewCat } from "../nodes.mjs";

const createCategories = (data, previewCat) => {
  previewCat.innerHTML = "";

  data.genres.map(genre => {
    const container = document.createElement("div");
    container.classList.add("category-container");

    const title = document.createElement("h3");
    title.classList.add("category-title");
    title.setAttribute("id", `id${genre.id}`);
    
		title.addEventListener("click", () => {
      location.hash = `#category=${genre.id}-${genre.name}`;
    });
    const titleText = document.createTextNode(
      genre.name
    );

    title.appendChild(titleText);
    container.appendChild(title);
    previewCat.appendChild(container);
  });
};

export { createCategories };
