function mobileMenu() {
  const hamburger = document.querySelector('#hamburger');
  const navList = document.querySelector('.nav-list');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
  });
}

function closeMenu() {
  const hamburger = document.querySelector('#hamburger');
  const navList = document.querySelector('.nav-list');
  const navLink = document.querySelectorAll('.nav-link');

  navLink.forEach((n) =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navList.classList.remove('active');
    })
  );
}

closeMenu();
mobileMenu();
