console.log("hello world");

let menu = document.querySelector("#hamburger");
let nav = document.querySelector("nav");
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (nav.classList.contains("open") && !menu.contains(e.target)) {
    nav.classList.remove("open");
  }
});
