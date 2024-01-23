/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss ***!
  \**************************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-regular.woff2 */ "./src/assets/fonts/nunito-v25-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-regular.woff */ "./src/assets/fonts/nunito-v25-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-700.woff2 */ "./src/assets/fonts/nunito-v25-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-700.woff */ "./src/assets/fonts/nunito-v25-latin-700.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/arrow-color.svg */ "./src/assets/images/arrow-color.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/arrow-white.svg */ "./src/assets/images/arrow-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* nunito-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* nunito-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Nunito Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\nbody {\n  font-family: \"Nunito\", sans-serif;\n}\n\n.page-wrapper {\n  min-height: 100vh;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-areas: \"header\" \"main\" \"footer\";\n  grid-template-rows: min-content auto min-content;\n}\n\n.header {\n  background-color: #011627;\n  color: #f6f7f8;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  z-index: 1;\n}\n.header div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.header img {\n  height: 75px;\n}\n.header ul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  gap: 2rem;\n}\n.header li:hover {\n  border-top: 2px solid #20a4f3;\n  transform: translateY(5px);\n  cursor: pointer;\n}\n\n.main {\n  z-index: 0;\n  background-color: #011627;\n  display: grid;\n  grid-template-areas: \"box\" \"arrow\";\n  grid-template-rows: min-content auto;\n}\n.main .top-box {\n  z-index: 1;\n}\n.main .sub-box {\n  z-index: 0;\n}\n.main .top-box,\n.main .sub-box {\n  grid-area: box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n  margin-bottom: 25px;\n}\n.main .top-box div,\n.main .sub-box div {\n  width: 300px;\n  height: 300px;\n}\n.main .top-box div:first-of-type,\n.main .sub-box div:first-of-type {\n  position: relative;\n  transform: translate(-15px, -15px);\n  background-color: #20a4f3;\n}\n.main .top-box div:nth-of-type(2),\n.main .sub-box div:nth-of-type(2) {\n  position: absolute;\n  background-color: #011627;\n  color: #f6f7f8;\n  padding: 1rem;\n}\n.main .top-box div:nth-of-type(3),\n.main .sub-box div:nth-of-type(3) {\n  position: absolute;\n  z-index: -1;\n  transform: translate(15px, 15px);\n  background-color: #20a4f3;\n}\n.main .nav-arrow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #f6f7f8;\n}\n.main .nav-arrow div {\n  flex-shrink: 0;\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: contain;\n  transform: rotate(90deg);\n  width: 50px;\n  height: 50px;\n}\n.main .nav-arrow div:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.main .nav-arrow #arrowBtn2 {\n  transform: rotate(-90deg);\n}\n.main .move-up {\n  transition: transform 1500ms;\n}\n.main .move-down {\n  transition: transform 1500ms;\n  transform: translateY(calc(100vh + 100px));\n}\n.main .hidden {\n  display: none;\n}\n\n.footer {\n  width: 100%;\n  background-color: #011627;\n  color: #f6f7f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n  padding-bottom: 1rem;\n}\n.footer img {\n  height: 1.5rem;\n}\n.footer a {\n  text-decoration: none;\n  color: #f6f7f8;\n}\n.footer a:hover {\n  font-family: \"Nunito Bold\", sans-serif;\n}\n\n#contentBox-5 {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n#contentBox-5 h2,\n#contentBox-5 p {\n  width: 100%;\n  text-align: left;\n  align-self: flex-start;\n}\n#contentBox-5 h2 {\n  font-family: \"Nunito Bold\", sans-serif;\n}\n#contentBox-5 ul {\n  width: 100%;\n  padding: 0;\n  display: grid;\n  list-style-type: none;\n}\n#contentBox-5 li p {\n  text-align: right;\n  font-family: \"Nunito Bold\", sans-serif;\n}\n\n#contentBox-6 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#contentBox-6 ul {\n  padding: 0rem 1rem;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n#contentBox-6 li {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Nunito Bold\", sans-serif;\n  text-align: right;\n}\n#contentBox-6 img {\n  height: 2.5rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/contact.scss"],"names":[],"mappings":"AAAA,2BAAA;AACA;EACC,kBAAA,EAAA,sGAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oHAAA,EAEuE,gDAAA;ACDxE;ADIA,uBAAA;AACA;EACC,kBAAA,EAAA,sGAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,oHAAA,EAEmE,gDAAA;ACJpE;ADaA;EACC,iCARY;ACHb;;ADaA;EACC,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,6CACC;EAGD,gDAAA;ACbD;;ADgBA;EACC,yBArBY;EAsBZ,cArBiB;EAsBjB,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;ACbD;ADcC;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;ACZF;ADcC;EACC,YAAA;ACZF;ADeC;EACC,aAAA;EACA,8BAAA;EAEA,mBAAA;EACA,gBAAA;EACA,SAAA;ACdF;ADgBC;EACC,6BAAA;EACA,0BAAA;EACA,eAAA;ACdF;;ADkBA;EACC,UAAA;EACA,yBAvDY;EAwDZ,aAAA;EACA,kCACC;EAED,oCAAA;ACjBD;ADmBC;EACC,UAAA;ACjBF;ADmBC;EACC,UAAA;ACjBF;ADoBC;;EAEC,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;AClBF;ADmBE;;EACC,YAAA;EACA,aAAA;AChBH;ADkBE;;EACC,kBAAA;EACA,kCAAA;EACA,yBAjFY;ACkEf;ADiBE;;EACC,kBAAA;EACA,yBAxFU;EAyFV,cAxFe;EAyFf,aAAA;ACdH;ADgBE;;EACC,kBAAA;EACA,WAAA;EACA,gCAAA;EACA,yBA7FY;ACgFf;ADiBC;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAxGgB;ACyFlB;ADgBE;EACC,cAAA;EACA,WAAA;EACA,yDAAA;EACA,wBAAA;EACA,wBAAA;EACA,WAAA;EACA,YAAA;ACdH;ADgBE;EACC,yDAAA;ACdH;ADgBE;EACC,yBAAA;ACdH;ADkBC;EACC,4BAAA;AChBF;ADkBC;EACC,4BAAA;EACA,0CAAA;AChBF;ADkBC;EACC,aAAA;AChBF;;ADoBA;EACC,WAAA;EACA,yBAzIY;EA0IZ,cAzIiB;EA0IjB,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,oBAAA;ACjBD;ADkBC;EACC,cAAA;AChBF;ADkBC;EACC,qBAAA;EACA,cApJgB;ACoIlB;ADkBC;EACC,sCAzJQ;ACyIV;;AA7JA;EACC,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAgKD;AA/JC;;EAEC,WAAA;EACA,gBAAA;EACA,sBAAA;AAiKF;AA/JC;EACC,sCDOQ;AC0JV;AA/JC;EACC,WAAA;EACA,UAAA;EACA,aAAA;EACA,qBAAA;AAiKF;AA/JC;EACC,iBAAA;EACA,sCDHQ;ACoKV;;AA9JA;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;AAiKD;AA/JC;EACC,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAiKF;AA/JC;EACC,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,sCDzBQ;EC0BR,iBAAA;AAiKF;AA/JC;EACC,cAAA;AAiKF","sourcesContent":["/* nunito-regular - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: 'Nunito';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url('../assets/fonts/nunito-v25-latin-regular.woff2') format('woff2'),\n\t\t/* Chrome 36+, Opera 23+, Firefox 39+ */\n\t\t\turl('../assets/fonts/nunito-v25-latin-regular.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n/* nunito-700 - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: 'Nunito Bold';\n\tfont-style: normal;\n\tfont-weight: 700;\n\tsrc: url('../assets/fonts/nunito-v25-latin-700.woff2') format('woff2'),\n\t\t/* Chrome 36+, Opera 23+, Firefox 39+ */\n\t\t\turl('../assets/fonts/nunito-v25-latin-700.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n$ff-regular: 'Nunito', sans-serif;\n$ff-bold: 'Nunito Bold', sans-serif;\n$clr-header: #011627;\n$clr-header-text: #f6f7f8;\n$clr-accent-1: #2ec4b6;\n$clr-accent-2: #20a4f3;\n\nbody {\n\tfont-family: $ff-regular;\n}\n.page-wrapper {\n\tmin-height: 100vh;\n\toverflow-y: hidden;\n\toverflow-x: hidden;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header'\n\t\t'main'\n\t\t'footer';\n\tgrid-template-rows: min-content auto min-content;\n}\n\n.header {\n\tbackground-color: $clr-header;\n\tcolor: $clr-header-text;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1rem 2rem;\n\tz-index: 1;\n\tdiv {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 1rem;\n\t}\n\timg {\n\t\theight: 75px;\n\t}\n\n\tul {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\n\t\talign-items: center;\n\t\tlist-style: none;\n\t\tgap: 2rem;\n\t}\n\tli:hover {\n\t\tborder-top: 2px solid $clr-accent-2;\n\t\ttransform: translateY(5px);\n\t\tcursor: pointer;\n\t}\n}\n\n.main {\n\tz-index: 0;\n\tbackground-color: $clr-header;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'box'\n\t\t'arrow';\n\tgrid-template-rows: min-content auto;\n\n\t.top-box {\n\t\tz-index: 1;\n\t}\n\t.sub-box {\n\t\tz-index: 0;\n\t}\n\n\t.top-box,\n\t.sub-box {\n\t\tgrid-area: box;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tmargin-top: 100px;\n\t\tmargin-bottom: 25px;\n\t\tdiv {\n\t\t\twidth: 300px;\n\t\t\theight: 300px;\n\t\t}\n\t\tdiv:first-of-type {\n\t\t\tposition: relative;\n\t\t\ttransform: translate(-15px, -15px);\n\t\t\tbackground-color: $clr-accent-2;\n\t\t}\n\t\tdiv:nth-of-type(2) {\n\t\t\tposition: absolute;\n\t\t\tbackground-color: $clr-header;\n\t\t\tcolor: $clr-header-text;\n\t\t\tpadding: 1rem;\n\t\t}\n\t\tdiv:nth-of-type(3) {\n\t\t\tposition: absolute;\n\t\t\tz-index: -1;\n\t\t\ttransform: translate(15px, 15px);\n\t\t\tbackground-color: $clr-accent-2;\n\t\t}\n\t}\n\n\t.nav-arrow {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tcolor: $clr-header-text;\n\t\tdiv {\n\t\t\tflex-shrink: 0;\n\t\t\tcontent: '';\n\t\t\tbackground-image: url('../assets/images/arrow-color.svg');\n\t\t\tbackground-size: contain;\n\t\t\ttransform: rotate(90deg);\n\t\t\twidth: 50px;\n\t\t\theight: 50px;\n\t\t}\n\t\tdiv:hover {\n\t\t\tbackground-image: url('../assets/images/arrow-white.svg');\n\t\t}\n\t\t#arrowBtn2 {\n\t\t\ttransform: rotate(-90deg);\n\t\t}\n\t}\n\n\t.move-up {\n\t\ttransition: transform 1500ms;\n\t}\n\t.move-down {\n\t\ttransition: transform 1500ms;\n\t\ttransform: translateY(calc(100vh + 100px));\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t}\n}\n\n.footer {\n\twidth: 100%;\n\tbackground-color: $clr-header;\n\tcolor: $clr-header-text;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1.5rem;\n\tpadding-bottom: 1rem;\n\timg {\n\t\theight: 1.5rem;\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: $clr-header-text;\n\t}\n\ta:hover {\n\t\tfont-family: $ff-bold;\n\t}\n}\n","@import './main.scss';\n\n#contentBox-5 {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\th2,\n\tp {\n\t\twidth: 100%;\n\t\ttext-align: left;\n\t\talign-self: flex-start;\n\t}\n\th2 {\n\t\tfont-family: $ff-bold;\n\t}\n\tul {\n\t\twidth: 100%;\n\t\tpadding: 0;\n\t\tdisplay: grid;\n\t\tlist-style-type: none;\n\t}\n\tli p {\n\t\ttext-align: right;\n\t\tfont-family: $ff-bold;\n\t}\n}\n#contentBox-6 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tul {\n\t\tpadding: 0rem 1rem;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\theight: 100%;\n\t}\n\tli {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tfont-family: $ff-bold;\n\t\ttext-align: right;\n\t}\n\timg {\n\t\theight: 2.5rem;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss ***!
  \***********************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-regular.woff2 */ "./src/assets/fonts/nunito-v25-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-regular.woff */ "./src/assets/fonts/nunito-v25-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-700.woff2 */ "./src/assets/fonts/nunito-v25-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-700.woff */ "./src/assets/fonts/nunito-v25-latin-700.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/arrow-color.svg */ "./src/assets/images/arrow-color.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/arrow-white.svg */ "./src/assets/images/arrow-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* nunito-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* nunito-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Nunito Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\nbody {\n  font-family: \"Nunito\", sans-serif;\n}\n\n.page-wrapper {\n  min-height: 100vh;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-areas: \"header\" \"main\" \"footer\";\n  grid-template-rows: min-content auto min-content;\n}\n\n.header {\n  background-color: #011627;\n  color: #f6f7f8;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  z-index: 1;\n}\n.header div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.header img {\n  height: 75px;\n}\n.header ul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  gap: 2rem;\n}\n.header li:hover {\n  border-top: 2px solid #20a4f3;\n  transform: translateY(5px);\n  cursor: pointer;\n}\n\n.main {\n  z-index: 0;\n  background-color: #011627;\n  display: grid;\n  grid-template-areas: \"box\" \"arrow\";\n  grid-template-rows: min-content auto;\n}\n.main .top-box {\n  z-index: 1;\n}\n.main .sub-box {\n  z-index: 0;\n}\n.main .top-box,\n.main .sub-box {\n  grid-area: box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n  margin-bottom: 25px;\n}\n.main .top-box div,\n.main .sub-box div {\n  width: 300px;\n  height: 300px;\n}\n.main .top-box div:first-of-type,\n.main .sub-box div:first-of-type {\n  position: relative;\n  transform: translate(-15px, -15px);\n  background-color: #20a4f3;\n}\n.main .top-box div:nth-of-type(2),\n.main .sub-box div:nth-of-type(2) {\n  position: absolute;\n  background-color: #011627;\n  color: #f6f7f8;\n  padding: 1rem;\n}\n.main .top-box div:nth-of-type(3),\n.main .sub-box div:nth-of-type(3) {\n  position: absolute;\n  z-index: -1;\n  transform: translate(15px, 15px);\n  background-color: #20a4f3;\n}\n.main .nav-arrow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #f6f7f8;\n}\n.main .nav-arrow div {\n  flex-shrink: 0;\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: contain;\n  transform: rotate(90deg);\n  width: 50px;\n  height: 50px;\n}\n.main .nav-arrow div:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.main .nav-arrow #arrowBtn2 {\n  transform: rotate(-90deg);\n}\n.main .move-up {\n  transition: transform 1500ms;\n}\n.main .move-down {\n  transition: transform 1500ms;\n  transform: translateY(calc(100vh + 100px));\n}\n.main .hidden {\n  display: none;\n}\n\n.footer {\n  width: 100%;\n  background-color: #011627;\n  color: #f6f7f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n  padding-bottom: 1rem;\n}\n.footer img {\n  height: 1.5rem;\n}\n.footer a {\n  text-decoration: none;\n  color: #f6f7f8;\n}\n.footer a:hover {\n  font-family: \"Nunito Bold\", sans-serif;\n}\n\n#contentBox-1 {\n  display: flex;\n  justify-content: space-between;\n}\n#contentBox-1 h2 {\n  flex-basis: 50%;\n  font-family: \"Nunito Bold\", sans-serif;\n}\n#contentBox-1 p {\n  flex-basis: 50%;\n  align-self: end;\n  text-align: right;\n}\n\n#contentBox-2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#contentBox-2 ul {\n  padding: 0rem 1rem;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n#contentBox-2 li {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Nunito Bold\", sans-serif;\n  text-align: right;\n}\n#contentBox-2 img {\n  height: 2.5rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/home.scss"],"names":[],"mappings":"AAAA,2BAAA;AACA;EACC,kBAAA,EAAA,sGAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oHAAA,EAEuE,gDAAA;ACDxE;ADIA,uBAAA;AACA;EACC,kBAAA,EAAA,sGAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,oHAAA,EAEmE,gDAAA;ACJpE;ADaA;EACC,iCARY;ACHb;;ADaA;EACC,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,6CACC;EAGD,gDAAA;ACbD;;ADgBA;EACC,yBArBY;EAsBZ,cArBiB;EAsBjB,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;ACbD;ADcC;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;ACZF;ADcC;EACC,YAAA;ACZF;ADeC;EACC,aAAA;EACA,8BAAA;EAEA,mBAAA;EACA,gBAAA;EACA,SAAA;ACdF;ADgBC;EACC,6BAAA;EACA,0BAAA;EACA,eAAA;ACdF;;ADkBA;EACC,UAAA;EACA,yBAvDY;EAwDZ,aAAA;EACA,kCACC;EAED,oCAAA;ACjBD;ADmBC;EACC,UAAA;ACjBF;ADmBC;EACC,UAAA;ACjBF;ADoBC;;EAEC,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;AClBF;ADmBE;;EACC,YAAA;EACA,aAAA;AChBH;ADkBE;;EACC,kBAAA;EACA,kCAAA;EACA,yBAjFY;ACkEf;ADiBE;;EACC,kBAAA;EACA,yBAxFU;EAyFV,cAxFe;EAyFf,aAAA;ACdH;ADgBE;;EACC,kBAAA;EACA,WAAA;EACA,gCAAA;EACA,yBA7FY;ACgFf;ADiBC;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAxGgB;ACyFlB;ADgBE;EACC,cAAA;EACA,WAAA;EACA,yDAAA;EACA,wBAAA;EACA,wBAAA;EACA,WAAA;EACA,YAAA;ACdH;ADgBE;EACC,yDAAA;ACdH;ADgBE;EACC,yBAAA;ACdH;ADkBC;EACC,4BAAA;AChBF;ADkBC;EACC,4BAAA;EACA,0CAAA;AChBF;ADkBC;EACC,aAAA;AChBF;;ADoBA;EACC,WAAA;EACA,yBAzIY;EA0IZ,cAzIiB;EA0IjB,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,oBAAA;ACjBD;ADkBC;EACC,cAAA;AChBF;ADkBC;EACC,qBAAA;EACA,cApJgB;ACoIlB;ADkBC;EACC,sCAzJQ;ACyIV;;AA7JA;EACC,aAAA;EACA,8BAAA;AAgKD;AA/JC;EACC,eAAA;EACA,sCDeQ;ACkJV;AA/JC;EACC,eAAA;EACA,eAAA;EACA,iBAAA;AAiKF;;AA7JA;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;AAgKD;AA9JC;EACC,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAgKF;AA9JC;EACC,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,sCDbQ;ECcR,iBAAA;AAgKF;AA9JC;EACC,cAAA;AAgKF","sourcesContent":["/* nunito-regular - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: 'Nunito';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url('../assets/fonts/nunito-v25-latin-regular.woff2') format('woff2'),\n\t\t/* Chrome 36+, Opera 23+, Firefox 39+ */\n\t\t\turl('../assets/fonts/nunito-v25-latin-regular.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n/* nunito-700 - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: 'Nunito Bold';\n\tfont-style: normal;\n\tfont-weight: 700;\n\tsrc: url('../assets/fonts/nunito-v25-latin-700.woff2') format('woff2'),\n\t\t/* Chrome 36+, Opera 23+, Firefox 39+ */\n\t\t\turl('../assets/fonts/nunito-v25-latin-700.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n$ff-regular: 'Nunito', sans-serif;\n$ff-bold: 'Nunito Bold', sans-serif;\n$clr-header: #011627;\n$clr-header-text: #f6f7f8;\n$clr-accent-1: #2ec4b6;\n$clr-accent-2: #20a4f3;\n\nbody {\n\tfont-family: $ff-regular;\n}\n.page-wrapper {\n\tmin-height: 100vh;\n\toverflow-y: hidden;\n\toverflow-x: hidden;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header'\n\t\t'main'\n\t\t'footer';\n\tgrid-template-rows: min-content auto min-content;\n}\n\n.header {\n\tbackground-color: $clr-header;\n\tcolor: $clr-header-text;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1rem 2rem;\n\tz-index: 1;\n\tdiv {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 1rem;\n\t}\n\timg {\n\t\theight: 75px;\n\t}\n\n\tul {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\n\t\talign-items: center;\n\t\tlist-style: none;\n\t\tgap: 2rem;\n\t}\n\tli:hover {\n\t\tborder-top: 2px solid $clr-accent-2;\n\t\ttransform: translateY(5px);\n\t\tcursor: pointer;\n\t}\n}\n\n.main {\n\tz-index: 0;\n\tbackground-color: $clr-header;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'box'\n\t\t'arrow';\n\tgrid-template-rows: min-content auto;\n\n\t.top-box {\n\t\tz-index: 1;\n\t}\n\t.sub-box {\n\t\tz-index: 0;\n\t}\n\n\t.top-box,\n\t.sub-box {\n\t\tgrid-area: box;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tmargin-top: 100px;\n\t\tmargin-bottom: 25px;\n\t\tdiv {\n\t\t\twidth: 300px;\n\t\t\theight: 300px;\n\t\t}\n\t\tdiv:first-of-type {\n\t\t\tposition: relative;\n\t\t\ttransform: translate(-15px, -15px);\n\t\t\tbackground-color: $clr-accent-2;\n\t\t}\n\t\tdiv:nth-of-type(2) {\n\t\t\tposition: absolute;\n\t\t\tbackground-color: $clr-header;\n\t\t\tcolor: $clr-header-text;\n\t\t\tpadding: 1rem;\n\t\t}\n\t\tdiv:nth-of-type(3) {\n\t\t\tposition: absolute;\n\t\t\tz-index: -1;\n\t\t\ttransform: translate(15px, 15px);\n\t\t\tbackground-color: $clr-accent-2;\n\t\t}\n\t}\n\n\t.nav-arrow {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tcolor: $clr-header-text;\n\t\tdiv {\n\t\t\tflex-shrink: 0;\n\t\t\tcontent: '';\n\t\t\tbackground-image: url('../assets/images/arrow-color.svg');\n\t\t\tbackground-size: contain;\n\t\t\ttransform: rotate(90deg);\n\t\t\twidth: 50px;\n\t\t\theight: 50px;\n\t\t}\n\t\tdiv:hover {\n\t\t\tbackground-image: url('../assets/images/arrow-white.svg');\n\t\t}\n\t\t#arrowBtn2 {\n\t\t\ttransform: rotate(-90deg);\n\t\t}\n\t}\n\n\t.move-up {\n\t\ttransition: transform 1500ms;\n\t}\n\t.move-down {\n\t\ttransition: transform 1500ms;\n\t\ttransform: translateY(calc(100vh + 100px));\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t}\n}\n\n.footer {\n\twidth: 100%;\n\tbackground-color: $clr-header;\n\tcolor: $clr-header-text;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1.5rem;\n\tpadding-bottom: 1rem;\n\timg {\n\t\theight: 1.5rem;\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: $clr-header-text;\n\t}\n\ta:hover {\n\t\tfont-family: $ff-bold;\n\t}\n}\n","@import './main.scss';\n\n#contentBox-1 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\th2 {\n\t\tflex-basis: 50%;\n\t\tfont-family: $ff-bold;\n\t}\n\tp {\n\t\tflex-basis: 50%;\n\t\talign-self: end;\n\t\ttext-align: right;\n\t}\n}\n\n#contentBox-2 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tul {\n\t\tpadding: 0rem 1rem;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\theight: 100%;\n\t}\n\tli {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tfont-family: $ff-bold;\n\t\ttext-align: right;\n\t}\n\timg {\n\t\theight: 2.5rem;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-regular.woff2 */ "./src/assets/fonts/nunito-v25-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-regular.woff */ "./src/assets/fonts/nunito-v25-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-700.woff2 */ "./src/assets/fonts/nunito-v25-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-700.woff */ "./src/assets/fonts/nunito-v25-latin-700.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/arrow-color.svg */ "./src/assets/images/arrow-color.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/arrow-white.svg */ "./src/assets/images/arrow-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* nunito-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* nunito-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Nunito Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\nbody {\n  font-family: \"Nunito\", sans-serif;\n}\n\n.page-wrapper {\n  min-height: 100vh;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-areas: \"header\" \"main\" \"footer\";\n  grid-template-rows: min-content auto min-content;\n}\n\n.header {\n  background-color: #011627;\n  color: #f6f7f8;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  z-index: 1;\n}\n.header div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.header img {\n  height: 75px;\n}\n.header ul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  gap: 2rem;\n}\n.header li:hover {\n  border-top: 2px solid #20a4f3;\n  transform: translateY(5px);\n  cursor: pointer;\n}\n\n.main {\n  z-index: 0;\n  background-color: #011627;\n  display: grid;\n  grid-template-areas: \"box\" \"arrow\";\n  grid-template-rows: min-content auto;\n}\n.main .top-box {\n  z-index: 1;\n}\n.main .sub-box {\n  z-index: 0;\n}\n.main .top-box,\n.main .sub-box {\n  grid-area: box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n  margin-bottom: 25px;\n}\n.main .top-box div,\n.main .sub-box div {\n  width: 300px;\n  height: 300px;\n}\n.main .top-box div:first-of-type,\n.main .sub-box div:first-of-type {\n  position: relative;\n  transform: translate(-15px, -15px);\n  background-color: #20a4f3;\n}\n.main .top-box div:nth-of-type(2),\n.main .sub-box div:nth-of-type(2) {\n  position: absolute;\n  background-color: #011627;\n  color: #f6f7f8;\n  padding: 1rem;\n}\n.main .top-box div:nth-of-type(3),\n.main .sub-box div:nth-of-type(3) {\n  position: absolute;\n  z-index: -1;\n  transform: translate(15px, 15px);\n  background-color: #20a4f3;\n}\n.main .nav-arrow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #f6f7f8;\n}\n.main .nav-arrow div {\n  flex-shrink: 0;\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: contain;\n  transform: rotate(90deg);\n  width: 50px;\n  height: 50px;\n}\n.main .nav-arrow div:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.main .nav-arrow #arrowBtn2 {\n  transform: rotate(-90deg);\n}\n.main .move-up {\n  transition: transform 1500ms;\n}\n.main .move-down {\n  transition: transform 1500ms;\n  transform: translateY(calc(100vh + 100px));\n}\n.main .hidden {\n  display: none;\n}\n\n.footer {\n  width: 100%;\n  background-color: #011627;\n  color: #f6f7f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n  padding-bottom: 1rem;\n}\n.footer img {\n  height: 1.5rem;\n}\n.footer a {\n  text-decoration: none;\n  color: #f6f7f8;\n}\n.footer a:hover {\n  font-family: \"Nunito Bold\", sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA,2BAAA;AACA;EACC,kBAAA,EAAA,sGAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oHAAA,EAEuE,gDAAA;AADxE;AAIA,uBAAA;AACA;EACC,kBAAA,EAAA,sGAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,oHAAA,EAEmE,gDAAA;AAJpE;AAaA;EACC,iCARY;AAHb;;AAaA;EACC,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,6CACC;EAGD,gDAAA;AAbD;;AAgBA;EACC,yBArBY;EAsBZ,cArBiB;EAsBjB,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;AAbD;AAcC;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAZF;AAcC;EACC,YAAA;AAZF;AAeC;EACC,aAAA;EACA,8BAAA;EAEA,mBAAA;EACA,gBAAA;EACA,SAAA;AAdF;AAgBC;EACC,6BAAA;EACA,0BAAA;EACA,eAAA;AAdF;;AAkBA;EACC,UAAA;EACA,yBAvDY;EAwDZ,aAAA;EACA,kCACC;EAED,oCAAA;AAjBD;AAmBC;EACC,UAAA;AAjBF;AAmBC;EACC,UAAA;AAjBF;AAoBC;;EAEC,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;AAlBF;AAmBE;;EACC,YAAA;EACA,aAAA;AAhBH;AAkBE;;EACC,kBAAA;EACA,kCAAA;EACA,yBAjFY;AAkEf;AAiBE;;EACC,kBAAA;EACA,yBAxFU;EAyFV,cAxFe;EAyFf,aAAA;AAdH;AAgBE;;EACC,kBAAA;EACA,WAAA;EACA,gCAAA;EACA,yBA7FY;AAgFf;AAiBC;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAxGgB;AAyFlB;AAgBE;EACC,cAAA;EACA,WAAA;EACA,yDAAA;EACA,wBAAA;EACA,wBAAA;EACA,WAAA;EACA,YAAA;AAdH;AAgBE;EACC,yDAAA;AAdH;AAgBE;EACC,yBAAA;AAdH;AAkBC;EACC,4BAAA;AAhBF;AAkBC;EACC,4BAAA;EACA,0CAAA;AAhBF;AAkBC;EACC,aAAA;AAhBF;;AAoBA;EACC,WAAA;EACA,yBAzIY;EA0IZ,cAzIiB;EA0IjB,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,oBAAA;AAjBD;AAkBC;EACC,cAAA;AAhBF;AAkBC;EACC,qBAAA;EACA,cApJgB;AAoIlB;AAkBC;EACC,sCAzJQ;AAyIV","sourcesContent":["/* nunito-regular - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: 'Nunito';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url('../assets/fonts/nunito-v25-latin-regular.woff2') format('woff2'),\n\t\t/* Chrome 36+, Opera 23+, Firefox 39+ */\n\t\t\turl('../assets/fonts/nunito-v25-latin-regular.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n/* nunito-700 - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: 'Nunito Bold';\n\tfont-style: normal;\n\tfont-weight: 700;\n\tsrc: url('../assets/fonts/nunito-v25-latin-700.woff2') format('woff2'),\n\t\t/* Chrome 36+, Opera 23+, Firefox 39+ */\n\t\t\turl('../assets/fonts/nunito-v25-latin-700.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n$ff-regular: 'Nunito', sans-serif;\n$ff-bold: 'Nunito Bold', sans-serif;\n$clr-header: #011627;\n$clr-header-text: #f6f7f8;\n$clr-accent-1: #2ec4b6;\n$clr-accent-2: #20a4f3;\n\nbody {\n\tfont-family: $ff-regular;\n}\n.page-wrapper {\n\tmin-height: 100vh;\n\toverflow-y: hidden;\n\toverflow-x: hidden;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header'\n\t\t'main'\n\t\t'footer';\n\tgrid-template-rows: min-content auto min-content;\n}\n\n.header {\n\tbackground-color: $clr-header;\n\tcolor: $clr-header-text;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1rem 2rem;\n\tz-index: 1;\n\tdiv {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 1rem;\n\t}\n\timg {\n\t\theight: 75px;\n\t}\n\n\tul {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\n\t\talign-items: center;\n\t\tlist-style: none;\n\t\tgap: 2rem;\n\t}\n\tli:hover {\n\t\tborder-top: 2px solid $clr-accent-2;\n\t\ttransform: translateY(5px);\n\t\tcursor: pointer;\n\t}\n}\n\n.main {\n\tz-index: 0;\n\tbackground-color: $clr-header;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'box'\n\t\t'arrow';\n\tgrid-template-rows: min-content auto;\n\n\t.top-box {\n\t\tz-index: 1;\n\t}\n\t.sub-box {\n\t\tz-index: 0;\n\t}\n\n\t.top-box,\n\t.sub-box {\n\t\tgrid-area: box;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tmargin-top: 100px;\n\t\tmargin-bottom: 25px;\n\t\tdiv {\n\t\t\twidth: 300px;\n\t\t\theight: 300px;\n\t\t}\n\t\tdiv:first-of-type {\n\t\t\tposition: relative;\n\t\t\ttransform: translate(-15px, -15px);\n\t\t\tbackground-color: $clr-accent-2;\n\t\t}\n\t\tdiv:nth-of-type(2) {\n\t\t\tposition: absolute;\n\t\t\tbackground-color: $clr-header;\n\t\t\tcolor: $clr-header-text;\n\t\t\tpadding: 1rem;\n\t\t}\n\t\tdiv:nth-of-type(3) {\n\t\t\tposition: absolute;\n\t\t\tz-index: -1;\n\t\t\ttransform: translate(15px, 15px);\n\t\t\tbackground-color: $clr-accent-2;\n\t\t}\n\t}\n\n\t.nav-arrow {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tcolor: $clr-header-text;\n\t\tdiv {\n\t\t\tflex-shrink: 0;\n\t\t\tcontent: '';\n\t\t\tbackground-image: url('../assets/images/arrow-color.svg');\n\t\t\tbackground-size: contain;\n\t\t\ttransform: rotate(90deg);\n\t\t\twidth: 50px;\n\t\t\theight: 50px;\n\t\t}\n\t\tdiv:hover {\n\t\t\tbackground-image: url('../assets/images/arrow-white.svg');\n\t\t}\n\t\t#arrowBtn2 {\n\t\t\ttransform: rotate(-90deg);\n\t\t}\n\t}\n\n\t.move-up {\n\t\ttransition: transform 1500ms;\n\t}\n\t.move-down {\n\t\ttransition: transform 1500ms;\n\t\ttransform: translateY(calc(100vh + 100px));\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t}\n}\n\n.footer {\n\twidth: 100%;\n\tbackground-color: $clr-header;\n\tcolor: $clr-header-text;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1.5rem;\n\tpadding-bottom: 1rem;\n\timg {\n\t\theight: 1.5rem;\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: $clr-header-text;\n\t}\n\ta:hover {\n\t\tfont-family: $ff-bold;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss ***!
  \***********************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-regular.woff2 */ "./src/assets/fonts/nunito-v25-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-regular.woff */ "./src/assets/fonts/nunito-v25-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-700.woff2 */ "./src/assets/fonts/nunito-v25-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/nunito-v25-latin-700.woff */ "./src/assets/fonts/nunito-v25-latin-700.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/arrow-color.svg */ "./src/assets/images/arrow-color.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/arrow-white.svg */ "./src/assets/images/arrow-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* nunito-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* nunito-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Nunito Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\nbody {\n  font-family: \"Nunito\", sans-serif;\n}\n\n.page-wrapper {\n  min-height: 100vh;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-areas: \"header\" \"main\" \"footer\";\n  grid-template-rows: min-content auto min-content;\n}\n\n.header {\n  background-color: #011627;\n  color: #f6f7f8;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  z-index: 1;\n}\n.header div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.header img {\n  height: 75px;\n}\n.header ul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  gap: 2rem;\n}\n.header li:hover {\n  border-top: 2px solid #20a4f3;\n  transform: translateY(5px);\n  cursor: pointer;\n}\n\n.main {\n  z-index: 0;\n  background-color: #011627;\n  display: grid;\n  grid-template-areas: \"box\" \"arrow\";\n  grid-template-rows: min-content auto;\n}\n.main .top-box {\n  z-index: 1;\n}\n.main .sub-box {\n  z-index: 0;\n}\n.main .top-box,\n.main .sub-box {\n  grid-area: box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n  margin-bottom: 25px;\n}\n.main .top-box div,\n.main .sub-box div {\n  width: 300px;\n  height: 300px;\n}\n.main .top-box div:first-of-type,\n.main .sub-box div:first-of-type {\n  position: relative;\n  transform: translate(-15px, -15px);\n  background-color: #20a4f3;\n}\n.main .top-box div:nth-of-type(2),\n.main .sub-box div:nth-of-type(2) {\n  position: absolute;\n  background-color: #011627;\n  color: #f6f7f8;\n  padding: 1rem;\n}\n.main .top-box div:nth-of-type(3),\n.main .sub-box div:nth-of-type(3) {\n  position: absolute;\n  z-index: -1;\n  transform: translate(15px, 15px);\n  background-color: #20a4f3;\n}\n.main .nav-arrow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #f6f7f8;\n}\n.main .nav-arrow div {\n  flex-shrink: 0;\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: contain;\n  transform: rotate(90deg);\n  width: 50px;\n  height: 50px;\n}\n.main .nav-arrow div:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.main .nav-arrow #arrowBtn2 {\n  transform: rotate(-90deg);\n}\n.main .move-up {\n  transition: transform 1500ms;\n}\n.main .move-down {\n  transition: transform 1500ms;\n  transform: translateY(calc(100vh + 100px));\n}\n.main .hidden {\n  display: none;\n}\n\n.footer {\n  width: 100%;\n  background-color: #011627;\n  color: #f6f7f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n  padding-bottom: 1rem;\n}\n.footer img {\n  height: 1.5rem;\n}\n.footer a {\n  text-decoration: none;\n  color: #f6f7f8;\n}\n.footer a:hover {\n  font-family: \"Nunito Bold\", sans-serif;\n}\n\n#contentBox-3 ul {\n  padding: 0rem 1rem;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n#contentBox-3 li {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Nunito Bold\", sans-serif;\n}\n#contentBox-3 img {\n  height: 2.5rem;\n}\n\n#contentBox-4 {\n  display: flex;\n  flex-wrap: wrap;\n}\n#contentBox-4 p {\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/menu.scss"],"names":[],"mappings":"AAAA,2BAAA;AACA;EACC,kBAAA,EAAA,sGAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oHAAA,EAEuE,gDAAA;ACDxE;ADIA,uBAAA;AACA;EACC,kBAAA,EAAA,sGAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,oHAAA,EAEmE,gDAAA;ACJpE;ADaA;EACC,iCARY;ACHb;;ADaA;EACC,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,6CACC;EAGD,gDAAA;ACbD;;ADgBA;EACC,yBArBY;EAsBZ,cArBiB;EAsBjB,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;ACbD;ADcC;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;ACZF;ADcC;EACC,YAAA;ACZF;ADeC;EACC,aAAA;EACA,8BAAA;EAEA,mBAAA;EACA,gBAAA;EACA,SAAA;ACdF;ADgBC;EACC,6BAAA;EACA,0BAAA;EACA,eAAA;ACdF;;ADkBA;EACC,UAAA;EACA,yBAvDY;EAwDZ,aAAA;EACA,kCACC;EAED,oCAAA;ACjBD;ADmBC;EACC,UAAA;ACjBF;ADmBC;EACC,UAAA;ACjBF;ADoBC;;EAEC,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;AClBF;ADmBE;;EACC,YAAA;EACA,aAAA;AChBH;ADkBE;;EACC,kBAAA;EACA,kCAAA;EACA,yBAjFY;ACkEf;ADiBE;;EACC,kBAAA;EACA,yBAxFU;EAyFV,cAxFe;EAyFf,aAAA;ACdH;ADgBE;;EACC,kBAAA;EACA,WAAA;EACA,gCAAA;EACA,yBA7FY;ACgFf;ADiBC;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAxGgB;ACyFlB;ADgBE;EACC,cAAA;EACA,WAAA;EACA,yDAAA;EACA,wBAAA;EACA,wBAAA;EACA,WAAA;EACA,YAAA;ACdH;ADgBE;EACC,yDAAA;ACdH;ADgBE;EACC,yBAAA;ACdH;ADkBC;EACC,4BAAA;AChBF;ADkBC;EACC,4BAAA;EACA,0CAAA;AChBF;ADkBC;EACC,aAAA;AChBF;;ADoBA;EACC,WAAA;EACA,yBAzIY;EA0IZ,cAzIiB;EA0IjB,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,oBAAA;ACjBD;ADkBC;EACC,cAAA;AChBF;ADkBC;EACC,qBAAA;EACA,cApJgB;ACoIlB;ADkBC;EACC,sCAzJQ;ACyIV;;AA5JC;EACC,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AA+JF;AA7JC;EACC,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,sCDKQ;AC0JV;AA7JC;EACC,cAAA;AA+JF;;AA5JA;EACC,aAAA;EACA,eAAA;AA+JD;AA9JC;EACC,kBAAA;AAgKF","sourcesContent":["/* nunito-regular - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: 'Nunito';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url('../assets/fonts/nunito-v25-latin-regular.woff2') format('woff2'),\n\t\t/* Chrome 36+, Opera 23+, Firefox 39+ */\n\t\t\turl('../assets/fonts/nunito-v25-latin-regular.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n/* nunito-700 - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: 'Nunito Bold';\n\tfont-style: normal;\n\tfont-weight: 700;\n\tsrc: url('../assets/fonts/nunito-v25-latin-700.woff2') format('woff2'),\n\t\t/* Chrome 36+, Opera 23+, Firefox 39+ */\n\t\t\turl('../assets/fonts/nunito-v25-latin-700.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n$ff-regular: 'Nunito', sans-serif;\n$ff-bold: 'Nunito Bold', sans-serif;\n$clr-header: #011627;\n$clr-header-text: #f6f7f8;\n$clr-accent-1: #2ec4b6;\n$clr-accent-2: #20a4f3;\n\nbody {\n\tfont-family: $ff-regular;\n}\n.page-wrapper {\n\tmin-height: 100vh;\n\toverflow-y: hidden;\n\toverflow-x: hidden;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header'\n\t\t'main'\n\t\t'footer';\n\tgrid-template-rows: min-content auto min-content;\n}\n\n.header {\n\tbackground-color: $clr-header;\n\tcolor: $clr-header-text;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1rem 2rem;\n\tz-index: 1;\n\tdiv {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 1rem;\n\t}\n\timg {\n\t\theight: 75px;\n\t}\n\n\tul {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\n\t\talign-items: center;\n\t\tlist-style: none;\n\t\tgap: 2rem;\n\t}\n\tli:hover {\n\t\tborder-top: 2px solid $clr-accent-2;\n\t\ttransform: translateY(5px);\n\t\tcursor: pointer;\n\t}\n}\n\n.main {\n\tz-index: 0;\n\tbackground-color: $clr-header;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'box'\n\t\t'arrow';\n\tgrid-template-rows: min-content auto;\n\n\t.top-box {\n\t\tz-index: 1;\n\t}\n\t.sub-box {\n\t\tz-index: 0;\n\t}\n\n\t.top-box,\n\t.sub-box {\n\t\tgrid-area: box;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tmargin-top: 100px;\n\t\tmargin-bottom: 25px;\n\t\tdiv {\n\t\t\twidth: 300px;\n\t\t\theight: 300px;\n\t\t}\n\t\tdiv:first-of-type {\n\t\t\tposition: relative;\n\t\t\ttransform: translate(-15px, -15px);\n\t\t\tbackground-color: $clr-accent-2;\n\t\t}\n\t\tdiv:nth-of-type(2) {\n\t\t\tposition: absolute;\n\t\t\tbackground-color: $clr-header;\n\t\t\tcolor: $clr-header-text;\n\t\t\tpadding: 1rem;\n\t\t}\n\t\tdiv:nth-of-type(3) {\n\t\t\tposition: absolute;\n\t\t\tz-index: -1;\n\t\t\ttransform: translate(15px, 15px);\n\t\t\tbackground-color: $clr-accent-2;\n\t\t}\n\t}\n\n\t.nav-arrow {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tcolor: $clr-header-text;\n\t\tdiv {\n\t\t\tflex-shrink: 0;\n\t\t\tcontent: '';\n\t\t\tbackground-image: url('../assets/images/arrow-color.svg');\n\t\t\tbackground-size: contain;\n\t\t\ttransform: rotate(90deg);\n\t\t\twidth: 50px;\n\t\t\theight: 50px;\n\t\t}\n\t\tdiv:hover {\n\t\t\tbackground-image: url('../assets/images/arrow-white.svg');\n\t\t}\n\t\t#arrowBtn2 {\n\t\t\ttransform: rotate(-90deg);\n\t\t}\n\t}\n\n\t.move-up {\n\t\ttransition: transform 1500ms;\n\t}\n\t.move-down {\n\t\ttransition: transform 1500ms;\n\t\ttransform: translateY(calc(100vh + 100px));\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t}\n}\n\n.footer {\n\twidth: 100%;\n\tbackground-color: $clr-header;\n\tcolor: $clr-header-text;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1.5rem;\n\tpadding-bottom: 1rem;\n\timg {\n\t\theight: 1.5rem;\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: $clr-header-text;\n\t}\n\ta:hover {\n\t\tfont-family: $ff-bold;\n\t}\n}\n","@import './main.scss';\n\n#contentBox-3 {\n\tul {\n\t\tpadding: 0rem 1rem;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\theight: 100%;\n\t}\n\tli {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tfont-family: $ff-bold;\n\t}\n\timg {\n\t\theight: 2.5rem;\n\t}\n}\n#contentBox-4 {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tp {\n\t\ttext-align: center;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.css ***!
  \***********************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAAA;AAIA;;;EAGI,sBAAA;AACJ;;AAEA;EACI,SAAA;AACJ;;AAEA;;EAEI,YAAA;AACJ;;AAEA;EACI,gBAAA;EACA,mCAAA;AACJ;;AAEA;;;;;EAKI,cAAA;EACA,eAAA;AACJ;;AAEA;;;;EAII,aAAA;AACJ;;AAEA;;;;;;;EAOI,yBAAA;AACJ;;AAEA;;EAEI,kBAAA;AACJ","sourcesContent":["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n    isolation: isolate;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/contact.scss":
/*!*********************************!*\
  !*** ./src/styles/contact.scss ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./contact.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/home.scss":
/*!******************************!*\
  !*** ./src/styles/home.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.scss":
/*!******************************!*\
  !*** ./src/styles/menu.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/js/animations.js":
/*!******************************!*\
  !*** ./src/js/animations.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const enableAnimations = () => {
	const $topBox = document.querySelector('.top-box');
	const $navArrow = document.querySelector('.nav-arrow');
	const $arrowBtn1 = document.querySelector('#arrowBtn1');
	const $arrowBtn2 = document.querySelector('#arrowBtn2');
	$arrowBtn1.addEventListener('click', () => {
		$topBox.classList.add('move-down');
		$navArrow.classList.add('move-down');
		$arrowBtn2.classList.remove('hidden');
	});
	$arrowBtn2.addEventListener('click', () => {
		$topBox.classList.remove('move-down');
		$navArrow.classList.remove('move-down');
		$topBox.classList.add('move-up');
		$navArrow.classList.add('move-up');
		$arrowBtn2.classList.add('hidden');
	});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enableAnimations);


/***/ }),

/***/ "./src/js/contactPage.js":
/*!*******************************!*\
  !*** ./src/js/contactPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_email_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/email.svg */ "./src/assets/images/email.svg");
/* harmony import */ var _assets_images_location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/location.svg */ "./src/assets/images/location.svg");
/* harmony import */ var _assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/phone.svg */ "./src/assets/images/phone.svg");
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElements */ "./src/js/createElements.js");
/* harmony import */ var _styles_contact_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/contact.scss */ "./src/styles/contact.scss");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations */ "./src/js/animations.js");









