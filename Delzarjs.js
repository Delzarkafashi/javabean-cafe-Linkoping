// klick på knappen öppnar/stänger menyn och byter ikon
// Beskrivning: Minimal toggle som öppnar/stänger sidomenyn och byter ikon utan extra logik.

const btnWrap = document.getElementById('hamburger');
// Hämtar omslagselementet för knappen (div#hamburger).

const btnImg  = document.getElementById('menu-button');
// Hämtar själva bild-ikonen i knappen (img#menu-button).

const menu    = document.getElementById('menu');
// Hämtar meny-elementet som ska visas/döljas (nav#menu).

// justera sökvägar till dina SVG ligger någon annanstans
const OPEN_ICON  = './hamburger.svg';

const CLOSE_ICON = './close.svg';

if (btnWrap && btnImg && menu) {
// Säkerhetskoll: fortsätt bara om alla nödvändiga element finns i DOM.

  btnWrap.addEventListener('click', () => {
// Lägger till klick-händelse på knappen.

    const opening = !menu.classList.contains('open');
// Kollar om menyn ska öppnas (dvs. den är inte öppen just nu).

    menu.classList.toggle('open', opening);
// Växlar klassen 'open' på menyn (visar/döljer panelen).

    btnImg.src = opening ? CLOSE_ICON : OPEN_ICON;
// Byter ikon: visar close.svg om vi öppnar, annars hamburger.svg.
  });

}