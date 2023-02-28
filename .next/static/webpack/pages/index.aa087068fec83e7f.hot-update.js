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

/***/ "./components/Games.js":
/*!*****************************!*\
  !*** ./components/Games.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Games(param) {\n    let { gamesList , setShowStats , setStats , setAchievements  } = param;\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(gamesList);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [showIndices, setShowindices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [indexmodif, setIndexmodif] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const handleResize = ()=>{\n        if (window.innerWidth < 400) {\n            setIndexmodif(20);\n        } else if (window.innerWidth < 700) {\n            setIndexmodif(25);\n        } else if (window.innerWidth < 1200) {\n            setIndexmodif(30);\n        } else {\n            setIndexmodif(60);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleResize);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gamesCon\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"contentHeader\",\n                children: \"GAMES\"\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list\",\n                children: games && games.slice(index, index + indexmodif).map((game, _)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"gameIcon\",\n                        src: \"http://media.steampowered.com/steamcommunity/public/images/apps/\".concat(game.appid, \"/\").concat(game.img_icon_url, \".jpg\"),\n                        onClick: ()=>{\n                            setStats(game);\n                            achievementsInit(game.appid);\n                            setShowStats(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: games && index === 0,\n                        onClick: ()=>{\n                            setIndex(index - indexmodif);\n                            setPage(page - 1);\n                        },\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: showIndices ? \"indexListPressed\" : \"indexList\",\n                        onClick: ()=>{\n                            setShowindices(!showIndices);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: page\n                            }, void 0, false, {\n                                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            showIndices === true && games && games.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"indices\",\n                                children: Array.from(Array(Math.ceil(games.length / indexmodif)).keys()).map((_, idx)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"index\",\n                                        onClick: ()=>{\n                                            setIndex(indexmodif * idx);\n                                            setPage(idx + 1);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: idx + 1\n                                        }, idx, false, {\n                                            fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: games && index + indexmodif >= games.length,\n                        onClick: ()=>{\n                            setIndex(index + indexmodif);\n                            setPage(page + 1);\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Games, \"4dxAVmuFDR9TK3TsTMgrHT1/z0s=\");\n_c = Games;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Games);\nvar _c;\n$RefreshReg$(_c, \"Games\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VDtHQS9GU1Q7S0FBQUE7QUFpR1QsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lcy5qcz9hZDNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEdhbWVzKHsgZ2FtZXNMaXN0LCBzZXRTaG93U3RhdHMsIHNldFN0YXRzLCBzZXRBY2hpZXZlbWVudHMgfSkge1xyXG4gIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGUoZ2FtZXNMaXN0KTtcclxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzaG93SW5kaWNlcywgc2V0U2hvd2luZGljZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbmRleG1vZGlmLCBzZXRJbmRleG1vZGlmXSA9IHVzZVN0YXRlKDIwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNDAwKSB7XHJcbiAgICAgIHNldEluZGV4bW9kaWYoMjApO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDcwMCkge1xyXG4gICAgICBzZXRJbmRleG1vZGlmKDI1KTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMjAwKSB7XHJcbiAgICAgIHNldEluZGV4bW9kaWYoMzApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW5kZXhtb2RpZig2MCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVzQ29uXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250ZW50SGVhZGVyXCI+R0FNRVM8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAge2dhbWVzICYmXHJcbiAgICAgICAgICBnYW1lcy5zbGljZShpbmRleCwgaW5kZXggKyBpbmRleG1vZGlmKS5tYXAoKGdhbWUsIF8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnYW1lSWNvblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbWVkaWEuc3RlYW1wb3dlcmVkLmNvbS9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2FwcHMvJHtnYW1lLmFwcGlkfS8ke2dhbWUuaW1nX2ljb25fdXJsfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTdGF0cyhnYW1lKTtcclxuICAgICAgICAgICAgICAgICAgYWNoaWV2ZW1lbnRzSW5pdChnYW1lLmFwcGlkKTtcclxuICAgICAgICAgICAgICAgICAgc2V0U2hvd1N0YXRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2dhbWVzICYmIGluZGV4ID09PSAwfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCAtIGluZGV4bW9kaWYpO1xyXG4gICAgICAgICAgICBzZXRQYWdlKHBhZ2UgLSAxKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQmFja1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3Nob3dJbmRpY2VzID8gXCJpbmRleExpc3RQcmVzc2VkXCIgOiBcImluZGV4TGlzdFwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTaG93aW5kaWNlcyghc2hvd0luZGljZXMpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj57cGFnZX08L3NwYW4+XHJcblxyXG4gICAgICAgICAge3Nob3dJbmRpY2VzID09PSB0cnVlICYmIGdhbWVzICYmIGdhbWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGljZXNcIj5cclxuICAgICAgICAgICAgICB7QXJyYXkuZnJvbShcclxuICAgICAgICAgICAgICAgIEFycmF5KE1hdGguY2VpbChnYW1lcy5sZW5ndGggLyBpbmRleG1vZGlmKSkua2V5cygpXHJcbiAgICAgICAgICAgICAgKS5tYXAoKF8sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChpbmRleG1vZGlmICogaWR4KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoaWR4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGtleT17aWR4fT57aWR4ICsgMX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17Z2FtZXMgJiYgaW5kZXggKyBpbmRleG1vZGlmID49IGdhbWVzLmxlbmd0aH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXggKyBpbmRleG1vZGlmKTtcclxuICAgICAgICAgICAgc2V0UGFnZShwYWdlICsgMSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5leHRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lcztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2FtZXMiLCJnYW1lc0xpc3QiLCJzZXRTaG93U3RhdHMiLCJzZXRTdGF0cyIsInNldEFjaGlldmVtZW50cyIsImdhbWVzIiwic2V0R2FtZXMiLCJpbmRleCIsInNldEluZGV4IiwicGFnZSIsInNldFBhZ2UiLCJzaG93SW5kaWNlcyIsInNldFNob3dpbmRpY2VzIiwiaW5kZXhtb2RpZiIsInNldEluZGV4bW9kaWYiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2xpY2UiLCJtYXAiLCJnYW1lIiwiXyIsImltZyIsInNyYyIsImFwcGlkIiwiaW1nX2ljb25fdXJsIiwib25DbGljayIsImFjaGlldmVtZW50c0luaXQiLCJidXR0b24iLCJkaXNhYmxlZCIsInNwYW4iLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJNYXRoIiwiY2VpbCIsImtleXMiLCJpZHgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Games.js\n"));

/***/ })

});