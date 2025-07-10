// Injecte le header
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;

    // Ajout des écouteurs une fois que le header est bien en place
    document.getElementById('accueil')?.addEventListener('click', function () {
      console.log('Accueil cliqué');
    });
    document.getElementById('about')?.addEventListener('click', function () {
      alert('hello');
    });
    document.getElementById('services')?.addEventListener('click', function () {
      alert('hey');
    });
    document.getElementById('contact')?.addEventListener('click', function () {
      alert('hey');
    });

    // Header hide on scroll
    const header = document.querySelector('header');
    let lastScroll = 0;
    const hideThreshold = 20;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > hideThreshold) {
        header.classList.add('hide');
      } else {
        header.classList.remove('hide');
      }
      lastScroll = currentScroll;
    });
  });

// Injecte le footer
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

// Carrousel
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
showSlide(current);
setInterval(nextSlide, 5000);

// Apparition des éléments au scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
});
