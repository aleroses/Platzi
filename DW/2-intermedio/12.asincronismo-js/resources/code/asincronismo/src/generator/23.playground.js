async function fetchData(url) {
  if (
    !url.startsWith("http://") &&
    !url.startsWith("https://")
  ) {
    throw new Error("Invalid URL");
  }

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Something was wrong");
  }

  const data = await response.json();
  return data;
}

try {
  const data = await fetchData(
    "https://api.escuelajs.co/api/v1/categories"
  );
  console.log(data);
} catch (error) {
  console.error(error);
}
