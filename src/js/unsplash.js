export class Unsplash {
  #Base_url = 'https://api.unsplash.com/search/photos';
  #Api_key = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';

  async getPopularImage(page) {
    return await fetch(
      `${this.#Base_url}?client_id=${
        this.#Api_key
      }&query=popular&page=${page}&per_page=9&orientation=portrait`
    )
      .then(response => response.json())
      .catch(error => console.log(error.message));
  }
}
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
