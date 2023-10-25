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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --navbar-height: 40px;\n  --blue-gray: #7393B3;\n  --navy-blue: #000080;\n  --steel-blue: #4682B4;\n  --charcoal: #36454F;\n  --jet-black: #343434;\n  --matte-black: #28282B;\n  --platinum: #E5E4E2;\n  --mango: #F4BB44;\n  --jade: #00A36C;\n  --cadmium-red: #D22B2B;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Montserrat', Arial, Helvetica, sans-serif;\n}\n\nnav,\nfooter,\naside {\n  background-color: var(--jet-black);\n  color: var(--platinum);\n}\n\nmain {\n  background-color: var(--matte-black);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* PROJECT CONTAINER */\n.project-container {\n  padding: 30px 0;\n  width: 50%;\n  font-size: 1rem;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.project-name-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.project-name-container div div {\n  display: flex;\n  gap: 10px;\n}\n\n.project-header input {\n  background-color: inherit;\n  color: var(--platinum);\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 1.5rem;\n  font-weight: 800;\n  padding: 2px 5px;\n}\n\n.project-header input.editable {\n  background-color: inherit;\n  outline: 1px solid white;\n}\n\n.project-header input:hover:not(.editable) {\n  background-color: rgba(255 255 255 / 0.1);\n}\n\n.project-header input:focus {\n  outline: 1px solid var(--blue-gray);\n}\n\n.project-header button {\n  padding: 7px 13px;\n  border: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 800;\n  cursor: pointer;\n}\n\n/* OTHER */\n\n#new-project-dialog,\n#edit-project-dialog {\n  width: 280px;\n  margin: auto;\n  padding: 20px;\n}\n\n#new-project-dialog::backdrop,\n#edit-project-dialog::backdrop {\n  background-color: gray;\n  opacity: 0.75;\n}\n\n#new-project-dialog form,\n#edit-project-dialog form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#new-project-dialog form fieldset,\n#edit-project-dialog form fieldset {\n  border: none;\n  display: flex;\n  gap: 5px;\n}\n\n#project-name,\n#edit-project-name {\n  width: 100%;\n}\n\n.btn {\n  color: var(--platinum);\n  background-color: var(--jet-black);\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--navbar-height);\n  cursor: pointer;\n  height: var(--navbar-height);\n}\n\n.btn:hover {\n  background-color: rgb(255 255 255 / .1);\n  border-radius: 50%;\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n    'FILL' 1,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: minmax(auto, 250px) 1fr;\n  grid-template-rows: var(--navbar-height) auto 50px;\n  grid-template-areas: \"sidebar navbar\"\n    \"sidebar main\"\n    \"sidebar footer\";\n  height: 100vh;\n}\n\n.navbar {\n  grid-area: navbar-start / sidebar-start / navbar-end / navbar-end;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n}\n\n.navbar-start-items,\n.navbar-end-items {\n  display: flex;\n  justify-content: center;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  transform: translateX(0%);\n  transition: 200ms ease;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  padding-left: 20px;\n}\n\n.sidebar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: var(--navbar-height);\n}\n\n.sidebar-body {\n  padding-right: 20px;\n}\n\n.sidebar.sidebar-collapsed {\n  transform: translateX(-100%);\n}\n\n.sidebar ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar ul li:first-child {\n  margin-bottom: 10px;\n}\n\n.sidebar ul li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sidebar ul li+li {\n  cursor: pointer;\n  padding-right: 0;\n}\n\n.sidebar ul li+li:hover {\n  background-color: rgb(255 255 255 / .1);\n  border-radius: 5px;\n}\n\n.sidebar ul li+li button.btn {\n  font-size: 1rem;\n  width: 100%;\n  max-width: 100%;\n  justify-content: left;\n  border-radius: unset;\n  height: calc(var(--navbar-height) - 10px);\n  padding: 5px 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sidebar ul li+li button.btn:hover {\n  background-color: unset;\n  border-radius: unset;\n}\n\n.sidebar ul li+li button.btn[data-id] {\n  width: unset;\n  flex-grow: 5;\n  max-width: 81%;\n}\n\n.sidebar ul li+li button.btn.project-edit {\n  flex: 1;\n}\n\n.main {\n  grid-area: main-start / sidebar-start / main-end / main-end;\n}\n\n.footer {\n  grid-area: footer-start / sidebar-start / footer-end / footer-end;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 800;\n}\n\n/* UTILITY CLASSES */\n.bold {\n  font-weight: 800;\n}\n\n.active {\n  background-color: rgb(255 255 255 / .1);\n}\n\n.confirm {\n  background-color: var(--platinum);\n  color: var(--matte-black);\n}\n\n.cancel {\n  background-color: var(--charcoal);\n  color: var(--platinum);\n}\n\n.delete {\n  background-color: var(--cadmium-red);\n  color: var(--platinum);\n}\n\n/* Desktop */\n@media only screen and (min-width: 768px) {\n  .project-header input {\n    width: fit-content;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _DOMHandler_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHandler.mjs */ \"./src/DOMHandler.mjs\");\n\n\n\n(0,_DOMHandler_mjs__WEBPACK_IMPORTED_MODULE_1__.DOMHandler)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/DOMHandler.mjs":
/*!****************************!*\
  !*** ./src/DOMHandler.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMHandler: () => (/* binding */ DOMHandler),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodo: () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _project_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.mjs */ \"./src/project.mjs\");\n/* harmony import */ var _projectComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectComponent.mjs */ \"./src/projectComponent.mjs\");\n\n\n\nconst sidebar = document.querySelector(\".sidebar\");\nconst btnOpenSidebar = document.querySelector(\"#btn-open-sidebar\");\nconst btnCloseSidebar = document.querySelector(\"#btn-close-sidebar\");\nconst main = document.querySelector(\".main\");\nconst newProjectDialog = document.querySelector(\"#new-project-dialog\");\nconst editProjectDialog = document.querySelector(\"#edit-project-dialog\");\nconst closeBtnNewProjectDialog = document.querySelector(\"#close-new-project-dialog\");\nconst confirmBtnNewProjectDialog = document.querySelector(\"#confirm-new-project-dialog\");\nconst closeBtnEditProjectDialog = document.querySelector(\"#close-edit-project-dialog\");\nconst confirmBtnEditProjectDialog = document.querySelector(\"#confirm-edit-project-dialog\");\n\nconst projects = {};\n\nfunction openSidebar() {\n    sidebar.classList.remove(\"sidebar-collapsed\");\n}\n\nfunction closeSidebar() {\n    sidebar.classList.add(\"sidebar-collapsed\");\n}\n\nfunction setupSidebar() {\n    const sidebarBody = document.querySelector(\".sidebar-body\");\n\n    const projectList = document.createElement(\"ul\");\n    projectList.setAttribute(\"id\", \"projects\");\n    projectList.classList.add(\"projects\");\n    sidebarBody.appendChild(projectList);\n\n    // First List Item is to add a new project\n    const projectsHeaderLi = document.createElement(\"li\");\n    projectsHeaderLi.classList.add(\"bold\");\n\n    const projectHeaderTitle = document.createElement(\"span\");\n    const addNewProjectBtn = document.createElement(\"button\");\n    const addProjectIcon = document.createElement(\"span\");\n\n    addProjectIcon.classList.add(\"material-symbols-outlined\");\n    addProjectIcon.textContent = \"add\";\n\n    projectHeaderTitle.textContent = \"Projects\"\n\n    addNewProjectBtn.addEventListener(\"click\", createNewProject);\n    addNewProjectBtn.setAttribute(\"id\", \"btn-create-project\");\n    addNewProjectBtn.classList.add(\"btn\");\n    addNewProjectBtn.appendChild(addProjectIcon);\n\n    projectsHeaderLi.appendChild(projectHeaderTitle);\n    projectsHeaderLi.appendChild(addNewProjectBtn);\n\n    projectList.appendChild(projectsHeaderLi);\n\n}\n\n\nfunction DOMHandler() {\n    btnOpenSidebar.addEventListener(\"click\", openSidebar);\n    btnCloseSidebar.addEventListener(\"click\", closeSidebar);\n    main.addEventListener(\"click\", () => {\n        if (getComputedStyle(sidebar).position === \"relative\" &&\n            !sidebar.classList.contains(\"sidebar-collapsed\")) {\n            closeSidebar();\n        }\n    });\n    setupSidebar();\n\n    newProjectDialog.addEventListener(\"click\", e => {\n        if (e.target.id === \"new-project-dialog\") {\n            newProjectDialog.close();\n            resetNewProjectDialog();\n        }\n    });\n\n    editProjectDialog.addEventListener(\"click\", e => {\n        if (e.target.id === \"edit-project-dialog\") {\n            editProjectDialog.close();\n            resetEditProjectDialog();\n        }\n    })\n\n    closeBtnNewProjectDialog.addEventListener(\"click\", () => {\n        newProjectDialog.close();\n        resetNewProjectDialog();\n    });\n\n    confirmBtnNewProjectDialog.addEventListener(\"click\", () => {\n        const newProjectName = document.querySelector(\"#project-name\");\n        if (newProjectName.value !== \"\") {\n            const newProject = new _project_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newProjectName.value);\n            addProject(newProject);\n        }\n    });\n\n    closeBtnEditProjectDialog.addEventListener(\"click\", () => {\n        editProjectDialog.close();\n        resetEditProjectDialog();\n    });\n\n    confirmBtnEditProjectDialog.addEventListener(\"click\", () => {\n        const editProjectName = document.querySelector(\"#edit-project-name\");\n        const editProjectId = document.querySelector(\"#edit-project-id\");\n        if (editProjectName.value !== \"\") {\n            const project = projects[editProjectId.value];\n            project.name = editProjectName.value;\n\n            const btnProject = document.querySelector(`button[data-id=\"${project.id}\"]`);\n            btnProject.textContent = project.name;\n        }\n    });\n\n    const myDefaultProject = new _project_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default\");\n    addProject(myDefaultProject);\n}\n\nfunction resetNewProjectDialog() {\n    const newProjectName = document.querySelector(\"#project-name\");\n    newProjectName.value = \"\";\n}\n\nfunction resetEditProjectDialog() {\n    const editProjectName = document.querySelector(\"#edit-project-name\");\n    const editProjectId = document.querySelector(\"#edit-project-id\");\n    editProjectName.value = \"\";\n    editProjectId.value = \"\";\n}\n\nfunction createNewProject() {\n    newProjectDialog.showModal();\n}\n\nfunction addProject(project) {\n    const projectList = document.querySelector(\".projects\");\n    const projectListItem = document.createElement(\"li\");\n    const projectListItemButton = document.createElement(\"button\");\n\n    projectListItemButton.classList.add(\"btn\");\n    projectListItemButton.setAttribute(\"data-id\", project.id);\n    projectListItemButton.textContent = project.name;\n\n    // Add button event handler to see project details\n    projectListItemButton.addEventListener(\"click\", showProjectDetails);\n\n    const editIcon = document.createElement(\"span\");\n    editIcon.classList.add(\"material-symbols-outlined\");\n    editIcon.textContent = \"edit\";\n\n    projectListItem.appendChild(projectListItemButton);\n    projectList.appendChild(projectListItem);\n\n    projects[project.id] = project;\n}\n\nfunction addTodo(todo) {\n\n}\n\nfunction showEditProjectDialog(e) {\n    const currentProject = projects[e.currentTarget.getAttribute(\"data-id\")]\n    const editProjectName = document.querySelector(\"#edit-project-name\");\n    const editProjectId = document.querySelector(\"#edit-project-id\");\n    editProjectName.value = currentProject.name;\n    editProjectId.value = currentProject.id;\n    editProjectDialog.showModal();\n}\n\nfunction showProjectDetails(e) {\n    // Clear project details section\n    clearMainSection();\n    // Create project details with current project\n    main.appendChild(new _projectComponent_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projects, projects[e.target.getAttribute(\"data-id\")]).node);\n}\n\nfunction clearMainSection() {\n    main.replaceChildren();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOMHandler.mjs?");

