"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/achievements";
exports.ids = ["pages/api/achievements"];
exports.modules = {

/***/ "(api)/./pages/api/achievements.js":
/*!***********************************!*\
  !*** ./pages/api/achievements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const statsRes = await fetch(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${req.query.appid}&key=${\"B2F7506FDF30B83C99403B3D8A3C39E6\"}&steamid=${\"76561198343185128\"}`);\n        const statsJSON = await statsRes.json();\n        const statsData = statsJSON[\"playerstats\"][\"achievements\"];\n        res.status(200).json({\n            achievements: statsData\n        });\n    } else {\n        res.status(405).json(\"Method not allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWNoaWV2ZW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLENBQUMsNkVBQTZFLEVBQUVKLElBQUlLLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEtBQUssRUFBRUMsa0NBQXFDLENBQUMsU0FBUyxFQUFFQSxtQkFBZ0MsQ0FBQyxDQUFDO1FBRTVMLE1BQU1JLFlBQVksTUFBTVIsU0FBU1MsSUFBSTtRQUNyQyxNQUFNQyxZQUFZRixTQUFTLENBQUMsY0FBYyxDQUFDLGVBQWU7UUFDMURWLElBQUlhLE1BQU0sQ0FBQyxLQUFLRixJQUFJLENBQUM7WUFBRUcsY0FBY0Y7UUFBVTtJQUNqRCxPQUFPO1FBQ0xaLElBQUlhLE1BQU0sQ0FBQyxLQUFLRixJQUFJLENBQUM7SUFDdkIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbF9zdGVhbV9wcm9maWxlX25leHQvLi9wYWdlcy9hcGkvYWNoaWV2ZW1lbnRzLmpzP2NiZjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCBzdGF0c1JlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS5zdGVhbXBvd2VyZWQuY29tL0lTdGVhbVVzZXJTdGF0cy9HZXRVc2VyU3RhdHNGb3JHYW1lL3YwMDAyLz9hcHBpZD0ke3JlcS5xdWVyeS5hcHBpZH0ma2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RFQU1fQVBJX0tFWX0mc3RlYW1pZD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NURUFNX0lEfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBzdGF0c0pTT04gPSBhd2FpdCBzdGF0c1Jlcy5qc29uKCk7XHJcbiAgICBjb25zdCBzdGF0c0RhdGEgPSBzdGF0c0pTT05bXCJwbGF5ZXJzdGF0c1wiXVtcImFjaGlldmVtZW50c1wiXTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgYWNoaWV2ZW1lbnRzOiBzdGF0c0RhdGEgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXRzUmVzIiwiZmV0Y2giLCJxdWVyeSIsImFwcGlkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NURUFNX0FQSV9LRVkiLCJORVhUX1BVQkxJQ19TVEVBTV9JRCIsInN0YXRzSlNPTiIsImpzb24iLCJzdGF0c0RhdGEiLCJzdGF0dXMiLCJhY2hpZXZlbWVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/achievements.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/achievements.js"));
module.exports = __webpack_exports__;

})();