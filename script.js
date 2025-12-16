let isMenuOpen = false;

const desktopMedia = window.matchMedia('(min-width: 1024px)');
const navToggle = document.querySelector('.nav__toggle');
const headerNav = document.querySelector('header nav');
const iconHamburger = document.querySelector('.icon__hamburger');
const iconClose = document.querySelector('.icon__close');
const navItems = document.querySelectorAll('header nav .nav__item');
const navTriggers = document.querySelectorAll('header nav .nav__trigger');

navToggle.addEventListener('click', () => {
   if (desktopMedia.matches) return;

   isMenuOpen = !isMenuOpen;

   if (isMenuOpen) {
      iconHamburger.classList.add('hidden');
      iconClose.classList.remove('hidden');
      headerNav.classList.remove('hidden');
   } else {
      iconHamburger.classList.remove('hidden');
      iconClose.classList.add('hidden');
      headerNav.classList.add('hidden');
   }
});

navTriggers.forEach((trigger) => {
   trigger.addEventListener('click', () => {
      const item = trigger.closest('.nav__item');

      navItems.forEach((otherItem) => {
         if (otherItem !== item) {
            otherItem.classList.remove('is-open');
            otherItem
               .querySelector('.nav__trigger')
               .setAttribute('aria-expanded', 'false');
         }
      });

      item.classList.toggle('is-open');
      const isOpen = item.classList.contains('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
   });
});
