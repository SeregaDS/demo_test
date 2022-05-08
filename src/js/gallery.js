const galleryContainer = document.querySelector('.gallery .container');
const links = galleryContainer.querySelectorAll('.gallery__item');

links.forEach(el => el.addEventListener('click', e => e.preventDefault()));

var lightboxMobile = new SimpleLightbox('.gallery__list-mobile a', {captionsData: "alt", captionDelay: "250"});
var lightboxMobileRetina = new SimpleLightbox('.gallery__list-mobile-retina a', {captionsData: "alt", captionDelay: "250"});
var lightboxTablet = new SimpleLightbox('.gallery__list-tablet a', {captionsData: "alt", captionDelay: "250"});
var lightboxTabletRetina = new SimpleLightbox('.gallery__list-tablet-retina a', {captionsData: "alt", captionDelay: "250"});
var lightboxDesktop = new SimpleLightbox('.gallery__list-desktop a', {captionsData: "alt", captionDelay: "250"});