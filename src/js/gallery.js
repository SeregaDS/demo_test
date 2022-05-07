const galleryContainer = document.querySelector('.gallery .container');
const links = galleryContainer.querySelectorAll('.gallery__item');

links.forEach(el => el.addEventListener('click', e => e.preventDefault()));

var lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: "250"});