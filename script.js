// Select elements
const galleryImages = document.querySelectorAll('.portfolio img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lb-img');
const closeBtn = document.getElementById('lb-close');

// Open on click
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
  });
});

// Close on X
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});