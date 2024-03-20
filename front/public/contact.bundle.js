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

/***/ "./scripts/contact.js/clearInputs.js":
/*!*******************************************!*\
  !*** ./scripts/contact.js/clearInputs.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {clearSelection} = __webpack_require__(/*! ./multipleSelect */ \"./scripts/contact.js/multipleSelect.js\")\nconst {clearRateSelection} = __webpack_require__(/*! ./selectRate */ \"./scripts/contact.js/selectRate.js\")\n\n\nconst clearInputs = ()=>{\n\n    document.querySelector(\".title-input\").value = \"\";\n    document.querySelector(\".year-input\").value = \"\";\n    document.querySelector(\".director-input\").value = \"\";\n    document.querySelector(\".url-input\").value = \"\";\n    document.querySelector(\".duration-input\").value = \"\";\n\n\n    document.querySelector(\".mensaje-title\").innerHTML=\"\";\n    document.querySelector(\".mensaje-year\").innerHTML=\"\";\n    document.querySelector(\".mensaje-director\").innerHTML=\"\";\n    document.querySelector(\".mensaje-duration\").innerHTML=\"\";\n    document.querySelector(\".mensaje-genre\").innerHTML=\"\";\n    document.querySelector(\".mensaje-rate\").innerHTML=\"\";\n    document.querySelector(\".mensaje-url\").innerHTML=\"\";\n\n\n\n\n    clearSelection()\n    clearRateSelection()\n    document.querySelector(\".creacion-exitosa\").innerHTML =\"\";\n\n}\n\nmodule.exports = {\n    clearInputs\n}\n\n//# sourceURL=webpack://front/./scripts/contact.js/clearInputs.js?");

/***/ }),

/***/ "./scripts/contact.js/createObject.js":
/*!********************************************!*\
  !*** ./scripts/contact.js/createObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { arrayGenre } = __webpack_require__(/*! ./multipleSelect */ \"./scripts/contact.js/multipleSelect.js\");\nconst { obtenerRate } = __webpack_require__(/*! ./selectRate */ \"./scripts/contact.js/selectRate.js\");\nconst {validateInputs} = __webpack_require__(/*! ./validation */ \"./scripts/contact.js/validation.js\")\n\nconst callInputs = function(){\n    const titleInput = document.querySelector(\".title-input\").value.trim();\n    const yearInput = document.querySelector(\".year-input\").value.trim();\n    const directorInput = document.querySelector(\".director-input\").value.trim();\n    const durationInput = document.querySelector(\".duration-input\").value.trim();\n    const genreInput = arrayGenre();\n    const rateInput = obtenerRate();\n    const urlInput = document.querySelector(\".url-input\").value;\n\n    if (!validateInputs(titleInput, yearInput,directorInput,durationInput,genreInput,urlInput)) {\n        return null;\n    }\n\n    // Si todas las validaciones son exitosas, se crea el objeto\n    const objeto = {\n        title: titleInput,\n        year: yearInput,\n        director: directorInput,\n        duration: durationInput,\n        genre: genreInput,\n        rate: rateInput,\n        poster: urlInput\n    };\n\n    return objeto;\n};\n\n\nmodule.exports={\n    callInputs\n}\n\n//# sourceURL=webpack://front/./scripts/contact.js/createObject.js?");

/***/ }),

/***/ "./scripts/contact.js/indexContact.js":
/*!********************************************!*\
  !*** ./scripts/contact.js/indexContact.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {callInputs} = __webpack_require__(/*! ./createObject */ \"./scripts/contact.js/createObject.js\");\n\nconst {clearInputs} = __webpack_require__(/*! ./clearInputs */ \"./scripts/contact.js/clearInputs.js\")\n\nconst btnCreate = document.querySelector(\".boton-create\");\nconst btnDelete = document.querySelector(\".boton-limpiar\")\n\nbtnCreate.addEventListener(\"click\", () => {\n    const objeto = callInputs();\n    if (objeto) {\n        document.querySelector(\".creacion-exitosa\").innerHTML = \"Se ha creado la pelicula exitosamente! Checala en Home\"\n    }\n});\n\n\nconst items = document.querySelectorAll(\".item\");\nbtnDelete.addEventListener(\"click\", () => {\n    clearInputs()\n});\n\n\n//# sourceURL=webpack://front/./scripts/contact.js/indexContact.js?");

/***/ }),

/***/ "./scripts/contact.js/multipleSelect.js":
/*!**********************************************!*\
  !*** ./scripts/contact.js/multipleSelect.js ***!
  \**********************************************/
/***/ ((module) => {

eval("const selectBtn = document.querySelector(\".select-btn\"),\n    items = document.querySelectorAll(\".item\")\n\nlet selectedGenres = [];\n\nselectBtn.addEventListener(\"click\", () => {\n    selectBtn.classList.toggle(\"open\");\n});\n\nitems.forEach(item => {\n    item.addEventListener(\"click\", () => {\n        item.classList.toggle(\"checked\");\n\n        const value = item.getAttribute(\"data-value\");\n\n        if (item.classList.contains(\"checked\")) {\n            selectedGenres.push(value);\n        } else {\n            selectedGenres = selectedGenres.filter(genre => genre !== value);\n        }\n\n        let btnText = document.querySelector(\".btn-text\");\n\n        if (selectedGenres.length > 0) {\n            btnText.innerText = `${selectedGenres.length} Seleccionado`;\n        } else {\n            btnText.innerText = \"Seleciona el genero\";\n        }\n    });\n});\n\n\nconst arrayGenre = () => {\n    return selectedGenres;\n}\n\nconst clearSelection = () => {\n    items.forEach(item => {\n        if (item.classList.contains(\"checked\")) {\n            item.classList.remove(\"checked\");\n        }\n    });\n    selectedGenres = [];\n    document.querySelector(\".btn-text\").innerText = \"Seleciona el genero\";\n}\n\nmodule.exports = {\n    arrayGenre,\n    clearSelection\n}\n\n\n//# sourceURL=webpack://front/./scripts/contact.js/multipleSelect.js?");

/***/ }),

