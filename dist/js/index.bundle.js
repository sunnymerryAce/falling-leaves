/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/webpack/helper/userAgent.js":
/*!*****************************************!*\
  !*** ./src/webpack/helper/userAgent.js ***!
  \*****************************************/
/*! exports provided: isIOS, isSp, isIE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSp", function() { return isSp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
var ua = navigator.userAgent.toLowerCase();
var isIOS = function isIOS() {
  return /iphone|ipad|ipod/.test(ua);
};
var isSp = function isSp() {
  return /iphone|ipod|android/.test(ua);
};
var isIE = function isIE() {
  return /msie|trident/.test(ua);
};

/***/ }),

/***/ "./src/webpack/helper/util.js":
/*!************************************!*\
  !*** ./src/webpack/helper/util.js ***!
  \************************************/
/*! exports provided: getNumberFromString, isSpView, getRandomInt, getOuterWidth, enablePassiveEventListeners, getComputedTranslateXY, setComputedTranslateXY, getTransitionendName, hasCssProperty, getQueryObject, getQueryParameters, getCookieParameters, shuffleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberFromString", function() { return getNumberFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpView", function() { return isSpView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterWidth", function() { return getOuterWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePassiveEventListeners", function() { return enablePassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedTranslateXY", function() { return getComputedTranslateXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComputedTranslateXY", function() { return setComputedTranslateXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionendName", function() { return getTransitionendName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCssProperty", function() { return hasCssProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryObject", function() { return getQueryObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParameters", function() { return getQueryParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookieParameters", function() { return getCookieParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4__);





var getNumberFromString = function getNumberFromString(string) {
  return parseInt(string, 10);
};
var isSpView = function isSpView() {
  return matchMedia('(max-width: 768px)').matches;
};
/**
 * 乱数取得
 * min から max までの乱整数を返す関数
 * Math.round() を用いると非一様分布
 * @param {Number} min
 * @param {Number} max
 */

var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/*
 * Outer Width With Margin
 */

var getOuterWidth = function getOuterWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
  return width;
};
/**
 * passive:trueが使えるかどうかを判定する
 */

var enablePassiveEventListeners = function enablePassiveEventListeners() {
  var result = false;
  var opts = Object.defineProperty && Object.defineProperty({}, 'passive', {
    get: function get() {
      result = true;
    }
  });
  document.addEventListener('test', function () {}, opts);
  return result;
};
var getComputedTranslateXY = function getComputedTranslateXY(dom) {
  var transArr = [];
  if (!window.getComputedStyle) return;
  var style = getComputedStyle(dom);
  var transform = style.transform || style.webkitTransform || style.mozTransform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) return parseFloat(mat[1].split(', ')[13]);
  mat = transform.match(/^matrix\((.+)\)$/);
  mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : 0;
  mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : 0;
  return transArr;
};
var setComputedTranslateXY = function setComputedTranslateXY(dom, position) {
  var style = getComputedStyle(dom);
  var transform = style.transform || style.webkitTransform || style.mozTransform;

  if (transform) {
    var mat = transform.match(/^matrix3d\((.+)\)$/);

    if (mat) {
      dom.style.transform = "matrix3d(".concat(position.x, "px,").concat(position.y, "px)");
      return;
    }

    mat = transform.match(/^matrix\((.+)\)$/);

    if (mat) {
      dom.style.transform = "matrix(".concat(position.x, "px,").concat(position.y, "px)");
    }
  } else {
    dom.style.transform = "matrix(".concat(position.x, "px,").concat(position.y, "px)");
    return;
  }
};
var getTransitionendName = function getTransitionendName() {
  var el = document.createElement('test');
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };
  var key;

  for (key in transitions) {
    if (el.style[key] !== undefined) {
      return transitions[key];
    }
  }

  return false;
};
var hasCssProperty = function hasCssProperty(key) {
  var styles = getComputedStyle(document.body);
  var vendors = ['', 'ms', 'moz', 'webkit', 'o'];
  var result = false;
  var style;
  vendors.forEach(function (vendor) {
    if (result) return;

    if (vendor === '') {
      style = key;
    } else {
      style = key.replace(/^[a-z]/, key.charAt(0).toUpperCase());
    }

    result = styles.hasOwnProperty("".concat(vendor).concat(style));
  });
  return result;
};
var getQueryObject = function getQueryObject() {
  var object = {};
  var arrQueries = location.search.replace(/^\?/, '').split('&');
  arrQueries.forEach(function (query) {
    var key = query.split('=')[0];
    var val = query.split('=')[1];
    object[key] = val;
  });
  return object;
};
/**
 * [getQueryParameters description]
 *
 * location.search.substr(1)
 * element.getAttribute('href').replace(/^http(.*?)\?/, '')
 */

