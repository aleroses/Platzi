import { getTrendingMovies } from "./API/get-trending-movies.mjs";
import { getCategories } from "./API/get-categories.mjs";

const showTrendingMovies = async () => {
  const data = await getTrendingMovies();

  //console.log(data);

  data.results.map(movie => {
    //console.log(movie);
    const preview = document.querySelector(
      "#trendingPreview .trendingPreview-movieList"
    );
    const container = document.createElement("div");
    container.classList.add("movie-container");

    const img = document.createElement("img");
    img.classList.add("movie-img");
    img.setAttribute("alt", movie.title);
    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );

    preview.append(container);
    container.append(img);
  });
};

const showCategories = async () => {
  const data = await getCategories();
  console.log(data);

  data.genres.map(genre => {
    const preview = document.querySelector(
      "#categoriesPreview .categoriesPreview-list"
    );
    const container = document.createElement("div");
    container.classList.add("category-container");

    const title = document.createElement("h3");
    title.classList.add("category-title");
    title.setAttribute("id", `id${genre.id}`);
    const titleText = document.createTextNode(
      genre.name
    );

    title.appendChild(titleText);
    container.appendChild(title);
    preview.appendChild(container);
  });
};

/* showTrendingMovies();
showCategories();
navigator(); */

export { showCategories, showTrendingMovies };
