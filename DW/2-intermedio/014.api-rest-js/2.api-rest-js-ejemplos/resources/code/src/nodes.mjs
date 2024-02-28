// Sections
const headerSection =
  document.querySelector("#header");
const trendingPreviewSection =
  document.querySelector("#trendingPreview");
const categoriesPreviewSection =
  document.querySelector("#categoriesPreview");
const genericSection = document.querySelector(
  "#genericList"
);
const movieDetailSection = document.querySelector(
  "#movieDetail"
);

// Lists & Containers
const searchForm =
  document.querySelector("#searchForm");

// preview : trendingMoviesPreviewList
const preview = document.querySelector(
  ".trendingPreview-movieList"
);

// previewCat : categoriesPreviewList
const previewCat = document.querySelector(
  ".categoriesPreview-list"
);
const movieDetailCategoriesList =
  document.querySelector(
    "#movieDetail .categories-list"
  );
const relatedMoviesContainer =
  document.querySelector(
    ".relatedMovies-scrollContainer"
  );

// Elements
const headerTitle = document.querySelector(
  ".header-title"
);
const arrowBtn = document.querySelector(
  ".header-arrow"
);
const headerCategoryTitle = document.querySelector(
  ".header-title--categoryView"
);

// xd
const searchFormInput = document.querySelector(
  "#searchForm input"
);

//xd
const searchFormBtn =
  document.querySelector("#searchBtn");

const trendingBtn = document.querySelector(
  ".trendingPreview-btn"
);

const movieDetailTitle = document.querySelector(
  ".movieDetail-title"
);
const movieDetailDescription =
  document.querySelector(
    ".movieDetail-description"
  );
const movieDetailScore = document.querySelector(
  ".movieDetail-score"
);

export {
  headerSection,
  trendingPreviewSection,
  categoriesPreviewSection,
  genericSection,
  movieDetailSection,
  searchForm,
  preview,
  previewCat,
  movieDetailCategoriesList,
  relatedMoviesContainer,
  headerTitle,
  arrowBtn,
  headerCategoryTitle,
  searchFormInput,
  searchFormBtn,
  trendingBtn,
  movieDetailTitle,
  movieDetailDescription,
  movieDetailScore,
};
