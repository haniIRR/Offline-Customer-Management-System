import { GetLogsData, InitDatabase } from "./Database.js";

var activityList = document.getElementById("activityList");

var data = [];
let logMap = new Map();

window.addEventListener("load", async () => {
  await InitDatabase();
  data = await GetLogsData();
  CreateMap();
  ShowCustomerLogs(10);
});

function ShowCustomerLogs(customerId) {
  activityList.innerHTML = "";

  let logs = logMap.get(customerId);

  logs.forEach((element) => {
    let li = document.createElement("li");

    li.innerHTML = `
        <strong>
        ${new Date(element.date).toLocaleString()}
        </strong>
  
        <small>
        ${element.desc}
        </small>
      `;

    activityList.append(li);
  });
}

function CreateMap() {
  data.forEach((e) => {
    if (!logMap.has(e.customerId)) {
      logMap.set(e.customerId, []);
    }

    logMap.get(e.customerId).push(e);
  });
  console.log(logMap);
}
