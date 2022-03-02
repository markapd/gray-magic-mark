module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return login; });\n/* harmony import */ var _magic_sdk_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/admin */ \"@magic-sdk/admin\");\n/* harmony import */ var _magic_sdk_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_magic_sdk_admin__WEBPACK_IMPORTED_MODULE_0__);\n\nconst magic = new _magic_sdk_admin__WEBPACK_IMPORTED_MODULE_0__[\"Magic\"](process.env.MAGIC_SECRET_KEY);\nasync function login(req, res) {\n  try {\n    const didToken = req.headers.authorization.substr(7);\n    await magic.token.validate(didToken);\n    res.status(200).json({\n      authenticated: true\n    });\n  } catch (error) {\n    res.status(500).json({\n      error: error.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9naW4uanM/MDM4NCJdLCJuYW1lcyI6WyJtYWdpYyIsIk1hZ2ljIiwicHJvY2VzcyIsImVudiIsIk1BR0lDX1NFQ1JFVF9LRVkiLCJsb2dpbiIsInJlcSIsInJlcyIsImRpZFRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdWJzdHIiLCJ0b2tlbiIsInZhbGlkYXRlIiwic3RhdHVzIiwianNvbiIsImF1dGhlbnRpY2F0ZWQiLCJlcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsc0RBQUosQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQUF0QixDQUFkO0FBRWUsZUFBZUMsS0FBZixDQUFxQkMsR0FBckIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQzVDLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxhQUFaLENBQTBCQyxNQUExQixDQUFpQyxDQUFqQyxDQUFqQjtBQUNBLFVBQU1YLEtBQUssQ0FBQ1ksS0FBTixDQUFZQyxRQUFaLENBQXFCTCxRQUFyQixDQUFOO0FBQ0FELE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLG1CQUFhLEVBQUU7QUFBakIsS0FBckI7QUFDRCxHQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RWLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVFLFdBQUssRUFBRUEsS0FBSyxDQUFDQztBQUFmLEtBQXJCO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hZ2ljIH0gZnJvbSAnQG1hZ2ljLXNkay9hZG1pbic7XG5cbmNvbnN0IG1hZ2ljID0gbmV3IE1hZ2ljKHByb2Nlc3MuZW52Lk1BR0lDX1NFQ1JFVF9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbihyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGNvbnN0IGRpZFRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zdWJzdHIoNyk7XG4gICAgYXdhaXQgbWFnaWMudG9rZW4udmFsaWRhdGUoZGlkVG9rZW4pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgYXV0aGVudGljYXRlZDogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

/***/ }),

/***/ "@magic-sdk/admin":
/*!***********************************!*\
  !*** external "@magic-sdk/admin" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@magic-sdk/admin\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWFnaWMtc2RrL2FkbWluXCI/MjJmNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWFnaWMtc2RrL2FkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hZ2ljLXNkay9hZG1pblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@magic-sdk/admin\n");

/***/ })

/******/ });