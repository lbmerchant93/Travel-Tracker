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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".login-article {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 300px;\n  width: 200px;\n  border: 1px solid #233d4d; }\n\n.login-msg {\n  text-align: center;\n  font-size: large; }\n\ninput,\nlabel {\n  display: block;\n  margin: 5px; }\n\n.password,\n.username {\n  margin: 5px; }\n\n.error-msg {\n  text-align: center;\n  font-size: small; }\n\n.plane-img {\n  align-self: center;\n  height: 50px;\n  width: 50px;\n  background: #8cada7; }\n\n.current-trip,\n.past-trips-container,\n.pending-trips-container,\n.upcoming-trips-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 0; }\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 5px;\n  padding: 10px;\n  min-height: 250px;\n  min-width: 200px;\n  max-height: 250px;\n  max-width: 200px;\n  border: 1px solid #233d4d; }\n\n.details,\n.trip-destination {\n  margin: 15px 0 0; }\n\n.card-image {\n  max-width: auto;\n  max-height: 50%;\n  min-width: auto;\n  min-height: 50%; }\n\n.request-trip-container {\n  grid-area: request;\n  border: 1px solid #233d4d;\n  margin: 0 10px;\n  padding: 5px;\n  display: grid;\n  grid-template-rows: 3fr 1fr; }\n\n.input-options {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.new-trip-cost {\n  text-align: center;\n  word-wrap: break-word; }\n\n.button-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\nlabel {\n  align-self: center; }\n\ninput,\nselect {\n  margin: 0 5px;\n  max-height: 18px;\n  align-self: center; }\n\nbody {\n  background: #8cada7;\n  font-family: \"Quicksand\", sans-serif;\n  font-weight: lighter;\n  display: flex;\n  justify-content: center;\n  color: black;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0; }\n\n.main-dashboard {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas: \"header header\" \"request request\" \"aside main\" \"footer footer\"; }\n\nheader {\n  grid-area: header;\n  padding: 0 10px 10px;\n  font-size: small;\n  display: grid;\n  grid-template-columns: 3fr 3fr;\n  grid-template-areas: \"greeting title\"; }\n\n.greeting {\n  grid-area: greeting; }\n\n.title {\n  grid-area: title; }\n\n.greeting,\n.title {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: flex-end; }\n\n.total-spent,\n.welcome-message {\n  margin: 0;\n  text-align: left; }\n\n.total-spent {\n  margin-top: 5px;\n  font-size: smaller; }\n\n.site-title,\n.todays-date {\n  margin: 0;\n  text-align: right; }\n\naside {\n  grid-area: aside;\n  padding: 10px 10px 0;\n  border-bottom: 1px solid #233d4d;\n  min-width: 30vw; }\n\nmain {\n  grid-area: main;\n  padding: 10px;\n  border-bottom: 1px solid #233d4d;\n  border-left: 1px solid #233d4d;\n  max-width: 70vw; }\n\n.current-trips-title,\n.past-trips-title,\n.pending-trips-title,\n.upcoming-trips-title {\n  text-align: center;\n  padding: 10px;\n  border: 1px solid #233d4d; }\n\nfooter {\n  grid-area: footer;\n  margin: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-wrap: wrap; }\n\nbutton {\n  cursor: pointer; }\n\n@media screen and (max-width: 800px) {\n  .input-options {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    width: 50vw;\n    justify-self: center; }\n  select {\n    width: 140px; }\n  .number-travelers {\n    grid-area: travelers; }\n  .possible-destination {\n    grid-area: destination; } }\n\n@media screen and (max-width: 750px) {\n  .main-dashboard {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-areas: \"header header\" \"request request\" \"aside aside\" \"main main\" \"footer footer\"; }\n  aside {\n    border: none; }\n  main {\n    border: none;\n    max-width: 100vw; } }\n\n@media screen and (max-width: 600px) {\n  .input-options {\n    display: grid;\n    grid-template-columns: auto auto;\n    width: 50vw;\n    justify-self: center; } }\n\n@media screen and (max-width: 450px) {\n  .input-options {\n    display: grid;\n    grid-template-columns: auto;\n    width: 50vw;\n    justify-self: center; } }\n\n@media screen and (max-width: 300px) {\n  .button-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center; } }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/css/_login.scss","webpack://./src/css/_mixins.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_cards.scss","webpack://./src/css/_inputField.scss","webpack://./src/css/base.scss","webpack://./src/css/_mediaQueries.scss"],"names":[],"mappings":"AAAA;EACE,kBAAkB;ECAlB,aAAa;EACb,sBDAoB;ECCpB,uBAAuB;EDAvB,aAAa;EACb,YAAY;EACZ,yBEFwC,EAAA;;AFK1C;EACE,kBAAkB;EAClB,gBAAgB,EAAA;;AAGlB;;EAEE,cAAc;EACd,WAAW,EAAA;;AAGb;;EAEE,WAAW,EAAA;;AAGb;EACE,kBAAkB;EAClB,gBAAgB,EAAA;;AAGlB;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mBEjCqC,EAAA;;ACAvC;;;;EFCE,aAAa;EACb,mBEEiB;EFDjB,uBAAuB;EEEvB,eAAe;EACf,SAAS,EAAA;;AAGX;EFRE,aAAa;EACb,sBEQoB;EFPpB,uBAAuB;EEQvB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,yBDdwC,EAAA;;ACiB1C;;EAEE,gBAAgB,EAAA;;AAGlB;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,eAAe,EAAA;;AC7BjB;EACE,kBAAkB;EAClB,yBFCwC;EEAxC,cAAc;EACd,YAAY;EACZ,aAAa;EACb,2BAA2B,EAAA;;AAG7B;EHRE,aAAa;EACb,mBGQiB;EHPjB,uBAAuB,EAAA;;AGUzB;EACE,kBAAkB;EAClB,qBAAqB,EAAA;;AAGvB;EHjBE,aAAa;EACb,mBGiBiB;EHhBjB,uBAAuB,EAAA;;AGmBzB;EACE,kBAAkB,EAAA;;AAGpB;;EAEE,aAAa;EACb,gBAAgB;EAChB,kBAAkB,EAAA;;ACxBpB;EACE,mBHPqC;EGQrC,oCHNoC;EGOpC,oBAAoB;EACpB,aAAa;EACb,uBAAuB;EACvB,YHX0B;EGY1B,aAAa;EACb,YAAY;EACZ,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,aAAa;EACb,8BAA8B;EAC9B,mFAAmF,EAAA;;AAGrF;EACE,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,qCAAqC,EAAA;;AAGvC;EACE,mBAAmB,EAAA;;AAGrB;EACE,gBAAgB,EAAA;;AAGlB;;EJzCE,aAAa;EACb,sBI0CoB;EJzCpB,uBAAuB;EI0CvB,yBAAyB,EAAA;;AAG3B;;EAEE,SAAS;EACT,gBAAgB,EAAA;;AAGlB;EACE,eAAe;EACf,kBAAkB,EAAA;;AAGpB;;EAEE,SAAS;EACT,iBAAiB,EAAA;;AAGnB;EACE,gBAAgB;EAChB,oBAAoB;EACpB,gCHjEwC;EGkExC,eAAe,EAAA;;AAGjB;EACE,eAAe;EACf,aAAa;EACb,gCHxEwC;EGyExC,8BHzEwC;EG0ExC,eAAe,EAAA;;AAGjB;;;;EAIE,kBAAkB;EAClB,aAAa;EACb,yBHnFwC,EAAA;;AGsF1C;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,eAAe,EAAA;;AAGjB;EACE,eAAe,EAAA;;ACnGjB;EACE;IACE,aAAa;IACb,qCAAqC;IACrC,WAAW;IACX,oBAAoB,EAAA;EAGtB;IACE,YAAY,EAAA;EAId;IACE,oBAAoB,EAAA;EAGtB;IACE,sBAAsB,EAAA,EACvB;;AAGH;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,gGAAgG,EAAA;EAGlG;IACE,YAAY,EAAA;EAGd;IACE,YAAY;IACZ,gBAAgB,EAAA,EACjB;;AAIH;EACE;IACE,aAAa;IACb,gCAAgC;IAChC,WAAW;IACX,oBAAoB,EAAA,EACrB;;AAGH;EACE;IACE,aAAa;IACb,2BAA2B;IAC3B,WAAW;IACX,oBAAoB,EAAA,EACrB;;AAGH;EACE;IL1DA,aAAa;IACb,sBK0DsB;ILzDtB,uBAAuB,EAAA,EK0DtB;;AD2CH;EACE,aAAa,EAAA","sourcesContent":[".login-article {\n  align-self: center;\n  @include flex(column);\n  height: 300px;\n  width: 200px;\n  border: $primary-border;\n}\n\n.login-msg {\n  text-align: center;\n  font-size: large;\n}\n\ninput,\nlabel {\n  display: block;\n  margin: 5px;\n}\n\n.password,\n.username {\n  margin: 5px;\n}\n\n.error-msg {\n  text-align: center;\n  font-size: small;\n}\n\n.plane-img {\n  align-self: center;\n  height: 50px;\n  width: 50px;\n  background: $primary-background;\n}\n","@mixin flex($dir) {\n  display: flex;\n  flex-direction: $dir;\n  justify-content: center;\n}\n","$primary-background: rgb(140, 173, 167);\n$primary-color: rgb(0, 0, 0);\n$primary-font: \"Quicksand\", sans-serif;\n$primary-border: 1px solid rgb(35, 61, 77);\n",".current-trip,\n.past-trips-container,\n.pending-trips-container,\n.upcoming-trips-container {\n  @include flex(row);\n  flex-wrap: wrap;\n  margin: 0;\n}\n\n.card {\n  @include flex(column);\n  margin: 5px;\n  padding: 10px;\n  min-height: 250px;\n  min-width: 200px;\n  max-height: 250px;\n  max-width: 200px;\n  border: $primary-border;\n}\n\n.details,\n.trip-destination {\n  margin: 15px 0 0;\n}\n\n.card-image {\n  max-width: auto;\n  max-height: 50%;\n  min-width: auto;\n  min-height: 50%;\n}\n",".request-trip-container {\n  grid-area: request;\n  border: $primary-border;\n  margin: 0 10px;\n  padding: 5px;\n  display: grid;\n  grid-template-rows: 3fr 1fr;\n}\n\n.input-options {\n  @include flex(row);\n}\n\n.new-trip-cost {\n  text-align: center;\n  word-wrap: break-word;\n}\n\n.button-wrapper {\n  @include flex(row);\n}\n\nlabel {\n  align-self: center;\n}\n\ninput,\nselect {\n  margin: 0 5px;\n  max-height: 18px;\n  align-self: center;\n}\n","@import \"variables\";\n@import \"mixins\";\n@import \"login\";\n@import \"cards\";\n@import \"inputField\";\n\nbody {\n  background: $primary-background;\n  font-family: $primary-font;\n  font-weight: lighter;\n  display: flex;\n  justify-content: center;\n  color: $primary-color;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.main-dashboard {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas: \"header header\" \"request request\" \"aside main\" \"footer footer\";\n}\n\nheader {\n  grid-area: header;\n  padding: 0 10px 10px;\n  font-size: small;\n  display: grid;\n  grid-template-columns: 3fr 3fr;\n  grid-template-areas: \"greeting title\";\n}\n\n.greeting {\n  grid-area: greeting;\n}\n\n.title {\n  grid-area: title;\n}\n\n.greeting,\n.title {\n  @include flex(column);\n  justify-content: flex-end;\n}\n\n.total-spent,\n.welcome-message {\n  margin: 0;\n  text-align: left;\n}\n\n.total-spent {\n  margin-top: 5px;\n  font-size: smaller;\n}\n\n.site-title,\n.todays-date {\n  margin: 0;\n  text-align: right;\n}\n\naside {\n  grid-area: aside;\n  padding: 10px 10px 0;\n  border-bottom: $primary-border;\n  min-width: 30vw;\n}\n\nmain {\n  grid-area: main;\n  padding: 10px;\n  border-bottom: $primary-border;\n  border-left: $primary-border;\n  max-width: 70vw;\n}\n\n.current-trips-title,\n.past-trips-title,\n.pending-trips-title,\n.upcoming-trips-title {\n  text-align: center;\n  padding: 10px;\n  border: $primary-border;\n}\n\nfooter {\n  grid-area: footer;\n  margin: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n@import \"mediaQueries\";\n\n.hidden {\n  display: none;\n}\n","@media screen and (max-width: 800px) {\n  .input-options {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    width: 50vw;\n    justify-self: center;\n  }\n\n  select {\n    width: 140px;\n  }\n\n\n  .number-travelers {\n    grid-area: travelers;\n  }\n\n  .possible-destination {\n    grid-area: destination;\n  }\n}\n\n@media screen and (max-width: 750px) {\n  .main-dashboard {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-areas: \"header header\" \"request request\" \"aside aside\" \"main main\" \"footer footer\";\n  }\n\n  aside {\n    border: none;\n  }\n\n  main {\n    border: none;\n    max-width: 100vw;\n  }\n\n}\n\n@media screen and (max-width: 600px) {\n  .input-options {\n    display: grid;\n    grid-template-columns: auto auto;\n    width: 50vw;\n    justify-self: center;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  .input-options {\n    display: grid;\n    grid-template-columns: auto;\n    width: 50vw;\n    justify-self: center;\n  }\n}\n\n@media screen and (max-width: 300px) {\n  .button-wrapper {\n    @include flex(column);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/destination.js":
/*!****************************!*\
  !*** ./src/destination.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Destination {
  constructor(destination) {
    this.id = destination.id;
    this.destination = destination.destination;
    this.estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson;
    this.image = destination.image;
    this.alt = destination.alt;
  }
}



module.exports = Destination;


/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {
  displayLoginError(message) {
    let errorMsg = document.querySelector(".error-msg");
    errorMsg.innerText = `${message}`
  },

  welcomeTraveler(traveler) {
    let welcomeMessage = document.querySelector(".welcome-message");
    welcomeMessage.innerText = `Welcome back ${traveler.getFirstName()}!!`
  },

  getTodaysDate() {
    let todaysDate = document.querySelector(".todays-date");
    let date = new Date().toLocaleDateString("en-US").split("/");
    todaysDate.innerText = `Today's Date: ${date[0]}/${date[1]}/${date[2]}`;
  },

  displayTotalTravelerSpendings(total) {
    let totalSpent = document.querySelector(".total-spent");
    totalSpent.innerText = ""
    totalSpent.innerText =
      `You have spent $${total} in 2020.`
  },

  displayCurrentTravelerTrip(traveler, destinations) {
    let current = document.querySelector(".current-trip");
    current.innerHTML = "";
    if (traveler.currentTrips[0] === undefined) {
      current.innerHTML = `<p>You shouldn't be on a trip right now. Maybe you should plan your next one if you don't have any upcoming trips either!!</p>`
    } else {
      let foundDest = findDestinationBasedOnTrip(traveler.currentTrips[0], destinations);
      let splitDestName = foundDest.destination.split(", ");
      let dateSplit = traveler.currentTrips[0].date.split("/");
      current.innerHTML = `<div class="current card">
        <img class="card-image" src="${foundDest.image}" alt="${foundDest.alt}">
        <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
        <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Duration of trip: ${traveler.currentTrips[0].duration} <br> Number of travelers: ${traveler.currentTrips[0].travelers}</p>
      </div>`
    }
  },

  displayUpcomingTrips(traveler, destinations) {
    let upcoming = document.querySelector(".upcoming-trips-container");
    upcoming.innerHTML = "";
    if (traveler.upcomingTrips[0] === undefined) {
      upcoming.innerHTML = `<p>You don't have any upcoming trips, fill out the form above to plan your next trip!!</p>`
    } else {
      traveler.upcomingTrips.forEach(trip => {
        let foundDest = findDestinationBasedOnTrip(trip, destinations);
        let splitDestName = foundDest.destination.split(", ");
        let dateSplit = trip.date.split("/");
        upcoming.innerHTML += `<div class="upcoming card">
          <img class="card-image" src="${foundDest.image}" alt="${foundDest.alt}">
          <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
          <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Duration of trip: ${trip.duration} <br> Number of travelers: ${trip.travelers}</p>
        </div>`
      })
    }
  },

  displayPendingTrips(traveler, destinations) {
    let pending = document.querySelector(".pending-trips-container");
    pending.innerHTML = "";
    if (traveler.pendingTrips[0] === undefined) {
      pending.innerHTML = `<p>You don't have any pending trips, fill out the form above to plan your next trip!!</p>`
    } else {
      traveler.pendingTrips.forEach(trip => {
        let foundDest = findDestinationBasedOnTrip(trip, destinations);
        let splitDestName = foundDest.destination.split(", ");
        let dateSplit = trip.date.split("/");
        pending.innerHTML += `<div class="upcoming card">
          <img class="card-image" src="${foundDest.image}" alt="${foundDest.alt}">
          <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
          <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Duration of trip: ${trip.duration} <br> Number of travelers: ${trip.travelers}</p>
        </div>`
      })
    }
  },

  displayPastTrips(traveler, destinations) {
    let past = document.querySelector(".past-trips-container");
    past.innerHTML = "";
    if (traveler.pastTrips[0] === undefined) {
      past.innerHTML = `<p>You don't have any past trips, fill out the form above to plan your next trip!!</p>`
    } else {
      traveler.pastTrips.forEach(trip => {
        let foundDest = findDestinationBasedOnTrip(trip, destinations);
        let splitDestName = foundDest.destination.split(", ");
        let dateSplit = trip.date.split("/");
        past.innerHTML += `<div class="upcoming card">
          <img class="card-image" src="${foundDest.image}" alt="${foundDest.alt}">
          <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
          <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Duration of trip: ${trip.duration} <br> Number of travelers: ${trip.travelers}</p>
        </div>`
      })
    }
  },

  populateDestinationsInput(destinations) {
    let destinationsInput = document.querySelector(".possible-destination");
    destinations.destinations.forEach(dest => {
      let destinationOption = `
      <option value="${dest.id}">
        ${dest.destination}
      </option>
      `
      destinationsInput.insertAdjacentHTML("beforeend", destinationOption);
    })
  },

  displayNewTripCost(cost, inputs) {
    let newTripCost = document.querySelector(".new-trip-cost");
    newTripCost.classList.remove("hidden")
    if (inputs[0].value !== "" && inputs[3].value !== "0") {
      newTripCost.innerHTML = `<p> This trip will cost $${cost} (including the agent fee) <p>`;
      document.querySelector(".submit-request").disabled = false;
    } else if (inputs[0].value === "") {
      newTripCost.innerHTML = `<p>Please select a date!</p>`;
    } else if (inputs[3].value === "0") {
      newTripCost.innerHTML = `<p>Please select a destination!</p>`;
    }
  },

  removeTripCostAfterRequestedClearInputs() {
    document.querySelector(".new-trip-cost").classList.add("hidden");
    document.querySelector(".select-date").value = "";
    document.querySelector(".enter-duration").value = "";
    document.querySelector(".number-travelers").value = "";
    document.querySelector(".possible-destination").value = "0";
    document.querySelector(".submit-request").disabled = true;
    document.querySelector(".calc-cost").disabled = true;
  }

}

function findDestinationBasedOnTrip(trip, destinations) {
  let foundTrip = destinations.find(destination => destination.id === trip.destinationID)
  return foundTrip;
}


/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetchRequest.js":
/*!*****************************!*\
  !*** ./src/fetchRequest.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Fetch Requests
let fetchData = {
  retrieveSpecificTraveler(travelerId) {
    return fetch(`http://localhost:3001/api/v1/travelers/${travelerId}`)
      .then(response => response.json())
      .catch(err => {
        console.log("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  retrieveDestinations() {
    return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => response.json())
      .catch(err => {
        console.log("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  retrieveTravelers() {
    return fetch("http://localhost:3001/api/v1/travelers")
      .then(response => response.json())
      .catch(err => {
        console.log("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  retrieveTrips() {
    return fetch("http://localhost:3001/api/v1/trips")
      .then(response => response.json())
      .catch(err => {
        console.log("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  addNewTripForTraveler(trip) {
    return fetch("http://localhost:3001/api/v1/trips", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: trip.id,
        userID: trip.userID,
        destinationID: trip.destinationID,
        travelers: trip.travelers,
        date: trip.date,
        duration: trip.duration,
        status: trip.status,
        suggestedActivities: trip.suggestedActivities
      })
    })
      .then(response => response.json())
      .catch(err => {
        console.log("Sorry! We are having trouble getting the data, try again later!")
      })
  }
}


/* harmony default export */ __webpack_exports__["default"] = (fetchData);


/***/ }),

