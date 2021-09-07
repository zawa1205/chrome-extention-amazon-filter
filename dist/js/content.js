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

/***/ "./src/content.ts":
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/
/***/ (() => {

eval("\ndocument.getElementById('nav-search-submit-button').onclick = function () {\n    // window.alert(document.getElementById('twotabsearchtextbox')!)\n    remove_search();\n};\nfunction remove_search() {\n    const url = convertKeyword(document.getElementById('twotabsearchtextbox').value);\n    window.open(url, '_blank');\n}\nfunction convertKeyword(input) {\n    let shaped = input.replace(/^\\s+|\\s+$/g, \"\");\n    shaped = utf2ascii(shaped);\n    shaped = shaped.replace(/\\s+/g, '+');\n    return \"https://amazon.co.jp/s?k=\" + shaped + \"&__mk_ja_JP=カタカナ&ref=nb_sb_noss\" + \"&emi=AN1VRQENFRJN5\";\n}\nfunction utf2ascii(input) {\n    const utf = [\"%\", \"!\", \"\\\"\", \"#\", \"$\", \"&\", \"'\", \"(\", \")\", \"*\", \"+\", \",\", \"/\", \":\", \";\", \"<\", \"=\", \">\", \"?\", \"@\", \"[\", \"]\", \"^\", \"`\", \"{\", \"|\", \"}\", \"~\"];\n    const ascii = [\"%25\", \"%21\", \"%22\", \"%23\", \"%24\", \"%26\", \"%27\", \"%28\", \"%29\", \"%2A\", \"%2B\", \"%2C\", \"%2F\", \"%3A\", \"%3B\", \"%3C\", \"%3D\", \"%3E\", \"%3F\", \"%40\", \"%5B\", \"%5D\", \"%5E\", \"%60\", \"%7B\", \"%7C\", \"%7D\", \"%7E\"];\n    let shaped = input;\n    utf.forEach(function (e, index) {\n        shaped = shaped.replace(e, ascii[index]);\n    });\n    return shaped;\n}\n\n\n//# sourceURL=webpack://chrome-extention-amazon/./src/content.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/content.ts"]();
/******/ 	
/******/ })()
;