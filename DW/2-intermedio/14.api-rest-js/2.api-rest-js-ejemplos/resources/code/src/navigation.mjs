import { getByCategory } from "./API/get-by-category.mjs";
import { getSearch } from "./API/get-search.mjs";
import {
  showByCategory,
  showCategories,
  showSearch,
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
  searchFormInput,
  trendingBtn,
  trendingPreviewSection,
} from "./nodes.mjs";

const navigator = () => {
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

  /* document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; */
};

/* searchFormBtn.addEventListener("click", () => {
  // const [name] = searchFormInput.value.match(/[A-Za-z]+/g);

  // location.hash = `#search=${name}`;

  location.hash =
    "#search=" +
    searchFormInput.value.split(" ").join(" ");
}); */

searchFormBtn.addEventListener("click", e => {
  if (searchFormInput.value.length > 0) {
    location.hash = `#search=${searchFormInput.value}`;
  }

  e.preventDefault(); // Fix para que funcione correctamente el history.back()
});

trendingBtn.addEventListener("click", () => {
  location.hash = "#trends";
});

arrowBtn.addEventListener("click", () => {
  //location.hash = "#home";
  // history.back();
  location.hash = window.history.back();
  //location.hash = window.history.back(); //para guardar las URL que visita el usuario se usa window.history y par regresar al anterior el método back()
});

/* arrowBtn.onclick = () => window.history.back(); */

/* const navigator = () => {
  const hash = {
    "#home": () => homePage(),
    "#category=": () => categoriesPage(),
    "#movie=": () => moviesPage(),
    "#search=": () => searchPage(),
    "#trends": () => trendsPage(),
  };

  hash[location.hash]();
}; */

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

  /*  window.onbeforeunload = () => {
    scrollTo(0,0);
  } */

  window.scrollTo(0, 0);

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

  // ['#category', 'id-name']
  const [_, categoryData] =
    location.hash.split("=");
  const [categoryId, categoryName] =
    categoryData.split("-");

  headerCategoryTitle.innerHTML = categoryName;

  showByCategory(categoryId);
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
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add(
    "inactive"
  );
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");

  // ['#search', 'platzi']
  const [_, query] = location.hash.split("=");
  // %20%20%20fury%20%20

  // En caso de hacer consultas con espacios vacios
  const [x] = query.match(/[A-Za-z]+/g);
  console.log(x);
  showSearch(x);
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
