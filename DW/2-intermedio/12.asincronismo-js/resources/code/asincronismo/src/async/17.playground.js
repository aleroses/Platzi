import fetch from "node-fetch";

const fnAsync = async () => {
  // const url = "https://domain-api-com";

  try {
    const url =
      "https://api.escuelajs.co/api/v1/produts";
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (e) {
    throw new Error(e);
  }
};

fnAsync();
