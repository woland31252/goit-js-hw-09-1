import"./assets/common-3d5c7ba9.js";const a=document.querySelector(".gallery"),r=images.map(l=>`<li class="gallery-item">
  <a class="gallery-link" href="${l.original}">
    <img class="gallery-image" src="${l.preview}"
      data-source="${l.original}" alt="${l.description}"/></a></li>`).join("");a.innerHTML=r;
//# sourceMappingURL=commonHelpers.js.map
