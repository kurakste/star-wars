/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  position: relative;\\n  background-color: #e8eae9;\\n  max-width: 800px;\\n  min-width: 600px;\\n}\\n\\n.grid-container {\\n  display: grid;\\n  grid-template-columns: 20px 400px 150px;\\n  grid-gap: 10px;\\n}\\n\\n#game {\\n  grid-column: 2/2;\\n  grid-row: 1;\\n  background-color: lightcyan;\\n  height: 900px;\\n  box-shadow: 0 0 10px #e8d8de;\\n}\\n\\n#score {\\n  grid-column: 3/3;\\n  background-color: #75767a;\\n  height: 880px;\\n  padding: 10px;\\n  box-shadow: 0 0 10px #e8d8de;\\n  border-radius: 10px;\\n}\\n\\n.indicatorWrapper {\\n  height: 20px;\\n  width: 100%;\\n}\\n.indicatorWrapper .full {\\n  height: 20px;\\n  background-color: lightgreen;\\n  color: lightgreen;\\n  float: left;\\n}\\n.indicatorWrapper .blank {\\n  height: 20px;\\n  background-color: lightsalmon;\\n  color: lightsalmon;\\n  float: left;\\n}\\n\\n.FlyingIndicator {\\n  text-align: center;\\n  border-radius: 50% 50% 50% 50%;\\n  position: absolute;\\n}\\n\\n.info {\\n  background-color: yellowgreen;\\n}\\n\\n.danger {\\n  background-color: lightsalmon;\\n}\\n\\n.good {\\n  background-color: lightgreen;\\n}\\n\\n.modal {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  opacity: 0;\\n  visibility: hidden;\\n  transform: scale(1.1);\\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\\n}\\n\\n.modal-content {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: white;\\n  padding: 1rem 1.5rem;\\n  width: 24rem;\\n  border-radius: 0.5rem;\\n}\\n\\n.show-modal {\\n  opacity: 1;\\n  visibility: visible;\\n  transform: scale(1);\\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\\n}\\n\\n.my-text {\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Game/Actors/Actors.ts":
/*!***********************************!*\
  !*** ./src/Game/Actors/Actors.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Events_1 = __webpack_require__(/*! ../Interfaces/Events */ \"./src/Game/Interfaces/Events.ts\");\nvar mainSprites_png_1 = __webpack_require__(/*! ./mainSprites.png */ \"./src/Game/Actors/mainSprites.png\");\nvar spriteMatrix_1 = __webpack_require__(/*! ./spriteMatrix */ \"./src/Game/Actors/spriteMatrix.ts\");\nvar Actor = /** @class */ (function () {\n    function Actor(game, xpos, ypos, width, height) {\n        this.subscribes = [];\n        this.spriteMatrix = spriteMatrix_1.default;\n        ++Actor.counter;\n        this.hSpeed = 0;\n        this.vSpeed = 0;\n        this.spriteIndexInMatrix = 0;\n        this.game = game;\n        this.xpos = xpos;\n        this.ypos = ypos;\n        this.width = width;\n        this.height = height;\n        this.subscribes = [Events_1.default.Clock, Events_1.default.Draw, Events_1.default.Collision];\n        if (Actor.spritesImg === undefined) {\n            Actor.spritesImg = new Image();\n            Actor.spritesImg.src = mainSprites_png_1.default;\n            console.log('img:', Actor.spritesImg);\n        }\n        this.id = \"actor #\" + Actor.counter;\n    }\n    Actor.prototype.clock = function () { throw new Error('You has to implement clock method.'); };\n    Actor.prototype.getActorViewObject = function () {\n        return {\n            spriteXOffset: this.spriteXOffset,\n            spriteYOffset: this.spriteYOffset,\n            spriteWidth: this.spriteWidth,\n            spriteHeight: this.spriteHeight,\n            xpos: this.xpos,\n            ypos: this.ypos,\n            imageWidth: this.width,\n            imageHeight: this.height\n        };\n    };\n    Actor.prototype.borderCollisionHandler = function () {\n        this.game.removeObjectFromField(this);\n    };\n    Actor.prototype.collisionHandler = function (o) {\n        console.log(\"collision: \" + this.type + \" - \" + this.id + \" with:\", o);\n    };\n    Actor.prototype.setSpriteMatrix = function (index) {\n        try {\n            this.spriteXOffset = this.spriteMatrix[this.type][index].sx;\n            this.spriteYOffset = spriteMatrix_1.default[this.type][index].sy;\n            this.spriteWidth = spriteMatrix_1.default[this.type][index].width;\n            this.spriteHeight = spriteMatrix_1.default[this.type][index].hight;\n            this.width = spriteMatrix_1.default[this.type][index].width / 4;\n            this.height = spriteMatrix_1.default[this.type][index].hight / 4;\n        }\n        catch (e) {\n            console.log('error', this, e, spriteMatrix_1.default);\n        }\n    };\n    Actor.prototype.moveLeft = function () {\n        this.xpos = this.xpos + this.hSpeed;\n    };\n    Actor.prototype.moveRight = function () {\n        this.xpos = this.xpos - this.hSpeed;\n    };\n    Actor.prototype.moveDown = function () {\n        this.ypos = this.ypos + this.vSpeed;\n    };\n    Actor.prototype.moveUp = function () {\n        this.ypos = this.ypos - this.vSpeed;\n    };\n    Actor.counter = 0;\n    return Actor;\n}());\nexports.default = Actor;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/Actors.ts?");

/***/ }),

/***/ "./src/Game/Actors/DamageableActors/DamageableActors.ts":
/*!**************************************************************!*\
  !*** ./src/Game/Actors/DamageableActors/DamageableActors.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Actors_1 = __webpack_require__(/*! ../Actors */ \"./src/Game/Actors/Actors.ts\");\nvar gameObjTypes_1 = __webpack_require__(/*! ../../Interfaces/gameObjTypes */ \"./src/Game/Interfaces/gameObjTypes.ts\");\nvar DamageableActors = /** @class */ (function (_super) {\n    __extends(DamageableActors, _super);\n    function DamageableActors() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.maxHealth = 400;\n        _this.health = 400;\n        return _this;\n    }\n    DamageableActors.prototype.getDemage = function (o) {\n        if (o.demage) {\n            this.health = this.health - o.demage;\n        }\n    };\n    DamageableActors.prototype.checkHealthLogic = function () {\n        (this.health <= 0) && this.game.gameFlowEngine.objectWasDestroyed(this);\n        (this.health <= 0) && this.game.removeObjectFromField(this);\n    };\n    DamageableActors.prototype.collisionHandler = function (o) {\n        if (this.type === gameObjTypes_1.default.mainGameActor) {\n            o.type === gameObjTypes_1.default.enemyBullet && this.getDemage(o);\n        }\n        if (this.type === gameObjTypes_1.default.enemyTypeActor) {\n            o.type === gameObjTypes_1.default.mainHeroBullet && this.getDemage(o);\n        }\n        this.checkHealthLogic();\n    };\n    return DamageableActors;\n}(Actors_1.default));\nexports.default = DamageableActors;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/DamageableActors/DamageableActors.ts?");

/***/ }),

