/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/games/audio-call-page/audio.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/games/audio-call-page/audio.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".audio-call-container{\r\n  width: 90%;\r\n  user-select: none;\r\n  row-gap: 20px;\r\n  justify-items: center;\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-size: cover;\r\n \r\n}\r\n.buttons-container{\r\n  width: 90vw;\r\n  display:flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-content: space-around;\r\n  user-select: none;\r\n}\r\n.div-quiz-container{\r\n  justify-self: center;\r\n  width: 500px;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto;\r\n  align-self: center;\r\n  justify-content: center;\r\n}\r\n.quesion-container{\r\n  display : flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n.quesion-container > div{\r\n  margin-bottom: 25px;\r\n}\r\n.next-question-button{\r\n  margin-top: 30px;\r\n  margin-bottom: 20px;\r\n  width: 270px;\r\n  height: 45px;\r\n  background: var(--color-brown);\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  color: #FFFFFF;\r\n}\r\n.next-question-button:hover{\r\n  font-weight: 600;\r\n  opacity: 1;\r\n}\r\n.new-game-button::hover{\r\n  opacity: 1;\r\n  font-weight: 700;\r\n}\r\nlabel{\r\n  text-align: center;\r\n}\r\n.hidden{\r\n  display: none;\r\n}\r\n.new-game-button, .play-again-button{\r\n  width: 250px;\r\n  height: 45px;\r\n  background: #EC990E;\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  color: #FFFFFF;\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.play-again-button{\r\n  width: 270px;\r\n  font-size: 18px;\r\n  align-self:flex-end;\r\n}\r\n.new-game-button:hover, .play-again-button:hover{\r\n  opacity: 1;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  border: 0px;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n.game-button{\r\n  margin-top: 10px;\r\n  width: 150px;\r\n  height: 40px;\r\n  color: #FFFFFF;\r\n  border: 0px;\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  user-select: none \r\n}\r\n.game-button:hover{\r\n  font-weight: 800;\r\n  opacity: 1;\r\n}\r\n.option{\r\n  background-color:var(--color-main);\r\n  width: 270px;\r\n  cursor: pointer;\r\n}\r\n.l1{\r\n  background-color:var(--color-gray-light);\r\n}\r\n.l2{\r\n  background-color: var(--color-gray-medium);\r\n}\r\n.l3{\r\n  background-color: var(--color-yellow-bright);\r\n}\r\n.l4{\r\n  background-color: var( --color-medium);\r\n}\r\n.l5{\r\n  background-color: var(--color-brown);\r\n}\r\n.l6{\r\n  background-color: var(--color-dark);\r\n}\r\n.l7{\r\n  background-color: var(--color-accent);\r\n}\r\n.correct{\r\n  background-color: var(--color-green-common);\r\n}\r\n.wrong{\r\n  background-color: var(--color-accent);\r\n}\r\n/* .div-play{\r\n  width: 60px;\r\n  height: 60px;\r\n  background-image: url('../../assets/Play.png');\r\n  cursor: pointer;\r\n  background-size:99% 99%;\r\n  background-repeat: no-repeat;\r\n  margin: 10px;\r\n}\r\n*/\r\n.div-play:hover{\r\n  background-size:100% 100%;\r\n}\r\n.game-progress-bar{\r\n  width: 500px;\r\n  height: 25px;\r\n  border-style: solid;\r\n  border-color: var(--color-yellow-bright);\r\n  border-radius: 10px;\r\n  box-sizing: unset;\r\n  text-align: center;\r\n}\r\n.loading{\r\n  height: 25px;\r\n  border-radius: 0px;\r\n  background-color: var(--color-yellow-bright);\r\n  box-sizing: unset;\r\n}\r\n.dif-container{\r\n  text-align: center;\r\n  flex-direction: column;\r\n}\r\n.dif-container > label{\r\n  color: var(--color-main);\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 28px;\r\n  font-weight: 800;\r\n}\r\n.grid-status-container{\r\n  display: grid;\r\n  grid-template-columns: 50px 170px 50px;\r\n  height: 50px;\r\n  align-content: center;\r\n}\r\n.span-number{\r\n  pointer-events: none \r\n}\r\n.span-value{\r\n  Pointer-events: none \r\n}\r\n.div-option-grid{\r\n  pointer-events: none;\r\n  display: grid;\r\n  grid-template-columns: 20px auto;\r\n}", "",{"version":3,"sources":["webpack://./src/pages/games/audio-call-page/audio.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;;AAExB;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;EAC3B,iBAAiB;AACnB;AACA;EACE,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,8BAA8B;EAC9B,YAAY;EACZ,0DAA0D;EAC1D,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,0DAA0D;EAC1D,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,0DAA0D;EAC1D,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf;AACF;AACA;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,kCAAkC;EAClC,YAAY;EACZ,eAAe;AACjB;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,sCAAsC;AACxC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,qCAAqC;AACvC;AACA;;;;;;;;;CASC;AACD;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,wCAAwC;EACxC,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,4CAA4C;EAC5C,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,wBAAwB;EACxB,0DAA0D;EAC1D,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,oBAAoB;EACpB,aAAa;EACb,gCAAgC;AAClC","sourcesContent":[".audio-call-container{\r\n  width: 90%;\r\n  user-select: none;\r\n  row-gap: 20px;\r\n  justify-items: center;\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-size: cover;\r\n \r\n}\r\n.buttons-container{\r\n  width: 90vw;\r\n  display:flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-content: space-around;\r\n  user-select: none;\r\n}\r\n.div-quiz-container{\r\n  justify-self: center;\r\n  width: 500px;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto;\r\n  align-self: center;\r\n  justify-content: center;\r\n}\r\n.quesion-container{\r\n  display : flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n.quesion-container > div{\r\n  margin-bottom: 25px;\r\n}\r\n.next-question-button{\r\n  margin-top: 30px;\r\n  margin-bottom: 20px;\r\n  width: 270px;\r\n  height: 45px;\r\n  background: var(--color-brown);\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  color: #FFFFFF;\r\n}\r\n.next-question-button:hover{\r\n  font-weight: 600;\r\n  opacity: 1;\r\n}\r\n.new-game-button::hover{\r\n  opacity: 1;\r\n  font-weight: 700;\r\n}\r\nlabel{\r\n  text-align: center;\r\n}\r\n.hidden{\r\n  display: none;\r\n}\r\n.new-game-button, .play-again-button{\r\n  width: 250px;\r\n  height: 45px;\r\n  background: #EC990E;\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  color: #FFFFFF;\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.play-again-button{\r\n  width: 270px;\r\n  font-size: 18px;\r\n  align-self:flex-end;\r\n}\r\n.new-game-button:hover, .play-again-button:hover{\r\n  opacity: 1;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  border: 0px;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n.game-button{\r\n  margin-top: 10px;\r\n  width: 150px;\r\n  height: 40px;\r\n  color: #FFFFFF;\r\n  border: 0px;\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  user-select: none \r\n}\r\n.game-button:hover{\r\n  font-weight: 800;\r\n  opacity: 1;\r\n}\r\n.option{\r\n  background-color:var(--color-main);\r\n  width: 270px;\r\n  cursor: pointer;\r\n}\r\n.l1{\r\n  background-color:var(--color-gray-light);\r\n}\r\n.l2{\r\n  background-color: var(--color-gray-medium);\r\n}\r\n.l3{\r\n  background-color: var(--color-yellow-bright);\r\n}\r\n.l4{\r\n  background-color: var( --color-medium);\r\n}\r\n.l5{\r\n  background-color: var(--color-brown);\r\n}\r\n.l6{\r\n  background-color: var(--color-dark);\r\n}\r\n.l7{\r\n  background-color: var(--color-accent);\r\n}\r\n.correct{\r\n  background-color: var(--color-green-common);\r\n}\r\n.wrong{\r\n  background-color: var(--color-accent);\r\n}\r\n/* .div-play{\r\n  width: 60px;\r\n  height: 60px;\r\n  background-image: url('../../assets/Play.png');\r\n  cursor: pointer;\r\n  background-size:99% 99%;\r\n  background-repeat: no-repeat;\r\n  margin: 10px;\r\n}\r\n*/\r\n.div-play:hover{\r\n  background-size:100% 100%;\r\n}\r\n.game-progress-bar{\r\n  width: 500px;\r\n  height: 25px;\r\n  border-style: solid;\r\n  border-color: var(--color-yellow-bright);\r\n  border-radius: 10px;\r\n  box-sizing: unset;\r\n  text-align: center;\r\n}\r\n.loading{\r\n  height: 25px;\r\n  border-radius: 0px;\r\n  background-color: var(--color-yellow-bright);\r\n  box-sizing: unset;\r\n}\r\n.dif-container{\r\n  text-align: center;\r\n  flex-direction: column;\r\n}\r\n.dif-container > label{\r\n  color: var(--color-main);\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 28px;\r\n  font-weight: 800;\r\n}\r\n.grid-status-container{\r\n  display: grid;\r\n  grid-template-columns: 50px 170px 50px;\r\n  height: 50px;\r\n  align-content: center;\r\n}\r\n.span-number{\r\n  pointer-events: none \r\n}\r\n.span-value{\r\n  Pointer-events: none \r\n}\r\n.div-option-grid{\r\n  pointer-events: none;\r\n  display: grid;\r\n  grid-template-columns: 20px auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/games/audio-call-page/modal.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/games/audio-call-page/modal.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/audio.svg */ "./src/assets/svg/audio.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-content {\r\n    background-color: rgba(116, 115, 115, 0.46);\r\n    margin: auto;\r\n    padding: 5px 40px 5px 40px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    width: 60vw;\r\n    border-radius: 15px;\r\n    margin-bottom : 10px;\r\n}\r\n\r\n.modal-close {\r\n    color: rgba(0, 0, 0, 0.46);\r\n    float: right;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.modal-close:hover,\r\n.modal-close:focus {\r\n    color: var(--color-accent);\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.div-result-flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.div-result-flex>span {\r\n    font-size: 24px;\r\n    text-align: center;\r\n    /* font-family: Arial, Helvetica, sans-serif; */\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.game-span-correct {\r\n    color: var(--color-green-common);\r\n    \r\n    font-weight: bold;\r\n}\r\n\r\n.game-span-wrong {\r\n    color: var(--color-accent);\r\n    font-weight: bold;\r\n}\r\n\r\n.answer-container-correct>div>span,\r\n.answer-container-wrong>div>span {\r\n    margin-left: 20px;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    align-self: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.answer-container-correct>div>div,\r\n.answer-container-wrong>div>div {\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 20px;\r\n\r\n}\r\n\r\n.audio-icon {\r\n    width: 37px;\r\n    height: 27px;\r\n    cursor: pointer;\r\n    background-color: var(--color-gray-medium);\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    mask-repeat: no-repeat;\r\n    mask-size: contain;\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    -webkit-mask-repeat: no-repeat;\r\n    -webkit-mask-size: contain;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.audio-icon:hover {\r\n    background-color: var(--color-brown);\r\n}\r\n\r\n.audio-icon.disabled {\r\n    pointer-events: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/pages/games/audio-call-page/modal.css"],"names":[],"mappings":"AAAA;IACI,2CAA2C;IAC3C,YAAY;IACZ,0BAA0B;IAC1B,oCAAoC;IACpC,WAAW;IACX,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,eAAe;IACf,iBAAiB;;AAErB;;AAEA;;IAEI,0BAA0B;IAC1B,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,+CAA+C;IAC/C,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;;IAEhC,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;;IAEI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,0CAA0C;IAC1C,mDAAgD;IAChD,sBAAsB;IACtB,kBAAkB;IAClB,2DAAwD;IACxD,8BAA8B;IAC9B,0BAA0B;IAC1B,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":[".modal-content {\r\n    background-color: rgba(116, 115, 115, 0.46);\r\n    margin: auto;\r\n    padding: 5px 40px 5px 40px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    width: 60vw;\r\n    border-radius: 15px;\r\n    margin-bottom : 10px;\r\n}\r\n\r\n.modal-close {\r\n    color: rgba(0, 0, 0, 0.46);\r\n    float: right;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.modal-close:hover,\r\n.modal-close:focus {\r\n    color: var(--color-accent);\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.div-result-flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.div-result-flex>span {\r\n    font-size: 24px;\r\n    text-align: center;\r\n    /* font-family: Arial, Helvetica, sans-serif; */\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.game-span-correct {\r\n    color: var(--color-green-common);\r\n    \r\n    font-weight: bold;\r\n}\r\n\r\n.game-span-wrong {\r\n    color: var(--color-accent);\r\n    font-weight: bold;\r\n}\r\n\r\n.answer-container-correct>div>span,\r\n.answer-container-wrong>div>span {\r\n    margin-left: 20px;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    align-self: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.answer-container-correct>div>div,\r\n.answer-container-wrong>div>div {\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 20px;\r\n\r\n}\r\n\r\n.audio-icon {\r\n    width: 37px;\r\n    height: 27px;\r\n    cursor: pointer;\r\n    background-color: var(--color-gray-medium);\r\n    mask-image: url('../../../assets/svg/audio.svg');\r\n    mask-repeat: no-repeat;\r\n    mask-size: contain;\r\n    -webkit-mask-image: url('../../../assets/svg/audio.svg');\r\n    -webkit-mask-repeat: no-repeat;\r\n    -webkit-mask-size: contain;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.audio-icon:hover {\r\n    background-color: var(--color-brown);\r\n}\r\n\r\n.audio-icon.disabled {\r\n    pointer-events: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/games/sprint-page/sprint.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/games/sprint-page/sprint.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --timer-size: 100px;\n  --checker-size: 40px;\n}\n\n.sprint {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n  color: #ffffff;\n}\n\n.sprint-timer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--timer-size);\n  height: var(--timer-size);\n  font-size: calc(var(--timer-size) / 4);\n  color: #ffffff;\n  border: 3px solid #ffffff;\n  border-radius: calc(var(--timer-size) / 2);\n}\n\n.sprint-timer.hidden {\n  display: none;\n}\n\n.sprint-block {\n  width: 500px;\n  height: calc(100vh - 200px);\n}\n\n.sprint-controls-block {\n  width: 100%;\n  height: 5%;\n}\n\n.sprint-word-block {\n  width: 500px;\n  height: 95%;\n}\n\n.sprint-word-controls-block,\n.sprint-checkers {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.sprint-word-controls-block {\n  justify-content: space-between;\n}\n\n.sprint-checkers {\n  gap: 5px;\n}\n\n.checker {\n  width: var(--checker-size);\n  height: var(--checker-size);\n  text-align: center;\n  font-size: calc(var(--checker-size) / 2);\n  user-select: none;\n  border: 3px solid #ffffff;\n  border-radius: calc(var(--checker-size) / 2);\n}\n\n/*========================*/\n\n.sprint-question-container {\n  display : flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n}\n\n.answers-box {\n  display: flex;\n  flex-direction: row;\n}\n\n.div-option-grid.right {\n  grid-template-columns: auto 20px;\n}\n\n.sprint-original-word {\n  margin: 1rem auto;\n  font-size: 4rem;\n  font-weight: 800;\n  color: var(--color-gray-light);\n}\n\n.sprint-variation-word {\n  color: #ffffff\n}\n", "",{"version":3,"sources":["webpack://./src/pages/games/sprint-page/sprint.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;EACxB,yBAAyB;EACzB,sCAAsC;EACtC,cAAc;EACd,yBAAyB;EACzB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,0BAA0B;EAC1B,2BAA2B;EAC3B,kBAAkB;EAClB,wCAAwC;EACxC,iBAAiB;EACjB,yBAAyB;EACzB,4CAA4C;AAC9C;;AAEA,2BAA2B;;AAE3B;EACE,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE;AACF","sourcesContent":[":root {\n  --timer-size: 100px;\n  --checker-size: 40px;\n}\n\n.sprint {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n  color: #ffffff;\n}\n\n.sprint-timer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--timer-size);\n  height: var(--timer-size);\n  font-size: calc(var(--timer-size) / 4);\n  color: #ffffff;\n  border: 3px solid #ffffff;\n  border-radius: calc(var(--timer-size) / 2);\n}\n\n.sprint-timer.hidden {\n  display: none;\n}\n\n.sprint-block {\n  width: 500px;\n  height: calc(100vh - 200px);\n}\n\n.sprint-controls-block {\n  width: 100%;\n  height: 5%;\n}\n\n.sprint-word-block {\n  width: 500px;\n  height: 95%;\n}\n\n.sprint-word-controls-block,\n.sprint-checkers {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.sprint-word-controls-block {\n  justify-content: space-between;\n}\n\n.sprint-checkers {\n  gap: 5px;\n}\n\n.checker {\n  width: var(--checker-size);\n  height: var(--checker-size);\n  text-align: center;\n  font-size: calc(var(--checker-size) / 2);\n  user-select: none;\n  border: 3px solid #ffffff;\n  border-radius: calc(var(--checker-size) / 2);\n}\n\n/*========================*/\n\n.sprint-question-container {\n  display : flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n}\n\n.answers-box {\n  display: flex;\n  flex-direction: row;\n}\n\n.div-option-grid.right {\n  grid-template-columns: auto 20px;\n}\n\n.sprint-original-word {\n  margin: 1rem auto;\n  font-size: 4rem;\n  font-weight: 800;\n  color: var(--color-gray-light);\n}\n\n.sprint-variation-word {\n  color: #ffffff\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/stat-page/stat.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/stat-page/stat.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".stat-container{\r\n    height: 100%;  \r\n    display: grid;\r\n    grid-template-rows: 60px 0.95fr;\r\n \r\n    /* align-items: center; */\r\n  \r\n}\r\n.div-buttons-flex{\r\n    display: flex;\r\n    justify-content: center;\r\n    column-gap: 20px;\r\n    flex-direction: row;\r\n}\r\n.stat-button{\r\n    width: 280px;\r\n    height: 45px;\r\n    background: var(--color-main);\r\n    opacity: 0.9;   \r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    color: #FFFFFF;\r\n    margin-top: 5px;\r\n   \r\n  }\r\n  .stat-button:hover{\r\n    opacity: 1;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    border: 0px;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n  }\r\n  .stat-content{\r\n    background-color: rgba(211, 210, 210, 0);\r\n    border-radius: 10px;\r\n  }\r\n  .stat-content > div{\r\n    margin-left: 10%;\r\n    font-family: \"Raleway\", sans-serif;\r\n    color: white;\r\n    font-style: normal;   \r\n    margin-bottom: 10px;\r\n    font-weight: 600;\r\n    font-size: 2.2em;\r\n    line-height: 2.2rem;\r\n    letter-spacing: 1px;\r\n  }\r\n  .stat-content > h3{\r\n    text-align: center;\r\n    margin-left: 10%;\r\n    font-family: \"Raleway\", sans-serif;   \r\n    font-style: normal;\r\n    font-size: x-large;\r\n    margin-bottom: 10px;\r\n    color : black;\r\n  }\r\n  .title{\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    color:rgb(255, 255, 255);\r\n  }\r\n\r\n  .statcontent > .title{\r\n    color : black;\r\n  }", "",{"version":3,"sources":["webpack://./src/pages/stat-page/stat.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,+BAA+B;;IAE/B,yBAAyB;;AAE7B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,eAAe;;EAEjB;EACA;IACE,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE,wCAAwC;IACxC,mBAAmB;EACrB;EACA;IACE,gBAAgB;IAChB,kCAAkC;IAClC,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,kCAAkC;IAClC,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;EACf;EACA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,aAAa;EACf","sourcesContent":[".stat-container{\r\n    height: 100%;  \r\n    display: grid;\r\n    grid-template-rows: 60px 0.95fr;\r\n \r\n    /* align-items: center; */\r\n  \r\n}\r\n.div-buttons-flex{\r\n    display: flex;\r\n    justify-content: center;\r\n    column-gap: 20px;\r\n    flex-direction: row;\r\n}\r\n.stat-button{\r\n    width: 280px;\r\n    height: 45px;\r\n    background: var(--color-main);\r\n    opacity: 0.9;   \r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    color: #FFFFFF;\r\n    margin-top: 5px;\r\n   \r\n  }\r\n  .stat-button:hover{\r\n    opacity: 1;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    border: 0px;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n  }\r\n  .stat-content{\r\n    background-color: rgba(211, 210, 210, 0);\r\n    border-radius: 10px;\r\n  }\r\n  .stat-content > div{\r\n    margin-left: 10%;\r\n    font-family: \"Raleway\", sans-serif;\r\n    color: white;\r\n    font-style: normal;   \r\n    margin-bottom: 10px;\r\n    font-weight: 600;\r\n    font-size: 2.2em;\r\n    line-height: 2.2rem;\r\n    letter-spacing: 1px;\r\n  }\r\n  .stat-content > h3{\r\n    text-align: center;\r\n    margin-left: 10%;\r\n    font-family: \"Raleway\", sans-serif;   \r\n    font-style: normal;\r\n    font-size: x-large;\r\n    margin-bottom: 10px;\r\n    color : black;\r\n  }\r\n  .title{\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    color:rgb(255, 255, 255);\r\n  }\r\n\r\n  .statcontent > .title{\r\n    color : black;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/authorisation.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/authorisation.css ***!
  \****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".authorisation,\r\n.registration {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 400px;\r\n  height: 450px;\r\n}\r\n\r\n.auth-title,\r\n.reg-title,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  font-size: 21px;\r\n  color: var(--color-main);\r\n}\r\n\r\n.auth-title,\r\n.reg-title,\r\n.have-not-yet-account-span,\r\n.have-account-span {\r\n  margin-bottom: 1em;\r\n  color: #ffffff;\r\n}\r\n\r\n.auth-title {\r\n  width: 222px;\r\n  text-align: center;\r\n}\r\n\r\n.name-input,\r\n.email-input,\r\n.password-input,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  width: 350px;\r\n  height: 50px;\r\n  border: 3px solid #c7bcab;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.name-input:focus-visible,\r\n.email-input:focus-visible,\r\n.password-input:focus-visible,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  border: 3px solid #ec990e;\r\n  outline: #ec990e 0;\r\n}\r\n\r\n.name-input {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.password-input {\r\n  margin-top: 25px;\r\n}\r\n\r\n.sign-in-button,\r\n.sign-up-button {\r\n  margin-top: 65px;\r\n  font-family: Raleway;\r\n  font-weight: 900;\r\n  letter-spacing: 2px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.sign-in-button:hover,\r\n.sign-up-button:hover {\r\n  color: #ffffff;\r\n  background-color: #ec990e;\r\n  cursor: pointer;\r\n}\r\n\r\n.have-not-yet-account,\r\n.have-account {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  width: 350px;\r\n  height: 20px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.have-not-yet-account-span,\r\n.have-not-yet-account-button,\r\n.have-account-span,\r\n.have-account-button {\r\n  font-size: 13px;\r\n  line-height: 19px;\r\n}\r\n\r\n.have-not-yet-account-span,\r\n.have-account-span {\r\n  font-weight: 400;\r\n}\r\n\r\n.have-not-yet-account-button,\r\n.have-account-button {\r\n  padding: 0;\r\n  border: 0;\r\n  color: #ec990e;\r\n  background-color: transparent;\r\n  font-weight: 600;\r\n}\r\n\r\n.have-not-yet-account-button:hover,\r\n.have-account-button:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/authorisation.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;;AAEA;;;;EAIE,eAAe;EACf,wBAAwB;AAC1B;;AAEA;;;;EAIE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;;;;EAKE,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;;;;EAKE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;EACd,yBAAyB;EACzB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;;;EAIE,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT,cAAc;EACd,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;;EAEE,0BAA0B;EAC1B,eAAe;AACjB","sourcesContent":[".authorisation,\r\n.registration {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 400px;\r\n  height: 450px;\r\n}\r\n\r\n.auth-title,\r\n.reg-title,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  font-size: 21px;\r\n  color: var(--color-main);\r\n}\r\n\r\n.auth-title,\r\n.reg-title,\r\n.have-not-yet-account-span,\r\n.have-account-span {\r\n  margin-bottom: 1em;\r\n  color: #ffffff;\r\n}\r\n\r\n.auth-title {\r\n  width: 222px;\r\n  text-align: center;\r\n}\r\n\r\n.name-input,\r\n.email-input,\r\n.password-input,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  width: 350px;\r\n  height: 50px;\r\n  border: 3px solid #c7bcab;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.name-input:focus-visible,\r\n.email-input:focus-visible,\r\n.password-input:focus-visible,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  border: 3px solid #ec990e;\r\n  outline: #ec990e 0;\r\n}\r\n\r\n.name-input {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.password-input {\r\n  margin-top: 25px;\r\n}\r\n\r\n.sign-in-button,\r\n.sign-up-button {\r\n  margin-top: 65px;\r\n  font-family: Raleway;\r\n  font-weight: 900;\r\n  letter-spacing: 2px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.sign-in-button:hover,\r\n.sign-up-button:hover {\r\n  color: #ffffff;\r\n  background-color: #ec990e;\r\n  cursor: pointer;\r\n}\r\n\r\n.have-not-yet-account,\r\n.have-account {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  width: 350px;\r\n  height: 20px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.have-not-yet-account-span,\r\n.have-not-yet-account-button,\r\n.have-account-span,\r\n.have-account-button {\r\n  font-size: 13px;\r\n  line-height: 19px;\r\n}\r\n\r\n.have-not-yet-account-span,\r\n.have-account-span {\r\n  font-weight: 400;\r\n}\r\n\r\n.have-not-yet-account-button,\r\n.have-account-button {\r\n  padding: 0;\r\n  border: 0;\r\n  color: #ec990e;\r\n  background-color: transparent;\r\n  font-weight: 600;\r\n}\r\n\r\n.have-not-yet-account-button:hover,\r\n.have-account-button:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/burger.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/burger.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".burger {\r\n  display: none;\r\n  position: relative;\r\n  height: 40px;\r\n  width: 40px;\r\n  padding-top: 16px;\r\n  padding-right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  z-index: 5;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .burger {\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\n.burger-line {\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: #ffffff;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.burger:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  transform: translateY(12px);\r\n  background: #ffffff;\r\n  height: 3px;\r\n  width: 100%;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.burger:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  transform: translateY(-12px);\r\n  background: #ffffff;\r\n  height: 3px;\r\n  width: 100%;\r\n  transition: all 0.5s;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .burger.open .burger-line {\r\n    display: none;\r\n  }\r\n\r\n  .burger.open:before {\r\n    transform: rotate(-45deg) translate(0, 50%);\r\n  }\r\n\r\n  .burger.open:after {\r\n    transform: rotate(45deg) translate(0, -50%);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/burger.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,4BAA4B;EAC5B,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,2CAA2C;EAC7C;;EAEA;IACE,2CAA2C;EAC7C;AACF","sourcesContent":[".burger {\r\n  display: none;\r\n  position: relative;\r\n  height: 40px;\r\n  width: 40px;\r\n  padding-top: 16px;\r\n  padding-right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  z-index: 5;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .burger {\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\n.burger-line {\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: #ffffff;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.burger:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  transform: translateY(12px);\r\n  background: #ffffff;\r\n  height: 3px;\r\n  width: 100%;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.burger:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  transform: translateY(-12px);\r\n  background: #ffffff;\r\n  height: 3px;\r\n  width: 100%;\r\n  transition: all 0.5s;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .burger.open .burger-line {\r\n    display: none;\r\n  }\r\n\r\n  .burger.open:before {\r\n    transform: rotate(-45deg) translate(0, 50%);\r\n  }\r\n\r\n  .burger.open:after {\r\n    transform: rotate(45deg) translate(0, -50%);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/cards.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/cards.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/audio.svg */ "./src/assets/svg/audio.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cards_list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  row-gap: 20px;\r\n  column-gap: 1%;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .cards_list {\r\n    justify-content: center;\r\n    row-gap: 20px;\r\n    column-gap: 40px;\r\n  }\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  width: 285px;\r\n  border: 3px solid var(--color-gray-light);\r\n  border-radius: 30px 0px 0px 0px;\r\n  background: #ffffff;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.card__img {\r\n  height: 190px;\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.card__stat {\r\n  position: absolute;\r\n  width: 70px;\r\n  height: 34px;\r\n  right: -3px;\r\n  top: -3px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--color-gray-light);\r\n  font-weight: 400;\r\n  font-size: 2.1rem;\r\n  text-align: center;\r\n  line-height: 3rem;\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.card__stat span {\r\n  font-weight: 600;\r\n  color: #725747;\r\n}\r\n\r\n.card__text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.word {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n  color: #000000;\r\n}\r\n\r\n.word__english {\r\n  font-weight: 800;\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.audio-icon {\r\n  width: 37px;\r\n  height: 27px;\r\n  cursor: pointer;\r\n  background-color: var(--color-gray-light);\r\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  mask-repeat: no-repeat;\r\n  mask-size: contain;\r\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  -webkit-mask-repeat: no-repeat;\r\n  -webkit-mask-size: contain;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.audio-icon:hover {\r\n  background-color: var(--color-main);\r\n}\r\n\r\n.audio-icon.disabled {\r\n  pointer-events: none;\r\n}\r\n\r\n.card__buttons {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card__btn {\r\n  display: inline;\r\n  width: 120px;\r\n  height: 33px;\r\n  padding: 10px 22px;\r\n  background: #ffffff;\r\n  border: 2px solid var(--color-gray-light);\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  line-height: 1.2rem;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  color: var(--color-gray-light);\r\n}\r\n\r\n.hard__btn:hover {\r\n  border: 2px solid var(--color-accent);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.done__btn:hover {\r\n  border: 2px solid var(--color-main);\r\n  color: var(--color-main);\r\n}\r\n\r\n.phrases {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.4rem;\r\n  line-height: 2rem;\r\n}\r\n\r\n.phrase__definition {\r\n  color: #000000;\r\n}\r\n\r\n.phrase__definition i {\r\n  font-weight: 700;\r\n}\r\n\r\n.phrase__definition_english {\r\n  font-weight: 500;\r\n}\r\n\r\n.phrase__definition_russian {\r\n  font-weight: 300;\r\n}\r\n\r\n.phrase__example {\r\n  color: #919191;\r\n}\r\n\r\n.phrase__example_english {\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n.phrase__example_russian {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n}\r\n\r\n/* ------------- hard cards-----------------------*/\r\n.card.hard {\r\n  border: 3px solid var(--color-accent);\r\n}\r\n\r\n.hard .card__stat {\r\n  border: 3px solid var(--color-accent);\r\n  line-height: 2.6rem;\r\n}\r\n\r\n.hard .card__stat span {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.hard .word__english {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.hard .hard__btn {\r\n  border: 3px solid var(--color-accent);\r\n  color: var(--color-accent);\r\n}\r\n\r\n/* ------------- done cards-----------------------*/\r\n.card.done {\r\n  border: 3px solid var(--color-main);\r\n}\r\n\r\n.done .card__stat {\r\n  border: 3px solid var(--color-main);\r\n  line-height: 2.6rem;\r\n}\r\n\r\n.done .card__stat span {\r\n  color: var(--color-main);\r\n}\r\n\r\n.done .word__english {\r\n  color: var(--color-main);\r\n}\r\n\r\n.done .done__btn {\r\n  border: 3px solid var(--color-main);\r\n  color: var(--color-main);\r\n}\r\n\r\n/* ------------- word progress bar -----------------------*/\r\n.card__progress-bar {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 170px;\r\n  height: 6px;\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  box-sizing: unset;\r\n  background: #dfd4d4;\r\n  transform: translateX(22px) translateY(12px);\r\n}\r\n\r\n.progress-loading {\r\n  height: 100%;\r\n  width: 0%;\r\n  background-color: var(--color-main);\r\n  border-radius: 4px;\r\n  transition: all 1.5s;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/cards.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;IACvB,aAAa;IACb,gBAAgB;EAClB;AACF;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yCAAyC;EACzC,+BAA+B;EAC/B,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,yCAAyC;EACzC,mDAA0C;EAC1C,sBAAsB;EACtB,kBAAkB;EAClB,2DAAkD;EAClD,8BAA8B;EAC9B,0BAA0B;EAC1B,oBAAoB;AACtB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA;EACE,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,mDAAmD;AACnD;EACE,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA,mDAAmD;AACnD;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA,2DAA2D;AAC3D;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,mCAAmC;EACnC,kBAAkB;EAClB,oBAAoB;AACtB","sourcesContent":[".cards_list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  row-gap: 20px;\r\n  column-gap: 1%;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .cards_list {\r\n    justify-content: center;\r\n    row-gap: 20px;\r\n    column-gap: 40px;\r\n  }\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  width: 285px;\r\n  border: 3px solid var(--color-gray-light);\r\n  border-radius: 30px 0px 0px 0px;\r\n  background: #ffffff;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.card__img {\r\n  height: 190px;\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.card__stat {\r\n  position: absolute;\r\n  width: 70px;\r\n  height: 34px;\r\n  right: -3px;\r\n  top: -3px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--color-gray-light);\r\n  font-weight: 400;\r\n  font-size: 2.1rem;\r\n  text-align: center;\r\n  line-height: 3rem;\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.card__stat span {\r\n  font-weight: 600;\r\n  color: #725747;\r\n}\r\n\r\n.card__text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.word {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n  color: #000000;\r\n}\r\n\r\n.word__english {\r\n  font-weight: 800;\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.audio-icon {\r\n  width: 37px;\r\n  height: 27px;\r\n  cursor: pointer;\r\n  background-color: var(--color-gray-light);\r\n  mask-image: url(\"../assets/svg/audio.svg\");\r\n  mask-repeat: no-repeat;\r\n  mask-size: contain;\r\n  -webkit-mask-image: url(\"../assets/svg/audio.svg\");\r\n  -webkit-mask-repeat: no-repeat;\r\n  -webkit-mask-size: contain;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.audio-icon:hover {\r\n  background-color: var(--color-main);\r\n}\r\n\r\n.audio-icon.disabled {\r\n  pointer-events: none;\r\n}\r\n\r\n.card__buttons {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card__btn {\r\n  display: inline;\r\n  width: 120px;\r\n  height: 33px;\r\n  padding: 10px 22px;\r\n  background: #ffffff;\r\n  border: 2px solid var(--color-gray-light);\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  line-height: 1.2rem;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  color: var(--color-gray-light);\r\n}\r\n\r\n.hard__btn:hover {\r\n  border: 2px solid var(--color-accent);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.done__btn:hover {\r\n  border: 2px solid var(--color-main);\r\n  color: var(--color-main);\r\n}\r\n\r\n.phrases {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.4rem;\r\n  line-height: 2rem;\r\n}\r\n\r\n.phrase__definition {\r\n  color: #000000;\r\n}\r\n\r\n.phrase__definition i {\r\n  font-weight: 700;\r\n}\r\n\r\n.phrase__definition_english {\r\n  font-weight: 500;\r\n}\r\n\r\n.phrase__definition_russian {\r\n  font-weight: 300;\r\n}\r\n\r\n.phrase__example {\r\n  color: #919191;\r\n}\r\n\r\n.phrase__example_english {\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n.phrase__example_russian {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n}\r\n\r\n/* ------------- hard cards-----------------------*/\r\n.card.hard {\r\n  border: 3px solid var(--color-accent);\r\n}\r\n\r\n.hard .card__stat {\r\n  border: 3px solid var(--color-accent);\r\n  line-height: 2.6rem;\r\n}\r\n\r\n.hard .card__stat span {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.hard .word__english {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.hard .hard__btn {\r\n  border: 3px solid var(--color-accent);\r\n  color: var(--color-accent);\r\n}\r\n\r\n/* ------------- done cards-----------------------*/\r\n.card.done {\r\n  border: 3px solid var(--color-main);\r\n}\r\n\r\n.done .card__stat {\r\n  border: 3px solid var(--color-main);\r\n  line-height: 2.6rem;\r\n}\r\n\r\n.done .card__stat span {\r\n  color: var(--color-main);\r\n}\r\n\r\n.done .word__english {\r\n  color: var(--color-main);\r\n}\r\n\r\n.done .done__btn {\r\n  border: 3px solid var(--color-main);\r\n  color: var(--color-main);\r\n}\r\n\r\n/* ------------- word progress bar -----------------------*/\r\n.card__progress-bar {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 170px;\r\n  height: 6px;\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  box-sizing: unset;\r\n  background: #dfd4d4;\r\n  transform: translateX(22px) translateY(12px);\r\n}\r\n\r\n.progress-loading {\r\n  height: 100%;\r\n  width: 0%;\r\n  background-color: var(--color-main);\r\n  border-radius: 4px;\r\n  transition: all 1.5s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/level-buttons.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/level-buttons.css ***!
  \****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".levels {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 16px;\r\n  min-height: 65px;\r\n  margin: 55px auto 30px;\r\n  /* background-color:var(--color-accent); */\r\n  /* font-size: 2rem; */\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .levels {\r\n    justify-content: center;\r\n    column-gap: 50px;\r\n    row-gap: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .levels {\r\n    column-gap: 10px;\r\n  }\r\n}\r\n\r\n.level {\r\n  flex-grow: 1;\r\n  padding: 10px 16px;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 50px;\r\n  font-weight: 400;\r\n  font-size: 2rem;\r\n  line-height: 2.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .level {\r\n    font-size: 1.6rem;\r\n  }\r\n}\r\n\r\n.level:hover {\r\n  background: #ffffff;\r\n}\r\n\r\n.level:active {\r\n  padding: 20px 15px;\r\n  height: 100%;\r\n}\r\n\r\n.level.active {\r\n  padding: 20px 15px;\r\n  height: 100%;\r\n  background-color: #ffffff;\r\n  pointer-events: none;\r\n}\r\n\r\n.level_number {\r\n  font-family: \"Arial\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 30px;\r\n}\r\n\r\n.level-0 {\r\n  background: #cdc1a2;\r\n  border: 2px solid #cdc1a2;\r\n}\r\n\r\n.level-0:hover,\r\n.level-0.active {\r\n  color: #cdc1a2;\r\n}\r\n\r\n.level-1 {\r\n  background: var(--color-gray-medium);\r\n  border: 2px solid var(--color-gray-medium);\r\n}\r\n\r\n.level-1:hover,\r\n.level-1.active {\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.level-2 {\r\n  background: #ffcb05;\r\n  border: 2px solid #ffcb05;\r\n}\r\n\r\n.level-2:hover,\r\n.level-2.active {\r\n  color: #ffcb05;\r\n}\r\n\r\n.level-3 {\r\n  background: var(--color-main);\r\n  border: 2px solid var(--color-main);\r\n}\r\n\r\n.level-3:hover,\r\n.level-3.active {\r\n  color: var(--color-main);\r\n}\r\n\r\n.level-4 {\r\n  background: #725747;\r\n  border: 2px solid #725747;\r\n}\r\n\r\n.level-4:hover,\r\n.level-4.active {\r\n  color: #725747;\r\n}\r\n\r\n.level-5 {\r\n  background: #494343;\r\n  border: 2px solid #494343;\r\n}\r\n\r\n.level-5:hover,\r\n.level-5.active {\r\n  color: #494343;\r\n}\r\n\r\n.level-6 {\r\n  background: var(--color-accent);\r\n  border: 2px solid var(--color-accent);\r\n  flex-grow: 8;\r\n}\r\n\r\n.level-6:hover,\r\n.level-6.active {\r\n  color: var(--color-accent);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/level-buttons.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,sBAAsB;EACtB,0CAA0C;EAC1C,qBAAqB;AACvB;;AAEA;EACE;IACE,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;EACf;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,2CAA2C;EAC3C,eAAe;EACf,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,gCAAgC;EAChC,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,oCAAoC;EACpC,0CAA0C;AAC5C;;AAEA;;EAEE,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,mCAAmC;AACrC;;AAEA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,+BAA+B;EAC/B,qCAAqC;EACrC,YAAY;AACd;;AAEA;;EAEE,0BAA0B;AAC5B","sourcesContent":[".levels {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 16px;\r\n  min-height: 65px;\r\n  margin: 55px auto 30px;\r\n  /* background-color:var(--color-accent); */\r\n  /* font-size: 2rem; */\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .levels {\r\n    justify-content: center;\r\n    column-gap: 50px;\r\n    row-gap: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .levels {\r\n    column-gap: 10px;\r\n  }\r\n}\r\n\r\n.level {\r\n  flex-grow: 1;\r\n  padding: 10px 16px;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 50px;\r\n  font-weight: 400;\r\n  font-size: 2rem;\r\n  line-height: 2.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .level {\r\n    font-size: 1.6rem;\r\n  }\r\n}\r\n\r\n.level:hover {\r\n  background: #ffffff;\r\n}\r\n\r\n.level:active {\r\n  padding: 20px 15px;\r\n  height: 100%;\r\n}\r\n\r\n.level.active {\r\n  padding: 20px 15px;\r\n  height: 100%;\r\n  background-color: #ffffff;\r\n  pointer-events: none;\r\n}\r\n\r\n.level_number {\r\n  font-family: \"Arial\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 30px;\r\n}\r\n\r\n.level-0 {\r\n  background: #cdc1a2;\r\n  border: 2px solid #cdc1a2;\r\n}\r\n\r\n.level-0:hover,\r\n.level-0.active {\r\n  color: #cdc1a2;\r\n}\r\n\r\n.level-1 {\r\n  background: var(--color-gray-medium);\r\n  border: 2px solid var(--color-gray-medium);\r\n}\r\n\r\n.level-1:hover,\r\n.level-1.active {\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.level-2 {\r\n  background: #ffcb05;\r\n  border: 2px solid #ffcb05;\r\n}\r\n\r\n.level-2:hover,\r\n.level-2.active {\r\n  color: #ffcb05;\r\n}\r\n\r\n.level-3 {\r\n  background: var(--color-main);\r\n  border: 2px solid var(--color-main);\r\n}\r\n\r\n.level-3:hover,\r\n.level-3.active {\r\n  color: var(--color-main);\r\n}\r\n\r\n.level-4 {\r\n  background: #725747;\r\n  border: 2px solid #725747;\r\n}\r\n\r\n.level-4:hover,\r\n.level-4.active {\r\n  color: #725747;\r\n}\r\n\r\n.level-5 {\r\n  background: #494343;\r\n  border: 2px solid #494343;\r\n}\r\n\r\n.level-5:hover,\r\n.level-5.active {\r\n  color: #494343;\r\n}\r\n\r\n.level-6 {\r\n  background: var(--color-accent);\r\n  border: 2px solid var(--color-accent);\r\n  flex-grow: 8;\r\n}\r\n\r\n.level-6:hover,\r\n.level-6.active {\r\n  color: var(--color-accent);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main-page.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main-page.css ***!
  \************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".main {\r\n  height: 100%;\r\n}\r\n\r\n.main-page * {\r\n  user-select: none;\r\n}\r\n\r\n.main-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  margin-left: 80px;\r\n  max-width: 55%;\r\n  height: 100%;\r\n  padding: 70px 0;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main-page {\r\n    margin-left: 34px;\r\n    max-width: 72%;\r\n    height: 100%;\r\n    padding: 40px 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .main-page {\r\n    padding: 20px 0;\r\n  }\r\n}\r\n\r\n.main-page__title {\r\n  font-weight: 900;\r\n  font-size: 5rem;\r\n  line-height: 7rem;\r\n  color: #ffffff;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main-page__title {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .main-page__title {\r\n    font-size: 3rem;\r\n    line-height: 5rem;\r\n  }\r\n}\r\n\r\n.main-page__text p {\r\n  font-weight: 500;\r\n  font-size: 1.8rem;\r\n  line-height: 2.6rem;\r\n  color: #ffffff;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main-page__text p {\r\n    font-size: 1.6rem;\r\n    line-height: 2.4rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .main-page__text p {\r\n    font-size: 1.4rem;\r\n    line-height: 2rem;\r\n  }\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  gap: 40px;\r\n  margin-top: 100px;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .buttons {\r\n    gap: 10px;\r\n    margin-top: 28px;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.btn_intro {\r\n  width: 200px;\r\n  height: 50px;\r\n  padding: 5px 18px;\r\n}\r\n\r\n.btn {\r\n  font-weight: 900;\r\n  font-size: 2rem;\r\n  line-height: 1.5rem;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .btn {\r\n    font-size: 1.6rem;\r\n  }\r\n}\r\n\r\n.btn:hover {\r\n  text-decoration: underline;\r\n  border-radius: 8px;\r\n}\r\n\r\n.btn:active {\r\n  scale: 96%;\r\n}\r\n\r\n.btn_colored {\r\n  background-color: var(--color-main);\r\n  color: #ffffff;\r\n}\r\n\r\n.btn_bordered {\r\n  background: #ffffff;\r\n  border: 3px solid var(--color-main);\r\n  letter-spacing: 2px;\r\n  color: #ec990e;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/main-page.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,iBAAiB;EACjB,cAAc;EACd,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE;IACE,iBAAiB;IACjB,cAAc;IACd,YAAY;IACZ,eAAe;EACjB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,eAAe;IACf,iBAAiB;EACnB;AACF;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE;IACE,iBAAiB;IACjB,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,iBAAiB;EACnB;AACF;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE;IACE,SAAS;IACT,gBAAgB;IAChB,sBAAsB;EACxB;AACF;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,mCAAmC;EACnC,mBAAmB;EACnB,cAAc;AAChB","sourcesContent":[".main {\r\n  height: 100%;\r\n}\r\n\r\n.main-page * {\r\n  user-select: none;\r\n}\r\n\r\n.main-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  margin-left: 80px;\r\n  max-width: 55%;\r\n  height: 100%;\r\n  padding: 70px 0;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main-page {\r\n    margin-left: 34px;\r\n    max-width: 72%;\r\n    height: 100%;\r\n    padding: 40px 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .main-page {\r\n    padding: 20px 0;\r\n  }\r\n}\r\n\r\n.main-page__title {\r\n  font-weight: 900;\r\n  font-size: 5rem;\r\n  line-height: 7rem;\r\n  color: #ffffff;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main-page__title {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .main-page__title {\r\n    font-size: 3rem;\r\n    line-height: 5rem;\r\n  }\r\n}\r\n\r\n.main-page__text p {\r\n  font-weight: 500;\r\n  font-size: 1.8rem;\r\n  line-height: 2.6rem;\r\n  color: #ffffff;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main-page__text p {\r\n    font-size: 1.6rem;\r\n    line-height: 2.4rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .main-page__text p {\r\n    font-size: 1.4rem;\r\n    line-height: 2rem;\r\n  }\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  gap: 40px;\r\n  margin-top: 100px;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .buttons {\r\n    gap: 10px;\r\n    margin-top: 28px;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.btn_intro {\r\n  width: 200px;\r\n  height: 50px;\r\n  padding: 5px 18px;\r\n}\r\n\r\n.btn {\r\n  font-weight: 900;\r\n  font-size: 2rem;\r\n  line-height: 1.5rem;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .btn {\r\n    font-size: 1.6rem;\r\n  }\r\n}\r\n\r\n.btn:hover {\r\n  text-decoration: underline;\r\n  border-radius: 8px;\r\n}\r\n\r\n.btn:active {\r\n  scale: 96%;\r\n}\r\n\r\n.btn_colored {\r\n  background-color: var(--color-main);\r\n  color: #ffffff;\r\n}\r\n\r\n.btn_bordered {\r\n  background: #ffffff;\r\n  border: 3px solid var(--color-main);\r\n  letter-spacing: 2px;\r\n  color: #ec990e;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/bg_main.jpg */ "./src/assets/img/bg_main.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/flags.svg */ "./src/assets/svg/flags.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/rs_school_js.svg */ "./src/assets/svg/rs_school_js.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --color-main: #ec990e;\r\n  --color-medium: #f2b857;\r\n  --color-accent: #ae312b;\r\n  --color-gray-light: #c7bcab;\r\n  --color-gray-medium: #b59565;\r\n  --color-dark: #494343;\r\n  --color-brown: #725747;\r\n  --color-yellow-bright: #ffcb05;\r\n  --color-green-common: #6da070;\r\n\r\n  font-size: 10px;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-style: normal;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n  overflow: none;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  /* background-size: cover; */\r\n  background-position: center;\r\n}\r\n\r\n.not-scroll {\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.container {\r\n  width: 84%;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media (max-width: 1460px) {\r\n  .container {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 80px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header__logo img {\r\n  width: 130px;\r\n  height: auto;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .header__logo img {\r\n    width: 120px;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n  list-style-type: none;\r\n  gap: 30px;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .nav-list {\r\n    gap: 15px;\r\n  }\r\n}\r\n\r\n.nav-list__item {\r\n  position: relative;\r\n  padding-bottom: 6px;\r\n  font-weight: 800;\r\n  font-size: 1.8rem;\r\n  line-height: 1.8rem;\r\n  letter-spacing: 1.275px;\r\n  color: #ffffff;\r\n  text-transform: uppercase;\r\n  border-bottom: solid 3px var(--color-gray-light);\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.nav-list__item.active {\r\n  border-bottom: solid 3px var(--color-main);\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-list__item.game-page-link.active {\r\n  pointer-events: auto;\r\n}\r\n\r\n.nav-list__item:hover {\r\n  color: #c7bcab;\r\n  border-bottom: solid 3px var(--color-main);\r\n}\r\n\r\n.nav-list__item:last-of-type {\r\n  border-bottom: none;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .nav-list__item {\r\n    font-size: 1.4rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  /* .nav {\r\n    display: none;\r\n  } */\r\n  .header_nav {\r\n    position: fixed;\r\n    flex-direction: column;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    width: 300px;\r\n    height: 100vh;\r\n    top: 0;\r\n    right: -300px;\r\n    padding-top: 80px;\r\n    padding-left: 130px;\r\n    transition: all 0.5s;\r\n    overflow-x: hidden;\r\n    z-index: 4;\r\n  }\r\n\r\n  .header_nav.open {\r\n    right: 0;\r\n    padding-left: 30px;\r\n  }\r\n\r\n  .nav-list {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .nav-list__item {\r\n    font-size: 2rem;\r\n    line-height: 1rem;\r\n    padding: 10px 0;\r\n  }\r\n}\r\n\r\n/* --------- sub-nav -------------*/\r\n\r\n.sub-nav {\r\n  z-index: 3;\r\n  position: absolute;\r\n  left: 20px;\r\n  bottom: 0;\r\n  width: max-content;\r\n  transform: translateY(50%) translateX(-36%) scaleY(0);\r\n  background-color: var(--color-main);\r\n  list-style-type: none;\r\n  transition: all 0.3s ease-out 0.2s;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .sub-nav.open {\r\n    transform: translateY(70%) translateX(30%) scaleY(100%);\r\n  }\r\n}\r\n\r\n.game-page-link:hover .sub-nav {\r\n  transform: translateY(100%) translateX(-36%) scaleY(100%);\r\n}\r\n\r\n.sub-nav__item {\r\n  padding: 10px;\r\n  min-width: max-content;\r\n  transition: all 0.3s;\r\n  color: #ffffff;\r\n}\r\n\r\n.sub-nav__item:first-of-type {\r\n  border-bottom: 1px solid #ffffff;\r\n}\r\n\r\n.sub-nav__item:hover {\r\n  background-color: var(--color-medium);\r\n}\r\n\r\n.sub-nav__item img {\r\n  display: inline;\r\n  height: 20px;\r\n  width: auto;\r\n  margin-right: 5px;\r\n  transform: translateY(16%);\r\n}\r\n\r\n/* -------------------------------*/\r\n\r\n.sign-in {\r\n  padding: 6px 30px;\r\n  background-color: var(--color-main);\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .sign-in {\r\n    padding: 6px 8px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .sign-in {\r\n    padding: 12px 44px;\r\n  }\r\n}\r\n\r\n.sign-in:hover {\r\n  border-radius: 8px;\r\n  color: #ffffff;\r\n}\r\n\r\n.sign-in:active {\r\n  scale: 96%;\r\n}\r\n\r\n.main_wrapper.all-done {\r\n  background-image: linear-gradient(180deg, rgba(236, 153, 14, 0.37) 0%, rgba(236, 153, 14, 0) 100%),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: top center;\r\n  background-size: auto;\r\n}\r\n\r\n.game__buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 38px;\r\n  gap: 50px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .game__buttons {\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.game__buttons .btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 52px;\r\n  width: 276px;\r\n  padding: 8px 30px;\r\n  line-height: 3.7rem;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  user-select: none;\r\n}\r\n\r\n.game-icon {\r\n  height: 100%;\r\n  margin-right: 15px;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n}\r\n\r\n.footer_main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgba(43, 31, 31, 0.5);\r\n}\r\n\r\nfooter {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nfooter.secondary {\r\n  background-position: bottom;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.footer__wrapper {\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .footer__wrapper {\r\n    min-height: 130px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    row-gap: 10px;\r\n    padding: 0 10px 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .footer__wrapper {\r\n    min-height: 170px;\r\n    padding: 10px 10px;\r\n    justify-content: space-around;\r\n    padding-bottom: 20px;\r\n  }\r\n}\r\n\r\n.rss {\r\n  width: 100px;\r\n  height: 40px;\r\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: contain;\r\n  filter: invert(1);\r\n}\r\n\r\n.rs-logo {\r\n  width: 90px;\r\n  height: auto;\r\n}\r\n\r\n.gh_logo {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.footer__team {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 0;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .footer__team {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.team__list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  list-style-type: none;\r\n  color: #ffffff;\r\n  gap: 0;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .team__list {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.team__member a {\r\n  padding: 0 16px;\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  line-height: 2.8rem;\r\n  color: #ffffff;\r\n  border-right: solid 1px #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .team__member a {\r\n    padding: 0 10px;\r\n    font-size: 1.4rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .team__member a {\r\n    padding: 0 6px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .team__member a {\r\n    line-height: 2rem;\r\n    border-right: none;\r\n  }\r\n}\r\n\r\n.team__member a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.team__member:last-of-type a {\r\n  border-right: none;\r\n}\r\n\r\n.footer__year {\r\n  font-weight: 400;\r\n  font-size: 30px;\r\n  line-height: 0px;\r\n  color: #ffffff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --color-main: #ec990e;\r\n  --color-medium: #f2b857;\r\n  --color-accent: #ae312b;\r\n  --color-gray-light: #c7bcab;\r\n  --color-gray-medium: #b59565;\r\n  --color-dark: #494343;\r\n  --color-brown: #725747;\r\n  --color-yellow-bright: #ffcb05;\r\n  --color-green-common: #6da070;\r\n\r\n  font-size: 10px;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-style: normal;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n  overflow: none;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  background-image: url(\"../assets/img/bg_main.jpg\");\r\n  background-repeat: no-repeat;\r\n  /* background-size: cover; */\r\n  background-position: center;\r\n}\r\n\r\n.not-scroll {\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.container {\r\n  width: 84%;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media (max-width: 1460px) {\r\n  .container {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 80px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header__logo img {\r\n  width: 130px;\r\n  height: auto;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .header__logo img {\r\n    width: 120px;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n  list-style-type: none;\r\n  gap: 30px;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .nav-list {\r\n    gap: 15px;\r\n  }\r\n}\r\n\r\n.nav-list__item {\r\n  position: relative;\r\n  padding-bottom: 6px;\r\n  font-weight: 800;\r\n  font-size: 1.8rem;\r\n  line-height: 1.8rem;\r\n  letter-spacing: 1.275px;\r\n  color: #ffffff;\r\n  text-transform: uppercase;\r\n  border-bottom: solid 3px var(--color-gray-light);\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.nav-list__item.active {\r\n  border-bottom: solid 3px var(--color-main);\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-list__item.game-page-link.active {\r\n  pointer-events: auto;\r\n}\r\n\r\n.nav-list__item:hover {\r\n  color: #c7bcab;\r\n  border-bottom: solid 3px var(--color-main);\r\n}\r\n\r\n.nav-list__item:last-of-type {\r\n  border-bottom: none;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .nav-list__item {\r\n    font-size: 1.4rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  /* .nav {\r\n    display: none;\r\n  } */\r\n  .header_nav {\r\n    position: fixed;\r\n    flex-direction: column;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    width: 300px;\r\n    height: 100vh;\r\n    top: 0;\r\n    right: -300px;\r\n    padding-top: 80px;\r\n    padding-left: 130px;\r\n    transition: all 0.5s;\r\n    overflow-x: hidden;\r\n    z-index: 4;\r\n  }\r\n\r\n  .header_nav.open {\r\n    right: 0;\r\n    padding-left: 30px;\r\n  }\r\n\r\n  .nav-list {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .nav-list__item {\r\n    font-size: 2rem;\r\n    line-height: 1rem;\r\n    padding: 10px 0;\r\n  }\r\n}\r\n\r\n/* --------- sub-nav -------------*/\r\n\r\n.sub-nav {\r\n  z-index: 3;\r\n  position: absolute;\r\n  left: 20px;\r\n  bottom: 0;\r\n  width: max-content;\r\n  transform: translateY(50%) translateX(-36%) scaleY(0);\r\n  background-color: var(--color-main);\r\n  list-style-type: none;\r\n  transition: all 0.3s ease-out 0.2s;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .sub-nav.open {\r\n    transform: translateY(70%) translateX(30%) scaleY(100%);\r\n  }\r\n}\r\n\r\n.game-page-link:hover .sub-nav {\r\n  transform: translateY(100%) translateX(-36%) scaleY(100%);\r\n}\r\n\r\n.sub-nav__item {\r\n  padding: 10px;\r\n  min-width: max-content;\r\n  transition: all 0.3s;\r\n  color: #ffffff;\r\n}\r\n\r\n.sub-nav__item:first-of-type {\r\n  border-bottom: 1px solid #ffffff;\r\n}\r\n\r\n.sub-nav__item:hover {\r\n  background-color: var(--color-medium);\r\n}\r\n\r\n.sub-nav__item img {\r\n  display: inline;\r\n  height: 20px;\r\n  width: auto;\r\n  margin-right: 5px;\r\n  transform: translateY(16%);\r\n}\r\n\r\n/* -------------------------------*/\r\n\r\n.sign-in {\r\n  padding: 6px 30px;\r\n  background-color: var(--color-main);\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .sign-in {\r\n    padding: 6px 8px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .sign-in {\r\n    padding: 12px 44px;\r\n  }\r\n}\r\n\r\n.sign-in:hover {\r\n  border-radius: 8px;\r\n  color: #ffffff;\r\n}\r\n\r\n.sign-in:active {\r\n  scale: 96%;\r\n}\r\n\r\n.main_wrapper.all-done {\r\n  background-image: linear-gradient(180deg, rgba(236, 153, 14, 0.37) 0%, rgba(236, 153, 14, 0) 100%),\r\n    url(\"../assets/svg/flags.svg\");\r\n  background-repeat: no-repeat;\r\n  background-position: top center;\r\n  background-size: auto;\r\n}\r\n\r\n.game__buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 38px;\r\n  gap: 50px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .game__buttons {\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.game__buttons .btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 52px;\r\n  width: 276px;\r\n  padding: 8px 30px;\r\n  line-height: 3.7rem;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  user-select: none;\r\n}\r\n\r\n.game-icon {\r\n  height: 100%;\r\n  margin-right: 15px;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n}\r\n\r\n.footer_main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgba(43, 31, 31, 0.5);\r\n}\r\n\r\nfooter {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nfooter.secondary {\r\n  background-position: bottom;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\"../assets/img/bg_main.jpg\");\r\n}\r\n\r\n.footer__wrapper {\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .footer__wrapper {\r\n    min-height: 130px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    row-gap: 10px;\r\n    padding: 0 10px 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .footer__wrapper {\r\n    min-height: 170px;\r\n    padding: 10px 10px;\r\n    justify-content: space-around;\r\n    padding-bottom: 20px;\r\n  }\r\n}\r\n\r\n.rss {\r\n  width: 100px;\r\n  height: 40px;\r\n  background: no-repeat center url(\"../assets/svg/rs_school_js.svg\");\r\n  background-size: contain;\r\n  filter: invert(1);\r\n}\r\n\r\n.rs-logo {\r\n  width: 90px;\r\n  height: auto;\r\n}\r\n\r\n.gh_logo {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.footer__team {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 0;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .footer__team {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.team__list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  list-style-type: none;\r\n  color: #ffffff;\r\n  gap: 0;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .team__list {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.team__member a {\r\n  padding: 0 16px;\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  line-height: 2.8rem;\r\n  color: #ffffff;\r\n  border-right: solid 1px #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .team__member a {\r\n    padding: 0 10px;\r\n    font-size: 1.4rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .team__member a {\r\n    padding: 0 6px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .team__member a {\r\n    line-height: 2rem;\r\n    border-right: none;\r\n  }\r\n}\r\n\r\n.team__member a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.team__member:last-of-type a {\r\n  border-right: none;\r\n}\r\n\r\n.footer__year {\r\n  font-weight: 400;\r\n  font-size: 30px;\r\n  line-height: 0px;\r\n  color: #ffffff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/pagination.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/pagination.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".pagination {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  min-height: 40px;\r\n  margin: 55px auto 30px;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .pagination {\r\n    flex-wrap: wrap;\r\n    row-gap: 14px;\r\n  }\r\n}\r\n\r\n.pagination-element {\r\n  font-family: \"Arial\", sans-serif;\r\n  font-style: normal;\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n  padding: 3px 6px;\r\n  cursor: pointer;\r\n  font-size: 2.1rem;\r\n  font-weight: 400;\r\n  line-height: 2.5rem;\r\n  text-align: center;\r\n  color: var(--color-gray-light);\r\n  user-select: none;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pagination-element:hover {\r\n  color: #725747;\r\n}\r\n\r\n.pagination-element.active {\r\n  padding: 3px 10px;\r\n  font-weight: 700;\r\n  font-size: 3rem;\r\n  text-decoration-line: underline;\r\n  color: #725747;\r\n  pointer-events: none;\r\n  cursor: auto;\r\n}\r\n\r\n.pagination-element.done {\r\n  color: var(--color-main);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/pagination.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE;IACE,eAAe;IACf,aAAa;EACf;AACF;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,8BAA8B;EAC9B,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,+BAA+B;EAC/B,cAAc;EACd,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":[".pagination {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  min-height: 40px;\r\n  margin: 55px auto 30px;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .pagination {\r\n    flex-wrap: wrap;\r\n    row-gap: 14px;\r\n  }\r\n}\r\n\r\n.pagination-element {\r\n  font-family: \"Arial\", sans-serif;\r\n  font-style: normal;\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n  padding: 3px 6px;\r\n  cursor: pointer;\r\n  font-size: 2.1rem;\r\n  font-weight: 400;\r\n  line-height: 2.5rem;\r\n  text-align: center;\r\n  color: var(--color-gray-light);\r\n  user-select: none;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pagination-element:hover {\r\n  color: #725747;\r\n}\r\n\r\n.pagination-element.active {\r\n  padding: 3px 10px;\r\n  font-weight: 700;\r\n  font-size: 3rem;\r\n  text-decoration-line: underline;\r\n  color: #725747;\r\n  pointer-events: none;\r\n  cursor: auto;\r\n}\r\n\r\n.pagination-element.done {\r\n  color: var(--color-main);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/pages/games/audio-call-page/audio.css":
/*!***************************************************!*\
  !*** ./src/pages/games/audio-call-page/audio.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./audio.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/games/audio-call-page/audio.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/games/audio-call-page/modal.css":
/*!***************************************************!*\
  !*** ./src/pages/games/audio-call-page/modal.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/games/audio-call-page/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/games/sprint-page/sprint.css":
/*!************************************************!*\
  !*** ./src/pages/games/sprint-page/sprint.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sprint.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/games/sprint-page/sprint.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/stat-page/stat.css":
/*!**************************************!*\
  !*** ./src/pages/stat-page/stat.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stat_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./stat.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/stat-page/stat.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stat_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stat_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_stat_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_stat_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/authorisation.css":
/*!**************************************!*\
  !*** ./src/styles/authorisation.css ***!
  \**************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./authorisation.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/authorisation.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/burger.css":
/*!*******************************!*\
  !*** ./src/styles/burger.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./burger.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/burger.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/cards.css":
/*!******************************!*\
  !*** ./src/styles/cards.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cards.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/cards.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/level-buttons.css":
/*!**************************************!*\
  !*** ./src/styles/level-buttons.css ***!
  \**************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./level-buttons.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/level-buttons.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main-page.css":
/*!**********************************!*\
  !*** ./src/styles/main-page.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main-page.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main-page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/pagination.css":
/*!***********************************!*\
  !*** ./src/styles/pagination.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pagination.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/pagination.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/Api.ts":
/*!********************!*\
  !*** ./src/Api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Api {
    constructor() {
        this.baseUrl = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl;
        this.users = `${this.baseUrl}/users`;
        this.signIn = `${this.baseUrl}/signin`;
        this.words = `${this.baseUrl}/words`;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.users}`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response;
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.users}/${id}`, {
                method: 'GET',
            });
            return response;
        });
    }
    signInUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.signIn}`, {
                method: 'POST',
                body: JSON.stringify({ email: user.email, password: user.password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.users}/${id}`, {
                method: 'DELETE',
            });
            return response;
        });
    }
    getWords(group, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.words}?group=${group}&page=${page}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const cards = yield responce.json();
                return cards;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    getWordsForLevel(group) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.words}?group=${group}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const cards = yield responce.json();
                return cards;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    getOneWord(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.words}/${id}`);
                const card = yield responce.json();
                return card;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    getUserWords(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.baseUrl}/users/${id}/words`, {
                    method: 'GET',
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                const userword = yield responce.json();
                return userword;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    createUserWord(id, token, userWord) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.baseUrl}/users/${id}/words/${userWord.word.id}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        difficulty: userWord.difficulty,
                        optional: {
                            progress: userWord.optional.progress,
                            successfulAttempts: userWord.optional.successfulAttempts,
                            unsuccessfulAttempts: userWord.optional.unsuccessfulAttempts,
                            wasLearned: userWord.optional.wasLearned,
                        },
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                });
                const createdUserword = yield responce.json();
                return createdUserword;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    updateUserWord(id, token, userWord) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.baseUrl}/users/${id}/words/${userWord.word.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        difficulty: userWord.difficulty,
                        optional: {
                            progress: userWord.optional.progress,
                            successfulAttempts: userWord.optional.successfulAttempts,
                            unsuccessfulAttempts: userWord.optional.unsuccessfulAttempts,
                            wasLearned: userWord.optional.wasLearned,
                        },
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                });
                const updatedUserWord = yield responce.json();
                return updatedUserWord;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    getUserWordsAllHard(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.baseUrl}/users/${id}/aggregatedWords?wordsPerPage=600&filter={"userWord.difficulty":"hard"}`, {
                    method: 'GET',
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                const respArr = yield responce.json();
                return respArr[0].paginatedResults;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    getUserWordsAgregatedByFilter(id, token, wordsPerPage, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.baseUrl}/users/${id}/aggregatedWords?wordsPerPage=${wordsPerPage}&filter=${filter}`, {
                    method: 'GET',
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                const userword = yield responce.json();
                return userword[0].paginatedResults;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    getUserStat(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.baseUrl}/users/${id}/statistics`, {
                    method: 'GET',
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                const userstat = yield responce.json();
                return userstat;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    updateUserStat(id, token, stat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.baseUrl}/users/${id}/statistics`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        learnedWords: stat.learnedWords,
                        optional: {
                            value: JSON.stringify(stat.optional),
                        },
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                });
                const createdUserword = yield responce.json();
                return createdUserword;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_main_page_main_page_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main-page/main-page-controller */ "./src/pages/main-page/main-page-controller.ts");
/* harmony import */ var _pages_auth_page_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/auth-page/auth-controller */ "./src/pages/auth-page/auth-controller.ts");
/* harmony import */ var _pages_registration_page_registration_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/registration-page/registration-controller */ "./src/pages/registration-page/registration-controller.ts");
/* harmony import */ var _pages_book_page_book_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/book-page/book-controller */ "./src/pages/book-page/book-controller.ts");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/functions */ "./src/functions/functions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _pages_games_sprint_page_sprint_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/games/sprint-page/sprint-controller */ "./src/pages/games/sprint-page/sprint-controller.ts");
/* harmony import */ var _pages_stat_page_stat_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/stat-page/stat-controller */ "./src/pages/stat-page/stat-controller.ts");
/* harmony import */ var _pages_games_audio_call_page_audio_call_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/games/audio-call-page/audio-call-controller */ "./src/pages/games/audio-call-page/audio-call-controller.ts");
/* eslint-disable import/no-cycle */

// import AudioController from './pages/games/audio-call-page/audio-call-controller';








class App {
    static setController(controller) {
        App.controller = controller;
        App.main = document.querySelector('.main');
        if (App.main) {
            App.main.innerHTML = '';
            App.main.appendChild(App.controller.pageView.view);
        }
    }
    /* eslint-disable class-methods-use-this */
    start() {
        this.addEventListeners();
        window.onbeforeunload = () => {
            const { pageName } = App.pageInfo;
            if (pageName !== 'bookPage') {
                (0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.saveDataToLocalStorage)('pageInfo', JSON.stringify(App.pageInfo));
            }
        };
    }
    /* eslint-disable no-alert */
    static signIn(data) {
        if (typeof data === 'object') {
            const userData = data;
            this.user = userData;
            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.saveDataToLocalStorage)('rs-lang-user', JSON.stringify(userData));
            App.renderMainPage();
            const signInButton = document.querySelector('.sign-in-page-link');
            signInButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_5__.logOutText;
            signInButton.removeEventListener('click', App.renderAuthPage);
            signInButton.addEventListener('click', App.logOut);
            return;
        }
        // заменить алерт на что-то человеческое
        alert(data);
    }
    static logOut() {
        const signInButton = document.querySelector('.sign-in-page-link');
        signInButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_5__.signInButtonText;
        signInButton.removeEventListener('click', App.logOut);
        signInButton.addEventListener('click', App.renderAuthPage);
        this.user = undefined;
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.removeDataFromLocalStorage)('rs-lang-user');
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.removeDataFromLocalStorage)('aggregatedNumber');
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.removeDataFromLocalStorage)('pageInfo');
        App.makeMainTransparentAgain();
    }
    static changeActiveClassForNavItemByEvent(e) {
        App.changeActiveClassForNavItemByElement(e.target);
    }
    static changeActiveClassForNavItemByElement(elem) {
        const menuItems = document.querySelectorAll('.nav-list__item');
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });
        elem === null || elem === void 0 ? void 0 : elem.classList.add('active');
    }
    static renderMainPage() {
        const controller = new _pages_main_page_main_page_controller__WEBPACK_IMPORTED_MODULE_0__["default"]();
        App.setController(controller);
        App.pageInfo = { pageName: 'mainPage' };
        App.makeMainTransparentAgain();
        const mainButton = document.querySelector('.main-page-link');
        App.changeActiveClassForNavItemByElement(mainButton);
    }
    static renderBookPage() {
        const controller = new _pages_book_page_book_controller__WEBPACK_IMPORTED_MODULE_3__["default"]();
        App.setController(controller);
        const mainButton = document.querySelector('.book-page-link');
        App.changeActiveClassForNavItemByElement(mainButton);
        App.pageInfo = { pageName: 'bookPage' };
        const aggregatedNumber = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.getAggregatedNumberFromLS)();
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.setBackgroundForBookPage)(aggregatedNumber);
    }
    static renderAudiocallPage(words) {
        const controller = new _pages_games_audio_call_page_audio_call_controller__WEBPACK_IMPORTED_MODULE_8__["default"](words);
        App.setController(controller);
        const mainButton = document.querySelector('.game-page-link');
        App.changeActiveClassForNavItemByElement(mainButton);
        App.makeMainTransparentAgain();
        App.pageInfo = { pageName: 'audiocallPage' };
    }
    static renderSprintPage(words) {
        const controller = new _pages_games_sprint_page_sprint_controller__WEBPACK_IMPORTED_MODULE_6__["default"](words);
        App.setController(controller);
        const mainButton = document.querySelector('.game-page-link');
        App.changeActiveClassForNavItemByElement(mainButton);
        App.makeMainTransparentAgain();
        App.pageInfo = { pageName: 'sprintPage' };
    }
    static renderAuthPage() {
        const controller = new _pages_auth_page_auth_controller__WEBPACK_IMPORTED_MODULE_1__["default"]();
        App.setController(controller);
        const mainButton = document.querySelector('.sign-in-page-link');
        App.changeActiveClassForNavItemByElement(mainButton);
        App.makeMainTransparentAgain();
        App.pageInfo = { pageName: 'authPage' };
    }
    static renderStatPage() {
        const controller = new _pages_stat_page_stat_controller__WEBPACK_IMPORTED_MODULE_7__["default"]();
        App.setController(controller);
        const mainButton = document.querySelector('.stat-page-link');
        App.changeActiveClassForNavItemByElement(mainButton);
        App.makeMainTransparentAgain();
        App.pageInfo = { pageName: 'statPage' };
    }
    static renderRegPage() {
        const controller = new _pages_registration_page_registration_controller__WEBPACK_IMPORTED_MODULE_2__["default"]();
        App.setController(controller);
    }
    static makeMainTransparentAgain() {
        const mainWrapper = document.querySelector('.main_wrapper');
        mainWrapper.classList.remove('all-done');
        mainWrapper.style.backgroundColor = 'transparent';
    }
    addEventListeners() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        window.addEventListener('load', () => {
            if ((0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.getDataFromLocalStorage)('rs-lang-user')) {
                const user = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.getDataFromLocalStorage)('rs-lang-user');
                App.signIn(user);
            }
            if ((0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.getDataFromLocalStorage)('pageInfo')) {
                this.renderPageAfterReload();
            }
        });
        (_a = document.querySelector('.header__logo')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', App.renderMainPage);
        (_b = document.querySelector('.main-page-link')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', App.renderMainPage);
        (_c = document.querySelector('.book-page-link')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', App.renderBookPage);
        (_d = document
            .querySelector('.sprint-page-link')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => App.renderSprintPage());
        (_e = document.querySelector('.book-page-link')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', (e) => {
            const controller = new _pages_book_page_book_controller__WEBPACK_IMPORTED_MODULE_3__["default"]();
            App.setController(controller);
            App.changeActiveClassForNavItemByEvent(e);
        });
        (_f = document.querySelector('.sign-in-page-link')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', App.renderAuthPage);
        (_g = document.querySelector('.stat-page-link')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', App.renderStatPage);
        (_h = document
            .querySelector('.audio-page-link')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', () => App.renderAudiocallPage());
        (_j = document.querySelector('.sign-up-page-link')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', App.renderRegPage);
        (_k = document.querySelector('.burger')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', _functions_functions__WEBPACK_IMPORTED_MODULE_4__.burgerMenuHandle);
        (_l = document.querySelector('.nav-list')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', _functions_functions__WEBPACK_IMPORTED_MODULE_4__.clickMenuHandle);
    }
    renderPageAfterReload() {
        const pageInfo = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_4__.getDataFromLocalStorage)('pageInfo');
        const { pageName } = pageInfo;
        switch (pageName) {
            case 'mainPage':
                App.renderMainPage();
                break;
            case 'bookPage':
                App.renderBookPage();
                break;
            case 'audiocallPage':
                App.renderAudiocallPage();
                break;
            case 'statPage':
                App.renderStatPage();
                break;
            case 'sprintPage':
                App.renderSprintPage();
                break;
            case 'authPage':
                App.renderAuthPage();
                break;
            default:
                App.renderMainPage();
                break;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/functions/functions.ts":
/*!************************************!*\
  !*** ./src/functions/functions.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenuHandle": () => (/* binding */ burgerMenuHandle),
/* harmony export */   "clickMenuHandle": () => (/* binding */ clickMenuHandle),
/* harmony export */   "disableAudioBtns": () => (/* binding */ disableAudioBtns),
/* harmony export */   "enableAudioBtns": () => (/* binding */ enableAudioBtns),
/* harmony export */   "getAggregatedNumberFromLS": () => (/* binding */ getAggregatedNumberFromLS),
/* harmony export */   "getDataFromLocalStorage": () => (/* binding */ getDataFromLocalStorage),
/* harmony export */   "isValidEmail": () => (/* binding */ isValidEmail),
/* harmony export */   "isValidPassword": () => (/* binding */ isValidPassword),
/* harmony export */   "removeDataFromLocalStorage": () => (/* binding */ removeDataFromLocalStorage),
/* harmony export */   "saveDataToLocalStorage": () => (/* binding */ saveDataToLocalStorage),
/* harmony export */   "setBackgroundForBookPage": () => (/* binding */ setBackgroundForBookPage)
/* harmony export */ });
/* eslint-disable no-useless-escape */
function isValidEmail(email) {
    return !!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g); // validation for email
}
function isValidPassword(password) {
    return !!password.match(/^[A-Za-z\d]{8,}$/g); // minimum eight characters, letters, numbers or mix
}
function saveDataToLocalStorage(name, data) {
    localStorage.setItem(name, data);
}
function getDataFromLocalStorage(name) {
    return localStorage.getItem(name) !== null ? JSON.parse(localStorage.getItem(name) || '') : null;
}
function removeDataFromLocalStorage(name) {
    localStorage.removeItem(name);
}
function disableAudioBtns() {
    const audioBtns = document.querySelectorAll('.audio-icon');
    audioBtns.forEach((btn) => {
        btn.classList.add('disabled');
    });
}
function enableAudioBtns() {
    const audioBtns = document.querySelectorAll('.audio-icon');
    audioBtns.forEach((btn) => {
        btn.classList.remove('disabled');
    });
}
function burgerMenuHandle() {
    var _a, _b, _c, _d;
    (_a = document.querySelector('.burger')) === null || _a === void 0 ? void 0 : _a.classList.toggle('open');
    (_b = document.querySelector('.header_nav')) === null || _b === void 0 ? void 0 : _b.classList.toggle('open');
    (_c = document.querySelector('.sub-nav')) === null || _c === void 0 ? void 0 : _c.classList.remove('open');
    (_d = document.querySelector('body')) === null || _d === void 0 ? void 0 : _d.classList.toggle('not-scroll');
}
function clickMenuHandle(e) {
    var _a, _b, _c, _d, _e;
    if (e.target === document.querySelector('.game-page-link')) {
        (_a = document.querySelector('.sub-nav')) === null || _a === void 0 ? void 0 : _a.classList.toggle('open');
    }
    else {
        (_b = document.querySelector('.burger')) === null || _b === void 0 ? void 0 : _b.classList.remove('open');
        (_c = document.querySelector('.header_nav')) === null || _c === void 0 ? void 0 : _c.classList.remove('open');
        (_d = document.querySelector('.sub-nav')) === null || _d === void 0 ? void 0 : _d.classList.remove('open');
        (_e = document.querySelector('body')) === null || _e === void 0 ? void 0 : _e.classList.remove('not-scroll');
    }
}
function getAggregatedNumberFromLS() {
    let aggregatedNumber;
    if (getDataFromLocalStorage('aggregatedNumber')) {
        aggregatedNumber = getDataFromLocalStorage('aggregatedNumber');
    }
    else {
        aggregatedNumber = 0;
    }
    return aggregatedNumber;
}
function setBackgroundForBookPage(aggregatedNumber) {
    const mainWrapper = document.querySelector('.main_wrapper');
    if (aggregatedNumber === 20) {
        mainWrapper.classList.add('all-done');
    }
    else {
        mainWrapper.classList.remove('all-done');
    }
}
/* prettier-ignore */



/***/ }),

/***/ "./src/pages/application-controller.ts":
/*!*********************************************!*\
  !*** ./src/pages/application-controller.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApplicationContoller {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationContoller);


/***/ }),

/***/ "./src/pages/application-view.ts":
/*!***************************************!*\
  !*** ./src/pages/application-view.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApplicationView {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationView);


/***/ }),

/***/ "./src/pages/auth-page/auth-controller.ts":
/*!************************************************!*\
  !*** ./src/pages/auth-page/auth-controller.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auth_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-view */ "./src/pages/auth-page/auth-view.ts");
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-model */ "./src/pages/auth-page/auth-model.ts");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/no-cycle */




class AuthController extends _application_controller__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        this.setView();
    }
    setView() {
        this.authModel = new _auth_model__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.pageView = new _auth_view__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.addListeners();
    }
    /* eslint-disable no-alert */
    signInUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.authModel
                .signInUser(user)
                .then((result) => {
                if (result.ok) {
                    return result.json();
                }
                return `${result.status} ${result.statusText}`;
            })
                .then((data) => _App__WEBPACK_IMPORTED_MODULE_3__["default"].signIn(data));
        });
    }
    addListeners() {
        var _a;
        (_a = this.pageView.view
            .querySelector('.sign-in-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            var _b, _c;
            const email = ((_b = document.querySelector('.email-input')) === null || _b === void 0 ? void 0 : _b.value) || '';
            const password = ((_c = document.querySelector('.password-input')) === null || _c === void 0 ? void 0 : _c.value) || '';
            const user = { email, password };
            yield this.signInUser(user);
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthController);


/***/ }),

/***/ "./src/pages/auth-page/auth-model.ts":
/*!*******************************************!*\
  !*** ./src/pages/auth-page/auth-model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
/* eslint-disable import/no-cycle */

class AuthModel extends _Api__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthModel);


/***/ }),

/***/ "./src/pages/auth-page/auth-view.ts":
/*!******************************************!*\
  !*** ./src/pages/auth-page/auth-view.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
/* harmony import */ var _styles_authorisation_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/authorisation.css */ "./src/styles/authorisation.css");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application-view */ "./src/pages/application-view.ts");
/* eslint-disable import/no-cycle */




class AuthView extends _application_view__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super();
        this.renderAuthBlock();
    }
    renderAuthBlock() {
        this.view = document.createElement('div');
        this.view.classList.add('authorisation');
        const title = document.createElement('p');
        title.classList.add('auth-title');
        title.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.signInTitle;
        const emailInput = document.createElement('input');
        emailInput.classList.add('email-input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.email);
        emailInput.setAttribute('autocomplete', 'on');
        const passwordInput = document.createElement('input');
        passwordInput.classList.add('password-input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.password);
        passwordInput.setAttribute('autocomplete', 'on');
        const signInButton = document.createElement('button');
        signInButton.classList.add('sign-in-button');
        signInButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.upperSignInButtonText;
        const haveNotYetAccount = document.createElement('div');
        haveNotYetAccount.classList.add('have-not-yet-account');
        const haveNotYetAccountSpan = document.createElement('span');
        haveNotYetAccountSpan.classList.add('have-not-yet-account-span');
        haveNotYetAccountSpan.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.haveNotYetAccountText;
        const haveNotYetAccountButton = document.createElement('button');
        haveNotYetAccountButton.classList.add('have-not-yet-account-button');
        haveNotYetAccountButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.signUpButtonText;
        haveNotYetAccountButton.addEventListener('click', _App__WEBPACK_IMPORTED_MODULE_0__["default"].renderRegPage);
        haveNotYetAccount.append(haveNotYetAccountSpan, haveNotYetAccountButton);
        this.view.append(title, emailInput, passwordInput, signInButton, haveNotYetAccount);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthView);


/***/ }),

/***/ "./src/pages/book-page/book-controller.ts":
/*!************************************************!*\
  !*** ./src/pages/book-page/book-controller.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_cards_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/cards.css */ "./src/styles/cards.css");
/* harmony import */ var _styles_level_buttons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/level-buttons.css */ "./src/styles/level-buttons.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_pagination_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pagination.css */ "./src/styles/pagination.css");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _book_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-view */ "./src/pages/book-page/book-view.ts");
/* harmony import */ var _card_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-view */ "./src/pages/book-page/card-view.ts");
/* harmony import */ var _book_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-model */ "./src/pages/book-page/book-model.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../functions/functions */ "./src/functions/functions.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/no-cycle */




/* eslint-disable import/no-cycle */







class BookController extends _application_controller__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor() {
        super();
        this.pageView = new _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView(this.aggregatedNumber);
        this.bookModel = new _book_model__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.currentLevel = 0;
        this.currentPage = 0;
        if ((0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.getDataFromLocalStorage)('pageInfo')) {
            this.getPageInfoFromLocalStorage();
        }
        this.setBackgroundByAggregatedNumber(this.currentLevel, this.currentPage);
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.saveDataToLocalStorage)('pageInfo', JSON.stringify({
            pageName: 'bookPage',
            level: this.currentLevel,
            pageNumber: this.currentPage,
        }));
        this.setView();
    }
    setBackgroundByAggregatedNumber(currentLevel, currentPage) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_App__WEBPACK_IMPORTED_MODULE_8__["default"].user) {
                const responce = yield this.bookModel.getUserWordsAgregatedByFilter(_App__WEBPACK_IMPORTED_MODULE_8__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_8__["default"].user.token, 1000, `{"$and":[{"group":${currentLevel}},{"page":${currentPage}},{"$or":[{"userWord.difficulty":"hard"},{"userWord.optional.progress":100}]}]}`);
                this.aggregatedNumber = responce.length;
                (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.setBackgroundForBookPage)(this.aggregatedNumber);
                (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.saveDataToLocalStorage)('aggregatedNumber', JSON.stringify(this.aggregatedNumber));
            }
            return this.aggregatedNumber;
        });
    }
    setView() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pageView = new _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView(this.aggregatedNumber);
            this.view = this.pageView.view;
            this.levels = this.pageView.levels;
            this.cardsList = this.pageView.cardsList;
            this.pagination = this.pageView.pagination;
            this.gameButtons = this.pageView.gameButtons;
            this.renderLevelsBtns();
            if (_App__WEBPACK_IMPORTED_MODULE_8__["default"].user && this.currentLevel === 6) {
                const allHardWords = yield this.bookModel.getUserWordsAllHard(_App__WEBPACK_IMPORTED_MODULE_8__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_8__["default"].user.token);
                this.renderHardCards(allHardWords);
            }
            else {
                this.renderCards(this.currentLevel, this.currentPage);
            }
            this.renderGameButtons();
            if (this.currentLevel !== 6) {
                this.renderPaginationBlock(this.currentLevel);
            }
        });
    }
    renderCards(group, page) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.cardsList.innerHTML = '';
            const words = yield this.bookModel.getWords(group, page);
            let usersWords = new Array();
            if (_App__WEBPACK_IMPORTED_MODULE_8__["default"].user) {
                usersWords = yield this.bookModel.getUserWords((_a = _App__WEBPACK_IMPORTED_MODULE_8__["default"].user) === null || _a === void 0 ? void 0 : _a.userId, (_b = _App__WEBPACK_IMPORTED_MODULE_8__["default"].user) === null || _b === void 0 ? void 0 : _b.token);
            }
            words.forEach((wordInfo) => {
                const card = new _card_view__WEBPACK_IMPORTED_MODULE_6__["default"](wordInfo, usersWords);
                this.cardsList.append(card.view);
                card.view.addEventListener('click', BookController.setEventListenersForCard);
            });
        });
    }
    renderHardCards(allHardWords) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.cardsList.innerHTML = '';
            let usersWords = new Array();
            if (_App__WEBPACK_IMPORTED_MODULE_8__["default"].user) {
                usersWords = yield this.bookModel.getUserWords((_a = _App__WEBPACK_IMPORTED_MODULE_8__["default"].user) === null || _a === void 0 ? void 0 : _a.userId, (_b = _App__WEBPACK_IMPORTED_MODULE_8__["default"].user) === null || _b === void 0 ? void 0 : _b.token);
                allHardWords.forEach((word) => {
                    const card = new _card_view__WEBPACK_IMPORTED_MODULE_6__["default"](word, usersWords);
                    this.cardsList.append(card.view);
                    card.view.addEventListener('click', BookController.setEventListenersForCard);
                });
            }
        });
    }
    renderLevelsBtns() {
        for (let i = 0; i < _utils_constants__WEBPACK_IMPORTED_MODULE_9__.numberOfLevels; i += 1) {
            const btn = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('div', 'level');
            btn.classList.add(`level-${i}`);
            btn.dataset.level = `${i}`;
            if (i === this.currentLevel) {
                btn.classList.add('active');
            }
            if (i === _utils_constants__WEBPACK_IMPORTED_MODULE_9__.numberOfLevels - 1) {
                btn.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_9__.btnHardText;
                if (!_App__WEBPACK_IMPORTED_MODULE_8__["default"].user) {
                    btn.style.display = 'none';
                }
            }
            else {
                btn.innerHTML = _utils_constants__WEBPACK_IMPORTED_MODULE_9__.btnLevelText;
                const levelNumber = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('span', 'level_number');
                levelNumber.innerHTML = `&nbsp${i + 1}`;
                btn.append(levelNumber);
            }
            btn.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () { return this.levelBtnHandler(e); }));
            this.levels.append(btn);
        }
    }
    levelBtnHandler(e) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (e.target) {
                const levelButtons = document.querySelectorAll('.level');
                levelButtons.forEach((button) => {
                    button.classList.remove('active');
                });
                e.target.classList.add('active');
                const group = Number(e.target.dataset.level);
                this.currentLevel = group;
                this.currentPage = 0;
                this.cardsList.innerHTML = '';
                this.pagination.innerHTML = '';
                if (_App__WEBPACK_IMPORTED_MODULE_8__["default"].user && group === 6) {
                    const allHardWords = yield this.bookModel.getUserWordsAllHard((_a = _App__WEBPACK_IMPORTED_MODULE_8__["default"].user) === null || _a === void 0 ? void 0 : _a.userId, (_b = _App__WEBPACK_IMPORTED_MODULE_8__["default"].user) === null || _b === void 0 ? void 0 : _b.token);
                    this.renderHardCards(allHardWords);
                }
                else {
                    this.renderCards(group, this.currentPage);
                    this.renderPaginationBlock(group);
                }
                this.setBackgroundByAggregatedNumber(group, 0);
                (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.saveDataToLocalStorage)('aggregatedNumber', JSON.stringify(this.aggregatedNumber));
            }
            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.saveDataToLocalStorage)('pageInfo', JSON.stringify({
                pageName: 'bookPage',
                level: this.currentLevel,
                pageNumber: this.currentPage,
            }));
        });
    }
    static setEventListenersForCard(e) {
        var _a;
        const eTargetClassList = e.target.classList;
        if (eTargetClassList.contains('audio-icon')) {
            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.disableAudioBtns)();
            const cardId = (_a = e.target.closest('.card')) === null || _a === void 0 ? void 0 : _a.id;
            if (cardId) {
                BookController.playAudio(cardId);
            }
        }
    }
    static playAudio(cardId) {
        var _a;
        const tracks = (_a = document.getElementById(`${cardId}`)) === null || _a === void 0 ? void 0 : _a.querySelectorAll('audio');
        if (tracks) {
            try {
                tracks[0].play();
                for (let i = 0; i < tracks.length; i += 1) {
                    if (i === tracks.length - 1) {
                        tracks[tracks.length - 1].onended = () => {
                            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.enableAudioBtns)();
                        };
                        break;
                    }
                    else {
                        tracks[i].onended = () => {
                            tracks[i + 1].play();
                        };
                    }
                }
            }
            catch (_b) {
                throw Error('Воспроизведение отклонено.');
            }
        }
    }
    renderPaginationBlock(group) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrOfDonePages = yield this.makeArrOfDonePages(group);
            this.pagination.innerHTML = '';
            for (let i = 0; i < _utils_constants__WEBPACK_IMPORTED_MODULE_9__.numberOfPagesInLevel; i += 1) {
                const page = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('p', 'pagination-element');
                if (i === this.currentPage) {
                    page.classList.add('active');
                }
                if (arrOfDonePages.includes(i)) {
                    page.classList.add('done');
                }
                page.innerText = `${i + 1}`;
                page.addEventListener('click', (e) => this.pageBtnHandler(e, group, i));
                this.pagination.append(page);
            }
        });
    }
    pageBtnHandler(e, group, page) {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentPage = page;
            this.renderCards(group, page);
            const pageItems = document.querySelectorAll('.pagination-element');
            pageItems.forEach((item) => {
                item.classList.remove('active');
            });
            e.target.classList.add('active');
            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.saveDataToLocalStorage)('pageInfo', JSON.stringify({
                pageName: 'bookPage',
                level: this.currentLevel,
                pageNumber: this.currentPage,
            }));
            this.aggregatedNumber = yield this.setBackgroundByAggregatedNumber(group, page);
            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.setBackgroundForBookPage)(this.aggregatedNumber);
            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.saveDataToLocalStorage)('aggregatedNumber', JSON.stringify(this.aggregatedNumber));
        });
    }
    renderGameButtons() {
        const sprintGameLink = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('div', 'btn');
        sprintGameLink.classList.add('btn_colored');
        sprintGameLink.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_9__.sprintGameName;
        const iconSprint = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('img', 'game-icon');
        iconSprint.setAttribute('src', _utils_constants__WEBPACK_IMPORTED_MODULE_9__.iconSprintSrc);
        sprintGameLink.prepend(iconSprint);
        sprintGameLink.addEventListener('click', () => _App__WEBPACK_IMPORTED_MODULE_8__["default"].renderSprintPage()); // сюда надо подставитьсписок слов со страницы (Влад)
        const audioGameLink = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('div', 'btn');
        audioGameLink.classList.add('btn_colored');
        audioGameLink.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_9__.audioGameName;
        const iconAudioGame = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('img', 'game-icon');
        iconAudioGame.setAttribute('src', _utils_constants__WEBPACK_IMPORTED_MODULE_9__.iconAudioGameSrc);
        audioGameLink.prepend(iconAudioGame);
        audioGameLink.addEventListener('click', () => _App__WEBPACK_IMPORTED_MODULE_8__["default"].renderAudiocallPage()); // сюда надо подставитьсписок слов со страницы (Влад)
        this.gameButtons.append(audioGameLink, sprintGameLink);
    }
    getPageInfoFromLocalStorage() {
        const pageInfo = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_10__.getDataFromLocalStorage)('pageInfo');
        const { level, pageNumber } = pageInfo;
        if (typeof level === 'number' && typeof pageNumber === 'number') {
            this.currentLevel = level;
            this.currentPage = pageNumber;
        }
    }
    makeArrOfDonePages(currentLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrOfDonePages = [];
            if (_App__WEBPACK_IMPORTED_MODULE_8__["default"].user) {
                const aggregatedWordsAll = yield this.bookModel.getUserWordsAgregatedByFilter(_App__WEBPACK_IMPORTED_MODULE_8__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_8__["default"].user.token, 1000, `{"$and":[{"group":${currentLevel}},{"$or":[{"userWord.difficulty":"hard"},{"userWord.optional.progress":100}]}]}`);
                for (let i = 0; i < _utils_constants__WEBPACK_IMPORTED_MODULE_9__.numberOfPagesInLevel; i += 1) {
                    const numOfWords = aggregatedWordsAll.filter((word) => word.page === i).length;
                    if (numOfWords === _utils_constants__WEBPACK_IMPORTED_MODULE_9__.numberOfCardsPerPage) {
                        arrOfDonePages.push(i);
                    }
                }
            }
            return arrOfDonePages;
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookController);


/***/ }),

/***/ "./src/pages/book-page/book-model.ts":
/*!*******************************************!*\
  !*** ./src/pages/book-page/book-model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
/* eslint-disable import/no-cycle */

class BookModel extends _Api__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookModel);


/***/ }),

/***/ "./src/pages/book-page/book-view.ts":
/*!******************************************!*\
  !*** ./src/pages/book-page/book-view.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookPageView": () => (/* binding */ BookPageView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-view */ "./src/pages/application-view.ts");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/functions */ "./src/functions/functions.ts");


class BookPageView extends _application_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(aggregatedNumber) {
        super();
        this.view = document.createElement('div');
        this.levels = BookPageView.createElementByParams('div', 'levels');
        this.cardsList = BookPageView.createElementByParams('div', 'cards_list');
        this.pagination = BookPageView.createElementByParams('div', 'pagination');
        this.gameButtons = BookPageView.createElementByParams('div', 'game__buttons');
        this.view.append(this.levels, this.cardsList, this.pagination, this.gameButtons);
        this.body = document.querySelector('body');
        this.main = document.querySelector('.main');
        this.mainWrapper = document.querySelector('.main_wrapper');
        this.mainWrapper.style.backgroundColor = '#ffffff';
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_1__.setBackgroundForBookPage)(aggregatedNumber);
        this.footer = document.querySelector('footer');
        this.footer.classList.add('secondary');
    }
    static createElementByParams(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookPageView);


/***/ }),

/***/ "./src/pages/book-page/card-view.ts":
/*!******************************************!*\
  !*** ./src/pages/book-page/card-view.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_userword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/userword */ "./src/types/userword.ts");
/* harmony import */ var _types_Statistic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/Statistic */ "./src/types/Statistic.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/functions */ "./src/functions/functions.ts");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






// import BookController from './book-controller';
class CardView {
    constructor(wordInfo, userWords) {
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.baseUrl = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.baseUrl;
        this.view = document.createElement('div');
        /* eslint-disable no-underscore-dangle */
        this.view.classList.add('card');
        this.view.id = wordInfo._id || wordInfo.id;
        if (userWords) {
            this.userWords = userWords;
        }
        this.createCard(wordInfo);
    }
    createCard(wordInfo, userWordInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const wordImg = document.createElement('img');
            wordImg.setAttribute('src', `${this.baseUrl}/${wordInfo.image}`);
            wordImg.setAttribute('alt', 'card photo');
            wordImg.classList.add('card__img');
            const statFrame = document.createElement('div');
            statFrame.classList.add('card__stat');
            let userWord;
            if (userWordInfo) {
                userWord = userWordInfo;
            }
            else {
                userWord = this.getOneUserWord(this.userWords);
                if (userWord) {
                    statFrame.innerHTML = `<span>${userWord.optional.successfulAttempts}</span> | ${userWord.optional.unsuccessfulAttempts}`;
                    if (userWord.difficulty === 'hard' && userWord.optional.progress !== 100) {
                        this.view.classList.add('hard');
                    }
                    if (userWord.optional.progress === 100) {
                        this.view.classList.add('done');
                    }
                }
                else {
                    statFrame.innerHTML = '<span>0</span> | 0';
                }
            }
            const cardText = document.createElement('div');
            cardText.classList.add('card__text');
            const wordBlock = this.createWordBlock(wordInfo);
            const cardButtons = this.createCardButtons();
            const progressBar = yield this.createWordProgressBar();
            if (!_App__WEBPACK_IMPORTED_MODULE_5__["default"].user) {
                progressBar.style.display = 'none';
                statFrame.style.display = 'none';
                cardButtons.style.display = 'none';
            }
            const phrasesBlock = this.createPhrasesBlock(wordInfo);
            cardText.append(wordBlock, cardButtons, phrasesBlock);
            this.view.append(wordImg, statFrame, progressBar, cardText);
        });
    }
    createWordBlock(wordInfo) {
        const wordBlock = document.createElement('div');
        wordBlock.classList.add('word');
        const wordText = document.createElement('p');
        const word = document.createElement('span');
        word.classList.add('word__english');
        word.innerText = `${wordInfo.word} `;
        const wordTranscription = document.createElement('span');
        wordTranscription.classList.add('word__transcription');
        wordTranscription.innerText = wordInfo.transcription;
        const breakItem = document.createElement('br');
        const wordTranslation = document.createElement('span');
        wordTranslation.innerText = wordInfo.wordTranslate;
        wordTranslation.classList.add('word__translation');
        wordText.append(word, wordTranscription, breakItem, wordTranslation);
        const audioIcon = this.createAudioBlock(wordInfo);
        wordBlock.append(wordText, audioIcon);
        return wordBlock;
    }
    /* eslint-disable class-methods-use-this */
    createWordProgressBar() {
        return __awaiter(this, void 0, void 0, function* () {
            const progressBar = document.createElement('div');
            progressBar.className = 'card__progress-bar';
            progressBar.id = 'card__progress-bar';
            const innerdiv = document.createElement('div');
            innerdiv.className = 'progress-loading';
            const userWord = this.getOneUserWord(this.userWords);
            if (userWord) {
                innerdiv.style.width = `${userWord.optional.progress}%`;
            }
            progressBar.appendChild(innerdiv);
            return progressBar;
        });
    }
    /* eslint-disable class-methods-use-this */
    createCardButtons() {
        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card__buttons');
        const hardButton = document.createElement('button');
        hardButton.classList.add('btn', 'card__btn', 'hard__btn');
        hardButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.hardButtonText;
        hardButton.addEventListener('click', (e) => {
            this.hardBtnHandler(e);
        });
        const doneButton = document.createElement('button');
        doneButton.classList.add('btn', 'card__btn', 'done__btn');
        doneButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.doneButtonText;
        doneButton.addEventListener('click', (e) => {
            this.doneBtnHandler(e);
        });
        cardButtons.append(hardButton, doneButton);
        return cardButtons;
    }
    // eslint-disable-next-line max-lines-per-function
    hardBtnHandler(e) {
        return __awaiter(this, void 0, void 0, function* () {
            if (e) {
                const card = e.target.closest('.card');
                const cardId = card === null || card === void 0 ? void 0 : card.id;
                const pageElement = document.querySelector('.pagination-element.active');
                let aggregatedNumber = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_3__.getAggregatedNumberFromLS)();
                if (card === null || card === void 0 ? void 0 : card.classList.contains('hard')) {
                    aggregatedNumber -= 1;
                    card === null || card === void 0 ? void 0 : card.classList.remove('hard');
                    this.updateUserWordInfo(cardId, 'no-hard', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForNoDoneWord);
                }
                else if (card === null || card === void 0 ? void 0 : card.classList.contains('done')) {
                    card === null || card === void 0 ? void 0 : card.classList.remove('done');
                    card === null || card === void 0 ? void 0 : card.classList.add('hard');
                    this.updateProgressBar(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForNoDoneWord);
                    this.updateUserWordInfo(cardId, 'hard', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForNoDoneWord);
                }
                else {
                    aggregatedNumber += 1;
                    card === null || card === void 0 ? void 0 : card.classList.add('hard');
                    this.updateUserWordInfo(cardId, 'hard', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForNoDoneWord);
                }
                if (aggregatedNumber === _utils_constants__WEBPACK_IMPORTED_MODULE_2__.numberOfCardsPerPage) {
                    pageElement === null || pageElement === void 0 ? void 0 : pageElement.classList.add('done');
                }
                else {
                    pageElement === null || pageElement === void 0 ? void 0 : pageElement.classList.remove('done');
                }
                (0,_functions_functions__WEBPACK_IMPORTED_MODULE_3__.saveDataToLocalStorage)('aggregatedNumber', JSON.stringify(aggregatedNumber));
                (0,_functions_functions__WEBPACK_IMPORTED_MODULE_3__.setBackgroundForBookPage)(aggregatedNumber);
            }
        });
    }
    doneBtnHandler(e) {
        return __awaiter(this, void 0, void 0, function* () {
            if (e) {
                if (_App__WEBPACK_IMPORTED_MODULE_5__["default"].user) {
                    const card = e.target.closest('.card');
                    const cardId = card === null || card === void 0 ? void 0 : card.id;
                    const pageElement = document.querySelector('.pagination-element.active');
                    let aggregatedNumber = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_3__.getAggregatedNumberFromLS)();
                    if (card === null || card === void 0 ? void 0 : card.classList.contains('done')) {
                        aggregatedNumber -= 1;
                        card === null || card === void 0 ? void 0 : card.classList.remove('done');
                        this.updateProgressBar(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForNoDoneWord);
                        this.updateUserWordInfo(cardId, 'no-hard', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForNoDoneWord);
                    }
                    else if (card === null || card === void 0 ? void 0 : card.classList.contains('hard')) {
                        card === null || card === void 0 ? void 0 : card.classList.remove('hard');
                        card === null || card === void 0 ? void 0 : card.classList.add('done');
                        this.updateUserWordInfo(cardId, 'no-hard', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForDoneWord);
                        this.updateProgressBar(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForDoneWord);
                    }
                    else {
                        aggregatedNumber += 1;
                        card === null || card === void 0 ? void 0 : card.classList.add('done');
                        this.updateProgressBar(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForDoneWord);
                        this.updateUserWordInfo(cardId, 'no-hard', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.progressForDoneWord);
                    }
                    if (aggregatedNumber === _utils_constants__WEBPACK_IMPORTED_MODULE_2__.numberOfCardsPerPage) {
                        pageElement === null || pageElement === void 0 ? void 0 : pageElement.classList.add('done');
                    }
                    else {
                        pageElement === null || pageElement === void 0 ? void 0 : pageElement.classList.remove('done');
                    }
                    (0,_functions_functions__WEBPACK_IMPORTED_MODULE_3__.saveDataToLocalStorage)('aggregatedNumber', JSON.stringify(aggregatedNumber));
                    (0,_functions_functions__WEBPACK_IMPORTED_MODULE_3__.setBackgroundForBookPage)(aggregatedNumber);
                }
            }
        });
    }
    updateProgressBar(progress) {
        const div = this.view.querySelector('.progress-loading');
        div.style.width = `${progress}%`;
    }
    // eslint-disable-next-line max-lines-per-function
    updateUserWordInfo(cardId, newDifficulty, newProgress) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = _App__WEBPACK_IMPORTED_MODULE_5__["default"].user) === null || _a === void 0 ? void 0 : _a.userId) {
                const usersWords = yield this.api.getUserWords(_App__WEBPACK_IMPORTED_MODULE_5__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_5__["default"].user.token);
                const searchWordsArray = usersWords.filter((item) => item.wordId === cardId);
                const word = yield this.api.getOneWord(cardId);
                if (searchWordsArray.length === 0) {
                    const progress = newProgress;
                    const difficulty = newDifficulty;
                    const successfulAttempts = 0;
                    const unsuccessfulAttempts = 0;
                    const userWord = new _types_userword__WEBPACK_IMPORTED_MODULE_0__["default"]();
                    let wasLearned;
                    if (progress === 100) {
                        wasLearned = true;
                    }
                    else {
                        wasLearned = false;
                    }
                    userWord.word = word;
                    userWord.difficulty = difficulty;
                    userWord.optional = {
                        progress,
                        successfulAttempts,
                        unsuccessfulAttempts,
                        wasLearned,
                    };
                    this.api.createUserWord(_App__WEBPACK_IMPORTED_MODULE_5__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_5__["default"].user.token, userWord);
                    const stat = new _types_Statistic__WEBPACK_IMPORTED_MODULE_1__["default"]();
                    stat.addLearnedWordFromBook();
                }
                else {
                    const searchWord = searchWordsArray[0];
                    const progress = newProgress;
                    const difficulty = newDifficulty;
                    const { successfulAttempts, unsuccessfulAttempts } = searchWord.optional;
                    let { wasLearned } = searchWord.optional;
                    if (progress === 100) {
                        wasLearned = true;
                    }
                    const userWord = new _types_userword__WEBPACK_IMPORTED_MODULE_0__["default"]();
                    userWord.word = word;
                    userWord.difficulty = difficulty;
                    userWord.optional = {
                        progress,
                        successfulAttempts,
                        unsuccessfulAttempts,
                        wasLearned,
                    };
                    this.api.updateUserWord(_App__WEBPACK_IMPORTED_MODULE_5__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_5__["default"].user.token, userWord);
                }
            }
        });
    }
    createPhrasesBlock(wordInfo) {
        const phrasesBlock = document.createElement('div');
        phrasesBlock.classList.add('phrases');
        const phraseDefinition = document.createElement('div');
        phraseDefinition.classList.add('phrase__definition');
        const phraseDefinitionEnglish = document.createElement('p');
        phraseDefinitionEnglish.classList.add('phrase__definition_english');
        phraseDefinitionEnglish.innerHTML = wordInfo.textMeaning;
        const phraseDefinitionRussian = document.createElement('p');
        phraseDefinitionRussian.classList.add('phrase__definition_russian');
        phraseDefinitionRussian.innerHTML = wordInfo.textMeaningTranslate;
        phraseDefinition.append(phraseDefinitionEnglish, phraseDefinitionRussian);
        const phraseExample = document.createElement('div');
        phraseExample.classList.add('phrase__example');
        const phraseExampleEnglish = document.createElement('p');
        phraseExampleEnglish.classList.add('phrase__example_english');
        phraseExampleEnglish.innerHTML = wordInfo.textExample;
        const phraseExampleRussian = document.createElement('p');
        phraseExampleRussian.classList.add('phrase__example_russian');
        phraseExampleRussian.innerHTML = wordInfo.textExampleTranslate;
        phraseExample.append(phraseExampleEnglish, phraseExampleRussian);
        phrasesBlock.append(phraseDefinition, phraseExample);
        return phrasesBlock;
    }
    /* eslint-enable class-methods-use-this */
    createAudioBlock(wordInfo) {
        const audioIcon = document.createElement('div');
        audioIcon.classList.add('audio-icon');
        const audio = document.createElement('audio');
        audio.setAttribute('src', `${this.baseUrl}/${wordInfo.audio}`);
        const audioMeaning = document.createElement('audio');
        audioMeaning.setAttribute('src', `${this.baseUrl}/${wordInfo.audioMeaning}`);
        const audioExample = document.createElement('audio');
        audioExample.setAttribute('src', `${this.baseUrl}/${wordInfo.audioExample}`);
        audioIcon.append(audio, audioMeaning, audioExample);
        return audioIcon;
    }
    getOneUserWord(userWords) {
        return userWords.find((item) => item.wordId === this.view.id);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardView);


/***/ }),

/***/ "./src/pages/games/audio-call-page/audio-call-controller.ts":
/*!******************************************************************!*\
  !*** ./src/pages/games/audio-call-page/audio-call-controller.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-model */ "./src/pages/games/audio-call-page/audio-model.ts");
/* harmony import */ var _audio_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio-view */ "./src/pages/games/audio-call-page/audio-view.ts");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Api */ "./src/Api.ts");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../App */ "./src/App.ts");
/* harmony import */ var _types_userword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../types/userword */ "./src/types/userword.ts");
/* harmony import */ var _types_Statistic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../types/Statistic */ "./src/types/Statistic.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/no-cycle */







class AudioController extends _application_controller__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(words) {
        super();
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.wordsPerPage = 20;
        this.countQuestions = 6;
        this.initialbarProgress = 3;
        this.pagesPerGame = 3;
        this.stat = new _types_Statistic__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.gameName = 'audiocall';
        /* eslint-disable @typescript-eslint/indent */
        /* eslint-disable implicit-arrow-linebreak */
        this.getwords = (group, page) => new Promise((res, rej) => {
            fetch(`${this.api.words}?group=${group}&page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((result) => {
                const words = result.json();
                res(words);
            })
                .catch((err) => {
                rej(err);
            });
        });
        if (!words) {
            this.pageView = new _audio_view__WEBPACK_IMPORTED_MODULE_1__["default"]();
            this.model = new _audio_model__WEBPACK_IMPORTED_MODULE_0__["default"](this.pageView);
            this.addListeners();
            this.addKeyBoardListener();
        }
        if (words) {
            this.model.createQuiz(words, this.countQuestions);
        }
    }
    addListeners() {
        var _a;
        const btns = this.pageView.view.querySelectorAll('button');
        for (let i = 0; i < btns.length; i += 1) {
            btns[i].addEventListener('click', (e) => {
                const target = e.currentTarget;
                if (target.classList.contains('game-button')) {
                    this.model.gameStatus = 'Set Level';
                    this.getAllWords(Number(target.value));
                }
            });
        }
        this.pageView.view.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
            const target = e.target;
            if (target.id === 'next-question-button') {
                const test = this.model.audioTests[this.model.currentQuestion];
                const userWord = new _types_userword__WEBPACK_IMPORTED_MODULE_5__["default"]();
                const updateWordsResult = yield userWord.UpdateUserWords(test.correctAnswer, test.isCorrect);
                this.stat.updateStatistic(updateWordsResult, this.gameName);
                this.model.nextQuestion();
            }
            if (target.className === 'audio-icon') {
                const audio = target.firstChild;
                // let a = new Audio(audio.src);
                audio.play();
            }
            if (target.id === 'play-again') {
                this.model.playAgain();
            }
            if (target.className === 'game-button option') {
                this.model.handleAnswer(target.querySelector('.span-value').innerText);
            }
            if (target.className === 'modal-close') {
                this.model.closeResult();
            }
        }));
        (_a = this.pageView.view.querySelector('#new-game')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.model.gameStatus = 'Select Level';
        });
    }
    addKeyBoardListener() {
        document.addEventListener('keydown', (e) => this.keyPress(e));
    }
    keyPress(e) {
        if (_App__WEBPACK_IMPORTED_MODULE_4__["default"].controller instanceof AudioController) {
            this.pageView.handlePressKey(e.key);
        }
    }
    getAllWords(group) {
        return __awaiter(this, void 0, void 0, function* () {
            this.pageView.showProgressBar();
            this.model.gameStatus = 'Loading';
            let progress = this.initialbarProgress;
            let words = new Array();
            let randomPages = new Array();
            while (randomPages.length < this.pagesPerGame) {
                randomPages.push(Math.floor(Math.random() * this.pagesPerGame + 1));
                randomPages = randomPages.filter((item, index, arr) => index === arr.indexOf(item));
            }
            for (let i = 0; i <= this.pagesPerGame; i += 1) {
                progress = (i / this.pagesPerGame) * 100;
                this.model.loadingStatus = progress;
                /* eslint-disable no-await-in-loop */
                const value = yield this.getwords(group, i);
                words = words.concat(value);
            }
            this.model.createQuiz(words, this.countQuestions);
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioController);


/***/ }),

/***/ "./src/pages/games/audio-call-page/audio-model.ts":
/*!********************************************************!*\
  !*** ./src/pages/games/audio-call-page/audio-model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-question-component */ "./src/pages/games/audio-call-page/audio-question-component.ts");
/* eslint-disable import/no-cycle */

class AudioModel {
    constructor(pageView) {
        this.currentQuestion = -1;
        this.loadingProgress = 0;
        this.pageView = pageView;
        this.wrongAnswers = 0;
        this.corrrectAnswers = 0;
    }
    set loadingStatus(loading) {
        this.loadingProgress = loading;
        this.pageView.updateProgressBar(this.loadingProgress);
    }
    set gameStatus(status) {
        this.status = status;
        if (this.status === 'Set Level') {
            this.pageView.hideDifficultySelection();
            this.pageView.hideGame();
            this.pageView.hideResults();
        }
        if (this.status === 'Select Level') {
            this.pageView.showLevelSelection();
            this.pageView.hideGame();
            this.pageView.hideProgressBar();
            this.pageView.hideResults();
        }
        if (this.status === 'Game') {
            this.pageView.hideDifficultySelection();
            this.pageView.showGame();
            this.pageView.hideProgressBar();
            this.pageView.hideResults();
        }
    }
    set Question(currentQuestion) {
        this.currentQuestion = currentQuestion;
        this.pageView.showQuestion(this.audioTests[this.currentQuestion].audioTestView);
    }
    playAgain() {
        for (let i = 0; i < this.audioTests.length; i += 1) {
            this.audioTests[i].isAnswered = null;
            this.audioTests[i].isCorrect = false;
            this.audioTests[i].options = this.audioTests[i].options.sort(() => 0.5 - Math.random());
            this.audioTests[i].renderAudioTestView();
        }
        this.audioTests = this.audioTests.sort(() => 0.5 - Math.random());
        this.Question = 0;
        this.gameStatus = 'Game';
    }
    nextQuestion() {
        this.currentQuestion += 1;
        if (this.currentQuestion === this.audioTests.length) {
            this.pageView.showGameResult(this.audioTests);
            this.pageView.hideGame();
        }
        else {
            this.pageView.showQuestion(this.audioTests[this.currentQuestion].audioTestView);
        }
    }
    closeResult() {
        // если авторизованы переходим на страницу учебника
        // this.audioTests = new Array<AudioQuestion>();
        this.wrongAnswers = 0;
        this.rigthAnswers = 0;
        this.pageView.hideResults();
        this.audioTests = new Array();
        //
    }
    // сформировать список вопросов и начать игру
    createQuiz(words, countQuestions) {
        if (words.length < 6) {
            this.gameStatus = 'Select Level';
        }
        else {
            const tests = new Array();
            const count = words.length < countQuestions ? words.length : countQuestions;
            let id = 0;
            while (tests.length < count) {
                let correctAnswer = words[Math.floor(Math.random() * words.length)];
                let find = tests.filter((p) => p.correctAnswer.id === correctAnswer.id);
                /* eslint-disable  @typescript-eslint/no-loop-func */
                while (find.length > 0) {
                    correctAnswer = words[Math.floor(Math.random() * words.length)];
                    find = tests.filter((p) => p.correctAnswer.id === correctAnswer.id);
                }
                let options = new Array();
                options.push(correctAnswer);
                while (options.length < 6) {
                    const word = words[Math.floor(Math.random() * words.length)];
                    options.push(word);
                    options = options.filter((item, index, arr) => arr.indexOf(item) === index);
                }
                options = options.sort(() => 0.5 - Math.random());
                const test = new _audio_question_component__WEBPACK_IMPORTED_MODULE_0__["default"](options, correctAnswer, id);
                test.renderAudioTestView();
                id += 1;
                tests.push(test);
            }
            this.audioTests = tests;
            this.Question = 0;
            this.gameStatus = 'Game';
        }
    }
    handleAnswer(answer) {
        const audioTest = this.audioTests[this.currentQuestion];
        if (!audioTest.isAnswered) {
            const result = audioTest.correctAnswer.wordTranslate === answer;
            audioTest.isCorrect = result;
            this.pageView.renderAnswerResult(result, answer, audioTest.correctAnswer);
        }
        audioTest.isAnswered = 'Yes';
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioModel);


/***/ }),

/***/ "./src/pages/games/audio-call-page/audio-question-component.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/games/audio-call-page/audio-question-component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Api */ "./src/Api.ts");

class AudioQuestion {
    constructor(options, correctAnswer, id) {
        this.isCorrect = false;
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.audioTestView = document.createElement('div');
        this.isAnswered = null;
        this.options = options;
        this.id = id;
        this.correctAnswer = correctAnswer;
        this.answerView = this.renderAnswerView(correctAnswer);
        this.renderAudioTestView();
    }
    renderAnswerView(correctAnswer) {
        const divAnswer = document.createElement('div');
        const divaudio = document.createElement('div');
        divaudio.className = 'audio-icon';
        divaudio.setAttribute('audio', `${this.api.baseUrl}/${correctAnswer.audio}`);
        const audio = document.createElement('audio');
        audio.src = `${this.api.baseUrl}/${correctAnswer.audio}`;
        divaudio.appendChild(audio);
        this.audioAnswer = divaudio;
        return divAnswer;
    }
    renderAudioTestView() {
        const divQuizContainer = document.createElement('div');
        divQuizContainer.className = 'div-quiz-container';
        divQuizContainer.id = this.id.toString();
        // const label = document.createElement('label');
        const divPlay = this.audioAnswer;
        const quesionContainer = document.createElement('div');
        quesionContainer.className = 'quesion-container';
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Пропустить (Space)';
        nextButton.id = 'next-question-button';
        nextButton.className = 'next-question-button';
        quesionContainer.appendChild(divPlay);
        divQuizContainer.appendChild(quesionContainer);
        for (let i = 0; i < this.options.length; i += 1) {
            const button = document.createElement('button');
            button.className = 'game-button option';
            // button.textContent = this.options[i].wordTranslate;
            const divOptiongrid = document.createElement('div');
            divOptiongrid.className = 'div-option-grid';
            const spanNumber = document.createElement('span');
            spanNumber.textContent = (i + 1).toString();
            const spanValue = document.createElement('span');
            spanValue.className = 'span-value';
            spanValue.textContent = this.options[i].wordTranslate;
            divOptiongrid.append(spanNumber, spanValue);
            button.appendChild(divOptiongrid);
            quesionContainer.append(button);
        }
        quesionContainer.appendChild(nextButton);
        this.audioTestView = divQuizContainer;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioQuestion);


/***/ }),

/***/ "./src/pages/games/audio-call-page/audio-view.ts":
/*!*******************************************************!*\
  !*** ./src/pages/games/audio-call-page/audio-view.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.css */ "./src/pages/games/audio-call-page/audio.css");
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.css */ "./src/pages/games/audio-call-page/modal.css");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Api */ "./src/Api.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/constants */ "./src/utils/constants.ts");
/* eslint-disable import/no-cycle */




class AudioView {
    constructor() {
        this.focusIndex = 0;
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.renderView();
    }
    renderView() {
        const div = document.createElement('div');
        div.className = 'audio-call-container';
        const buttonNewGame = document.createElement('button');
        buttonNewGame.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.newAudioGameButtonText;
        buttonNewGame.id = 'new-game';
        buttonNewGame.className = 'new-game-button';
        const divButtonsContainer = document.createElement('div');
        divButtonsContainer.className = 'buttons-container';
        div.appendChild(buttonNewGame);
        for (let i = 1; i < 8; i += 1) {
            const button = document.createElement('button');
            button.className = `game-button l${i}`;
            button.value = (i - 1).toString();
            button.innerText = `Уровень ${i}`;
            divButtonsContainer.appendChild(button);
        }
        const levelSelectLabel = document.createElement('label');
        levelSelectLabel.innerText = 'Выберите уровень сложности';
        const divDifficulty = document.createElement('div');
        divDifficulty.className = 'dif-container hidden';
        divDifficulty.append(levelSelectLabel, divButtonsContainer);
        const progressBar = document.createElement('div');
        // progressBar.innerHTML = '<div id="loading"  class="loading"></div>';
        const innerdiv = document.createElement('div');
        innerdiv.className = 'loading';
        progressBar.className = 'game-progress-bar hidden';
        progressBar.id = 'audio-progress-bar';
        progressBar.appendChild(innerdiv);
        const gameContainer = document.createElement('div');
        const statusContainer = document.createElement('div');
        const modal = this.createModalContent();
        modal.className = 'game-result hidden';
        gameContainer.className = 'game-container';
        gameContainer.append(divDifficulty, progressBar, statusContainer);
        div.appendChild(gameContainer);
        div.appendChild(modal);
        this.view = div;
    }
    showGameResult(audioTests) {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
        const correctdiv = document.querySelector('.answer-container-correct');
        const wrongDiv = document.querySelector('.answer-container-wrong');
        correctdiv.innerHTML = '';
        wrongDiv.innerHTML = '';
        const corrects = audioTests.filter((p) => p.isCorrect);
        const wrongs = audioTests.filter((p) => !p.isCorrect);
        for (let i = 0; i < wrongs.length; i += 1) {
            const divResult = document.createElement('div');
            const divaudioresult = document.createElement('div');
            divaudioresult.className = 'audio-icon';
            const audioresult = document.createElement('audio');
            audioresult.src = `${this.api.baseUrl}/${wrongs[i].correctAnswer.audio}`;
            divaudioresult.appendChild(audioresult);
            const word = document.createElement('span');
            const wordTranslation = document.createElement('span');
            const dash = document.createElement('span');
            dash.innerText = '—';
            word.innerText = wrongs[i].correctAnswer.word;
            wordTranslation.innerText = wrongs[i].correctAnswer.wordTranslate;
            divResult.append(divaudioresult, word, dash, wordTranslation);
            wrongDiv.appendChild(divResult);
        }
        for (let i = 0; i < corrects.length; i += 1) {
            const divResult = document.createElement('div');
            const divaudioresult = document.createElement('div');
            divaudioresult.className = 'audio-icon';
            const audioresult = document.createElement('audio');
            audioresult.src = `${this.api.baseUrl}/${corrects[i].correctAnswer.audio}`;
            divaudioresult.appendChild(audioresult);
            const word = document.createElement('span');
            const wordTranslation = document.createElement('span');
            const dash = document.createElement('span');
            dash.innerText = '—';
            word.innerText = corrects[i].correctAnswer.word;
            wordTranslation.innerText = corrects[i].correctAnswer.wordTranslate;
            divResult.append(divaudioresult, word, dash, wordTranslation);
            correctdiv.appendChild(divResult);
        }
        this.view.querySelector('.game-span-wrong').innerText = `Неверные ответы (${wrongs.length}) : `;
        this.view.querySelector('.game-span-correct').innerText = `Верные ответы (${corrects.length}) :`;
    }
    // renderResultWindow(): HTMLDivElement {
    // }
    showLevelSelection() {
        this.view.querySelector('.dif-container').classList.remove('hidden');
    }
    showQuestion(audioTestView) {
        const qustionContainer = this.view.querySelector('.div-quiz-container');
        if (qustionContainer) {
            qustionContainer.innerHTML = audioTestView.innerHTML;
        }
        else {
            this.view.appendChild(audioTestView);
        }
        const divPlay = document.querySelector('.audio-icon');
        const audio = divPlay === null || divPlay === void 0 ? void 0 : divPlay.firstChild;
        audio.play();
    }
    showDifficultySelection() {
        var _a;
        (_a = this.view.querySelector('.dif-container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    hideDifficultySelection() {
        var _a;
        (_a = this.view.querySelector('.dif-container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    showGame() {
        var _a;
        (_a = this.view.querySelector('.div-quiz-container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    hideGame() {
        var _a;
        (_a = this.view.querySelector('.div-quiz-container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    hideProgressBar() {
        var _a;
        (_a = this.view.querySelector('.game-progress-bar')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    showProgressBar() {
        var _a;
        (_a = this.view.querySelector('.game-progress-bar')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    showResults() {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    hideResults() {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        const correctdiv = document.querySelector('.answer-container-correct');
        const wrongDiv = document.querySelector('.answer-container-wrong');
        correctdiv.innerHTML = '';
        wrongDiv.innerHTML = '';
    }
    updateProgressBar(loading) {
        const div = this.view.querySelector('.loading');
        div.style.width = `${loading}%`;
    }
    renderAnswerResult(result, answer, correctAnswer) {
        const options = this.view.querySelectorAll('.option');
        if (result) {
            const audio = new Audio('../../assets/answer-correct.wav');
            audio.play();
        }
        else {
            const audio = new Audio('../../assets/answer-wrong.wav');
            audio.play();
        }
        for (let i = 0; i < options.length; i += 1) {
            const button = options[i];
            const text = button.querySelector('.span-value').innerText;
            if (text === correctAnswer.wordTranslate) {
                button.classList.add('correct');
            }
            if (!result) {
                if (text === answer) {
                    button.classList.add('wrong');
                }
            }
        }
        const nextButton = this.view.querySelector('#next-question-button');
        nextButton.innerText = 'Далее (Space)';
    }
    handleNavKeys(pressedKey) {
        var _a, _b;
        this.handleKeysLevel(pressedKey);
        const buttons = this.view.querySelectorAll('button');
        const i = buttons.length;
        if (pressedKey === 'ArrowRight' || pressedKey === 'ArrowDown') {
            const focusedbutton = document.activeElement;
            const name = focusedbutton.tagName;
            if (name !== 'BUTTON') {
                buttons[0].focus();
            }
            else {
                this.focusIndex = this.focusIndex === i - 1 ? this.focusIndex : (this.focusIndex += 1);
                const dif = (_a = this.view.querySelector('.game-container')) === null || _a === void 0 ? void 0 : _a.firstChild;
                if ((dif === null || dif === void 0 ? void 0 : dif.className) === 'dif-container hidden') {
                    while (buttons[this.focusIndex - 1].className.includes('game-button l')) {
                        this.focusIndex += 1;
                    }
                }
                buttons[this.focusIndex].focus();
            }
        }
        if (pressedKey === 'ArrowLeft' || pressedKey === 'ArrowUp') {
            const focusedbutton = document.activeElement;
            const name = focusedbutton.tagName;
            if (name !== 'BUTTON') {
                buttons[0].focus();
            }
            else {
                this.focusIndex = this.focusIndex === 0 ? (this.focusIndex = 0) : (this.focusIndex -= 1);
                const dif = (_b = this.view.querySelector('.game-container')) === null || _b === void 0 ? void 0 : _b.firstChild;
                if ((dif === null || dif === void 0 ? void 0 : dif.className) === 'dif-container hidden') {
                    while (buttons[this.focusIndex].className.includes('game-button l')) {
                        this.focusIndex -= 1;
                    }
                }
                buttons[this.focusIndex].focus();
                buttons[this.focusIndex].focus();
            }
        }
        if (pressedKey === 'Enter') {
            const focusedbutton = document.activeElement;
            const name = focusedbutton.tagName;
            if (name === 'button') {
                focusedbutton.click();
            }
        }
    }
    handleKeysLevel(pressedKey) {
        const key = pressedKey.toLowerCase();
        if (key === 'n') {
            const newGame = this.view.querySelector('.new-game-button');
            newGame.click();
        }
        if (key === 'a') {
            const playGame = this.view.querySelector('.play-again-button');
            playGame.click();
        }
        if (Number(key) > 0 && Number(key) <= 7) {
            const diff = this.view.querySelector(`.l${key}`);
            diff.click();
        }
        document.body.focus();
    }
    handleKeysOption(pressedKey) {
        const key = pressedKey.toLowerCase();
        if (key === 'n') {
            const newGame = this.view.querySelector('.new-game-button');
            newGame.click();
        }
        if (key === 'a') {
            const playGame = this.view.querySelector('.play-again-button');
            playGame.click();
        }
        if (Number(key) > 0 && Number(key) < 7) {
            const diff = this.view.querySelectorAll('.option')[Number(key) - 1];
            diff.click();
        }
        if (key === ' ') {
            this.view.querySelector('.next-question-button').click();
        }
        document.body.focus();
    }
    handlePressKey(key) {
        if (['n', '1', '2', '3', '4', '5', '6', '7', 'a', ' '].find((p) => p === key)) {
            const dif = this.view.querySelector('.dif-container');
            if ((dif === null || dif === void 0 ? void 0 : dif.className) === 'dif-container') {
                this.handleKeysLevel(key);
            }
            else {
                this.handleKeysOption(key);
            }
            document.body.focus();
        }
        else {
            this.handleNavKeys(key);
        }
    }
    /* eslint-disable class-methods-use-this */
    createModalContent() {
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        const modalClose = document.createElement('span');
        modalClose.classList.add('modal-close');
        modalClose.innerHTML = '&times;';
        const resultsBox = document.createElement('div');
        resultsBox.classList.add('div-result-flex');
        const resilts = document.createElement('span');
        resilts.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.resultsText;
        const incorrectAnswers = document.createElement('span');
        incorrectAnswers.classList.add('game-span-wrong');
        incorrectAnswers.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.incorrectResultsText;
        const correctAnswers = document.createElement('span');
        correctAnswers.classList.add('game-span-correct');
        correctAnswers.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.correctResultsText;
        const incorrectAnswersContainer = document.createElement('div');
        incorrectAnswersContainer.classList.add('answer-container-wrong');
        const correctAnswersContainer = document.createElement('div');
        correctAnswersContainer.classList.add('answer-container-correct');
        resultsBox.append(resilts, incorrectAnswers, incorrectAnswersContainer, correctAnswers, correctAnswersContainer);
        modalContent.append(modalClose, resultsBox);
        return modalContent;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioView);


/***/ }),

/***/ "./src/pages/games/game-common-view.ts":
/*!*********************************************!*\
  !*** ./src/pages/games/game-common-view.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* eslint-disable import/no-cycle */

class GameCommonView {
    static createModalContent() {
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        const modalClose = document.createElement('span');
        modalClose.classList.add('modal-close');
        modalClose.innerHTML = '&times;';
        const resultsBox = document.createElement('div');
        resultsBox.classList.add('div-result-flex');
        const resilts = document.createElement('span');
        resilts.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.resultsText;
        const incorrectAnswers = document.createElement('span');
        incorrectAnswers.classList.add('game-span-wrong');
        incorrectAnswers.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.incorrectResultsText;
        const correctAnswers = document.createElement('span');
        correctAnswers.classList.add('game-span-correct');
        correctAnswers.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.correctResultsText;
        const incorrectAnswersContainer = document.createElement('div');
        incorrectAnswersContainer.classList.add('answer-container-wrong');
        const correctAnswersContainer = document.createElement('div');
        correctAnswersContainer.classList.add('answer-container-correct');
        resultsBox.append(resilts, incorrectAnswers, incorrectAnswersContainer, correctAnswers, correctAnswersContainer);
        modalContent.append(modalClose, resultsBox);
        return modalContent;
    }
    static createTimer() {
        const timer = document.createElement('div');
        timer.classList.add('sprint-timer', 'hidden');
        return timer;
    }
    showLevelSelection() {
        this.view.querySelector('.dif-container').classList.remove('hidden');
    }
    showDifficultySelection() {
        var _a;
        (_a = this.view.querySelector('.dif-container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    hideDifficultySelection() {
        var _a;
        (_a = this.view.querySelector('.dif-container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    showGame() {
        var _a;
        (_a = this.view.querySelector('.div-quiz-container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    hideGame() {
        var _a;
        (_a = this.view.querySelector('.div-quiz-container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    hideProgressBar() {
        var _a;
        (_a = this.view.querySelector('.game-progress-bar')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    showProgressBar() {
        var _a;
        (_a = this.view.querySelector('.game-progress-bar')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    showResults() {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    hideResults() {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        const correctDiv = document.querySelector('.answer-container-correct');
        const wrongDiv = document.querySelector('.answer-container-wrong');
        correctDiv.innerHTML = '';
        wrongDiv.innerHTML = '';
    }
    updateProgressBar(loading) {
        const div = this.view.querySelector('.loading');
        div.style.width = `${loading}%`;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameCommonView);


/***/ }),

/***/ "./src/pages/games/games-page-controller.ts":
/*!**************************************************!*\
  !*** ./src/pages/games/games-page-controller.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _games_page_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games-page-view */ "./src/pages/games/games-page-view.ts");
/* eslint-disable import/no-cycle */


class GamesPageController extends _application_controller__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.pageView = new _games_page_view__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamesPageController);


/***/ }),

/***/ "./src/pages/games/games-page-view.ts":
/*!********************************************!*\
  !*** ./src/pages/games/games-page-view.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _audio_call_page_audio_call_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio-call-page/audio-call-controller */ "./src/pages/games/audio-call-page/audio-call-controller.ts");
/* harmony import */ var _sprint_page_sprint_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprint-page/sprint-controller */ "./src/pages/games/sprint-page/sprint-controller.ts");
/* eslint-disable import/no-cycle */




class GamePageView {
    constructor() {
        this.renderView();
    }
    renderView() {
        this.view = document.createElement('div');
        this.view.classList.add('games-block');
        const audioCallButton = document.createElement('button');
        audioCallButton.classList.add('audio-call-button');
        audioCallButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.audioGameName;
        audioCallButton.addEventListener('click', () => {
            const controller = new _audio_call_page_audio_call_controller__WEBPACK_IMPORTED_MODULE_2__["default"]();
            _App__WEBPACK_IMPORTED_MODULE_0__["default"].setController(controller);
        });
        const sprintButton = document.createElement('button');
        sprintButton.classList.add('sprint-button');
        sprintButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.sprintGameName;
        sprintButton.addEventListener('click', () => {
            const controller = new _sprint_page_sprint_controller__WEBPACK_IMPORTED_MODULE_3__["default"]();
            _App__WEBPACK_IMPORTED_MODULE_0__["default"].setController(controller);
        });
        this.view.append(audioCallButton, sprintButton);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamePageView);


/***/ }),

/***/ "./src/pages/games/sprint-page/sprint-controller.ts":
/*!**********************************************************!*\
  !*** ./src/pages/games/sprint-page/sprint-controller.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Api */ "./src/Api.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../App */ "./src/App.ts");
/* harmony import */ var _types_userword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types/userword */ "./src/types/userword.ts");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _sprint_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sprint-model */ "./src/pages/games/sprint-page/sprint-model.ts");
/* harmony import */ var _sprint_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprint-view */ "./src/pages/games/sprint-page/sprint-view.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/no-cycle */



// import { sprintTime } from '../../../utils/constants';



class SprintController extends _application_controller__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(words) {
        super();
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.wordsPerPage = 20;
        this.countQuestions = 200;
        this.initialbarProgress = 3;
        this.pagesPerGame = 9;
        if (!words) {
            this.pageView = new _sprint_view__WEBPACK_IMPORTED_MODULE_5__["default"]();
            this.model = new _sprint_model__WEBPACK_IMPORTED_MODULE_4__["default"](this.pageView);
            this.addListeners();
            this.addKeyBoardListeners();
        }
        if (words) {
            this.model.createQuiz(words, this.countQuestions);
        }
    }
    // ctrlr
    addListeners() {
        var _a;
        const btns = this.pageView.view.querySelectorAll('button');
        for (let i = 0; i < btns.length; i += 1) {
            btns[i].addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
                const target = e.currentTarget;
                if (target.classList.contains('game-button')) {
                    this.model.gameStatus = 'Set Level';
                    const words = yield this.getAllWords(Number(target.value));
                    this.model.createQuiz(words, this.countQuestions);
                }
            }));
        }
        this.pageView.view.addEventListener('click', (e) => {
            const target = e.target;
            // if (target.className === 'game-button option') {
            //   this.model.updateGameProgress();//обновление статистики
            // }
            if (target.id === 'next-question-button') {
                this.UpdateUserWords(this.model.audioTests[this.model.currentQuestion]);
                this.model.nextQuestion();
            }
            if (target.className === 'audio-icon') {
                const audio = target.firstChild;
                // let a = new Audio(audio.src);
                audio.play();
            }
            if (target.id === 'play-again') {
                this.model.playAgain();
            }
            if (target.className === 'game-button option') {
                this.model.handleAnswer(target.querySelector('.span-value').innerText);
            }
            if (target.className === 'modal-close') {
                this.model.closeResult();
            }
        });
        (_a = this.pageView.view.querySelector('#new-game')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.model.gameStatus = 'Select Level';
        });
    }
    // ctrlr
    addKeyBoardListeners() {
        document.addEventListener('keydown', (e) => this.keyPress(e));
    }
    // ctrlr
    keyPress(e) {
        if (_App__WEBPACK_IMPORTED_MODULE_1__["default"].controller instanceof SprintController) {
            this.pageView.handlePressKey(e.key);
        }
    }
    // ctrlr
    getAllWords(group) {
        return __awaiter(this, void 0, void 0, function* () {
            this.pageView.showProgressBar();
            this.model.gameStatus = 'Loading';
            let progress = this.initialbarProgress;
            let words = new Array();
            let randomPages = new Array();
            while (randomPages.length < this.pagesPerGame) {
                randomPages.push(Math.floor(Math.random() * this.pagesPerGame + 1));
                randomPages = randomPages.filter((item, index, arr) => index === arr.indexOf(item));
            }
            for (let i = 0; i <= this.pagesPerGame; i += 1) {
                progress = (i / this.pagesPerGame) * 100;
                this.model.loadingStatus = progress;
                /* eslint-disable no-await-in-loop */
                const value = yield this.getWords(group, i);
                words = words.concat(value);
            }
            return words;
        });
    }
    // model
    /* eslint-disable @typescript-eslint/indent */
    getWords(group, page) {
        return new Promise((res, rej) => {
            fetch(`${this.api.words}?group=${group}&page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((result) => {
                const words = result.json();
                res(words);
            })
                .catch((err) => {
                rej(err);
            });
        });
    }
    UpdateUserWords(test) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let userWords = new Array();
            if ((_a = _App__WEBPACK_IMPORTED_MODULE_1__["default"].user) === null || _a === void 0 ? void 0 : _a.userId) {
                const value = yield this.api.getUserWords(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token);
                userWords = value;
                const find = userWords.filter((item) => item.wordId === test.correctAnswer.id);
                if (find.length === 0) {
                    // let progress = 0;
                    // progress = test.isCorrect ? (progress = 20) : 0;
                    // const difficulty = 'no-hard';
                    // const successfulAttempts = test.isCorrect ? 1 : 0;
                    // const unsuccessfulAttempts = test.isCorrect ? 0 : 1;
                    const userWord = new _types_userword__WEBPACK_IMPORTED_MODULE_2__["default"]();
                    // test.correctAnswer,
                    // difficulty,
                    // progress,
                    // successfulAttempts,
                    // unsuccessfulAttempts,
                    this.api.createUserWord(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token, userWord);
                }
                else {
                    const word = find[0];
                    // let { progress } = word.optional;
                    // progress = test.isCorrect ? (progress += 20) : (progress -= 20);
                    // progress = progress >= 100 ? 100 : progress;
                    // progress = progress <= 0 ? 0 : progress;
                    // const difficulty = progress === 100 ? 'no-hard' : find[0].difficulty;
                    if (test.isCorrect) {
                        word.optional.successfulAttempts += 1;
                    }
                    if (!test.isCorrect) {
                        word.optional.unsuccessfulAttempts += 1;
                    }
                    // const { successfulAttempts } = word.optional;
                    // const { unsuccessfulAttempts } = word.optional;
                    const userWord = new _types_userword__WEBPACK_IMPORTED_MODULE_2__["default"]();
                    // test.correctAnswer,
                    // difficulty,
                    // progress,
                    // successfulAttempts,
                    // unsuccessfulAttempts,
                    userWord.word = test.correctAnswer;
                    userWord.wordId = word.wordId;
                    this.api.updateUserWord(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token, userWord);
                }
            }
        });
    }
}
// startGame() {
//   this.pageView = new SprintView();
//   this.setTimer();
// }
//   setTimer() {
//     const timer = this.pageView.view.querySelector('.sprint-timer') as HTMLDivElement;
//   }
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SprintController);


/***/ }),

/***/ "./src/pages/games/sprint-page/sprint-model.ts":
/*!*****************************************************!*\
  !*** ./src/pages/games/sprint-page/sprint-model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sprint_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprint-question-component */ "./src/pages/games/sprint-page/sprint-question-component.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/constants */ "./src/utils/constants.ts");


class SprintModel {
    constructor(pageView) {
        this.currentQuestion = -1;
        this.loadingProgress = 0;
        this.pageView = pageView;
        this.wrongAnswers = 0;
        this.corrrectAnswers = 0;
    }
    // ctrlr
    set loadingStatus(loading) {
        this.loadingProgress = loading;
        this.pageView.updateProgressBar(this.loadingProgress);
    }
    // ctrlr
    set gameStatus(status) {
        this.status = status;
        if (this.status === 'Set Level') {
            this.pageView.hideTimer();
            this.pageView.hideDifficultySelection();
            this.pageView.hideGame();
            this.pageView.hideResults();
        }
        if (this.status === 'Select Level') {
            this.pageView.showLevelSelection();
            this.pageView.hideGame();
            this.pageView.hideProgressBar();
            this.pageView.hideResults();
        }
        if (this.status === 'Game') {
            this.pageView.hideDifficultySelection();
            this.pageView.showGame();
            this.pageView.hideProgressBar();
            this.pageView.hideResults();
        }
    }
    // ctrlr
    set Question(currentQuestion) {
        this.currentQuestion = currentQuestion;
        this.pageView.showQuestion(this.audioTests[this.currentQuestion].audioTestView);
    }
    playAgain() {
        for (let i = 0; i < this.audioTests.length; i += 1) {
            this.audioTests[i].isAnswered = null;
            this.audioTests[i].isCorrect = false;
            this.audioTests[i].options = this.audioTests[i].options.sort(() => 0.5 - Math.random());
            this.audioTests[i].renderAudioTestView();
        }
        this.audioTests = this.audioTests.sort(() => 0.5 - Math.random());
        this.Question = 0;
        this.gameStatus = 'Game';
    }
    nextQuestion() {
        this.currentQuestion += 1;
        if (this.currentQuestion === this.audioTests.length || this.pageView.timer.innerText === '0') {
            this.pageView.showGameResult(this.audioTests);
            this.pageView.hideGame();
            this.pageView.hideTimer();
        }
        else {
            this.pageView.showQuestion(this.audioTests[this.currentQuestion].audioTestView);
        }
    }
    // ctrlr
    closeResult() {
        // если авторизованы переходим на страницу учебника
        // this.audioTests = new Array<AudioQuestion>();
        this.wrongAnswers = 0;
        this.rigthAnswers = 0;
        this.pageView.hideResults();
        this.audioTests = new Array();
        //
    }
    // ctrlr
    // сформировать список вопросов и начать игру
    createQuiz(words, countQuestions) {
        if (words.length < 6) {
            this.gameStatus = 'Select Level';
        }
        else {
            const tests = new Array();
            const count = Math.min(words.length, countQuestions);
            let id = 0;
            while (tests.length < count) {
                let correctAnswer = words[Math.floor(Math.random() * words.length)];
                let find = tests.filter((p) => p.correctAnswer.id === correctAnswer.id);
                /* eslint-disable  @typescript-eslint/no-loop-func */
                while (find.length > 0) {
                    correctAnswer = words[Math.floor(Math.random() * words.length)];
                    find = tests.filter((p) => p.correctAnswer.id === correctAnswer.id);
                }
                let options = new Array();
                options.push(correctAnswer);
                while (options.length < 2) {
                    const word = words[Math.floor(Math.random() * words.length)];
                    options.push(word);
                    options = options.filter((item, index, arr) => arr.indexOf(item) === index);
                }
                options = options.sort(() => 0.5 - Math.random());
                const test = new _sprint_question_component__WEBPACK_IMPORTED_MODULE_0__["default"](options, correctAnswer, id);
                test.renderAudioTestView();
                id += 1;
                tests.push(test);
            }
            this.audioTests = tests;
            this.Question = 0;
            this.gameStatus = 'Game';
        }
    }
    // ctrlr
    handleAnswer(answer) {
        let userAnswer;
        switch (answer) {
            case _utils_constants__WEBPACK_IMPORTED_MODULE_1__.correctText:
                userAnswer = true;
                break;
            case _utils_constants__WEBPACK_IMPORTED_MODULE_1__.incorrectText:
                userAnswer = false;
                break;
            default:
                break;
        }
        const audioTest = this.audioTests[this.currentQuestion];
        if (!audioTest.isAnswered) {
            const rightAnswer = audioTest.correctAnswer.wordTranslate === audioTest.variation.innerText;
            const result = userAnswer === rightAnswer;
            audioTest.isCorrect = result;
            this.pageView.renderAnswerResult(result, answer);
        }
        audioTest.isAnswered = 'Yes';
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SprintModel);


/***/ }),

/***/ "./src/pages/games/sprint-page/sprint-question-component.ts":
/*!******************************************************************!*\
  !*** ./src/pages/games/sprint-page/sprint-question-component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Api */ "./src/Api.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/constants */ "./src/utils/constants.ts");


class SprintQuestion {
    constructor(options, correctAnswer, id) {
        this.isCorrect = false;
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.audioTestView = document.createElement('div');
        this.isAnswered = null;
        this.options = options;
        this.id = id;
        this.correctAnswer = correctAnswer;
        this.answerView = this.renderAnswerView(correctAnswer);
        this.renderAudioTestView();
    }
    renderAnswerView(correctAnswer) {
        const divAnswer = document.createElement('div');
        const audioBox = document.createElement('div');
        audioBox.className = 'audio-icon';
        audioBox.setAttribute('audio', `${this.api.baseUrl}/${correctAnswer.audio}`);
        const audio = document.createElement('audio');
        audio.src = `${this.api.baseUrl}/${correctAnswer.audio}`;
        audioBox.append(audio);
        this.audioAnswer = audioBox;
        const originalWord = document.createElement('p');
        originalWord.classList.add('word', 'sprint-original-word');
        originalWord.innerText = correctAnswer.word;
        this.originalWord = originalWord;
        return divAnswer;
    }
    renderAudioTestView() {
        const quizContainer = document.createElement('div');
        quizContainer.className = 'div-quiz-container';
        quizContainer.id = this.id.toString();
        const divPlay = this.audioAnswer;
        const questionContainer = document.createElement('div');
        questionContainer.className = 'sprint-question-container';
        const nextButton = document.createElement('button');
        nextButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.skipText;
        nextButton.id = 'next-question-button';
        nextButton.className = 'next-question-button';
        questionContainer.append(divPlay, this.originalWord);
        quizContainer.append(questionContainer);
        const answersBox = document.createElement('div');
        answersBox.classList.add('answers-box');
        this.variation = document.createElement('p');
        this.variation.classList.add('word', 'sprint-variation-word');
        const variation = this.options[Math.floor(Math.random() * this.options.length)].wordTranslate;
        this.variation.innerText = variation;
        for (let i = 0; i < this.options.length; i += 1) {
            const button = document.createElement('button');
            button.className = 'game-button option';
            // button.textContent = this.options[i].wordTranslate;
            const divOptionGrid = document.createElement('div');
            divOptionGrid.className = 'div-option-grid';
            const spanValue = document.createElement('span');
            spanValue.className = 'span-value';
            // spanValue.textContent = this.options[i].wordTranslate;
            const arrow = document.createElement('span');
            if (i) {
                arrow.textContent = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.arrowRight;
                spanValue.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.correctText;
                divOptionGrid.classList.add('right');
                divOptionGrid.append(spanValue, arrow);
            }
            else {
                arrow.textContent = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.arrowLeft;
                spanValue.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.incorrectText;
                divOptionGrid.append(arrow, spanValue);
            }
            button.append(divOptionGrid);
            answersBox.append(button);
        }
        questionContainer.append(this.variation, answersBox, nextButton);
        this.audioTestView = quizContainer;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SprintQuestion);


/***/ }),

/***/ "./src/pages/games/sprint-page/sprint-view.ts":
/*!****************************************************!*\
  !*** ./src/pages/games/sprint-page/sprint-view.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Api */ "./src/Api.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../application-view */ "./src/pages/application-view.ts");
/* harmony import */ var _game_common_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-common-view */ "./src/pages/games/game-common-view.ts");
/* harmony import */ var _sprint_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sprint.css */ "./src/pages/games/sprint-page/sprint.css");
/* eslint-disable import/no-cycle */





class SprintView extends _application_view__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        this.focusIndex = 0;
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.renderView();
    }
    // view
    renderView() {
        const div = document.createElement('div');
        div.className = 'audio-call-container';
        const buttonNewGame = document.createElement('button');
        buttonNewGame.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.newSprintGameButtonText;
        buttonNewGame.id = 'new-game';
        buttonNewGame.className = 'new-game-button';
        const divButtonsContainer = document.createElement('div');
        divButtonsContainer.className = 'buttons-container';
        for (let i = 1; i < 8; i += 1) {
            const button = document.createElement('button');
            button.className = `game-button l${i}`;
            button.value = (i - 1).toString();
            button.innerText = `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.levelText} ${i}`;
            divButtonsContainer.appendChild(button);
        }
        const levelSelectLabel = document.createElement('label');
        levelSelectLabel.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.levelSelectLabelText;
        const divDifficulty = document.createElement('div');
        divDifficulty.className = 'dif-container hidden';
        divDifficulty.append(levelSelectLabel, divButtonsContainer);
        const progressBar = document.createElement('div');
        const innerdiv = document.createElement('div');
        innerdiv.className = 'loading';
        progressBar.className = 'game-progress-bar hidden';
        progressBar.id = 'audio-progress-bar';
        progressBar.appendChild(innerdiv);
        const gameContainer = document.createElement('div');
        const statusContainer = document.createElement('div');
        const modal = _game_common_view__WEBPACK_IMPORTED_MODULE_3__["default"].createModalContent();
        modal.className = 'game-result hidden';
        gameContainer.className = 'game-container';
        gameContainer.append(divDifficulty, progressBar, statusContainer);
        this.timer = _game_common_view__WEBPACK_IMPORTED_MODULE_3__["default"].createTimer();
        div.append(buttonNewGame, this.timer, gameContainer, modal);
        this.view = div;
    }
    // view
    showGameResult(audioTests) {
        this.showResults();
        const correctdiv = document.querySelector('.answer-container-correct');
        const wrongDiv = document.querySelector('.answer-container-wrong');
        correctdiv.innerHTML = '';
        wrongDiv.innerHTML = '';
        const corrects = audioTests.filter((p) => p.isCorrect && !!p.isAnswered);
        const wrongs = audioTests.filter((p) => !p.isCorrect && !!p.isAnswered);
        for (let i = 0; i < wrongs.length; i += 1) {
            const divResult = document.createElement('div');
            const audioResultBox = document.createElement('div');
            audioResultBox.className = 'audio-icon';
            const audioResult = document.createElement('audio');
            audioResult.src = `${this.api.baseUrl}/${wrongs[i].correctAnswer.audio}`;
            audioResultBox.appendChild(audioResult);
            const word = document.createElement('span');
            const wordTranslation = document.createElement('span');
            const dash = document.createElement('span');
            dash.innerText = '—';
            word.innerText = wrongs[i].correctAnswer.word;
            wordTranslation.innerText = wrongs[i].correctAnswer.wordTranslate;
            divResult.append(audioResultBox, word, dash, wordTranslation);
            wrongDiv.appendChild(divResult);
        }
        for (let i = 0; i < corrects.length; i += 1) {
            const divResult = document.createElement('div');
            const audioResultBox = document.createElement('div');
            audioResultBox.className = 'audio-icon';
            const audioResult = document.createElement('audio');
            audioResult.src = `${this.api.baseUrl}/${corrects[i].correctAnswer.audio}`;
            audioResultBox.appendChild(audioResult);
            const word = document.createElement('span');
            const wordTranslation = document.createElement('span');
            const dash = document.createElement('span');
            dash.innerText = '—';
            word.innerText = corrects[i].correctAnswer.word;
            wordTranslation.innerText = corrects[i].correctAnswer.wordTranslate;
            divResult.append(audioResultBox, word, dash, wordTranslation);
            correctdiv.appendChild(divResult);
        }
        this.view.querySelector('.game-span-correct').innerText = `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.correctResultsText} (${corrects.length}) :`;
        this.view.querySelector('.game-span-wrong').innerText = `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.incorrectResultsText} (${wrongs.length}) : `;
    }
    // renderResultWindow(): HTMLDivElement {
    // }
    // view
    showLevelSelection() {
        this.view.querySelector('.dif-container').classList.remove('hidden');
    }
    // view
    showQuestion(audioTestView) {
        const questionContainer = this.view.querySelector('.div-quiz-container');
        if (questionContainer) {
            questionContainer.innerHTML = audioTestView.innerHTML;
        }
        else {
            this.view.appendChild(audioTestView);
        }
        const divPlay = document.querySelector('.audio-icon');
        const audio = divPlay === null || divPlay === void 0 ? void 0 : divPlay.firstChild;
        audio.play();
    }
    showTimer() {
        this.timer.innerText = `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.sprintTime}`;
        this.timer.classList.remove('hidden');
        this.timer.classList.remove('hidden');
        let gameTime = 0;
        let isResultsShown = false;
        window.setInterval(() => {
            if (gameTime <= _utils_constants__WEBPACK_IMPORTED_MODULE_1__.sprintTime) {
                this.timer.innerText = `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.sprintTime - gameTime}`;
                gameTime += 1;
            }
            if (this.timer.innerText === '0' && !isResultsShown) {
                const nextQuestionButton = this.view.querySelector('.next-question-button');
                nextQuestionButton.click();
                this.hideTimer();
                isResultsShown = true;
            }
        }, 1000);
    }
    hideTimer() {
        this.timer.classList.add('hidden');
    }
    // view
    showDifficultySelection() {
        var _a;
        (_a = this.view.querySelector('.dif-container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    // view
    hideDifficultySelection() {
        var _a;
        (_a = this.view.querySelector('.dif-container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    // view
    showGame() {
        var _a;
        this.showTimer();
        (_a = this.view.querySelector('.div-quiz-container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    // view
    hideGame() {
        var _a;
        this.timer.classList.add('hidden');
        (_a = this.view.querySelector('.div-quiz-container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    // view
    hideProgressBar() {
        var _a;
        (_a = this.view.querySelector('.game-progress-bar')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    // view
    showProgressBar() {
        var _a;
        (_a = this.view.querySelector('.game-progress-bar')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    // view
    showResults() {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    // view
    hideResults() {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        const correctdiv = document.querySelector('.answer-container-correct');
        const wrongDiv = document.querySelector('.answer-container-wrong');
        correctdiv.innerHTML = '';
        wrongDiv.innerHTML = '';
    }
    // view
    updateProgressBar(loading) {
        const div = this.view.querySelector('.loading');
        div.style.width = `${loading}%`;
    }
    // view
    renderAnswerResult(result, answer) {
        const options = this.view.querySelectorAll('.option');
        if (result) {
            const audio = new Audio('../../assets/answer-correct.wav');
            audio.play();
        }
        else {
            const audio = new Audio('../../assets/answer-wrong.wav');
            audio.play();
        }
        for (let i = 0; i < options.length; i += 1) {
            const button = options[i];
            const text = button.querySelector('.span-value').innerText;
            if (text === answer) {
                button.classList.add('correct');
            }
            if (!result) {
                if (text === answer) {
                    button.classList.add('wrong');
                }
            }
        }
        window.setTimeout(() => {
            this.view.querySelector('.next-question-button').click();
        }, 200);
    }
    // view
    handleNavKeys(pressedKey) {
        var _a, _b;
        this.handleKeysLevel(pressedKey);
        const buttons = this.view.querySelectorAll('button');
        const i = buttons.length;
        if (pressedKey === 'ArrowRight' || pressedKey === 'ArrowDown') {
            const focusedbutton = document.activeElement;
            const name = focusedbutton.tagName;
            if (name !== 'BUTTON') {
                buttons[0].focus();
            }
            else {
                this.focusIndex = this.focusIndex === i - 1 ? this.focusIndex : (this.focusIndex += 1);
                const dif = (_a = this.view.querySelector('.game-container')) === null || _a === void 0 ? void 0 : _a.firstChild;
                if ((dif === null || dif === void 0 ? void 0 : dif.className) === 'dif-container hidden') {
                    while (buttons[this.focusIndex - 1].className.includes('game-button l')) {
                        this.focusIndex += 1;
                    }
                }
                buttons[this.focusIndex].focus();
            }
        }
        if (pressedKey === 'ArrowLeft' || pressedKey === 'ArrowUp') {
            const focusedbutton = document.activeElement;
            const name = focusedbutton.tagName;
            if (name !== 'BUTTON') {
                buttons[0].focus();
            }
            else {
                this.focusIndex = this.focusIndex === 0 ? (this.focusIndex = 0) : (this.focusIndex -= 1);
                const dif = (_b = this.view.querySelector('.game-container')) === null || _b === void 0 ? void 0 : _b.firstChild;
                if ((dif === null || dif === void 0 ? void 0 : dif.className) === 'dif-container hidden') {
                    while (buttons[this.focusIndex].className.includes('game-button l')) {
                        this.focusIndex -= 1;
                    }
                }
                buttons[this.focusIndex].focus();
                buttons[this.focusIndex].focus();
            }
        }
        if (pressedKey === 'Enter') {
            const focusedbutton = document.activeElement;
            const name = focusedbutton.tagName;
            if (name === 'button') {
                focusedbutton.click();
            }
        }
    }
    // ctrlr
    handleKeysLevel(pressedKey) {
        const key = pressedKey.toLowerCase();
        if (key === 'n') {
            const newGame = this.view.querySelector('.new-game-button');
            newGame.click();
        }
        if (key === 'a') {
            const playGame = this.view.querySelector('.play-again-button');
            playGame.click();
        }
        if (Number(key) > 0 && Number(key) <= 7) {
            const diff = this.view.querySelector(`.l${key}`);
            diff.click();
        }
        document.body.focus();
    }
    // ctrlr
    handleKeysOption(pressedKey) {
        const key = pressedKey.toLowerCase();
        if (key === 'n') {
            const newGame = this.view.querySelector('.new-game-button');
            newGame.click();
        }
        if (key === 'a') {
            const playGame = this.view.querySelector('.play-again-button');
            playGame.click();
        }
        if (key === 'arrowleft') {
            const diff = this.view.querySelectorAll('.option')[0];
            diff.click();
        }
        if (key === 'arrowright') {
            const diff = this.view.querySelectorAll('.option')[1];
            diff.click();
        }
        document.body.focus();
    }
    // ctrlr
    handlePressKey(key) {
        if (['n', '1', '2', '3', '4', '5', '6', '7', 'a', 'ArrowLeft', 'ArrowRight', ' '].find((p) => p === key)) {
            const dif = this.view.querySelector('.dif-container');
            if ((dif === null || dif === void 0 ? void 0 : dif.className) === 'dif-container') {
                this.handleKeysLevel(key);
            }
            else {
                this.handleKeysOption(key);
            }
            document.body.focus();
        }
        else {
            this.handleNavKeys(key);
        }
    }
}
//   constructor() {
//     super();
//     this.renderSprintView();
//     this.isSoundOn = true;
//   }
//   renderSprintView() {
//     this.view = document.createElement('div');
//     this.view.classList.add('sprint');
//     document.addEventListener('keydown', (e) => console.log(e.key));
//     const gameBlock = document.createElement('div');
//     gameBlock.classList.add('sprint-block');
//     const controlsBlock = document.createElement('div');
//     controlsBlock.classList.add('sprint-controls-block');
//     const counter = document.createElement('span');
//     counter.classList.add('sprint-counter');
//     const soundButton = document.createElement('button');
//     soundButton.classList.add('sprint-sound-button');
//     controlsBlock.append(counter, soundButton);
//     const wordBlock = document.createElement('div');
//     wordBlock.classList.add('sprint-word-block');
//     const wordControlsBlock = document.createElement('div');
//     wordControlsBlock.classList.add('sprint-word-controls-block');
//     const checkers = document.createElement('div');
//     checkers.classList.add('sprint-checkers');
//     [1, 2, 3].forEach((i): void => {
//       const checker = document.createElement('div');
//       checker.className = `checker checker-${i}`;
//       checker.innerText = '✓';
//       checkers.append(checker);
//     });
//     const wordSoundButton = document.createElement('button');
//     wordSoundButton.classList.add('sprint-word-sound-button');
//     wordControlsBlock.append(checkers, wordSoundButton);
//     wordBlock.prepend(wordControlsBlock);
//     gameBlock.append(controlsBlock, wordBlock);
//     this.view.append(this.createTimer(), gameBlock);
//   }
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SprintView);


/***/ }),

/***/ "./src/pages/main-page/main-page-controller.ts":
/*!*****************************************************!*\
  !*** ./src/pages/main-page/main-page-controller.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _main_page_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page-view */ "./src/pages/main-page/main-page-view.ts");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
/* eslint-disable import/no-cycle */



class MainPageController extends _application_controller__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.setView();
    }
    setView() {
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.pageView = new _main_page_view__WEBPACK_IMPORTED_MODULE_1__["default"]();
        // this.addListeners();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPageController);


/***/ }),

/***/ "./src/pages/main-page/main-page-view.ts":
/*!***********************************************!*\
  !*** ./src/pages/main-page/main-page-view.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-view */ "./src/pages/application-view.ts");
/* harmony import */ var _styles_main_page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main-page.css */ "./src/styles/main-page.css");
/* harmony import */ var _styles_burger_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/burger.css */ "./src/styles/burger.css");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
/* harmony import */ var _games_games_page_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../games/games-page-controller */ "./src/pages/games/games-page-controller.ts");
/* eslint-disable import/no-cycle */



/* prettier-ignore */



class MainPageView extends _application_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.renderMainPage();
    }
    renderMainPage() {
        this.view = document.createElement('div');
        this.view.classList.add('main-page');
        const title = document.createElement('h1');
        title.classList.add('main-page__title');
        title.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.rsLang;
        const introText = document.createElement('div');
        introText.classList.add('main-page__text');
        const text1 = document.createElement('p');
        text1.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.mainPageText1;
        const text2 = document.createElement('p');
        text2.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.mainPageText2;
        introText.append(text1, text2);
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        const learnButton = document.createElement('button');
        learnButton.classList.add('btn_intro', 'btn', 'btn_colored', 'learn');
        learnButton.addEventListener('click', _App__WEBPACK_IMPORTED_MODULE_4__["default"].renderBookPage);
        learnButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.learnButtonText;
        const playButton = document.createElement('button');
        playButton.classList.add('btn_intro', 'btn', 'btn_bordered', 'play');
        playButton.addEventListener('click', () => {
            var _a;
            const gamesController = new _games_games_page_controller__WEBPACK_IMPORTED_MODULE_5__["default"]();
            _App__WEBPACK_IMPORTED_MODULE_4__["default"].setController(gamesController);
            const mainButton = document.querySelector('.main-page-link');
            mainButton.classList.remove('active');
            (_a = document.querySelector('.game-page-link')) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        });
        playButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.playButtonText;
        buttons.append(learnButton, playButton);
        this.view.append(title, introText, buttons);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPageView);


/***/ }),

/***/ "./src/pages/registration-page/registration-controller.ts":
/*!****************************************************************!*\
  !*** ./src/pages/registration-page/registration-controller.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/functions */ "./src/functions/functions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _registration_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-model */ "./src/pages/registration-page/registration-model.ts");
/* harmony import */ var _types_Statistic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/Statistic */ "./src/types/Statistic.ts");
/* harmony import */ var _registration_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-view */ "./src/pages/registration-page/registration-view.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/no-cycle */





/* eslint-disable import/no-cycle */



class RegistrationController extends _application_controller__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.setView();
    }
    setView() {
        this.regModel = new _registration_model__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.pageView = new _registration_view__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.addListeners();
    }
    signUpUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.regModel
                .createUser(user)
                .then((result) => {
                if (result.ok) {
                    return result.json();
                }
                return `${result.status} ${result.statusText}`;
            })
                .then((data) => __awaiter(this, void 0, void 0, function* () {
                if (typeof data === 'object') {
                    yield this.regModel
                        .signInUser(user)
                        .then((result) => {
                        if (result.ok) {
                            return result.json();
                        }
                        return `${result.status} ${result.statusText}`;
                    })
                        .then((userData) => _App__WEBPACK_IMPORTED_MODULE_6__["default"].signIn(userData))
                        .then(() => {
                        this.createStatistic();
                    });
                }
            }));
        });
    }
    /* eslint-disable class-methods-use-this */
    createStatistic() {
        const initialStat = new _types_Statistic__WEBPACK_IMPORTED_MODULE_4__["default"]();
        initialStat.initStatistic();
    }
    /* eslint-disable no-alert */
    addListeners() {
        var _a;
        (_a = this.pageView.view
            .querySelector('.sign-up-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            var _b, _c, _d;
            const name = ((_b = document.querySelector('.name-input')) === null || _b === void 0 ? void 0 : _b.value) || '';
            const email = ((_c = document.querySelector('.email-input')) === null || _c === void 0 ? void 0 : _c.value) || '';
            if (!(0,_functions_functions__WEBPACK_IMPORTED_MODULE_0__.isValidEmail)(email)) {
                alert(`${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.invalidEmail} ${email}`);
                return;
            }
            const password = ((_d = document.querySelector('.password-input')) === null || _d === void 0 ? void 0 : _d.value) || '';
            if (!(0,_functions_functions__WEBPACK_IMPORTED_MODULE_0__.isValidPassword)(password)) {
                alert(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.invalidPassword);
                return;
            }
            const user = { name, email, password };
            yield this.signUpUser(user);
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationController);


/***/ }),

/***/ "./src/pages/registration-page/registration-model.ts":
/*!***********************************************************!*\
  !*** ./src/pages/registration-page/registration-model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
/* eslint-disable import/no-cycle */

class RegModel extends _Api__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegModel);


/***/ }),

/***/ "./src/pages/registration-page/registration-view.ts":
/*!**********************************************************!*\
  !*** ./src/pages/registration-page/registration-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_authorisation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/authorisation.css */ "./src/styles/authorisation.css");
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../application-view */ "./src/pages/application-view.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App */ "./src/App.ts");



/* eslint-disable import/no-cycle */

class RegistrationView extends _application_view__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super();
        this.renderRegBlock();
    }
    renderRegBlock() {
        this.view = document.createElement('div');
        this.view.classList.add('registration');
        const title = document.createElement('p');
        title.classList.add('reg-title');
        title.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.signUpTitle;
        const nameInput = document.createElement('input');
        nameInput.classList.add('name-input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.name);
        nameInput.setAttribute('autocomplete', 'off');
        const emailInput = document.createElement('input');
        emailInput.classList.add('email-input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.email);
        emailInput.setAttribute('autocomplete', 'off');
        const passwordInput = document.createElement('input');
        passwordInput.classList.add('password-input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.password);
        passwordInput.setAttribute('autocomplete', 'off');
        const signUpButton = document.createElement('button');
        signUpButton.classList.add('sign-up-button');
        signUpButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.upperSignUpButtonText;
        const haveAccount = document.createElement('div');
        haveAccount.classList.add('have-account');
        const haveAccountSpan = document.createElement('span');
        haveAccountSpan.classList.add('have-account-span');
        haveAccountSpan.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.haveAccountText;
        const haveAccountButton = document.createElement('button');
        haveAccountButton.classList.add('have-account-button');
        haveAccountButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.signInButtonText;
        haveAccountButton.addEventListener('click', _App__WEBPACK_IMPORTED_MODULE_3__["default"].renderAuthPage);
        haveAccount.append(haveAccountSpan, haveAccountButton);
        this.view.append(title, nameInput, emailInput, passwordInput, signUpButton, haveAccount);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationView);


/***/ }),

/***/ "./src/pages/stat-page/stat-constants.ts":
/*!***********************************************!*\
  !*** ./src/pages/stat-page/stat-constants.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllStatButtonText": () => (/* binding */ AllStatButtonText),
/* harmony export */   "TodayStatButtonText": () => (/* binding */ TodayStatButtonText)
/* harmony export */ });
const TodayStatButtonText = 'Статистика за сегодня';
const AllStatButtonText = 'Статистика за все время';



/***/ }),

/***/ "./src/pages/stat-page/stat-controller.ts":
/*!************************************************!*\
  !*** ./src/pages/stat-page/stat-controller.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _stat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat-model */ "./src/pages/stat-page/stat-model.ts");
/* harmony import */ var _stat_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stat-view */ "./src/pages/stat-page/stat-view.ts");
/* harmony import */ var _types_Statistic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/Statistic */ "./src/types/Statistic.ts");
/* eslint-disable import/no-cycle */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// import User from "../../types/User";




class StatController extends _application_controller__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        this.stat = new _types_Statistic__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.pageView = new _stat_view__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.model = new _stat_model__WEBPACK_IMPORTED_MODULE_3__["default"](this.pageView);
        this.addEventListeners();
        this.getStat();
    }
    addEventListeners() {
        this.pageView.view.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
            const target = e.target;
            if (target.id === 'stat-button-today') {
                this.showDay();
            }
            if (target.id === 'stat-button-all') {
                this.showAll();
            }
        }));
    }
    getStat() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (_App__WEBPACK_IMPORTED_MODULE_1__["default"].user) {
                this.stat = yield this.api.getUserStat((_a = _App__WEBPACK_IMPORTED_MODULE_1__["default"].user) === null || _a === void 0 ? void 0 : _a.userId, (_b = _App__WEBPACK_IMPORTED_MODULE_1__["default"].user) === null || _b === void 0 ? void 0 : _b.token);
                // this.pageView.showEverydayStat(this.stat);
            }
        });
    }
    showDay() {
        let newWordsAudio = 0;
        let newWordsSprint = 0;
        let accuracyAudio = 0;
        let accuracySprint = 0;
        let serieAudio = 0;
        let serieSprint = 0;
        let accuracyTotal = 0;
        const today = new Date();
        const stat = new _types_Statistic__WEBPACK_IMPORTED_MODULE_5__["default"]();
        const dateShort = stat.toShortDate(today);
        const toOptionsObject = this.stat.optional;
        const toOptionsArrayString = toOptionsObject.value;
        const StatOptionsArrray = JSON.parse(toOptionsArrayString.toString());
        stat.optional = StatOptionsArrray;
        const findAudio = stat.optional.find((item) => item.dateShort === dateShort && item.gameName === 'audiocall');
        const findSprint = stat.optional.find((item) => item.dateShort === dateShort && item.gameName === 'sprint');
        let totalCorrect = 0;
        let totalwrong = 0;
        let learnedFromBook = 0;
        let learnedTotal = 0;
        if (findAudio) {
            newWordsAudio = findAudio.newWords;
            accuracyAudio = findAudio.accuracy;
            serieAudio = findAudio.serie;
            totalCorrect += findAudio.correctAnswers;
            totalwrong += findAudio.wrongAnswers;
            learnedFromBook = findAudio.learnedByBook;
            learnedTotal += findAudio.learnedWords;
        }
        if (findSprint) {
            newWordsSprint = findSprint.newWords;
            accuracySprint = findSprint.accuracy;
            serieSprint = findSprint.serie;
            totalCorrect += findSprint.correctAnswers;
            totalwrong += findSprint.wrongAnswers;
            learnedFromBook = findSprint.learnedByBook;
            learnedTotal += findSprint.learnedWords;
        }
        if (totalCorrect + totalwrong !== 0) {
            accuracyTotal = totalCorrect / (totalCorrect + totalwrong);
        }
        this.pageView.showEverydayStat(newWordsAudio, newWordsSprint, accuracyAudio, accuracySprint, serieAudio, serieSprint, `${learnedTotal} + ${learnedFromBook}`, accuracyTotal);
    }
    showAll() {
        const stat = new _types_Statistic__WEBPACK_IMPORTED_MODULE_5__["default"]();
        const toOptionsObject = this.stat.optional;
        const toOptionsArrayString = toOptionsObject.value;
        const StatOptionsArrray = JSON.parse(toOptionsArrayString.toString());
        stat.optional = StatOptionsArrray;
        const newWordsProgress = new Array();
        const learnedProgress = new Array();
        let dates = stat.optional.map((p) => p.dateShort);
        dates = dates.filter((item, index, arr) => index === arr.indexOf(item));
        let learnded = this.stat.learnedWords;
        let newWords = 0;
        dates.forEach((date) => {
            const optionals = stat.optional.filter((p) => p.dateShort === date);
            optionals.forEach((item) => {
                newWords += item.newWords;
                learnded += item.learnedWords;
            });
            newWordsProgress.push({ date: new Date(date), count: newWords });
            learnedProgress.push({ date: new Date(date), count: learnded });
        });
        console.log(newWordsProgress, learnedProgress);
        // this.pageView.showAllStat();
        // let learnedWords :  Array<{date:Date , count:number}>
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatController);


/***/ }),

/***/ "./src/pages/stat-page/stat-model.ts":
/*!*******************************************!*\
  !*** ./src/pages/stat-page/stat-model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable import/no-cycle */
class StatModel {
    constructor(pageView) {
        this.pageView = pageView;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatModel);


/***/ }),

/***/ "./src/pages/stat-page/stat-view.ts":
/*!******************************************!*\
  !*** ./src/pages/stat-page/stat-view.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stat_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.css */ "./src/pages/stat-page/stat.css");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application-view */ "./src/pages/application-view.ts");
/* harmony import */ var _stat_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat-constants */ "./src/pages/stat-page/stat-constants.ts");
/* eslint-disable import/no-cycle */

// import { Chart, registerables } from 'chart.js';



class StatView extends _application_view__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        this.focusIndex = 0;
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.renderView();
        // Chart.register(...registerables);
    }
    showEverydayStat(newWordsAudio, newWordsSprint, accuracyAudio, accuracySprint, serieAudio, serieSprint, learnded, accuracyTotal) {
        const div = this.view.querySelector('.stat-content');
        div.innerHTML = '';
        const title = document.createElement('div');
        title.innerText = 'Статистика за сегодня';
        const titleAudioCall = document.createElement('h3');
        title.className = 'title ';
        titleAudioCall.innerText = 'Аудиовызов';
        const divNewWordsAudio = document.createElement('div');
        divNewWordsAudio.innerText = `Новых слов : ${newWordsAudio}`;
        const divAccuracyAudio = document.createElement('div');
        divAccuracyAudio.innerText = `Верных ответов, % : ${accuracyAudio.toFixed(2)}`;
        const divSerieAudio = document.createElement('div');
        divSerieAudio.innerText = `Лучшая серия ответов : ${serieAudio}`;
        div.append(title, titleAudioCall, divNewWordsAudio, divAccuracyAudio, divSerieAudio);
        const titleSprint = document.createElement('h3');
        titleSprint.innerText = 'Спринт';
        const divNewWordsSprint = document.createElement('div');
        divNewWordsSprint.innerText = `Новых слов : ${newWordsSprint}`;
        const divAccuracySprint = document.createElement('div');
        divAccuracySprint.innerText = `Верных ответов, %: ${accuracySprint.toFixed(2)}`;
        const divSerieSprint = document.createElement('div');
        divSerieSprint.innerText = `Лучшая серия ответов : ${serieSprint}`;
        div.append(titleSprint, divNewWordsSprint, divAccuracySprint, divSerieSprint);
        const titleWords = document.createElement('h3');
        titleWords.innerText = 'Статистика по словам за день';
        const divNewWords = document.createElement('div');
        divNewWords.innerText = `Новых слов : ${newWordsSprint + newWordsAudio}`;
        const divLearnWords = document.createElement('div');
        divLearnWords.innerText = `Слов изучено: ${learnded}`;
        const divAccuracyWords = document.createElement('div');
        divAccuracyWords.innerText = `Верных ответов, % : ${accuracyTotal.toFixed(2)}`;
        div.append(titleWords, divNewWords, divLearnWords, divAccuracyWords);
    }
    // showAllStat() {
    //   const div = this.view.querySelector('.stat-content') as HTMLDivElement;
    //   div.innerHTML = '';
    //   div.innerText = 'all';
    //   const canvasLearnedWords = document.createElement('canvas') as HTMLCanvasElement;
    //   canvasLearnedWords.id = 'learnedWordsChart';
    //   const canvasLearnedWordsContext = canvasLearnedWords.getContext(
    //     '2d',
    //   ) as CanvasRenderingContext2D;
    //   const myChartlearned = new Chart(canvasLearnedWordsContext, {
    //     type: 'bar',
    //     data: {
    //       labels: [1, 2, 3, 4, 5, 6],
    //       datasets: [{
    //         {
    //           label: '# of Votes',
    //           data: [12, 19, 3, 5, 2, 3],
    //           backgroundColor: [
    //           'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(75, 192, 192, 0.2)',
    //             'rgba(153, 102, 255, 0.2)',
    //           'rgba(255, 159, 64, 0.2)'
    //           ],
    //         borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //           'rgba(75, 192, 192, 1)',
    //             'rgba(153, 102, 255, 1)',
    //           'rgba(255, 159, 64, 1)'
    //           ],
    //           borderWidth: 5,
    //       }],
    //    },
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true,
    //            }
    //       },
    //     },
    //   });
    //   div.appendChild(canvasLearnedWords);
    // }
    renderView() {
        const div = document.createElement('div');
        div.className = 'stat-container';
        this.view = div;
        const buttonsBarDiv = document.createElement('div');
        buttonsBarDiv.className = 'div-buttons-flex';
        const buttonDay = document.createElement('button');
        buttonDay.innerText = _stat_constants__WEBPACK_IMPORTED_MODULE_3__.TodayStatButtonText;
        buttonDay.className = 'stat-button';
        buttonDay.id = 'stat-button-today';
        const buttonAll = document.createElement('button');
        buttonAll.innerText = _stat_constants__WEBPACK_IMPORTED_MODULE_3__.AllStatButtonText;
        buttonAll.className = 'stat-button';
        buttonAll.id = 'stat-button-all';
        buttonsBarDiv.append(buttonDay, buttonAll);
        const divContent = document.createElement('div');
        divContent.className = 'stat-content';
        div.appendChild(buttonsBarDiv);
        div.appendChild(divContent);
        const divDay = document.createElement('div');
        divDay.className = 'div-day';
        const divAll = document.createElement('div');
        divAll.className = 'div-day';
        /// //
        ///
        // div.appendChild(canvasNewWords);
        // div.appendChild(canvasLearnedWords);
        this.view = div;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatView);


/***/ }),

/***/ "./src/types/StatOptional.ts":
/*!***********************************!*\
  !*** ./src/types/StatOptional.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class StatOptional {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatOptional);


/***/ }),

/***/ "./src/types/Statistic.ts":
/*!********************************!*\
  !*** ./src/types/Statistic.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api */ "./src/Api.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/App.ts");
/* harmony import */ var _StatOptional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatOptional */ "./src/types/StatOptional.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/no-cycle */



class Statistic {
    constructor() {
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    initOptional(gameName) {
        const date = new Date();
        const statOptional = new _StatOptional__WEBPACK_IMPORTED_MODULE_2__["default"]();
        statOptional.dateShort = this.toShortDate(date);
        statOptional.correctAnswers = 0;
        statOptional.wrongAnswers = 0;
        statOptional.accuracy = 0;
        statOptional.newWords = 0;
        statOptional.learnedWords = 0;
        statOptional.gameName = gameName;
        statOptional.serie = 0;
        statOptional.currentSerie = 0;
        statOptional.learnedByBook = 0;
        return statOptional;
    }
    initStatistic() {
        const initStatistic = new Statistic();
        initStatistic.optional = new Array();
        initStatistic.learnedWords = 0;
        initStatistic.optional.push(this.initOptional('audiocall'));
        initStatistic.optional.push(this.initOptional('sprint'));
        // initStatistic.optional.push(this.initOptional('book'));
        if (_App__WEBPACK_IMPORTED_MODULE_1__["default"].user) {
            this.api.updateUserStat(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token, initStatistic);
        }
    }
    /* eslint-disable  class-methods-use-this */
    toShortDate(date) {
        const d = new Date(date);
        let month = `${d.getMonth() + 1}`;
        let day = `${d.getDate()}`;
        const year = d.getFullYear();
        if (month.length < 2) {
            month = `0${month}`;
        }
        if (day.length < 2) {
            day = `0${day}`;
        }
        return [year, month, day].join('.').toString();
    }
    updateStatistic(updateWordsResult, gameName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { isNew } = updateWordsResult;
            const { isCorrect } = updateWordsResult;
            const { isLearned } = updateWordsResult;
            if (_App__WEBPACK_IMPORTED_MODULE_1__["default"].user) {
                const today = new Date();
                const currentStat = yield this.api.getUserStat(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token);
                const dateShort = this.toShortDate(today);
                const toOptionsObject = currentStat.optional;
                const toOptionsArrayString = toOptionsObject.value;
                const StatOptionsArrray = JSON.parse(toOptionsArrayString.toString());
                currentStat.optional = StatOptionsArrray;
                const find = currentStat.optional.find((item) => item.gameName === gameName && item.dateShort === dateShort);
                if (find) {
                    // currentStat.learnedWords = isLearned
                    //   ? currentStat.learnedWords + 1
                    //   : currentStat.learnedWords;
                    find.correctAnswers = isCorrect ? find.correctAnswers + 1 : find.correctAnswers;
                    find.wrongAnswers = isCorrect ? find.wrongAnswers : find.wrongAnswers + 1;
                    find.learnedWords = isLearned ? find.learnedWords + 1 : find.learnedWords;
                    find.accuracy = find.correctAnswers / (find.correctAnswers + find.wrongAnswers);
                    find.currentSerie = isCorrect ? find.currentSerie + 1 : 0;
                    find.serie = find.currentSerie > find.serie ? find.currentSerie : find.serie;
                    find.newWords = isNew ? find.newWords + 1 : find.newWords;
                    yield this.api.updateUserStat(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token, currentStat);
                }
                if (!find) {
                    const statOptional = new _StatOptional__WEBPACK_IMPORTED_MODULE_2__["default"]();
                    statOptional.dateShort = dateShort;
                    statOptional.correctAnswers = isCorrect ? 1 : 0;
                    statOptional.wrongAnswers = isCorrect ? 0 : 1;
                    const a = statOptional.correctAnswers;
                    const b = statOptional.wrongAnswers + statOptional.correctAnswers;
                    statOptional.accuracy = a / b;
                    statOptional.newWords = updateWordsResult.isNew ? 1 : 0;
                    statOptional.learnedWords = isLearned ? 1 : 0;
                    statOptional.gameName = gameName;
                    statOptional.serie = isCorrect ? 1 : 0;
                    statOptional.currentSerie = isCorrect ? 1 : 0;
                    currentStat.optional.push(statOptional);
                    currentStat.learnedWords = 0;
                    yield this.api.updateUserStat(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token, currentStat);
                }
            }
        });
    }
    addLearnedWordFromBook() {
        return __awaiter(this, void 0, void 0, function* () {
            if (_App__WEBPACK_IMPORTED_MODULE_1__["default"].user) {
                const today = new Date();
                const currentStat = yield this.api.getUserStat(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token);
                const dateShort = this.toShortDate(today);
                const toOptionsObject = currentStat.optional;
                const toOptionsArrayString = toOptionsObject.value;
                const StatOptionsArrray = JSON.parse(toOptionsArrayString.toString());
                currentStat.optional = StatOptionsArrray;
                const find = currentStat.optional.filter((item) => item.dateShort === dateShort);
                if (find.length === 0) {
                    const initStatistic = new Statistic();
                    initStatistic.learnedWords = 1;
                    initStatistic.optional.push(this.initOptional('audiocall'));
                    initStatistic.optional.push(this.initOptional('sprint'));
                    initStatistic.optional[0].learnedByBook += 1;
                    initStatistic.optional[1].learnedByBook += 1;
                    yield this.api.updateUserStat(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token, currentStat);
                }
                if (find) {
                    for (let i = 0; i < find.length; i += 1) {
                        find[i].learnedByBook += 1;
                    }
                    yield this.api.updateUserStat(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token, currentStat);
                }
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statistic);


/***/ }),

/***/ "./src/types/userword.ts":
/*!*******************************!*\
  !*** ./src/types/userword.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api */ "./src/Api.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/App.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/no-cycle */


class UserWord {
    constructor() {
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    UpdateUserWords(correctAnswer, isCorrect) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let userWords = new Array();
            let isNew = false;
            let wasLearned = false;
            let isLearned = false;
            if ((_a = _App__WEBPACK_IMPORTED_MODULE_1__["default"].user) === null || _a === void 0 ? void 0 : _a.userId) {
                userWords = yield this.api.getUserWords(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token);
                const find = userWords.find((item) => item.wordId === correctAnswer.id);
                if (!find) {
                    this.createUserWord(isCorrect, correctAnswer);
                    isNew = true;
                }
                if (find) {
                    wasLearned = find.optional.wasLearned;
                    let { progress } = find.optional;
                    progress = isCorrect ? (progress += 20) : (progress -= 20);
                    progress = progress >= 100 ? 100 : progress;
                    progress = progress <= 0 ? 0 : progress;
                    if (progress === 100 && !wasLearned) {
                        wasLearned = true;
                        isLearned = true;
                    }
                    const difficulty = progress === 100 ? 'no-hard' : find.difficulty;
                    if (isCorrect) {
                        find.optional.successfulAttempts += 1;
                    }
                    if (!isCorrect) {
                        find.optional.unsuccessfulAttempts += 1;
                    }
                    const userWord = new UserWord();
                    userWord.word = correctAnswer;
                    userWord.difficulty = difficulty;
                    userWord.optional = {
                        progress,
                        successfulAttempts: find.optional.successfulAttempts,
                        unsuccessfulAttempts: find.optional.unsuccessfulAttempts,
                        wasLearned,
                    };
                    userWord.word = correctAnswer;
                    userWord.wordId = find.wordId;
                    isNew = find.optional.successfulAttempts + find.optional.successfulAttempts === 1;
                    this.api.updateUserWord(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token, userWord);
                }
            }
            return { isNew, isCorrect, isLearned };
        });
    }
    createUserWord(isCorrect, correctAnswer) {
        if (_App__WEBPACK_IMPORTED_MODULE_1__["default"].user) {
            const progress = isCorrect ? 20 : 0;
            const successfulAttempts = isCorrect ? 1 : 0;
            const unsuccessfulAttempts = isCorrect ? 0 : 1;
            const userWord = new UserWord();
            userWord.word = correctAnswer;
            userWord.difficulty = 'no-hard';
            userWord.optional = {
                progress,
                successfulAttempts,
                unsuccessfulAttempts,
                wasLearned: false,
            };
            this.api.createUserWord(_App__WEBPACK_IMPORTED_MODULE_1__["default"].user.userId, _App__WEBPACK_IMPORTED_MODULE_1__["default"].user.token, userWord);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserWord);


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrowLeft": () => (/* binding */ arrowLeft),
/* harmony export */   "arrowRight": () => (/* binding */ arrowRight),
/* harmony export */   "audioGameName": () => (/* binding */ audioGameName),
/* harmony export */   "backButtonText": () => (/* binding */ backButtonText),
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl),
/* harmony export */   "btnHardText": () => (/* binding */ btnHardText),
/* harmony export */   "btnLevelText": () => (/* binding */ btnLevelText),
/* harmony export */   "correctResultsText": () => (/* binding */ correctResultsText),
/* harmony export */   "correctText": () => (/* binding */ correctText),
/* harmony export */   "doneButtonText": () => (/* binding */ doneButtonText),
/* harmony export */   "email": () => (/* binding */ email),
/* harmony export */   "extraGameName": () => (/* binding */ extraGameName),
/* harmony export */   "hardButtonText": () => (/* binding */ hardButtonText),
/* harmony export */   "haveAccountText": () => (/* binding */ haveAccountText),
/* harmony export */   "haveNotYetAccountText": () => (/* binding */ haveNotYetAccountText),
/* harmony export */   "iconAudioGameSrc": () => (/* binding */ iconAudioGameSrc),
/* harmony export */   "iconExtraGameSrc": () => (/* binding */ iconExtraGameSrc),
/* harmony export */   "iconSprintSrc": () => (/* binding */ iconSprintSrc),
/* harmony export */   "incorrectResultsText": () => (/* binding */ incorrectResultsText),
/* harmony export */   "incorrectText": () => (/* binding */ incorrectText),
/* harmony export */   "invalidEmail": () => (/* binding */ invalidEmail),
/* harmony export */   "invalidPassword": () => (/* binding */ invalidPassword),
/* harmony export */   "learnButtonText": () => (/* binding */ learnButtonText),
/* harmony export */   "levelSelectLabelText": () => (/* binding */ levelSelectLabelText),
/* harmony export */   "levelText": () => (/* binding */ levelText),
/* harmony export */   "logOutText": () => (/* binding */ logOutText),
/* harmony export */   "mainPageText1": () => (/* binding */ mainPageText1),
/* harmony export */   "mainPageText2": () => (/* binding */ mainPageText2),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "newAudioGameButtonText": () => (/* binding */ newAudioGameButtonText),
/* harmony export */   "newSprintGameButtonText": () => (/* binding */ newSprintGameButtonText),
/* harmony export */   "nextText": () => (/* binding */ nextText),
/* harmony export */   "numberOfCardsPerPage": () => (/* binding */ numberOfCardsPerPage),
/* harmony export */   "numberOfLevels": () => (/* binding */ numberOfLevels),
/* harmony export */   "numberOfPagesInLevel": () => (/* binding */ numberOfPagesInLevel),
/* harmony export */   "password": () => (/* binding */ password),
/* harmony export */   "playButtonText": () => (/* binding */ playButtonText),
/* harmony export */   "progressForDoneWord": () => (/* binding */ progressForDoneWord),
/* harmony export */   "progressForNoDoneWord": () => (/* binding */ progressForNoDoneWord),
/* harmony export */   "resultsText": () => (/* binding */ resultsText),
/* harmony export */   "rsLang": () => (/* binding */ rsLang),
/* harmony export */   "signInButtonText": () => (/* binding */ signInButtonText),
/* harmony export */   "signInTitle": () => (/* binding */ signInTitle),
/* harmony export */   "signUpButtonText": () => (/* binding */ signUpButtonText),
/* harmony export */   "signUpTitle": () => (/* binding */ signUpTitle),
/* harmony export */   "skipText": () => (/* binding */ skipText),
/* harmony export */   "sprintGameName": () => (/* binding */ sprintGameName),
/* harmony export */   "sprintTime": () => (/* binding */ sprintTime),
/* harmony export */   "upperSignInButtonText": () => (/* binding */ upperSignInButtonText),
/* harmony export */   "upperSignUpButtonText": () => (/* binding */ upperSignUpButtonText)
/* harmony export */ });
const baseUrl = 'https://rs-lang-team112.herokuapp.com';
const signInButtonText = 'Войти';
const upperSignInButtonText = 'ВОЙТИ';
const logOutText = 'Выйти';
const signInTitle = 'Следи за статистикой в своем аккаунте';
const signUpTitle = 'Создай свой аккаунт';
const signUpButtonText = 'Зарегистрироваться';
const upperSignUpButtonText = 'ЗАРЕГИСТРИРОВАТЬСЯ';
const name = 'Имя';
const email = 'Почта';
const password = 'Пароль';
const haveNotYetAccountText = 'Ещё не успели создать аккаунт?';
const haveAccountText = 'Уже есть аккаунт?';
const invalidEmail = 'Invalid email';
const invalidPassword = 'Password should contain digits, letters or both';
/* prettier-ignore */
const mainPageText1 = 'Перед вами приложение для эффективного изучения иностранных слов в игровой форме. Тратя всего несколько минут в день, вы обогатите словарный запас и приблизитесь к своей цели наконец-то выучить английский.';
/* prettier-ignore */
const mainPageText2 = 'Дополнительно приложение позволяет прокачать навык аудирования и понять, как применять выученные слова и фразы в жизни. Игры превратят изучение языка в удовольствие и позволят с лёгкостью запоминать новые слова. Начни изучать английский прямо сейчас!';
const rsLang = 'RS Lang';
const learnButtonText = 'Учиться';
const playButtonText = 'Играть';
const numberOfLevels = 7; // 6 + 1(все сложные слова)
const numberOfPagesInLevel = 30;
const numberOfCardsPerPage = 20;
const btnHardText = 'сложные';
const btnLevelText = 'уровень ';
const audioGameName = 'Аудиовызов';
const sprintGameName = 'Спринт';
const extraGameName = 'Экстра';
const hardButtonText = 'Сложное';
const doneButtonText = 'Изучено';
const iconSprintSrc = './assets/svg/icon_sprint.svg';
const iconAudioGameSrc = './assets/svg/icon_audio_game.svg';
const iconExtraGameSrc = './assets/svg/icon_audio_game.svg';
const progressForDoneWord = 100;
const progressForNoDoneWord = 0;
const backButtonText = 'Назад';
const levelText = 'Уровень';
const levelSelectLabelText = 'Выберите уровень сложности';
const newAudioGameButtonText = 'Новая игра Аудиовызов (N)';
const newSprintGameButtonText = 'Новая игра Спринт (N)';
const skipText = 'Пропустить (Space)';
const nextText = 'Далее (Space)';
const correctResultsText = 'Верные ответы';
const incorrectResultsText = 'Неверные ответы:';
const resultsText = 'Результаты';
const sprintTime = 60;
const correctText = 'Верно';
const incorrectText = 'Неверно';
const arrowRight = '→';
const arrowLeft = '←';
// const



/***/ }),

/***/ "./src/assets/img/bg_main.jpg":
/*!************************************!*\
  !*** ./src/assets/img/bg_main.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a641fdbbb51950685c7b.jpg";

/***/ }),

/***/ "./src/assets/svg/audio.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/audio.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de92b85007499341093d.svg";

/***/ }),

/***/ "./src/assets/svg/flags.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/flags.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72e46ba018e2e8e07455.svg";

/***/ }),

/***/ "./src/assets/svg/rs_school_js.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/rs_school_js.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d336898bcd718ad55a1.svg";

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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.ts");


const app = new _App__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxJQUFJO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNEJB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V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNIO0FBQ3hCLGdCQUFnQiw0Q0FBRztBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvZ2FtZXMvYXVkaW8tY2FsbC1wYWdlL2F1ZGlvLmNzcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2dhbWVzL2F1ZGlvLWNhbGwtcGFnZS9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9nYW1lcy9zcHJpbnQtcGFnZS9zcHJpbnQuY3NzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvc3RhdC1wYWdlL3N0YXQuY3NzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvc3R5bGVzL2F1dGhvcmlzYXRpb24uY3NzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvc3R5bGVzL2J1cmdlci5jc3MiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvY2FyZHMuY3NzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvc3R5bGVzL2xldmVsLWJ1dHRvbnMuY3NzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvc3R5bGVzL21haW4tcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvcGFnaW5hdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvZ2FtZXMvYXVkaW8tY2FsbC1wYWdlL2F1ZGlvLmNzcz80NWU5Iiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvZ2FtZXMvYXVkaW8tY2FsbC1wYWdlL21vZGFsLmNzcz8zNDRiIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvZ2FtZXMvc3ByaW50LXBhZ2Uvc3ByaW50LmNzcz9mN2M5Iiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvc3RhdC1wYWdlL3N0YXQuY3NzP2I0ZTEiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvYXV0aG9yaXNhdGlvbi5jc3M/ZTVlYyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9idXJnZXIuY3NzP2MyNGMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvY2FyZHMuY3NzP2Q5OGIiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvbGV2ZWwtYnV0dG9ucy5jc3M/YmE2MSIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9tYWluLXBhZ2UuY3NzPzFjNDAiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9wYWdpbmF0aW9uLmNzcz9hZWNkIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9BcGkudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvYXBwbGljYXRpb24tY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2FwcGxpY2F0aW9uLXZpZXcudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hdXRoLXBhZ2UvYXV0aC1jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvYXV0aC1wYWdlL2F1dGgtbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hdXRoLXBhZ2UvYXV0aC12aWV3LnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvYm9vay1wYWdlL2Jvb2stY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2Jvb2stcGFnZS9ib29rLW1vZGVsLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvYm9vay1wYWdlL2Jvb2stdmlldy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2Jvb2stcGFnZS9jYXJkLXZpZXcudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9nYW1lcy9hdWRpby1jYWxsLXBhZ2UvYXVkaW8tY2FsbC1jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvZ2FtZXMvYXVkaW8tY2FsbC1wYWdlL2F1ZGlvLW1vZGVsLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvZ2FtZXMvYXVkaW8tY2FsbC1wYWdlL2F1ZGlvLXF1ZXN0aW9uLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2dhbWVzL2F1ZGlvLWNhbGwtcGFnZS9hdWRpby12aWV3LnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvZ2FtZXMvZ2FtZS1jb21tb24tdmlldy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2dhbWVzL2dhbWVzLXBhZ2UtY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2dhbWVzL2dhbWVzLXBhZ2Utdmlldy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2dhbWVzL3NwcmludC1wYWdlL3NwcmludC1jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvZ2FtZXMvc3ByaW50LXBhZ2Uvc3ByaW50LW1vZGVsLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvZ2FtZXMvc3ByaW50LXBhZ2Uvc3ByaW50LXF1ZXN0aW9uLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2dhbWVzL3NwcmludC1wYWdlL3NwcmludC12aWV3LnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS1jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS12aWV3LnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24tbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24tdmlldy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL3N0YXQtcGFnZS9zdGF0LWNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL3N0YXQtcGFnZS9zdGF0LWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9zdGF0LXBhZ2Uvc3RhdC1tb2RlbC50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL3N0YXQtcGFnZS9zdGF0LXZpZXcudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy90eXBlcy9TdGF0T3B0aW9uYWwudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy90eXBlcy9TdGF0aXN0aWMudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy90eXBlcy91c2Vyd29yZC50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzdGVzdC1hcGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JzdGVzdC1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JzdGVzdC1hcGkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXVkaW8tY2FsbC1jb250YWluZXJ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICByb3ctZ2FwOiAyMHB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuIFxcclxcbn1cXHJcXG4uYnV0dG9ucy1jb250YWluZXJ7XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4uZGl2LXF1aXotY29udGFpbmVye1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ucXVlc2lvbi1jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5IDogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ucXVlc2lvbi1jb250YWluZXIgPiBkaXZ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG4ubmV4dC1xdWVzdGlvbi1idXR0b257XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHdpZHRoOiAyNzBweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJyb3duKTtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLm5leHQtcXVlc3Rpb24tYnV0dG9uOmhvdmVye1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5uZXctZ2FtZS1idXR0b246OmhvdmVye1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbmxhYmVse1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaGlkZGVue1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLm5ldy1nYW1lLWJ1dHRvbiwgLnBsYXktYWdhaW4tYnV0dG9ue1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgYmFja2dyb3VuZDogI0VDOTkwRTtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLnBsYXktYWdhaW4tYnV0dG9ue1xcclxcbiAgd2lkdGg6IDI3MHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYWxpZ24tc2VsZjpmbGV4LWVuZDtcXHJcXG59XFxyXFxuLm5ldy1nYW1lLWJ1dHRvbjpob3ZlciwgLnBsYXktYWdhaW4tYnV0dG9uOmhvdmVye1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmdhbWUtYnV0dG9ue1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmUgXFxyXFxufVxcclxcbi5nYW1lLWJ1dHRvbjpob3ZlcntcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4ub3B0aW9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIHdpZHRoOiAyNzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmwxe1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG59XFxyXFxuLmwye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xcclxcbn1cXHJcXG4ubDN7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctYnJpZ2h0KTtcXHJcXG59XFxyXFxuLmw0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWNvbG9yLW1lZGl1bSk7XFxyXFxufVxcclxcbi5sNXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyb3duKTtcXHJcXG59XFxyXFxuLmw2e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxyXFxufVxcclxcbi5sN3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcbi5jb3JyZWN0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tY29tbW9uKTtcXHJcXG59XFxyXFxuLndyb25ne1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuLyogLmRpdi1wbGF5e1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9QbGF5LnBuZycpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOjk5JSA5OSU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG4qL1xcclxcbi5kaXYtcGxheTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XFxyXFxufVxcclxcbi5nYW1lLXByb2dyZXNzLWJhcntcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy1icmlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaXppbmc6IHVuc2V0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ubG9hZGluZ3tcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy1icmlnaHQpO1xcclxcbiAgYm94LXNpemluZzogdW5zZXQ7XFxyXFxufVxcclxcbi5kaWYtY29udGFpbmVye1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmRpZi1jb250YWluZXIgPiBsYWJlbHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG4uZ3JpZC1zdGF0dXMtY29udGFpbmVye1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNzBweCA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uc3Bhbi1udW1iZXJ7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZSBcXHJcXG59XFxyXFxuLnNwYW4tdmFsdWV7XFxyXFxuICBQb2ludGVyLWV2ZW50czogbm9uZSBcXHJcXG59XFxyXFxuLmRpdi1vcHRpb24tZ3JpZHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvZ2FtZXMvYXVkaW8tY2FsbC1wYWdlL2F1ZGlvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCOztBQUV4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLDBEQUEwRDtFQUMxRCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwwREFBMEQ7RUFDMUQsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDBEQUEwRDtFQUMxRCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZjtBQUNGO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTs7Ozs7Ozs7O0NBU0M7QUFDRDtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QiwwREFBMEQ7RUFDMUQsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXVkaW8tY2FsbC1jb250YWluZXJ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICByb3ctZ2FwOiAyMHB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuIFxcclxcbn1cXHJcXG4uYnV0dG9ucy1jb250YWluZXJ7XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4uZGl2LXF1aXotY29udGFpbmVye1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ucXVlc2lvbi1jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5IDogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ucXVlc2lvbi1jb250YWluZXIgPiBkaXZ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG4ubmV4dC1xdWVzdGlvbi1idXR0b257XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHdpZHRoOiAyNzBweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJyb3duKTtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLm5leHQtcXVlc3Rpb24tYnV0dG9uOmhvdmVye1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5uZXctZ2FtZS1idXR0b246OmhvdmVye1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbmxhYmVse1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaGlkZGVue1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLm5ldy1nYW1lLWJ1dHRvbiwgLnBsYXktYWdhaW4tYnV0dG9ue1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgYmFja2dyb3VuZDogI0VDOTkwRTtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLnBsYXktYWdhaW4tYnV0dG9ue1xcclxcbiAgd2lkdGg6IDI3MHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYWxpZ24tc2VsZjpmbGV4LWVuZDtcXHJcXG59XFxyXFxuLm5ldy1nYW1lLWJ1dHRvbjpob3ZlciwgLnBsYXktYWdhaW4tYnV0dG9uOmhvdmVye1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmdhbWUtYnV0dG9ue1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmUgXFxyXFxufVxcclxcbi5nYW1lLWJ1dHRvbjpob3ZlcntcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4ub3B0aW9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIHdpZHRoOiAyNzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmwxe1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG59XFxyXFxuLmwye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xcclxcbn1cXHJcXG4ubDN7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctYnJpZ2h0KTtcXHJcXG59XFxyXFxuLmw0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWNvbG9yLW1lZGl1bSk7XFxyXFxufVxcclxcbi5sNXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyb3duKTtcXHJcXG59XFxyXFxuLmw2e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxyXFxufVxcclxcbi5sN3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcbi5jb3JyZWN0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tY29tbW9uKTtcXHJcXG59XFxyXFxuLndyb25ne1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuLyogLmRpdi1wbGF5e1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9QbGF5LnBuZycpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOjk5JSA5OSU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG4qL1xcclxcbi5kaXYtcGxheTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XFxyXFxufVxcclxcbi5nYW1lLXByb2dyZXNzLWJhcntcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy1icmlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaXppbmc6IHVuc2V0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ubG9hZGluZ3tcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy1icmlnaHQpO1xcclxcbiAgYm94LXNpemluZzogdW5zZXQ7XFxyXFxufVxcclxcbi5kaWYtY29udGFpbmVye1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmRpZi1jb250YWluZXIgPiBsYWJlbHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG4uZ3JpZC1zdGF0dXMtY29udGFpbmVye1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNzBweCA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uc3Bhbi1udW1iZXJ7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZSBcXHJcXG59XFxyXFxuLnNwYW4tdmFsdWV7XFxyXFxuICBQb2ludGVyLWV2ZW50czogbm9uZSBcXHJcXG59XFxyXFxuLmRpdi1vcHRpb24tZ3JpZHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvYXVkaW8uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNiwgMTE1LCAxMTUsIDAuNDYpO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDVweCA0MHB4IDVweCA0MHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tIDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNsb3NlIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Nik7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jbG9zZTpob3ZlcixcXHJcXG4ubW9kYWwtY2xvc2U6Zm9jdXMge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXYtcmVzdWx0LWZsZXgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LXJlc3VsdC1mbGV4PnNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLyogZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7ICovXFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtc3Bhbi1jb3JyZWN0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWNvbW1vbik7XFxyXFxuICAgIFxcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtc3Bhbi13cm9uZyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFuc3dlci1jb250YWluZXItY29ycmVjdD5kaXY+c3BhbixcXHJcXG4uYW5zd2VyLWNvbnRhaW5lci13cm9uZz5kaXY+c3BhbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXItY29udGFpbmVyLWNvcnJlY3Q+ZGl2PmRpdixcXHJcXG4uYW5zd2VyLWNvbnRhaW5lci13cm9uZz5kaXY+ZGl2IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8taWNvbiB7XFxyXFxuICAgIHdpZHRoOiAzN3B4O1xcclxcbiAgICBoZWlnaHQ6IDI3cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xcclxcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8taWNvbi5kaXNhYmxlZCB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvZ2FtZXMvYXVkaW8tY2FsbC1wYWdlL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBRUE7O0lBRUksMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQzs7SUFFaEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsbURBQWdEO0lBQ2hELHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMkRBQXdEO0lBQ3hELDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTYsIDExNSwgMTE1LCAwLjQ2KTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA1cHggNDBweCA1cHggNDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jbG9zZSB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDYpO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY2xvc2U6aG92ZXIsXFxyXFxuLm1vZGFsLWNsb3NlOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LXJlc3VsdC1mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi1yZXN1bHQtZmxleD5zcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAqL1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXNwYW4tY29ycmVjdCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1jb21tb24pO1xcclxcbiAgICBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXNwYW4td3Jvbmcge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXItY29udGFpbmVyLWNvcnJlY3Q+ZGl2PnNwYW4sXFxyXFxuLmFuc3dlci1jb250YWluZXItd3Jvbmc+ZGl2PnNwYW4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5zd2VyLWNvbnRhaW5lci1jb3JyZWN0PmRpdj5kaXYsXFxyXFxuLmFuc3dlci1jb250YWluZXItd3Jvbmc+ZGl2PmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb24ge1xcclxcbiAgICB3aWR0aDogMzdweDtcXHJcXG4gICAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2F1ZGlvLnN2ZycpO1xcclxcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2F1ZGlvLnN2ZycpO1xcclxcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icm93bik7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uLmRpc2FibGVkIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tdGltZXItc2l6ZTogMTAwcHg7XFxuICAtLWNoZWNrZXItc2l6ZTogNDBweDtcXG59XFxuXFxuLnNwcmludCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNTBweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uc3ByaW50LXRpbWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogdmFyKC0tdGltZXItc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXRpbWVyLXNpemUpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLXRpbWVyLXNpemUpIC8gNCk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXRpbWVyLXNpemUpIC8gMik7XFxufVxcblxcbi5zcHJpbnQtdGltZXIuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zcHJpbnQtYmxvY2sge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xcbn1cXG5cXG4uc3ByaW50LWNvbnRyb2xzLWJsb2NrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1JTtcXG59XFxuXFxuLnNwcmludC13b3JkLWJsb2NrIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogOTUlO1xcbn1cXG5cXG4uc3ByaW50LXdvcmQtY29udHJvbHMtYmxvY2ssXFxuLnNwcmludC1jaGVja2VycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zcHJpbnQtd29yZC1jb250cm9scy1ibG9jayB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zcHJpbnQtY2hlY2tlcnMge1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2VyIHtcXG4gIHdpZHRoOiB2YXIoLS1jaGVja2VyLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaGVja2VyLXNpemUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNoZWNrZXItc2l6ZSkgLyAyKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tY2hlY2tlci1zaXplKSAvIDIpO1xcbn1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PSovXFxuXFxuLnNwcmludC1xdWVzdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheSA6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFuc3dlcnMtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGl2LW9wdGlvbi1ncmlkLnJpZ2h0IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyMHB4O1xcbn1cXG5cXG4uc3ByaW50LW9yaWdpbmFsLXdvcmQge1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcbn1cXG5cXG4uc3ByaW50LXZhcmlhdGlvbi13b3JkIHtcXG4gIGNvbG9yOiAjZmZmZmZmXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9nYW1lcy9zcHJpbnQtcGFnZS9zcHJpbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDRDQUE0QztBQUM5Qzs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS10aW1lci1zaXplOiAxMDBweDtcXG4gIC0tY2hlY2tlci1zaXplOiA0MHB4O1xcbn1cXG5cXG4uc3ByaW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA1MHB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zcHJpbnQtdGltZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiB2YXIoLS10aW1lci1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tdGltZXItc2l6ZSk7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tdGltZXItc2l6ZSkgLyA0KTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tdGltZXItc2l6ZSkgLyAyKTtcXG59XFxuXFxuLnNwcmludC10aW1lci5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNwcmludC1ibG9jayB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XFxufVxcblxcbi5zcHJpbnQtY29udHJvbHMtYmxvY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUlO1xcbn1cXG5cXG4uc3ByaW50LXdvcmQtYmxvY2sge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA5NSU7XFxufVxcblxcbi5zcHJpbnQtd29yZC1jb250cm9scy1ibG9jayxcXG4uc3ByaW50LWNoZWNrZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNwcmludC13b3JkLWNvbnRyb2xzLWJsb2NrIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNwcmludC1jaGVja2VycyB7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrZXIge1xcbiAgd2lkdGg6IHZhcigtLWNoZWNrZXItc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWNoZWNrZXItc2l6ZSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2hlY2tlci1zaXplKSAvIDIpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jaGVja2VyLXNpemUpIC8gMik7XFxufVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG5cXG4uc3ByaW50LXF1ZXN0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5IDogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYW5zd2Vycy1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kaXYtb3B0aW9uLWdyaWQucmlnaHQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDIwcHg7XFxufVxcblxcbi5zcHJpbnQtb3JpZ2luYWwtd29yZCB7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxufVxcblxcbi5zcHJpbnQtdmFyaWF0aW9uLXdvcmQge1xcbiAgY29sb3I6ICNmZmZmZmZcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YXQtY29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7ICBcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDAuOTVmcjtcXHJcXG4gXFxyXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxuICBcXHJcXG59XFxyXFxuLmRpdi1idXR0b25zLWZsZXh7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG4uc3RhdC1idXR0b257XFxyXFxuICAgIHdpZHRoOiAyODBweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gICAgb3BhY2l0eTogMC45OyAgIFxcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgXFxyXFxuICB9XFxyXFxuICAuc3RhdC1idXR0b246aG92ZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgLnN0YXQtY29udGVudHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMCwgMjEwLCAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC5zdGF0LWNvbnRlbnQgPiBkaXZ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyAgIFxcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDIuMmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMi4ycmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgfVxcclxcbiAgLnN0YXQtY29udGVudCA+IGgze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7ICAgXFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBjb2xvciA6IGJsYWNrO1xcclxcbiAgfVxcclxcbiAgLnRpdGxle1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdGF0Y29udGVudCA+IC50aXRsZXtcXHJcXG4gICAgY29sb3IgOiBibGFjaztcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvc3RhdC1wYWdlL3N0YXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0I7O0lBRS9CLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTs7RUFFakI7RUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usd0NBQXdDO0lBQ3hDLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0VBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN0YXQtY29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7ICBcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDAuOTVmcjtcXHJcXG4gXFxyXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxuICBcXHJcXG59XFxyXFxuLmRpdi1idXR0b25zLWZsZXh7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG4uc3RhdC1idXR0b257XFxyXFxuICAgIHdpZHRoOiAyODBweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gICAgb3BhY2l0eTogMC45OyAgIFxcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgXFxyXFxuICB9XFxyXFxuICAuc3RhdC1idXR0b246aG92ZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgLnN0YXQtY29udGVudHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMCwgMjEwLCAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC5zdGF0LWNvbnRlbnQgPiBkaXZ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyAgIFxcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDIuMmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMi4ycmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgfVxcclxcbiAgLnN0YXQtY29udGVudCA+IGgze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7ICAgXFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBjb2xvciA6IGJsYWNrO1xcclxcbiAgfVxcclxcbiAgLnRpdGxle1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdGF0Y29udGVudCA+IC50aXRsZXtcXHJcXG4gICAgY29sb3IgOiBibGFjaztcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXV0aG9yaXNhdGlvbixcXHJcXG4ucmVnaXN0cmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hdXRoLXRpdGxlLFxcclxcbi5yZWctdGl0bGUsXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDIxcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5hdXRoLXRpdGxlLFxcclxcbi5yZWctdGl0bGUsXFxyXFxuLmhhdmUtbm90LXlldC1hY2NvdW50LXNwYW4sXFxyXFxuLmhhdmUtYWNjb3VudC1zcGFuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aC10aXRsZSB7XFxyXFxuICB3aWR0aDogMjIycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWlucHV0LFxcclxcbi5lbWFpbC1pbnB1dCxcXHJcXG4ucGFzc3dvcmQtaW5wdXQsXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjYzdiY2FiO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLmVtYWlsLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLnBhc3N3b3JkLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZWM5OTBlO1xcclxcbiAgb3V0bGluZTogI2VjOTkwZSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1pbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFzc3dvcmQtaW5wdXQge1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA2NXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbjpob3ZlcixcXHJcXG4uc2lnbi11cC1idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5OTBlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQsXFxyXFxuLmhhdmUtYWNjb3VudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtYnV0dG9uLFxcclxcbi5oYXZlLWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1hY2NvdW50LWJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhdmUtbm90LXlldC1hY2NvdW50LXNwYW4sXFxyXFxuLmhhdmUtYWNjb3VudC1zcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5oYXZlLW5vdC15ZXQtYWNjb3VudC1idXR0b24sXFxyXFxuLmhhdmUtYWNjb3VudC1idXR0b24ge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGNvbG9yOiAjZWM5OTBlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtYnV0dG9uOmhvdmVyLFxcclxcbi5oYXZlLWFjY291bnQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2F1dGhvcmlzYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7Ozs7RUFJRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOzs7OztFQUtFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7RUFLRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBOzs7O0VBSUUsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFNBQVM7RUFDVCxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXV0aG9yaXNhdGlvbixcXHJcXG4ucmVnaXN0cmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hdXRoLXRpdGxlLFxcclxcbi5yZWctdGl0bGUsXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDIxcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5hdXRoLXRpdGxlLFxcclxcbi5yZWctdGl0bGUsXFxyXFxuLmhhdmUtbm90LXlldC1hY2NvdW50LXNwYW4sXFxyXFxuLmhhdmUtYWNjb3VudC1zcGFuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aC10aXRsZSB7XFxyXFxuICB3aWR0aDogMjIycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWlucHV0LFxcclxcbi5lbWFpbC1pbnB1dCxcXHJcXG4ucGFzc3dvcmQtaW5wdXQsXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjYzdiY2FiO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLmVtYWlsLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLnBhc3N3b3JkLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZWM5OTBlO1xcclxcbiAgb3V0bGluZTogI2VjOTkwZSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1pbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFzc3dvcmQtaW5wdXQge1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA2NXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbjpob3ZlcixcXHJcXG4uc2lnbi11cC1idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5OTBlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQsXFxyXFxuLmhhdmUtYWNjb3VudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtYnV0dG9uLFxcclxcbi5oYXZlLWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1hY2NvdW50LWJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhdmUtbm90LXlldC1hY2NvdW50LXNwYW4sXFxyXFxuLmhhdmUtYWNjb3VudC1zcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5oYXZlLW5vdC15ZXQtYWNjb3VudC1idXR0b24sXFxyXFxuLmhhdmUtYWNjb3VudC1idXR0b24ge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGNvbG9yOiAjZWM5OTBlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtYnV0dG9uOmhvdmVyLFxcclxcbi5oYXZlLWFjY291bnQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYnVyZ2VyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyLWxpbmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXI6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmJ1cmdlci5vcGVuIC5idXJnZXItbGluZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnVyZ2VyLm9wZW46YmVmb3JlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgNTAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXJnZXIub3BlbjphZnRlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTUwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYnVyZ2VyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0UsMkNBQTJDO0VBQzdDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1cmdlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTZweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlci1saW5lIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5idXJnZXIub3BlbiAuYnVyZ2VyLWxpbmUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1cmdlci5vcGVuOmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDAsIDUwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnVyZ2VyLm9wZW46YWZ0ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDAsIC01MCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9zdmcvYXVkaW8uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcmRzX2xpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMjBweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDElO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5jYXJkc19saXN0IHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHJvdy1nYXA6IDIwcHg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyODVweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweCAwcHggMHB4IDBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pbWcge1xcclxcbiAgaGVpZ2h0OiAxOTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19zdGF0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgcmlnaHQ6IC0zcHg7XFxyXFxuICB0b3A6IC0zcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAyLjFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19zdGF0IHNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjNzI1NzQ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmRfX2VuZ2xpc2gge1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uIHtcXHJcXG4gIHdpZHRoOiAzN3B4O1xcclxcbiAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxyXFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIG1hc2stc2l6ZTogY29udGFpbjtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8taWNvbi5kaXNhYmxlZCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMzNweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjJweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcmRfX2J0bjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5kb25lX19idG46aG92ZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5waHJhc2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZGVmaW5pdGlvbiB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZGVmaW5pdGlvbiBpIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5waHJhc2VfX2RlZmluaXRpb25fZW5nbGlzaCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19kZWZpbml0aW9uX3J1c3NpYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZXhhbXBsZSB7XFxyXFxuICBjb2xvcjogIzkxOTE5MTtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZXhhbXBsZV9lbmdsaXNoIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5waHJhc2VfX2V4YW1wbGVfcnVzc2lhbiB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIGhhcmQgY2FyZHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmNhcmQuaGFyZCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFyZCAuY2FyZF9fc3RhdCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcmQgLmNhcmRfX3N0YXQgc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcmQgLndvcmRfX2VuZ2xpc2gge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5oYXJkIC5oYXJkX19idG4ge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIGRvbmUgY2FyZHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmNhcmQuZG9uZSB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUgLmNhcmRfX3N0YXQge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSAuY2FyZF9fc3RhdCBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUgLndvcmRfX2VuZ2xpc2gge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSAuZG9uZV9fYnRuIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIHdvcmQgcHJvZ3Jlc3MgYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uY2FyZF9fcHJvZ3Jlc3MtYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTcwcHg7XFxyXFxuICBoZWlnaHQ6IDZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNpemluZzogdW5zZXQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZGZkNGQ0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpIHRyYW5zbGF0ZVkoMTJweCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9ncmVzcy1sb2FkaW5nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY2FyZHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0VB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LFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2FyZHNfbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAyMHB4O1xcclxcbiAgY29sdW1uLWdhcDogMSU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgLmNhcmRzX2xpc3Qge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcm93LWdhcDogMjBweDtcXHJcXG4gICAgY29sdW1uLWdhcDogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDI4NXB4O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDBweCAwcHggMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2ltZyB7XFxyXFxuICBoZWlnaHQ6IDE5MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX3N0YXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICByaWdodDogLTNweDtcXHJcXG4gIHRvcDogLTNweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDIuMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX3N0YXQgc3BhbiB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM3MjU3NDc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX190ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMTBweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi53b3JkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZF9fZW5nbGlzaCB7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb24ge1xcclxcbiAgd2lkdGg6IDM3cHg7XFxyXFxuICBoZWlnaHQ6IDI3cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL3N2Zy9hdWRpby5zdmdcXFwiKTtcXHJcXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBtYXNrLXNpemU6IGNvbnRhaW47XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL3N2Zy9hdWRpby5zdmdcXFwiKTtcXHJcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8taWNvbi5kaXNhYmxlZCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMzNweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjJweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcmRfX2J0bjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5kb25lX19idG46aG92ZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5waHJhc2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZGVmaW5pdGlvbiB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZGVmaW5pdGlvbiBpIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5waHJhc2VfX2RlZmluaXRpb25fZW5nbGlzaCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19kZWZpbml0aW9uX3J1c3NpYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZXhhbXBsZSB7XFxyXFxuICBjb2xvcjogIzkxOTE5MTtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZXhhbXBsZV9lbmdsaXNoIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5waHJhc2VfX2V4YW1wbGVfcnVzc2lhbiB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIGhhcmQgY2FyZHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmNhcmQuaGFyZCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFyZCAuY2FyZF9fc3RhdCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcmQgLmNhcmRfX3N0YXQgc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcmQgLndvcmRfX2VuZ2xpc2gge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5oYXJkIC5oYXJkX19idG4ge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIGRvbmUgY2FyZHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmNhcmQuZG9uZSB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUgLmNhcmRfX3N0YXQge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSAuY2FyZF9fc3RhdCBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUgLndvcmRfX2VuZ2xpc2gge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSAuZG9uZV9fYnRuIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIHdvcmQgcHJvZ3Jlc3MgYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uY2FyZF9fcHJvZ3Jlc3MtYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTcwcHg7XFxyXFxuICBoZWlnaHQ6IDZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNpemluZzogdW5zZXQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZGZkNGQ0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpIHRyYW5zbGF0ZVkoMTJweCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9ncmVzcy1sb2FkaW5nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sZXZlbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBtaW4taGVpZ2h0OiA2NXB4O1xcclxcbiAgbWFyZ2luOiA1NXB4IGF1dG8gMzBweDtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sb3ItYWNjZW50KTsgKi9cXHJcXG4gIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgLmxldmVscyB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcclxcbiAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5sZXZlbHMge1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5sZXZlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWw6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsOmFjdGl2ZSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC5hY3RpdmUge1xcclxcbiAgcGFkZGluZzogMjBweCAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWxfbnVtYmVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTAge1xcclxcbiAgYmFja2dyb3VuZDogI2NkYzFhMjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZGMxYTI7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC0wOmhvdmVyLFxcclxcbi5sZXZlbC0wLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2NkYzFhMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTEge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMTpob3ZlcixcXHJcXG4ubGV2ZWwtMS5hY3RpdmUge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmY2IwNTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmNiMDU7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC0yOmhvdmVyLFxcclxcbi5sZXZlbC0yLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTMge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTM6aG92ZXIsXFxyXFxuLmxldmVsLTMuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTQge1xcclxcbiAgYmFja2dyb3VuZDogIzcyNTc0NztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MjU3NDc7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC00OmhvdmVyLFxcclxcbi5sZXZlbC00LmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogIzcyNTc0NztcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTUge1xcclxcbiAgYmFja2dyb3VuZDogIzQ5NDM0MztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0OTQzNDM7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC01OmhvdmVyLFxcclxcbi5sZXZlbC01LmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogIzQ5NDM0MztcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTYge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBmbGV4LWdyb3c6IDg7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC02OmhvdmVyLFxcclxcbi5sZXZlbC02LmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9sZXZlbC1idXR0b25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwwQ0FBMEM7RUFDMUMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCwyQ0FBMkM7RUFDM0MsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQ0FBMEM7QUFDNUM7O0FBRUE7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxldmVscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDY1cHg7XFxyXFxuICBtYXJnaW46IDU1cHggYXV0byAzMHB4O1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1hY2NlbnQpOyAqL1xcclxcbiAgLyogZm9udC1zaXplOiAycmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAubGV2ZWxzIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDUwcHg7XFxyXFxuICAgIHJvdy1nYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmxldmVscyB7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5sZXZlbCB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgLmxldmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5sZXZlbDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWw6YWN0aXZlIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLmFjdGl2ZSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbF9udW1iZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2RjMWEyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2NkYzFhMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTA6aG92ZXIsXFxyXFxuLmxldmVsLTAuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjY2RjMWEyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC0xOmhvdmVyLFxcclxcbi5sZXZlbC0xLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZjYjA1O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmY2IwNTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTI6aG92ZXIsXFxyXFxuLmxldmVsLTIuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjZmZjYjA1O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMzpob3ZlcixcXHJcXG4ubGV2ZWwtMy5hY3RpdmUge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtNCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzI1NzQ3O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzcyNTc0NztcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTQ6aG92ZXIsXFxyXFxuLmxldmVsLTQuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjNzI1NzQ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtNSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNDk0MzQzO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzQ5NDM0MztcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTU6aG92ZXIsXFxyXFxuLmxldmVsLTUuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjNDk0MzQzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtNiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGZsZXgtZ3JvdzogODtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTY6aG92ZXIsXFxyXFxuLmxldmVsLTYuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UgKiB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcGFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDU1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDcwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWFpbi1wYWdlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDM0cHg7XFxyXFxuICAgIG1heC13aWR0aDogNzIlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAubWFpbi1wYWdlIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1wYWdlX190aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDdyZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWFpbi1wYWdlX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAubWFpbi1wYWdlX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2VfX3RleHQgcCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4tcGFnZV9fdGV4dCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLm1haW4tcGFnZV9fdGV4dCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLmJ1dHRvbnMge1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI4cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5idG5faW50cm8ge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5idG4ge1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjphY3RpdmUge1xcclxcbiAgc2NhbGU6IDk2JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9jb2xvcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG5fYm9yZGVyZWQge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGNvbG9yOiAjZWM5OTBlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4tcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UgKiB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcGFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDU1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDcwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWFpbi1wYWdlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDM0cHg7XFxyXFxuICAgIG1heC13aWR0aDogNzIlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAubWFpbi1wYWdlIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1wYWdlX190aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDdyZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWFpbi1wYWdlX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAubWFpbi1wYWdlX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2VfX3RleHQgcCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4tcGFnZV9fdGV4dCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLm1haW4tcGFnZV9fdGV4dCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLmJ1dHRvbnMge1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI4cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5idG5faW50cm8ge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5idG4ge1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjphY3RpdmUge1xcclxcbiAgc2NhbGU6IDk2JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9jb2xvcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG5fYm9yZGVyZWQge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGNvbG9yOiAjZWM5OTBlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWcvYmdfbWFpbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc3ZnL2ZsYWdzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9zdmcvcnNfc2Nob29sX2pzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1jb2xvci1tYWluOiAjZWM5OTBlO1xcclxcbiAgLS1jb2xvci1tZWRpdW06ICNmMmI4NTc7XFxyXFxuICAtLWNvbG9yLWFjY2VudDogI2FlMzEyYjtcXHJcXG4gIC0tY29sb3ItZ3JheS1saWdodDogI2M3YmNhYjtcXHJcXG4gIC0tY29sb3ItZ3JheS1tZWRpdW06ICNiNTk1NjU7XFxyXFxuICAtLWNvbG9yLWRhcms6ICM0OTQzNDM7XFxyXFxuICAtLWNvbG9yLWJyb3duOiAjNzI1NzQ3O1xcclxcbiAgLS1jb2xvci15ZWxsb3ctYnJpZ2h0OiAjZmZjYjA1O1xcclxcbiAgLS1jb2xvci1ncmVlbi1jb21tb246ICM2ZGEwNzA7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3Qtc2Nyb2xsIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4NCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NjBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2xvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMzBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAuaGVhZGVyX19sb2dvIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAubmF2LWxpc3Qge1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdF9faXRlbSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxLjI3NXB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0X19pdGVtLmFjdGl2ZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0X19pdGVtLmdhbWUtcGFnZS1saW5rLmFjdGl2ZSB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0X19pdGVtOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjYzdiY2FiO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3RfX2l0ZW06bGFzdC1vZi10eXBlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgLm5hdi1saXN0X19pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLyogLm5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9ICovXFxyXFxuICAuaGVhZGVyX25hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IC0zMDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyX25hdi5vcGVuIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlzdCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saXN0X19pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gc3ViLW5hdiAtLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4uc3ViLW5hdiB7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMjBweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpIHRyYW5zbGF0ZVgoLTM2JSkgc2NhbGVZKDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5zdWItbmF2Lm9wZW4ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKSB0cmFuc2xhdGVYKDMwJSkgc2NhbGVZKDEwMCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1wYWdlLWxpbms6aG92ZXIgLnN1Yi1uYXYge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHRyYW5zbGF0ZVgoLTM2JSkgc2NhbGVZKDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLW5hdl9faXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5zdWItbmF2X19pdGVtOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5zdWItbmF2X19pdGVtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1lZGl1bSk7XFxyXFxufVxcclxcblxcclxcbi5zdWItbmF2X19pdGVtIGltZyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2JSk7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5zaWduLWluIHtcXHJcXG4gIHBhZGRpbmc6IDZweCAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgLnNpZ24taW4ge1xcclxcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5zaWduLWluIHtcXHJcXG4gICAgcGFkZGluZzogMTJweCA0NHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbjpob3ZlciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW46YWN0aXZlIHtcXHJcXG4gIHNjYWxlOiA5NiU7XFxyXFxufVxcclxcblxcclxcbi5tYWluX3dyYXBwZXIuYWxsLWRvbmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMzYsIDE1MywgMTQsIDAuMzcpIDAlLCByZ2JhKDIzNiwgMTUzLCAxNCwgMCkgMTAwJSksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuZ2FtZV9fYnV0dG9ucyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2J1dHRvbnMgLmJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUycHg7XFxyXFxuICB3aWR0aDogMjc2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzLjdyZW07XFxyXFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWljb24ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDMxLCAzMSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyLnNlY29uZGFyeSB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX193cmFwcGVyIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuZm9vdGVyX193cmFwcGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTMwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHggMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAuZm9vdGVyX193cmFwcGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTcwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucnNzIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtbG9nbyB7XFxyXFxuICB3aWR0aDogOTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdoX2xvZ28ge1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX3RlYW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5mb290ZXJfX3RlYW0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZ2FwOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC50ZWFtX19saXN0IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRlYW1fX21lbWJlciBhIHtcXHJcXG4gIHBhZGRpbmc6IDAgMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNmZmZmZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgLnRlYW1fX21lbWJlciBhIHtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAudGVhbV9fbWVtYmVyIGEge1xcclxcbiAgICBwYWRkaW5nOiAwIDZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAudGVhbV9fbWVtYmVyIGEge1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbWVtYmVyIGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi50ZWFtX19tZW1iZXI6bGFzdC1vZi10eXBlIGEge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX195ZWFyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMHB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDZCQUE2Qjs7RUFFN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyx5REFBa0Q7RUFDbEQsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnREFBZ0Q7RUFDaEQsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTs7S0FFRztFQUNIO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixNQUFNO0lBQ04sYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxRQUFRO0lBQ1Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNGOztBQUVBLG1DQUFtQzs7QUFFbkM7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHFEQUFxRDtFQUNyRCxtQ0FBbUM7RUFDbkMscUJBQXFCO0VBQ3JCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsdURBQXVEO0VBQ3pEO0FBQ0Y7O0FBRUE7RUFDRSx5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQSxtQ0FBbUM7O0FBRW5DO0VBQ0UsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTsyQ0FDZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGtIQUEyRztBQUM3Rzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9FQUFrRTtFQUNsRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixNQUFNO0VBQ04sbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsTUFBTTtBQUNSOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1jb2xvci1tYWluOiAjZWM5OTBlO1xcclxcbiAgLS1jb2xvci1tZWRpdW06ICNmMmI4NTc7XFxyXFxuICAtLWNvbG9yLWFjY2VudDogI2FlMzEyYjtcXHJcXG4gIC0tY29sb3ItZ3JheS1saWdodDogI2M3YmNhYjtcXHJcXG4gIC0tY29sb3ItZ3JheS1tZWRpdW06ICNiNTk1NjU7XFxyXFxuICAtLWNvbG9yLWRhcms6ICM0OTQzNDM7XFxyXFxuICAtLWNvbG9yLWJyb3duOiAjNzI1NzQ3O1xcclxcbiAgLS1jb2xvci15ZWxsb3ctYnJpZ2h0OiAjZmZjYjA1O1xcclxcbiAgLS1jb2xvci1ncmVlbi1jb21tb246ICM2ZGEwNzA7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWcvYmdfbWFpbi5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LXNjcm9sbCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODQlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDYwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogMTMwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgLmhlYWRlcl9fbG9nbyBpbWcge1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgLm5hdi1saXN0IHtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3RfX2l0ZW0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMS4yNzVweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdF9faXRlbS5hY3RpdmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdF9faXRlbS5nYW1lLXBhZ2UtbGluay5hY3RpdmUge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdF9faXRlbTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2M3YmNhYjtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0X19pdGVtOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5uYXYtbGlzdF9faXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC8qIC5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfSAqL1xcclxcbiAgLmhlYWRlcl9uYXYge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAtMzAwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICB6LWluZGV4OiA0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlcl9uYXYub3BlbiB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpc3Qge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlzdF9faXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tIHN1Yi1uYXYgLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLnN1Yi1uYXYge1xcclxcbiAgei1pbmRleDogMztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDIwcHg7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKSB0cmFuc2xhdGVYKC0zNiUpIHNjYWxlWSgwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuc3ViLW5hdi5vcGVuIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSkgdHJhbnNsYXRlWCgzMCUpIHNjYWxlWSgxMDAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtcGFnZS1saW5rOmhvdmVyIC5zdWItbmF2IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSB0cmFuc2xhdGVYKC0zNiUpIHNjYWxlWSgxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1uYXZfX2l0ZW0ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLW5hdl9faXRlbTpmaXJzdC1vZi10eXBlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLW5hdl9faXRlbTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tZWRpdW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLW5hdl9faXRlbSBpbWcge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNiUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4uc2lnbi1pbiB7XFxyXFxuICBwYWRkaW5nOiA2cHggMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5zaWduLWluIHtcXHJcXG4gICAgcGFkZGluZzogNnB4IDhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuc2lnbi1pbiB7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggNDRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW46aG92ZXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluOmFjdGl2ZSB7XFxyXFxuICBzY2FsZTogOTYlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl93cmFwcGVyLmFsbC1kb25lIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjM2LCAxNTMsIDE0LCAwLjM3KSAwJSwgcmdiYSgyMzYsIDE1MywgMTQsIDApIDEwMCUpLFxcclxcbiAgICB1cmwoXFxcIi4uL2Fzc2V0cy9zdmcvZmxhZ3Muc3ZnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuZ2FtZV9fYnV0dG9ucyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2J1dHRvbnMgLmJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUycHg7XFxyXFxuICB3aWR0aDogMjc2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzLjdyZW07XFxyXFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWljb24ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDMxLCAzMSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyLnNlY29uZGFyeSB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpLCB1cmwoXFxcIi4uL2Fzc2V0cy9pbWcvYmdfbWFpbi5qcGdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fd3JhcHBlciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmZvb3Rlcl9fd3JhcHBlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcm93LWdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLmZvb3Rlcl9fd3JhcHBlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJzcyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHVybChcXFwiLi4vYXNzZXRzL3N2Zy9yc19zY2hvb2xfanMuc3ZnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJzLWxvZ28ge1xcclxcbiAgd2lkdGg6IDkwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5naF9sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX190ZWFtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAuZm9vdGVyX190ZWFtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRlYW1fX2xpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGdhcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAudGVhbV9fbGlzdCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50ZWFtX19tZW1iZXIgYSB7XFxyXFxuICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi44cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZmZmZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gIC50ZWFtX19tZW1iZXIgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnRlYW1fX21lbWJlciBhIHtcXHJcXG4gICAgcGFkZGluZzogMCA2cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLnRlYW1fX21lbWJlciBhIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRlYW1fX21lbWJlciBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbWVtYmVyOmxhc3Qtb2YtdHlwZSBhIHtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9feWVhciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDBweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGFnaW5hdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbjogNTVweCBhdXRvIDMwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgLnBhZ2luYXRpb24ge1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHJvdy1nYXA6IDE0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uLWVsZW1lbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZzogM3B4IDZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbi1lbGVtZW50OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNzI1NzQ3O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbi1lbGVtZW50LmFjdGl2ZSB7XFxyXFxuICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6ICM3MjU3NDc7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGN1cnNvcjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24tZWxlbWVudC5kb25lIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9wYWdpbmF0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBhZ2luYXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW46IDU1cHggYXV0byAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5wYWdpbmF0aW9uIHtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICByb3ctZ2FwOiAxNHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbi1lbGVtZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24tZWxlbWVudDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzcyNTc0NztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24tZWxlbWVudC5hY3RpdmUge1xcclxcbiAgcGFkZGluZzogM3B4IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXHJcXG4gIGNvbG9yOiAjNzI1NzQ3O1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBjdXJzb3I6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uLWVsZW1lbnQuZG9uZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdWRpby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F1ZGlvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcHJpbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcHJpbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0YXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGF0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdXRob3Jpc2F0aW9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXV0aG9yaXNhdGlvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnVyZ2VyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnVyZ2VyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sZXZlbC1idXR0b25zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGV2ZWwtYnV0dG9ucy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi1wYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi1wYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnaW5hdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2luYXRpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcclxuY2xhc3MgQXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XHJcbiAgICAgICAgdGhpcy51c2VycyA9IGAke3RoaXMuYmFzZVVybH0vdXNlcnNgO1xyXG4gICAgICAgIHRoaXMuc2lnbkluID0gYCR7dGhpcy5iYXNlVXJsfS9zaWduaW5gO1xyXG4gICAgICAgIHRoaXMud29yZHMgPSBgJHt0aGlzLmJhc2VVcmx9L3dvcmRzYDtcclxuICAgIH1cclxuICAgIGNyZWF0ZVVzZXIodXNlcikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7dGhpcy51c2Vyc31gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlcihpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7dGhpcy51c2Vyc30vJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbkluVXNlcih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHt0aGlzLnNpZ25Jbn1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IHVzZXIuZW1haWwsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlVXNlcihpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7dGhpcy51c2Vyc30vJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0V29yZHMoZ3JvdXAsIHBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uY2UgPSB5aWVsZCBmZXRjaChgJHt0aGlzLndvcmRzfT9ncm91cD0ke2dyb3VwfSZwYWdlPSR7cGFnZX1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZHMgPSB5aWVsZCByZXNwb25jZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0V29yZHNGb3JMZXZlbChncm91cCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25jZSA9IHlpZWxkIGZldGNoKGAke3RoaXMud29yZHN9P2dyb3VwPSR7Z3JvdXB9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRzID0geWllbGQgcmVzcG9uY2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldE9uZVdvcmQoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uY2UgPSB5aWVsZCBmZXRjaChgJHt0aGlzLndvcmRzfS8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IHlpZWxkIHJlc3BvbmNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldFVzZXJXb3JkcyhpZCwgdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uY2UgPSB5aWVsZCBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzLyR7aWR9L3dvcmRzYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2Vyd29yZCA9IHlpZWxkIHJlc3BvbmNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2Vyd29yZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVVc2VyV29yZChpZCwgdG9rZW4sIHVzZXJXb3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbmNlID0geWllbGQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy8ke2lkfS93b3Jkcy8ke3VzZXJXb3JkLndvcmQuaWR9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmljdWx0eTogdXNlcldvcmQuZGlmZmljdWx0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1c2VyV29yZC5vcHRpb25hbC5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWxBdHRlbXB0czogdXNlcldvcmQub3B0aW9uYWwuc3VjY2Vzc2Z1bEF0dGVtcHRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zdWNjZXNzZnVsQXR0ZW1wdHM6IHVzZXJXb3JkLm9wdGlvbmFsLnVuc3VjY2Vzc2Z1bEF0dGVtcHRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FzTGVhcm5lZDogdXNlcldvcmQub3B0aW9uYWwud2FzTGVhcm5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWRVc2Vyd29yZCA9IHlpZWxkIHJlc3BvbmNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVkVXNlcndvcmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlVXNlcldvcmQoaWQsIHRva2VuLCB1c2VyV29yZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25jZSA9IHlpZWxkIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvJHtpZH0vd29yZHMvJHt1c2VyV29yZC53b3JkLmlkfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmljdWx0eTogdXNlcldvcmQuZGlmZmljdWx0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1c2VyV29yZC5vcHRpb25hbC5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWxBdHRlbXB0czogdXNlcldvcmQub3B0aW9uYWwuc3VjY2Vzc2Z1bEF0dGVtcHRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zdWNjZXNzZnVsQXR0ZW1wdHM6IHVzZXJXb3JkLm9wdGlvbmFsLnVuc3VjY2Vzc2Z1bEF0dGVtcHRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FzTGVhcm5lZDogdXNlcldvcmQub3B0aW9uYWwud2FzTGVhcm5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyV29yZCA9IHlpZWxkIHJlc3BvbmNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkVXNlcldvcmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlcldvcmRzQWxsSGFyZChpZCwgdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uY2UgPSB5aWVsZCBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzLyR7aWR9L2FnZ3JlZ2F0ZWRXb3Jkcz93b3Jkc1BlclBhZ2U9NjAwJmZpbHRlcj17XCJ1c2VyV29yZC5kaWZmaWN1bHR5XCI6XCJoYXJkXCJ9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwQXJyID0geWllbGQgcmVzcG9uY2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BBcnJbMF0ucGFnaW5hdGVkUmVzdWx0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyV29yZHNBZ3JlZ2F0ZWRCeUZpbHRlcihpZCwgdG9rZW4sIHdvcmRzUGVyUGFnZSwgZmlsdGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbmNlID0geWllbGQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy8ke2lkfS9hZ2dyZWdhdGVkV29yZHM/d29yZHNQZXJQYWdlPSR7d29yZHNQZXJQYWdlfSZmaWx0ZXI9JHtmaWx0ZXJ9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2Vyd29yZCA9IHlpZWxkIHJlc3BvbmNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2Vyd29yZFswXS5wYWdpbmF0ZWRSZXN1bHRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldFVzZXJTdGF0KGlkLCB0b2tlbikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25jZSA9IHlpZWxkIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvJHtpZH0vc3RhdGlzdGljc2AsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnN0YXQgPSB5aWVsZCByZXNwb25jZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcnN0YXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlVXNlclN0YXQoaWQsIHRva2VuLCBzdGF0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbmNlID0geWllbGQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy8ke2lkfS9zdGF0aXN0aWNzYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWFybmVkV29yZHM6IHN0YXQubGVhcm5lZFdvcmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHN0YXQub3B0aW9uYWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlZFVzZXJ3b3JkID0geWllbGQgcmVzcG9uY2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWRVc2Vyd29yZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IE1haW5QYWdlQ29udHJvbGxlciBmcm9tICcuL3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2UtY29udHJvbGxlcic7XHJcbi8vIGltcG9ydCBBdWRpb0NvbnRyb2xsZXIgZnJvbSAnLi9wYWdlcy9nYW1lcy9hdWRpby1jYWxsLXBhZ2UvYXVkaW8tY2FsbC1jb250cm9sbGVyJztcclxuaW1wb3J0IEF1dGhDb250cm9sbGVyIGZyb20gJy4vcGFnZXMvYXV0aC1wYWdlL2F1dGgtY29udHJvbGxlcic7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Db250cm9sbGVyIGZyb20gJy4vcGFnZXMvcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgQm9va0NvbnRyb2xsZXIgZnJvbSAnLi9wYWdlcy9ib29rLXBhZ2UvYm9vay1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHJlbW92ZURhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlLCBidXJnZXJNZW51SGFuZGxlLCBjbGlja01lbnVIYW5kbGUsIHNldEJhY2tncm91bmRGb3JCb29rUGFnZSwgZ2V0QWdncmVnYXRlZE51bWJlckZyb21MUywgfSBmcm9tICcuL2Z1bmN0aW9ucy9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBsb2dPdXRUZXh0LCBzaWduSW5CdXR0b25UZXh0IH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgU3ByaW50Q29udHJvbGxlciBmcm9tICcuL3BhZ2VzL2dhbWVzL3NwcmludC1wYWdlL3NwcmludC1jb250cm9sbGVyJztcclxuaW1wb3J0IFN0YXRDb250cm9sbGVyIGZyb20gJy4vcGFnZXMvc3RhdC1wYWdlL3N0YXQtY29udHJvbGxlcic7XHJcbmltcG9ydCBBdWRpb0NvbnRyb2xsZXIgZnJvbSAnLi9wYWdlcy9nYW1lcy9hdWRpby1jYWxsLXBhZ2UvYXVkaW8tY2FsbC1jb250cm9sbGVyJztcclxuY2xhc3MgQXBwIHtcclxuICAgIHN0YXRpYyBzZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcclxuICAgICAgICBBcHAuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgQXBwLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIGlmIChBcHAubWFpbikge1xyXG4gICAgICAgICAgICBBcHAubWFpbi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgQXBwLm1haW4uYXBwZW5kQ2hpbGQoQXBwLmNvbnRyb2xsZXIucGFnZVZpZXcudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBwYWdlTmFtZSB9ID0gQXBwLnBhZ2VJbmZvO1xyXG4gICAgICAgICAgICBpZiAocGFnZU5hbWUgIT09ICdib29rUGFnZScpIHtcclxuICAgICAgICAgICAgICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoJ3BhZ2VJbmZvJywgSlNPTi5zdHJpbmdpZnkoQXBwLnBhZ2VJbmZvKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cclxuICAgIHN0YXRpYyBzaWduSW4oZGF0YSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyRGF0YTtcclxuICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgncnMtbGFuZy11c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgICAgICAgICAgQXBwLnJlbmRlck1haW5QYWdlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluLXBhZ2UtbGluaycpO1xyXG4gICAgICAgICAgICBzaWduSW5CdXR0b24uaW5uZXJUZXh0ID0gbG9nT3V0VGV4dDtcclxuICAgICAgICAgICAgc2lnbkluQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlckF1dGhQYWdlKTtcclxuICAgICAgICAgICAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLmxvZ091dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0LfQsNC80LXQvdC40YLRjCDQsNC70LXRgNGCINC90LAg0YfRgtC+LdGC0L4g0YfQtdC70L7QstC10YfQtdGB0LrQvtC1XHJcbiAgICAgICAgYWxlcnQoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbG9nT3V0KCkge1xyXG4gICAgICAgIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluLXBhZ2UtbGluaycpO1xyXG4gICAgICAgIHNpZ25JbkJ1dHRvbi5pbm5lclRleHQgPSBzaWduSW5CdXR0b25UZXh0O1xyXG4gICAgICAgIHNpZ25JbkJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIEFwcC5sb2dPdXQpO1xyXG4gICAgICAgIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFwcC5yZW5kZXJBdXRoUGFnZSk7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJlbW92ZURhdGFGcm9tTG9jYWxTdG9yYWdlKCdycy1sYW5nLXVzZXInKTtcclxuICAgICAgICByZW1vdmVEYXRhRnJvbUxvY2FsU3RvcmFnZSgnYWdncmVnYXRlZE51bWJlcicpO1xyXG4gICAgICAgIHJlbW92ZURhdGFGcm9tTG9jYWxTdG9yYWdlKCdwYWdlSW5mbycpO1xyXG4gICAgICAgIEFwcC5tYWtlTWFpblRyYW5zcGFyZW50QWdhaW4oKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGFuZ2VBY3RpdmVDbGFzc0Zvck5hdkl0ZW1CeUV2ZW50KGUpIHtcclxuICAgICAgICBBcHAuY2hhbmdlQWN0aXZlQ2xhc3NGb3JOYXZJdGVtQnlFbGVtZW50KGUudGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGFuZ2VBY3RpdmVDbGFzc0Zvck5hdkl0ZW1CeUVsZW1lbnQoZWxlbSkge1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdF9faXRlbScpO1xyXG4gICAgICAgIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWxlbSA9PT0gbnVsbCB8fCBlbGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbmRlck1haW5QYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTWFpblBhZ2VDb250cm9sbGVyKCk7XHJcbiAgICAgICAgQXBwLnNldENvbnRyb2xsZXIoY29udHJvbGxlcik7XHJcbiAgICAgICAgQXBwLnBhZ2VJbmZvID0geyBwYWdlTmFtZTogJ21haW5QYWdlJyB9O1xyXG4gICAgICAgIEFwcC5tYWtlTWFpblRyYW5zcGFyZW50QWdhaW4oKTtcclxuICAgICAgICBjb25zdCBtYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZS1saW5rJyk7XHJcbiAgICAgICAgQXBwLmNoYW5nZUFjdGl2ZUNsYXNzRm9yTmF2SXRlbUJ5RWxlbWVudChtYWluQnV0dG9uKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW5kZXJCb29rUGFnZSgpIHtcclxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEJvb2tDb250cm9sbGVyKCk7XHJcbiAgICAgICAgQXBwLnNldENvbnRyb2xsZXIoY29udHJvbGxlcik7XHJcbiAgICAgICAgY29uc3QgbWFpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXBhZ2UtbGluaycpO1xyXG4gICAgICAgIEFwcC5jaGFuZ2VBY3RpdmVDbGFzc0Zvck5hdkl0ZW1CeUVsZW1lbnQobWFpbkJ1dHRvbik7XHJcbiAgICAgICAgQXBwLnBhZ2VJbmZvID0geyBwYWdlTmFtZTogJ2Jvb2tQYWdlJyB9O1xyXG4gICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZWROdW1iZXIgPSBnZXRBZ2dyZWdhdGVkTnVtYmVyRnJvbUxTKCk7XHJcbiAgICAgICAgc2V0QmFja2dyb3VuZEZvckJvb2tQYWdlKGFnZ3JlZ2F0ZWROdW1iZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbmRlckF1ZGlvY2FsbFBhZ2Uod29yZHMpIHtcclxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEF1ZGlvQ29udHJvbGxlcih3b3Jkcyk7XHJcbiAgICAgICAgQXBwLnNldENvbnRyb2xsZXIoY29udHJvbGxlcik7XHJcbiAgICAgICAgY29uc3QgbWFpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXBhZ2UtbGluaycpO1xyXG4gICAgICAgIEFwcC5jaGFuZ2VBY3RpdmVDbGFzc0Zvck5hdkl0ZW1CeUVsZW1lbnQobWFpbkJ1dHRvbik7XHJcbiAgICAgICAgQXBwLm1ha2VNYWluVHJhbnNwYXJlbnRBZ2FpbigpO1xyXG4gICAgICAgIEFwcC5wYWdlSW5mbyA9IHsgcGFnZU5hbWU6ICdhdWRpb2NhbGxQYWdlJyB9O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbmRlclNwcmludFBhZ2Uod29yZHMpIHtcclxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IFNwcmludENvbnRyb2xsZXIod29yZHMpO1xyXG4gICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGNvbnN0IG1haW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1wYWdlLWxpbmsnKTtcclxuICAgICAgICBBcHAuY2hhbmdlQWN0aXZlQ2xhc3NGb3JOYXZJdGVtQnlFbGVtZW50KG1haW5CdXR0b24pO1xyXG4gICAgICAgIEFwcC5tYWtlTWFpblRyYW5zcGFyZW50QWdhaW4oKTtcclxuICAgICAgICBBcHAucGFnZUluZm8gPSB7IHBhZ2VOYW1lOiAnc3ByaW50UGFnZScgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW5kZXJBdXRoUGFnZSgpIHtcclxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEF1dGhDb250cm9sbGVyKCk7XHJcbiAgICAgICAgQXBwLnNldENvbnRyb2xsZXIoY29udHJvbGxlcik7XHJcbiAgICAgICAgY29uc3QgbWFpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluLXBhZ2UtbGluaycpO1xyXG4gICAgICAgIEFwcC5jaGFuZ2VBY3RpdmVDbGFzc0Zvck5hdkl0ZW1CeUVsZW1lbnQobWFpbkJ1dHRvbik7XHJcbiAgICAgICAgQXBwLm1ha2VNYWluVHJhbnNwYXJlbnRBZ2FpbigpO1xyXG4gICAgICAgIEFwcC5wYWdlSW5mbyA9IHsgcGFnZU5hbWU6ICdhdXRoUGFnZScgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW5kZXJTdGF0UGFnZSgpIHtcclxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IFN0YXRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgQXBwLnNldENvbnRyb2xsZXIoY29udHJvbGxlcik7XHJcbiAgICAgICAgY29uc3QgbWFpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0LXBhZ2UtbGluaycpO1xyXG4gICAgICAgIEFwcC5jaGFuZ2VBY3RpdmVDbGFzc0Zvck5hdkl0ZW1CeUVsZW1lbnQobWFpbkJ1dHRvbik7XHJcbiAgICAgICAgQXBwLm1ha2VNYWluVHJhbnNwYXJlbnRBZ2FpbigpO1xyXG4gICAgICAgIEFwcC5wYWdlSW5mbyA9IHsgcGFnZU5hbWU6ICdzdGF0UGFnZScgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW5kZXJSZWdQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgUmVnaXN0cmF0aW9uQ29udHJvbGxlcigpO1xyXG4gICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG1ha2VNYWluVHJhbnNwYXJlbnRBZ2FpbigpIHtcclxuICAgICAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX3dyYXBwZXInKTtcclxuICAgICAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhbGwtZG9uZScpO1xyXG4gICAgICAgIG1haW5XcmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3JzLWxhbmctdXNlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3JzLWxhbmctdXNlcicpO1xyXG4gICAgICAgICAgICAgICAgQXBwLnNpZ25Jbih1c2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BhZ2VJbmZvJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZUFmdGVyUmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFwcC5yZW5kZXJNYWluUGFnZSk7XHJcbiAgICAgICAgKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZS1saW5rJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFwcC5yZW5kZXJNYWluUGFnZSk7XHJcbiAgICAgICAgKF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stcGFnZS1saW5rJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFwcC5yZW5kZXJCb29rUGFnZSk7XHJcbiAgICAgICAgKF9kID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnQtcGFnZS1saW5rJykpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFwcC5yZW5kZXJTcHJpbnRQYWdlKCkpO1xyXG4gICAgICAgIChfZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXBhZ2UtbGluaycpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEJvb2tDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICBBcHAuY2hhbmdlQWN0aXZlQ2xhc3NGb3JOYXZJdGVtQnlFdmVudChlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAoX2YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbi1pbi1wYWdlLWxpbmsnKSkgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlckF1dGhQYWdlKTtcclxuICAgICAgICAoX2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdC1wYWdlLWxpbmsnKSkgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlclN0YXRQYWdlKTtcclxuICAgICAgICAoX2ggPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBhZ2UtbGluaycpKSA9PT0gbnVsbCB8fCBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBcHAucmVuZGVyQXVkaW9jYWxsUGFnZSgpKTtcclxuICAgICAgICAoX2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbi11cC1wYWdlLWxpbmsnKSkgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlclJlZ1BhZ2UpO1xyXG4gICAgICAgIChfayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKSkgPT09IG51bGwgfHwgX2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVyZ2VyTWVudUhhbmRsZSk7XHJcbiAgICAgICAgKF9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saXN0JykpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrTWVudUhhbmRsZSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJQYWdlQWZ0ZXJSZWxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZUluZm8gPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGFnZUluZm8nKTtcclxuICAgICAgICBjb25zdCB7IHBhZ2VOYW1lIH0gPSBwYWdlSW5mbztcclxuICAgICAgICBzd2l0Y2ggKHBhZ2VOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ21haW5QYWdlJzpcclxuICAgICAgICAgICAgICAgIEFwcC5yZW5kZXJNYWluUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2tQYWdlJzpcclxuICAgICAgICAgICAgICAgIEFwcC5yZW5kZXJCb29rUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2F1ZGlvY2FsbFBhZ2UnOlxyXG4gICAgICAgICAgICAgICAgQXBwLnJlbmRlckF1ZGlvY2FsbFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdGF0UGFnZSc6XHJcbiAgICAgICAgICAgICAgICBBcHAucmVuZGVyU3RhdFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzcHJpbnRQYWdlJzpcclxuICAgICAgICAgICAgICAgIEFwcC5yZW5kZXJTcHJpbnRQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYXV0aFBhZ2UnOlxyXG4gICAgICAgICAgICAgICAgQXBwLnJlbmRlckF1dGhQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIEFwcC5yZW5kZXJNYWluUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cclxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsKSB7XHJcbiAgICByZXR1cm4gISFlbWFpbC5tYXRjaCgvXltcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9JC9nKTsgLy8gdmFsaWRhdGlvbiBmb3IgZW1haWxcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkUGFzc3dvcmQocGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAhIXBhc3N3b3JkLm1hdGNoKC9eW0EtWmEtelxcZF17OCx9JC9nKTsgLy8gbWluaW11bSBlaWdodCBjaGFyYWN0ZXJzLCBsZXR0ZXJzLCBudW1iZXJzIG9yIG1peFxyXG59XHJcbmZ1bmN0aW9uIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UobmFtZSwgZGF0YSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UobmFtZSkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpICE9PSBudWxsID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSB8fCAnJykgOiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZURhdGFGcm9tTG9jYWxTdG9yYWdlKG5hbWUpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xyXG59XHJcbmZ1bmN0aW9uIGRpc2FibGVBdWRpb0J0bnMoKSB7XHJcbiAgICBjb25zdCBhdWRpb0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXVkaW8taWNvbicpO1xyXG4gICAgYXVkaW9CdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXVkaW9CdG5zKCkge1xyXG4gICAgY29uc3QgYXVkaW9CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1ZGlvLWljb24nKTtcclxuICAgIGF1ZGlvQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGJ1cmdlck1lbnVIYW5kbGUoKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICAoX2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX25hdicpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgKF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1uYXYnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgIChfZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1zY3JvbGwnKTtcclxufVxyXG5mdW5jdGlvbiBjbGlja01lbnVIYW5kbGUoZSkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtcGFnZS1saW5rJykpIHtcclxuICAgICAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViLW5hdicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgIChfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfbmF2JykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgKF9kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1uYXYnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICAoX2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jbGFzc0xpc3QucmVtb3ZlKCdub3Qtc2Nyb2xsJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0QWdncmVnYXRlZE51bWJlckZyb21MUygpIHtcclxuICAgIGxldCBhZ2dyZWdhdGVkTnVtYmVyO1xyXG4gICAgaWYgKGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdhZ2dyZWdhdGVkTnVtYmVyJykpIHtcclxuICAgICAgICBhZ2dyZWdhdGVkTnVtYmVyID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2FnZ3JlZ2F0ZWROdW1iZXInKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZWROdW1iZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWROdW1iZXI7XHJcbn1cclxuZnVuY3Rpb24gc2V0QmFja2dyb3VuZEZvckJvb2tQYWdlKGFnZ3JlZ2F0ZWROdW1iZXIpIHtcclxuICAgIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fd3JhcHBlcicpO1xyXG4gICAgaWYgKGFnZ3JlZ2F0ZWROdW1iZXIgPT09IDIwKSB7XHJcbiAgICAgICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWxsLWRvbmUnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbC1kb25lJyk7XHJcbiAgICB9XHJcbn1cclxuLyogcHJldHRpZXItaWdub3JlICovXHJcbmV4cG9ydCB7IGlzVmFsaWRFbWFpbCwgaXNWYWxpZFBhc3N3b3JkLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlLCBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSwgZGlzYWJsZUF1ZGlvQnRucywgZW5hYmxlQXVkaW9CdG5zLCByZW1vdmVEYXRhRnJvbUxvY2FsU3RvcmFnZSwgYnVyZ2VyTWVudUhhbmRsZSwgY2xpY2tNZW51SGFuZGxlLCBnZXRBZ2dyZWdhdGVkTnVtYmVyRnJvbUxTLCBzZXRCYWNrZ3JvdW5kRm9yQm9va1BhZ2UsIH07XHJcbiIsImNsYXNzIEFwcGxpY2F0aW9uQ29udG9sbGVyIHtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbkNvbnRvbGxlcjtcclxuIiwiY2xhc3MgQXBwbGljYXRpb25WaWV3IHtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvblZpZXc7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBBdXRoVmlldyBmcm9tICcuL2F1dGgtdmlldyc7XHJcbmltcG9ydCBBdXRoTW9kZWwgZnJvbSAnLi9hdXRoLW1vZGVsJztcclxuaW1wb3J0IEFwcGxpY2F0aW9uQ29udG9sbGVyIGZyb20gJy4uL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0FwcCc7XHJcbmNsYXNzIEF1dGhDb250cm9sbGVyIGV4dGVuZHMgQXBwbGljYXRpb25Db250b2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNldFZpZXcoKTtcclxuICAgIH1cclxuICAgIHNldFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoTW9kZWwgPSBuZXcgQXV0aE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldyA9IG5ldyBBdXRoVmlldygpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xyXG4gICAgc2lnbkluVXNlcih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5hdXRoTW9kZWxcclxuICAgICAgICAgICAgICAgIC5zaWduSW5Vc2VyKHVzZXIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LnN0YXR1c30gJHtyZXN1bHQuc3RhdHVzVGV4dH1gO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IEFwcC5zaWduSW4oZGF0YSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnBhZ2VWaWV3LnZpZXdcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluLWJ1dHRvbicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiwgX2M7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gKChfYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1pbnB1dCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudmFsdWUpIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnZhbHVlKSB8fCAnJztcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IHsgZW1haWwsIHBhc3N3b3JkIH07XHJcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuc2lnbkluVXNlcih1c2VyKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRyb2xsZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uLy4uL0FwaSc7XHJcbmNsYXNzIEF1dGhNb2RlbCBleHRlbmRzIEFwaSB7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXV0aE1vZGVsO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9BcHAnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9hdXRob3Jpc2F0aW9uLmNzcyc7XHJcbmltcG9ydCB7IGVtYWlsLCBoYXZlTm90WWV0QWNjb3VudFRleHQsIHBhc3N3b3JkLCBzaWduSW5UaXRsZSwgc2lnblVwQnV0dG9uVGV4dCwgdXBwZXJTaWduSW5CdXR0b25UZXh0LCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCBBcHBsaWNhdGlvblZpZXcgZnJvbSAnLi4vYXBwbGljYXRpb24tdmlldyc7XHJcbmNsYXNzIEF1dGhWaWV3IGV4dGVuZHMgQXBwbGljYXRpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJBdXRoQmxvY2soKTtcclxuICAgIH1cclxuICAgIHJlbmRlckF1dGhCbG9jaygpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnYXV0aG9yaXNhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2F1dGgtdGl0bGUnKTtcclxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBzaWduSW5UaXRsZTtcclxuICAgICAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ2VtYWlsLWlucHV0Jyk7XHJcbiAgICAgICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcclxuICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBlbWFpbCk7XHJcbiAgICAgICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvbicpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQuY2xhc3NMaXN0LmFkZCgncGFzc3dvcmQtaW5wdXQnKTtcclxuICAgICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBhc3N3b3JkKTtcclxuICAgICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29uJyk7XHJcbiAgICAgICAgY29uc3Qgc2lnbkluQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgc2lnbkluQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZ24taW4tYnV0dG9uJyk7XHJcbiAgICAgICAgc2lnbkluQnV0dG9uLmlubmVyVGV4dCA9IHVwcGVyU2lnbkluQnV0dG9uVGV4dDtcclxuICAgICAgICBjb25zdCBoYXZlTm90WWV0QWNjb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhhdmVOb3RZZXRBY2NvdW50LmNsYXNzTGlzdC5hZGQoJ2hhdmUtbm90LXlldC1hY2NvdW50Jyk7XHJcbiAgICAgICAgY29uc3QgaGF2ZU5vdFlldEFjY291bnRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGhhdmVOb3RZZXRBY2NvdW50U3Bhbi5jbGFzc0xpc3QuYWRkKCdoYXZlLW5vdC15ZXQtYWNjb3VudC1zcGFuJyk7XHJcbiAgICAgICAgaGF2ZU5vdFlldEFjY291bnRTcGFuLmlubmVyVGV4dCA9IGhhdmVOb3RZZXRBY2NvdW50VGV4dDtcclxuICAgICAgICBjb25zdCBoYXZlTm90WWV0QWNjb3VudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGhhdmVOb3RZZXRBY2NvdW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hhdmUtbm90LXlldC1hY2NvdW50LWJ1dHRvbicpO1xyXG4gICAgICAgIGhhdmVOb3RZZXRBY2NvdW50QnV0dG9uLmlubmVyVGV4dCA9IHNpZ25VcEJ1dHRvblRleHQ7XHJcbiAgICAgICAgaGF2ZU5vdFlldEFjY291bnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBcHAucmVuZGVyUmVnUGFnZSk7XHJcbiAgICAgICAgaGF2ZU5vdFlldEFjY291bnQuYXBwZW5kKGhhdmVOb3RZZXRBY2NvdW50U3BhbiwgaGF2ZU5vdFlldEFjY291bnRCdXR0b24pO1xyXG4gICAgICAgIHRoaXMudmlldy5hcHBlbmQodGl0bGUsIGVtYWlsSW5wdXQsIHBhc3N3b3JkSW5wdXQsIHNpZ25JbkJ1dHRvbiwgaGF2ZU5vdFlldEFjY291bnQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhWaWV3O1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9jYXJkcy5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9sZXZlbC1idXR0b25zLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvcGFnaW5hdGlvbi5jc3MnO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IEFwcGxpY2F0aW9uQ29udG9sbGVyIGZyb20gJy4uL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCb29rUGFnZVZpZXcgfSBmcm9tICcuL2Jvb2stdmlldyc7XHJcbmltcG9ydCBDYXJkVmlldyBmcm9tICcuL2NhcmQtdmlldyc7XHJcbmltcG9ydCBCb29rTW9kZWwgZnJvbSAnLi9ib29rLW1vZGVsJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9BcHAnO1xyXG5pbXBvcnQgeyBudW1iZXJPZkxldmVscywgYnRuSGFyZFRleHQsIGJ0bkxldmVsVGV4dCwgbnVtYmVyT2ZQYWdlc0luTGV2ZWwsIG51bWJlck9mQ2FyZHNQZXJQYWdlLCBzcHJpbnRHYW1lTmFtZSwgYXVkaW9HYW1lTmFtZSwgaWNvblNwcmludFNyYywgaWNvbkF1ZGlvR2FtZVNyYywgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBkaXNhYmxlQXVkaW9CdG5zLCBlbmFibGVBdWRpb0J0bnMsIGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlLCBzZXRCYWNrZ3JvdW5kRm9yQm9va1BhZ2UsIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2Z1bmN0aW9ucyc7XHJcbmNsYXNzIEJvb2tDb250cm9sbGVyIGV4dGVuZHMgQXBwbGljYXRpb25Db250b2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3ID0gbmV3IEJvb2tQYWdlVmlldyh0aGlzLmFnZ3JlZ2F0ZWROdW1iZXIpO1xyXG4gICAgICAgIHRoaXMuYm9va01vZGVsID0gbmV3IEJvb2tNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgICAgICBpZiAoZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BhZ2VJbmZvJykpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlSW5mb0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kQnlBZ2dyZWdhdGVkTnVtYmVyKHRoaXMuY3VycmVudExldmVsLCB0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKCdwYWdlSW5mbycsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgcGFnZU5hbWU6ICdib29rUGFnZScsXHJcbiAgICAgICAgICAgIGxldmVsOiB0aGlzLmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBzZXRCYWNrZ3JvdW5kQnlBZ2dyZWdhdGVkTnVtYmVyKGN1cnJlbnRMZXZlbCwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoQXBwLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbmNlID0geWllbGQgdGhpcy5ib29rTW9kZWwuZ2V0VXNlcldvcmRzQWdyZWdhdGVkQnlGaWx0ZXIoQXBwLnVzZXIudXNlcklkLCBBcHAudXNlci50b2tlbiwgMTAwMCwgYHtcIiRhbmRcIjpbe1wiZ3JvdXBcIjoke2N1cnJlbnRMZXZlbH19LHtcInBhZ2VcIjoke2N1cnJlbnRQYWdlfX0se1wiJG9yXCI6W3tcInVzZXJXb3JkLmRpZmZpY3VsdHlcIjpcImhhcmRcIn0se1widXNlcldvcmQub3B0aW9uYWwucHJvZ3Jlc3NcIjoxMDB9XX1dfWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZ2dyZWdhdGVkTnVtYmVyID0gcmVzcG9uY2UubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZEZvckJvb2tQYWdlKHRoaXMuYWdncmVnYXRlZE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKCdhZ2dyZWdhdGVkTnVtYmVyJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hZ2dyZWdhdGVkTnVtYmVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWdncmVnYXRlZE51bWJlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldyA9IG5ldyBCb29rUGFnZVZpZXcodGhpcy5hZ2dyZWdhdGVkTnVtYmVyKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5wYWdlVmlldy52aWV3O1xyXG4gICAgICAgICAgICB0aGlzLmxldmVscyA9IHRoaXMucGFnZVZpZXcubGV2ZWxzO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzTGlzdCA9IHRoaXMucGFnZVZpZXcuY2FyZHNMaXN0O1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLnBhZ2VWaWV3LnBhZ2luYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUJ1dHRvbnMgPSB0aGlzLnBhZ2VWaWV3LmdhbWVCdXR0b25zO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckxldmVsc0J0bnMoKTtcclxuICAgICAgICAgICAgaWYgKEFwcC51c2VyICYmIHRoaXMuY3VycmVudExldmVsID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxIYXJkV29yZHMgPSB5aWVsZCB0aGlzLmJvb2tNb2RlbC5nZXRVc2VyV29yZHNBbGxIYXJkKEFwcC51c2VyLnVzZXJJZCwgQXBwLnVzZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIYXJkQ2FyZHMoYWxsSGFyZFdvcmRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FyZHModGhpcy5jdXJyZW50TGV2ZWwsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsICE9PSA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhZ2luYXRpb25CbG9jayh0aGlzLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlckNhcmRzKGdyb3VwLCBwYWdlKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgY29uc3Qgd29yZHMgPSB5aWVsZCB0aGlzLmJvb2tNb2RlbC5nZXRXb3Jkcyhncm91cCwgcGFnZSk7XHJcbiAgICAgICAgICAgIGxldCB1c2Vyc1dvcmRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGlmIChBcHAudXNlcikge1xyXG4gICAgICAgICAgICAgICAgdXNlcnNXb3JkcyA9IHlpZWxkIHRoaXMuYm9va01vZGVsLmdldFVzZXJXb3JkcygoX2EgPSBBcHAudXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnVzZXJJZCwgKF9iID0gQXBwLnVzZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd29yZHMuZm9yRWFjaCgod29yZEluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZFZpZXcod29yZEluZm8sIHVzZXJzV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkc0xpc3QuYXBwZW5kKGNhcmQudmlldyk7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBCb29rQ29udHJvbGxlci5zZXRFdmVudExpc3RlbmVyc0ZvckNhcmQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlckhhcmRDYXJkcyhhbGxIYXJkV29yZHMpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZHNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgdXNlcnNXb3JkcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBpZiAoQXBwLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJzV29yZHMgPSB5aWVsZCB0aGlzLmJvb2tNb2RlbC5nZXRVc2VyV29yZHMoKF9hID0gQXBwLnVzZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS51c2VySWQsIChfYiA9IEFwcC51c2VyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgYWxsSGFyZFdvcmRzLmZvckVhY2goKHdvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmRWaWV3KHdvcmQsIHVzZXJzV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNMaXN0LmFwcGVuZChjYXJkLnZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQudmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEJvb2tDb250cm9sbGVyLnNldEV2ZW50TGlzdGVuZXJzRm9yQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyTGV2ZWxzQnRucygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mTGV2ZWxzOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0gQm9va1BhZ2VWaWV3LmNyZWF0ZUVsZW1lbnRCeVBhcmFtcygnZGl2JywgJ2xldmVsJyk7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGBsZXZlbC0ke2l9YCk7XHJcbiAgICAgICAgICAgIGJ0bi5kYXRhc2V0LmxldmVsID0gYCR7aX1gO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5jdXJyZW50TGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbnVtYmVyT2ZMZXZlbHMgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJUZXh0ID0gYnRuSGFyZFRleHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUFwcC51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gYnRuTGV2ZWxUZXh0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWxOdW1iZXIgPSBCb29rUGFnZVZpZXcuY3JlYXRlRWxlbWVudEJ5UGFyYW1zKCdzcGFuJywgJ2xldmVsX251bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxOdW1iZXIuaW5uZXJIVE1MID0gYCZuYnNwJHtpICsgMX1gO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFwcGVuZChsZXZlbE51bWJlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHRoaXMubGV2ZWxCdG5IYW5kbGVyKGUpOyB9KSk7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxzLmFwcGVuZChidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldmVsQnRuSGFuZGxlcihlKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZXZlbCcpO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmxldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsID0gZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKEFwcC51c2VyICYmIGdyb3VwID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxsSGFyZFdvcmRzID0geWllbGQgdGhpcy5ib29rTW9kZWwuZ2V0VXNlcldvcmRzQWxsSGFyZCgoX2EgPSBBcHAudXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnVzZXJJZCwgKF9iID0gQXBwLnVzZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIYXJkQ2FyZHMoYWxsSGFyZFdvcmRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FyZHMoZ3JvdXAsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnaW5hdGlvbkJsb2NrKGdyb3VwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QmFja2dyb3VuZEJ5QWdncmVnYXRlZE51bWJlcihncm91cCwgMCk7XHJcbiAgICAgICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKCdhZ2dyZWdhdGVkTnVtYmVyJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hZ2dyZWdhdGVkTnVtYmVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgncGFnZUluZm8nLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBwYWdlTmFtZTogJ2Jvb2tQYWdlJyxcclxuICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRFdmVudExpc3RlbmVyc0ZvckNhcmQoZSkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBlVGFyZ2V0Q2xhc3NMaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xyXG4gICAgICAgIGlmIChlVGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKCdhdWRpby1pY29uJykpIHtcclxuICAgICAgICAgICAgZGlzYWJsZUF1ZGlvQnRucygpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkSWQgPSAoX2EgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2FyZCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQ7XHJcbiAgICAgICAgICAgIGlmIChjYXJkSWQpIHtcclxuICAgICAgICAgICAgICAgIEJvb2tDb250cm9sbGVyLnBsYXlBdWRpbyhjYXJkSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIHBsYXlBdWRpbyhjYXJkSWQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgdHJhY2tzID0gKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y2FyZElkfWApKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvckFsbCgnYXVkaW8nKTtcclxuICAgICAgICBpZiAodHJhY2tzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja3NbMF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdHJhY2tzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tzW3RyYWNrcy5sZW5ndGggLSAxXS5vbmVuZGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQXVkaW9CdG5zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tzW2ldLm9uZW5kZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja3NbaSArIDFdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcign0JLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1INC+0YLQutC70L7QvdC10L3Qvi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlclBhZ2luYXRpb25CbG9jayhncm91cCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyck9mRG9uZVBhZ2VzID0geWllbGQgdGhpcy5tYWtlQXJyT2ZEb25lUGFnZXMoZ3JvdXApO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQYWdlc0luTGV2ZWw7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IEJvb2tQYWdlVmlldy5jcmVhdGVFbGVtZW50QnlQYXJhbXMoJ3AnLCAncGFnaW5hdGlvbi1lbGVtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5jdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyT2ZEb25lUGFnZXMuaW5jbHVkZXMoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhZ2UuaW5uZXJUZXh0ID0gYCR7aSArIDF9YDtcclxuICAgICAgICAgICAgICAgIHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5wYWdlQnRuSGFuZGxlcihlLCBncm91cCwgaSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmFwcGVuZChwYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcGFnZUJ0bkhhbmRsZXIoZSwgZ3JvdXAsIHBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYXJkcyhncm91cCwgcGFnZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdpbmF0aW9uLWVsZW1lbnQnKTtcclxuICAgICAgICAgICAgcGFnZUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgncGFnZUluZm8nLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBwYWdlTmFtZTogJ2Jvb2tQYWdlJyxcclxuICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgdGhpcy5hZ2dyZWdhdGVkTnVtYmVyID0geWllbGQgdGhpcy5zZXRCYWNrZ3JvdW5kQnlBZ2dyZWdhdGVkTnVtYmVyKGdyb3VwLCBwYWdlKTtcclxuICAgICAgICAgICAgc2V0QmFja2dyb3VuZEZvckJvb2tQYWdlKHRoaXMuYWdncmVnYXRlZE51bWJlcik7XHJcbiAgICAgICAgICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoJ2FnZ3JlZ2F0ZWROdW1iZXInLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFnZ3JlZ2F0ZWROdW1iZXIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlckdhbWVCdXR0b25zKCkge1xyXG4gICAgICAgIGNvbnN0IHNwcmludEdhbWVMaW5rID0gQm9va1BhZ2VWaWV3LmNyZWF0ZUVsZW1lbnRCeVBhcmFtcygnZGl2JywgJ2J0bicpO1xyXG4gICAgICAgIHNwcmludEdhbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2J0bl9jb2xvcmVkJyk7XHJcbiAgICAgICAgc3ByaW50R2FtZUxpbmsuaW5uZXJUZXh0ID0gc3ByaW50R2FtZU5hbWU7XHJcbiAgICAgICAgY29uc3QgaWNvblNwcmludCA9IEJvb2tQYWdlVmlldy5jcmVhdGVFbGVtZW50QnlQYXJhbXMoJ2ltZycsICdnYW1lLWljb24nKTtcclxuICAgICAgICBpY29uU3ByaW50LnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNwcmludFNyYyk7XHJcbiAgICAgICAgc3ByaW50R2FtZUxpbmsucHJlcGVuZChpY29uU3ByaW50KTtcclxuICAgICAgICBzcHJpbnRHYW1lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFwcC5yZW5kZXJTcHJpbnRQYWdlKCkpOyAvLyDRgdGO0LTQsCDQvdCw0LTQviDQv9C+0LTRgdGC0LDQstC40YLRjNGB0L/QuNGB0L7QuiDRgdC70L7QsiDRgdC+INGB0YLRgNCw0L3QuNGG0YsgKNCS0LvQsNC0KVxyXG4gICAgICAgIGNvbnN0IGF1ZGlvR2FtZUxpbmsgPSBCb29rUGFnZVZpZXcuY3JlYXRlRWxlbWVudEJ5UGFyYW1zKCdkaXYnLCAnYnRuJyk7XHJcbiAgICAgICAgYXVkaW9HYW1lTGluay5jbGFzc0xpc3QuYWRkKCdidG5fY29sb3JlZCcpO1xyXG4gICAgICAgIGF1ZGlvR2FtZUxpbmsuaW5uZXJUZXh0ID0gYXVkaW9HYW1lTmFtZTtcclxuICAgICAgICBjb25zdCBpY29uQXVkaW9HYW1lID0gQm9va1BhZ2VWaWV3LmNyZWF0ZUVsZW1lbnRCeVBhcmFtcygnaW1nJywgJ2dhbWUtaWNvbicpO1xyXG4gICAgICAgIGljb25BdWRpb0dhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uQXVkaW9HYW1lU3JjKTtcclxuICAgICAgICBhdWRpb0dhbWVMaW5rLnByZXBlbmQoaWNvbkF1ZGlvR2FtZSk7XHJcbiAgICAgICAgYXVkaW9HYW1lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFwcC5yZW5kZXJBdWRpb2NhbGxQYWdlKCkpOyAvLyDRgdGO0LTQsCDQvdCw0LTQviDQv9C+0LTRgdGC0LDQstC40YLRjNGB0L/QuNGB0L7QuiDRgdC70L7QsiDRgdC+INGB0YLRgNCw0L3QuNGG0YsgKNCS0LvQsNC0KVxyXG4gICAgICAgIHRoaXMuZ2FtZUJ1dHRvbnMuYXBwZW5kKGF1ZGlvR2FtZUxpbmssIHNwcmludEdhbWVMaW5rKTtcclxuICAgIH1cclxuICAgIGdldFBhZ2VJbmZvRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICBjb25zdCBwYWdlSW5mbyA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdwYWdlSW5mbycpO1xyXG4gICAgICAgIGNvbnN0IHsgbGV2ZWwsIHBhZ2VOdW1iZXIgfSA9IHBhZ2VJbmZvO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInICYmIHR5cGVvZiBwYWdlTnVtYmVyID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IGxldmVsO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYWtlQXJyT2ZEb25lUGFnZXMoY3VycmVudExldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgYXJyT2ZEb25lUGFnZXMgPSBbXTtcclxuICAgICAgICAgICAgaWYgKEFwcC51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZ2dyZWdhdGVkV29yZHNBbGwgPSB5aWVsZCB0aGlzLmJvb2tNb2RlbC5nZXRVc2VyV29yZHNBZ3JlZ2F0ZWRCeUZpbHRlcihBcHAudXNlci51c2VySWQsIEFwcC51c2VyLnRva2VuLCAxMDAwLCBge1wiJGFuZFwiOlt7XCJncm91cFwiOiR7Y3VycmVudExldmVsfX0se1wiJG9yXCI6W3tcInVzZXJXb3JkLmRpZmZpY3VsdHlcIjpcImhhcmRcIn0se1widXNlcldvcmQub3B0aW9uYWwucHJvZ3Jlc3NcIjoxMDB9XX1dfWApO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBhZ2VzSW5MZXZlbDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtT2ZXb3JkcyA9IGFnZ3JlZ2F0ZWRXb3Jkc0FsbC5maWx0ZXIoKHdvcmQpID0+IHdvcmQucGFnZSA9PT0gaSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1PZldvcmRzID09PSBudW1iZXJPZkNhcmRzUGVyUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJPZkRvbmVQYWdlcy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyT2ZEb25lUGFnZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9va0NvbnRyb2xsZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uLy4uL0FwaSc7XHJcbmNsYXNzIEJvb2tNb2RlbCBleHRlbmRzIEFwaSB7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9va01vZGVsO1xyXG4iLCJpbXBvcnQgQXBwbGljYXRpb25WaWV3IGZyb20gJy4uL2FwcGxpY2F0aW9uLXZpZXcnO1xyXG5pbXBvcnQgeyBzZXRCYWNrZ3JvdW5kRm9yQm9va1BhZ2UgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJztcclxuZXhwb3J0IGNsYXNzIEJvb2tQYWdlVmlldyBleHRlbmRzIEFwcGxpY2F0aW9uVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVkTnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmxldmVscyA9IEJvb2tQYWdlVmlldy5jcmVhdGVFbGVtZW50QnlQYXJhbXMoJ2RpdicsICdsZXZlbHMnKTtcclxuICAgICAgICB0aGlzLmNhcmRzTGlzdCA9IEJvb2tQYWdlVmlldy5jcmVhdGVFbGVtZW50QnlQYXJhbXMoJ2RpdicsICdjYXJkc19saXN0Jyk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gQm9va1BhZ2VWaWV3LmNyZWF0ZUVsZW1lbnRCeVBhcmFtcygnZGl2JywgJ3BhZ2luYXRpb24nKTtcclxuICAgICAgICB0aGlzLmdhbWVCdXR0b25zID0gQm9va1BhZ2VWaWV3LmNyZWF0ZUVsZW1lbnRCeVBhcmFtcygnZGl2JywgJ2dhbWVfX2J1dHRvbnMnKTtcclxuICAgICAgICB0aGlzLnZpZXcuYXBwZW5kKHRoaXMubGV2ZWxzLCB0aGlzLmNhcmRzTGlzdCwgdGhpcy5wYWdpbmF0aW9uLCB0aGlzLmdhbWVCdXR0b25zKTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgICAgICB0aGlzLm1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fd3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMubWFpbldyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICAgIHNldEJhY2tncm91bmRGb3JCb29rUGFnZShhZ2dyZWdhdGVkTnVtYmVyKTtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeScpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnRCeVBhcmFtcyh0YWcsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZSlcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VWaWV3O1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCBVc2VyV29yZCBmcm9tICcuLi8uLi90eXBlcy91c2Vyd29yZCc7XHJcbmltcG9ydCBTdGF0aXN0aWMgZnJvbSAnLi4vLi4vdHlwZXMvU3RhdGlzdGljJztcclxuaW1wb3J0IHsgYmFzZVVybCwgZG9uZUJ1dHRvblRleHQsIGhhcmRCdXR0b25UZXh0LCBwcm9ncmVzc0ZvckRvbmVXb3JkLCBwcm9ncmVzc0Zvck5vRG9uZVdvcmQsIG51bWJlck9mQ2FyZHNQZXJQYWdlLCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UsIFxyXG4vLyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSxcclxuc2V0QmFja2dyb3VuZEZvckJvb2tQYWdlLCBnZXRBZ2dyZWdhdGVkTnVtYmVyRnJvbUxTLCB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uLy4uL0FwaSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vQXBwJztcclxuLy8gaW1wb3J0IEJvb2tDb250cm9sbGVyIGZyb20gJy4vYm9vay1jb250cm9sbGVyJztcclxuY2xhc3MgQ2FyZFZpZXcge1xyXG4gICAgY29uc3RydWN0b3Iod29yZEluZm8sIHVzZXJXb3Jkcykge1xyXG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSgpO1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cclxuICAgICAgICB0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgIHRoaXMudmlldy5pZCA9IHdvcmRJbmZvLl9pZCB8fCB3b3JkSW5mby5pZDtcclxuICAgICAgICBpZiAodXNlcldvcmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcldvcmRzID0gdXNlcldvcmRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZUNhcmQod29yZEluZm8pO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FyZCh3b3JkSW5mbywgdXNlcldvcmRJbmZvKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3Qgd29yZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB3b3JkSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7dGhpcy5iYXNlVXJsfS8ke3dvcmRJbmZvLmltYWdlfWApO1xyXG4gICAgICAgICAgICB3b3JkSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2NhcmQgcGhvdG8nKTtcclxuICAgICAgICAgICAgd29yZEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkX19pbWcnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdEZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHN0YXRGcmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19zdGF0Jyk7XHJcbiAgICAgICAgICAgIGxldCB1c2VyV29yZDtcclxuICAgICAgICAgICAgaWYgKHVzZXJXb3JkSW5mbykge1xyXG4gICAgICAgICAgICAgICAgdXNlcldvcmQgPSB1c2VyV29yZEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyV29yZCA9IHRoaXMuZ2V0T25lVXNlcldvcmQodGhpcy51c2VyV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJXb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdEZyYW1lLmlubmVySFRNTCA9IGA8c3Bhbj4ke3VzZXJXb3JkLm9wdGlvbmFsLnN1Y2Nlc3NmdWxBdHRlbXB0c308L3NwYW4+IHwgJHt1c2VyV29yZC5vcHRpb25hbC51bnN1Y2Nlc3NmdWxBdHRlbXB0c31gO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyV29yZC5kaWZmaWN1bHR5ID09PSAnaGFyZCcgJiYgdXNlcldvcmQub3B0aW9uYWwucHJvZ3Jlc3MgIT09IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnaGFyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcldvcmQub3B0aW9uYWwucHJvZ3Jlc3MgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRGcmFtZS5pbm5lckhUTUwgPSAnPHNwYW4+MDwvc3Bhbj4gfCAwJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXJkVGV4dC5jbGFzc0xpc3QuYWRkKCdjYXJkX190ZXh0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRCbG9jayA9IHRoaXMuY3JlYXRlV29yZEJsb2NrKHdvcmRJbmZvKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZEJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUNhcmRCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzQmFyID0geWllbGQgdGhpcy5jcmVhdGVXb3JkUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgaWYgKCFBcHAudXNlcikge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHN0YXRGcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgY2FyZEJ1dHRvbnMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwaHJhc2VzQmxvY2sgPSB0aGlzLmNyZWF0ZVBocmFzZXNCbG9jayh3b3JkSW5mbyk7XHJcbiAgICAgICAgICAgIGNhcmRUZXh0LmFwcGVuZCh3b3JkQmxvY2ssIGNhcmRCdXR0b25zLCBwaHJhc2VzQmxvY2spO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuYXBwZW5kKHdvcmRJbWcsIHN0YXRGcmFtZSwgcHJvZ3Jlc3NCYXIsIGNhcmRUZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVdvcmRCbG9jayh3b3JkSW5mbykge1xyXG4gICAgICAgIGNvbnN0IHdvcmRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdvcmRCbG9jay5jbGFzc0xpc3QuYWRkKCd3b3JkJyk7XHJcbiAgICAgICAgY29uc3Qgd29yZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3Qgd29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB3b3JkLmNsYXNzTGlzdC5hZGQoJ3dvcmRfX2VuZ2xpc2gnKTtcclxuICAgICAgICB3b3JkLmlubmVyVGV4dCA9IGAke3dvcmRJbmZvLndvcmR9IGA7XHJcbiAgICAgICAgY29uc3Qgd29yZFRyYW5zY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgd29yZFRyYW5zY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnd29yZF9fdHJhbnNjcmlwdGlvbicpO1xyXG4gICAgICAgIHdvcmRUcmFuc2NyaXB0aW9uLmlubmVyVGV4dCA9IHdvcmRJbmZvLnRyYW5zY3JpcHRpb247XHJcbiAgICAgICAgY29uc3QgYnJlYWtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcclxuICAgICAgICBjb25zdCB3b3JkVHJhbnNsYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgd29yZFRyYW5zbGF0aW9uLmlubmVyVGV4dCA9IHdvcmRJbmZvLndvcmRUcmFuc2xhdGU7XHJcbiAgICAgICAgd29yZFRyYW5zbGF0aW9uLmNsYXNzTGlzdC5hZGQoJ3dvcmRfX3RyYW5zbGF0aW9uJyk7XHJcbiAgICAgICAgd29yZFRleHQuYXBwZW5kKHdvcmQsIHdvcmRUcmFuc2NyaXB0aW9uLCBicmVha0l0ZW0sIHdvcmRUcmFuc2xhdGlvbik7XHJcbiAgICAgICAgY29uc3QgYXVkaW9JY29uID0gdGhpcy5jcmVhdGVBdWRpb0Jsb2NrKHdvcmRJbmZvKTtcclxuICAgICAgICB3b3JkQmxvY2suYXBwZW5kKHdvcmRUZXh0LCBhdWRpb0ljb24pO1xyXG4gICAgICAgIHJldHVybiB3b3JkQmxvY2s7XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbiAgICBjcmVhdGVXb3JkUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gJ2NhcmRfX3Byb2dyZXNzLWJhcic7XHJcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLmlkID0gJ2NhcmRfX3Byb2dyZXNzLWJhcic7XHJcbiAgICAgICAgICAgIGNvbnN0IGlubmVyZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGlubmVyZGl2LmNsYXNzTmFtZSA9ICdwcm9ncmVzcy1sb2FkaW5nJztcclxuICAgICAgICAgICAgY29uc3QgdXNlcldvcmQgPSB0aGlzLmdldE9uZVVzZXJXb3JkKHRoaXMudXNlcldvcmRzKTtcclxuICAgICAgICAgICAgaWYgKHVzZXJXb3JkKSB7XHJcbiAgICAgICAgICAgICAgICBpbm5lcmRpdi5zdHlsZS53aWR0aCA9IGAke3VzZXJXb3JkLm9wdGlvbmFsLnByb2dyZXNzfSVgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLmFwcGVuZENoaWxkKGlubmVyZGl2KTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzQmFyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG4gICAgY3JlYXRlQ2FyZEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdjYXJkX19idXR0b25zJyk7XHJcbiAgICAgICAgY29uc3QgaGFyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGhhcmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2NhcmRfX2J0bicsICdoYXJkX19idG4nKTtcclxuICAgICAgICBoYXJkQnV0dG9uLmlubmVyVGV4dCA9IGhhcmRCdXR0b25UZXh0O1xyXG4gICAgICAgIGhhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhcmRCdG5IYW5kbGVyKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdjYXJkX19idG4nLCAnZG9uZV9fYnRuJyk7XHJcbiAgICAgICAgZG9uZUJ1dHRvbi5pbm5lclRleHQgPSBkb25lQnV0dG9uVGV4dDtcclxuICAgICAgICBkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kb25lQnRuSGFuZGxlcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYXJkQnV0dG9ucy5hcHBlbmQoaGFyZEJ1dHRvbiwgZG9uZUJ1dHRvbik7XHJcbiAgICAgICAgcmV0dXJuIGNhcmRCdXR0b25zO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cclxuICAgIGhhcmRCdG5IYW5kbGVyKGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXJkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkSWQgPSBjYXJkID09PSBudWxsIHx8IGNhcmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmQuaWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uLWVsZW1lbnQuYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWdncmVnYXRlZE51bWJlciA9IGdldEFnZ3JlZ2F0ZWROdW1iZXJGcm9tTFMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYXJkID09PSBudWxsIHx8IGNhcmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXJkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkTnVtYmVyIC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJXb3JkSW5mbyhjYXJkSWQsICduby1oYXJkJywgcHJvZ3Jlc3NGb3JOb0RvbmVXb3JkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNhcmQgPT09IG51bGwgfHwgY2FyZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvbmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQgPT09IG51bGwgfHwgY2FyZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hhcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKHByb2dyZXNzRm9yTm9Eb25lV29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyV29yZEluZm8oY2FyZElkLCAnaGFyZCcsIHByb2dyZXNzRm9yTm9Eb25lV29yZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkTnVtYmVyICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hhcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJXb3JkSW5mbyhjYXJkSWQsICdoYXJkJywgcHJvZ3Jlc3NGb3JOb0RvbmVXb3JkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhZ2dyZWdhdGVkTnVtYmVyID09PSBudW1iZXJPZkNhcmRzUGVyUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VFbGVtZW50ID09PSBudWxsIHx8IHBhZ2VFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlRWxlbWVudCA9PT0gbnVsbCB8fCBwYWdlRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFnZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgnYWdncmVnYXRlZE51bWJlcicsIEpTT04uc3RyaW5naWZ5KGFnZ3JlZ2F0ZWROdW1iZXIpKTtcclxuICAgICAgICAgICAgICAgIHNldEJhY2tncm91bmRGb3JCb29rUGFnZShhZ2dyZWdhdGVkTnVtYmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZG9uZUJ0bkhhbmRsZXIoZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXBwLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gZS50YXJnZXQuY2xvc2VzdCgnLmNhcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSWQgPSBjYXJkID09PSBudWxsIHx8IGNhcmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbi1lbGVtZW50LmFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhZ2dyZWdhdGVkTnVtYmVyID0gZ2V0QWdncmVnYXRlZE51bWJlckZyb21MUygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkID09PSBudWxsIHx8IGNhcmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb25lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWdncmVnYXRlZE51bWJlciAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkID09PSBudWxsIHx8IGNhcmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKHByb2dyZXNzRm9yTm9Eb25lV29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlcldvcmRJbmZvKGNhcmRJZCwgJ25vLWhhcmQnLCBwcm9ncmVzc0Zvck5vRG9uZVdvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjYXJkID09PSBudWxsIHx8IGNhcmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXJkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyV29yZEluZm8oY2FyZElkLCAnbm8taGFyZCcsIHByb2dyZXNzRm9yRG9uZVdvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKHByb2dyZXNzRm9yRG9uZVdvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWdncmVnYXRlZE51bWJlciArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkID09PSBudWxsIHx8IGNhcmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKHByb2dyZXNzRm9yRG9uZVdvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJXb3JkSW5mbyhjYXJkSWQsICduby1oYXJkJywgcHJvZ3Jlc3NGb3JEb25lV29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZ2dyZWdhdGVkTnVtYmVyID09PSBudW1iZXJPZkNhcmRzUGVyUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlRWxlbWVudCA9PT0gbnVsbCB8fCBwYWdlRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUVsZW1lbnQgPT09IG51bGwgfHwgcGFnZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhZ2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgnYWdncmVnYXRlZE51bWJlcicsIEpTT04uc3RyaW5naWZ5KGFnZ3JlZ2F0ZWROdW1iZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kRm9yQm9va1BhZ2UoYWdncmVnYXRlZE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVByb2dyZXNzQmFyKHByb2dyZXNzKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1sb2FkaW5nJyk7XHJcbiAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3N9JWA7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG4gICAgdXBkYXRlVXNlcldvcmRJbmZvKGNhcmRJZCwgbmV3RGlmZmljdWx0eSwgbmV3UHJvZ3Jlc3MpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKChfYSA9IEFwcC51c2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2Vyc1dvcmRzID0geWllbGQgdGhpcy5hcGkuZ2V0VXNlcldvcmRzKEFwcC51c2VyLnVzZXJJZCwgQXBwLnVzZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoV29yZHNBcnJheSA9IHVzZXJzV29yZHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLndvcmRJZCA9PT0gY2FyZElkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmQgPSB5aWVsZCB0aGlzLmFwaS5nZXRPbmVXb3JkKGNhcmRJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoV29yZHNBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IG5ld1Byb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBuZXdEaWZmaWN1bHR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NmdWxBdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5zdWNjZXNzZnVsQXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJXb3JkID0gbmV3IFVzZXJXb3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdhc0xlYXJuZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID09PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzTGVhcm5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNMZWFybmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJXb3JkLndvcmQgPSB3b3JkO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJXb3JkLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJXb3JkLm9wdGlvbmFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc2Z1bEF0dGVtcHRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnN1Y2Nlc3NmdWxBdHRlbXB0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzTGVhcm5lZCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpLmNyZWF0ZVVzZXJXb3JkKEFwcC51c2VyLnVzZXJJZCwgQXBwLnVzZXIudG9rZW4sIHVzZXJXb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ID0gbmV3IFN0YXRpc3RpYygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXQuYWRkTGVhcm5lZFdvcmRGcm9tQm9vaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoV29yZCA9IHNlYXJjaFdvcmRzQXJyYXlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBuZXdQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmaWN1bHR5ID0gbmV3RGlmZmljdWx0eTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN1Y2Nlc3NmdWxBdHRlbXB0cywgdW5zdWNjZXNzZnVsQXR0ZW1wdHMgfSA9IHNlYXJjaFdvcmQub3B0aW9uYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgd2FzTGVhcm5lZCB9ID0gc2VhcmNoV29yZC5vcHRpb25hbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNMZWFybmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlcldvcmQgPSBuZXcgVXNlcldvcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyV29yZC53b3JkID0gd29yZDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyV29yZC5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyV29yZC5vcHRpb25hbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWxBdHRlbXB0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5zdWNjZXNzZnVsQXR0ZW1wdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhc0xlYXJuZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS51cGRhdGVVc2VyV29yZChBcHAudXNlci51c2VySWQsIEFwcC51c2VyLnRva2VuLCB1c2VyV29yZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVBocmFzZXNCbG9jayh3b3JkSW5mbykge1xyXG4gICAgICAgIGNvbnN0IHBocmFzZXNCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBocmFzZXNCbG9jay5jbGFzc0xpc3QuYWRkKCdwaHJhc2VzJyk7XHJcbiAgICAgICAgY29uc3QgcGhyYXNlRGVmaW5pdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBocmFzZURlZmluaXRpb24uY2xhc3NMaXN0LmFkZCgncGhyYXNlX19kZWZpbml0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgcGhyYXNlRGVmaW5pdGlvbkVuZ2xpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcGhyYXNlRGVmaW5pdGlvbkVuZ2xpc2guY2xhc3NMaXN0LmFkZCgncGhyYXNlX19kZWZpbml0aW9uX2VuZ2xpc2gnKTtcclxuICAgICAgICBwaHJhc2VEZWZpbml0aW9uRW5nbGlzaC5pbm5lckhUTUwgPSB3b3JkSW5mby50ZXh0TWVhbmluZztcclxuICAgICAgICBjb25zdCBwaHJhc2VEZWZpbml0aW9uUnVzc2lhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwaHJhc2VEZWZpbml0aW9uUnVzc2lhbi5jbGFzc0xpc3QuYWRkKCdwaHJhc2VfX2RlZmluaXRpb25fcnVzc2lhbicpO1xyXG4gICAgICAgIHBocmFzZURlZmluaXRpb25SdXNzaWFuLmlubmVySFRNTCA9IHdvcmRJbmZvLnRleHRNZWFuaW5nVHJhbnNsYXRlO1xyXG4gICAgICAgIHBocmFzZURlZmluaXRpb24uYXBwZW5kKHBocmFzZURlZmluaXRpb25FbmdsaXNoLCBwaHJhc2VEZWZpbml0aW9uUnVzc2lhbik7XHJcbiAgICAgICAgY29uc3QgcGhyYXNlRXhhbXBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBocmFzZUV4YW1wbGUuY2xhc3NMaXN0LmFkZCgncGhyYXNlX19leGFtcGxlJyk7XHJcbiAgICAgICAgY29uc3QgcGhyYXNlRXhhbXBsZUVuZ2xpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcGhyYXNlRXhhbXBsZUVuZ2xpc2guY2xhc3NMaXN0LmFkZCgncGhyYXNlX19leGFtcGxlX2VuZ2xpc2gnKTtcclxuICAgICAgICBwaHJhc2VFeGFtcGxlRW5nbGlzaC5pbm5lckhUTUwgPSB3b3JkSW5mby50ZXh0RXhhbXBsZTtcclxuICAgICAgICBjb25zdCBwaHJhc2VFeGFtcGxlUnVzc2lhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwaHJhc2VFeGFtcGxlUnVzc2lhbi5jbGFzc0xpc3QuYWRkKCdwaHJhc2VfX2V4YW1wbGVfcnVzc2lhbicpO1xyXG4gICAgICAgIHBocmFzZUV4YW1wbGVSdXNzaWFuLmlubmVySFRNTCA9IHdvcmRJbmZvLnRleHRFeGFtcGxlVHJhbnNsYXRlO1xyXG4gICAgICAgIHBocmFzZUV4YW1wbGUuYXBwZW5kKHBocmFzZUV4YW1wbGVFbmdsaXNoLCBwaHJhc2VFeGFtcGxlUnVzc2lhbik7XHJcbiAgICAgICAgcGhyYXNlc0Jsb2NrLmFwcGVuZChwaHJhc2VEZWZpbml0aW9uLCBwaHJhc2VFeGFtcGxlKTtcclxuICAgICAgICByZXR1cm4gcGhyYXNlc0Jsb2NrO1xyXG4gICAgfVxyXG4gICAgLyogZXNsaW50LWVuYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbiAgICBjcmVhdGVBdWRpb0Jsb2NrKHdvcmRJbmZvKSB7XHJcbiAgICAgICAgY29uc3QgYXVkaW9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXVkaW9JY29uLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLWljb24nKTtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgYXVkaW8uc2V0QXR0cmlidXRlKCdzcmMnLCBgJHt0aGlzLmJhc2VVcmx9LyR7d29yZEluZm8uYXVkaW99YCk7XHJcbiAgICAgICAgY29uc3QgYXVkaW9NZWFuaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICBhdWRpb01lYW5pbmcuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHt0aGlzLmJhc2VVcmx9LyR7d29yZEluZm8uYXVkaW9NZWFuaW5nfWApO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvRXhhbXBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgYXVkaW9FeGFtcGxlLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7dGhpcy5iYXNlVXJsfS8ke3dvcmRJbmZvLmF1ZGlvRXhhbXBsZX1gKTtcclxuICAgICAgICBhdWRpb0ljb24uYXBwZW5kKGF1ZGlvLCBhdWRpb01lYW5pbmcsIGF1ZGlvRXhhbXBsZSk7XHJcbiAgICAgICAgcmV0dXJuIGF1ZGlvSWNvbjtcclxuICAgIH1cclxuICAgIGdldE9uZVVzZXJXb3JkKHVzZXJXb3Jkcykge1xyXG4gICAgICAgIHJldHVybiB1c2VyV29yZHMuZmluZCgoaXRlbSkgPT4gaXRlbS53b3JkSWQgPT09IHRoaXMudmlldy5pZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFZpZXc7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBBdWRpb01vZGVsIGZyb20gJy4vYXVkaW8tbW9kZWwnO1xyXG5pbXBvcnQgQXVkaW9WaWV3IGZyb20gJy4vYXVkaW8tdmlldyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vLi4vLi4vQXBpJztcclxuaW1wb3J0IEFwcGxpY2F0aW9uQ29udG9sbGVyIGZyb20gJy4uLy4uL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uLy4uL0FwcCc7XHJcbmltcG9ydCBVc2VyV29yZCBmcm9tICcuLi8uLi8uLi90eXBlcy91c2Vyd29yZCc7XHJcbmltcG9ydCBTdGF0aXN0aWMgZnJvbSAnLi4vLi4vLi4vdHlwZXMvU3RhdGlzdGljJztcclxuY2xhc3MgQXVkaW9Db250cm9sbGVyIGV4dGVuZHMgQXBwbGljYXRpb25Db250b2xsZXIge1xyXG4gICAgY29uc3RydWN0b3Iod29yZHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSgpO1xyXG4gICAgICAgIHRoaXMud29yZHNQZXJQYWdlID0gMjA7XHJcbiAgICAgICAgdGhpcy5jb3VudFF1ZXN0aW9ucyA9IDY7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsYmFyUHJvZ3Jlc3MgPSAzO1xyXG4gICAgICAgIHRoaXMucGFnZXNQZXJHYW1lID0gMztcclxuICAgICAgICB0aGlzLnN0YXQgPSBuZXcgU3RhdGlzdGljKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTmFtZSA9ICdhdWRpb2NhbGwnO1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9pbmRlbnQgKi9cclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cclxuICAgICAgICB0aGlzLmdldHdvcmRzID0gKGdyb3VwLCBwYWdlKSA9PiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgICAgICAgZmV0Y2goYCR7dGhpcy5hcGkud29yZHN9P2dyb3VwPSR7Z3JvdXB9JnBhZ2U9JHtwYWdlfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JkcyA9IHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXMod29yZHMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlaihlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXdvcmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcgPSBuZXcgQXVkaW9WaWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgQXVkaW9Nb2RlbCh0aGlzLnBhZ2VWaWV3KTtcclxuICAgICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRLZXlCb2FyZExpc3RlbmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3b3Jkcykge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNyZWF0ZVF1aXood29yZHMsIHRoaXMuY291bnRRdWVzdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZExpc3RlbmVycygpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgYnRucyA9IHRoaXMucGFnZVZpZXcudmlldy5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FtZS1idXR0b24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZ2FtZVN0YXR1cyA9ICdTZXQgTGV2ZWwnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsV29yZHMoTnVtYmVyKHRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldy52aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaWQgPT09ICduZXh0LXF1ZXN0aW9uLWJ1dHRvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSB0aGlzLm1vZGVsLmF1ZGlvVGVzdHNbdGhpcy5tb2RlbC5jdXJyZW50UXVlc3Rpb25dO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcldvcmQgPSBuZXcgVXNlcldvcmQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVdvcmRzUmVzdWx0ID0geWllbGQgdXNlcldvcmQuVXBkYXRlVXNlcldvcmRzKHRlc3QuY29ycmVjdEFuc3dlciwgdGVzdC5pc0NvcnJlY3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0LnVwZGF0ZVN0YXRpc3RpYyh1cGRhdGVXb3Jkc1Jlc3VsdCwgdGhpcy5nYW1lTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLm5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnYXVkaW8taWNvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gdGFyZ2V0LmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgYSA9IG5ldyBBdWRpbyhhdWRpby5zcmMpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaWQgPT09ICdwbGF5LWFnYWluJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5wbGF5QWdhaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2dhbWUtYnV0dG9uIG9wdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuaGFuZGxlQW5zd2VyKHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc3Bhbi12YWx1ZScpLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbC1jbG9zZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY2xvc2VSZXN1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICAoX2EgPSB0aGlzLnBhZ2VWaWV3LnZpZXcucXVlcnlTZWxlY3RvcignI25ldy1nYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5nYW1lU3RhdHVzID0gJ1NlbGVjdCBMZXZlbCc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRLZXlCb2FyZExpc3RlbmVyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlQcmVzcyhlKSk7XHJcbiAgICB9XHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKEFwcC5jb250cm9sbGVyIGluc3RhbmNlb2YgQXVkaW9Db250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGFuZGxlUHJlc3NLZXkoZS5rZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEFsbFdvcmRzKGdyb3VwKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5zaG93UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5nYW1lU3RhdHVzID0gJ0xvYWRpbmcnO1xyXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aGlzLmluaXRpYWxiYXJQcm9ncmVzcztcclxuICAgICAgICAgICAgbGV0IHdvcmRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21QYWdlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB3aGlsZSAocmFuZG9tUGFnZXMubGVuZ3RoIDwgdGhpcy5wYWdlc1BlckdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHJhbmRvbVBhZ2VzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wYWdlc1BlckdhbWUgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICByYW5kb21QYWdlcyA9IHJhbmRvbVBhZ2VzLmZpbHRlcigoaXRlbSwgaW5kZXgsIGFycikgPT4gaW5kZXggPT09IGFyci5pbmRleE9mKGl0ZW0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLnBhZ2VzUGVyR2FtZTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IChpIC8gdGhpcy5wYWdlc1BlckdhbWUpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5sb2FkaW5nU3RhdHVzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHlpZWxkIHRoaXMuZ2V0d29yZHMoZ3JvdXAsIGkpO1xyXG4gICAgICAgICAgICAgICAgd29yZHMgPSB3b3Jkcy5jb25jYXQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY3JlYXRlUXVpeih3b3JkcywgdGhpcy5jb3VudFF1ZXN0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXVkaW9Db250cm9sbGVyO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IEF1ZGlvUXVlc3Rpb24gZnJvbSAnLi9hdWRpby1xdWVzdGlvbi1jb21wb25lbnQnO1xyXG5jbGFzcyBBdWRpb01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhZ2VWaWV3KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSAtMTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldyA9IHBhZ2VWaWV3O1xyXG4gICAgICAgIHRoaXMud3JvbmdBbnN3ZXJzID0gMDtcclxuICAgICAgICB0aGlzLmNvcnJyZWN0QW5zd2VycyA9IDA7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9hZGluZ1N0YXR1cyhsb2FkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUHJvZ3Jlc3MgPSBsb2FkaW5nO1xyXG4gICAgICAgIHRoaXMucGFnZVZpZXcudXBkYXRlUHJvZ3Jlc3NCYXIodGhpcy5sb2FkaW5nUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdhbWVTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAnU2V0IExldmVsJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LmhpZGVEaWZmaWN1bHR5U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZUdhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdTZWxlY3QgTGV2ZWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd0xldmVsU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZUdhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdHYW1lJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LmhpZGVEaWZmaWN1bHR5U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd0dhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldCBRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGN1cnJlbnRRdWVzdGlvbjtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNob3dRdWVzdGlvbih0aGlzLmF1ZGlvVGVzdHNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLmF1ZGlvVGVzdFZpZXcpO1xyXG4gICAgfVxyXG4gICAgcGxheUFnYWluKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb1Rlc3RzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9UZXN0c1tpXS5pc0Fuc3dlcmVkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1Rlc3RzW2ldLmlzQ29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvVGVzdHNbaV0ub3B0aW9ucyA9IHRoaXMuYXVkaW9UZXN0c1tpXS5vcHRpb25zLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9UZXN0c1tpXS5yZW5kZXJBdWRpb1Rlc3RWaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXVkaW9UZXN0cyA9IHRoaXMuYXVkaW9UZXN0cy5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuUXVlc3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9ICdHYW1lJztcclxuICAgIH1cclxuICAgIG5leHRRdWVzdGlvbigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbiA9PT0gdGhpcy5hdWRpb1Rlc3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LnNob3dHYW1lUmVzdWx0KHRoaXMuYXVkaW9UZXN0cyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZUdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd1F1ZXN0aW9uKHRoaXMuYXVkaW9UZXN0c1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0uYXVkaW9UZXN0Vmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xvc2VSZXN1bHQoKSB7XHJcbiAgICAgICAgLy8g0LXRgdC70Lgg0LDQstGC0L7RgNC40LfQvtCy0LDQvdGLINC/0LXRgNC10YXQvtC00LjQvCDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0YPRh9C10LHQvdC40LrQsFxyXG4gICAgICAgIC8vIHRoaXMuYXVkaW9UZXN0cyA9IG5ldyBBcnJheTxBdWRpb1F1ZXN0aW9uPigpO1xyXG4gICAgICAgIHRoaXMud3JvbmdBbnN3ZXJzID0gMDtcclxuICAgICAgICB0aGlzLnJpZ3RoQW5zd2VycyA9IDA7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9UZXN0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICAvLyDRgdGE0L7RgNC80LjRgNC+0LLQsNGC0Ywg0YHQv9C40YHQvtC6INCy0L7Qv9GA0L7RgdC+0LIg0Lgg0L3QsNGH0LDRgtGMINC40LPRgNGDXHJcbiAgICBjcmVhdGVRdWl6KHdvcmRzLCBjb3VudFF1ZXN0aW9ucykge1xyXG4gICAgICAgIGlmICh3b3Jkcy5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9ICdTZWxlY3QgTGV2ZWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdGVzdHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSB3b3Jkcy5sZW5ndGggPCBjb3VudFF1ZXN0aW9ucyA/IHdvcmRzLmxlbmd0aCA6IGNvdW50UXVlc3Rpb25zO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAodGVzdHMubGVuZ3RoIDwgY291bnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3JyZWN0QW5zd2VyID0gd29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd29yZHMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgZmluZCA9IHRlc3RzLmZpbHRlcigocCkgPT4gcC5jb3JyZWN0QW5zd2VyLmlkID09PSBjb3JyZWN0QW5zd2VyLmlkKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbG9vcC1mdW5jICovXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoZmluZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlciA9IHdvcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmQgPSB0ZXN0cy5maWx0ZXIoKHApID0+IHAuY29ycmVjdEFuc3dlci5pZCA9PT0gY29ycmVjdEFuc3dlci5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGNvcnJlY3RBbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG9wdGlvbnMubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3b3Jkcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2god29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMuZmlsdGVyKChpdGVtLCBpbmRleCwgYXJyKSA9PiBhcnIuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMuc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBuZXcgQXVkaW9RdWVzdGlvbihvcHRpb25zLCBjb3JyZWN0QW5zd2VyLCBpZCk7XHJcbiAgICAgICAgICAgICAgICB0ZXN0LnJlbmRlckF1ZGlvVGVzdFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlkICs9IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXN0cy5wdXNoKHRlc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9UZXN0cyA9IHRlc3RzO1xyXG4gICAgICAgICAgICB0aGlzLlF1ZXN0aW9uID0gMDtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gJ0dhbWUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUFuc3dlcihhbnN3ZXIpIHtcclxuICAgICAgICBjb25zdCBhdWRpb1Rlc3QgPSB0aGlzLmF1ZGlvVGVzdHNbdGhpcy5jdXJyZW50UXVlc3Rpb25dO1xyXG4gICAgICAgIGlmICghYXVkaW9UZXN0LmlzQW5zd2VyZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXVkaW9UZXN0LmNvcnJlY3RBbnN3ZXIud29yZFRyYW5zbGF0ZSA9PT0gYW5zd2VyO1xyXG4gICAgICAgICAgICBhdWRpb1Rlc3QuaXNDb3JyZWN0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LnJlbmRlckFuc3dlclJlc3VsdChyZXN1bHQsIGFuc3dlciwgYXVkaW9UZXN0LmNvcnJlY3RBbnN3ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhdWRpb1Rlc3QuaXNBbnN3ZXJlZCA9ICdZZXMnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGlvTW9kZWw7XHJcbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vLi4vQXBpJztcclxuY2xhc3MgQXVkaW9RdWVzdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBjb3JyZWN0QW5zd2VyLCBpZCkge1xyXG4gICAgICAgIHRoaXMuaXNDb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgQXBpKCk7XHJcbiAgICAgICAgdGhpcy5hdWRpb1Rlc3RWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5pc0Fuc3dlcmVkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBjb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgIHRoaXMuYW5zd2VyVmlldyA9IHRoaXMucmVuZGVyQW5zd2VyVmlldyhjb3JyZWN0QW5zd2VyKTtcclxuICAgICAgICB0aGlzLnJlbmRlckF1ZGlvVGVzdFZpZXcoKTtcclxuICAgIH1cclxuICAgIHJlbmRlckFuc3dlclZpZXcoY29ycmVjdEFuc3dlcikge1xyXG4gICAgICAgIGNvbnN0IGRpdkFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGRpdmF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2YXVkaW8uY2xhc3NOYW1lID0gJ2F1ZGlvLWljb24nO1xyXG4gICAgICAgIGRpdmF1ZGlvLnNldEF0dHJpYnV0ZSgnYXVkaW8nLCBgJHt0aGlzLmFwaS5iYXNlVXJsfS8ke2NvcnJlY3RBbnN3ZXIuYXVkaW99YCk7XHJcbiAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgIGF1ZGlvLnNyYyA9IGAke3RoaXMuYXBpLmJhc2VVcmx9LyR7Y29ycmVjdEFuc3dlci5hdWRpb31gO1xyXG4gICAgICAgIGRpdmF1ZGlvLmFwcGVuZENoaWxkKGF1ZGlvKTtcclxuICAgICAgICB0aGlzLmF1ZGlvQW5zd2VyID0gZGl2YXVkaW87XHJcbiAgICAgICAgcmV0dXJuIGRpdkFuc3dlcjtcclxuICAgIH1cclxuICAgIHJlbmRlckF1ZGlvVGVzdFZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2UXVpekNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdlF1aXpDb250YWluZXIuY2xhc3NOYW1lID0gJ2Rpdi1xdWl6LWNvbnRhaW5lcic7XHJcbiAgICAgICAgZGl2UXVpekNvbnRhaW5lci5pZCA9IHRoaXMuaWQudG9TdHJpbmcoKTtcclxuICAgICAgICAvLyBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgZGl2UGxheSA9IHRoaXMuYXVkaW9BbnN3ZXI7XHJcbiAgICAgICAgY29uc3QgcXVlc2lvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHF1ZXNpb25Db250YWluZXIuY2xhc3NOYW1lID0gJ3F1ZXNpb24tY29udGFpbmVyJztcclxuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5pbm5lclRleHQgPSAn0J/RgNC+0L/Rg9GB0YLQuNGC0YwgKFNwYWNlKSc7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5pZCA9ICduZXh0LXF1ZXN0aW9uLWJ1dHRvbic7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc05hbWUgPSAnbmV4dC1xdWVzdGlvbi1idXR0b24nO1xyXG4gICAgICAgIHF1ZXNpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2UGxheSk7XHJcbiAgICAgICAgZGl2UXVpekNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzaW9uQ29udGFpbmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdnYW1lLWJ1dHRvbiBvcHRpb24nO1xyXG4gICAgICAgICAgICAvLyBidXR0b24udGV4dENvbnRlbnQgPSB0aGlzLm9wdGlvbnNbaV0ud29yZFRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgZGl2T3B0aW9uZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXZPcHRpb25ncmlkLmNsYXNzTmFtZSA9ICdkaXYtb3B0aW9uLWdyaWQnO1xyXG4gICAgICAgICAgICBjb25zdCBzcGFuTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBzcGFuTnVtYmVyLnRleHRDb250ZW50ID0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBzcGFuVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHNwYW5WYWx1ZS5jbGFzc05hbWUgPSAnc3Bhbi12YWx1ZSc7XHJcbiAgICAgICAgICAgIHNwYW5WYWx1ZS50ZXh0Q29udGVudCA9IHRoaXMub3B0aW9uc1tpXS53b3JkVHJhbnNsYXRlO1xyXG4gICAgICAgICAgICBkaXZPcHRpb25ncmlkLmFwcGVuZChzcGFuTnVtYmVyLCBzcGFuVmFsdWUpO1xyXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoZGl2T3B0aW9uZ3JpZCk7XHJcbiAgICAgICAgICAgIHF1ZXNpb25Db250YWluZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHF1ZXNpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5hdWRpb1Rlc3RWaWV3ID0gZGl2UXVpekNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdWRpb1F1ZXN0aW9uO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0ICcuL2F1ZGlvLmNzcyc7XHJcbmltcG9ydCAnLi9tb2RhbC5jc3MnO1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uLy4uLy4uL0FwaSc7XHJcbmltcG9ydCB7IGNvcnJlY3RSZXN1bHRzVGV4dCwgaW5jb3JyZWN0UmVzdWx0c1RleHQsIG5ld0F1ZGlvR2FtZUJ1dHRvblRleHQsIHJlc3VsdHNUZXh0LCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmNsYXNzIEF1ZGlvVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZvY3VzSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVmlldygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyVmlldygpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2F1ZGlvLWNhbGwtY29udGFpbmVyJztcclxuICAgICAgICBjb25zdCBidXR0b25OZXdHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uTmV3R2FtZS5pbm5lclRleHQgPSBuZXdBdWRpb0dhbWVCdXR0b25UZXh0O1xyXG4gICAgICAgIGJ1dHRvbk5ld0dhbWUuaWQgPSAnbmV3LWdhbWUnO1xyXG4gICAgICAgIGJ1dHRvbk5ld0dhbWUuY2xhc3NOYW1lID0gJ25ldy1nYW1lLWJ1dHRvbic7XHJcbiAgICAgICAgY29uc3QgZGl2QnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdkJ1dHRvbnNDb250YWluZXIuY2xhc3NOYW1lID0gJ2J1dHRvbnMtY29udGFpbmVyJztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uTmV3R2FtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBgZ2FtZS1idXR0b24gbCR7aX1gO1xyXG4gICAgICAgICAgICBidXR0b24udmFsdWUgPSAoaSAtIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBg0KPRgNC+0LLQtdC90YwgJHtpfWA7XHJcbiAgICAgICAgICAgIGRpdkJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGV2ZWxTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGV2ZWxTZWxlY3RMYWJlbC5pbm5lclRleHQgPSAn0JLRi9Cx0LXRgNC40YLQtSDRg9GA0L7QstC10L3RjCDRgdC70L7QttC90L7RgdGC0LgnO1xyXG4gICAgICAgIGNvbnN0IGRpdkRpZmZpY3VsdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZEaWZmaWN1bHR5LmNsYXNzTmFtZSA9ICdkaWYtY29udGFpbmVyIGhpZGRlbic7XHJcbiAgICAgICAgZGl2RGlmZmljdWx0eS5hcHBlbmQobGV2ZWxTZWxlY3RMYWJlbCwgZGl2QnV0dG9uc0NvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAvLyBwcm9ncmVzc0Jhci5pbm5lckhUTUwgPSAnPGRpdiBpZD1cImxvYWRpbmdcIiAgY2xhc3M9XCJsb2FkaW5nXCI+PC9kaXY+JztcclxuICAgICAgICBjb25zdCBpbm5lcmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlubmVyZGl2LmNsYXNzTmFtZSA9ICdsb2FkaW5nJztcclxuICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSAnZ2FtZS1wcm9ncmVzcy1iYXIgaGlkZGVuJztcclxuICAgICAgICBwcm9ncmVzc0Jhci5pZCA9ICdhdWRpby1wcm9ncmVzcy1iYXInO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmFwcGVuZENoaWxkKGlubmVyZGl2KTtcclxuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLmNyZWF0ZU1vZGFsQ29udGVudCgpO1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdnYW1lLXJlc3VsdCBoaWRkZW4nO1xyXG4gICAgICAgIGdhbWVDb250YWluZXIuY2xhc3NOYW1lID0gJ2dhbWUtY29udGFpbmVyJztcclxuICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChkaXZEaWZmaWN1bHR5LCBwcm9ncmVzc0Jhciwgc3RhdHVzQ29udGFpbmVyKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkaXY7XHJcbiAgICB9XHJcbiAgICBzaG93R2FtZVJlc3VsdChhdWRpb1Rlc3RzKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1yZXN1bHQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGNvbnN0IGNvcnJlY3RkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5zd2VyLWNvbnRhaW5lci1jb3JyZWN0Jyk7XHJcbiAgICAgICAgY29uc3Qgd3JvbmdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5zd2VyLWNvbnRhaW5lci13cm9uZycpO1xyXG4gICAgICAgIGNvcnJlY3RkaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgd3JvbmdEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY29uc3QgY29ycmVjdHMgPSBhdWRpb1Rlc3RzLmZpbHRlcigocCkgPT4gcC5pc0NvcnJlY3QpO1xyXG4gICAgICAgIGNvbnN0IHdyb25ncyA9IGF1ZGlvVGVzdHMuZmlsdGVyKChwKSA9PiAhcC5pc0NvcnJlY3QpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd3JvbmdzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdlJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXZhdWRpb3Jlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXZhdWRpb3Jlc3VsdC5jbGFzc05hbWUgPSAnYXVkaW8taWNvbic7XHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICAgICAgYXVkaW9yZXN1bHQuc3JjID0gYCR7dGhpcy5hcGkuYmFzZVVybH0vJHt3cm9uZ3NbaV0uY29ycmVjdEFuc3dlci5hdWRpb31gO1xyXG4gICAgICAgICAgICBkaXZhdWRpb3Jlc3VsdC5hcHBlbmRDaGlsZChhdWRpb3Jlc3VsdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRUcmFuc2xhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgY29uc3QgZGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgZGFzaC5pbm5lclRleHQgPSAn4oCUJztcclxuICAgICAgICAgICAgd29yZC5pbm5lclRleHQgPSB3cm9uZ3NbaV0uY29ycmVjdEFuc3dlci53b3JkO1xyXG4gICAgICAgICAgICB3b3JkVHJhbnNsYXRpb24uaW5uZXJUZXh0ID0gd3JvbmdzW2ldLmNvcnJlY3RBbnN3ZXIud29yZFRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgZGl2UmVzdWx0LmFwcGVuZChkaXZhdWRpb3Jlc3VsdCwgd29yZCwgZGFzaCwgd29yZFRyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgd3JvbmdEaXYuYXBwZW5kQ2hpbGQoZGl2UmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3JyZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaXZSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgZGl2YXVkaW9yZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2YXVkaW9yZXN1bHQuY2xhc3NOYW1lID0gJ2F1ZGlvLWljb24nO1xyXG4gICAgICAgICAgICBjb25zdCBhdWRpb3Jlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICAgIGF1ZGlvcmVzdWx0LnNyYyA9IGAke3RoaXMuYXBpLmJhc2VVcmx9LyR7Y29ycmVjdHNbaV0uY29ycmVjdEFuc3dlci5hdWRpb31gO1xyXG4gICAgICAgICAgICBkaXZhdWRpb3Jlc3VsdC5hcHBlbmRDaGlsZChhdWRpb3Jlc3VsdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRUcmFuc2xhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgY29uc3QgZGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgZGFzaC5pbm5lclRleHQgPSAn4oCUJztcclxuICAgICAgICAgICAgd29yZC5pbm5lclRleHQgPSBjb3JyZWN0c1tpXS5jb3JyZWN0QW5zd2VyLndvcmQ7XHJcbiAgICAgICAgICAgIHdvcmRUcmFuc2xhdGlvbi5pbm5lclRleHQgPSBjb3JyZWN0c1tpXS5jb3JyZWN0QW5zd2VyLndvcmRUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgIGRpdlJlc3VsdC5hcHBlbmQoZGl2YXVkaW9yZXN1bHQsIHdvcmQsIGRhc2gsIHdvcmRUcmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgIGNvcnJlY3RkaXYuYXBwZW5kQ2hpbGQoZGl2UmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXNwYW4td3JvbmcnKS5pbm5lclRleHQgPSBg0J3QtdCy0LXRgNC90YvQtSDQvtGC0LLQtdGC0YsgKCR7d3JvbmdzLmxlbmd0aH0pIDogYDtcclxuICAgICAgICB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtc3Bhbi1jb3JyZWN0JykuaW5uZXJUZXh0ID0gYNCS0LXRgNC90YvQtSDQvtGC0LLQtdGC0YsgKCR7Y29ycmVjdHMubGVuZ3RofSkgOmA7XHJcbiAgICB9XHJcbiAgICAvLyByZW5kZXJSZXN1bHRXaW5kb3coKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgLy8gfVxyXG4gICAgc2hvd0xldmVsU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGlmLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgc2hvd1F1ZXN0aW9uKGF1ZGlvVGVzdFZpZXcpIHtcclxuICAgICAgICBjb25zdCBxdXN0aW9uQ29udGFpbmVyID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5kaXYtcXVpei1jb250YWluZXInKTtcclxuICAgICAgICBpZiAocXVzdGlvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBxdXN0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGF1ZGlvVGVzdFZpZXcuaW5uZXJIVE1MO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmFwcGVuZENoaWxkKGF1ZGlvVGVzdFZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaXZQbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWljb24nKTtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IGRpdlBsYXkgPT09IG51bGwgfHwgZGl2UGxheSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGl2UGxheS5maXJzdENoaWxkO1xyXG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgIH1cclxuICAgIHNob3dEaWZmaWN1bHR5U2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmRpZi1jb250YWluZXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgaGlkZURpZmZpY3VsdHlTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGlmLWNvbnRhaW5lcicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBzaG93R2FtZSgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgKF9hID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5kaXYtcXVpei1jb250YWluZXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgaGlkZUdhbWUoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGl2LXF1aXotY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGhpZGVQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgKF9hID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXByb2dyZXNzLWJhcicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBzaG93UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1wcm9ncmVzcy1iYXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgc2hvd1Jlc3VsdHMoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1yZXN1bHQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgaGlkZVJlc3VsdHMoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1yZXN1bHQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIGNvbnN0IGNvcnJlY3RkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5zd2VyLWNvbnRhaW5lci1jb3JyZWN0Jyk7XHJcbiAgICAgICAgY29uc3Qgd3JvbmdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5zd2VyLWNvbnRhaW5lci13cm9uZycpO1xyXG4gICAgICAgIGNvcnJlY3RkaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgd3JvbmdEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVQcm9ncmVzc0Jhcihsb2FkaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJyk7XHJcbiAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gYCR7bG9hZGluZ30lYDtcclxuICAgIH1cclxuICAgIHJlbmRlckFuc3dlclJlc3VsdChyZXN1bHQsIGFuc3dlciwgY29ycmVjdEFuc3dlcikge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbicpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJy4uLy4uL2Fzc2V0cy9hbnN3ZXItY29ycmVjdC53YXYnKTtcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJy4uLy4uL2Fzc2V0cy9hbnN3ZXItd3Jvbmcud2F2Jyk7XHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLnNwYW4tdmFsdWUnKS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0ID09PSBjb3JyZWN0QW5zd2VyLndvcmRUcmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0ID09PSBhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0LXF1ZXN0aW9uLWJ1dHRvbicpO1xyXG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJUZXh0ID0gJ9CU0LDQu9C10LUgKFNwYWNlKSc7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVOYXZLZXlzKHByZXNzZWRLZXkpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlS2V5c0xldmVsKHByZXNzZWRLZXkpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgaSA9IGJ1dHRvbnMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChwcmVzc2VkS2V5ID09PSAnQXJyb3dSaWdodCcgfHwgcHJlc3NlZEtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXNlZGJ1dHRvbiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmb2N1c2VkYnV0dG9uLnRhZ05hbWU7XHJcbiAgICAgICAgICAgIGlmIChuYW1lICE9PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1swXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gdGhpcy5mb2N1c0luZGV4ID09PSBpIC0gMSA/IHRoaXMuZm9jdXNJbmRleCA6ICh0aGlzLmZvY3VzSW5kZXggKz0gMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWYgPSAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgaWYgKChkaWYgPT09IG51bGwgfHwgZGlmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWYuY2xhc3NOYW1lKSA9PT0gJ2RpZi1jb250YWluZXIgaGlkZGVuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChidXR0b25zW3RoaXMuZm9jdXNJbmRleCAtIDFdLmNsYXNzTmFtZS5pbmNsdWRlcygnZ2FtZS1idXR0b24gbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNbdGhpcy5mb2N1c0luZGV4XS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVzc2VkS2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBwcmVzc2VkS2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXNlZGJ1dHRvbiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmb2N1c2VkYnV0dG9uLnRhZ05hbWU7XHJcbiAgICAgICAgICAgIGlmIChuYW1lICE9PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1swXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gdGhpcy5mb2N1c0luZGV4ID09PSAwID8gKHRoaXMuZm9jdXNJbmRleCA9IDApIDogKHRoaXMuZm9jdXNJbmRleCAtPSAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZiA9IChfYiA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGRpZiA9PT0gbnVsbCB8fCBkaWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpZi5jbGFzc05hbWUpID09PSAnZGlmLWNvbnRhaW5lciBoaWRkZW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGJ1dHRvbnNbdGhpcy5mb2N1c0luZGV4XS5jbGFzc05hbWUuaW5jbHVkZXMoJ2dhbWUtYnV0dG9uIGwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b25zW3RoaXMuZm9jdXNJbmRleF0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNbdGhpcy5mb2N1c0luZGV4XS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVzc2VkS2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRidXR0b24gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZm9jdXNlZGJ1dHRvbi50YWdOYW1lO1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAgICAgICAgIGZvY3VzZWRidXR0b24uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUtleXNMZXZlbChwcmVzc2VkS2V5KSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gcHJlc3NlZEtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChrZXkgPT09ICduJykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdHYW1lID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZS1idXR0b24nKTtcclxuICAgICAgICAgICAgbmV3R2FtZS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5ID09PSAnYScpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxheUdhbWUgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLnBsYXktYWdhaW4tYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHBsYXlHYW1lLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChOdW1iZXIoa2V5KSA+IDAgJiYgTnVtYmVyKGtleSkgPD0gNykge1xyXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoYC5sJHtrZXl9YCk7XHJcbiAgICAgICAgICAgIGRpZmYuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlS2V5c09wdGlvbihwcmVzc2VkS2V5KSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gcHJlc3NlZEtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChrZXkgPT09ICduJykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdHYW1lID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZS1idXR0b24nKTtcclxuICAgICAgICAgICAgbmV3R2FtZS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5ID09PSAnYScpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxheUdhbWUgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLnBsYXktYWdhaW4tYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHBsYXlHYW1lLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChOdW1iZXIoa2V5KSA+IDAgJiYgTnVtYmVyKGtleSkgPCA3KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbicpW051bWJlcihrZXkpIC0gMV07XHJcbiAgICAgICAgICAgIGRpZmYuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJyAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcubmV4dC1xdWVzdGlvbi1idXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQcmVzc0tleShrZXkpIHtcclxuICAgICAgICBpZiAoWyduJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnYScsICcgJ10uZmluZCgocCkgPT4gcCA9PT0ga2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaWYgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmRpZi1jb250YWluZXInKTtcclxuICAgICAgICAgICAgaWYgKChkaWYgPT09IG51bGwgfHwgZGlmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWYuY2xhc3NOYW1lKSA9PT0gJ2RpZi1jb250YWluZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtleXNMZXZlbChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlzT3B0aW9uKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOYXZLZXlzKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG4gICAgY3JlYXRlTW9kYWxDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBtb2RhbENsb3NlLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlJyk7XHJcbiAgICAgICAgbW9kYWxDbG9zZS5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0c0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlc3VsdHNCb3guY2xhc3NMaXN0LmFkZCgnZGl2LXJlc3VsdC1mbGV4Jyk7XHJcbiAgICAgICAgY29uc3QgcmVzaWx0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICByZXNpbHRzLmlubmVyVGV4dCA9IHJlc3VsdHNUZXh0O1xyXG4gICAgICAgIGNvbnN0IGluY29ycmVjdEFuc3dlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgaW5jb3JyZWN0QW5zd2Vycy5jbGFzc0xpc3QuYWRkKCdnYW1lLXNwYW4td3JvbmcnKTtcclxuICAgICAgICBpbmNvcnJlY3RBbnN3ZXJzLmlubmVyVGV4dCA9IGluY29ycmVjdFJlc3VsdHNUZXh0O1xyXG4gICAgICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvcnJlY3RBbnN3ZXJzLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3Bhbi1jb3JyZWN0Jyk7XHJcbiAgICAgICAgY29ycmVjdEFuc3dlcnMuaW5uZXJUZXh0ID0gY29ycmVjdFJlc3VsdHNUZXh0O1xyXG4gICAgICAgIGNvbnN0IGluY29ycmVjdEFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbmNvcnJlY3RBbnN3ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fuc3dlci1jb250YWluZXItd3JvbmcnKTtcclxuICAgICAgICBjb25zdCBjb3JyZWN0QW5zd2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvcnJlY3RBbnN3ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fuc3dlci1jb250YWluZXItY29ycmVjdCcpO1xyXG4gICAgICAgIHJlc3VsdHNCb3guYXBwZW5kKHJlc2lsdHMsIGluY29ycmVjdEFuc3dlcnMsIGluY29ycmVjdEFuc3dlcnNDb250YWluZXIsIGNvcnJlY3RBbnN3ZXJzLCBjb3JyZWN0QW5zd2Vyc0NvbnRhaW5lcik7XHJcbiAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZChtb2RhbENsb3NlLCByZXN1bHRzQm94KTtcclxuICAgICAgICByZXR1cm4gbW9kYWxDb250ZW50O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGlvVmlldztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCB7IGNvcnJlY3RSZXN1bHRzVGV4dCwgaW5jb3JyZWN0UmVzdWx0c1RleHQsIHJlc3VsdHNUZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuY2xhc3MgR2FtZUNvbW1vblZpZXcge1xyXG4gICAgc3RhdGljIGNyZWF0ZU1vZGFsQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgbW9kYWxDbG9zZS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zZScpO1xyXG4gICAgICAgIG1vZGFsQ2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByZXN1bHRzQm94LmNsYXNzTGlzdC5hZGQoJ2Rpdi1yZXN1bHQtZmxleCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc2lsdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgcmVzaWx0cy5pbm5lclRleHQgPSByZXN1bHRzVGV4dDtcclxuICAgICAgICBjb25zdCBpbmNvcnJlY3RBbnN3ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGluY29ycmVjdEFuc3dlcnMuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zcGFuLXdyb25nJyk7XHJcbiAgICAgICAgaW5jb3JyZWN0QW5zd2Vycy5pbm5lclRleHQgPSBpbmNvcnJlY3RSZXN1bHRzVGV4dDtcclxuICAgICAgICBjb25zdCBjb3JyZWN0QW5zd2VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb3JyZWN0QW5zd2Vycy5jbGFzc0xpc3QuYWRkKCdnYW1lLXNwYW4tY29ycmVjdCcpO1xyXG4gICAgICAgIGNvcnJlY3RBbnN3ZXJzLmlubmVyVGV4dCA9IGNvcnJlY3RSZXN1bHRzVGV4dDtcclxuICAgICAgICBjb25zdCBpbmNvcnJlY3RBbnN3ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5jb3JyZWN0QW5zd2Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbnN3ZXItY29udGFpbmVyLXdyb25nJyk7XHJcbiAgICAgICAgY29uc3QgY29ycmVjdEFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb3JyZWN0QW5zd2Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbnN3ZXItY29udGFpbmVyLWNvcnJlY3QnKTtcclxuICAgICAgICByZXN1bHRzQm94LmFwcGVuZChyZXNpbHRzLCBpbmNvcnJlY3RBbnN3ZXJzLCBpbmNvcnJlY3RBbnN3ZXJzQ29udGFpbmVyLCBjb3JyZWN0QW5zd2VycywgY29ycmVjdEFuc3dlcnNDb250YWluZXIpO1xyXG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmQobW9kYWxDbG9zZSwgcmVzdWx0c0JveCk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVUaW1lcigpIHtcclxuICAgICAgICBjb25zdCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpbWVyLmNsYXNzTGlzdC5hZGQoJ3NwcmludC10aW1lcicsICdoaWRkZW4nKTtcclxuICAgICAgICByZXR1cm4gdGltZXI7XHJcbiAgICB9XHJcbiAgICBzaG93TGV2ZWxTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5kaWYtY29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBzaG93RGlmZmljdWx0eVNlbGVjdGlvbigpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgKF9hID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5kaWYtY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGhpZGVEaWZmaWN1bHR5U2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmRpZi1jb250YWluZXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgc2hvd0dhbWUoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGl2LXF1aXotY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGhpZGVHYW1lKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmRpdi1xdWl6LWNvbnRhaW5lcicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBoaWRlUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1wcm9ncmVzcy1iYXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgc2hvd1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtcHJvZ3Jlc3MtYmFyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIHNob3dSZXN1bHRzKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtcmVzdWx0JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGhpZGVSZXN1bHRzKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtcmVzdWx0JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBjb25zdCBjb3JyZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlci1jb250YWluZXItY29ycmVjdCcpO1xyXG4gICAgICAgIGNvbnN0IHdyb25nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlci1jb250YWluZXItd3JvbmcnKTtcclxuICAgICAgICBjb3JyZWN0RGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHdyb25nRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlUHJvZ3Jlc3NCYXIobG9hZGluZykge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xyXG4gICAgICAgIGRpdi5zdHlsZS53aWR0aCA9IGAke2xvYWRpbmd9JWA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbW1vblZpZXc7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgQXBwbGljYXRpb25Db250b2xsZXIgZnJvbSAnLi4vYXBwbGljYXRpb24tY29udHJvbGxlcic7XHJcbmltcG9ydCBHYW1lUGFnZVZpZXcgZnJvbSAnLi9nYW1lcy1wYWdlLXZpZXcnO1xyXG5jbGFzcyBHYW1lc1BhZ2VDb250cm9sbGVyIGV4dGVuZHMgQXBwbGljYXRpb25Db250b2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3ID0gbmV3IEdhbWVQYWdlVmlldygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVzUGFnZUNvbnRyb2xsZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0FwcCc7XHJcbmltcG9ydCB7IGF1ZGlvR2FtZU5hbWUsIHNwcmludEdhbWVOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IEF1ZGlvQ29udHJvbGxlciBmcm9tICcuL2F1ZGlvLWNhbGwtcGFnZS9hdWRpby1jYWxsLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgU3ByaW50Q29udHJvbGxlciBmcm9tICcuL3NwcmludC1wYWdlL3NwcmludC1jb250cm9sbGVyJztcclxuY2xhc3MgR2FtZVBhZ2VWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyVmlldygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyVmlldygpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnZ2FtZXMtYmxvY2snKTtcclxuICAgICAgICBjb25zdCBhdWRpb0NhbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBhdWRpb0NhbGxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYXVkaW8tY2FsbC1idXR0b24nKTtcclxuICAgICAgICBhdWRpb0NhbGxCdXR0b24uaW5uZXJUZXh0ID0gYXVkaW9HYW1lTmFtZTtcclxuICAgICAgICBhdWRpb0NhbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQXVkaW9Db250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNwcmludEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHNwcmludEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzcHJpbnQtYnV0dG9uJyk7XHJcbiAgICAgICAgc3ByaW50QnV0dG9uLmlubmVyVGV4dCA9IHNwcmludEdhbWVOYW1lO1xyXG4gICAgICAgIHNwcmludEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBTcHJpbnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlldy5hcHBlbmQoYXVkaW9DYWxsQnV0dG9uLCBzcHJpbnRCdXR0b24pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVQYWdlVmlldztcclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IEFwaSBmcm9tICcuLi8uLi8uLi9BcGknO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uLy4uL0FwcCc7XHJcbmltcG9ydCBVc2VyV29yZCBmcm9tICcuLi8uLi8uLi90eXBlcy91c2Vyd29yZCc7XHJcbi8vIGltcG9ydCB7IHNwcmludFRpbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgQXBwbGljYXRpb25Db250b2xsZXIgZnJvbSAnLi4vLi4vYXBwbGljYXRpb24tY29udHJvbGxlcic7XHJcbmltcG9ydCBTcHJpbnRNb2RlbCBmcm9tICcuL3NwcmludC1tb2RlbCc7XHJcbmltcG9ydCBTcHJpbnRWaWV3IGZyb20gJy4vc3ByaW50LXZpZXcnO1xyXG5jbGFzcyBTcHJpbnRDb250cm9sbGVyIGV4dGVuZHMgQXBwbGljYXRpb25Db250b2xsZXIge1xyXG4gICAgY29uc3RydWN0b3Iod29yZHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSgpO1xyXG4gICAgICAgIHRoaXMud29yZHNQZXJQYWdlID0gMjA7XHJcbiAgICAgICAgdGhpcy5jb3VudFF1ZXN0aW9ucyA9IDIwMDtcclxuICAgICAgICB0aGlzLmluaXRpYWxiYXJQcm9ncmVzcyA9IDM7XHJcbiAgICAgICAgdGhpcy5wYWdlc1BlckdhbWUgPSA5O1xyXG4gICAgICAgIGlmICghd29yZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldyA9IG5ldyBTcHJpbnRWaWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgU3ByaW50TW9kZWwodGhpcy5wYWdlVmlldyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkS2V5Qm9hcmRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdvcmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY3JlYXRlUXVpeih3b3JkcywgdGhpcy5jb3VudFF1ZXN0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY3RybHJcclxuICAgIGFkZExpc3RlbmVycygpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgYnRucyA9IHRoaXMucGFnZVZpZXcudmlldy5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FtZS1idXR0b24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZ2FtZVN0YXR1cyA9ICdTZXQgTGV2ZWwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmRzID0geWllbGQgdGhpcy5nZXRBbGxXb3JkcyhOdW1iZXIodGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5jcmVhdGVRdWl6KHdvcmRzLCB0aGlzLmNvdW50UXVlc3Rpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VWaWV3LnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgLy8gaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdnYW1lLWJ1dHRvbiBvcHRpb24nKSB7XHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5tb2RlbC51cGRhdGVHYW1lUHJvZ3Jlc3MoKTsvL9C+0LHQvdC+0LLQu9C10L3QuNC1INGB0YLQsNGC0LjRgdGC0LjQutC4XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5pZCA9PT0gJ25leHQtcXVlc3Rpb24tYnV0dG9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVVc2VyV29yZHModGhpcy5tb2RlbC5hdWRpb1Rlc3RzW3RoaXMubW9kZWwuY3VycmVudFF1ZXN0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLm5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnYXVkaW8taWNvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gdGFyZ2V0LmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgYSA9IG5ldyBBdWRpbyhhdWRpby5zcmMpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaWQgPT09ICdwbGF5LWFnYWluJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5wbGF5QWdhaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2dhbWUtYnV0dG9uIG9wdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuaGFuZGxlQW5zd2VyKHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc3Bhbi12YWx1ZScpLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbC1jbG9zZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY2xvc2VSZXN1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIChfYSA9IHRoaXMucGFnZVZpZXcudmlldy5xdWVyeVNlbGVjdG9yKCcjbmV3LWdhbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmdhbWVTdGF0dXMgPSAnU2VsZWN0IExldmVsJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIGN0cmxyXHJcbiAgICBhZGRLZXlCb2FyZExpc3RlbmVycygpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMua2V5UHJlc3MoZSkpO1xyXG4gICAgfVxyXG4gICAgLy8gY3RybHJcclxuICAgIGtleVByZXNzKGUpIHtcclxuICAgICAgICBpZiAoQXBwLmNvbnRyb2xsZXIgaW5zdGFuY2VvZiBTcHJpbnRDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGFuZGxlUHJlc3NLZXkoZS5rZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGN0cmxyXHJcbiAgICBnZXRBbGxXb3Jkcyhncm91cCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd1Byb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZ2FtZVN0YXR1cyA9ICdMb2FkaW5nJztcclxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gdGhpcy5pbml0aWFsYmFyUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGxldCB3b3JkcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tUGFnZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgd2hpbGUgKHJhbmRvbVBhZ2VzLmxlbmd0aCA8IHRoaXMucGFnZXNQZXJHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByYW5kb21QYWdlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucGFnZXNQZXJHYW1lICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tUGFnZXMgPSByYW5kb21QYWdlcy5maWx0ZXIoKGl0ZW0sIGluZGV4LCBhcnIpID0+IGluZGV4ID09PSBhcnIuaW5kZXhPZihpdGVtKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5wYWdlc1BlckdhbWU7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoaSAvIHRoaXMucGFnZXNQZXJHYW1lKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwubG9hZGluZ1N0YXR1cyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB5aWVsZCB0aGlzLmdldFdvcmRzKGdyb3VwLCBpKTtcclxuICAgICAgICAgICAgICAgIHdvcmRzID0gd29yZHMuY29uY2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gd29yZHM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBtb2RlbFxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2luZGVudCAqL1xyXG4gICAgZ2V0V29yZHMoZ3JvdXAsIHBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKGAke3RoaXMuYXBpLndvcmRzfT9ncm91cD0ke2dyb3VwfSZwYWdlPSR7cGFnZX1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29yZHMgPSByZXN1bHQuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgcmVzKHdvcmRzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWooZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBVcGRhdGVVc2VyV29yZHModGVzdCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBsZXQgdXNlcldvcmRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGlmICgoX2EgPSBBcHAudXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB5aWVsZCB0aGlzLmFwaS5nZXRVc2VyV29yZHMoQXBwLnVzZXIudXNlcklkLCBBcHAudXNlci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICB1c2VyV29yZHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmQgPSB1c2VyV29yZHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLndvcmRJZCA9PT0gdGVzdC5jb3JyZWN0QW5zd2VyLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaW5kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3MgPSB0ZXN0LmlzQ29ycmVjdCA/IChwcm9ncmVzcyA9IDIwKSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGlmZmljdWx0eSA9ICduby1oYXJkJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzdWNjZXNzZnVsQXR0ZW1wdHMgPSB0ZXN0LmlzQ29ycmVjdCA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHVuc3VjY2Vzc2Z1bEF0dGVtcHRzID0gdGVzdC5pc0NvcnJlY3QgPyAwIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyV29yZCA9IG5ldyBVc2VyV29yZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRlc3QuY29ycmVjdEFuc3dlcixcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaWZmaWN1bHR5LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NmdWxBdHRlbXB0cyxcclxuICAgICAgICAgICAgICAgICAgICAvLyB1bnN1Y2Nlc3NmdWxBdHRlbXB0cyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS5jcmVhdGVVc2VyV29yZChBcHAudXNlci51c2VySWQsIEFwcC51c2VyLnRva2VuLCB1c2VyV29yZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JkID0gZmluZFswXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgeyBwcm9ncmVzcyB9ID0gd29yZC5vcHRpb25hbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcm9ncmVzcyA9IHRlc3QuaXNDb3JyZWN0ID8gKHByb2dyZXNzICs9IDIwKSA6IChwcm9ncmVzcyAtPSAyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3MgPSBwcm9ncmVzcyA+PSAxMDAgPyAxMDAgOiBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcm9ncmVzcyA9IHByb2dyZXNzIDw9IDAgPyAwIDogcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGlmZmljdWx0eSA9IHByb2dyZXNzID09PSAxMDAgPyAnbm8taGFyZCcgOiBmaW5kWzBdLmRpZmZpY3VsdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QuaXNDb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQub3B0aW9uYWwuc3VjY2Vzc2Z1bEF0dGVtcHRzICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGVzdC5pc0NvcnJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZC5vcHRpb25hbC51bnN1Y2Nlc3NmdWxBdHRlbXB0cyArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB7IHN1Y2Nlc3NmdWxBdHRlbXB0cyB9ID0gd29yZC5vcHRpb25hbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB7IHVuc3VjY2Vzc2Z1bEF0dGVtcHRzIH0gPSB3b3JkLm9wdGlvbmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJXb3JkID0gbmV3IFVzZXJXb3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGVzdC5jb3JyZWN0QW5zd2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpZmZpY3VsdHksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3VjY2Vzc2Z1bEF0dGVtcHRzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuc3VjY2Vzc2Z1bEF0dGVtcHRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJXb3JkLndvcmQgPSB0ZXN0LmNvcnJlY3RBbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcldvcmQud29yZElkID0gd29yZC53b3JkSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlVXNlcldvcmQoQXBwLnVzZXIudXNlcklkLCBBcHAudXNlci50b2tlbiwgdXNlcldvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gc3RhcnRHYW1lKCkge1xyXG4vLyAgIHRoaXMucGFnZVZpZXcgPSBuZXcgU3ByaW50VmlldygpO1xyXG4vLyAgIHRoaXMuc2V0VGltZXIoKTtcclxuLy8gfVxyXG4vLyAgIHNldFRpbWVyKCkge1xyXG4vLyAgICAgY29uc3QgdGltZXIgPSB0aGlzLnBhZ2VWaWV3LnZpZXcucXVlcnlTZWxlY3RvcignLnNwcmludC10aW1lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBTcHJpbnRDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgU3ByaW50UXVlc3Rpb24gZnJvbSAnLi9zcHJpbnQtcXVlc3Rpb24tY29tcG9uZW50JztcclxuaW1wb3J0IHsgY29ycmVjdFRleHQsIGluY29ycmVjdFRleHQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5jbGFzcyBTcHJpbnRNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlVmlldykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gLTE7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMucGFnZVZpZXcgPSBwYWdlVmlldztcclxuICAgICAgICB0aGlzLndyb25nQW5zd2VycyA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3JycmVjdEFuc3dlcnMgPSAwO1xyXG4gICAgfVxyXG4gICAgLy8gY3RybHJcclxuICAgIHNldCBsb2FkaW5nU3RhdHVzKGxvYWRpbmcpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdQcm9ncmVzcyA9IGxvYWRpbmc7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldy51cGRhdGVQcm9ncmVzc0Jhcih0aGlzLmxvYWRpbmdQcm9ncmVzcyk7XHJcbiAgICB9XHJcbiAgICAvLyBjdHJsclxyXG4gICAgc2V0IGdhbWVTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAnU2V0IExldmVsJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LmhpZGVUaW1lcigpO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LmhpZGVEaWZmaWN1bHR5U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZUdhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdTZWxlY3QgTGV2ZWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd0xldmVsU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZUdhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdHYW1lJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LmhpZGVEaWZmaWN1bHR5U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd0dhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGN0cmxyXHJcbiAgICBzZXQgUXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSBjdXJyZW50UXVlc3Rpb247XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldy5zaG93UXVlc3Rpb24odGhpcy5hdWRpb1Rlc3RzW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5hdWRpb1Rlc3RWaWV3KTtcclxuICAgIH1cclxuICAgIHBsYXlBZ2FpbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9UZXN0cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvVGVzdHNbaV0uaXNBbnN3ZXJlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9UZXN0c1tpXS5pc0NvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1Rlc3RzW2ldLm9wdGlvbnMgPSB0aGlzLmF1ZGlvVGVzdHNbaV0ub3B0aW9ucy5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvVGVzdHNbaV0ucmVuZGVyQXVkaW9UZXN0VmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1ZGlvVGVzdHMgPSB0aGlzLmF1ZGlvVGVzdHMuc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLlF1ZXN0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSAnR2FtZSc7XHJcbiAgICB9XHJcbiAgICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gPT09IHRoaXMuYXVkaW9UZXN0cy5sZW5ndGggfHwgdGhpcy5wYWdlVmlldy50aW1lci5pbm5lclRleHQgPT09ICcwJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LnNob3dHYW1lUmVzdWx0KHRoaXMuYXVkaW9UZXN0cyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZUdhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlVGltZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd1F1ZXN0aW9uKHRoaXMuYXVkaW9UZXN0c1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0uYXVkaW9UZXN0Vmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY3RybHJcclxuICAgIGNsb3NlUmVzdWx0KCkge1xyXG4gICAgICAgIC8vINC10YHQu9C4INCw0LLRgtC+0YDQuNC30L7QstCw0L3RiyDQv9C10YDQtdGF0L7QtNC40Lwg0L3QsCDRgdGC0YDQsNC90LjRhtGDINGD0YfQtdCx0L3QuNC60LBcclxuICAgICAgICAvLyB0aGlzLmF1ZGlvVGVzdHMgPSBuZXcgQXJyYXk8QXVkaW9RdWVzdGlvbj4oKTtcclxuICAgICAgICB0aGlzLndyb25nQW5zd2VycyA9IDA7XHJcbiAgICAgICAgdGhpcy5yaWd0aEFuc3dlcnMgPSAwO1xyXG4gICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZVJlc3VsdHMoKTtcclxuICAgICAgICB0aGlzLmF1ZGlvVGVzdHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgLy8gY3RybHJcclxuICAgIC8vINGB0YTQvtGA0LzQuNGA0L7QstCw0YLRjCDRgdC/0LjRgdC+0Log0LLQvtC/0YDQvtGB0L7QsiDQuCDQvdCw0YfQsNGC0Ywg0LjQs9GA0YNcclxuICAgIGNyZWF0ZVF1aXood29yZHMsIGNvdW50UXVlc3Rpb25zKSB7XHJcbiAgICAgICAgaWYgKHdvcmRzLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gJ1NlbGVjdCBMZXZlbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXN0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IE1hdGgubWluKHdvcmRzLmxlbmd0aCwgY291bnRRdWVzdGlvbnMpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAodGVzdHMubGVuZ3RoIDwgY291bnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3JyZWN0QW5zd2VyID0gd29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd29yZHMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgZmluZCA9IHRlc3RzLmZpbHRlcigocCkgPT4gcC5jb3JyZWN0QW5zd2VyLmlkID09PSBjb3JyZWN0QW5zd2VyLmlkKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbG9vcC1mdW5jICovXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoZmluZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlciA9IHdvcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmQgPSB0ZXN0cy5maWx0ZXIoKHApID0+IHAuY29ycmVjdEFuc3dlci5pZCA9PT0gY29ycmVjdEFuc3dlci5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGNvcnJlY3RBbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG9wdGlvbnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3b3Jkcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2god29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMuZmlsdGVyKChpdGVtLCBpbmRleCwgYXJyKSA9PiBhcnIuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMuc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBuZXcgU3ByaW50UXVlc3Rpb24ob3B0aW9ucywgY29ycmVjdEFuc3dlciwgaWQpO1xyXG4gICAgICAgICAgICAgICAgdGVzdC5yZW5kZXJBdWRpb1Rlc3RWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgdGVzdHMucHVzaCh0ZXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvVGVzdHMgPSB0ZXN0cztcclxuICAgICAgICAgICAgdGhpcy5RdWVzdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9ICdHYW1lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjdHJsclxyXG4gICAgaGFuZGxlQW5zd2VyKGFuc3dlcikge1xyXG4gICAgICAgIGxldCB1c2VyQW5zd2VyO1xyXG4gICAgICAgIHN3aXRjaCAoYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY29ycmVjdFRleHQ6XHJcbiAgICAgICAgICAgICAgICB1c2VyQW5zd2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGluY29ycmVjdFRleHQ6XHJcbiAgICAgICAgICAgICAgICB1c2VyQW5zd2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhdWRpb1Rlc3QgPSB0aGlzLmF1ZGlvVGVzdHNbdGhpcy5jdXJyZW50UXVlc3Rpb25dO1xyXG4gICAgICAgIGlmICghYXVkaW9UZXN0LmlzQW5zd2VyZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHRBbnN3ZXIgPSBhdWRpb1Rlc3QuY29ycmVjdEFuc3dlci53b3JkVHJhbnNsYXRlID09PSBhdWRpb1Rlc3QudmFyaWF0aW9uLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdXNlckFuc3dlciA9PT0gcmlnaHRBbnN3ZXI7XHJcbiAgICAgICAgICAgIGF1ZGlvVGVzdC5pc0NvcnJlY3QgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcucmVuZGVyQW5zd2VyUmVzdWx0KHJlc3VsdCwgYW5zd2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXVkaW9UZXN0LmlzQW5zd2VyZWQgPSAnWWVzJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTcHJpbnRNb2RlbDtcclxuIiwiaW1wb3J0IEFwaSBmcm9tICcuLi8uLi8uLi9BcGknO1xyXG5pbXBvcnQgeyBhcnJvd0xlZnQsIGFycm93UmlnaHQsIGNvcnJlY3RUZXh0LCBpbmNvcnJlY3RUZXh0LCBza2lwVGV4dCwgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5jbGFzcyBTcHJpbnRRdWVzdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBjb3JyZWN0QW5zd2VyLCBpZCkge1xyXG4gICAgICAgIHRoaXMuaXNDb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgQXBpKCk7XHJcbiAgICAgICAgdGhpcy5hdWRpb1Rlc3RWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5pc0Fuc3dlcmVkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBjb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgIHRoaXMuYW5zd2VyVmlldyA9IHRoaXMucmVuZGVyQW5zd2VyVmlldyhjb3JyZWN0QW5zd2VyKTtcclxuICAgICAgICB0aGlzLnJlbmRlckF1ZGlvVGVzdFZpZXcoKTtcclxuICAgIH1cclxuICAgIHJlbmRlckFuc3dlclZpZXcoY29ycmVjdEFuc3dlcikge1xyXG4gICAgICAgIGNvbnN0IGRpdkFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXVkaW9Cb3guY2xhc3NOYW1lID0gJ2F1ZGlvLWljb24nO1xyXG4gICAgICAgIGF1ZGlvQm94LnNldEF0dHJpYnV0ZSgnYXVkaW8nLCBgJHt0aGlzLmFwaS5iYXNlVXJsfS8ke2NvcnJlY3RBbnN3ZXIuYXVkaW99YCk7XHJcbiAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgIGF1ZGlvLnNyYyA9IGAke3RoaXMuYXBpLmJhc2VVcmx9LyR7Y29ycmVjdEFuc3dlci5hdWRpb31gO1xyXG4gICAgICAgIGF1ZGlvQm94LmFwcGVuZChhdWRpbyk7XHJcbiAgICAgICAgdGhpcy5hdWRpb0Fuc3dlciA9IGF1ZGlvQm94O1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBvcmlnaW5hbFdvcmQuY2xhc3NMaXN0LmFkZCgnd29yZCcsICdzcHJpbnQtb3JpZ2luYWwtd29yZCcpO1xyXG4gICAgICAgIG9yaWdpbmFsV29yZC5pbm5lclRleHQgPSBjb3JyZWN0QW5zd2VyLndvcmQ7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFdvcmQgPSBvcmlnaW5hbFdvcmQ7XHJcbiAgICAgICAgcmV0dXJuIGRpdkFuc3dlcjtcclxuICAgIH1cclxuICAgIHJlbmRlckF1ZGlvVGVzdFZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgcXVpekNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHF1aXpDb250YWluZXIuY2xhc3NOYW1lID0gJ2Rpdi1xdWl6LWNvbnRhaW5lcic7XHJcbiAgICAgICAgcXVpekNvbnRhaW5lci5pZCA9IHRoaXMuaWQudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBkaXZQbGF5ID0gdGhpcy5hdWRpb0Fuc3dlcjtcclxuICAgICAgICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzcHJpbnQtcXVlc3Rpb24tY29udGFpbmVyJztcclxuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5pbm5lclRleHQgPSBza2lwVGV4dDtcclxuICAgICAgICBuZXh0QnV0dG9uLmlkID0gJ25leHQtcXVlc3Rpb24tYnV0dG9uJztcclxuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTmFtZSA9ICduZXh0LXF1ZXN0aW9uLWJ1dHRvbic7XHJcbiAgICAgICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kKGRpdlBsYXksIHRoaXMub3JpZ2luYWxXb3JkKTtcclxuICAgICAgICBxdWl6Q29udGFpbmVyLmFwcGVuZChxdWVzdGlvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgYW5zd2Vyc0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFuc3dlcnNCb3guY2xhc3NMaXN0LmFkZCgnYW5zd2Vycy1ib3gnKTtcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbi5jbGFzc0xpc3QuYWRkKCd3b3JkJywgJ3NwcmludC12YXJpYXRpb24td29yZCcpO1xyXG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbiA9IHRoaXMub3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm9wdGlvbnMubGVuZ3RoKV0ud29yZFRyYW5zbGF0ZTtcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbi5pbm5lclRleHQgPSB2YXJpYXRpb247XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnZ2FtZS1idXR0b24gb3B0aW9uJztcclxuICAgICAgICAgICAgLy8gYnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy5vcHRpb25zW2ldLndvcmRUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdk9wdGlvbkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2T3B0aW9uR3JpZC5jbGFzc05hbWUgPSAnZGl2LW9wdGlvbi1ncmlkJztcclxuICAgICAgICAgICAgY29uc3Qgc3BhblZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBzcGFuVmFsdWUuY2xhc3NOYW1lID0gJ3NwYW4tdmFsdWUnO1xyXG4gICAgICAgICAgICAvLyBzcGFuVmFsdWUudGV4dENvbnRlbnQgPSB0aGlzLm9wdGlvbnNbaV0ud29yZFRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGlmIChpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJvdy50ZXh0Q29udGVudCA9IGFycm93UmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBzcGFuVmFsdWUuaW5uZXJUZXh0ID0gY29ycmVjdFRleHQ7XHJcbiAgICAgICAgICAgICAgICBkaXZPcHRpb25HcmlkLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICBkaXZPcHRpb25HcmlkLmFwcGVuZChzcGFuVmFsdWUsIGFycm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFycm93LnRleHRDb250ZW50ID0gYXJyb3dMZWZ0O1xyXG4gICAgICAgICAgICAgICAgc3BhblZhbHVlLmlubmVyVGV4dCA9IGluY29ycmVjdFRleHQ7XHJcbiAgICAgICAgICAgICAgICBkaXZPcHRpb25HcmlkLmFwcGVuZChhcnJvdywgc3BhblZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kKGRpdk9wdGlvbkdyaWQpO1xyXG4gICAgICAgICAgICBhbnN3ZXJzQm94LmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBxdWVzdGlvbkNvbnRhaW5lci5hcHBlbmQodGhpcy52YXJpYXRpb24sIGFuc3dlcnNCb3gsIG5leHRCdXR0b24pO1xyXG4gICAgICAgIHRoaXMuYXVkaW9UZXN0VmlldyA9IHF1aXpDb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3ByaW50UXVlc3Rpb247XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uLy4uLy4uL0FwaSc7XHJcbmltcG9ydCB7IGluY29ycmVjdFJlc3VsdHNUZXh0LCBjb3JyZWN0UmVzdWx0c1RleHQsIGxldmVsVGV4dCwgbmV3U3ByaW50R2FtZUJ1dHRvblRleHQsIGxldmVsU2VsZWN0TGFiZWxUZXh0LCBzcHJpbnRUaW1lLCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCBBcHBsaWNhdGlvblZpZXcgZnJvbSAnLi4vLi4vYXBwbGljYXRpb24tdmlldyc7XHJcbmltcG9ydCBHYW1lQ29tbW9uVmlldyBmcm9tICcuLi9nYW1lLWNvbW1vbi12aWV3JztcclxuaW1wb3J0ICcuL3NwcmludC5jc3MnO1xyXG5jbGFzcyBTcHJpbnRWaWV3IGV4dGVuZHMgQXBwbGljYXRpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmFwaSA9IG5ldyBBcGkoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclZpZXcoKTtcclxuICAgIH1cclxuICAgIC8vIHZpZXdcclxuICAgIHJlbmRlclZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdhdWRpby1jYWxsLWNvbnRhaW5lcic7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uTmV3R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbk5ld0dhbWUuaW5uZXJUZXh0ID0gbmV3U3ByaW50R2FtZUJ1dHRvblRleHQ7XHJcbiAgICAgICAgYnV0dG9uTmV3R2FtZS5pZCA9ICduZXctZ2FtZSc7XHJcbiAgICAgICAgYnV0dG9uTmV3R2FtZS5jbGFzc05hbWUgPSAnbmV3LWdhbWUtYnV0dG9uJztcclxuICAgICAgICBjb25zdCBkaXZCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2QnV0dG9uc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnYnV0dG9ucy1jb250YWluZXInO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gYGdhbWUtYnV0dG9uIGwke2l9YDtcclxuICAgICAgICAgICAgYnV0dG9uLnZhbHVlID0gKGkgLSAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gYCR7bGV2ZWxUZXh0fSAke2l9YDtcclxuICAgICAgICAgICAgZGl2QnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZXZlbFNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsZXZlbFNlbGVjdExhYmVsLmlubmVyVGV4dCA9IGxldmVsU2VsZWN0TGFiZWxUZXh0O1xyXG4gICAgICAgIGNvbnN0IGRpdkRpZmZpY3VsdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZEaWZmaWN1bHR5LmNsYXNzTmFtZSA9ICdkaWYtY29udGFpbmVyIGhpZGRlbic7XHJcbiAgICAgICAgZGl2RGlmZmljdWx0eS5hcHBlbmQobGV2ZWxTZWxlY3RMYWJlbCwgZGl2QnV0dG9uc0NvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbm5lcmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlubmVyZGl2LmNsYXNzTmFtZSA9ICdsb2FkaW5nJztcclxuICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSAnZ2FtZS1wcm9ncmVzcy1iYXIgaGlkZGVuJztcclxuICAgICAgICBwcm9ncmVzc0Jhci5pZCA9ICdhdWRpby1wcm9ncmVzcy1iYXInO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmFwcGVuZENoaWxkKGlubmVyZGl2KTtcclxuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBHYW1lQ29tbW9uVmlldy5jcmVhdGVNb2RhbENvbnRlbnQoKTtcclxuICAgICAgICBtb2RhbC5jbGFzc05hbWUgPSAnZ2FtZS1yZXN1bHQgaGlkZGVuJztcclxuICAgICAgICBnYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdnYW1lLWNvbnRhaW5lcic7XHJcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQoZGl2RGlmZmljdWx0eSwgcHJvZ3Jlc3NCYXIsIHN0YXR1c0NvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IEdhbWVDb21tb25WaWV3LmNyZWF0ZVRpbWVyKCk7XHJcbiAgICAgICAgZGl2LmFwcGVuZChidXR0b25OZXdHYW1lLCB0aGlzLnRpbWVyLCBnYW1lQ29udGFpbmVyLCBtb2RhbCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZGl2O1xyXG4gICAgfVxyXG4gICAgLy8gdmlld1xyXG4gICAgc2hvd0dhbWVSZXN1bHQoYXVkaW9UZXN0cykge1xyXG4gICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMoKTtcclxuICAgICAgICBjb25zdCBjb3JyZWN0ZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlci1jb250YWluZXItY29ycmVjdCcpO1xyXG4gICAgICAgIGNvbnN0IHdyb25nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlci1jb250YWluZXItd3JvbmcnKTtcclxuICAgICAgICBjb3JyZWN0ZGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHdyb25nRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGNvcnJlY3RzID0gYXVkaW9UZXN0cy5maWx0ZXIoKHApID0+IHAuaXNDb3JyZWN0ICYmICEhcC5pc0Fuc3dlcmVkKTtcclxuICAgICAgICBjb25zdCB3cm9uZ3MgPSBhdWRpb1Rlc3RzLmZpbHRlcigocCkgPT4gIXAuaXNDb3JyZWN0ICYmICEhcC5pc0Fuc3dlcmVkKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdyb25ncy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaXZSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgYXVkaW9SZXN1bHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYXVkaW9SZXN1bHRCb3guY2xhc3NOYW1lID0gJ2F1ZGlvLWljb24nO1xyXG4gICAgICAgICAgICBjb25zdCBhdWRpb1Jlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVzdWx0LnNyYyA9IGAke3RoaXMuYXBpLmJhc2VVcmx9LyR7d3JvbmdzW2ldLmNvcnJlY3RBbnN3ZXIuYXVkaW99YDtcclxuICAgICAgICAgICAgYXVkaW9SZXN1bHRCb3guYXBwZW5kQ2hpbGQoYXVkaW9SZXN1bHQpO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkVHJhbnNsYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGRhc2guaW5uZXJUZXh0ID0gJ+KAlCc7XHJcbiAgICAgICAgICAgIHdvcmQuaW5uZXJUZXh0ID0gd3JvbmdzW2ldLmNvcnJlY3RBbnN3ZXIud29yZDtcclxuICAgICAgICAgICAgd29yZFRyYW5zbGF0aW9uLmlubmVyVGV4dCA9IHdyb25nc1tpXS5jb3JyZWN0QW5zd2VyLndvcmRUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgIGRpdlJlc3VsdC5hcHBlbmQoYXVkaW9SZXN1bHRCb3gsIHdvcmQsIGRhc2gsIHdvcmRUcmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgIHdyb25nRGl2LmFwcGVuZENoaWxkKGRpdlJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ycmVjdHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2UmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvUmVzdWx0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVzdWx0Qm94LmNsYXNzTmFtZSA9ICdhdWRpby1pY29uJztcclxuICAgICAgICAgICAgY29uc3QgYXVkaW9SZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgICAgICBhdWRpb1Jlc3VsdC5zcmMgPSBgJHt0aGlzLmFwaS5iYXNlVXJsfS8ke2NvcnJlY3RzW2ldLmNvcnJlY3RBbnN3ZXIuYXVkaW99YDtcclxuICAgICAgICAgICAgYXVkaW9SZXN1bHRCb3guYXBwZW5kQ2hpbGQoYXVkaW9SZXN1bHQpO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkVHJhbnNsYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGRhc2guaW5uZXJUZXh0ID0gJ+KAlCc7XHJcbiAgICAgICAgICAgIHdvcmQuaW5uZXJUZXh0ID0gY29ycmVjdHNbaV0uY29ycmVjdEFuc3dlci53b3JkO1xyXG4gICAgICAgICAgICB3b3JkVHJhbnNsYXRpb24uaW5uZXJUZXh0ID0gY29ycmVjdHNbaV0uY29ycmVjdEFuc3dlci53b3JkVHJhbnNsYXRlO1xyXG4gICAgICAgICAgICBkaXZSZXN1bHQuYXBwZW5kKGF1ZGlvUmVzdWx0Qm94LCB3b3JkLCBkYXNoLCB3b3JkVHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICBjb3JyZWN0ZGl2LmFwcGVuZENoaWxkKGRpdlJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zcGFuLWNvcnJlY3QnKS5pbm5lclRleHQgPSBgJHtjb3JyZWN0UmVzdWx0c1RleHR9ICgke2NvcnJlY3RzLmxlbmd0aH0pIDpgO1xyXG4gICAgICAgIHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zcGFuLXdyb25nJykuaW5uZXJUZXh0ID0gYCR7aW5jb3JyZWN0UmVzdWx0c1RleHR9ICgke3dyb25ncy5sZW5ndGh9KSA6IGA7XHJcbiAgICB9XHJcbiAgICAvLyByZW5kZXJSZXN1bHRXaW5kb3coKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgLy8gfVxyXG4gICAgLy8gdmlld1xyXG4gICAgc2hvd0xldmVsU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGlmLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgLy8gdmlld1xyXG4gICAgc2hvd1F1ZXN0aW9uKGF1ZGlvVGVzdFZpZXcpIHtcclxuICAgICAgICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGl2LXF1aXotY29udGFpbmVyJyk7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGF1ZGlvVGVzdFZpZXcuaW5uZXJIVE1MO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmFwcGVuZENoaWxkKGF1ZGlvVGVzdFZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaXZQbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWljb24nKTtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IGRpdlBsYXkgPT09IG51bGwgfHwgZGl2UGxheSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGl2UGxheS5maXJzdENoaWxkO1xyXG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgIH1cclxuICAgIHNob3dUaW1lcigpIHtcclxuICAgICAgICB0aGlzLnRpbWVyLmlubmVyVGV4dCA9IGAke3NwcmludFRpbWV9YDtcclxuICAgICAgICB0aGlzLnRpbWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRoaXMudGltZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgbGV0IGdhbWVUaW1lID0gMDtcclxuICAgICAgICBsZXQgaXNSZXN1bHRzU2hvd24gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZVRpbWUgPD0gc3ByaW50VGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lci5pbm5lclRleHQgPSBgJHtzcHJpbnRUaW1lIC0gZ2FtZVRpbWV9YDtcclxuICAgICAgICAgICAgICAgIGdhbWVUaW1lICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIuaW5uZXJUZXh0ID09PSAnMCcgJiYgIWlzUmVzdWx0c1Nob3duKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0UXVlc3Rpb25CdXR0b24gPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLm5leHQtcXVlc3Rpb24tYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0UXVlc3Rpb25CdXR0b24uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICBpc1Jlc3VsdHNTaG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICAgIGhpZGVUaW1lcigpIHtcclxuICAgICAgICB0aGlzLnRpbWVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgLy8gdmlld1xyXG4gICAgc2hvd0RpZmZpY3VsdHlTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGlmLWNvbnRhaW5lcicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICAvLyB2aWV3XHJcbiAgICBoaWRlRGlmZmljdWx0eVNlbGVjdGlvbigpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgKF9hID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5kaWYtY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIC8vIHZpZXdcclxuICAgIHNob3dHYW1lKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB0aGlzLnNob3dUaW1lcigpO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGl2LXF1aXotY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIC8vIHZpZXdcclxuICAgIGhpZGVHYW1lKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB0aGlzLnRpbWVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGl2LXF1aXotY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIC8vIHZpZXdcclxuICAgIGhpZGVQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgKF9hID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXByb2dyZXNzLWJhcicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICAvLyB2aWV3XHJcbiAgICBzaG93UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1wcm9ncmVzcy1iYXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgLy8gdmlld1xyXG4gICAgc2hvd1Jlc3VsdHMoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1yZXN1bHQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgLy8gdmlld1xyXG4gICAgaGlkZVJlc3VsdHMoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1yZXN1bHQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIGNvbnN0IGNvcnJlY3RkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5zd2VyLWNvbnRhaW5lci1jb3JyZWN0Jyk7XHJcbiAgICAgICAgY29uc3Qgd3JvbmdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5zd2VyLWNvbnRhaW5lci13cm9uZycpO1xyXG4gICAgICAgIGNvcnJlY3RkaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgd3JvbmdEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbiAgICAvLyB2aWV3XHJcbiAgICB1cGRhdGVQcm9ncmVzc0Jhcihsb2FkaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJyk7XHJcbiAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gYCR7bG9hZGluZ30lYDtcclxuICAgIH1cclxuICAgIC8vIHZpZXdcclxuICAgIHJlbmRlckFuc3dlclJlc3VsdChyZXN1bHQsIGFuc3dlcikge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbicpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJy4uLy4uL2Fzc2V0cy9hbnN3ZXItY29ycmVjdC53YXYnKTtcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJy4uLy4uL2Fzc2V0cy9hbnN3ZXItd3Jvbmcud2F2Jyk7XHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLnNwYW4tdmFsdWUnKS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0ID09PSBhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0ID09PSBhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcubmV4dC1xdWVzdGlvbi1idXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9XHJcbiAgICAvLyB2aWV3XHJcbiAgICBoYW5kbGVOYXZLZXlzKHByZXNzZWRLZXkpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlS2V5c0xldmVsKHByZXNzZWRLZXkpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgaSA9IGJ1dHRvbnMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChwcmVzc2VkS2V5ID09PSAnQXJyb3dSaWdodCcgfHwgcHJlc3NlZEtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXNlZGJ1dHRvbiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmb2N1c2VkYnV0dG9uLnRhZ05hbWU7XHJcbiAgICAgICAgICAgIGlmIChuYW1lICE9PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1swXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gdGhpcy5mb2N1c0luZGV4ID09PSBpIC0gMSA/IHRoaXMuZm9jdXNJbmRleCA6ICh0aGlzLmZvY3VzSW5kZXggKz0gMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWYgPSAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgaWYgKChkaWYgPT09IG51bGwgfHwgZGlmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWYuY2xhc3NOYW1lKSA9PT0gJ2RpZi1jb250YWluZXIgaGlkZGVuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChidXR0b25zW3RoaXMuZm9jdXNJbmRleCAtIDFdLmNsYXNzTmFtZS5pbmNsdWRlcygnZ2FtZS1idXR0b24gbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNbdGhpcy5mb2N1c0luZGV4XS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVzc2VkS2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBwcmVzc2VkS2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXNlZGJ1dHRvbiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmb2N1c2VkYnV0dG9uLnRhZ05hbWU7XHJcbiAgICAgICAgICAgIGlmIChuYW1lICE9PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1swXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gdGhpcy5mb2N1c0luZGV4ID09PSAwID8gKHRoaXMuZm9jdXNJbmRleCA9IDApIDogKHRoaXMuZm9jdXNJbmRleCAtPSAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZiA9IChfYiA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGRpZiA9PT0gbnVsbCB8fCBkaWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpZi5jbGFzc05hbWUpID09PSAnZGlmLWNvbnRhaW5lciBoaWRkZW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGJ1dHRvbnNbdGhpcy5mb2N1c0luZGV4XS5jbGFzc05hbWUuaW5jbHVkZXMoJ2dhbWUtYnV0dG9uIGwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b25zW3RoaXMuZm9jdXNJbmRleF0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNbdGhpcy5mb2N1c0luZGV4XS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVzc2VkS2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRidXR0b24gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZm9jdXNlZGJ1dHRvbi50YWdOYW1lO1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAgICAgICAgIGZvY3VzZWRidXR0b24uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGN0cmxyXHJcbiAgICBoYW5kbGVLZXlzTGV2ZWwocHJlc3NlZEtleSkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHByZXNzZWRLZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5ID09PSAnbicpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3R2FtZSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIG5ld0dhbWUuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ2EnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXlHYW1lID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFnYWluLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBwbGF5R2FtZS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTnVtYmVyKGtleSkgPiAwICYmIE51bWJlcihrZXkpIDw9IDcpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKGAubCR7a2V5fWApO1xyXG4gICAgICAgICAgICBkaWZmLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIC8vIGN0cmxyXHJcbiAgICBoYW5kbGVLZXlzT3B0aW9uKHByZXNzZWRLZXkpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBwcmVzc2VkS2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ24nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0dhbWUgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBuZXdHYW1lLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkgPT09ICdhJykge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5R2FtZSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcucGxheS1hZ2Fpbi1idXR0b24nKTtcclxuICAgICAgICAgICAgcGxheUdhbWUuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ2Fycm93bGVmdCcpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yQWxsKCcub3B0aW9uJylbMF07XHJcbiAgICAgICAgICAgIGRpZmYuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ2Fycm93cmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbicpWzFdO1xyXG4gICAgICAgICAgICBkaWZmLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIC8vIGN0cmxyXHJcbiAgICBoYW5kbGVQcmVzc0tleShrZXkpIHtcclxuICAgICAgICBpZiAoWyduJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnYScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICcgJ10uZmluZCgocCkgPT4gcCA9PT0ga2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaWYgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmRpZi1jb250YWluZXInKTtcclxuICAgICAgICAgICAgaWYgKChkaWYgPT09IG51bGwgfHwgZGlmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWYuY2xhc3NOYW1lKSA9PT0gJ2RpZi1jb250YWluZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtleXNMZXZlbChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlzT3B0aW9uKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOYXZLZXlzKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vICAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgICBzdXBlcigpO1xyXG4vLyAgICAgdGhpcy5yZW5kZXJTcHJpbnRWaWV3KCk7XHJcbi8vICAgICB0aGlzLmlzU291bmRPbiA9IHRydWU7XHJcbi8vICAgfVxyXG4vLyAgIHJlbmRlclNwcmludFZpZXcoKSB7XHJcbi8vICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIHRoaXMudmlldy5jbGFzc0xpc3QuYWRkKCdzcHJpbnQnKTtcclxuLy8gICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gY29uc29sZS5sb2coZS5rZXkpKTtcclxuLy8gICAgIGNvbnN0IGdhbWVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgZ2FtZUJsb2NrLmNsYXNzTGlzdC5hZGQoJ3NwcmludC1ibG9jaycpO1xyXG4vLyAgICAgY29uc3QgY29udHJvbHNCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgY29udHJvbHNCbG9jay5jbGFzc0xpc3QuYWRkKCdzcHJpbnQtY29udHJvbHMtYmxvY2snKTtcclxuLy8gICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbi8vICAgICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoJ3NwcmludC1jb3VudGVyJyk7XHJcbi8vICAgICBjb25zdCBzb3VuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4vLyAgICAgc291bmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3ByaW50LXNvdW5kLWJ1dHRvbicpO1xyXG4vLyAgICAgY29udHJvbHNCbG9jay5hcHBlbmQoY291bnRlciwgc291bmRCdXR0b24pO1xyXG4vLyAgICAgY29uc3Qgd29yZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICB3b3JkQmxvY2suY2xhc3NMaXN0LmFkZCgnc3ByaW50LXdvcmQtYmxvY2snKTtcclxuLy8gICAgIGNvbnN0IHdvcmRDb250cm9sc0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICB3b3JkQ29udHJvbHNCbG9jay5jbGFzc0xpc3QuYWRkKCdzcHJpbnQtd29yZC1jb250cm9scy1ibG9jaycpO1xyXG4vLyAgICAgY29uc3QgY2hlY2tlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGNoZWNrZXJzLmNsYXNzTGlzdC5hZGQoJ3NwcmludC1jaGVja2VycycpO1xyXG4vLyAgICAgWzEsIDIsIDNdLmZvckVhY2goKGkpOiB2b2lkID0+IHtcclxuLy8gICAgICAgY29uc3QgY2hlY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICBjaGVja2VyLmNsYXNzTmFtZSA9IGBjaGVja2VyIGNoZWNrZXItJHtpfWA7XHJcbi8vICAgICAgIGNoZWNrZXIuaW5uZXJUZXh0ID0gJ+Kckyc7XHJcbi8vICAgICAgIGNoZWNrZXJzLmFwcGVuZChjaGVja2VyKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgY29uc3Qgd29yZFNvdW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbi8vICAgICB3b3JkU291bmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3ByaW50LXdvcmQtc291bmQtYnV0dG9uJyk7XHJcbi8vICAgICB3b3JkQ29udHJvbHNCbG9jay5hcHBlbmQoY2hlY2tlcnMsIHdvcmRTb3VuZEJ1dHRvbik7XHJcbi8vICAgICB3b3JkQmxvY2sucHJlcGVuZCh3b3JkQ29udHJvbHNCbG9jayk7XHJcbi8vICAgICBnYW1lQmxvY2suYXBwZW5kKGNvbnRyb2xzQmxvY2ssIHdvcmRCbG9jayk7XHJcbi8vICAgICB0aGlzLnZpZXcuYXBwZW5kKHRoaXMuY3JlYXRlVGltZXIoKSwgZ2FtZUJsb2NrKTtcclxuLy8gICB9XHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgU3ByaW50VmlldztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBBcHBsaWNhdGlvbkNvbnRvbGxlciBmcm9tICcuLi9hcHBsaWNhdGlvbi1jb250cm9sbGVyJztcclxuaW1wb3J0IE1haW5QYWdlVmlldyBmcm9tICcuL21haW4tcGFnZS12aWV3JztcclxuaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9BcGknO1xyXG5jbGFzcyBNYWluUGFnZUNvbnRyb2xsZXIgZXh0ZW5kcyBBcHBsaWNhdGlvbkNvbnRvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0VmlldygpO1xyXG4gICAgfVxyXG4gICAgc2V0VmlldygpIHtcclxuICAgICAgICB0aGlzLmFwaSA9IG5ldyBBcGkoKTtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3ID0gbmV3IE1haW5QYWdlVmlldygpO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2VDb250cm9sbGVyO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IEFwcGxpY2F0aW9uVmlldyBmcm9tICcuLi9hcHBsaWNhdGlvbi12aWV3JztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvbWFpbi1wYWdlLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2J1cmdlci5jc3MnO1xyXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cclxuaW1wb3J0IHsgbWFpblBhZ2VUZXh0MSwgbWFpblBhZ2VUZXh0MiwgbGVhcm5CdXR0b25UZXh0LCBwbGF5QnV0dG9uVGV4dCwgcnNMYW5nLCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vQXBwJztcclxuaW1wb3J0IEdhbWVzUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi4vZ2FtZXMvZ2FtZXMtcGFnZS1jb250cm9sbGVyJztcclxuY2xhc3MgTWFpblBhZ2VWaWV3IGV4dGVuZHMgQXBwbGljYXRpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJNYWluUGFnZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyTWFpblBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy52aWV3LmNsYXNzTGlzdC5hZGQoJ21haW4tcGFnZScpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2VfX3RpdGxlJyk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gcnNMYW5nO1xyXG4gICAgICAgIGNvbnN0IGludHJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGludHJvVGV4dC5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2VfX3RleHQnKTtcclxuICAgICAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0MS5pbm5lclRleHQgPSBtYWluUGFnZVRleHQxO1xyXG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQyLmlubmVyVGV4dCA9IG1haW5QYWdlVGV4dDI7XHJcbiAgICAgICAgaW50cm9UZXh0LmFwcGVuZCh0ZXh0MSwgdGV4dDIpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcclxuICAgICAgICBjb25zdCBsZWFybkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxlYXJuQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bl9pbnRybycsICdidG4nLCAnYnRuX2NvbG9yZWQnLCAnbGVhcm4nKTtcclxuICAgICAgICBsZWFybkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFwcC5yZW5kZXJCb29rUGFnZSk7XHJcbiAgICAgICAgbGVhcm5CdXR0b24uaW5uZXJUZXh0ID0gbGVhcm5CdXR0b25UZXh0O1xyXG4gICAgICAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBwbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bl9pbnRybycsICdidG4nLCAnYnRuX2JvcmRlcmVkJywgJ3BsYXknKTtcclxuICAgICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWVzQ29udHJvbGxlciA9IG5ldyBHYW1lc1BhZ2VDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGdhbWVzQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlLWxpbmsnKTtcclxuICAgICAgICAgICAgbWFpbkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtcGFnZS1saW5rJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwbGF5QnV0dG9uLmlubmVyVGV4dCA9IHBsYXlCdXR0b25UZXh0O1xyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGxlYXJuQnV0dG9uLCBwbGF5QnV0dG9uKTtcclxuICAgICAgICB0aGlzLnZpZXcuYXBwZW5kKHRpdGxlLCBpbnRyb1RleHQsIGJ1dHRvbnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlVmlldztcclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgaXNWYWxpZEVtYWlsLCBpc1ZhbGlkUGFzc3dvcmQgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgaW52YWxpZEVtYWlsLCBpbnZhbGlkUGFzc3dvcmQgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgQXBwbGljYXRpb25Db250b2xsZXIgZnJvbSAnLi4vYXBwbGljYXRpb24tY29udHJvbGxlcic7XHJcbmltcG9ydCBSZWdNb2RlbCBmcm9tICcuL3JlZ2lzdHJhdGlvbi1tb2RlbCc7XHJcbmltcG9ydCBTdGF0aXN0aWMgZnJvbSAnLi4vLi4vdHlwZXMvU3RhdGlzdGljJztcclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBSZWdpc3RyYXRpb25WaWV3IGZyb20gJy4vcmVnaXN0cmF0aW9uLXZpZXcnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0FwcCc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vLi4vQXBpJztcclxuY2xhc3MgUmVnaXN0cmF0aW9uQ29udHJvbGxlciBleHRlbmRzIEFwcGxpY2F0aW9uQ29udG9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgQXBpKCk7XHJcbiAgICAgICAgdGhpcy5zZXRWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBzZXRWaWV3KCkge1xyXG4gICAgICAgIHRoaXMucmVnTW9kZWwgPSBuZXcgUmVnTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3ID0gbmV3IFJlZ2lzdHJhdGlvblZpZXcoKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgc2lnblVwVXNlcih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5yZWdNb2RlbFxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZVVzZXIodXNlcilcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQuc3RhdHVzfSAke3Jlc3VsdC5zdGF0dXNUZXh0fWA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVnTW9kZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZ25JblVzZXIodXNlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LnN0YXR1c30gJHtyZXN1bHQuc3RhdHVzVGV4dH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh1c2VyRGF0YSkgPT4gQXBwLnNpZ25Jbih1c2VyRGF0YSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGF0aXN0aWMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG4gICAgY3JlYXRlU3RhdGlzdGljKCkge1xyXG4gICAgICAgIGNvbnN0IGluaXRpYWxTdGF0ID0gbmV3IFN0YXRpc3RpYygpO1xyXG4gICAgICAgIGluaXRpYWxTdGF0LmluaXRTdGF0aXN0aWMoKTtcclxuICAgIH1cclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXHJcbiAgICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMucGFnZVZpZXcudmlld1xyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnNpZ24tdXAtYnV0dG9uJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdmFyIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAoKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUtaW5wdXQnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnZhbHVlKSB8fCAnJztcclxuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAoKF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLWlucHV0JykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy52YWx1ZSkgfHwgJyc7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZEVtYWlsKGVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7aW52YWxpZEVtYWlsfSAke2VtYWlsfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gKChfZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1pbnB1dCcpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudmFsdWUpIHx8ICcnO1xyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWRQYXNzd29yZChwYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGludmFsaWRQYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH07XHJcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuc2lnblVwVXNlcih1c2VyKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uQ29udHJvbGxlcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vLi4vQXBpJztcclxuY2xhc3MgUmVnTW9kZWwgZXh0ZW5kcyBBcGkge1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ01vZGVsO1xyXG4iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9hdXRob3Jpc2F0aW9uLmNzcyc7XHJcbmltcG9ydCBBcHBsaWNhdGlvblZpZXcgZnJvbSAnLi4vYXBwbGljYXRpb24tdmlldyc7XHJcbmltcG9ydCB7IGVtYWlsLCBoYXZlQWNjb3VudFRleHQsIG5hbWUsIHBhc3N3b3JkLCBzaWduSW5CdXR0b25UZXh0LCBzaWduVXBUaXRsZSwgdXBwZXJTaWduVXBCdXR0b25UZXh0LCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0FwcCc7XHJcbmNsYXNzIFJlZ2lzdHJhdGlvblZpZXcgZXh0ZW5kcyBBcHBsaWNhdGlvblZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclJlZ0Jsb2NrKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJSZWdCbG9jaygpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncmVnLXRpdGxlJyk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gc2lnblVwVGl0bGU7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnbmFtZS1pbnB1dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgbmFtZSk7XHJcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZCgnZW1haWwtaW5wdXQnKTtcclxuICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xyXG4gICAgICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGVtYWlsKTtcclxuICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQuY2xhc3NMaXN0LmFkZCgncGFzc3dvcmQtaW5wdXQnKTtcclxuICAgICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBhc3N3b3JkKTtcclxuICAgICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG4gICAgICAgIGNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHNpZ25VcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaWduLXVwLWJ1dHRvbicpO1xyXG4gICAgICAgIHNpZ25VcEJ1dHRvbi5pbm5lclRleHQgPSB1cHBlclNpZ25VcEJ1dHRvblRleHQ7XHJcbiAgICAgICAgY29uc3QgaGF2ZUFjY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoYXZlQWNjb3VudC5jbGFzc0xpc3QuYWRkKCdoYXZlLWFjY291bnQnKTtcclxuICAgICAgICBjb25zdCBoYXZlQWNjb3VudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgaGF2ZUFjY291bnRTcGFuLmNsYXNzTGlzdC5hZGQoJ2hhdmUtYWNjb3VudC1zcGFuJyk7XHJcbiAgICAgICAgaGF2ZUFjY291bnRTcGFuLmlubmVyVGV4dCA9IGhhdmVBY2NvdW50VGV4dDtcclxuICAgICAgICBjb25zdCBoYXZlQWNjb3VudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGhhdmVBY2NvdW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hhdmUtYWNjb3VudC1idXR0b24nKTtcclxuICAgICAgICBoYXZlQWNjb3VudEJ1dHRvbi5pbm5lclRleHQgPSBzaWduSW5CdXR0b25UZXh0O1xyXG4gICAgICAgIGhhdmVBY2NvdW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlckF1dGhQYWdlKTtcclxuICAgICAgICBoYXZlQWNjb3VudC5hcHBlbmQoaGF2ZUFjY291bnRTcGFuLCBoYXZlQWNjb3VudEJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy52aWV3LmFwcGVuZCh0aXRsZSwgbmFtZUlucHV0LCBlbWFpbElucHV0LCBwYXNzd29yZElucHV0LCBzaWduVXBCdXR0b24sIGhhdmVBY2NvdW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25WaWV3O1xyXG4iLCJjb25zdCBUb2RheVN0YXRCdXR0b25UZXh0ID0gJ9Ch0YLQsNGC0LjRgdGC0LjQutCwINC30LAg0YHQtdCz0L7QtNC90Y8nO1xyXG5jb25zdCBBbGxTdGF0QnV0dG9uVGV4dCA9ICfQodGC0LDRgtC40YHRgtC40LrQsCDQt9CwINCy0YHQtSDQstGA0LXQvNGPJztcclxuZXhwb3J0IHsgVG9kYXlTdGF0QnV0dG9uVGV4dCwgQWxsU3RhdEJ1dHRvblRleHQgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9BcGknO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0FwcCc7XHJcbi8vIGltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi90eXBlcy9Vc2VyXCI7XHJcbmltcG9ydCBBcHBsaWNhdGlvbkNvbnRvbGxlciBmcm9tICcuLi9hcHBsaWNhdGlvbi1jb250cm9sbGVyJztcclxuaW1wb3J0IFN0YXRNb2RlbCBmcm9tICcuL3N0YXQtbW9kZWwnO1xyXG5pbXBvcnQgU3RhdFZpZXcgZnJvbSAnLi9zdGF0LXZpZXcnO1xyXG5pbXBvcnQgU3RhdGlzdGljIGZyb20gJy4uLy4uL3R5cGVzL1N0YXRpc3RpYyc7XHJcbmNsYXNzIFN0YXRDb250cm9sbGVyIGV4dGVuZHMgQXBwbGljYXRpb25Db250b2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXQgPSBuZXcgU3RhdGlzdGljKCk7XHJcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgQXBpKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldyA9IG5ldyBTdGF0VmlldygpO1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgU3RhdE1vZGVsKHRoaXMucGFnZVZpZXcpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLmdldFN0YXQoKTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMucGFnZVZpZXcudmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmlkID09PSAnc3RhdC1idXR0b24tdG9kYXknKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmlkID09PSAnc3RhdC1idXR0b24tYWxsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdGF0KCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKEFwcC51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXQgPSB5aWVsZCB0aGlzLmFwaS5nZXRVc2VyU3RhdCgoX2EgPSBBcHAudXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnVzZXJJZCwgKF9iID0gQXBwLnVzZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2VWaWV3LnNob3dFdmVyeWRheVN0YXQodGhpcy5zdGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2hvd0RheSgpIHtcclxuICAgICAgICBsZXQgbmV3V29yZHNBdWRpbyA9IDA7XHJcbiAgICAgICAgbGV0IG5ld1dvcmRzU3ByaW50ID0gMDtcclxuICAgICAgICBsZXQgYWNjdXJhY3lBdWRpbyA9IDA7XHJcbiAgICAgICAgbGV0IGFjY3VyYWN5U3ByaW50ID0gMDtcclxuICAgICAgICBsZXQgc2VyaWVBdWRpbyA9IDA7XHJcbiAgICAgICAgbGV0IHNlcmllU3ByaW50ID0gMDtcclxuICAgICAgICBsZXQgYWNjdXJhY3lUb3RhbCA9IDA7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXQgPSBuZXcgU3RhdGlzdGljKCk7XHJcbiAgICAgICAgY29uc3QgZGF0ZVNob3J0ID0gc3RhdC50b1Nob3J0RGF0ZSh0b2RheSk7XHJcbiAgICAgICAgY29uc3QgdG9PcHRpb25zT2JqZWN0ID0gdGhpcy5zdGF0Lm9wdGlvbmFsO1xyXG4gICAgICAgIGNvbnN0IHRvT3B0aW9uc0FycmF5U3RyaW5nID0gdG9PcHRpb25zT2JqZWN0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IFN0YXRPcHRpb25zQXJycmF5ID0gSlNPTi5wYXJzZSh0b09wdGlvbnNBcnJheVN0cmluZy50b1N0cmluZygpKTtcclxuICAgICAgICBzdGF0Lm9wdGlvbmFsID0gU3RhdE9wdGlvbnNBcnJyYXk7XHJcbiAgICAgICAgY29uc3QgZmluZEF1ZGlvID0gc3RhdC5vcHRpb25hbC5maW5kKChpdGVtKSA9PiBpdGVtLmRhdGVTaG9ydCA9PT0gZGF0ZVNob3J0ICYmIGl0ZW0uZ2FtZU5hbWUgPT09ICdhdWRpb2NhbGwnKTtcclxuICAgICAgICBjb25zdCBmaW5kU3ByaW50ID0gc3RhdC5vcHRpb25hbC5maW5kKChpdGVtKSA9PiBpdGVtLmRhdGVTaG9ydCA9PT0gZGF0ZVNob3J0ICYmIGl0ZW0uZ2FtZU5hbWUgPT09ICdzcHJpbnQnKTtcclxuICAgICAgICBsZXQgdG90YWxDb3JyZWN0ID0gMDtcclxuICAgICAgICBsZXQgdG90YWx3cm9uZyA9IDA7XHJcbiAgICAgICAgbGV0IGxlYXJuZWRGcm9tQm9vayA9IDA7XHJcbiAgICAgICAgbGV0IGxlYXJuZWRUb3RhbCA9IDA7XHJcbiAgICAgICAgaWYgKGZpbmRBdWRpbykge1xyXG4gICAgICAgICAgICBuZXdXb3Jkc0F1ZGlvID0gZmluZEF1ZGlvLm5ld1dvcmRzO1xyXG4gICAgICAgICAgICBhY2N1cmFjeUF1ZGlvID0gZmluZEF1ZGlvLmFjY3VyYWN5O1xyXG4gICAgICAgICAgICBzZXJpZUF1ZGlvID0gZmluZEF1ZGlvLnNlcmllO1xyXG4gICAgICAgICAgICB0b3RhbENvcnJlY3QgKz0gZmluZEF1ZGlvLmNvcnJlY3RBbnN3ZXJzO1xyXG4gICAgICAgICAgICB0b3RhbHdyb25nICs9IGZpbmRBdWRpby53cm9uZ0Fuc3dlcnM7XHJcbiAgICAgICAgICAgIGxlYXJuZWRGcm9tQm9vayA9IGZpbmRBdWRpby5sZWFybmVkQnlCb29rO1xyXG4gICAgICAgICAgICBsZWFybmVkVG90YWwgKz0gZmluZEF1ZGlvLmxlYXJuZWRXb3JkcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbmRTcHJpbnQpIHtcclxuICAgICAgICAgICAgbmV3V29yZHNTcHJpbnQgPSBmaW5kU3ByaW50Lm5ld1dvcmRzO1xyXG4gICAgICAgICAgICBhY2N1cmFjeVNwcmludCA9IGZpbmRTcHJpbnQuYWNjdXJhY3k7XHJcbiAgICAgICAgICAgIHNlcmllU3ByaW50ID0gZmluZFNwcmludC5zZXJpZTtcclxuICAgICAgICAgICAgdG90YWxDb3JyZWN0ICs9IGZpbmRTcHJpbnQuY29ycmVjdEFuc3dlcnM7XHJcbiAgICAgICAgICAgIHRvdGFsd3JvbmcgKz0gZmluZFNwcmludC53cm9uZ0Fuc3dlcnM7XHJcbiAgICAgICAgICAgIGxlYXJuZWRGcm9tQm9vayA9IGZpbmRTcHJpbnQubGVhcm5lZEJ5Qm9vaztcclxuICAgICAgICAgICAgbGVhcm5lZFRvdGFsICs9IGZpbmRTcHJpbnQubGVhcm5lZFdvcmRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG90YWxDb3JyZWN0ICsgdG90YWx3cm9uZyAhPT0gMCkge1xyXG4gICAgICAgICAgICBhY2N1cmFjeVRvdGFsID0gdG90YWxDb3JyZWN0IC8gKHRvdGFsQ29ycmVjdCArIHRvdGFsd3JvbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNob3dFdmVyeWRheVN0YXQobmV3V29yZHNBdWRpbywgbmV3V29yZHNTcHJpbnQsIGFjY3VyYWN5QXVkaW8sIGFjY3VyYWN5U3ByaW50LCBzZXJpZUF1ZGlvLCBzZXJpZVNwcmludCwgYCR7bGVhcm5lZFRvdGFsfSArICR7bGVhcm5lZEZyb21Cb29rfWAsIGFjY3VyYWN5VG90YWwpO1xyXG4gICAgfVxyXG4gICAgc2hvd0FsbCgpIHtcclxuICAgICAgICBjb25zdCBzdGF0ID0gbmV3IFN0YXRpc3RpYygpO1xyXG4gICAgICAgIGNvbnN0IHRvT3B0aW9uc09iamVjdCA9IHRoaXMuc3RhdC5vcHRpb25hbDtcclxuICAgICAgICBjb25zdCB0b09wdGlvbnNBcnJheVN0cmluZyA9IHRvT3B0aW9uc09iamVjdC52YWx1ZTtcclxuICAgICAgICBjb25zdCBTdGF0T3B0aW9uc0FycnJheSA9IEpTT04ucGFyc2UodG9PcHRpb25zQXJyYXlTdHJpbmcudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgc3RhdC5vcHRpb25hbCA9IFN0YXRPcHRpb25zQXJycmF5O1xyXG4gICAgICAgIGNvbnN0IG5ld1dvcmRzUHJvZ3Jlc3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBsZWFybmVkUHJvZ3Jlc3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBsZXQgZGF0ZXMgPSBzdGF0Lm9wdGlvbmFsLm1hcCgocCkgPT4gcC5kYXRlU2hvcnQpO1xyXG4gICAgICAgIGRhdGVzID0gZGF0ZXMuZmlsdGVyKChpdGVtLCBpbmRleCwgYXJyKSA9PiBpbmRleCA9PT0gYXJyLmluZGV4T2YoaXRlbSkpO1xyXG4gICAgICAgIGxldCBsZWFybmRlZCA9IHRoaXMuc3RhdC5sZWFybmVkV29yZHM7XHJcbiAgICAgICAgbGV0IG5ld1dvcmRzID0gMDtcclxuICAgICAgICBkYXRlcy5mb3JFYWNoKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbmFscyA9IHN0YXQub3B0aW9uYWwuZmlsdGVyKChwKSA9PiBwLmRhdGVTaG9ydCA9PT0gZGF0ZSk7XHJcbiAgICAgICAgICAgIG9wdGlvbmFscy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdXb3JkcyArPSBpdGVtLm5ld1dvcmRzO1xyXG4gICAgICAgICAgICAgICAgbGVhcm5kZWQgKz0gaXRlbS5sZWFybmVkV29yZHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuZXdXb3Jkc1Byb2dyZXNzLnB1c2goeyBkYXRlOiBuZXcgRGF0ZShkYXRlKSwgY291bnQ6IG5ld1dvcmRzIH0pO1xyXG4gICAgICAgICAgICBsZWFybmVkUHJvZ3Jlc3MucHVzaCh7IGRhdGU6IG5ldyBEYXRlKGRhdGUpLCBjb3VudDogbGVhcm5kZWQgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3V29yZHNQcm9ncmVzcywgbGVhcm5lZFByb2dyZXNzKTtcclxuICAgICAgICAvLyB0aGlzLnBhZ2VWaWV3LnNob3dBbGxTdGF0KCk7XHJcbiAgICAgICAgLy8gbGV0IGxlYXJuZWRXb3JkcyA6ICBBcnJheTx7ZGF0ZTpEYXRlICwgY291bnQ6bnVtYmVyfT5cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdGF0Q29udHJvbGxlcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmNsYXNzIFN0YXRNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlVmlldykge1xyXG4gICAgICAgIHRoaXMucGFnZVZpZXcgPSBwYWdlVmlldztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdGF0TW9kZWw7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgJy4vc3RhdC5jc3MnO1xyXG4vLyBpbXBvcnQgeyBDaGFydCwgcmVnaXN0ZXJhYmxlcyB9IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9BcGknO1xyXG5pbXBvcnQgQXBwbGljYXRpb25WaWV3IGZyb20gJy4uL2FwcGxpY2F0aW9uLXZpZXcnO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9zdGF0LWNvbnN0YW50cyc7XHJcbmNsYXNzIFN0YXRWaWV3IGV4dGVuZHMgQXBwbGljYXRpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmFwaSA9IG5ldyBBcGkoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclZpZXcoKTtcclxuICAgICAgICAvLyBDaGFydC5yZWdpc3RlciguLi5yZWdpc3RlcmFibGVzKTtcclxuICAgIH1cclxuICAgIHNob3dFdmVyeWRheVN0YXQobmV3V29yZHNBdWRpbywgbmV3V29yZHNTcHJpbnQsIGFjY3VyYWN5QXVkaW8sIGFjY3VyYWN5U3ByaW50LCBzZXJpZUF1ZGlvLCBzZXJpZVNwcmludCwgbGVhcm5kZWQsIGFjY3VyYWN5VG90YWwpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLnN0YXQtY29udGVudCcpO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9ICfQodGC0LDRgtC40YHRgtC40LrQsCDQt9CwINGB0LXQs9C+0LTQvdGPJztcclxuICAgICAgICBjb25zdCB0aXRsZUF1ZGlvQ2FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlICc7XHJcbiAgICAgICAgdGl0bGVBdWRpb0NhbGwuaW5uZXJUZXh0ID0gJ9CQ0YPQtNC40L7QstGL0LfQvtCyJztcclxuICAgICAgICBjb25zdCBkaXZOZXdXb3Jkc0F1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2TmV3V29yZHNBdWRpby5pbm5lclRleHQgPSBg0J3QvtCy0YvRhSDRgdC70L7QsiA6ICR7bmV3V29yZHNBdWRpb31gO1xyXG4gICAgICAgIGNvbnN0IGRpdkFjY3VyYWN5QXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZBY2N1cmFjeUF1ZGlvLmlubmVyVGV4dCA9IGDQktC10YDQvdGL0YUg0L7RgtCy0LXRgtC+0LIsICUgOiAke2FjY3VyYWN5QXVkaW8udG9GaXhlZCgyKX1gO1xyXG4gICAgICAgIGNvbnN0IGRpdlNlcmllQXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZTZXJpZUF1ZGlvLmlubmVyVGV4dCA9IGDQm9GD0YfRiNCw0Y8g0YHQtdGA0LjRjyDQvtGC0LLQtdGC0L7QsiA6ICR7c2VyaWVBdWRpb31gO1xyXG4gICAgICAgIGRpdi5hcHBlbmQodGl0bGUsIHRpdGxlQXVkaW9DYWxsLCBkaXZOZXdXb3Jkc0F1ZGlvLCBkaXZBY2N1cmFjeUF1ZGlvLCBkaXZTZXJpZUF1ZGlvKTtcclxuICAgICAgICBjb25zdCB0aXRsZVNwcmludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgdGl0bGVTcHJpbnQuaW5uZXJUZXh0ID0gJ9Ch0L/RgNC40L3Rgic7XHJcbiAgICAgICAgY29uc3QgZGl2TmV3V29yZHNTcHJpbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZOZXdXb3Jkc1NwcmludC5pbm5lclRleHQgPSBg0J3QvtCy0YvRhSDRgdC70L7QsiA6ICR7bmV3V29yZHNTcHJpbnR9YDtcclxuICAgICAgICBjb25zdCBkaXZBY2N1cmFjeVNwcmludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdkFjY3VyYWN5U3ByaW50LmlubmVyVGV4dCA9IGDQktC10YDQvdGL0YUg0L7RgtCy0LXRgtC+0LIsICU6ICR7YWNjdXJhY3lTcHJpbnQudG9GaXhlZCgyKX1gO1xyXG4gICAgICAgIGNvbnN0IGRpdlNlcmllU3ByaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2U2VyaWVTcHJpbnQuaW5uZXJUZXh0ID0gYNCb0YPRh9GI0LDRjyDRgdC10YDQuNGPINC+0YLQstC10YLQvtCyIDogJHtzZXJpZVNwcmludH1gO1xyXG4gICAgICAgIGRpdi5hcHBlbmQodGl0bGVTcHJpbnQsIGRpdk5ld1dvcmRzU3ByaW50LCBkaXZBY2N1cmFjeVNwcmludCwgZGl2U2VyaWVTcHJpbnQpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlV29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHRpdGxlV29yZHMuaW5uZXJUZXh0ID0gJ9Ch0YLQsNGC0LjRgdGC0LjQutCwINC/0L4g0YHQu9C+0LLQsNC8INC30LAg0LTQtdC90YwnO1xyXG4gICAgICAgIGNvbnN0IGRpdk5ld1dvcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2TmV3V29yZHMuaW5uZXJUZXh0ID0gYNCd0L7QstGL0YUg0YHQu9C+0LIgOiAke25ld1dvcmRzU3ByaW50ICsgbmV3V29yZHNBdWRpb31gO1xyXG4gICAgICAgIGNvbnN0IGRpdkxlYXJuV29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZMZWFybldvcmRzLmlubmVyVGV4dCA9IGDQodC70L7QsiDQuNC30YPRh9C10L3QvjogJHtsZWFybmRlZH1gO1xyXG4gICAgICAgIGNvbnN0IGRpdkFjY3VyYWN5V29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZBY2N1cmFjeVdvcmRzLmlubmVyVGV4dCA9IGDQktC10YDQvdGL0YUg0L7RgtCy0LXRgtC+0LIsICUgOiAke2FjY3VyYWN5VG90YWwudG9GaXhlZCgyKX1gO1xyXG4gICAgICAgIGRpdi5hcHBlbmQodGl0bGVXb3JkcywgZGl2TmV3V29yZHMsIGRpdkxlYXJuV29yZHMsIGRpdkFjY3VyYWN5V29yZHMpO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvd0FsbFN0YXQoKSB7XHJcbiAgICAvLyAgIGNvbnN0IGRpdiA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuc3RhdC1jb250ZW50JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAvLyAgIGRpdi5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vICAgZGl2LmlubmVyVGV4dCA9ICdhbGwnO1xyXG4gICAgLy8gICBjb25zdCBjYW52YXNMZWFybmVkV29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIC8vICAgY2FudmFzTGVhcm5lZFdvcmRzLmlkID0gJ2xlYXJuZWRXb3Jkc0NoYXJ0JztcclxuICAgIC8vICAgY29uc3QgY2FudmFzTGVhcm5lZFdvcmRzQ29udGV4dCA9IGNhbnZhc0xlYXJuZWRXb3Jkcy5nZXRDb250ZXh0KFxyXG4gICAgLy8gICAgICcyZCcsXHJcbiAgICAvLyAgICkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgLy8gICBjb25zdCBteUNoYXJ0bGVhcm5lZCA9IG5ldyBDaGFydChjYW52YXNMZWFybmVkV29yZHNDb250ZXh0LCB7XHJcbiAgICAvLyAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAvLyAgICAgZGF0YToge1xyXG4gICAgLy8gICAgICAgbGFiZWxzOiBbMSwgMiwgMywgNCwgNSwgNl0sXHJcbiAgICAvLyAgICAgICBkYXRhc2V0czogW3tcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAvLyAgICAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNSwgMiwgM10sXHJcbiAgICAvLyAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAvLyAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcclxuICAgIC8vICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXHJcbiAgICAvLyAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLFxyXG4gICAgLy8gICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjIpJyxcclxuICAgIC8vICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxyXG4gICAgLy8gICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKSdcclxuICAgIC8vICAgICAgICAgICBdLFxyXG4gICAgLy8gICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgLy8gICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAvLyAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgIC8vICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgLy8gICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgLy8gICAgICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxyXG4gICAgLy8gICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknXHJcbiAgICAvLyAgICAgICAgICAgXSxcclxuICAgIC8vICAgICAgICAgICBib3JkZXJXaWR0aDogNSxcclxuICAgIC8vICAgICAgIH1dLFxyXG4gICAgLy8gICAgfSxcclxuICAgIC8vICAgICBvcHRpb25zOiB7XHJcbiAgICAvLyAgICAgICBzY2FsZXM6IHtcclxuICAgIC8vICAgICAgICAgeToge1xyXG4gICAgLy8gICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICBkaXYuYXBwZW5kQ2hpbGQoY2FudmFzTGVhcm5lZFdvcmRzKTtcclxuICAgIC8vIH1cclxuICAgIHJlbmRlclZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdzdGF0LWNvbnRhaW5lcic7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZGl2O1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBidXR0b25zQmFyRGl2LmNsYXNzTmFtZSA9ICdkaXYtYnV0dG9ucy1mbGV4JztcclxuICAgICAgICBjb25zdCBidXR0b25EYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b25EYXkuaW5uZXJUZXh0ID0gY29uc3RhbnRzLlRvZGF5U3RhdEJ1dHRvblRleHQ7XHJcbiAgICAgICAgYnV0dG9uRGF5LmNsYXNzTmFtZSA9ICdzdGF0LWJ1dHRvbic7XHJcbiAgICAgICAgYnV0dG9uRGF5LmlkID0gJ3N0YXQtYnV0dG9uLXRvZGF5JztcclxuICAgICAgICBjb25zdCBidXR0b25BbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b25BbGwuaW5uZXJUZXh0ID0gY29uc3RhbnRzLkFsbFN0YXRCdXR0b25UZXh0O1xyXG4gICAgICAgIGJ1dHRvbkFsbC5jbGFzc05hbWUgPSAnc3RhdC1idXR0b24nO1xyXG4gICAgICAgIGJ1dHRvbkFsbC5pZCA9ICdzdGF0LWJ1dHRvbi1hbGwnO1xyXG4gICAgICAgIGJ1dHRvbnNCYXJEaXYuYXBwZW5kKGJ1dHRvbkRheSwgYnV0dG9uQWxsKTtcclxuICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSAnc3RhdC1jb250ZW50JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uc0JhckRpdik7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnN0IGRpdkRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdkRheS5jbGFzc05hbWUgPSAnZGl2LWRheSc7XHJcbiAgICAgICAgY29uc3QgZGl2QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2QWxsLmNsYXNzTmFtZSA9ICdkaXYtZGF5JztcclxuICAgICAgICAvLy8gLy9cclxuICAgICAgICAvLy9cclxuICAgICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoY2FudmFzTmV3V29yZHMpO1xyXG4gICAgICAgIC8vIGRpdi5hcHBlbmRDaGlsZChjYW52YXNMZWFybmVkV29yZHMpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IGRpdjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdGF0VmlldztcclxuIiwiY2xhc3MgU3RhdE9wdGlvbmFsIHtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdGF0T3B0aW9uYWw7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vQXBpJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAnO1xyXG5pbXBvcnQgU3RhdE9wdGlvbmFsIGZyb20gJy4vU3RhdE9wdGlvbmFsJztcclxuY2xhc3MgU3RhdGlzdGljIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdE9wdGlvbmFsKGdhbWVOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhdE9wdGlvbmFsID0gbmV3IFN0YXRPcHRpb25hbCgpO1xyXG4gICAgICAgIHN0YXRPcHRpb25hbC5kYXRlU2hvcnQgPSB0aGlzLnRvU2hvcnREYXRlKGRhdGUpO1xyXG4gICAgICAgIHN0YXRPcHRpb25hbC5jb3JyZWN0QW5zd2VycyA9IDA7XHJcbiAgICAgICAgc3RhdE9wdGlvbmFsLndyb25nQW5zd2VycyA9IDA7XHJcbiAgICAgICAgc3RhdE9wdGlvbmFsLmFjY3VyYWN5ID0gMDtcclxuICAgICAgICBzdGF0T3B0aW9uYWwubmV3V29yZHMgPSAwO1xyXG4gICAgICAgIHN0YXRPcHRpb25hbC5sZWFybmVkV29yZHMgPSAwO1xyXG4gICAgICAgIHN0YXRPcHRpb25hbC5nYW1lTmFtZSA9IGdhbWVOYW1lO1xyXG4gICAgICAgIHN0YXRPcHRpb25hbC5zZXJpZSA9IDA7XHJcbiAgICAgICAgc3RhdE9wdGlvbmFsLmN1cnJlbnRTZXJpZSA9IDA7XHJcbiAgICAgICAgc3RhdE9wdGlvbmFsLmxlYXJuZWRCeUJvb2sgPSAwO1xyXG4gICAgICAgIHJldHVybiBzdGF0T3B0aW9uYWw7XHJcbiAgICB9XHJcbiAgICBpbml0U3RhdGlzdGljKCkge1xyXG4gICAgICAgIGNvbnN0IGluaXRTdGF0aXN0aWMgPSBuZXcgU3RhdGlzdGljKCk7XHJcbiAgICAgICAgaW5pdFN0YXRpc3RpYy5vcHRpb25hbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGluaXRTdGF0aXN0aWMubGVhcm5lZFdvcmRzID0gMDtcclxuICAgICAgICBpbml0U3RhdGlzdGljLm9wdGlvbmFsLnB1c2godGhpcy5pbml0T3B0aW9uYWwoJ2F1ZGlvY2FsbCcpKTtcclxuICAgICAgICBpbml0U3RhdGlzdGljLm9wdGlvbmFsLnB1c2godGhpcy5pbml0T3B0aW9uYWwoJ3NwcmludCcpKTtcclxuICAgICAgICAvLyBpbml0U3RhdGlzdGljLm9wdGlvbmFsLnB1c2godGhpcy5pbml0T3B0aW9uYWwoJ2Jvb2snKSk7XHJcbiAgICAgICAgaWYgKEFwcC51c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBpLnVwZGF0ZVVzZXJTdGF0KEFwcC51c2VyLnVzZXJJZCwgQXBwLnVzZXIudG9rZW4sIGluaXRTdGF0aXN0aWMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIGVzbGludC1kaXNhYmxlICBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbiAgICB0b1Nob3J0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIGxldCBtb250aCA9IGAke2QuZ2V0TW9udGgoKSArIDF9YDtcclxuICAgICAgICBsZXQgZGF5ID0gYCR7ZC5nZXREYXRlKCl9YDtcclxuICAgICAgICBjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGlmIChtb250aC5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIG1vbnRoID0gYDAke21vbnRofWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXkubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICBkYXkgPSBgMCR7ZGF5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLicpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTdGF0aXN0aWModXBkYXRlV29yZHNSZXN1bHQsIGdhbWVOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBpc05ldyB9ID0gdXBkYXRlV29yZHNSZXN1bHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaXNDb3JyZWN0IH0gPSB1cGRhdGVXb3Jkc1Jlc3VsdDtcclxuICAgICAgICAgICAgY29uc3QgeyBpc0xlYXJuZWQgfSA9IHVwZGF0ZVdvcmRzUmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAoQXBwLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ID0geWllbGQgdGhpcy5hcGkuZ2V0VXNlclN0YXQoQXBwLnVzZXIudXNlcklkLCBBcHAudXNlci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlU2hvcnQgPSB0aGlzLnRvU2hvcnREYXRlKHRvZGF5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvT3B0aW9uc09iamVjdCA9IGN1cnJlbnRTdGF0Lm9wdGlvbmFsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9PcHRpb25zQXJyYXlTdHJpbmcgPSB0b09wdGlvbnNPYmplY3QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBTdGF0T3B0aW9uc0FycnJheSA9IEpTT04ucGFyc2UodG9PcHRpb25zQXJyYXlTdHJpbmcudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdC5vcHRpb25hbCA9IFN0YXRPcHRpb25zQXJycmF5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmluZCA9IGN1cnJlbnRTdGF0Lm9wdGlvbmFsLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZ2FtZU5hbWUgPT09IGdhbWVOYW1lICYmIGl0ZW0uZGF0ZVNob3J0ID09PSBkYXRlU2hvcnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50U3RhdC5sZWFybmVkV29yZHMgPSBpc0xlYXJuZWRcclxuICAgICAgICAgICAgICAgICAgICAvLyAgID8gY3VycmVudFN0YXQubGVhcm5lZFdvcmRzICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgOiBjdXJyZW50U3RhdC5sZWFybmVkV29yZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluZC5jb3JyZWN0QW5zd2VycyA9IGlzQ29ycmVjdCA/IGZpbmQuY29ycmVjdEFuc3dlcnMgKyAxIDogZmluZC5jb3JyZWN0QW5zd2VycztcclxuICAgICAgICAgICAgICAgICAgICBmaW5kLndyb25nQW5zd2VycyA9IGlzQ29ycmVjdCA/IGZpbmQud3JvbmdBbnN3ZXJzIDogZmluZC53cm9uZ0Fuc3dlcnMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmQubGVhcm5lZFdvcmRzID0gaXNMZWFybmVkID8gZmluZC5sZWFybmVkV29yZHMgKyAxIDogZmluZC5sZWFybmVkV29yZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluZC5hY2N1cmFjeSA9IGZpbmQuY29ycmVjdEFuc3dlcnMgLyAoZmluZC5jb3JyZWN0QW5zd2VycyArIGZpbmQud3JvbmdBbnN3ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kLmN1cnJlbnRTZXJpZSA9IGlzQ29ycmVjdCA/IGZpbmQuY3VycmVudFNlcmllICsgMSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluZC5zZXJpZSA9IGZpbmQuY3VycmVudFNlcmllID4gZmluZC5zZXJpZSA/IGZpbmQuY3VycmVudFNlcmllIDogZmluZC5zZXJpZTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kLm5ld1dvcmRzID0gaXNOZXcgPyBmaW5kLm5ld1dvcmRzICsgMSA6IGZpbmQubmV3V29yZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5hcGkudXBkYXRlVXNlclN0YXQoQXBwLnVzZXIudXNlcklkLCBBcHAudXNlci50b2tlbiwgY3VycmVudFN0YXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFmaW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdE9wdGlvbmFsID0gbmV3IFN0YXRPcHRpb25hbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRPcHRpb25hbC5kYXRlU2hvcnQgPSBkYXRlU2hvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdE9wdGlvbmFsLmNvcnJlY3RBbnN3ZXJzID0gaXNDb3JyZWN0ID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdE9wdGlvbmFsLndyb25nQW5zd2VycyA9IGlzQ29ycmVjdCA/IDAgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBzdGF0T3B0aW9uYWwuY29ycmVjdEFuc3dlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYiA9IHN0YXRPcHRpb25hbC53cm9uZ0Fuc3dlcnMgKyBzdGF0T3B0aW9uYWwuY29ycmVjdEFuc3dlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdE9wdGlvbmFsLmFjY3VyYWN5ID0gYSAvIGI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdE9wdGlvbmFsLm5ld1dvcmRzID0gdXBkYXRlV29yZHNSZXN1bHQuaXNOZXcgPyAxIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0T3B0aW9uYWwubGVhcm5lZFdvcmRzID0gaXNMZWFybmVkID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdE9wdGlvbmFsLmdhbWVOYW1lID0gZ2FtZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdE9wdGlvbmFsLnNlcmllID0gaXNDb3JyZWN0ID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdE9wdGlvbmFsLmN1cnJlbnRTZXJpZSA9IGlzQ29ycmVjdCA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0Lm9wdGlvbmFsLnB1c2goc3RhdE9wdGlvbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhdC5sZWFybmVkV29yZHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuYXBpLnVwZGF0ZVVzZXJTdGF0KEFwcC51c2VyLnVzZXJJZCwgQXBwLnVzZXIudG9rZW4sIGN1cnJlbnRTdGF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkTGVhcm5lZFdvcmRGcm9tQm9vaygpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoQXBwLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ID0geWllbGQgdGhpcy5hcGkuZ2V0VXNlclN0YXQoQXBwLnVzZXIudXNlcklkLCBBcHAudXNlci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlU2hvcnQgPSB0aGlzLnRvU2hvcnREYXRlKHRvZGF5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvT3B0aW9uc09iamVjdCA9IGN1cnJlbnRTdGF0Lm9wdGlvbmFsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9PcHRpb25zQXJyYXlTdHJpbmcgPSB0b09wdGlvbnNPYmplY3QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBTdGF0T3B0aW9uc0FycnJheSA9IEpTT04ucGFyc2UodG9PcHRpb25zQXJyYXlTdHJpbmcudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdC5vcHRpb25hbCA9IFN0YXRPcHRpb25zQXJycmF5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmluZCA9IGN1cnJlbnRTdGF0Lm9wdGlvbmFsLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5kYXRlU2hvcnQgPT09IGRhdGVTaG9ydCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0U3RhdGlzdGljID0gbmV3IFN0YXRpc3RpYygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRTdGF0aXN0aWMubGVhcm5lZFdvcmRzID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBpbml0U3RhdGlzdGljLm9wdGlvbmFsLnB1c2godGhpcy5pbml0T3B0aW9uYWwoJ2F1ZGlvY2FsbCcpKTtcclxuICAgICAgICAgICAgICAgICAgICBpbml0U3RhdGlzdGljLm9wdGlvbmFsLnB1c2godGhpcy5pbml0T3B0aW9uYWwoJ3NwcmludCcpKTtcclxuICAgICAgICAgICAgICAgICAgICBpbml0U3RhdGlzdGljLm9wdGlvbmFsWzBdLmxlYXJuZWRCeUJvb2sgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBpbml0U3RhdGlzdGljLm9wdGlvbmFsWzFdLmxlYXJuZWRCeUJvb2sgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmFwaS51cGRhdGVVc2VyU3RhdChBcHAudXNlci51c2VySWQsIEFwcC51c2VyLnRva2VuLCBjdXJyZW50U3RhdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kW2ldLmxlYXJuZWRCeUJvb2sgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5hcGkudXBkYXRlVXNlclN0YXQoQXBwLnVzZXIudXNlcklkLCBBcHAudXNlci50b2tlbiwgY3VycmVudFN0YXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljO1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uL0FwaSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwJztcclxuY2xhc3MgVXNlcldvcmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgQXBpKCk7XHJcbiAgICB9XHJcbiAgICBVcGRhdGVVc2VyV29yZHMoY29ycmVjdEFuc3dlciwgaXNDb3JyZWN0KSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VyV29yZHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgbGV0IGlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB3YXNMZWFybmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBpc0xlYXJuZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKChfYSA9IEFwcC51c2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyV29yZHMgPSB5aWVsZCB0aGlzLmFwaS5nZXRVc2VyV29yZHMoQXBwLnVzZXIudXNlcklkLCBBcHAudXNlci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5kID0gdXNlcldvcmRzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ud29yZElkID09PSBjb3JyZWN0QW5zd2VyLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmluZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVXNlcldvcmQoaXNDb3JyZWN0LCBjb3JyZWN0QW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBpc05ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc0xlYXJuZWQgPSBmaW5kLm9wdGlvbmFsLndhc0xlYXJuZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgcHJvZ3Jlc3MgfSA9IGZpbmQub3B0aW9uYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBpc0NvcnJlY3QgPyAocHJvZ3Jlc3MgKz0gMjApIDogKHByb2dyZXNzIC09IDIwKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHByb2dyZXNzID49IDEwMCA/IDEwMCA6IHByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3MgPD0gMCA/IDAgOiBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IDEwMCAmJiAhd2FzTGVhcm5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNMZWFybmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMZWFybmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZmljdWx0eSA9IHByb2dyZXNzID09PSAxMDAgPyAnbm8taGFyZCcgOiBmaW5kLmRpZmZpY3VsdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kLm9wdGlvbmFsLnN1Y2Nlc3NmdWxBdHRlbXB0cyArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kLm9wdGlvbmFsLnVuc3VjY2Vzc2Z1bEF0dGVtcHRzICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJXb3JkID0gbmV3IFVzZXJXb3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcldvcmQud29yZCA9IGNvcnJlY3RBbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcldvcmQuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcldvcmQub3B0aW9uYWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzZnVsQXR0ZW1wdHM6IGZpbmQub3B0aW9uYWwuc3VjY2Vzc2Z1bEF0dGVtcHRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnN1Y2Nlc3NmdWxBdHRlbXB0czogZmluZC5vcHRpb25hbC51bnN1Y2Nlc3NmdWxBdHRlbXB0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzTGVhcm5lZCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJXb3JkLndvcmQgPSBjb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJXb3JkLndvcmRJZCA9IGZpbmQud29yZElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTmV3ID0gZmluZC5vcHRpb25hbC5zdWNjZXNzZnVsQXR0ZW1wdHMgKyBmaW5kLm9wdGlvbmFsLnN1Y2Nlc3NmdWxBdHRlbXB0cyA9PT0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS51cGRhdGVVc2VyV29yZChBcHAudXNlci51c2VySWQsIEFwcC51c2VyLnRva2VuLCB1c2VyV29yZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHsgaXNOZXcsIGlzQ29ycmVjdCwgaXNMZWFybmVkIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVVc2VyV29yZChpc0NvcnJlY3QsIGNvcnJlY3RBbnN3ZXIpIHtcclxuICAgICAgICBpZiAoQXBwLnVzZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpc0NvcnJlY3QgPyAyMCA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NmdWxBdHRlbXB0cyA9IGlzQ29ycmVjdCA/IDEgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCB1bnN1Y2Nlc3NmdWxBdHRlbXB0cyA9IGlzQ29ycmVjdCA/IDAgOiAxO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyV29yZCA9IG5ldyBVc2VyV29yZCgpO1xyXG4gICAgICAgICAgICB1c2VyV29yZC53b3JkID0gY29ycmVjdEFuc3dlcjtcclxuICAgICAgICAgICAgdXNlcldvcmQuZGlmZmljdWx0eSA9ICduby1oYXJkJztcclxuICAgICAgICAgICAgdXNlcldvcmQub3B0aW9uYWwgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWxBdHRlbXB0cyxcclxuICAgICAgICAgICAgICAgIHVuc3VjY2Vzc2Z1bEF0dGVtcHRzLFxyXG4gICAgICAgICAgICAgICAgd2FzTGVhcm5lZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYXBpLmNyZWF0ZVVzZXJXb3JkKEFwcC51c2VyLnVzZXJJZCwgQXBwLnVzZXIudG9rZW4sIHVzZXJXb3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlcldvcmQ7XHJcbiIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9ycy1sYW5nLXRlYW0xMTIuaGVyb2t1YXBwLmNvbSc7XHJcbmNvbnN0IHNpZ25JbkJ1dHRvblRleHQgPSAn0JLQvtC50YLQuCc7XHJcbmNvbnN0IHVwcGVyU2lnbkluQnV0dG9uVGV4dCA9ICfQktCe0JnQotCYJztcclxuY29uc3QgbG9nT3V0VGV4dCA9ICfQktGL0LnRgtC4JztcclxuY29uc3Qgc2lnbkluVGl0bGUgPSAn0KHQu9C10LTQuCDQt9CwINGB0YLQsNGC0LjRgdGC0LjQutC+0Lkg0LIg0YHQstC+0LXQvCDQsNC60LrQsNGD0L3RgtC1JztcclxuY29uc3Qgc2lnblVwVGl0bGUgPSAn0KHQvtC30LTQsNC5INGB0LLQvtC5INCw0LrQutCw0YPQvdGCJztcclxuY29uc3Qgc2lnblVwQnV0dG9uVGV4dCA9ICfQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8nO1xyXG5jb25zdCB1cHBlclNpZ25VcEJ1dHRvblRleHQgPSAn0JfQkNCg0JXQk9CY0KHQotCg0JjQoNCe0JLQkNCi0KzQodCvJztcclxuY29uc3QgbmFtZSA9ICfQmNC80Y8nO1xyXG5jb25zdCBlbWFpbCA9ICfQn9C+0YfRgtCwJztcclxuY29uc3QgcGFzc3dvcmQgPSAn0J/QsNGA0L7Qu9GMJztcclxuY29uc3QgaGF2ZU5vdFlldEFjY291bnRUZXh0ID0gJ9CV0YnRkSDQvdC1INGD0YHQv9C10LvQuCDRgdC+0LfQtNCw0YLRjCDQsNC60LrQsNGD0L3Rgj8nO1xyXG5jb25zdCBoYXZlQWNjb3VudFRleHQgPSAn0KPQttC1INC10YHRgtGMINCw0LrQutCw0YPQvdGCPyc7XHJcbmNvbnN0IGludmFsaWRFbWFpbCA9ICdJbnZhbGlkIGVtYWlsJztcclxuY29uc3QgaW52YWxpZFBhc3N3b3JkID0gJ1Bhc3N3b3JkIHNob3VsZCBjb250YWluIGRpZ2l0cywgbGV0dGVycyBvciBib3RoJztcclxuLyogcHJldHRpZXItaWdub3JlICovXHJcbmNvbnN0IG1haW5QYWdlVGV4dDEgPSAn0J/QtdGA0LXQtCDQstCw0LzQuCDQv9GA0LjQu9C+0LbQtdC90LjQtSDQtNC70Y8g0Y3RhNGE0LXQutGC0LjQstC90L7Qs9C+INC40LfRg9GH0LXQvdC40Y8g0LjQvdC+0YHRgtGA0LDQvdC90YvRhSDRgdC70L7QsiDQsiDQuNCz0YDQvtCy0L7QuSDRhNC+0YDQvNC1LiDQotGA0LDRgtGPINCy0YHQtdCz0L4g0L3QtdGB0LrQvtC70YzQutC+INC80LjQvdGD0YIg0LIg0LTQtdC90YwsINCy0Ysg0L7QsdC+0LPQsNGC0LjRgtC1INGB0LvQvtCy0LDRgNC90YvQuSDQt9Cw0L/QsNGBINC4INC/0YDQuNCx0LvQuNC30LjRgtC10YHRjCDQuiDRgdCy0L7QtdC5INGG0LXQu9C4INC90LDQutC+0L3QtdGGLdGC0L4g0LLRi9GD0YfQuNGC0Ywg0LDQvdCz0LvQuNC50YHQutC40LkuJztcclxuLyogcHJldHRpZXItaWdub3JlICovXHJcbmNvbnN0IG1haW5QYWdlVGV4dDIgPSAn0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L4g0L/RgNC40LvQvtC20LXQvdC40LUg0L/QvtC30LLQvtC70Y/QtdGCINC/0YDQvtC60LDRh9Cw0YLRjCDQvdCw0LLRi9C6INCw0YPQtNC40YDQvtCy0LDQvdC40Y8g0Lgg0L/QvtC90Y/RgtGMLCDQutCw0Log0L/RgNC40LzQtdC90Y/RgtGMINCy0YvRg9GH0LXQvdC90YvQtSDRgdC70L7QstCwINC4INGE0YDQsNC30Ysg0LIg0LbQuNC30L3QuC4g0JjQs9GA0Ysg0L/RgNC10LLRgNCw0YLRj9GCINC40LfRg9GH0LXQvdC40LUg0Y/Qt9GL0LrQsCDQsiDRg9C00L7QstC+0LvRjNGB0YLQstC40LUg0Lgg0L/QvtC30LLQvtC70Y/RgiDRgSDQu9GR0LPQutC+0YHRgtGM0Y4g0LfQsNC/0L7QvNC40L3QsNGC0Ywg0L3QvtCy0YvQtSDRgdC70L7QstCwLiDQndCw0YfQvdC4INC40LfRg9GH0LDRgtGMINCw0L3Qs9C70LjQudGB0LrQuNC5INC/0YDRj9C80L4g0YHQtdC50YfQsNGBISc7XHJcbmNvbnN0IHJzTGFuZyA9ICdSUyBMYW5nJztcclxuY29uc3QgbGVhcm5CdXR0b25UZXh0ID0gJ9Cj0YfQuNGC0YzRgdGPJztcclxuY29uc3QgcGxheUJ1dHRvblRleHQgPSAn0JjQs9GA0LDRgtGMJztcclxuY29uc3QgbnVtYmVyT2ZMZXZlbHMgPSA3OyAvLyA2ICsgMSjQstGB0LUg0YHQu9C+0LbQvdGL0LUg0YHQu9C+0LLQsClcclxuY29uc3QgbnVtYmVyT2ZQYWdlc0luTGV2ZWwgPSAzMDtcclxuY29uc3QgbnVtYmVyT2ZDYXJkc1BlclBhZ2UgPSAyMDtcclxuY29uc3QgYnRuSGFyZFRleHQgPSAn0YHQu9C+0LbQvdGL0LUnO1xyXG5jb25zdCBidG5MZXZlbFRleHQgPSAn0YPRgNC+0LLQtdC90YwgJztcclxuY29uc3QgYXVkaW9HYW1lTmFtZSA9ICfQkNGD0LTQuNC+0LLRi9C30L7Qsic7XHJcbmNvbnN0IHNwcmludEdhbWVOYW1lID0gJ9Ch0L/RgNC40L3Rgic7XHJcbmNvbnN0IGV4dHJhR2FtZU5hbWUgPSAn0K3QutGB0YLRgNCwJztcclxuY29uc3QgaGFyZEJ1dHRvblRleHQgPSAn0KHQu9C+0LbQvdC+0LUnO1xyXG5jb25zdCBkb25lQnV0dG9uVGV4dCA9ICfQmNC30YPRh9C10L3Qvic7XHJcbmNvbnN0IGljb25TcHJpbnRTcmMgPSAnLi9hc3NldHMvc3ZnL2ljb25fc3ByaW50LnN2Zyc7XHJcbmNvbnN0IGljb25BdWRpb0dhbWVTcmMgPSAnLi9hc3NldHMvc3ZnL2ljb25fYXVkaW9fZ2FtZS5zdmcnO1xyXG5jb25zdCBpY29uRXh0cmFHYW1lU3JjID0gJy4vYXNzZXRzL3N2Zy9pY29uX2F1ZGlvX2dhbWUuc3ZnJztcclxuY29uc3QgcHJvZ3Jlc3NGb3JEb25lV29yZCA9IDEwMDtcclxuY29uc3QgcHJvZ3Jlc3NGb3JOb0RvbmVXb3JkID0gMDtcclxuY29uc3QgYmFja0J1dHRvblRleHQgPSAn0J3QsNC30LDQtCc7XHJcbmNvbnN0IGxldmVsVGV4dCA9ICfQo9GA0L7QstC10L3RjCc7XHJcbmNvbnN0IGxldmVsU2VsZWN0TGFiZWxUZXh0ID0gJ9CS0YvQsdC10YDQuNGC0LUg0YPRgNC+0LLQtdC90Ywg0YHQu9C+0LbQvdC+0YHRgtC4JztcclxuY29uc3QgbmV3QXVkaW9HYW1lQnV0dG9uVGV4dCA9ICfQndC+0LLQsNGPINC40LPRgNCwINCQ0YPQtNC40L7QstGL0LfQvtCyIChOKSc7XHJcbmNvbnN0IG5ld1NwcmludEdhbWVCdXR0b25UZXh0ID0gJ9Cd0L7QstCw0Y8g0LjQs9GA0LAg0KHQv9GA0LjQvdGCIChOKSc7XHJcbmNvbnN0IHNraXBUZXh0ID0gJ9Cf0YDQvtC/0YPRgdGC0LjRgtGMIChTcGFjZSknO1xyXG5jb25zdCBuZXh0VGV4dCA9ICfQlNCw0LvQtdC1IChTcGFjZSknO1xyXG5jb25zdCBjb3JyZWN0UmVzdWx0c1RleHQgPSAn0JLQtdGA0L3Ri9C1INC+0YLQstC10YLRiyc7XHJcbmNvbnN0IGluY29ycmVjdFJlc3VsdHNUZXh0ID0gJ9Cd0LXQstC10YDQvdGL0LUg0L7RgtCy0LXRgtGLOic7XHJcbmNvbnN0IHJlc3VsdHNUZXh0ID0gJ9Cg0LXQt9GD0LvRjNGC0LDRgtGLJztcclxuY29uc3Qgc3ByaW50VGltZSA9IDYwO1xyXG5jb25zdCBjb3JyZWN0VGV4dCA9ICfQktC10YDQvdC+JztcclxuY29uc3QgaW5jb3JyZWN0VGV4dCA9ICfQndC10LLQtdGA0L3Qvic7XHJcbmNvbnN0IGFycm93UmlnaHQgPSAn4oaSJztcclxuY29uc3QgYXJyb3dMZWZ0ID0gJ+KGkCc7XHJcbi8vIGNvbnN0XHJcbmV4cG9ydCB7IGJhc2VVcmwsIHNpZ25VcEJ1dHRvblRleHQsIHNpZ25JbkJ1dHRvblRleHQsIHNpZ25JblRpdGxlLCBlbWFpbCwgcGFzc3dvcmQsIGhhdmVOb3RZZXRBY2NvdW50VGV4dCwgaGF2ZUFjY291bnRUZXh0LCBpbnZhbGlkRW1haWwsIGludmFsaWRQYXNzd29yZCwgc2lnblVwVGl0bGUsIG5hbWUsIHVwcGVyU2lnblVwQnV0dG9uVGV4dCwgdXBwZXJTaWduSW5CdXR0b25UZXh0LCBtYWluUGFnZVRleHQxLCBtYWluUGFnZVRleHQyLCByc0xhbmcsIGxlYXJuQnV0dG9uVGV4dCwgcGxheUJ1dHRvblRleHQsIG51bWJlck9mTGV2ZWxzLCBidG5IYXJkVGV4dCwgYnRuTGV2ZWxUZXh0LCBzcHJpbnRHYW1lTmFtZSwgYXVkaW9HYW1lTmFtZSwgZXh0cmFHYW1lTmFtZSwgbG9nT3V0VGV4dCwgaGFyZEJ1dHRvblRleHQsIGRvbmVCdXR0b25UZXh0LCBudW1iZXJPZlBhZ2VzSW5MZXZlbCwgbnVtYmVyT2ZDYXJkc1BlclBhZ2UsIGljb25TcHJpbnRTcmMsIGljb25BdWRpb0dhbWVTcmMsIGljb25FeHRyYUdhbWVTcmMsIHNwcmludFRpbWUsIGNvcnJlY3RUZXh0LCBpbmNvcnJlY3RUZXh0LCBjb3JyZWN0UmVzdWx0c1RleHQsIGluY29ycmVjdFJlc3VsdHNUZXh0LCByZXN1bHRzVGV4dCwgYmFja0J1dHRvblRleHQsIGxldmVsVGV4dCwgbGV2ZWxTZWxlY3RMYWJlbFRleHQsIG5ld0F1ZGlvR2FtZUJ1dHRvblRleHQsIG5ld1NwcmludEdhbWVCdXR0b25UZXh0LCBhcnJvd1JpZ2h0LCBhcnJvd0xlZnQsIHNraXBUZXh0LCBuZXh0VGV4dCwgcHJvZ3Jlc3NGb3JEb25lV29yZCwgcHJvZ3Jlc3NGb3JOb0RvbmVXb3JkLCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5zdGFydCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=