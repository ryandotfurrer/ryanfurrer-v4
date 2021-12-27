function changeTheme() {
  let html = document.querySelector('HTML');
  let btn = document.getElementById('theme-change');

  btn.addEventListener('click', () => {
    if (html.className === 'light') {
      html.classList.toggle('dark');
      console.log(html.classList);
    } else {
      html.classList.remove('dark');
      console.log(html.classList);
    }
  });
}

changeTheme();
