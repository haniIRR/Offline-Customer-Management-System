import { GetData } from "./Database.js";

var downloadJson = document.getElementById("downloadJson");

downloadJson.addEventListener("click", CreateJson);

async function CreateJson() {
  var data = await GetData();

  let json = JSON.stringify(data);

  let blob = new Blob([json], {
    type: "application/json",
  });

  let url = URL.createObjectURL(blob);

  let a = document.createElement("a");
  a.href = url;
  a.download = "customers.json";

  a.click();

  URL.revokeObjectURL(url); // آزاد کردن حافظه
}
