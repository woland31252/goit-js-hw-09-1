import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './gallery-items';

const gallery = document.querySelector('.gallery');
const galleryItem = images
  .map(
    elem => `<li class="gallery-item">
  <a class="gallery-link" href="${elem.original}">
    <img class="gallery-image" src="${elem.preview}" 
    alt="${elem.description}"/></a></li>`
  )
  .join('');
gallery.innerHTML = galleryItem;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
