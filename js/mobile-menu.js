const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuButton = document.querySelector(".mobile-menu__button");
const openMenuBtn = document.querySelector(".mobile-menu__button");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("display-none");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("display-none");
});
