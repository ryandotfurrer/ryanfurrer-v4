function changeTheme() {
  let html = document.querySelector('HTML');
  let btn = document.getElementById('theme-change');
  let headerImage = document.getElementById('home-header-image');

  btn.addEventListener('click', () => {
    if (html.className === 'light') {
      html.classList.add('dark');
      btn.classList.remove('fa-sun');
      btn.classList.add('fa-moon');
      headerImage.src = 'https://res.cloudinary.com/ryan-furrer/image/upload/v1642639159/Portfolio%20Site/portfolio-image-dark-theme_uiglnf.webp';
    } else {
      html.classList.remove('dark');
      btn.classList.remove('fa-moon');
      btn.classList.add('fa-sun');
      headerImage.src = 'https://res.cloudinary.com/ryan-furrer/image/upload/v1642639159/Portfolio%20Site/portfolio-image-light-theme_edszry.webp';
    }
  });
}

changeTheme();