const loadContact = () => {
	_createElements__WEBPACK_IMPORTED_MODULE_3__.main.textContent = '';
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createBox)('top-box', 5);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.appendBox)(5, 'h2', 'Talk to us');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.appendBox)(5, 'p', "it's easy...");
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.appendBox)(5, 'ul', null);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(5, '', 'call us');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(5, '', 'email us');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(5, '', 'visit us');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(5, '', 'Sure.. even snail mail us');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createArrow)('nav-arrow', 1, 'Hit our line!');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createBox)('sub-box', 6);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.appendBox)(6, 'ul', null);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(6, _assets_images_email_svg__WEBPACK_IMPORTED_MODULE_0__, 'dripDrops@drip.com');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(6, _assets_images_location_svg__WEBPACK_IMPORTED_MODULE_1__, '1071 Valencia St, San Francisco CA, 94110');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(6, _assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_2__, '(415) 826-0607');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createArrow)('hidden', 2);
	(0,_animations__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/js/createElements.js":
/*!**********************************!*\
  !*** ./src/js/createElements.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendBox": () => (/* binding */ appendBox),
/* harmony export */   "createArrow": () => (/* binding */ createArrow),
/* harmony export */   "createBox": () => (/* binding */ createBox),
/* harmony export */   "createListItem": () => (/* binding */ createListItem),
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
const main = document.querySelector('.main');

