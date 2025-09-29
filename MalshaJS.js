// Klick på knappen öppnar/stänger sidomenyn och byter ikon
// Beskrivning: Enkel toggle som hanterar menyns synlighet och hamburgarikonen.

// Hämtar knappen (#hamburger)
const btnWrap = document.getElementById('hamburger');

// Hämtar menyn som ska visas/döljas (#menu)
const menu = document.getElementById('menu');

// Hämtar själva ikonbilden i knappen
const btnImg = document.querySelector('#hamburger img');

// Overlay som mörklägger bakgrunden när menyn är öppen (valfritt i HTML)
const overlay = document.getElementById('overlay');

// Ikoner för öppet/stängt läge
const OPEN_ICON = './img/close.svg';       // Stäng-kryss (när menyn är öppen)
const CLOSE_ICON = './img/hamburger.svg';  // Hamburgaren (när menyn är stängd)

// Säkerhetskoll: kör bara om elementen finns
if (btnWrap && menu) {

  // Klick på hamburger-knappen
  btnWrap.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');

    // Växla meny (visa/dölj)
    menu.classList.toggle('open', !isOpen);

    // Växla ikon
    if (btnImg) {
      btnImg.src = isOpen ? CLOSE_ICON : OPEN_ICON;
    }

    // Visa/dölj overlay om den finns
    if (overlay) {
      overlay.classList.toggle('show', !isOpen);
    }
  });

  // Klick på overlay → stäng menyn
  if (overlay) {
    overlay.addEventListener('click', () => {
      menu.classList.remove('open');
      btnImg.src = CLOSE_ICON;
      overlay.classList.remove('show');
    });
  }
}
