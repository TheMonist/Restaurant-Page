/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
const loadHeader = (() => {
    const contentContainer = document.querySelector("#content");

    const header = document.createElement("header");

    header.innerHTML = `
        <header class="nav-bar">
            <h2>Lakay Restaurant</h2>
            <ul>
                <li><a href="#home" class="tab active">Home</a></li>
                <li><a href="#menu" class="tab">Menu</a></li>
                <li><a href="#contact" class="tab">About</a></li>
            </ul>
        </header>`;

    contentContainer.appendChild(header);
})();



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
const loadHome = (() => {
  const contentContainer = document.querySelector("#content");

  const home = document.createElement("main");
  home.setAttribute("id", "home");
  home.innerHTML = `
    <main id="home" class="home-body">
      <h2>Lakay Restaurant</h2>
      <p>When you come here, we want you to feel at home!</p>
        <div>
          <h3>Restaurant Hours</h3>
            <p>Monday - Thursday: 10am - 11pm</p>
            <p>Friday - Sunday: 10am - 1am</p>
        </div>
    </main>`;

  contentContainer.appendChild(home);
})();


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
const loadContact = (() => {
    const contentContainer = document.querySelector("#content");

    const contact = document.createElement("main");
    contact.setAttribute("id", "contact");
    contact.innerHTML = `
    <main id="contact" class="contact-body">
        <h2>About</h2>
        <p>We are a family owned business. Inspired by the cuisine of my culture. We try give a new twist to Haitian cuisine.</p>
        <p>100 Boynton Beach Blvd</p>
        <p>Boynton Beach, FL 33435</p>
        <p>561-123-4567</p>
        <p>We are located on the Corner of Boynton Beach Blvd and Secrest Blvd</p>
    </main>`;
    
    contentContainer.appendChild(contact);
})();



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
const loadMenu = (() => {
    const contentContainer = document.querySelector("#content");

    const menu = document.createElement("main");
    menu.setAttribute("id", "menu");
    menu.innerHTML = `
        <main id="menu">
            <h2>Menu</h2>
            <div class="menu-body">
                <div class="card">
                    <img src="images/rice.jpg" alt="plate of rice">
                    <div class="content">
                        <h4>Haitian Rice</h4>
                        <p>Choose Chicken, Fish, or Vegetables</p>
                        <p>Comes with Pikliz</p>
                        <p>$15.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/soup.jpg" alt="bowl of soup">
                    <div class="content">
                        <h4>Soup</h4>
                        <p>Pumpkin Soup or Soup of the Day</p>
                        <p>$7.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/sandwich.jpg" alt="man holding sandwich">
                    <div class="content">
                        <h4>Sandwiches</h4>
                        <p>Try Our Plaintain Sandwiches, with Choice of Protein.</p>
                        <p>Loaded with Peppers, Onions, and Coleslaw.</p>
                        <p>Comes with Fries, Salad, or Plantains.</p>
                        <p>$13.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/sides.jpg" alt="plate of plantains">
                    <div class="content">
                        <h4>Sides</h4>
                        <p>Plaintains, Small Rice and Beans, Tassot, Griot</p>
                         <p>$4.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/reg-drink.jpg" alt="coconut water">
                    <div class="content">
                        <h4>Drinks</h4>
                        <p>Coconut Water, Regular Water, and Pepsi Drinks</p>
                        <p>$1.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/drink.jpg" alt="alcholic drink">
                    <div class="content">
                        <h4>Alcoholic Drinks</h4>
                        <p>Menu Coming Soon!</p>
                    </div>
                </div>
            </div>
        </main>`;

    contentContainer.appendChild(menu);
})();



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadFooter": () => (/* binding */ loadFooter)
/* harmony export */ });
const loadFooter = (() => {
    const contentContainer = document.querySelector("#content");

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <footer>
            <h3>Created by The Monist</h3>
        </footer>`;

    contentContainer.appendChild(footer)
})();



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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);






const tabs = document.querySelectorAll(".tab");
tabs.forEach((clickedTab) => {
    clickedTab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
    });

    clickedTab.classList.add("active");
});

console.log("This works");
})();

/******/ })()
;