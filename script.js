// ============================================
// Mobile nav toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// close menu after clicking a link (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ============================================
// Slight nav background boost on scroll
// ============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.background = 'rgba(10, 20, 17, 0.97)';
  } else {
    nav.style.background = 'rgba(10, 20, 17, 0.85)';
  }
});

// ============================================
// Project image sliders
// ============================================
document.querySelectorAll('.gallery-slider').forEach((slider) => {
  const track = slider.querySelector('.gallery-track');
  const imgs = track.querySelectorAll('img');
  const total = imgs.length;
  const counter = slider.querySelector('.gallery-counter');
  const prevBtn = slider.querySelector('.gallery-prev');
  const nextBtn = slider.querySelector('.gallery-next');
  let index = 0;

  function pad(n) { return String(n).padStart(2, '0'); }

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    if (counter) counter.textContent = `${pad(index + 1)} / ${pad(total)}`;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + total) % total;
      update();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % total;
      update();
    });
  }

  update();
});
