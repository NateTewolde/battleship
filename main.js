/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Space-Game-Font.otf */ "./src/styles/Space-Game-Font.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: space-font;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* \nIdeas:\n-fire-glowy-animation for .hit\n-\"space\" cloud animation around gameboard, grid is same color, \n-find simple image for ship, or something to make the ships lookk interesting\n- flashing You win when won.\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  overflow: hidden;\n}\n\n#content {\n  background: radial-gradient(circle at center, navy 0, black 100%);\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n.add-ship-container {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  row-gap: 16px;\n  height: 100%;\n  width: clamp(100px, 50%, 700px);\n  color: #d9f99d;\n  text-align: center;\n  border-radius: 16px;\n  padding: 24px;\n  justify-content: center;\n}\n\n.computer-section:has(.add-ship-container) {\n  height: 100%;\n}\n\n.add-ship-prompt {\n  font-size: 1.3rem;\n}\n\n#new_direction_form {\n  display: grid;\n  grid-template-rows: min-content, 1fr;\n}\n\n#direction {\n  color: #bef264;\n  text-align: center;\n  text-shadow: 0 0 7px #a3e635;\n  background-color: transparent;\n  border: none;\n  font-size: 1.5rem;\n}\n\n#direction option {\n  background-color: black;\n  border: none;\n}\n\n.add-ship-container button {\n  color: #bef264;\n  box-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635;\n  background: transparent;\n  border: 1px solid #a3e635;\n  border-radius: 16px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.add-ship-container label {\n  font-size: 1.3rem;\n}\n\n.btns-container {\n  display: flex;\n  padding-top: 18px;\n  justify-content: space-evenly;\n  height: min-content;\n  gap: 16px;\n}\n\n.game-header {\n  font-family: space-font, \"Roboto\", sans-serif;\n  text-align: center;\n  color: #a3e635;\n  text-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635, 0 0 21px #a3e635,\n    0 0 42px #84cc16, 0 0 84px #84cc16, 0 0 102px #84cc16;\n  font-size: 4rem;\n  font-weight: 500;\n  padding-top: 16px;\n}\n\n.gameboard-section {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n}\n\n.computer-section,\n.player-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n\n.gameboard-header {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: #d9f99d;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 3px;\n  margin-top: 8px;\n  width: clamp(100px, 50%, 700px);\n  box-shadow: 0 0 10px #a3e635, 0 0 20px #ecfccb, 0 0 40px #ecfccb;\n}\n\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid #84cc16;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n\n.add-ship-prompt,\nlabel {\n  text-shadow: 0 0 5px #bef264, 0 0 10px #84cc16, 0 0 15px #84cc16,\n    0 0 20px #84cc16;\n  text-align: center;\n  -webkit-animation: glow 1s ease-in-out 4 alternate;\n  -moz-animation: glow 1s ease-in-out 4 alternate;\n  animation: glow 1s ease-in-out 4 alternate;\n}\n\n@-webkit-keyframes glow {\n  from {\n    text-shadow: 0 0 5px #bef264, 0 0 10px #84cc16, 0 0 15px #84cc16,\n      0 0 20px #84cc16;\n  }\n\n  to {\n    text-shadow: 0 0 2px #bef264, 0 0 4px #a3e635, 0 0 8px #a3e635,\n      0 0 10px #a3e635, 0 0 20px #a3e635, 0 0 40px #a3e635, 0 0 60px #a3e635;\n  }\n}\n\n.ship:not(.computer),\n.hit,\n.missed,\n.placement-location {\n  box-shadow: none;\n}\n\n.ship {\n  background-color: #7c3aed;\n}\n\n.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: transparent;\n}\n\n.placement-location {\n  background-color: limegreen;\n}\n\n.space {\n  background: transparent center / 200px 200px round;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n@keyframes space {\n  40% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  50% {\n    opacity: 0.25;\n    overflow: hidden;\n  }\n  60% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  100% {\n    transform: rotate(360deg);\n    overflow: hidden;\n  }\n}\n\n.stars1 {\n  animation: space 180s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 25px 5px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars2 {\n  animation: space 240s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 75px 125px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars3 {\n  animation: space 300s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 10px 10px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n\n/* \nSteps to make responsive:\n  Mobile: \n    1. make both boards visible with no scrolling\n    2. \n\n*/\n\n/* stuff for media quieries: \nplayer section: \n  padding: 64px;\n  \n  \n  \n  \n  */\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AACA;EACE,uBAAuB;EACvB,4CAA+B;AACjC;;AAEA;;;;;;CAMC;;AAED;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,iEAAiE;EACjE,aAAa;EACb,gBAAgB;EAChB,iCAAiC;EACjC,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,aAAa;EACb,YAAY;EACZ,+BAA+B;EAC/B,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,4BAA4B;EAC5B,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,6CAA6C;EAC7C,uBAAuB;EACvB,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,6CAA6C;EAC7C,kBAAkB;EAClB,cAAc;EACd;yDACuD;EACvD,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,+BAA+B;EAC/B,gEAAgE;AAClE;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,SAAS;EACT,gBAAgB;EAChB,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;;EAEE;oBACkB;EAClB,kBAAkB;EAClB,kDAAkD;EAClD,+CAA+C;EAC/C,0CAA0C;AAC5C;;AAEA;EACE;IACE;sBACkB;EACpB;;EAEA;IACE;4EACwE;EAC1E;AACF;;AAEA;;;;EAIE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,kDAAkD;EAClD,SAAS;EACT,OAAO;EACP,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,gBAAgB;AAClB;;AAEA;EACE;IACE,aAAa;IACb,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,gBAAgB;EAClB;EACA;IACE,yBAAyB;IACzB,gBAAgB;EAClB;AACF;;AAEA;EACE,0CAA0C;EAC1C;;;;;;;;;6EAS2E;EAC3E,gBAAgB;AAClB;AACA;EACE,0CAA0C;EAC1C;;;;;;;;;0EASwE;EACxE,gBAAgB;AAClB;AACA;EACE,0CAA0C;EAC1C;;;;;;;;;6EAS2E;EAC3E,gBAAgB;AAClB;;AAEA;;;;;;CAMC;;AAED;;;;;;;GAOG","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap\");\n@font-face {\n  font-family: space-font;\n  src: url(./Space-Game-Font.otf);\n}\n\n/* \nIdeas:\n-fire-glowy-animation for .hit\n-\"space\" cloud animation around gameboard, grid is same color, \n-find simple image for ship, or something to make the ships lookk interesting\n- flashing You win when won.\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  overflow: hidden;\n}\n\n#content {\n  background: radial-gradient(circle at center, navy 0, black 100%);\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n.add-ship-container {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  row-gap: 16px;\n  height: 100%;\n  width: clamp(100px, 50%, 700px);\n  color: #d9f99d;\n  text-align: center;\n  border-radius: 16px;\n  padding: 24px;\n  justify-content: center;\n}\n\n.computer-section:has(.add-ship-container) {\n  height: 100%;\n}\n\n.add-ship-prompt {\n  font-size: 1.3rem;\n}\n\n#new_direction_form {\n  display: grid;\n  grid-template-rows: min-content, 1fr;\n}\n\n#direction {\n  color: #bef264;\n  text-align: center;\n  text-shadow: 0 0 7px #a3e635;\n  background-color: transparent;\n  border: none;\n  font-size: 1.5rem;\n}\n\n#direction option {\n  background-color: black;\n  border: none;\n}\n\n.add-ship-container button {\n  color: #bef264;\n  box-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635;\n  background: transparent;\n  border: 1px solid #a3e635;\n  border-radius: 16px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.add-ship-container label {\n  font-size: 1.3rem;\n}\n\n.btns-container {\n  display: flex;\n  padding-top: 18px;\n  justify-content: space-evenly;\n  height: min-content;\n  gap: 16px;\n}\n\n.game-header {\n  font-family: space-font, \"Roboto\", sans-serif;\n  text-align: center;\n  color: #a3e635;\n  text-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635, 0 0 21px #a3e635,\n    0 0 42px #84cc16, 0 0 84px #84cc16, 0 0 102px #84cc16;\n  font-size: 4rem;\n  font-weight: 500;\n  padding-top: 16px;\n}\n\n.gameboard-section {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n}\n\n.computer-section,\n.player-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n\n.gameboard-header {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: #d9f99d;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 3px;\n  margin-top: 8px;\n  width: clamp(100px, 50%, 700px);\n  box-shadow: 0 0 10px #a3e635, 0 0 20px #ecfccb, 0 0 40px #ecfccb;\n}\n\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid #84cc16;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n\n.add-ship-prompt,\nlabel {\n  text-shadow: 0 0 5px #bef264, 0 0 10px #84cc16, 0 0 15px #84cc16,\n    0 0 20px #84cc16;\n  text-align: center;\n  -webkit-animation: glow 1s ease-in-out 4 alternate;\n  -moz-animation: glow 1s ease-in-out 4 alternate;\n  animation: glow 1s ease-in-out 4 alternate;\n}\n\n@-webkit-keyframes glow {\n  from {\n    text-shadow: 0 0 5px #bef264, 0 0 10px #84cc16, 0 0 15px #84cc16,\n      0 0 20px #84cc16;\n  }\n\n  to {\n    text-shadow: 0 0 2px #bef264, 0 0 4px #a3e635, 0 0 8px #a3e635,\n      0 0 10px #a3e635, 0 0 20px #a3e635, 0 0 40px #a3e635, 0 0 60px #a3e635;\n  }\n}\n\n.ship:not(.computer),\n.hit,\n.missed,\n.placement-location {\n  box-shadow: none;\n}\n\n.ship {\n  background-color: #7c3aed;\n}\n\n.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: transparent;\n}\n\n.placement-location {\n  background-color: limegreen;\n}\n\n.space {\n  background: transparent center / 200px 200px round;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n@keyframes space {\n  40% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  50% {\n    opacity: 0.25;\n    overflow: hidden;\n  }\n  60% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  100% {\n    transform: rotate(360deg);\n    overflow: hidden;\n  }\n}\n\n.stars1 {\n  animation: space 180s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 25px 5px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars2 {\n  animation: space 240s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 75px 125px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars3 {\n  animation: space 300s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 10px 10px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n\n/* \nSteps to make responsive:\n  Mobile: \n    1. make both boards visible with no scrolling\n    2. \n\n*/\n\n/* stuff for media quieries: \nplayer section: \n  padding: 64px;\n  \n  \n  \n  \n  */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-manager.js":
/*!****************************!*\
  !*** ./src/dom-manager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearGame": () => (/* binding */ clearGame),
