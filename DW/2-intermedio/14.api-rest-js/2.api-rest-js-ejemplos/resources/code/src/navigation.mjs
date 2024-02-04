import {
  showCategories,
  showTrendingMovies,
} from "./main.mjs";
import {
  arrowBtn,
  categoriesPreviewSection,
  genericSection,
  headerCategoryTitle,
  headerSection,
  headerTitle,
  movieDetailSection,
  searchForm,
  searchFormBtn,
  trendingBtn,
  trendingPreviewSection,
} from "./nodes.mjs";

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

searchFormBtn.addEventListener("click", () => {
  location.hash = "#search=";
});

trendingBtn.addEventListener("click", () => {
  location.hash = "#trends";
});

arrowBtn.addEventListener("click", () => {
  location.hash = "#home";
});

const navigator = () => {
  const hash = {
    "#home": () => homePage(),
    "#category=": () => categoriesPage(),
    "#movie=": () => moviesPage(),
    "#search=": () => searchPage(),
    "#trends": () => trendsPage(),
  };

  hash[location.hash]();
};

window.addEventListener("load", navigator, false);
window.addEventListener(
  "hashchange",
  navigator,
  false
);

// DOMContentLoaded
// load

const homePage = () => {
  console.log("Home!!!");

  headerSection.classList.remove(
    "header-container--long"
  );
  headerSection.style.background = "";
  arrowBtn.classList.add("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.remove("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.remove(
    "inactive"
  );
  categoriesPreviewSection.classList.remove(
    "inactive"
  );
  genericSection.classList.add("inactive");
  movieDetailSection.classList.add("inactive");

  showTrendingMovies();
  showCategories();
};

const categoriesPage = () => {
  console.log("category!!!");

  headerSection.classList.remove(
    "header-container--long"
  );
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add(
    "inactive"
  );
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");
};

const moviesPage = () => {
  console.log("Movie!!!");

  headerSection.classList.add(
    "header-container--long"
  );
  // headerSection.style.background = '';
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.add("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add(
    "inactive"
  );
  genericSection.classList.add("inactive");
  movieDetailSection.classList.remove("inactive");
};

const searchPage = () => {
  console.log("Search!!!");

  headerSection.classList.remove(
    "header-container--long"
  );
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add(
    "inactive"
  );
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");
};

const trendsPage = () => {
  console.log("Trends!!");

  headerSection.classList.remove(
    "header-container--long"
  );
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add(
    "inactive"
  );
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");
};

export { navigator };
