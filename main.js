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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  /* Sizes */\n  --nav-height: 43px;\n  --nav-p-left: 18px;\n  --nav-p-right: 16px;\n  --sidebar-width: 305px;\n  /* Colors */\n  --jet-black: #343434;\n  --matte-black: #28282B;\n  --onyx: #353935;\n  --off-white: #FAF9F6;\n  --vermillion: #E34234;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Nunito', Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  color: var(--off-white);\n  font-size: 1rem;\n  min-height: 100vh;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: var(--sidebar-width);\n  min-height: calc(100vh - var(--nav-height));\n  background-color: var(--onyx);\n  padding-top: 30px;\n  overflow: hidden;\n  transition: all 200ms;\n}\n\naside [icon] {\n  font-size: 24px;\n}\n\naside>div,\nul {\n  padding-left: var(--nav-p-left);\n  padding-right: var(--nav-p-right);\n}\n\nmain {\n  background-color: var(--matte-black);\n}\n\nmain>div {\n  width: 60%;\n  margin: 40px auto;\n}\n\nul {\n  list-style-type: none;\n}\n\nul>li {\n  display: flex;\n}\n\nbutton {\n  display: flex;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  flex-shrink: 0;\n  font-size: inherit;\n  font-family: inherit;\n}\n\nbutton:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\ndialog {\n  margin: auto;\n  border: none;\n  background-color: var(--jet-black);\n  color: var(--off-white);\n  font-size: 1rem;\n}\n\ndialog::backdrop {\n  backdrop-filter: blur(2px);\n}\n\ndialog input {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 5px;\n  font-size: inherit;\n}\n\ninput[type=\"search\"] {\n  height: 100%;\n  outline: none;\n  border: none;\n  background-color: rgb(255 255 255 / 0);\n  color: inherit;\n  padding: 2px;\n  line-height: 1.5;\n  font-size: inherit;\n  cursor: inherit;\n  width: 100%;\n}\n\ninput[type=\"search\"]::placeholder {\n  color: inherit;\n}\n\n/* nav rules */\n.flex-nav {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  height: var(--nav-height);\n  background-color: var(--jet-black);\n  padding-left: var(--nav-p-left);\n  padding-right: var(--nav-p-right);\n}\n\n.flex-nav [icon] {\n  font-size: 28px;\n}\n\n.nav-left-section,\n.nav-right-section {\n  display: flex;\n  gap: 10px;\n  padding: 5px 0;\n}\n\n.nav-left-section {\n  width: calc(var(--sidebar-width) - var(--nav-p-left));\n}\n\n.nav-left-section form {\n  display: flex;\n  gap: 5px;\n  background-color: rgb(255 255 255 / 0.1);\n  padding-left: 2px;\n  padding-right: 2px;\n  cursor: pointer;\n}\n\n.nav-left-section form:hover {\n  background-color: rgb(0 0 0 / 0.5);\n  transition: all 200ms;\n}\n\n.icon-image {\n  width: 32px;\n  height: 32px;\n}\n\n/* Sidebar rules */\n.sidebar__item {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n}\n\n/* Grid Layout rules */\n.grid-wrapper {\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n/* Other rules to be defined */\n\n/* Utilities */\n.justified-between {\n  justify-content: space-between;\n}\n\n.aligned-center {\n  align-items: center;\n}\n\n.aligned-stretch {\n  align-items: stretch;\n}\n\n.ghost:hover {\n  background-color: rgb(255 255 255 / 0.2);\n}\n\n.active,\n.active:hover {\n  background-color: rgb(227 66 52 / 0.2);\n  color: rgb(227 66 52);\n}\n\n.rounded-5 {\n  border-radius: 5px;\n}\n\n.gap-5 {\n  gap: 5px;\n}\n\n.gap-10 {\n  gap: 10px;\n}\n\n.bold {\n  font-weight: 800;\n}\n\n.px-5 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.bg-red {\n  background-color: var(--vermillion);\n}\n\n.bg-blue {\n  background-color: steelblue;\n}\n\n.bg-green {\n  background-color: seagreen;\n}\n\n.bg-purple {\n  background-color: blueviolet;\n}\n\n.bg-dark {\n  background-color: var(--matte-black);\n}\n\n.bg-light {\n  background-color: var(--off-white);\n}\n\n.red {\n  color: var(--vermillion);\n}\n\n.blue {\n  color: steelblue;\n}\n\n.green {\n  color: seagreen;\n}\n\n.purple {\n  color: blueviolet;\n}\n\n.dark {\n  color: var(--matte-black);\n}\n\n.light {\n  color: var(--off-white);\n}\n\n.hidden {\n  display: none;\n}\n\n.collapse {\n  width: 0px;\n}\n\n@media screen and (max-width: 1024px) {\n  input[type=\"search\"] {\n    display: none;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addLeadingZeros)\n/* harmony export */ });\nfunction addLeadingZeros(number, targetLength) {\n  var sign = number < 0 ? '-' : '';\n  var output = Math.abs(number).toString();\n  while (output.length < targetLength) {\n    output = '0' + output;\n  }\n  return sign + output;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/formatISO/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/formatISO/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatISO)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ \"./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name formatISO\n * @category Common Helpers\n * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).\n *\n * @description\n * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.\n * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with local time zone, or both.\n * @returns {String} the formatted date string (in local time zone)\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `date` must not be Invalid Date\n * @throws {RangeError} `options.format` must be 'extended' or 'basic'\n * @throws {RangeError} `options.representation` must be 'date', 'time' or 'complete'\n *\n * @example\n * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):\n * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))\n * //=> '2019-09-18T19:00:52Z'\n *\n * @example\n * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):\n * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })\n * //=> '20190918T190052'\n *\n * @example\n * // Represent 18 September 2019 in ISO 8601 format, date only:\n * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })\n * //=> '2019-09-18'\n *\n * @example\n * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):\n * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })\n * //=> '19:00:52Z'\n */\nfunction formatISO(date, options) {\n  var _options$format, _options$representati;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(date);\n  if (isNaN(originalDate.getTime())) {\n    throw new RangeError('Invalid time value');\n  }\n  var format = String((_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : 'extended');\n  var representation = String((_options$representati = options === null || options === void 0 ? void 0 : options.representation) !== null && _options$representati !== void 0 ? _options$representati : 'complete');\n  if (format !== 'extended' && format !== 'basic') {\n    throw new RangeError(\"format must be 'extended' or 'basic'\");\n  }\n  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {\n    throw new RangeError(\"representation must be 'date', 'time', or 'complete'\");\n  }\n  var result = '';\n  var tzOffset = '';\n  var dateDelimiter = format === 'extended' ? '-' : '';\n  var timeDelimiter = format === 'extended' ? ':' : '';\n\n  // Representation is either 'date' or 'complete'\n  if (representation !== 'time') {\n    var day = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(originalDate.getDate(), 2);\n    var month = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(originalDate.getMonth() + 1, 2);\n    var year = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(originalDate.getFullYear(), 4);\n\n    // yyyyMMdd or yyyy-MM-dd.\n    result = \"\".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);\n  }\n\n  // Representation is either 'time' or 'complete'\n  if (representation !== 'date') {\n    // Add the timezone.\n    var offset = originalDate.getTimezoneOffset();\n    if (offset !== 0) {\n      var absoluteOffset = Math.abs(offset);\n      var hourOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Math.floor(absoluteOffset / 60), 2);\n      var minuteOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(absoluteOffset % 60, 2);\n      // If less than 0, the sign is +, because it is ahead of time.\n      var sign = offset < 0 ? '+' : '-';\n      tzOffset = \"\".concat(sign).concat(hourOffset, \":\").concat(minuteOffset);\n    } else {\n      tzOffset = 'Z';\n    }\n    var hour = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(originalDate.getHours(), 2);\n    var minute = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(originalDate.getMinutes(), 2);\n    var second = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(originalDate.getSeconds(), 2);\n\n    // If there's also date, separate it with time with 'T'\n    var separator = result === '' ? '' : 'T';\n\n    // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.\n    var time = [hour, minute, second].join(timeDelimiter);\n\n    // HHmmss or HH:mm:ss.\n    result = \"\".concat(result).concat(separator).concat(time).concat(tzOffset);\n  }\n  return result;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/formatISO/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_chick_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chick.png */ \"./src/images/chick.png\");\n/* harmony import */ var _modules_project_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project.mjs */ \"./src/modules/project.mjs\");\n/* harmony import */ var _modules_DOMHandler_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DOMHandler.mjs */ \"./src/modules/DOMHandler.mjs\");\n/* harmony import */ var _utils_constants_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/constants.mjs */ \"./src/utils/constants.mjs\");\n\n\n\n\n\n\nconst profileImageElement = document.querySelector(\"#profile-image\");\nprofileImageElement.src = _images_chick_png__WEBPACK_IMPORTED_MODULE_1__;\n\nconst sidebar = document.querySelector(\"aside\");\nconst divProjectAddCollapse = document.querySelector(\"#div-project-add-collapse\");\nconst sidebarProjectItemsDiv = document.querySelector(\".sidebar__project_items\");\nconst btnCollapseProjects = document.querySelector(\"#projects-collapse\");\nconst btnDisplayDiagNewProject = document.querySelector(\"#btn-display-diag-new-project\");\nconst btnConfirmNewProject = document.querySelector(\"#btn-confirm-new-project\");\nconst diagNewProject = document.querySelector(\"#diag-new-project\");\nconst inputProjectName = document.querySelector(\"#input-project-name\");\nconst btnToggleSidebar = document.querySelector(\"#btn-toggle-sidebar\");\n\nsidebar.addEventListener(\"mouseover\", () => divProjectAddCollapse.classList.remove(\"hidden\"));\nsidebar.addEventListener(\"mouseout\", () => divProjectAddCollapse.classList.add(\"hidden\"));\n\nbtnCollapseProjects.addEventListener(\"click\", () => {\n    btnCollapseProjects.firstElementChild.classList.toggle(\"hidden\");\n    btnCollapseProjects.lastElementChild.classList.toggle(\"hidden\");\n    sidebarProjectItemsDiv.classList.toggle(\"hidden\");\n})\n\nbtnDisplayDiagNewProject.addEventListener(\"click\", () => {\n    diagNewProject.showModal();\n});\n\ndiagNewProject.addEventListener(\"close\", (e) => {\n    if (diagNewProject.returnValue !== \"\" && diagNewProject.returnValue !== \"cancel\") {\n        createNewProject(diagNewProject.returnValue);\n    }\n    inputProjectName.value = \"\";\n    btnConfirmNewProject.disabled = true;\n})\n\nbtnConfirmNewProject.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    diagNewProject.close(inputProjectName.value);\n})\n\ninputProjectName.addEventListener(\"input\", () => {\n    btnConfirmNewProject.disabled = inputProjectName.value === \"\";\n})\n\nbtnToggleSidebar.addEventListener(\"click\", () => {\n    sidebar.classList.toggle(\"collapse\");\n})\n\nfunction createNewProject(name) {\n    const newProject = new _modules_project_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"](name);\n    _utils_constants_mjs__WEBPACK_IMPORTED_MODULE_4__.projects[newProject.id] = newProject;\n    sidebarProjectItemsDiv.appendChild((0,_modules_DOMHandler_mjs__WEBPACK_IMPORTED_MODULE_3__.createProjectSidebarItem)(newProject));\n    return newProject.id;\n}\n\n// Initialize Default project\nconst defaultProjectId = createNewProject(\"Default\");\n(0,_modules_DOMHandler_mjs__WEBPACK_IMPORTED_MODULE_3__.loadProjectPage)(_utils_constants_mjs__WEBPACK_IMPORTED_MODULE_4__.projects[defaultProjectId]);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/images/chick.png":
/*!******************************!*\
  !*** ./src/images/chick.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1090b53896e6a10d741.png\";\n\n//# sourceURL=webpack://todo-list/./src/images/chick.png?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./src/components/projectComponent.mjs":
/*!*********************************************!*\
  !*** ./src/components/projectComponent.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectComponent)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/formatISO/index.js\");\n/* harmony import */ var _todoComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoComponent.mjs */ \"./src/components/todoComponent.mjs\");\n/* harmony import */ var _utils_constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.mjs */ \"./src/utils/constants.mjs\");\n\n\n\n\nclass ProjectComponent {\n    #_project\n    #_node\n\n    constructor(project) {\n        this.#_project = project;\n        this.#setupNode();\n    }\n\n    get project() { return this.#_project; };\n    get node() { return this.#_node; };\n\n    set project(value) { this.#_project = value; };\n    set node(value) { this.#_node = value; };\n\n    #setupNode() {\n        const projectContainer = document.createElement(\"div\");\n        projectContainer.classList.add(\"project-container\");\n        projectContainer.appendChild(this.#createNodeHeader());\n        // projectContainer.appendChild(this.#createNewTaskDiv());\n        projectContainer.appendChild(this.#createAddTodoPlaceholder());\n        // projectContainer.appendChild();\n        projectContainer.appendChild(this.#createTodoListDiv());\n        this.#_node = projectContainer;\n    }\n\n    #createNodeHeader() {\n        const projectHeader = document.createElement(\"div\");\n        projectHeader.classList.add(\"project-header\");\n        projectHeader.appendChild(this.#createNameSection());\n        projectHeader.appendChild(this.#createOptionsSection());\n        return projectHeader;\n    }\n\n    #createNameSection() {\n        const nameSection = document.createElement(\"div\");\n        const nameInput = document.createElement(\"input\");\n        const nameButtonsHideableSection = document.createElement(\"div\");\n        const nameButtonsSubSection = document.createElement(\"div\");\n        const saveButton = document.createElement(\"button\");\n        const cancelButton = document.createElement(\"button\");\n\n        nameSection.classList.add(\"project-name-container\");\n        saveButton.classList.add(\"confirm\");\n        cancelButton.classList.add(\"cancel\");\n\n        nameInput.value = this.#_project.name;\n        nameInput.addEventListener(\"click\", () => {\n            nameInput.classList.add(\"editable\");\n            nameButtonsHideableSection.hidden = false;\n        })\n        nameSection.appendChild(nameInput);\n\n        saveButton.textContent = \"Save\";\n        cancelButton.textContent = \"Cancel\";\n\n        saveButton.addEventListener(\"click\", () => {\n            const sidebarProjectButton = document.querySelector(`button[data-id=\"${this.#_project.id}\"]`);\n            this.#_project.name = nameInput.value.trim();\n            nameInput.value = this.#_project.name;\n            sidebarProjectButton.textContent = this.#_project.name;\n            nameButtonsHideableSection.hidden = true;\n            nameInput.classList.remove(\"editable\");\n        });\n\n        cancelButton.addEventListener(\"click\", () => {\n            nameInput.value = this.#_project.name;\n            nameButtonsHideableSection.hidden = true;\n            nameInput.classList.remove(\"editable\");\n        })\n\n        nameButtonsHideableSection.hidden = true;\n        nameButtonsSubSection.appendChild(saveButton);\n        nameButtonsSubSection.appendChild(cancelButton);\n\n        nameButtonsHideableSection.appendChild(nameButtonsSubSection);\n        nameSection.appendChild(nameButtonsHideableSection);\n        return nameSection;\n    }\n\n    #createOptionsSection() {\n        // For the moment, just the option to delete the project\n        const optionsSection = document.createElement(\"div\");\n        const deleteButton = document.createElement(\"button\");\n\n        optionsSection.classList.add(\"project-options-container\");\n        deleteButton.classList.add(\"delete\");\n        deleteButton.textContent = \"Delete\";\n        deleteButton.addEventListener(\"click\", () => {\n            const projectList = document.querySelector(\".projects\");\n            const projectToRemove = document.querySelector(`button[data-id=\"${this.#_project.id}\"]`).parentElement;\n            projectList.removeChild(projectToRemove);\n            // TODO remove from local storage project list when implemented\n            delete _utils_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.projects[this.project.id];\n            // TODO change to project list overview instead\n            document.querySelector(\".main\").replaceChildren();\n        });\n\n        optionsSection.appendChild(deleteButton);\n        return optionsSection;\n    }\n\n    #createNewTaskDiv() {\n        const addTaskContainer = document.createElement(\"div\");\n        addTaskContainer.classList.add(\"add-task-container\");\n\n        const placeHolderAddTask = document.createElement(\"div\");\n        const placeholderAddButton = document.createElement(\"button\");\n\n        const addNewTaskDiv = document.createElement(\"div\");\n        addNewTaskDiv.classList.add(\"new-task-div\");\n\n        const addNewTaskForm = document.createElement(\"form\");\n        addNewTaskForm.id = \"add-new-task-form\";\n\n        const taskNameInput = document.createElement(\"input\");\n        taskNameInput.placeholder = \"Task name\";\n        taskNameInput.classList.add(\"bold\");\n        const taskDescriptionInput = document.createElement(\"input\");\n        taskDescriptionInput.placeholder = \"Description\";\n\n        const buttonsContainer = document.createElement(\"div\");\n        const dueDateInput = document.createElement(\"input\");\n        dueDateInput.type = \"datetime-local\";\n        dueDateInput.id = \"due-date\";\n        dueDateInput.name = \"due-date\";\n        dueDateInput.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Date()).slice(0, 16);\n\n        const prioritySelect = document.createElement(\"select\");\n        [1, 2, 3, 4].forEach(value => {\n            const priorityOption = document.createElement(\"option\");\n            priorityOption.value = value;\n            priorityOption.textContent = `Priority ${value}`;\n            prioritySelect.appendChild(priorityOption);\n        });\n\n        const submitButtonsContainer = document.createElement(\"div\");\n        const cancelButton = document.createElement(\"button\");\n        const saveButton = document.createElement(\"button\");\n\n        cancelButton.classList.add(\"cancel\");\n        saveButton.classList.add(\"confirm\");\n\n        cancelButton.textContent = \"Cancel\";\n        saveButton.textContent = \"Add task\";\n        saveButton.disabled = true;\n        saveButton.type = \"submit\";\n\n        cancelButton.addEventListener(\"click\", e => {\n            e.preventDefault();\n            placeHolderAddTask.hidden = false;\n            addNewTaskDiv.hidden = true;\n        })\n\n        saveButton.addEventListener(\"click\", e => {\n            e.preventDefault();\n            console.log(\"Addint new task to project \" + this.#_project.name);\n        })\n\n        taskNameInput.addEventListener(\"input\", () => {\n            if (taskNameInput.value === \"\") {\n                saveButton.disabled = true;\n            } else {\n                saveButton.disabled = false;\n            }\n        })\n\n        submitButtonsContainer.appendChild(cancelButton);\n        submitButtonsContainer.appendChild(saveButton);\n\n        buttonsContainer.appendChild(dueDateInput);\n        buttonsContainer.appendChild(prioritySelect);\n\n        addNewTaskForm.appendChild(taskNameInput);\n        addNewTaskForm.appendChild(taskDescriptionInput);\n        addNewTaskForm.appendChild(buttonsContainer);\n        addNewTaskForm.appendChild(submitButtonsContainer);\n\n        addNewTaskDiv.appendChild(addNewTaskForm);\n\n        addNewTaskDiv.hidden = true;\n\n        placeHolderAddTask.classList.add(\"add-task-placeholder-div\");\n        placeholderAddButton.textContent = \"+ Add Task\";\n        placeholderAddButton.addEventListener(\"click\", e => {\n            e.preventDefault();\n            placeHolderAddTask.hidden = true;\n            addNewTaskDiv.hidden = false;\n        });\n\n        placeHolderAddTask.appendChild(placeholderAddButton);\n\n        addTaskContainer.appendChild(placeHolderAddTask);\n        addTaskContainer.appendChild(addNewTaskDiv);\n\n        return addTaskContainer;\n    }\n\n    #createAddTodoPlaceholder() {\n        const parentDiv = document.createElement(\"div\");\n        const addTodoContainer = document.createElement(\"div\");\n        const addTodoButton = document.createElement(\"button\");\n\n        addTodoContainer.classList.add(\"add-task-placeholder-div\");\n        addTodoButton.textContent = \"+ Add Task\";\n        addTodoButton.addEventListener(\"click\", e => {\n            e.preventDefault();\n            addTodoContainer.hidden = true;\n            projectTodoContainer.hidden = false;\n        });\n\n        addTodoContainer.appendChild(addTodoButton);\n\n        const projectTodoContainer = new _todoComponent_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().node;\n        projectTodoContainer.hidden = true;\n\n        parentDiv.appendChild(addTodoContainer);\n        parentDiv.appendChild(projectTodoContainer);\n        return parentDiv;\n    }\n\n    #createTodoListDiv() {\n        const todolistDiv = document.createElement(\"div\");\n        todolistDiv.classList.add(\"todolist-container\");\n        const todoListUl = document.createElement(\"ul\");\n        this.#_project.todolist.forEach(todo => {\n            const todoComponent = new _todoComponent_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](todo);\n            const todoComponentWrapper = document.createElement(\"div\");\n            todoComponentWrapper.classList.add(\"todo-container-wrapper\");\n            todoComponentWrapper.hidden = true;\n            const todoLi = document.createElement(\"li\");\n            const todoLiFlexWrapper = document.createElement(\"div\");\n            const titleDiv = document.createElement(\"div\");\n            const titleDivWrapper = document.createElement(\"div\");\n            titleDivWrapper.classList.add(\"title-div-wrapper\");\n            todoLi.setAttribute(\"data-id\", todo.id);\n            const titleCheckCompleted = document.createElement(\"input\");\n            titleCheckCompleted.type = \"checkbox\";\n            titleDiv.appendChild(titleCheckCompleted);\n            const titleTextContent = document.createElement(\"span\");\n            titleTextContent.textContent = todo.title;\n            titleDiv.appendChild(titleTextContent);\n\n            titleCheckCompleted.addEventListener(\"change\", () => {\n                if (titleCheckCompleted.checked) {\n                    titleTextContent.classList.add(\"completed\");\n                    todo.state = TODO_STATE.COMPLETED;\n                } else {\n                    titleTextContent.classList.remove(\"completed\");\n                    todo.state = TODO_STATE.TODO;\n                }\n            });\n\n            const buttons = document.createElement(\"div\");\n            const detailsButton = document.createElement(\"button\");\n            const deleteButton = document.createElement(\"button\");\n\n            detailsButton.classList.add(\"confirm\");\n            deleteButton.classList.add(\"delete\");\n            detailsButton.textContent = \"Details\";\n            deleteButton.textContent = \"Delete\";\n\n            detailsButton.addEventListener(\"click\", (e) => {\n                e.preventDefault();\n                titleDivWrapper.hidden = true;\n                todoComponentWrapper.hidden = false;\n            })\n\n            buttons.appendChild(detailsButton);\n            buttons.appendChild(deleteButton);\n\n            todoLiFlexWrapper.appendChild(titleDiv);\n            todoLiFlexWrapper.appendChild(buttons);\n            titleDivWrapper.appendChild(todoLiFlexWrapper);\n            todoLi.appendChild(titleDivWrapper);\n            todoComponentWrapper.appendChild(todoComponent.node);\n            todoLi.appendChild(todoComponentWrapper);\n            todoListUl.appendChild(todoLi);\n        });\n        todolistDiv.appendChild(todoListUl);\n        return todolistDiv;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/components/projectComponent.mjs?");

