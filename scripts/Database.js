let db;

window.addEventListener("load", function () {
  Opendatabase().then((res) => {
    db = res;
  });
});

function Opendatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("crm", 1);
    request.onupgradeneeded = function (e) {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("customers")) {
        db.createObjectStore("customers", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = function (e) {
      const db = e.target.result;
      resolve(db);
    };

    request.onerror = function (e) {
      const db = e.target.result;
      reject(db);
    };
  });
}

export function AddCustomer(obj) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["customers"], "readwrite");
    const cobj = transaction.objectStore("customers");

    const request = cobj.add(obj);

    request.onsuccess = function (e) {
      resolve(e.target.result);
    };
    request.onerror = function (e) {
      reject(e.target.result);
    };
  });
}
