// Dark mode functionality
const themeSwitch = document.querySelector('.theme-switch-input');

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeSwitch) {
    themeSwitch.checked = savedTheme === 'dark';
  }
}

function toggleTheme() {
  const newTheme = themeSwitch.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Ensure the DOM is fully loaded before running initialization
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();

  // Check if themeSwitch exists before adding the event listener
  if (themeSwitch) {
    themeSwitch.addEventListener('change', toggleTheme);
  }
}); 