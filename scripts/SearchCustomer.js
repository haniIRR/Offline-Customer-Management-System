import { GetData } from "./Database.js";
import { LoadData } from "./AddModal.js";
var searchInput = document.getElementById("searchInput");

const debounceSearch = Debounce(search, 500);

searchInput.addEventListener("input", debounceSearch);

function Debounce(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

async function search() {
  if (searchInput.value.trim() == "") {
    LoadData(null);
  }
  var data = await GetData();

  var f = data.filter((a) => a.customerName.includes(searchInput.value));
  LoadData(f);
}
