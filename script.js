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
// Projects Image Slider
// ============================================
const galleries = document.querySelectorAll('.project-gallery');

galleries.forEach(gallery => {
  const images = gallery.querySelectorAll('img');
  const prevBtn = gallery.querySelector('.prev-btn');
  const nextBtn = gallery.querySelector('.next-btn');
  
  // لو مفيش زراير أو صور يتجاهله
  if (!images.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  const updateGallery = () => {
    images.forEach((img, index) => {
      if (index === currentIndex) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateGallery();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateGallery();
  });
});
