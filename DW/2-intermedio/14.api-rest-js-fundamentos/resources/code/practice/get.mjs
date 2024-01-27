const KEY =
  "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY";
const URL =
  "https://api.thecatapi.com/v1/images/search";
const queryParameters = [
  URL,
  "?",
  "limit=",
  3,
  "&",
  "api_key=",
  KEY,
].join("");

// ?limit=10

const fetchData = async () => {
  const response = await fetch(queryParameters);
  const data = await response.json();

  console.log(data);
  return data;
};

export { fetchData };
