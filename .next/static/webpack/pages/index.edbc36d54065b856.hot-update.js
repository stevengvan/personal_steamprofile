/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Games.js":
/*!*****************************!*\
  !*** ./components/Games.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/User */ \"./components/User.js\");\n/* harmony import */ var _components_Games__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Games */ \"./components/Games.js\");\n/* harmony import */ var _components_Games__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Games__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_GameStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/GameStats */ \"./components/GameStats.js\");\n/* harmony import */ var _components_Recent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Recent */ \"./components/Recent.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { user , recent  } = param;\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [achievements, setAchievements] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        userData: user\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        recentList: recent,\n                        setShowStats: setToggle,\n                        setStats: setStats,\n                        setAchievements: setAchievements\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    toggle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameStats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        toggle: setToggle,\n                        stats: stats,\n                        achievements: achievements\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: toggle ? {\n                            display: \"none\"\n                        } : {\n                            height: \"inherit\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Games__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            setShowStats: setToggle,\n                            setStats: setStats,\n                            setAchievements: setAchievements\n                        }, void 0, false, {\n                            fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dNHJwU0rKmwzbyJ7cNqfl0B0+Og=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0k7QUFDRTtBQUNRO0FBQ047O0FBRTFCLFNBQVNLLEtBQUssS0FBZ0IsRUFBRTtRQUFsQixFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRSxHQUFoQjs7SUFDM0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDdkMsTUFBTSxDQUFDWSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUMsSUFBSTtJQUVyRCxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2Qsd0RBQUlBO3dCQUFDZSxVQUFVVjs7Ozs7O2tDQUNoQiw4REFBQ0YsMERBQU1BO3dCQUNMYSxZQUFZVjt3QkFDWlcsY0FBY1Q7d0JBQ2RFLFVBQVVBO3dCQUNWRSxpQkFBaUJBOzs7Ozs7Ozs7Ozs7MEJBR3JCLDhEQUFDQztnQkFBSUMsV0FBVTs7b0JBQ1pQLHdCQUNDLDhEQUFDTCw2REFBU0E7d0JBQ1JLLFFBQVFDO3dCQUNSQyxPQUFPQTt3QkFDUEUsY0FBY0E7Ozs7OztrQ0FHbEIsOERBQUNFO3dCQUFJSyxPQUFPWCxTQUFTOzRCQUFFWSxTQUFTO3dCQUFPLElBQUk7NEJBQUVDLFFBQVE7d0JBQVUsQ0FBQztrQ0FDOUQsNEVBQUNuQiwwREFBS0E7NEJBQ0pnQixjQUFjVDs0QkFDZEUsVUFBVUE7NEJBQ1ZFLGlCQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCLENBQUM7R0FsQ3VCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiQC9jb21wb25lbnRzL1VzZXJcIjtcbmltcG9ydCBHYW1lcyBmcm9tIFwiQC9jb21wb25lbnRzL0dhbWVzXCI7XG5pbXBvcnQgR2FtZVN0YXRzIGZyb20gXCJAL2NvbXBvbmVudHMvR2FtZVN0YXRzXCI7XG5pbXBvcnQgUmVjZW50IGZyb20gXCJAL2NvbXBvbmVudHMvUmVjZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB1c2VyLCByZWNlbnQgfSkge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWNoaWV2ZW1lbnRzLCBzZXRBY2hpZXZlbWVudHNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDxVc2VyIHVzZXJEYXRhPXt1c2VyfSAvPlxuICAgICAgICA8UmVjZW50XG4gICAgICAgICAgcmVjZW50TGlzdD17cmVjZW50fVxuICAgICAgICAgIHNldFNob3dTdGF0cz17c2V0VG9nZ2xlfVxuICAgICAgICAgIHNldFN0YXRzPXtzZXRTdGF0c31cbiAgICAgICAgICBzZXRBY2hpZXZlbWVudHM9e3NldEFjaGlldmVtZW50c31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIHt0b2dnbGUgJiYgKFxuICAgICAgICAgIDxHYW1lU3RhdHNcbiAgICAgICAgICAgIHRvZ2dsZT17c2V0VG9nZ2xlfVxuICAgICAgICAgICAgc3RhdHM9e3N0YXRzfVxuICAgICAgICAgICAgYWNoaWV2ZW1lbnRzPXthY2hpZXZlbWVudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBzdHlsZT17dG9nZ2xlID8geyBkaXNwbGF5OiBcIm5vbmVcIiB9IDogeyBoZWlnaHQ6IFwiaW5oZXJpdFwiIH19PlxuICAgICAgICAgIDxHYW1lc1xuICAgICAgICAgICAgc2V0U2hvd1N0YXRzPXtzZXRUb2dnbGV9XG4gICAgICAgICAgICBzZXRTdGF0cz17c2V0U3RhdHN9XG4gICAgICAgICAgICBzZXRBY2hpZXZlbWVudHM9e3NldEFjaGlldmVtZW50c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVzZXJSZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5zdGVhbXBvd2VyZWQuY29tL0lTdGVhbVVzZXIvR2V0UGxheWVyU3VtbWFyaWVzL3YwMDAyLz9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVEVBTV9BUElfS0VZfSZzdGVhbWlkcz0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NURUFNX0lEfWBcbiAgKTtcbiAgY29uc3QgdXNlckpTT04gPSBhd2FpdCB1c2VyUmVzLmpzb24oKTtcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VySlNPTltcInJlc3BvbnNlXCJdW1wicGxheWVyc1wiXVswXTtcblxuICBjb25zdCByZWNlbnRSZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5zdGVhbXBvd2VyZWQuY29tL0lQbGF5ZXJTZXJ2aWNlL0dldFJlY2VudGx5UGxheWVkR2FtZXMvdjAwMDEvP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NURUFNX0FQSV9LRVl9JnN0ZWFtaWQ9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVEVBTV9JRH0mZm9ybWF0PWpzb25gXG4gICk7XG4gIGNvbnN0IHJlY2VudEpTT04gPSBhd2FpdCByZWNlbnRSZXMuanNvbigpO1xuICBjb25zdCByZWNlbnREYXRhID0gcmVjZW50SlNPTltcInJlc3BvbnNlXCJdW1wiZ2FtZXNcIl07XG5cbiAgY29uc3QgZ2FtZXNSZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5zdGVhbXBvd2VyZWQuY29tL0lQbGF5ZXJTZXJ2aWNlL0dldE93bmVkR2FtZXMvdjAwMDEvP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NURUFNX0FQSV9LRVl9JnN0ZWFtaWQ9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVEVBTV9JRH0maW5jbHVkZV9hcHBpbmZvPXRydWUmZm9ybWF0PWpzb25gXG4gICk7XG4gIGNvbnN0IGdhbWVzSlNPTiA9IGF3YWl0IGdhbWVzUmVzLmpzb24oKTtcbiAgY29uc3QgZ2FtZXNEYXRhID0gZ2FtZXNKU09OO1xuICBjb25zb2xlLmxvZyhnYW1lc0RhdGFbXCJyZXNwb25zZVwiXVtcImdhbWVzXCJdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHVzZXI6IHVzZXJEYXRhLCByZWNlbnQ6IHJlY2VudERhdGEgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJVc2VyIiwiR2FtZXMiLCJHYW1lU3RhdHMiLCJSZWNlbnQiLCJIb21lIiwidXNlciIsInJlY2VudCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInN0YXRzIiwic2V0U3RhdHMiLCJhY2hpZXZlbWVudHMiLCJzZXRBY2hpZXZlbWVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1c2VyRGF0YSIsInJlY2VudExpc3QiLCJzZXRTaG93U3RhdHMiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});