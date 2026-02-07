const cursor = document.querySelector('.magic-cursor');
const dot = document.querySelector('.magic-cursor-dot');

if (cursor && dot) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });

  const hoverTargets = 'a, button, .cta-button, .skill-card, .social-link';

  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('magic-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('magic-hover');
    });
  });
}
