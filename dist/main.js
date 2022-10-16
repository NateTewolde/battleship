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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: space-font;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: robot-font;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  overflow: hidden;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n\n  background: radial-gradient(circle at center, navy 0, black 100%);\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n  padding: 4px;\n}\n\n.add-ship-container {\n  flex: 1;\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  row-gap: 16px;\n  width: clamp(100px, 45%, 700px);\n  color: #d9f99d;\n  text-align: center;\n  border-radius: 16px;\n  padding: 24px;\n  justify-content: center;\n}\n\n.computer-section:has(.add-ship-container) {\n  height: 100%;\n}\n\n.add-ship-prompt {\n  font-size: 1.3rem;\n}\n\n#new_direction_form {\n  display: grid;\n  grid-template-rows: min-content, 1fr;\n}\n\n#direction {\n  color: #bef264;\n  text-align: center;\n  text-shadow: 0 0 7px #a3e635;\n  background-color: transparent;\n  border: none;\n  font-size: 1.5rem;\n}\n\n#direction option {\n  background-color: black;\n  border: none;\n}\n\n.add-ship-container button {\n  color: #bef264;\n  box-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635;\n  background: transparent;\n  border: 1px solid #a3e635;\n  border-radius: 16px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.add-ship-container label {\n  font-size: 1.3rem;\n}\n\n.btns-container {\n  display: flex;\n  padding-top: 18px;\n  justify-content: space-evenly;\n  height: min-content;\n  gap: 16px;\n}\n\n.game-header {\n  font-family: space-font, \"Roboto\", sans-serif;\n  text-align: center;\n  color: #a3e635;\n  text-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635, 0 0 21px #a3e635,\n    0 0 42px #84cc16, 0 0 84px #84cc16, 0 0 102px #84cc16;\n  font-size: 4rem;\n  font-weight: 500;\n}\n\n.gameboard-section {\n  flex: 1;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.computer-section,\n.player-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n\n.gameboard-header {\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: #a3e635;\n  font-family: robot-font, \"Roboto\", sans-serif;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 4px;\n  margin-top: 10px;\n  width: clamp(100px, 45%, 700px);\n  box-shadow: 0 0 5px #a3e635, 0 0 7px #a3e635, 0 0 10px #ecfccb,\n    0 0 15px #ecfccb;\n}\n\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid #84cc16;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n\n.add-ship-prompt,\nlabel {\n  color: #fff;\n  text-shadow: 0 0 10px #84cc16, 0 0 15px #84cc16, 0 0 20px #84cc16;\n  text-align: center;\n  -webkit-animation: glow 0.5s ease-in-out 4 alternate;\n  -moz-animation: glow 0.5s ease-in-out 4 alternate;\n  animation: glow 0.5s ease-in-out 4 alternate;\n}\n\n@keyframes glow {\n  from {\n    text-shadow: 0 0 10px #84cc16, 0 0 15px #84cc16, 0 0 20px #84cc16;\n  }\n  to {\n    text-shadow: 0 0 2px #bef264, 0 0 4px #a3e635, 0 0 8px #a3e635,\n      0 0 10px #a3e635, 0 0 20px #a3e635, 0 0 40px #a3e635, 0 0 60px #a3e635;\n  }\n}\n\n.ship:not(.computer),\n.hit,\n.missed,\n.placement-location {\n  box-shadow: none;\n}\n\n.grid {\n  background-color: rgb(163, 230, 53, 0.5);\n}\n.ship:not(.computer) {\n  background-color: #7c3aed;\n}\n\n.ship.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: transparent;\n}\n\n.placement-location {\n  background-color: #7c3aed;\n  box-shadow: inset 0 0 10px #fff;\n}\n\n.space {\n  background: transparent center / 200px 200px round;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n@keyframes space {\n  40% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  50% {\n    opacity: 0.25;\n    overflow: hidden;\n  }\n  60% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  100% {\n    transform: rotate(360deg);\n    overflow: hidden;\n  }\n}\n\n.stars1 {\n  animation: space 180s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 25px 5px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars2 {\n  animation: space 240s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 75px 125px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars3 {\n  animation: space 300s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 10px 10px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n\n@media (min-width: 600px) {\n  .gameboard-section {\n    grid-template-rows: none;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .computer-section:has(.add-ship-container) {\n    height: auto;\n  }\n  .game-header {\n    text-shadow: 0 0 21px #a3e635, 0 0 42px #84cc16, 0 0 84px #fff;\n    font-size: 6rem;\n  }\n  .gameboard-header {\n    font-size: 2rem;\n  }\n\n  .add-ship-container label,\n  .add-ship-prompt {\n    font-size: 1.5rem;\n  }\n  .btns-container {\n    padding-top: 64px;\n  }\n\n  .add-ship-container,\n  .gameboard {\n    width: clamp(100px, 60%, 700px);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap\");\n@font-face {\n  font-family: space-font;\n  src: url(./Space-Game-Font.otf);\n}\n@font-face {\n  font-family: robot-font;\n  src: url(./Classic-Robot-Font.ttf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  overflow: hidden;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n\n  background: radial-gradient(circle at center, navy 0, black 100%);\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n  padding: 4px;\n}\n\n.add-ship-container {\n  flex: 1;\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  row-gap: 16px;\n  width: clamp(100px, 45%, 700px);\n  color: #d9f99d;\n  text-align: center;\n  border-radius: 16px;\n  padding: 24px;\n  justify-content: center;\n}\n\n.computer-section:has(.add-ship-container) {\n  height: 100%;\n}\n\n.add-ship-prompt {\n  font-size: 1.3rem;\n}\n\n#new_direction_form {\n  display: grid;\n  grid-template-rows: min-content, 1fr;\n}\n\n#direction {\n  color: #bef264;\n  text-align: center;\n  text-shadow: 0 0 7px #a3e635;\n  background-color: transparent;\n  border: none;\n  font-size: 1.5rem;\n}\n\n#direction option {\n  background-color: black;\n  border: none;\n}\n\n.add-ship-container button {\n  color: #bef264;\n  box-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635;\n  background: transparent;\n  border: 1px solid #a3e635;\n  border-radius: 16px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.add-ship-container label {\n  font-size: 1.3rem;\n}\n\n.btns-container {\n  display: flex;\n  padding-top: 18px;\n  justify-content: space-evenly;\n  height: min-content;\n  gap: 16px;\n}\n\n.game-header {\n  font-family: space-font, \"Roboto\", sans-serif;\n  text-align: center;\n  color: #a3e635;\n  text-shadow: 0 0 7px #a3e635, 0 0 15px #a3e635, 0 0 21px #a3e635,\n    0 0 42px #84cc16, 0 0 84px #84cc16, 0 0 102px #84cc16;\n  font-size: 4rem;\n  font-weight: 500;\n}\n\n.gameboard-section {\n  flex: 1;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.computer-section,\n.player-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n\n.gameboard-header {\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: #a3e635;\n  font-family: robot-font, \"Roboto\", sans-serif;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 4px;\n  margin-top: 10px;\n  width: clamp(100px, 45%, 700px);\n  box-shadow: 0 0 5px #a3e635, 0 0 7px #a3e635, 0 0 10px #ecfccb,\n    0 0 15px #ecfccb;\n}\n\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid #84cc16;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n\n.add-ship-prompt,\nlabel {\n  color: #fff;\n  text-shadow: 0 0 10px #84cc16, 0 0 15px #84cc16, 0 0 20px #84cc16;\n  text-align: center;\n  -webkit-animation: glow 0.5s ease-in-out 4 alternate;\n  -moz-animation: glow 0.5s ease-in-out 4 alternate;\n  animation: glow 0.5s ease-in-out 4 alternate;\n}\n\n@keyframes glow {\n  from {\n    text-shadow: 0 0 10px #84cc16, 0 0 15px #84cc16, 0 0 20px #84cc16;\n  }\n  to {\n    text-shadow: 0 0 2px #bef264, 0 0 4px #a3e635, 0 0 8px #a3e635,\n      0 0 10px #a3e635, 0 0 20px #a3e635, 0 0 40px #a3e635, 0 0 60px #a3e635;\n  }\n}\n\n.ship:not(.computer),\n.hit,\n.missed,\n.placement-location {\n  box-shadow: none;\n}\n\n.grid {\n  background-color: rgb(163, 230, 53, 0.5);\n}\n.ship:not(.computer) {\n  background-color: #7c3aed;\n}\n\n.ship.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: transparent;\n}\n\n.placement-location {\n  background-color: #7c3aed;\n  box-shadow: inset 0 0 10px #fff;\n}\n\n.space {\n  background: transparent center / 200px 200px round;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n@keyframes space {\n  40% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  50% {\n    opacity: 0.25;\n    overflow: hidden;\n  }\n  60% {\n    opacity: 0.75;\n    overflow: hidden;\n  }\n  100% {\n    transform: rotate(360deg);\n    overflow: hidden;\n  }\n}\n\n.stars1 {\n  animation: space 180s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 25px 5px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars2 {\n  animation: space 240s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 75px 125px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n.stars3 {\n  animation: space 300s ease-in-out infinite;\n  background-image: radial-gradient(\n      1px 1px at 10px 10px,\n      white,\n      rgba(255, 255, 255, 0)\n    ),\n    radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),\n    radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));\n  overflow: hidden;\n}\n\n@media (min-width: 600px) {\n  .gameboard-section {\n    grid-template-rows: none;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .computer-section:has(.add-ship-container) {\n    height: auto;\n  }\n  .game-header {\n    text-shadow: 0 0 21px #a3e635, 0 0 42px #84cc16, 0 0 84px #fff;\n    font-size: 6rem;\n  }\n  .gameboard-header {\n    font-size: 2rem;\n  }\n\n  .add-ship-container label,\n  .add-ship-prompt {\n    font-size: 1.5rem;\n  }\n  .btns-container {\n    padding-top: 64px;\n  }\n\n  .add-ship-container,\n  .gameboard {\n    width: clamp(100px, 60%, 700px);\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksY0FBYyxPQUFPLGFBQWEsTUFB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsYUFBYSxtQkFBbUIsWUFBWTs7QUFFcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVFFOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQztB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OztBQUVBLE1BQU0sdURBQVM7QUFDZixNQUFNLHlEQUFXOztBQUVqQixVQUFVLDZEQUFjO0FBQ3hCLFFBQVEsMkRBQWEsQ0FBQyw2REFBYztBQUNwQztBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWlCOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFJO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0EsTUFBTSx5REFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHlEQUFJO0FBQ3pDO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0EsTUFBTSx5REFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1NwYWNlLUdhbWUtRm9udC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0NsYXNzaWMtUm9ib3QtRm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzcGFjZS1mb250O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdC1mb250O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIG5hdnkgMCwgYmxhY2sgMTAwJSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmFkZC1zaGlwLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgcm93LWdhcDogMTZweDtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgNDUlLCA3MDBweCk7XFxuICBjb2xvcjogI2Q5Zjk5ZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb21wdXRlci1zZWN0aW9uOmhhcyguYWRkLXNoaXAtY29udGFpbmVyKSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hZGQtc2hpcC1wcm9tcHQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNuZXdfZGlyZWN0aW9uX2Zvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQsIDFmcjtcXG59XFxuXFxuI2RpcmVjdGlvbiB7XFxuICBjb2xvcjogI2JlZjI2NDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwIDAgN3B4ICNhM2U2MzU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jZGlyZWN0aW9uIG9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC1zaGlwLWNvbnRhaW5lciBidXR0b24ge1xcbiAgY29sb3I6ICNiZWYyNjQ7XFxuICBib3gtc2hhZG93OiAwIDAgN3B4ICNhM2U2MzUsIDAgMCAxNXB4ICNhM2U2MzU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuLmFkZC1zaGlwLWNvbnRhaW5lciBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmJ0bnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMThweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmdhbWUtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBzcGFjZS1mb250LCBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjYTNlNjM1O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA3cHggI2EzZTYzNSwgMCAwIDE1cHggI2EzZTYzNSwgMCAwIDIxcHggI2EzZTYzNSxcXG4gICAgMCAwIDQycHggIzg0Y2MxNiwgMCAwIDg0cHggIzg0Y2MxNiwgMCAwIDEwMnB4ICM4NGNjMTY7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXNlY3Rpb24ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLmNvbXB1dGVyLXNlY3Rpb24sXFxuLnBsYXllci1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5nYW1lYm9hcmQtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjYTNlNjM1O1xcbiAgZm9udC1mYW1pbHk6IHJvYm90LWZvbnQsIFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDQ1JSwgNzAwcHgpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjYTNlNjM1LCAwIDAgN3B4ICNhM2U2MzUsIDAgMCAxMHB4ICNlY2ZjY2IsXFxuICAgIDAgMCAxNXB4ICNlY2ZjY2I7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdyaWQge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg0Y2MxNjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcGFkZGluZy10b3A6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmFkZC1zaGlwLXByb21wdCxcXG5sYWJlbCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjODRjYzE2LCAwIDAgMTVweCAjODRjYzE2LCAwIDAgMjBweCAjODRjYzE2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGdsb3cgMC41cyBlYXNlLWluLW91dCA0IGFsdGVybmF0ZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBnbG93IDAuNXMgZWFzZS1pbi1vdXQgNCBhbHRlcm5hdGU7XFxuICBhbmltYXRpb246IGdsb3cgMC41cyBlYXNlLWluLW91dCA0IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBnbG93IHtcXG4gIGZyb20ge1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzg0Y2MxNiwgMCAwIDE1cHggIzg0Y2MxNiwgMCAwIDIwcHggIzg0Y2MxNjtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2JlZjI2NCwgMCAwIDRweCAjYTNlNjM1LCAwIDAgOHB4ICNhM2U2MzUsXFxuICAgICAgMCAwIDEwcHggI2EzZTYzNSwgMCAwIDIwcHggI2EzZTYzNSwgMCAwIDQwcHggI2EzZTYzNSwgMCAwIDYwcHggI2EzZTYzNTtcXG4gIH1cXG59XFxuXFxuLnNoaXA6bm90KC5jb21wdXRlciksXFxuLmhpdCxcXG4ubWlzc2VkLFxcbi5wbGFjZW1lbnQtbG9jYXRpb24ge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmdyaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMjMwLCA1MywgMC41KTtcXG59XFxuLnNoaXA6bm90KC5jb21wdXRlcikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjM2FlZDtcXG59XFxuXFxuLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wbGFjZW1lbnQtbG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjM2FlZDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICNmZmY7XFxufVxcblxcbi5zcGFjZSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBjZW50ZXIgLyAyMDBweCAyMDBweCByb3VuZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBrZXlmcmFtZXMgc3BhY2Uge1xcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxufVxcblxcbi5zdGFyczEge1xcbiAgYW5pbWF0aW9uOiBzcGFjZSAxODBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIDFweCAxcHggYXQgMjVweCA1cHgsXFxuICAgICAgd2hpdGUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgICApLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA1MHB4IDI1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMTI1cHggMjBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgNTBweCA3NXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDE1cHggMTI1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNXB4IDIuNXB4IGF0IDExMHB4IDgwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zdGFyczIge1xcbiAgYW5pbWF0aW9uOiBzcGFjZSAyNDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIDFweCAxcHggYXQgNzVweCAxMjVweCxcXG4gICAgICB3aGl0ZSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICAgICksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDEwMHB4IDc1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDE5OXB4IDEwMHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDIwcHggNTBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi41cHggMi41cHggYXQgMTAwcHggNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjVweCAyLjVweCBhdCA1cHggNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc3RhcnMzIHtcXG4gIGFuaW1hdGlvbjogc3BhY2UgMzAwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICAxcHggMXB4IGF0IDEwcHggMTBweCxcXG4gICAgICB3aGl0ZSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICAgICksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDE1MHB4IDE1MHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCA2MHB4IDE3MHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCAxNzVweCAxODBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAxOTVweCA5NXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjVweCAyLjVweCBhdCA5NXB4IDE0NXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gIC5nYW1lYm9hcmQtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLmNvbXB1dGVyLXNlY3Rpb246aGFzKC5hZGQtc2hpcC1jb250YWluZXIpIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmdhbWUtaGVhZGVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMXB4ICNhM2U2MzUsIDAgMCA0MnB4ICM4NGNjMTYsIDAgMCA4NHB4ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gIH1cXG4gIC5nYW1lYm9hcmQtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLmFkZC1zaGlwLWNvbnRhaW5lciBsYWJlbCxcXG4gIC5hZGQtc2hpcC1wcm9tcHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5idG5zLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xcbiAgfVxcblxcbiAgLmFkZC1zaGlwLWNvbnRhaW5lcixcXG4gIC5nYW1lYm9hcmQge1xcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDYwJSwgNzAwcHgpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBK0I7QUFDakM7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCOztFQUU3QixpRUFBaUU7RUFDakUsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Q7eURBQ3VEO0VBQ3ZELGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQjtvQkFDa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGlFQUFpRTtFQUNqRSxrQkFBa0I7RUFDbEIsb0RBQW9EO0VBQ3BELGlEQUFpRDtFQUNqRCw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRTtJQUNFLGlFQUFpRTtFQUNuRTtFQUNBO0lBQ0U7NEVBQ3dFO0VBQzFFO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsU0FBUztFQUNULE9BQU87RUFDUCxlQUFlO0VBQ2YsUUFBUTtFQUNSLE1BQU07RUFDTixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQzs7Ozs7Ozs7OzZFQVMyRTtFQUMzRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBDQUEwQztFQUMxQzs7Ozs7Ozs7OzBFQVN3RTtFQUN4RSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBDQUEwQztFQUMxQzs7Ozs7Ozs7OzZFQVMyRTtFQUMzRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLDhEQUE4RDtJQUM5RCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLCtCQUErQjtFQUNqQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3BhY2UtZm9udDtcXG4gIHNyYzogdXJsKC4vU3BhY2UtR2FtZS1Gb250Lm90Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90LWZvbnQ7XFxuICBzcmM6IHVybCguL0NsYXNzaWMtUm9ib3QtRm9udC50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIG5hdnkgMCwgYmxhY2sgMTAwJSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmFkZC1zaGlwLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgcm93LWdhcDogMTZweDtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgNDUlLCA3MDBweCk7XFxuICBjb2xvcjogI2Q5Zjk5ZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb21wdXRlci1zZWN0aW9uOmhhcyguYWRkLXNoaXAtY29udGFpbmVyKSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hZGQtc2hpcC1wcm9tcHQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNuZXdfZGlyZWN0aW9uX2Zvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQsIDFmcjtcXG59XFxuXFxuI2RpcmVjdGlvbiB7XFxuICBjb2xvcjogI2JlZjI2NDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwIDAgN3B4ICNhM2U2MzU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jZGlyZWN0aW9uIG9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC1zaGlwLWNvbnRhaW5lciBidXR0b24ge1xcbiAgY29sb3I6ICNiZWYyNjQ7XFxuICBib3gtc2hhZG93OiAwIDAgN3B4ICNhM2U2MzUsIDAgMCAxNXB4ICNhM2U2MzU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuLmFkZC1zaGlwLWNvbnRhaW5lciBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmJ0bnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMThweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmdhbWUtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBzcGFjZS1mb250LCBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjYTNlNjM1O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA3cHggI2EzZTYzNSwgMCAwIDE1cHggI2EzZTYzNSwgMCAwIDIxcHggI2EzZTYzNSxcXG4gICAgMCAwIDQycHggIzg0Y2MxNiwgMCAwIDg0cHggIzg0Y2MxNiwgMCAwIDEwMnB4ICM4NGNjMTY7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXNlY3Rpb24ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLmNvbXB1dGVyLXNlY3Rpb24sXFxuLnBsYXllci1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5nYW1lYm9hcmQtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjYTNlNjM1O1xcbiAgZm9udC1mYW1pbHk6IHJvYm90LWZvbnQsIFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDQ1JSwgNzAwcHgpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjYTNlNjM1LCAwIDAgN3B4ICNhM2U2MzUsIDAgMCAxMHB4ICNlY2ZjY2IsXFxuICAgIDAgMCAxNXB4ICNlY2ZjY2I7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdyaWQge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg0Y2MxNjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcGFkZGluZy10b3A6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmFkZC1zaGlwLXByb21wdCxcXG5sYWJlbCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjODRjYzE2LCAwIDAgMTVweCAjODRjYzE2LCAwIDAgMjBweCAjODRjYzE2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGdsb3cgMC41cyBlYXNlLWluLW91dCA0IGFsdGVybmF0ZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBnbG93IDAuNXMgZWFzZS1pbi1vdXQgNCBhbHRlcm5hdGU7XFxuICBhbmltYXRpb246IGdsb3cgMC41cyBlYXNlLWluLW91dCA0IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBnbG93IHtcXG4gIGZyb20ge1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzg0Y2MxNiwgMCAwIDE1cHggIzg0Y2MxNiwgMCAwIDIwcHggIzg0Y2MxNjtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2JlZjI2NCwgMCAwIDRweCAjYTNlNjM1LCAwIDAgOHB4ICNhM2U2MzUsXFxuICAgICAgMCAwIDEwcHggI2EzZTYzNSwgMCAwIDIwcHggI2EzZTYzNSwgMCAwIDQwcHggI2EzZTYzNSwgMCAwIDYwcHggI2EzZTYzNTtcXG4gIH1cXG59XFxuXFxuLnNoaXA6bm90KC5jb21wdXRlciksXFxuLmhpdCxcXG4ubWlzc2VkLFxcbi5wbGFjZW1lbnQtbG9jYXRpb24ge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmdyaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMjMwLCA1MywgMC41KTtcXG59XFxuLnNoaXA6bm90KC5jb21wdXRlcikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjM2FlZDtcXG59XFxuXFxuLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wbGFjZW1lbnQtbG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjM2FlZDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICNmZmY7XFxufVxcblxcbi5zcGFjZSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBjZW50ZXIgLyAyMDBweCAyMDBweCByb3VuZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBrZXlmcmFtZXMgc3BhY2Uge1xcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxufVxcblxcbi5zdGFyczEge1xcbiAgYW5pbWF0aW9uOiBzcGFjZSAxODBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIDFweCAxcHggYXQgMjVweCA1cHgsXFxuICAgICAgd2hpdGUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgICApLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA1MHB4IDI1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMTI1cHggMjBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgNTBweCA3NXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDE1cHggMTI1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNXB4IDIuNXB4IGF0IDExMHB4IDgwcHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zdGFyczIge1xcbiAgYW5pbWF0aW9uOiBzcGFjZSAyNDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIDFweCAxcHggYXQgNzVweCAxMjVweCxcXG4gICAgICB3aGl0ZSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICAgICksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDEwMHB4IDc1cHgsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDE5OXB4IDEwMHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDIwcHggNTBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi41cHggMi41cHggYXQgMTAwcHggNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjVweCAyLjVweCBhdCA1cHggNXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc3RhcnMzIHtcXG4gIGFuaW1hdGlvbjogc3BhY2UgMzAwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICAxcHggMXB4IGF0IDEwcHggMTBweCxcXG4gICAgICB3aGl0ZSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICAgICksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDE1MHB4IDE1MHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCA2MHB4IDE3MHB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCAxNzVweCAxODBweCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAxOTVweCA5NXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjVweCAyLjVweCBhdCA5NXB4IDE0NXB4LCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gIC5nYW1lYm9hcmQtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLmNvbXB1dGVyLXNlY3Rpb246aGFzKC5hZGQtc2hpcC1jb250YWluZXIpIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmdhbWUtaGVhZGVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMXB4ICNhM2U2MzUsIDAgMCA0MnB4ICM4NGNjMTYsIDAgMCA4NHB4ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gIH1cXG4gIC5nYW1lYm9hcmQtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLmFkZC1zaGlwLWNvbnRhaW5lciBsYWJlbCxcXG4gIC5hZGQtc2hpcC1wcm9tcHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5idG5zLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xcbiAgfVxcblxcbiAgLmFkZC1zaGlwLWNvbnRhaW5lcixcXG4gIC5nYW1lYm9hcmQge1xcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDYwJSwgNzAwcHgpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmVtb3ZlQWxsQ2hpbGROb2RlcyA9IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyR2FtZSA9IGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzSW5HYW1lU2VjdGlvbnMoKSB7XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItc2VjdGlvblwiKSk7XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1zZWN0aW9uXCIpKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlCb2FyZCA9IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJHYW1lQm9hcmQocGxheWVyKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IHBsYXllci5nYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgY29uc3QgZ2FtZWJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdhbWVib2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gICAgICBncmlkLnNldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1pZFwiLCBgJHtpfSwke2p9YCk7XG5cbiAgICAgIGlmIChnYW1lYm9hcmRbaV1bal0gIT0gbnVsbCkge1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaGl0U2hvdHMuaW5jbHVkZXMoYCR7aX0sJHtqfWApKSB7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLm1pc3NlZFNob3RzLmluY2x1ZGVzKGAke2l9LCR7an1gKSkge1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXJcIik7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgfVxuICAgIGdhbWVib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuXG4gIHJldHVybiBnYW1lYm9hcmRFbGVtZW50O1xufTtcblxuY29uc3QgZGlzcGxheUdhbWUgPSBmdW5jdGlvbiBkaXNwbGF5VGhlR2FtZShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1zZWN0aW9uXCIpO1xuICBjb25zdCBjb21wdXRlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgcGxheWVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmQtaGVhZGVyXCIpO1xuICBwbGF5ZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIllvdXIgRmxlZXRcIjtcblxuICBjb25zdCBjb21wdXRlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmQtaGVhZGVyXCIpO1xuICBjb21wdXRlckhlYWRlci50ZXh0Q29udGVudCA9IFwiRW5lbXkncyBGbGVldFwiO1xuXG4gIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVySGVhZGVyKTtcbiAgcGxheWVyU2VjdGlvbi5hcHBlbmRDaGlsZChkaXNwbGF5Qm9hcmQocGxheWVyMSkpO1xuXG4gIGlmICghcGxheWVyMikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb21wdXRlclNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tcHV0ZXJIZWFkZXIpO1xuICBjb21wdXRlclNlY3Rpb24uYXBwZW5kQ2hpbGQoZGlzcGxheUJvYXJkKHBsYXllcjIpKTtcbn07XG5cbmNvbnN0IGxvY2F0aW9uUHJvbXB0ID0gZnVuY3Rpb24gcHJvbXB0VXNlckZvckxvY2F0aW9uUGxhY2VtZW50KHNoaXBUeXBlKSB7XG4gIGNvbnN0IGFkZFNoaXBQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRTaGlwUHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJhZGQtc2hpcC1wcm9tcHRcIik7XG5cbiAgYWRkU2hpcFByb21wdC50ZXh0Q29udGVudCA9IGBDaG9vc2UgJHtzaGlwVHlwZVswXX0gbG9jYXRpb24gKGxlbmd0aCAke3NoaXBUeXBlWzFdfSlgO1xuXG4gIHJldHVybiBhZGRTaGlwUHJvbXB0O1xufTtcblxuY29uc3QgZGlzcGxheURpcmVjdGlvbkZvcm0gPVxuICBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5VGhlRGlyZWN0aW9uRm9ybUZvclNoaXBQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1TZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGlyZWN0aW9uLWZvcm0tc2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBkaXJlY3Rpb25Gb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICBkaXJlY3Rpb25Gb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgZGlyZWN0aW9uRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld19kaXJlY3Rpb25fZm9ybVwiKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXJlY3Rpb25GaWVsZC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1maWVsZFwiKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRpcmVjdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRpcmVjdGlvblwiKTtcbiAgICBkaXJlY3Rpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGRpcmVjdGlvblxcblwiO1xuICAgIGNvbnN0IGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgZGlyZWN0aW9uU2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGlyZWN0aW9uXCIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbk9wdGlvblJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25SaWdodC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInJpZ2h0XCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvblJpZ2h0LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvblJpZ2h0LnRleHRDb250ZW50ID0gXCJSaWdodFwiO1xuICAgIGNvbnN0IGRpcmVjdGlvbk9wdGlvbkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvbkxlZnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsZWZ0XCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvbkxlZnQudGV4dENvbnRlbnQgPSBcIkxlZnRcIjtcbiAgICBjb25zdCBkaXJlY3Rpb25PcHRpb25Eb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25Eb3duLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZG93blwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25Eb3duLnRleHRDb250ZW50ID0gXCJEb3duXCI7XG4gICAgY29uc3QgZGlyZWN0aW9uT3B0aW9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvblVwLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwidXBcIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uVXAudGV4dENvbnRlbnQgPSBcIlVwXCI7XG4gICAgZGlyZWN0aW9uU2VsZWN0LmFwcGVuZENoaWxkKGRpcmVjdGlvbk9wdGlvblJpZ2h0KTtcbiAgICBkaXJlY3Rpb25TZWxlY3QuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uT3B0aW9uTGVmdCk7XG4gICAgZGlyZWN0aW9uU2VsZWN0LmFwcGVuZENoaWxkKGRpcmVjdGlvbk9wdGlvbkRvd24pO1xuICAgIGRpcmVjdGlvblNlbGVjdC5hcHBlbmRDaGlsZChkaXJlY3Rpb25PcHRpb25VcCk7XG4gICAgZGlyZWN0aW9uRmllbGQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uTGFiZWwpO1xuICAgIGRpcmVjdGlvbkZpZWxkLmFwcGVuZENoaWxkKGRpcmVjdGlvblNlbGVjdCk7XG4gICAgZGlyZWN0aW9uRm9ybS5hcHBlbmRDaGlsZChkaXJlY3Rpb25GaWVsZCk7XG5cbiAgICBjb25zdCBidG5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG5zLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmFuZG9tQnRuLmNsYXNzTGlzdC5hZGQoXCJyYW5kb20tZm9ybS1idG5cIik7XG4gICAgcmFuZG9tQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgcmFuZG9tQnRuLnRleHRDb250ZW50ID0gXCJSYW5kb21cIjtcbiAgICBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWZvcm0tYnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgYnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZGlyZWN0aW9uRm9ybS5hcHBlbmRDaGlsZChidG5zQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBkaXJlY3Rpb25Gb3JtO1xuICB9O1xuXG5jb25zdCBmb3JtYXRTaGlwQ2hvaWNlR3JpZHMgPSBmdW5jdGlvbiBmb3JtYXRHcmlkc1RvUnVuR2FtZSgpIHtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZFwiKTtcbiAgZ3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT5cbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50LWxvY2F0aW9uXCIpO1xuICAgICAgY291bnRlcisrO1xuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBkaXNwbGF5Q2hvb3NlU2hpcCA9IGZ1bmN0aW9uIGdldFNoaXBQbGFjZW1lbnRGcm9tVXNlcihcbiAgcGxheWVyMSxcbiAgc2hpcFR5cGVzXG4pIHtcbiAgY29uc3QgcGxhY2VTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxhY2VTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhZGQtc2hpcC1jb250YWluZXJcIik7XG5cbiAgZGlzcGxheUdhbWUocGxheWVyMSk7XG4gIGZvcm1hdFNoaXBDaG9pY2VHcmlkcyhwbGF5ZXIxKTtcbiAgcGxhY2VTaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGxvY2F0aW9uUHJvbXB0KHNoaXBUeXBlc1tzaGlwVHlwZXMubGVuZ3RoIC0gMV0pXG4gICk7XG4gIHBsYWNlU2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5RGlyZWN0aW9uRm9ybSgpKTtcblxuICBjb25zdCBjb21wdXRlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLXNlY3Rpb25cIik7XG4gIGNvbXB1dGVyU2VjdGlvbi5hcHBlbmRDaGlsZChwbGFjZVNoaXBDb250YWluZXIpO1xufTtcblxuY29uc3QgZGlzcGxheVdpbm5lciA9IGZ1bmN0aW9uIGRpc3BsYXlUaGVHaXZlblBsYXllck9iakFzV2lubmVyKHBsYXllcikge1xuICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5uZXIuY2xhc3NMaXN0LmFkZChcIndpbm5lci1oZWFkZXJcIik7XG5cbiAgaWYgKHBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gXCJDb21wdXRlciB3aW5zIVwiO1xuICB9IGVsc2Uge1xuICAgIHdpbm5lci50ZXh0Q29udGVudCA9IFwiWW91IHdvbiFcIjtcbiAgfVxuXG4gIGNvbnN0IGdhbWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtaGVhZGVyXCIpO1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGdhbWVIZWFkZXIpO1xuICBnYW1lSGVhZGVyLmFwcGVuZENoaWxkKHdpbm5lcik7XG59O1xuXG5leHBvcnQge1xuICBkaXNwbGF5R2FtZSxcbiAgY2xlYXJHYW1lLFxuICBkaXNwbGF5V2lubmVyLFxuICBkaXNwbGF5Q2hvb3NlU2hpcCxcbiAgbG9jYXRpb25Qcm9tcHQsXG59O1xuIiwiY29uc3Qgc2V0QXR0YWNrID0gZnVuY3Rpb24gc2V0QXR0YWNrT25FbmVteUdhbWVib2FyZChncmlkSWQsIHBsYXllcjEsIHBsYXllcjIpIHtcbiAgY29uc3QgY29sID0gZ3JpZElkLnNwbGl0KFwiLFwiKVswXTtcbiAgY29uc3Qgcm93ID0gZ3JpZElkLnNwbGl0KFwiLFwiKVsxXTtcbiAgcGxheWVyMS5hdHRhY2socGxheWVyMiwgY29sLCByb3cpO1xufTtcblxuY29uc3QgY2hlY2tGb3JXaW5uZXIgPSBmdW5jdGlvbiBjaGVja0lmQVBsYXllcldvbihwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGlmIChwbGF5ZXIyLmdhbWVib2FyZC5hcmVBbGxTdW5rKCkpIHtcbiAgICByZXR1cm4gcGxheWVyMTtcbiAgfVxuICBpZiAocGxheWVyMS5nYW1lYm9hcmQuYXJlQWxsU3VuaygpKSB7XG4gICAgcmV0dXJuIHBsYXllcjI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHsgc2V0QXR0YWNrLCBjaGVja0Zvcldpbm5lciB9O1xuIiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGdhbWVib2FyZDtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3Qgc2hpcFZhbGlkaXR5ID0gW107XG5cbiAgY29uc3Qgd2FzTmV3U2hpcFZhbGlkID0gKCkgPT4gc2hpcFZhbGlkaXR5W3NoaXBWYWxpZGl0eS5sZW5ndGggLSAxXTtcblxuICBjb25zdCBwb3B1bGF0ZVNoaXBzR3JpZHMgPSAoc2hpcENvb3Jkcywgc2hpcCkgPT4ge1xuICAgIHNoaXBDb29yZHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgW2NvbCwgcm93XSA9IGVsZW1lbnQuc3BsaXQoXCIsXCIpO1xuICAgICAgZ2FtZWJvYXJkW2NvbF1bcm93XSA9IHNoaXA7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gY2hlY2sgaWYgbmV3U2hpcEluZm8gbWF0Y2hlcyBhbnkgb3RoZXIgc2hpcHMgY29vcmRzXG4gIGNvbnN0IGNoZWNrTmV3U2hpcFZhbGlkaXR5ID0gKG5ld1NoaXBJbmZvKSA9PiB7XG4gICAgY29uc3QgZm91bmRPdmVybGFwID0gc2hpcHMuc29tZSgoc2hpcCkgPT5cbiAgICAgIHNoaXAuc29tZSgoY29vcmQpID0+IG5ld1NoaXBJbmZvLmluY2x1ZGVzKGNvb3JkKSlcbiAgICApO1xuXG4gICAgY29uc3QgZm91bmRPdXRPZkJvdW5kcyA9IG5ld1NoaXBJbmZvLnNvbWUoKGNvb3JkcykgPT4ge1xuICAgICAgY29uc3QgW2NvbCwgcm93XSA9IGNvb3Jkcy5zcGxpdChcIixcIik7XG4gICAgICBpZiAoY29sID4gOSB8fCBjb2wgPCAwIHx8IHJvdyA+IDkgfHwgcm93IDwgMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChmb3VuZE92ZXJsYXAgfHwgZm91bmRPdXRPZkJvdW5kcykge1xuICAgICAgc2hpcFZhbGlkaXR5LnB1c2goZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNoaXBWYWxpZGl0eS5wdXNoKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb2wsIHJvdywgZGlyZWN0aW9uLCBzaGlwKSA9PiB7XG4gICAgY29uc3QgbmV3U2hpcEluZm8gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgbmV3U2hpcEluZm8ucHVzaChgJHtjb2x9LCR7cm93IC0gaX1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICBuZXdTaGlwSW5mby5wdXNoKGAke2NvbH0sJHtyb3cgKyBpfWApO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgbmV3U2hpcEluZm8ucHVzaChgJHtjb2wgLSBpfSwke3Jvd31gKTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICBuZXdTaGlwSW5mby5wdXNoKGAke2NvbCArIGl9LCR7cm93fWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrTmV3U2hpcFZhbGlkaXR5KG5ld1NoaXBJbmZvKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gd2FzTmV3U2hpcFZhbGlkKCk7XG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvcHVsYXRlU2hpcHNHcmlkcyhuZXdTaGlwSW5mby5zbGljZSgwKSwgc2hpcCk7XG4gICAgbmV3U2hpcEluZm8ucHVzaChzaGlwKTtcbiAgICBzaGlwcy5wdXNoKG5ld1NoaXBJbmZvKTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgYSBtaXgvbWF4XG4gIGNvbnN0IHJhbmRvbUludCA9IGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShzZXRNaW4sIHNldE1heCkge1xuICAgIGNvbnN0IG1pbiA9IE1hdGguY2VpbChzZXRNaW4pO1xuICAgIGNvbnN0IG1heCA9IE1hdGguZmxvb3Ioc2V0TWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVJhbmRvbVNoaXAgPSBmdW5jdGlvbiBwbGFjZVJhbmRvbVZhbGlkU2hpcChzaGlwKSB7XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcImxlZnRcIiwgXCJyaWdodFwiLCBcInVwXCIsIFwiZG93blwiXTtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0cnVlO1xuXG4gICAgd2hpbGUgKGNvbmRpdGlvbikge1xuICAgICAgcGxhY2VTaGlwKFxuICAgICAgICByYW5kb21JbnQoMCwgOSksXG4gICAgICAgIHJhbmRvbUludCgwLCA5KSxcbiAgICAgICAgZGlyZWN0aW9uc1tyYW5kb21JbnQoMCwgMyldLFxuICAgICAgICBzaGlwXG4gICAgICApO1xuICAgICAgY29uc3QgaXNWYWxpZCA9IHdhc05ld1NoaXBWYWxpZCgpO1xuICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gW107XG4gIGNvbnN0IGhpdFNob3RzID0gW107XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3QgeFBsdXNZID0gYCR7eH0sJHt5fWA7XG4gICAgbGV0IGhpdFBvc2l0aW9uO1xuICAgIGxldCBkaWRJdEhpdDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhpdFBvc2l0aW9uID0gc2hpcHNbaV0uZmluZEluZGV4KChjb29yZGluYXRlcykgPT4gY29vcmRpbmF0ZXMgPT09IHhQbHVzWSk7XG4gICAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldICE9IG51bGwpIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3ldLmhpdChoaXRQb3NpdGlvbik7XG4gICAgICAgIGRpZEl0SGl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpZEl0SGl0KSB7XG4gICAgICBoaXRTaG90cy5wdXNoKHhQbHVzWSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWlzc2VkU2hvdHMucHVzaCh4UGx1c1kpO1xuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFN1bmsgPSAoKSA9PlxuICAgIHNoaXBzLnNsaWNlKDApLmV2ZXJ5KChzaGlwKSA9PiBzaGlwW3NoaXAubGVuZ3RoIC0gMV0uaXNTdW5rKCkpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgbWlzc2VkU2hvdHMsXG4gICAgaGl0U2hvdHMsXG4gICAgYXJlQWxsU3VuayxcbiAgICB3YXNOZXdTaGlwVmFsaWQsXG4gICAgcGxhY2VSYW5kb21TaGlwLFxuICAgIHNoaXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8vIEhlbHBlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gYW5kIGluY2x1ZGluZyBhIG1peC9tYXhcbmNvbnN0IHJhbmRvbUludCA9IGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZSgpIHtcbiAgY29uc3Qgc2V0TWluID0gMDtcbiAgY29uc3Qgc2V0TWF4ID0gOTtcbiAgY29uc3QgbWluID0gTWF0aC5jZWlsKHNldE1pbik7XG4gIGNvbnN0IG1heCA9IE1hdGguZmxvb3Ioc2V0TWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG5jb25zdCByYW5kb21BdHRhY2sgPSBmdW5jdGlvbiBjcmVhdGVSYW5kb21VbnVzZWRBdHRhY2tDaG9pY2UoYXR0YWNrc01hZGUpIHtcbiAgaWYgKGF0dGFja3NNYWRlLmxlbmd0aCA9PT0gMTAwKSB7XG4gICAgcmV0dXJuIFswLCAwXTtcbiAgfVxuICBsZXQgZm91bmRVc2VkQXR0YWNrID0gdHJ1ZTtcbiAgd2hpbGUgKGZvdW5kVXNlZEF0dGFjaykge1xuICAgIGNvbnN0IGNvbXBYID0gcmFuZG9tSW50KCk7XG4gICAgY29uc3QgY29tcFkgPSByYW5kb21JbnQoKTtcbiAgICBpZiAoIWF0dGFja3NNYWRlLmluY2x1ZGVzKGAke2NvbXBYfSwke2NvbXBZfWApKSB7XG4gICAgICBmb3VuZFVzZWRBdHRhY2sgPSBmYWxzZTtcbiAgICAgIGF0dGFja3NNYWRlLnB1c2goYCR7Y29tcFh9LCR7Y29tcFl9YCk7XG4gICAgICByZXR1cm4gW2NvbXBYLCBjb21wWV07XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn07XG5cbmNvbnN0IFBsYXllciA9IChnYW1lYm9hcmQsIGlzQ29tcHV0ZXIpID0+IHtcbiAgY29uc3QgYXR0YWNrc01hZGUgPSBbXTtcbiAgY29uc3QgYXR0YWNrID0gKGVuZW15LCB4LCB5KSA9PiB7XG4gICAgaWYgKGlzQ29tcHV0ZXIpIHtcbiAgICAgIFt4LCB5XSA9IHJhbmRvbUF0dGFjayhhdHRhY2tzTWFkZSk7XG4gICAgfVxuICAgIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9O1xuICByZXR1cm4geyBnYW1lYm9hcmQsIGF0dGFjaywgYXR0YWNrc01hZGUsIGlzQ29tcHV0ZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGRhbWFnZWQgPSBbXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gIF0uc2xpY2UoMCwgbGVuZ3RoKTtcbiAgY29uc3QgaGl0ID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgZGFtYWdlZFtsb2NhdGlvbl0gPSB0cnVlO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBkYW1hZ2VkLmV2ZXJ5KChsb2NhdGlvbikgPT4gbG9jYXRpb24gPT09IHRydWUpO1xuXG4gIHJldHVybiB7IGxlbmd0aCwgZGFtYWdlZCwgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXItbWFuYWdlclwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmQtbWFuYWdlclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcC1tYW5hZ2VyXCI7XG5pbXBvcnQge1xuICBkaXNwbGF5R2FtZSxcbiAgY2xlYXJHYW1lLFxuICBkaXNwbGF5V2lubmVyLFxuICBkaXNwbGF5Q2hvb3NlU2hpcCxcbn0gZnJvbSBcIi4vZG9tLW1hbmFnZXJcIjtcbmltcG9ydCB7IHNldEF0dGFjaywgY2hlY2tGb3JXaW5uZXIgfSBmcm9tIFwiLi9nYW1lLW1hbmFnZXJcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBzaGlwVHlwZXMgPSBbXG4gIFtcIlBhdHJvbCBCb2F0XCIsIDJdLFxuICBbXCJTdWJtYXJpbmVcIiwgM10sXG4gIFtcIkRlc3Ryb3llclwiLCAzXSxcbiAgW1wiQmF0dGxlc2hpcFwiLCA0XSxcbiAgW1wiQ2FycmllclwiLCA1XSxcbl07XG5cbmNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKEdhbWVib2FyZCgpKTtcbmNvbnN0IGNvbXB1dGVyUGxheWVyID0gUGxheWVyKEdhbWVib2FyZCgpLCB0cnVlKTtcblxuY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUmFuZG9tU2hpcChTaGlwKDUpKTtcbmNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVJhbmRvbVNoaXAoU2hpcCg0KSk7XG5jb21wdXRlclBsYXllci5nYW1lYm9hcmQucGxhY2VSYW5kb21TaGlwKFNoaXAoMykpO1xuY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUmFuZG9tU2hpcChTaGlwKDMpKTtcbmNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVJhbmRvbVNoaXAoU2hpcCgyKSk7XG5cbmNvbnN0IGZvcm1hdEdyaWRzID0gZnVuY3Rpb24gZm9ybWF0R3JpZHNUb1J1bkdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXJcIik7XG4gIGdyaWRzLmZvckVhY2goKGdyaWQpID0+XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZ3JpZElkID0gZ3JpZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtaWRcIik7XG4gICAgICBzZXRBdHRhY2soZ3JpZElkLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgIHBsYXllcjIuYXR0YWNrKHBsYXllcjEpO1xuXG4gICAgICBjbGVhckdhbWUocGxheWVyMSwgcGxheWVyMik7XG4gICAgICBkaXNwbGF5R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKTtcblxuICAgICAgaWYgKGNoZWNrRm9yV2lubmVyKHBsYXllcjEsIHBsYXllcjIpKSB7XG4gICAgICAgIGRpc3BsYXlXaW5uZXIoY2hlY2tGb3JXaW5uZXIocGxheWVyMSwgcGxheWVyMikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvcm1hdEdyaWRzKHBsYXllcjEsIHBsYXllcjIpO1xuICAgIH0pXG4gICk7XG59O1xuY29uc3QgY2hvb3NlU2hpcHMgPSBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5UGxheWVyU2hpcENob29zaW5nKCkge1xuICBkaXNwbGF5Q2hvb3NlU2hpcChodW1hblBsYXllciwgc2hpcFR5cGVzKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgZm9ybWF0U3VibWl0QnRuKGh1bWFuUGxheWVyKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGZvcm1hdFJhbmRvbUJ0bihodW1hblBsYXllcik7XG59O1xuXG5jb25zdCBmb3JtYXRTdWJtaXRCdG4gPSBmdW5jdGlvbiBmb3JtYXRzRGlyZWN0aW9uU3VibWl0QnV0dG9uKHBsYXllcikge1xuICBjb25zdCBzdWJtaXRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtZm9ybS1idG5cIik7XG4gIHN1Ym1pdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2VtZW50LWxvY2F0aW9uXCIpO1xuICAgIGNvbnN0IGdyaWRJZCA9IGxvY2F0aW9uLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1pZFwiKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvblNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXJlY3Rpb25cIik7XG4gICAgY29uc3QgZGlyZWN0aW9uQ2hvaWNlID1cbiAgICAgIGRpcmVjdGlvblNlbGVjdGVkLm9wdGlvbnNbZGlyZWN0aW9uU2VsZWN0ZWQuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICBjb25zdCBjb29yZHMgPSBncmlkSWQuc3BsaXQoXCIsXCIpO1xuXG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICArY29vcmRzWzBdLFxuICAgICAgK2Nvb3Jkc1sxXSxcbiAgICAgIGRpcmVjdGlvbkNob2ljZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgU2hpcChzaGlwVHlwZXNbc2hpcFR5cGVzLmxlbmd0aCAtIDFdWzFdKVxuICAgICk7XG5cbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC53YXNOZXdTaGlwVmFsaWQoKSkge1xuICAgICAgc2hpcFR5cGVzLnBvcCgpO1xuICAgIH1cbiAgICBjbGVhckdhbWUoKTtcbiAgICBpZiAoc2hpcFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGlzcGxheUdhbWUoaHVtYW5QbGF5ZXIsIGNvbXB1dGVyUGxheWVyKTtcbiAgICAgIGZvcm1hdEdyaWRzKGh1bWFuUGxheWVyLCBjb21wdXRlclBsYXllcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hvb3NlU2hpcHMoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb3JtYXRSYW5kb21CdG4gPSBmdW5jdGlvbiByYW5kb21CdG5XaWxsUGxhY2VTaGlwUmFuZG9tbHkocGxheWVyKSB7XG4gIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9tLWZvcm0tYnRuXCIpO1xuICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUmFuZG9tU2hpcChTaGlwKHNoaXBUeXBlc1tzaGlwVHlwZXMubGVuZ3RoIC0gMV1bMV0pKTtcbiAgICBzaGlwVHlwZXMucG9wKCk7XG4gICAgY2xlYXJHYW1lKCk7XG4gICAgaWYgKHNoaXBUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRpc3BsYXlHYW1lKGh1bWFuUGxheWVyLCBjb21wdXRlclBsYXllcik7XG4gICAgICBmb3JtYXRHcmlkcyhodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNob29zZVNoaXBzKCk7XG4gIH0pO1xufTtcblxuY2hvb3NlU2hpcHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==