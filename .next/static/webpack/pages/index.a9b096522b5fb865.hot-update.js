"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/User */ \"./components/User.js\");\n/* harmony import */ var _components_Games__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Games */ \"./components/Games.js\");\n/* harmony import */ var _components_GameStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/GameStats */ \"./components/GameStats.js\");\n/* harmony import */ var _components_Recent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Recent */ \"./components/Recent.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { user , recent , games  } = param;\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [achievements, setAchievements] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        userData: user\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        recentList: recent,\n                        setShowStats: setToggle,\n                        setStats: setStats,\n                        setAchievements: setAchievements\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    toggle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameStats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        toggle: setToggle,\n                        stats: stats,\n                        achievements: achievements\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: toggle ? {\n                            display: \"none\"\n                        } : {\n                            display: \"block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Games__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            gamesList: games,\n                            setShowStats: setToggle,\n                            setStats: setStats,\n                            setAchievements: setAchievements\n                        }, void 0, false, {\n                            fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\pages\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dNHJwU0rKmwzbyJ7cNqfl0B0+Og=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDSTtBQUNFO0FBQ1E7QUFDTjs7QUFFMUIsU0FBU0ssS0FBSyxLQUF1QixFQUFFO1FBQXpCLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FBdkI7O0lBQzNCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3ZDLE1BQU0sQ0FBQ2EsY0FBY0MsZ0JBQWdCLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFFckQscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNmLHdEQUFJQTt3QkFBQ2dCLFVBQVVYOzs7Ozs7a0NBQ2hCLDhEQUFDRiwwREFBTUE7d0JBQ0xjLFlBQVlYO3dCQUNaWSxjQUFjVDt3QkFDZEUsVUFBVUE7d0JBQ1ZFLGlCQUFpQkE7Ozs7Ozs7Ozs7OzswQkFHckIsOERBQUNDO2dCQUFJQyxXQUFVOztvQkFDWlAsd0JBQ0MsOERBQUNOLDZEQUFTQTt3QkFDUk0sUUFBUUM7d0JBQ1JDLE9BQU9BO3dCQUNQRSxjQUFjQTs7Ozs7O2tDQUdsQiw4REFBQ0U7d0JBQUlLLE9BQU9YLFNBQVM7NEJBQUVZLFNBQVM7d0JBQU8sSUFBSTs0QkFBRUEsU0FBUzt3QkFBUSxDQUFDO2tDQUM3RCw0RUFBQ25CLHlEQUFLQTs0QkFDSm9CLFdBQVdkOzRCQUNYVyxjQUFjVDs0QkFDZEUsVUFBVUE7NEJBQ1ZFLGlCQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCLENBQUM7R0FuQ3VCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiQC9jb21wb25lbnRzL1VzZXJcIjtcbmltcG9ydCBHYW1lcyBmcm9tIFwiQC9jb21wb25lbnRzL0dhbWVzXCI7XG5pbXBvcnQgR2FtZVN0YXRzIGZyb20gXCJAL2NvbXBvbmVudHMvR2FtZVN0YXRzXCI7XG5pbXBvcnQgUmVjZW50IGZyb20gXCJAL2NvbXBvbmVudHMvUmVjZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB1c2VyLCByZWNlbnQsIGdhbWVzIH0pIHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FjaGlldmVtZW50cywgc2V0QWNoaWV2ZW1lbnRzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICA8VXNlciB1c2VyRGF0YT17dXNlcn0gLz5cbiAgICAgICAgPFJlY2VudFxuICAgICAgICAgIHJlY2VudExpc3Q9e3JlY2VudH1cbiAgICAgICAgICBzZXRTaG93U3RhdHM9e3NldFRvZ2dsZX1cbiAgICAgICAgICBzZXRTdGF0cz17c2V0U3RhdHN9XG4gICAgICAgICAgc2V0QWNoaWV2ZW1lbnRzPXtzZXRBY2hpZXZlbWVudHN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICB7dG9nZ2xlICYmIChcbiAgICAgICAgICA8R2FtZVN0YXRzXG4gICAgICAgICAgICB0b2dnbGU9e3NldFRvZ2dsZX1cbiAgICAgICAgICAgIHN0YXRzPXtzdGF0c31cbiAgICAgICAgICAgIGFjaGlldmVtZW50cz17YWNoaWV2ZW1lbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgc3R5bGU9e3RvZ2dsZSA/IHsgZGlzcGxheTogXCJub25lXCIgfSA6IHsgZGlzcGxheTogXCJibG9ja1wiIH19PlxuICAgICAgICAgIDxHYW1lc1xuICAgICAgICAgICAgZ2FtZXNMaXN0PXtnYW1lc31cbiAgICAgICAgICAgIHNldFNob3dTdGF0cz17c2V0VG9nZ2xlfVxuICAgICAgICAgICAgc2V0U3RhdHM9e3NldFN0YXRzfVxuICAgICAgICAgICAgc2V0QWNoaWV2ZW1lbnRzPXtzZXRBY2hpZXZlbWVudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1c2VyUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkuc3RlYW1wb3dlcmVkLmNvbS9JU3RlYW1Vc2VyL0dldFBsYXllclN1bW1hcmllcy92MDAwMi8/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RFQU1fQVBJX0tFWX0mc3RlYW1pZHM9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVEVBTV9JRH1gXG4gICk7XG4gIGNvbnN0IHVzZXJKU09OID0gYXdhaXQgdXNlclJlcy5qc29uKCk7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlckpTT05bXCJyZXNwb25zZVwiXVtcInBsYXllcnNcIl1bMF07XG5cbiAgY29uc3QgcmVjZW50UmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkuc3RlYW1wb3dlcmVkLmNvbS9JUGxheWVyU2VydmljZS9HZXRSZWNlbnRseVBsYXllZEdhbWVzL3YwMDAxLz9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVEVBTV9BUElfS0VZfSZzdGVhbWlkPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RFQU1fSUR9JmZvcm1hdD1qc29uYFxuICApO1xuICBjb25zdCByZWNlbnRKU09OID0gYXdhaXQgcmVjZW50UmVzLmpzb24oKTtcbiAgY29uc3QgcmVjZW50RGF0YSA9IHJlY2VudEpTT05bXCJyZXNwb25zZVwiXVtcImdhbWVzXCJdO1xuXG4gIGNvbnN0IGdhbWVzUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkuc3RlYW1wb3dlcmVkLmNvbS9JUGxheWVyU2VydmljZS9HZXRPd25lZEdhbWVzL3YwMDAxLz9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVEVBTV9BUElfS0VZfSZzdGVhbWlkPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RFQU1fSUR9JmluY2x1ZGVfYXBwaW5mbz10cnVlJmZvcm1hdD1qc29uYFxuICApO1xuICBjb25zdCBnYW1lc0pTT04gPSBhd2FpdCBnYW1lc1Jlcy5qc29uKCk7XG4gIGNvbnN0IGdhbWVzRGF0YSA9IGdhbWVzSlNPTltcInJlc3BvbnNlXCJdW1wiZ2FtZXNcIl07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB1c2VyOiB1c2VyRGF0YSwgcmVjZW50OiByZWNlbnREYXRhLCBnYW1lczogZ2FtZXNEYXRhIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVXNlciIsIkdhbWVzIiwiR2FtZVN0YXRzIiwiUmVjZW50IiwiSG9tZSIsInVzZXIiLCJyZWNlbnQiLCJnYW1lcyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInN0YXRzIiwic2V0U3RhdHMiLCJhY2hpZXZlbWVudHMiLCJzZXRBY2hpZXZlbWVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1c2VyRGF0YSIsInJlY2VudExpc3QiLCJzZXRTaG93U3RhdHMiLCJzdHlsZSIsImRpc3BsYXkiLCJnYW1lc0xpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});