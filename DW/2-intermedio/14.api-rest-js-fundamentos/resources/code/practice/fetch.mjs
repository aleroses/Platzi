const API =
  "https://api.thecatapi.com/v1/images/search";

// ?limit=10

const fetchData = async () => {
  const response = await fetch(API);
  const data = await response.json();

  console.log(data);
  return data;
};

export { fetchData };
