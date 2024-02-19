import { showImages } from "./main.mjs";

const randomImg = () => {
  const randomButton =
    document.querySelector("button");

  randomButton.addEventListener(
    "click",
    showImages
  );
};

export { randomImg };
