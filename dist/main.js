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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("\r\n\r\n\r\nconst SCISSOR = 'scissors', PAPER = 'paper', ROCK = 'rock';\r\nconst moves = ['scissors', 'paper', 'rock'];\r\nconst options = document.querySelectorAll('.game-options img');\r\nconst message = document.getElementById('message');\r\nconst playerOneImg = document.querySelector('.player-1-choice img');\r\nconst playerTwoImg = document.querySelector('.player-2-choice img');\r\n\r\nlet playerOneMove = \"\", playerTwoMove = \"1\";\r\n\r\nfunction getRandomMove(){\r\n    return moves[Math.floor(Math.random() * 3)];\r\n}\r\n\r\nfunction playerOneChoise(choise){\r\n    switch (choise) {\r\n        case 'scissors':\r\n        let choiseImg = document.createElement('img');\r\n        choiseImg.setAttribute('src', './img/scissors.png'); \r\n        playerOneImg.replaceWith(choiseImg);\r\n        break;\r\n    }\r\n}\r\n\r\noptions.forEach(item => {\r\n    item.addEventListener('click', (event) => {\r\n        let choise = event.target.dataset.id;\r\n        playerOneChoise(choise);\r\n    })\r\n})\r\nconsole.log(playerOneImg);\n\n//# sourceURL=webpack://spr/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;