const createBox = (className, boxNumber) => {
	const box = document.createElement('div');
	box.classList.add(className);
	const leftBorder = document.createElement('div');
	const contentBox = document.createElement('div');
	contentBox.setAttribute('id', `contentBox-${boxNumber}`);
	const rightBorder = document.createElement('div');
	box.appendChild(leftBorder);
	box.appendChild(contentBox);
	box.appendChild(rightBorder);
	main.appendChild(box);
};

const appendBox = (boxNumber, el, content) => {
	const currentBox = document.getElementById(`contentBox-${boxNumber}`);
	const element = currentBox.appendChild(document.createElement(el));
	element.textContent = content;
};

const createListItem = (boxNumber, imgName, text) => {
	const item = document.createElement('li');
	if (imgName !== undefined) {
		const img = new Image();
		img.src = imgName;
		item.appendChild(img);
	}

	const itemText = document.createElement('p');
	itemText.textContent = text;

	item.appendChild(itemText);
	const currentBox = document.getElementById(`contentBox-${boxNumber}`);
	const currentList = currentBox.querySelector('ul');
	currentList.appendChild(item);
};

const createArrow = (className, arrowNumber, label) => {
	const container = document.createElement('div');
	container.classList.add('nav-arrow');
	const arrow = document.createElement('div');
	arrow.setAttribute('id', `arrowBtn${arrowNumber}`);
	arrow.classList.add(className);
	if (label !== undefined) {
		const text = document.createElement('p');
		text.classList.add('arrowText');
		text.textContent = label;
		container.appendChild(text);
	}
	container.appendChild(arrow);
	main.appendChild(container);
};




