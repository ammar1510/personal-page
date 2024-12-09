// Dark mode functionality
const themeSwitch = document.querySelector('.theme-switch-input');
const storageKey = 'theme'; // Use a single key for localStorage

function initializeTheme() {
  const savedTheme = localStorage.getItem(storageKey) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeSwitch) {
    themeSwitch.checked = savedTheme === 'dark';
  }
}

function toggleTheme() {
  const newTheme = themeSwitch.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(storageKey, newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();

  if (themeSwitch) {
    themeSwitch.addEventListener('change', toggleTheme);
  }
}); 