/***/ "./src/Game/Actors/DamageableActors/Enemy/EnemyFactory/index.ts":
/*!**********************************************************************!*\
  !*** ./src/Game/Actors/DamageableActors/Enemy/EnemyFactory/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar __1 = __webpack_require__(/*! .. */ \"./src/Game/Actors/DamageableActors/Enemy/index.ts\");\nvar EnemyFactory = /** @class */ (function () {\n    function EnemyFactory() {\n    }\n    EnemyFactory.prototype.createEnemy = function (game, xpos, ypos, level) {\n        var getEnemyLevelByGameLevel = function (l) {\n            var enemyLvl = l;\n            if (Math.random() >= 0.8)\n                enemyLvl = Math.min(l + 1, 8);\n            if (Math.random() <= 0.2)\n                enemyLvl = Math.max(l - 1, 0);\n            return enemyLvl;\n        };\n        return this.createEnemyByLevel(game, xpos, ypos, getEnemyLevelByGameLevel(level));\n    };\n    EnemyFactory.prototype.createEnemyByLevel = function (game, xpos, ypos, lvl) {\n        var health = 200 + lvl * 200;\n        var enm = new __1.default(game, xpos, ypos, health, lvl);\n        return enm;\n    };\n    return EnemyFactory;\n}());\nexports.default = EnemyFactory;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/DamageableActors/Enemy/EnemyFactory/index.ts?");

/***/ }),

/***/ "./src/Game/Actors/DamageableActors/Enemy/calcEnemySteps.ts":
/*!******************************************************************!*\
  !*** ./src/Game/Actors/DamageableActors/Enemy/calcEnemySteps.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.calcEnemySteps = void 0;\nvar sn = function (y) { return 5 * Math.sin(y / 30); };\nfunction calcEnemySteps(level, input) {\n    var x = input.x, y = input.y;\n    var out = { dx: 0, dy: 2 };\n    switch (level) {\n        case 1:\n            out.dy = 1;\n            out.dx = sn(y);\n            break;\n    }\n    return out;\n}\nexports.calcEnemySteps = calcEnemySteps;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/DamageableActors/Enemy/calcEnemySteps.ts?");

/***/ }),

/***/ "./src/Game/Actors/DamageableActors/Enemy/index.ts":
/*!*********************************************************!*\
  !*** ./src/Game/Actors/DamageableActors/Enemy/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DamageableActors_1 = __webpack_require__(/*! ../DamageableActors */ \"./src/Game/Actors/DamageableActors/DamageableActors.ts\");\nvar gameObjTypes_1 = __webpack_require__(/*! ../../../Interfaces/gameObjTypes */ \"./src/Game/Interfaces/gameObjTypes.ts\");\nvar EnemyFire_1 = __webpack_require__(/*! ../../Fire/EnemyFire */ \"./src/Game/Actors/Fire/EnemyFire.ts\");\nvar calcEnemySteps_1 = __webpack_require__(/*! ./calcEnemySteps */ \"./src/Game/Actors/DamageableActors/Enemy/calcEnemySteps.ts\");\nvar Enemy = /** @class */ (function (_super) {\n    __extends(Enemy, _super);\n    function Enemy(game, xpos, ypos, health, spriteMatrixIndex) {\n        var _this = _super.call(this, game, xpos, ypos, 50, 50) || this;\n        _this.clockBeforeFire = 50;\n        _this.type = gameObjTypes_1.default.enemyTypeActor;\n        _this.spriteXOffset = 190;\n        _this.spriteYOffset = 0;\n        _this.spriteHeight = 90;\n        _this.spriteWidth = 100;\n        _this.vSpeed = 5;\n        _this.hSpeed = 5;\n        _this.level = game.gameState.level;\n        _this.health = health;\n        _this.maxHealth = health;\n        _this.setSpriteMatrix(spriteMatrixIndex); // TODO: check is this useful this.spriteIndexInMatrix\n        return _this;\n    }\n    Enemy.prototype.clock = function () {\n        this.move();\n        this.generateFire();\n    };\n    Enemy.prototype.move = function () {\n        var _a = calcEnemySteps_1.calcEnemySteps(this.level, { x: this.xpos, y: this.ypos }), dx = _a.dx, dy = _a.dy;\n        this.ypos = this.ypos + dy;\n        var border = (this.xpos + dx >= this.game.width - this.width || this.xpos + dx <= 5);\n        if (border)\n            return;\n        this.xpos = this.xpos + dx;\n    };\n    Enemy.prototype.generateFire = function () {\n        if (this.clockBeforeFire <= 0) {\n            var fire = new EnemyFire_1.default(this.game, this.xpos, this.ypos + this.height + 2);\n            this.game.addObjectOnField(fire);\n            this.clockBeforeFire = 50;\n        }\n        else {\n            --this.clockBeforeFire;\n        }\n    };\n    return Enemy;\n}(DamageableActors_1.default));\nexports.default = Enemy;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/DamageableActors/Enemy/index.ts?");

/***/ }),

/***/ "./src/Game/Actors/DamageableActors/Hero/index.ts":
/*!********************************************************!*\
  !*** ./src/Game/Actors/DamageableActors/Hero/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Events_1 = __webpack_require__(/*! ../../../Interfaces/Events */ \"./src/Game/Interfaces/Events.ts\");\nvar gameObjTypes_1 = __webpack_require__(/*! ../../../Interfaces/gameObjTypes */ \"./src/Game/Interfaces/gameObjTypes.ts\");\nvar DamageableActors_1 = __webpack_require__(/*! ../DamageableActors */ \"./src/Game/Actors/DamageableActors/DamageableActors.ts\");\nvar HeroFire_1 = __webpack_require__(/*! ../../Fire/HeroFire */ \"./src/Game/Actors/Fire/HeroFire.ts\");\nvar Direction_1 = __webpack_require__(/*! ../../../Interfaces/Direction */ \"./src/Game/Interfaces/Direction.ts\");\nvar MainHero = /** @class */ (function (_super) {\n    __extends(MainHero, _super);\n    function MainHero(game, xpos, ypos) {\n        var _this = _super.call(this, game, xpos, ypos, 50, 50) || this;\n        _this.type = gameObjTypes_1.default.mainGameActor;\n        _this.subscribes.push(Events_1.default.Keyboard);\n        _this.vSpeed = 10;\n        _this.hSpeed = 10;\n        _this.setSpriteMatrix(_this.spriteIndexInMatrix);\n        _this.health = 900;\n        _this.maxHealth = 900;\n        _this.game.gameState.health = _this.health;\n        return _this;\n    }\n    MainHero.prototype.keyboardHandler = function (e) {\n        if (e.type !== 'keydown')\n            return;\n        e.key === 'ArrowRight'\n            && !this.checkIsThereTheGameBoarder(Direction_1.default.right) && this.moveLeft();\n        e.key === 'ArrowLeft'\n            && !this.checkIsThereTheGameBoarder(Direction_1.default.left) && this.moveRight();\n        e.key === 'ArrowUp'\n            && !this.checkIsThereTheGameBoarder(Direction_1.default.up) && this.moveUp();\n        e.key === 'ArrowDown'\n            && !this.checkIsThereTheGameBoarder(Direction_1.default.down) && this.moveDown();\n        e.key === ' ' && this.fire();\n    };\n    MainHero.prototype.clock = function () {\n        return;\n    };\n    MainHero.prototype.borderCollisionHandler = function () {\n        // rewrite parent method\n        // TODO: Here we need write a logic what we has to do when enemy cross bottom\n        // border. \n    };\n    MainHero.prototype.fire = function () {\n        var fire = new HeroFire_1.default(this.game, this.xpos + 5, this.ypos - 42);\n        this.game.addObjectOnField(fire);\n    };\n    MainHero.prototype.checkIsThereTheGameBoarder = function (dir) {\n        var _a;\n        var _this = this;\n        var workMatrix = (_a = {},\n            _a[Direction_1.default.down] = function () { return _this.ypos + _this.height >= _this.game.height; },\n            _a[Direction_1.default.up] = function () { return _this.ypos <= 0; },\n            _a[Direction_1.default.left] = function () { return _this.xpos <= 0; },\n            _a[Direction_1.default.right] = function () { return _this.xpos + _this.width >= _this.game.width; },\n            _a);\n        return workMatrix[dir]();\n    };\n    MainHero.prototype.sendGameOver = function () {\n        this.game.gameOver();\n    };\n    MainHero.prototype.getDemage = function (o) {\n        _super.prototype.getDemage.call(this, o);\n        this.game.gameState.health = this.health;\n        (this.health <= 0) && this.sendGameOver();\n    };\n    return MainHero;\n}(DamageableActors_1.default));\nexports.default = MainHero;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/DamageableActors/Hero/index.ts?");