/***/ }),

/***/ "./src/js/homePage.js":
/*!****************************!*\
  !*** ./src/js/homePage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_clock_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/clock.svg */ "./src/assets/images/clock.svg");
/* harmony import */ var _assets_images_location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/location.svg */ "./src/assets/images/location.svg");
/* harmony import */ var _assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/phone.svg */ "./src/assets/images/phone.svg");
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElements */ "./src/js/createElements.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations */ "./src/js/animations.js");
/* harmony import */ var _styles_home_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/home.scss */ "./src/styles/home.scss");







const loadHome = () => {
	_createElements__WEBPACK_IMPORTED_MODULE_3__.main.textContent = '';
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createBox)('top-box', 1);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.appendBox)(1, 'h2', 'Coffee kept simple,');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.appendBox)(1, 'p', 'and brewed with intention.');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createArrow)('nav-arrow', 1, 'learn more');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createBox)('sub-box', 2);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.appendBox)(2, 'ul', null);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(2, _assets_images_clock_svg__WEBPACK_IMPORTED_MODULE_0__, '7am - 5pm daily');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(2, _assets_images_location_svg__WEBPACK_IMPORTED_MODULE_1__, '1071 Valencia St, San Francisco CA, 94110');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createListItem)(2, _assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_2__, '(415) 826-0607');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_3__.createArrow)('hidden', 2);
	(0,_animations__WEBPACK_IMPORTED_MODULE_4__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/js/menuPage.js":
/*!****************************!*\
  !*** ./src/js/menuPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_menu_icons_drip_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/menu-icons/drip.svg */ "./src/assets/images/menu-icons/drip.svg");
