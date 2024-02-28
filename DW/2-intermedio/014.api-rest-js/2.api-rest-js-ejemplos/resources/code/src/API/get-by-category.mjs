import { authorization } from "../parameters.mjs";

const movies = ["?", "with_genres="].join("");

const getByCategory = async id => {
  const response = await fetch(
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

export { getByCategory };
