const gallery = document.querySelector('.gallery');
const galleryItem = images
  .map(
    elem => `<li class="gallery-item">
  <a class="gallery-link" href="${elem.original}">
    <img class="gallery-image" src="${elem.preview}"
      data-source="${elem.original}" alt="${elem.description}"/></a></li>`
  )
  .join('');
gallery.innerHTML = galleryItem;