/* harmony import */ var _assets_images_menu_icons_espresso_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/menu-icons/espresso.svg */ "./src/assets/images/menu-icons/espresso.svg");
/* harmony import */ var _assets_images_menu_icons_cortado_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/menu-icons/cortado.svg */ "./src/assets/images/menu-icons/cortado.svg");
/* harmony import */ var _assets_images_menu_icons_cappuccino_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/menu-icons/cappuccino.svg */ "./src/assets/images/menu-icons/cappuccino.svg");
/* harmony import */ var _assets_images_menu_icons_americano_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/menu-icons/americano.svg */ "./src/assets/images/menu-icons/americano.svg");
/* harmony import */ var _assets_images_menu_icons_latte_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/menu-icons/latte.svg */ "./src/assets/images/menu-icons/latte.svg");
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createElements */ "./src/js/createElements.js");
/* harmony import */ var _styles_menu_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/menu.scss */ "./src/styles/menu.scss");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animations */ "./src/js/animations.js");












const loadMenu = () => {
	_createElements__WEBPACK_IMPORTED_MODULE_6__.main.textContent = '';
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createBox)('top-box', 3);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.appendBox)(3, 'ul', null);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createListItem)(3, _assets_images_menu_icons_drip_svg__WEBPACK_IMPORTED_MODULE_0__, 'Drip');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createListItem)(3, _assets_images_menu_icons_espresso_svg__WEBPACK_IMPORTED_MODULE_1__, 'Espresso');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createListItem)(3, _assets_images_menu_icons_americano_svg__WEBPACK_IMPORTED_MODULE_4__, 'Americano');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createListItem)(3, _assets_images_menu_icons_cortado_svg__WEBPACK_IMPORTED_MODULE_2__, 'Cortado');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createListItem)(3, _assets_images_menu_icons_cappuccino_svg__WEBPACK_IMPORTED_MODULE_3__, 'Cappuccino');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createListItem)(3, _assets_images_menu_icons_latte_svg__WEBPACK_IMPORTED_MODULE_5__, 'Latte');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createArrow)('nav-arrow', 1, 'Is there more?');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createBox)('sub-box', 4);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.appendBox)(4, 'h2', 'Simple is good.');
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.appendBox)(
		4,
		'p',
		"At Drip, we are focused on highlighting the unique quality of the coffee's origin. All of our beverages are coffee-forward and meant to showcase the hard work of our partners around the world."
	);
	(0,_createElements__WEBPACK_IMPORTED_MODULE_6__.createArrow)('hidden', 2);
	(0,_animations__WEBPACK_IMPORTED_MODULE_8__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/js/pageNavigation.js":
/*!**********************************!*\
  !*** ./src/js/pageNavigation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/js/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/js/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/js/contactPage.js");




const logoHomeLinks = document.querySelectorAll('.logoLink');
const homeLink = document.querySelector('#homeLink');
const menuLink = document.querySelector('#menuLink');
const contactLink = document.querySelector('#contactLink');

window.onload = () => {
	(0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

logoHomeLinks.forEach((el) =>
	el.addEventListener('click', () => {
		(0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();
	})
);

homeLink.addEventListener('click', () => {
	(0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

menuLink.addEventListener('click', () => {
	(0,_menuPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

contactLink.addEventListener('click', () => {
	(0,_contactPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
});


/***/ }),

