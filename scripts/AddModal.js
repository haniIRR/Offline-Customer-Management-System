import {
  InitDatabase,
  AddCustomer,
  UpdateCustomer,
  GetData,
} from "./Database.js";

var customerTable = document.getElementById("customerTable");

addCustomer.addEventListener("click", Modal);

let upddata;
function Modal() {
  var div = document.createElement("div");
  div.innerHTML = `<!-- Open Modal Button -->

    
    <!-- Modal Background -->
    <div
      id="customerModal"
      class=" fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    
    
      <!-- Modal Box -->
      <div class="bg-white dark:bg-gray-800 w-full max-w-md rounded-xl p-6 shadow-lg">
    
    
        <!-- Header -->
        <div class="flex justify-between items-center mb-5">
    
          <h2 class="text-xl font-bold text-gray-800 dark:text-white">
            Add Customer
          </h2>
    
          <button
          id="closeModal"
            class="text-gray-500 hover:text-red-500 text-xl">
            ✕
          </button>
    
        </div>
    
    
    
        <!-- Form -->
    
        <form id="customerForm" class="space-y-4">
    
    
          <!-- Name -->
          <div>
            <label class="block mb-1 text-sm">
              Name
            </label>
    
            <input
              id="customerName"
              value="${upddata ? upddata.customerName : ""}"
              type="text"
              class="w-full p-2 rounded-lg border dark:bg-gray-700"
              placeholder="Enter name">
          </div>
    
    
    
          <!-- Phone -->
          <div>
            <label class="block mb-1 text-sm">
              Phone
            </label>
    
            <input
              id="customerPhone"
              value="${upddata ? upddata.customerPhone : ""}"
              type="text"
              class="w-full p-2 rounded-lg border dark:bg-gray-700"
              placeholder="Enter phone">
          </div>
    
    
    
          <!-- Email -->
          <div>
            <label class="block mb-1 text-sm">
              Email
            </label>
    
            <input
              id="customerEmail"
              value="${upddata ? upddata.customerEmail : ""}"
              type="email"
              class="w-full p-2 rounded-lg border dark:bg-gray-700"
              placeholder="Enter email">
          </div>
    
    
    
          <!-- Company -->
          <div>
            <label class="block mb-1 text-sm">
              Company
            </label>
    
            <input
              id="customerCompany"
              value="${upddata ? upddata.customerCompany : ""}"
              type="text"
              class="w-full p-2 rounded-lg border dark:bg-gray-700"
              placeholder="Enter company">
          </div>
    
    
    
          <!-- Status -->
          <div>
            <label class="block mb-1 text-sm">
              Status
            </label>
    
            <select
              id="customerStatus"
              class="w-full p-2 rounded-lg border dark:bg-gray-700">
    
              <option value="new" ${
                upddata?.customerStatus === "new" ? "selected" : ""
              }>
                New
              </option>
    
              <option value="vip" ${
                upddata?.customerStatus === "vip" ? "selected" : ""
              }>
                VIP
              </option>
    
              <option value="inactive" ${
                upddata?.customerStatus === "inactive" ? "selected" : ""
              }>
                Inactive
              </option>
    
            </select>
    
          </div>
    
    
    
          <!-- Buttons -->
    
          <div class="flex justify-end gap-3 pt-4">
    
    
            <button
              type="button"
              id="cancelBtn"
              class="px-4 py-2 rounded-lg bg-gray-300">
              Cancel
            </button>
    
    
            <button
            id="${upddata ? "updbtn" : "saveBtn"}"
              type="button"
              class="px-4 py-2 rounded-lg bg-blue-600 text-white">
              Save
            </button>
    
    
          </div>
    
    
        </form>
    
    
      </div>
    
    </div>`;

  document.body.append(div);

  const saveBtn = div.querySelector("#saveBtn");
  const updateBtn = div.querySelector("#updbtn");

  if (saveBtn) saveBtn.addEventListener("click", SaveHandler);

  if (updateBtn)
    updateBtn.addEventListener("click", () => UpdateHandler(upddata.id));

  div.querySelector("#cancelBtn").addEventListener("click", closeModal);

  div.querySelector("#closeModal").addEventListener("click", closeModal);
}

function closeModal() {
  var customerModal = document.getElementById("customerModal");
  customerModal.remove();
  upddata = null;
}

async function SaveHandler() {
  const customerName = document.getElementById("customerName");
  const customerPhone = document.getElementById("customerPhone");
  const customerEmail = document.getElementById("customerEmail");
  const customerCompany = document.getElementById("customerCompany");
  const customerStatus = document.getElementById("customerStatus");

  var obj = {
    customerName: customerName.value,
    customerPhone: customerPhone.value,
    customerEmail: customerEmail.value,
    customerCompany: customerCompany.value,
    customerStatus: customerStatus.value,
  };

  var re = await AddCustomer(obj);
  if (re) {
    closeModal();
    LoadData();
  }
}

window.addEventListener("load", async () => {
  await InitDatabase();
  LoadData();
});

async function LoadData() {
  var data = await GetData();
  var frag = document.createDocumentFragment();

  data.forEach((element) => {
    var row = document.createElement("tr");

    row.innerHTML = `<td>${element.id}</td>
    <td>${element.customerName}</td>
<td>${element.customerPhone}</td>
<td>${element.customerCompany}</td>
<td>${element.customerStatus}</td>
<td class="px-4 py-3">
  <div class="flex items-center justify-center gap-2">
    <button
      class="updbtn px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Update
    </button>

    <button
      onclick="DeleteHandler(${element.id})"
      class="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
    >
      Delete
    </button>
  </div>
</td>`;

    const updateBtn = row.querySelector(".updbtn");

    updateBtn.addEventListener("click", function () {
      LoadUpdate(element);
    });
    frag.append(row);
  });

  customerTable.append(frag);
}

function LoadUpdate(obj) {
  upddata = obj;
  console.log(obj);
  Modal();
}
async function UpdateHandler() {
  const customerName = document.getElementById("customerName");
  const customerPhone = document.getElementById("customerPhone");
  const customerEmail = document.getElementById("customerEmail");
  const customerCompany = document.getElementById("customerCompany");
  const customerStatus = document.getElementById("customerStatus");

  var obj = {
    id: upddata.id,
    customerName: customerName.value,
    customerPhone: customerPhone.value,
    customerEmail: customerEmail.value,
    customerCompany: customerCompany.value,
    customerStatus: customerStatus.value,
  };

  var re = await UpdateCustomer(obj);
  console.log(re);
  if (re) {
    closeModal();
    LoadData();
  }
}

async function DeleteHandler(id) {}
