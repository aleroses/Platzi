import { getTrendingMovies } from "./API/get-trending-movies.mjs";
import { getCategories } from "./API/get-categories.mjs";
import {
  genericSection,
  headerSection,
  movieDetailCategoriesList,
  movieDetailDescription,
  movieDetailScore,
  movieDetailTitle,
  preview,
  previewCat,
} from "./nodes.mjs";
import { getByCategory } from "./API/get-by-category.mjs";
import { createMovies } from "./utils/create-movies.mjs";
import { createCategories } from "./utils/create-categories.mjs";
import { getSearch } from "./API/get-search.mjs";
import { getMovieById } from "./API/get-movie-by-id.mjs";

window.onbeforeunload = () => {
  scrollTo(0, 0);
};

const showTrendingMovies = async () => {
  const data = await getTrendingMovies();

  preview.innerHTML = "";

  createMovies(data, preview);
};

const showCategories = async () => {
  const data = await getCategories();

  previewCat.innerHTML = "";

  createCategories(data, previewCat);
};

const showByCategory = async id => {
  const data = await getByCategory(id);
  //console.log(data);

  genericSection.innerHTML = "";

  createMovies(data, genericSection);
};

const showSearch = async query => {
  const data = await getSearch(query);
  console.log("Show search: ", data);

  createMovies(data, genericSection);
};

const showTrending = async () => {
  const data = await getTrendingMovies();

  createMovies(data, genericSection);
};

const showMovieById = async id => {
  const data = await getMovieById(id);

  const movieImgUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  console.log(movieImgUrl);
  headerSection.style.background = `
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 19.27%,
      rgba(0, 0, 0, 0) 29.17%
    ),
    url(${movieImgUrl})
  `;

  movieDetailTitle.textContent = data.title;
  movieDetailDescription.textContent =
    data.overview;
  movieDetailScore.textContent = data.vote_average;

  createCategories(data, movieDetailCategoriesList);
};

export {
  showCategories,
  showTrendingMovies,
  showByCategory,
  showSearch,
  showTrending,
  showMovieById,
};
