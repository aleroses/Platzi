import { loadFavorites } from "../main.mjs";
import {
  URLDELETE,
  APIKEY,
} from "./parameters.mjs";

const deleteFavorites = async id => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/favourites/${id}`,
    {
      method: "DELETE",
      headers: { "x-api-key": APIKEY },
    }
  );

  if (response.status === 200) {
    const data = await response.json();

    console.log("Delete: ", response);
    console.log("Data: ", data);
    loadFavorites();
  } else {
    console.log(response.status);
  }
};

export { deleteFavorites };
