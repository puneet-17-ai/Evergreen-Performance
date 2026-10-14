// Small enhancement only: no framework or third-party runtime.
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Respect reduced-motion preferences for browser-level smooth scrolling.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) document.documentElement.style.scrollBehavior = 'auto';
})();