var getQueryParameters = function getQueryParameters(target) {
  var text = target;
  return text.split('&').reduce(function (obj, v) {
    var pair = v.split('=');
    obj[pair[0]] = pair[1];
    if (obj[pair[0]]) return obj;
  }, {});
};
var getCookieParameters = function getCookieParameters() {
  return document.cookie.split(';').reduce(function (obj, v) {
    var pair = v.split('=');
    obj[pair[0]] = pair[1];
    if (obj[pair[0]]) return obj;
  }, {});
};
var shuffleArray = function shuffleArray(array) {
  var n = array.length,
      t,
      i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return array;
};

/***/ }),

/***/ "./src/webpack/index.js":
/*!******************************!*\
  !*** ./src/webpack/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_FallingLeaves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/FallingLeaves */ "./src/webpack/modules/FallingLeaves.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Index =
/**
 * constructor
 */
function Index() {
  _classCallCheck(this, Index);

  console.log('ss');
  new _modules_FallingLeaves__WEBPACK_IMPORTED_MODULE_0__["default"]();
};

window.addEventListener('DOMContentLoaded', function () {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});

/***/ }),

/***/ "./src/webpack/modules/FallingLeaves.js":
/*!**********************************************!*\
  !*** ./src/webpack/modules/FallingLeaves.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FallingLeaves; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Leaf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Leaf */ "./src/webpack/modules/Leaf.js");
/* harmony import */ var _helper_userAgent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/userAgent */ "./src/webpack/helper/userAgent.js");
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper/util */ "./src/webpack/helper/util.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/**
 * 落葉アニメーション
 */

var FallingLeaves =
/*#__PURE__*/
function () {
  function FallingLeaves() {
    _classCallCheck(this, FallingLeaves);

    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame; // canvas要素の取得

    this.canvas = document.querySelector('.js-canvas-leaves');
    this.ctx = this.canvas.getContext('2d'); // 葉の画像の配列

    this.leafImages = []; // 葉の位置情報を格納する配列

    this.leaves = []; // 後面の葉の総計

    this.leavesCount = 6; // 前面のブラーの葉の総計

    this.blurLeavesCount = 3; // 葉のデフォルトのサイズ

    this.size = Object(_helper_userAgent__WEBPACK_IMPORTED_MODULE_6__["isSp"])() ? 0.3 : 0.5;
    this.initialize();
  }

  _createClass(FallingLeaves, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      // リサイズ時にcanvasの大きさを調整する
      window.addEventListener('resize', function () {
        _this.resize();
      });
      this.resize();
      this.loadImages();
    } // canvasサイズを画面に合わせる

  }, {
    key: "resize",
    value: function resize() {
      // canvasの幅と高さを設定
      var container = document.querySelector('.js-canvas-container');
      this.ctx.canvas.width = container.getBoundingClientRect().width;
      this.ctx.canvas.height = container.getBoundingClientRect().height; // 葉のインスタンスにも高さを再設定

      for (var i = 0; i < this.leaves.length; i += 1) {
        this.leaves[i].canvasHeight = this.ctx.canvas.height;
      }
    } // 葉の画像を読み込む

  }, {
    key: "loadImages",
    value: function () {
      var _loadImages = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var src, promises, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                src = ['/images/leaf-medium-01.png', '/images/leaf-medium-02.png', '/images/leaf-blur.png'];
                promises = [];

                for (i = 0; i < src.length; i++) {
                  promises.push(this.loadImage(src[i], i));
                }

                _context.next = 5;
                return Promise.all(promises);

              case 5:
                this.initLeaves();
                this.loop();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function loadImages() {
        return _loadImages.apply(this, arguments);
      };
    }()
  }, {
    key: "loadImage",
    value: function loadImage(src, i) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.leafImages[i] = new Image();

        _this2.leafImages[i].onload = function () {
          resolve();
        };

        _this2.leafImages[i].src = src;
      });
    } // 落ち葉のパラメータを初期化する

  }, {
    key: "initLeaves",
    value: function initLeaves() {
      // 後面パターン1の葉
      for (var i = 0; i < this.leavesCount / 2 + 1; i += 1) {
        this.leaves.push(new _Leaf__WEBPACK_IMPORTED_MODULE_5__["default"](this.ctx, this.leafImages[0], this.size * Object(_helper_util__WEBPACK_IMPORTED_MODULE_7__["getRandomInt"])(7, 9) / 10, this.ctx.canvas.height));
      } // 後面パターン2の葉


      for (var _i = 0; _i < this.leavesCount / 2; _i += 1) {
        this.leaves.push(new _Leaf__WEBPACK_IMPORTED_MODULE_5__["default"](this.ctx, this.leafImages[1], this.size * Object(_helper_util__WEBPACK_IMPORTED_MODULE_7__["getRandomInt"])(7, 9) / 10, this.ctx.canvas.height));
      } // ブラーの葉


      for (var _i2 = 0; _i2 < this.blurLeavesCount; _i2 += 1) {
        this.leaves.push(new _Leaf__WEBPACK_IMPORTED_MODULE_5__["default"](this.ctx, this.leafImages[2], this.size, this.ctx.canvas.height));
      }
    } // 描画のループ処理

  }, {
    key: "loop",
    value: function loop() {
      // 描画をクリア
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); // 描画

      for (var i = 0; i < this.leavesCount + this.blurLeavesCount; i += 1) {
        this.leaves[i].draw();
        this.leaves[i].update();
      }

      window.requestAnimationFrame(this.loop.bind(this));
    }
  }]);

  return FallingLeaves;
}();



