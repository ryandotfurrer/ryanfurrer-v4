function changeTheme() {
  let html = document.querySelector('HTML');
  let btn = document.getElementById('theme-change');

  btn.addEventListener('click', () => {
    if (html.className === 'light') {
      html.classList.toggle('dark');
    } else {
      html.classList.remove('dark');
    }
  });
}

changeTheme();
