const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuButton = document.querySelector(".mobile-menu__button-close");
const openMenuBtn = document.querySelector(".mobile-menu__button-open");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("display-none");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("display-none");
});
