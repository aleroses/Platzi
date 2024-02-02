import { getTrendingMovies } from "./API/get-trending-movies.mjs";

const showTrendingMovies = async () => {
  const data = await getTrendingMovies();

  //console.log(data);

  data.results.map(movie => {
    console.log(movie);
    const container = document.createElement("div");
    container.classList.add("movie-container");

    const img = document.createElement("img");
    img.classList.add("movie-img");
    img.setAttribute("alt", movie.title);
    //movie.setAttribute('src', )
  });
};

showTrendingMovies();
