import {
  URLFAVORITES,
  queryFavorites,
} from "./parameters.mjs";

const getFavorites = async () => {
  const response = await fetch(queryFavorites);

  if (response.status === 200) {
    const data = await response.json();

    console.log("Favorites");
    console.log(data);
    return data;
  }
};

export { getFavorites };
