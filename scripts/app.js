if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./scripts/serviceWorker.js")
    .then((reg) => {
      console.log("Registered", reg);
    })
    .catch((err) => {
      console.error("Register Error:", err);
    });
}
