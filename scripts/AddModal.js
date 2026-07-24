var addCustomer = document.getElementById("addCustomer");

addCustomer.addEventListener("click", Modal);

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
            onclick="closeModal()"
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
    
              <option value="new">
                New
              </option>
    
              <option value="vip">
                VIP
              </option>
    
              <option value="inactive">
                Inactive
              </option>
    
            </select>
    
          </div>
    
    
    
          <!-- Buttons -->
    
          <div class="flex justify-end gap-3 pt-4">
    
    
            <button
            onclick="closeModal()"
              type="button"
              id="cancelBtn"
              class="px-4 py-2 rounded-lg bg-gray-300">
              Cancel
            </button>
    
    
            <button
              type="submit"
              class="px-4 py-2 rounded-lg bg-blue-600 text-white">
              Save
            </button>
    
    
          </div>
    
    
        </form>
    
    
      </div>
    
    </div>`;

  document.body.append(div);
}

function closeModal() {
  var customerModal = document.getElementById("customerModal");
  customerModal.remove();
}
