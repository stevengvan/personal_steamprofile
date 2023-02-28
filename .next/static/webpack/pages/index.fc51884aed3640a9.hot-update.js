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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Games(param) {\n    let { gamesList , setShowStats , setStats , setAchievements  } = param;\n    _s();\n    const [screenSize, setScreenSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"small\");\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(gamesList);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [showIndices, setShowindices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [indexmodif, setIndexmodif] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const handleResize = ()=>{\n        if (window.innerWidth < 400) {\n            setIndexmodif(20);\n            setScreenSize(\"small\");\n        } else if (window.innerWidth < 700) {\n            setIndexmodif(25);\n            setScreenSize(\"med\");\n        } else if (window.innerWidth < 1200) {\n            setIndexmodif(30);\n            setScreenSize(\"large\");\n        } else {\n            setIndexmodif(60);\n            setScreenSize(\"wide\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (window.innerWidth < 400) {\n            setIndexmodif(20);\n            setScreenSize(\"small\");\n        } else if (window.innerWidth < 700) {\n            setIndexmodif(25);\n            setScreenSize(\"med\");\n        } else if (window.innerWidth < 1200) {\n            setIndexmodif(30);\n            setScreenSize(\"large\");\n        } else {\n            setIndexmodif(60);\n            setScreenSize(\"wide\");\n        }\n        window.addEventListener(\"resize\", handleResize);\n    }, []);\n    const achievementsInit = async (appid)=>{\n        const response = await fetch(\"/api/achievements?appid=\".concat(appid), {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        setAchievements(data.achievements);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gamesCon\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"contentHeader\",\n                children: \"GAMES\"\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list\",\n                children: games && games.slice(index, index + indexmodif).map((game, _)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"gameIcon\",\n                        src: \"http://media.steampowered.com/steamcommunity/public/images/apps/\".concat(game.appid, \"/\").concat(game.img_icon_url, \".jpg\"),\n                        onClick: ()=>{\n                            setStats(game);\n                            achievementsInit(game.appid);\n                            setShowStats(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: games && index === 0,\n                        onClick: ()=>{\n                            setIndex(index - indexmodif);\n                            setPage(page - 1);\n                        },\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: showIndices ? \"indexListPressed\" : \"indexList\",\n                        onClick: ()=>{\n                            setShowindices(!showIndices);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: page\n                            }, void 0, false, {\n                                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            showIndices === true && games && games.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"indices\",\n                                children: Array.from(Array(Math.ceil(games.length / indexmodif)).keys()).map((_, idx)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"index\",\n                                        onClick: ()=>{\n                                            setIndex(indexmodif * idx);\n                                            setPage(idx + 1);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: idx + 1\n                                        }, idx, false, {\n                                            fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 19\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: games && index + indexmodif >= games.length,\n                        onClick: ()=>{\n                            setIndex(index + indexmodif);\n                            setPage(page + 1);\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GitHub\\\\personal_steam_profile_next\\\\components\\\\Games.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Games, \"wBdDTvt3x9Z0Uj5DYbTr+avTlpo=\");\n_c = Games;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Games);\nvar _c;\n$RefreshReg$(_c, \"Games\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBTWhDOzs7Ozs7NEJBRU5FLGdCQUFnQixJQUFJLElBQUlOLFNBQVNBLE1BQU1xQyxNQUFNLEdBQUcsbUJBQy9DLDhEQUFDZDtnQ0FBSUMsV0FBVTswQ0FDWmMsTUFBTUMsSUFBSSxDQUNURCxNQUFNRSxLQUFLQyxJQUFJLENBQUN6QyxNQUFNcUMsTUFBTSxHQUFHN0IsYUFBYWtDLElBQUksSUFDaERmLEdBQUcsQ0FBQyxDQUFDRSxHQUFHYyxNQUFRO29DQUNoQixxQkFDRSw4REFBQ3BCO3dDQUNDQyxXQUFVO3dDQUNWUyxTQUFTLElBQU07NENBQ2I5QixTQUFTSyxhQUFhbUM7NENBQ3RCdEMsUUFBUXNDLE1BQU07d0NBQ2hCO2tEQUVBLDRFQUFDQztzREFBYUQsTUFBTTsyQ0FBWkE7Ozs7Ozs7Ozs7Z0NBR2Q7Ozs7Ozs7Ozs7OztrQ0FLTiw4REFBQ1Q7d0JBQ0NDLFVBQVVuQyxTQUFTRSxRQUFRTSxjQUFjUixNQUFNcUMsTUFBTTt3QkFDckRKLFNBQVMsSUFBTTs0QkFDYjlCLFNBQVNELFFBQVFNOzRCQUNqQkgsUUFBUUQsT0FBTzt3QkFDakI7a0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBNUhTWDtLQUFBQTtBQThIVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWVzLmpzP2FkM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gR2FtZXMoeyBnYW1lc0xpc3QsIHNldFNob3dTdGF0cywgc2V0U3RhdHMsIHNldEFjaGlldmVtZW50cyB9KSB7XHJcbiAgY29uc3QgW3NjcmVlblNpemUsIHNldFNjcmVlblNpemVdID0gdXNlU3RhdGUoXCJzbWFsbFwiKTtcclxuICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKGdhbWVzTGlzdCk7XHJcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2hvd0luZGljZXMsIHNldFNob3dpbmRpY2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5kZXhtb2RpZiwgc2V0SW5kZXhtb2RpZl0gPSB1c2VTdGF0ZSgyMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDQwMCkge1xyXG4gICAgICBzZXRJbmRleG1vZGlmKDIwKTtcclxuICAgICAgc2V0U2NyZWVuU2l6ZShcInNtYWxsXCIpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDcwMCkge1xyXG4gICAgICBzZXRJbmRleG1vZGlmKDI1KTtcclxuICAgICAgc2V0U2NyZWVuU2l6ZShcIm1lZFwiKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMjAwKSB7XHJcbiAgICAgIHNldEluZGV4bW9kaWYoMzApO1xyXG4gICAgICBzZXRTY3JlZW5TaXplKFwibGFyZ2VcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJbmRleG1vZGlmKDYwKTtcclxuICAgICAgc2V0U2NyZWVuU2l6ZShcIndpZGVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNDAwKSB7XHJcbiAgICAgIHNldEluZGV4bW9kaWYoMjApO1xyXG4gICAgICBzZXRTY3JlZW5TaXplKFwic21hbGxcIik7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzAwKSB7XHJcbiAgICAgIHNldEluZGV4bW9kaWYoMjUpO1xyXG4gICAgICBzZXRTY3JlZW5TaXplKFwibWVkXCIpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDApIHtcclxuICAgICAgc2V0SW5kZXhtb2RpZigzMCk7XHJcbiAgICAgIHNldFNjcmVlblNpemUoXCJsYXJnZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEluZGV4bW9kaWYoNjApO1xyXG4gICAgICBzZXRTY3JlZW5TaXplKFwid2lkZVwiKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhY2hpZXZlbWVudHNJbml0ID0gYXN5bmMgKGFwcGlkKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2FjaGlldmVtZW50cz9hcHBpZD0ke2FwcGlkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBzZXRBY2hpZXZlbWVudHMoZGF0YS5hY2hpZXZlbWVudHMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVzQ29uXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250ZW50SGVhZGVyXCI+R0FNRVM8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAge2dhbWVzICYmXHJcbiAgICAgICAgICBnYW1lcy5zbGljZShpbmRleCwgaW5kZXggKyBpbmRleG1vZGlmKS5tYXAoKGdhbWUsIF8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnYW1lSWNvblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbWVkaWEuc3RlYW1wb3dlcmVkLmNvbS9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2FwcHMvJHtnYW1lLmFwcGlkfS8ke2dhbWUuaW1nX2ljb25fdXJsfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTdGF0cyhnYW1lKTtcclxuICAgICAgICAgICAgICAgICAgYWNoaWV2ZW1lbnRzSW5pdChnYW1lLmFwcGlkKTtcclxuICAgICAgICAgICAgICAgICAgc2V0U2hvd1N0YXRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2dhbWVzICYmIGluZGV4ID09PSAwfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCAtIGluZGV4bW9kaWYpO1xyXG4gICAgICAgICAgICBzZXRQYWdlKHBhZ2UgLSAxKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQmFja1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3Nob3dJbmRpY2VzID8gXCJpbmRleExpc3RQcmVzc2VkXCIgOiBcImluZGV4TGlzdFwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTaG93aW5kaWNlcyghc2hvd0luZGljZXMpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj57cGFnZX08L3NwYW4+XHJcblxyXG4gICAgICAgICAge3Nob3dJbmRpY2VzID09PSB0cnVlICYmIGdhbWVzICYmIGdhbWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGljZXNcIj5cclxuICAgICAgICAgICAgICB7QXJyYXkuZnJvbShcclxuICAgICAgICAgICAgICAgIEFycmF5KE1hdGguY2VpbChnYW1lcy5sZW5ndGggLyBpbmRleG1vZGlmKSkua2V5cygpXHJcbiAgICAgICAgICAgICAgKS5tYXAoKF8sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChpbmRleG1vZGlmICogaWR4KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoaWR4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGtleT17aWR4fT57aWR4ICsgMX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17Z2FtZXMgJiYgaW5kZXggKyBpbmRleG1vZGlmID49IGdhbWVzLmxlbmd0aH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXggKyBpbmRleG1vZGlmKTtcclxuICAgICAgICAgICAgc2V0UGFnZShwYWdlICsgMSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5leHRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lcztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2FtZXMiLCJnYW1lc0xpc3QiLCJzZXRTaG93U3RhdHMiLCJzZXRTdGF0cyIsInNldEFjaGlldmVtZW50cyIsInNjcmVlblNpemUiLCJzZXRTY3JlZW5TaXplIiwiZ2FtZXMiLCJzZXRHYW1lcyIsImluZGV4Iiwic2V0SW5kZXgiLCJwYWdlIiwic2V0UGFnZSIsInNob3dJbmRpY2VzIiwic2V0U2hvd2luZGljZXMiLCJpbmRleG1vZGlmIiwic2V0SW5kZXhtb2RpZiIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiYWNoaWV2ZW1lbnRzSW5pdCIsImFwcGlkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImFjaGlldmVtZW50cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2xpY2UiLCJtYXAiLCJnYW1lIiwiXyIsImltZyIsInNyYyIsImltZ19pY29uX3VybCIsIm9uQ2xpY2siLCJidXR0b24iLCJkaXNhYmxlZCIsInNwYW4iLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJNYXRoIiwiY2VpbCIsImtleXMiLCJpZHgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Games.js\n"));

/***/ })

});