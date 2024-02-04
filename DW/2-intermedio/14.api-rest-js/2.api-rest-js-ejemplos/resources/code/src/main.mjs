import { getTrendingMovies } from "./API/get-trending-movies.mjs";
import { getCategories } from "./API/get-categories.mjs";
import { preview, previewCat } from "./nodes.mjs";

const showTrendingMovies = async () => {
  const data = await getTrendingMovies();

  preview.innerHTML = "";

  data.results.map(movie => {
    /* const preview = document.querySelector(
      "#trendingPreview .trendingPreview-movieList"
    ); */
    const container = document.createElement("div");
    container.classList.add("movie-container");

    const img = document.createElement("img");
    img.classList.add("movie-img");
    img.setAttribute("alt", movie.title);
    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );

    container.append(img);
    preview.append(container);
  });
};

const showCategories = async () => {
  const data = await getCategories();
  console.log(data);

  previewCat.innerHTML = "";

  data.genres.map(genre => {
    /* const previewCat = document.querySelector(
      "#categoriesPreview .categoriesPreview-list"
    ); */
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

export { showCategories, showTrendingMovies };
