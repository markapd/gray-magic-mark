module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./magic.js":
/*!******************!*\
  !*** ./magic.js ***!
  \******************/
/*! exports provided: magic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"magic\", function() { return magic; });\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magic-sdk */ \"magic-sdk\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createMagic = key =>  false && false;\n\nconst magic = createMagic(\"pk_live_BA27AD13D51DA6FB\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWdpYy5qcz8yYTBmIl0sIm5hbWVzIjpbImNyZWF0ZU1hZ2ljIiwia2V5IiwibWFnaWMiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLFdBQVcsR0FBSUMsR0FBRCxJQUFTLFVBQWdDLEtBQTdEOztBQUVPLE1BQU1DLEtBQUssR0FBR0YsV0FBVyxDQUFDRywwQkFBRCxDQUF6QiIsImZpbGUiOiIuL21hZ2ljLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFnaWMgfSBmcm9tICdtYWdpYy1zZGsnO1xuXG5jb25zdCBjcmVhdGVNYWdpYyA9IChrZXkpID0+IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgbmV3IE1hZ2ljKGtleSk7XG5cbmV4cG9ydCBjb25zdCBtYWdpYyA9IGNyZWF0ZU1hZ2ljKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX1BVQkxJU0hBQkxFX0tFWSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./magic.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! magic-sdk */ \"magic-sdk\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _magic_ext_oauth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @magic-ext/oauth */ \"@magic-ext/oauth\");\n/* harmony import */ var _magic_ext_oauth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_magic_ext_oauth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _magic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../magic */ \"./magic.js\");\n\nvar _jsxFileName = \"/Users/cody/MarkTraining/mark-magic-sample/pages/login.js\";\n\n\n\n\n\n\nfunction Login() {\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: isLoggingIn,\n    1: setIsLoggingIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: sms,\n    1: setSms\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  /**\n   * Perform login action via Magic's passwordless flow. Upon successuful\n   * completion of the login flow, a user is redirected to the homepage.\n   * \n   \n   */\n\n  const loginBinance = async () => {\n    const magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Magic\"]('pk_live_BA27AD13D51DA6FB');\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__[\"ethers\"].providers.Web3Provider(magic.rpcProvider);\n    console.log(provider);\n  };\n\n  const loginGoogle = async () => {\n    const magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Magic\"]('pk_live_BA27AD13D51DA6FB', {\n      extensions: [new _magic_ext_oauth__WEBPACK_IMPORTED_MODULE_4__[\"OAuthExtension\"]()]\n    });\n    await magic.oauth.loginWithRedirect({\n      provider: 'google',\n      redirectURI: 'http://localhost:3000'\n    });\n  };\n\n  const loginFacebook = async () => {\n    const magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Magic\"]('pk_live_BA27AD13D51DA6FB', {\n      extensions: [new _magic_ext_oauth__WEBPACK_IMPORTED_MODULE_4__[\"OAuthExtension\"]()]\n    });\n    const mak = await magic.oauth.loginWithRedirect({\n      provider: 'facebook',\n      redirectURI: 'http://localhost:3000'\n    });\n    console.log(mak);\n  };\n\n  const loginSms = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(async () => {\n    const m = new magic_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Magic\"]('pk_live_BA27AD13D51DA6FB');\n\n    try {\n      await m.auth.loginWithSMS({\n        phoneNumber: sms\n      });\n    } catch (err) {\n      console.log(err);\n    }\n  }, [sms]);\n  const login = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(async () => {\n    setIsLoggingIn(true);\n    const m = new magic_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Magic\"]('pk_live_BA27AD13D51DA6FB');\n\n    try {\n      const didToken = await m.auth.loginWithMagicLink({\n        email,\n        redirectURI: new URL('/callback', window.location.origin).href\n      });\n      const res = await fetch('/api/login', {\n        headers: {\n          'Content-Type': 'application/json',\n          Authorization: 'Bearer ' + didToken\n        }\n      });\n      res.status === 200 && next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');\n    } catch {\n      setIsLoggingIn(false);\n    }\n  }, [email]);\n  /**\n   * Saves the value of our email input into component state.\n   */\n\n  const handleInputOnChange = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(event => {\n    setEmail(event.target.value);\n  }, []);\n  const handleInputOnChangeSms = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(event => {\n    setSms(event.target.value);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Please sign up or login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"email\",\n      name: \"email\",\n      required: \"required\",\n      placeholder: \"Enter your email\",\n      onChange: handleInputOnChange,\n      disabled: isLoggingIn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: login,\n      disabled: isLoggingIn,\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      onChange: handleInputOnChangeSms,\n      name: \"phone\",\n      type: \"tel\",\n      name: \"phone\",\n      required: \"required\",\n      placeholder: \"Enter your phone #\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: loginSms,\n      type: \"submit\",\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: loginFacebook,\n      type: \"submit\",\n      children: \"login facebook\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: loginGoogle,\n      type: \"submit\",\n      children: \"login Google\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: loginBinance,\n      type: \"submit\",\n      children: \"login binance\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwiaXNMb2dnaW5nSW4iLCJzZXRJc0xvZ2dpbmdJbiIsInNtcyIsInNldFNtcyIsImxvZ2luQmluYW5jZSIsIm1hZ2ljIiwiTWFnaWMiLCJwcm92aWRlciIsImV0aGVycyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInJwY1Byb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsImxvZ2luR29vZ2xlIiwiZXh0ZW5zaW9ucyIsIk9BdXRoRXh0ZW5zaW9uIiwib2F1dGgiLCJsb2dpbldpdGhSZWRpcmVjdCIsInJlZGlyZWN0VVJJIiwibG9naW5GYWNlYm9vayIsIm1hayIsImxvZ2luU21zIiwidXNlQ2FsbGJhY2siLCJtIiwiYXV0aCIsImxvZ2luV2l0aFNNUyIsInBob25lTnVtYmVyIiwiZXJyIiwibG9naW4iLCJkaWRUb2tlbiIsImxvZ2luV2l0aE1hZ2ljTGluayIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiaHJlZiIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlSW5wdXRPbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbnB1dE9uQ2hhbmdlU21zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDOUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NGLHNEQUFRLENBQUMsS0FBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxP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QVpGLGVBYUU7QUFBUSxhQUFPLEVBQUVOLFdBQWpCO0FBQThCLFVBQUksRUFBQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLGVBZUU7QUFBUSxhQUFPLEVBQUVWLFlBQWpCO0FBQStCLFVBQUksRUFBQyxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEIiwiZmlsZSI6Ii4vcGFnZXMvbG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IE1hZ2ljLCBSUENFcnJvciwgUlBDRXJyb3JDb2RlIH0gZnJvbSBcIm1hZ2ljLXNka1wiXG5pbXBvcnQgeyBPQXV0aEV4dGVuc2lvbiB9IGZyb20gJ0BtYWdpYy1leHQvb2F1dGgnO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IG1hZ2ljIH0gZnJvbSAnLi4vbWFnaWMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvZ2dpbmdJbiwgc2V0SXNMb2dnaW5nSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc21zLCBzZXRTbXNdID0gdXNlU3RhdGUoJycpXG5cbiBcbiAgLyoqXG4gICAqIFBlcmZvcm0gbG9naW4gYWN0aW9uIHZpYSBNYWdpYydzIHBhc3N3b3JkbGVzcyBmbG93LiBVcG9uIHN1Y2Nlc3N1ZnVsXG4gICAqIGNvbXBsZXRpb24gb2YgdGhlIGxvZ2luIGZsb3csIGEgdXNlciBpcyByZWRpcmVjdGVkIHRvIHRoZSBob21lcGFnZS5cbiAgICogXG4gICBcbiAgICovXG5cblxuICBjb25zdCBsb2dpbkJpbmFuY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFnaWMgPSBuZXcgTWFnaWMoJ3BrX2xpdmVfQkEyN0FEMTNENTFEQTZGQicpO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKG1hZ2ljLnJwY1Byb3ZpZGVyKTtcbiAgICBjb25zb2xlLmxvZyhwcm92aWRlcikgICAgXG4gIH1cblxuICAgY29uc3QgbG9naW5Hb29nbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFnaWMgPSBuZXcgTWFnaWMoJ3BrX2xpdmVfQkEyN0FEMTNENTFEQTZGQicsIHtcbiAgICAgIGV4dGVuc2lvbnM6IFtuZXcgT0F1dGhFeHRlbnNpb24oKV0sXG4gICAgfSk7XG4gICAgYXdhaXQgbWFnaWMub2F1dGgubG9naW5XaXRoUmVkaXJlY3Qoe1xuICAgICAgcHJvdmlkZXI6ICdnb29nbGUnLFxuICAgICAgcmVkaXJlY3RVUkk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAgIH0pO1xuICAgfVxuXG4gIGNvbnN0IGxvZ2luRmFjZWJvb2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFnaWMgPSBuZXcgTWFnaWMoJ3BrX2xpdmVfQkEyN0FEMTNENTFEQTZGQicsIHtcbiAgICAgIGV4dGVuc2lvbnM6IFtuZXcgT0F1dGhFeHRlbnNpb24oKV0sXG4gICAgfSk7XG4gICAgXG4gICAgIGNvbnN0IG1hayA9IGF3YWl0IG1hZ2ljLm9hdXRoLmxvZ2luV2l0aFJlZGlyZWN0KHtcbiAgICAgIHByb3ZpZGVyOiAnZmFjZWJvb2snLFxuICAgICAgcmVkaXJlY3RVUkk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAgIH0pO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKG1haylcbiAgfVxuXG4gICBjb25zdCBsb2dpblNtcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtID0gbmV3IE1hZ2ljKCdwa19saXZlX0JBMjdBRDEzRDUxREE2RkInKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBtLmF1dGgubG9naW5XaXRoU01TKHsgcGhvbmVOdW1iZXI6IHNtc30pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgIFxuICAgIH1cbiAgfSxbc21zXSlcblxuICBjb25zdCBsb2dpbiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBzZXRJc0xvZ2dpbmdJbih0cnVlKTtcbiAgICBjb25zdCBtID0gbmV3IE1hZ2ljKCdwa19saXZlX0JBMjdBRDEzRDUxREE2RkInKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRpZFRva2VuID0gYXdhaXQgbS5hdXRoLmxvZ2luV2l0aE1hZ2ljTGluayh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICByZWRpcmVjdFVSSTogbmV3IFVSTCgnL2NhbGxiYWNrJywgd2luZG93LmxvY2F0aW9uLm9yaWdpbikuaHJlZixcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2dpbicsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgZGlkVG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJlcy5zdGF0dXMgPT09IDIwMCAmJiBSb3V0ZXIucHVzaCgnLycpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0SXNMb2dnaW5nSW4oZmFsc2UpO1xuICAgIH1cbiAgfSwgW2VtYWlsXSk7XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSB2YWx1ZSBvZiBvdXIgZW1haWwgaW5wdXQgaW50byBjb21wb25lbnQgc3RhdGUuXG4gICAqL1xuICBjb25zdCBoYW5kbGVJbnB1dE9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfSwgW10pO1xuICBjb25zdCBoYW5kbGVJbnB1dE9uQ2hhbmdlU21zID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgc2V0U21zKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8aDE+UGxlYXNlIHNpZ24gdXAgb3IgbG9naW48L2gxPlxuICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBuYW1lPSdlbWFpbCcgcmVxdWlyZWQ9J3JlcXVpcmVkJyBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBlbWFpbCcgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9IGRpc2FibGVkPXtpc0xvZ2dpbmdJbn0vPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dpbn0gZGlzYWJsZWQ9e2lzTG9nZ2luZ0lufT5cbiAgICAgICAgU2VuZFxuICAgICAgPC9idXR0b24+XG4gICAgICBcbiAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZVNtc30gbmFtZT1cInBob25lXCIgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgI1wiIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luU21zfSB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxuXG4gICAgICB7LyogPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlU21zfSBuYW1lPVwicGhvbmVcIiB0eXBlPVwidGVsXCIgbmFtZT1cInBob25lXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwaG9uZSAjXCIgLz4gKi99XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luRmFjZWJvb2t9IHR5cGU9XCJzdWJtaXRcIj5sb2dpbiBmYWNlYm9vazwvYnV0dG9uPlxuICAgICAgPGJyLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17bG9naW5Hb29nbGV9IHR5cGU9XCJzdWJtaXRcIj5sb2dpbiBHb29nbGU8L2J1dHRvbj5cbiAgICAgIDxici8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luQmluYW5jZX0gdHlwZT1cInN1Ym1pdFwiPmxvZ2luIGJpbmFuY2U8L2J1dHRvbj5cblxuXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "@magic-ext/oauth":
/*!***********************************!*\
  !*** external "@magic-ext/oauth" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@magic-ext/oauth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWFnaWMtZXh0L29hdXRoXCI/ZjZiOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWFnaWMtZXh0L29hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hZ2ljLWV4dC9vYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@magic-ext/oauth\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ethers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldGhlcnNcIj83MzFkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImV0aGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV0aGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ethers\n");

/***/ }),

/***/ "magic-sdk":
/*!****************************!*\
  !*** external "magic-sdk" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"magic-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYWdpYy1zZGtcIj9iYWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hZ2ljLXNkay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hZ2ljLXNka1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///magic-sdk\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });