// Tillgänglig och robust hamburgarmeny för #hamburger / #menu / .close
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const hamburger = document.getElementById('hamburger');
  const closeBtn = menu ? menu.querySelector('.close') : null;

  if (!menu || !hamburger) {
    console.warn('Saknar #menu eller #hamburger i DOM.');
    return;
  }

  // A11y-attribut (utan att kräva <button>-tagg)
  hamburger.setAttribute('role', 'button');
  hamburger.setAttribute('tabindex', '0');
  hamburger.setAttribute('aria-controls', 'menu');
  hamburger.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');

  // Startläge: stängd på mobil (desktop visas ändå via CSS)
  if (!menu.hasAttribute('hidden')) menu.setAttribute('hidden', '');

  const isOpen = () => hamburger.getAttribute('aria-expanded') === 'true';

  function openMenu() {
    hamburger.setAttribute('aria-expanded', 'true');
    menu.removeAttribute('hidden');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');

    // Fokusera första länk
    const first = menu.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
    if (first) first.focus();

    document.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onClickOutside, true);
  }

  function closeMenu({ returnFocus = true } = {}) {
    hamburger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('hidden', '');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');

    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onClickOutside, true);

    if (returnFocus) hamburger.focus();
  }

  function toggleMenu() { isOpen() ? closeMenu() : openMenu(); }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      closeMenu();
    }
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === hamburger) {
      e.preventDefault();
      toggleMenu();
    }
  }

  function onClickOutside(e) {
    if (!menu.contains(e.target) && e.target !== hamburger && !hamburger.contains(e.target)) {
      closeMenu();
    }
  }

  // Events
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

  // Stäng vid klick på länk (mobilförväntan)
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu({ returnFocus: false });
  });
});
