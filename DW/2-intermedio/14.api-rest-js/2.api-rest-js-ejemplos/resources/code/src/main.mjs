import { getTrendingMovies } from "./API/get-trending-movies.mjs";
import { getCategories } from "./API/get-categories.mjs";
import {
  genericSection,
  preview,
  previewCat,
} from "./nodes.mjs";
import { getByCategory } from "./API/get-by-category.mjs";
import { createMovies } from "./utils/create-movies.mjs";
import { createCategories } from "./utils/create-categories.mjs";
import { getSearch } from "./API/get-search.mjs";

window.onbeforeunload = () => {
  scrollTo(0, 0);
};

const showTrendingMovies = async () => {
  const data = await getTrendingMovies();

  preview.innerHTML = "";

  /* data.results.map(movie => {
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
  }); */

  createMovies(data, preview);
};

const showCategories = async () => {
  const data = await getCategories();

  previewCat.innerHTML = "";

  /* data.genres.map(genre => {
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
  }); */

  createCategories(data, previewCat);
};

const showByCategory = async id => {
  const data = await getByCategory(id);
  console.log(data);

  genericSection.innerHTML = "";

  /* data.results.map(movie => {
    const movieContainer =
      document.createElement("div");
    movieContainer.classList.add("movie-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" +
        movie.poster_path
    );

    movieContainer.appendChild(movieImg);
    genericSection.appendChild(movieContainer);
  }); */

  createMovies(data, genericSection);
};

const showSearch = async query => {
  const data = await getSearch(query);

  createMovies(data, genericSection);
};

export {
  showCategories,
  showTrendingMovies,
  showByCategory,
  showSearch,
};