/***/ }),

/***/ "./src/components/todoComponent.mjs":
/*!******************************************!*\
  !*** ./src/components/todoComponent.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoComponent)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/formatISO/index.js\");\n\n\nclass TodoComponent {\n    #_todo\n    #_node\n\n    constructor(todo) {\n        this.#_todo = todo;\n        this.#setupNode();\n    }\n\n    get todo() { return this.#_todo; };\n    get node() { return this.#_node; };\n\n    set todo(value) { this.#_todo = value; };\n    set node(value) { this.#_node = value; };\n\n    #setupNode() {\n        const todoContainer = document.createElement(\"div\");\n        todoContainer.classList.add(\"todo-container\");\n\n        const todoForm = document.createElement(\"form\");\n\n        const todoTitle = document.createElement(\"input\");\n        if (this.#_todo) {\n            todoTitle.value = this.#_todo.title;\n        } else {\n            todoTitle.placeholder = \"Task title\";\n        }\n        todoTitle.classList.add(\"bold\");\n\n        const todoDescription = document.createElement(\"input\");\n        if (this.#_todo) {\n            todoDescription.value = this.#_todo.description;\n        } else {\n            todoDescription.placeholder = \"Description\";\n        }\n\n        const otherInputsContainer = document.createElement(\"div\");\n        const dueDate = document.createElement(\"input\");\n        dueDate.type = \"datetime-local\";\n        dueDate.name = \"due-date\";\n        dueDate.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date()).slice(0, 16);\n\n        const priority = document.createElement(\"select\");\n        [1, 2, 3, 4].forEach(value => {\n            const option = document.createElement(\"option\");\n            option.value = value;\n            option.textContent = `Priority ${value}`;\n            priority.appendChild(option);\n        });\n\n        const bottomContainer = document.createElement(\"div\");\n        const cancelButton = document.createElement(\"button\");\n        const saveButton = document.createElement(\"button\");\n\n        cancelButton.classList.add(\"cancel\");\n        saveButton.classList.add(\"confirm\");\n\n        cancelButton.textContent = \"Cancel\";\n        if (this.#_todo) {\n            saveButton.textContent = \"Save\";\n            saveButton.disabled = false;\n        } else {\n            saveButton.textContent = \"Add task\";\n            saveButton.disabled = true;\n        }\n        saveButton.type = \"submit\";\n\n        cancelButton.addEventListener(\"click\", e => {\n            e.preventDefault();\n            todoContainer.hidden = true;\n            if (this.#_todo) {\n                document.querySelector(`li[data-id=\"${this.#_todo.id}\"] .title-div-wrapper`).hidden = false;\n                document.querySelector(`li[data-id=\"${this.#_todo.id}\"] .todo-container-wrapper`).hidden = true;\n            } else {\n                document.querySelector(\".add-task-placeholder-div\").hidden = false;\n            }\n        });\n\n        saveButton.addEventListener(\"click\", e => {\n            e.preventDefault();\n            console.log(\"Save modifications to Todo\");\n        });\n\n        todoTitle.addEventListener(\"input\", () => {\n            if (todoTitle.value === \"\") {\n                saveButton.disabled = true;\n            } else {\n                saveButton.disabled = false;\n            }\n        });\n\n        bottomContainer.appendChild(cancelButton);\n        bottomContainer.appendChild(saveButton);\n\n        otherInputsContainer.appendChild(dueDate);\n        otherInputsContainer.appendChild(priority);\n\n        todoForm.appendChild(todoTitle);\n        todoForm.appendChild(todoDescription);\n        todoForm.appendChild(otherInputsContainer);\n        todoForm.appendChild(bottomContainer);\n\n        todoContainer.appendChild(todoForm);\n\n        this.#_node = todoContainer;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/components/todoComponent.mjs?");

/***/ }),

