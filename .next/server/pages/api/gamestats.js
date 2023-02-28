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
exports.id = "pages/api/gamestats";
exports.ids = ["pages/api/gamestats"];
exports.modules = {

/***/ "(api)/./pages/api/gamestats.js":
/*!********************************!*\
  !*** ./pages/api/gamestats.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const statsRes = await fetch(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=990080&key=${\"B2F7506FDF30B83C99403B3D8A3C39E6\"}&steamid=${\"76561198343185128\"}`);\n        const statsJSON = await statsRes.json();\n        const statsData = statsJSON[\"playerstats\"][\"achievements\"];\n        res.status(200).json({\n            stats: statsData\n        });\n    } else {\n        res.status(405).json(\"Method not allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2FtZXN0YXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLENBQUMsd0ZBQXdGLEVBQUVDLGtDQUFxQyxDQUFDLFNBQVMsRUFBRUEsbUJBQWdDLENBQUMsQ0FBQztRQUVoTCxNQUFNSSxZQUFZLE1BQU1OLFNBQVNPLElBQUk7UUFDckMsTUFBTUMsWUFBWUYsU0FBUyxDQUFDLGNBQWMsQ0FBQyxlQUFlO1FBQzFEUixJQUFJVyxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDO1lBQUVHLE9BQU9GO1FBQVU7SUFDMUMsT0FBTztRQUNMVixJQUFJVyxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWxfc3RlYW1fcHJvZmlsZV9uZXh0Ly4vcGFnZXMvYXBpL2dhbWVzdGF0cy5qcz9iN2JhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgY29uc3Qgc3RhdHNSZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9hcGkuc3RlYW1wb3dlcmVkLmNvbS9JU3RlYW1Vc2VyU3RhdHMvR2V0VXNlclN0YXRzRm9yR2FtZS92MDAwMi8/YXBwaWQ9OTkwMDgwJmtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NURUFNX0FQSV9LRVl9JnN0ZWFtaWQ9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVEVBTV9JRH1gXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RhdHNKU09OID0gYXdhaXQgc3RhdHNSZXMuanNvbigpO1xyXG4gICAgY29uc3Qgc3RhdHNEYXRhID0gc3RhdHNKU09OW1wicGxheWVyc3RhdHNcIl1bXCJhY2hpZXZlbWVudHNcIl07XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXRzOiBzdGF0c0RhdGEgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXRzUmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RFQU1fQVBJX0tFWSIsIk5FWFRfUFVCTElDX1NURUFNX0lEIiwic3RhdHNKU09OIiwianNvbiIsInN0YXRzRGF0YSIsInN0YXR1cyIsInN0YXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/gamestats.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/gamestats.js"));
module.exports = __webpack_exports__;

})();