(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    links: document.querySelectorAll('.menu .menu-nav__link'),
    menuContainer: document.querySelector('.menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.links.forEach(el => el.addEventListener('click', toggleMenu));
  refs.menu.addEventListener('click', toggleMenu);
  refs.menuContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  }
})();