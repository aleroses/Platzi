import { authorization } from "../parameters.mjs";

const getTrendingMovies = async () => {
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
};

export { getTrendingMovies };
