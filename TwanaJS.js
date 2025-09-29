
<script>
const memberSelect = document.getElementById('memberSelect');
const styleLink = document.getElementById('active-style');
const scriptTag = document.getElementById('active-script');


const map = {
main: { css: './css/main-style.css', js: './js/main-script.js' },
magnus: { css: './css/magnus-style.css', js: './js/magnus-script.js' },
// Lägg till fler medlemmar här
};


memberSelect.addEventListener('change', () => {
const key = memberSelect.value;
const cfg = map[key] || map.main;


// Byt CSS
styleLink.setAttribute('href', cfg.css);


// Byt JS genom att skapa ett nytt <script> (för att köra rätt fil från början)
const fresh = document.createElement('script');
fresh.id = 'active-script';
fresh.src = cfg.js;
fresh.defer = true;
scriptTag.replaceWith(fresh);
});


// Liten bekvämlighet: årtal i footer
document.getElementById('year').textContent = new Date().getFullYear();
</script>