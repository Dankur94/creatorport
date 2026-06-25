/** Hamburger menu toggle */
export function toggleMenu() {
  document.querySelector('.nav-links')?.classList.toggle('open');
  document.querySelector('.hamburger')?.classList.toggle('open');
  document.querySelector('nav')?.classList.toggle('menu-open');
}

export function initMenuCloseOnNav() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links')?.classList.remove('open');
      document.querySelector('.hamburger')?.classList.remove('open');
      document.querySelector('nav')?.classList.remove('menu-open');
    });
  });
}

/** Mobile dropdown toggle */
export function initDropdown() {
  document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = (btn as HTMLElement).closest('.has-dropdown');
      parent?.classList.toggle('dropdown-open');
    });
  });
}
