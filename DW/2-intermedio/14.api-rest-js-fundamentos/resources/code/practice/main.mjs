import { fetchData } from "./fetch.mjs";

const showImages = async () => {
  const data = await fetchData();

  const container = document.querySelector(
    ".random-cats"
  );

  data.map(img => {
    const content = document.createElement("img");
    content.src = img.url;

    container.append(content);
  });
};

showImages();
