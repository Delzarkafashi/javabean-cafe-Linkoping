const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
let openStatus = false;

hamburger.addEventListener("click", () => {
  console.log("hej");
  menu.classList.toggle("open");
});

hamburger.addEventListener("click", () => {
  if (!openStatus) {
    hamburger.src = "./close.svg"; // byt ikon till stäng
    openStatus = true;
  } else {
    hamburger.src = "./hamburger.svg"; // byt tillbaka
    openStatus = false;
  }
  menu.classList.toggle("menu-visible");
});
