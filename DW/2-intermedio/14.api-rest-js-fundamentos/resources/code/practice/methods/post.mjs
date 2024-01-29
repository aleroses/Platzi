import {
  APIKEY,
  URLFAVORITES,
} from "./parameters.mjs";

const favorites = async id => {
  const response = await fetch(URLFAVORITES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APIKEY,
    },
    body: JSON.stringify({
      image_id: id,
      //sub_id, subId
    }),
  });

  if (response.status === 200) {
    const data = await response.json();
    console.log("Save: Post ❤💜💙", response);
    console.log("Data: Post ❤💜💙", data);
    //return data;

    // función cargar favoritos()
  } else {
    console.log("xd", response.status);
  }
};

export { favorites };
