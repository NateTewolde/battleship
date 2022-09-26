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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: lavender;\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n.game-header {\n  display: flex;\n  justify-content: center;\n  color: #7c3aed;\n  font-size: 4rem;\n  font-weight: 500;\n}\n\n.gameboard-section {\n  display: flex;\n}\n\n.computer-section,\n.player-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100%;\n  padding: 64px;\n}\n\n.gameboard-header {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.gameboard {\n  flex: 1;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 64px;\n  background-color: #c4b5fd;\n}\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid black;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: white;\n  box-sizing: border-box;\n}\n\n.ship {\n  background-color: #7c3aed;\n}\n\n.computer {\n  background-color: white;\n}\n\n.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: #3b82f6;\n}\n\n.placement-location {\n  background-color: limegreen;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,SAAS;EACT,gBAAgB;EAChB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: lavender;\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n.game-header {\n  display: flex;\n  justify-content: center;\n  color: #7c3aed;\n  font-size: 4rem;\n  font-weight: 500;\n}\n\n.gameboard-section {\n  display: flex;\n}\n\n.computer-section,\n.player-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100%;\n  padding: 64px;\n}\n\n.gameboard-header {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.gameboard {\n  flex: 1;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 64px;\n  background-color: #c4b5fd;\n}\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid black;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: white;\n  box-sizing: border-box;\n}\n\n.ship {\n  background-color: #7c3aed;\n}\n\n.computer {\n  background-color: white;\n}\n\n.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: #3b82f6;\n}\n\n.placement-location {\n  background-color: limegreen;\n}\n"],"sourceRoot":""}]);
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
    row.textContent = `${i}`;

    for (let j = 0; j < 10; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.setAttribute("data-grid-id", `${i},${j}`);
      if (i === 0) {
        grid.textContent = `${j}`;
      }

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
  playerHeader.textContent = "Your Board";

  const computerHeader = document.createElement("div");
  computerHeader.classList.add("gameboard-header");
  computerHeader.textContent = "Enemy's Board";

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

  addShipPrompt.textContent = `Choose ${shipType[0]} location (length ${shipType[1]}).`;

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
    directionLabel.textContent = "Ship direction?\n";
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

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-form-btn");
    submitBtn.setAttribute("type", "button");
    submitBtn.textContent = "Submit";
    directionForm.appendChild(submitBtn);
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

  const placeShip = (col, row, direction, ship) => {
    const newShipInfo = [];

    for (let i = 0; i < ship.length; i++) {
      if (direction === "left") {
        gameboard[col][row - i] = ship;
        newShipInfo.push(`${col},${row - i}`);
      }
      if (direction === "right") {
        gameboard[col][row + i] = ship;
        newShipInfo.push(`${col},${row + i}`);
      }
      if (direction === "down") {
        gameboard[col - i][row] = ship;
        newShipInfo.push(`${col - i},${row}`);
      }
      if (direction === "up") {
        gameboard[col + i][row] = ship;
        newShipInfo.push(`${col + i},${row}`);
      }
    }

    newShipInfo.push(ship);
    ships.push(newShipInfo);
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
//  - dont allow ships to overlap:
//    - make it so that Placeship() only gets the coordinates first, then
//    - if the coordinates dont have any matching with any other one in
//    - ships, and it doesnt make it go out of bounds
//    - then it can then go through and add the ship to that grid.
//    - how to validate this tho..
//    - maybe have a isShipValid() array, if its valid it pushes
//    - true, if its not then it pushes false, which dom-manager
//    - or whatever can see that the last entry was false so
//    - the ship is no good. use js form validation
//    - this can also be used to get valid slots.

//    - make computer choose random ship slots
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

computerPlayer.gameboard.placeShip(4, 1, "up", (0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(5));
computerPlayer.gameboard.placeShip(8, 7, "down", (0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(4));
computerPlayer.gameboard.placeShip(0, 8, "left", (0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(3));
computerPlayer.gameboard.placeShip(2, 3, "right", (0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(2));
computerPlayer.gameboard.placeShip(9, 4, "left", (0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(1));

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
    shipTypes.pop();

    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.clearGame)();
    if (shipTypes.length === 0) {
      (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.displayGame)(humanPlayer, computerPlayer);
      formatGrids(humanPlayer, computerPlayer);

      return;
    }

    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.displayChooseShip)(player, shipTypes);
    formatSubmitBtn(player);
  });
};
// Helper function that returns a random number between and including a mix/max
const randomInt = function getRandomIntInclusive() {
  const setMin = 0;
  const setMax = 9;
  const min = Math.ceil(setMin);
  const max = Math.floor(setMax);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomComputerShips = function getRandomValidComputerShips() {
  computerPlayer.gameboard.placeShip(randomInt(), randomInt(), "left", (0,_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])(1));
};

(0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.displayChooseShip)(humanPlayer, shipTypes);
formatSubmitBtn(humanPlayer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCx5REFBSTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVM7QUFDZjs7QUFFQSxNQUFNLHVEQUFTO0FBQ2YsTUFBTSx5REFBVzs7QUFFakIsVUFBVSw2REFBYztBQUN4QixRQUFRLDJEQUFhLENBQUMsNkRBQWM7QUFDcEM7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFJO0FBQ1Y7QUFDQTs7QUFFQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQSxNQUFNLHlEQUFXO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSwrREFBaUI7QUFDckI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUVBQXVFLHlEQUFJO0FBQzNFOztBQUVBLCtEQUFpQjtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXItbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmciAxZnI7XFxufVxcblxcbi5nYW1lLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogIzdjM2FlZDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5nYW1lYm9hcmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29tcHV0ZXItc2VjdGlvbixcXG4ucGxheWVyLXNlY3Rpb24ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNjRweDtcXG59XFxuXFxuLmdhbWVib2FyZC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGI1ZmQ7XFxufVxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdyaWQge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMDtcXG4gIHBhZGRpbmctdG9wOiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzNhZWQ7XFxufVxcblxcbi5jb21wdXRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxufVxcblxcbi5wbGFjZW1lbnQtbG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsU0FBUztFQUNULGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnIgMWZyO1xcbn1cXG5cXG4uZ2FtZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6ICM3YzNhZWQ7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvbXB1dGVyLXNlY3Rpb24sXFxuLnBsYXllci1zZWN0aW9uIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDY0cHg7XFxufVxcblxcbi5nYW1lYm9hcmQtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDY0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRiNWZkO1xcbn1cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ncmlkIHtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2MzYWVkO1xcbn1cXG5cXG4uY29tcHV0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xcbn1cXG5cXG4ucGxhY2VtZW50LWxvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByZW1vdmVBbGxDaGlsZE5vZGVzID0gZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJHYW1lID0gZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHNJbkdhbWVTZWN0aW9ucygpIHtcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1zZWN0aW9uXCIpKTtcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLXNlY3Rpb25cIikpO1xufTtcblxuY29uc3QgZGlzcGxheUJvYXJkID0gZnVuY3Rpb24gZGlzcGxheVBsYXllckdhbWVCb2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBnYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZWJvYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgcm93LnRleHRDb250ZW50ID0gYCR7aX1gO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gICAgICBncmlkLnNldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1pZFwiLCBgJHtpfSwke2p9YCk7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBncmlkLnRleHRDb250ZW50ID0gYCR7an1gO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2FtZWJvYXJkW2ldW2pdICE9IG51bGwpIHtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmhpdFNob3RzLmluY2x1ZGVzKGAke2l9LCR7an1gKSkge1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5taXNzZWRTaG90cy5pbmNsdWRlcyhgJHtpfSwke2p9YCkpIHtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyXCIpO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgICBnYW1lYm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cblxuICByZXR1cm4gZ2FtZWJvYXJkRWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlHYW1lID0gZnVuY3Rpb24gZGlzcGxheVRoZUdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItc2VjdGlvblwiKTtcbiAgY29uc3QgY29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHBsYXllckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkLWhlYWRlclwiKTtcbiAgcGxheWVySGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG5cbiAgY29uc3QgY29tcHV0ZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wdXRlckhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkLWhlYWRlclwiKTtcbiAgY29tcHV0ZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15J3MgQm9hcmRcIjtcblxuICBwbGF5ZXJTZWN0aW9uLmFwcGVuZENoaWxkKHBsYXllckhlYWRlcik7XG4gIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQoZGlzcGxheUJvYXJkKHBsYXllcjEpKTtcblxuICBpZiAoIXBsYXllcjIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNvbXB1dGVySGVhZGVyKTtcbiAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGRpc3BsYXlCb2FyZChwbGF5ZXIyKSk7XG59O1xuXG5jb25zdCBsb2NhdGlvblByb21wdCA9IGZ1bmN0aW9uIHByb21wdFVzZXJGb3JMb2NhdGlvblBsYWNlbWVudChzaGlwVHlwZSkge1xuICBjb25zdCBhZGRTaGlwUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkU2hpcFByb21wdC5jbGFzc0xpc3QuYWRkKFwiYWRkLXNoaXAtcHJvbXB0XCIpO1xuXG4gIGFkZFNoaXBQcm9tcHQudGV4dENvbnRlbnQgPSBgQ2hvb3NlICR7c2hpcFR5cGVbMF19IGxvY2F0aW9uIChsZW5ndGggJHtzaGlwVHlwZVsxXX0pLmA7XG5cbiAgcmV0dXJuIGFkZFNoaXBQcm9tcHQ7XG59O1xuXG5jb25zdCBkaXNwbGF5RGlyZWN0aW9uRm9ybSA9XG4gIGZ1bmN0aW9uIGNyZWF0ZUFuZERpc3BsYXlUaGVEaXJlY3Rpb25Gb3JtRm9yU2hpcFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXJlY3Rpb24tZm9ybS1zZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGRpcmVjdGlvbkZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGRpcmVjdGlvbkZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICBkaXJlY3Rpb25Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3X2RpcmVjdGlvbl9mb3JtXCIpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpcmVjdGlvbkZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWZpZWxkXCIpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGlyZWN0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGlyZWN0aW9uXCIpO1xuICAgIGRpcmVjdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJTaGlwIGRpcmVjdGlvbj9cXG5cIjtcbiAgICBjb25zdCBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGRpcmVjdGlvblNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpcmVjdGlvblwiKTtcbiAgICBjb25zdCBkaXJlY3Rpb25PcHRpb25SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uUmlnaHQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJyaWdodFwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25SaWdodC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25SaWdodC50ZXh0Q29udGVudCA9IFwiUmlnaHRcIjtcbiAgICBjb25zdCBkaXJlY3Rpb25PcHRpb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25MZWZ0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibGVmdFwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25MZWZ0LnRleHRDb250ZW50ID0gXCJMZWZ0XCI7XG4gICAgY29uc3QgZGlyZWN0aW9uT3B0aW9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uRG93bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImRvd25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uRG93bi50ZXh0Q29udGVudCA9IFwiRG93blwiO1xuICAgIGNvbnN0IGRpcmVjdGlvbk9wdGlvblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25VcC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInVwXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvblVwLnRleHRDb250ZW50ID0gXCJVcFwiO1xuICAgIGRpcmVjdGlvblNlbGVjdC5hcHBlbmRDaGlsZChkaXJlY3Rpb25PcHRpb25SaWdodCk7XG4gICAgZGlyZWN0aW9uU2VsZWN0LmFwcGVuZENoaWxkKGRpcmVjdGlvbk9wdGlvbkxlZnQpO1xuICAgIGRpcmVjdGlvblNlbGVjdC5hcHBlbmRDaGlsZChkaXJlY3Rpb25PcHRpb25Eb3duKTtcbiAgICBkaXJlY3Rpb25TZWxlY3QuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uT3B0aW9uVXApO1xuICAgIGRpcmVjdGlvbkZpZWxkLmFwcGVuZENoaWxkKGRpcmVjdGlvbkxhYmVsKTtcbiAgICBkaXJlY3Rpb25GaWVsZC5hcHBlbmRDaGlsZChkaXJlY3Rpb25TZWxlY3QpO1xuICAgIGRpcmVjdGlvbkZvcm0uYXBwZW5kQ2hpbGQoZGlyZWN0aW9uRmllbGQpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1mb3JtLWJ0blwiKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIGRpcmVjdGlvbkZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICByZXR1cm4gZGlyZWN0aW9uRm9ybTtcbiAgfTtcblxuY29uc3QgZm9ybWF0U2hpcENob2ljZUdyaWRzID0gZnVuY3Rpb24gZm9ybWF0R3JpZHNUb1J1bkdhbWUoKSB7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRcIik7XG4gIGdyaWRzLmZvckVhY2goKGdyaWQpID0+XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC1sb2NhdGlvblwiKTtcbiAgICAgIGNvdW50ZXIrKztcbiAgICB9KVxuICApO1xufTtcblxuY29uc3QgZGlzcGxheUNob29zZVNoaXAgPSBmdW5jdGlvbiBnZXRTaGlwUGxhY2VtZW50RnJvbVVzZXIoXG4gIHBsYXllcjEsXG4gIHNoaXBUeXBlc1xuKSB7XG4gIGNvbnN0IHBsYWNlU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYWNlU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLXNoaXAtY29udGFpbmVyXCIpO1xuXG4gIGRpc3BsYXlHYW1lKHBsYXllcjEpO1xuICBmb3JtYXRTaGlwQ2hvaWNlR3JpZHMocGxheWVyMSk7XG4gIHBsYWNlU2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBsb2NhdGlvblByb21wdChzaGlwVHlwZXNbc2hpcFR5cGVzLmxlbmd0aCAtIDFdKVxuICApO1xuICBwbGFjZVNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheURpcmVjdGlvbkZvcm0oKSk7XG5cbiAgY29uc3QgY29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1zZWN0aW9uXCIpO1xuICBjb21wdXRlclNlY3Rpb24uYXBwZW5kQ2hpbGQocGxhY2VTaGlwQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlXaW5uZXIgPSBmdW5jdGlvbiBkaXNwbGF5VGhlR2l2ZW5QbGF5ZXJPYmpBc1dpbm5lcihwbGF5ZXIpIHtcbiAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2lubmVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXItaGVhZGVyXCIpO1xuXG4gIGlmIChwbGF5ZXIuaXNDb21wdXRlcikge1xuICAgIHdpbm5lci50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIgd2lucyFcIjtcbiAgfSBlbHNlIHtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBcIllvdSB3b24hXCI7XG4gIH1cblxuICBjb25zdCBnYW1lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWhlYWRlclwiKTtcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhnYW1lSGVhZGVyKTtcbiAgZ2FtZUhlYWRlci5hcHBlbmRDaGlsZCh3aW5uZXIpO1xufTtcblxuZXhwb3J0IHtcbiAgZGlzcGxheUdhbWUsXG4gIGNsZWFyR2FtZSxcbiAgZGlzcGxheVdpbm5lcixcbiAgZGlzcGxheUNob29zZVNoaXAsXG4gIGxvY2F0aW9uUHJvbXB0LFxufTtcbiIsImNvbnN0IHNldEF0dGFjayA9IGZ1bmN0aW9uIHNldEF0dGFja09uRW5lbXlHYW1lYm9hcmQoZ3JpZElkLCBwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGNvbnN0IGNvbCA9IGdyaWRJZC5zcGxpdChcIixcIilbMF07XG4gIGNvbnN0IHJvdyA9IGdyaWRJZC5zcGxpdChcIixcIilbMV07XG4gIHBsYXllcjEuYXR0YWNrKHBsYXllcjIsIGNvbCwgcm93KTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yV2lubmVyID0gZnVuY3Rpb24gY2hlY2tJZkFQbGF5ZXJXb24ocGxheWVyMSwgcGxheWVyMikge1xuICBpZiAocGxheWVyMi5nYW1lYm9hcmQuYXJlQWxsU3VuaygpKSB7XG4gICAgcmV0dXJuIHBsYXllcjE7XG4gIH1cbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmFyZUFsbFN1bmsoKSkge1xuICAgIHJldHVybiBwbGF5ZXIyO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IHNldEF0dGFjaywgY2hlY2tGb3JXaW5uZXIgfTtcbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvbCwgcm93LCBkaXJlY3Rpb24sIHNoaXApID0+IHtcbiAgICBjb25zdCBuZXdTaGlwSW5mbyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICBnYW1lYm9hcmRbY29sXVtyb3cgLSBpXSA9IHNoaXA7XG4gICAgICAgIG5ld1NoaXBJbmZvLnB1c2goYCR7Y29sfSwke3JvdyAtIGl9YCk7XG4gICAgICB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgZ2FtZWJvYXJkW2NvbF1bcm93ICsgaV0gPSBzaGlwO1xuICAgICAgICBuZXdTaGlwSW5mby5wdXNoKGAke2NvbH0sJHtyb3cgKyBpfWApO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgZ2FtZWJvYXJkW2NvbCAtIGldW3Jvd10gPSBzaGlwO1xuICAgICAgICBuZXdTaGlwSW5mby5wdXNoKGAke2NvbCAtIGl9LCR7cm93fWApO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICAgIGdhbWVib2FyZFtjb2wgKyBpXVtyb3ddID0gc2hpcDtcbiAgICAgICAgbmV3U2hpcEluZm8ucHVzaChgJHtjb2wgKyBpfSwke3Jvd31gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdTaGlwSW5mby5wdXNoKHNoaXApO1xuICAgIHNoaXBzLnB1c2gobmV3U2hpcEluZm8pO1xuICB9O1xuXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gW107XG4gIGNvbnN0IGhpdFNob3RzID0gW107XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3QgeFBsdXNZID0gYCR7eH0sJHt5fWA7XG4gICAgbGV0IGhpdFBvc2l0aW9uO1xuICAgIGxldCBkaWRJdEhpdDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhpdFBvc2l0aW9uID0gc2hpcHNbaV0uZmluZEluZGV4KChjb29yZGluYXRlcykgPT4gY29vcmRpbmF0ZXMgPT09IHhQbHVzWSk7XG4gICAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldICE9IG51bGwpIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3ldLmhpdChoaXRQb3NpdGlvbik7XG4gICAgICAgIGRpZEl0SGl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpZEl0SGl0KSB7XG4gICAgICBoaXRTaG90cy5wdXNoKHhQbHVzWSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWlzc2VkU2hvdHMucHVzaCh4UGx1c1kpO1xuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFN1bmsgPSAoKSA9PlxuICAgIHNoaXBzLnNsaWNlKDApLmV2ZXJ5KChzaGlwKSA9PiBzaGlwW3NoaXAubGVuZ3RoIC0gMV0uaXNTdW5rKCkpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgbWlzc2VkU2hvdHMsXG4gICAgaGl0U2hvdHMsXG4gICAgYXJlQWxsU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vLyBIZWxwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgYSBtaXgvbWF4XG5jb25zdCByYW5kb21JbnQgPSBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUoKSB7XG4gIGNvbnN0IHNldE1pbiA9IDA7XG4gIGNvbnN0IHNldE1heCA9IDk7XG4gIGNvbnN0IG1pbiA9IE1hdGguY2VpbChzZXRNaW4pO1xuICBjb25zdCBtYXggPSBNYXRoLmZsb29yKHNldE1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuY29uc3QgcmFuZG9tQXR0YWNrID0gZnVuY3Rpb24gY3JlYXRlUmFuZG9tVW51c2VkQXR0YWNrQ2hvaWNlKGF0dGFja3NNYWRlKSB7XG4gIGlmIChhdHRhY2tzTWFkZS5sZW5ndGggPT09IDEwMCkge1xuICAgIHJldHVybiBbMCwgMF07XG4gIH1cbiAgbGV0IGZvdW5kVXNlZEF0dGFjayA9IHRydWU7XG4gIHdoaWxlIChmb3VuZFVzZWRBdHRhY2spIHtcbiAgICBjb25zdCBjb21wWCA9IHJhbmRvbUludCgpO1xuICAgIGNvbnN0IGNvbXBZID0gcmFuZG9tSW50KCk7XG4gICAgaWYgKCFhdHRhY2tzTWFkZS5pbmNsdWRlcyhgJHtjb21wWH0sJHtjb21wWX1gKSkge1xuICAgICAgZm91bmRVc2VkQXR0YWNrID0gZmFsc2U7XG4gICAgICBhdHRhY2tzTWFkZS5wdXNoKGAke2NvbXBYfSwke2NvbXBZfWApO1xuICAgICAgcmV0dXJuIFtjb21wWCwgY29tcFldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBQbGF5ZXIgPSAoZ2FtZWJvYXJkLCBpc0NvbXB1dGVyKSA9PiB7XG4gIGNvbnN0IGF0dGFja3NNYWRlID0gW107XG4gIGNvbnN0IGF0dGFjayA9IChlbmVteSwgeCwgeSkgPT4ge1xuICAgIGlmIChpc0NvbXB1dGVyKSB7XG4gICAgICBbeCwgeV0gPSByYW5kb21BdHRhY2soYXR0YWNrc01hZGUpO1xuICAgIH1cbiAgICBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTtcbiAgcmV0dXJuIHsgZ2FtZWJvYXJkLCBhdHRhY2ssIGF0dGFja3NNYWRlLCBpc0NvbXB1dGVyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBkYW1hZ2VkID0gW1xuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICBdLnNsaWNlKDAsIGxlbmd0aCk7XG4gIGNvbnN0IGhpdCA9IChsb2NhdGlvbikgPT4ge1xuICAgIGRhbWFnZWRbbG9jYXRpb25dID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gZGFtYWdlZC5ldmVyeSgobG9jYXRpb24pID0+IGxvY2F0aW9uID09PSB0cnVlKTtcblxuICByZXR1cm4geyBsZW5ndGgsIGRhbWFnZWQsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXItbWFuYWdlclwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmQtbWFuYWdlclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcC1tYW5hZ2VyXCI7XG5pbXBvcnQge1xuICBkaXNwbGF5R2FtZSxcbiAgY2xlYXJHYW1lLFxuICBkaXNwbGF5V2lubmVyLFxuICBkaXNwbGF5Q2hvb3NlU2hpcCxcbn0gZnJvbSBcIi4vZG9tLW1hbmFnZXJcIjtcbmltcG9ydCB7IHNldEF0dGFjaywgY2hlY2tGb3JXaW5uZXIgfSBmcm9tIFwiLi9nYW1lLW1hbmFnZXJcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuXG4vLyBTdGVwcyB0byBmaW5pc2g6XG4vLyAgLSBkb250IGFsbG93IHNoaXBzIHRvIG92ZXJsYXA6XG4vLyAgICAtIG1ha2UgaXQgc28gdGhhdCBQbGFjZXNoaXAoKSBvbmx5IGdldHMgdGhlIGNvb3JkaW5hdGVzIGZpcnN0LCB0aGVuXG4vLyAgICAtIGlmIHRoZSBjb29yZGluYXRlcyBkb250IGhhdmUgYW55IG1hdGNoaW5nIHdpdGggYW55IG90aGVyIG9uZSBpblxuLy8gICAgLSBzaGlwcywgYW5kIGl0IGRvZXNudCBtYWtlIGl0IGdvIG91dCBvZiBib3VuZHNcbi8vICAgIC0gdGhlbiBpdCBjYW4gdGhlbiBnbyB0aHJvdWdoIGFuZCBhZGQgdGhlIHNoaXAgdG8gdGhhdCBncmlkLlxuLy8gICAgLSBob3cgdG8gdmFsaWRhdGUgdGhpcyB0aG8uLlxuLy8gICAgLSBtYXliZSBoYXZlIGEgaXNTaGlwVmFsaWQoKSBhcnJheSwgaWYgaXRzIHZhbGlkIGl0IHB1c2hlc1xuLy8gICAgLSB0cnVlLCBpZiBpdHMgbm90IHRoZW4gaXQgcHVzaGVzIGZhbHNlLCB3aGljaCBkb20tbWFuYWdlclxuLy8gICAgLSBvciB3aGF0ZXZlciBjYW4gc2VlIHRoYXQgdGhlIGxhc3QgZW50cnkgd2FzIGZhbHNlIHNvXG4vLyAgICAtIHRoZSBzaGlwIGlzIG5vIGdvb2QuIHVzZSBqcyBmb3JtIHZhbGlkYXRpb25cbi8vICAgIC0gdGhpcyBjYW4gYWxzbyBiZSB1c2VkIHRvIGdldCB2YWxpZCBzbG90cy5cblxuLy8gICAgLSBtYWtlIGNvbXB1dGVyIGNob29zZSByYW5kb20gc2hpcCBzbG90c1xuLy8gICAgLSBhZGQgbWF4IGdyaWQgc2l6ZXMgaW4gY3NzLCBkZXNpZ24gYW5kIG1ha2UgbG9vayBuaWNlIGJlY2F1c2UgbGFzdCB2YW5pbGxhIEpTIHByb2plY3RcbmNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgW1wiUGF0cm9sIEJvYXRcIiwgMl0sXG4gIFtcIlN1Ym1hcmluZVwiLCAzXSxcbiAgW1wiRGVzdHJveWVyXCIsIDNdLFxuICBbXCJCYXR0bGVzaGlwXCIsIDRdLFxuICBbXCJDYXJyaWVyXCIsIDVdLFxuXTtcblxuY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoR2FtZWJvYXJkKCkpO1xuY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBQbGF5ZXIoR2FtZWJvYXJkKCksIHRydWUpO1xuXG5jb21wdXRlclBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDQsIDEsIFwidXBcIiwgU2hpcCg1KSk7XG5jb21wdXRlclBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDgsIDcsIFwiZG93blwiLCBTaGlwKDQpKTtcbmNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMCwgOCwgXCJsZWZ0XCIsIFNoaXAoMykpO1xuY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLCAzLCBcInJpZ2h0XCIsIFNoaXAoMikpO1xuY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg5LCA0LCBcImxlZnRcIiwgU2hpcCgxKSk7XG5cbmNvbnN0IGZvcm1hdEdyaWRzID0gZnVuY3Rpb24gZm9ybWF0R3JpZHNUb1J1bkdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXJcIik7XG4gIGdyaWRzLmZvckVhY2goKGdyaWQpID0+XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZ3JpZElkID0gZ3JpZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtaWRcIik7XG4gICAgICBzZXRBdHRhY2soZ3JpZElkLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgIHBsYXllcjIuYXR0YWNrKHBsYXllcjEpO1xuXG4gICAgICBjbGVhckdhbWUocGxheWVyMSwgcGxheWVyMik7XG4gICAgICBkaXNwbGF5R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKTtcblxuICAgICAgaWYgKGNoZWNrRm9yV2lubmVyKHBsYXllcjEsIHBsYXllcjIpKSB7XG4gICAgICAgIGRpc3BsYXlXaW5uZXIoY2hlY2tGb3JXaW5uZXIocGxheWVyMSwgcGxheWVyMikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvcm1hdEdyaWRzKHBsYXllcjEsIHBsYXllcjIpO1xuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBmb3JtYXRTdWJtaXRCdG4gPSBmdW5jdGlvbiBmb3JtYXRzRGlyZWN0aW9uU3VibWl0QnV0dG9uKHBsYXllcikge1xuICBjb25zdCBzdWJtaXRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtZm9ybS1idG5cIik7XG4gIHN1Ym1pdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2VtZW50LWxvY2F0aW9uXCIpO1xuICAgIGNvbnN0IGdyaWRJZCA9IGxvY2F0aW9uLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1pZFwiKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvblNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXJlY3Rpb25cIik7XG4gICAgY29uc3QgZGlyZWN0aW9uQ2hvaWNlID1cbiAgICAgIGRpcmVjdGlvblNlbGVjdGVkLm9wdGlvbnNbZGlyZWN0aW9uU2VsZWN0ZWQuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICBjb25zdCBjb29yZHMgPSBncmlkSWQuc3BsaXQoXCIsXCIpO1xuXG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICArY29vcmRzWzBdLFxuICAgICAgK2Nvb3Jkc1sxXSxcbiAgICAgIGRpcmVjdGlvbkNob2ljZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgU2hpcChzaGlwVHlwZXNbc2hpcFR5cGVzLmxlbmd0aCAtIDFdWzFdKVxuICAgICk7XG4gICAgc2hpcFR5cGVzLnBvcCgpO1xuXG4gICAgY2xlYXJHYW1lKCk7XG4gICAgaWYgKHNoaXBUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRpc3BsYXlHYW1lKGh1bWFuUGxheWVyLCBjb21wdXRlclBsYXllcik7XG4gICAgICBmb3JtYXRHcmlkcyhodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXIpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlzcGxheUNob29zZVNoaXAocGxheWVyLCBzaGlwVHlwZXMpO1xuICAgIGZvcm1hdFN1Ym1pdEJ0bihwbGF5ZXIpO1xuICB9KTtcbn07XG4vLyBIZWxwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgYSBtaXgvbWF4XG5jb25zdCByYW5kb21JbnQgPSBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUoKSB7XG4gIGNvbnN0IHNldE1pbiA9IDA7XG4gIGNvbnN0IHNldE1heCA9IDk7XG4gIGNvbnN0IG1pbiA9IE1hdGguY2VpbChzZXRNaW4pO1xuICBjb25zdCBtYXggPSBNYXRoLmZsb29yKHNldE1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuY29uc3QgcmFuZG9tQ29tcHV0ZXJTaGlwcyA9IGZ1bmN0aW9uIGdldFJhbmRvbVZhbGlkQ29tcHV0ZXJTaGlwcygpIHtcbiAgY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChyYW5kb21JbnQoKSwgcmFuZG9tSW50KCksIFwibGVmdFwiLCBTaGlwKDEpKTtcbn07XG5cbmRpc3BsYXlDaG9vc2VTaGlwKGh1bWFuUGxheWVyLCBzaGlwVHlwZXMpO1xuZm9ybWF0U3VibWl0QnRuKGh1bWFuUGxheWVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==