/***/ }),

/***/ "./src/project.mjs":
/*!*************************!*\
  !*** ./src/project.mjs ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    #_id;\n    #_name;\n    #_todolist;\n    #_createdDate;\n    #_lastUpdatedDate;\n\n    constructor(name) {\n        this.#_id = crypto.randomUUID();\n        this.#_name = name;\n        this.#_todolist = new Array();\n        this.#_createdDate = new Date();\n        this.#_lastUpdatedDate = this.#_createdDate;\n    }\n\n    get id() { return this.#_id; };\n    get name() { return this.#_name; };\n    get todolist() { return this.#_todolist; };\n    get createdDate() { return this.#_createdDate; };\n    get lastUpdatedDate() { return this.#_lastUpdatedDate; };\n\n    set name(value) { this.#_name = value; };\n    set todolist(value) { this.#_todolist = value; };\n\n    addTodo(todo) {\n        this.#_todolist.push(todo);\n    }\n\n    addTodos(todos) {\n        this.#_todolist = this.#_todolist.concat(todos);\n    }\n\n    removeTodo(id) {\n        let indexToRemove = this.#_todolist.findIndex(todo => todo.id === id);\n        if (indexToRemove !== -1) { this.#_todolist.splice(indexToRemove, 1); };\n    }\n\n    printTodos() {\n        let todosOutput = \"\";\n        this.#_todolist.forEach(todo => todosOutput += todo.toString() + \"\\n\\n\");\n        console.log(todosOutput);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/project.mjs?");

/***/ }),

