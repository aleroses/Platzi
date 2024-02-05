import { authorization } from "../parameters.mjs";

const query = ["?", "query="].join("");

const getSearch = async name => {
  console.log("Peli buscar: ", name);

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie${query}${name}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authorization,
      },
    }
  );
  const data = response.json();
  // console.log("buscar: ", data);

  return data;
};

export { getSearch };

//"https://api.themoviedb.org/3/search/movie?query=fury&include_adult=false&language=en-US&page=1"

// `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`;

// `https://api.themoviedb.org/3/search/movie${query}${name}`
