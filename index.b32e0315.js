var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.b32e0315.js","8OQ7p":"icons.6aab55b6.svg"}')),a("kGl8X"),a("epwpP");var o,r=a("kGl8X"),s=a("epwpP");o=new URL(a("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const c={gallery:document.querySelector(".markup-cards"),paginationNumbers:document.querySelector(".pagination__numbers"),pageNumbers:document.getElementsByClassName("page__number"),prevPageBtn:document.querySelector(".page-prev"),nextPageBtn:document.querySelector(".page-next")};let l,i=6;const d=window.matchMedia("(max-width: 767px)"),u=window.matchMedia("(min-width: 1280px)");function m(e){d.matches?i=3:u.matches&&(i=9),console.log(i),g(e,1),function(e){if(e.length<=i)return;for(let t=1;t<=Math.ceil(e.length/i);t++)p(t);v(),c.prevPageBtn.classList.remove("visually-hidden"),c.nextPageBtn.classList.remove("visually-hidden")}(e),c.prevPageBtn.addEventListener("click",(()=>{g(e,l-1)})),c.nextPageBtn.addEventListener("click",(()=>{g(e,l+1)})),[...c.pageNumbers].forEach((t=>{const n=+t.textContent;t.addEventListener("click",(()=>{g(e,n)}))}))}function g(e,t){l=t;const n=(t-1)*i,a=t*i;c.gallery.innerHTML="",function(e){1===l?_(c.prevPageBtn):y(c.prevPageBtn);l===Math.ceil(e.length/i)?_(c.nextPageBtn):y(c.nextPageBtn)}(e),v();const o=e.slice(n,a);return(0,s.markupCard)(o,c.gallery)}function p(e){const t=document.createElement("a");t.textContent=e,t.classList.add("page__number"),c.paginationNumbers.append(t)}function v(){[...c.pageNumbers].forEach((e=>{e.classList.remove("page-active");+e.textContent===l&&e.classList.add("page-active")}))}function _(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function y(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}const h=document.querySelector(".hero__search-list"),k=document.querySelector(".cards__pagination"),b=document.querySelector(".section-cards"),f=document.querySelector(".void");function L(){f.classList.toggle("is-hidden"),b.classList.toggle("is-hidden"),k.classList.toggle("is-hidden")}h.addEventListener("click",(function(e){let t=e.target.name;(0,r.searchCocktailsByLetter)(t).then((e=>{var t;c.paginationNumbers.innerHTML="",c.prevPageBtn.classList.add("visually-hidden"),c.nextPageBtn.classList.add("visually-hidden"),null===(t=e.drinks)?b.classList.contains("is-hidden")||L():(b.classList.contains("is-hidden")&&(L(),m(t)),m(t))}))}));const S=document.querySelector(".theme__light"),x=document.querySelector(".slider.round"),q=document.querySelector(".theme__dark"),$=document.querySelector(".navigation__home"),E=document.querySelector(".dropbtn"),C=document.querySelector(".navigation__favorite"),w=document.querySelector(".dark-tema");x.addEventListener("click",(function(){document.body.classList.toggle("dark")?(q.style.color="var(--var-accent-color)",S.style.color="var(--var-primary-bg-color)",$.style.color="var(--var-primary-bg-color)",C.style.color="var(--var-primary-bg-color)",w.style.color="var(--var-primary-bg-color)",E.style.color="var(--var-accent-color)"):(S.style.color="var(--var-accent-color)",q.style.color="var(--var-primary-text-color)",$.style.color="var(--var-primary-text-color)",C.style.color="var(--var-primary-text-color)",w.style.color="var(--var-primary-bg-color))",E.style.color="var(--var-primary-text-color)")}));let B=document.querySelector(".open_modal"),M=document.getElementById("close_modal"),T=document.getElementById("modal"),N=document.getElementsByTagName("body")[0];B.onclick=function(){T.classList.add("modal_vis"),T.classList.remove("bounceOutDown"),N.classList.add("body_block")},M.onclick=function(){T.classList.add("bounceOutDown"),T.classList.remove("modal_vis"),N.classList.remove("body_block")};r=a("kGl8X");const P=document.querySelector(".search__form"),I=document.querySelector(".markup-cards");function D(e){let t=[];for(let n=0;n<e.length;n+=1)n<9&&(console.log(e[n].strDrink),t.push(`<li class="card">\n      <img src="${e[n].strDrinkThumb}" alt="${e[n].strDrink}" />\n      <div class="card__info">\n        <p class="card__title">${e[n].strDrink}</p>\n        <div class="card__btns">\n          <button type="button" class="card__btn">\n            Learn more\n          </button>\n          <button type="button" class="card__btn-add">\n            Add to\n            <svg class="card__icon" width="18" height="18">\n              <use href="./images/icons.svg#icon-Heart"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </li>`));I.innerHTML=t.join("")}P.addEventListener("input",(function(e){e.preventDefault();let t=e.target.value;1===t.length?(0,r.searchCocktailsByLetter)(t).then((e=>D(e.drinks))):(0,r.searchCocktailByName)(t).then((e=>D(e.drinks)))})),a("2ix2C");const H=document.querySelector(".hero__search-list"),A=document.querySelector(".hero__btn");H.addEventListener("click",(function(e){const t=e.target.name.toUpperCase();A.textContent=t}));r=a("kGl8X");const O={backdrop:document.querySelector("[data-cocktails-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")};let G="";function X(){O.backdrop.classList.toggle("is-hidden")}O.ulListCocktails.addEventListener("click",(function(e){if("card__btn"!==e.target.classList.value)return;const t=document.querySelectorAll(".card__title");let n="";for(let e=1;e<t.length;e++)n=t[e].textContent;G=n,e.target=G,(0,r.searchCocktailByName)(G).then((e=>{const t=e.drinks[0];X(),O.cocktailsCard.innerHTML="",function(e){O.cocktailsCard.insertAdjacentHTML("beforeend",function({strDrink:e,strInstructions:t,strDrinkThumb:n,strGlass:a,strCategory:r,strIngredient1:s,strIngredient2:c,strIngredient3:l,strIngredient4:i,strIngredient5:d,strMeasure1:u,strMeasure2:m,strMeasure3:g,strMeasure4:p,strMeasure5:v}){return`\n    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>\n        <svg width="18px" height="18px">\n            <use href="${o}#icon-vector-off"></use>\n        </svg>\n    </button>\n<div class="cocktails-modal__card">\n    <h4 class="cocktails-modal__title"> ${e} </h4>\n    <p class="cocktails-modal__pretitle">Instractions:</p>\n    <p class="cocktails-modal__text">${t}</p>\n    <a class = "cocktails-modal__item" href = "${n}">\n        <img \n        class = "cocktails-modal__image"\n        src = "${n}" \n        data-source = "${n}" \n        alt = "${a}" loading="lazy" width="280px" height="280px" />\n        </a>\n    <div>\n        <p class="cocktails-modal__ingredients">INGREDIENTS</p>\n        <p class="cocktails-modal__name">${r}</p>\n        <ul class="cocktails-modal__list">\n            <li> <a href = "${s}"> ✶ ${u} ${s} </a> </li>\n            <li> <a href = "${c}"> ✶ ${m} ${c} </a> </li>\n            <li> <a href = "${l}"> ✶ ${g} ${l} </a> </li>\n            <li> <a href = "${i}"> ✶ ${p} ${i} </a> </li>\n            <li> <a href = "${d}"> ✶ ${v} ${d} </a> </li>\n        </ul>\n    </div>\n    <button type="button" class="cocktails-modal__btn" data-cocktails-modal-btn>Add to favorite</button>\n</div>\n        </div> `}(e))}(t),document.querySelector(".cocktails-modal__close").addEventListener("click",X)}))})),a("kGl8X");const R={backdrop:document.querySelector("[data-ingredients-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")},F=(document.querySelector(".cocktails-modal__list"),document.querySelector(".ingredients-modal__container"));F.addEventListener("click",(function(e){R.backdrop.classList.toggle("is-hidden"),drink,F.insertAdjacentHTML("beforeend",'\n    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>\n    <svg width="18px" height="18px">\n        <use href="./images/icons.svg#icon-vector-off"></use>\n    </svg>\n</button>\n<div class="ingredients-modal__card">\n<h4 class="ingredients-modal__title">Title</h4>\n<p class="ingredients-modal__pretitle">Title</p>\n<p class="ingredients-modal__text">Title</p>\n    <ul class="cocktails-modal__list">\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n<button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>\n</div>  ')}));
//# sourceMappingURL=index.b32e0315.js.map
