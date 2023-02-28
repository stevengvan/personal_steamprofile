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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Games(param) {\n    let { gamesList , setShowStats , setStats , setAchievements  } = param;\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(gamesList);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [showIndices, setShowindices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [indexmodif, setIndexmodif] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const smallHandler = ()=>setIndexmodif(20);\n    const medHandler = ()=>setIndexmodif(25);\n    const largeHandler = ()=>setIndexmodif(30);\n    const wideHandler = ()=>setIndexmodif(60);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const smallMedia = window.matchMedia(\"(max-width: 400px)\");\n        smallMedia.addEventListener(\"change\", smallHandler);\n        const medMedia = window.matchMedia(\"(max-width: 700px)\");\n        medMedia.addEventListener(\"change\", medHandler);\n        const largeMedia = window.matchMedia(\"(max-width: 1200px)\");\n        largeMedia.addEventListener(\"change\", largeHandler);\n        const wideMedia = window.matchMedia(\"(min-width: 1201px)\");\n        wideMedia.addEventListener(\"change\", wideHandler);\n        return ()=>{\n            smallMedia.removeEventListener(\"change\", smallHandler);\n            medMedia.removeEventListener(\"change\", medHandler);\n            largeMedia.removeEventListener(\"change\", largeHandler);\n            wideMedia.removeEventListener(\"change\", wideHandler);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gamesCon\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"contentHeader\",\n                children: \"GAMES\"\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list\",\n                children: games && games.slice(index, index + indexmodif).map((game, _)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"gameIcon\",\n                        src: \"http://media.steampowered.com/steamcommunity/public/images/apps/\".concat(game.appid, \"/\").concat(game.img_icon_url, \".jpg\"),\n                        onClick: ()=>{\n                            setStats(game);\n                            achievementsInit(game.appid);\n                            setShowStats(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 44,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: games && index === 0,\n                        onClick: ()=>{\n                            setIndex(index - indexmodif);\n                            setPage(page - 1);\n                        },\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: showIndices ? \"indexListPressed\" : \"indexList\",\n                        onClick: ()=>{\n                            setShowindices(!showIndices);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: page\n                            }, void 0, false, {\n                                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            showIndices === true && games && games.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"indices\",\n                                children: Array.from(Array(Math.ceil(games.length / indexmodif)).keys()).map((_, idx)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"index\",\n                                        onClick: ()=>{\n                                            setIndex(indexmodif * idx);\n                                            setPage(idx + 1);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: idx + 1\n                                        }, idx, false, {\n                                            fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 19\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: games && index + indexmodif >= games.length,\n                        onClick: ()=>{\n                            setIndex(index + indexmodif);\n                            setPage(page + 1);\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Games, \"4dxAVmuFDR9TK3TsTMgrHT1/z0s=\");\n_c = Games;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Games);\nvar _c;\n$RefreshReg$(_c, \"Games\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEI7d0NBQ0NDLFdBQVU7d0NBQ1ZVLFNBQVMsSUFBTTs0Q0FDYjlCLFNBQVNLLGFBQWFvQzs0Q0FDdEJ2QyxRQUFRdUMsTUFBTTt3Q0FDaEI7a0RBRUEsNEVBQUNDO3NEQUFhRCxNQUFNOzJDQUFaQTs7Ozs7Ozs7OztnQ0FHZDs7Ozs7Ozs7Ozs7O2tDQUtOLDhEQUFDVDt3QkFDQ0MsVUFBVXBDLFNBQVNFLFFBQVFNLGNBQWNSLE1BQU1zQyxNQUFNO3dCQUNyREwsU0FBUyxJQUFNOzRCQUNiOUIsU0FBU0QsUUFBUU07NEJBQ2pCSCxRQUFRRCxPQUFPO3dCQUNqQjtrQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0ExR1NUO0tBQUFBO0FBNEdULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZXMuanM/YWQzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBHYW1lcyh7IGdhbWVzTGlzdCwgc2V0U2hvd1N0YXRzLCBzZXRTdGF0cywgc2V0QWNoaWV2ZW1lbnRzIH0pIHtcclxuICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKGdhbWVzTGlzdCk7XHJcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2hvd0luZGljZXMsIHNldFNob3dpbmRpY2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5kZXhtb2RpZiwgc2V0SW5kZXhtb2RpZl0gPSB1c2VTdGF0ZSgyMCk7XHJcblxyXG4gIGNvbnN0IHNtYWxsSGFuZGxlciA9ICgpID0+IHNldEluZGV4bW9kaWYoMjApO1xyXG4gIGNvbnN0IG1lZEhhbmRsZXIgPSAoKSA9PiBzZXRJbmRleG1vZGlmKDI1KTtcclxuICBjb25zdCBsYXJnZUhhbmRsZXIgPSAoKSA9PiBzZXRJbmRleG1vZGlmKDMwKTtcclxuICBjb25zdCB3aWRlSGFuZGxlciA9ICgpID0+IHNldEluZGV4bW9kaWYoNjApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc21hbGxNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpO1xyXG4gICAgc21hbGxNZWRpYS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHNtYWxsSGFuZGxlcik7XHJcblxyXG4gICAgY29uc3QgbWVkTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDcwMHB4KVwiKTtcclxuICAgIG1lZE1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgbWVkSGFuZGxlcik7XHJcblxyXG4gICAgY29uc3QgbGFyZ2VNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTIwMHB4KVwiKTtcclxuICAgIGxhcmdlTWVkaWEuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBsYXJnZUhhbmRsZXIpO1xyXG5cclxuICAgIGNvbnN0IHdpZGVNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTIwMXB4KVwiKTtcclxuICAgIHdpZGVNZWRpYS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHdpZGVIYW5kbGVyKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzbWFsbE1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgc21hbGxIYW5kbGVyKTtcclxuICAgICAgbWVkTWVkaWEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBtZWRIYW5kbGVyKTtcclxuICAgICAgbGFyZ2VNZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGxhcmdlSGFuZGxlcik7XHJcbiAgICAgIHdpZGVNZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHdpZGVIYW5kbGVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lc0NvblwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiY29udGVudEhlYWRlclwiPkdBTUVTPC9oMT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgIHtnYW1lcyAmJlxyXG4gICAgICAgICAgZ2FtZXMuc2xpY2UoaW5kZXgsIGluZGV4ICsgaW5kZXhtb2RpZikubWFwKChnYW1lLCBfKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2FtZUljb25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL21lZGlhLnN0ZWFtcG93ZXJlZC5jb20vc3RlYW1jb21tdW5pdHkvcHVibGljL2ltYWdlcy9hcHBzLyR7Z2FtZS5hcHBpZH0vJHtnYW1lLmltZ19pY29uX3VybH0uanBnYH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U3RhdHMoZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgIGFjaGlldmVtZW50c0luaXQoZ2FtZS5hcHBpZCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNob3dTdGF0cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGRpc2FibGVkPXtnYW1lcyAmJiBpbmRleCA9PT0gMH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXggLSBpbmRleG1vZGlmKTtcclxuICAgICAgICAgICAgc2V0UGFnZShwYWdlIC0gMSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJhY2tcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzaG93SW5kaWNlcyA/IFwiaW5kZXhMaXN0UHJlc3NlZFwiIDogXCJpbmRleExpc3RcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0U2hvd2luZGljZXMoIXNob3dJbmRpY2VzKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+e3BhZ2V9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIHtzaG93SW5kaWNlcyA9PT0gdHJ1ZSAmJiBnYW1lcyAmJiBnYW1lcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2VzXCI+XHJcbiAgICAgICAgICAgICAge0FycmF5LmZyb20oXHJcbiAgICAgICAgICAgICAgICBBcnJheShNYXRoLmNlaWwoZ2FtZXMubGVuZ3RoIC8gaW5kZXhtb2RpZikpLmtleXMoKVxyXG4gICAgICAgICAgICAgICkubWFwKChfLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXhtb2RpZiAqIGlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKGlkeCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2lkeH0+e2lkeCArIDF9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2dhbWVzICYmIGluZGV4ICsgaW5kZXhtb2RpZiA+PSBnYW1lcy5sZW5ndGh9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4ICsgaW5kZXhtb2RpZik7XHJcbiAgICAgICAgICAgIHNldFBhZ2UocGFnZSArIDEpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOZXh0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZXM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdhbWVzIiwiZ2FtZXNMaXN0Iiwic2V0U2hvd1N0YXRzIiwic2V0U3RhdHMiLCJzZXRBY2hpZXZlbWVudHMiLCJnYW1lcyIsInNldEdhbWVzIiwiaW5kZXgiLCJzZXRJbmRleCIsInBhZ2UiLCJzZXRQYWdlIiwic2hvd0luZGljZXMiLCJzZXRTaG93aW5kaWNlcyIsImluZGV4bW9kaWYiLCJzZXRJbmRleG1vZGlmIiwic21hbGxIYW5kbGVyIiwibWVkSGFuZGxlciIsImxhcmdlSGFuZGxlciIsIndpZGVIYW5kbGVyIiwic21hbGxNZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRFdmVudExpc3RlbmVyIiwibWVkTWVkaWEiLCJsYXJnZU1lZGlhIiwid2lkZU1lZGlhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2xpY2UiLCJtYXAiLCJnYW1lIiwiXyIsImltZyIsInNyYyIsImFwcGlkIiwiaW1nX2ljb25fdXJsIiwib25DbGljayIsImFjaGlldmVtZW50c0luaXQiLCJidXR0b24iLCJkaXNhYmxlZCIsInNwYW4iLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJNYXRoIiwiY2VpbCIsImtleXMiLCJpZHgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Games.js\n"));

/***/ })

});