/***/ }),

/***/ "./src/Game/Actors/Fire/EnemyFire.ts":
/*!*******************************************!*\
  !*** ./src/Game/Actors/Fire/EnemyFire.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Fire_1 = __webpack_require__(/*! ./Fire */ \"./src/Game/Actors/Fire/Fire.ts\");\nvar gameObjTypes_1 = __webpack_require__(/*! ../../Interfaces/gameObjTypes */ \"./src/Game/Interfaces/gameObjTypes.ts\");\nvar EnemyFire = /** @class */ (function (_super) {\n    __extends(EnemyFire, _super);\n    function EnemyFire(game, xpos, ypos) {\n        var _this = _super.call(this, game, xpos, ypos, -1) || this;\n        _this.type = gameObjTypes_1.default.enemyBullet;\n        _this.setSpriteMatrix(_this.spriteIndexInMatrix);\n        return _this;\n    }\n    EnemyFire.prototype.collisionHandler = function (o) {\n        (o.type !== gameObjTypes_1.default.enemyBullet)\n            && (o.type !== gameObjTypes_1.default.mainHeroBullet)\n            && (o.type !== gameObjTypes_1.default.enemyTypeActor)\n            && this.game.removeObjectFromField(this);\n    };\n    return EnemyFire;\n}(Fire_1.default));\nexports.default = EnemyFire;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/Fire/EnemyFire.ts?");

/***/ }),

/***/ "./src/Game/Actors/Fire/Fire.ts":
/*!**************************************!*\
  !*** ./src/Game/Actors/Fire/Fire.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Actors_1 = __webpack_require__(/*! ../Actors */ \"./src/Game/Actors/Actors.ts\");\nvar Events_1 = __webpack_require__(/*! ../../Interfaces/Events */ \"./src/Game/Interfaces/Events.ts\");\nvar gameObjTypes_1 = __webpack_require__(/*! ../../Interfaces/gameObjTypes */ \"./src/Game/Interfaces/gameObjTypes.ts\");\nvar Fire = /** @class */ (function (_super) {\n    __extends(Fire, _super);\n    function Fire(game, xpos, ypos, direction) {\n        var _this = _super.call(this, game, xpos, ypos, 40, 40) || this;\n        _this.demage = 200;\n        _this.subscribes = [Events_1.default.Clock, Events_1.default.Draw, Events_1.default.Collision];\n        _this.vSpeed = 10;\n        _this.direction = direction;\n        return _this;\n    }\n    Fire.prototype.clock = function () {\n        this.ypos = this.ypos - this.vSpeed * this.direction;\n    };\n    Fire.prototype.collisionHandler = function (o) {\n        (o.type !== gameObjTypes_1.default.enemyBullet)\n            && (o.type !== gameObjTypes_1.default.mainHeroBullet)\n            && this.game.removeObjectFromField(this);\n    };\n    return Fire;\n}(Actors_1.default));\nexports.default = Fire;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/Fire/Fire.ts?");

/***/ }),

/***/ "./src/Game/Actors/Fire/HeroFire.ts":
/*!******************************************!*\
  !*** ./src/Game/Actors/Fire/HeroFire.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Fire_1 = __webpack_require__(/*! ./Fire */ \"./src/Game/Actors/Fire/Fire.ts\");\nvar gameObjTypes_1 = __webpack_require__(/*! ../../Interfaces/gameObjTypes */ \"./src/Game/Interfaces/gameObjTypes.ts\");\nvar HeroFire = /** @class */ (function (_super) {\n    __extends(HeroFire, _super);\n    function HeroFire(game, xpos, ypos) {\n        var _this = _super.call(this, game, xpos, ypos, 1) || this;\n        _this.type = gameObjTypes_1.default.mainHeroBullet;\n        _this.setSpriteMatrix(_this.spriteIndexInMatrix);\n        return _this;\n    }\n    return HeroFire;\n}(Fire_1.default));\nexports.default = HeroFire;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/Fire/HeroFire.ts?");

/***/ }),

/***/ "./src/Game/Actors/mainSprites.png":
/*!*****************************************!*\
  !*** ./src/Game/Actors/mainSprites.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"41ebaae5fffb901e1c205c0408cab600.png\");\n\n//# sourceURL=webpack:///./src/Game/Actors/mainSprites.png?");

/***/ }),

