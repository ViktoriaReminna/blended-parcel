import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { Unsplash } from './unsplash';
import { createGalleryCard } from './create-gallery-card';

const galleryEl = document.querySelector('.gallery');
const searchForm = document.querySelector('.js-search-form');
const container = document.getElementById('tui-pagination-container');

const options = {
  totalItems: 0,
  itemsPerPage: 9,
  visiblePages: 3,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage();

const service = new Unsplash();
service.getPopularImage(page).then(response => {
  pagination.reset(response.total);
  const markup = createGalleryCard(response.results);
  galleryEl.insertAdjacentHTML('afterbegin', markup);
});

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchValue = event.target.elements.query.value;
  pagination.off('afterMove', imagesByQuery);
  pagination.off('afterMove', popularImages);

  service.query = searchValue;

  service.getImageByQuery(page).then(response => {
    pagination.reset(response.total);
    const markup = createGalleryCard(response.results);
    galleryEl.innerHTML = '';
    galleryEl.insertAdjacentHTML('afterbegin', markup);
  });

  pagination.on('afterMove', imagesByQuery);
});

function popularImages(event) {
  console.log(event);
  const currentPage = event.page;
  service.getPopularImage(currentPage).then(response => {
    galleryEl.innerHTML = '';
    const markup = createGalleryCard(response.results);
    galleryEl.insertAdjacentHTML('afterbegin', markup);
  });
}

pagination.on('afterMove', popularImages);

function imagesByQuery(event) {
  console.log(event);
  const currentPage = event.page;
  service.getImageByQuery(currentPage).then(response => {
    galleryEl.innerHTML = '';
    const markup = createGalleryCard(response.results);
    galleryEl.insertAdjacentHTML('afterbegin', markup);
  });
}
