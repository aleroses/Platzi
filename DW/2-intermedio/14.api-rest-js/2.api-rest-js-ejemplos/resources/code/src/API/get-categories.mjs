import { authorization } from "../parameters.mjs";
import { apiaxios } from "./axios.mjs";

const getCategories = async () => {
  const { data } = await apiaxios(
    "genre/movie/list?language=en",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization,
      },
    }
  );
  //const data = await response.json();

  return data;
};

export { getCategories };

/* const getCategories = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
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
