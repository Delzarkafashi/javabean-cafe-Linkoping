// klick på knappen öppnar/stänger menyn och byter ikon
const btnWrap = document.getElementById('hamburger');   // <div id="hamburger">
const btnImg  = document.getElementById('menu-button'); // <img id="menu-button">
const menu    = document.getElementById('menu');        // <nav id="menu">
const closeBtn = document.querySelector('#menu .close'); // X i menyn

// justera sökvägarna om dina svg:er ligger annanstans
const OPEN_ICON  = './hamburger.svg';
const CLOSE_ICON = './close.svg';

if (btnWrap && btnImg && menu) {
  // Öppna/stäng via hamburgaren
  btnWrap.addEventListener('click', () => {
    const opening = !menu.classList.contains('open');
    menu.classList.toggle('open', opening);
    btnImg.src = opening ? CLOSE_ICON : OPEN_ICON;
  });

  // Stäng via X
  closeBtn?.addEventListener('click', () => {
    menu.classList.remove('open');
    btnImg.src = OPEN_ICON;
  });

  // Stäng med Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('open');
      btnImg.src = OPEN_ICON;
    }
  });
}
