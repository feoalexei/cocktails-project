!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){o[e]=r},r.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.7205bd1a.js","410VS":"icons.6aab55b6.svg"}')),a("j7H1p"),a("3NnAA");var n,c,l=a("j7H1p"),s=a("8nrFW"),i=a("3NnAA"),d={gallery:document.querySelector(".markup-cards"),paginationControls:document.querySelector(".pagination__controls"),paginationNumbers:document.querySelector(".pagination__numbers"),pageNumbers:document.getElementsByClassName("page__number"),prevPageBtn:document.querySelector(".page-prev"),nextPageBtn:document.querySelector(".page-next")},u=(0,i.onMediaScreen)();function v(e){d.paginationNumbers.innerHTML="",d.prevPageBtn.classList.add("visually-hidden"),d.nextPageBtn.classList.add("visually-hidden"),d.paginationControls.removeEventListener("click",c),c=function(r){return function(e,r,t){var o=e.target,a=o.parentElement,c=o,l=a.classList.contains("disabled");a.classList.contains("page-prev")&&!l&&m(r,n-1);a.classList.contains("page-next")&&!l&&m(r,n+1);if(c.classList.contains("page__number")){m(r,+o.textContent)}}(r,e)},d.paginationControls.addEventListener("click",c),m(e,1),function(e){if(e.length<=u)return;for(var r=1;r<=Math.ceil(e.length/u);r++)y(r);g(),b(d.pageNumbers),d.prevPageBtn.classList.remove("visually-hidden"),d.nextPageBtn.classList.remove("visually-hidden")}(e)}function m(e,r){n=r;var t=(r-1)*u,o=r*u;d.gallery.innerHTML="",function(e){1===n?p(d.prevPageBtn):_(d.prevPageBtn);n===Math.ceil(e.length/u)?p(d.nextPageBtn):_(d.nextPageBtn)}(e),g();var a=e.slice(t,o);return(0,i.markupCard)(a,d.gallery)}function y(e){var r=document.createElement("a");r.textContent=e,r.classList.add("page__number"),d.paginationNumbers.append(r)}function g(){e(s)(d.pageNumbers).forEach((function(e){e.classList.remove("page-active"),+e.textContent===n&&e.classList.add("page-active")})),b(d.pageNumbers)}function p(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function _(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function b(e){if(!(e.length<=6)){var r=+document.querySelector(".page-active").textContent,t=document.querySelectorAll(".page__number");if(t.forEach((function(e){return e.classList.remove("visually-hidden","page__dots-before","page__dots-after")})),r<=2){for(var o=3;o<e.length-3;o++)t[o].classList.add("visually-hidden");t[2].classList.add("page__dots-after")}else if(r>=e.length-1){for(var a=3;a<e.length-3;a++)t[a].classList.add("visually-hidden");t[e.length-3].classList.add("page__dots-before")}else{for(var n=1;n<e.length-1;n++)t[n].classList.add("visually-hidden");t[r-2].classList.remove("visually-hidden"),t[r-1].classList.remove("visually-hidden"),t[r].classList.remove("visually-hidden"),r-2>1&&t[r-2].classList.add("page__dots-before"),r+2<e.length&&t[r].classList.add("page__dots-after")}}}var f=document.querySelector(".hero__search-list"),h=document.querySelector(".cards__pagination"),k=document.querySelector(".section-cards"),L=document.querySelector(".void");function S(e){null!==e?(k.classList.contains("is-hidden")&&(q(),v(e)),v(e)):k.classList.contains("is-hidden")||q()}function q(){L.classList.toggle("is-hidden"),k.classList.toggle("is-hidden"),h.classList.toggle("is-hidden")}f.addEventListener("click",(function(e){var r=e.target.name;(0,l.searchCocktailsByLetter)(r).then((function(e){S(e.drinks)}))}));var x=document.querySelector(".theme__light"),E=document.querySelector(".slider.round"),C=document.querySelector(".theme__dark"),w=document.querySelector(".navigation__home"),B=document.querySelector(".dropbtn-Favorite"),T=(document.querySelector(".navigation__favorite"),document.querySelector(".dark-tema")),N=document.querySelector(".slider-main.round-main"),H=document.querySelector(".modal"),M=document.querySelector(".theme__light-main"),A=document.querySelector(".theme__dark-main"),P=document.querySelector(".dropdown-content"),D=document.querySelector(".btn-login"),I=document.querySelector(".search__form button"),j=document.querySelector(".search__form input");E.addEventListener("click",(function(){document.body.classList.toggle("dark")?(C.style.color="var(--var-accent-color)",x.style.color="var(--var-primary-bg-color)",w.style.color="var(--var-primary-bg-color)",P.style.color="var(--var-primary-bg-color)",P.style.background="var(--var-primary-text-color)",B.style.color="var(--var-primary-bg-color)",D.style.background="var(--var-accent-color)",D.style.color="var(--var-primary-bg-color)",I.style.background="var(--var-primary-text-color)",j.style.background="var(--var-primary-text-color)",T.style.color="var(--var-primary-bg-color)"):(P.style.color="var(--var-primary-text-color)",P.style.background="var(--var-primary-bg-color)",x.style.color="var(--var-accent-color)",C.style.color="var(--var-primary-text-color)",w.style.color="var(--var-primary-text-color)",B.style.color="var(--var-primary-text-color)",D.style.background="var(--var-primary-bg-color)",D.style.color="var(--var-accent-color)",I.style.background="var(--var-primary-bg-color)",j.style.background="var(--var-primary-bg-color)",T.style.color="var(--var-primary-text-color)")})),N.addEventListener("click",(function(){document.body.classList.toggle("dark")?(H.style.background="var(--var-primary-text-color)",C.style.color="var(--var-accent-color)",x.style.color="var(--var-primary-bg-color)",w.style.color="var(--var-primary-bg-color)",T.style.color="var(--var-primary-bg-color)",B.style.color="var(--var-accent-color)",M.style.color="var(--var-primary-bg-color)",A.style.color="var(--var-accent-color)",O.style.color="var(--var-primary-bg-color)",F.style.color="var(--var-primary-bg-color)",R.style.fill="var(--var-primary-bg-color)",V.style.color="var(--var-primary-bg-color)",U.style.background="var(--var-primary-text-color)",z.style.color="var(--var-primary-bg-color)",G.style.background="var(--var-primary-text-color)",J.style.background="var(--var-primary-text-color)",I.style.background="var(--var-primary-text-color)",j.style.background="var(--var-primary-text-color)",W.style.background="var(--var-accent-color)",W.style.color="var(--var-primary-bg-color)",Y.style.fill="var(--var-primary-bg-color)",K.style.fill="var(--var-primary-bg-color)"):(x.style.color="var(--var-accent-color)",C.style.color="var(--var-primary-text-color)",w.style.color="var(--var-primary-text-color)",T.style.color="var(--var-primary-text-color)",B.style.color="var(--var-primary-text-color)",H.style.backgroundColor="var(--var-primary-bg-color)",M.style.color="var(--var-accent-color)",A.style.color="var(--var-primary-text-color)",O.style.color="var(--var-primary-text-color)",F.style.color="var(--var-primary-text-color)",R.style.fill="var(--var-primary-text-color)",V.style.color="var(--var-primary-text-color)",U.style.background="var(--var-primary-bg-color)",z.style.color="var(--var-primary-text-color)",G.style.background="var(--var-primary-bg-color)",J.style.background="var(--var-primary-bg-color)",I.style.background="var(--var-primary-bg-color)",j.style.background="var(--var-primary-bg-color)",W.style.background="var(--var-primary-bg-color)",W.style.color="var(--var-accent-color)",Y.style.fill="var(--var-primary-text-color)",K.style.fill="var(--var-primary-text-color)")}));var O=document.querySelector(".faivorite-main"),F=document.querySelector(".navigation__home-main"),R=document.querySelector(".favorite__icon"),U=document.querySelector(".dropdown-content-main"),V=document.querySelector(".drownFavor"),z=document.querySelector(".drownFav"),G=document.querySelector(".search__form-main button"),J=document.querySelector(".search__form-main input"),W=document.querySelector(".btn-login-main"),Y=document.querySelector(".mobile__icon"),K=document.querySelector(".close_modal");var Q=document.querySelector(".open_modal"),X=document.getElementById("close_modal"),Z=document.getElementById("modal"),$=document.getElementsByTagName("body")[0];Q.onclick=function(){Z.classList.add("modal_vis"),Z.classList.remove("bounceOutDown"),$.classList.add("body_block")},X.onclick=function(){Z.classList.add("bounceOutDown"),Z.classList.remove("modal_vis"),$.classList.remove("body_block")};l=a("j7H1p");document.querySelector(".search__form").addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements.search.value;console.log(r),1===r.length?(0,l.searchCocktailsByLetter)(r).then((function(e){S(e.drinks)})):(0,l.searchCocktailByName)(r).then((function(e){S(e.drinks)}))})),a("iNWLi");var ee=document.querySelector(".hero__search-list"),re=document.querySelector(".hero__btn");ee.addEventListener("click",(function(e){var r=e.target.name.toUpperCase();re.textContent=r,t=window.matchMedia("(min-width: 768px)"),t.matches||(ee.style.transform="translateY(-50%)",ee.style.opacity="0",ee.style.transition="opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",ee.style.pointerEvents="none",setTimeout((function(){ee.style.removeProperty("transform"),ee.style.removeProperty("opacity"),ee.style.removeProperty("transition"),ee.style.removeProperty("pointer-events")}),250));var t}));var te;l=a("j7H1p");te=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("410VS");var oe={backdrop:document.querySelector("[data-cocktails-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")},ae="";function ne(){oe.backdrop.classList.toggle("is-hidden")}function ce(e){e.target===e.currentTarget&&ne()}oe.ulListCocktails.addEventListener("click",(function(e){if("card__btn"!==e.target.classList.value)return;ae=e.target.id,(0,l.getCocktailById)(ae).then((function(e){!function(e){ne(),oe.cocktailsCard.innerHTML="",function(e){oe.cocktailsCard.insertAdjacentHTML("beforeend",function(e){for(var r=e.strDrink,t=e.strInstructions,o=e.strDrinkThumb,a=e.strGlass,n=e.strCategory,c=[],l=[],s=1;s<20;s++)e["strMeasure".concat(s)]&&c.push(e["strMeasure".concat(s)]),e["strIngredient".concat(s)]&&l.push(e["strIngredient".concat(s)]);for(var i={},d=1;d<l.length;d++){void 0===c[d]&&(c[d]=""),i+='<li class="cocktails-modal__it"> <span> ✶ '.concat(c[d],' </span> <a class="cocktails-modal__link" href = "').concat(l[d],'" > ').concat(l[d]," </a></li>")}return'\n    <div class="cocktails-modal__container">\n    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>\n        <svg width="18px" height="18px">\n            <use href="'.concat(te,'#icon-vector-off"></use>\n        </svg>\n    </button>\n    <div class="cocktails-modal__card">\n        <h4 class="cocktails-modal__title"> ').concat(r,' </h4>\n        <div class="cocktails-modal__inner">\n            <div class="cocktails-modal__wraper">\n                <p class="cocktails-modal__pretitle">Instractions:</p>\n                <p class="cocktails-modal__text">').concat(t,'</p>\n            </div>\n            <a class = "cocktails-modal__item" href = "').concat(o,'">\n                <img class = "cocktails-modal__image"  src = "').concat(o,'" alt = "').concat(a,'" loading="lazy" width="280px" height="280px" />\n            </a>\n            <div class="cocktails-modal__wrap">\n                <p class="cocktails-modal__ingredients">INGREDIENTS</p>\n                <p class="cocktails-modal__name">').concat(n,'</p>\n                <ul class="cocktails-modal__list"> ').concat(i.slice(15),' </ul>\n            </div>\n        </div>\n        <button type="button" class="cocktails-modal__btn">Add to favorite</button>\n    </div>\n    </div> ')}(e))}(e),document.querySelector(".cocktails-modal__close").addEventListener("click",ne),oe.backdrop.addEventListener("click",ce)}(e.drinks[0])}))}));l=a("j7H1p");var le={backdrop:document.querySelector("[data-ingredients-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ingredientsCard:document.querySelector(".ingredients-modal")};function se(e){e.target===e.currentTarget&&ie()}function ie(){le.backdrop.classList.toggle("show-modal")}le.cocktailsCard.addEventListener("click",(function(e){if(e.preventDefault(),"cocktails-modal__link"!==e.target.classList.value)return;var r=e.target.textContent;(0,l.searchIngredientsByName)(r.trim()).then((function(e){!function(e){ie(),le.ingredientsCard.innerHTML="",function(e){le.ingredientsCard.insertAdjacentHTML("beforeend",(r=e,t=r.strIngredient,o=r.strType,a=r.strDescription,n=r.strAlcohol,'\n    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>\n        <svg width="18px" height="18px">\n            <use href="'.concat(te,'#icon-vector-off"></use>\n        </svg>\n    </button>\n    <div class="ingredients-modal__card">\n        <h4 class="ingredients-modal__title"> ').concat(t,' </h4>\n        <div class="ingredients-modal__line"></div>\n        <p class="ingredients-modal__text"> ').concat(a?"".concat(a):"This information will be added soon",'</p>\n        <button type="button" class=\'ingredients-modal__show-btn\'>Show more</button>\n        <ul class="ingredients-modal__list">\n            <li><p class="ingredients-modal__pretitle"> ').concat(o?"✶ Type : ".concat(o):"",' </p></li>\n            <li><p class="ingredients-modal__pretitle"> ✶ Alcohol : ').concat(n,' </p></li>\n        </ul>\n        <button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>\n    </div>  ')));var r,t,o,a,n}(e),r=document.querySelector(".ingredients-modal__text"),t=document.querySelector(".ingredients-modal__show-btn"),o=r.textContent,n=o,c=300,a=n.length<=c?n:n.slice(0,c)+"...",r.innerHTML=a,t.addEventListener("click",(function(){r.innerHTML=o,le.ingredientsCard.style.overflowY="auto"})),document.querySelector(".ingredients-modal__close").addEventListener("click",ie),le.backdrop.addEventListener("click",se);var r,t,o,a,n,c}(e.ingredients[0])}))}));l=a("j7H1p");var de=document.getElementById("modal"),ue=document.getElementsByTagName("body")[0];document.querySelector(".search__form-main").addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements.search.value;console.log(r),1===r.length?(0,l.searchCocktailsByLetter)(r).then((function(e){S(e.drinks)})):(0,l.searchCocktailByName)(r).then((function(e){S(e.drinks)}));de.classList.add("bounceOutDown"),de.classList.remove("modal_vis"),ue.classList.remove("body_block")}))}();
//# sourceMappingURL=index.7205bd1a.js.map
