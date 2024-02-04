import { authorization } from "../parameters.mjs";

/* const getTrendingMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization,
      },
    }
  );

  const data = await response.json();

  return data;
}; */

const movies = ["?", "with_genres="].join("");

const getByCategory = async id => {
  const response = fetch(
    `https://api.themoviedb.org/3/discover/movie${movies}${id}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization,
      },
    }
  );
  const data = await response.json();

  return data;
};

// "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
// https://api.themoviedb.org/3/discover/movie
export { getByCategory };
