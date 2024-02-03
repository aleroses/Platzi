import {
  showCategories,
  showTrendingMovies,
} from "./main.mjs";

/* const navigator = () => {
  console.log({ location });

  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailsPage();
  } else if (
    location.hash.startsWith("#category=")
  ) {
    categoriesPage();
  } else {
    homePage();
  }

  location.hash;
}; */

const navigator = () => {
  const hash = {
    "#trends": () => trendsPage(),
    "#search": () => searchPage(),
    "#movie": () => moviePage(),
    "#category": () => categoryPage(),
    "#home": () => homePage(),
  };

  hash[location.hash]();
};

window.addEventListener("load", navigator, false);
window.addEventListener(
  "hashchange",
  navigator,
  false
);

const homePage = () => {
  console.log("Home!!!");

  showTrendingMovies();
  showCategories();
};

const categoriesPage = () => {
  console.log("category!!!");
};
const movieDetailsPage = () => {
  console.log("Movie!!!");
};
const searchPage = () => {
  console.log("Search!!!");
};
const trendsPage = () => {
  console.log("Trends!!");
};

export { navigator };

/* const navigate = () => {
  const hash = {
    "#trends": () => trendsPage(),
    "#search": () => searchPage(),
    "#movie": () => moviePage(),
    "#category": () => categoryPage(),
    "#home": () => homePage(),
  };

  hash[location.hash]();
}; */