/***/ "./src/js/structure.js":
/*!*****************************!*\
  !*** ./src/js/structure.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/logo.svg */ "./src/assets/images/logo.svg");
/* harmony import */ var _assets_images_github_mark_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/github-mark/github-mark-white.svg */ "./src/assets/images/github-mark/github-mark-white.svg");
/* eslint-disable no-unused-vars */



const container = document.querySelector('#content');
container.classList.add('page-wrapper');

const createHeader = (() => {
	const header = document.createElement('header');
	header.classList.add('header');

	const headerLogo = document.createElement('div');
	headerLogo.setAttribute('class', 'logoLink');
	const headerImg = new Image();
	headerImg.setAttribute('class', 'logoLink');
	headerImg.src = _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
	const headerTitle = document.createElement('h1');
	headerTitle.textContent = 'Drip.';
	headerLogo.appendChild(headerImg);
	headerLogo.appendChild(headerTitle);
	header.appendChild(headerLogo);

	const headerNav = document.createElement('nav');
	const headerUL = document.createElement('ul');
	const headerLink1 = document.createElement('li');
	const headerLink2 = document.createElement('li');
	const headerLink3 = document.createElement('li');
	headerLink1.textContent = 'Home';
	headerLink1.setAttribute('id', 'homeLink');
	headerLink2.textContent = 'Menu';
	headerLink2.setAttribute('id', 'menuLink');
	headerLink3.textContent = 'Contact';
	headerLink3.setAttribute('id', 'contactLink');
	headerUL.appendChild(headerLink1);
	headerUL.appendChild(headerLink2);
	headerUL.appendChild(headerLink3);
	headerNav.appendChild(headerUL);
	header.appendChild(headerNav);

	container.appendChild(header);
})();

