import { Unsplash } from './unsplash';

import { createGalleryCard } from './create-gallery-card';

const galleryEl = document.querySelector('.gallery');

const service = new Unsplash();
service.getPopularImage(1).then(response => {
  const markup = createGalleryCard(response.results);
  galleryEl.insertAdjacentHTML('afterbegin', markup);
});
