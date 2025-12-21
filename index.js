function toggleMenu() {
    const menu = document.getElementById('menu');
    const trigger = document.querySelector('.hamburger');
    menu.classList.toggle('open');
    trigger.classList.toggle('open');
  }

  document.querySelector('.menu__parent').addEventListener('click', () => {
    document.querySelector('.submenu').classList.toggle('open');
  });