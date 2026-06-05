// Theme Management
function initializeTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const preferredTheme = localStorage.getItem('theme');
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = preferredTheme || systemPreference;

  document.body.classList.add(theme);

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(newTheme);
    }
  });
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  document.body.classList.remove('dark', 'light');
  const newTheme = isDark ? 'light' : 'dark';
  document.body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
  initializeTheme();
}