/***/ "./src/images/plane.png":
/*!******************************!*\
  !*** ./src/images/plane.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/plane.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_plane_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/plane.png */ "./src/images/plane.png");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _fetchRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchRequest.js */ "./src/fetchRequest.js");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
/* harmony import */ var _destination_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destination.js */ "./src/destination.js");
/* harmony import */ var _destination_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_destination_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _traveler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./traveler.js */ "./src/traveler.js");
/* harmony import */ var _traveler_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_traveler_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _trip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip.js */ "./src/trip.js");
/* harmony import */ var _trip_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_trip_js__WEBPACK_IMPORTED_MODULE_6__);












let allDestinations;
let allTrips;
let currentTraveler;
let travelerTrips;
let newTripIdCount;
let plannedTrip;
let tripObj;
let travelerDestinations;

let allInputs = document.querySelectorAll(".input");
let calcNewTripCost = document.querySelector(".calc-cost");
let password = document.querySelector(".password");
let submitLogin = document.querySelector(".submit-login");
let submitTripRequest = document.querySelector(".submit-request");
let username = document.querySelector(".username");

calcNewTripCost.addEventListener("click", retrieveNewTripCost);
password.addEventListener("keyup", checkLoginInputsEnableSubmit);
submitLogin.addEventListener("click", submitLoginInfo)
username.addEventListener("keyup", checkLoginInputsEnableSubmit);
submitTripRequest.addEventListener("click", submitRequest);
allInputs.forEach(input => {
  input.addEventListener("keyup", checkIfAllFilledOut);
  input.addEventListener("click", checkIfAllFilledOut);
})

