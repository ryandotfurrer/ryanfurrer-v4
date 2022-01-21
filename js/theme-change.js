// function changeTheme() {
//   let html = document.querySelector('HTML');
//   let btn = document.getElementById('theme-change');
//   let headerImage = document.getElementById('home-header-image');

//   btn.addEventListener('click', () => {
//     if (html.className === 'light') {
//       html.classList.add('dark');
//       btn.classList.remove('fa-sun');
//       btn.classList.add('fa-moon');
//       headerImage.src = '/images/portfolio-image-dark-theme.webp';
//     } else {
//       html.classList.remove('dark');
//       btn.classList.remove('fa-moon');
//       btn.classList.add('fa-sun');
//       headerImage.src = '/images/portfolio-image-light-theme.webp';
//     }
//   });
// }

// changeTheme();

// function changeTheme() {
//   let html = document.querySelector('html');
//   var targetTheme = html.getAttribute('data-theme');

//   let btn = document.getElementById('theme-toggle');
//   let headerImage = document.getElementById('home-header-image');

//   btn.addEventListener('click', () => {
//     if (targetTheme === 'light') {
//       // html.classList.add('dark');
//       // btn.classList.remove('fa-sun');
//       // btn.classList.add('fa-moon');
//       headerImage.src = '/images/portfolio-image-dark-theme.webp';
//       console.log(targetTheme);
//     } else if (targetTheme === 'dark') {
//       // html.classList.remove('dark');
//       // btn.classList.remove('fa-moon');
//       // btn.classList.add('fa-sun');
//       headerImage.src = '/images/portfolio-image-light-theme.webp';
//       console.log(targetTheme);
//     }
//   });
// }

// changeTheme();

// function changeTheme() {
//   let html = document.querySelector('html');
//   let dataTheme = html.getAttribute('data-theme');
//   let btn = document.getElementById('theme-toggle');
//   let headerImage = document.getElementById('home-header-image');
//   let src = headerImage.getAttribute('src');

//   btn.addEventListener('click', () => {
//     if (dataTheme = 'light') {
//       src = '/images/portfolio-image-light-theme.webp';
//       // console.log(dataTheme);
//     } else {
//       src = '/images/portfolio-image-dark-theme.webp';
//       // console.log(dataTheme);
//     }
//   });
// }

// changeTheme();

// let html = document.querySelector('html');
// let btn = document.getElementById('theme-toggle');
// let dataTheme = html.getAttribute('data-theme');
// let headerImage = document.getElementById('home-header-image');
// btn.addEventListener('click', () => {
//   if (dataTheme = 'dark') {
//     headerImage.src = '/images/portfolio-image-light-theme.webp';
//     console.log(dataTheme);
//   } else {
//     headerImage.src = '/images/portfolio-image-dark-theme.webp';
//     console.log(dataTheme);
//   }
// })


// const setHomeHeaderImage = () => {
//   const storageKey = 'theme-preference'

//   const getColorPreference = () => {
//     if (localStorage.getItem(storageKey))
//       return localStorage.getItem(storageKey)
//     else
//       return window.matchMedia('(prefers-color-scheme: dark)').matches
//         ? 'dark'
//         : 'light'
//   }

//   const theme = {value: getColorPreference(),}

//   let headerImage = document.querySelector('#home-header-image');

//   if (theme.value = 'dark') {
//     headerImage.src = '/images/portfolio-image-dark-theme.webp'
//   } else {
//     headerImage.src = '/images/portfolio-image-light-theme.webp';
//   }

//   console.log(headerImage.src);
// }


// setHomeHeaderImage()

// const changeHeaderImage = () => {
//   const storageKey = 'theme-preference'
//   const getColorPreference = () => {
//     if (localStorage.getItem(storageKey))
//       return localStorage.getItem(storageKey)
//     else
//       return window.matchMedia('(prefers-color-scheme: dark)').matches
//         ? 'dark'
//         : 'light'
//   }
//   const theme = {
//     value: getColorPreference(),
//   }
//   const headerImage = document.getElementById('home-header-image');

//   console.log(theme.value);
// }

// const changeHomeHeaderImage = () => {
//   let html = document.querySelector('html');
//   let dataTheme = html.getAttribute('data-theme');
//   // let btn = document.getElementById('theme-toggle');
//   let headerImage = document.getElementById('home-header-image');


//   if (dataTheme = 'light') {
//     headerImage.src = '/images/macbook.webp';
//   } else {
//     headerImage.src = '/images/nafme-cropped.webp'
//   }


//   btn.addEventListener('click', () => {


//     if (dataTheme = 'light') {
//       headerImage.src = '/images/macbook.webp';
//     } else {
//       headerImage.src = '/images/nafme-cropped.webp'
//     }
//   })
// }


// changeHomeHeaderImage();
