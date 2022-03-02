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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/loading.js":
/*!*******************************!*\
  !*** ./components/loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Loading; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/cody/MarkTraining/mark-magic-sample/components/loading.js\";\nfunction Loading() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWRpbmcuanM/M2NiNiJdLCJuYW1lcyI6WyJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZSxTQUFTQSxPQUFULEdBQW1CO0FBQ2hDLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sb2FkaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/loading.js\n");

/***/ }),

/***/ "./magic.js":
/*!******************!*\
  !*** ./magic.js ***!
  \******************/
/*! exports provided: magic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"magic\", function() { return magic; });\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magic-sdk */ \"magic-sdk\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createMagic = key =>  false && false;\n\nconst magic = createMagic(\"pk_live_BA27AD13D51DA6FB\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWdpYy5qcz8yYTBmIl0sIm5hbWVzIjpbImNyZWF0ZU1hZ2ljIiwia2V5IiwibWFnaWMiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLFdBQVcsR0FBSUMsR0FBRCxJQUFTLFVBQWdDLEtBQTdEOztBQUVPLE1BQU1DLEtBQUssR0FBR0YsV0FBVyxDQUFDRywwQkFBRCxDQUF6QiIsImZpbGUiOiIuL21hZ2ljLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFnaWMgfSBmcm9tICdtYWdpYy1zZGsnO1xuXG5jb25zdCBjcmVhdGVNYWdpYyA9IChrZXkpID0+IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgbmV3IE1hZ2ljKGtleSk7XG5cbmV4cG9ydCBjb25zdCBtYWdpYyA9IGNyZWF0ZU1hZ2ljKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX1BVQkxJU0hBQkxFX0tFWSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./magic.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _magic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../magic */ \"./magic.js\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! magic-sdk */ \"magic-sdk\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.js\");\n\nvar _jsxFileName = \"/Users/cody/MarkTraining/mark-magic-sample/pages/index.js\";\n\n\n\n\n\n\nfunction Index() {\n  const {\n    0: userMetadata,\n    1: setUserMetadata\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: newEmail,\n    1: setNewEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const str = '---\\ntitle: Content 1\\n---\\nThis is an excerpt.\\n---\\nThis is content';\n  const file = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(str, {\n    excerpt: true\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    _magic__WEBPACK_IMPORTED_MODULE_4__[\"magic\"].user.isLoggedIn().then(magicIsLoggedIn => {\n      if (magicIsLoggedIn) {\n        _magic__WEBPACK_IMPORTED_MODULE_4__[\"magic\"].user.getMetadata().then(setUserMetadata);\n      } else {\n        // If no user is logged in, redirect to `/login`\n        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');\n      }\n    });\n  }, []);\n\n  const handleChangeEmail = async () => {\n    const m = new magic_sdk__WEBPACK_IMPORTED_MODULE_5__[\"Magic\"]('pk_live_BA27AD13D51DA6FB');\n\n    try {\n      await m.user.updateEmail({\n        email: newEmail,\n        showUI: false\n      });\n    } catch (err) {\n      if (err instanceof magic_sdk__WEBPACK_IMPORTED_MODULE_5__[\"RPCError\"]) {\n        switch (err.code) {\n          case magic_sdk__WEBPACK_IMPORTED_MODULE_5__[\"RPCErrorCode\"].UpdateEmailFailed:\n            break;\n        }\n      }\n    }\n  };\n\n  const logout = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => {\n    _magic__WEBPACK_IMPORTED_MODULE_4__[\"magic\"].user.logout().then(() => {\n      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');\n    });\n  }, [next_router__WEBPACK_IMPORTED_MODULE_3___default.a]); // console.log(matter('---\\ntitle: Front Matter\\n---\\nThis is content.'));\n\n  return userMetadata ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"Current user: \", userMetadata.email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: logout,\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n        children: [\"Issuer:\", userMetadata.issuer]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 50\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n        children: [\"Public Address:\", userMetadata.publicAddress]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 65\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n        children: [\"email:\", userMetadata.email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      onChange: val => setNewEmail(val.target.value),\n      name: \"phone\",\n      type: \"email\",\n      name: \"phone\",\n      required: \"required\",\n      placeholder: \"Change Email\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleChangeEmail,\n      type: \"submit\",\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      size: \"xl\",\n      mb: 4,\n      children: \"Gray Matter\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n      children: [\"Data: \", file.data.title]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n      children: [\"Content: \", file.content]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n} // export async function getStaticProps() {\n//   const allPostsData = getSortedPostsData()\n//   return {\n//     props: {\n//       allPostsData\n//     }\n//   }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlck1ldGFkYXRhIiwic2V0VXNlck1ldGFkYXRhIiwidXNlU3RhdGUiLCJuZXdFbWFpbCIsInNldE5ld0VtYWlsIiwic3RyIiwiZmlsZSIsIm1hdHRlciIsImV4Y2VycHQiLCJ1c2VFZmZlY3QiLCJtYWdpYyIsInVzZXIiLCJpc0xvZ2dlZEluIiwidGhlbiIsIm1hZ2ljSXNMb2dnZWRJbiIsImdldE1ldGFkYXRhIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUNoYW5nZUVtYWlsIiwibSIsIk1hZ2ljIiwidXBkYXRlRW1haWwiLCJlbWFpbCIsInNob3dVSSIsImVyciIsIlJQQ0Vycm9yIiwiY29kZSIsIlJQQ0Vycm9yQ29kZSIsIlVwZGF0ZUVtYWlsRmFpbGVkIiwibG9nb3V0IiwidXNlQ2FsbGJhY2siLCJpc3N1ZXIiLCJwdWJsaWNBZGRyZXNzIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhIiwidGl0bGUiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLEVBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFFQSxRQUFNRyxHQUFHLEdBQUcsdUVBQVo7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLGtEQUFNLENBQUNGLEdBQUQsRUFBTTtBQUFFRyxXQUFPLEVBQUU7QUFBWCxHQUFOLENBQW5CO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxnREFBSyxDQUFDQyxJQUFOLENBQVdDLFVBQVgsR0FBd0JDLElBQXhCLENBQThCQyxlQUFELElBQXFCO0FBQ2hELFVBQUlBLGVBQUosRUFBcUI7QUFDbkJKLG9EQUFLLENBQUNDLElBQU4sQ0FBV0ksV0FBWCxHQUF5QkYsSUFBekIsQ0FBOEJaLGVBQTlCO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQWUsMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRDtBQUNGLEtBUEQ7QUFRRCxHQVRRLEVBU04sRUFUTSxDQUFUOztBQVdGLFFBQU1DLGlCQUFpQixHQUFHLFlBQVk7QUFDcEMsVUFBTUMsQ0FBQyxHQUFHLElBQUlDLCtDQUFKLENBQVUsMEJBQVYsQ0FBVjs7QUFDQSxRQUFJO0FBQ0YsWUFBTUQsQ0FBQyxDQUFDUixJQUFGLENBQU9VLFdBQVAsQ0FBbUI7QUFBRUMsYUFBSyxFQUFFbkIsUUFBVDtBQUFtQm9CLGNBQU0sRUFBRTtBQUEzQixPQUFuQixDQUFOO0FBQ0QsS0FGRCxDQUVFLE9BQU9DLEdBQVAsRUFBWTtBQUNaLFVBQUlBLEdBQUcsWUFBWUMsa0RBQW5CLEVBQTZCO0FBQzNCLGdCQUFRRCxHQUFHLENBQUNFLElBQVo7QUFDRSxlQUFLQyxzREFBWSxDQUFDQyxpQkFBbEI7QUFDRTtBQUZKO0FBSUQ7QUFDRjtBQUNGLEdBWkQ7O0FBY0UsUUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFDL0JwQixnREFBSyxDQUFDQyxJQUFOLENBQVdrQixNQUFYLEdBQW9CaEIsSUFBcEIsQ0FBeUIsTUFBTTtBQUM3Qkcsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRCxLQUZEO0FBR0QsR0FKeUIsRUFJdkIsQ0FBQ0Qsa0RBQUQsQ0FKdUIsQ0FBMUIsQ0FoQzhCLENBdUM5Qjs7QUFFQSxTQUFPaEIsWUFBWSxnQkFDakI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBQSxxQ0FBbUJBLFlBQVksQ0FBQ3NCLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBUSxlQUFPLEVBQUVPLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLDhCQUNFO0FBQUEsOEJBQWM3QixZQUFZLENBQUMrQixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUMyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRDNDLGVBRUU7QUFBQSxzQ0FBc0IvQixZQUFZLENBQUNnQyxhQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUUwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRjFELGVBR0U7QUFBQSw2QkFBYWhDLFlBQVksQ0FBQ3NCLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBV0U7QUFBTyxjQUFRLEVBQUVXLEdBQUcsSUFBSTdCLFdBQVcsQ0FBQzZCLEdBQUcsQ0FBQ0MsTUFBSixDQUFXQyxLQUFaLENBQW5DO0FBQXVELFVBQUksRUFBQyxPQUE1RDtBQUFvRSxVQUFJLEVBQUMsT0FBekU7QUFBaUYsVUFBSSxFQUFDLE9BQXRGO0FBQThGLGNBQVEsRUFBQyxVQUF2RztBQUFrSCxpQkFBVyxFQUFDO0FBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQVlFO0FBQVEsYUFBTyxFQUFFakIsaUJBQWpCO0FBQW9DLFVBQUksRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBYUU7QUFBSSxVQUFJLEVBQUMsSUFBVDtBQUFjLFFBQUUsRUFBRSxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBY0k7QUFBQSwyQkFBYVosSUFBSSxDQUFDOEIsSUFBTCxDQUFVQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSixlQWVJO0FBQUEsOEJBQWdCL0IsSUFBSSxDQUFDZ0MsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRGlCLGdCQW1CakIscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQW5CRjtBQXFCRCxDLENBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgbWFnaWMgfSBmcm9tICcuLi9tYWdpYyc7XG5pbXBvcnQgeyBNYWdpYywgUlBDRXJyb3IsIFJQQ0Vycm9yQ29kZSB9IGZyb20gXCJtYWdpYy1zZGtcIlxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW3VzZXJNZXRhZGF0YSwgc2V0VXNlck1ldGFkYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtuZXdFbWFpbCwgc2V0TmV3RW1haWxdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgc3RyID0gJy0tLVxcbnRpdGxlOiBDb250ZW50IDFcXG4tLS1cXG5UaGlzIGlzIGFuIGV4Y2VycHQuXFxuLS0tXFxuVGhpcyBpcyBjb250ZW50JztcbiAgY29uc3QgZmlsZSA9IG1hdHRlcihzdHIsIHsgZXhjZXJwdDogdHJ1ZSB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbWFnaWMudXNlci5pc0xvZ2dlZEluKCkudGhlbigobWFnaWNJc0xvZ2dlZEluKSA9PiB7XG4gICAgICBpZiAobWFnaWNJc0xvZ2dlZEluKSB7XG4gICAgICAgIG1hZ2ljLnVzZXIuZ2V0TWV0YWRhdGEoKS50aGVuKHNldFVzZXJNZXRhZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBubyB1c2VyIGlzIGxvZ2dlZCBpbiwgcmVkaXJlY3QgdG8gYC9sb2dpbmBcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbmNvbnN0IGhhbmRsZUNoYW5nZUVtYWlsID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtID0gbmV3IE1hZ2ljKCdwa19saXZlX0JBMjdBRDEzRDUxREE2RkInKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtLnVzZXIudXBkYXRlRW1haWwoeyBlbWFpbDogbmV3RW1haWwsIHNob3dVSTogZmFsc2UgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIgaW5zdGFuY2VvZiBSUENFcnJvcikge1xuICAgICAgc3dpdGNoIChlcnIuY29kZSkge1xuICAgICAgICBjYXNlIFJQQ0Vycm9yQ29kZS5VcGRhdGVFbWFpbEZhaWxlZDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuICBjb25zdCBsb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbWFnaWMudXNlci5sb2dvdXQoKS50aGVuKCgpID0+IHtcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9KTtcbiAgfSwgW1JvdXRlcl0pO1xuXG4gIFxuICAvLyBjb25zb2xlLmxvZyhtYXR0ZXIoJy0tLVxcbnRpdGxlOiBGcm9udCBNYXR0ZXJcXG4tLS1cXG5UaGlzIGlzIGNvbnRlbnQuJykpO1xuXG4gIHJldHVybiB1c2VyTWV0YWRhdGEgPyAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8aDE+Q3VycmVudCB1c2VyOiB7dXNlck1ldGFkYXRhLmVtYWlsfTwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx0ZXh0Pklzc3Vlcjp7dXNlck1ldGFkYXRhLmlzc3Vlcn08L3RleHQ+PGJyLz5cbiAgICAgICAgPHRleHQ+UHVibGljIEFkZHJlc3M6e3VzZXJNZXRhZGF0YS5wdWJsaWNBZGRyZXNzfTwvdGV4dD48YnIvPlxuICAgICAgICA8dGV4dD5lbWFpbDp7dXNlck1ldGFkYXRhLmVtYWlsfTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGlucHV0IG9uQ2hhbmdlPXt2YWwgPT4gc2V0TmV3RW1haWwodmFsLnRhcmdldC52YWx1ZSl9IG5hbWU9XCJwaG9uZVwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJwaG9uZVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBwbGFjZWhvbGRlcj1cIkNoYW5nZSBFbWFpbFwiIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZUVtYWlsfSB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxuICAgICAgPGg0IHNpemU9XCJ4bFwiIG1iPXs0fT5HcmF5IE1hdHRlcjwvaDQ+XG4gICAgICAgIDx0ZXh0PkRhdGE6IHtmaWxlLmRhdGEudGl0bGV9PC90ZXh0PiAgXG4gICAgICAgIDx0ZXh0PkNvbnRlbnQ6IHtmaWxlLmNvbnRlbnR9PC90ZXh0PlxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxMb2FkaW5nIC8+XG4gICk7XG59XG5cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBhbGxQb3N0c0RhdGFcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

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