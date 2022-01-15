function changeTheme() {
  let html = document.querySelector('HTML');
  let btn = document.getElementById('theme-change');
  let headerImage = document.getElementById('home-header-image');

  btn.addEventListener('click', () => {
    if (html.className === 'light') {
      html.classList.add('dark');
      btn.classList.remove('ph-sun');
      btn.classList.add('ph-moon');
      headerImage.src = '/images/portfolio-image-dark-theme.png';
    } else {
      html.classList.remove('dark');
      btn.classList.remove('ph-moon');
      btn.classList.add('ph-sun');
      headerImage.src = '/images/portfolio-image-light-theme.png';
    }
  });
}

changeTheme();
