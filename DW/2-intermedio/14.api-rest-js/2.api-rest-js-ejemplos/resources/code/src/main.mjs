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

export {
  showCategories,
  showTrendingMovies,
  showByCategory,
  showSearch,
  showTrending,
};
