let db;

export async function InitDatabase() {
  db = await Opendatabase();
}

function Opendatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("crmdbo", 1);
    request.onupgradeneeded = function (e) {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("customers")) {
        db.createObjectStore("customers", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
      if (!db.objectStoreNames.contains("logs")) {
        db.createObjectStore("logs", {
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
    const transaction = db.transaction(["customers", "logs"], "readwrite");

    const logst = transaction.objectStore("logs");
    const cobj = transaction.objectStore("customers");

    const request = cobj.add(obj);

    request.onsuccess = function (e) {
      const customerId = e.target.result;

      logst.add({
        customerId: customerId,
        customerName: obj.customerName,
        date: Date.now(),
        desc: "Add customer",
      });
    };

    transaction.oncomplete = function () {
      resolve(true);
    };

    transaction.onerror = function (e) {
      reject(e.target.error);
    };
  });
}

export function UpdateCustomer(obj) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["customers", "logs"], "readwrite");
    var datalogs = {
      customerId: obj.id,
      customerName: obj.customerName,
      date: new Date(),
      desc: "Update customer",
    };

    const cobj = transaction.objectStore("customers");
    const logst = transaction.objectStore("logs");

    cobj.put(obj);
    logst.add(datalogs);

    transaction.oncomplete = function () {
      resolve(true);
    };

    transaction.onerror = function (e) {
      reject(e.target.error);
    };
    // request.onsuccess = function () {
    //   resolve(true);
    // };

    // request.onerror = function (e) {
    //   reject(e.target.error);
    // };
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

// logs

export function AddLogs(obj) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["logs"], "readwrite");
    const cobj = transaction.objectStore("logs");

    const request = cobj.add(obj);

    request.onsuccess = function (e) {
      resolve(true);
    };
    request.onerror = function (e) {
      reject(e.target.error);
    };
  });
}

export function GetLogsData() {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["logs"], "readonly");
    const cobj = transaction.objectStore("logs");

    const req = cobj.getAll();
    req.onsuccess = function () {
      resolve(req.result);
    };

    req.onerror = function (e) {
      reject(e.target.error);
    };
  });
}
