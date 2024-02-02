import { authorization } from "./parameters.mjs";

const getTrendingMoviesPreview = async () => {
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
  console.log(data);
};

getTrendingMoviesPreview();
