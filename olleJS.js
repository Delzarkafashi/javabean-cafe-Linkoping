const menu = document.getElementById("menu");
const hamburgerButton = document.getElementById("hamburger");

hamburgerButton.addEventListener('click', (e) => {
    menu.classList.add("menu-visible")
});
