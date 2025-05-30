// Theme toggle
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
  document.documentElement.setAttribute('data-theme', toggle.checked ? 'dark' : 'light');
});

// Abstract toggle
document.querySelectorAll('.abstract-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const abstract = button.closest('.paper-entry').querySelector('.abstract-text');
    const expanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !expanded);
    abstract.classList.toggle('hidden');
  });
});
