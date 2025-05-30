// Toggle light/dark theme
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
  document.documentElement.setAttribute('data-theme', toggle.checked ? 'dark' : 'light');
});

// Toggle show/hide abstract
document.querySelectorAll('.abstract-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const abstract = button.closest('.paper-entry').querySelector('.abstract-text');
    const expanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !expanded);
    abstract.classList.toggle('hidden');
  });
});

// Highlight the current page in the navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.site-nav a');
  const currentPath = window.location.pathname.split('/').pop(); // Get the current page filename

  links.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});