/***/ "./src/Game/Actors/spriteMatrix.ts":
/*!*****************************************!*\
  !*** ./src/Game/Actors/spriteMatrix.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar gameObjTypes_1 = __webpack_require__(/*! ../Interfaces/gameObjTypes */ \"./src/Game/Interfaces/gameObjTypes.ts\");\nvar mainGameActor = [\n    { sx: 50, sy: 50, width: 140, hight: 140 },\n    { sx: 50, sy: 300, width: 150, hight: 150 },\n    { sx: 30, sy: 550, width: 190, hight: 190 },\n    { sx: 30, sy: 800, width: 190, hight: 190 },\n    { sx: 30, sy: 1050, width: 190, hight: 190 },\n    { sx: 50, sy: 1300, width: 190, hight: 210 },\n    { sx: 50, sy: 1550, width: 140, hight: 140 },\n    { sx: 30, sy: 1800, width: 190, hight: 190 },\n    { sx: 30, sy: 2050, width: 190, hight: 190 },\n    { sx: 50, sy: 2300, width: 140, hight: 150 },\n    { sx: 30, sy: 2550, width: 190, hight: 320 },\n    { sx: 30, sy: 3050, width: 190, hight: 190 },\n];\nvar mainHeroBullet = [\n    { sx: 300, sy: 125, width: 160, hight: 80 },\n    { sx: 320, sy: 360, width: 140, hight: 150 },\n    { sx: 230, sy: 550, width: 190, hight: 190 },\n    { sx: 230, sy: 800, width: 190, hight: 190 },\n    { sx: 330, sy: 1420, width: 120, hight: 120 },\n];\nvar enemyBullet = [\n    { sx: 580, sy: 3100, width: 160, hight: 120 },\n    { sx: 600, sy: 2820, width: 160, hight: 120 },\n    { sx: 600, sy: 2300, width: 120, hight: 120 },\n    { sx: 600, sy: 2026, width: 120, hight: 120 },\n    { sx: 620, sy: 1800, width: 100, hight: 120 },\n];\nvar enemy = [\n    { sx: 830, sy: 3050, width: 190, hight: 190 },\n    { sx: 830, sy: 2800, width: 190, hight: 320 },\n    { sx: 830, sy: 2550, width: 190, hight: 320 },\n    { sx: 830, sy: 2300, width: 190, hight: 320 },\n    { sx: 830, sy: 2050, width: 190, hight: 190 },\n    { sx: 830, sy: 1800, width: 190, hight: 190 },\n    { sx: 850, sy: 1550, width: 190, hight: 190 },\n    { sx: 830, sy: 1300, width: 190, hight: 190 },\n    { sx: 830, sy: 1050, width: 190, hight: 190 },\n    { sx: 860, sy: 800, width: 140, hight: 140 },\n    { sx: 820, sy: 450, width: 230, hight: 300 },\n    { sx: 820, sy: 100, width: 230, hight: 200 },\n];\nvar spriteMatrix = (_a = {},\n    _a[gameObjTypes_1.default.mainGameActor] = mainGameActor,\n    _a[gameObjTypes_1.default.mainHeroBullet] = mainHeroBullet,\n    _a[gameObjTypes_1.default.enemyTypeActor] = enemy,\n    _a[gameObjTypes_1.default.enemyBullet] = enemyBullet,\n    _a);\nexports.default = spriteMatrix;\n\n\n//# sourceURL=webpack:///./src/Game/Actors/spriteMatrix.ts?");

/***/ }),

/***/ "./src/Game/Interfaces/Direction.ts":
/*!******************************************!*\
  !*** ./src/Game/Interfaces/Direction.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Directions;\n(function (Directions) {\n    Directions[Directions[\"right\"] = 0] = \"right\";\n    Directions[Directions[\"left\"] = 1] = \"left\";\n    Directions[Directions[\"up\"] = 2] = \"up\";\n    Directions[Directions[\"down\"] = 3] = \"down\";\n})(Directions || (Directions = {}));\nexports.default = Directions;\n\n\n//# sourceURL=webpack:///./src/Game/Interfaces/Direction.ts?");

/***/ }),

/***/ "./src/Game/Interfaces/Events.ts":
/*!***************************************!*\
  !*** ./src/Game/Interfaces/Events.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Events;\n(function (Events) {\n    Events[Events[\"Keyboard\"] = 0] = \"Keyboard\";\n    Events[Events[\"Clock\"] = 1] = \"Clock\";\n    Events[Events[\"Collision\"] = 2] = \"Collision\";\n    Events[Events[\"Draw\"] = 3] = \"Draw\";\n})(Events || (Events = {}));\nexports.default = Events;\n\n\n//# sourceURL=webpack:///./src/Game/Interfaces/Events.ts?");

/***/ }),

/***/ "./src/Game/Interfaces/gameObjTypes.ts":
/*!*********************************************!*\
  !*** ./src/Game/Interfaces/gameObjTypes.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar gameObjectTypes;\n(function (gameObjectTypes) {\n    gameObjectTypes[\"mainGameActor\"] = \"mainActor\";\n    gameObjectTypes[\"enemyTypeActor\"] = \"enemyActor\";\n    gameObjectTypes[\"mainHeroBullet\"] = \"mainHeroBullet\";\n    gameObjectTypes[\"enemyBullet\"] = \"enemyBullet\";\n})(gameObjectTypes || (gameObjectTypes = {}));\nexports.default = gameObjectTypes;\n\n\n//# sourceURL=webpack:///./src/Game/Interfaces/gameObjTypes.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/Controllers/ClockController/index.ts":
/*!********************************************************************!*\
  !*** ./src/Game/mainGameUnit/Controllers/ClockController/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Controller_1 = __webpack_require__(/*! ../Controller */ \"./src/Game/mainGameUnit/Controllers/Controller.ts\");\nvar ClockController = /** @class */ (function (_super) {\n    __extends(ClockController, _super);\n    function ClockController() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    ClockController.prototype.eventHandler = function () {\n        //console.log('Main ClockController', this.eventsListeners);\n        this.eventsListeners.map(function (o) { return o.clock(); });\n    };\n    return ClockController;\n}(Controller_1.default));\nexports.default = ClockController;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/Controllers/ClockController/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/Controllers/CollisionsController/checkCollisionFunction/index.ts":
/*!************************************************************************************************!*\
  !*** ./src/Game/mainGameUnit/Controllers/CollisionsController/checkCollisionFunction/index.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction collides(x, y, r, b, x2, y2, r2, b2) {\n    //console.log('colliders', x,y, r, b, x2,y2, r2, b2,)\n    var res = !(r <= x2 || x > r2 || b <= y2 || y > b2);\n    return res;\n}\nexports.default = collides;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/Controllers/CollisionsController/checkCollisionFunction/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/Controllers/CollisionsController/index.ts":
/*!*************************************************************************!*\
  !*** ./src/Game/mainGameUnit/Controllers/CollisionsController/index.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Controller_1 = __webpack_require__(/*! ../Controller */ \"./src/Game/mainGameUnit/Controllers/Controller.ts\");\nvar checkCollisionFunction_1 = __webpack_require__(/*! ./checkCollisionFunction */ \"./src/Game/mainGameUnit/Controllers/CollisionsController/checkCollisionFunction/index.ts\");\nvar Direction_1 = __webpack_require__(/*! ../../../Interfaces/Direction */ \"./src/Game/Interfaces/Direction.ts\");\n//import collides from \"./checkCollisionFunction\";\nvar CollisionController = /** @class */ (function (_super) {\n    __extends(CollisionController, _super);\n    function CollisionController(game) {\n        var _this = _super.call(this) || this;\n        _this.game = game;\n        return _this;\n    }\n    CollisionController.prototype.eventHandler = function () {\n        var _this = this;\n        //console.log('collision controller', this.eventsListeners);\n        this.eventsListeners.map(function (o, i, arr) {\n            if (_this.checkObjectPositionForCollionWitGameFieldBorder(o)) {\n                o.borderCollisionHandler();\n            }\n            var shortArr = arr.slice(i + 1);\n            shortArr.map(function (oo) {\n                var collision = _this.checkObjectForCollision(o, oo);\n                if (collision) {\n                    o.collisionHandler(oo);\n                    oo.collisionHandler(o);\n                }\n            });\n        });\n    };\n    CollisionController.prototype.getBorderCollisionDirection = function (o) {\n        var dir = Direction_1.default.right;\n        if (o.xpos <= 0)\n            dir = Direction_1.default.left;\n        if (o.xpos + o.width >= this.game.width)\n            dir = Direction_1.default.right;\n        if (o.ypos <= 0)\n            dir = Direction_1.default.up;\n        if (o.ypos + o.height >= this.game.height)\n            dir = Direction_1.default.down;\n        return dir;\n    };\n    CollisionController.prototype.checkObjectPositionForCollionWitGameFieldBorder = function (o) {\n        var res = (o.xpos <= 0) || (o.xpos + o.width >= this.game.width)\n            || o.ypos <= 0 || (o.ypos + o.height >= this.game.height);\n        return res;\n    };\n    // TODO: !!!! add types!\n    CollisionController.prototype.checkObjectForCollision = function (o1, o2) {\n        var ax0 = o1.xpos, ay0 = o1.ypos, ax1 = ax0 + o1.width, ay1 = ay0 + o1.height;\n        var bx0 = o2.xpos, by0 = o2.ypos, bx1 = bx0 + o2.width, by1 = by0 + o2.height;\n        var isCollision = checkCollisionFunction_1.default(ax0, ay0, ax1, ay1, bx0, by0, bx1, by1);\n        // isCollision && console.log('collision', isCollision);//, o1, o2);\n        return isCollision;\n    };\n    return CollisionController;\n}(Controller_1.default));\nexports.default = CollisionController;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/Controllers/CollisionsController/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/Controllers/Controller.ts":
