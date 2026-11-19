// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form: opens the visitor's email app with the details filled in.
// Change the address below. To use a form service instead (Formspree, Netlify Forms, etc.), replace this block.
const TO = 'hello@yourdomain.com';
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const msg = form.querySelector('.form-msg');
  const d = Object.fromEntries(new FormData(form));
  if (!d.name || !/^\S+@\S+\.\S+$/.test(d.email || '')) {
    msg.textContent = 'Add your name and a valid email so I can reply.';
    return;
  }
  const body = `Name: ${d.name}\nEmail: ${d.email}\nNeed: ${d.need}\n\n${d.details || ''}`;
  location.href = `mailto:${TO}?subject=${encodeURIComponent('Website project: ' + d.name)}&body=${encodeURIComponent(body)}`;
  msg.textContent = 'Opening your email app to send this.';
});
