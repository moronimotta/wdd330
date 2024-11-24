import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import getBackpackItems from "./backpack.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeaderFooter();

  const productId = getParam("product");
  const dataSource = new ProductData();
  const productData = await dataSource.findProductById(productId);

  const productDetails = new ProductDetails(productId, productData);
  await productDetails.init();

  document
    .getElementById("addToCart")
    .addEventListener("click", (e) => addToCartHandler(e, productDetails));


  async function addToCartHandler(e, pDetails) {
    const product = pDetails.dataSource;
    pDetails.addToCart(product);
    getBackpackItems();
    const cartElement = document.querySelector(".cart");
    cartElement.scrollIntoView({ behavior: "smooth" });
  }

  getBackpackItems();
});