// script.js
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

function showConfirmation(event) {
  event.preventDefault();
  const form = event.target;
  const response = document.getElementById('form-response');
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    response.style.display = 'block';
    form.reset();
  });
}
