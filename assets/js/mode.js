const lightTheme = document.getElementById('light-theme');
const darkTheme = document.getElementById('dark-theme');
const user = document.getElementById('user-theme');
let theme = window.localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const icons = document.getElementById('mode');
const burger = document.getElementById('burger');
const drop = document.getElementById('drop-black');

function getUserPreference() {
  return localStorage.getItem('theme') || 'system';
}
function saveUserPreference(userPreference) {
  localStorage.setItem('theme', userPreference);
}

function getAppliedMode(userPreference) {
  if (userPreference === 'light') {
    return 'light';
  }
  if (userPreference === 'dark') {
    return 'dark';
  }
  // system
  if (matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

if (theme === 'dark') document.body.classList.add('light');
//if (theme != 'dark') document.body.classList.remove('dark');
//if (theme === 'dark') darkTheme.classList.add('active-mode');
if (theme != 'dark') lightTheme.classList.add('active-mode');

darkTheme.addEventListener('click', () => {
  document.body.classList.add('dark');
  icons.classList.remove('bi-brightness-high-fill-1');
  icons.classList.add('bi-moon-fill-1');
  darkTheme.classList.add('active-mode');
  lightTheme.classList.remove('active-mode');
  user.classList.remove('active-mode');
  burger.classList.add('navbar-dark');
  drop.classList.add('dropdown-menu-black');
});
lightTheme.addEventListener('click', () => {
  document.body.classList.remove('dark');
  icons.classList.remove('bi-moon-fill-1');
  icons.classList.add('bi-brightness-high-fill-1');
  lightTheme.classList.add('active-mode');
  darkTheme.classList.remove('active-mode');
  user.classList.remove('active-mode');
  burger.classList.remove('navbar-dark');
  drop.classList.remove('dropdown-menu-black');
});
user.addEventListener('click', () => {
  user.classList.add('active-mode');
  lightTheme.classList.remove('active-mode');
  darkTheme.classList.remove('active-mode');
  if (prefersDarkScheme.matches) {
    document.body.classList.add('dark');
    icons.classList.add('bi-moon-fill-1');
    burger.classList.add('navbar-dark');
  } else {
    document.body.classList.remove('dark');
    icons.classList.remove('bi-moon-fill-1');
    icons.classList.add('bi-brightness-high-fill-1');
    burger.classList.remove('navbar-dark');
    drop.classList.remove('dropdown-menu-black');
  }
});

function getUserPreference() {
  return localStorage.getItem('theme') || 'system';
}
function saveUserPreference(userPreference) {
  localStorage.setItem('theme', userPreference);
}