function checkLoginInputsEnableSubmit() {
  if (password.value !== "" & username.value.length > 8) {
    submitLogin.disabled = false;
  } else {
    submitLogin.disabled = true;
  }
}

function submitLoginInfo() {
  let splitID = parseInt(username.value.slice(8));
  if (password.value === "travel2020" && username.value.includes("traveler")) {
    retrieveTraveler(splitID)
  } else {
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayLoginError("**Username or password not recognized please try again**");
  }
}

function retrieveTraveler(id) {
  _fetchRequest_js__WEBPACK_IMPORTED_MODULE_2__["default"].retrieveSpecificTraveler(id)
    .then(data => {
      if (data.id === undefined) {
        _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayLoginError(data.message)
      } else {
        document.querySelector(".login-article").classList.add("hidden");
        document.querySelector(".main-dashboard").classList.remove("hidden");
        currentTraveler = new _traveler_js__WEBPACK_IMPORTED_MODULE_5___default.a(data);
        gatherAPIInfo();
      }
    });
}


function gatherAPIInfo() {
  Promise.all([_fetchRequest_js__WEBPACK_IMPORTED_MODULE_2__["default"].retrieveDestinations(),
    _fetchRequest_js__WEBPACK_IMPORTED_MODULE_2__["default"].retrieveTrips()
  ])
    .then(data => {
      allDestinations = data[0];
      allTrips = data[1];
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].populateDestinationsInput(allDestinations);
      filterForTraveler();
      catagorizeTrips();
      greetTraveler(currentTraveler);
      displayTravelerTrips();
    })
}

function greetTraveler(traveler) {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].welcomeTraveler(traveler);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTodaysDate();
  let trips2020 = traveler.filterTripsByYear(2020, travelerTrips);
  let tripCosts = traveler.tripCosts(trips2020, travelerDestinations);
  let agentFee = traveler.calcAgentFee(tripCosts);
  let sumSpent = tripCosts + agentFee;
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayTotalTravelerSpendings(sumSpent.toFixed(2))
}

function filterForTraveler() {
  filterTripsForTraveler();
  filterDestinationsByTravelerTrips();
}

function filterTripsForTraveler() {
  let foundTrips = allTrips.trips.filter(trip => {
    return trip.userID === currentTraveler.id;
  })
  travelerTrips = foundTrips.map(trip => {
    let tripInstantiation = new _trip_js__WEBPACK_IMPORTED_MODULE_6___default.a(trip);
    return tripInstantiation;
  })
}

function catagorizeTrips() {
  getTravelerPendingTrips();
  assignTripsToCorrectCatagory();
}

function getTravelerPendingTrips() {
  currentTraveler.pendingTrips = [];
  travelerTrips.forEach(trip => {
    if (trip.status === "pending") {
      currentTraveler.addTrip('pendingTrips', trip);
    }
  })
}

function assignTripsToCorrectCatagory() {
  currentTraveler.pastTrips = [];
  currentTraveler.upcomingTrips = [];
  currentTraveler.currentTrips = [];
  travelerTrips.forEach(trip => {
    let dateSplit = trip.date.split("/");
    let startDate = new Date(dateSplit[0], (dateSplit[1] - 1), dateSplit[2])
    let tripEnd = startDate.setDate(startDate.getDate() + trip.duration);
    let startInMil = new Date(dateSplit[0], (dateSplit[1] - 1), dateSplit[2]).getTime();
    let today = new Date().getTime();
    if (startInMil < today && today < tripEnd) {
      currentTraveler.addTrip('currentTrips', trip);
    } else if (startInMil > today) {
      currentTraveler.addTrip('upcomingTrips', trip);
    } else {
      currentTraveler.addTrip('pastTrips', trip);
    }
  })
}

function filterDestinationsByTravelerTrips() {
  let foundDestinations = [];
  travelerTrips.forEach(trip => {
    allDestinations.destinations.forEach(dest => {
      if (dest.id === trip.destinationID) {
        foundDestinations.push(dest);
        trip.getCostOfTrip(dest)
      }
    })
  })
  travelerDestinations = foundDestinations.map(dest => {
    return new _destination_js__WEBPACK_IMPORTED_MODULE_4___default.a(dest)
  })
}

function displayTravelerTrips() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayCurrentTravelerTrip(currentTraveler, travelerDestinations);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayUpcomingTrips(currentTraveler, travelerDestinations);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayPendingTrips(currentTraveler, travelerDestinations);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayPastTrips(currentTraveler, travelerDestinations);
}

function checkIfAllFilledOut() {
  if (allInputs[1].value !== "" && allInputs[2].value !== "") {
    calcNewTripCost.disabled = false;
  }
}

function retrieveNewTripCost() {
  newTripIdCount = allTrips.trips.length + 1;
  plannedTrip = instantiateNewTrip();
  allDestinations.destinations.forEach(dest => {
    if (dest.id === plannedTrip.destinationID) {
      plannedTrip.getCostOfTrip(dest);
    }
  });
  let tripWithAgentFee = plannedTrip.cost + currentTraveler.calcAgentFee(plannedTrip.cost);
  let totalForTrip = tripWithAgentFee.toFixed(2);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayNewTripCost(totalForTrip, allInputs);
}

function instantiateNewTrip() {
  let date = document.querySelector(".select-date").value.split("-");
  let dateCorrect = `${date[0]}/${date[1]}/${date[2]}`
  let duration = parseInt(document.querySelector(".enter-duration").value);
  let travelers = parseInt(document.querySelector(".number-travelers").value);
  let destination = parseInt(document.querySelector(".possible-destination").value);
  tripObj = {};
  tripObj = {
    id: newTripIdCount,
    userID: currentTraveler.id,
    destinationID: destination,
    travelers,
    date: dateCorrect,
    duration,
    status: "pending",
    suggestedActivities: []
  }
  let newTrip = new _trip_js__WEBPACK_IMPORTED_MODULE_6___default.a(tripObj);
  return newTrip;
}

function submitRequest() {
  _fetchRequest_js__WEBPACK_IMPORTED_MODULE_2__["default"].addNewTripForTraveler(tripObj)
    .then(gatherAPIInfo());
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeTripCostAfterRequestedClearInputs();
}

