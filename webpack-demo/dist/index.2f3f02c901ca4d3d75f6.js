(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ 426:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hello {\n    color: red;\n  }\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;EACZ","sourcesContent":[".hello {\n    color: red;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 522:
/*!**********************!*\
  !*** ./src/data.csv ***!
  \**********************/
/***/ ((module) => {

module.exports = [["to","from","heading","body"],["Mary","John","Reminder","Call Cindy on Tuesday"],["Zoe","Bill","Reminder","Buy orange juice"],["Autumn","Lindsey","Letter","I miss you"]]

/***/ }),

/***/ 654:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ 426);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 267:
/*!**********************!*\
  !*** ./src/data.xml ***!
  \**********************/
/***/ ((module) => {

module.exports = {"note":{"to":["Mary"],"from":["John"],"heading":["Reminder"],"body":["Call Cindy on Tuesday"]}}

/***/ }),

/***/ 274:
/*!************************!*\
  !*** ./src/data.json5 ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"JSON5 Example","owner":{"name":"Tom Preston-Werner","organization":"GitHub","bio":"GitHub Cofounder & CEO\\nLikes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ }),

/***/ 157:
/*!**********************!*\
  !*** ./src/icon.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2cca447ea2210b63d2f3.png";

/***/ }),

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/join */ 611);
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ 654);
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.png */ 157);
/* harmony import */ var _data_csv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.csv */ 522);
/* harmony import */ var _data_csv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_csv__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.xml */ 267);
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_xml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_json5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.json5 */ 274);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print.js */ 569);










console.log(_data_json5__WEBPACK_IMPORTED_MODULE_5__.title); // output `JSON5 Example`
console.log(_data_json5__WEBPACK_IMPORTED_MODULE_5__.owner.name); // output `Tom Preston-Werner`
(0,_print_js__WEBPACK_IMPORTED_MODULE_6__.default)();
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = lodash_join__WEBPACK_IMPORTED_MODULE_0___default()(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = _icon_png__WEBPACK_IMPORTED_MODULE_2__;
  
    console.log((_data_csv__WEBPACK_IMPORTED_MODULE_3___default()));
    console.log((_data_xml__WEBPACK_IMPORTED_MODULE_4___default()));

    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_6__.default;
  
    element.appendChild(btn);
  
    return element;
  }
  
document.body.appendChild(component());
  

/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
    console.log('I get called from print.js2!');
  }
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_exec__(138)));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9kYXRhLmNzdiIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RhdGEueG1sIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcHJpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELGlCQUFpQixLQUFLLFdBQVcsZ0ZBQWdGLFVBQVUsaUNBQWlDLGlCQUFpQixLQUFLLHVCQUF1QjtBQUMzUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1B2Qyw0TDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXlGO0FBQ3pGLFlBQXVGOztBQUV2Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUl4QixpRUFBZSwwRkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7QUNabkMsa0JBQWtCLFFBQVEsdUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUs7QUFDWDtBQUNVO0FBQ0M7QUFDRDtBQUNFO0FBQ0M7Ozs7QUFJakMsWUFBWSw4Q0FBVSxFQUFFO0FBQ3hCLFlBQVksbURBQWUsRUFBRTtBQUM3QixrREFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFJO0FBQzVCO0FBQ0E7QUFDQSxpQkFBaUIsc0NBQUk7O0FBRXJCLGdCQUFnQixrREFBSztBQUNyQixnQkFBZ0Isa0RBQUk7O0FBRXBCOztBQUVBO0FBQ0Esa0JBQWtCLDhDQUFPOztBQUV6Qjs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNlO0FBQ2Y7QUFDQSIsImZpbGUiOiJpbmRleC4yZjNmMDJjOTAxY2E0ZDNkNzVmNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlbGxvIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0VBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlbGxvIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJ0b1wiLFwiZnJvbVwiLFwiaGVhZGluZ1wiLFwiYm9keVwiXSxbXCJNYXJ5XCIsXCJKb2huXCIsXCJSZW1pbmRlclwiLFwiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdLFtcIlpvZVwiLFwiQmlsbFwiLFwiUmVtaW5kZXJcIixcIkJ1eSBvcmFuZ2UganVpY2VcIl0sW1wiQXV0dW1uXCIsXCJMaW5kc2V5XCIsXCJMZXR0ZXJcIixcIkkgbWlzcyB5b3VcIl1dIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5vdGVcIjp7XCJ0b1wiOltcIk1hcnlcIl0sXCJmcm9tXCI6W1wiSm9oblwiXSxcImhlYWRpbmdcIjpbXCJSZW1pbmRlclwiXSxcImJvZHlcIjpbXCJDYWxsIENpbmR5IG9uIFR1ZXNkYXlcIl19fSIsImltcG9ydCBqb2luIGZyb20gJ2xvZGFzaC9qb2luJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24ucG5nJztcbmltcG9ydCBOb3RlcyBmcm9tICcuL2RhdGEuY3N2JztcbmltcG9ydCBEYXRhIGZyb20gJy4vZGF0YS54bWwnO1xuaW1wb3J0IGpzb24gZnJvbSAnLi9kYXRhLmpzb241JztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuXG5cblxuY29uc29sZS5sb2coanNvbi50aXRsZSk7IC8vIG91dHB1dCBgSlNPTjUgRXhhbXBsZWBcbmNvbnNvbGUubG9nKGpzb24ub3duZXIubmFtZSk7IC8vIG91dHB1dCBgVG9tIFByZXN0b24tV2VybmVyYFxucHJpbnRNZSgpO1xuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyBsb2Rhc2jvvIjnm67liY3pgJrov4fkuIDkuKogc2NyaXB0IOW8leWFpe+8ieWvueS6juaJp+ihjOi/meS4gOihjOaYr+W/hemcgOeahFxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbXlJY29uLnNyYyA9IEljb247XG4gIFxuICAgIGNvbnNvbGUubG9nKE5vdGVzKTtcbiAgICBjb25zb2xlLmxvZyhEYXRhKTtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuICAgIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XG4gICAgYnRuLm9uY2xpY2sgPSBwcmludE1lO1xuICBcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG4gIFxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIFxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4gICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gICAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzMiEnKTtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9