// import fetch from "node-fetch";

import {
  URLFAVORITES,
  queryFavorites,
  APIKEY,
} from "./parameters.mjs";

const getFavorites = async () => {
  const response = await fetch(queryFavorites, {
    headers: {
      "x-api-key": APIKEY,
    },
  });

  if (response.status === 200) {
    const data = await response.json();

    /* console.log("Favorites");
    console.log(data); */
    return data;
  } else {
    console.log(response);
    console.log(data);
    console.log(data.status);
  }
};

export { getFavorites };
