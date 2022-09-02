import ProductPage from "./screens/ProductPage.js";
const router = () => {
  const main = document.getElementById("main-container");
  main.innerHTML = ProductPage.render();
};
window.addEventListener("load", router);
