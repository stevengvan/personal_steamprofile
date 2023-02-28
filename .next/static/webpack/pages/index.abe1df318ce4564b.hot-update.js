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

/***/ "./components/Recent.js":
/*!******************************!*\
  !*** ./components/Recent.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Recent(param) {\n    let { recentList , setShowStats , setStats , setAchievements  } = param;\n    _s();\n    const [recent, setRecent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(recentList);\n    const [gameID, setGameID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const achievementsInit = async (gameID)=>{\n        const response = await fetch(\"http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=\".concat(gameID, \"&key=\").concat(\"B2F7506FDF30B83C99403B3D8A3C39E6\", \"&steamid=\").concat(\"76561198343185128\"));\n        const data = await response.json();\n        console.log(data);\n    // setRecent(response);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"recentGames\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"recentHeader\",\n                children: \"RECENTLY PLAYED\"\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Recent.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gameList\",\n                children: recent && recent.slice(0, 10).map((game, _)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: gameID === game.appid ? \"gameConSelected\" : \"gameCon\",\n                        onClick: ()=>{\n                            setGameID(game.appid);\n                            setStats(game);\n                            achievementsInit(game.appid);\n                            setShowStats(true);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"gameImg\",\n                                alt: game.name,\n                                src: \" http://media.steampowered.com/steamcommunity/public/images/apps/\".concat(game.appid, \"/\").concat(game.img_icon_url, \".jpg\")\n                            }, void 0, false, {\n                                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Recent.js\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: game.name.slice(0, 30)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Recent.js\",\n                                lineNumber: 40,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, game.appid, true, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Recent.js\",\n                        lineNumber: 23,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Recent.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Recent.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Recent, \"ZELZL33RnDxqbad4VpyOiZF9Dec=\");\n_c = Recent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Recent);\nvar _c;\n$RefreshReg$(_c, \"Recent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY2VudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBRTVDLFNBQVNFLE9BQU8sS0FBdUQsRUFBRTtRQUF6RCxFQUFFQyxXQUFVLEVBQUVDLGFBQVksRUFBRUMsU0FBUSxFQUFFQyxnQkFBZSxFQUFFLEdBQXZEOztJQUNkLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQ0c7SUFDckMsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1XLG1CQUFtQixPQUFPRixTQUFXO1FBQ3pDLE1BQU1HLFdBQVcsTUFBTUMsTUFDckIsZ0ZBQThGQyxPQUFkTCxRQUFPLFNBQXdESyxPQUFqREEsa0NBQXFDLEVBQUMsYUFBNEMsT0FBakNBLG1CQUFnQztRQUVqTCxNQUFNSSxPQUFPLE1BQU1OLFNBQVNPLElBQUk7UUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWix1QkFBdUI7SUFDekI7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFlOzs7Ozs7MEJBQzdCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWmhCLFVBQ0NBLE9BQU9rQixLQUFLLENBQUMsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFBTTtvQkFDbkMscUJBQ0UsOERBQUNOO3dCQUVDQyxXQUNFZCxXQUFXa0IsS0FBS0UsS0FBSyxHQUFHLG9CQUFvQixTQUFTO3dCQUV2REMsU0FBUyxJQUFNOzRCQUNicEIsVUFBVWlCLEtBQUtFLEtBQUs7NEJBQ3BCeEIsU0FBU3NCOzRCQUNUaEIsaUJBQWlCZ0IsS0FBS0UsS0FBSzs0QkFDM0J6QixhQUFhLElBQUk7d0JBQ25COzswQ0FFQSw4REFBQzJCO2dDQUNDUixXQUFVO2dDQUNWUyxLQUFLTCxLQUFLTSxJQUFJO2dDQUNkQyxLQUFLLG9FQUFrRlAsT0FBZEEsS0FBS0UsS0FBSyxFQUFDLEtBQXFCLE9BQWxCRixLQUFLUSxZQUFZLEVBQUM7Ozs7OzswQ0FFM0csOERBQUNDOzBDQUFHVCxLQUFLTSxJQUFJLENBQUNSLEtBQUssQ0FBQyxHQUFHOzs7Ozs7O3VCQWhCbEJFLEtBQUtFLEtBQUs7Ozs7O2dCQW1CckI7Ozs7Ozs7Ozs7OztBQUlWO0dBNUNTM0I7S0FBQUE7QUE4Q1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNlbnQuanM/MTE2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBSZWNlbnQoeyByZWNlbnRMaXN0LCBzZXRTaG93U3RhdHMsIHNldFN0YXRzLCBzZXRBY2hpZXZlbWVudHMgfSkge1xyXG4gIGNvbnN0IFtyZWNlbnQsIHNldFJlY2VudF0gPSB1c2VTdGF0ZShyZWNlbnRMaXN0KTtcclxuICBjb25zdCBbZ2FtZUlELCBzZXRHYW1lSURdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFjaGlldmVtZW50c0luaXQgPSBhc3luYyAoZ2FtZUlEKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS5zdGVhbXBvd2VyZWQuY29tL0lTdGVhbVVzZXJTdGF0cy9HZXRVc2VyU3RhdHNGb3JHYW1lL3YwMDAyLz9hcHBpZD0ke2dhbWVJRH0ma2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RFQU1fQVBJX0tFWX0mc3RlYW1pZD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NURUFNX0lEfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvLyBzZXRSZWNlbnQocmVzcG9uc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudEdhbWVzXCI+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJyZWNlbnRIZWFkZXJcIj5SRUNFTlRMWSBQTEFZRUQ8L2g1PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVMaXN0XCI+XHJcbiAgICAgICAge3JlY2VudCAmJlxyXG4gICAgICAgICAgcmVjZW50LnNsaWNlKDAsIDEwKS5tYXAoKGdhbWUsIF8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2dhbWUuYXBwaWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBnYW1lSUQgPT09IGdhbWUuYXBwaWQgPyBcImdhbWVDb25TZWxlY3RlZFwiIDogXCJnYW1lQ29uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0R2FtZUlEKGdhbWUuYXBwaWQpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRTdGF0cyhnYW1lKTtcclxuICAgICAgICAgICAgICAgICAgYWNoaWV2ZW1lbnRzSW5pdChnYW1lLmFwcGlkKTtcclxuICAgICAgICAgICAgICAgICAgc2V0U2hvd1N0YXRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdhbWVJbWdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2dhbWUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtgIGh0dHA6Ly9tZWRpYS5zdGVhbXBvd2VyZWQuY29tL3N0ZWFtY29tbXVuaXR5L3B1YmxpYy9pbWFnZXMvYXBwcy8ke2dhbWUuYXBwaWR9LyR7Z2FtZS5pbWdfaWNvbl91cmx9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHA+e2dhbWUubmFtZS5zbGljZSgwLCAzMCl9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjZW50O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWNlbnQiLCJyZWNlbnRMaXN0Iiwic2V0U2hvd1N0YXRzIiwic2V0U3RhdHMiLCJzZXRBY2hpZXZlbWVudHMiLCJyZWNlbnQiLCJzZXRSZWNlbnQiLCJnYW1lSUQiLCJzZXRHYW1lSUQiLCJhY2hpZXZlbWVudHNJbml0IiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVEVBTV9BUElfS0VZIiwiTkVYVF9QVUJMSUNfU1RFQU1fSUQiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsInNsaWNlIiwibWFwIiwiZ2FtZSIsIl8iLCJhcHBpZCIsIm9uQ2xpY2siLCJpbWciLCJhbHQiLCJuYW1lIiwic3JjIiwiaW1nX2ljb25fdXJsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Recent.js\n"));

/***/ })

});