/***/ "./scripts/contact.js/selectRate.js":
/*!******************************************!*\
  !*** ./scripts/contact.js/selectRate.js ***!
  \******************************************/
/***/ ((module) => {

eval("const selectBtnRate = document.querySelector(\".select-btn-rate\"),\n    itemsRate = document.querySelectorAll(\".item-rate\")\n\nselectBtnRate.addEventListener(\"click\", () => {\n    selectBtnRate.classList.toggle(\"open\");\n});\n\nitemsRate.forEach(itemRate => {\n    itemRate.addEventListener(\"click\", () => {\n        itemsRate.forEach(otherItemRate => {\n            if (otherItemRate !== itemRate) {\n                otherItemRate.classList.remove(\"checked\");\n            }\n        });\n        itemRate.classList.toggle(\"checked\");\n\n        let checkedRate = [...itemsRate].find(item => item.classList.contains(\"checked\")),\n            btnTextRate = document.querySelector(\".btn-text-rate\");\n\n        if (checkedRate) {\n            btnTextRate.innerText = `Seleccionado`;\n        } else {\n            btnTextRate.innerText = \"Seleciona el puntaje\";\n        }\n    });\n});\n\nconst obtenerRate = () => {\n    let selectedValue = null;\n    itemsRate.forEach(itemRate => {\n        if (itemRate.classList.contains(\"checked\")) {\n            selectedValue = parseInt(itemRate.getAttribute(\"data-value\"));\n        }\n    });\n    return selectedValue;\n};\n\nconst clearRateSelection = () => {\n    itemsRate.forEach(itemRate => {\n        if (itemRate.classList.contains(\"checked\")) {\n            itemRate.classList.remove(\"checked\");\n        }\n    });\n    document.querySelector(\".btn-text-rate\").innerText = \"Selecciona el puntaje\";\n};\n\n\n\nmodule.exports = {\n    obtenerRate,\n    clearRateSelection\n}\n\n\n\n//# sourceURL=webpack://front/./scripts/contact.js/selectRate.js?");

/***/ }),

/***/ "./scripts/contact.js/validation.js":
/*!******************************************!*\
  !*** ./scripts/contact.js/validation.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { obtenerRate } = __webpack_require__(/*! ./selectRate */ \"./scripts/contact.js/selectRate.js\");\n\n\nconst validateInputs = function(titleInput, yearInput,directorInput, durationInput, genreInput, urlInput) {\n    let errorTitle = document.querySelector(\".mensaje-title\");\n    let errorYear = document.querySelector(\".mensaje-year\");\n    let errorDirector = document.querySelector(\".mensaje-director\");\n    let errorDuration = document.querySelector(\".mensaje-duration\");\n    let errorGenre = document.querySelector(\".mensaje-genre\");\n    let errorRate = document.querySelector(\".mensaje-rate\");\n    let errorUrl = document.querySelector(\".mensaje-url\");\n\n    // validacion title\n    if (titleInput === \"\") {\n        errorTitle.innerHTML = \"Ingrese un formato de título válido\";\n        return false;\n    } else {\n        errorTitle.innerHTML = \"\";\n    }\n\n    // Validación de año\n    if (isNaN(yearInput) || yearInput.length !== 4) {\n        errorYear.innerHTML = \"Ingrese un formato de año válido\";\n        return false;\n    } else {\n        errorYear.innerHTML = \"\";\n    }\n\n    // validacion director\n    if (directorInput === \"\") {\n        errorDirector.innerHTML = \"Ingrese un formato de  director válido\";\n        return false;\n    } else {\n        errorDirector.innerHTML = \"\";\n    }\n\n    // validacion de duración \n\n    const durationPattern = /^(\\d{1,2})h (\\d{2})min$/;\n\n    if (!durationPattern.test(durationInput)) {\n        errorDuration.innerHTML = \"Ingrese un formato de duración válido, ej: 2h 00min\";\n        return false;\n    } else {\n        errorDuration.innerHTML = \"\";\n    }\n\n    //Validación de genero\n    if (genreInput.length === 0) {\n        errorGenre.innerHTML = \"Seleccione el género de la pelicula\";\n        return false;\n    } else {\n        errorGenre.innerHTML = \"\";\n    }\n\n    // //Validación de genero\n    rateInput = obtenerRate();\n    if (rateInput == null) {\n        errorRate.innerHTML = \"Seleccione el puntaje de la película\";\n        return false;\n    } else {\n        errorRate.innerHTML = \"\";\n    }\n\n\n    const urlPattern = /^(https?:\\/\\/)?([\\w.-]+)\\.([a-z]{2,})(\\/\\S*)?$/i;\n\n    if (!urlPattern.test(urlInput)) {\n        errorUrl.innerHTML = \"Ingrese una URL válida\";\n        return false;\n    } else {\n        errorUrl.innerHTML = \"\";\n    }\n\n\n\n    return true;\n};\n\nmodule.exports={\n    validateInputs\n}\n\n//# sourceURL=webpack://front/./scripts/contact.js/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/contact.js/indexContact.js");
/******/ 	
/******/ })()
;