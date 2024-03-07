/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/functions.js":
/*!******************************!*\
  !*** ./scripts/functions.js ***!
  \******************************/
/***/ ((module) => {

eval("\n\nconst wrapperContainer = document.getElementById(\"wrapper\");\n\nconst crearCard = function(objeto){\n\n    //Crear la card y luego la añadimos al wrapper container\n    var card = document.createElement(\"div\");\n    card.classList.add(\"swiper-slide\", \"card\");\n\n\n    card.innerHTML = `\n            <div class=\"card-content\">\n                <div class=\"image\">\n                    <img src=\"${objeto.poster}\" alt=\"\">\n                </div>\n\n                <div class=\"name-profession\">\n                    <span class=\"name\">${objeto.title}</span>\n                    <span class=\"profession\"> ${objeto.duration}</span>\n                </div>\n\n                <div class=\"button\">\n                    <button class=\"aboutMe\">Ver más</button>\n                </div>\n            </div>\n        `\n        \n        wrapperContainer.appendChild(card);\n    \n}\n\nmodule.exports=crearCard;\n\n//# sourceURL=webpack://front/./scripts/functions.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const crearCard = __webpack_require__(/*! ./functions */ \"./scripts/functions.js\")\n\nconst funcionIteradora = function(list){\n\n\n    list.forEach(objetoMovie =>crearCard(objetoMovie));\n    list.forEach(objetoMovie =>crearCard(objetoMovie)); //**LUEGO BORRAR */\n    list.forEach(objetoMovie =>crearCard(objetoMovie)); //**LUEGO BORRAR */\n}\n\nconst getObject = function(){\n    $.get('https://students-api.2.us-1.fl0.io/movies', array => funcionIteradora(array));\n}\n\ngetObject();\n\n\n\n\n\n\n\n\n\n\nvar swiper = new Swiper(\".mySwiper\", {\n    \n    spaceBetween: 30,\n    loop: false, //true\n    pagination: {\n        el: \".swiper-pagination\",\n        clickable: true,\n    },\n    navigation: {\n        nextEl: \".swiper-button-next\",\n        prevEl: \".swiper-button-prev\",\n    },\n    //centeredSlides: true, // Centra las diapositivas\n    breakpoints: {\n        // Configuración cuando el ancho de la pantalla es igual o mayor a 768px\n        768: {\n            slidesPerView: 1,\n            spaceBetween: 10,\n            slidesPerGroup: 1,\n        },\n        // Configuración cuando el ancho de la pantalla es igual o mayor a 1024px\n        1024: {\n            slidesPerView: 4,\n            spaceBetween: 20,\n            slidesPerGroup: 1,\n        },\n    },\n});\n\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;