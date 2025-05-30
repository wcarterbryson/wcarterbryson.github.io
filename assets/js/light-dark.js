// Toggle light/dark theme and persist preference using localStorage
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  toggle.checked = savedTheme === 'dark';
}

// Handle toggle switch changes
toggle.addEventListener('change', () => {
  const newTheme = toggle.checked ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
