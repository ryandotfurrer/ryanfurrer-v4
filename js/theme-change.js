function changeTheme() {
  let html = document.querySelector('HTML');
  let btn = document.getElementById('theme-change');

  btn.addEventListener('click', () => {
    if (html.className === 'light') {
      html.classList.toggle('dark');
      btn.classList.remove('fa-sun');
      btn.classList.add('fa-moon');
    } else {
      html.classList.remove('dark');
      btn.classList.remove('fa-moon');
      btn.classList.add('fa-sun');
    }
  });
}

changeTheme();
