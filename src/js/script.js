import { isWebp } from "./libs/webpImg.js";
isWebp();

// import {formPopup} from "./libs/popupForm.js"
// formPopup(openBtns, fromBG, form, formBody);

// import {blurElements} from "./libs/blurElements.js";
// blurElements();

import { isMobile } from "./libs/isMobile.js";
if (isMobile.any()) {
    document.body.classList.add("_mobile");
} else {
    document.body.classList.add("_pc");
}

function burger(menu) {
    const burgerBtn = document.querySelector(".burger");
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("burger--active");
        document.body.classList.toggle("_lock");
        const menuList = document.querySelector(`.${menu}`);
        menuList.classList.toggle(`${menu}--active`);
    });
}

burger("menu__list");

//import {pagination} from "./libs/pagination.js";
//pagination(list, item, itemCount);

//import Swiper, { Navigation, Pagination } from 'swiper';
//const swiper = new Swiper();
