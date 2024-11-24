import { loadHeaderFooter } from "./utils.mjs";

<<<<<<< HEAD
const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");

const productList = new ProductListing("tents", dataSource, listElement);

productList.init();
=======
async function initialize() {
  try {
    await loadHeaderFooter();
  } catch (error) {
    console.error("Error loading header and footer:", error);
  }
}

initialize();
>>>>>>> 2dbe53a558d94bc787c9f6753a951419a70d91a1