const createMain = (() => {
	const main = document.createElement('main');
	main.classList.add('main');

	container.appendChild(main);
})();

const createFooter = (() => {
	const footer = document.createElement('footer');
	footer.classList.add('footer');
	const footerText = document.createElement('p');
	footerText.textContent = 'created by ';

	const footerLink = document.createElement('a');
	footerLink.setAttribute('href', 'https://github.com/jlyon12');
	footerLink.textContent = 'jlyon12';
	const footerImg = new Image();
	footerImg.src = _assets_images_github_mark_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_1__;
	footer.appendChild(footerText);
	footerText.appendChild(footerLink);
	footer.appendChild(footerImg);
	container.appendChild(footer);
})();


/***/ }),

/***/ "./src/assets/fonts/nunito-v25-latin-700.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/nunito-v25-latin-700.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0896448ba230f1468248.woff";

/***/ }),

/***/ "./src/assets/fonts/nunito-v25-latin-700.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/nunito-v25-latin-700.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adfd120897fcd366e78e.woff2";

/***/ }),

/***/ "./src/assets/fonts/nunito-v25-latin-regular.woff":
/*!********************************************************!*\
  !*** ./src/assets/fonts/nunito-v25-latin-regular.woff ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca52c044715c95fdd0d8.woff";

/***/ }),