/* harmony export */   "displayChooseShip": () => (/* binding */ displayChooseShip),
/* harmony export */   "displayGame": () => (/* binding */ displayGame),
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner),
/* harmony export */   "locationPrompt": () => (/* binding */ locationPrompt)
/* harmony export */ });
const removeAllChildNodes = function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const clearGame = function removeElementsInGameSections() {
  removeAllChildNodes(document.querySelector(".player-section"));
  removeAllChildNodes(document.querySelector(".computer-section"));
};

const displayBoard = function displayPlayerGameBoard(player) {
  const gameboard = player.gameboard.getBoard();
  const gameboardElement = document.createElement("div");
  gameboardElement.classList.add("gameboard");
  for (let i = 0; i < gameboard.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 10; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.setAttribute("data-grid-id", `${i},${j}`);

      if (gameboard[i][j] != null) {
        grid.classList.add("ship");
      }
      if (player.gameboard.hitShots.includes(`${i},${j}`)) {
        grid.classList.add("hit");
      }
      if (player.gameboard.missedShots.includes(`${i},${j}`)) {
        grid.classList.add("missed");
      }
      if (player.isComputer) {
        grid.classList.add("computer");
      }
      row.appendChild(grid);
    }
    gameboardElement.appendChild(row);
  }

  return gameboardElement;
};

const displayGame = function displayTheGame(player1, player2) {
  const playerSection = document.querySelector(".player-section");
  const computerSection = document.querySelector(".computer-section");

  const playerHeader = document.createElement("div");
  playerHeader.classList.add("gameboard-header");
  playerHeader.textContent = "Your Fleet";

  const computerHeader = document.createElement("div");
  computerHeader.classList.add("gameboard-header");
  computerHeader.textContent = "Enemy's Fleet";

  playerSection.appendChild(playerHeader);
  playerSection.appendChild(displayBoard(player1));

  if (!player2) {
    return;
  }
  computerSection.appendChild(computerHeader);
  computerSection.appendChild(displayBoard(player2));
};

const locationPrompt = function promptUserForLocationPlacement(shipType) {
  const addShipPrompt = document.createElement("div");
  addShipPrompt.classList.add("add-ship-prompt");

  addShipPrompt.textContent = `Choose ${shipType[0]} location (length ${shipType[1]})`;

  return addShipPrompt;
};

const displayDirectionForm =
  function createAndDisplayTheDirectionFormForShipPlacement() {
    const formSection = document.createElement("div");
    formSection.setAttribute("id", "direction-form-section");

    const directionForm = document.createElement("form");
    directionForm.setAttribute("action", "");
    directionForm.setAttribute("method", "post");
    directionForm.setAttribute("id", "new_direction_form");

    const directionField = document.createElement("div");
    directionField.classList.add("form-field");

    const directionLabel = document.createElement("label");
    directionLabel.setAttribute("for", "direction");
    directionLabel.textContent = "Choose direction\n";
    const directionSelect = document.createElement("select");
    directionSelect.setAttribute("id", "direction");
    const directionOptionRight = document.createElement("option");
    directionOptionRight.setAttribute("value", "right");
    directionOptionRight.setAttribute("selected", "");
    directionOptionRight.textContent = "Right";
    const directionOptionLeft = document.createElement("option");
    directionOptionLeft.setAttribute("value", "left");
    directionOptionLeft.textContent = "Left";
    const directionOptionDown = document.createElement("option");
    directionOptionDown.setAttribute("value", "down");
    directionOptionDown.textContent = "Down";
    const directionOptionUp = document.createElement("option");
    directionOptionUp.setAttribute("value", "up");
    directionOptionUp.textContent = "Up";
    directionSelect.appendChild(directionOptionRight);
    directionSelect.appendChild(directionOptionLeft);
    directionSelect.appendChild(directionOptionDown);
    directionSelect.appendChild(directionOptionUp);
    directionField.appendChild(directionLabel);
    directionField.appendChild(directionSelect);
    directionForm.appendChild(directionField);

    const btnsContainer = document.createElement("div");
    btnsContainer.classList.add("btns-container");

    const randomBtn = document.createElement("button");
    randomBtn.classList.add("random-form-btn");
    randomBtn.setAttribute("type", "button");
    randomBtn.textContent = "Random";
    btnsContainer.appendChild(randomBtn);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-form-btn");
    submitBtn.setAttribute("type", "button");
    submitBtn.textContent = "Submit";
    btnsContainer.appendChild(submitBtn);

    directionForm.appendChild(btnsContainer);

    return directionForm;
  };

const formatShipChoiceGrids = function formatGridsToRunGame() {
  let counter = 0;
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) =>
    grid.addEventListener("click", () => {
      if (counter > 0) {
        return;
      }
      grid.classList.add("placement-location");
      counter++;
    })
  );
};

const displayChooseShip = function getShipPlacementFromUser(
  player1,
  shipTypes
) {
  const placeShipContainer = document.createElement("div");
  placeShipContainer.classList.add("add-ship-container");

  displayGame(player1);
  formatShipChoiceGrids(player1);
  placeShipContainer.appendChild(
    locationPrompt(shipTypes[shipTypes.length - 1])
  );
  placeShipContainer.appendChild(displayDirectionForm());

  const computerSection = document.querySelector(".computer-section");
  computerSection.appendChild(placeShipContainer);
};

const displayWinner = function displayTheGivenPlayerObjAsWinner(player) {
  const winner = document.createElement("div");
  winner.classList.add("winner-header");

  if (player.isComputer) {
    winner.textContent = "Computer wins!";
  } else {
    winner.textContent = "You won!";
  }

  const gameHeader = document.querySelector(".game-header");
  removeAllChildNodes(gameHeader);
  gameHeader.appendChild(winner);
};




/***/ }),

/***/ "./src/game-manager.js":
/*!*****************************!*\
  !*** ./src/game-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkForWinner": () => (/* binding */ checkForWinner),
/* harmony export */   "setAttack": () => (/* binding */ setAttack)
/* harmony export */ });
const setAttack = function setAttackOnEnemyGameboard(gridId, player1, player2) {
  const col = gridId.split(",")[0];
  const row = gridId.split(",")[1];
  player1.attack(player2, col, row);
};

