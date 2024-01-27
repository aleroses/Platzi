import {
  KEY,
  queryParameters,
} from "./parameters.mjs";

const favorites = async id => {
  const response = await fetch(queryParameters, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": KEY,
    },
    body: JSON.stringify({
      image_id: id,
      // sub_id:
    }),
  });

  if (response.ok === 200) {
    const data = await response.json();
    console.log("Save: ", response);
    console.log(data);
  } else {
    console.log(response.status);
  }
};

export { favorites };
