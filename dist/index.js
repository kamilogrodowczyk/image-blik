/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://image-blik/./public/styles.css?");

/***/ }),

/***/ "./public/helpers.js":
/*!***************************!*\
  !*** ./public/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPassword\": () => (/* binding */ createPassword),\n/* harmony export */   \"createImages\": () => (/* binding */ createImages),\n/* harmony export */   \"appendChildren\": () => (/* binding */ appendChildren),\n/* harmony export */   \"selectImages\": () => (/* binding */ selectImages),\n/* harmony export */   \"copyValue\": () => (/* binding */ copyValue)\n/* harmony export */ });\nconst createPassword = (length) => {\r\n  let result = \"\";\r\n  const characters = \"0123456789\";\r\n  const charactersLength = characters.length;\r\n  for (var i = 0; i < length; i++) {\r\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\r\n  }\r\n  return result;\r\n};\r\n\r\nconst createImages = (imageUrl) => {\r\n  const image = document.createElement(\"img\");\r\n  image.src = imageUrl;\r\n  image.className = \"box\";\r\n  return image;\r\n};\r\n\r\nconst appendChildren = (parent, children) => {\r\n  children.forEach((child) => {\r\n    parent.appendChild(child);\r\n  });\r\n};\r\n\r\nconst selectImages = (files, imageContainer) => {\r\n  for (let i = 0; i < files.length; i++) {\r\n    const reader = new FileReader();\r\n    reader.onload = () => {\r\n      const ele = createImages(reader.result);\r\n      const items = Array(i + 1).fill(ele);\r\n      appendChildren(imageContainer, items);\r\n    };\r\n    reader.readAsDataURL(files[i]);\r\n  }\r\n  // error.classList.remove(\"active\");\r\n};\r\n\r\nconst copyValue = (copyAlert, inputPassword) => {\r\n  if (!navigator.clipboard) {\r\n    inputPassword.select();\r\n    document.execCommand(\"copy\");\r\n  } else {\r\n    navigator.clipboard\r\n      .writeText(inputPassword.value)\r\n      .then(function () {\r\n        copyAlert.classList.add(\"active\");\r\n        setTimeout(() => {\r\n          copyAlert.classList.remove(\"active\");\r\n        }, 3000);\r\n      })\r\n      .catch(function () {\r\n        console.log(\"err\");\r\n      });\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://image-blik/./public/helpers.js?");

/***/ }),

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./public/styles.css\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./public/helpers.js\");\n\r\n\r\nconst inputImage = document.querySelector('input[type=\"file\"]');\r\nconst inputPassword = document.querySelector('input[name=\"random_password\"]');\r\nconst formButton = document.querySelector('button[type=\"submit\"]');\r\nconst form = document.querySelector(\"form\");\r\nconst copyButton = document.querySelector(\".copy-btn\");\r\nconst copyAlert = document.querySelector(\".copy-alert\");\r\nconst imageContainer = document.querySelector(\".image-leftbar\");\r\n\r\nlocalStorage.removeItem(\"token\");\r\n\r\ninputImage.addEventListener(\"change\", (e) => {\r\n  const files = e.target.files;\r\n  if (!files.length || files.length > 8) {\r\n    formButton.disabled = true;\r\n  } else {\r\n    formButton.disabled = false;\r\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.selectImages)(files, imageContainer);\r\n    inputPassword.value = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createPassword)(6);\r\n  }\r\n});\r\n\r\nform.addEventListener(\"submit\", (e) => {\r\n  if (!inputImage.value) {\r\n    e.preventDefault();\r\n  }\r\n  inputPassword.disabled = false;\r\n});\r\n\r\ninputImage.addEventListener(\"click\", (e) => {\r\n  while (imageContainer.lastChild) {\r\n    imageContainer.removeChild(imageContainer.lastChild);\r\n  }\r\n});\r\n\r\nimageContainer.addEventListener(\"click\", (e) => {\r\n  imageContainer.classList.toggle(\"visible\");\r\n  console.log(e);\r\n});\r\n\r\ncopyButton.addEventListener(\"click\", () => {\r\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.copyValue)(copyAlert, inputPassword);\r\n});\r\n\n\n//# sourceURL=webpack://image-blik/./public/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/index.js");
/******/ 	
/******/ })()
;