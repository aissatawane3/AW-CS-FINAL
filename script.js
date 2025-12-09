document.addEventListener('DOMContentLoaded', () => {
  const images = Array.from(document.querySelectorAll('.gallery img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('close');

  let currentIndex = 0;

  images.forEach((img, index) =>{
    img.addEventListener('click', () =>{
      currentIndex = index;
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

//commands for closing
  closeBtn.addEventListener('click', () =>{
    lightbox.style.display = 'none';
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });
  
// navigate when clicking on a photo in the gallery
  document.addEventListener('keydown', (e) =>{
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowRight'){
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
      } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
      } else if (e.key === 'Escape') {
        lightbox.style.display = 'none';
      }
    }
  });
});
