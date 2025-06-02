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
  let currentPath = window.location.pathname.split('/').pop();

  if (currentPath === '') currentPath = 'index.html';

  if (currentPath === 'index.html') {
    document.title = "Carter Bryson | Home";
  } else {
    let pageName = currentPath.replace('.html', '');
    pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    document.title = `Carter Bryson | ${pageName}`;
  }

  links.forEach(link => {
    let linkPath = link.getAttribute('href');
    if (linkPath === '') linkPath = 'index.html';

    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});
