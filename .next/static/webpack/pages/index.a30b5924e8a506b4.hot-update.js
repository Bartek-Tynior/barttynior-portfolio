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

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 20\n    },\n    exit: {\n        opacity: 0,\n        x: -0,\n        y: 0\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    var t = \"\".concat(title);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.4,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        minW: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: t\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\barttynior-portfolio\\\\components\\\\layouts\\\\article.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"twitter:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\barttynior-portfolio\\\\components\\\\layouts\\\\article.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            property: \"og:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\barttynior-portfolio\\\\components\\\\layouts\\\\article.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\barttynior-portfolio\\\\components\\\\layouts\\\\article.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this),\n                children\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\barttynior-portfolio\\\\components\\\\layouts\\\\article.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBc0M7QUFDVjtBQUU1QixJQUFNRSxRQUFRLEdBQUc7SUFDZkMsTUFBTSxFQUFFO1FBQUVDLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0tBQUU7SUFDbENDLEtBQUssRUFBRTtRQUFFSCxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsRUFBRTtLQUFFO0lBQ2xDRSxJQUFJLEVBQUU7UUFBRUosT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztLQUFFO0NBQ2xDO0FBRUQsSUFBTUcsTUFBTSxHQUFHLGdCQUF5QjtRQUF0QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSztJQUMvQixJQUFNQyxDQUFDLEdBQUcsRUFBQyxDQUFRLE9BQU5ELEtBQUssQ0FBRTtJQUNwQixxQkFDRSw4REFBQ1gseURBQWM7UUFDYmMsT0FBTyxFQUFDLFFBQVE7UUFDaEJDLE9BQU8sRUFBQyxPQUFPO1FBQ2ZQLElBQUksRUFBQyxNQUFNO1FBQ1hOLFFBQVEsRUFBRUEsUUFBUTtRQUNsQmMsVUFBVSxFQUFFO1lBQUVDLFFBQVEsRUFBRSxHQUFHO1lBQUVDLElBQUksRUFBRSxXQUFXO1NBQUU7UUFDaERDLEtBQUssRUFBRTtZQUFFQyxRQUFRLEVBQUUsVUFBVTtTQUFFO1FBQy9CQyxJQUFJO2tCQUVKOztnQkFDR1YsS0FBSyxrQkFDSiw4REFBQ1Ysa0RBQUk7O3NDQUNILDhEQUFDVSxPQUFLO3NDQUFFQyxDQUFDOzs7OztpQ0FBUztzQ0FDbEIsOERBQUNVLE1BQUk7NEJBQUNDLElBQUksRUFBQyxlQUFlOzRCQUFDQyxPQUFPLEVBQUVaLENBQUM7Ozs7O2lDQUFJO3NDQUN6Qyw4REFBQ1UsTUFBSTs0QkFBQ0csUUFBUSxFQUFDLFVBQVU7NEJBQUNELE9BQU8sRUFBRVosQ0FBQzs7Ozs7aUNBQUk7Ozs7Ozt5QkFDbkM7Z0JBRVJGLFFBQVE7O3dCQUNSOzs7OzthQUNZLENBQ2xCO0FBQ0gsQ0FBQztBQXhCS0QsS0FBQUEsTUFBTTtBQTBCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcz9lZjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAwIH0sXHJcbiAgZW50ZXI6IHsgb3BhY2l0eTogMSwgeDogMCwgeTogMjAgfSxcclxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IC0wLCB5OiAwIH1cclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcclxuICBjb25zdCB0ID0gYCR7dGl0bGV9YFxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmFydGljbGVcclxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgIGFuaW1hdGU9XCJlbnRlclwiXHJcbiAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQsIHR5cGU6ICdlYXNlSW5PdXQnIH19XHJcbiAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XHJcbiAgICAgIG1pbldcclxuICAgID5cclxuICAgICAgPD5cclxuICAgICAgICB7dGl0bGUgJiYgKFxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57dH08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3R9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0fSAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Lz5cclxuICAgIDwvbW90aW9uLmFydGljbGU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsIngiLCJ5IiwiZW50ZXIiLCJleGl0IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsInQiLCJhcnRpY2xlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwic3R5bGUiLCJwb3NpdGlvbiIsIm1pblciLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n"));

/***/ })

});