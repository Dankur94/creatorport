/** Hamburger menu toggle */
export function toggleMenu() {
  document.querySelector('.nav-links')?.classList.toggle('open');
  document.querySelector('.hamburger')?.classList.toggle('open');
}

export function initMenuCloseOnNav() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links')?.classList.remove('open');
      document.querySelector('.hamburger')?.classList.remove('open');
    });
  });
}
