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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: lavender;\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n.game-header {\n  display: flex;\n  justify-content: center;\n  color: #7c3aed;\n  font-size: 4rem;\n  font-weight: 500;\n}\n\n.gameboard-section {\n  display: flex;\n}\n\n.computer-section,\n.player-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100%;\n  padding: 64px;\n}\n\n.gameboard-header {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.gameboard {\n  flex: 1;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 64px;\n  background-color: #c4b5fd;\n}\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid black;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: white;\n  box-sizing: border-box;\n}\n\n.ship {\n  background-color: #7c3aed;\n}\n\n.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: #3b82f6;\n}\n\n.placement-location {\n  background-color: limegreen;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,SAAS;EACT,gBAAgB;EAChB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: lavender;\n  height: 100vh;\n  overflow: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n.game-header {\n  display: flex;\n  justify-content: center;\n  color: #7c3aed;\n  font-size: 4rem;\n  font-weight: 500;\n}\n\n.gameboard-section {\n  display: flex;\n}\n\n.computer-section,\n.player-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100%;\n  padding: 64px;\n}\n\n.gameboard-header {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.gameboard {\n  flex: 1;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  padding: 64px;\n  background-color: #c4b5fd;\n}\n.row {\n  display: flex;\n}\n\n.grid {\n  flex-grow: 0;\n  border: 1px solid black;\n  width: 100%;\n  height: 0;\n  padding-top: 10%;\n  background-color: white;\n  box-sizing: border-box;\n}\n\n.ship {\n  background-color: #7c3aed;\n}\n\n.hit {\n  background-color: #ef4444;\n}\n\n.missed {\n  background-color: #3b82f6;\n}\n\n.placement-location {\n  background-color: limegreen;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner)
/* harmony export */ });
const removeAllChildNodes = function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const clearBoard = function clearUsersPlayerBoard() {
  removeAllChildNodes(document.querySelector(".player-section"));
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

// 'Choose location' then 'Choose direction' with some header on top with arrows.
// im not gonna even deal with overlapping. maybe i can.
// put it in computer section

// Psuedo: formatGrid to choose location, a drop down with directions is there,
//         and a submit button. When submit button is hit it saves location and direction.
//
//         displayChooseShip(player) -> calls formatShipChoiceGrid (player, shipTypes) (gridID)
//                                   -> calls getDirection() which will return
//                                   -> when a submit button is hit
//                                   -> calls LocationPromt()
//                                   -> pops shipTypes. When no more ship types
//                                   -> It calls chooseComputerShips() and then starts the game.
//
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
    console.log(directionForm);
    return directionForm;
  };

const formatShipChoiceGrids = function formatGridsToRunGame(player) {
  let counter = 0;
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) =>
    grid.addEventListener("click", () => {
      if (counter > 0) {
        return;
      }
      const gridId = grid.getAttribute("data-grid-id");
      console.log(gridId);
      grid.classList.add("placement-location");
      counter++;
    })
  );
};

const formatDirectionBtn = function formatsDirectionSubmitButtonWhenClicked() {
  const submitFormBtn = document.querySelector(".submit-form-btn");
  submitFormBtn.addEventListener("click", () => {
    console.log("it submitted");
  });
};
formatDirectionBtn();

const displayChooseShip = function getShipPlacementFromUser(player) {
  const addShipContainer = document.createElement("div");
  addShipContainer.classList.add("add-ship-container");

  const shipTypes = [
    ["Patrol Boat", 2],
    ["Submarine", 3],
    ["Destroyer", 3],
    ["Battleship", 4],
    ["Carrier", 5],
  ];

  console.log(shipTypes[shipTypes.length - 1]);
  addShipContainer.appendChild(locationPrompt(shipTypes[shipTypes.length - 1]));
  displayGame(player);
  formatShipChoiceGrids(player);
  addShipContainer.appendChild(displayDirectionForm());
  // formatDirectionBtn();

  // for (let i = 0; i < shipTypes.length; i++) {
  //   const addShipDirection = document.createElement("div");
  //   addShipDirection.classList.add("add-ship-direction");
  //   addShipDirection.textContent = `Choose ${shipTypes[i]} direction.`;
  // }

  const computerSection = document.querySelector(".computer-section");
  computerSection.appendChild(addShipContainer);
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
//  - Make user ship placement,
//    drag and drop doesnt seem too hard, and can include a rotate button
//  - hide computer ships until games over css
// -add max grid sizes in css

const humanPlayer = (0,_player_manager__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_gameboard_manager__WEBPACK_IMPORTED_MODULE_1__["default"])());
const computerPlayer = (0,_player_manager__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_gameboard_manager__WEBPACK_IMPORTED_MODULE_1__["default"])(), true);
(0,_dom_manager__WEBPACK_IMPORTED_MODULE_3__.displayChooseShip)(humanPlayer);

// computerPlayer.gameboard.placeShip(4, 1, "up", Ship(5));
// computerPlayer.gameboard.placeShip(8, 7, "down", Ship(4));
// computerPlayer.gameboard.placeShip(0, 8, "left", Ship(3));
// computerPlayer.gameboard.placeShip(2, 3, "right", Ship(2));
// computerPlayer.gameboard.placeShip(9, 4, "left", Ship(1));

// humanPlayer.gameboard.placeShip(1, 1, "up", Ship(5));
// humanPlayer.gameboard.placeShip(9, 2, "down", Ship(4));
// humanPlayer.gameboard.placeShip(8, 6, "left", Ship(3));
// humanPlayer.gameboard.placeShip(3, 4, "right", Ship(2));
// humanPlayer.gameboard.placeShip(4, 9, "left", Ship(1));

// displayGame(humanPlayer, computerPlayer);

// const formatGrids = function formatGridsToRunGame(player1, player2) {
//   const grids = document.querySelectorAll(".computer");
//   grids.forEach((grid) =>
//     grid.addEventListener("click", () => {
//       const gridId = grid.getAttribute("data-grid-id");
//       setAttack(gridId, player1, player2);
//       player2.attack(player1);

//       clearGame(player1, player2);
//       displayGame(player1, player2);

//       if (checkForWinner(player1, player2)) {
//         displayWinner(checkForWinner(player1, player2));
//         return;
//       }

//       formatGrids(player1, player2);
//     })
//   );
// };

// formatGrids(humanPlayer, computerPlayer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXItbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmciAxZnI7XFxufVxcblxcbi5nYW1lLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogIzdjM2FlZDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5nYW1lYm9hcmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29tcHV0ZXItc2VjdGlvbixcXG4ucGxheWVyLXNlY3Rpb24ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNjRweDtcXG59XFxuXFxuLmdhbWVib2FyZC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGI1ZmQ7XFxufVxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdyaWQge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMDtcXG4gIHBhZGRpbmctdG9wOiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzNhZWQ7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xcbn1cXG5cXG4ucGxhY2VtZW50LWxvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyIDFmcjtcXG59XFxuXFxuLmdhbWUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiAjN2MzYWVkO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmdhbWVib2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb21wdXRlci1zZWN0aW9uLFxcbi5wbGF5ZXItc2VjdGlvbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA2NHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLWhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA2NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YjVmZDtcXG59XFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBmbGV4LWdyb3c6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcGFkZGluZy10b3A6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjM2FlZDtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxufVxcblxcbi5wbGFjZW1lbnQtbG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJlbW92ZUFsbENoaWxkTm9kZXMgPSBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckJvYXJkID0gZnVuY3Rpb24gY2xlYXJVc2Vyc1BsYXllckJvYXJkKCkge1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXNlY3Rpb25cIikpO1xufTtcblxuY29uc3QgY2xlYXJHYW1lID0gZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHNJbkdhbWVTZWN0aW9ucygpIHtcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1zZWN0aW9uXCIpKTtcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLXNlY3Rpb25cIikpO1xufTtcblxuY29uc3QgZGlzcGxheUJvYXJkID0gZnVuY3Rpb24gZGlzcGxheVBsYXllckdhbWVCb2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBnYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZWJvYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgcm93LnRleHRDb250ZW50ID0gYCR7aX1gO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gICAgICBncmlkLnNldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1pZFwiLCBgJHtpfSwke2p9YCk7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBncmlkLnRleHRDb250ZW50ID0gYCR7an1gO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2FtZWJvYXJkW2ldW2pdICE9IG51bGwpIHtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmhpdFNob3RzLmluY2x1ZGVzKGAke2l9LCR7an1gKSkge1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5taXNzZWRTaG90cy5pbmNsdWRlcyhgJHtpfSwke2p9YCkpIHtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyXCIpO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgICBnYW1lYm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cblxuICByZXR1cm4gZ2FtZWJvYXJkRWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlHYW1lID0gZnVuY3Rpb24gZGlzcGxheVRoZUdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItc2VjdGlvblwiKTtcbiAgY29uc3QgY29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHBsYXllckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkLWhlYWRlclwiKTtcbiAgcGxheWVySGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG5cbiAgY29uc3QgY29tcHV0ZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wdXRlckhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkLWhlYWRlclwiKTtcbiAgY29tcHV0ZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15J3MgQm9hcmRcIjtcblxuICBwbGF5ZXJTZWN0aW9uLmFwcGVuZENoaWxkKHBsYXllckhlYWRlcik7XG4gIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQoZGlzcGxheUJvYXJkKHBsYXllcjEpKTtcblxuICBpZiAoIXBsYXllcjIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNvbXB1dGVySGVhZGVyKTtcbiAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGRpc3BsYXlCb2FyZChwbGF5ZXIyKSk7XG59O1xuXG4vLyAnQ2hvb3NlIGxvY2F0aW9uJyB0aGVuICdDaG9vc2UgZGlyZWN0aW9uJyB3aXRoIHNvbWUgaGVhZGVyIG9uIHRvcCB3aXRoIGFycm93cy5cbi8vIGltIG5vdCBnb25uYSBldmVuIGRlYWwgd2l0aCBvdmVybGFwcGluZy4gbWF5YmUgaSBjYW4uXG4vLyBwdXQgaXQgaW4gY29tcHV0ZXIgc2VjdGlvblxuXG4vLyBQc3VlZG86IGZvcm1hdEdyaWQgdG8gY2hvb3NlIGxvY2F0aW9uLCBhIGRyb3AgZG93biB3aXRoIGRpcmVjdGlvbnMgaXMgdGhlcmUsXG4vLyAgICAgICAgIGFuZCBhIHN1Ym1pdCBidXR0b24uIFdoZW4gc3VibWl0IGJ1dHRvbiBpcyBoaXQgaXQgc2F2ZXMgbG9jYXRpb24gYW5kIGRpcmVjdGlvbi5cbi8vXG4vLyAgICAgICAgIGRpc3BsYXlDaG9vc2VTaGlwKHBsYXllcikgLT4gY2FsbHMgZm9ybWF0U2hpcENob2ljZUdyaWQgKHBsYXllciwgc2hpcFR5cGVzKSAoZ3JpZElEKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0+IGNhbGxzIGdldERpcmVjdGlvbigpIHdoaWNoIHdpbGwgcmV0dXJuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLT4gd2hlbiBhIHN1Ym1pdCBidXR0b24gaXMgaGl0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLT4gY2FsbHMgTG9jYXRpb25Qcm9tdCgpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLT4gcG9wcyBzaGlwVHlwZXMuIFdoZW4gbm8gbW9yZSBzaGlwIHR5cGVzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLT4gSXQgY2FsbHMgY2hvb3NlQ29tcHV0ZXJTaGlwcygpIGFuZCB0aGVuIHN0YXJ0cyB0aGUgZ2FtZS5cbi8vXG5jb25zdCBsb2NhdGlvblByb21wdCA9IGZ1bmN0aW9uIHByb21wdFVzZXJGb3JMb2NhdGlvblBsYWNlbWVudChzaGlwVHlwZSkge1xuICBjb25zdCBhZGRTaGlwUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkU2hpcFByb21wdC5jbGFzc0xpc3QuYWRkKFwiYWRkLXNoaXAtcHJvbXB0XCIpO1xuICBhZGRTaGlwUHJvbXB0LnRleHRDb250ZW50ID0gYENob29zZSAke3NoaXBUeXBlWzBdfSBsb2NhdGlvbiAobGVuZ3RoICR7c2hpcFR5cGVbMV19KS5gO1xuXG4gIHJldHVybiBhZGRTaGlwUHJvbXB0O1xufTtcblxuY29uc3QgZGlzcGxheURpcmVjdGlvbkZvcm0gPVxuICBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5VGhlRGlyZWN0aW9uRm9ybUZvclNoaXBQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1TZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGlyZWN0aW9uLWZvcm0tc2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBkaXJlY3Rpb25Gb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICBkaXJlY3Rpb25Gb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgZGlyZWN0aW9uRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld19kaXJlY3Rpb25fZm9ybVwiKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXJlY3Rpb25GaWVsZC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1maWVsZFwiKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRpcmVjdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRpcmVjdGlvblwiKTtcbiAgICBkaXJlY3Rpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiU2hpcCBkaXJlY3Rpb24/XFxuXCI7XG4gICAgY29uc3QgZGlyZWN0aW9uU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBkaXJlY3Rpb25TZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXJlY3Rpb25cIik7XG4gICAgY29uc3QgZGlyZWN0aW9uT3B0aW9uUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvblJpZ2h0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwicmlnaHRcIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uUmlnaHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uUmlnaHQudGV4dENvbnRlbnQgPSBcIlJpZ2h0XCI7XG4gICAgY29uc3QgZGlyZWN0aW9uT3B0aW9uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uTGVmdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxlZnRcIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uTGVmdC50ZXh0Q29udGVudCA9IFwiTGVmdFwiO1xuICAgIGNvbnN0IGRpcmVjdGlvbk9wdGlvbkRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvbkRvd24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkb3duXCIpO1xuICAgIGRpcmVjdGlvbk9wdGlvbkRvd24udGV4dENvbnRlbnQgPSBcIkRvd25cIjtcbiAgICBjb25zdCBkaXJlY3Rpb25PcHRpb25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGlyZWN0aW9uT3B0aW9uVXAuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJ1cFwiKTtcbiAgICBkaXJlY3Rpb25PcHRpb25VcC50ZXh0Q29udGVudCA9IFwiVXBcIjtcbiAgICBkaXJlY3Rpb25TZWxlY3QuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uT3B0aW9uUmlnaHQpO1xuICAgIGRpcmVjdGlvblNlbGVjdC5hcHBlbmRDaGlsZChkaXJlY3Rpb25PcHRpb25MZWZ0KTtcbiAgICBkaXJlY3Rpb25TZWxlY3QuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uT3B0aW9uRG93bik7XG4gICAgZGlyZWN0aW9uU2VsZWN0LmFwcGVuZENoaWxkKGRpcmVjdGlvbk9wdGlvblVwKTtcbiAgICBkaXJlY3Rpb25GaWVsZC5hcHBlbmRDaGlsZChkaXJlY3Rpb25MYWJlbCk7XG4gICAgZGlyZWN0aW9uRmllbGQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uU2VsZWN0KTtcbiAgICBkaXJlY3Rpb25Gb3JtLmFwcGVuZENoaWxkKGRpcmVjdGlvbkZpZWxkKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtZm9ybS1idG5cIik7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBkaXJlY3Rpb25Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgY29uc29sZS5sb2coZGlyZWN0aW9uRm9ybSk7XG4gICAgcmV0dXJuIGRpcmVjdGlvbkZvcm07XG4gIH07XG5cbmNvbnN0IGZvcm1hdFNoaXBDaG9pY2VHcmlkcyA9IGZ1bmN0aW9uIGZvcm1hdEdyaWRzVG9SdW5HYW1lKHBsYXllcikge1xuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkXCIpO1xuICBncmlkcy5mb3JFYWNoKChncmlkKSA9PlxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBncmlkSWQgPSBncmlkLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1pZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGdyaWRJZCk7XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnQtbG9jYXRpb25cIik7XG4gICAgICBjb3VudGVyKys7XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGZvcm1hdERpcmVjdGlvbkJ0biA9IGZ1bmN0aW9uIGZvcm1hdHNEaXJlY3Rpb25TdWJtaXRCdXR0b25XaGVuQ2xpY2tlZCgpIHtcbiAgY29uc3Qgc3VibWl0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWZvcm0tYnRuXCIpO1xuICBzdWJtaXRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJpdCBzdWJtaXR0ZWRcIik7XG4gIH0pO1xufTtcbmZvcm1hdERpcmVjdGlvbkJ0bigpO1xuXG5jb25zdCBkaXNwbGF5Q2hvb3NlU2hpcCA9IGZ1bmN0aW9uIGdldFNoaXBQbGFjZW1lbnRGcm9tVXNlcihwbGF5ZXIpIHtcbiAgY29uc3QgYWRkU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZC1zaGlwLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBzaGlwVHlwZXMgPSBbXG4gICAgW1wiUGF0cm9sIEJvYXRcIiwgMl0sXG4gICAgW1wiU3VibWFyaW5lXCIsIDNdLFxuICAgIFtcIkRlc3Ryb3llclwiLCAzXSxcbiAgICBbXCJCYXR0bGVzaGlwXCIsIDRdLFxuICAgIFtcIkNhcnJpZXJcIiwgNV0sXG4gIF07XG5cbiAgY29uc29sZS5sb2coc2hpcFR5cGVzW3NoaXBUeXBlcy5sZW5ndGggLSAxXSk7XG4gIGFkZFNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25Qcm9tcHQoc2hpcFR5cGVzW3NoaXBUeXBlcy5sZW5ndGggLSAxXSkpO1xuICBkaXNwbGF5R2FtZShwbGF5ZXIpO1xuICBmb3JtYXRTaGlwQ2hvaWNlR3JpZHMocGxheWVyKTtcbiAgYWRkU2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5RGlyZWN0aW9uRm9ybSgpKTtcbiAgLy8gZm9ybWF0RGlyZWN0aW9uQnRuKCk7XG5cbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwVHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICBjb25zdCBhZGRTaGlwRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICBhZGRTaGlwRGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtc2hpcC1kaXJlY3Rpb25cIik7XG4gIC8vICAgYWRkU2hpcERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBDaG9vc2UgJHtzaGlwVHlwZXNbaV19IGRpcmVjdGlvbi5gO1xuICAvLyB9XG5cbiAgY29uc3QgY29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1zZWN0aW9uXCIpO1xuICBjb21wdXRlclNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkU2hpcENvbnRhaW5lcik7XG59O1xuXG5jb25zdCBkaXNwbGF5V2lubmVyID0gZnVuY3Rpb24gZGlzcGxheVRoZUdpdmVuUGxheWVyT2JqQXNXaW5uZXIocGxheWVyKSB7XG4gIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbm5lci5jbGFzc0xpc3QuYWRkKFwid2lubmVyLWhlYWRlclwiKTtcblxuICBpZiAocGxheWVyLmlzQ29tcHV0ZXIpIHtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyIHdpbnMhXCI7XG4gIH0gZWxzZSB7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gXCJZb3Ugd29uIVwiO1xuICB9XG5cbiAgY29uc3QgZ2FtZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1oZWFkZXJcIik7XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMoZ2FtZUhlYWRlcik7XG4gIGdhbWVIZWFkZXIuYXBwZW5kQ2hpbGQod2lubmVyKTtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlHYW1lLCBjbGVhckdhbWUsIGRpc3BsYXlXaW5uZXIsIGRpc3BsYXlDaG9vc2VTaGlwIH07XG4iLCJjb25zdCBzZXRBdHRhY2sgPSBmdW5jdGlvbiBzZXRBdHRhY2tPbkVuZW15R2FtZWJvYXJkKGdyaWRJZCwgcGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBjb2wgPSBncmlkSWQuc3BsaXQoXCIsXCIpWzBdO1xuICBjb25zdCByb3cgPSBncmlkSWQuc3BsaXQoXCIsXCIpWzFdO1xuICBwbGF5ZXIxLmF0dGFjayhwbGF5ZXIyLCBjb2wsIHJvdyk7XG59O1xuXG5jb25zdCBjaGVja0Zvcldpbm5lciA9IGZ1bmN0aW9uIGNoZWNrSWZBUGxheWVyV29uKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaWYgKHBsYXllcjIuZ2FtZWJvYXJkLmFyZUFsbFN1bmsoKSkge1xuICAgIHJldHVybiBwbGF5ZXIxO1xuICB9XG4gIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5hcmVBbGxTdW5rKCkpIHtcbiAgICByZXR1cm4gcGxheWVyMjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgeyBzZXRBdHRhY2ssIGNoZWNrRm9yV2lubmVyIH07XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gZ2FtZWJvYXJkO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb2wsIHJvdywgZGlyZWN0aW9uLCBzaGlwKSA9PiB7XG4gICAgY29uc3QgbmV3U2hpcEluZm8gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgZ2FtZWJvYXJkW2NvbF1bcm93IC0gaV0gPSBzaGlwO1xuICAgICAgICBuZXdTaGlwSW5mby5wdXNoKGAke2NvbH0sJHtyb3cgLSBpfWApO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIGdhbWVib2FyZFtjb2xdW3JvdyArIGldID0gc2hpcDtcbiAgICAgICAgbmV3U2hpcEluZm8ucHVzaChgJHtjb2x9LCR7cm93ICsgaX1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICAgIGdhbWVib2FyZFtjb2wgLSBpXVtyb3ddID0gc2hpcDtcbiAgICAgICAgbmV3U2hpcEluZm8ucHVzaChgJHtjb2wgLSBpfSwke3Jvd31gKTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICBnYW1lYm9hcmRbY29sICsgaV1bcm93XSA9IHNoaXA7XG4gICAgICAgIG5ld1NoaXBJbmZvLnB1c2goYCR7Y29sICsgaX0sJHtyb3d9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3U2hpcEluZm8ucHVzaChzaGlwKTtcbiAgICBzaGlwcy5wdXNoKG5ld1NoaXBJbmZvKTtcbiAgfTtcblxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICBjb25zdCBoaXRTaG90cyA9IFtdO1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHhQbHVzWSA9IGAke3h9LCR7eX1gO1xuICAgIGxldCBoaXRQb3NpdGlvbjtcbiAgICBsZXQgZGlkSXRIaXQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoaXRQb3NpdGlvbiA9IHNoaXBzW2ldLmZpbmRJbmRleCgoY29vcmRpbmF0ZXMpID0+IGNvb3JkaW5hdGVzID09PSB4UGx1c1kpO1xuICAgICAgaWYgKGdhbWVib2FyZFt4XVt5XSAhPSBudWxsKSB7XG4gICAgICAgIGdhbWVib2FyZFt4XVt5XS5oaXQoaGl0UG9zaXRpb24pO1xuICAgICAgICBkaWRJdEhpdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaWRJdEhpdCkge1xuICAgICAgaGl0U2hvdHMucHVzaCh4UGx1c1kpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1pc3NlZFNob3RzLnB1c2goeFBsdXNZKTtcbiAgfTtcblxuICBjb25zdCBhcmVBbGxTdW5rID0gKCkgPT5cbiAgICBzaGlwcy5zbGljZSgwKS5ldmVyeSgoc2hpcCkgPT4gc2hpcFtzaGlwLmxlbmd0aCAtIDFdLmlzU3VuaygpKTtcblxuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIG1pc3NlZFNob3RzLFxuICAgIGhpdFNob3RzLFxuICAgIGFyZUFsbFN1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLy8gSGVscGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBhbmQgaW5jbHVkaW5nIGEgbWl4L21heFxuY29uc3QgcmFuZG9tSW50ID0gZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKCkge1xuICBjb25zdCBzZXRNaW4gPSAwO1xuICBjb25zdCBzZXRNYXggPSA5O1xuICBjb25zdCBtaW4gPSBNYXRoLmNlaWwoc2V0TWluKTtcbiAgY29uc3QgbWF4ID0gTWF0aC5mbG9vcihzZXRNYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn07XG5cbmNvbnN0IHJhbmRvbUF0dGFjayA9IGZ1bmN0aW9uIGNyZWF0ZVJhbmRvbVVudXNlZEF0dGFja0Nob2ljZShhdHRhY2tzTWFkZSkge1xuICBpZiAoYXR0YWNrc01hZGUubGVuZ3RoID09PSAxMDApIHtcbiAgICByZXR1cm4gWzAsIDBdO1xuICB9XG4gIGxldCBmb3VuZFVzZWRBdHRhY2sgPSB0cnVlO1xuICB3aGlsZSAoZm91bmRVc2VkQXR0YWNrKSB7XG4gICAgY29uc3QgY29tcFggPSByYW5kb21JbnQoKTtcbiAgICBjb25zdCBjb21wWSA9IHJhbmRvbUludCgpO1xuICAgIGlmICghYXR0YWNrc01hZGUuaW5jbHVkZXMoYCR7Y29tcFh9LCR7Y29tcFl9YCkpIHtcbiAgICAgIGZvdW5kVXNlZEF0dGFjayA9IGZhbHNlO1xuICAgICAgYXR0YWNrc01hZGUucHVzaChgJHtjb21wWH0sJHtjb21wWX1gKTtcbiAgICAgIHJldHVybiBbY29tcFgsIGNvbXBZXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcblxuY29uc3QgUGxheWVyID0gKGdhbWVib2FyZCwgaXNDb21wdXRlcikgPT4ge1xuICBjb25zdCBhdHRhY2tzTWFkZSA9IFtdO1xuICBjb25zdCBhdHRhY2sgPSAoZW5lbXksIHgsIHkpID0+IHtcbiAgICBpZiAoaXNDb21wdXRlcikge1xuICAgICAgW3gsIHldID0gcmFuZG9tQXR0YWNrKGF0dGFja3NNYWRlKTtcbiAgICB9XG4gICAgZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH07XG4gIHJldHVybiB7IGdhbWVib2FyZCwgYXR0YWNrLCBhdHRhY2tzTWFkZSwgaXNDb21wdXRlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3QgZGFtYWdlZCA9IFtcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgXS5zbGljZSgwLCBsZW5ndGgpO1xuICBjb25zdCBoaXQgPSAobG9jYXRpb24pID0+IHtcbiAgICBkYW1hZ2VkW2xvY2F0aW9uXSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGRhbWFnZWQuZXZlcnkoKGxvY2F0aW9uKSA9PiBsb2NhdGlvbiA9PT0gdHJ1ZSk7XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBkYW1hZ2VkLCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLW1hbmFnZXJcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkLW1hbmFnZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAtbWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgZGlzcGxheUdhbWUsXG4gIGNsZWFyR2FtZSxcbiAgZGlzcGxheVdpbm5lcixcbiAgZGlzcGxheUNob29zZVNoaXAsXG59IGZyb20gXCIuL2RvbS1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBzZXRBdHRhY2ssIGNoZWNrRm9yV2lubmVyIH0gZnJvbSBcIi4vZ2FtZS1tYW5hZ2VyXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuLy8gU3RlcHMgdG8gZmluaXNoOlxuLy8gIC0gTWFrZSB1c2VyIHNoaXAgcGxhY2VtZW50LFxuLy8gICAgZHJhZyBhbmQgZHJvcCBkb2VzbnQgc2VlbSB0b28gaGFyZCwgYW5kIGNhbiBpbmNsdWRlIGEgcm90YXRlIGJ1dHRvblxuLy8gIC0gaGlkZSBjb21wdXRlciBzaGlwcyB1bnRpbCBnYW1lcyBvdmVyIGNzc1xuLy8gLWFkZCBtYXggZ3JpZCBzaXplcyBpbiBjc3NcblxuY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoR2FtZWJvYXJkKCkpO1xuY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBQbGF5ZXIoR2FtZWJvYXJkKCksIHRydWUpO1xuZGlzcGxheUNob29zZVNoaXAoaHVtYW5QbGF5ZXIpO1xuXG4vLyBjb21wdXRlclBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDQsIDEsIFwidXBcIiwgU2hpcCg1KSk7XG4vLyBjb21wdXRlclBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDgsIDcsIFwiZG93blwiLCBTaGlwKDQpKTtcbi8vIGNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMCwgOCwgXCJsZWZ0XCIsIFNoaXAoMykpO1xuLy8gY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLCAzLCBcInJpZ2h0XCIsIFNoaXAoMikpO1xuLy8gY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg5LCA0LCBcImxlZnRcIiwgU2hpcCgxKSk7XG5cbi8vIGh1bWFuUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMSwgMSwgXCJ1cFwiLCBTaGlwKDUpKTtcbi8vIGh1bWFuUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoOSwgMiwgXCJkb3duXCIsIFNoaXAoNCkpO1xuLy8gaHVtYW5QbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg4LCA2LCBcImxlZnRcIiwgU2hpcCgzKSk7XG4vLyBodW1hblBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDMsIDQsIFwicmlnaHRcIiwgU2hpcCgyKSk7XG4vLyBodW1hblBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDQsIDksIFwibGVmdFwiLCBTaGlwKDEpKTtcblxuLy8gZGlzcGxheUdhbWUoaHVtYW5QbGF5ZXIsIGNvbXB1dGVyUGxheWVyKTtcblxuLy8gY29uc3QgZm9ybWF0R3JpZHMgPSBmdW5jdGlvbiBmb3JtYXRHcmlkc1RvUnVuR2FtZShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4vLyAgIGNvbnN0IGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlclwiKTtcbi8vICAgZ3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT5cbi8vICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICBjb25zdCBncmlkSWQgPSBncmlkLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1pZFwiKTtcbi8vICAgICAgIHNldEF0dGFjayhncmlkSWQsIHBsYXllcjEsIHBsYXllcjIpO1xuLy8gICAgICAgcGxheWVyMi5hdHRhY2socGxheWVyMSk7XG5cbi8vICAgICAgIGNsZWFyR2FtZShwbGF5ZXIxLCBwbGF5ZXIyKTtcbi8vICAgICAgIGRpc3BsYXlHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuXG4vLyAgICAgICBpZiAoY2hlY2tGb3JXaW5uZXIocGxheWVyMSwgcGxheWVyMikpIHtcbi8vICAgICAgICAgZGlzcGxheVdpbm5lcihjaGVja0Zvcldpbm5lcihwbGF5ZXIxLCBwbGF5ZXIyKSk7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICAgIH1cblxuLy8gICAgICAgZm9ybWF0R3JpZHMocGxheWVyMSwgcGxheWVyMik7XG4vLyAgICAgfSlcbi8vICAgKTtcbi8vIH07XG5cbi8vIGZvcm1hdEdyaWRzKGh1bWFuUGxheWVyLCBjb21wdXRlclBsYXllcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=