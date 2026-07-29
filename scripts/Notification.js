export function AddNotif() {
  const container = document.getElementById("toastContainer");

  let count = 0;
  return function (message, color) {
    count++;
    const t = document.createElement("div");

    t.innerHTML = `${count}.${message}`;

    t.classList.add("text-white", "p-3", "m-3", "rounded-3");
    t.style.backgroundColor = color;

    container.append(t);

    setTimeout(() => {
      t.remove();
    }, 10000);
  };
}