/***/ "./src/modules/DOMHandler.mjs":
/*!************************************!*\
  !*** ./src/modules/DOMHandler.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectSidebarItem: () => (/* binding */ createProjectSidebarItem),\n/* harmony export */   loadProjectPage: () => (/* binding */ loadProjectPage)\n/* harmony export */ });\n/* harmony import */ var _components_projectComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/projectComponent.mjs */ \"./src/components/projectComponent.mjs\");\n\n\nfunction createProjectSidebarItem(project) {\n    const button = document.createElement(\"button\");\n    button.setAttribute(\"data-id\", project.id);\n    button.classList.add(\"ghost\", \"rounded-5\", \"sidebar__item\");\n    button.textContent = project.name;\n\n\n    button.addEventListener(\"click\", () => {\n        const allSidebarItems = document.querySelectorAll(\".sidebar__item:not(#sidebar-projects-title)\");\n        allSidebarItems.forEach(item => item.classList.remove(\"active\", \"bold\"));\n        // Load project page\n        loadProjectPage(project);\n    })\n\n    return button;\n}\n\nfunction loadProjectPage(project) {\n    const sidebarProjectItem = document.querySelector(`[data-id=\"${project.id}\"]`)\n    sidebarProjectItem.classList.add(\"active\", \"bold\");\n    const divProjectPage = document.querySelector(\"#project-page\");\n    divProjectPage.replaceChildren();\n    divProjectPage.appendChild(new _components_projectComponent_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](project).node);\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/DOMHandler.mjs?");