/*!*********************************************************!*\
  !*** ./src/Game/mainGameUnit/Controllers/Controller.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Controller = /** @class */ (function () {\n    function Controller() {\n        this.eventsListeners = [];\n    }\n    Controller.prototype.addNewEventListener = function (o) {\n        this.eventsListeners.push(o);\n    };\n    Controller.prototype.eventHandler = function (e) { return; };\n    Controller.prototype.removeEventListener = function (o) {\n        this.eventsListeners = this.eventsListeners.filter(function (el) { return el.id !== o.id; });\n    };\n    Controller.prototype.clear = function () {\n        this.eventsListeners = [];\n    };\n    return Controller;\n}());\nexports.default = Controller;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/Controllers/Controller.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/Controllers/DrawController/index.ts":
/*!*******************************************************************!*\
  !*** ./src/Game/mainGameUnit/Controllers/DrawController/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Controller_1 = __webpack_require__(/*! ../Controller */ \"./src/Game/mainGameUnit/Controllers/Controller.ts\");\nvar Actors_1 = __webpack_require__(/*! ../../../Actors/Actors */ \"./src/Game/Actors/Actors.ts\");\nvar DrawController = /** @class */ (function (_super) {\n    __extends(DrawController, _super);\n    function DrawController(width, height) {\n        var _this = _super.call(this) || this;\n        _this.width = width;\n        _this.height = height;\n        return _this;\n    }\n    DrawController.prototype.init = function (can) {\n        try {\n            can.width = this.width;\n            can.height = this.height;\n            can.style.background = 'black';\n            var ctx = can.getContext('2d');\n            if (!ctx)\n                throw new Error('Something went wrong with getContext in DrawController');\n            this.ctx = ctx;\n            console.log('init', can, this);\n        }\n        catch (e) {\n            console.log(e);\n        }\n    };\n    DrawController.prototype.draw = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                this.ctx.clearRect(0, 0, this.width, this.height);\n                this.eventsListeners.map(function (o) {\n                    _this.drawObject(o.getActorViewObject());\n                });\n                return [2 /*return*/];\n            });\n        });\n    };\n    DrawController.prototype.drawObject = function (o) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                this.ctx.drawImage(Actors_1.default.spritesImg, o.spriteXOffset, o.spriteYOffset, o.spriteWidth, o.spriteHeight, o.xpos, o.ypos, o.imageWidth, o.imageHeight);\n                return [2 /*return*/];\n            });\n        });\n    };\n    DrawController.prototype.drawMap = function (_map) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                _map.map(function (el) {\n                    el.draw && el.draw(_this.ctx);\n                });\n                return [2 /*return*/];\n            });\n        });\n    };\n    return DrawController;\n}(Controller_1.default));\nexports.default = DrawController;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/Controllers/DrawController/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/Controllers/KeyboardController/index.ts":
/*!***********************************************************************!*\
  !*** ./src/Game/mainGameUnit/Controllers/KeyboardController/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Controller_1 = __webpack_require__(/*! ../Controller */ \"./src/Game/mainGameUnit/Controllers/Controller.ts\");\nvar KeyboardController = /** @class */ (function (_super) {\n    __extends(KeyboardController, _super);\n    function KeyboardController() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    KeyboardController.prototype.eventHandler = function (e) {\n        // console.log('from KeyboardController', e);\n        this.eventsListeners.map(function (o) {\n            o.keyboardHandler && o.keyboardHandler(e);\n        });\n        this.gameFlowEngine.keyboardHandler(e);\n    };\n    KeyboardController.prototype.addGameFlowEngine = function (o) {\n        this.gameFlowEngine = o;\n    };\n    return KeyboardController;\n}(Controller_1.default));\nexports.default = KeyboardController;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/Controllers/KeyboardController/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/GameFlowEngine/index.ts":
/*!*******************************************************!*\
  !*** ./src/Game/mainGameUnit/GameFlowEngine/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar gameObjTypes_1 = __webpack_require__(/*! ../../Interfaces/gameObjTypes */ \"./src/Game/Interfaces/gameObjTypes.ts\");\nvar EnemyFactory_1 = __webpack_require__(/*! ../../Actors/DamageableActors/Enemy/EnemyFactory */ \"./src/Game/Actors/DamageableActors/Enemy/EnemyFactory/index.ts\");\nvar GameFlowEngine = /** @class */ (function () {\n    function GameFlowEngine(game) {\n        this.id = 'gameFlowEngine';\n        this.type = 'gameFlowEngine';\n        this.currentGameTime = 0;\n        this.enemyBornPeriod = 50;\n        this.game = game;\n        this.lastEnemyBornTime = 0;\n    }\n    GameFlowEngine.prototype.gameTic = function () {\n        this.currentGameTime = this.currentGameTime + 1;\n        this.addEnemyLogic();\n    };\n    GameFlowEngine.prototype.keyboardHandler = function (e) {\n        e.key === 'n'\n            && e.type === 'keyup'\n            && this.newGame();\n    };\n    GameFlowEngine.prototype.objectWasDestroyed = function (o) {\n        if (o.type === gameObjTypes_1.default.enemyTypeActor)\n            this.enemyWasDestroyed(o);\n    };\n    GameFlowEngine.prototype.newGame = function () {\n        this.game.newGame();\n    };\n    GameFlowEngine.prototype.newGameLevelHasReached = function () {\n        this.game.mainHeroInstance.maxHealth += 200;\n        var health = Math.min(this.game.mainHeroInstance.maxHealth, this.game.mainHeroInstance.health + 200);\n        this.game.mainHeroInstance.health = health;\n        this.game.scoreBoard.updateData({ health: health });\n    };\n    GameFlowEngine.prototype.restartGame = function () { return; }; //TODO: is it useful?\n    GameFlowEngine.prototype.enemyWasDestroyed = function (o) {\n        var score = o.maxHealth ? o.maxHealth / 10 : 0;\n        this.game.gameState.score += score;\n    };\n    GameFlowEngine.prototype.addEnemyLogic = function () {\n        if (this.currentGameTime - this.lastEnemyBornTime >= this.enemyBornPeriod) {\n            this.lastEnemyBornTime = this.currentGameTime;\n            var xpos = Math.random() * 400;\n            var enemy = new EnemyFactory_1.default().createEnemy(this.game, xpos, 20, this.game.gameState.level);\n            this.game.addObjectOnField(enemy);\n        }\n    };\n    return GameFlowEngine;\n}());\nexports.default = GameFlowEngine;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/GameFlowEngine/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/GameState/index.ts":
