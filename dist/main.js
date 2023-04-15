/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
    const home = document.createElement('div');
    home.classList.add('home-body');

    //for intro
    const introPara = document.createElement('p');
    introPara.textContent = "When you come here, we want you to feel at home!";
    introPara.appendChild(home);

    //for div container
    const divContainer = document.createElement('div');
    divContainer.appendChild(home);

    //for hours
    const hoursHeader = document.createElement('h3');
    hoursHeader.textContent = "Restaurant Hours";
    hoursHeader.appendChild(divContainer);

    const hoursOne = document.createElement('p');
    hoursOne.textContent = "Monday  - Thursday: 10am - 11pm";
    hoursOne.appendChild(divContainer);

    const hoursTwo = document.createElement('p');
    hoursTwo.textContent = "Friday - Sunday: 10am - 1am"
    hoursTwo.appendChild(divContainer);

  return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAbout() {
    const about = document.createElement('div');

    return about
}

function loadAbout() {
    //stuff here
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-body');

    const contactHeader = document.createElement('h2');
    contactHeader.textContact = "About";
    contactHeader.appendChild(contact);

    const blurb = document.createElement('p');
    blurb.textContent = "e are a family owned business. Inspired by the cuisine of my culture. We try give a new twist to Haitian cuisine.";
    blurb.appendChild(contact);

    const firstLine = document.createElement('p');
    firstLine.textContent = "100 Boynton Beach Blvd";
    firstLine.appendChild('contact');

    const secondLine = document.createElement('p');
    secondLine.textContent = "Boynton Beach, FL";
    secondLine.appendChild('contact')

    const phone = document.createElement('p');
    phone.textContent = "561-123-4567";
    phone.appendChild(contact);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    const menu = document.createElement('div');

    return menu
}

function loadMenu() {
    //stuff here
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





//you might need to make a function to export here
function createNav() {
    const nav = document.createElement('nav');

    const homeTab = document.createElement('button');
    //you have this as an a and li element
    homeTab.classList.add('nav-button');
    homeTab.textContent = "Home";
    homeTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeTab);
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    const menuTab = document.createElement('button');
    menuTab.classList.add('nav-button');
    menuTab.textContent = "Menu";
    menuTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuTab);
        (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });

    const aboutTab = document.createElement('button');
    aboutTab.classList.add('nav-button');
    aboutTab.textContent = "About";
    aboutTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(aboutTab);
        (0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    const contactTab = document.createElement('button');
    contactTab.classList.add('nav-button');
    contactTab.textContent = "Contact";
    contactTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactTab);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(aboutTab);
    nav.appendChild(contactTab);

    return nav
}

//function to switch tabs
function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
};

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function initializeSite() {
    const content = document.querySelector('content');

    content.appendChild(createNav);
    content.appendChild(createMain);

    setActiveButton(document.querySelector('.nav-button'));
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeSite); 

 console.log("This works");
})();

/******/ })()
;