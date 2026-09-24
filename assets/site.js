const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  toggle.hidden = false;
  document.documentElement.classList.add('js');
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open);
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); toggle.focus(); } });
}

// All pages load the same footer. Keep the basic contact fallback if unavailable.
const footerContainer = document.getElementById('footer-container');
if (footerContainer) {
  fetch('footer.html', { cache: 'no-cache' })
    .then(response => {
      if (!response.ok) throw new Error('Footer could not be loaded');
      return response.text();
    })
    .then(markup => { footerContainer.innerHTML = markup; })
    .catch(() => { /* The visible fallback remains usable. */ });
}