const checkForWinner = function checkIfAPlayerWon(player1, player2) {
  if (player2.gameboard.areAllSunk()) {
    return player1;
  }
  if (player1.gameboard.areAllSunk()) {
    return player2;
  }
  return false;
};




/***/ }),

/***/ "./src/gameboard-manager.js":
/*!**********************************!*\
  !*** ./src/gameboard-manager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Gameboard = () => {
  const gameboard = [[], [], [], [], [], [], [], [], [], []];
  const getBoard = () => gameboard;
  const ships = [];
  const shipValidity = [];

  const wasNewShipValid = () => shipValidity[shipValidity.length - 1];

  const populateShipsGrids = (shipCoords, ship) => {
    shipCoords.forEach((element) => {
      const [col, row] = element.split(",");
      gameboard[col][row] = ship;
    });
  };

  // check if newShipInfo matches any other ships coords
  const checkNewShipValidity = (newShipInfo) => {
    const foundOverlap = ships.some((ship) =>
      ship.some((coord) => newShipInfo.includes(coord))
    );

    const foundOutOfBounds = newShipInfo.some((coords) => {
      const [col, row] = coords.split(",");
      if (col > 9 || col < 0 || row > 9 || row < 0) {
        return true;
      }
      return false;
    });

    if (foundOverlap || foundOutOfBounds) {
      shipValidity.push(false);
      return;
    }
    shipValidity.push(true);
    if (newShipInfo.length === 0) {
      shipValidity.push(false);
    }
  };

  const placeShip = (col, row, direction, ship) => {
    const newShipInfo = [];

    for (let i = 0; i < ship.length; i++) {
      if (direction === "left") {
        newShipInfo.push(`${col},${row - i}`);
      }
      if (direction === "right") {
        newShipInfo.push(`${col},${row + i}`);
      }
      if (direction === "down") {
        newShipInfo.push(`${col - i},${row}`);
      }
      if (direction === "up") {
        newShipInfo.push(`${col + i},${row}`);
      }
    }

    checkNewShipValidity(newShipInfo);
    const isValid = wasNewShipValid();
    if (!isValid) {
      return;
    }
    populateShipsGrids(newShipInfo.slice(0), ship);
    newShipInfo.push(ship);
    ships.push(newShipInfo);
  };

  // Helper function that returns a random number between and including a mix/max
  const randomInt = function getRandomIntInclusive(setMin, setMax) {
    const min = Math.ceil(setMin);
    const max = Math.floor(setMax);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const placeRandomShip = function placeRandomValidShip(ship) {
    const directions = ["left", "right", "up", "down"];
    const condition = true;

    while (condition) {
      placeShip(
        randomInt(0, 9),
        randomInt(0, 9),
        directions[randomInt(0, 3)],
        ship
      );
      const isValid = wasNewShipValid();
      if (isValid) {
        console.log(ships);
        break;
      }
    }
  };

  const missedShots = [];
  const hitShots = [];

  const receiveAttack = (x, y) => {
    const xPlusY = `${x},${y}`;
    let hitPosition;
    let didItHit;

    for (let i = 0; i < ships.length; i++) {
      hitPosition = ships[i].findIndex((coordinates) => coordinates === xPlusY);
      if (gameboard[x][y] != null) {
        gameboard[x][y].hit(hitPosition);
        didItHit = true;
      }
    }
    if (didItHit) {
      hitShots.push(xPlusY);
      return;
    }

    missedShots.push(xPlusY);
  };

  const areAllSunk = () =>
    ships.slice(0).every((ship) => ship[ship.length - 1].isSunk());

  return {
    getBoard,
    placeShip,
    receiveAttack,
    missedShots,
    hitShots,
    areAllSunk,
    wasNewShipValid,
    placeRandomShip,
    ships,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/player-manager.js":
/*!*******************************!*\
  !*** ./src/player-manager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-param-reassign */
// Helper function that returns a random number between and including a mix/max
const randomInt = function getRandomIntInclusive() {
  const setMin = 0;
  const setMax = 9;
  const min = Math.ceil(setMin);
  const max = Math.floor(setMax);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomAttack = function createRandomUnusedAttackChoice(attacksMade) {
  if (attacksMade.length === 100) {
    return [0, 0];
  }
  let foundUsedAttack = true;
  while (foundUsedAttack) {
    const compX = randomInt();
    const compY = randomInt();
    if (!attacksMade.includes(`${compX},${compY}`)) {
      foundUsedAttack = false;
      attacksMade.push(`${compX},${compY}`);
      return [compX, compY];
    }
  }
  return -1;
};

const Player = (gameboard, isComputer) => {
  const attacksMade = [];
  const attack = (enemy, x, y) => {
    if (isComputer) {
      [x, y] = randomAttack(attacksMade);
    }
    enemy.gameboard.receiveAttack(x, y);
  };
  return { gameboard, attack, attacksMade, isComputer };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/ship-manager.js":
/*!*****************************!*\
  !*** ./src/ship-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  const damaged = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ].slice(0, length);
  const hit = (location) => {
    damaged[location] = true;
  };
  const isSunk = () => damaged.every((location) => location === true);

  return { length, damaged, hit, isSunk };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/styles/Space-Game-Font.otf":
/*!****************************************!*\
  !*** ./src/styles/Space-Game-Font.otf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1925a8e697d9ca7cf7db.otf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-manager */ "./src/player-manager.js");
/* harmony import */ var _gameboard_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard-manager */ "./src/gameboard-manager.js");
/* harmony import */ var _ship_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship-manager */ "./src/ship-manager.js");
/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-manager */ "./src/dom-manager.js");
/* harmony import */ var _game_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-manager */ "./src/game-manager.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");







// Steps to finish:
//    - if overlap/out of bounds use js form validation

//    - add max grid sizes in css, design and make look nice because last vanilla JS project
const shipTypes = [
  ["Patrol Boat", 2],
  ["Submarine", 3],
  ["Destroyer", 3],
  ["Battleship", 4],
  ["Carrier", 5],
];

const humanPlayer = (0,_player_manager__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_gameboard_manager__WEBPACK_IMPORTED_MODULE_1__["default"])());
const computerPlayer = (0,_player_manager__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_gameboard_manager__WEBPACK_IMPORTED_MODULE_1__["default"])(), true);

