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

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar form = document.querySelector(\"form\");\nvar input = document.querySelector(\".text-input\");\nform.addEventListener(\"submit\", /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {\n    var token;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://image-blik.herokuapp.com/image-json\").then(function (res) {\n              return res.json();\n            }).then(function (data) {\n              return input.value === data[0].randomPassword ? localStorage.setItem(\"token\", \"\".concat(data[0].randomPassword)) : null;\n            })[\"catch\"](function (err) {\n              return console.log(err);\n            });\n\n          case 2:\n            token = localStorage.getItem(\"token\");\n\n            if (token) {\n              window.location.href = \"/image\";\n            }\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\n//# sourceURL=webpack://image-blik/./public/login.js?");

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