/***/ }),

/***/ "./src/modules/project.mjs":
/*!*********************************!*\
  !*** ./src/modules/project.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    #_id;\n    #_name;\n    #_todolist;\n    #_createdDate;\n    #_lastUpdatedDate;\n\n    constructor(name) {\n        this.#_id = crypto.randomUUID();\n        this.#_name = name;\n        this.#_todolist = new Array();\n        this.#_createdDate = new Date();\n        this.#_lastUpdatedDate = this.#_createdDate;\n    }\n\n    get id() { return this.#_id; };\n    get name() { return this.#_name; };\n    get todolist() { return this.#_todolist; };\n    get createdDate() { return this.#_createdDate; };\n    get lastUpdatedDate() { return this.#_lastUpdatedDate; };\n\n    set name(value) { this.#_name = value; };\n    set todolist(value) { this.#_todolist = value; };\n\n    addTodo(todo) {\n        this.#_todolist.push(todo);\n    }\n\n    addTodos(todos) {\n        this.#_todolist = this.#_todolist.concat(todos);\n    }\n\n    removeTodo(id) {\n        let indexToRemove = this.#_todolist.findIndex(todo => todo.id === id);\n        if (indexToRemove !== -1) { this.#_todolist.splice(indexToRemove, 1); };\n    }\n\n    printTodos() {\n        let todosOutput = \"\";\n        this.#_todolist.forEach(todo => todosOutput += todo.toString() + \"\\n\\n\");\n        console.log(todosOutput);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/project.mjs?");

/***/ }),

/***/ "./src/utils/constants.mjs":
/*!*********************************!*\
  !*** ./src/utils/constants.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\nconst projects = {};\n\n\n\n//# sourceURL=webpack://todo-list/./src/utils/constants.mjs?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;