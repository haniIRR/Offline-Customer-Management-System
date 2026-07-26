let db;

export async function InitDatabase() {
  db = await Opendatabase();
}

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
      const db = e.target.error;
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
      resolve(true);
    };
    request.onerror = function (e) {
      reject(e.target.error);
    };
  });
}

export function UpdateCustomer(obj) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["customers"], "readwrite");
    const cobj = transaction.objectStore("customers");

    const request = cobj.put(obj);

    request.onsuccess = function () {
      resolve(true);
    };

    request.onerror = function (e) {
      reject(e.target.error);
    };
  });
}

export function GetData() {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["customers"], "readonly");
    const cobj = transaction.objectStore("customers");

    const req = cobj.getAll();
    req.onsuccess = function () {
      resolve(req.result);
    };

    req.onerror = function (e) {
      reject(e.target.error);
    };
  });
}