computerPlayer.gameboard.placeRandomShip((0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(5));
computerPlayer.gameboard.placeRandomShip((0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(4));
computerPlayer.gameboard.placeRandomShip((0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(3));
computerPlayer.gameboard.placeRandomShip((0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(3));
computerPlayer.gameboard.placeRandomShip((0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(2));

const formatGrids = function formatGridsToRunGame(player1, player2) {
  const grids = document.querySelectorAll(".computer");
  grids.forEach((grid) =>
    grid.addEventListener("click", () => {
      const gridId = grid.getAttribute("data-grid-id");
      (0,_game_manager__WEBPACK_IMPORTED_MODULE_4__.setAttack)(gridId, player1, player2);
      player2.attack(player1);

      (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.clearGame)(player1, player2);
      (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.displayGame)(player1, player2);

      if ((0,_game_manager__WEBPACK_IMPORTED_MODULE_4__.checkForWinner)(player1, player2)) {
        (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.displayWinner)((0,_game_manager__WEBPACK_IMPORTED_MODULE_4__.checkForWinner)(player1, player2));
        return;
      }

      formatGrids(player1, player2);
    })
  );
};
const chooseShips = function createAndDisplayPlayerShipChoosing() {
  (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.displayChooseShip)(humanPlayer, shipTypes);

  // eslint-disable-next-line no-use-before-define
  formatSubmitBtn(humanPlayer);
  // eslint-disable-next-line no-use-before-define
  formatRandomBtn(humanPlayer);
};

const formatSubmitBtn = function formatsDirectionSubmitButton(player) {
  const submitFormBtn = document.querySelector(".submit-form-btn");
  submitFormBtn.addEventListener("click", () => {
    const location = document.querySelector(".placement-location");
    const gridId = location.getAttribute("data-grid-id");

    const directionSelected = document.getElementById("direction");
    const directionChoice =
      directionSelected.options[directionSelected.selectedIndex].text;
    const coords = gridId.split(",");

    player.gameboard.placeShip(
      +coords[0],
      +coords[1],
      directionChoice.toLowerCase(),
      (0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(shipTypes[shipTypes.length - 1][1])
    );

    if (player.gameboard.wasNewShipValid()) {
      shipTypes.pop();
    }
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.clearGame)();
    if (shipTypes.length === 0) {
      (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.displayGame)(humanPlayer, computerPlayer);
      formatGrids(humanPlayer, computerPlayer);
      return;
    }

    chooseShips();
  });
};

const formatRandomBtn = function randomBtnWillPlaceShipRandomly(player) {
  const randomBtn = document.querySelector(".random-form-btn");
  randomBtn.addEventListener("click", () => {
    player.gameboard.placeRandomShip((0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(shipTypes[shipTypes.length - 1][1]));
    shipTypes.pop();
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.clearGame)();
    if (shipTypes.length === 0) {
      (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.displayGame)(humanPlayer, computerPlayer);
      formatGrids(humanPlayer, computerPlayer);
      return;
    }

    chooseShips();
  });
};

chooseShips();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WDtBQUNvQztBQUMvQjs7QUFFNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwyREFBTSxDQUFDLDhEQUFTO0FBQ3BDLHVCQUF1QiwyREFBTSxDQUFDLDhEQUFTOztBQUV2Qyx5Q0FBeUMseURBQUk7QUFDN0MseUNBQXlDLHlEQUFJO0FBQzdDLHlDQUF5Qyx5REFBSTtBQUM3Qyx5Q0FBeUMseURBQUk7QUFDN0MseUNBQXlDLHlEQUFJOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBUztBQUNmOztBQUVBLE1BQU0sdURBQVM7QUFDZixNQUFNLHlEQUFXOztBQUVqQixVQUFVLDZEQUFjO0FBQ3hCLFFBQVEsMkRBQWEsQ0FBQyw2REFBYztBQUNwQztBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWlCOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFJO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0EsTUFBTSx5REFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHlEQUFJO0FBQ3pDO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0EsTUFBTSx5REFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1NwYWNlLUdhbWUtRm9udC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHNwYWNlLWZvbnQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIFxcbklkZWFzOlxcbi1maXJlLWdsb3d5LWFuaW1hdGlvbiBmb3IgLmhpdFxcbi1cXFwic3BhY2VcXFwiIGNsb3VkIGFuaW1hdGlvbiBhcm91bmQgZ2FtZWJvYXJkLCBncmlkIGlzIHNhbWUgY29sb3IsIFxcbi1maW5kIHNpbXBsZSBpbWFnZSBmb3Igc2hpcCwgb3Igc29tZXRoaW5nIHRvIG1ha2UgdGhlIHNoaXBzIGxvb2trIGludGVyZXN0aW5nXFxuLSBmbGFzaGluZyBZb3Ugd2luIHdoZW4gd29uLlxcbiovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIG5hdnkgMCwgYmxhY2sgMTAwJSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmFkZC1zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICByb3ctZ2FwOiAxNnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCA1MCUsIDcwMHB4KTtcXG4gIGNvbG9yOiAjZDlmOTlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyLXNlY3Rpb246aGFzKC5hZGQtc2hpcC1jb250YWluZXIpIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFkZC1zaGlwLXByb21wdCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI25ld19kaXJlY3Rpb25fZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCwgMWZyO1xcbn1cXG5cXG4jZGlyZWN0aW9uIHtcXG4gIGNvbG9yOiAjYmVmMjY0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA3cHggI2EzZTYzNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNkaXJlY3Rpb24gb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLXNoaXAtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjb2xvcjogI2JlZjI2NDtcXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggI2EzZTYzNSwgMCAwIDE1cHggI2EzZTYzNTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG4uYWRkLXNoaXAtY29udGFpbmVyIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uYnRucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uZ2FtZS1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IHNwYWNlLWZvbnQsIFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNhM2U2MzU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDdweCAjYTNlNjM1LCAwIDAgMTVweCAjYTNlNjM1LCAwIDAgMjFweCAjYTNlNjM1LFxcbiAgICAwIDAgNDJweCAjODRjYzE2LCAwIDAgODRweCAjODRjYzE2LCAwIDAgMTAycHggIzg0Y2MxNjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nLXRvcDogMTZweDtcXG59XFxuXFxuLmdhbWVib2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItc2VjdGlvbixcXG4ucGxheWVyLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmdhbWVib2FyZC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNkOWY5OWQ7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCA1MCUsIDcwMHB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhM2U2MzUsIDAgMCAyMHB4ICNlY2ZjY2IsIDAgMCA0MHB4ICNlY2ZjY2I7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdyaWQge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg0Y2MxNjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcGFkZGluZy10b3A6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmFkZC1zaGlwLXByb21wdCxcXG5sYWJlbCB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjYmVmMjY0LCAwIDAgMTBweCAjODRjYzE2LCAwIDAgMTVweCAjODRjYzE2LFxcbiAgICAwIDAgMjBweCAjODRjYzE2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgNCBhbHRlcm5hdGU7XFxuICAtbW96LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCA0IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCA0IGFsdGVybmF0ZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGdsb3cge1xcbiAgZnJvbSB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNiZWYyNjQsIDAgMCAxMHB4ICM4NGNjMTYsIDAgMCAxNXB4ICM4NGNjMTYsXFxuICAgICAgMCAwIDIwcHggIzg0Y2MxNjtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2JlZjI2NCwgMCAwIDRweCAjYTNlNjM1LCAwIDAgOHB4ICNhM2U2MzUsXFxuICAgICAgMCAwIDEwcHggI2EzZTYzNSwgMCAwIDIwcHggI2EzZTYzNSwgMCAwIDQwcHggI2EzZTYzNSwgMCAwIDYwcHggI2EzZTYzNTtcXG4gIH1cXG59XFxuXFxuLnNoaXA6bm90KC5jb21wdXRlciksXFxuLmhpdCxcXG4ubWlzc2VkLFxcbi5wbGFjZW1lbnQtbG9jYXRpb24ge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjM2FlZDtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucGxhY2VtZW50LWxvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuLnNwYWNlIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGNlbnRlciAvIDIwMHB4IDIwMHB4IHJvdW5kO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGFjZSB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuLnN0YXJzMSB7XFxuICBhbmltYXRpb246IHNwYWNlIDE4MHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgMXB4IDFweCBhdCAyNXB4IDVweCxcXG4gICAgICB3aGl0ZSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICAgICksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDUwcHggMjVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAxMjVweCAyMHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCA1MHB4IDc1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgMTVweCAxMjVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi41cHggMi41cHggYXQgMTEwcHggODBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnN0YXJzMiB7XFxuICBhbmltYXRpb246IHNwYWNlIDI0MHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgMXB4IDFweCBhdCA3NXB4IDEyNXB4LFxcbiAgICAgIHdoaXRlLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXG4gICAgKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMTAwcHggNzVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgMTk5cHggMTAwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgMjBweCA1MHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjVweCAyLjVweCBhdCAxMDBweCA1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNXB4IDIuNXB4IGF0IDVweCA1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zdGFyczMge1xcbiAgYW5pbWF0aW9uOiBzcGFjZSAzMDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIDFweCAxcHggYXQgMTBweCAxMHB4LFxcbiAgICAgIHdoaXRlLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXG4gICAgKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMTUwcHggMTUwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDYwcHggMTcwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDE3NXB4IDE4MHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDE5NXB4IDk1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNXB4IDIuNXB4IGF0IDk1cHggMTQ1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIFxcblN0ZXBzIHRvIG1ha2UgcmVzcG9uc2l2ZTpcXG4gIE1vYmlsZTogXFxuICAgIDEuIG1ha2UgYm90aCBib2FyZHMgdmlzaWJsZSB3aXRoIG5vIHNjcm9sbGluZ1xcbiAgICAyLiBcXG5cXG4qL1xcblxcbi8qIHN0dWZmIGZvciBtZWRpYSBxdWllcmllczogXFxucGxheWVyIHNlY3Rpb246IFxcbiAgcGFkZGluZzogNjRweDtcXG4gIFxcbiAgXFxuICBcXG4gIFxcbiAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBK0I7QUFDakM7O0FBRUE7Ozs7OztDQU1DOztBQUVEO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpRUFBaUU7RUFDakUs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Oi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzcGFjZS1mb250O1xcbiAgc3JjOiB1cmwoLi9TcGFjZS1HYW1lLUZvbnQub3RmKTtcXG59XFxuXFxuLyogXFxuSWRlYXM6XFxuLWZpcmUtZ2xvd3ktYW5pbWF0aW9uIGZvciAuaGl0XFxuLVxcXCJzcGFjZVxcXCIgY2xvdWQgYW5pbWF0aW9uIGFyb3VuZCBnYW1lYm9hcmQsIGdyaWQgaXMgc2FtZSBjb2xvciwgXFxuLWZpbmQgc2ltcGxlIGltYWdlIGZvciBzaGlwLCBvciBzb21ldGhpbmcgdG8gbWFrZSB0aGUgc2hpcHMgbG9va2sgaW50ZXJlc3RpbmdcXG4tIGZsYXNoaW5nIFlvdSB3aW4gd2hlbiB3b24uXFxuKi9cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgbmF2eSAwLCBibGFjayAxMDAlKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4uYWRkLXNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcXG4gIHJvdy1nYXA6IDE2cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDUwJSwgNzAwcHgpO1xcbiAgY29sb3I6ICNkOWY5OWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItc2VjdGlvbjpoYXMoLmFkZC1zaGlwLWNvbnRhaW5lcikge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYWRkLXNoaXAtcHJvbXB0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jbmV3X2RpcmVjdGlvbl9mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50LCAxZnI7XFxufVxcblxcbiNkaXJlY3Rpb24ge1xcbiAgY29sb3I6ICNiZWYyNjQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDdweCAjYTNlNjM1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2RpcmVjdGlvbiBvcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hZGQtc2hpcC1jb250YWluZXIgYnV0dG9uIHtcXG4gIGNvbG9yOiAjYmVmMjY0O1xcbiAgYm94LXNoYWRvdzogMCAwIDdweCAjYTNlNjM1LCAwIDAgMTVweCAjYTNlNjM1O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNlNjM1O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbi5hZGQtc2hpcC1jb250YWluZXIgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5idG5zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDE4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5nYW1lLWhlYWRlciB7XFxuICBmb250LWZhbWlseTogc3BhY2UtZm9udCwgXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2EzZTYzNTtcXG4gIHRleHQtc2hhZG93OiAwIDAgN3B4ICNhM2U2MzUsIDAgMCAxNXB4ICNhM2U2MzUsIDAgMCAyMXB4ICNhM2U2MzUsXFxuICAgIDAgMCA0MnB4ICM4NGNjMTYsIDAgMCA4NHB4ICM4NGNjMTYsIDAgMCAxMDJweCAjODRjYzE2O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wdXRlci1zZWN0aW9uLFxcbi5wbGF5ZXItc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLWhlYWRlciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI2Q5Zjk5ZDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDUwJSwgNzAwcHgpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2EzZTYzNSwgMCAwIDIwcHggI2VjZmNjYiwgMCAwIDQwcHggI2VjZmNjYjtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBmbGV4LWdyb3c6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODRjYzE2O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYWRkLXNoaXAtcHJvbXB0LFxcbmxhYmVsIHtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICNiZWYyNjQsIDAgMCAxMHB4ICM4NGNjMTYsIDAgMCAxNXB4ICM4NGNjMTYsXFxuICAgIDAgMCAyMHB4ICM4NGNjMTY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCA0IGFsdGVybmF0ZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IDQgYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IDQgYWx0ZXJuYXRlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvdyB7XFxuICBmcm9tIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2JlZjI2NCwgMCAwIDEwcHggIzg0Y2MxNiwgMCAwIDE1cHggIzg0Y2MxNixcXG4gICAgICAwIDAgMjBweCAjODRjYzE2O1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjYmVmMjY0LCAwIDAgNHB4ICNhM2U2MzUsIDAgMCA4cHggI2EzZTYzNSxcXG4gICAgICAwIDAgMTBweCAjYTNlNjM1LCAwIDAgMjBweCAjYTNlNjM1LCAwIDAgNDBweCAjYTNlNjM1LCAwIDAgNjBweCAjYTNlNjM1O1xcbiAgfVxcbn1cXG5cXG4uc2hpcDpub3QoLmNvbXB1dGVyKSxcXG4uaGl0LFxcbi5taXNzZWQsXFxuLnBsYWNlbWVudC1sb2NhdGlvbiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2MzYWVkO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wbGFjZW1lbnQtbG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG5cXG4uc3BhY2Uge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgY2VudGVyIC8gMjAwcHggMjAwcHggcm91bmQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwYWNlIHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4uc3RhcnMxIHtcXG4gIGFuaW1hdGlvbjogc3BhY2UgMTgwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICAxcHggMXB4IGF0IDI1cHggNXB4LFxcbiAgICAgIHdoaXRlLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXG4gICAgKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNTBweCAyNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDEyNXB4IDIwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDUwcHggNzVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAxNXB4IDEyNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjVweCAyLjVweCBhdCAxMTBweCA4MHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc3RhcnMyIHtcXG4gIGFuaW1hdGlvbjogc3BhY2UgMjQwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICAxcHggMXB4IGF0IDc1cHggMTI1cHgsXFxuICAgICAgd2hpdGUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgICApLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAxMDBweCA3NXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCAxOTlweCAxMDBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMHB4IDUwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNXB4IDIuNXB4IGF0IDEwMHB4IDVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi41cHggMi41cHggYXQgNXB4IDVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnN0YXJzMyB7XFxuICBhbmltYXRpb246IHNwYWNlIDMwMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgMXB4IDFweCBhdCAxMHB4IDEwcHgsXFxuICAgICAgd2hpdGUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgICApLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAxNTBweCAxNTBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgNjBweCAxNzBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgMTc1cHggMTgwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgMTk1cHggOTVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi41cHggMi41cHggYXQgOTVweCAxNDVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogXFxuU3RlcHMgdG8gbWFrZSByZXNwb25zaXZlOlxcbiAgTW9iaWxlOiBcXG4gICAgMS4gbWFrZSBib3RoIGJvYXJkcyB2aXNpYmxlIHdpdGggbm8gc2Nyb2xsaW5nXFxuICAgIDIuIFxcblxcbiovXFxuXFxuLyogc3R1ZmYgZm9yIG1lZGlhIHF1aWVyaWVzOiBcXG5wbGF5ZXIgc2VjdGlvbjogXFxuICBwYWRkaW5nOiA2NHB4O1xcbiAgXFxuICBcXG4gIFxcbiAgXFxuICAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByZW1vdmVBbGxDaGlsZE5vZGVzID0gZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJHYW1lID0gZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHNJbkdhbWVTZWN0aW9ucygpIHtcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1zZWN0aW9uXCIpKTtcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLXNlY3Rpb25cIikpO1xufTtcblxuY29uc3QgZGlzcGxheUJvYXJkID0gZnVuY3Rpb24gZGlzcGxheVBsYXllckdhbWVCb2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBnYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZWJvYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgIGdyaWQuc2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLWlkXCIsIGAke2l9LCR7an1gKTtcblxuICAgICAgaWYgKGdhbWVib2FyZFtpXVtqXSAhPSBudWxsKSB7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5oaXRTaG90cy5pbmNsdWRlcyhgJHtpfSwke2p9YCkpIHtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQubWlzc2VkU2hvdHMuaW5jbHVkZXMoYCR7aX0sJHtqfWApKSB7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXIuaXNDb21wdXRlcikge1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlclwiKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChncmlkKTtcbiAgICB9XG4gICAgZ2FtZWJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGdhbWVib2FyZEVsZW1lbnQ7XG59O1xuXG5jb25zdCBkaXNwbGF5R2FtZSA9IGZ1bmN0aW9uIGRpc3BsYXlUaGVHYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXNlY3Rpb25cIik7XG4gIGNvbnN0IGNvbXB1dGVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItc2VjdGlvblwiKTtcblxuICBjb25zdCBwbGF5ZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZC1oZWFkZXJcIik7XG4gIHBsYXllckhlYWRlci50ZXh0Q29udGVudCA9IFwiWW91ciBGbGVldFwiO1xuXG4gIGNvbnN0IGNvbXB1dGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcHV0ZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZC1oZWFkZXJcIik7XG4gIGNvbXB1dGVySGVhZGVyLnRleHRDb250ZW50ID0gXCJFbmVteSdzIEZsZWV0XCI7XG5cbiAgcGxheWVyU2VjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJIZWFkZXIpO1xuICBwbGF5ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGRpc3BsYXlCb2FyZChwbGF5ZXIxKSk7XG5cbiAgaWYgKCFwbGF5ZXIyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXB1dGVyU2VjdGlvbi5hcHBlbmRDaGlsZChjb21wdXRlckhlYWRlcik7XG4gIGNvbXB1dGVyU2VjdGlvbi5hcHBlbmRDaGlsZChkaXNwbGF5Qm9hcmQocGxheWVyMikpO1xufTtcblxuY29uc3QgbG9jYXRpb25Qcm9tcHQgPSBmdW5jdGlvbiBwcm9tcHRVc2VyRm9yTG9jYXRpb25QbGFjZW1lbnQoc2hpcFR5cGUpIHtcbiAgY29uc3QgYWRkU2hpcFByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFNoaXBQcm9tcHQuY2xhc3NMaXN0LmFkZChcImFkZC1zaGlwLXByb21wdFwiKTtcblxuICBhZGRTaGlwUHJvbXB0LnRleHRDb250ZW50ID0gYENob29zZSAke3NoaXBUeXBlWzBdfSBsb2NhdGlvbiAobGVuZ3RoICR7c2hpcFR5cGVbMV19KWA7XG5cbiAgcmV0dXJuIGFkZFNoaXBQcm9tcHQ7XG59O1xuXG5jb25zdCBkaXNwbGF5RGlyZWN0aW9uRm9ybSA9XG4gIGZ1bmN0aW9uIGNyZWF0ZUFuZERpc3BsYXlUaGVEaXJlY3Rpb25Gb3JtRm9yU2hpcFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXJlY3Rpb24tZm9ybS1zZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGRpcmVjdGlvbkZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGRpcmVjdGlvbkZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICBkaXJlY3Rpb25Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3X2RpcmVjdGlvbl9mb3JtXCIpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpcmVjdGlvbkZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWZpZWxkXCIpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGlyZWN0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGlyZWN0aW9uXCIpO1xuICAgIGRpcmVjdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJDaG9vc2UgZGlyZWN0aW9uXFxuXCI7XG4gICAgY29uc3QgZGlyZWN0aW9uU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBkaXJlY3Rpb25TZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXJlY3Rpb25cIik7XG4gICAgY29uc3QgZGlyZWN0aW9uT3B0aW9uUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvblJpZ2h0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwicmlnaHRcIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uUmlnaHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uUmlnaHQudGV4dENvbnRlbnQgPSBcIlJpZ2h0XCI7XG4gICAgY29uc3QgZGlyZWN0aW9uT3B0aW9uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uTGVmdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxlZnRcIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uTGVmdC50ZXh0Q29udGVudCA9IFwiTGVmdFwiO1xuICAgIGNvbnN0IGRpcmVjdGlvbk9wdGlvbkRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvbkRvd24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkb3duXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvbkRvd24udGV4dENvbnRlbnQgPSBcIkRvd25cIjtcbiAgICBjb25zdCBkaXJlY3Rpb25PcHRpb25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uVXAuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJ1cFwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25VcC50ZXh0Q29udGVudCA9IFwiVXBcIjtcbiAgICBkaXJlY3Rpb25TZWxlY3QuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uT3B0aW9uUmlnaHQpO1xuICAgIGRpcmVjdGlvblNlbGVjdC5hcHBlbmRDaGlsZChkaXJlY3Rpb25PcHRpb25MZWZ0KTtcbiAgICBkaXJlY3Rpb25TZWxlY3QuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uT3B0aW9uRG93bik7XG4gICAgZGlyZWN0aW9uU2VsZWN0LmFwcGVuZENoaWxkKGRpcmVjdGlvbk9wdGlvblVwKTtcbiAgICBkaXJlY3Rpb25GaWVsZC5hcHBlbmRDaGlsZChkaXJlY3Rpb25MYWJlbCk7XG4gICAgZGlyZWN0aW9uRmllbGQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uU2VsZWN0KTtcbiAgICBkaXJlY3Rpb25Gb3JtLmFwcGVuZENoaWxkKGRpcmVjdGlvbkZpZWxkKTtcblxuICAgIGNvbnN0IGJ0bnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bnMtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcInJhbmRvbS1mb3JtLWJ0blwiKTtcbiAgICByYW5kb21CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICByYW5kb21CdG4udGV4dENvbnRlbnQgPSBcIlJhbmRvbVwiO1xuICAgIGJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmFuZG9tQnRuKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtZm9ybS1idG5cIik7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBkaXJlY3Rpb25Gb3JtLmFwcGVuZENoaWxkKGJ0bnNDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGlvbkZvcm07XG4gIH07XG5cbmNvbnN0IGZvcm1hdFNoaXBDaG9pY2VHcmlkcyA9IGZ1bmN0aW9uIGZvcm1hdEdyaWRzVG9SdW5HYW1lKCkge1xuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkXCIpO1xuICBncmlkcy5mb3JFYWNoKChncmlkKSA9PlxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnQtbG9jYXRpb25cIik7XG4gICAgICBjb3VudGVyKys7XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlDaG9vc2VTaGlwID0gZnVuY3Rpb24gZ2V0U2hpcFBsYWNlbWVudEZyb21Vc2VyKFxuICBwbGF5ZXIxLFxuICBzaGlwVHlwZXNcbikge1xuICBjb25zdCBwbGFjZVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjZVNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZC1zaGlwLWNvbnRhaW5lclwiKTtcblxuICBkaXNwbGF5R2FtZShwbGF5ZXIxKTtcbiAgZm9ybWF0U2hpcENob2ljZUdyaWRzKHBsYXllcjEpO1xuICBwbGFjZVNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgbG9jYXRpb25Qcm9tcHQoc2hpcFR5cGVzW3NoaXBUeXBlcy5sZW5ndGggLSAxXSlcbiAgKTtcbiAgcGxhY2VTaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlEaXJlY3Rpb25Gb3JtKCkpO1xuXG4gIGNvbnN0IGNvbXB1dGVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItc2VjdGlvblwiKTtcbiAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKHBsYWNlU2hpcENvbnRhaW5lcik7XG59O1xuXG5jb25zdCBkaXNwbGF5V2lubmVyID0gZnVuY3Rpb24gZGlzcGxheVRoZUdpdmVuUGxheWVyT2JqQXNXaW5uZXIocGxheWVyKSB7XG4gIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbm5lci5jbGFzc0xpc3QuYWRkKFwid2lubmVyLWhlYWRlclwiKTtcblxuICBpZiAocGxheWVyLmlzQ29tcHV0ZXIpIHtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyIHdpbnMhXCI7XG4gIH0gZWxzZSB7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gXCJZb3Ugd29uIVwiO1xuICB9XG5cbiAgY29uc3QgZ2FtZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1oZWFkZXJcIik7XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMoZ2FtZUhlYWRlcik7XG4gIGdhbWVIZWFkZXIuYXBwZW5kQ2hpbGQod2lubmVyKTtcbn07XG5cbmV4cG9ydCB7XG4gIGRpc3BsYXlHYW1lLFxuICBjbGVhckdhbWUsXG4gIGRpc3BsYXlXaW5uZXIsXG4gIGRpc3BsYXlDaG9vc2VTaGlwLFxuICBsb2NhdGlvblByb21wdCxcbn07XG4iLCJjb25zdCBzZXRBdHRhY2sgPSBmdW5jdGlvbiBzZXRBdHRhY2tPbkVuZW15R2FtZWJvYXJkKGdyaWRJZCwgcGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBjb2wgPSBncmlkSWQuc3BsaXQoXCIsXCIpWzBdO1xuICBjb25zdCByb3cgPSBncmlkSWQuc3BsaXQoXCIsXCIpWzFdO1xuICBwbGF5ZXIxLmF0dGFjayhwbGF5ZXIyLCBjb2wsIHJvdyk7XG59O1xuXG5jb25zdCBjaGVja0Zvcldpbm5lciA9IGZ1bmN0aW9uIGNoZWNrSWZBUGxheWVyV29uKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaWYgKHBsYXllcjIuZ2FtZWJvYXJkLmFyZUFsbFN1bmsoKSkge1xuICAgIHJldHVybiBwbGF5ZXIxO1xuICB9XG4gIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5hcmVBbGxTdW5rKCkpIHtcbiAgICByZXR1cm4gcGxheWVyMjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgeyBzZXRBdHRhY2ssIGNoZWNrRm9yV2lubmVyIH07XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gZ2FtZWJvYXJkO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBzaGlwVmFsaWRpdHkgPSBbXTtcblxuICBjb25zdCB3YXNOZXdTaGlwVmFsaWQgPSAoKSA9PiBzaGlwVmFsaWRpdHlbc2hpcFZhbGlkaXR5Lmxlbmd0aCAtIDFdO1xuXG4gIGNvbnN0IHBvcHVsYXRlU2hpcHNHcmlkcyA9IChzaGlwQ29vcmRzLCBzaGlwKSA9PiB7XG4gICAgc2hpcENvb3Jkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBbY29sLCByb3ddID0gZWxlbWVudC5zcGxpdChcIixcIik7XG4gICAgICBnYW1lYm9hcmRbY29sXVtyb3ddID0gc2hpcDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBjaGVjayBpZiBuZXdTaGlwSW5mbyBtYXRjaGVzIGFueSBvdGhlciBzaGlwcyBjb29yZHNcbiAgY29uc3QgY2hlY2tOZXdTaGlwVmFsaWRpdHkgPSAobmV3U2hpcEluZm8pID0+IHtcbiAgICBjb25zdCBmb3VuZE92ZXJsYXAgPSBzaGlwcy5zb21lKChzaGlwKSA9PlxuICAgICAgc2hpcC5zb21lKChjb29yZCkgPT4gbmV3U2hpcEluZm8uaW5jbHVkZXMoY29vcmQpKVxuICAgICk7XG5cbiAgICBjb25zdCBmb3VuZE91dE9mQm91bmRzID0gbmV3U2hpcEluZm8uc29tZSgoY29vcmRzKSA9PiB7XG4gICAgICBjb25zdCBbY29sLCByb3ddID0gY29vcmRzLnNwbGl0KFwiLFwiKTtcbiAgICAgIGlmIChjb2wgPiA5IHx8IGNvbCA8IDAgfHwgcm93ID4gOSB8fCByb3cgPCAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYgKGZvdW5kT3ZlcmxhcCB8fCBmb3VuZE91dE9mQm91bmRzKSB7XG4gICAgICBzaGlwVmFsaWRpdHkucHVzaChmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNoaXBWYWxpZGl0eS5wdXNoKHRydWUpO1xuICAgIGlmIChuZXdTaGlwSW5mby5sZW5ndGggPT09IDApIHtcbiAgICAgIHNoaXBWYWxpZGl0eS5wdXNoKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvbCwgcm93LCBkaXJlY3Rpb24sIHNoaXApID0+IHtcbiAgICBjb25zdCBuZXdTaGlwSW5mbyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICBuZXdTaGlwSW5mby5wdXNoKGAke2NvbH0sJHtyb3cgLSBpfWApO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIG5ld1NoaXBJbmZvLnB1c2goYCR7Y29sfSwke3JvdyArIGl9YCk7XG4gICAgICB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICBuZXdTaGlwSW5mby5wdXNoKGAke2NvbCAtIGl9LCR7cm93fWApO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICAgIG5ld1NoaXBJbmZvLnB1c2goYCR7Y29sICsgaX0sJHtyb3d9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tOZXdTaGlwVmFsaWRpdHkobmV3U2hpcEluZm8pO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB3YXNOZXdTaGlwVmFsaWQoKTtcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG9wdWxhdGVTaGlwc0dyaWRzKG5ld1NoaXBJbmZvLnNsaWNlKDApLCBzaGlwKTtcbiAgICBuZXdTaGlwSW5mby5wdXNoKHNoaXApO1xuICAgIHNoaXBzLnB1c2gobmV3U2hpcEluZm8pO1xuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gYW5kIGluY2x1ZGluZyBhIG1peC9tYXhcbiAgY29uc3QgcmFuZG9tSW50ID0gZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKHNldE1pbiwgc2V0TWF4KSB7XG4gICAgY29uc3QgbWluID0gTWF0aC5jZWlsKHNldE1pbik7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5mbG9vcihzZXRNYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcCA9IGZ1bmN0aW9uIHBsYWNlUmFuZG9tVmFsaWRTaGlwKHNoaXApIHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1wibGVmdFwiLCBcInJpZ2h0XCIsIFwidXBcIiwgXCJkb3duXCJdO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRydWU7XG5cbiAgICB3aGlsZSAoY29uZGl0aW9uKSB7XG4gICAgICBwbGFjZVNoaXAoXG4gICAgICAgIHJhbmRvbUludCgwLCA5KSxcbiAgICAgICAgcmFuZG9tSW50KDAsIDkpLFxuICAgICAgICBkaXJlY3Rpb25zW3JhbmRvbUludCgwLCAzKV0sXG4gICAgICAgIHNoaXBcbiAgICAgICk7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gd2FzTmV3U2hpcFZhbGlkKCk7XG4gICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICBjb25zdCBoaXRTaG90cyA9IFtdO1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHhQbHVzWSA9IGAke3h9LCR7eX1gO1xuICAgIGxldCBoaXRQb3NpdGlvbjtcbiAgICBsZXQgZGlkSXRIaXQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoaXRQb3NpdGlvbiA9IHNoaXBzW2ldLmZpbmRJbmRleCgoY29vcmRpbmF0ZXMpID0+IGNvb3JkaW5hdGVzID09PSB4UGx1c1kpO1xuICAgICAgaWYgKGdhbWVib2FyZFt4XVt5XSAhPSBudWxsKSB7XG4gICAgICAgIGdhbWVib2FyZFt4XVt5XS5oaXQoaGl0UG9zaXRpb24pO1xuICAgICAgICBkaWRJdEhpdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaWRJdEhpdCkge1xuICAgICAgaGl0U2hvdHMucHVzaCh4UGx1c1kpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1pc3NlZFNob3RzLnB1c2goeFBsdXNZKTtcbiAgfTtcblxuICBjb25zdCBhcmVBbGxTdW5rID0gKCkgPT5cbiAgICBzaGlwcy5zbGljZSgwKS5ldmVyeSgoc2hpcCkgPT4gc2hpcFtzaGlwLmxlbmd0aCAtIDFdLmlzU3VuaygpKTtcblxuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIG1pc3NlZFNob3RzLFxuICAgIGhpdFNob3RzLFxuICAgIGFyZUFsbFN1bmssXG4gICAgd2FzTmV3U2hpcFZhbGlkLFxuICAgIHBsYWNlUmFuZG9tU2hpcCxcbiAgICBzaGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vLyBIZWxwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgYSBtaXgvbWF4XG5jb25zdCByYW5kb21JbnQgPSBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUoKSB7XG4gIGNvbnN0IHNldE1pbiA9IDA7XG4gIGNvbnN0IHNldE1heCA9IDk7XG4gIGNvbnN0IG1pbiA9IE1hdGguY2VpbChzZXRNaW4pO1xuICBjb25zdCBtYXggPSBNYXRoLmZsb29yKHNldE1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuY29uc3QgcmFuZG9tQXR0YWNrID0gZnVuY3Rpb24gY3JlYXRlUmFuZG9tVW51c2VkQXR0YWNrQ2hvaWNlKGF0dGFja3NNYWRlKSB7XG4gIGlmIChhdHRhY2tzTWFkZS5sZW5ndGggPT09IDEwMCkge1xuICAgIHJldHVybiBbMCwgMF07XG4gIH1cbiAgbGV0IGZvdW5kVXNlZEF0dGFjayA9IHRydWU7XG4gIHdoaWxlIChmb3VuZFVzZWRBdHRhY2spIHtcbiAgICBjb25zdCBjb21wWCA9IHJhbmRvbUludCgpO1xuICAgIGNvbnN0IGNvbXBZID0gcmFuZG9tSW50KCk7XG4gICAgaWYgKCFhdHRhY2tzTWFkZS5pbmNsdWRlcyhgJHtjb21wWH0sJHtjb21wWX1gKSkge1xuICAgICAgZm91bmRVc2VkQXR0YWNrID0gZmFsc2U7XG4gICAgICBhdHRhY2tzTWFkZS5wdXNoKGAke2NvbXBYfSwke2NvbXBZfWApO1xuICAgICAgcmV0dXJuIFtjb21wWCwgY29tcFldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBQbGF5ZXIgPSAoZ2FtZWJvYXJkLCBpc0NvbXB1dGVyKSA9PiB7XG4gIGNvbnN0IGF0dGFja3NNYWRlID0gW107XG4gIGNvbnN0IGF0dGFjayA9IChlbmVteSwgeCwgeSkgPT4ge1xuICAgIGlmIChpc0NvbXB1dGVyKSB7XG4gICAgICBbeCwgeV0gPSByYW5kb21BdHRhY2soYXR0YWNrc01hZGUpO1xuICAgIH1cbiAgICBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTtcbiAgcmV0dXJuIHsgZ2FtZWJvYXJkLCBhdHRhY2ssIGF0dGFja3NNYWRlLCBpc0NvbXB1dGVyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBkYW1hZ2VkID0gW1xuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICBdLnNsaWNlKDAsIGxlbmd0aCk7XG4gIGNvbnN0IGhpdCA9IChsb2NhdGlvbikgPT4ge1xuICAgIGRhbWFnZWRbbG9jYXRpb25dID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gZGFtYWdlZC5ldmVyeSgobG9jYXRpb24pID0+IGxvY2F0aW9uID09PSB0cnVlKTtcblxuICByZXR1cm4geyBsZW5ndGgsIGRhbWFnZWQsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLW1hbmFnZXJcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkLW1hbmFnZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAtbWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgZGlzcGxheUdhbWUsXG4gIGNsZWFyR2FtZSxcbiAgZGlzcGxheVdpbm5lcixcbiAgZGlzcGxheUNob29zZVNoaXAsXG59IGZyb20gXCIuL2RvbS1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBzZXRBdHRhY2ssIGNoZWNrRm9yV2lubmVyIH0gZnJvbSBcIi4vZ2FtZS1tYW5hZ2VyXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuLy8gU3RlcHMgdG8gZmluaXNoOlxuLy8gICAgLSBpZiBvdmVybGFwL291dCBvZiBib3VuZHMgdXNlIGpzIGZvcm0gdmFsaWRhdGlvblxuXG4vLyAgICAtIGFkZCBtYXggZ3JpZCBzaXplcyBpbiBjc3MsIGRlc2lnbiBhbmQgbWFrZSBsb29rIG5pY2UgYmVjYXVzZSBsYXN0IHZhbmlsbGEgSlMgcHJvamVjdFxuY29uc3Qgc2hpcFR5cGVzID0gW1xuICBbXCJQYXRyb2wgQm9hdFwiLCAyXSxcbiAgW1wiU3VibWFyaW5lXCIsIDNdLFxuICBbXCJEZXN0cm95ZXJcIiwgM10sXG4gIFtcIkJhdHRsZXNoaXBcIiwgNF0sXG4gIFtcIkNhcnJpZXJcIiwgNV0sXG5dO1xuXG5jb25zdCBodW1hblBsYXllciA9IFBsYXllcihHYW1lYm9hcmQoKSk7XG5jb25zdCBjb21wdXRlclBsYXllciA9IFBsYXllcihHYW1lYm9hcmQoKSwgdHJ1ZSk7XG5cbmNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVJhbmRvbVNoaXAoU2hpcCg1KSk7XG5jb21wdXRlclBsYXllci5nYW1lYm9hcmQucGxhY2VSYW5kb21TaGlwKFNoaXAoNCkpO1xuY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUmFuZG9tU2hpcChTaGlwKDMpKTtcbmNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVJhbmRvbVNoaXAoU2hpcCgzKSk7XG5jb21wdXRlclBsYXllci5nYW1lYm9hcmQucGxhY2VSYW5kb21TaGlwKFNoaXAoMikpO1xuXG5jb25zdCBmb3JtYXRHcmlkcyA9IGZ1bmN0aW9uIGZvcm1hdEdyaWRzVG9SdW5HYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyXCIpO1xuICBncmlkcy5mb3JFYWNoKChncmlkKSA9PlxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGdyaWRJZCA9IGdyaWQuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLWlkXCIpO1xuICAgICAgc2V0QXR0YWNrKGdyaWRJZCwgcGxheWVyMSwgcGxheWVyMik7XG4gICAgICBwbGF5ZXIyLmF0dGFjayhwbGF5ZXIxKTtcblxuICAgICAgY2xlYXJHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuICAgICAgZGlzcGxheUdhbWUocGxheWVyMSwgcGxheWVyMik7XG5cbiAgICAgIGlmIChjaGVja0Zvcldpbm5lcihwbGF5ZXIxLCBwbGF5ZXIyKSkge1xuICAgICAgICBkaXNwbGF5V2lubmVyKGNoZWNrRm9yV2lubmVyKHBsYXllcjEsIHBsYXllcjIpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3JtYXRHcmlkcyhwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICB9KVxuICApO1xufTtcbmNvbnN0IGNob29zZVNoaXBzID0gZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheVBsYXllclNoaXBDaG9vc2luZygpIHtcbiAgZGlzcGxheUNob29zZVNoaXAoaHVtYW5QbGF5ZXIsIHNoaXBUeXBlcyk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGZvcm1hdFN1Ym1pdEJ0bihodW1hblBsYXllcik7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBmb3JtYXRSYW5kb21CdG4oaHVtYW5QbGF5ZXIpO1xufTtcblxuY29uc3QgZm9ybWF0U3VibWl0QnRuID0gZnVuY3Rpb24gZm9ybWF0c0RpcmVjdGlvblN1Ym1pdEJ1dHRvbihwbGF5ZXIpIHtcbiAgY29uc3Qgc3VibWl0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWZvcm0tYnRuXCIpO1xuICBzdWJtaXRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlbWVudC1sb2NhdGlvblwiKTtcbiAgICBjb25zdCBncmlkSWQgPSBsb2NhdGlvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtaWRcIik7XG5cbiAgICBjb25zdCBkaXJlY3Rpb25TZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlyZWN0aW9uXCIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbkNob2ljZSA9XG4gICAgICBkaXJlY3Rpb25TZWxlY3RlZC5vcHRpb25zW2RpcmVjdGlvblNlbGVjdGVkLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgY29uc3QgY29vcmRzID0gZ3JpZElkLnNwbGl0KFwiLFwiKTtcblxuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgK2Nvb3Jkc1swXSxcbiAgICAgICtjb29yZHNbMV0sXG4gICAgICBkaXJlY3Rpb25DaG9pY2UudG9Mb3dlckNhc2UoKSxcbiAgICAgIFNoaXAoc2hpcFR5cGVzW3NoaXBUeXBlcy5sZW5ndGggLSAxXVsxXSlcbiAgICApO1xuXG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQud2FzTmV3U2hpcFZhbGlkKCkpIHtcbiAgICAgIHNoaXBUeXBlcy5wb3AoKTtcbiAgICB9XG4gICAgY2xlYXJHYW1lKCk7XG4gICAgaWYgKHNoaXBUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRpc3BsYXlHYW1lKGh1bWFuUGxheWVyLCBjb21wdXRlclBsYXllcik7XG4gICAgICBmb3JtYXRHcmlkcyhodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNob29zZVNoaXBzKCk7XG4gIH0pO1xufTtcblxuY29uc3QgZm9ybWF0UmFuZG9tQnRuID0gZnVuY3Rpb24gcmFuZG9tQnRuV2lsbFBsYWNlU2hpcFJhbmRvbWx5KHBsYXllcikge1xuICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbS1mb3JtLWJ0blwiKTtcbiAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVJhbmRvbVNoaXAoU2hpcChzaGlwVHlwZXNbc2hpcFR5cGVzLmxlbmd0aCAtIDFdWzFdKSk7XG4gICAgc2hpcFR5cGVzLnBvcCgpO1xuICAgIGNsZWFyR2FtZSgpO1xuICAgIGlmIChzaGlwVHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkaXNwbGF5R2FtZShodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgICAgZm9ybWF0R3JpZHMoaHVtYW5QbGF5ZXIsIGNvbXB1dGVyUGxheWVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjaG9vc2VTaGlwcygpO1xuICB9KTtcbn07XG5cbmNob29zZVNoaXBzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=