/***/ "./src/projectComponent.mjs":
/*!**********************************!*\
  !*** ./src/projectComponent.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectComponent)\n/* harmony export */ });\nclass ProjectComponent {\n    #_projects\n    #_project\n    #_node\n\n    constructor(projects, project) {\n        this.#_projects = projects;\n        this.#_project = project;\n        this.#setupNode();\n    }\n\n    get project() { return this.#_project; };\n    get node() { return this.#_node; };\n\n    set project(value) { this.#_project = value; };\n    set node(value) { this.#_node = value; };\n\n    #setupNode() {\n        const projectContainer = document.createElement(\"div\");\n        projectContainer.classList.add(\"project-container\");\n        projectContainer.appendChild(this.#createNodeHeader());\n        projectContainer.appendChild(this.#createNewTaskDiv());\n        projectContainer.appendChild(this.#createTodoListDiv());\n        this.#_node = projectContainer;\n    }\n\n    #createNodeHeader() {\n        const projectHeader = document.createElement(\"div\");\n        projectHeader.classList.add(\"project-header\");\n        projectHeader.appendChild(this.#createNameSection());\n        projectHeader.appendChild(this.#createOptionsSection());\n        return projectHeader;\n    }\n\n    #createNameSection() {\n        const nameSection = document.createElement(\"div\");\n        const nameInput = document.createElement(\"input\");\n        const nameButtonsHideableSection = document.createElement(\"div\");\n        const nameButtonsSubSection = document.createElement(\"div\");\n        const saveButton = document.createElement(\"button\");\n        const cancelButton = document.createElement(\"button\");\n\n        nameSection.classList.add(\"project-name-container\");\n        saveButton.classList.add(\"confirm\");\n        cancelButton.classList.add(\"cancel\");\n\n        nameInput.value = this.#_project.name;\n        nameInput.addEventListener(\"click\", () => {\n            nameInput.classList.add(\"editable\");\n            nameButtonsHideableSection.hidden = false;\n        })\n        nameSection.appendChild(nameInput);\n\n        saveButton.textContent = \"Save\";\n        cancelButton.textContent = \"Cancel\";\n\n        saveButton.addEventListener(\"click\", () => {\n            const sidebarProjectButton = document.querySelector(`button[data-id=\"${this.#_project.id}\"]`);\n            this.#_project.name = nameInput.value.trim();\n            nameInput.value = this.#_project.name;\n            sidebarProjectButton.textContent = this.#_project.name;\n            nameButtonsHideableSection.hidden = true;\n            nameInput.classList.remove(\"editable\");\n        });\n\n        cancelButton.addEventListener(\"click\", () => {\n            nameInput.value = this.#_project.name;\n            nameButtonsHideableSection.hidden = true;\n            nameInput.classList.remove(\"editable\");\n        })\n\n        nameButtonsHideableSection.hidden = true;\n        nameButtonsSubSection.appendChild(saveButton);\n        nameButtonsSubSection.appendChild(cancelButton);\n\n        nameButtonsHideableSection.appendChild(nameButtonsSubSection);\n        nameSection.appendChild(nameButtonsHideableSection);\n        return nameSection;\n    }\n\n    #createOptionsSection() {\n        // For the moment, just the option to delete the project\n        const optionsSection = document.createElement(\"div\");\n        const deleteButton = document.createElement(\"button\");\n\n        optionsSection.classList.add(\"project-options-container\");\n        deleteButton.classList.add(\"delete\");\n        deleteButton.textContent = \"Delete\";\n        deleteButton.addEventListener(\"click\", () => {\n            const projectList = document.querySelector(\".projects\");\n            const projectToRemove = document.querySelector(`button[data-id=\"${this.#_project.id}\"]`).parentElement;\n            projectList.removeChild(projectToRemove);\n            // TODO remove from local storage project list when implemented\n            delete this.#_projects[this.project.id];\n            // TODO change to project list overview instead\n            document.querySelector(\".main\").replaceChildren();\n        });\n\n        optionsSection.appendChild(deleteButton);\n        return optionsSection;\n    }\n\n    #createNewTaskDiv() {\n        const addNewTaskDiv = document.createElement(\"div\");\n        return addNewTaskDiv;\n    }\n\n    #createTodoListDiv() {\n        const todolistDiv = document.createElement(\"div\");\n        return todolistDiv;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/projectComponent.mjs?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;