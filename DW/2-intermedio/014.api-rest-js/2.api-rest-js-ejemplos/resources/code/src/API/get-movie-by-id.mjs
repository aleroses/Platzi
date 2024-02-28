import { authorization } from "../parameters.mjs";

const getMovieById = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authorization,
      },
    }
  );
  const data = response.json();

  return data;
};

export { getMovieById };
