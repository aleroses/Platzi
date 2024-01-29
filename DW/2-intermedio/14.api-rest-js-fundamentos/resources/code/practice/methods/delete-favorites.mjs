import {
  URLDELETE,
  APIKEY,
} from "./parameters.mjs";

const deleteFavorites = async id => {
  const response = await fetch(URLDELETE(id), {
    method: "DELETE",
    headers: { "x-api-key": APIKEY },
  });

  if (response.status === 200) {
    const data = await response.json();

    console.log("Delete: ", response);
    console.log("Data: ", data);
  } else {
    console.log(response.status);
  }
};

export { deleteFavorites };
