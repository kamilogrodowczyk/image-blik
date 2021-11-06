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

/***/ "./public/login.js":
/*!*************************!*\
  !*** ./public/login.js ***!
  \*************************/
/***/ (() => {

eval("const form = document.querySelector(\"form\");\r\n\r\nform.addEventListener(\"submit\", async (e) => {\r\n  await fetch(\"http://localhost:5000/image-json\")\r\n    .then((res) => res.json())\r\n    .then((data) =>\r\n      data ? localStorage.setItem(\"token\", `${data[0].randomPassword}`) : null,\r\n    )\r\n    .catch((err) => console.log(err));\r\n  console.log(response);\r\n  const token = localStorage.getItem(\"token\");\r\n  if (token) {\r\n    window.location.href = \"/image\";\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://image-blik/./public/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/login.js"]();
/******/ 	
/******/ })()
;