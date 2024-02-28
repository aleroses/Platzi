import { authorization } from "../parameters.mjs";

const getSimilar = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar`,
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

// https://api.themoviedb.org/3/movie/{movie_id}/similar

export { getSimilar };
