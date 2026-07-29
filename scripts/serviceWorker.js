self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("crm-v1").then((cache) => {
      console.log("Cache Opened");

      return cache.addAll([
        "/",
        "/index.html",
        "/scripts/app.js",
        "/scripts/AddModal.js",
        "/scripts/SearchCustomer.js",
        "/scripts/Notification.js",
        "/scripts/JsonFile.js",
      ]);
    }),
  );
});

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     (async () => {
//       const cache = await caches.open("crm-v1");

//       const files = ["/", "/index.html", "/style.css", "/scripts/AddModal.js"];

//       for (const file of files) {
//         try {
//           await cache.add(file);
//           console.log("Cached:", file);
//         } catch (err) {
//           console.error("Failed:", file, err);
//         }
//       }
//     })(),
//   );
// });

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(e.request);
    }),
  );
});
