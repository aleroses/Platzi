const URLRANDOM =
  "https://api.thecatapi.com/v1/images/search";
const URLFAVORITES =
  "https://api.thecatapi.com/v1/favourites";
const KEY = [
  "&",
  "api_key=",
  "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY",
].join("");

const queryRandom = [
  URLRANDOM,
  "?",
  "limit=",
  3,
  KEY,
].join("");

const queryFavorites = [URLFAVORITES, KEY].join("");

// ?limit=10

export {
  KEY,
  URLRANDOM,
  queryRandom,
  queryFavorites,
};
