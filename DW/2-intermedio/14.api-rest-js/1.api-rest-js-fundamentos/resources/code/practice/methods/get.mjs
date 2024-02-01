//import fetch from "node-fetch";
import { queryRandom } from "./parameters.mjs";

const fetchData = async () => {
  const response = await fetch(queryRandom);
  const data = await response.json();

  //console.log(data);
  return data;
};

export { fetchData };
