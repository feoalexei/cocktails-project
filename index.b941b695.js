!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},r=n.parcelRequired7c6;null==r&&((r=function(n){if(n in e)return e[n].exports;if(n in t){var r=t[n];delete t[n];var o={id:n,exports:{}};return e[n]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){t[n]=e},n.parcelRequired7c6=r),r("j7H1p"),r("3NnAA");var o=r("j7H1p"),i=document.querySelector(".hero__search-list"),c=document.querySelector(".markup-cards");i.addEventListener("click",(function(n){var e=n.target.name;(0,o.searchCocktailsByLetter)(e).then((function(n){return function(n){for(var e=[],t=0;t<n.length;t+=1)t<9&&(console.log(n[t].strDrink),e.push('<li class="card">\n      <img src="'.concat(n[t].strDrinkThumb,'" alt="').concat(n[t].strDrink,'" />\n      <div class="card__info">\n        <p class="card__title">').concat(n[t].strDrink,'</p>\n        <div class="card__btns">\n          <button type="button" class="card__btn">\n            Learn more\n          </button>\n          <button type="button" class="card__btn-add">\n            Add to\n            <svg class="card__icon" width="18" height="18">\n              <use href="./images/icons.svg#icon-Heart"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </li>')));c.innerHTML=e.join("")}(n.drinks)}))}))}();
//# sourceMappingURL=index.b941b695.js.map
