import { preview } from "../nodes.mjs";

const createMovies = (data, preview) => {
  preview.innerHTML = "";

  data.results.map(movie => {
    const container = document.createElement("div");
    container.classList.add("movie-container");
    container.addEventListener("click", () => {
      location.hash = `#movie=${movie.id}`;
    });

    const img = document.createElement("img");
    img.classList.add("movie-img");

    img.setAttribute("alt", movie.title);
    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );

    container.append(img);
    preview.append(container);
  });
};

export { createMovies };