/***/ }),

/***/ "./src/webpack/modules/Leaf.js":
/*!*************************************!*\
  !*** ./src/webpack/modules/Leaf.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Leaf; });
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/util */ "./src/webpack/helper/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * 単体の葉を扱うクラス
 */

var Leaf =
/*#__PURE__*/
function () {
  function Leaf(ctx, leaf, size, canvasHeight) {
    _classCallCheck(this, Leaf);

    this.ctx = ctx;
    this.leaf = leaf;
    this.size = size;
    this.canvasHeight = canvasHeight;
    this.setInitialPosition();
  }
  /**
   * 初期位置を設定する
   */


  _createClass(Leaf, [{
    key: "setInitialPosition",
    value: function setInitialPosition() {
      // 横位置 右方向になびかせるため、左寄りに初期位置を設定する
      this.positionX = Object(_helper_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(-window.innerWidth * 0.2, window.innerWidth * 0.8); // 縦位置

      this.positionY = Object(_helper_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0 - this.leaf.height * 2, this.canvasHeight / 2); // 角度

      this.angle = Math.random() * 360; // 落下速度

      this.speed = Object(_helper_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(5, 7) * this.size; // 横風の強さ

      this.wind = Object(_helper_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(1, 7) / 10;
    }
    /**
     * 葉の座標を動かす
     */

  }, {
    key: "update",
    value: function update() {
      this.positionX += this.wind;
      this.positionY += this.speed;
      this.angle += this.speed / 3;

      if (this.angle > 360) {
        this.angle = 0;
      } // 画面最下部まで達した場合


      if (this.positionY > this.canvasHeight + this.leaf.height) {
        // 位置の再設定
        this.setInitialPosition(); // 開始の高さはビューポートの上に設定

        this.positionY = 0 - Object(_helper_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, this.leaf.height);
      }
    }
    /**
     * 葉を描画する
     */

  }, {
    key: "draw",
    value: function draw() {
      // キャンバスの回転、座標を設定
      var cos = Math.cos(this.angle * Math.PI / 180);
      var sin = Math.sin(this.angle * Math.PI / 180);
      this.ctx.setTransform(cos, sin, sin, cos, this.positionX, this.positionY); // 描画

      this.ctx.drawImage(this.leaf, 0, 0, this.leaf.width * this.size, this.leaf.height * this.size); // キャンバスを元の位置に戻す

      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  }]);

  return Leaf;
}();



/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/webpack/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yoichiro.hirano/Documents/MyPlayground/FallingLeaves/src/webpack/index.js */"./src/webpack/index.js");


/***/ })

/******/ });