/*!**************************************************!*\
  !*** ./src/Game/mainGameUnit/GameState/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GameState = /** @class */ (function () {\n    function GameState(g) {\n        this.isHelpWindowOpen = false;\n        this.game = g;\n        this._score = 0;\n        this._health = 0;\n        this._level = 0;\n        this._isPaused = false;\n        this._isGameOver = false;\n    }\n    Object.defineProperty(GameState.prototype, \"score\", {\n        get: function () {\n            return this._score;\n        },\n        set: function (data) {\n            this._score = data;\n            this.calculateGameLevel(data);\n            this.updateScoreboard('score', data);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(GameState.prototype, \"health\", {\n        get: function () {\n            return this._health;\n        },\n        set: function (data) {\n            var dh = 0;\n            if (this._health)\n                dh = data - this._health;\n            this._health = data;\n            this.updateScoreboard('health', data);\n            dh && this.game.scoreBoard.sendFlyingMessage(dh + \" health\", 'danger');\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(GameState.prototype, \"isPaused\", {\n        get: function () {\n            return this._isPaused;\n        },\n        set: function (data) {\n            this._isPaused = data;\n            this.updateScoreboard('isPaused', data);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(GameState.prototype, \"isGameOver\", {\n        get: function () {\n            return this._isGameOver;\n        },\n        set: function (data) {\n            this._isGameOver = data;\n            this.updateScoreboard('isGameOver', data);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(GameState.prototype, \"level\", {\n        get: function () {\n            return this._level;\n        },\n        set: function (data) {\n            this._level = data;\n            this.updateScoreboard('level', data);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    GameState.prototype.resetScoreBoard = function () {\n        this._score = 0;\n        this._health = 0;\n        this._level = 0;\n        this._isPaused = false;\n        this._isGameOver = false;\n        var data = { score: 0, health: 0, level: 0, isPaused: false, isGameOver: false };\n        this.game.scoreBoard.updateData(data);\n    };\n    GameState.prototype.updateScoreboard = function (indicator, value) {\n        var _a;\n        var data = (_a = {}, _a[indicator] = value, _a);\n        this.game.scoreBoard.updateData(data);\n    };\n    GameState.prototype.calculateGameLevel = function (score) {\n        if (score >= 200 * this.level) {\n            this.level = Math.min(this.level + 1, 8);\n            this.game.gameFlowEngine.newGameLevelHasReached();\n        }\n    };\n    return GameState;\n}());\nexports.default = GameState;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/GameState/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/ScoreBoard/Indicators/index.ts":
/*!**************************************************************!*\
  !*** ./src/Game/mainGameUnit/ScoreBoard/Indicators/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Indicators = /** @class */ (function () {\n    function Indicators(parentDiv, capture) {\n        this._value = 0;\n        this.capture = capture;\n        this.parent = parentDiv;\n        var div = document.createElement('div');\n        div.style.width = '100%';\n        div.innerHTML = this.renderHTML();\n        // TODO: here is a problem with type;\n        this.full = div.getElementsByClassName('full').item(0);\n        this.blank = div.getElementsByClassName('blank').item(0);\n        this.parent.appendChild(div);\n        if (!this.full)\n            throw new Error('div full was not found');\n        if (!this.blank)\n            throw new Error('div blank was not found');\n        this.full.style.width = '100%';\n        this.blank.style.width = '0%';\n        this._value = 1;\n    }\n    Object.defineProperty(Indicators.prototype, \"value\", {\n        get: function () {\n            return this._value;\n        },\n        set: function (data) {\n            if (data > 1)\n                throw new Error('Value of the indicator has to be less then 1');\n            this._value = data;\n            var fval = Math.round(data * 100);\n            if (this.full)\n                this.full.style.width = fval + \"%\";\n            if (this.blank)\n                this.blank.style.width = 100 - fval + \"%\";\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Indicators.prototype.renderHTML = function () {\n        /*html*/\n        return \"\\n      <div class=\\\"indicatorWrapper\\\" id =\\\"\" + this.capture + \"\\\">\\n        <div class=\\\"capture\\\">\" + this.capture + \"</div>\\n        <div class=\\\"full\\\"></div>\\n        <div class=\\\"blank\\\"></div>\\n      </div>\\n    \";\n    };\n    return Indicators;\n}());\nexports.default = Indicators;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/ScoreBoard/Indicators/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/ScoreBoard/ModalMessages/index.ts":
/*!*****************************************************************!*\
  !*** ./src/Game/mainGameUnit/ScoreBoard/ModalMessages/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ModalWindow = /** @class */ (function () {\n    function ModalWindow(name, content) {\n        this.name = name;\n        this.content = content;\n        this.mySelf = document.createElement('div');\n        this.mySelf.classList.add('modal');\n        this.mySelf.innerHTML = this.render();\n        document.body.appendChild(this.mySelf);\n    }\n    ModalWindow.prototype.destroy = function () {\n        this.mySelf.remove();\n    };\n    ModalWindow.prototype.show = function () {\n        this.mySelf.classList.toggle('show-modal');\n    };\n    ModalWindow.prototype.hide = function () {\n        this.mySelf.classList.toggle('show-modal');\n    };\n    ModalWindow.prototype.render = function () {\n        /*html*/\n        return \"\\n      <div class=\\\"modal-content my-text\\\">\\n        <h2>\" + name + \"</h2>\\n        <p>\" + this.content + \"</p>\\n      </div>\\n    \";\n    };\n    return ModalWindow;\n}());\nexports.default = ModalWindow;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/ScoreBoard/ModalMessages/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/ScoreBoard/flyingIndicator/index.ts":
/*!*******************************************************************!*\
  !*** ./src/Game/mainGameUnit/ScoreBoard/flyingIndicator/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar FlyingIndicator = /** @class */ (function () {\n    function FlyingIndicator(parentDiv, info, type, MaxYOffset) {\n        if (type === void 0) { type = 'info'; }\n        if (MaxYOffset === void 0) { MaxYOffset = 600; }\n        this.counter = 10;\n        this.type = type;\n        this.info = info;\n        var div = document.createElement('div');\n        this.maxYOffset = MaxYOffset;\n        div.style.width = '100%';\n        div.innerHTML = this.renderHTML();\n        parentDiv.appendChild(div);\n        this.wrapperHtml = div;\n        this.selfHtmlElement = div.firstElementChild;\n        this.selfHtmlElement.style.bottom = '10px';\n        var xpos = this.getXPosForIndicator();\n        this.selfHtmlElement.style.left = xpos + \"px\";\n        if (!this.selfHtmlElement)\n            throw new Error('FlyingIndicator element was not found.');\n        this.setCounter();\n    }\n    FlyingIndicator.prototype.incCounter = function () {\n        var _a;\n        ++this.counter;\n        var opacity = (this.counter / this.maxYOffset < 0.9)\n            ? 1\n            : (1 - 10 * (this.counter / this.maxYOffset - 0.9)).toFixed(2);\n        if (this.selfHtmlElement) {\n            this.selfHtmlElement.style.bottom = this.counter + 10 + \"px\";\n            this.selfHtmlElement.style.opacity = \"\" + opacity;\n        }\n        if (this.counter >= this.maxYOffset) {\n            clearInterval(this.setIntervalId);\n            (_a = this.wrapperHtml) === null || _a === void 0 ? void 0 : _a.remove();\n        }\n    };\n    FlyingIndicator.prototype.setCounter = function () {\n        this.setIntervalId = setInterval(this.incCounter.bind(this), 15);\n    };\n    FlyingIndicator.prototype.renderHTML = function () {\n        /*html*/\n        return \"\\n      <div class=\\\"FlyingIndicator \" + this.type + \"\\\">\\n        <p>\" + this.info + \"\\n      </div>\\n    \";\n    };\n    FlyingIndicator.prototype.getXPosForIndicator = function () {\n        var xpos;\n        var windowWidth = window.innerWidth;\n        if (windowWidth <= 620) {\n            xpos = 620 + 120 * Math.random() - 120;\n        }\n        else if (windowWidth >= 740) {\n            xpos = 740 + 120 * Math.random() - 120;\n        }\n        else {\n            xpos = windowWidth + 120 * Math.random() - 120;\n        }\n        return xpos;\n    };\n    return FlyingIndicator;\n}());\nexports.default = FlyingIndicator;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/ScoreBoard/flyingIndicator/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/ScoreBoard/getNewIndicator/index.ts":
/*!*******************************************************************!*\
  !*** ./src/Game/mainGameUnit/ScoreBoard/getNewIndicator/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getNewIndicator(parentDiv, name) {\n    var divWrap = document.createElement('div');\n    divWrap.style.width = '100%';\n    divWrap.style.height = '30px';\n    var healthCapture = document.createElement('div');\n    healthCapture.innerHTML = name + \":\";\n    healthCapture.style.width = '50%';\n    healthCapture.style.float = 'left';\n    var healthValue = document.createElement('div');\n    healthValue.innerHTML = \"-\";\n    healthValue.style.float = 'left';\n    healthValue.style.width = '40%';\n    divWrap.appendChild(healthCapture);\n    divWrap.appendChild(healthValue);\n    parentDiv.appendChild(divWrap);\n    return healthValue;\n}\nexports.default = getNewIndicator;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/ScoreBoard/getNewIndicator/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/ScoreBoard/help.js":
/*!**************************************************!*\
  !*** ./src/Game/mainGameUnit/ScoreBoard/help.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (`\n  <- Left<br/>\n  -> right<br/>\n  [space] - fire<br/>\n  p - pause<br/>\n  h - help<br/>\n  n - new game<br/>\n`);\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/ScoreBoard/help.js?");

/***/ }),

/***/ "./src/Game/mainGameUnit/ScoreBoard/index.ts":
/*!***************************************************!*\
  !*** ./src/Game/mainGameUnit/ScoreBoard/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar getNewIndicator_1 = __webpack_require__(/*! ./getNewIndicator */ \"./src/Game/mainGameUnit/ScoreBoard/getNewIndicator/index.ts\");\nvar Indicators_1 = __webpack_require__(/*! ./Indicators */ \"./src/Game/mainGameUnit/ScoreBoard/Indicators/index.ts\");\nvar flyingIndicator_1 = __webpack_require__(/*! ./flyingIndicator */ \"./src/Game/mainGameUnit/ScoreBoard/flyingIndicator/index.ts\");\nvar ModalMessages_1 = __webpack_require__(/*! ./ModalMessages */ \"./src/Game/mainGameUnit/ScoreBoard/ModalMessages/index.ts\");\nvar help_1 = __webpack_require__(/*! ./help */ \"./src/Game/mainGameUnit/ScoreBoard/help.js\");\nvar ScoreBoard = /** @class */ (function () {\n    function ScoreBoard(game) {\n        this.game = game;\n    }\n    ScoreBoard.prototype.init = function (div) {\n        this.rootDiv = div;\n        this.health = getNewIndicator_1.default(div, 'Health');\n        this.score = getNewIndicator_1.default(div, 'Score');\n        this.level = getNewIndicator_1.default(div, 'Level');\n        this.status = getNewIndicator_1.default(div, 'Status');\n        this.new = new Indicators_1.default(div, 'Health');\n        this.sendFlyingMessage();\n        this.pauseModalMessage = new ModalMessages_1.default('Нажата пауза', 'Нажата пауза');\n        this.helpModalMessage = new ModalMessages_1.default('', help_1.default);\n    };\n    ScoreBoard.prototype.updateIndicator = function (name, data) {\n        if (name === 'isPaused' || name === 'isGameOver')\n            return;\n        this[name].innerHTML = data.toString();\n    };\n    ScoreBoard.prototype.updateData = function (data) {\n        if ('health' in data && data.health)\n            this.updateIndicator('health', data.health);\n        if ('health' in data && data.health) {\n            var maxHealth = this.game.mainHeroInstance\n                ? this.game.mainHeroInstance.maxHealth\n                : 900;\n            this.new.value = data.health / maxHealth;\n        }\n        if ('score' in data && data.score)\n            this.updateIndicator('score', data.score);\n        if ('level' in data && data.level !== undefined)\n            this.updateIndicator('level', data.level);\n        if ('isPaused' in data)\n            if (data.isPaused)\n                this.updateIndicator('status', 'paused');\n        if ('isGameOver' in data)\n            if (data.isGameOver)\n                this.updateIndicator('status', 'game over');\n        if ('isPaused' in data && !data.isPaused)\n            this.updateIndicator('status', 'game');\n    };\n    ScoreBoard.prototype.sendFlyingMessage = function (msg, type) {\n        if (msg === void 0) { msg = 'Go Go Go!'; }\n        if (type === void 0) { type = 'info'; }\n        new flyingIndicator_1.default(this.rootDiv, msg, type);\n    };\n    return ScoreBoard;\n}());\nexports.default = ScoreBoard;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/ScoreBoard/index.ts?");

/***/ }),

/***/ "./src/Game/mainGameUnit/index.ts":
/*!****************************************!*\
  !*** ./src/Game/mainGameUnit/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar KeyboardController_1 = __webpack_require__(/*! ./Controllers/KeyboardController */ \"./src/Game/mainGameUnit/Controllers/KeyboardController/index.ts\");\nvar ClockController_1 = __webpack_require__(/*! ./Controllers/ClockController */ \"./src/Game/mainGameUnit/Controllers/ClockController/index.ts\");\nvar DrawController_1 = __webpack_require__(/*! ./Controllers/DrawController */ \"./src/Game/mainGameUnit/Controllers/DrawController/index.ts\");\nvar Events_1 = __webpack_require__(/*! ../Interfaces/Events */ \"./src/Game/Interfaces/Events.ts\");\nvar GameFlowEngine_1 = __webpack_require__(/*! ./GameFlowEngine */ \"./src/Game/mainGameUnit/GameFlowEngine/index.ts\");\nvar Hero_1 = __webpack_require__(/*! ../Actors/DamageableActors/Hero */ \"./src/Game/Actors/DamageableActors/Hero/index.ts\");\nvar CollisionsController_1 = __webpack_require__(/*! ./Controllers/CollisionsController */ \"./src/Game/mainGameUnit/Controllers/CollisionsController/index.ts\");\nvar ScoreBoard_1 = __webpack_require__(/*! ./ScoreBoard */ \"./src/Game/mainGameUnit/ScoreBoard/index.ts\");\nvar GameState_1 = __webpack_require__(/*! ./GameState */ \"./src/Game/mainGameUnit/GameState/index.ts\");\nvar MainGame = /** @class */ (function () {\n    function MainGame(width, height) {\n        var _this = this;\n        this.events = Events_1.default;\n        this.gameFlowEngine = new GameFlowEngine_1.default(this);\n        this.gameState = new GameState_1.default(this);\n        this.scoreBoard = new ScoreBoard_1.default(this);\n        this.keyboardController = new KeyboardController_1.default();\n        this.clockController = new ClockController_1.default();\n        this.collisionController = new CollisionsController_1.default(this);\n        this.clock = function () { return __awaiter(_this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                if (this.gameState.isPaused)\n                    return [2 /*return*/];\n                this.gameFlowEngine.gameTic();\n                this.collisionController.eventHandler();\n                this.clockController.eventHandler();\n                this.drawController.draw();\n                return [2 /*return*/];\n            });\n        }); };\n        this.addObjectOnField = function (o) {\n            o.subscribes.map(function (el) { return _this.subscriber(el, o); });\n        };\n        try {\n            this.width = width;\n            this.height = height;\n            this.canvasOnHtml = document.createElement('canvas');\n            var gameDiv = document.getElementById('game');\n            if (!gameDiv)\n                throw new Error('Cant find element #game in html');\n            gameDiv.appendChild(this.canvasOnHtml);\n            this.drawController = new DrawController_1.default(width, height);\n            var scoreDiv = document.getElementById('score');\n            if (!scoreDiv)\n                throw new Error('Cant find element #score in html');\n            this.scoreBoard.init(scoreDiv);\n        }\n        catch (e) {\n            console.log(e);\n        }\n    }\n    MainGame.prototype.initGame = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                this.drawController.init(this.canvasOnHtml);\n                this.startGame();\n                console.log('init game done');\n                return [2 /*return*/];\n            });\n        });\n    };\n    MainGame.prototype.keyboardHandler = function (e) {\n        if (e.type === 'keyup' && e.key === 'p')\n            this.gamePauseSwitch();\n        if (e.type === 'keyup' && e.key === 'h')\n            this.gameHelpSwitch();\n        this.keyboardController.eventHandler(e);\n    };\n    MainGame.prototype.removeObjectFromField = function (o) {\n        var _this = this;\n        o.subscribes.map(function (el) { return _this.unSubscribe(el, o); });\n    };\n    MainGame.prototype.newGame = function () {\n        this.scoreBoard.sendFlyingMessage('New game', 'good');\n        this.resetGame();\n        this.startGame();\n    };\n    MainGame.prototype.gameOver = function () {\n        this.scoreBoard.sendFlyingMessage('Game over', 'danger');\n        this.newGame();\n    };\n    MainGame.prototype.gameHelpSwitch = function () {\n        if (this.gameState.isPaused)\n            return;\n        this.gameState.isPaused = !this.gameState.isPaused;\n        this.gameState.isHelpWindowOpen = !this.gameState.isHelpWindowOpen;\n        if (this.gameState.isHelpWindowOpen) {\n            this.scoreBoard.helpModalMessage.show();\n        }\n        else {\n            this.scoreBoard.helpModalMessage.hide();\n        }\n    };\n    MainGame.prototype.gamePauseSwitch = function () {\n        if (this.gameState.isHelpWindowOpen)\n            return;\n        this.gameState.isPaused = !this.gameState.isPaused;\n        if (this.gameState.isPaused) {\n            this.scoreBoard.pauseModalMessage.show();\n        }\n        else {\n            this.scoreBoard.pauseModalMessage.hide();\n        }\n    };\n    MainGame.prototype.startGame = function () {\n        this.keyboardController.addGameFlowEngine(this.gameFlowEngine);\n        var hero = new Hero_1.default(this, 200, 800);\n        this.gameState.resetScoreBoard();\n        this.addObjectOnField(hero);\n        this.mainHeroInstance = hero;\n    };\n    MainGame.prototype.resetGame = function () {\n        this.drawController.clear();\n        this.keyboardController.clear();\n        this.clockController.clear();\n        this.collisionController.clear();\n        this.gameState.resetScoreBoard();\n    };\n    MainGame.prototype.unSubscribe = function (el, obj) {\n        var _a;\n        var _this = this;\n        var switcher = (_a = {},\n            _a[Events_1.default.Keyboard] = function () { return _this.keyboardController.removeEventListener(obj); },\n            _a[Events_1.default.Draw] = function () { return _this.drawController.removeEventListener(obj); },\n            _a[Events_1.default.Clock] = function () { return _this.clockController.removeEventListener(obj); },\n            _a[Events_1.default.Collision] = function () { return _this.collisionController.removeEventListener(obj); },\n            _a);\n        switcher[el]();\n    };\n    MainGame.prototype.subscriber = function (el, obj) {\n        var _a;\n        var _this = this;\n        var switcher = (_a = {},\n            _a[Events_1.default.Keyboard] = function () { return _this.keyboardController.addNewEventListener(obj); },\n            _a[Events_1.default.Draw] = function () { return _this.drawController.addNewEventListener(obj); },\n            _a[Events_1.default.Clock] = function () { return _this.clockController.addNewEventListener(obj); },\n            _a[Events_1.default.Collision] = function () { return _this.collisionController.addNewEventListener(obj); },\n            _a);\n        switcher[el]();\n    };\n    return MainGame;\n}());\nexports.default = MainGame;\n\n\n//# sourceURL=webpack:///./src/Game/mainGameUnit/index.ts?");

/***/ }),

/***/ "./src/assets/space_background.jpg":
/*!*****************************************!*\
  !*** ./src/assets/space_background.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3d2c61cec65b3e88ebdf74c98a11b0ac.jpg\");\n\n//# sourceURL=webpack:///./src/assets/space_background.jpg?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mainGameUnit_1 = __webpack_require__(/*! ./Game/mainGameUnit */ \"./src/Game/mainGameUnit/index.ts\");\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\nvar space_background_jpg_1 = __webpack_require__(/*! ./assets/space_background.jpg */ \"./src/assets/space_background.jpg\");\n(function () {\n    return __awaiter(this, void 0, void 0, function () {\n        var game;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    game = new mainGameUnit_1.default(400, 900);\n                    return [4 /*yield*/, game.initGame()];\n                case 1:\n                    _a.sent();\n                    console.log('===============>', game);\n                    setInterval(game.clock, 30);\n                    window.addEventListener('keydown', function (e) { return game.keyboardHandler(e); });\n                    window.addEventListener('keyup', function (e) { return game.keyboardHandler(e); });\n                    return [2 /*return*/];\n            }\n        });\n    });\n})();\nconsole.log('-----!>', space_background_jpg_1.default);\ndocument.body.style.backgroundImage = 'https://ultimate-game-mixup.fandom.com/ru/wiki/%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81?file=Kosmos.jpg';\ndocument.body.style.backgroundImage = space_background_jpg_1.default;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });