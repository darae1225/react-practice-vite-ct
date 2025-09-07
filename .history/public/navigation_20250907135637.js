let hamburger = document.getElementById("hamburger-icon");
let hamburgerMenu = document.getElementById("hamburger-menu");
let navContainer = document.getElementById("nav-cont");

function init() {
  hamburger.addEventListener("click", (event) => {
    hamburgerMenu.classList.toggle("show-menu");
    navContainer.classList.toggle("nav-no-background");
    event.preventDefault();
  });
}

window.onload = init;
