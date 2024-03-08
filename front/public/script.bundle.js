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

/***/ "./scripts/newData.js":
/*!****************************!*\
  !*** ./scripts/newData.js ***!
  \****************************/
/***/ ((module) => {

eval("const newData = [\n    {\n      title: \"The Godfather\",\n      date: \"15-Enero-2025\",\n      genere: [\"Crime\", \"Drama\"],\n      duration: \"2h 55min\",\n      linkUrl: \"https://i.pinimg.com/564x/11/99/dc/1199dc6273680f175fd9b06c9c36d08a.jpg\"\n    },\n    {\n      title: \"The Dark Knight\",\n      date: \"12-Junio-2027\",\n      genere: [\"Action\", \"Crime\", \"Drama\"],\n      duration: \"2h 32min\",\n      linkUrl: \"https://i.pinimg.com/564x/2c/12/9f/2c129f4027d67ab8736fcfe4bc2c1fa0.jpg\"\n    },\n    {\n      title: \"Pulp Fiction\",\n      date: \"20-Mayo-2028\",\n      genere: [\"Crime\", \"Drama\"],\n      duration: \"2h 34min\",\n      linkUrl: \"https://i.pinimg.com/736x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg\"\n    },\n    {\n      title: \"Forrest Gump\",\n      date: \"10-Agosto-2029\",\n      genere: [\"Drama\", \"Romance\"],\n      duration: \"2h 22min\",\n      linkUrl: \"https://i.pinimg.com/564x/6b/c5/98/6bc598e78530c37ac6a1432ee7489144.jpg\"\n    },\n    {\n      title: \"The Lord of the Rings: The Return of the King\",\n      date: \"25-Diciembre-2030\",\n      genere: [\"Action\", \"Adventure\", \"Drama\"],\n      duration: \"3h 21min\",\n      linkUrl: \"https://i.pinimg.com/564x/19/0f/43/190f4337809264046f61d4b2e1b41356.jpg\"\n    },\n    {\n      title: \"The Matrix\",\n      date: \"18-Septiembre-2031\",\n      genere: [\"Action\", \"Sci-Fi\"],\n      duration: \"2h 16min\",\n      linkUrl: \"https://i.pinimg.com/564x/9b/e3/ae/9be3aec043d2446ce811ae7a151d4f1e.jpg\"\n    },\n    {\n      title: \"Inception\",\n      date: \"30-Abril-2032\",\n      genere: [\"Action\", \"Adventure\", \"Sci-Fi\"],\n      duration: \"2h 28min\",\n      linkUrl: \"https://i.pinimg.com/564x/6e/25/74/6e25742131f52262b73d020e3f6c2ab2.jpg\"\n    },\n    {\n      title: \"The Silence of the Lambs\",\n      date: \"14-Noviembre-2033\",\n      genere: [\"Crime\", \"Drama\", \"Thriller\"],\n      duration: \"1h 58min\",\n      linkUrl: \"https://i.pinimg.com/736x/bc/e4/5d/bce45d85695b9c738399cf10ac133bc5.jpg\"\n    },\n    {\n      title: \"Goodfellas\",\n      date: \"03-Julio-2034\",\n      genere: [\"Biography\", \"Crime\", \"Drama\"],\n      duration: \"2h 26min\",\n      linkUrl: \"https://i.pinimg.com/564x/dd/c6/e4/ddc6e435721b8a7e62c4f9bb128ae83c.jpg\"\n    }\n  ];\n\n\nmodule.exports = newData;\n\n//# sourceURL=webpack://front/./scripts/newData.js?");

/***/ }),

/***/ "./scripts/scriptNew.js":
/*!******************************!*\
  !*** ./scripts/scriptNew.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const newData = __webpack_require__(/*! ./newData */ \"./scripts/newData.js\");\n\n\nconst cardsContainer = document.getElementById(\"cardsContainer\");\n\nconst crearCardNew = function(objeto){\n\n    //Crear la card y luego la añadimos al wrapper container\n    var card = document.createElement(\"div\");\n    card.classList.add(\"p-2\",\"g-col-6\",\"card-new\",\"d-flex\",\"flex-column\",\"align-items-center\");\n\n\n    card.innerHTML = `\n            <img src=\"${objeto.linkUrl}\" class=\"card-img-top imagen-new\" alt=\"...\">\n            <div class=\"card-body p-2\">\n                <h5 class=\"card-title\">${objeto.title}</h5>\n                <p class=\"card-text small\">Estreno: ${objeto.date}</p>\n                <a href=\"#\" class=\"btn btn-news btn-sm\"\"> Ver más</a>\n            </div>\n            \n        `\n        \n        cardsContainer.appendChild(card);\n    \n}\n\nconst ejecutarCards = newData.map(pelicula => crearCardNew(pelicula));\n\n\n//# sourceURL=webpack://front/./scripts/scriptNew.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/scriptNew.js");
/******/ 	
/******/ })()
;