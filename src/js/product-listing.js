import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

async function initialize() {
  await loadHeaderFooter();
  const category = getParam("category");
  const dataSource = new ExternalServices();
  const listElement = document.querySelector(".product-list");
  const myList = new ProductList(category, dataSource, listElement);

  const breadcrumbs = document.querySelector(".breadcrumbs");
  const number_items = await dataSource.getData(category);
  breadcrumbs.innerHTML = `${myList.category}--->${number_items.length} items`;

  const sorBySelect = document.querySelector("#sort");

  sorBySelect.addEventListener("input", async (e) => {
    const sortedProductsBy = e.target.value;
    let currentList = await myList.getCurrentProductList();
    let sortedList = await myList.sortList(currentList, sortedProductsBy);
    myList.renderList(sortedList);
  });

  myList.init();
}

initialize();