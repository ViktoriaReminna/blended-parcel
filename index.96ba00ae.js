!function(){function e(e){return e.map(({urls:e,alt_description:t})=>`<li class='gallery__item'><img src='${e.small}' alt='${t}'></li>`).join("")}let t=document.querySelector(".gallery"),r=document.querySelector(".js-search-form"),a=new class{#e="https://api.unsplash.com/search/photos";#t="gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58";#r="";async getPopularImage(e){return await fetch(`${this.#e}?client_id=${this.#t}&query=popular&page=${e}&per_page=9&orientation=portrait`).then(e=>e.json()).catch(e=>console.log(e.message))}async getImageByQuery(e){return await fetch(`${this.#e}?client_id=${this.#t}&query=${this.#r}&page=${e}&per_page=9&orientation=portrait`).then(e=>e.json()).catch(e=>console.log(e.message))}set query(e){this.#r=e}};a.getPopularImage(1).then(r=>{let a=e(r.results);t.insertAdjacentHTML("afterbegin",a)}),r.addEventListener("submit",r=>{r.preventDefault();let s=r.target.elements.query.value;a.query=s,a.getImageByQuery(1).then(r=>{let a=e(r.results);t.innerHTML="",t.insertAdjacentHTML("afterbegin",a)})})}();
//# sourceMappingURL=index.96ba00ae.js.map
