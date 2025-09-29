const menu = document.getElementById("menu");
const hamburgerButton = document.getElementById("hamburger");
const menuButton = document.getElementById("menu-button")
let openStatus = false;

hamburgerButton.addEventListener('click', (e) => {
    if (!openStatus) {
        menuButton.src = "./close.svg";
        openStatus = true;
    } else {
        menuButton.src = "./hamburger.svg";
        openStatus = false;
    }
    menu.classList.toggle("menu-visible");
});
