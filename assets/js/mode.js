const lightTheme = document.getElementById('light-theme');
const darkTheme = document.getElementById('dark-theme');
const user = document.getElementById('user-theme');
const theme = window.localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (theme === 'dark') document.body.classList.add('dark');

darkTheme.addEventListener('click', () => {
  document.body.classList.add('dark');
});
lightTheme.addEventListener('click', () => {
  document.body.classList.remove('dark');
});
user.addEventListener('click', () => {
  if (prefersDarkScheme.matches) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
