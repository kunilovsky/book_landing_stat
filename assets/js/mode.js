/* Задаем переменную для запроса ключ-значение в локальное хранилище пользователя */

const memoryTheme = localStorage.getItem('memoryTheme');

/* Создаем 2 основных режима темы: Светлая и Темная, Дополнительно - дефолт системы */

const darkThemes = document.getElementById('darkThemes');
const lightThemes = document.getElementById('lightThemes');
const systemThemes = document.getElementById('systemThemes');

/* Анимированные элементы и эффекты */

const icons = document.getElementById('iconTheme');
const burger = document.getElementById('burger');
const drop = document.getElementById('drop-black');

/* Сохраняем выбор в локальное хранилище */

lightThemes.addEventListener('click', () => {
  window.localStorage.setItem('memoryTheme', 'light');
});
darkThemes.addEventListener('click', () => {
  window.localStorage.setItem('memoryTheme', 'dark');
});

/* Тема по дефолту системы с записью в локальное хранилище */

systemThemes.addEventListener('click', () => {
  if (matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.remove('dark');
    icons.classList.remove('bi-moon-fill-1');
    icons.classList.add('bi-brightness-high-fill-1');
  } else {
    window.localStorage.setItem('memoryTheme', 'dark');
  }
  if (matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    icons.classList.remove('bi-brightness-high-fill-1');
    icons.classList.add('bi-moon-fill-1');
  } else {
    window.localStorage.setItem('memoryTheme', 'light');
  }
});

/* Проверяем локальное хранилище посетителя при входе на сайт */

if (memoryTheme === 'dark') {
  document.body.classList.add('dark');
  icons.classList.add('bi-moon-fill-1');
  icons.classList.remove('bi-brightness-high-fill-1');
}

/* Активный item */

/* Выбор темы */

lightThemes.addEventListener('click', () => {
  document.body.classList.add('light');
  if (icons.classList.contains('bi-moon-fill-1')) {
    icons.classList.remove('bi-moon-fill-1');
    icons.classList.add('bi-brightness-high-fill-1');
  }
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
  }
});

darkThemes.addEventListener('click', () => {
  document.body.classList.add('dark');
  if (icons.classList.contains('bi-brightness-high-fill-1')) {
    icons.classList.remove('bi-brightness-high-fill-1');
    icons.classList.add('bi-moon-fill-1');
  }
  if (document.body.classList.contains('light')) {
    document.body.classList.remove('light');
  }
});

/* Вывод в консоль (dev) */

const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function printLog(isDark) {
  const theme = isDark ? 'темная' : 'светлая';

  console.log(`В системе используется ${theme} тема`);
}

printLog(themeMediaQuery.matches);

themeMediaQuery.addEventListener('change', function (event) {
  printLog(event.matches);
});
