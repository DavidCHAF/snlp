// Injecte le header
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;

    // Attendre un micro délai pour être sûr que le DOM a intégré le header
    setTimeout(() => {
      const header = document.querySelector('header');
      let lastScroll = 0;
      const hideThreshold = 20;

      // Masquer/afficher le header au scroll
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > hideThreshold) {
          header.classList.add('hide');
        } else {
          header.classList.remove('hide');
        }

        lastScroll = currentScroll;
      });

      // Liens (facultatif)
      document.getElementById('accueil')?.addEventListener('click', () => {
        console.log('Accueil cliqué');
      });
      document.getElementById('about')?.addEventListener('click', () => {
        alert('hello');
      });
      document.getElementById('services')?.addEventListener('click', () => {
        alert('hey');
      });
      document.getElementById('contact')?.addEventListener('click', () => {
        alert('hey');
      });
    }, 10); // Attendre que le header soit bien injecté
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

// Apparition au scroll
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

fadeElems.forEach(el => observer.observe(el));
