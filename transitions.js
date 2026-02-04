
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => sectionObserver.observe(section));


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


const items = document.querySelectorAll(
  'h1, h2, p, img, button, .card'
);

const itemObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');   // fade IN
      } else {
        entry.target.classList.remove('visible'); // fade OUT
      }
    });
  },
  { threshold: 0.2 }
);

items.forEach(item => {
  item.classList.add('fade-item');
  itemObserver.observe(item);
});
