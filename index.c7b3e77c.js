var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("kyEFX").register(JSON.parse('{"5ZPII":"index.c7b3e77c.js","8OQ7p":"icons.6aab55b6.svg"}')),r("kGl8X"),r("epwpP");var a,o=r("kGl8X"),c=r("epwpP");a=new URL(r("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const s={gallery:document.querySelector(".markup-cards"),paginationNumbers:document.querySelector(".pagination__numbers"),pageNumbers:document.getElementsByClassName("page__number"),prevPageBtn:document.querySelector(".page-prev"),nextPageBtn:document.querySelector(".page-next")};let l,i=6;const d=window.matchMedia("(max-width: 767px)"),u=window.matchMedia("(min-width: 1280px)");function m(e){d.matches?i=3:u.matches&&(i=9),console.log(i),g(e,1),function(e){if(e.length<=i)return;for(let t=1;t<=Math.ceil(e.length/i);t++)v(t);_(),s.prevPageBtn.classList.remove("visually-hidden"),s.nextPageBtn.classList.remove("visually-hidden")}(e),s.prevPageBtn.addEventListener("click",(()=>{g(e,l-1)})),s.nextPageBtn.addEventListener("click",(()=>{g(e,l+1)})),[...s.pageNumbers].forEach((t=>{const n=+t.textContent;t.addEventListener("click",(()=>{g(e,n)}))}))}function g(e,t){l=t;const n=(t-1)*i,r=t*i;s.gallery.innerHTML="",function(e){1===l?p(s.prevPageBtn):y(s.prevPageBtn);l===Math.ceil(e.length/i)?p(s.nextPageBtn):y(s.nextPageBtn)}(e),_();const a=e.slice(n,r);return(0,c.markupCard)(a,s.gallery)}function v(e){const t=document.createElement("a");t.textContent=e,t.classList.add("page__number"),s.paginationNumbers.append(t)}function _(){[...s.pageNumbers].forEach((e=>{e.classList.remove("page-active");+e.textContent===l&&e.classList.add("page-active")}))}function p(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function y(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}const h=document.querySelector(".hero__search-list"),k=document.querySelector(".cards__pagination"),b=document.querySelector(".section-cards"),f=document.querySelector(".void");function L(){f.classList.toggle("is-hidden"),b.classList.toggle("is-hidden"),k.classList.toggle("is-hidden")}h.addEventListener("click",(function(e){let t=e.target.name;(0,o.searchCocktailsByLetter)(t).then((e=>{var t;s.paginationNumbers.innerHTML="",s.prevPageBtn.classList.add("visually-hidden"),s.nextPageBtn.classList.add("visually-hidden"),null===(t=e.drinks)?b.classList.contains("is-hidden")||L():(b.classList.contains("is-hidden")&&(L(),m(t)),m(t))}))}));const S=document.querySelector(".theme__light"),q=document.querySelector(".slider.round"),x=document.querySelector(".theme__dark"),$=document.querySelector(".navigation__home"),E=document.querySelector(".dropbtn"),C=document.querySelector(".navigation__favorite"),w=document.querySelector(".dark-tema"),B=document.querySelector(".slider-main.round-main"),T=(document.querySelector(".modal"),document.querySelector(".dropdown-content"));q.addEventListener("click",(function(){document.body.classList.toggle("dark")?(x.style.color="var(--var-accent-color)",S.style.color="var(--var-primary-bg-color)",$.style.color="var(--var-primary-bg-color)",C.style.color="var(--var-primary-bg-color)",w.style.color="var(--var-primary-bg-color)",E.style.color="var(--var-accent-color)",T.style.backgroundColor="var(--var-accent-color)"):(S.style.color="var(--var-accent-color)",x.style.color="var(--var-primary-text-color)",$.style.color="var(--var-primary-text-color)",C.style.color="var(--var-primary-text-color)",w.style.color="var(--var-primary-bg-color))",E.style.color="var(--var-primary-text-color)")})),B.addEventListener("click",changeThemeMain);let M=document.querySelector(".open_modal"),D=document.getElementById("close_modal"),N=document.getElementById("modal"),P=document.getElementsByTagName("body")[0];M.onclick=function(){N.classList.add("modal_vis"),N.classList.remove("bounceOutDown"),P.classList.add("body_block")},D.onclick=function(){N.classList.add("bounceOutDown"),N.classList.remove("modal_vis"),P.classList.remove("body_block")};o=r("kGl8X");const H=document.querySelector(".search__form"),I=document.querySelector(".markup-cards");function A(e){let t=[];for(let n=0;n<e.length;n+=1)n<9&&(console.log(e[n].strDrink),t.push(`<li class="card">\n      <img src="${e[n].strDrinkThumb}" alt="${e[n].strDrink}" />\n      <div class="card__info">\n        <p class="card__title">${e[n].strDrink}</p>\n        <div class="card__btns">\n          <button type="button" class="card__btn">\n            Learn more\n          </button>\n          <button type="button" class="card__btn-add">\n            Add to\n            <svg class="card__icon" width="18" height="18">\n              <use href="./images/icons.svg#icon-Heart"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </li>`));I.innerHTML=t.join("")}H.addEventListener("input",(function(e){e.preventDefault();let t=e.target.value;1===t.length?(0,o.searchCocktailsByLetter)(t).then((e=>A(e.drinks))):(0,o.searchCocktailByName)(t).then((e=>A(e.drinks)))})),r("2ix2C");const G=document.querySelector(".hero__search-list"),O=document.querySelector(".hero__btn");G.addEventListener("click",(function(e){const t=e.target.name.toUpperCase();O.textContent=t}));o=r("kGl8X");const X={backdrop:document.querySelector("[data-cocktails-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")};let R="";function j(){X.backdrop.classList.toggle("is-hidden")}X.ulListCocktails.addEventListener("click",(function(e){if("card__btn"!==e.target.classList.value)return;const t=document.querySelectorAll(".card__title");let n="";for(let e=1;e<t.length;e++)n=t[e].textContent;R=n,e.target=R,(0,o.searchCocktailByName)(R).then((e=>{const t=e.drinks[0];j(),X.cocktailsCard.innerHTML="",function(e){X.cocktailsCard.insertAdjacentHTML("beforeend",function({strDrink:e,strInstructions:t,strDrinkThumb:n,strGlass:r,strCategory:o,strIngredient1:c,strIngredient2:s,strIngredient3:l,strIngredient4:i,strIngredient5:d,strMeasure1:u,strMeasure2:m,strMeasure3:g,strMeasure4:v,strMeasure5:_}){return`\n    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>\n        <svg width="18px" height="18px">\n            <use href="${a}#icon-vector-off"></use>\n        </svg>\n    </button>\n<div class="cocktails-modal__card">\n    <h4 class="cocktails-modal__title"> ${e} </h4>\n    <p class="cocktails-modal__pretitle">Instractions:</p>\n    <p class="cocktails-modal__text">${t}</p>\n    <a class = "cocktails-modal__item" href = "${n}">\n        <img \n        class = "cocktails-modal__image"\n        src = "${n}" \n        data-source = "${n}" \n        alt = "${r}" loading="lazy" width="280px" height="280px" />\n        </a>\n    <div>\n        <p class="cocktails-modal__ingredients">INGREDIENTS</p>\n        <p class="cocktails-modal__name">${o}</p>\n        <ul class="cocktails-modal__list">\n            <li> <a href = "${c}"> ✶ ${u} ${c} </a> </li>\n            <li> <a href = "${s}"> ✶ ${m} ${s} </a> </li>\n            <li> <a href = "${l}"> ✶ ${g} ${l} </a> </li>\n            <li> <a href = "${i}"> ✶ ${v} ${i} </a> </li>\n            <li> <a href = "${d}"> ✶ ${_} ${d} </a> </li>\n        </ul>\n    </div>\n    <button type="button" class="cocktails-modal__btn" data-cocktails-modal-btn>Add to favorite</button>\n</div>\n        </div> `}(e))}(t),document.querySelector(".cocktails-modal__close").addEventListener("click",j)}))})),r("kGl8X");const F={backdrop:document.querySelector("[data-ingredients-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")},U=(document.querySelector(".cocktails-modal__list"),document.querySelector(".ingredients-modal__container"));U.addEventListener("click",(function(e){F.backdrop.classList.toggle("is-hidden"),drink,U.insertAdjacentHTML("beforeend",'\n    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>\n    <svg width="18px" height="18px">\n        <use href="./images/icons.svg#icon-vector-off"></use>\n    </svg>\n</button>\n<div class="ingredients-modal__card">\n<h4 class="ingredients-modal__title">Title</h4>\n<p class="ingredients-modal__pretitle">Title</p>\n<p class="ingredients-modal__text">Title</p>\n    <ul class="cocktails-modal__list">\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n<button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>\n</div>  ')}));o=r("kGl8X");const Q=document.querySelector(".search__form-main"),z=document.querySelector(".markup-cards");function J(e){let t=[];for(let n=0;n<e.length;n+=1)n<9&&(console.log(e[n].strDrink),t.push(`<li class="card">\n      <img src="${e[n].strDrinkThumb}" alt="${e[n].strDrink}" />\n      <div class="card__info">\n        <p class="card__title">${e[n].strDrink}</p>\n        <div class="card__btns">\n          <button type="button" class="card__btn">\n            Learn more\n          </button>\n          <button type="button" class="card__btn-add">\n            Add to\n            <svg class="card__icon" width="18" height="18">\n              <use href="./images/icons.svg#icon-Heart"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </li>`));z.innerHTML=t.join("")}Q.addEventListener("input",(function(e){e.preventDefault();let t=e.target.value;1===t.length?(0,o.searchCocktailsByLetter)(t).then((e=>J(e.drinks))):(0,o.searchCocktailByName)(t).then((e=>J(e.drinks)))}));
//# sourceMappingURL=index.c7b3e77c.js.map
