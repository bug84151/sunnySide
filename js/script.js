const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hMenu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
