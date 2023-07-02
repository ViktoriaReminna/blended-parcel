import { Unsplash } from './unsplash';

import { createGalleryCard } from './create-gallery-card';

const galleryEl = document.querySelector('.gallery');
const searchForm = document.querySelector('.js-search-form');

const service = new Unsplash();
service.getPopularImage(1).then(response => {
  const markup = createGalleryCard(response.results);
  galleryEl.insertAdjacentHTML('afterbegin', markup);
});

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchValue = event.target.elements.query.value;

  service.query = searchValue;

  service.getImageByQuery(1).then(response => {
    const markup = createGalleryCard(response.results);
    galleryEl.innerHTML = '';
    galleryEl.insertAdjacentHTML('afterbegin', markup);
  });
});