// delete fetch request, not implemented yet just used when creating too many new trips when figuring out post request
function deleteTrip(id) {
  return fetch(`http://localhost:3001/api/v1/trips/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .catch(err => {
      console.log("Sorry! We are having trouble getting the data, try again later!")
    })
}

//


/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.currentTrips = [];
    this.upcomingTrips = [];
    this.pendingTrips = [];
    this.pastTrips = [];
  }

  getFirstName() {
    let splitName = this.name.split(' ', 2);
    let firstName = splitName[0];
    return firstName;
  }

  addTrip(tripTiming, tripObject) {
    this[tripTiming].push(tripObject);
  }

  filterTripsByYear(year, trips) {
    let tripsPerYear = trips.filter(trip => trip.date.includes(year));
    return tripsPerYear
  }

  tripCosts(trips) {
    let spent = trips.reduce((acc, trip) => {
      acc += trip.cost
      return acc;
    }, 0);
    return spent;
  }

  calcAgentFee(cost) {
    let agentFee = cost * 0.1;
    return agentFee;
  }
}


module.exports = Traveler;


/***/ }),

/***/ "./src/trip.js":
/*!*********************!*\
  !*** ./src/trip.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.cost = 0;
  }

  getCostOfTrip(destination) {
    let acc = 0;
    let flightTotal = this.travelers * destination.estimatedFlightCostPerPerson;
    let lodgingTotal = this.duration * destination.estimatedLodgingCostPerDay;
    acc += flightTotal;
    acc += lodgingTotal;
    this.cost = acc;
  }
}



module.exports = Trip;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BsYW5lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYXZlbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90cmlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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QUdBOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sb2dpbi1hcnRpY2xlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzM2Q0ZDsgfVxcblxcbi5sb2dpbi1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZTsgfVxcblxcbmlucHV0LFxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiA1cHg7IH1cXG5cXG4ucGFzc3dvcmQsXFxuLnVzZXJuYW1lIHtcXG4gIG1hcmdpbjogNXB4OyB9XFxuXFxuLmVycm9yLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IHNtYWxsOyB9XFxuXFxuLnBsYW5lLWltZyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJhY2tncm91bmQ6ICM4Y2FkYTc7IH1cXG5cXG4uY3VycmVudC10cmlwLFxcbi5wYXN0LXRyaXBzLWNvbnRhaW5lcixcXG4ucGVuZGluZy10cmlwcy1jb250YWluZXIsXFxuLnVwY29taW5nLXRyaXBzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzNkNGQ7IH1cXG5cXG4uZGV0YWlscyxcXG4udHJpcC1kZXN0aW5hdGlvbiB7XFxuICBtYXJnaW46IDE1cHggMCAwOyB9XFxuXFxuLmNhcmQtaW1hZ2Uge1xcbiAgbWF4LXdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNTAlO1xcbiAgbWluLXdpZHRoOiBhdXRvO1xcbiAgbWluLWhlaWdodDogNTAlOyB9XFxuXFxuLnJlcXVlc3QtdHJpcC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiByZXF1ZXN0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzM2Q0ZDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjsgfVxcblxcbi5pbnB1dC1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4ubmV3LXRyaXAtY29zdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbmxhYmVsIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgbWF4LWhlaWdodDogMThweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzhjYWRhNztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4ubWFpbi1kYXNoYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwicmVxdWVzdCByZXF1ZXN0XFxcIiBcXFwiYXNpZGUgbWFpblxcXCIgXFxcImZvb3RlciBmb290ZXJcXFwiOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMCAxMHB4IDEwcHg7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJncmVldGluZyB0aXRsZVxcXCI7IH1cXG5cXG4uZ3JlZXRpbmcge1xcbiAgZ3JpZC1hcmVhOiBncmVldGluZzsgfVxcblxcbi50aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlOyB9XFxuXFxuLmdyZWV0aW5nLFxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblxcbi50b3RhbC1zcGVudCxcXG4ud2VsY29tZS1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udG90YWwtc3BlbnQge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiBzbWFsbGVyOyB9XFxuXFxuLnNpdGUtdGl0bGUsXFxuLnRvZGF5cy1kYXRlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuYXNpZGUge1xcbiAgZ3JpZC1hcmVhOiBhc2lkZTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMzNkNGQ7XFxuICBtaW4td2lkdGg6IDMwdnc7IH1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIzM2Q0ZDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzIzM2Q0ZDtcXG4gIG1heC13aWR0aDogNzB2dzsgfVxcblxcbi5jdXJyZW50LXRyaXBzLXRpdGxlLFxcbi5wYXN0LXRyaXBzLXRpdGxlLFxcbi5wZW5kaW5nLXRyaXBzLXRpdGxlLFxcbi51cGNvbWluZy10cmlwcy10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzM2Q0ZDsgfVxcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5pbnB1dC1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxuICBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTQwcHg7IH1cXG4gIC5udW1iZXItdHJhdmVsZXJzIHtcXG4gICAgZ3JpZC1hcmVhOiB0cmF2ZWxlcnM7IH1cXG4gIC5wb3NzaWJsZS1kZXN0aW5hdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogZGVzdGluYXRpb247IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAubWFpbi1kYXNoYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwicmVxdWVzdCByZXF1ZXN0XFxcIiBcXFwiYXNpZGUgYXNpZGVcXFwiIFxcXCJtYWluIG1haW5cXFwiIFxcXCJmb290ZXIgZm9vdGVyXFxcIjsgfVxcbiAgYXNpZGUge1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG4gIG1haW4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1heC13aWR0aDogMTAwdnc7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaW5wdXQtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICAuaW5wdXQtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xcbiAgLmJ1dHRvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fY2FyZHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9faW5wdXRGaWVsZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbWVkaWFRdWVyaWVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUNBbEIsYUFBYTtFQUNiLHNCREFvQjtFQ0NwQix1QkFBdUI7RURBdkIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkVGd0MsRUFBQTs7QUZLMUM7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCOztFQUVFLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7O0VBRUUsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG1CRWpDcUMsRUFBQTs7QUNBdkM7Ozs7RUZDRSxhQUFhO0VBQ2IsbUJFRWlCO0VGRGpCLHVCQUF1QjtFRUV2QixlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUdYO0VGUkUsYUFBYTtFQUNiLHNCRVFvQjtFRlBwQix1QkFBdUI7RUVRdkIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJEZHdDLEVBQUE7O0FDaUIxQzs7RUFFRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FDN0JqQjtFQUNFLGtCQUFrQjtFQUNsQix5QkZDd0M7RUVBeEMsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCLEVBQUE7O0FBRzdCO0VIUkUsYUFBYTtFQUNiLG1CR1FpQjtFSFBqQix1QkFBdUIsRUFBQTs7QUdVekI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VIakJFLGFBQWE7RUFDYixtQkdpQmlCO0VIaEJqQix1QkFBdUIsRUFBQTs7QUdtQnpCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCOztFQUVFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FDeEJwQjtFQUNFLG1CSFBxQztFR1FyQyxvQ0hOb0M7RUdPcEMsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUhYMEI7RUdZMUIsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtRkFBbUYsRUFBQTs7QUFHckY7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFDQUFxQyxFQUFBOztBQUd2QztFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjs7RUp6Q0UsYUFBYTtFQUNiLHNCSTBDb0I7RUp6Q3BCLHVCQUF1QjtFSTBDdkIseUJBQXlCLEVBQUE7O0FBRzNCOztFQUVFLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCOztFQUVFLFNBQVM7RUFDVCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGdDSGpFd0M7RUdrRXhDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdDSHhFd0M7RUd5RXhDLDhCSHpFd0M7RUcwRXhDLGVBQWUsRUFBQTs7QUFHakI7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCSG5Gd0MsRUFBQTs7QUdzRjFDO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQ25HakI7RUFDRTtJQUNFLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsV0FBVztJQUNYLG9CQUFvQixFQUFBO0VBR3RCO0lBQ0UsWUFBWSxFQUFBO0VBSWQ7SUFDRSxvQkFBb0IsRUFBQTtFQUd0QjtJQUNFLHNCQUFzQixFQUFBLEVBQ3ZCOztBQUdIO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdHQUFnRyxFQUFBO0VBR2xHO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUEsRUFDakI7O0FBSUg7RUFDRTtJQUNFLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLG9CQUFvQixFQUFBLEVBQ3JCOztBQUdIO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxvQkFBb0IsRUFBQSxFQUNyQjs7QUFHSDtFQUNFO0lMMURBLGFBQWE7SUFDYixzQkswRHNCO0lMekR0Qix1QkFBdUIsRUFBQSxFSzBEdEI7O0FEMkNIO0VBQ0UsYUFBYSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2dpbi1hcnRpY2xlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIGZsZXgoY29sdW1uKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXI6ICRwcmltYXJ5LWJvcmRlcjtcXG59XFxuXFxuLmxvZ2luLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG5pbnB1dCxcXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucGFzc3dvcmQsXFxuLnVzZXJuYW1lIHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5wbGFuZS1pbWcge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbn1cXG5cIixcIkBtaXhpbiBmbGV4KCRkaXIpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIixcIiRwcmltYXJ5LWJhY2tncm91bmQ6IHJnYigxNDAsIDE3MywgMTY3KTtcXG4kcHJpbWFyeS1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiRwcmltYXJ5LWZvbnQ6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiRwcmltYXJ5LWJvcmRlcjogMXB4IHNvbGlkIHJnYigzNSwgNjEsIDc3KTtcXG5cIixcIi5jdXJyZW50LXRyaXAsXFxuLnBhc3QtdHJpcHMtY29udGFpbmVyLFxcbi5wZW5kaW5nLXRyaXBzLWNvbnRhaW5lcixcXG4udXBjb21pbmctdHJpcHMtY29udGFpbmVyIHtcXG4gIEBpbmNsdWRlIGZsZXgocm93KTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNhcmQge1xcbiAgQGluY2x1ZGUgZmxleChjb2x1bW4pO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyOiAkcHJpbWFyeS1ib3JkZXI7XFxufVxcblxcbi5kZXRhaWxzLFxcbi50cmlwLWRlc3RpbmF0aW9uIHtcXG4gIG1hcmdpbjogMTVweCAwIDA7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gIG1heC13aWR0aDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDUwJTtcXG4gIG1pbi13aWR0aDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDUwJTtcXG59XFxuXCIsXCIucmVxdWVzdC10cmlwLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHJlcXVlc3Q7XFxuICBib3JkZXI6ICRwcmltYXJ5LWJvcmRlcjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcXG59XFxuXFxuLmlucHV0LW9wdGlvbnMge1xcbiAgQGluY2x1ZGUgZmxleChyb3cpO1xcbn1cXG5cXG4ubmV3LXRyaXAtY29zdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBAaW5jbHVkZSBmbGV4KHJvdyk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBtYXgtaGVpZ2h0OiAxOHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwibWl4aW5zXFxcIjtcXG5AaW1wb3J0IFxcXCJsb2dpblxcXCI7XFxuQGltcG9ydCBcXFwiY2FyZHNcXFwiO1xcbkBpbXBvcnQgXFxcImlucHV0RmllbGRcXFwiO1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1haW4tZGFzaGJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcInJlcXVlc3QgcmVxdWVzdFxcXCIgXFxcImFzaWRlIG1haW5cXFwiIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMCAxMHB4IDEwcHg7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJncmVldGluZyB0aXRsZVxcXCI7XFxufVxcblxcbi5ncmVldGluZyB7XFxuICBncmlkLWFyZWE6IGdyZWV0aW5nO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuLmdyZWV0aW5nLFxcbi50aXRsZSB7XFxuICBAaW5jbHVkZSBmbGV4KGNvbHVtbik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG90YWwtc3BlbnQsXFxuLndlbGNvbWUtbWVzc2FnZSB7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udG90YWwtc3BlbnQge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG4uc2l0ZS10aXRsZSxcXG4udG9kYXlzLWRhdGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbmFzaWRlIHtcXG4gIGdyaWQtYXJlYTogYXNpZGU7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcXG4gIGJvcmRlci1ib3R0b206ICRwcmltYXJ5LWJvcmRlcjtcXG4gIG1pbi13aWR0aDogMzB2dztcXG59XFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogJHByaW1hcnktYm9yZGVyO1xcbiAgYm9yZGVyLWxlZnQ6ICRwcmltYXJ5LWJvcmRlcjtcXG4gIG1heC13aWR0aDogNzB2dztcXG59XFxuXFxuLmN1cnJlbnQtdHJpcHMtdGl0bGUsXFxuLnBhc3QtdHJpcHMtdGl0bGUsXFxuLnBlbmRpbmctdHJpcHMtdGl0bGUsXFxuLnVwY29taW5nLXRyaXBzLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6ICRwcmltYXJ5LWJvcmRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGltcG9ydCBcXFwibWVkaWFRdWVyaWVzXFxcIjtcXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5pbnB1dC1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgc2VsZWN0IHtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgfVxcblxcblxcbiAgLm51bWJlci10cmF2ZWxlcnMge1xcbiAgICBncmlkLWFyZWE6IHRyYXZlbGVycztcXG4gIH1cXG5cXG4gIC5wb3NzaWJsZS1kZXN0aW5hdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogZGVzdGluYXRpb247XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAubWFpbi1kYXNoYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwicmVxdWVzdCByZXF1ZXN0XFxcIiBcXFwiYXNpZGUgYXNpZGVcXFwiIFxcXCJtYWluIG1haW5cXFwiIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG4gIH1cXG5cXG4gIGFzaWRlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5pbnB1dC1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5pbnB1dC1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAuYnV0dG9uLXdyYXBwZXIge1xcbiAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbik7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjbGFzcyBEZXN0aW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5pZCA9IGRlc3RpbmF0aW9uLmlkO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbjtcbiAgICB0aGlzLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ID0gZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXk7XG4gICAgdGhpcy5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uID0gZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbjtcbiAgICB0aGlzLmltYWdlID0gZGVzdGluYXRpb24uaW1hZ2U7XG4gICAgdGhpcy5hbHQgPSBkZXN0aW5hdGlvbi5hbHQ7XG4gIH1cbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRGVzdGluYXRpb247XG4iLCJsZXQgZG9tVXBkYXRlcyA9IHtcbiAgZGlzcGxheUxvZ2luRXJyb3IobWVzc2FnZSkge1xuICAgIGxldCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItbXNnXCIpO1xuICAgIGVycm9yTXNnLmlubmVyVGV4dCA9IGAke21lc3NhZ2V9YFxuICB9LFxuXG4gIHdlbGNvbWVUcmF2ZWxlcih0cmF2ZWxlcikge1xuICAgIGxldCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1tZXNzYWdlXCIpO1xuICAgIHdlbGNvbWVNZXNzYWdlLmlubmVyVGV4dCA9IGBXZWxjb21lIGJhY2sgJHt0cmF2ZWxlci5nZXRGaXJzdE5hbWUoKX0hIWBcbiAgfSxcblxuICBnZXRUb2RheXNEYXRlKCkge1xuICAgIGxldCB0b2RheXNEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheXMtZGF0ZVwiKTtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIikuc3BsaXQoXCIvXCIpO1xuICAgIHRvZGF5c0RhdGUuaW5uZXJUZXh0ID0gYFRvZGF5J3MgRGF0ZTogJHtkYXRlWzBdfS8ke2RhdGVbMV19LyR7ZGF0ZVsyXX1gO1xuICB9LFxuXG4gIGRpc3BsYXlUb3RhbFRyYXZlbGVyU3BlbmRpbmdzKHRvdGFsKSB7XG4gICAgbGV0IHRvdGFsU3BlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsLXNwZW50XCIpO1xuICAgIHRvdGFsU3BlbnQuaW5uZXJUZXh0ID0gXCJcIlxuICAgIHRvdGFsU3BlbnQuaW5uZXJUZXh0ID1cbiAgICAgIGBZb3UgaGF2ZSBzcGVudCAkJHt0b3RhbH0gaW4gMjAyMC5gXG4gIH0sXG5cbiAgZGlzcGxheUN1cnJlbnRUcmF2ZWxlclRyaXAodHJhdmVsZXIsIGRlc3RpbmF0aW9ucykge1xuICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRyaXBcIik7XG4gICAgY3VycmVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmICh0cmF2ZWxlci5jdXJyZW50VHJpcHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3VycmVudC5pbm5lckhUTUwgPSBgPHA+WW91IHNob3VsZG4ndCBiZSBvbiBhIHRyaXAgcmlnaHQgbm93LiBNYXliZSB5b3Ugc2hvdWxkIHBsYW4geW91ciBuZXh0IG9uZSBpZiB5b3UgZG9uJ3QgaGF2ZSBhbnkgdXBjb21pbmcgdHJpcHMgZWl0aGVyISE8L3A+YFxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZm91bmREZXN0ID0gZmluZERlc3RpbmF0aW9uQmFzZWRPblRyaXAodHJhdmVsZXIuY3VycmVudFRyaXBzWzBdLCBkZXN0aW5hdGlvbnMpO1xuICAgICAgbGV0IHNwbGl0RGVzdE5hbWUgPSBmb3VuZERlc3QuZGVzdGluYXRpb24uc3BsaXQoXCIsIFwiKTtcbiAgICAgIGxldCBkYXRlU3BsaXQgPSB0cmF2ZWxlci5jdXJyZW50VHJpcHNbMF0uZGF0ZS5zcGxpdChcIi9cIik7XG4gICAgICBjdXJyZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY3VycmVudCBjYXJkXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlXCIgc3JjPVwiJHtmb3VuZERlc3QuaW1hZ2V9XCIgYWx0PVwiJHtmb3VuZERlc3QuYWx0fVwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJ0cmlwLWRlc3RpbmF0aW9uXCI+JHtzcGxpdERlc3ROYW1lWzBdfSw8YnI+ICR7c3BsaXREZXN0TmFtZVsxXX08L2g0PlxuICAgICAgICA8cCBjbGFzcz1cImRldGFpbHNcIj5UcmlwIHN0YXJ0IGRhdGU6ICR7ZGF0ZVNwbGl0WzFdfS8ke2RhdGVTcGxpdFsyXX0vJHtkYXRlU3BsaXRbMF19PGJyPiBEdXJhdGlvbiBvZiB0cmlwOiAke3RyYXZlbGVyLmN1cnJlbnRUcmlwc1swXS5kdXJhdGlvbn0gPGJyPiBOdW1iZXIgb2YgdHJhdmVsZXJzOiAke3RyYXZlbGVyLmN1cnJlbnRUcmlwc1swXS50cmF2ZWxlcnN9PC9wPlxuICAgICAgPC9kaXY+YFxuICAgIH1cbiAgfSxcblxuICBkaXNwbGF5VXBjb21pbmdUcmlwcyh0cmF2ZWxlciwgZGVzdGluYXRpb25zKSB7XG4gICAgbGV0IHVwY29taW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwcy1jb250YWluZXJcIik7XG4gICAgdXBjb21pbmcuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAodHJhdmVsZXIudXBjb21pbmdUcmlwc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB1cGNvbWluZy5pbm5lckhUTUwgPSBgPHA+WW91IGRvbid0IGhhdmUgYW55IHVwY29taW5nIHRyaXBzLCBmaWxsIG91dCB0aGUgZm9ybSBhYm92ZSB0byBwbGFuIHlvdXIgbmV4dCB0cmlwISE8L3A+YFxuICAgIH0gZWxzZSB7XG4gICAgICB0cmF2ZWxlci51cGNvbWluZ1RyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICAgIGxldCBmb3VuZERlc3QgPSBmaW5kRGVzdGluYXRpb25CYXNlZE9uVHJpcCh0cmlwLCBkZXN0aW5hdGlvbnMpO1xuICAgICAgICBsZXQgc3BsaXREZXN0TmFtZSA9IGZvdW5kRGVzdC5kZXN0aW5hdGlvbi5zcGxpdChcIiwgXCIpO1xuICAgICAgICBsZXQgZGF0ZVNwbGl0ID0gdHJpcC5kYXRlLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgdXBjb21pbmcuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwidXBjb21pbmcgY2FyZFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlXCIgc3JjPVwiJHtmb3VuZERlc3QuaW1hZ2V9XCIgYWx0PVwiJHtmb3VuZERlc3QuYWx0fVwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cInRyaXAtZGVzdGluYXRpb25cIj4ke3NwbGl0RGVzdE5hbWVbMF19LDxicj4gJHtzcGxpdERlc3ROYW1lWzFdfTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWxzXCI+VHJpcCBzdGFydCBkYXRlOiAke2RhdGVTcGxpdFsxXX0vJHtkYXRlU3BsaXRbMl19LyR7ZGF0ZVNwbGl0WzBdfTxicj4gRHVyYXRpb24gb2YgdHJpcDogJHt0cmlwLmR1cmF0aW9ufSA8YnI+IE51bWJlciBvZiB0cmF2ZWxlcnM6ICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICA8L2Rpdj5gXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBkaXNwbGF5UGVuZGluZ1RyaXBzKHRyYXZlbGVyLCBkZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgcGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVuZGluZy10cmlwcy1jb250YWluZXJcIik7XG4gICAgcGVuZGluZy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmICh0cmF2ZWxlci5wZW5kaW5nVHJpcHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGVuZGluZy5pbm5lckhUTUwgPSBgPHA+WW91IGRvbid0IGhhdmUgYW55IHBlbmRpbmcgdHJpcHMsIGZpbGwgb3V0IHRoZSBmb3JtIGFib3ZlIHRvIHBsYW4geW91ciBuZXh0IHRyaXAhITwvcD5gXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYXZlbGVyLnBlbmRpbmdUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICBsZXQgZm91bmREZXN0ID0gZmluZERlc3RpbmF0aW9uQmFzZWRPblRyaXAodHJpcCwgZGVzdGluYXRpb25zKTtcbiAgICAgICAgbGV0IHNwbGl0RGVzdE5hbWUgPSBmb3VuZERlc3QuZGVzdGluYXRpb24uc3BsaXQoXCIsIFwiKTtcbiAgICAgICAgbGV0IGRhdGVTcGxpdCA9IHRyaXAuZGF0ZS5zcGxpdChcIi9cIik7XG4gICAgICAgIHBlbmRpbmcuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwidXBjb21pbmcgY2FyZFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlXCIgc3JjPVwiJHtmb3VuZERlc3QuaW1hZ2V9XCIgYWx0PVwiJHtmb3VuZERlc3QuYWx0fVwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cInRyaXAtZGVzdGluYXRpb25cIj4ke3NwbGl0RGVzdE5hbWVbMF19LDxicj4gJHtzcGxpdERlc3ROYW1lWzFdfTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWxzXCI+VHJpcCBzdGFydCBkYXRlOiAke2RhdGVTcGxpdFsxXX0vJHtkYXRlU3BsaXRbMl19LyR7ZGF0ZVNwbGl0WzBdfTxicj4gRHVyYXRpb24gb2YgdHJpcDogJHt0cmlwLmR1cmF0aW9ufSA8YnI+IE51bWJlciBvZiB0cmF2ZWxlcnM6ICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICA8L2Rpdj5gXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBkaXNwbGF5UGFzdFRyaXBzKHRyYXZlbGVyLCBkZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgcGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzdC10cmlwcy1jb250YWluZXJcIik7XG4gICAgcGFzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmICh0cmF2ZWxlci5wYXN0VHJpcHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFzdC5pbm5lckhUTUwgPSBgPHA+WW91IGRvbid0IGhhdmUgYW55IHBhc3QgdHJpcHMsIGZpbGwgb3V0IHRoZSBmb3JtIGFib3ZlIHRvIHBsYW4geW91ciBuZXh0IHRyaXAhITwvcD5gXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYXZlbGVyLnBhc3RUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICBsZXQgZm91bmREZXN0ID0gZmluZERlc3RpbmF0aW9uQmFzZWRPblRyaXAodHJpcCwgZGVzdGluYXRpb25zKTtcbiAgICAgICAgbGV0IHNwbGl0RGVzdE5hbWUgPSBmb3VuZERlc3QuZGVzdGluYXRpb24uc3BsaXQoXCIsIFwiKTtcbiAgICAgICAgbGV0IGRhdGVTcGxpdCA9IHRyaXAuZGF0ZS5zcGxpdChcIi9cIik7XG4gICAgICAgIHBhc3QuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwidXBjb21pbmcgY2FyZFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlXCIgc3JjPVwiJHtmb3VuZERlc3QuaW1hZ2V9XCIgYWx0PVwiJHtmb3VuZERlc3QuYWx0fVwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cInRyaXAtZGVzdGluYXRpb25cIj4ke3NwbGl0RGVzdE5hbWVbMF19LDxicj4gJHtzcGxpdERlc3ROYW1lWzFdfTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWxzXCI+VHJpcCBzdGFydCBkYXRlOiAke2RhdGVTcGxpdFsxXX0vJHtkYXRlU3BsaXRbMl19LyR7ZGF0ZVNwbGl0WzBdfTxicj4gRHVyYXRpb24gb2YgdHJpcDogJHt0cmlwLmR1cmF0aW9ufSA8YnI+IE51bWJlciBvZiB0cmF2ZWxlcnM6ICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICA8L2Rpdj5gXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBwb3B1bGF0ZURlc3RpbmF0aW9uc0lucHV0KGRlc3RpbmF0aW9ucykge1xuICAgIGxldCBkZXN0aW5hdGlvbnNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zc2libGUtZGVzdGluYXRpb25cIik7XG4gICAgZGVzdGluYXRpb25zLmRlc3RpbmF0aW9ucy5mb3JFYWNoKGRlc3QgPT4ge1xuICAgICAgbGV0IGRlc3RpbmF0aW9uT3B0aW9uID0gYFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7ZGVzdC5pZH1cIj5cbiAgICAgICAgJHtkZXN0LmRlc3RpbmF0aW9ufVxuICAgICAgPC9vcHRpb24+XG4gICAgICBgXG4gICAgICBkZXN0aW5hdGlvbnNJbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZGVzdGluYXRpb25PcHRpb24pO1xuICAgIH0pXG4gIH0sXG5cbiAgZGlzcGxheU5ld1RyaXBDb3N0KGNvc3QsIGlucHV0cykge1xuICAgIGxldCBuZXdUcmlwQ29zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRyaXAtY29zdFwiKTtcbiAgICBuZXdUcmlwQ29zdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgaWYgKGlucHV0c1swXS52YWx1ZSAhPT0gXCJcIiAmJiBpbnB1dHNbM10udmFsdWUgIT09IFwiMFwiKSB7XG4gICAgICBuZXdUcmlwQ29zdC5pbm5lckhUTUwgPSBgPHA+IFRoaXMgdHJpcCB3aWxsIGNvc3QgJCR7Y29zdH0gKGluY2x1ZGluZyB0aGUgYWdlbnQgZmVlKSA8cD5gO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtcmVxdWVzdFwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRzWzBdLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBuZXdUcmlwQ29zdC5pbm5lckhUTUwgPSBgPHA+UGxlYXNlIHNlbGVjdCBhIGRhdGUhPC9wPmA7XG4gICAgfSBlbHNlIGlmIChpbnB1dHNbM10udmFsdWUgPT09IFwiMFwiKSB7XG4gICAgICBuZXdUcmlwQ29zdC5pbm5lckhUTUwgPSBgPHA+UGxlYXNlIHNlbGVjdCBhIGRlc3RpbmF0aW9uITwvcD5gO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVUcmlwQ29zdEFmdGVyUmVxdWVzdGVkQ2xlYXJJbnB1dHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdHJpcC1jb3N0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRlci1kdXJhdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5udW1iZXItdHJhdmVsZXJzXCIpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvc3NpYmxlLWRlc3RpbmF0aW9uXCIpLnZhbHVlID0gXCIwXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtcmVxdWVzdFwiKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxjLWNvc3RcIikuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gZmluZERlc3RpbmF0aW9uQmFzZWRPblRyaXAodHJpcCwgZGVzdGluYXRpb25zKSB7XG4gIGxldCBmb3VuZFRyaXAgPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKVxuICByZXR1cm4gZm91bmRUcmlwO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCIvLyBGZXRjaCBSZXF1ZXN0c1xubGV0IGZldGNoRGF0YSA9IHtcbiAgcmV0cmlldmVTcGVjaWZpY1RyYXZlbGVyKHRyYXZlbGVySWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzLyR7dHJhdmVsZXJJZH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29ycnkhIFdlIGFyZSBoYXZpbmcgdHJvdWJsZSBnZXR0aW5nIHRoZSBkYXRhLCB0cnkgYWdhaW4gbGF0ZXIhXCIpXG4gICAgICB9KVxuICB9LFxuXG4gIHJldHJpZXZlRGVzdGluYXRpb25zKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSEgV2UgYXJlIGhhdmluZyB0cm91YmxlIGdldHRpbmcgdGhlIGRhdGEsIHRyeSBhZ2FpbiBsYXRlciFcIilcbiAgICAgIH0pXG4gIH0sXG5cbiAgcmV0cmlldmVUcmF2ZWxlcnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5ISBXZSBhcmUgaGF2aW5nIHRyb3VibGUgZ2V0dGluZyB0aGUgZGF0YSwgdHJ5IGFnYWluIGxhdGVyIVwiKVxuICAgICAgfSlcbiAgfSxcblxuICByZXRyaWV2ZVRyaXBzKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5ISBXZSBhcmUgaGF2aW5nIHRyb3VibGUgZ2V0dGluZyB0aGUgZGF0YSwgdHJ5IGFnYWluIGxhdGVyIVwiKVxuICAgICAgfSlcbiAgfSxcblxuICBhZGROZXdUcmlwRm9yVHJhdmVsZXIodHJpcCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHNcIiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpZDogdHJpcC5pZCxcbiAgICAgICAgdXNlcklEOiB0cmlwLnVzZXJJRCxcbiAgICAgICAgZGVzdGluYXRpb25JRDogdHJpcC5kZXN0aW5hdGlvbklELFxuICAgICAgICB0cmF2ZWxlcnM6IHRyaXAudHJhdmVsZXJzLFxuICAgICAgICBkYXRlOiB0cmlwLmRhdGUsXG4gICAgICAgIGR1cmF0aW9uOiB0cmlwLmR1cmF0aW9uLFxuICAgICAgICBzdGF0dXM6IHRyaXAuc3RhdHVzLFxuICAgICAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiB0cmlwLnN1Z2dlc3RlZEFjdGl2aXRpZXNcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5ISBXZSBhcmUgaGF2aW5nIHRyb3VibGUgZ2V0dGluZyB0aGUgZGF0YSwgdHJ5IGFnYWluIGxhdGVyIVwiKVxuICAgICAgfSlcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BsYW5lLnBuZ1wiOyIsImltcG9ydCAnLi9pbWFnZXMvcGxhbmUucG5nJztcblxuaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuXG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vZmV0Y2hSZXF1ZXN0LmpzJztcblxuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzLmpzJztcblxuaW1wb3J0IERlc3RpbmF0aW9uIGZyb20gJy4vZGVzdGluYXRpb24uanMnO1xuaW1wb3J0IFRyYXZlbGVyIGZyb20gJy4vdHJhdmVsZXIuanMnO1xuaW1wb3J0IFRyaXAgZnJvbSAnLi90cmlwLmpzJztcblxubGV0IGFsbERlc3RpbmF0aW9ucztcbmxldCBhbGxUcmlwcztcbmxldCBjdXJyZW50VHJhdmVsZXI7XG5sZXQgdHJhdmVsZXJUcmlwcztcbmxldCBuZXdUcmlwSWRDb3VudDtcbmxldCBwbGFubmVkVHJpcDtcbmxldCB0cmlwT2JqO1xubGV0IHRyYXZlbGVyRGVzdGluYXRpb25zO1xuXG5sZXQgYWxsSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dFwiKTtcbmxldCBjYWxjTmV3VHJpcENvc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbGMtY29zdFwiKTtcbmxldCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc3dvcmRcIik7XG5sZXQgc3VibWl0TG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1sb2dpblwiKTtcbmxldCBzdWJtaXRUcmlwUmVxdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXJlcXVlc3RcIik7XG5sZXQgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJuYW1lXCIpO1xuXG5jYWxjTmV3VHJpcENvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJldHJpZXZlTmV3VHJpcENvc3QpO1xucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGNoZWNrTG9naW5JbnB1dHNFbmFibGVTdWJtaXQpO1xuc3VibWl0TG9naW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdExvZ2luSW5mbylcbnVzZXJuYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBjaGVja0xvZ2luSW5wdXRzRW5hYmxlU3VibWl0KTtcbnN1Ym1pdFRyaXBSZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRSZXF1ZXN0KTtcbmFsbElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGNoZWNrSWZBbGxGaWxsZWRPdXQpO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tJZkFsbEZpbGxlZE91dCk7XG59KVxuXG5mdW5jdGlvbiBjaGVja0xvZ2luSW5wdXRzRW5hYmxlU3VibWl0KCkge1xuICBpZiAocGFzc3dvcmQudmFsdWUgIT09IFwiXCIgJiB1c2VybmFtZS52YWx1ZS5sZW5ndGggPiA4KSB7XG4gICAgc3VibWl0TG9naW4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBzdWJtaXRMb2dpbi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VibWl0TG9naW5JbmZvKCkge1xuICBsZXQgc3BsaXRJRCA9IHBhcnNlSW50KHVzZXJuYW1lLnZhbHVlLnNsaWNlKDgpKTtcbiAgaWYgKHBhc3N3b3JkLnZhbHVlID09PSBcInRyYXZlbDIwMjBcIiAmJiB1c2VybmFtZS52YWx1ZS5pbmNsdWRlcyhcInRyYXZlbGVyXCIpKSB7XG4gICAgcmV0cmlldmVUcmF2ZWxlcihzcGxpdElEKVxuICB9IGVsc2Uge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUxvZ2luRXJyb3IoXCIqKlVzZXJuYW1lIG9yIHBhc3N3b3JkIG5vdCByZWNvZ25pemVkIHBsZWFzZSB0cnkgYWdhaW4qKlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVRyYXZlbGVyKGlkKSB7XG4gIGZldGNoRGF0YS5yZXRyaWV2ZVNwZWNpZmljVHJhdmVsZXIoaWQpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUxvZ2luRXJyb3IoZGF0YS5tZXNzYWdlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1hcnRpY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1kYXNoYm9hcmRcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgY3VycmVudFRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKGRhdGEpO1xuICAgICAgICBnYXRoZXJBUElJbmZvKCk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gZ2F0aGVyQVBJSW5mbygpIHtcbiAgUHJvbWlzZS5hbGwoW2ZldGNoRGF0YS5yZXRyaWV2ZURlc3RpbmF0aW9ucygpLFxuICAgIGZldGNoRGF0YS5yZXRyaWV2ZVRyaXBzKClcbiAgXSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGFsbERlc3RpbmF0aW9ucyA9IGRhdGFbMF07XG4gICAgICBhbGxUcmlwcyA9IGRhdGFbMV07XG4gICAgICBkb21VcGRhdGVzLnBvcHVsYXRlRGVzdGluYXRpb25zSW5wdXQoYWxsRGVzdGluYXRpb25zKTtcbiAgICAgIGZpbHRlckZvclRyYXZlbGVyKCk7XG4gICAgICBjYXRhZ29yaXplVHJpcHMoKTtcbiAgICAgIGdyZWV0VHJhdmVsZXIoY3VycmVudFRyYXZlbGVyKTtcbiAgICAgIGRpc3BsYXlUcmF2ZWxlclRyaXBzKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ3JlZXRUcmF2ZWxlcih0cmF2ZWxlcikge1xuICBkb21VcGRhdGVzLndlbGNvbWVUcmF2ZWxlcih0cmF2ZWxlcik7XG4gIGRvbVVwZGF0ZXMuZ2V0VG9kYXlzRGF0ZSgpO1xuICBsZXQgdHJpcHMyMDIwID0gdHJhdmVsZXIuZmlsdGVyVHJpcHNCeVllYXIoMjAyMCwgdHJhdmVsZXJUcmlwcyk7XG4gIGxldCB0cmlwQ29zdHMgPSB0cmF2ZWxlci50cmlwQ29zdHModHJpcHMyMDIwLCB0cmF2ZWxlckRlc3RpbmF0aW9ucyk7XG4gIGxldCBhZ2VudEZlZSA9IHRyYXZlbGVyLmNhbGNBZ2VudEZlZSh0cmlwQ29zdHMpO1xuICBsZXQgc3VtU3BlbnQgPSB0cmlwQ29zdHMgKyBhZ2VudEZlZTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VG90YWxUcmF2ZWxlclNwZW5kaW5ncyhzdW1TcGVudC50b0ZpeGVkKDIpKVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJGb3JUcmF2ZWxlcigpIHtcbiAgZmlsdGVyVHJpcHNGb3JUcmF2ZWxlcigpO1xuICBmaWx0ZXJEZXN0aW5hdGlvbnNCeVRyYXZlbGVyVHJpcHMoKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyVHJpcHNGb3JUcmF2ZWxlcigpIHtcbiAgbGV0IGZvdW5kVHJpcHMgPSBhbGxUcmlwcy50cmlwcy5maWx0ZXIodHJpcCA9PiB7XG4gICAgcmV0dXJuIHRyaXAudXNlcklEID09PSBjdXJyZW50VHJhdmVsZXIuaWQ7XG4gIH0pXG4gIHRyYXZlbGVyVHJpcHMgPSBmb3VuZFRyaXBzLm1hcCh0cmlwID0+IHtcbiAgICBsZXQgdHJpcEluc3RhbnRpYXRpb24gPSBuZXcgVHJpcCh0cmlwKTtcbiAgICByZXR1cm4gdHJpcEluc3RhbnRpYXRpb247XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNhdGFnb3JpemVUcmlwcygpIHtcbiAgZ2V0VHJhdmVsZXJQZW5kaW5nVHJpcHMoKTtcbiAgYXNzaWduVHJpcHNUb0NvcnJlY3RDYXRhZ29yeSgpO1xufVxuXG5mdW5jdGlvbiBnZXRUcmF2ZWxlclBlbmRpbmdUcmlwcygpIHtcbiAgY3VycmVudFRyYXZlbGVyLnBlbmRpbmdUcmlwcyA9IFtdO1xuICB0cmF2ZWxlclRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgaWYgKHRyaXAuc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xuICAgICAgY3VycmVudFRyYXZlbGVyLmFkZFRyaXAoJ3BlbmRpbmdUcmlwcycsIHRyaXApO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gYXNzaWduVHJpcHNUb0NvcnJlY3RDYXRhZ29yeSgpIHtcbiAgY3VycmVudFRyYXZlbGVyLnBhc3RUcmlwcyA9IFtdO1xuICBjdXJyZW50VHJhdmVsZXIudXBjb21pbmdUcmlwcyA9IFtdO1xuICBjdXJyZW50VHJhdmVsZXIuY3VycmVudFRyaXBzID0gW107XG4gIHRyYXZlbGVyVHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICBsZXQgZGF0ZVNwbGl0ID0gdHJpcC5kYXRlLnNwbGl0KFwiL1wiKTtcbiAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoZGF0ZVNwbGl0WzBdLCAoZGF0ZVNwbGl0WzFdIC0gMSksIGRhdGVTcGxpdFsyXSlcbiAgICBsZXQgdHJpcEVuZCA9IHN0YXJ0RGF0ZS5zZXREYXRlKHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyB0cmlwLmR1cmF0aW9uKTtcbiAgICBsZXQgc3RhcnRJbk1pbCA9IG5ldyBEYXRlKGRhdGVTcGxpdFswXSwgKGRhdGVTcGxpdFsxXSAtIDEpLCBkYXRlU3BsaXRbMl0pLmdldFRpbWUoKTtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAoc3RhcnRJbk1pbCA8IHRvZGF5ICYmIHRvZGF5IDwgdHJpcEVuZCkge1xuICAgICAgY3VycmVudFRyYXZlbGVyLmFkZFRyaXAoJ2N1cnJlbnRUcmlwcycsIHRyaXApO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRJbk1pbCA+IHRvZGF5KSB7XG4gICAgICBjdXJyZW50VHJhdmVsZXIuYWRkVHJpcCgndXBjb21pbmdUcmlwcycsIHRyaXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50VHJhdmVsZXIuYWRkVHJpcCgncGFzdFRyaXBzJywgdHJpcCk7XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJEZXN0aW5hdGlvbnNCeVRyYXZlbGVyVHJpcHMoKSB7XG4gIGxldCBmb3VuZERlc3RpbmF0aW9ucyA9IFtdO1xuICB0cmF2ZWxlclRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgYWxsRGVzdGluYXRpb25zLmRlc3RpbmF0aW9ucy5mb3JFYWNoKGRlc3QgPT4ge1xuICAgICAgaWYgKGRlc3QuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCkge1xuICAgICAgICBmb3VuZERlc3RpbmF0aW9ucy5wdXNoKGRlc3QpO1xuICAgICAgICB0cmlwLmdldENvc3RPZlRyaXAoZGVzdClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICB0cmF2ZWxlckRlc3RpbmF0aW9ucyA9IGZvdW5kRGVzdGluYXRpb25zLm1hcChkZXN0ID0+IHtcbiAgICByZXR1cm4gbmV3IERlc3RpbmF0aW9uKGRlc3QpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUcmF2ZWxlclRyaXBzKCkge1xuICBkb21VcGRhdGVzLmRpc3BsYXlDdXJyZW50VHJhdmVsZXJUcmlwKGN1cnJlbnRUcmF2ZWxlciwgdHJhdmVsZXJEZXN0aW5hdGlvbnMpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlVcGNvbWluZ1RyaXBzKGN1cnJlbnRUcmF2ZWxlciwgdHJhdmVsZXJEZXN0aW5hdGlvbnMpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlQZW5kaW5nVHJpcHMoY3VycmVudFRyYXZlbGVyLCB0cmF2ZWxlckRlc3RpbmF0aW9ucyk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheVBhc3RUcmlwcyhjdXJyZW50VHJhdmVsZXIsIHRyYXZlbGVyRGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZkFsbEZpbGxlZE91dCgpIHtcbiAgaWYgKGFsbElucHV0c1sxXS52YWx1ZSAhPT0gXCJcIiAmJiBhbGxJbnB1dHNbMl0udmFsdWUgIT09IFwiXCIpIHtcbiAgICBjYWxjTmV3VHJpcENvc3QuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZU5ld1RyaXBDb3N0KCkge1xuICBuZXdUcmlwSWRDb3VudCA9IGFsbFRyaXBzLnRyaXBzLmxlbmd0aCArIDE7XG4gIHBsYW5uZWRUcmlwID0gaW5zdGFudGlhdGVOZXdUcmlwKCk7XG4gIGFsbERlc3RpbmF0aW9ucy5kZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0ID0+IHtcbiAgICBpZiAoZGVzdC5pZCA9PT0gcGxhbm5lZFRyaXAuZGVzdGluYXRpb25JRCkge1xuICAgICAgcGxhbm5lZFRyaXAuZ2V0Q29zdE9mVHJpcChkZXN0KTtcbiAgICB9XG4gIH0pO1xuICBsZXQgdHJpcFdpdGhBZ2VudEZlZSA9IHBsYW5uZWRUcmlwLmNvc3QgKyBjdXJyZW50VHJhdmVsZXIuY2FsY0FnZW50RmVlKHBsYW5uZWRUcmlwLmNvc3QpO1xuICBsZXQgdG90YWxGb3JUcmlwID0gdHJpcFdpdGhBZ2VudEZlZS50b0ZpeGVkKDIpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlOZXdUcmlwQ29zdCh0b3RhbEZvclRyaXAsIGFsbElucHV0cyk7XG59XG5cbmZ1bmN0aW9uIGluc3RhbnRpYXRlTmV3VHJpcCgpIHtcbiAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1kYXRlXCIpLnZhbHVlLnNwbGl0KFwiLVwiKTtcbiAgbGV0IGRhdGVDb3JyZWN0ID0gYCR7ZGF0ZVswXX0vJHtkYXRlWzFdfS8ke2RhdGVbMl19YFxuICBsZXQgZHVyYXRpb24gPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVudGVyLWR1cmF0aW9uXCIpLnZhbHVlKTtcbiAgbGV0IHRyYXZlbGVycyA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubnVtYmVyLXRyYXZlbGVyc1wiKS52YWx1ZSk7XG4gIGxldCBkZXN0aW5hdGlvbiA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zc2libGUtZGVzdGluYXRpb25cIikudmFsdWUpO1xuICB0cmlwT2JqID0ge307XG4gIHRyaXBPYmogPSB7XG4gICAgaWQ6IG5ld1RyaXBJZENvdW50LFxuICAgIHVzZXJJRDogY3VycmVudFRyYXZlbGVyLmlkLFxuICAgIGRlc3RpbmF0aW9uSUQ6IGRlc3RpbmF0aW9uLFxuICAgIHRyYXZlbGVycyxcbiAgICBkYXRlOiBkYXRlQ29ycmVjdCxcbiAgICBkdXJhdGlvbixcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgIHN1Z2dlc3RlZEFjdGl2aXRpZXM6IFtdXG4gIH1cbiAgbGV0IG5ld1RyaXAgPSBuZXcgVHJpcCh0cmlwT2JqKTtcbiAgcmV0dXJuIG5ld1RyaXA7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFJlcXVlc3QoKSB7XG4gIGZldGNoRGF0YS5hZGROZXdUcmlwRm9yVHJhdmVsZXIodHJpcE9iailcbiAgICAudGhlbihnYXRoZXJBUElJbmZvKCkpO1xuICBkb21VcGRhdGVzLnJlbW92ZVRyaXBDb3N0QWZ0ZXJSZXF1ZXN0ZWRDbGVhcklucHV0cygpO1xufVxuXG4vLyBkZWxldGUgZmV0Y2ggcmVxdWVzdCwgbm90IGltcGxlbWVudGVkIHlldCBqdXN0IHVzZWQgd2hlbiBjcmVhdGluZyB0b28gbWFueSBuZXcgdHJpcHMgd2hlbiBmaWd1cmluZyBvdXQgcG9zdCByZXF1ZXN0XG5mdW5jdGlvbiBkZWxldGVUcmlwKGlkKSB7XG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcy8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU29ycnkhIFdlIGFyZSBoYXZpbmcgdHJvdWJsZSBnZXR0aW5nIHRoZSBkYXRhLCB0cnkgYWdhaW4gbGF0ZXIhXCIpXG4gICAgfSlcbn1cblxuLy9cbiIsImNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXIpIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXIuaWQ7XG4gICAgdGhpcy5uYW1lID0gdHJhdmVsZXIubmFtZTtcbiAgICB0aGlzLnRyYXZlbGVyVHlwZSA9IHRyYXZlbGVyLnRyYXZlbGVyVHlwZTtcbiAgICB0aGlzLmN1cnJlbnRUcmlwcyA9IFtdO1xuICAgIHRoaXMudXBjb21pbmdUcmlwcyA9IFtdO1xuICAgIHRoaXMucGVuZGluZ1RyaXBzID0gW107XG4gICAgdGhpcy5wYXN0VHJpcHMgPSBbXTtcbiAgfVxuXG4gIGdldEZpcnN0TmFtZSgpIHtcbiAgICBsZXQgc3BsaXROYW1lID0gdGhpcy5uYW1lLnNwbGl0KCcgJywgMik7XG4gICAgbGV0IGZpcnN0TmFtZSA9IHNwbGl0TmFtZVswXTtcbiAgICByZXR1cm4gZmlyc3ROYW1lO1xuICB9XG5cbiAgYWRkVHJpcCh0cmlwVGltaW5nLCB0cmlwT2JqZWN0KSB7XG4gICAgdGhpc1t0cmlwVGltaW5nXS5wdXNoKHRyaXBPYmplY3QpO1xuICB9XG5cbiAgZmlsdGVyVHJpcHNCeVllYXIoeWVhciwgdHJpcHMpIHtcbiAgICBsZXQgdHJpcHNQZXJZZWFyID0gdHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5kYXRlLmluY2x1ZGVzKHllYXIpKTtcbiAgICByZXR1cm4gdHJpcHNQZXJZZWFyXG4gIH1cblxuICB0cmlwQ29zdHModHJpcHMpIHtcbiAgICBsZXQgc3BlbnQgPSB0cmlwcy5yZWR1Y2UoKGFjYywgdHJpcCkgPT4ge1xuICAgICAgYWNjICs9IHRyaXAuY29zdFxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gc3BlbnQ7XG4gIH1cblxuICBjYWxjQWdlbnRGZWUoY29zdCkge1xuICAgIGxldCBhZ2VudEZlZSA9IGNvc3QgKiAwLjE7XG4gICAgcmV0dXJuIGFnZW50RmVlO1xuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBUcmF2ZWxlcjtcbiIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3Rvcih0cmlwKSB7XG4gICAgdGhpcy5pZCA9IHRyaXAuaWQ7XG4gICAgdGhpcy51c2VySUQgPSB0cmlwLnVzZXJJRDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSB0cmlwLmRlc3RpbmF0aW9uSUQ7XG4gICAgdGhpcy50cmF2ZWxlcnMgPSB0cmlwLnRyYXZlbGVycztcbiAgICB0aGlzLmRhdGUgPSB0cmlwLmRhdGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRyaXAuZHVyYXRpb247XG4gICAgdGhpcy5zdGF0dXMgPSB0cmlwLnN0YXR1cztcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSB0cmlwLnN1Z2dlc3RlZEFjdGl2aXRpZXM7XG4gICAgdGhpcy5jb3N0ID0gMDtcbiAgfVxuXG4gIGdldENvc3RPZlRyaXAoZGVzdGluYXRpb24pIHtcbiAgICBsZXQgYWNjID0gMDtcbiAgICBsZXQgZmxpZ2h0VG90YWwgPSB0aGlzLnRyYXZlbGVycyAqIGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gICAgbGV0IGxvZGdpbmdUb3RhbCA9IHRoaXMuZHVyYXRpb24gKiBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICBhY2MgKz0gZmxpZ2h0VG90YWw7XG4gICAgYWNjICs9IGxvZGdpbmdUb3RhbDtcbiAgICB0aGlzLmNvc3QgPSBhY2M7XG4gIH1cbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gVHJpcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=