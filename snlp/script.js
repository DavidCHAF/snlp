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

const track = document.querySelector('.carousel-ad-track');
const slides_ad = Array.from(track.children);
const prevButton = document.querySelector('.carousel-ad-btn.prev');
const nextButton = document.querySelector('.carousel-ad-btn.next');
const slideWidth = slides_ad[0].getBoundingClientRect().width;

let currentIndex = 0;

function updateSlidePosition() {
  track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides_ad.length) % slides_ad.length;
  updateSlidePosition();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides_ad.length;
  updateSlidePosition();
});

window.addEventListener('resize', () => {
  // Recalcule la largeur au redimensionnement
  const newWidth = slides_ad[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + (newWidth * currentIndex) + 'px)';
});
