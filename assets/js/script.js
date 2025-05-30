const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
  document.documentElement.setAttribute('data-theme', toggle.checked ? 'dark' : 'light');
});