/***/ "./src/assets/fonts/nunito-v25-latin-regular.woff2":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/nunito-v25-latin-regular.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8644b6e04ecda1cf98b.woff2";

/***/ }),

/***/ "./src/assets/images/arrow-color.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/arrow-color.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34cb92da9cb69de806fb.svg";

/***/ }),

/***/ "./src/assets/images/arrow-white.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/arrow-white.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4016a5c8f0afd11249d3.svg";

/***/ }),

/***/ "./src/assets/images/clock.svg":
/*!*************************************!*\
  !*** ./src/assets/images/clock.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33a35ab8efb929f4a793.svg";

/***/ }),

/***/ "./src/assets/images/email.svg":
/*!*************************************!*\
  !*** ./src/assets/images/email.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cf733b1856cc09ac06a.svg";

/***/ }),

/***/ "./src/assets/images/github-mark/github-mark-white.svg":
/*!*************************************************************!*\
  !*** ./src/assets/images/github-mark/github-mark-white.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce1fc916b0e3ba708b4d.svg";

/***/ }),

/***/ "./src/assets/images/location.svg":
/*!****************************************!*\
  !*** ./src/assets/images/location.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b289d8d3806e341d0670.svg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f924e559d33fc8da8a5e.svg";

/***/ }),

/***/ "./src/assets/images/menu-icons/americano.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/menu-icons/americano.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62b8daf7ddf78dfb3822.svg";

/***/ }),

/***/ "./src/assets/images/menu-icons/cappuccino.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/menu-icons/cappuccino.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d802e3147ef8b05c9d53.svg";

/***/ }),

/***/ "./src/assets/images/menu-icons/cortado.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/menu-icons/cortado.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31e32d1106071ebd749f.svg";

/***/ }),

/***/ "./src/assets/images/menu-icons/drip.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/menu-icons/drip.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "835298d7c79c1e553cd3.svg";

/***/ }),

/***/ "./src/assets/images/menu-icons/espresso.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/menu-icons/espresso.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "237e908abc04e07dbdb8.svg";

/***/ }),

/***/ "./src/assets/images/menu-icons/latte.svg":
/*!************************************************!*\
  !*** ./src/assets/images/menu-icons/latte.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ded81dae12d67b1af78.svg";

/***/ }),

/***/ "./src/assets/images/phone.svg":
/*!*************************************!*\
  !*** ./src/assets/images/phone.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e80374360e3e67a1ba4.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
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
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _js_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/structure */ "./src/js/structure.js");
/* harmony import */ var _js_pageNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/pageNavigation */ "./src/js/pageNavigation.js");





})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map