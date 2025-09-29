document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');             // <nav id="menu">
  const hamburger = document.getElementById('hamburger');    // <div id="hamburger">
  const closeBtn = menu ? menu.querySelector('.close') : null;

  if (!menu || !hamburger) {
    console.warn('Saknar #menu eller #hamburger i DOM.');
    return;
  }

  // Säkerställ klassnamn som din CSS använder
  menu.classList.add('site-nav');        // matchar .site-nav regler i din CSS
  hamburger.classList.add('hamburger');  // matchar .hamburger regler i din CSS

  // A11y-attribut
  hamburger.setAttribute('role', 'button');
  hamburger.setAttribute('tabindex', '0');
  hamburger.setAttribute('aria-controls', 'menu');

  // Startläge: stängd meny på mobil (hidden=true). Din CSS visar ändå på desktop.
  hamburger.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
  if (!menu.hasAttribute('hidden')) menu.setAttribute('hidden', '');

  // ---- Helpers ----
  function isOpen() {
    return hamburger.getAttribute('aria-expanded') === 'true';
  }

  function openMenu() {
    hamburger.setAttribute('aria-expanded', 'true');
    menu.removeAttribute('hidden');              // låter .site-nav synas (mobil)
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');    // låser scroll på mobil enligt din CSS

    // Fokusera första fokuserbara i menyn
    const first = menu.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
    if (first) first.focus();

    // Lyssnare för ESC och klick utanför
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onClickOutside, true);
  }

  function closeMenu({ returnFocus = true } = {}) {
    hamburger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('hidden', '');             // döljer i mobil (desktop överstyr via CSS)
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');

    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onClickOutside, true);

    if (returnFocus) hamburger.focus();
  }

  function toggleMenu() {
    isOpen() ? closeMenu() : openMenu();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      closeMenu();
    }
    // Om fokus är på hamburgaren: Enter/Space = toggla
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === hamburger) {
      e.preventDefault();
      toggleMenu();
    }
  }

  function onClickOutside(e) {
    // Stäng om man klickar utanför menyn och inte på hamburgaren
    if (!menu.contains(e.target) && e.target !== hamburger && !hamburger.contains(e.target)) {
      closeMenu();
    }
  }

  // ---- Events ----
  hamburger.addEventListener('click', toggleMenu);
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
  });

  if (closeBtn) {
    closeBtn.setAttribute('role', 'button');
    closeBtn.setAttribute('tabindex', '0');
    closeBtn.addEventListener('click', () => closeMenu());
    closeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closeMenu(); }
    });
  }

  // Stäng menyn när man klickar en länk (vanlig mobilförväntan)
  menu.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) closeMenu({ returnFocus: false });
  });
});
