 document.getElementById('accueil').addEventListener('click', function() {
    const btn = document.getElementById('accueil');
  });
  document.getElementById('about').addEventListener('click', function() {
    alert('hello');
  });
  document.getElementById('services').addEventListener('click', function() {
    alert('hey');
  });
  document.getElementById('contact').addEventListener('click', function() {
    alert('hey');
  });

  // script.js

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
setInterval(nextSlide, 5000); // Changer d'image toutes les 5 secondes

let lastScroll = 0;
const header = document.querySelector('header');
const hideThreshold = 20; // le seuil en pixels avant de cacher

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > hideThreshold) {
    // Si on descend ET qu’on est sous le seuil -> cache
    header.classList.add('hide');
  } else {
    // Sinon -> montre
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});
const fadeElems = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

fadeElems.forEach(el => {
  observer.observe(el);
});
