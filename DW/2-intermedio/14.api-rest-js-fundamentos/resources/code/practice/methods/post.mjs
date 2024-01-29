import {
  APIKEY,
  URLFAVORITES,
} from "./parameters.mjs";
import { loadFavorites } from "../main.mjs";

const favorites = async id => {
  const response = await fetch(URLFAVORITES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APIKEY,
    },
    body: JSON.stringify({
      image_id: id,
      sub_id: "user-123",
    }),
  });

  if (response.status === 200) {
    const data = await response.json();
    console.log("Save: Post ❤💜💙", response);
    console.log("Data: Post ❤💜💙", data);
    //return data;

    // función cargar favoritos()
    loadFavorites();
  } else {
    console.log("xd", response.status);
  }
};

export { favorites };
