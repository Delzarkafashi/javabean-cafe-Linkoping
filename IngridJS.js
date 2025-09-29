const navButton = document.getElementById('hamburger');
const menu = document.getElementById('menu');

navButton.addEventListener('click', () => {
    menu.style.display = 'flex';

})


/*

let openStatus = false;

hamburger.addEventListener('click', (e) => {
    if (!openStatus) {
        menuButton.src = "./close.svg";
        openStatus = true;
    } else {
        menuButton.src = "./hamburger.svg";
        openStatus = false;
    }
    menu.classList.toggle("menu-visible");
});

*/



