!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r=function(e){var t=document.querySelector(".header__menu"),n=document.querySelector(".side-menu"),r=document.querySelector(".page"),o=e.target;(o===t||o.classList.contains("page--close")&&n.classList.contains("side-menu--open"))&&(t.classList.toggle("header__menu--open"),r.classList.toggle("page--close"),n.classList.toggle("side-menu--open"))},o=function(e,t){return e.forEach((function(e,n){return t<=n&&e.classList.toggle("hidden")}))};function i(){var e=document.querySelector(".about__paragraph"),t=document.querySelector(".about__button");e.style.maxHeight?(e.style.maxHeight=null,t.innerHTML="Читать далее"):(e.style.maxHeight=e.scrollHeight+"px",t.innerHTML="Скрыть")}document.querySelector(".about__button");var c=function(e,t){document.querySelector(".page").classList.toggle("page--close"),t.classList.toggle("modal--active")},u=new Swiper(".brands__swiper",{init:!1,spaceBetween:15,slidesPerView:1.25,loop:!0,pagination:{el:".swiper-brands__pagination"}}),l=new Swiper(".types__swiper",{init:!1,spaceBetween:15,slidesPerView:1.25,loop:!0,pagination:{el:".swiper-types__pagination"}}),a=new Swiper(".swiper-prices",{init:!1,spaceBetween:15,slidesPerView:1.25,loop:!0,pagination:{el:".swiper-prices__pagination"}}),s=[u,l,a];!function(){var e=document.querySelectorAll(".contacts__feedback"),t=document.querySelector(".feedback-modal__close"),n=document.querySelector(".call-modal__close"),u=document.querySelectorAll(".contacts__call"),l=document.querySelector(".feedback-modal"),a=document.querySelector(".call-modal"),d=document.querySelector(".page"),p=document.querySelectorAll(".brands__swiper-slide"),f=document.querySelectorAll(".types__swiper-slide"),_=document.querySelectorAll(".swiper-button");document.querySelector(".about__button").addEventListener("click",i);var m=window.innerWidth>768&&window.innerWidth<=1366?6:8,g=m/2;o(p,m),o(f,g),u.forEach((function(e){return e.addEventListener("click",(function(e){c(0,a)}))})),e.forEach((function(e){return e.addEventListener("click",(function(e){c(0,l)}))})),n.addEventListener("click",(function(e){return c(0,a)})),t.addEventListener("click",(function(e){return c(0,l)})),d.addEventListener("click",r),_.forEach((function(e){return e.addEventListener("click",(function(e){var t,n,r,i=e.currentTarget,c=Array.from(i.parentElement.children[0].children),u=i.classList.contains("swiper-brands__button")?m:g;o(c,u),n="Скрыть",r="Показать всё",(t=i).innerHTML===n?t.innerHTML=r:t.innerHTML=n}))})),s.forEach((function(e){return function(){return window.innerWidth<768&&e.init()}(e)}))}()}]);
//# sourceMappingURL=bundle.js.map