!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.393eb93a.js","410VS":"icons.6aab55b6.svg"}')),a("j7H1p"),a("3NnAA");var n,c,l=a("j7H1p"),i=a("8nrFW"),s=a("3NnAA"),d={gallery:document.querySelector(".markup-cards"),paginationControls:document.querySelector(".pagination__controls"),paginationNumbers:document.querySelector(".pagination__numbers"),pageNumbers:document.getElementsByClassName("page__number"),prevPageBtn:document.querySelector(".page-prev"),nextPageBtn:document.querySelector(".page-next")},u=(0,s.onMediaScreen)();function m(e){y(),d.paginationControls.removeEventListener("click",c),c=function(t){return function(e,t,r){var o=e.target,a=o.parentElement,c=o,l=a.classList.contains("disabled");a.classList.contains("page-prev")&&!l&&v(t,n-1);a.classList.contains("page-next")&&!l&&v(t,n+1);if(c.classList.contains("page__number")){v(t,+o.textContent)}}(t,e)},d.paginationControls.addEventListener("click",c),v(e,1),function(e){if(e.length<=u)return;for(var t=1;t<=Math.ceil(e.length/u);t++)g(t);p(),d.prevPageBtn.classList.remove("visually-hidden"),d.nextPageBtn.classList.remove("visually-hidden")}(e)}function v(e,t){n=t;var r=(t-1)*u,o=t*u;d.gallery.innerHTML="",function(e){1===n?_(d.prevPageBtn):f(d.prevPageBtn);n===Math.ceil(e.length/u)?_(d.nextPageBtn):f(d.nextPageBtn)}(e),p();var a=e.slice(r,o);return(0,s.markupCard)(a,d.gallery)}function g(e){var t=document.createElement("a");t.textContent=e,t.classList.add("page__number"),d.paginationNumbers.append(t)}function y(){d.paginationNumbers.innerHTML="",d.prevPageBtn.classList.add("visually-hidden"),d.nextPageBtn.classList.add("visually-hidden")}function p(){e(i)(d.pageNumbers).forEach((function(e){e.classList.remove("page-active"),+e.textContent===n&&e.classList.add("page-active")}))}function _(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function f(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}var h=document.querySelector(".hero__search-list"),b=document.querySelector(".cards__pagination"),k=document.querySelector(".section-cards"),L=document.querySelector(".void");function S(){L.classList.toggle("is-hidden"),k.classList.toggle("is-hidden"),b.classList.toggle("is-hidden")}h.addEventListener("click",(function(e){var t=e.target.name;(0,l.searchCocktailsByLetter)(t).then((function(e){!function(e){if(null===e)return void(k.classList.contains("is-hidden")||S());k.classList.contains("is-hidden")&&(S(),m(e)),m(e)}(e.drinks)}))}));var q=document.querySelector(".theme__light"),x=document.querySelector(".slider.round"),C=document.querySelector(".theme__dark"),E=document.querySelector(".navigation__home"),B=document.querySelector(".dropbtn-Favorite"),w=document.querySelector(".navigation__favorite"),N=document.querySelector(".dark-tema"),H=document.querySelector(".slider-main.round-main"),T=document.querySelector(".modal"),A=document.querySelector(".theme__light-main"),P=document.querySelector(".theme__dark-main"),M=document.querySelector(".dropdown-content");x.addEventListener("click",(function(){document.body.classList.toggle("dark")?(C.style.color="var(--var-accent-color)",q.style.color="var(--var-primary-bg-color)",E.style.color="var(--var-primary-bg-color)",w.style.color="var(--var-primary-bg-color)",N.style.color="var(--var-primary-bg-color)",M.style.color="var(--var-primary-bg-color)",B.style.color="var(--var-primary-bg-color)"):(M.style.color="var(--var-primary-text-color)",q.style.color="var(--var-accent-color)",C.style.color="var(--var-primary-text-color)",E.style.color="var(--var-primary-text-color)",N.style.color="var(--var-primary-text-color)",B.style.color="var(--var-primary-text-color)")})),H.addEventListener("click",(function(){document.body.classList.toggle("dark")?(T.style.background="var(--var-primary-text-color)",C.style.color="var(--var-accent-color)",q.style.color="var(--var-primary-bg-color)",E.style.color="var(--var-primary-bg-color)",N.style.color="var(--var-primary-bg-color)",B.style.color="var(--var-accent-color)",A.style.color="var(--var-primary-bg-color)",P.style.color="var(--var-accent-color)",D.style.color="var(--var-primary-bg-color)",I.style.color="var(--var-primary-bg-color)",j.style.fill="var(--var-primary-bg-color)",F.style.color="var(--var-primary-bg-color)",O.style.background="var(--var-primary-text-color)",R.style.color="var(--var-primary-bg-color)"):(q.style.color="var(--var-accent-color)",C.style.color="var(--var-primary-text-color)",E.style.color="var(--var-primary-text-color)",N.style.color="var(--var-primary-text-color)",B.style.color="var(--var-primary-text-color)",T.style.backgroundColor="var(--var-primary-bg-color)",A.style.color="var(--var-accent-color)",P.style.color="var(--var-primary-text-color)",D.style.color="var(--var-primary-text-color)",I.style.color="var(--var-primary-text-color)",j.style.fill="var(--var-primary-text-color)",F.style.color="var(--var-primary-text-color)",O.style.background="var(--var-primary-bg-color)",R.style.color="var(--var-primary-text-color)")}));var D=document.querySelector(".faivorite-main"),I=document.querySelector(".navigation__home-main"),j=document.querySelector(".favorite__icon"),O=document.querySelector(".dropdown-content-main"),F=document.querySelector(".drownFavor"),R=document.querySelector(".drownFav");var U=document.querySelector(".open_modal"),V=document.getElementById("close_modal"),G=document.getElementById("modal"),J=document.getElementsByTagName("body")[0];U.onclick=function(){G.classList.add("modal_vis"),G.classList.remove("bounceOutDown"),J.classList.add("body_block")},V.onclick=function(){G.classList.add("bounceOutDown"),G.classList.remove("modal_vis"),J.classList.remove("body_block")};l=a("j7H1p");var W=document.querySelector(".search__form"),z=document.querySelector(".cards__pagination"),K=document.querySelector(".section-cards"),Q=document.querySelector(".void");function X(e){null===e?K.classList.contains("is-hidden")||Y():(K.classList.contains("is-hidden")&&(Y(),renderPage(e)),renderPage(e))}function Y(){Q.classList.toggle("is-hidden"),K.classList.toggle("is-hidden"),z.classList.toggle("is-hidden")}W.addEventListener("input",(function(e){e.preventDefault();var t=e.target.value;1===t.length?(0,l.searchCocktailsByLetter)(t).then((function(e){y(),X(e.drinks)})):(0,l.searchCocktailByName)(t).then((function(e){y(),X(e.drinks)}))})),a("iNWLi");var Z=document.querySelector(".hero__search-list"),$=document.querySelector(".hero__btn");Z.addEventListener("click",(function(e){var t=e.target.name.toUpperCase();$.textContent=t}));var ee;l=a("j7H1p");ee=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("410VS");var te={modal:document.querySelector("[data-cocktails-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")},re="";function oe(){te.modal.classList.toggle("is-hidden")}te.ulListCocktails.addEventListener("click",(function(e){if("card__btn"!==e.target.classList.value)return;re=e.target.id,(0,l.getCocktailById)(re).then((function(e){!function(e){oe(),te.cocktailsCard.innerHTML="",function(e){te.cocktailsCard.insertAdjacentHTML("beforeend",function(e){for(var t=e.strDrink,r=e.strInstructions,o=e.strDrinkThumb,a=e.strGlass,n=e.strCategory,c=[],l=[],i=1;i<20;i++)e["strMeasure".concat(i)]&&c.push(e["strMeasure".concat(i)]),e["strIngredient".concat(i)]&&l.push(e["strIngredient".concat(i)]);for(var s={},d=1;d<l.length;d++){s+='<li class="cocktails-modal__it"> <span> ✶ '.concat(c[d],' </span> <a class="cocktails-modal__link" href = "').concat(l[d],'" > ').concat(l[d]," </a></li>")}return'\n    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>\n        <svg width="18px" height="18px">\n            <use href="'.concat(ee,'#icon-vector-off"></use>\n        </svg>\n    </button>\n    <div class="cocktails-modal__card">\n        <h4 class="cocktails-modal__title"> ').concat(t,' </h4>\n        <div class="cocktails-modal__inner">\n            <div class="cocktails-modal__wraper">\n                <p class="cocktails-modal__pretitle">Instractions:</p>\n                <p class="cocktails-modal__text">').concat(r,'</p>\n            </div>\n            <a class = "cocktails-modal__item" href = "').concat(o,'">\n                <img class = "cocktails-modal__image"  src = "').concat(o,'" alt = "').concat(a,'" loading="lazy" width="280px" height="280px" />\n            </a>\n            <div class="cocktails-modal__wrap">\n                <p class="cocktails-modal__ingredients">INGREDIENTS</p>\n                <p class="cocktails-modal__name">').concat(n,'</p>\n                <ul class="cocktails-modal__list"> ').concat(s,' </ul>\n            </div>\n        </div>\n        <button type="button" class="cocktails-modal__btn">Add to favorite</button>\n    </div> ')}(e))}(e),document.querySelector(".cocktails-modal__close").addEventListener("click",oe)}(e.drinks[0])}))}));l=a("j7H1p");var ae={modal:document.querySelector("[data-ingredients-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ingredientsCard:document.querySelector(".ingredients-modal")};function ne(){ae.modal.classList.toggle("show-modal")}ae.cocktailsCard.addEventListener("click",(function(e){if(e.preventDefault(),"cocktails-modal__link"!==e.target.classList.value)return;var t=e.target.textContent;(0,l.searchIngredientsByName)(t.trim()).then((function(e){!function(e){ne(),ae.ingredientsCard.innerHTML="",function(e){ae.ingredientsCard.insertAdjacentHTML("beforeend",(t=e,r=t.strIngredient,o=t.strType,a=t.strDescription,n=t.strAlcohol,'\n    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>\n        <svg width="18px" height="18px">\n            <use href="'.concat(ee,'#icon-vector-off"></use>\n        </svg>\n    </button>\n    <div class="ingredients-modal__card">\n        <h4 class="ingredients-modal__title"> ').concat(r,' </h4>\n        <div class="ingredients-modal__line"></div>\n        <p class="ingredients-modal__text"> ').concat(a?"".concat(a):"This information will be added soon",'</p>\n        <ul class="ingredients-modal__list">\n            <li><p class="ingredients-modal__pretitle"> ').concat(o?"✶ Type : ".concat(o):"",' </p></li>\n            <li><p class="ingredients-modal__pretitle"> ✶ Alcohol : ').concat(n,' </p></li>\n        </ul>\n        <button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>\n    </div>  ')));var t,r,o,a,n}(e),document.querySelector(".ingredients-modal__close").addEventListener("click",ne)}(e.ingredients[0])}))}));l=a("j7H1p");var ce=document.querySelector(".search__form-main"),le=document.querySelector(".cards__pagination"),ie=document.querySelector(".section-cards"),se=document.querySelector(".void");function de(e){null===e?ie.classList.contains("is-hidden")||ue():(ie.classList.contains("is-hidden")&&(ue(),renderPage(e)),renderPage(e))}function ue(){se.classList.toggle("is-hidden"),ie.classList.toggle("is-hidden"),le.classList.toggle("is-hidden")}ce.addEventListener("input",(function(e){e.preventDefault();var t=e.target.value;1===t.length?(0,l.searchCocktailsByLetter)(t).then((function(e){y(),de(e.drinks)})):(0,l.searchCocktailByName)(t).then((function(e){y(),de(e.drinks)}))}))}();
//# sourceMappingURL=index.393eb93a.js.map