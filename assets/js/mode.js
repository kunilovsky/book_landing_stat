const lightTheme = document.getElementById('light-theme');
const darkTheme = document.getElementById('dark-theme');
const user = document.getElementById('user-theme');
const theme = window.localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const icons = document.getElementById('mode');

if (theme === 'dark') document.body.classList.add('dark');

darkTheme.addEventListener('click', () => {
  document.body.classList.add('dark');
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
  icons.classList.remove('bi-brightness-high-fill');
  icons.classList.add('bi-moon-fill');
  darkTheme.classList.add('active-mode');
  lightTheme.classList.remove('active-mode');
  user.classList.remove('active-mode');
});
lightTheme.addEventListener('click', () => {
  document.body.classList.remove('dark');
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
  icons.classList.remove('bi-moon-fill');
  icons.classList.add('bi-brightness-high-fill');
  lightTheme.classList.add('active-mode');
  darkTheme.classList.remove('active-mode');
  user.classList.remove('active-mode');
});
user.addEventListener('click', () => {
  user.classList.add('active-mode');
  lightTheme.classList.remove('active-mode');
  darkTheme.classList.remove('active-mode');
  if (prefersDarkScheme.matches) {
    document.body.classList.add('dark');
    icons.classList.add('bi-moon-fill');
  } else {
    document.body.classList.remove('dark');
    icons.classList.remove('bi-moon-fill');
    icons.classList.add('bi-brightness-high-fill');
  }
});
