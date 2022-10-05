const lightTheme = document.getElementById('light-theme');
const darkTheme = document.getElementById('dark-theme');
const user = document.getElementById('user-theme');
const theme = window.localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const icons = document.getElementById('mode');

/* if (theme === 'dark') document.body.classList.add('dark'); */

darkTheme.addEventListener('click', () => {
  document.body.classList.add('dark');
  icons.classList.remove('bi-brightness-high-fill');
  icons.classList.add('bi-moon-fill');
});
lightTheme.addEventListener('click', () => {
  document.body.classList.remove('dark');
  icons.classList.remove('bi-moon-fill');
  icons.classList.add('bi-brightness-high-fill');
});
user.addEventListener('click', () => {
  if (prefersDarkScheme.matches) {
    document.body.classList.add('dark');
    icons.classList.add('bi-moon-fill');
  } else {
    document.body.classList.remove('dark');
    icons.classList.remove('bi-moon-fill');
    icons.classList.add('bi-brightness-high-fill');
  }
});
