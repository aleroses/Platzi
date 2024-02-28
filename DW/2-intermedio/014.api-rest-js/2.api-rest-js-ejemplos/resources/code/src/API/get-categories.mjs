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

  return data;
};

export { getCategories };
