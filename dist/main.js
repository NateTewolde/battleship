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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Classic-Robot-Font.ttf */ "./src/styles/Classic-Robot-Font.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: space-font;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: robot-font;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n/* \nIdeas:\n-fire-glowy-animation for .hit\n-\"space\" cloud animation around gameboard, grid is same color, \n-find simple image for ship, or something to make the ships lookk interesting\n- flashing You win when won.\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  overflow: hidden;\n}\n\n#content {\n  background: radial-gradient(circle at center, navy 0, black 100%);\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n.add-ship-container {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  row-gap: 16px;\n  height: 100%;\n  width: clamp(100px, 50%, 700px);\n  color: #d9f99d;\n  text-align: center;\n  border-radius: 16px;\n  padding: 24px;\n  justify-content: center;\n}\n\n.computer-section:has(.add-ship-container) {\n  height: 100%;\n}\n\n.add-ship-prompt {\n  font-size: 1.3rem;\n}\n\n#new_direction_form {\n  display: grid;\n  grid-template-rows: min-content, 1fr;\n}\n\n#direction {\n  color: #bef264;\n  text-align: center;\n  text-shadow: 0 0 7px #a3e635;\n  background-color: transparent;\n  border: none;\n  font-size: 1.5rem;\n}\n\n#direction option {\n  background-color: black;\n  border: none;\n}\n\n.add-ship-container button {\n  color: #bef264;\n  box-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635;\n  background: transparent;\n  border: 1px solid #a3e635;\n  border-radius: 16px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.add-ship-container label {\n  font-size: 1.3rem;\n}\n\n.btns-container {\n  display: flex;\n  padding-top: 18px;\n  justify-content: space-evenly;\n  height: min-content;\n  gap: 16px;\n}\n\n.game-header {\n  font-family: space-font, \"Roboto\", sans-serif;\n  text-align: center;\n  color: #a3e635;\n  text-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635, 0 0 21px #a3e635,\n    0 0 42px #84cc16, 0 0 84px #84cc16, 0 0 102px #84cc16;\n  font-size: 4rem;\n  font-weight: 500;\n  padding-top: 16px;\n}\n\n.gameboard-section {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n}\n\n.computer-section,\n.player-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n\n.gameboard-header {\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: #a3e635;\n  font-family: robot-font, \"Roboto\", sans-serif;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 4px;\n  margin-top: 10px;\n  width: clamp(100px, 50%, 700px);\n  box-shadow: 0 0 5px #a3e635, 0 0 7px #a3e635, 0 0 10px #ecfccb,\n    0 0 15px #ecfccb;\n}\n\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid #84cc16;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n\n.add-ship-prompt,\nlabel {\n  color: #fff;\n  text-shadow: 0 0 10px #84cc16, 0 0 15px #84cc16, 0 0 20px #84cc16;\n  text-align: center;\n  -webkit-animation: glow 0.5s ease-in-out 4 alternate;\n  -moz-animation: glow 0.5s ease-in-out 4 alternate;\n  animation: glow 0.5s ease-in-out 4 alternate;\n}\n\n@keyframes glow {\n  from {\n    text-shadow: 0 0 10px #84cc16, 0 0 15px #84cc16, 0 0 20px #84cc16;\n  }\n  to {\n    text-shadow: 0 0 2px #bef264, 0 0 4px #a3e635, 0 0 8px #a3e635,\n      0 0 10px #a3e635, 0 0 20px #a3e635, 0 0 40px #a3e635, 0 0 60px #a3e635;\n  }\n}\n\n.ship:not(.computer),\n.hit,\n.missed,\n.placement-location {\n  box-shadow: none;\n}\n\n.grid {\n  background-color: rgb(163, 230, 53, 0.5);\n}\n.ship:not(.computer) {\n  background-color: #7c3aed;\n}\n\n.ship.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: transparent;\n}\n\n.placement-location {\n  background-color: #0891b2;\n}\n\n.space {\n  background: transparent center / 200px 200px round;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n@keyframes space {\n  40% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  50% {\n    opacity: 0.25;\n    overflow: hidden;\n  }\n  60% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  100% {\n    transform: rotate(360deg);\n    overflow: hidden;\n  }\n}\n\n.stars1 {\n  animation: space 180s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 25px 5px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars2 {\n  animation: space 240s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 75px 125px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars3 {\n  animation: space 300s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 10px 10px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n\n@media (min-width: 600px) {\n  .gameboard-section {\n    grid-template-rows: none;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .computer-section:has(.add-ship-container) {\n    height: auto;\n  }\n  .game-header {\n    text-shadow: 0 0 21px #a3e635, 0 0 42px #84cc16, 0 0 84px #fff;\n    font-size: 6rem;\n  }\n  .gameboard-header {\n    font-size: 2rem;\n  }\n\n  .add-ship-container label,\n  .add-ship-prompt {\n    font-size: 1.5rem;\n  }\n  .btns-container {\n    padding-top: 64px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap\");\n@font-face {\n  font-family: space-font;\n  src: url(./Space-Game-Font.otf);\n}\n@font-face {\n  font-family: robot-font;\n  src: url(./Classic-Robot-Font.ttf);\n}\n\n/* \nIdeas:\n-fire-glowy-animation for .hit\n-\"space\" cloud animation around gameboard, grid is same color, \n-find simple image for ship, or something to make the ships lookk interesting\n- flashing You win when won.\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  overflow: hidden;\n}\n\n#content {\n  background: radial-gradient(circle at center, navy 0, black 100%);\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n.add-ship-container {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  row-gap: 16px;\n  height: 100%;\n  width: clamp(100px, 50%, 700px);\n  color: #d9f99d;\n  text-align: center;\n  border-radius: 16px;\n  padding: 24px;\n  justify-content: center;\n}\n\n.computer-section:has(.add-ship-container) {\n  height: 100%;\n}\n\n.add-ship-prompt {\n  font-size: 1.3rem;\n}\n\n#new_direction_form {\n  display: grid;\n  grid-template-rows: min-content, 1fr;\n}\n\n#direction {\n  color: #bef264;\n  text-align: center;\n  text-shadow: 0 0 7px #a3e635;\n  background-color: transparent;\n  border: none;\n  font-size: 1.5rem;\n}\n\n#direction option {\n  background-color: black;\n  border: none;\n}\n\n.add-ship-container button {\n  color: #bef264;\n  box-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635;\n  background: transparent;\n  border: 1px solid #a3e635;\n  border-radius: 16px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.add-ship-container label {\n  font-size: 1.3rem;\n}\n\n.btns-container {\n  display: flex;\n  padding-top: 18px;\n  justify-content: space-evenly;\n  height: min-content;\n  gap: 16px;\n}\n\n.game-header {\n  font-family: space-font, \"Roboto\", sans-serif;\n  text-align: center;\n  color: #a3e635;\n  text-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635, 0 0 21px #a3e635,\n    0 0 42px #84cc16, 0 0 84px #84cc16, 0 0 102px #84cc16;\n  font-size: 4rem;\n  font-weight: 500;\n  padding-top: 16px;\n}\n\n.gameboard-section {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n}\n\n.computer-section,\n.player-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n\n.gameboard-header {\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: #a3e635;\n  font-family: robot-font, \"Roboto\", sans-serif;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 4px;\n  margin-top: 10px;\n  width: clamp(100px, 50%, 700px);\n  box-shadow: 0 0 5px #a3e635, 0 0 7px #a3e635, 0 0 10px #ecfccb,\n    0 0 15px #ecfccb;\n}\n\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid #84cc16;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n\n.add-ship-prompt,\nlabel {\n  color: #fff;\n  text-shadow: 0 0 10px #84cc16, 0 0 15px #84cc16, 0 0 20px #84cc16;\n  text-align: center;\n  -webkit-animation: glow 0.5s ease-in-out 4 alternate;\n  -moz-animation: glow 0.5s ease-in-out 4 alternate;\n  animation: glow 0.5s ease-in-out 4 alternate;\n}\n\n@keyframes glow {\n  from {\n    text-shadow: 0 0 10px #84cc16, 0 0 15px #84cc16, 0 0 20px #84cc16;\n  }\n  to {\n    text-shadow: 0 0 2px #bef264, 0 0 4px #a3e635, 0 0 8px #a3e635,\n      0 0 10px #a3e635, 0 0 20px #a3e635, 0 0 40px #a3e635, 0 0 60px #a3e635;\n  }\n}\n\n.ship:not(.computer),\n.hit,\n.missed,\n.placement-location {\n  box-shadow: none;\n}\n\n.grid {\n  background-color: rgb(163, 230, 53, 0.5);\n}\n.ship:not(.computer) {\n  background-color: #7c3aed;\n}\n\n.ship.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: transparent;\n}\n\n.placement-location {\n  background-color: #0891b2;\n}\n\n.space {\n  background: transparent center / 200px 200px round;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n@keyframes space {\n  40% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  50% {\n    opacity: 0.25;\n    overflow: hidden;\n  }\n  60% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  100% {\n    transform: rotate(360deg);\n    overflow: hidden;\n  }\n}\n\n.stars1 {\n  animation: space 180s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 25px 5px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars2 {\n  animation: space 240s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 75px 125px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars3 {\n  animation: space 300s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 10px 10px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n\n@media (min-width: 600px) {\n  .gameboard-section {\n    grid-template-rows: none;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .computer-section:has(.add-ship-container) {\n    height: auto;\n  }\n  .game-header {\n    text-shadow: 0 0 21px #a3e635, 0 0 42px #84cc16, 0 0 84px #fff;\n    font-size: 6rem;\n  }\n  .gameboard-header {\n    font-size: 2rem;\n  }\n\n  .add-ship-container label,\n  .add-ship-prompt {\n    font-size: 1.5rem;\n  }\n  .btns-container {\n    padding-top: 64px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/Classic-Robot-Font.ttf":
/*!*******************************************!*\
  !*** ./src/styles/Classic-Robot-Font.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "643aef0ded737d1d8d58.ttf";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhIQUF3QztBQUNwRiw0Q0FBNEMsb0lBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUM3SSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsNEJBQTRCLHlEQUF5RCxHQUFHLGNBQWMsNEJBQTRCLHlEQUF5RCxHQUFHLDBPQUEwTyxjQUFjLGVBQWUsR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsY0FBYyxzRUFBc0Usa0JBQWtCLHFCQUFxQix3Q0FBd0Msa0JBQWtCLHdDQUF3QyxHQUFHLHlCQUF5QixrQkFBa0Isd0NBQXdDLGtCQUFrQixpQkFBaUIsb0NBQW9DLG1CQUFtQix1QkFBdUIsd0JBQXdCLGtCQUFrQiw0QkFBNEIsR0FBRyxnREFBZ0QsaUJBQWlCLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLHlCQUF5QixrQkFBa0IseUNBQXlDLEdBQUcsZ0JBQWdCLG1CQUFtQix1QkFBdUIsaUNBQWlDLGtDQUFrQyxpQkFBaUIsc0JBQXNCLEdBQUcsdUJBQXVCLDRCQUE0QixpQkFBaUIsR0FBRyxnQ0FBZ0MsbUJBQW1CLGtEQUFrRCw0QkFBNEIsOEJBQThCLHdCQUF3QixzQkFBc0IscUJBQXFCLHFCQUFxQixHQUFHLCtCQUErQixzQkFBc0IsR0FBRyxxQkFBcUIsa0JBQWtCLHNCQUFzQixrQ0FBa0Msd0JBQXdCLGNBQWMsR0FBRyxrQkFBa0Isb0RBQW9ELHVCQUF1QixtQkFBbUIsaUlBQWlJLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsd0JBQXdCLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLEdBQUcseUNBQXlDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHVCQUF1QixlQUFlLEdBQUcsdUJBQXVCLHNCQUFzQixxQkFBcUIsbUJBQW1CLG9EQUFvRCxHQUFHLGdCQUFnQixrQkFBa0IsbUNBQW1DLDRCQUE0QixpQkFBaUIscUJBQXFCLG9DQUFvQywwRkFBMEYsR0FBRyxVQUFVLGtCQUFrQixHQUFHLFdBQVcsaUJBQWlCLDhCQUE4QixnQkFBZ0IsY0FBYyxxQkFBcUIsa0NBQWtDLDJCQUEyQixHQUFHLDhCQUE4QixnQkFBZ0Isc0VBQXNFLHVCQUF1Qix5REFBeUQsc0RBQXNELGlEQUFpRCxHQUFHLHFCQUFxQixVQUFVLHdFQUF3RSxLQUFLLFFBQVEsb0pBQW9KLEtBQUssR0FBRyxpRUFBaUUscUJBQXFCLEdBQUcsV0FBVyw2Q0FBNkMsR0FBRyx3QkFBd0IsOEJBQThCLEdBQUcsZUFBZSw4QkFBOEIsR0FBRyxhQUFhLGtDQUFrQyxHQUFHLHlCQUF5Qiw4QkFBOEIsR0FBRyxZQUFZLHVEQUF1RCxjQUFjLFlBQVksb0JBQW9CLGFBQWEsV0FBVyxxQkFBcUIsR0FBRyxzQkFBc0IsU0FBUyxvQkFBb0IsdUJBQXVCLEtBQUssU0FBUyxvQkFBb0IsdUJBQXVCLEtBQUssU0FBUyxvQkFBb0IsdUJBQXVCLEtBQUssVUFBVSxnQ0FBZ0MsdUJBQXVCLEtBQUssR0FBRyxhQUFhLCtDQUErQyx3ZkFBd2YscUJBQXFCLEdBQUcsV0FBVywrQ0FBK0MsNGZBQTRmLHFCQUFxQixHQUFHLFdBQVcsK0NBQStDLGlnQkFBaWdCLHFCQUFxQixHQUFHLCtCQUErQix3QkFBd0IsK0JBQStCLHFDQUFxQyxLQUFLLGtEQUFrRCxtQkFBbUIsS0FBSyxrQkFBa0IscUVBQXFFLHNCQUFzQixLQUFLLHVCQUF1QixzQkFBc0IsS0FBSyxzREFBc0Qsd0JBQXdCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLEdBQUcsU0FBUyx1RkFBdUYsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE9BQU8sV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksY0FBYyxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksY0FBYyxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksY0FBYyxPQUFP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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFRRTs7Ozs7Ozs7Ozs7Ozs7OztBQzNMRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSw0QkFBNEIsSUFBSSxHQUFHLFFBQVE7QUFDM0M7QUFDQTtBQUNBLDRCQUE0QixJQUFJLEdBQUcsUUFBUTtBQUMzQztBQUNBO0FBQ0EsNEJBQTRCLFFBQVEsR0FBRyxJQUFJO0FBQzNDO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUSxHQUFHLElBQUk7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLEVBQUUsR0FBRyxFQUFFO0FBQzdCO0FBQ0E7O0FBRUEsb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakl6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxNQUFNLEdBQUcsTUFBTTtBQUNoRDtBQUNBLDBCQUEwQixNQUFNLEdBQUcsTUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ007QUFDVjtBQU1YO0FBQ29DO0FBQy9COztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDJEQUFNLENBQUMsOERBQVM7QUFDcEMsdUJBQXVCLDJEQUFNLENBQUMsOERBQVM7O0FBRXZDLHlDQUF5Qyx5REFBSTtBQUM3Qyx5Q0FBeUMseURBQUk7QUFDN0MseUNBQXlDLHlEQUFJO0FBQzdDLHlDQUF5Qyx5REFBSTtBQUM3Qyx5Q0FBeUMseURBQUk7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFTO0FBQ2Y7O0FBRUEsTUFBTSx1REFBUztBQUNmLE1BQU0seURBQVc7O0FBRWpCLFVBQVUsNkRBQWM7QUFDeEIsUUFBUSwyREFBYSxDQUFDLDZEQUFjO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBaUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQUk7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQSxNQUFNLHlEQUFXO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMseURBQUk7QUFDekM7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQSxNQUFNLHlEQUFXO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXItbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vU3BhY2UtR2FtZS1Gb250Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vQ2xhc3NpYy1Sb2JvdC1Gb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHNwYWNlLWZvbnQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90LWZvbnQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi8qIFxcbklkZWFzOlxcbi1maXJlLWdsb3d5LWFuaW1hdGlvbiBmb3IgLmhpdFxcbi1cXFwic3BhY2VcXFwiIGNsb3VkIGFuaW1hdGlvbiBhcm91bmQgZ2FtZWJvYXJkLCBncmlkIGlzIHNhbWUgY29sb3IsIFxcbi1maW5kIHNpbXBsZSBpbWFnZSBmb3Igc2hpcCwgb3Igc29tZXRoaW5nIHRvIG1ha2UgdGhlIHNoaXBzIGxvb2trIGludGVyZXN0aW5nXFxuLSBmbGFzaGluZyBZb3Ugd2luIHdoZW4gd29uLlxcbiovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIG5hdnkgMCwgYmxhY2sgMTAwJSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmFkZC1zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICByb3ctZ2FwOiAxNnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCA1MCUsIDcwMHB4KTtcXG4gIGNvbG9yOiAjZDlmOTlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyLXNlY3Rpb246aGFzKC5hZGQtc2hpcC1jb250YWluZXIpIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFkZC1zaGlwLXByb21wdCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI25ld19kaXJlY3Rpb25fZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCwgMWZyO1xcbn1cXG5cXG4jZGlyZWN0aW9uIHtcXG4gIGNvbG9yOiAjYmVmMjY0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA3cHggI2EzZTYzNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNkaXJlY3Rpb24gb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLXNoaXAtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjb2xvcjogI2JlZjI2NDtcXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggI2EzZTYzNSwgMCAwIDE1cHggI2EzZTYzNTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG4uYWRkLXNoaXAtY29udGFpbmVyIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uYnRucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uZ2FtZS1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IHNwYWNlLWZvbnQsIFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNhM2U2MzU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDdweCAjYTNlNjM1LCAwIDAgMTVweCAjYTNlNjM1LCAwIDAgMjFweCAjYTNlNjM1LFxcbiAgICAwIDAgNDJweCAjODRjYzE2LCAwIDAgODRweCAjODRjYzE2LCAwIDAgMTAycHggIzg0Y2MxNjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nLXRvcDogMTZweDtcXG59XFxuXFxuLmdhbWVib2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItc2VjdGlvbixcXG4ucGxheWVyLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmdhbWVib2FyZC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNhM2U2MzU7XFxuICBmb250LWZhbWlseTogcm9ib3QtZm9udCwgXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgNTAlLCA3MDBweCk7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICNhM2U2MzUsIDAgMCA3cHggI2EzZTYzNSwgMCAwIDEwcHggI2VjZmNjYixcXG4gICAgMCAwIDE1cHggI2VjZmNjYjtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBmbGV4LWdyb3c6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODRjYzE2O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYWRkLXNoaXAtcHJvbXB0LFxcbmxhYmVsIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICM4NGNjMTYsIDAgMCAxNXB4ICM4NGNjMTYsIDAgMCAyMHB4ICM4NGNjMTY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvdyAwLjVzIGVhc2UtaW4tb3V0IDQgYWx0ZXJuYXRlO1xcbiAgLW1vei1hbmltYXRpb246IGdsb3cgMC41cyBlYXNlLWluLW91dCA0IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbjogZ2xvdyAwLjVzIGVhc2UtaW4tb3V0IDQgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdsb3cge1xcbiAgZnJvbSB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjODRjYzE2LCAwIDAgMTVweCAjODRjYzE2LCAwIDAgMjBweCAjODRjYzE2O1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjYmVmMjY0LCAwIDAgNHB4ICNhM2U2MzUsIDAgMCA4cHggI2EzZTYzNSxcXG4gICAgICAwIDAgMTBweCAjYTNlNjM1LCAwIDAgMjBweCAjYTNlNjM1LCAwIDAgNDBweCAjYTNlNjM1LCAwIDAgNjBweCAjYTNlNjM1O1xcbiAgfVxcbn1cXG5cXG4uc2hpcDpub3QoLmNvbXB1dGVyKSxcXG4uaGl0LFxcbi5taXNzZWQsXFxuLnBsYWNlbWVudC1sb2NhdGlvbiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAyMzAsIDUzLCAwLjUpO1xcbn1cXG4uc2hpcDpub3QoLmNvbXB1dGVyKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2MzYWVkO1xcbn1cXG5cXG4uc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnBsYWNlbWVudC1sb2NhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcbn1cXG5cXG4uc3BhY2Uge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgY2VudGVyIC8gMjAwcHggMjAwcHggcm91bmQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwYWNlIHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4uc3RhcnMxIHtcXG4gIGFuaW1hdGlvbjogc3BhY2UgMTgwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICAxcHggMXB4IGF0IDI1cHggNXB4LFxcbiAgICAgIHdoaXRlLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXG4gICAgKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNTBweCAyNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDEyNXB4IDIwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDUwcHggNzVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAxNXB4IDEyNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjVweCAyLjVweCBhdCAxMTBweCA4MHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc3RhcnMyIHtcXG4gIGFuaW1hdGlvbjogc3BhY2UgMjQwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICAxcHggMXB4IGF0IDc1cHggMTI1cHgsXFxuICAgICAgd2hpdGUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgICApLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAxMDBweCA3NXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCAxOTlweCAxMDBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMHB4IDUwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNXB4IDIuNXB4IGF0IDEwMHB4IDVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi41cHggMi41cHggYXQgNXB4IDVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnN0YXJzMyB7XFxuICBhbmltYXRpb246IHNwYWNlIDMwMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgMXB4IDFweCBhdCAxMHB4IDEwcHgsXFxuICAgICAgd2hpdGUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgICApLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAxNTBweCAxNTBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgNjBweCAxNzBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgMTc1cHggMTgwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgMTk1cHggOTVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi41cHggMi41cHggYXQgOTVweCAxNDVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAuZ2FtZWJvYXJkLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5jb21wdXRlci1zZWN0aW9uOmhhcyguYWRkLXNoaXAtY29udGFpbmVyKSB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIC5nYW1lLWhlYWRlciB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMjFweCAjYTNlNjM1LCAwIDAgNDJweCAjODRjYzE2LCAwIDAgODRweCAjZmZmO1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICB9XFxuICAuZ2FtZWJvYXJkLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5hZGQtc2hpcC1jb250YWluZXIgbGFiZWwsXFxuICAuYWRkLXNoaXAtcHJvbXB0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAuYnRucy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsNENBQStCO0FBQ2pDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsNENBQWtDO0FBQ3BDOztBQUVBOzs7Ozs7Q0FNQzs7QUFFRDtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUVBQWlFO0VBQ2pFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZDQUE2QztFQUM3Qyx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZDt5REFDdUQ7RUFDdkQsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0I7b0JBQ2tCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsU0FBUztFQUNULGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxpRUFBaUU7RUFDakUsa0JBQWtCO0VBQ2xCLG9EQUFvRDtFQUNwRCxpREFBaUQ7RUFDakQsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0U7SUFDRSxpRUFBaUU7RUFDbkU7RUFDQTtJQUNFOzRFQUN3RTtFQUMxRTtBQUNGOztBQUVBOzs7O0VBSUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsU0FBUztFQUNULE9BQU87RUFDUCxlQUFlO0VBQ2YsUUFBUTtFQUNSLE1BQU07RUFDTixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQzs7Ozs7Ozs7OzZFQVMyRTtFQUMzRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBDQUEwQztFQUMxQzs7Ozs7Ozs7OzBFQVN3RTtFQUN4RSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBDQUEwQztFQUMxQzs7Ozs7Ozs7OzZFQVMyRTtFQUMzRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLDhEQUE4RDtJQUM5RCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzcGFjZS1mb250O1xcbiAgc3JjOiB1cmwoLi9TcGFjZS1HYW1lLUZvbnQub3RmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3QtZm9udDtcXG4gIHNyYzogdXJsKC4vQ2xhc3NpYy1Sb2JvdC1Gb250LnR0Zik7XFxufVxcblxcbi8qIFxcbklkZWFzOlxcbi1maXJlLWdsb3d5LWFuaW1hdGlvbiBmb3IgLmhpdFxcbi1cXFwic3BhY2VcXFwiIGNsb3VkIGFuaW1hdGlvbiBhcm91bmQgZ2FtZWJvYXJkLCBncmlkIGlzIHNhbWUgY29sb3IsIFxcbi1maW5kIHNpbXBsZSBpbWFnZSBmb3Igc2hpcCwgb3Igc29tZXRoaW5nIHRvIG1ha2UgdGhlIHNoaXBzIGxvb2trIGludGVyZXN0aW5nXFxuLSBmbGFzaGluZyBZb3Ugd2luIHdoZW4gd29uLlxcbiovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIG5hdnkgMCwgYmxhY2sgMTAwJSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmFkZC1zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICByb3ctZ2FwOiAxNnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCA1MCUsIDcwMHB4KTtcXG4gIGNvbG9yOiAjZDlmOTlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyLXNlY3Rpb246aGFzKC5hZGQtc2hpcC1jb250YWluZXIpIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFkZC1zaGlwLXByb21wdCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI25ld19kaXJlY3Rpb25fZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCwgMWZyO1xcbn1cXG5cXG4jZGlyZWN0aW9uIHtcXG4gIGNvbG9yOiAjYmVmMjY0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA3cHggI2EzZTYzNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNkaXJlY3Rpb24gb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLXNoaXAtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjb2xvcjogI2JlZjI2NDtcXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggI2EzZTYzNSwgMCAwIDE1cHggI2EzZTYzNTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG4uYWRkLXNoaXAtY29udGFpbmVyIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uYnRucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uZ2FtZS1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IHNwYWNlLWZvbnQsIFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNhM2U2MzU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDdweCAjYTNlNjM1LCAwIDAgMTVweCAjYTNlNjM1LCAwIDAgMjFweCAjYTNlNjM1LFxcbiAgICAwIDAgNDJweCAjODRjYzE2LCAwIDAgODRweCAjODRjYzE2LCAwIDAgMTAycHggIzg0Y2MxNjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nLXRvcDogMTZweDtcXG59XFxuXFxuLmdhbWVib2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItc2VjdGlvbixcXG4ucGxheWVyLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmdhbWVib2FyZC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNhM2U2MzU7XFxuICBmb250LWZhbWlseTogcm9ib3QtZm9udCwgXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgNTAlLCA3MDBweCk7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICNhM2U2MzUsIDAgMCA3cHggI2EzZTYzNSwgMCAwIDEwcHggI2VjZmNjYixcXG4gICAgMCAwIDE1cHggI2VjZmNjYjtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBmbGV4LWdyb3c6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODRjYzE2O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYWRkLXNoaXAtcHJvbXB0LFxcbmxhYmVsIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICM4NGNjMTYsIDAgMCAxNXB4ICM4NGNjMTYsIDAgMCAyMHB4ICM4NGNjMTY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvdyAwLjVzIGVhc2UtaW4tb3V0IDQgYWx0ZXJuYXRlO1xcbiAgLW1vei1hbmltYXRpb246IGdsb3cgMC41cyBlYXNlLWluLW91dCA0IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbjogZ2xvdyAwLjVzIGVhc2UtaW4tb3V0IDQgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdsb3cge1xcbiAgZnJvbSB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjODRjYzE2LCAwIDAgMTVweCAjODRjYzE2LCAwIDAgMjBweCAjODRjYzE2O1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjYmVmMjY0LCAwIDAgNHB4ICNhM2U2MzUsIDAgMCA4cHggI2EzZTYzNSxcXG4gICAgICAwIDAgMTBweCAjYTNlNjM1LCAwIDAgMjBweCAjYTNlNjM1LCAwIDAgNDBweCAjYTNlNjM1LCAwIDAgNjBweCAjYTNlNjM1O1xcbiAgfVxcbn1cXG5cXG4uc2hpcDpub3QoLmNvbXB1dGVyKSxcXG4uaGl0LFxcbi5taXNzZWQsXFxuLnBsYWNlbWVudC1sb2NhdGlvbiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAyMzAsIDUzLCAwLjUpO1xcbn1cXG4uc2hpcDpub3QoLmNvbXB1dGVyKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2MzYWVkO1xcbn1cXG5cXG4uc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnBsYWNlbWVudC1sb2NhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcbn1cXG5cXG4uc3BhY2Uge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgY2VudGVyIC8gMjAwcHggMjAwcHggcm91bmQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwYWNlIHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4uc3RhcnMxIHtcXG4gIGFuaW1hdGlvbjogc3BhY2UgMTgwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICAxcHggMXB4IGF0IDI1cHggNXB4LFxcbiAgICAgIHdoaXRlLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXG4gICAgKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNTBweCAyNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDEyNXB4IDIwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDUwcHggNzVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAxNXB4IDEyNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjVweCAyLjVweCBhdCAxMTBweCA4MHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc3RhcnMyIHtcXG4gIGFuaW1hdGlvbjogc3BhY2UgMjQwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICAxcHggMXB4IGF0IDc1cHggMTI1cHgsXFxuICAgICAgd2hpdGUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgICApLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAxMDBweCA3NXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCAxOTlweCAxMDBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMHB4IDUwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNXB4IDIuNXB4IGF0IDEwMHB4IDVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi41cHggMi41cHggYXQgNXB4IDVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnN0YXJzMyB7XFxuICBhbmltYXRpb246IHNwYWNlIDMwMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgMXB4IDFweCBhdCAxMHB4IDEwcHgsXFxuICAgICAgd2hpdGUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgICApLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAxNTBweCAxNTBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgNjBweCAxNzBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgMTc1cHggMTgwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgMTk1cHggOTVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi41cHggMi41cHggYXQgOTVweCAxNDVweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAuZ2FtZWJvYXJkLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5jb21wdXRlci1zZWN0aW9uOmhhcyguYWRkLXNoaXAtY29udGFpbmVyKSB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIC5nYW1lLWhlYWRlciB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMjFweCAjYTNlNjM1LCAwIDAgNDJweCAjODRjYzE2LCAwIDAgODRweCAjZmZmO1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICB9XFxuICAuZ2FtZWJvYXJkLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5hZGQtc2hpcC1jb250YWluZXIgbGFiZWwsXFxuICAuYWRkLXNoaXAtcHJvbXB0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAuYnRucy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJlbW92ZUFsbENoaWxkTm9kZXMgPSBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckdhbWUgPSBmdW5jdGlvbiByZW1vdmVFbGVtZW50c0luR2FtZVNlY3Rpb25zKCkge1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXNlY3Rpb25cIikpO1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItc2VjdGlvblwiKSk7XG59O1xuXG5jb25zdCBkaXNwbGF5Qm9hcmQgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyR2FtZUJvYXJkKHBsYXllcikge1xuICBjb25zdCBnYW1lYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdldEJvYXJkKCk7XG4gIGNvbnN0IGdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lYm9hcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtaWRcIiwgYCR7aX0sJHtqfWApO1xuXG4gICAgICBpZiAoZ2FtZWJvYXJkW2ldW2pdICE9IG51bGwpIHtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmhpdFNob3RzLmluY2x1ZGVzKGAke2l9LCR7an1gKSkge1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5taXNzZWRTaG90cy5pbmNsdWRlcyhgJHtpfSwke2p9YCkpIHtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyXCIpO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgICBnYW1lYm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cblxuICByZXR1cm4gZ2FtZWJvYXJkRWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlHYW1lID0gZnVuY3Rpb24gZGlzcGxheVRoZUdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItc2VjdGlvblwiKTtcbiAgY29uc3QgY29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHBsYXllckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkLWhlYWRlclwiKTtcbiAgcGxheWVySGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIEZsZWV0XCI7XG5cbiAgY29uc3QgY29tcHV0ZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wdXRlckhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkLWhlYWRlclwiKTtcbiAgY29tcHV0ZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15J3MgRmxlZXRcIjtcblxuICBwbGF5ZXJTZWN0aW9uLmFwcGVuZENoaWxkKHBsYXllckhlYWRlcik7XG4gIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQoZGlzcGxheUJvYXJkKHBsYXllcjEpKTtcblxuICBpZiAoIXBsYXllcjIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNvbXB1dGVySGVhZGVyKTtcbiAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGRpc3BsYXlCb2FyZChwbGF5ZXIyKSk7XG59O1xuXG5jb25zdCBsb2NhdGlvblByb21wdCA9IGZ1bmN0aW9uIHByb21wdFVzZXJGb3JMb2NhdGlvblBsYWNlbWVudChzaGlwVHlwZSkge1xuICBjb25zdCBhZGRTaGlwUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkU2hpcFByb21wdC5jbGFzc0xpc3QuYWRkKFwiYWRkLXNoaXAtcHJvbXB0XCIpO1xuXG4gIGFkZFNoaXBQcm9tcHQudGV4dENvbnRlbnQgPSBgQ2hvb3NlICR7c2hpcFR5cGVbMF19IGxvY2F0aW9uIChsZW5ndGggJHtzaGlwVHlwZVsxXX0pYDtcblxuICByZXR1cm4gYWRkU2hpcFByb21wdDtcbn07XG5cbmNvbnN0IGRpc3BsYXlEaXJlY3Rpb25Gb3JtID1cbiAgZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheVRoZURpcmVjdGlvbkZvcm1Gb3JTaGlwUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpcmVjdGlvbi1mb3JtLXNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBkaXJlY3Rpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZGlyZWN0aW9uRm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgZGlyZWN0aW9uRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGRpcmVjdGlvbkZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdfZGlyZWN0aW9uX2Zvcm1cIik7XG5cbiAgICBjb25zdCBkaXJlY3Rpb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlyZWN0aW9uRmllbGQuY2xhc3NMaXN0LmFkZChcImZvcm0tZmllbGRcIik7XG5cbiAgICBjb25zdCBkaXJlY3Rpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkaXJlY3Rpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkaXJlY3Rpb25cIik7XG4gICAgZGlyZWN0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkNob29zZSBkaXJlY3Rpb25cXG5cIjtcbiAgICBjb25zdCBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGRpcmVjdGlvblNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpcmVjdGlvblwiKTtcbiAgICBjb25zdCBkaXJlY3Rpb25PcHRpb25SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uUmlnaHQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJyaWdodFwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25SaWdodC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25SaWdodC50ZXh0Q29udGVudCA9IFwiUmlnaHRcIjtcbiAgICBjb25zdCBkaXJlY3Rpb25PcHRpb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25MZWZ0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibGVmdFwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25MZWZ0LnRleHRDb250ZW50ID0gXCJMZWZ0XCI7XG4gICAgY29uc3QgZGlyZWN0aW9uT3B0aW9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uRG93bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImRvd25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uRG93bi50ZXh0Q29udGVudCA9IFwiRG93blwiO1xuICAgIGNvbnN0IGRpcmVjdGlvbk9wdGlvblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25VcC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInVwXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvblVwLnRleHRDb250ZW50ID0gXCJVcFwiO1xuICAgIGRpcmVjdGlvblNlbGVjdC5hcHBlbmRDaGlsZChkaXJlY3Rpb25PcHRpb25SaWdodCk7XG4gICAgZGlyZWN0aW9uU2VsZWN0LmFwcGVuZENoaWxkKGRpcmVjdGlvbk9wdGlvbkxlZnQpO1xuICAgIGRpcmVjdGlvblNlbGVjdC5hcHBlbmRDaGlsZChkaXJlY3Rpb25PcHRpb25Eb3duKTtcbiAgICBkaXJlY3Rpb25TZWxlY3QuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uT3B0aW9uVXApO1xuICAgIGRpcmVjdGlvbkZpZWxkLmFwcGVuZENoaWxkKGRpcmVjdGlvbkxhYmVsKTtcbiAgICBkaXJlY3Rpb25GaWVsZC5hcHBlbmRDaGlsZChkaXJlY3Rpb25TZWxlY3QpO1xuICAgIGRpcmVjdGlvbkZvcm0uYXBwZW5kQ2hpbGQoZGlyZWN0aW9uRmllbGQpO1xuXG4gICAgY29uc3QgYnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRucy1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJhbmRvbUJ0bi5jbGFzc0xpc3QuYWRkKFwicmFuZG9tLWZvcm0tYnRuXCIpO1xuICAgIHJhbmRvbUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIHJhbmRvbUJ0bi50ZXh0Q29udGVudCA9IFwiUmFuZG9tXCI7XG4gICAgYnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1mb3JtLWJ0blwiKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIGJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGRpcmVjdGlvbkZvcm0uYXBwZW5kQ2hpbGQoYnRuc0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uRm9ybTtcbiAgfTtcblxuY29uc3QgZm9ybWF0U2hpcENob2ljZUdyaWRzID0gZnVuY3Rpb24gZm9ybWF0R3JpZHNUb1J1bkdhbWUoKSB7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRcIik7XG4gIGdyaWRzLmZvckVhY2goKGdyaWQpID0+XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC1sb2NhdGlvblwiKTtcbiAgICAgIGNvdW50ZXIrKztcbiAgICB9KVxuICApO1xufTtcblxuY29uc3QgZGlzcGxheUNob29zZVNoaXAgPSBmdW5jdGlvbiBnZXRTaGlwUGxhY2VtZW50RnJvbVVzZXIoXG4gIHBsYXllcjEsXG4gIHNoaXBUeXBlc1xuKSB7XG4gIGNvbnN0IHBsYWNlU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYWNlU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLXNoaXAtY29udGFpbmVyXCIpO1xuXG4gIGRpc3BsYXlHYW1lKHBsYXllcjEpO1xuICBmb3JtYXRTaGlwQ2hvaWNlR3JpZHMocGxheWVyMSk7XG4gIHBsYWNlU2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBsb2NhdGlvblByb21wdChzaGlwVHlwZXNbc2hpcFR5cGVzLmxlbmd0aCAtIDFdKVxuICApO1xuICBwbGFjZVNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheURpcmVjdGlvbkZvcm0oKSk7XG5cbiAgY29uc3QgY29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1zZWN0aW9uXCIpO1xuICBjb21wdXRlclNlY3Rpb24uYXBwZW5kQ2hpbGQocGxhY2VTaGlwQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlXaW5uZXIgPSBmdW5jdGlvbiBkaXNwbGF5VGhlR2l2ZW5QbGF5ZXJPYmpBc1dpbm5lcihwbGF5ZXIpIHtcbiAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2lubmVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXItaGVhZGVyXCIpO1xuXG4gIGlmIChwbGF5ZXIuaXNDb21wdXRlcikge1xuICAgIHdpbm5lci50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIgd2lucyFcIjtcbiAgfSBlbHNlIHtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBcIllvdSB3b24hXCI7XG4gIH1cblxuICBjb25zdCBnYW1lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWhlYWRlclwiKTtcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhnYW1lSGVhZGVyKTtcbiAgZ2FtZUhlYWRlci5hcHBlbmRDaGlsZCh3aW5uZXIpO1xufTtcblxuZXhwb3J0IHtcbiAgZGlzcGxheUdhbWUsXG4gIGNsZWFyR2FtZSxcbiAgZGlzcGxheVdpbm5lcixcbiAgZGlzcGxheUNob29zZVNoaXAsXG4gIGxvY2F0aW9uUHJvbXB0LFxufTtcbiIsImNvbnN0IHNldEF0dGFjayA9IGZ1bmN0aW9uIHNldEF0dGFja09uRW5lbXlHYW1lYm9hcmQoZ3JpZElkLCBwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGNvbnN0IGNvbCA9IGdyaWRJZC5zcGxpdChcIixcIilbMF07XG4gIGNvbnN0IHJvdyA9IGdyaWRJZC5zcGxpdChcIixcIilbMV07XG4gIHBsYXllcjEuYXR0YWNrKHBsYXllcjIsIGNvbCwgcm93KTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yV2lubmVyID0gZnVuY3Rpb24gY2hlY2tJZkFQbGF5ZXJXb24ocGxheWVyMSwgcGxheWVyMikge1xuICBpZiAocGxheWVyMi5nYW1lYm9hcmQuYXJlQWxsU3VuaygpKSB7XG4gICAgcmV0dXJuIHBsYXllcjE7XG4gIH1cbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmFyZUFsbFN1bmsoKSkge1xuICAgIHJldHVybiBwbGF5ZXIyO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IHNldEF0dGFjaywgY2hlY2tGb3JXaW5uZXIgfTtcbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IHNoaXBWYWxpZGl0eSA9IFtdO1xuXG4gIGNvbnN0IHdhc05ld1NoaXBWYWxpZCA9ICgpID0+IHNoaXBWYWxpZGl0eVtzaGlwVmFsaWRpdHkubGVuZ3RoIC0gMV07XG5cbiAgY29uc3QgcG9wdWxhdGVTaGlwc0dyaWRzID0gKHNoaXBDb29yZHMsIHNoaXApID0+IHtcbiAgICBzaGlwQ29vcmRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IFtjb2wsIHJvd10gPSBlbGVtZW50LnNwbGl0KFwiLFwiKTtcbiAgICAgIGdhbWVib2FyZFtjb2xdW3Jvd10gPSBzaGlwO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGNoZWNrIGlmIG5ld1NoaXBJbmZvIG1hdGNoZXMgYW55IG90aGVyIHNoaXBzIGNvb3Jkc1xuICBjb25zdCBjaGVja05ld1NoaXBWYWxpZGl0eSA9IChuZXdTaGlwSW5mbykgPT4ge1xuICAgIGNvbnN0IGZvdW5kT3ZlcmxhcCA9IHNoaXBzLnNvbWUoKHNoaXApID0+XG4gICAgICBzaGlwLnNvbWUoKGNvb3JkKSA9PiBuZXdTaGlwSW5mby5pbmNsdWRlcyhjb29yZCkpXG4gICAgKTtcblxuICAgIGNvbnN0IGZvdW5kT3V0T2ZCb3VuZHMgPSBuZXdTaGlwSW5mby5zb21lKChjb29yZHMpID0+IHtcbiAgICAgIGNvbnN0IFtjb2wsIHJvd10gPSBjb29yZHMuc3BsaXQoXCIsXCIpO1xuICAgICAgaWYgKGNvbCA+IDkgfHwgY29sIDwgMCB8fCByb3cgPiA5IHx8IHJvdyA8IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAoZm91bmRPdmVybGFwIHx8IGZvdW5kT3V0T2ZCb3VuZHMpIHtcbiAgICAgIHNoaXBWYWxpZGl0eS5wdXNoKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaGlwVmFsaWRpdHkucHVzaCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29sLCByb3csIGRpcmVjdGlvbiwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IG5ld1NoaXBJbmZvID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIG5ld1NoaXBJbmZvLnB1c2goYCR7Y29sfSwke3JvdyAtIGl9YCk7XG4gICAgICB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgbmV3U2hpcEluZm8ucHVzaChgJHtjb2x9LCR7cm93ICsgaX1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICAgIG5ld1NoaXBJbmZvLnB1c2goYCR7Y29sIC0gaX0sJHtyb3d9YCk7XG4gICAgICB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgbmV3U2hpcEluZm8ucHVzaChgJHtjb2wgKyBpfSwke3Jvd31gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja05ld1NoaXBWYWxpZGl0eShuZXdTaGlwSW5mbyk7XG4gICAgY29uc3QgaXNWYWxpZCA9IHdhc05ld1NoaXBWYWxpZCgpO1xuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3B1bGF0ZVNoaXBzR3JpZHMobmV3U2hpcEluZm8uc2xpY2UoMCksIHNoaXApO1xuICAgIG5ld1NoaXBJbmZvLnB1c2goc2hpcCk7XG4gICAgc2hpcHMucHVzaChuZXdTaGlwSW5mbyk7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBhbmQgaW5jbHVkaW5nIGEgbWl4L21heFxuICBjb25zdCByYW5kb21JbnQgPSBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUoc2V0TWluLCBzZXRNYXgpIHtcbiAgICBjb25zdCBtaW4gPSBNYXRoLmNlaWwoc2V0TWluKTtcbiAgICBjb25zdCBtYXggPSBNYXRoLmZsb29yKHNldE1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VSYW5kb21TaGlwID0gZnVuY3Rpb24gcGxhY2VSYW5kb21WYWxpZFNoaXAoc2hpcCkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJ1cFwiLCBcImRvd25cIl07XG4gICAgY29uc3QgY29uZGl0aW9uID0gdHJ1ZTtcblxuICAgIHdoaWxlIChjb25kaXRpb24pIHtcbiAgICAgIHBsYWNlU2hpcChcbiAgICAgICAgcmFuZG9tSW50KDAsIDkpLFxuICAgICAgICByYW5kb21JbnQoMCwgOSksXG4gICAgICAgIGRpcmVjdGlvbnNbcmFuZG9tSW50KDAsIDMpXSxcbiAgICAgICAgc2hpcFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSB3YXNOZXdTaGlwVmFsaWQoKTtcbiAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICBjb25zdCBoaXRTaG90cyA9IFtdO1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHhQbHVzWSA9IGAke3h9LCR7eX1gO1xuICAgIGxldCBoaXRQb3NpdGlvbjtcbiAgICBsZXQgZGlkSXRIaXQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoaXRQb3NpdGlvbiA9IHNoaXBzW2ldLmZpbmRJbmRleCgoY29vcmRpbmF0ZXMpID0+IGNvb3JkaW5hdGVzID09PSB4UGx1c1kpO1xuICAgICAgaWYgKGdhbWVib2FyZFt4XVt5XSAhPSBudWxsKSB7XG4gICAgICAgIGdhbWVib2FyZFt4XVt5XS5oaXQoaGl0UG9zaXRpb24pO1xuICAgICAgICBkaWRJdEhpdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaWRJdEhpdCkge1xuICAgICAgaGl0U2hvdHMucHVzaCh4UGx1c1kpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1pc3NlZFNob3RzLnB1c2goeFBsdXNZKTtcbiAgfTtcblxuICBjb25zdCBhcmVBbGxTdW5rID0gKCkgPT5cbiAgICBzaGlwcy5zbGljZSgwKS5ldmVyeSgoc2hpcCkgPT4gc2hpcFtzaGlwLmxlbmd0aCAtIDFdLmlzU3VuaygpKTtcblxuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIG1pc3NlZFNob3RzLFxuICAgIGhpdFNob3RzLFxuICAgIGFyZUFsbFN1bmssXG4gICAgd2FzTmV3U2hpcFZhbGlkLFxuICAgIHBsYWNlUmFuZG9tU2hpcCxcbiAgICBzaGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vLyBIZWxwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgYSBtaXgvbWF4XG5jb25zdCByYW5kb21JbnQgPSBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUoKSB7XG4gIGNvbnN0IHNldE1pbiA9IDA7XG4gIGNvbnN0IHNldE1heCA9IDk7XG4gIGNvbnN0IG1pbiA9IE1hdGguY2VpbChzZXRNaW4pO1xuICBjb25zdCBtYXggPSBNYXRoLmZsb29yKHNldE1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuY29uc3QgcmFuZG9tQXR0YWNrID0gZnVuY3Rpb24gY3JlYXRlUmFuZG9tVW51c2VkQXR0YWNrQ2hvaWNlKGF0dGFja3NNYWRlKSB7XG4gIGlmIChhdHRhY2tzTWFkZS5sZW5ndGggPT09IDEwMCkge1xuICAgIHJldHVybiBbMCwgMF07XG4gIH1cbiAgbGV0IGZvdW5kVXNlZEF0dGFjayA9IHRydWU7XG4gIHdoaWxlIChmb3VuZFVzZWRBdHRhY2spIHtcbiAgICBjb25zdCBjb21wWCA9IHJhbmRvbUludCgpO1xuICAgIGNvbnN0IGNvbXBZID0gcmFuZG9tSW50KCk7XG4gICAgaWYgKCFhdHRhY2tzTWFkZS5pbmNsdWRlcyhgJHtjb21wWH0sJHtjb21wWX1gKSkge1xuICAgICAgZm91bmRVc2VkQXR0YWNrID0gZmFsc2U7XG4gICAgICBhdHRhY2tzTWFkZS5wdXNoKGAke2NvbXBYfSwke2NvbXBZfWApO1xuICAgICAgcmV0dXJuIFtjb21wWCwgY29tcFldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBQbGF5ZXIgPSAoZ2FtZWJvYXJkLCBpc0NvbXB1dGVyKSA9PiB7XG4gIGNvbnN0IGF0dGFja3NNYWRlID0gW107XG4gIGNvbnN0IGF0dGFjayA9IChlbmVteSwgeCwgeSkgPT4ge1xuICAgIGlmIChpc0NvbXB1dGVyKSB7XG4gICAgICBbeCwgeV0gPSByYW5kb21BdHRhY2soYXR0YWNrc01hZGUpO1xuICAgIH1cbiAgICBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTtcbiAgcmV0dXJuIHsgZ2FtZWJvYXJkLCBhdHRhY2ssIGF0dGFja3NNYWRlLCBpc0NvbXB1dGVyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBkYW1hZ2VkID0gW1xuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICBdLnNsaWNlKDAsIGxlbmd0aCk7XG4gIGNvbnN0IGhpdCA9IChsb2NhdGlvbikgPT4ge1xuICAgIGRhbWFnZWRbbG9jYXRpb25dID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gZGFtYWdlZC5ldmVyeSgobG9jYXRpb24pID0+IGxvY2F0aW9uID09PSB0cnVlKTtcblxuICByZXR1cm4geyBsZW5ndGgsIGRhbWFnZWQsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLW1hbmFnZXJcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkLW1hbmFnZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAtbWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgZGlzcGxheUdhbWUsXG4gIGNsZWFyR2FtZSxcbiAgZGlzcGxheVdpbm5lcixcbiAgZGlzcGxheUNob29zZVNoaXAsXG59IGZyb20gXCIuL2RvbS1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBzZXRBdHRhY2ssIGNoZWNrRm9yV2lubmVyIH0gZnJvbSBcIi4vZ2FtZS1tYW5hZ2VyXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuLy8gU3RlcHMgdG8gZmluaXNoOlxuLy8gICAgLSBpZiBvdmVybGFwL291dCBvZiBib3VuZHMgdXNlIGpzIGZvcm0gdmFsaWRhdGlvblxuXG4vLyAgICAtIGFkZCBtYXggZ3JpZCBzaXplcyBpbiBjc3MsIGRlc2lnbiBhbmQgbWFrZSBsb29rIG5pY2UgYmVjYXVzZSBsYXN0IHZhbmlsbGEgSlMgcHJvamVjdFxuY29uc3Qgc2hpcFR5cGVzID0gW1xuICBbXCJQYXRyb2wgQm9hdFwiLCAyXSxcbiAgW1wiU3VibWFyaW5lXCIsIDNdLFxuICBbXCJEZXN0cm95ZXJcIiwgM10sXG4gIFtcIkJhdHRsZXNoaXBcIiwgNF0sXG4gIFtcIkNhcnJpZXJcIiwgNV0sXG5dO1xuXG5jb25zdCBodW1hblBsYXllciA9IFBsYXllcihHYW1lYm9hcmQoKSk7XG5jb25zdCBjb21wdXRlclBsYXllciA9IFBsYXllcihHYW1lYm9hcmQoKSwgdHJ1ZSk7XG5cbmNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVJhbmRvbVNoaXAoU2hpcCg1KSk7XG5jb21wdXRlclBsYXllci5nYW1lYm9hcmQucGxhY2VSYW5kb21TaGlwKFNoaXAoNCkpO1xuY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUmFuZG9tU2hpcChTaGlwKDMpKTtcbmNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVJhbmRvbVNoaXAoU2hpcCgzKSk7XG5jb21wdXRlclBsYXllci5nYW1lYm9hcmQucGxhY2VSYW5kb21TaGlwKFNoaXAoMikpO1xuXG5jb25zdCBmb3JtYXRHcmlkcyA9IGZ1bmN0aW9uIGZvcm1hdEdyaWRzVG9SdW5HYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyXCIpO1xuICBncmlkcy5mb3JFYWNoKChncmlkKSA9PlxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGdyaWRJZCA9IGdyaWQuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLWlkXCIpO1xuICAgICAgc2V0QXR0YWNrKGdyaWRJZCwgcGxheWVyMSwgcGxheWVyMik7XG4gICAgICBwbGF5ZXIyLmF0dGFjayhwbGF5ZXIxKTtcblxuICAgICAgY2xlYXJHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuICAgICAgZGlzcGxheUdhbWUocGxheWVyMSwgcGxheWVyMik7XG5cbiAgICAgIGlmIChjaGVja0Zvcldpbm5lcihwbGF5ZXIxLCBwbGF5ZXIyKSkge1xuICAgICAgICBkaXNwbGF5V2lubmVyKGNoZWNrRm9yV2lubmVyKHBsYXllcjEsIHBsYXllcjIpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3JtYXRHcmlkcyhwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICB9KVxuICApO1xufTtcbmNvbnN0IGNob29zZVNoaXBzID0gZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheVBsYXllclNoaXBDaG9vc2luZygpIHtcbiAgZGlzcGxheUNob29zZVNoaXAoaHVtYW5QbGF5ZXIsIHNoaXBUeXBlcyk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGZvcm1hdFN1Ym1pdEJ0bihodW1hblBsYXllcik7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBmb3JtYXRSYW5kb21CdG4oaHVtYW5QbGF5ZXIpO1xufTtcblxuY29uc3QgZm9ybWF0U3VibWl0QnRuID0gZnVuY3Rpb24gZm9ybWF0c0RpcmVjdGlvblN1Ym1pdEJ1dHRvbihwbGF5ZXIpIHtcbiAgY29uc3Qgc3VibWl0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWZvcm0tYnRuXCIpO1xuICBzdWJtaXRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlbWVudC1sb2NhdGlvblwiKTtcbiAgICBjb25zdCBncmlkSWQgPSBsb2NhdGlvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtaWRcIik7XG5cbiAgICBjb25zdCBkaXJlY3Rpb25TZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlyZWN0aW9uXCIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbkNob2ljZSA9XG4gICAgICBkaXJlY3Rpb25TZWxlY3RlZC5vcHRpb25zW2RpcmVjdGlvblNlbGVjdGVkLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgY29uc3QgY29vcmRzID0gZ3JpZElkLnNwbGl0KFwiLFwiKTtcblxuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgK2Nvb3Jkc1swXSxcbiAgICAgICtjb29yZHNbMV0sXG4gICAgICBkaXJlY3Rpb25DaG9pY2UudG9Mb3dlckNhc2UoKSxcbiAgICAgIFNoaXAoc2hpcFR5cGVzW3NoaXBUeXBlcy5sZW5ndGggLSAxXVsxXSlcbiAgICApO1xuXG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQud2FzTmV3U2hpcFZhbGlkKCkpIHtcbiAgICAgIHNoaXBUeXBlcy5wb3AoKTtcbiAgICB9XG4gICAgY2xlYXJHYW1lKCk7XG4gICAgaWYgKHNoaXBUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRpc3BsYXlHYW1lKGh1bWFuUGxheWVyLCBjb21wdXRlclBsYXllcik7XG4gICAgICBmb3JtYXRHcmlkcyhodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNob29zZVNoaXBzKCk7XG4gIH0pO1xufTtcblxuY29uc3QgZm9ybWF0UmFuZG9tQnRuID0gZnVuY3Rpb24gcmFuZG9tQnRuV2lsbFBsYWNlU2hpcFJhbmRvbWx5KHBsYXllcikge1xuICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbS1mb3JtLWJ0blwiKTtcbiAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVJhbmRvbVNoaXAoU2hpcChzaGlwVHlwZXNbc2hpcFR5cGVzLmxlbmd0aCAtIDFdWzFdKSk7XG4gICAgc2hpcFR5cGVzLnBvcCgpO1xuICAgIGNsZWFyR2FtZSgpO1xuICAgIGlmIChzaGlwVHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkaXNwbGF5R2FtZShodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgICAgZm9ybWF0R3JpZHMoaHVtYW5QbGF5ZXIsIGNvbXB1dGVyUGxheWVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjaG9vc2VTaGlwcygpO1xuICB9KTtcbn07XG5cbmNob29zZVNoaXBzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=