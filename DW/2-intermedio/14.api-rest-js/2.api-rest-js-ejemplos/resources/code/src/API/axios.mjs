import { authorization } from "../parameters.mjs";

const apiaxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  /* 
	headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: authorization,
  }, */
});

export { apiaxios };
