webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gray-matter */ \"./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _magic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../magic */ \"./magic.js\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! magic-sdk */ \"./node_modules/magic-sdk/dist/es/index.js\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/cody/MarkTraining/mark-magic-sample/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _jsxDEV2;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      userMetadata = _useState[0],\n      setUserMetadata = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      newEmail = _useState2[0],\n      setNewEmail = _useState2[1];\n\n  console.log(newEmail);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    _magic__WEBPACK_IMPORTED_MODULE_7__[\"magic\"].user.isLoggedIn().then(function (magicIsLoggedIn) {\n      if (magicIsLoggedIn) {\n        _magic__WEBPACK_IMPORTED_MODULE_7__[\"magic\"].user.getMetadata().then(setUserMetadata);\n      } else {\n        // If no user is logged in, redirect to `/login`\n        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/login');\n      }\n    });\n  }, []);\n  /**\n   * Perform logout action via Magic.\n   */\n\n  var handleChangeEmail = /*#__PURE__*/function () {\n    var _ref = Object(_Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n      var m;\n      return _Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              m = new magic_sdk__WEBPACK_IMPORTED_MODULE_8__[\"Magic\"]('pk_live_BA27AD13D51DA6FB');\n              _context.prev = 1;\n              _context.next = 4;\n              return m.user.updateEmail({\n                email: newEmail,\n                showUI: false\n              });\n\n            case 4:\n              _context.next = 13;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](1);\n\n              if (!(_context.t0 instanceof magic_sdk__WEBPACK_IMPORTED_MODULE_8__[\"RPCError\"])) {\n                _context.next = 13;\n                break;\n              }\n\n              _context.t1 = _context.t0.code;\n              _context.next = _context.t1 === magic_sdk__WEBPACK_IMPORTED_MODULE_8__[\"RPCErrorCode\"].UpdateEmailFailed ? 12 : 13;\n              break;\n\n            case 12:\n              return _context.abrupt(\"break\", 13);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 6]]);\n    }));\n\n    return function handleChangeEmail() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var logout = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])(function () {\n    _magic__WEBPACK_IMPORTED_MODULE_7__[\"magic\"].user.logout().then(function () {\n      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/login');\n    });\n  }, [next_router__WEBPACK_IMPORTED_MODULE_6___default.a]);\n  console.log();\n  return userMetadata ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        children: [\"Current user: \", userMetadata.email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: logout,\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"text\", {\n        children: [\"Issuer:\", userMetadata.issuer]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 50\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"text\", {\n        children: [\"Public Address:\", userMetadata.publicAddress]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 65\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"text\", {\n        children: [\"email:\", userMetadata.email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", (_jsxDEV2 = {\n      onChange: function onChange(val) {\n        return setNewEmail(val.target.value);\n      },\n      name: \"phone\",\n      type: \"email\"\n    }, Object(_Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"name\", \"phone\"), Object(_Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"required\", \"required\"), Object(_Users_cody_MarkTraining_mark_magic_sample_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"placeholder\", \"Change Email\"), _jsxDEV2), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      onClick: handleChangeEmail,\n      type: \"submit\",\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"text\", {\n      children: Object(gray_matter__WEBPACK_IMPORTED_MODULE_5__[\"matter\"])('---\\ntitle: Front Matter\\n---\\nThis is content.')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_loading__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n} // export async function getStaticProps() {\n//   const allPostsData = getSortedPostsData()\n//   return {\n//     props: {\n//       allPostsData\n//     }\n//   }\n// }\n\n_s(Index, \"yO1+JcIgMRgUmKhuXRgGHQ1n6RQ=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwidXNlck1ldGFkYXRhIiwic2V0VXNlck1ldGFkYXRhIiwibmV3RW1haWwiLCJzZXROZXdFbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJtYWdpYyIsInVzZXIiLCJpc0xvZ2dlZEluIiwidGhlbiIsIm1hZ2ljSXNMb2dnZWRJbiIsImdldE1ldGFkYXRhIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUNoYW5nZUVtYWlsIiwibSIsIk1hZ2ljIiwidXBkYXRlRW1haWwiLCJlbWFpbCIsInNob3dVSSIsIlJQQ0Vycm9yIiwiY29kZSIsIlJQQ0Vycm9yQ29kZSIsIlVwZGF0ZUVtYWlsRmFpbGVkIiwibG9nb3V0IiwidXNlQ2FsbGJhY2siLCJpc3N1ZXIiLCJwdWJsaWNBZGRyZXNzIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJtYXR0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLEVBRGxCO0FBQUEsTUFDdkJDLFlBRHVCO0FBQUEsTUFDVEMsZUFEUzs7QUFBQSxtQkFFRUYsc0RBQVEsQ0FBQyxFQUFELENBRlY7QUFBQSxNQUV2QkcsUUFGdUI7QUFBQSxNQUViQyxXQUZhOztBQUc5QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFFQUkseURBQVMsQ0FBQyxZQUFNO0FBRWRDLGdEQUFLLENBQUNDLElBQU4sQ0FBV0MsVUFBWCxHQUF3QkMsSUFBeEIsQ0FBNkIsVUFBQ0MsZUFBRCxFQUFxQjtBQUNoRCxVQUFJQSxlQUFKLEVBQXFCO0FBQ25CSixvREFBSyxDQUFDQyxJQUFOLENBQVdJLFdBQVgsR0FBeUJGLElBQXpCLENBQThCVCxlQUE5QjtBQUNE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ZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge21hdHRlcn0gZnJvbSAnZ3JheS1tYXR0ZXInXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IG1hZ2ljIH0gZnJvbSAnLi4vbWFnaWMnO1xuaW1wb3J0IHsgTWFnaWMsIFJQQ0Vycm9yLCBSUENFcnJvckNvZGUgfSBmcm9tIFwibWFnaWMtc2RrXCJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFt1c2VyTWV0YWRhdGEsIHNldFVzZXJNZXRhZGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbmV3RW1haWwsIHNldE5ld0VtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zb2xlLmxvZyhuZXdFbWFpbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgbWFnaWMudXNlci5pc0xvZ2dlZEluKCkudGhlbigobWFnaWNJc0xvZ2dlZEluKSA9PiB7XG4gICAgICBpZiAobWFnaWNJc0xvZ2dlZEluKSB7XG4gICAgICAgIG1hZ2ljLnVzZXIuZ2V0TWV0YWRhdGEoKS50aGVuKHNldFVzZXJNZXRhZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBubyB1c2VyIGlzIGxvZ2dlZCBpbiwgcmVkaXJlY3QgdG8gYC9sb2dpbmBcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gbG9nb3V0IGFjdGlvbiB2aWEgTWFnaWMuXG4gICAqL1xuXG5jb25zdCBoYW5kbGVDaGFuZ2VFbWFpbCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbSA9IG5ldyBNYWdpYygncGtfbGl2ZV9CQTI3QUQxM0Q1MURBNkZCJyk7XG4gIHRyeSB7XG4gICAgYXdhaXQgbS51c2VyLnVwZGF0ZUVtYWlsKHsgZW1haWw6IG5ld0VtYWlsLCBzaG93VUk6IGZhbHNlIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgUlBDRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyLmNvZGUpIHtcbiAgICAgICAgY2FzZSBSUENFcnJvckNvZGUuVXBkYXRlRW1haWxGYWlsZWQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiAgY29uc3QgbG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG1hZ2ljLnVzZXIubG9nb3V0KCkudGhlbigoKSA9PiB7XG4gICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgfSk7XG4gIH0sIFtSb3V0ZXJdKTtcblxuICBcbiAgY29uc29sZS5sb2coKTtcblxuICByZXR1cm4gdXNlck1ldGFkYXRhID8gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgxPkN1cnJlbnQgdXNlcjoge3VzZXJNZXRhZGF0YS5lbWFpbH08L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+TG9nb3V0PC9idXR0b24+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8dGV4dD5Jc3N1ZXI6e3VzZXJNZXRhZGF0YS5pc3N1ZXJ9PC90ZXh0Pjxici8+XG4gICAgICAgIDx0ZXh0PlB1YmxpYyBBZGRyZXNzOnt1c2VyTWV0YWRhdGEucHVibGljQWRkcmVzc308L3RleHQ+PGJyLz5cbiAgICAgICAgPHRleHQ+ZW1haWw6e3VzZXJNZXRhZGF0YS5lbWFpbH08L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dCBvbkNoYW5nZT17dmFsID0+IHNldE5ld0VtYWlsKHZhbC50YXJnZXQudmFsdWUpfSBuYW1lPVwicGhvbmVcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwicGhvbmVcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgcGxhY2Vob2xkZXI9XCJDaGFuZ2UgRW1haWxcIiAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VFbWFpbH0gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDx0ZXh0PnttYXR0ZXIoJy0tLVxcbnRpdGxlOiBGcm9udCBNYXR0ZXJcXG4tLS1cXG5UaGlzIGlzIGNvbnRlbnQuJyl9PC90ZXh0PlxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxMb2FkaW5nIC8+XG4gICk7XG59XG5cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBhbGxQb3N0c0RhdGFcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})