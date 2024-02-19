const URLRANDOM =
  "https://api.thecatapi.com/v1/images/search";
const URLFAVORITES =
  "https://api.thecatapi.com/v1/favourites";
const URLDELETE = id => {
  return `https://api.thecatapi.com/v1/favourites/:${id}`;
};
const APIKEY =
  "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY";
const KEY = [/* "&", */ "api_key=", APIKEY].join(
  ""
);

const queryRandom = [
  URLRANDOM,
  "?",
  "limit=",
  3,
  "&",
  KEY,
].join("");

const queryFavorites = [
  URLFAVORITES,
  "?",
  KEY,
].join("");
//console.log(queryFavorites);

/* const queryDelete = [
  URLDELETE, 
] */

// ?limit=10

export {
  URLRANDOM,
  URLFAVORITES,
  URLDELETE,
  APIKEY,
  KEY,
  queryRandom,
  queryFavorites,
};
