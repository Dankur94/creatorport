/** Bilingual language toggle system */
export function setLang(lang: 'en' | 'de') {
  document.body.classList.toggle('lang-de', lang === 'de');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
  });
  localStorage.setItem('creatorport-lang', lang);
}

export function initLang() {
  const saved = localStorage.getItem('creatorport-lang');
  if (saved === 'de') setLang('de');
}
