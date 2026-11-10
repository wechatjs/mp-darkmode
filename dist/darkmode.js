(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Darkmode", [], factory);
	else if(typeof exports === 'object')
		exports["Darkmode"] = factory();
	else
		root["Darkmode"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/call-bind-apply-helpers/actualApply.js":
/*!*************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/actualApply.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $apply = __webpack_require__(/*! ./functionApply */ "./node_modules/call-bind-apply-helpers/functionApply.js");
var $call = __webpack_require__(/*! ./functionCall */ "./node_modules/call-bind-apply-helpers/functionCall.js");
var $reflectApply = __webpack_require__(/*! ./reflectApply */ "./node_modules/call-bind-apply-helpers/reflectApply.js");

/** @type {import('./actualApply')} */
module.exports = $reflectApply || bind.call($call, $apply);

/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/functionApply.js":
/*!***************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/functionApply.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./functionApply')} */
module.exports = Function.prototype.apply;

/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/functionCall.js":
/*!**************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/functionCall.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./functionCall')} */
module.exports = Function.prototype.call;

/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/index.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");
var $call = __webpack_require__(/*! ./functionCall */ "./node_modules/call-bind-apply-helpers/functionCall.js");
var $actualApply = __webpack_require__(/*! ./actualApply */ "./node_modules/call-bind-apply-helpers/actualApply.js");

/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
module.exports = function callBindBasic(args) {
  if (args.length < 1 || typeof args[0] !== 'function') {
    throw new $TypeError('a function is required');
  }
  return $actualApply(bind, $call, args);
};

/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/reflectApply.js":
/*!**************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/reflectApply.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./reflectApply')} */
module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

/***/ }),

/***/ "./node_modules/call-bound/index.js":
/*!******************************************!*\
  !*** ./node_modules/call-bound/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var callBindBasic = __webpack_require__(/*! call-bind-apply-helpers */ "./node_modules/call-bind-apply-helpers/index.js");

/** @type {(thisArg: string, searchString: string, position?: number) => number} */
var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

/** @type {import('.')} */
module.exports = function callBoundIntrinsic(name, allowMissing) {
  /* eslint no-extra-parens: 0 */

  var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */GetIntrinsic(name, !!allowMissing);
  if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
    return callBindBasic(/** @type {const} */[intrinsic]);
  }
  return intrinsic;
};

/***/ }),

/***/ "./node_modules/color-blend/dist/index.modern.js":
/*!*******************************************************!*\
  !*** ./node_modules/color-blend/dist/index.modern.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: function() { return /* binding */ R; },
/* harmony export */   colorBurn: function() { return /* binding */ H; },
/* harmony export */   colorDodge: function() { return /* binding */ G; },
/* harmony export */   darken: function() { return /* binding */ E; },
/* harmony export */   difference: function() { return /* binding */ L; },
/* harmony export */   exclusion: function() { return /* binding */ N; },
/* harmony export */   hardLight: function() { return /* binding */ J; },
/* harmony export */   hue: function() { return /* binding */ P; },
/* harmony export */   lighten: function() { return /* binding */ F; },
/* harmony export */   luminosity: function() { return /* binding */ S; },
/* harmony export */   multiply: function() { return /* binding */ B; },
/* harmony export */   normal: function() { return /* binding */ A; },
/* harmony export */   overlay: function() { return /* binding */ D; },
/* harmony export */   saturation: function() { return /* binding */ Q; },
/* harmony export */   screen: function() { return /* binding */ C; },
/* harmony export */   softLight: function() { return /* binding */ K; }
/* harmony export */ });
function n(n, r, t) {
  return {
    r: 255 * t(n.r / 255, r.r / 255),
    g: 255 * t(n.g / 255, r.g / 255),
    b: 255 * t(n.b / 255, r.b / 255)
  };
}
function r(n, r) {
  return r;
}
function t(n, r) {
  return n * r;
}
function u(n, r) {
  return n + r - n * r;
}
function i(n, r) {
  return a(r, n);
}
function o(n, r) {
  return Math.min(n, r);
}
function e(n, r) {
  return Math.min(Math.max(n, r), 1);
}
function c(n, r) {
  return 0 === n ? 0 : 1 === r ? 1 : Math.min(1, n / (1 - r));
}
function f(n, r) {
  return 1 === n ? 1 : 0 === r ? 0 : 1 - Math.min(1, (1 - n) / r);
}
function a(n, r) {
  return r <= .5 ? t(n, 2 * r) : u(n, 2 * r - 1);
}
function b(n, r) {
  return r <= .5 ? n - (1 - 2 * r) * n * (1 - n) : n + (2 * r - 1) * ((n <= .25 ? ((16 * n - 12) * n + 4) * n : Math.sqrt(n)) - n);
}
function g(n, r) {
  return Math.abs(n - r);
}
function h(n, r) {
  return n + r - 2 * n * r;
}
function M(n, r, t) {
  return Math.min(Math.max(n || 0, r), t);
}
function m(n) {
  return {
    r: M(n.r, 0, 255),
    g: M(n.g, 0, 255),
    b: M(n.b, 0, 255),
    a: M(n.a, 0, 1)
  };
}
function d(n) {
  return {
    r: 255 * n.r,
    g: 255 * n.g,
    b: 255 * n.b,
    a: n.a
  };
}
function p(n) {
  return {
    r: n.r / 255,
    g: n.g / 255,
    b: n.b / 255,
    a: n.a
  };
}
function v(n, r) {
  void 0 === r && (r = 0);
  var t = Math.pow(10, r);
  return {
    r: Math.round(n.r * t) / t,
    g: Math.round(n.g * t) / t,
    b: Math.round(n.b * t) / t,
    a: n.a
  };
}
function x(n, r, t, u, i, o) {
  return (1 - r / t) * u + r / t * Math.round((1 - n) * i + n * o);
}
function O(n, r, t, u, i) {
  void 0 === i && (i = {
    unitInput: !1,
    unitOutput: !1,
    roundOutput: !0
  }), i.unitInput && (n = d(n), r = d(r)), n = m(n);
  var o = (r = m(r)).a + n.a - r.a * n.a,
    e = t(n, r, u),
    c = m({
      r: x(n.a, r.a, o, n.r, r.r, e.r),
      g: x(n.a, r.a, o, n.g, r.g, e.g),
      b: x(n.a, r.a, o, n.b, r.b, e.b),
      a: o
    });
  return c = i.unitOutput ? p(c) : i.roundOutput ? v(c) : function (n) {
    return v(n, 9);
  }(c), c;
}
function s(n, r, t) {
  return d(t(p(n), p(r)));
}
function I(n) {
  return .3 * n.r + .59 * n.g + .11 * n.b;
}
function q(n, r) {
  var t = r - I(n);
  return function (n) {
    var r = I(n),
      t = n.r,
      u = n.g,
      i = n.b,
      o = Math.min(t, u, i),
      e = Math.max(t, u, i);
    function c(n) {
      return r + (n - r) * r / (r - o);
    }
    function f(n) {
      return r + (n - r) * (1 - r) / (e - r);
    }
    return o < 0 && (t = c(t), u = c(u), i = c(i)), e > 1 && (t = f(t), u = f(u), i = f(i)), {
      r: t,
      g: u,
      b: i
    };
  }({
    r: n.r + t,
    g: n.g + t,
    b: n.b + t
  });
}
function w(n) {
  return Math.max(n.r, n.g, n.b) - Math.min(n.r, n.g, n.b);
}
function j(n, r) {
  var t = ["r", "g", "b"].sort(function (r, t) {
      return n[r] - n[t];
    }),
    u = t[0],
    i = t[1],
    o = t[2],
    e = {
      r: n.r,
      g: n.g,
      b: n.b
    };
  return e[o] > e[u] ? (e[i] = (e[i] - e[u]) * r / (e[o] - e[u]), e[o] = r) : e[i] = e[o] = 0, e[u] = 0, e;
}
function k(n, r) {
  return q(j(r, w(n)), I(n));
}
function l(n, r) {
  return q(j(n, w(r)), I(n));
}
function y(n, r) {
  return q(r, I(n));
}
function z(n, r) {
  return q(n, I(r));
}
function A(t, u) {
  return O(t, u, n, r);
}
function B(r, u) {
  return O(r, u, n, t);
}
function C(r, t) {
  return O(r, t, n, u);
}
function D(r, t) {
  return O(r, t, n, i);
}
function E(r, t) {
  return O(r, t, n, o);
}
function F(r, t) {
  return O(r, t, n, e);
}
function G(r, t) {
  return O(r, t, n, c);
}
function H(r, t) {
  return O(r, t, n, f);
}
function J(r, t) {
  return O(r, t, n, a);
}
function K(r, t) {
  return O(r, t, n, b);
}
function L(r, t) {
  return O(r, t, n, g);
}
function N(r, t) {
  return O(r, t, n, h);
}
function P(n, r) {
  return O(n, r, s, k);
}
function Q(n, r) {
  return O(n, r, s, l);
}
function R(n, r) {
  return O(n, r, s, y);
}
function S(n, r) {
  return O(n, r, s, z);
}


/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
for (var key in colors) Object.freeze(colors[key]);
/* harmony default export */ __webpack_exports__["default"] = (Object.freeze(colors));

/***/ }),

/***/ "./node_modules/colorjs.io/dist/color.js":
/*!***********************************************!*\
  !*** ./node_modules/colorjs.io/dist/color.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Color; }
/* harmony export */ });
var _excluded = ["cssProperty", "element"],
  _excluded2 = ["space"],
  _excluded3 = ["algorithm"],
  _excluded4 = ["method"],
  _excluded5 = ["maxDeltaE", "deltaEMethod", "steps", "maxSteps"];
var _globalThis$process;
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(e, r) { return new BabelRegExp(e, void 0, r); }; var e = RegExp.prototype, r = new WeakMap(); function BabelRegExp(e, t, p) { var o = RegExp(e, t); return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype); } function buildGroups(e, t) { var p = r.get(t); return Object.keys(p).reduce(function (r, t) { var o = p[t]; if ("number" == typeof o) r[t] = e[o];else { for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++; r[t] = e[o[i]]; } return r; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) { var t = e.exec.call(this, r); if (t) { t.groups = buildGroups(t, this); var p = t.indices; p && (p.groups = buildGroups(p, this)); } return t; }, BabelRegExp.prototype[Symbol.replace] = function (t, p) { if ("string" == typeof p) { var o = r.get(this); return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) { if ("" === t) return e; var p = o[r]; return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : ""; })); } if ("function" == typeof p) { var i = this; return e[Symbol.replace].call(this, t, function () { var e = arguments; return "object" != _typeof(e[e.length - 1]) && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e); }); } return e[Symbol.replace].call(this, t, p); }, _wrapRegExp.apply(this, arguments); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/** @import { Matrix3x3, Vector3 } from "./types.js" */

/**
 * A is m x n. B is n x p. product is m x p.
 *
 * Array arguments are treated like vectors:
 * - A becomes 1 x n
 * - B becomes n x 1
 *
 * Returns Matrix m x p or equivalent array or number
 *
 * @overload
 * @param {number[]} A Vector 1 x n
 * @param {number[]} B Vector n x 1
 * @returns {number} Scalar number
 *
 * @overload
 * @param {number[][]} A Matrix m x n
 * @param {number[]} B Vector n x 1
 * @returns {number[]} Array with length m
 *
 * @overload
 * @param {number[]} A Vector 1 x n
 * @param {number[][]} B Matrix n x p
 * @returns {number[]} Array with length p
 *
 * @overload
 * @param {number[][]} A Matrix m x n
 * @param {number[][]} B Matrix n x p
 * @returns {number[][]} Matrix m x p
 *
 * @param {number[] | number[][]} A Matrix m x n or a vector
 * @param {number[] | number[][]} B Matrix n x p or a vector
 * @returns {number | number[] | number[][]} Matrix m x p or equivalent array or number
 */
function multiplyMatrices(A, B) {
  var m = A.length;
  /** @type {number[][]} */
  var AM;
  /** @type {number[][]} */
  var BM;
  var aVec = false;
  var bVec = false;
  if (!Array.isArray(A[0])) {
    // A is vector, convert to [[a, b, c, ...]]
    AM = [(/** @type {number[]} */A)];
    m = AM.length;
    aVec = true;
  } else {
    AM = /** @type {number[][]} */A;
  }
  if (!Array.isArray(B[0])) {
    // B is vector, convert to [[a], [b], [c], ...]]
    BM = B.length > 0 ? B.map(function (x) {
      return [x];
    }) : [[]]; // Avoid mapping empty array
    bVec = true;
  } else {
    BM = /** @type {number[][]} */B;
  }
  var p = BM[0].length;
  var BM_cols = BM[0].map(function (_, i) {
    return BM.map(function (x) {
      return x[i];
    });
  }); // transpose B
  /** @type {number[] | number[][]} */
  var product = AM.map(function (row) {
    return BM_cols.map(function (col) {
      var ret = 0;
      if (!Array.isArray(row)) {
        var _iterator = _createForOfIteratorHelper(col),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _c = _step.value;
            ret += row * _c;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return ret;
      }
      for (var i = 0; i < row.length; i++) {
        ret += row[i] * (col[i] || 0);
      }
      return ret;
    });
  });
  if (m === 1 && aVec) {
    product = product[0]; // Avoid [[a, b, c, ...]]
  }
  if (p === 1 && bVec) {
    if (m === 1 && aVec) {
      return product[0]; // Avoid [[a]], return a number
    } else {
      return product.map(function (x) {
        return x[0];
      }); // Avoid [[a], [b], [c], ...]]
    }
  }
  return product;
}

// dot3 and transform functions adapted from https://github.com/texel-org/color/blob/9793c7d4d02b51f068e0f3fd37131129a4270396/src/core.js
//
// The MIT License (MIT)
// Copyright (c) 2024 Matt DesLauriers

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.

/**
 * Returns the dot product of two vectors each with a length of 3.
 *
 * @param {Vector3} a
 * @param {Vector3} b
 * @returns {number}
 */
function dot3(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Transforms a vector of length 3 by a 3x3 matrix. Specify the same input and output
 * vector to transform in place.
 *
 * @param {Vector3} input
 * @param {Matrix3x3} matrix
 * @param {Vector3} [out]
 * @returns {Vector3}
 */
function multiply_v3_m3x3(input, matrix) {
  var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0, 0];
  var x = dot3(input, matrix[0]);
  var y = dot3(input, matrix[1]);
  var z = dot3(input, matrix[2]);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Various utility functions
 */

/**
 * Check if a value is a string (including a String object)
 * @param {any} str - Value to check
 * @returns {str is string}
 */
function isString(str) {
  return type(str) === "string";
}

/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @param {any} o - Value to check
 * @returns {string}
 */
function type(o) {
  var str = Object.prototype.toString.call(o);
  return (str.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}

/**
 * @param {number} n
 * @param {{ precision?: number | undefined, unit?: string | undefined }} options
 * @returns {string}
 */
function serializeNumber(n, _ref) {
  var _ref$precision = _ref.precision,
    precision = _ref$precision === void 0 ? 16 : _ref$precision,
    unit = _ref.unit;
  if (isNone(n)) {
    return "none";
  }
  n = +toPrecision(n, precision);
  return n + (unit !== null && unit !== void 0 ? unit : "");
}

/**
 * Check if a value corresponds to a none argument
 * @param {any} n - Value to check
 * @returns {n is null}
 */
function isNone(n) {
  return n === null;
}

/**
 * Replace none values with 0
 * @param {number | null} n
 * @returns {number}
 */
function skipNone(n) {
  return isNone(n) ? 0 : n;
}

/**
 * Round a number to a certain number of significant digits
 * @param {number} n - The number to round
 * @param {number} precision - Number of significant digits
 */
function toPrecision(n, precision) {
  if (n === 0) {
    return 0;
  }
  var integer = ~~n;
  var digits = 0;
  if (integer && precision) {
    digits = ~~Math.log10(Math.abs(integer)) + 1;
  }
  var multiplier = Math.pow(10.0, precision - digits);
  return Math.floor(n * multiplier + 0.5) / multiplier;
}

/**
 * @param {number} start
 * @param {number} end
 * @param {number} p
 */
function interpolate(start, end, p) {
  if (isNaN(start)) {
    return end;
  }
  if (isNaN(end)) {
    return start;
  }
  return start + (end - start) * p;
}

/**
 * @param {number} start
 * @param {number} end
 * @param {number} value
 */
function interpolateInv(start, end, value) {
  return (value - start) / (end - start);
}

/**
 * @param {[number, number]} from
 * @param {[number, number]} to
 * @param {number} value
 */
function mapRange(from, to, value) {
  if (!from || !to || from === to || from[0] === to[0] && from[1] === to[1] || isNaN(value) || value === null) {
    // Ranges missing or the same
    return value;
  }
  return interpolate(to[0], to[1], interpolateInv(from[0], from[1], value));
}

/**
 * Clamp value between the minimum and maximum
 * @param {number} min minimum value to return
 * @param {number} val the value to return if it is between min and max
 * @param {number} max maximum value to return
 */
function clamp(min, val, max) {
  return Math.max(Math.min(max, val), min);
}

/**
 * Copy sign of one value to another.
 * @param {number} to - Number to copy sign to
 * @param {number} from - Number to copy sign from
 */
function copySign(to, from) {
  return Math.sign(to) === Math.sign(from) ? to : -to;
}

/**
 * Perform pow on a signed number and copy sign to result
 * @param {number} base The base number
 * @param {number} exp The exponent
 */
function spow(base, exp) {
  return copySign(Math.pow(Math.abs(base), exp), base);
}

/**
 * Perform a divide, but return zero if the denominator is zero
 * @param {number} n The numerator
 * @param {number} d The denominator
 */
function zdiv(n, d) {
  return d === 0 ? 0 : n / d;
}

/**
 * Perform a bisect on a sorted list and locate the insertion point for
 * a value in arr to maintain sorted order.
 * @param {number[]} arr - array of sorted numbers
 * @param {number} value - value to find insertion point for
 * @param {number} lo - used to specify a the low end of a subset of the list
 * @param {number} hi - used to specify a the high end of a subset of the list
 */
function bisectLeft(arr, value) {
  var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;
  while (lo < hi) {
    var mid = lo + hi >> 1;
    if (arr[mid] < value) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

/**
 * Determines whether an argument is an instance of a constructor, including subclasses.
 * This is done by first just checking `instanceof`,
 * and then comparing the string names of the constructors if that fails.
 * @param {any} arg
 * @param {C} constructor
 * @template {new (...args: any) => any} C
 * @returns {arg is InstanceType<C>}
 */
function isInstance(arg, constructor) {
  if (arg instanceof constructor) {
    return true;
  }
  var targetName = constructor.name;
  while (arg) {
    var _proto$constructor;
    var proto = Object.getPrototypeOf(arg);
    var constructorName = proto === null || proto === void 0 || (_proto$constructor = proto.constructor) === null || _proto$constructor === void 0 ? void 0 : _proto$constructor.name;
    if (constructorName === targetName) {
      return true;
    }
    if (!constructorName || constructorName === "Object") {
      return false;
    }
    arg = proto;
  }
  return false;
}
var util = /*#__PURE__*/Object.freeze({
  __proto__: null,
  bisectLeft: bisectLeft,
  clamp: clamp,
  copySign: copySign,
  interpolate: interpolate,
  interpolateInv: interpolateInv,
  isInstance: isInstance,
  isNone: isNone,
  isString: isString,
  mapRange: mapRange,
  multiplyMatrices: multiplyMatrices,
  multiply_v3_m3x3: multiply_v3_m3x3,
  serializeNumber: serializeNumber,
  skipNone: skipNone,
  spow: spow,
  toPrecision: toPrecision,
  type: type,
  zdiv: zdiv
});

/**
 * A class for adding deep extensibility to any piece of JS code
 */
var Hooks = /*#__PURE__*/function () {
  function Hooks() {
    _classCallCheck(this, Hooks);
  }
  return _createClass(Hooks, [{
    key: "add",
    value: function add(name, callback, first) {
      if (typeof arguments[0] != "string") {
        // Multiple hooks
        for (var name in arguments[0]) {
          this.add(name, arguments[0][name], arguments[1]);
        }
        return;
      }
      (Array.isArray(name) ? name : [name]).forEach(function (name) {
        this[name] = this[name] || [];
        if (callback) {
          this[name][first ? "unshift" : "push"](callback);
        }
      }, this);
    }
  }, {
    key: "run",
    value: function run(name, env) {
      this[name] = this[name] || [];
      this[name].forEach(function (callback) {
        callback.call(env && env.context ? env.context : env, env);
      });
    }
  }]);
}();
/**
 * The instance of {@link Hooks} used throughout Color.js
 */
var hooks = new Hooks();

// Global defaults one may want to configure
var defaults = {
  gamut_mapping: "css",
  precision: 5,
  deltaE: "76",
  // Default deltaE method
  verbose: (globalThis === null || globalThis === void 0 || (_globalThis$process = globalThis.process) === null || _globalThis$process === void 0 || (_globalThis$process = _globalThis$process.env) === null || _globalThis$process === void 0 || (_globalThis$process = _globalThis$process.NODE_ENV) === null || _globalThis$process === void 0 ? void 0 : _globalThis$process.toLowerCase()) !== "test",
  warn: function warn(msg) {
    if (this.verbose) {
      var _globalThis$console, _globalThis$console$w;
      globalThis === null || globalThis === void 0 || (_globalThis$console = globalThis.console) === null || _globalThis$console === void 0 || (_globalThis$console$w = _globalThis$console.warn) === null || _globalThis$console$w === void 0 || _globalThis$console$w.call(_globalThis$console, msg);
    }
  }
};
var Type = /*#__PURE__*/function () {
  /**
   * @param {any} type
   * @param {import("./types.js").CoordMeta} coordMeta
   */
  function Type(type, coordMeta) {
    _classCallCheck(this, Type);
    // Class properties - declared here so that type inference works
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "coordMeta", void 0);
    _defineProperty(this, "coordRange", void 0);
    /** @type {[number, number]} */
    _defineProperty(this, "range", void 0);
    if (_typeof(type) === "object") {
      this.coordMeta = type;
    }
    if (coordMeta) {
      var _coordMeta$range;
      this.coordMeta = coordMeta;
      this.coordRange = (_coordMeta$range = coordMeta.range) !== null && _coordMeta$range !== void 0 ? _coordMeta$range : coordMeta.refRange;
    }
    if (typeof type === "string") {
      var params = type.trim().match(/*#__PURE__*/_wrapRegExp(/^(<[a-z]+>)(\[(-?[.\d]+),\s*(-?[.\d]+)\])?$/, {
        type: 1,
        min: 3,
        max: 4
      }));
      if (!params) {
        throw new TypeError("Cannot parse ".concat(type, " as a type definition."));
      }
      this.type = params.groups.type;
      var _params$groups = params.groups,
        min = _params$groups.min,
        _max = _params$groups.max;
      if (min || _max) {
        this.range = [+min, +_max];
      }
    }
  }

  /** @returns {[number, number]} */
  return _createClass(Type, [{
    key: "computedRange",
    get: function get() {
      if (this.range) {
        return this.range;
      }
      if (this.type === "<percentage>") {
        return this.percentageRange();
      } else if (this.type === "<angle>") {
        return [0, 360];
      }
      return null;
    }
  }, {
    key: "unit",
    get: function get() {
      if (this.type === "<percentage>") {
        return "%";
      } else if (this.type === "<angle>") {
        return "deg";
      }
      return "";
    }

    /**
     * Map a number to the internal representation
     * @param {number} number
     */
  }, {
    key: "resolve",
    value: function resolve(number) {
      if (this.type === "<angle>") {
        return number;
      }
      var fromRange = this.computedRange;
      var toRange = this.coordRange;
      if (this.type === "<percentage>") {
        toRange !== null && toRange !== void 0 ? toRange : toRange = this.percentageRange();
      }
      return mapRange(fromRange, toRange, number);
    }

    /**
     * Serialize a number from the internal representation to a string
     * @param {number} number
     * @param {number} [precision]
     */
  }, {
    key: "serialize",
    value: function serialize(number, precision) {
      var toRange = this.type === "<percentage>" ? this.percentageRange(100) : this.computedRange;
      var unit = this.unit;
      number = mapRange(this.coordRange, toRange, number);
      return serializeNumber(number, {
        unit: unit,
        precision: precision
      });
    }
  }, {
    key: "toString",
    value: function toString() {
      var ret = this.type;
      if (this.range) {
        var _this$range = _slicedToArray(this.range, 2),
          _this$range$ = _this$range[0],
          min = _this$range$ === void 0 ? "" : _this$range$,
          _this$range$2 = _this$range[1],
          _max2 = _this$range$2 === void 0 ? "" : _this$range$2;
        ret += "[".concat(min, ",").concat(_max2, "]");
      }
      return ret;
    }

    /**
     * Returns a percentage range for values of this type
     * @param {number} scale
     * @returns {[number, number]}
     */
  }, {
    key: "percentageRange",
    value: function percentageRange() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var range;
      if (this.coordMeta && this.coordMeta.range || this.coordRange && this.coordRange[0] >= 0) {
        range = [0, 1];
      } else {
        range = [-1, 1];
      }
      return [range[0] * scale, range[1] * scale];
    }
  }], [{
    key: "get",
    value: function get(type, coordMeta) {
      if (isInstance(type, this)) {
        return type;
      }
      return new this(type, coordMeta);
    }
  }]);
}();
/** @import { ColorSpace, Coords } from "./types.js" */
// Type re-exports
/** @typedef {import("./types.js").Format} FormatInterface */
/**
 * @internal
 * Used to index {@link FormatInterface Format} objects and store an instance.
 * Not meant for external use
 */
var instance = Symbol("instance");

/**
 * Remove the first element of an array type
 * @template {any[]} T
 * @typedef {T extends [any, ...infer R] ? R : T[number][]} RemoveFirstElement
 */

/**
 * @class Format
 * @implements {Omit<FormatInterface, "coords" | "serializeCoords">}
 * Class to hold a color serialization format
 */
var Format = /*#__PURE__*/function () {
  /**
   * @param {FormatInterface} format
   * @param {ColorSpace} space
   */
  function Format(format) {
    var _this = this;
    var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : format.space;
    _classCallCheck(this, Format);
    // Class properties - declared here so that type inference works
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "spaceCoords", void 0);
    /** @type {Type[][]} */
    _defineProperty(this, "coords", void 0);
    /** @type {string | undefined} */
    _defineProperty(this, "id", void 0);
    /** @type {boolean | undefined} */
    _defineProperty(this, "alpha", void 0);
    format[instance] = this;
    this.type = "function";
    this.name = "color";
    Object.assign(this, format);
    this.space = space;
    if (this.type === "custom") {
      // Nothing else to do here
      return;
    }
    this.spaceCoords = Object.values(space.coords);
    if (!this.coords) {
      // @ts-expect-error Strings are converted to the correct type later
      this.coords = this.spaceCoords.map(function (coordMeta) {
        var ret = ["<number>", "<percentage>"];
        if (coordMeta.type === "angle") {
          ret.push("<angle>");
        }
        return ret;
      });
    }
    this.coords = this.coords.map(/** @param {string | string[] | Type[]} types */function (types, i) {
      var coordMeta = _this.spaceCoords[i];
      if (typeof types === "string") {
        types = types.trim().split(/\s*\|\s*/);
      }
      return types.map(function (type) {
        return Type.get(type, coordMeta);
      });
    });
  }

  /**
   * @param {Coords} coords
   * @param {number} precision
   * @param {Type[]} types
   */
  return _createClass(Format, [{
    key: "serializeCoords",
    value: function serializeCoords(coords, precision, types) {
      var _this2 = this;
      types = coords.map(function (_, i) {
        var _types$i, _types;
        return Type.get((_types$i = (_types = types) === null || _types === void 0 ? void 0 : _types[i]) !== null && _types$i !== void 0 ? _types$i : _this2.coords[i][0], _this2.spaceCoords[i]);
      });
      return coords.map(function (c, i) {
        return types[i].serialize(c, precision);
      });
    }

    /**
     * Validates the coordinates of a color against a format's coord grammar and
     * maps the coordinates to the range or refRange of the coordinates.
     * @param {Coords} coords
     * @param {[string, string, string]} types
     */
  }, {
    key: "coerceCoords",
    value: function coerceCoords(coords, types) {
      var _this3 = this;
      return Object.entries(this.space.coords).map(function (_ref2, i) {
        var _ref3 = _slicedToArray(_ref2, 2),
          id = _ref3[0],
          coordMeta = _ref3[1];
        var arg = coords[i];
        if (isNone(arg) || isNaN(arg)) {
          // Nothing to do here
          return arg;
        }

        // Find grammar alternative that matches the provided type
        // Non-strict equals is intentional because we are comparing w/ string objects
        var providedType = types[i];
        var type = _this3.coords[i].find(function (c) {
          return c.type == providedType;
        });

        // Check that each coord conforms to its grammar
        if (!type) {
          var _ref4, _arg;
          // Type does not exist in the grammar, throw
          var coordName = coordMeta.name || id;
          throw new TypeError("".concat((_ref4 = providedType !== null && providedType !== void 0 ? providedType : /** @type {any} */(_arg = arg) === null || _arg === void 0 ? void 0 : _arg.raw) !== null && _ref4 !== void 0 ? _ref4 : arg, " not allowed for ").concat(coordName, " in ").concat(_this3.name, "()"));
        }
        arg = type.resolve(arg);
        if (type.range) {
          // Adjust type to include range
          types[i] = type.toString();
        }
        return arg;
      });
    }

    /**
     * @returns {boolean | Required<FormatInterface>["serialize"]}
     */
  }, {
    key: "canSerialize",
    value: function canSerialize() {
      return this.type === "function" || /** @type {any} */this.serialize;
    }

    /**
     * @param {string} str
     * @returns {(import("./types.js").ColorConstructor) | undefined | null}
     */
  }, {
    key: "parse",
    value: function parse(str) {
      return null;
    }

    /**
     * @param {Format | FormatInterface} format
     * @param {RemoveFirstElement<ConstructorParameters<typeof Format>>} args
     * @returns {Format}
     */
  }], [{
    key: "get",
    value: function get(format) {
      if (!format || isInstance(format, this)) {
        return /** @type {Format} */format;
      }
      if (format[instance]) {
        return format[instance];
      }
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return _construct(Format, [format].concat(args));
    }
  }]);
}(); // Type re-exports
/** @typedef {import("./types.js").White} White */
/** @type {Record<string, White>} */
// prettier-ignore
var WHITES = {
  // for compatibility, the four-digit chromaticity-derived ones everyone else uses
  D50: [0.3457 / 0.3585, 1.00000, (1.0 - 0.3457 - 0.3585) / 0.3585],
  D65: [0.3127 / 0.3290, 1.00000, (1.0 - 0.3127 - 0.3290) / 0.3290]
};

/**
 *
 * @param {string | White} name
 * @returns {White}
 */
function getWhite(name) {
  if (Array.isArray(name)) {
    return name;
  }
  return WHITES[name];
}

/**
 * Adapt XYZ from white point W1 to W2
 * @param {White | string} W1
 * @param {White | string} W2
 * @param {[number, number, number]} XYZ
 * @param {{ method?: string | undefined }} options
 * @returns {[number, number, number]}
 */
function adapt$2(W1, W2, XYZ) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  W1 = getWhite(W1);
  W2 = getWhite(W2);
  if (!W1 || !W2) {
    throw new TypeError("Missing white point to convert ".concat(!W1 ? "from" : "").concat(!W1 && !W2 ? "/" : "").concat(!W2 ? "to" : ""));
  }
  if (W1 === W2) {
    // Same whitepoints, no conversion needed
    return XYZ;
  }
  var env = {
    W1: W1,
    W2: W2,
    XYZ: XYZ,
    options: options
  };
  hooks.run("chromatic-adaptation-start", env);
  if (!env.M) {
    if (env.W1 === WHITES.D65 && env.W2 === WHITES.D50) {
      // prettier-ignore
      env.M = [[1.0479297925449969, 0.022946870601609652, -0.05019226628920524], [0.02962780877005599, 0.9904344267538799, -0.017073799063418826], [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371]];
    } else if (env.W1 === WHITES.D50 && env.W2 === WHITES.D65) {
      // prettier-ignore
      env.M = [[0.955473421488075, -0.02309845494876471, 0.06325924320057072], [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323], [0.012314014864481998, -0.020507649298898964, 1.330365926242124]];
    }
  }
  hooks.run("chromatic-adaptation-end", env);
  if (env.M) {
    return multiply_v3_m3x3(env.XYZ, env.M);
  } else {
    throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
  }
}

/** @import { ColorConstructor } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").ArgumentMeta} ArgumentMeta */
/** @typedef {import("./types.js").ParseFunctionReturn} ParseFunctionReturn */
/** @typedef {import("./types.js").ParseOptions} ParseOptions */

/**
 * Convert a CSS Color string to a color object
 * @param {string} str
 * @param {ParseOptions} [options]
 * @returns {ColorConstructor}
 */
function parse(str, options) {
  var _String, _env$options$parseMet;
  var env = {
    str: (_String = String(str)) === null || _String === void 0 ? void 0 : _String.trim(),
    options: options
  };
  hooks.run("parse-start", env);
  if (env.color) {
    return env.color;
  }
  env.parsed = parseFunction(env.str);
  var ret;
  var meta = env.options ? (_env$options$parseMet = env.options.parseMeta) !== null && _env$options$parseMet !== void 0 ? _env$options$parseMet : env.options.meta : null;
  if (env.parsed) {
    // Is a functional syntax
    var name = env.parsed.name;
    var format;
    var space;
    var coords = env.parsed.args;
    var types = coords.map(function (c, i) {
      var _env$parsed$argMeta$i;
      return (_env$parsed$argMeta$i = env.parsed.argMeta[i]) === null || _env$parsed$argMeta$i === void 0 ? void 0 : _env$parsed$argMeta$i.type;
    });
    if (name === "color") {
      // color() function
      var id = coords.shift();
      types.shift();
      // Check against both <dashed-ident> and <ident> versions
      var alternateId = id.startsWith("--") ? id.substring(2) : "--".concat(id);
      var ids = [id, alternateId];
      format = ColorSpace.findFormat({
        name: name,
        id: ids,
        type: "function"
      });
      if (!format) {
        // Not found
        var didYouMean;
        var registryId = id in ColorSpace.registry ? id : alternateId;
        if (registryId in ColorSpace.registry) {
          var _ColorSpace$registry$;
          // Used color space id instead of color() id, these are often different
          var cssId = (_ColorSpace$registry$ = ColorSpace.registry[registryId].formats) === null || _ColorSpace$registry$ === void 0 || (_ColorSpace$registry$ = _ColorSpace$registry$.color) === null || _ColorSpace$registry$ === void 0 ? void 0 : _ColorSpace$registry$.id;
          if (cssId) {
            var altColor = str.replace("color(" + id, "color(" + cssId);
            didYouMean = "Did you mean ".concat(altColor, "?");
          }
        }
        throw new TypeError("Cannot parse ".concat(env.str, ". ") + (didYouMean !== null && didYouMean !== void 0 ? didYouMean : "Missing a plugin?"));
      }
      space = format.space;
      if (format.id.startsWith("--") && !id.startsWith("--")) {
        defaults.warn("".concat(space.name, " is a non-standard space and not currently supported in the CSS spec. ") + "Use prefixed color(".concat(format.id, ") instead of color(").concat(id, ")."));
      }
      if (id.startsWith("--") && !format.id.startsWith("--")) {
        defaults.warn("".concat(space.name, " is a standard space and supported in the CSS spec. ") + "Use color(".concat(format.id, ") instead of prefixed color(").concat(id, ")."));
      }
    } else {
      format = ColorSpace.findFormat({
        name: name,
        type: "function"
      });
      space = format.space;
    }
    if (meta) {
      Object.assign(meta, {
        format: format,
        formatId: format.name,
        types: types,
        commas: env.parsed.commas
      });
    }
    var alpha = 1;
    if (env.parsed.lastAlpha) {
      alpha = env.parsed.args.pop();
      if (meta) {
        meta.alphaType = types.pop();
      }
    }
    var coordCount = format.coords.length;
    if (coords.length !== coordCount) {
      throw new TypeError("Expected ".concat(coordCount, " coordinates for ").concat(space.id, " in ").concat(env.str, "), got ").concat(coords.length));
    }
    coords = format.coerceCoords(coords, types);
    ret = {
      spaceId: space.id,
      coords: coords,
      alpha: alpha
    };
  } else {
    // Custom, colorspace-specific format
    var _iterator2 = _createForOfIteratorHelper(ColorSpace.all),
      _step2;
    try {
      spaceloop: for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _space = _step2.value;
        for (var formatId in _space.formats) {
          var _format = _space.formats[formatId];
          if (_format.type !== "custom") {
            continue;
          }
          if (_format.test && !_format.test(env.str)) {
            continue;
          }

          // Convert to Format object
          var formatObject = _space.getFormat(_format);
          var color = formatObject.parse(env.str);
          if (color) {
            if (meta) {
              Object.assign(meta, {
                format: formatObject,
                formatId: formatId
              });
            }
            ret = color;
            break spaceloop;
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (!ret) {
    // If we're here, we couldn't parse
    throw new TypeError("Could not parse ".concat(str, " as a color. Missing a plugin?"));
  }

  // Clamp alpha to [0, 1]
  ret.alpha = isNone(ret.alpha) ? ret.alpha : ret.alpha === undefined ? 1 : clamp(0, ret.alpha, 1);
  return ret;
}

/**
 * Units and multiplication factors for the internally stored numbers
 */
var units = {
  "%": 0.01,
  deg: 1,
  grad: 0.9,
  rad: 180 / Math.PI,
  turn: 360
};
var regex = {
  // Need to list calc(NaN) explicitly as otherwise its ending paren would terminate the function call
  function: /^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,
  number: /^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,
  unitValue: RegExp("(".concat(Object.keys(units).join("|"), ")$")),
  // NOTE The -+ are not just for prefix, but also for idents, and e+N notation!
  singleArgument: /\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g
};

/**
 * Parse a single function argument
 * @param {string} rawArg
 * @returns {{value: number, meta: ArgumentMeta}}
 */
function parseArgument(rawArg) {
  var _rawArg$match;
  /** @type {Partial<ArgumentMeta>} */
  var meta = {};
  var unit = (_rawArg$match = rawArg.match(regex.unitValue)) === null || _rawArg$match === void 0 ? void 0 : _rawArg$match[0];
  /** @type {string | number} */
  var value = meta.raw = rawArg;
  if (unit) {
    // It’s a dimension token
    meta.type = unit === "%" ? "<percentage>" : "<angle>";
    meta.unit = unit;
    meta.unitless = Number(value.slice(0, -unit.length)); // unitless number

    value = meta.unitless * units[unit];
  } else if (regex.number.test(value)) {
    // It's a number
    // Convert numerical args to numbers
    value = Number(value);
    meta.type = "<number>";
  } else if (value === "none") {
    value = null;
  } else if (value === "NaN" || value === "calc(NaN)") {
    value = NaN;
    meta.type = "<number>";
  } else {
    meta.type = "<ident>";
  }
  return {
    value: (/** @type {number} */value),
    meta: (/** @type {ArgumentMeta} */meta)
  };
}

/**
 * Parse a CSS function, regardless of its name and arguments
 * @param {string} str String to parse
 * @return {ParseFunctionReturn | void}
 */
function parseFunction(str) {
  if (!str) {
    return;
  }
  str = str.trim();
  var parts = str.match(regex.function);
  if (parts) {
    // It is a function, parse args
    var args = [];
    var argMeta = [];
    var lastAlpha = false;
    var name = parts[1].toLowerCase();
    var separators = parts[2].replace(regex.singleArgument, function ($0, rawArg) {
      var _parseArgument = parseArgument(rawArg),
        value = _parseArgument.value,
        meta = _parseArgument.meta;
      if (
      // If there's a slash here, it's modern syntax
      $0.startsWith("/") ||
      // If there's still elements to process after there's already 3 in `args` (and the we're not dealing with "color()"), it's likely to be a legacy color like "hsl(0, 0%, 0%, 0.5)"
      name !== "color" && args.length === 3) {
        // It's alpha
        lastAlpha = true;
      }
      args.push(value);
      argMeta.push(meta);
      return "";
    });
    return {
      name: name,
      args: args,
      argMeta: argMeta,
      lastAlpha: lastAlpha,
      commas: separators.includes(","),
      rawName: parts[1],
      rawArgs: parts[2]
    };
  }
}

/** @import { ColorTypes, ParseOptions as GetColorOptions, PlainColorObject } from "./types.js" */

/**
 * Resolves a color reference (object or string) to a plain color object
 * @overload
 * @param {ColorTypes} color
 * @param {GetColorOptions} [options]
 * @returns {PlainColorObject}
 */
/**
 * @overload
 * @param {ColorTypes[]} color
 * @param {GetColorOptions} [options]
 * @returns {PlainColorObject[]}
 */
function getColor(color, options) {
  if (Array.isArray(color)) {
    return color.map(function (c) {
      return getColor(c, options);
    });
  }
  if (!color) {
    throw new TypeError("Empty color reference");
  }
  if (isString(color)) {
    color = parse(color, options);
  }

  // Object fixup
  var space = color.space || color.spaceId;
  if (typeof space === "string") {
    // Convert string id to color space object
    color.space = ColorSpace.get(space);
  }
  if (color.alpha === undefined) {
    color.alpha = 1;
  }
  return color;
}

/**
 * @packageDocumentation
 * Defines the class and other types related to creating color spaces.
 * For the builtin color spaces, see the `spaces` module.
 */

var ε$7 = 0.000075;

/**
 * Class to represent a color space
 */
var ColorSpace = /*#__PURE__*/function () {
  function ColorSpace(options) {
    var _options$coords, _ref5, _options$white, _options$formats, _this$formats$color;
    _classCallCheck(this, ColorSpace);
    this.id = options.id;
    this.name = options.name;
    this.base = options.base ? ColorSpace.get(options.base) : null;
    this.aliases = options.aliases;
    if (this.base) {
      this.fromBase = options.fromBase;
      this.toBase = options.toBase;
    }

    // Coordinate metadata

    var coords = (_options$coords = options.coords) !== null && _options$coords !== void 0 ? _options$coords : this.base.coords;
    for (var name in coords) {
      if (!("name" in coords[name])) {
        coords[name].name = name;
      }
    }
    this.coords = coords;

    // White point

    var white = (_ref5 = (_options$white = options.white) !== null && _options$white !== void 0 ? _options$white : this.base.white) !== null && _ref5 !== void 0 ? _ref5 : "D65";
    this.white = getWhite(white);

    // Sort out formats

    this.formats = (_options$formats = options.formats) !== null && _options$formats !== void 0 ? _options$formats : {};
    for (var _name in this.formats) {
      var format = this.formats[_name];
      format.type || (format.type = "function");
      format.name || (format.name = _name);
    }
    if (!((_this$formats$color = this.formats.color) !== null && _this$formats$color !== void 0 && _this$formats$color.id)) {
      var _this$formats$color2;
      this.formats.color = _objectSpread(_objectSpread({}, (_this$formats$color2 = this.formats.color) !== null && _this$formats$color2 !== void 0 ? _this$formats$color2 : {}), {}, {
        id: options.cssId || this.id
      });
    }

    // Gamut space

    if (options.gamutSpace) {
      // Gamut space explicitly specified
      this.gamutSpace = options.gamutSpace === "self" ? this : ColorSpace.get(options.gamutSpace);
    } else {
      // No gamut space specified, calculate a sensible default
      if (this.isPolar) {
        // Do not check gamut through polar coordinates
        this.gamutSpace = this.base;
      } else {
        this.gamutSpace = this;
      }
    }

    // Optimize inGamut for unbounded spaces
    if (this.gamutSpace.isUnbounded) {
      this.inGamut = function (coords, options) {
        return true;
      };
    }

    // Other stuff
    this.referred = options.referred;

    // Compute ancestors and store them, since they will never change
    Object.defineProperty(this, "path", {
      value: getPath(this).reverse(),
      writable: false,
      enumerable: true,
      configurable: true
    });
    hooks.run("colorspace-init-end", this);
  }
  return _createClass(ColorSpace, [{
    key: "inGamut",
    value: function inGamut(coords) {
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref6$epsilon = _ref6.epsilon,
        epsilon = _ref6$epsilon === void 0 ? ε$7 : _ref6$epsilon;
      if (!this.equals(this.gamutSpace)) {
        coords = this.to(this.gamutSpace, coords);
        return this.gamutSpace.inGamut(coords, {
          epsilon: epsilon
        });
      }
      var coordMeta = Object.values(this.coords);
      return coords.every(function (c, i) {
        var meta = coordMeta[i];
        if (meta.type !== "angle" && meta.range) {
          if (isNone(c)) {
            // NaN is always in gamut
            return true;
          }
          var _meta$range = _slicedToArray(meta.range, 2),
            min = _meta$range[0],
            _max3 = _meta$range[1];
          return (min === undefined || c >= min - epsilon) && (_max3 === undefined || c <= _max3 + epsilon);
        }
        return true;
      });
    }
  }, {
    key: "isUnbounded",
    get: function get() {
      return Object.values(this.coords).every(function (coord) {
        return !("range" in coord);
      });
    }
  }, {
    key: "cssId",
    get: function get() {
      var _this$formats;
      return ((_this$formats = this.formats) === null || _this$formats === void 0 || (_this$formats = _this$formats.color) === null || _this$formats === void 0 ? void 0 : _this$formats.id) || this.id;
    }
  }, {
    key: "isPolar",
    get: function get() {
      for (var id in this.coords) {
        if (this.coords[id].type === "angle") {
          return true;
        }
      }
      return false;
    }

    /**
     * Lookup a format in this color space
     * @param {string | object | Format} format - Format id if string. If object, it's converted to a `Format` object and returned.
     * @returns {Format}
     */
  }, {
    key: "getFormat",
    value: function getFormat(format) {
      if (!format) {
        return null;
      }
      if (format === "default") {
        format = Object.values(this.formats)[0];
      } else if (typeof format === "string") {
        format = this.formats[format];
      }
      var ret = Format.get(format, this);
      if (ret !== format && format.name in this.formats) {
        // Update the format we have on file so we can find it more quickly next time
        this.formats[format.name] = ret;
      }
      return ret;
    }

    /**
     * Check if this color space is the same as another color space reference.
     * Allows proxying color space objects and comparing color spaces with ids.
     * @param {string | ColorSpace} space ColorSpace object or id to compare to
     * @returns {boolean}
     */
  }, {
    key: "equals",
    value: function equals(space) {
      if (!space) {
        return false;
      }
      return this === space || this.id === space || this.id === space.id;
    }
  }, {
    key: "to",
    value: function to(space, coords) {
      if (arguments.length === 1) {
        var color = getColor(space);
        var _ref7 = [color.space, color.coords];
        space = _ref7[0];
        coords = _ref7[1];
      }
      space = ColorSpace.get(space);
      if (this.equals(space)) {
        // Same space, no change needed
        return coords;
      }

      // Convert NaN to 0, which seems to be valid in every coordinate of every color space
      coords = coords.map(function (c) {
        return isNone(c) ? 0 : c;
      });

      // Find connection space = lowest common ancestor in the base tree
      var myPath = this.path;
      var otherPath = space.path;
      var connectionSpace, connectionSpaceIndex;
      for (var i = 0; i < myPath.length; i++) {
        if (myPath[i].equals(otherPath[i])) {
          connectionSpace = myPath[i];
          connectionSpaceIndex = i;
        } else {
          break;
        }
      }
      if (!connectionSpace) {
        // This should never happen
        throw new Error("Cannot convert between color spaces ".concat(this, " and ").concat(space, ": no connection space was found"));
      }

      // Go up from current space to connection space
      for (var _i = myPath.length - 1; _i > connectionSpaceIndex; _i--) {
        coords = myPath[_i].toBase(coords);
      }

      // Go down from connection space to target space
      for (var _i2 = connectionSpaceIndex + 1; _i2 < otherPath.length; _i2++) {
        coords = otherPath[_i2].fromBase(coords);
      }
      return coords;
    }
  }, {
    key: "from",
    value: function from(space, coords) {
      if (arguments.length === 1) {
        var color = getColor(space);
        var _ref8 = [color.space, color.coords];
        space = _ref8[0];
        coords = _ref8[1];
      }
      space = ColorSpace.get(space);
      return space.to(this, coords);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.name, " (").concat(this.id, ")");
    }
  }, {
    key: "getMinCoords",
    value: function getMinCoords() {
      var ret = [];
      for (var id in this.coords) {
        var _range$min;
        var meta = this.coords[id];
        var _range = meta.range || meta.refRange;
        ret.push((_range$min = _range === null || _range === void 0 ? void 0 : _range.min) !== null && _range$min !== void 0 ? _range$min : 0);
      }
      return ret;
    }
  }], [{
    key: "all",
    get:
    // Returns array of unique color spaces
    function get() {
      return _toConsumableArray(new Set(Object.values(ColorSpace.registry)));
    }
  }, {
    key: "register",
    value: function register(id, space) {
      if (arguments.length === 1) {
        space = arguments[0];
        id = space.id;
      }
      space = this.get(space);
      if (this.registry[id] && this.registry[id] !== space) {
        throw new Error("Duplicate color space registration: '".concat(id, "'"));
      }
      this.registry[id] = space;

      // Register aliases when called without an explicit ID.
      if (arguments.length === 1 && space.aliases) {
        var _iterator3 = _createForOfIteratorHelper(space.aliases),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var alias = _step3.value;
            this.register(alias, space);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return space;
    }

    /**
     * Lookup ColorSpace object by name
     * @param {ColorSpace | string} name
     */
  }, {
    key: "get",
    value: function get(space) {
      if (!space || isInstance(space, this)) {
        return space;
      }
      var argType = type(space);
      if (argType === "string") {
        // It's a color space id
        var ret = ColorSpace.registry[space.toLowerCase()];
        if (!ret) {
          throw new TypeError("No color space found with id = \"".concat(space, "\""));
        }
        return ret;
      }
      for (var _len2 = arguments.length, alternatives = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        alternatives[_key2 - 1] = arguments[_key2];
      }
      if (alternatives.length) {
        return ColorSpace.get.apply(ColorSpace, alternatives);
      }
      throw new TypeError("".concat(space, " is not a valid color space"));
    }

    /**
     * Look up all color spaces for a format that matches certain criteria
     * @param {object | string} filters
     * @param {Array<ColorSpace>} [spaces=ColorSpace.all]
     * @returns {Format | null}
     */
  }, {
    key: "findFormat",
    value: function findFormat(filters) {
      var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ColorSpace.all;
      if (!filters) {
        return null;
      }
      if (typeof filters === "string") {
        filters = {
          name: filters
        };
      }
      var _iterator4 = _createForOfIteratorHelper(spaces),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var space = _step4.value;
          var _loop = function _loop() {
              var _format$name, _format$type;
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
                name = _Object$entries$_i[0],
                format = _Object$entries$_i[1];
              (_format$name = format.name) !== null && _format$name !== void 0 ? _format$name : format.name = name;
              (_format$type = format.type) !== null && _format$type !== void 0 ? _format$type : format.type = "function";
              var matches = (!filters.name || format.name === filters.name) && (!filters.type || format.type === filters.type);
              if (filters.id) {
                var ids = format.ids || [format.id];
                var filterIds = Array.isArray(filters.id) ? filters.id : [filters.id];
                matches && (matches = filterIds.some(function (id) {
                  return ids.includes(id);
                }));
              }
              if (matches) {
                var ret = Format.get(format, space);
                if (ret !== format) {
                  space.formats[format.name] = ret;
                }
                return {
                  v: ret
                };
              }
            },
            _ret;
          for (var _i3 = 0, _Object$entries = Object.entries(space.formats); _i3 < _Object$entries.length; _i3++) {
            _ret = _loop();
            if (_ret) return _ret.v;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return null;
    }

    /**
     * Get metadata about a coordinate of a color space
     *
     * @static
     * @param {Array | string} ref
     * @param {ColorSpace | string} [workingSpace]
     * @return {Object}
     */
  }, {
    key: "resolveCoord",
    value: function resolveCoord(ref, workingSpace) {
      var coordType = type(ref);
      var space, coord;
      if (coordType === "string") {
        if (ref.includes(".")) {
          // Absolute coordinate
          var _ref$split = ref.split(".");
          var _ref$split2 = _slicedToArray(_ref$split, 2);
          space = _ref$split2[0];
          coord = _ref$split2[1];
        } else {
          // Relative coordinate
          space = void 0;
          coord = ref;
        }
      } else if (Array.isArray(ref)) {
        var _ref9 = _slicedToArray(ref, 2);
        space = _ref9[0];
        coord = _ref9[1];
      } else {
        // Object
        space = ref.space;
        coord = ref.coordId;
      }
      space = ColorSpace.get(space);
      if (!space) {
        space = workingSpace;
      }
      if (!space) {
        throw new TypeError("Cannot resolve coordinate reference ".concat(ref, ": No color space specified and relative references are not allowed here"));
      }
      coordType = type(coord);
      if (coordType === "number" || coordType === "string" && coord >= 0) {
        // Resolve numerical coord
        var meta = Object.entries(space.coords)[coord];
        if (meta) {
          return _objectSpread({
            space: space,
            id: meta[0],
            index: coord
          }, meta[1]);
        }
      }
      space = ColorSpace.get(space);
      var normalizedCoord = coord.toLowerCase();
      var i = 0;
      for (var id in space.coords) {
        var _meta$name;
        var _meta = space.coords[id];
        if (id.toLowerCase() === normalizedCoord || ((_meta$name = _meta.name) === null || _meta$name === void 0 ? void 0 : _meta$name.toLowerCase()) === normalizedCoord) {
          return _objectSpread({
            space: space,
            id: id,
            index: i
          }, _meta);
        }
        i++;
      }
      throw new TypeError("No \"".concat(coord, "\" coordinate found in ").concat(space.name, ". Its coordinates are: ").concat(Object.keys(space.coords).join(", ")));
    }
  }]);
}();
_defineProperty(ColorSpace, "registry", {});
_defineProperty(ColorSpace, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
function getPath(space) {
  var ret = [space];
  for (var s = space; s = s.base;) {
    ret.push(s);
  }
  return ret;
}
var xyz_d65 = new ColorSpace({
  id: "xyz-d65",
  name: "XYZ D65",
  coords: {
    x: {
      refRange: [0, 1],
      name: "X"
    },
    y: {
      refRange: [0, 1],
      name: "Y"
    },
    z: {
      refRange: [0, 1],
      name: "Z"
    }
  },
  white: "D65",
  formats: {
    color: {
      ids: ["xyz-d65", "xyz"]
    }
  },
  aliases: ["xyz"]
});

// Type re-exports
/** @typedef {import("./types.js").RGBOptions} RGBOptions */

/** Convenience class for RGB color spaces */
var RGBColorSpace = /*#__PURE__*/function (_ColorSpace2) {
  /**
   * Creates a new RGB ColorSpace.
   * If coords are not specified, they will use the default RGB coords.
   * Instead of `fromBase()` and `toBase()` functions,
   * you can specify to/from XYZ matrices and have `toBase()` and `fromBase()` automatically generated.
   * @param {RGBOptions} options
   */
  function RGBColorSpace(options) {
    var _options$referred;
    var _this4;
    _classCallCheck(this, RGBColorSpace);
    if (!options.coords) {
      options.coords = {
        r: {
          range: [0, 1],
          name: "Red"
        },
        g: {
          range: [0, 1],
          name: "Green"
        },
        b: {
          range: [0, 1],
          name: "Blue"
        }
      };
    }
    if (!options.base) {
      options.base = xyz_d65;
    }
    if (options.toXYZ_M && options.fromXYZ_M) {
      var _options$toBase, _options$fromBase;
      (_options$toBase = options.toBase) !== null && _options$toBase !== void 0 ? _options$toBase : options.toBase = function (rgb) {
        var xyz = multiply_v3_m3x3(rgb, options.toXYZ_M);
        if (_this4.white !== _this4.base.white) {
          // Perform chromatic adaptation
          xyz = adapt$2(_this4.white, _this4.base.white, xyz);
        }
        return xyz;
      };
      (_options$fromBase = options.fromBase) !== null && _options$fromBase !== void 0 ? _options$fromBase : options.fromBase = function (xyz) {
        xyz = adapt$2(_this4.base.white, _this4.white, xyz);
        return multiply_v3_m3x3(xyz, options.fromXYZ_M);
      };
    }
    (_options$referred = options.referred) !== null && _options$referred !== void 0 ? _options$referred : options.referred = "display";
    return _this4 = _callSuper(this, RGBColorSpace, [options]);
  }
  _inherits(RGBColorSpace, _ColorSpace2);
  return _createClass(RGBColorSpace);
}(ColorSpace);
/** @import { ColorTypes, PlainColorObject } from "./types.js" */
// Type re-exports
/** @typedef {import("./types.js").TryColorOptions} TryColorOptions */
/**
 * Resolves a color reference (object or string) to a plain color object, or `null` if resolution fails.
 * Can resolve more complex CSS colors (e.g. relative colors, `calc()`, CSS variables, `color-mix()`, etc.) through the DOM.
 *
 * @overload
 * @param {ColorTypes} color
 * @param {TryColorOptions} [options]
 * @returns {PlainColorObject | null}
 */
/**
 * @overload
 * @param {ColorTypes[]} color
 * @param {TryColorOptions} [options]
 * @returns {(PlainColorObject | null)[]}
 */
function tryColor(color) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (Array.isArray(color)) {
    return color.map(function (c) {
      return tryColor(c, options);
    });
  }
  var _options$cssProperty = options.cssProperty,
    cssProperty = _options$cssProperty === void 0 ? "background-color" : _options$cssProperty,
    element = options.element,
    getColorOptions = _objectWithoutProperties(options, _excluded);
  var error = null;
  try {
    return getColor(color, getColorOptions);
  } catch (e) {
    error = e;
  }
  var CSS = globalThis.CSS,
    getComputedStyle = globalThis.getComputedStyle;
  if (isString(color) && element && CSS && getComputedStyle) {
    // Try resolving the color using the DOM, if supported in CSS
    if (CSS.supports(cssProperty, color)) {
      var previousValue = element.style[cssProperty];
      if (color !== previousValue) {
        element.style[cssProperty] = color;
      }
      var computedColor = getComputedStyle(element).getPropertyValue(cssProperty);
      if (color !== previousValue) {
        element.style[cssProperty] = previousValue;
      }
      if (computedColor !== color) {
        // getComputedStyle() changed the color, try again
        try {
          return getColor(computedColor, getColorOptions);
        } catch (e) {
          error = e;
        }
      } else {
        // Still not resolved
        error = {
          message: "Color value is a valid CSS color, but it could not be resolved :("
        };
      }
    }
  }

  // If we're here, we failed to resolve the color
  if (options.errorMeta) {
    options.errorMeta.error = error;
  }
  return null;
}

/** @import { ColorTypes, Coords } from "./types.js" */

/**
 * Options for {@link getAll}
 * @typedef GetAllOptions
 * @property {string | ColorSpace | undefined} [space]
 * The color space to convert to. Defaults to the color's current space
 * @property {number | undefined} [precision]
 * The number of significant digits to round the coordinates to
 */

/**
 * Get the coordinates of a color in any color space
 * @overload
 * @param {ColorTypes} color
 * @param {string | ColorSpace} [options=color.space] The color space to convert to. Defaults to the color's current space
 * @returns {Coords} The color coordinates in the given color space
 */
/**
 * @overload
 * @param {ColorTypes} color
 * @param {GetAllOptions} [options]
 * @returns {Coords} The color coordinates in the given color space
 */
function getAll(color, options) {
  color = getColor(color);
  var space = ColorSpace.get(options, options === null || options === void 0 ? void 0 : options.space);
  var precision = options === null || options === void 0 ? void 0 : options.precision;
  var coords;
  if (!space || color.space.equals(space)) {
    // No conversion needed
    coords = color.coords.slice();
  } else {
    coords = space.from(color);
  }
  return precision === undefined ? coords : coords.map(function (coord) {
    return toPrecision(coord, precision);
  });
}

/** @import { ColorTypes, Ref } from "./types.js" */

/**
 * @param {ColorTypes} color
 * @param {Ref} prop
 * @returns {number}
 */
function get(color, prop) {
  color = getColor(color);
  if (prop === "alpha") {
    var _color$alpha;
    return (_color$alpha = color.alpha) !== null && _color$alpha !== void 0 ? _color$alpha : 1;
  }
  var _ColorSpace$resolveCo = ColorSpace.resolveCoord(prop, color.space),
    space = _ColorSpace$resolveCo.space,
    index = _ColorSpace$resolveCo.index;
  var coords = getAll(color, space);
  return coords[index];
}

/** @import { ColorTypes, Coords, PlainColorObject } from "./types.js" */

/**
 * Set all coordinates of a color at once, in its own color space or another.
 * Modifies the color in place.
 * @overload
 * @param {ColorTypes} color
 * @param {Coords} coords Array of coordinates
 * @param {number} [alpha]
 * @returns {PlainColorObject}
 */
/**
 * @overload
 * @param {ColorTypes} color
 * @param {string | ColorSpace} space The color space of the provided coordinates.
 * @param {Coords} coords Array of coordinates
 * @param {number} [alpha]
 * @returns {PlainColorObject}
 */
function setAll(color, space, coords, alpha) {
  color = getColor(color);
  if (Array.isArray(space)) {
    // Space is omitted
    var _ref0 = [color.space, space, coords];
    space = _ref0[0];
    coords = _ref0[1];
    alpha = _ref0[2];
  }
  space = ColorSpace.get(space); // Make sure we have a ColorSpace object
  color.coords = space === color.space ? coords.slice() : space.to(color.space, coords);
  if (alpha !== undefined) {
    color.alpha = alpha;
  }
  return color;
}

/** @type {"color"} */
setAll.returns = "color";

/** @import { ColorTypes, PlainColorObject, Ref } from "./types.js" */

/**
 * Set properties and return current instance
 * @overload
 * @param {ColorTypes} color
 * @param {Ref} prop
 * @param {number | ((coord: number) => number)} value
 * @returns {PlainColorObject}
 */
/**
 * @overload
 * @param {ColorTypes} color
 * @param {Record<string, number | ((coord: number) => number)>} props
 * @returns {PlainColorObject}
 */
function set(color, prop, value) {
  color = getColor(color);
  if (arguments.length === 2 && type(arguments[1]) === "object") {
    // Argument is an object literal
    var object = arguments[1];
    for (var _p in object) {
      set(color, _p, object[_p]);
    }
  } else {
    if (typeof value === "function") {
      value = value(get(color, prop));
    }
    if (prop === "alpha") {
      color.alpha = value;
    } else {
      var _ColorSpace$resolveCo2 = ColorSpace.resolveCoord(prop, color.space),
        space = _ColorSpace$resolveCo2.space,
        index = _ColorSpace$resolveCo2.index;
      var coords = getAll(color, space);
      coords[index] = value;
      setAll(color, space, coords);
    }
  }
  return color;
}

/** @type {"color"} */
set.returns = "color";
var XYZ_D50 = new ColorSpace({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: xyz_d65,
  fromBase: function fromBase(coords) {
    return adapt$2(xyz_d65.white, "D50", coords);
  },
  toBase: function toBase(coords) {
    return adapt$2("D50", xyz_d65.white, coords);
  }
});

// κ * ε  = 2^3 = 8
var ε$6 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var ε3$1 = 24 / 116;
var κ$4 = 24389 / 27; // 29^3/3^3

var white$4 = WHITES.D50;
var lab = new ColorSpace({
  id: "lab",
  name: "Lab",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    a: {
      refRange: [-125, 125]
    },
    b: {
      refRange: [-125, 125]
    }
  },
  // Assuming XYZ is relative to D50, convert to CIE Lab
  // from CIE standard, which now defines these as a rational fraction
  white: white$4,
  base: XYZ_D50,
  // Convert D50-adapted XYX to Lab
  // CIE 15.3:2004 section 8.2.1.1
  fromBase: function fromBase(XYZ) {
    // XYZ scaled relative to reference white
    var xyz = XYZ.map(function (value, i) {
      return value / white$4[i];
    });
    var f = xyz.map(function (value) {
      return value > ε$6 ? Math.cbrt(value) : (κ$4 * value + 16) / 116;
    });
    var L = 116 * f[1] - 16;
    var a = 500 * (f[0] - f[1]);
    var b = 200 * (f[1] - f[2]);
    return [L, a, b];
  },
  // Convert Lab to D50-adapted XYZ
  // Same result as CIE 15.3:2004 Appendix D although the derivation is different
  // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  toBase: function toBase(Lab) {
    // compute f, starting with the luminance-related term
    var _Lab = _slicedToArray(Lab, 3),
      L = _Lab[0],
      a = _Lab[1],
      b = _Lab[2];
    var f = [];
    f[1] = (L + 16) / 116;
    f[0] = a / 500 + f[1];
    f[2] = f[1] - b / 200;

    // compute xyz
    // prettier-ignore
    var xyz = [f[0] > ε3$1 ? Math.pow(f[0], 3) : (116 * f[0] - 16) / κ$4, Lab[0] > 8 ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / κ$4, f[2] > ε3$1 ? Math.pow(f[2], 3) : (116 * f[2] - 16) / κ$4];

    // Compute XYZ by scaling xyz by reference white
    return xyz.map(function (value, i) {
      return value * white$4[i];
    });
  },
  formats: {
    lab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <percentage>"]
    }
  }
});

/**
 * Constrain an angle to 360 degrees
 * @param {number} angle
 * @returns {number}
 */
function constrain(angle) {
  if (typeof angle !== "number") {
    return angle;
  }
  return (angle % 360 + 360) % 360;
}

/**
 * @param {"raw" | "increasing" | "decreasing" | "longer" | "shorter"} arc
 * @param {[number, number]} angles
 * @returns {[number, number]}
 */
function adjust(arc, angles) {
  var _angles = _slicedToArray(angles, 2),
    a1 = _angles[0],
    a2 = _angles[1];
  var none1 = isNone(a1);
  var none2 = isNone(a2);
  if (none1 && none2) {
    return [a1, a2];
  } else if (none1) {
    a1 = a2;
  } else if (none2) {
    a2 = a1;
  }
  if (arc === "raw") {
    return angles;
  }
  a1 = constrain(a1);
  a2 = constrain(a2);
  var angleDiff = a2 - a1;
  if (arc === "increasing") {
    if (angleDiff < 0) {
      a2 += 360;
    }
  } else if (arc === "decreasing") {
    if (angleDiff > 0) {
      a1 += 360;
    }
  } else if (arc === "longer") {
    if (-180 < angleDiff && angleDiff < 180) {
      if (angleDiff > 0) {
        a1 += 360;
      } else {
        a2 += 360;
      }
    }
  } else if (arc === "shorter") {
    if (angleDiff > 180) {
      a1 += 360;
    } else if (angleDiff < -180) {
      a2 += 360;
    }
  }
  return [a1, a2];
}
var lch = new ColorSpace({
  id: "lch",
  name: "LCH",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    c: {
      refRange: [0, 150],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: lab,
  fromBase: function fromBase(Lab) {
    // These methods are used for other polar forms as well, so we can't hardcode the ε
    if (this.ε === undefined) {
      // @ts-expect-error Property 'coords' does not exist on type 'string | ColorSpace'
      var _range2 = Object.values(this.base.coords)[1].refRange;
      var extent = _range2[1] - _range2[0];
      this.ε = extent / 100000;
    }

    // Convert to polar form
    var _Lab2 = _slicedToArray(Lab, 3),
      L = _Lab2[0],
      a = _Lab2[1],
      b = _Lab2[2];
    var isAchromatic = Math.abs(a) < this.ε && Math.abs(b) < this.ε;
    var h = isAchromatic ? null : constrain(Math.atan2(b, a) * 180 / Math.PI);
    var C = isAchromatic ? 0 : Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return [L, C, h];
  },
  toBase: function toBase(lch) {
    // Convert from polar form
    var _lch = _slicedToArray(lch, 3),
      L = _lch[0],
      C = _lch[1],
      h = _lch[2];
    var a = null,
      b = null;
    if (!isNone(h)) {
      C = C < 0 ? 0 : C; // Clamp negative Chroma
      a = C * Math.cos(h * Math.PI / 180);
      b = C * Math.sin(h * Math.PI / 180);
    }
    return [L, a, b];
  },
  formats: {
    lch: {
      coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
});

// deltaE2000 is a statistically significant improvement
// and is recommended by the CIE and Idealliance
// especially for color differences less than 10 deltaE76
// but is wicked complicated
// and many implementations have small errors!
// DeltaE2000 is also discontinuous; in case this
// matters to you, use deltaECMC instead.

var Gfactor = Math.pow(25, 7);
var π$1 = Math.PI;
var r2d = 180 / π$1;
var d2r$1 = π$1 / 180;
function pow7(x) {
  // Faster than x ** 7 or Math.pow(x, 7)

  var x2 = x * x;
  var x7 = x2 * x2 * x2 * x;
  return x7;
}

/**
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @param {{ kL?: number | undefined; kC?: number | undefined; kH?: number | undefined }} options
 * @returns {number}
 */
function deltaE2000(color, sample) {
  var _ref1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref1$kL = _ref1.kL,
    kL = _ref1$kL === void 0 ? 1 : _ref1$kL,
    _ref1$kC = _ref1.kC,
    kC = _ref1$kC === void 0 ? 1 : _ref1$kC,
    _ref1$kH = _ref1.kH,
    kH = _ref1$kH === void 0 ? 1 : _ref1$kH;
  // Given this color as the reference
  // and the function parameter as the sample,
  // calculate deltaE 2000.
  // This implementation assumes the parametric
  // weighting factors kL, kC and kH
  // for the influence of viewing conditions
  // are all 1, as sadly seems typical.
  // kL should be increased for lightness texture or noise
  // and kC increased for chroma noise
  var _getColor = getColor([color, sample]);
  var _getColor2 = _slicedToArray(_getColor, 2);
  color = _getColor2[0];
  sample = _getColor2[1];
  var _lab$from = lab.from(color),
    _lab$from2 = _slicedToArray(_lab$from, 3),
    L1 = _lab$from2[0],
    a1 = _lab$from2[1],
    b1 = _lab$from2[2];
  var C1 = lch.from(lab, [L1, a1, b1])[1];
  var _lab$from3 = lab.from(sample),
    _lab$from4 = _slicedToArray(_lab$from3, 3),
    L2 = _lab$from4[0],
    a2 = _lab$from4[1],
    b2 = _lab$from4[2];
  var C2 = lch.from(lab, [L2, a2, b2])[1];

  // Check for negative Chroma,
  // which might happen through
  // direct user input of LCH values

  if (C1 < 0) {
    C1 = 0;
  }
  if (C2 < 0) {
    C2 = 0;
  }
  var Cbar = (C1 + C2) / 2; // mean Chroma

  // calculate a-axis asymmetry factor from mean Chroma
  // this turns JND ellipses for near-neutral colors back into circles
  var C7 = pow7(Cbar);
  var G = 0.5 * (1 - Math.sqrt(C7 / (C7 + Gfactor)));

  // scale a axes by asymmetry factor
  // this by the way is why there is no Lab2000 colorspace
  var adash1 = (1 + G) * a1;
  var adash2 = (1 + G) * a2;

  // calculate new Chroma from scaled a and original b axes
  var Cdash1 = Math.sqrt(Math.pow(adash1, 2) + Math.pow(b1, 2));
  var Cdash2 = Math.sqrt(Math.pow(adash2, 2) + Math.pow(b2, 2));

  // calculate new hues, with zero hue for true neutrals
  // and in degrees, not radians

  var h1 = adash1 === 0 && b1 === 0 ? 0 : Math.atan2(b1, adash1);
  var h2 = adash2 === 0 && b2 === 0 ? 0 : Math.atan2(b2, adash2);
  if (h1 < 0) {
    h1 += 2 * π$1;
  }
  if (h2 < 0) {
    h2 += 2 * π$1;
  }
  h1 *= r2d;
  h2 *= r2d;

  // Lightness and Chroma differences; sign matters
  var ΔL = L2 - L1;
  var ΔC = Cdash2 - Cdash1;

  // Hue difference, getting the sign correct
  var hdiff = h2 - h1;
  var hsum = h1 + h2;
  var habs = Math.abs(hdiff);
  var Δh;
  if (Cdash1 * Cdash2 === 0) {
    Δh = 0;
  } else if (habs <= 180) {
    Δh = hdiff;
  } else if (hdiff > 180) {
    Δh = hdiff - 360;
  } else if (hdiff < -180) {
    Δh = hdiff + 360;
  } else {
    defaults.warn("the unthinkable has happened");
  }

  // weighted Hue difference, more for larger Chroma
  var ΔH = 2 * Math.sqrt(Cdash2 * Cdash1) * Math.sin(Δh * d2r$1 / 2);

  // calculate mean Lightness and Chroma
  var Ldash = (L1 + L2) / 2;
  var Cdash = (Cdash1 + Cdash2) / 2;
  var Cdash7 = pow7(Cdash);

  // Compensate for non-linearity in the blue region of Lab.
  // Four possibilities for hue weighting factor,
  // depending on the angles, to get the correct sign
  var hdash;
  if (Cdash1 * Cdash2 === 0) {
    hdash = hsum; // which should be zero
  } else if (habs <= 180) {
    hdash = hsum / 2;
  } else if (hsum < 360) {
    hdash = (hsum + 360) / 2;
  } else {
    hdash = (hsum - 360) / 2;
  }

  // positional corrections to the lack of uniformity of CIELAB
  // These are all trying to make JND ellipsoids more like spheres

  // SL Lightness crispening factor
  // a background with L=50 is assumed
  var lsq = Math.pow(Ldash - 50, 2);
  var SL = 1 + 0.015 * lsq / Math.sqrt(20 + lsq);

  // SC Chroma factor, similar to those in CMC and deltaE 94 formulae
  var SC = 1 + 0.045 * Cdash;

  // Cross term T for blue non-linearity
  var T = 1;
  T -= 0.17 * Math.cos((hdash - 30) * d2r$1);
  T += 0.24 * Math.cos(2 * hdash * d2r$1);
  T += 0.32 * Math.cos((3 * hdash + 6) * d2r$1);
  T -= 0.2 * Math.cos((4 * hdash - 63) * d2r$1);

  // SH Hue factor depends on Chroma,
  // as well as adjusted hue angle like deltaE94.
  var SH = 1 + 0.015 * Cdash * T;

  // RT Hue rotation term compensates for rotation of JND ellipses
  // and Munsell constant hue lines
  // in the medium-high Chroma blue region
  // (Hue 225 to 315)
  var Δθ = 30 * Math.exp(-1 * Math.pow((hdash - 275) / 25, 2));
  var RC = 2 * Math.sqrt(Cdash7 / (Cdash7 + Gfactor));
  var RT = -1 * Math.sin(2 * Δθ * d2r$1) * RC;

  // Finally calculate the deltaE, term by term as root sume of squares
  var dE = Math.pow(ΔL / (kL * SL), 2);
  dE += Math.pow(ΔC / (kC * SC), 2);
  dE += Math.pow(ΔH / (kH * SH), 2);
  dE += RT * (ΔC / (kC * SC)) * (ΔH / (kH * SH));
  return Math.sqrt(dE);
  // Yay!!!
}

/** @import { Matrix3x3 } from "../types.js" */

// Recalculated for consistent reference white
// see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
/** @type {Matrix3x3} */
// prettier-ignore
var XYZtoLMS_M$1 = [[0.8190224379967030, 0.3619062600528904, -0.1288737815209879], [0.0329836539323885, 0.9292868615863434, 0.0361446663506424], [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]];
// inverse of XYZtoLMS_M
/** @type {Matrix3x3} */
// prettier-ignore
var LMStoXYZ_M$1 = [[1.2268798758459243, -0.5578149944602171, 0.2813910456659647], [-0.0405757452148008, 1.1122868032803170, -0.0717110580655164], [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]];
/** @type {Matrix3x3} */
// prettier-ignore
var LMStoLab_M = [[0.2104542683093140, 0.7936177747023054, -0.0040720430116193], [1.9779985324311684, -2.4285922420485799, 0.4505937096174110], [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]];
// LMStoIab_M inverted
/** @type {Matrix3x3} */
// prettier-ignore
var LabtoLMS_M = [[1.0000000000000000, 0.3963377773761749, 0.2158037573099136], [1.0000000000000000, -0.1055613458156586, -0.0638541728258133], [1.0000000000000000, -0.0894841775298119, -1.2914855480194092]];
var Oklab = new ColorSpace({
  id: "oklab",
  name: "Oklab",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    a: {
      refRange: [-0.4, 0.4]
    },
    b: {
      refRange: [-0.4, 0.4]
    }
  },
  // Note that XYZ is relative to D65
  white: "D65",
  base: xyz_d65,
  fromBase: function fromBase(XYZ) {
    // move to LMS cone domain
    var LMS = multiply_v3_m3x3(XYZ, XYZtoLMS_M$1);

    // non-linearity
    LMS[0] = Math.cbrt(LMS[0]);
    LMS[1] = Math.cbrt(LMS[1]);
    LMS[2] = Math.cbrt(LMS[2]);
    return multiply_v3_m3x3(LMS, LMStoLab_M, LMS);
  },
  toBase: function toBase(OKLab) {
    // move to LMS cone domain
    var LMSg = multiply_v3_m3x3(OKLab, LabtoLMS_M);

    // restore linearity
    LMSg[0] = Math.pow(LMSg[0], 3);
    LMSg[1] = Math.pow(LMSg[1], 3);
    LMSg[2] = Math.pow(LMSg[2], 3);
    return multiply_v3_m3x3(LMSg, LMStoXYZ_M$1, LMSg);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <percentage>"]
    }
  }
});

/**
 * More accurate color-difference formulae
 * than the simple 1976 Euclidean distance in CIE Lab
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @returns {number}
 */
function deltaEOK(color, sample) {
  // Given this color as the reference
  // and a sample,
  // calculate deltaEOK, term by term as root sum of squares
  var _getColor3 = getColor([color, sample]);
  var _getColor4 = _slicedToArray(_getColor3, 2);
  color = _getColor4[0];
  sample = _getColor4[1];
  var _Oklab$from = Oklab.from(color),
    _Oklab$from2 = _slicedToArray(_Oklab$from, 3),
    L1 = _Oklab$from2[0],
    a1 = _Oklab$from2[1],
    b1 = _Oklab$from2[2];
  var _Oklab$from3 = Oklab.from(sample),
    _Oklab$from4 = _slicedToArray(_Oklab$from3, 3),
    L2 = _Oklab$from4[0],
    a2 = _Oklab$from4[1],
    b2 = _Oklab$from4[2];
  var ΔL = L1 - L2;
  var Δa = a1 - a2;
  var Δb = b1 - b2;
  return Math.sqrt(Math.pow(ΔL, 2) + Math.pow(Δa, 2) + Math.pow(Δb, 2));
}

/** @import { ColorTypes } from "./types.js" */

var ε$5 = 0.000075;

/**
 * Check if a color is in gamut of either its own or another color space
 * @param {ColorTypes} color
 * @param {string | ColorSpace} [space]
 * @param {{ epsilon?: number | undefined }} [param2]
 * @returns {boolean}
 */
function inGamut(color, space) {
  var _ref10 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref10$epsilon = _ref10.epsilon,
    epsilon = _ref10$epsilon === void 0 ? ε$5 : _ref10$epsilon;
  color = getColor(color);
  if (!space) {
    space = color.space;
  }
  space = ColorSpace.get(space);
  var coords = color.coords;
  if (space !== color.space) {
    coords = space.from(color);
  }
  return space.inGamut(coords, {
    epsilon: epsilon
  });
}

/** @import { Coords, PlainColorObject } from "./types.js" */

/**
 * @param {PlainColorObject} color
 * @returns {PlainColorObject}
 */
function clone(color) {
  return {
    space: color.space,
    coords: (/** @type {Coords} */color.coords.slice()),
    alpha: color.alpha
  };
}

/** @import { ColorTypes } from "./types.js" */

/**
 * Euclidean distance of colors in an arbitrary color space
 * @param {ColorTypes} color1
 * @param {ColorTypes} color2
 * @param {string | ColorSpace} space
 * @returns {number}
 */
function distance(color1, color2) {
  var space = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "lab";
  space = ColorSpace.get(space);

  // Assume getColor() is called on color in space.from()
  var coords1 = space.from(color1);
  var coords2 = space.from(color2);
  return Math.sqrt(coords1.reduce(function (acc, c1, i) {
    var c2 = coords2[i];
    if (isNone(c1) || isNone(c2)) {
      return acc;
    }
    return acc + Math.pow(c2 - c1, 2);
  }, 0));
}

/**
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @returns {number}
 */
function deltaE76(color, sample) {
  // Assume getColor() is called in the distance function
  return distance(color, sample, "lab");
}

// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in Lab

// CMC by the Color Measurement Committee of the
// Bradford Society of Dyeists and Colorsts, 1994.
// Uses LCH rather than Lab,
// with different weights for L, C and H differences
// A nice increase in accuracy for modest increase in complexity
var π = Math.PI;
var d2r = π / 180;

/**
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @param {{ l?: number | undefined; c?: number | undefined }} options
 * @returns {number}
 */
function deltaECMC(color, sample) {
  var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref11$l = _ref11.l,
    l = _ref11$l === void 0 ? 2 : _ref11$l,
    _ref11$c = _ref11.c,
    c = _ref11$c === void 0 ? 1 : _ref11$c;
  // Given this color as the reference
  // and a sample,
  // calculate deltaE CMC.
  // This implementation assumes the parametric
  // weighting factors l:c are 2:1
  // which is typical for non-textile uses.
  var _getColor5 = getColor([color, sample]);
  var _getColor6 = _slicedToArray(_getColor5, 2);
  color = _getColor6[0];
  sample = _getColor6[1];
  var _lab$from5 = lab.from(color),
    _lab$from6 = _slicedToArray(_lab$from5, 3),
    L1 = _lab$from6[0],
    a1 = _lab$from6[1],
    b1 = _lab$from6[2];
  var _lch$from = lch.from(lab, [L1, a1, b1]),
    _lch$from2 = _slicedToArray(_lch$from, 3),
    C1 = _lch$from2[1],
    H1 = _lch$from2[2];
  var _lab$from7 = lab.from(sample),
    _lab$from8 = _slicedToArray(_lab$from7, 3),
    L2 = _lab$from8[0],
    a2 = _lab$from8[1],
    b2 = _lab$from8[2];
  var C2 = lch.from(lab, [L2, a2, b2])[1];

  // let [L1, a1, b1] = color.getAll(lab);
  // let C1 = color.get("lch.c");
  // let H1 = color.get("lch.h");
  // let [L2, a2, b2] = sample.getAll(lab);
  // let C2 = sample.get("lch.c");

  // Check for negative Chroma,
  // which might happen through
  // direct user input of LCH values

  if (C1 < 0) {
    C1 = 0;
  }
  if (C2 < 0) {
    C2 = 0;
  }

  // we don't need H2 as ΔH is calculated from Δa, Δb and ΔC

  // Lightness and Chroma differences
  // These are (color - sample), unlike deltaE2000
  var ΔL = L1 - L2;
  var ΔC = C1 - C2;
  var Δa = a1 - a2;
  var Δb = b1 - b2;

  // weighted Hue difference, less for larger Chroma difference

  var H2 = Math.pow(Δa, 2) + Math.pow(Δb, 2) - Math.pow(ΔC, 2);
  // due to roundoff error it is possible that, for zero a and b,
  // ΔC > Δa + Δb is 0, resulting in attempting
  // to take the square root of a negative number

  // trying instead the equation from Industrial Color Physics
  // By Georg A. Klein

  // let ΔH = ((a1 * b2) - (a2 * b1)) / Math.sqrt(0.5 * ((C2 * C1) + (a2 * a1) + (b2 * b1)));
  // console.log({ΔH});
  // This gives the same result to 12 decimal places
  // except it sometimes NaNs when trying to root a negative number

  // let ΔH = Math.sqrt(H2); we never actually use the root, it gets squared again!!

  // positional corrections to the lack of uniformity of CIELAB
  // These are all trying to make JND ellipsoids more like spheres

  // SL Lightness crispening factor, depends entirely on L1 not L2
  var SL = 0.511; // linear portion of the Y to L transfer function
  if (L1 >= 16) {
    // cubic portion
    SL = 0.040975 * L1 / (1 + 0.01765 * L1);
  }

  // SC Chroma factor
  var SC = 0.0638 * C1 / (1 + 0.0131 * C1) + 0.638;

  // Cross term T for blue non-linearity
  var T;
  if (isNone(H1)) {
    H1 = 0;
  }
  if (H1 >= 164 && H1 <= 345) {
    T = 0.56 + Math.abs(0.2 * Math.cos((H1 + 168) * d2r));
  } else {
    T = 0.36 + Math.abs(0.4 * Math.cos((H1 + 35) * d2r));
  }
  // console.log({T});

  // SH Hue factor also depends on C1,
  var C4 = Math.pow(C1, 4);
  var F = Math.sqrt(C4 / (C4 + 1900));
  var SH = SC * (F * T + 1 - F);

  // Finally calculate the deltaE, term by term as root sume of squares
  var dE = Math.pow(ΔL / (l * SL), 2);
  dE += Math.pow(ΔC / (c * SC), 2);
  dE += H2 / Math.pow(SH, 2);
  // dE += (ΔH / SH)  ** 2;
  return Math.sqrt(dE);
  // Yay!!!
}
var Yw$1 = 203; // absolute luminance of media white

var XYZ_Abs_D65 = new ColorSpace({
  // Absolute CIE XYZ, with a D65 whitepoint,
  // as used in most HDR colorspaces as a starting point.
  // SDR spaces are converted per BT.2048
  // so that diffuse, media white is 203 cd/m²
  id: "xyz-abs-d65",
  cssId: "--xyz-abs-d65",
  name: "Absolute XYZ D65",
  coords: {
    x: {
      refRange: [0, 9504.7],
      name: "Xa"
    },
    y: {
      refRange: [0, 10000],
      name: "Ya"
    },
    z: {
      refRange: [0, 10888.3],
      name: "Za"
    }
  },
  base: xyz_d65,
  fromBase: function fromBase(XYZ) {
    // Make XYZ absolute, not relative to media white
    // Maximum luminance in PQ is 10,000 cd/m²
    // Relative XYZ has Y=1 for media white
    return XYZ.map(function (v) {
      return v * Yw$1;
    });
  },
  toBase: function toBase(AbsXYZ) {
    // Convert to media-white relative XYZ
    return AbsXYZ.map(function (v) {
      return v / Yw$1;
    });
  }
});

/** @import { Matrix3x3, Vector3 } from "../types.js" */

var b$1 = 1.15;
var g = 0.66;
var n$1 = 2610 / Math.pow(2, 14);
var ninv$1 = Math.pow(2, 14) / 2610;
var c1$2 = 3424 / Math.pow(2, 12);
var c2$2 = 2413 / Math.pow(2, 7);
var c3$2 = 2392 / Math.pow(2, 7);
var p = 1.7 * 2523 / Math.pow(2, 5);
var pinv = Math.pow(2, 5) / (1.7 * 2523);
var d = -0.56;
var d0 = 1.6295499532821566e-11;

/** @type {Matrix3x3} */
// prettier-ignore
var XYZtoCone_M = [[0.41478972, 0.579999, 0.0146480], [-0.2015100, 1.120649, 0.0531008], [-0.0166008, 0.264800, 0.6684799]];
// XYZtoCone_M inverted
/** @type {Matrix3x3} */
// prettier-ignore
var ConetoXYZ_M = [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]];
/** @type {Matrix3x3} */
// prettier-ignore
var ConetoIab_M = [[0.5, 0.5, 0], [3.524000, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]];
// ConetoIab_M inverted
/** @type {Matrix3x3} */
// prettier-ignore
var IabtoCone_M = [[1, 0.13860504327153927, 0.05804731615611883], [1, -0.1386050432715393, -0.058047316156118904], [1, -0.09601924202631895, -0.81189189605603900]];
var Jzazbz = new ColorSpace({
  id: "jzazbz",
  name: "Jzazbz",
  coords: {
    jz: {
      refRange: [0, 1],
      name: "Jz"
    },
    az: {
      refRange: [-0.21, 0.21]
    },
    bz: {
      refRange: [-0.21, 0.21]
    }
  },
  base: XYZ_Abs_D65,
  fromBase: function fromBase(XYZ) {
    // First make XYZ absolute, not relative to media white
    // Maximum luminance in PQ is 10,000 cd/m²
    // Relative XYZ has Y=1 for media white
    // BT.2048 says media white Y=203 at PQ 58

    var _XYZ = _slicedToArray(XYZ, 3),
      Xa = _XYZ[0],
      Ya = _XYZ[1],
      Za = _XYZ[2];

    // modify X and Y to minimize blue curvature
    var Xm = b$1 * Xa - (b$1 - 1) * Za;
    var Ym = g * Ya - (g - 1) * Xa;

    // move to LMS cone domain
    var LMS = multiply_v3_m3x3([Xm, Ym, Za], XYZtoCone_M);

    // PQ-encode LMS
    var PQLMS = /** @type {Vector3} } */
    LMS.map(function (val) {
      var num = c1$2 + c2$2 * spow(val / 10000, n$1);
      var denom = 1 + c3$2 * spow(val / 10000, n$1);
      return spow(num / denom, p);
    });

    // almost there, calculate Iz az bz
    var _multiply_v3_m3x = multiply_v3_m3x3(PQLMS, ConetoIab_M),
      _multiply_v3_m3x2 = _slicedToArray(_multiply_v3_m3x, 3),
      Iz = _multiply_v3_m3x2[0],
      az = _multiply_v3_m3x2[1],
      bz = _multiply_v3_m3x2[2];
    // console.log({Iz, az, bz});

    var Jz = (1 + d) * Iz / (1 + d * Iz) - d0;
    return [Jz, az, bz];
  },
  toBase: function toBase(Jzazbz) {
    var _Jzazbz = _slicedToArray(Jzazbz, 3),
      Jz = _Jzazbz[0],
      az = _Jzazbz[1],
      bz = _Jzazbz[2];
    var Iz = (Jz + d0) / (1 + d - d * (Jz + d0));

    // bring into LMS cone domain
    var PQLMS = multiply_v3_m3x3([Iz, az, bz], IabtoCone_M);

    // convert from PQ-coded to linear-light
    var LMS = /** @type {Vector3} } */
    PQLMS.map(function (val) {
      var num = c1$2 - spow(val, pinv);
      var denom = c3$2 * spow(val, pinv) - c2$2;
      var x = 10000 * spow(num / denom, ninv$1);
      return x; // luminance relative to diffuse white, [0, 70 or so].
    });

    // modified abs XYZ
    var _multiply_v3_m3x3 = multiply_v3_m3x3(LMS, ConetoXYZ_M),
      _multiply_v3_m3x4 = _slicedToArray(_multiply_v3_m3x3, 3),
      Xm = _multiply_v3_m3x4[0],
      Ym = _multiply_v3_m3x4[1],
      Za = _multiply_v3_m3x4[2];

    // un-modify X and Y to get D65 XYZ, relative to media white
    var Xa = (Xm + (b$1 - 1) * Za) / b$1;
    var Ya = (Ym + (g - 1) * Xa) / g;
    return [Xa, Ya, Za];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    jzazbz: {
      coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <percentage>"]
    }
  }
});
var jzczhz = new ColorSpace({
  id: "jzczhz",
  name: "JzCzHz",
  coords: {
    jz: {
      refRange: [0, 1],
      name: "Jz"
    },
    cz: {
      refRange: [0, 0.26],
      name: "Chroma"
    },
    hz: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Jzazbz,
  fromBase: lch.fromBase,
  toBase: lch.toBase,
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#JzCzhz
    jzczhz: {
      coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
});

/**
 * More accurate color-difference formulae
 * than the simple 1976 Euclidean distance in Lab
 *
 * Uses JzCzHz, which has improved perceptual uniformity
 * and thus a simple Euclidean root-sum of ΔL² ΔC² ΔH²
 * gives good results.
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @returns {number}
 */
function deltaEJz(color, sample) {
  // Given this color as the reference
  // and a sample,
  // calculate deltaE in JzCzHz.
  var _getColor7 = getColor([color, sample]);
  var _getColor8 = _slicedToArray(_getColor7, 2);
  color = _getColor8[0];
  sample = _getColor8[1];
  var _jzczhz$from = jzczhz.from(color),
    _jzczhz$from2 = _slicedToArray(_jzczhz$from, 3),
    Jz1 = _jzczhz$from2[0],
    Cz1 = _jzczhz$from2[1],
    Hz1 = _jzczhz$from2[2];
  var _jzczhz$from3 = jzczhz.from(sample),
    _jzczhz$from4 = _slicedToArray(_jzczhz$from3, 3),
    Jz2 = _jzczhz$from4[0],
    Cz2 = _jzczhz$from4[1],
    Hz2 = _jzczhz$from4[2];

  // Lightness and Chroma differences
  // sign does not matter as they are squared.
  var ΔJ = Jz1 - Jz2;
  var ΔC = Cz1 - Cz2;

  // length of chord for ΔH
  if (isNone(Hz1) && isNone(Hz2)) {
    // both undefined hues
    Hz1 = 0;
    Hz2 = 0;
  } else if (isNone(Hz1)) {
    // one undefined, set to the defined hue
    Hz1 = Hz2;
  } else if (isNone(Hz2)) {
    Hz2 = Hz1;
  }
  var Δh = Hz1 - Hz2;
  var ΔH = 2 * Math.sqrt(Cz1 * Cz2) * Math.sin(Δh / 2 * (Math.PI / 180));
  return Math.sqrt(Math.pow(ΔJ, 2) + Math.pow(ΔC, 2) + Math.pow(ΔH, 2));
}

/** @import { Matrix3x3, Vector3 } from "../types.js" */

var c1$1 = 3424 / 4096;
var c2$1 = 2413 / 128;
var c3$1 = 2392 / 128;
var m1$1 = 2610 / 16384;
var m2 = 2523 / 32;
var im1 = 16384 / 2610;
var im2 = 32 / 2523;

// The matrix below includes the 4% crosstalk components
// and is from the Dolby "What is ICtCp" paper"
/** @type {Matrix3x3} */
// prettier-ignore
var XYZtoLMS_M = [[0.3592832590121217, 0.6976051147779502, -0.0358915932320290], [-0.1920808463704993, 1.1004767970374321, 0.0753748658519118], [0.0070797844607479, 0.0748396662186362, 0.8433265453898765]];
// linear-light Rec.2020 to LMS, again with crosstalk
// rational terms from Jan Fröhlich,
// Encoding High Dynamic Range andWide Color Gamut Imagery, p.97
// and ITU-R BT.2124-0 p.2
/*
const Rec2020toLMS_M = [
	[ 1688 / 4096,  2146 / 4096,   262 / 4096 ],
	[  683 / 4096,  2951 / 4096,   462 / 4096 ],
	[   99 / 4096,   309 / 4096,  3688 / 4096 ]
];
*/
// this includes the Ebner LMS coefficients,
// the rotation, and the scaling to [-0.5,0.5] range
// rational terms from Fröhlich p.97
// and ITU-R BT.2124-0 pp.2-3
/** @type {Matrix3x3} */
// prettier-ignore
var LMStoIPT_M = [[2048 / 4096, 2048 / 4096, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]];

// inverted matrices, calculated from the above
/** @type {Matrix3x3} */
// prettier-ignore
var IPTtoLMS_M = [[0.9999999999999998, 0.0086090370379328, 0.1110296250030260], [0.9999999999999998, -0.0086090370379328, -0.1110296250030259], [0.9999999999999998, 0.5600313357106791, -0.3206271749873188]];
/*
// prettier-ignore
const LMStoRec2020_M = [
	[ 3.4375568932814012112,   -2.5072112125095058195,   0.069654319228104608382],
	[-0.79142868665644156125,   1.9838372198740089874,  -0.19240853321756742626 ],
	[-0.025646662911506476363, -0.099240248643945566751, 1.1248869115554520431  ]
];
*/
/** @type {Matrix3x3} */
// prettier-ignore
var LMStoXYZ_M = [[2.0701522183894223, -1.3263473389671563, 0.2066510476294053], [0.3647385209748072, 0.6805660249472273, -0.0453045459220347], [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042]];

// Only the PQ form of ICtCp is implemented here. There is also an HLG form.
// from Dolby, "WHAT IS ICTCP?"
// https://professional.dolby.com/siteassets/pdfs/ictcp_dolbywhitepaper_v071.pdf
// and
// Dolby, "Perceptual Color Volume
// Measuring the Distinguishable Colors of HDR and WCG Displays"
// https://professional.dolby.com/siteassets/pdfs/dolby-vision-measuring-perceptual-color-volume-v7.1.pdf
var ictcp = new ColorSpace({
  id: "ictcp",
  name: "ICTCP",
  // From BT.2100-2 page 7:
  // During production, signal values are expected to exceed the
  // range E′ = [0.0 : 1.0]. This provides processing headroom and avoids
  // signal degradation during cascaded processing. Such values of E′,
  // below 0.0 or exceeding 1.0, should not be clipped during production
  // and exchange.
  // Values below 0.0 should not be clipped in reference displays (even
  // though they represent “negative” light) to allow the black level of
  // the signal (LB) to be properly set using test signals known as “PLUGE”
  coords: {
    i: {
      refRange: [0, 1],
      // Constant luminance,
      name: "I"
    },
    ct: {
      refRange: [-0.5, 0.5],
      // Full BT.2020 gamut in range [-0.5, 0.5]
      name: "CT"
    },
    cp: {
      refRange: [-0.5, 0.5],
      name: "CP"
    }
  },
  base: XYZ_Abs_D65,
  fromBase: function fromBase(XYZ) {
    // move to LMS cone domain
    var LMS = multiply_v3_m3x3(XYZ, XYZtoLMS_M);
    return LMStoICtCp(LMS);
  },
  toBase: function toBase(ICtCp) {
    var LMS = ICtCptoLMS(ICtCp);
    return multiply_v3_m3x3(LMS, LMStoXYZ_M);
  },
  formats: {
    ictcp: {
      coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <percentage>"]
    }
  }
});

/**
 *
 * @param {Vector3} LMS
 * @returns {Vector3}
 */
function LMStoICtCp(LMS) {
  // apply the PQ EOTF
  // we can't ever be dividing by zero because of the "1 +" in the denominator
  var PQLMS = /** @type {Vector3} */
  LMS.map(function (val) {
    var num = c1$1 + c2$1 * Math.pow(val / 10000, m1$1);
    var denom = 1 + c3$1 * Math.pow(val / 10000, m1$1);
    return Math.pow(num / denom, m2);
  });

  // LMS to IPT, with rotation for Y'C'bC'r compatibility
  return multiply_v3_m3x3(PQLMS, LMStoIPT_M);
}

/**
 *
 * @param {Vector3} ICtCp
 * @returns {Vector3}
 */
function ICtCptoLMS(ICtCp) {
  var PQLMS = multiply_v3_m3x3(ICtCp, IPTtoLMS_M);

  // From BT.2124-0 Annex 2 Conversion 3
  var LMS = /** @type {Vector3} */
  PQLMS.map(function (val) {
    var num = Math.max(Math.pow(val, im2) - c1$1, 0);
    var denom = c2$1 - c3$1 * Math.pow(val, im2);
    return 10000 * Math.pow(num / denom, im1);
  });
  return LMS;
}

/**
 * Delta E in ICtCp space,
 * which the ITU calls Delta E ITP, which is shorter.
 * Formulae from ITU Rec. ITU-R BT.2124-0
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @returns {number}
 */
function deltaEITP(color, sample) {
  // Given this color as the reference
  // and a sample,
  // calculate deltaE in ICtCp
  // which is simply the Euclidean distance
  var _getColor9 = getColor([color, sample]);
  var _getColor0 = _slicedToArray(_getColor9, 2);
  color = _getColor0[0];
  sample = _getColor0[1];
  var _ictcp$from = ictcp.from(color),
    _ictcp$from2 = _slicedToArray(_ictcp$from, 3),
    I1 = _ictcp$from2[0],
    T1 = _ictcp$from2[1],
    P1 = _ictcp$from2[2];
  var _ictcp$from3 = ictcp.from(sample),
    _ictcp$from4 = _slicedToArray(_ictcp$from3, 3),
    I2 = _ictcp$from4[0],
    T2 = _ictcp$from4[1],
    P2 = _ictcp$from4[2];

  // the 0.25 factor is to undo the encoding scaling in Ct
  // the 720 is so that 1 deltaE = 1 JND
  // per  ITU-R BT.2124-0 p.3

  return 720 * Math.sqrt(Math.pow(I1 - I2, 2) + 0.25 * Math.pow(T1 - T2, 2) + Math.pow(P1 - P2, 2));
}

/**
 * More accurate color-difference formulae
 * than the simple 1976 Euclidean distance in CIE Lab
 * The Oklab a and b axes are scaled relative to the L axis, for better uniformity
 * Björn Ottosson said:
 * "I've recently done some tests with color distance datasets as implemented
 * in Colorio and on both the Combvd dataset and the OSA-UCS dataset a
 * scale factor of slightly more than 2 for a and b would give the best results
 * (2.016 works best for Combvd and 2.045 for the OSA-UCS dataset)."
 * @see {@link <https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-945714988>}
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @returns {number}
 */
function deltaEOK2(color, sample) {
  // Given this color as the reference
  // and a sample,
  // calculate deltaEOK2, term by term as root sum of squares
  var _getColor1 = getColor([color, sample]);
  var _getColor10 = _slicedToArray(_getColor1, 2);
  color = _getColor10[0];
  sample = _getColor10[1];
  var abscale = 2;
  var _Oklab$from5 = Oklab.from(color),
    _Oklab$from6 = _slicedToArray(_Oklab$from5, 3),
    L1 = _Oklab$from6[0],
    a1 = _Oklab$from6[1],
    b1 = _Oklab$from6[2];
  var _Oklab$from7 = Oklab.from(sample),
    _Oklab$from8 = _slicedToArray(_Oklab$from7, 3),
    L2 = _Oklab$from8[0],
    a2 = _Oklab$from8[1],
    b2 = _Oklab$from8[2];
  var ΔL = L1 - L2;
  var Δa = abscale * (a1 - a2);
  var Δb = abscale * (b1 - b2);
  return Math.sqrt(Math.pow(ΔL, 2) + Math.pow(Δa, 2) + Math.pow(Δb, 2));
}

/** @import { Coords, Matrix3x3, Vector3 } from "../types.js" */

// Type re-exports
/** @typedef {import("../types.js").Cam16Object} Cam16Object */
/** @typedef {import("../types.js").Cam16Input} Cam16Input */
/** @typedef {import("../types.js").Cam16Environment} Cam16Environment */

var white$3 = WHITES.D65;
var adaptedCoef = 0.42;
var adaptedCoefInv = 1 / adaptedCoef;
var tau$1 = 2 * Math.PI;

/** @type {Matrix3x3} */
// prettier-ignore
var cat16 = [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-0.002079, 0.048952, 0.953127]];

/** @type {Matrix3x3} */
var cat16Inv = [[1.8620678550872327, -1.0112546305316843, 0.14918677544445175], [0.38752654323613717, 0.6214474419314753, -0.008973985167612518], [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496]];

/** @type {Matrix3x3} */
var m1 = [[460.0, 451.0, 288.0], [460.0, -891.0, -261.0], [460.0, -220.0, -6300.0]];
var surroundMap = {
  dark: [0.8, 0.525, 0.8],
  dim: [0.9, 0.59, 0.9],
  average: [1, 0.69, 1]
};
var hueQuadMap = {
  // Red, Yellow, Green, Blue, Red
  h: [20.14, 90.0, 164.25, 237.53, 380.14],
  e: [0.8, 0.7, 1.0, 1.2, 0.8],
  H: [0.0, 100.0, 200.0, 300.0, 400.0]
};
var rad2deg = 180 / Math.PI;
var deg2rad$1 = Math.PI / 180;

/**
 * @param {Coords} coords
 * @param {number} fl
 * @returns {[number, number, number]}
 */
function adapt$1(coords, fl) {
  var temp = /** @type {[number, number, number]} */
  coords.map(function (c) {
    var x = spow(fl * Math.abs(c) * 0.01, adaptedCoef);
    return 400 * copySign(x, c) / (x + 27.13);
  });
  return temp;
}

/**
 * @param {Coords} adapted
 * @param {number} fl
 * @returns {[number, number, number]}
 */
function unadapt(adapted, fl) {
  var constant = 100 / fl * Math.pow(27.13, adaptedCoefInv);
  return /** @type {[number, number, number]} */adapted.map(function (c) {
    var cabs = Math.abs(c);
    return copySign(constant * spow(cabs / (400 - cabs), adaptedCoefInv), c);
  });
}

/**
 * @param {number} h
 */
function hueQuadrature(h) {
  var hp = constrain(h);
  if (hp <= hueQuadMap.h[0]) {
    hp += 360;
  }
  var i = bisectLeft(hueQuadMap.h, hp) - 1;
  var _hueQuadMap$h$slice = hueQuadMap.h.slice(i, i + 2),
    _hueQuadMap$h$slice2 = _slicedToArray(_hueQuadMap$h$slice, 2),
    hi = _hueQuadMap$h$slice2[0],
    hii = _hueQuadMap$h$slice2[1];
  var _hueQuadMap$e$slice = hueQuadMap.e.slice(i, i + 2),
    _hueQuadMap$e$slice2 = _slicedToArray(_hueQuadMap$e$slice, 2),
    ei = _hueQuadMap$e$slice2[0],
    eii = _hueQuadMap$e$slice2[1];
  var Hi = hueQuadMap.H[i];
  var t = (hp - hi) / ei;
  return Hi + 100 * t / (t + (hii - hp) / eii);
}

/**
 * @param {number} H
 */
function invHueQuadrature(H) {
  var Hp = (H % 400 + 400) % 400;
  var i = Math.floor(0.01 * Hp);
  Hp = Hp % 100;
  var _hueQuadMap$h$slice3 = hueQuadMap.h.slice(i, i + 2),
    _hueQuadMap$h$slice4 = _slicedToArray(_hueQuadMap$h$slice3, 2),
    hi = _hueQuadMap$h$slice4[0],
    hii = _hueQuadMap$h$slice4[1];
  var _hueQuadMap$e$slice3 = hueQuadMap.e.slice(i, i + 2),
    _hueQuadMap$e$slice4 = _slicedToArray(_hueQuadMap$e$slice3, 2),
    ei = _hueQuadMap$e$slice4[0],
    eii = _hueQuadMap$e$slice4[1];
  return constrain((Hp * (eii * hi - ei * hii) - 100 * hi * eii) / (Hp * (eii - ei) - 100 * eii));
}

/**
 * @param {[number, number, number]} refWhite
 * @param {number} adaptingLuminance
 * @param {number} backgroundLuminance
 * @param {keyof typeof surroundMap} surround
 * @param {boolean} discounting
 * @returns {Cam16Environment}
 */
function environment(refWhite, adaptingLuminance, backgroundLuminance, surround, discounting) {
  var env = {};
  env.discounting = discounting;
  env.refWhite = refWhite;
  env.surround = surround;
  var xyzW = /** @type {Vector3} */
  refWhite.map(function (c) {
    return c * 100;
  });

  // The average luminance of the environment in `cd/m^2cd/m` (a.k.a. nits)
  env.la = adaptingLuminance;
  // The relative luminance of the nearby background
  env.yb = backgroundLuminance;
  // Absolute luminance of the reference white.
  var yw = xyzW[1];

  // Cone response for reference white
  var rgbW = multiply_v3_m3x3(xyzW, cat16);

  // Surround: dark, dim, and average
  var values = surroundMap[env.surround];
  var f = values[0];
  env.c = values[1];
  env.nc = values[2];
  var k = 1 / (5 * env.la + 1);
  var k4 = Math.pow(k, 4);

  // Factor of luminance level adaptation
  env.fl = k4 * env.la + 0.1 * (1 - k4) * (1 - k4) * Math.cbrt(5 * env.la);
  env.flRoot = Math.pow(env.fl, 0.25);
  env.n = env.yb / yw;
  env.z = 1.48 + Math.sqrt(env.n);
  env.nbb = 0.725 * Math.pow(env.n, -0.2);
  env.ncb = env.nbb;

  // Degree of adaptation calculating if not discounting
  // illuminant (assumed eye is fully adapted)
  var d = Math.max(Math.min(f * (1 - 1 / 3.6 * Math.exp((-env.la - 42) / 92)), 1), 0);
  env.dRgb = /** @type {[number, number, number]} */
  rgbW.map(function (c) {
    return interpolate(1, yw / c, d);
  });
  env.dRgbInv = /** @type {[number, number, number]} */
  env.dRgb.map(function (c) {
    return 1 / c;
  });

  // Achromatic response
  var rgbCW = /** @type {[number, number, number]} */
  rgbW.map(function (c, i) {
    return c * env.dRgb[i];
  });
  var rgbAW = adapt$1(rgbCW, env.fl);
  env.aW = env.nbb * (2 * rgbAW[0] + rgbAW[1] + 0.05 * rgbAW[2]);

  // console.log(env);

  return env;
}

// Pre-calculate everything we can with the viewing conditions
var viewingConditions$1 = environment(white$3, 64 / Math.PI * 0.2, 20, "average", false);

/**
 * @param {Cam16Input} cam16
 * @param {Cam16Environment} env
 * @returns {[number, number, number]}
 */
function fromCam16(cam16, env) {
  // These check ensure one, and only one attribute for a
  // given category is provided.
  // @ts-expect-error The '^` operator is not allowed for boolean types
  if (!(cam16.J !== undefined ^ cam16.Q !== undefined)) {
    throw new Error("Conversion requires one and only one: 'J' or 'Q'");
  }

  // @ts-expect-error - The '^` operator is not allowed for boolean types
  if (!(cam16.C !== undefined ^ cam16.M !== undefined ^ cam16.s !== undefined)) {
    throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");
  }

  // Hue is absolutely required
  // @ts-expect-error - The '^` operator is not allowed for boolean types
  if (!(cam16.h !== undefined ^ cam16.H !== undefined)) {
    throw new Error("Conversion requires one and only one: 'h' or 'H'");
  }

  // Black
  if (cam16.J === 0.0 || cam16.Q === 0.0) {
    return [0.0, 0.0, 0.0];
  }

  // Break hue into Cartesian components
  var hRad = 0.0;
  if (cam16.h !== undefined) {
    hRad = constrain(cam16.h) * deg2rad$1;
  } else {
    hRad = invHueQuadrature(cam16.H) * deg2rad$1;
  }
  var cosh = Math.cos(hRad);
  var sinh = Math.sin(hRad);

  // Calculate `Jroot` from one of the lightness derived coordinates.
  var Jroot = 0.0;
  if (cam16.J !== undefined) {
    Jroot = spow(cam16.J, 1 / 2) * 0.1;
  } else if (cam16.Q !== undefined) {
    Jroot = 0.25 * env.c * cam16.Q / ((env.aW + 4) * env.flRoot);
  }

  // Calculate the `t` value from one of the chroma derived coordinates
  var alpha = 0.0;
  if (cam16.C !== undefined) {
    alpha = cam16.C / Jroot;
  } else if (cam16.M !== undefined) {
    alpha = cam16.M / env.flRoot / Jroot;
  } else if (cam16.s !== undefined) {
    alpha = 0.0004 * Math.pow(cam16.s, 2) * (env.aW + 4) / env.c;
  }
  var t = spow(alpha * Math.pow(1.64 - Math.pow(0.29, env.n), -0.73), 10 / 9);

  // Eccentricity
  var et = 0.25 * (Math.cos(hRad + 2) + 3.8);

  // Achromatic response
  var A = env.aW * spow(Jroot, 2 / env.c / env.z);

  // Calculate red-green and yellow-blue components
  var p1 = 5e4 / 13 * env.nc * env.ncb * et;
  var p2 = A / env.nbb;
  var r = 23 * (p2 + 0.305) * zdiv(t, 23 * p1 + t * (11 * cosh + 108 * sinh));
  var a = r * cosh;
  var b = r * sinh;

  // Calculate back from cone response to XYZ
  var rgb_c = unadapt(/** @type {Vector3} */

  multiply_v3_m3x3([p2, a, b], m1).map(function (c) {
    return c * 1 / 1403;
  }), env.fl);
  return /** @type {Vector3} */multiply_v3_m3x3(/** @type {Vector3} */
  rgb_c.map(function (c, i) {
    return c * env.dRgbInv[i];
  }), cat16Inv).map(function (c) {
    return c / 100;
  });
}

/**
 * @param {[number, number, number]} xyzd65
 * @param {Cam16Environment} env
 * @returns {Cam16Object}
 */
function toCam16(xyzd65, env) {
  // Cone response
  var xyz100 = /** @type {Vector3} */
  xyzd65.map(function (c) {
    return c * 100;
  });
  var rgbA = adapt$1(/** @type {[number, number, number]} */

  multiply_v3_m3x3(xyz100, cat16).map(function (c, i) {
    return c * env.dRgb[i];
  }), env.fl);

  // Calculate hue from red-green and yellow-blue components
  var a = rgbA[0] + (-12 * rgbA[1] + rgbA[2]) / 11;
  var b = (rgbA[0] + rgbA[1] - 2 * rgbA[2]) / 9;
  var hRad = (Math.atan2(b, a) % tau$1 + tau$1) % tau$1;

  // Eccentricity
  var et = 0.25 * (Math.cos(hRad + 2) + 3.8);
  var t = 5e4 / 13 * env.nc * env.ncb * zdiv(et * Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)), rgbA[0] + rgbA[1] + 1.05 * rgbA[2] + 0.305);
  var alpha = spow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, env.n), 0.73);

  // Achromatic response
  var A = env.nbb * (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]);
  var Jroot = spow(A / env.aW, 0.5 * env.c * env.z);

  // Lightness
  var J = 100 * spow(Jroot, 2);

  // Brightness
  var Q = 4 / env.c * Jroot * (env.aW + 4) * env.flRoot;

  // Chroma
  var C = alpha * Jroot;

  // Colorfulness
  var M = C * env.flRoot;

  // Hue
  var h = constrain(hRad * rad2deg);

  // Hue quadrature
  var H = hueQuadrature(h);

  // Saturation
  var s = 50 * spow(env.c * alpha / (env.aW + 4), 1 / 2);

  // console.log({J: J, C: C, h: h, s: s, Q: Q, M: M, H: H});

  return {
    J: J,
    C: C,
    h: h,
    s: s,
    Q: Q,
    M: M,
    H: H
  };
}

// Provided as a way to directly evaluate the CAM16 model
// https://observablehq.com/@jrus/cam16: reference implementation
// https://arxiv.org/pdf/1802.06067.pdf: Nico Schlömer
// https://onlinelibrary.wiley.com/doi/pdf/10.1002/col.22324: hue quadrature
// https://www.researchgate.net/publication/318152296_Comprehensive_color_solutions_CAM16_CAT16_and_CAM16-UCS
// Results compared against: https://github.com/colour-science/colour
var cam16 = new ColorSpace({
  id: "cam16-jmh",
  cssId: "--cam16-jmh",
  name: "CAM16-JMh",
  coords: {
    j: {
      refRange: [0, 100],
      name: "J"
    },
    m: {
      refRange: [0, 105.0],
      name: "Colorfulness"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: xyz_d65,
  fromBase: function fromBase(xyz) {
    // If another derivation is created, ε could vary, so we can't hardcode
    if (this.ε === undefined) {
      this.ε = Object.values(this.coords)[1].refRange[1] / 100000;
    }
    var cam16 = toCam16(xyz, viewingConditions$1);
    var isAchromatic = Math.abs(cam16.M) < this.ε;
    return [cam16.J, isAchromatic ? 0 : cam16.M, isAchromatic ? null : cam16.h];
  },
  toBase: function toBase(cam16) {
    return fromCam16({
      J: cam16[0],
      M: cam16[1],
      h: cam16[2]
    }, viewingConditions$1);
  }
});
var white$2 = WHITES.D65;
var ε$4 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var κ$3 = 24389 / 27; // 29^3/3^3

function toLstar(y) {
  // Convert XYZ Y to L*

  var fy = y > ε$4 ? Math.cbrt(y) : (κ$3 * y + 16) / 116;
  return 116.0 * fy - 16.0;
}
function fromLstar(lstar) {
  // Convert L* back to XYZ Y

  return lstar > 8 ? Math.pow((lstar + 16) / 116, 3) : lstar / κ$3;
}
function fromHct(coords, env) {
  // Use Newton's method to try and converge as quick as possible or
  // converge as close as we can. While the requested precision is achieved
  // most of the time, it may not always be achievable. Especially past the
  // visible spectrum, the algorithm will likely struggle to get the same
  // precision. If, for whatever reason, we cannot achieve the accuracy we
  // seek in the allotted iterations, just return the closest we were able to
  // get.

  var _coords = _slicedToArray(coords, 3),
    h = _coords[0],
    c = _coords[1],
    t = _coords[2];
  var xyz = [];
  var j = 0;

  // Shortcut out for black
  if (t === 0) {
    return [0.0, 0.0, 0.0];
  }

  // Calculate the Y we need to target
  var y = fromLstar(t);

  // A better initial guess yields better results. Polynomials come from
  // curve fitting the T vs J response.
  if (t > 0) {
    j = 0.00379058511492914 * Math.pow(t, 2) + 0.608983189401032 * t + 0.9155088574762233;
  } else {
    j = 9.514440756550361e-6 * Math.pow(t, 2) + 0.08693057439788597 * t - 21.928975842194614;
  }

  // Threshold of how close is close enough, and max number of attempts.
  // More precision and more attempts means more time spent iterating. Higher
  // required precision gives more accuracy but also increases the chance of
  // not hitting the goal. 2e-12 allows us to convert round trip with
  // reasonable accuracy of six decimal places or more.
  var threshold = 2e-12;
  var max_attempts = 15;
  var attempt = 0;
  var last = Infinity;

  // Try to find a J such that the returned y matches the returned y of the L*
  while (attempt <= max_attempts) {
    xyz = fromCam16({
      J: j,
      C: c,
      h: h
    }, env);

    // If we are within range, return XYZ
    // If we are closer than last time, save the values
    var delta = Math.abs(xyz[1] - y);
    if (delta < last) {
      if (delta <= threshold) {
        return xyz;
      }
      last = delta;
    }

    // f(j_root) = (j ** (1 / 2)) * 0.1
    // f(j) = ((f(j_root) * 100) ** 2) / j - 1 = 0
    // f(j_root) = Y = y / 100
    // f(j) = (y ** 2) / j - 1
    // f'(j) = (2 * y) / j
    j = j - (xyz[1] - y) * j / (2 * xyz[1]);
    attempt += 1;
  }

  // We could not acquire the precision we desired,
  // return our closest attempt.
  return fromCam16({
    J: j,
    C: c,
    h: h
  }, env);
}
function toHct(xyz, env) {
  // Calculate HCT by taking the L* of CIE LCh D65 and CAM16 chroma and hue.

  var t = toLstar(xyz[1]);
  if (t === 0.0) {
    return [0.0, 0.0, 0.0];
  }
  var cam16 = toCam16(xyz, viewingConditions);
  return [constrain(cam16.h), cam16.C, t];
}

// Pre-calculate everything we can with the viewing conditions
var viewingConditions = environment(white$2, 200 / Math.PI * fromLstar(50.0), fromLstar(50.0) * 100, "average", false);

// https://material.io/blog/science-of-color-design
// This is not a port of the material-color-utilities,
// but instead implements the full color space as described,
// combining CAM16 JCh and Lab D65. This does not clamp conversion
// to HCT to specific chroma bands and provides support for wider
// gamuts than Google currently supports and does so at a greater
// precision (> 8 bits back to sRGB).
// This implementation comes from https://github.com/facelessuser/coloraide
// which is licensed under MIT.
var hct = new ColorSpace({
  id: "hct",
  name: "HCT",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    c: {
      refRange: [0, 145],
      name: "Colorfulness"
    },
    t: {
      refRange: [0, 100],
      name: "Tone"
    }
  },
  base: xyz_d65,
  fromBase: function fromBase(xyz) {
    if (this.ε === undefined) {
      this.ε = Object.values(this.coords)[1].refRange[1] / 100000;
    }
    var hct = toHct(xyz);
    if (hct[1] < this.ε) {
      hct[1] = 0.0;
      hct[0] = null;
    }
    return hct;
  },
  toBase: function toBase(hct) {
    return fromHct(hct, viewingConditions);
  },
  formats: {
    color: {
      id: "--hct",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
var deg2rad = Math.PI / 180;
var ucsCoeff = [1.0, 0.007, 0.0228];

/**
 * Convert HCT chroma and hue (CAM16 JMh colorfulness and hue) using UCS logic for a and b.
 * @param {Coords} coords - HCT coordinates.
 * @return {number[]}
 */
function convertUcsAb(coords) {
  // We want the distance between the actual color.
  // If chroma is negative, it will throw off our calculations.
  // Normally, converting back to the base and forward will correct it.
  // If we have a negative chroma after this, then we have a color that
  // cannot resolve to positive chroma.
  if (coords[1] < 0) {
    coords = hct.fromBase(hct.toBase(coords));
  }

  // Only in extreme cases (usually outside the visible spectrum)
  // can the input value for log become negative.
  // Avoid domain error by forcing a zero result via "max" if necessary.
  var M = Math.log(Math.max(1 + ucsCoeff[2] * coords[1] * viewingConditions.flRoot, 1.0)) / ucsCoeff[2];
  var hrad = coords[0] * deg2rad;
  var a = M * Math.cos(hrad);
  var b = M * Math.sin(hrad);
  return [coords[2], a, b];
}

/**
 * Color distance using HCT.
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @returns {number}
 */
function deltaEHCT(color, sample) {
  var _getColor11 = getColor([color, sample]);
  var _getColor12 = _slicedToArray(_getColor11, 2);
  color = _getColor12[0];
  sample = _getColor12[1];
  var _convertUcsAb = convertUcsAb(hct.from(color)),
    _convertUcsAb2 = _slicedToArray(_convertUcsAb, 3),
    t1 = _convertUcsAb2[0],
    a1 = _convertUcsAb2[1],
    b1 = _convertUcsAb2[2];
  var _convertUcsAb3 = convertUcsAb(hct.from(sample)),
    _convertUcsAb4 = _slicedToArray(_convertUcsAb3, 3),
    t2 = _convertUcsAb4[0],
    a2 = _convertUcsAb4[1],
    b2 = _convertUcsAb4[2];

  // Use simple euclidean distance with a and b using UCS conversion
  // and LCh lightness (HCT tone).
  return Math.sqrt(Math.pow(t1 - t2, 2) + Math.pow(a1 - a2, 2) + Math.pow(b1 - b2, 2));
}

/**
 * @packageDocumentation
 * This module defines all the builtin deltaE methods.
 */

var deltaEMethods = {
  deltaE76: deltaE76,
  deltaECMC: deltaECMC,
  deltaE2000: deltaE2000,
  deltaEJz: deltaEJz,
  deltaEITP: deltaEITP,
  deltaEOK: deltaEOK,
  deltaEOK2: deltaEOK2,
  deltaEHCT: deltaEHCT
};

/** @typedef {keyof typeof import("./index.js").default extends `deltaE${infer Method}` ? Method : string} Methods */

/** @import { ColorTypes, PlainColorObject } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").ToGamutOptions} ToGamutOptions */

/**
 * Calculate the epsilon to 2 degrees smaller than the specified JND.
 * @param {number} jnd The target "just noticeable difference".
 * @returns {number}
 */
function calcEpsilon(jnd) {
  // Calculate the epsilon to 2 degrees smaller than the specified JND.

  var order = !jnd ? 0 : Math.floor(Math.log10(Math.abs(jnd)));
  // Limit to an arbitrary value to ensure value is never too small and causes infinite loops.
  return Math.max(parseFloat("1e".concat(order - 2)), 1e-6);
}
var GMAPPRESET = {
  hct: {
    method: "hct.c",
    jnd: 2,
    deltaEMethod: "hct",
    blackWhiteClamp: {}
  },
  "hct-tonal": {
    method: "hct.c",
    jnd: 0,
    deltaEMethod: "hct",
    blackWhiteClamp: {
      channel: "hct.t",
      min: 0,
      max: 100
    }
  }
};

/**
 * Force coordinates to be in gamut of a certain color space.
 * Mutates the color it is passed.
 * @overload
 * @param {ColorTypes} color
 * @param {ToGamutOptions} [options]
 * @returns {PlainColorObject}
 */
/**
 * @overload
 * @param {ColorTypes} color
 * @param {string} [space]
 * @returns {PlainColorObject}
 */
/**
 * @param {ColorTypes} color
 * @param {string & Partial<ToGamutOptions> | ToGamutOptions} [space]
 * @returns {PlainColorObject}
 */
function toGamut(color) {
  var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref12$method = _ref12.method,
    method = _ref12$method === void 0 ? defaults.gamut_mapping : _ref12$method,
    _ref12$space = _ref12.space,
    space = _ref12$space === void 0 ? undefined : _ref12$space,
    _ref12$deltaEMethod = _ref12.deltaEMethod,
    deltaEMethod = _ref12$deltaEMethod === void 0 ? "" : _ref12$deltaEMethod,
    _ref12$jnd = _ref12.jnd,
    jnd = _ref12$jnd === void 0 ? 2 : _ref12$jnd,
    _ref12$blackWhiteClam = _ref12.blackWhiteClamp,
    blackWhiteClamp = _ref12$blackWhiteClam === void 0 ? undefined : _ref12$blackWhiteClam;
  color = getColor(color);
  if (isString(arguments[1])) {
    space = arguments[1];
  } else if (!space) {
    space = color.space;
  }
  space = ColorSpace.get(space);

  // 3 spaces:
  // color.space: current color space
  // space: space whose gamut we are mapping to
  // mapSpace: space with the coord we're reducing

  if (inGamut(color, space, {
    epsilon: 0
  })) {
    return /** @type {PlainColorObject} */color;
  }
  var spaceColor;
  if (method === "css") {
    spaceColor = toGamutCSS(color, {
      space: space
    });
  } else {
    if (method !== "clip" && !inGamut(color, space)) {
      if (Object.prototype.hasOwnProperty.call(GMAPPRESET, method)) {
        var _GMAPPRESET$method = GMAPPRESET[method];
        method = _GMAPPRESET$method.method;
        jnd = _GMAPPRESET$method.jnd;
        deltaEMethod = _GMAPPRESET$method.deltaEMethod;
        blackWhiteClamp = _GMAPPRESET$method.blackWhiteClamp;
      }

      // Get the correct delta E method
      var de = deltaE2000;
      if (deltaEMethod !== "") {
        for (var _m in deltaEMethods) {
          if ("deltae" + deltaEMethod.toLowerCase() === _m.toLowerCase()) {
            de = deltaEMethods[_m];
            break;
          }
        }
      }
      if (jnd === 0) {
        jnd = 1e-16;
      }
      var clipped = toGamut(to(color, space), {
        method: "clip",
        space: space
      });
      if (de(color, clipped) > jnd) {
        // Clamp to SDR white and black if required
        if (blackWhiteClamp && Object.keys(blackWhiteClamp).length === 3) {
          var channelMeta = ColorSpace.resolveCoord(blackWhiteClamp.channel);
          var channel = get(to(color, channelMeta.space), channelMeta.id);
          if (isNone(channel)) {
            channel = 0;
          }
          if (channel >= blackWhiteClamp.max) {
            return to({
              space: "xyz-d65",
              coords: WHITES["D65"]
            }, color.space);
          } else if (channel <= blackWhiteClamp.min) {
            return to({
              space: "xyz-d65",
              coords: [0, 0, 0]
            }, color.space);
          }
        }

        // Reduce a coordinate of a certain color space until the color is in gamut
        var coordMeta = ColorSpace.resolveCoord(method);
        var mapSpace = coordMeta.space;
        var coordId = coordMeta.id;
        var mappedColor = to(color, mapSpace);
        // If we were already in the mapped color space, we need to resolve undefined channels
        mappedColor.coords.forEach(function (c, i) {
          if (isNone(c)) {
            mappedColor.coords[i] = 0;
          }
        });
        var bounds = coordMeta.range || coordMeta.refRange;
        var min = bounds[0];
        var _ε = calcEpsilon(jnd);
        var low = min;
        var high = get(mappedColor, coordId);
        while (high - low > _ε) {
          var _clipped = clone(mappedColor);
          _clipped = toGamut(_clipped, {
            space: space,
            method: "clip"
          });
          var _deltaE = de(mappedColor, _clipped);
          if (_deltaE - jnd < _ε) {
            low = get(mappedColor, coordId);
          } else {
            high = get(mappedColor, coordId);
          }
          set(mappedColor, coordId, (low + high) / 2);
        }
        spaceColor = to(mappedColor, space);
      } else {
        spaceColor = clipped;
      }
    } else {
      spaceColor = to(color, space);
    }
    if (method === "clip" ||
    // Dumb coord clipping
    // finish off smarter gamut mapping with clip to get rid of ε, see #17
    !inGamut(spaceColor, space, {
      epsilon: 0
    })) {
      var _bounds = Object.values(space.coords).map(function (c) {
        return c.range || [];
      });
      spaceColor.coords = /** @type {[number, number, number]} */
      spaceColor.coords.map(function (c, i) {
        var _bounds$i = _slicedToArray(_bounds[i], 2),
          min = _bounds$i[0],
          max = _bounds$i[1];
        if (min !== undefined) {
          c = Math.max(min, c);
        }
        if (max !== undefined) {
          c = Math.min(c, max);
        }
        return c;
      });
    }
  }
  if (space !== color.space) {
    spaceColor = to(spaceColor, color.space);
  }
  color.coords = spaceColor.coords;
  return /** @type {PlainColorObject} */color;
}

/** @type {"color"} */
toGamut.returns = "color";

/**
 * The reference colors to be used if lightness is out of the range 0-1 in the
 * `Oklch` space. These are created in the `Oklab` space, as it is used by the
 * DeltaEOK calculation, so it is guaranteed to be imported.
 * @satisfies {Record<string, ColorTypes>}
 */
var COLORS = {
  WHITE: {
    space: Oklab,
    coords: [1, 0, 0],
    alpha: 1
  },
  BLACK: {
    space: Oklab,
    coords: [0, 0, 0],
    alpha: 1
  }
};

/**
 * Given a color `origin`, returns a new color that is in gamut using
 * the CSS Gamut Mapping Algorithm. If `space` is specified, it will be in gamut
 * in `space`, and returned in `space`. Otherwise, it will be in gamut and
 * returned in the color space of `origin`.
 * @param {ColorTypes} origin
 * @param {{ space?: string | ColorSpace | undefined }} param1
 * @returns {PlainColorObject}
 */
function toGamutCSS(origin) {
  var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    space = _ref13.space;
  var JND = 0.02;
  var ε = 0.0001;
  origin = getColor(origin);
  if (!space) {
    space = origin.space;
  }
  space = ColorSpace.get(space);
  var oklchSpace = ColorSpace.get("oklch");
  if (space.isUnbounded) {
    return to(origin, space);
  }
  var origin_OKLCH = to(origin, oklchSpace);
  var L = origin_OKLCH.coords[0];

  // return media white or black, if lightness is out of range
  if (L >= 1) {
    var _white = to(COLORS.WHITE, space);
    _white.alpha = origin.alpha;
    return to(_white, space);
  }
  if (L <= 0) {
    var black = to(COLORS.BLACK, space);
    black.alpha = origin.alpha;
    return to(black, space);
  }
  if (inGamut(origin_OKLCH, space, {
    epsilon: 0
  })) {
    return to(origin_OKLCH, space);
  }
  function clip(_color) {
    var destColor = to(_color, space);
    var spaceCoords = Object.values(/** @type {ColorSpace} */space.coords);
    destColor.coords = /** @type {[number, number, number]} */
    destColor.coords.map(function (coord, index) {
      if ("range" in spaceCoords[index]) {
        var _spaceCoords$index$ra = _slicedToArray(spaceCoords[index].range, 2),
          _min = _spaceCoords$index$ra[0],
          _max4 = _spaceCoords$index$ra[1];
        return clamp(_min, coord, _max4);
      }
      return coord;
    });
    return destColor;
  }
  var min = 0;
  var max = origin_OKLCH.coords[1];
  var min_inGamut = true;
  var current = clone(origin_OKLCH);
  var clipped = clip(current);
  var E = deltaEOK(clipped, current);
  if (E < JND) {
    return clipped;
  }
  while (max - min > ε) {
    var chroma = (min + max) / 2;
    current.coords[1] = chroma;
    if (min_inGamut && inGamut(current, space, {
      epsilon: 0
    })) {
      min = chroma;
    } else {
      clipped = clip(current);
      E = deltaEOK(clipped, current);
      if (E < JND) {
        if (JND - E < ε) {
          break;
        } else {
          min_inGamut = false;
          min = chroma;
        }
      } else {
        max = chroma;
      }
    }
  }
  return clipped;
}

/** @import { ColorTypes, PlainColorObject, ToGamutOptions } from "./types.js" */

/**
 * Convert to color space and return a new color
 * @param {ColorTypes} color
 * @param {string | ColorSpace} space
 * @param {{ inGamut?: boolean | ToGamutOptions | undefined }} options
 * @returns {PlainColorObject}
 */
function to(color, space) {
  var _ref14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    inGamut = _ref14.inGamut;
  color = getColor(color);
  space = ColorSpace.get(space);
  var coords = space.from(color);
  var ret = {
    space: space,
    coords: coords,
    alpha: color.alpha
  };
  if (inGamut) {
    ret = toGamut(ret, inGamut === true ? undefined : inGamut);
  }
  return ret;
}

/** @type {"color"} */
to.returns = "color";

// @ts-nocheck

/** @import { ColorTypes, ParseOptions, PlainColorObject } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").SerializeOptions} SerializeOptions */

/**
 * Generic toString() method, outputs a color(spaceId ...coords) function, a functional syntax, or custom formats defined by the color space
 * @param {ColorTypes} color
 * @param {SerializeOptions & Record<string, any>} options
 * @returns {string}
 */
function serialize(color) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$precision = options.precision,
    precision = _options$precision === void 0 ? defaults.precision : _options$precision,
    format = options.format,
    _options$inGamut = options.inGamut,
    inGamut$1 = _options$inGamut === void 0 ? true : _options$inGamut,
    coordFormat = options.coords,
    alphaFormat = options.alpha,
    commas = options.commas;
  var ret;
  var colorWithMeta = /** @type {PlainColorObject & ParseOptions} */getColor(color);
  var formatId = format;
  var parseMeta = colorWithMeta.parseMeta;
  if (parseMeta && !format) {
    if (parseMeta.format.canSerialize()) {
      format = parseMeta.format;
      formatId = parseMeta.formatId;
    }
    coordFormat !== null && coordFormat !== void 0 ? coordFormat : coordFormat = parseMeta.types;
    alphaFormat !== null && alphaFormat !== void 0 ? alphaFormat : alphaFormat = parseMeta.alphaType;
    commas !== null && commas !== void 0 ? commas : commas = parseMeta.commas;
  }
  if (formatId) {
    var _colorWithMeta$space$;
    // A format is explicitly specified
    format = (_colorWithMeta$space$ = colorWithMeta.space.getFormat(format)) !== null && _colorWithMeta$space$ !== void 0 ? _colorWithMeta$space$ : ColorSpace.findFormat(formatId);
  }
  if (!format) {
    var _colorWithMeta$space$2;
    // No format specified, or format not found
    format = (_colorWithMeta$space$2 = colorWithMeta.space.getFormat("default")) !== null && _colorWithMeta$space$2 !== void 0 ? _colorWithMeta$space$2 : ColorSpace.DEFAULT_FORMAT;
    formatId = format.name;
  }
  if (format && format.space && format.space !== colorWithMeta.space) {
    // Format specified belongs to a different color space,
    // need to convert to it first
    colorWithMeta = to(colorWithMeta, format.space);
  }

  // The assignment to coords and inGamut needs to stay in the order they are now
  // The order of the assignment was changed as a workaround for a bug in Next.js
  // See this issue for details: https://github.com/color-js/color.js/issues/260

  var coords = colorWithMeta.coords.slice(); // clone so we can manipulate it

  inGamut$1 || (inGamut$1 = format.toGamut);
  if (inGamut$1 && !inGamut(colorWithMeta)) {
    // FIXME what happens if the color contains none values?
    coords = toGamut(clone(colorWithMeta), inGamut$1 === true ? undefined : inGamut$1).coords;
  }
  if (format.type === "custom") {
    if (format.serialize) {
      ret = format.serialize(coords, colorWithMeta.alpha, options);
    } else {
      throw new TypeError("format ".concat(formatId, " can only be used to parse colors, not for serialization"));
    }
  } else {
    var _alphaFormat$type, _alphaFormat, _alphaFormat2, _alphaFormat3;
    // Functional syntax
    var name = format.name || "color";
    var args = format.serializeCoords(coords, precision, coordFormat);
    if (name === "color") {
      var _format$ids;
      // If output is a color() function, add colorspace id as first argument
      var cssId = format.id || ((_format$ids = format.ids) === null || _format$ids === void 0 ? void 0 : _format$ids[0]) || colorWithMeta.space.cssId || colorWithMeta.space.id;
      args.unshift(cssId);
    }

    // Serialize alpha?
    /** @type {string | number} */
    var alpha = colorWithMeta.alpha;
    if (alphaFormat !== undefined && !(_typeof(alphaFormat) === "object")) {
      alphaFormat = typeof alphaFormat === "string" ? {
        type: alphaFormat
      } : {
        include: alphaFormat
      };
    }
    var alphaType = (_alphaFormat$type = (_alphaFormat = alphaFormat) === null || _alphaFormat === void 0 ? void 0 : _alphaFormat.type) !== null && _alphaFormat$type !== void 0 ? _alphaFormat$type : "<number>";
    var serializeAlpha = ((_alphaFormat2 = alphaFormat) === null || _alphaFormat2 === void 0 ? void 0 : _alphaFormat2.include) === true || format.alpha === true || ((_alphaFormat3 = alphaFormat) === null || _alphaFormat3 === void 0 ? void 0 : _alphaFormat3.include) !== false && format.alpha !== false && alpha < 1;
    var strAlpha = "";
    commas !== null && commas !== void 0 ? commas : commas = format.commas;
    if (serializeAlpha) {
      if (precision !== null) {
        var unit;
        if (alphaType === "<percentage>") {
          unit = "%";
          alpha *= 100;
        }
        alpha = serializeNumber(alpha, {
          precision: precision,
          unit: unit
        });
      }
      strAlpha = "".concat(commas ? "," : " /", " ").concat(alpha);
    }
    ret = "".concat(name, "(").concat(args.join(commas ? ", " : " ")).concat(strAlpha, ")");
  }
  return ret;
}

/** @import { Matrix3x3 } from "../types.js" */

// convert an array of linear-light rec2020 values to CIE XYZ
// using  D65 (no chromatic adaptation)
// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
// 0 is actually calculated as  4.994106574466076e-17
/** @type {Matrix3x3} */
// prettier-ignore
var toXYZ_M$5 = [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0.000000000000000, 0.028072693049087428, 1.060985057710791]];

// from ITU-R BT.2124-0 Annex 2 p.3
/** @type {Matrix3x3} */
// prettier-ignore
var fromXYZ_M$5 = [[1.716651187971268, -0.355670783776392, -0.253366281373660], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]];
var REC_2020_Linear = new RGBColorSpace({
  id: "rec2020-linear",
  cssId: "--rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: toXYZ_M$5,
  fromXYZ_M: fromXYZ_M$5
});

// import sRGB from "./srgb.js";

var REC2020 = new RGBColorSpace({
  id: "rec2020",
  name: "REC.2020",
  base: REC_2020_Linear,
  //  Reference electro-optical transfer function from Rec. ITU-R BT.1886 Annex 1
  //  with b (black lift) = 0 and a (user gain) = 1
  //  defined over the extended range, not clamped
  toBase: function toBase(RGB) {
    return RGB.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = val * sign;
      return sign * Math.pow(abs, 2.4);
    });
  },
  fromBase: function fromBase(RGB) {
    return RGB.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = val * sign;
      return sign * Math.pow(abs, 1 / 2.4);
    });
  }
});

/** @import { Matrix3x3 } from "../types.js" */

/** @type {Matrix3x3} */
// prettier-ignore
var toXYZ_M$4 = [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0.0000000000000000, 0.04511338185890264, 1.043944368900976]];

/** @type {Matrix3x3} */
// prettier-ignore
var fromXYZ_M$4 = [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]];
var P3Linear = new RGBColorSpace({
  id: "p3-linear",
  cssId: "display-p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: toXYZ_M$4,
  fromXYZ_M: fromXYZ_M$4
});

/** @import { Matrix3x3 } from "../types.js" */

// This is the linear-light version of sRGB
// as used for example in SVG filters
// or in Canvas

// This matrix was calculated directly from the RGB and white chromaticities
// when rounded to 8 decimal places, it agrees completely with the official matrix
// see https://github.com/w3c/csswg-drafts/issues/5922
/** @type {Matrix3x3} */
// prettier-ignore
var toXYZ_M$3 = [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]];

// This matrix is the inverse of the above;
// again it agrees with the official definition when rounded to 8 decimal places
/** @type {Matrix3x3} */
// prettier-ignore
var fromXYZ_M$3 = [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]];
var sRGBLinear = new RGBColorSpace({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: toXYZ_M$3,
  fromXYZ_M: fromXYZ_M$3
});

// To produce: Visit https://www.w3.org/TR/css-color-4/#named-colors
// and run in the console:
// copy($$("tr", $(".named-color-table tbody")).map(tr => `"${tr.cells[2].textContent.trim()}": [${tr.cells[4].textContent.trim().split(/\s+/).map(c => c === "0"? "0" : c === "255"? "1" : c + " / 255").join(", ")}]`).join(",\n"))

/** List of CSS color keywords
 *  Note that this does not include currentColor, transparent,
 *  or system colors
 *
 *  @type {Record<string, [number, number, number]>}
 */
var KEYWORDS = {
  aliceblue: [240 / 255, 248 / 255, 1],
  antiquewhite: [250 / 255, 235 / 255, 215 / 255],
  aqua: [0, 1, 1],
  aquamarine: [127 / 255, 1, 212 / 255],
  azure: [240 / 255, 1, 1],
  beige: [245 / 255, 245 / 255, 220 / 255],
  bisque: [1, 228 / 255, 196 / 255],
  black: [0, 0, 0],
  blanchedalmond: [1, 235 / 255, 205 / 255],
  blue: [0, 0, 1],
  blueviolet: [138 / 255, 43 / 255, 226 / 255],
  brown: [165 / 255, 42 / 255, 42 / 255],
  burlywood: [222 / 255, 184 / 255, 135 / 255],
  cadetblue: [95 / 255, 158 / 255, 160 / 255],
  chartreuse: [127 / 255, 1, 0],
  chocolate: [210 / 255, 105 / 255, 30 / 255],
  coral: [1, 127 / 255, 80 / 255],
  cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
  cornsilk: [1, 248 / 255, 220 / 255],
  crimson: [220 / 255, 20 / 255, 60 / 255],
  cyan: [0, 1, 1],
  darkblue: [0, 0, 139 / 255],
  darkcyan: [0, 139 / 255, 139 / 255],
  darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
  darkgray: [169 / 255, 169 / 255, 169 / 255],
  darkgreen: [0, 100 / 255, 0],
  darkgrey: [169 / 255, 169 / 255, 169 / 255],
  darkkhaki: [189 / 255, 183 / 255, 107 / 255],
  darkmagenta: [139 / 255, 0, 139 / 255],
  darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
  darkorange: [1, 140 / 255, 0],
  darkorchid: [153 / 255, 50 / 255, 204 / 255],
  darkred: [139 / 255, 0, 0],
  darksalmon: [233 / 255, 150 / 255, 122 / 255],
  darkseagreen: [143 / 255, 188 / 255, 143 / 255],
  darkslateblue: [72 / 255, 61 / 255, 139 / 255],
  darkslategray: [47 / 255, 79 / 255, 79 / 255],
  darkslategrey: [47 / 255, 79 / 255, 79 / 255],
  darkturquoise: [0, 206 / 255, 209 / 255],
  darkviolet: [148 / 255, 0, 211 / 255],
  deeppink: [1, 20 / 255, 147 / 255],
  deepskyblue: [0, 191 / 255, 1],
  dimgray: [105 / 255, 105 / 255, 105 / 255],
  dimgrey: [105 / 255, 105 / 255, 105 / 255],
  dodgerblue: [30 / 255, 144 / 255, 1],
  firebrick: [178 / 255, 34 / 255, 34 / 255],
  floralwhite: [1, 250 / 255, 240 / 255],
  forestgreen: [34 / 255, 139 / 255, 34 / 255],
  fuchsia: [1, 0, 1],
  gainsboro: [220 / 255, 220 / 255, 220 / 255],
  ghostwhite: [248 / 255, 248 / 255, 1],
  gold: [1, 215 / 255, 0],
  goldenrod: [218 / 255, 165 / 255, 32 / 255],
  gray: [128 / 255, 128 / 255, 128 / 255],
  green: [0, 128 / 255, 0],
  greenyellow: [173 / 255, 1, 47 / 255],
  grey: [128 / 255, 128 / 255, 128 / 255],
  honeydew: [240 / 255, 1, 240 / 255],
  hotpink: [1, 105 / 255, 180 / 255],
  indianred: [205 / 255, 92 / 255, 92 / 255],
  indigo: [75 / 255, 0, 130 / 255],
  ivory: [1, 1, 240 / 255],
  khaki: [240 / 255, 230 / 255, 140 / 255],
  lavender: [230 / 255, 230 / 255, 250 / 255],
  lavenderblush: [1, 240 / 255, 245 / 255],
  lawngreen: [124 / 255, 252 / 255, 0],
  lemonchiffon: [1, 250 / 255, 205 / 255],
  lightblue: [173 / 255, 216 / 255, 230 / 255],
  lightcoral: [240 / 255, 128 / 255, 128 / 255],
  lightcyan: [224 / 255, 1, 1],
  lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
  lightgray: [211 / 255, 211 / 255, 211 / 255],
  lightgreen: [144 / 255, 238 / 255, 144 / 255],
  lightgrey: [211 / 255, 211 / 255, 211 / 255],
  lightpink: [1, 182 / 255, 193 / 255],
  lightsalmon: [1, 160 / 255, 122 / 255],
  lightseagreen: [32 / 255, 178 / 255, 170 / 255],
  lightskyblue: [135 / 255, 206 / 255, 250 / 255],
  lightslategray: [119 / 255, 136 / 255, 153 / 255],
  lightslategrey: [119 / 255, 136 / 255, 153 / 255],
  lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
  lightyellow: [1, 1, 224 / 255],
  lime: [0, 1, 0],
  limegreen: [50 / 255, 205 / 255, 50 / 255],
  linen: [250 / 255, 240 / 255, 230 / 255],
  magenta: [1, 0, 1],
  maroon: [128 / 255, 0, 0],
  mediumaquamarine: [102 / 255, 205 / 255, 170 / 255],
  mediumblue: [0, 0, 205 / 255],
  mediumorchid: [186 / 255, 85 / 255, 211 / 255],
  mediumpurple: [147 / 255, 112 / 255, 219 / 255],
  mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
  mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
  mediumspringgreen: [0, 250 / 255, 154 / 255],
  mediumturquoise: [72 / 255, 209 / 255, 204 / 255],
  mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
  midnightblue: [25 / 255, 25 / 255, 112 / 255],
  mintcream: [245 / 255, 1, 250 / 255],
  mistyrose: [1, 228 / 255, 225 / 255],
  moccasin: [1, 228 / 255, 181 / 255],
  navajowhite: [1, 222 / 255, 173 / 255],
  navy: [0, 0, 128 / 255],
  oldlace: [253 / 255, 245 / 255, 230 / 255],
  olive: [128 / 255, 128 / 255, 0],
  olivedrab: [107 / 255, 142 / 255, 35 / 255],
  orange: [1, 165 / 255, 0],
  orangered: [1, 69 / 255, 0],
  orchid: [218 / 255, 112 / 255, 214 / 255],
  palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
  palegreen: [152 / 255, 251 / 255, 152 / 255],
  paleturquoise: [175 / 255, 238 / 255, 238 / 255],
  palevioletred: [219 / 255, 112 / 255, 147 / 255],
  papayawhip: [1, 239 / 255, 213 / 255],
  peachpuff: [1, 218 / 255, 185 / 255],
  peru: [205 / 255, 133 / 255, 63 / 255],
  pink: [1, 192 / 255, 203 / 255],
  plum: [221 / 255, 160 / 255, 221 / 255],
  powderblue: [176 / 255, 224 / 255, 230 / 255],
  purple: [128 / 255, 0, 128 / 255],
  rebeccapurple: [102 / 255, 51 / 255, 153 / 255],
  red: [1, 0, 0],
  rosybrown: [188 / 255, 143 / 255, 143 / 255],
  royalblue: [65 / 255, 105 / 255, 225 / 255],
  saddlebrown: [139 / 255, 69 / 255, 19 / 255],
  salmon: [250 / 255, 128 / 255, 114 / 255],
  sandybrown: [244 / 255, 164 / 255, 96 / 255],
  seagreen: [46 / 255, 139 / 255, 87 / 255],
  seashell: [1, 245 / 255, 238 / 255],
  sienna: [160 / 255, 82 / 255, 45 / 255],
  silver: [192 / 255, 192 / 255, 192 / 255],
  skyblue: [135 / 255, 206 / 255, 235 / 255],
  slateblue: [106 / 255, 90 / 255, 205 / 255],
  slategray: [112 / 255, 128 / 255, 144 / 255],
  slategrey: [112 / 255, 128 / 255, 144 / 255],
  snow: [1, 250 / 255, 250 / 255],
  springgreen: [0, 1, 127 / 255],
  steelblue: [70 / 255, 130 / 255, 180 / 255],
  tan: [210 / 255, 180 / 255, 140 / 255],
  teal: [0, 128 / 255, 128 / 255],
  thistle: [216 / 255, 191 / 255, 216 / 255],
  tomato: [1, 99 / 255, 71 / 255],
  turquoise: [64 / 255, 224 / 255, 208 / 255],
  violet: [238 / 255, 130 / 255, 238 / 255],
  wheat: [245 / 255, 222 / 255, 179 / 255],
  white: [1, 1, 1],
  whitesmoke: [245 / 255, 245 / 255, 245 / 255],
  yellow: [1, 1, 0],
  yellowgreen: [154 / 255, 205 / 255, 50 / 255]
};

/** @import { Coords } from "../types.js" */

var coordGrammar = Array(3).fill("<percentage> | <number>[0, 255]");
var coordGrammarNumber = Array(3).fill("<number>[0, 255]");
var sRGB = new RGBColorSpace({
  id: "srgb",
  name: "sRGB",
  base: sRGBLinear,
  fromBase: function fromBase(rgb) {
    // convert an array of linear-light sRGB values in the range 0.0-1.0
    // to gamma corrected form
    // https://en.wikipedia.org/wiki/SRGB
    return rgb.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = val * sign;
      if (abs > 0.0031308) {
        return sign * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
      }
      return 12.92 * val;
    });
  },
  toBase: function toBase(rgb) {
    // convert an array of sRGB values in the range 0.0 - 1.0
    // to linear light (un-companded) form.
    // https://en.wikipedia.org/wiki/SRGB
    return rgb.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = val * sign;
      if (abs <= 0.04045) {
        return val / 12.92;
      }
      return sign * Math.pow((abs + 0.055) / 1.055, 2.4);
    });
  },
  formats: {
    rgb: {
      coords: coordGrammar
    },
    rgb_number: {
      name: "rgb",
      commas: true,
      coords: coordGrammarNumber,
      alpha: false
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: coordGrammar,
      commas: true,
      alpha: true
    },
    rgba_number: {
      name: "rgba",
      commas: true,
      coords: coordGrammarNumber
    },
    hex: {
      type: "custom",
      toGamut: true,
      test: function test(str) {
        return /^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(str);
      },
      parse: function parse(str) {
        if (str.length <= 5) {
          // #rgb or #rgba, duplicate digits
          str = str.replace(/[a-f0-9]/gi, "$&$&");
        }

        /** @type {number[]} */
        var rgba = [];
        // @ts-expect-error Type 'void' is not assignable to type 'string'
        str.replace(/[a-f0-9]{2}/gi, function (component) {
          rgba.push(parseInt(component, 16) / 255);
        });
        return {
          spaceId: "srgb",
          coords: (/** @type {Coords} */rgba.slice(0, 3)),
          alpha: (/** @type {number} */rgba.slice(3)[0])
        };
      },
      serialize: function serialize(coords, alpha) {
        var _ref15 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref15$collapse = _ref15.collapse,
          collapse = _ref15$collapse === void 0 ? true : _ref15$collapse,
          alphaFormat = _ref15.alpha;
        if (alphaFormat !== false && alpha < 1 || alphaFormat === true) {
          coords.push(alpha);
        }
        coords = /** @type {[number, number, number]} */
        coords.map(function (c) {
          return Math.round(c * 255);
        });
        var collapsible = collapse && coords.every(function (c) {
          return c % 17 === 0;
        });
        var hex = coords.map(function (c) {
          if (collapsible) {
            return (c / 17).toString(16);
          }
          return c.toString(16).padStart(2, "0");
        }).join("");
        return "#" + hex;
      }
    },
    keyword: {
      type: "custom",
      test: function test(str) {
        return /^[a-z]+$/i.test(str);
      },
      parse: function parse(str) {
        str = str.toLowerCase();
        var ret = {
          spaceId: "srgb",
          coords: null,
          alpha: 1
        };
        if (str === "transparent") {
          ret.coords = KEYWORDS.black;
          ret.alpha = 0;
        } else {
          ret.coords = KEYWORDS[str];
        }
        if (ret.coords) {
          return ret;
        }
      }
    }
  }
});
var P3 = new RGBColorSpace({
  id: "p3",
  cssId: "display-p3",
  name: "P3",
  base: P3Linear,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: sRGB.fromBase,
  toBase: sRGB.toBase
});

/** @import ColorSpace from "./ColorSpace.js" */
/** @import { ColorTypes, PlainColorObject } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").Display} Display */

// Default space for CSS output. Code in Color.js makes this wider if there's a DOM available
defaults.display_space = sRGB;
var supportsNone;
if (typeof CSS !== "undefined" && CSS.supports) {
  // Find widest supported color space for CSS
  for (var _i4 = 0, _arr = [lab, REC2020, P3]; _i4 < _arr.length; _i4++) {
    var space = _arr[_i4];
    var coords = space.getMinCoords();
    var color = {
      space: space,
      coords: coords,
      alpha: 1
    };
    var str = serialize(color);
    if (CSS.supports("color", str)) {
      defaults.display_space = space;
      break;
    }
  }
}

/**
 * Returns a serialization of the color that can actually be displayed in the browser.
 * If the default serialization can be displayed, it is returned.
 * Otherwise, the color is converted to Lab, REC2020, or P3, whichever is the widest supported.
 * In Node.js, this is basically equivalent to `serialize()` but returns a `String` object instead.
 * @param {ColorTypes} color
 * @param {{ space?: string | ColorSpace | undefined } & Record<string, any>} param1
 * Options to be passed to `serialize()`
 * @returns {Display} String object containing the serialized color
 * with a color property containing the converted color (or the original, if no conversion was necessary)
 */
function _display(color) {
  var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref16$space = _ref16.space,
    space = _ref16$space === void 0 ? defaults.display_space : _ref16$space,
    options = _objectWithoutProperties(_ref16, _excluded2);
  color = getColor(color);
  var ret = /** @type {Display} */serialize(color, options);
  if (typeof CSS === "undefined" || CSS.supports("color", /** @type {string} */ret) || !defaults.display_space) {
    ret = /** @type {Display} */new String(ret);
    ret.color = /** @type {PlainColorObject} */color;
  } else {
    // If we're here, what we were about to output is not supported
    var fallbackColor = /** @type {PlainColorObject} */color;

    // First, check if the culprit is none values
    var hasNone = color.coords.some(isNone) || isNone(color.alpha);
    if (hasNone) {
      // Does the browser support none values?
      if (!(supportsNone !== null && supportsNone !== void 0 ? supportsNone : supportsNone = CSS.supports("color", "hsl(none 50% 50%)"))) {
        // Nope, try again without none
        fallbackColor = clone(/** @type {PlainColorObject} */color);
        fallbackColor.coords = /** @type {[number, number, number]} */
        fallbackColor.coords.map(skipNone);
        fallbackColor.alpha = skipNone(fallbackColor.alpha);

        // @ts-expect-error This is set to the correct type later
        ret = serialize(fallbackColor, options);
        if (CSS.supports("color", /** @type {string} */ret)) {
          // We're done, now it's supported
          ret = /** @type {Display} */new String(ret);
          ret.color = fallbackColor;
          return ret;
        }
      }
    }

    // If we're here, the color function is not supported
    // Fall back to fallback space
    fallbackColor = to(fallbackColor, space);
    ret = /** @type {Display} */new String(serialize(fallbackColor, options));
    ret.color = fallbackColor;
  }
  return ret;
}

/** @import { ColorTypes } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").DeltasReturn} DeltasReturn */

/**
 * Get color differences per-component, on any color space
 * @param {ColorTypes} c1
 * @param {ColorTypes} c2
 * @param {object} options
 * @param {string | ColorSpace} [options.space=c1.space] - The color space to use for the delta calculation. Defaults to the color space of the first color.
 * @param {Parameters<typeof adjust>[0]} [options.hue="shorter"] - How to handle hue differences. Same as hue interpolation option.
 * @returns {DeltasReturn}
 */
function deltas(c1, c2) {
  var _ref17 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    space = _ref17.space,
    _ref17$hue = _ref17.hue,
    hue = _ref17$hue === void 0 ? "shorter" : _ref17$hue;
  c1 = getColor(c1);
  space || (space = c1.space);
  space = ColorSpace.get(space);
  var spaceCoords = Object.values(space.coords);
  var _map = [c1, c2].map(function (c) {
    return to(c, space);
  });
  var _map2 = _slicedToArray(_map, 2);
  c1 = _map2[0];
  c2 = _map2[1];
  var _map3 = [c1, c2].map(function (c) {
      return c.coords;
    }),
    _map4 = _slicedToArray(_map3, 2),
    coords1 = _map4[0],
    coords2 = _map4[1];
  var coords = /** @type {[number, number, number]} */
  coords1.map(function (coord1, i) {
    var coordMeta = spaceCoords[i];
    var coord2 = coords2[i];
    if (coordMeta.type === "angle") {
      var _adjust = adjust(hue, [coord1, coord2]);
      var _adjust2 = _slicedToArray(_adjust, 2);
      coord1 = _adjust2[0];
      coord2 = _adjust2[1];
    }
    return subtractCoords(coord1, coord2);
  });
  var alpha = subtractCoords(c1.alpha, c2.alpha);
  return {
    space: (/** @type {ColorSpace} */space),
    coords: coords,
    alpha: alpha
  };
}
function subtractCoords(c1, c2) {
  if (isNone(c1) || isNone(c2)) {
    return c1 === c2 ? null : 0;
  }
  return c1 - c2;
}

/** @import { ColorTypes } from "./types.js" */

/**
 * @param {ColorTypes} color1
 * @param {ColorTypes} color2
 * @returns {boolean}
 */
function equals(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  return color1.space === color2.space && color1.alpha === color2.alpha && color1.coords.every(function (c, i) {
    return c === color2.coords[i];
  });
}

/**
 * Relative luminance
 */

/** @import { ColorTypes } from "./types.js" */

/**
 *
 * @param {ColorTypes} color
 * @returns {number}
 */
function getLuminance(color) {
  // Assume getColor() is called on color in get()
  return get(color, [xyz_d65, "y"]);
}

/**
 * @param {ColorTypes} color
 * @param {number | ((coord: number) => number)} value
 */
function setLuminance(color, value) {
  // Assume getColor() is called on color in set()
  set(color, [xyz_d65, "y"], value);
}

/**
 * @param {typeof import("./color.js").default} Color
 */
function register$2(Color) {
  Object.defineProperty(Color.prototype, "luminance", {
    get: function get() {
      return getLuminance(this);
    },
    set: function set(value) {
      setLuminance(this, value);
    }
  });
}
var luminance = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getLuminance: getLuminance,
  register: register$2,
  setLuminance: setLuminance
});

// WCAG 2.0 contrast https://www.w3.org/TR/WCAG20-TECHS/G18.html
// Simple contrast, with fixed 5% viewing flare contribution
// Symmetric, does not matter which is foreground and which is background

/**
 * @param {import("../types.js").ColorTypes} color1
 * @param {import("../types.js").ColorTypes} color2
 * @returns {number}
 */
function contrastWCAG21(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var Y1 = Math.max(getLuminance(color1), 0);
  var Y2 = Math.max(getLuminance(color2), 0);
  if (Y2 > Y1) {
    var _ref18 = [Y2, Y1];
    Y1 = _ref18[0];
    Y2 = _ref18[1];
  }
  return (Y1 + 0.05) / (Y2 + 0.05);
}

// APCA 0.0.98G
// https://github.com/Myndex/apca-w3
// see also https://github.com/w3c/silver/issues/643

// exponents
var normBG = 0.56;
var normTXT = 0.57;
var revTXT = 0.62;
var revBG = 0.65;

// clamps
var blkThrs = 0.022;
var blkClmp = 1.414;
var loClip = 0.1;
var deltaYmin = 0.0005;

// scalers
// see https://github.com/w3c/silver/issues/645
var scaleBoW = 1.14;
var loBoWoffset = 0.027;
var scaleWoB = 1.14;
function fclamp(Y) {
  if (Y >= blkThrs) {
    return Y;
  }
  return Y + Math.pow(blkThrs - Y, blkClmp);
}
function linearize(val) {
  var sign = val < 0 ? -1 : 1;
  var abs = Math.abs(val);
  return sign * Math.pow(abs, 2.4);
}

/**
 * Not symmetric, requires a foreground (text) color, and a background color
 * @param {import("../types.js").ColorTypes} background
 * @param {import("../types.js").ColorTypes} foreground
 * @returns {number}
 */
function contrastAPCA(background, foreground) {
  foreground = getColor(foreground);
  background = getColor(background);
  var S;
  var C;
  var Sapc;

  // Myndex as-published, assumes sRGB inputs
  var R, G, B;
  foreground = to(foreground, "srgb");
  // Should these be clamped to in-gamut values?

  // Calculates "screen luminance" with non-standard simple gamma EOTF
  // weights should be from CSS Color 4, not the ones here which are via Myndex and copied from Lindbloom
  var _foreground$coords$ma = foreground.coords.map(function (c) {
    return isNone(c) ? 0 : c;
  });
  var _foreground$coords$ma2 = _slicedToArray(_foreground$coords$ma, 3);
  R = _foreground$coords$ma2[0];
  G = _foreground$coords$ma2[1];
  B = _foreground$coords$ma2[2];
  var lumTxt = linearize(R) * 0.2126729 + linearize(G) * 0.7151522 + linearize(B) * 0.072175;
  background = to(background, "srgb");
  var _background$coords$ma = background.coords.map(function (c) {
    return isNone(c) ? 0 : c;
  });
  var _background$coords$ma2 = _slicedToArray(_background$coords$ma, 3);
  R = _background$coords$ma2[0];
  G = _background$coords$ma2[1];
  B = _background$coords$ma2[2];
  var lumBg = linearize(R) * 0.2126729 + linearize(G) * 0.7151522 + linearize(B) * 0.072175;

  // toe clamping of very dark values to account for flare
  var Ytxt = fclamp(lumTxt);
  var Ybg = fclamp(lumBg);

  // are we "Black on White" (dark on light), or light on dark?
  var BoW = Ybg > Ytxt;

  // why is this a delta, when Y is not perceptually uniform?
  // Answer: it is a noise gate, see
  // https://github.com/LeaVerou/color.js/issues/208
  if (Math.abs(Ybg - Ytxt) < deltaYmin) {
    C = 0;
  } else {
    if (BoW) {
      // dark text on light background
      S = Math.pow(Ybg, normBG) - Math.pow(Ytxt, normTXT);
      C = S * scaleBoW;
    } else {
      // light text on dark background
      S = Math.pow(Ybg, revBG) - Math.pow(Ytxt, revTXT);
      C = S * scaleWoB;
    }
  }
  if (Math.abs(C) < loClip) {
    Sapc = 0;
  } else if (C > 0) {
    // not clear whether Woffset is loBoWoffset or loWoBoffset
    // but they have the same value
    Sapc = C - loBoWoffset;
  } else {
    Sapc = C + loBoWoffset;
  }
  return Sapc * 100;
}

// Michelson  luminance contrast
// the relation between the spread and the sum of the two luminances
// Symmetric, does not matter which is foreground and which is background
// No black level compensation for flare.

/**
 * @param {import("../types.js").ColorTypes} color1
 * @param {import("../types.js").ColorTypes} color2
 * @returns {number}
 */
function contrastMichelson(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var Y1 = Math.max(getLuminance(color1), 0);
  var Y2 = Math.max(getLuminance(color2), 0);
  if (Y2 > Y1) {
    var _ref19 = [Y2, Y1];
    Y1 = _ref19[0];
    Y2 = _ref19[1];
  }
  var denom = Y1 + Y2;
  return denom === 0 ? 0 : (Y1 - Y2) / denom;
}

// Weber luminance contrast
// The difference between the two luminances divided by the lower luminance
// Symmetric, does not matter which is foreground and which is background
// No black level compensation for flare.

// the darkest sRGB color above black is #000001 and this produces
// a plain Weber contrast of ~45647.
// So, setting the divide-by-zero result at 50000 is a reasonable
// max clamp for the plain Weber
var max = 50000;

/**
 * @param {import("../types.js").ColorTypes} color1
 * @param {import("../types.js").ColorTypes} color2
 * @returns {number}
 */
function contrastWeber(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var Y1 = Math.max(getLuminance(color1), 0);
  var Y2 = Math.max(getLuminance(color2), 0);
  if (Y2 > Y1) {
    var _ref20 = [Y2, Y1];
    Y1 = _ref20[0];
    Y2 = _ref20[1];
  }
  return Y2 === 0 ? max : (Y1 - Y2) / Y2;
}

// CIE Lightness difference, as used by Google Material Design
// Google HCT Tone is the same as CIE Lightness
// https://material.io/blog/science-of-color-design

/**
 * @param {import("../types.js").ColorTypes} color1
 * @param {import("../types.js").ColorTypes} color2
 * @returns {number}
 */
function contrastLstar(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var L1 = get(color1, [lab, "l"]);
  var L2 = get(color2, [lab, "l"]);
  return Math.abs(L1 - L2);
}

// κ * ε  = 2^3 = 8
var ε$3 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var ε3 = 24 / 116;
var κ$2 = 24389 / 27; // 29^3/3^3

var white$1 = WHITES.D65;
var lab_d65 = new ColorSpace({
  id: "lab-d65",
  name: "Lab D65",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    a: {
      refRange: [-125, 125]
    },
    b: {
      refRange: [-125, 125]
    }
  },
  // Assuming XYZ is relative to D65, convert to CIE Lab
  // from CIE standard, which now defines these as a rational fraction
  white: white$1,
  base: xyz_d65,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase: function fromBase(XYZ) {
    // compute xyz, which is XYZ scaled relative to reference white
    var xyz = XYZ.map(function (value, i) {
      return value / white$1[i];
    });

    // now compute f
    var f = xyz.map(function (value) {
      return value > ε$3 ? Math.cbrt(value) : (κ$2 * value + 16) / 116;
    });
    return [116 * f[1] - 16,
    // L
    500 * (f[0] - f[1]),
    // a
    200 * (f[1] - f[2]) // b
    ];
  },
  // Convert Lab to D65-adapted XYZ
  // Same result as CIE 15.3:2004 Appendix D although the derivation is different
  // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  toBase: function toBase(Lab) {
    // compute f, starting with the luminance-related term
    var f = [];
    f[1] = (Lab[0] + 16) / 116;
    f[0] = Lab[1] / 500 + f[1];
    f[2] = f[1] - Lab[2] / 200;

    // compute xyz
    var xyz = [f[0] > ε3 ? Math.pow(f[0], 3) : (116 * f[0] - 16) / κ$2, Lab[0] > 8 ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / κ$2, f[2] > ε3 ? Math.pow(f[2], 3) : (116 * f[2] - 16) / κ$2];

    // Compute XYZ by scaling xyz by reference white
    return xyz.map(function (value, i) {
      return value * white$1[i];
    });
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <percentage>"]
    }
  }
});

// Delta Phi Star perceptual lightness contrast
// See https://github.com/Myndex/deltaphistar
// The (difference between two Lstars each raised to phi) raised to (1/phi)
// Symmetric, does not matter which is foreground and which is background

var phi = Math.pow(5, 0.5) * 0.5 + 0.5; // Math.phi can be used if Math.js

/**
 * @param {import("../types.js").ColorTypes} color1
 * @param {import("../types.js").ColorTypes} color2
 * @returns {number}
 */
function contrastDeltaPhi(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var Lstr1 = get(color1, [lab_d65, "l"]);
  var Lstr2 = get(color2, [lab_d65, "l"]);
  var deltaPhiStar = Math.abs(Math.pow(Lstr1, phi) - Math.pow(Lstr2, phi));
  var contrast = Math.pow(deltaPhiStar, 1 / phi) * Math.SQRT2 - 40;
  return contrast < 7.5 ? 0.0 : contrast;
}

/** @typedef {keyof typeof import("./index.js") extends `contrast${infer Alg}` ? Alg : string} Algorithms */

var contrastMethods = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contrastAPCA: contrastAPCA,
  contrastDeltaPhi: contrastDeltaPhi,
  contrastLstar: contrastLstar,
  contrastMichelson: contrastMichelson,
  contrastWCAG21: contrastWCAG21,
  contrastWeber: contrastWeber
});

/** @import { ColorTypes } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").Algorithms} Algorithms */

/**
 *
 * @param {ColorTypes} background
 * @param {ColorTypes} foreground
 * @param {Algorithms | ({ algorithm: Algorithms } & Record<string, any>)} o
 * Algorithm to use as well as any other options to pass to the contrast function
 * @returns {number}
 * @throws {TypeError} Unknown or unspecified algorithm
 */
function contrast(background, foreground, o) {
  if (isString(o)) {
    o = {
      algorithm: o
    };
  }
  var _ref21 = o || {},
    algorithm = _ref21.algorithm,
    rest = _objectWithoutProperties(_ref21, _excluded3);
  if (!algorithm) {
    var algorithms = Object.keys(contrastMethods).map(function (a) {
      return a.replace(/^contrast/, "");
    }).join(", ");
    throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(algorithms));
  }
  background = getColor(background);
  foreground = getColor(foreground);
  for (var _a in contrastMethods) {
    if ("contrast" + algorithm.toLowerCase() === _a.toLowerCase()) {
      return contrastMethods[_a](background, foreground, rest);
    }
  }
  throw new TypeError("Unknown contrast algorithm: ".concat(algorithm));
}

/** @import Color, { ColorTypes } from "./color.js" */

// Chromaticity coordinates
/**
 * @param {ColorTypes} color
 * @returns {[number, number]}
 */
function uv(color) {
  // Assumes getAll() calls getColor() on color
  var _getAll = getAll(color, xyz_d65),
    _getAll2 = _slicedToArray(_getAll, 3),
    X = _getAll2[0],
    Y = _getAll2[1],
    Z = _getAll2[2];
  var denom = X + 15 * Y + 3 * Z;
  return [4 * X / denom, 9 * Y / denom];
}

/**
 * @param {ColorTypes} color
 * @returns {[number, number]}
 */
function xy(color) {
  // Assumes getAll() calls getColor() on color
  var _getAll3 = getAll(color, xyz_d65),
    _getAll4 = _slicedToArray(_getAll3, 3),
    X = _getAll4[0],
    Y = _getAll4[1],
    Z = _getAll4[2];
  var sum = X + Y + Z;
  return [X / sum, Y / sum];
}

/**
 * @param {typeof Color} Color
 */
function register$1(Color) {
  // no setters, as lightness information is lost
  // when converting color to chromaticity
  Object.defineProperty(Color.prototype, "uv", {
    get: function get() {
      return uv(this);
    }
  });
  Object.defineProperty(Color.prototype, "xy", {
    get: function get() {
      return xy(this);
    }
  });
}
var chromaticity = /*#__PURE__*/Object.freeze({
  __proto__: null,
  register: register$1,
  uv: uv,
  xy: xy
});

/** @import { ColorTypes } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").Methods} Methods */

/**
 *
 * @param {ColorTypes} c1
 * @param {ColorTypes} c2
 * @param {Methods | ({ method?: Methods | undefined } & Record<string, any>)} [o]
 * deltaE method to use as well as any other options to pass to the deltaE function
 * @returns {number}
 * @throws {TypeError} Unknown or unspecified method
 */
function deltaE(c1, c2) {
  var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isString(o)) {
    o = {
      method: o
    };
  }
  var _o = o,
    _o$method = _o.method,
    method = _o$method === void 0 ? defaults.deltaE : _o$method,
    rest = _objectWithoutProperties(_o, _excluded4);
  for (var _m2 in deltaEMethods) {
    if ("deltae" + method.toLowerCase() === _m2.toLowerCase()) {
      return deltaEMethods[_m2](c1, c2, rest);
    }
  }
  throw new TypeError("Unknown deltaE method: ".concat(method));
}

/** @import { ColorTypes, PlainColorObject, Ref } from "./types.js" */

/**
 * @param {ColorTypes} color
 * @param {number} amount
 * @returns {PlainColorObject}
 */
function lighten(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
  var space = ColorSpace.get("oklch", "lch");
  var /** @type {Ref} */lightness = [space, "l"];
  return set(color, lightness, function (l) {
    return l * (1 + amount);
  });
}

/**
 * @param {ColorTypes} color
 * @param {number} amount
 * @returns {PlainColorObject}
 */
function darken(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
  var space = ColorSpace.get("oklch", "lch");
  var /** @type {Ref} */lightness = [space, "l"];
  return set(color, lightness, function (l) {
    return l * (1 - amount);
  });
}

/** @type {"color"} */
lighten.returns = "color";

/** @type {"color"} */
darken.returns = "color";
var variations = /*#__PURE__*/Object.freeze({
  __proto__: null,
  darken: darken,
  lighten: lighten
});

/**
 * Functions related to color interpolation
 */

/** @import { ColorTypes, PlainColorObject, Ref } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").MixOptions} MixOptions */
/** @typedef {import("./types.js").Range} Range */
/** @typedef {import("./types.js").RangeOptions} RangeOptions */
/** @typedef {import("./types.js").StepsOptions} StepsOptions */

/**
 * Return an intermediate color between two colors
 * @overload
 * @param {ColorTypes} c1
 * @param {ColorTypes} c2
 * @param {MixOptions} [options]
 * @returns {PlainColorObject}
 */
/**
 * @overload
 * @param {ColorTypes} c1
 * @param {ColorTypes} c2
 * @param {number} [p=0.5]
 * @param {MixOptions} [options]
 * @returns {PlainColorObject}
 */
function mix(c1, c2, p) {
  var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _ref22 = [getColor(c1), getColor(c2)];
  c1 = _ref22[0];
  c2 = _ref22[1];
  if (type(p) === "object") {
    var _ref23 = [0.5, p];
    p = _ref23[0];
    o = _ref23[1];
  }
  var r = range(c1, c2, o);
  return r(p !== null && p !== void 0 ? p : 0.5); // why not give p a default value like we do for options? Overloading doesn't work, and TS complains
}

/**
 * Get an array of discrete steps
 * @overload
 * @param {ColorTypes} c1
 * @param {ColorTypes} c2
 * @param {StepsOptions} [options]
 * @returns {PlainColorObject[]}
 */
/**
 * @overload
 * @param {Range} range
 * @param {StepsOptions} [options]
 * @returns {PlainColorObject[]}
 */
function steps(c1, c2) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var colorRange;
  if (isRange(c1)) {
    // Tweaking existing range
    colorRange = c1;
    options = c2;
    var _colorRange$rangeArgs = _slicedToArray(colorRange.rangeArgs.colors, 2);
    c1 = _colorRange$rangeArgs[0];
    c2 = _colorRange$rangeArgs[1];
  }
  var _options = options,
    maxDeltaE = _options.maxDeltaE,
    deltaEMethod = _options.deltaEMethod,
    _options$steps = _options.steps,
    steps = _options$steps === void 0 ? 2 : _options$steps,
    _options$maxSteps = _options.maxSteps,
    maxSteps = _options$maxSteps === void 0 ? 1000 : _options$maxSteps,
    rangeOptions = _objectWithoutProperties(_options, _excluded5);
  if (!colorRange) {
    var _ref24 = [getColor(c1), getColor(c2)];
    c1 = _ref24[0];
    c2 = _ref24[1];
    colorRange = range(c1, c2, rangeOptions);
  }
  var totalDelta = deltaE(c1, c2);
  var actualSteps = maxDeltaE > 0 ? Math.max(steps, Math.ceil(totalDelta / maxDeltaE) + 1) : steps;
  var ret = [];
  if (maxSteps !== undefined) {
    actualSteps = Math.min(actualSteps, maxSteps);
  }
  if (actualSteps === 1) {
    ret = [{
      p: 0.5,
      color: colorRange(0.5)
    }];
  } else {
    var step = 1 / (actualSteps - 1);
    ret = Array.from({
      length: actualSteps
    }, function (_, i) {
      var p = i * step;
      return {
        p: p,
        color: colorRange(p)
      };
    });
  }
  if (maxDeltaE > 0) {
    // Iterate over all stops and find max deltaE
    var maxDelta = ret.reduce(function (acc, cur, i) {
      if (i === 0) {
        return 0;
      }
      var ΔΕ = deltaE(cur.color, ret[i - 1].color, deltaEMethod);
      return Math.max(acc, ΔΕ);
    }, 0);
    while (maxDelta > maxDeltaE) {
      // Insert intermediate stops and measure maxDelta again
      // We need to do this for all pairs, otherwise the midpoint shifts
      maxDelta = 0;
      for (var i = 1; i < ret.length && ret.length < maxSteps; i++) {
        var prev = ret[i - 1];
        var cur = ret[i];
        var _p2 = (cur.p + prev.p) / 2;
        var _color2 = colorRange(_p2);
        maxDelta = Math.max(maxDelta, deltaE(_color2, prev.color), deltaE(_color2, cur.color));
        ret.splice(i, 0, {
          p: _p2,
          color: colorRange(_p2)
        });
        i++;
      }
    }
  }
  ret = ret.map(function (a) {
    return a.color;
  });
  return ret;
}

/**
 * Creates a function that accepts a number and returns a color.
 * For numbers in the range 0 to 1, the function interpolates;
 * for numbers outside that range, the function extrapolates
 * (and thus may not return the results you expect)
 * @overload
 * @param {Range} range
 * @param {RangeOptions} [options]
 * @returns {Range}
 */
/**
 * @overload
 * @param {ColorTypes} color1
 * @param {ColorTypes} color2
 * @param {RangeOptions & Record<string, any>} [options]
 * @returns {Range}
 */
function range(color1, color2) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isRange(color1)) {
    // Tweaking existing range
    var r = color1,
      _options2 = color2;
    return range.apply(void 0, _toConsumableArray(r.rangeArgs.colors).concat([_objectSpread(_objectSpread({}, r.rangeArgs.options), _options2)]));
  }
  var space = options.space,
    outputSpace = options.outputSpace,
    progression = options.progression,
    premultiplied = options.premultiplied;
  color1 = getColor(color1);
  color2 = getColor(color2);

  // Make sure we're working on copies of these colors
  color1 = clone(color1);
  color2 = clone(color2);
  var rangeArgs = {
    colors: [color1, color2],
    options: options
  };
  if (space) {
    space = ColorSpace.get(space);
  } else {
    space = ColorSpace.registry[defaults.interpolationSpace] || color1.space;
  }
  outputSpace = outputSpace ? ColorSpace.get(outputSpace) : space;
  color1 = to(color1, space);
  color2 = to(color2, space);

  // Gamut map to avoid areas of flat color
  color1 = toGamut(color1);
  color2 = toGamut(color2);

  // Handle hue interpolation
  // See https://github.com/w3c/csswg-drafts/issues/4735#issuecomment-635741840
  if (space.coords.h && space.coords.h.type === "angle") {
    var arc = options.hue = options.hue || "shorter";
    var /** @type {Ref} */hue = [space, "h"];
    var _ref25 = [get(color1, hue), get(color2, hue)],
      θ1 = _ref25[0],
      θ2 = _ref25[1];
    // Undefined hues must be evaluated before hue fix-up to properly
    // calculate hue arcs between undefined and defined hues.
    // See https://github.com/w3c/csswg-drafts/issues/9436#issuecomment-1746957545
    if (isNone(θ1) && !isNone(θ2)) {
      θ1 = θ2;
    } else if (isNone(θ2) && !isNone(θ1)) {
      θ2 = θ1;
    }
    var _adjust3 = adjust(arc, [θ1, θ2]);
    var _adjust4 = _slicedToArray(_adjust3, 2);
    θ1 = _adjust4[0];
    θ2 = _adjust4[1];
    set(color1, hue, θ1);
    set(color2, hue, θ2);
  }
  if (premultiplied) {
    // not coping with polar spaces yet
    color1.coords = /** @type {[number, number, number]} */
    color1.coords.map(function (c) {
      return c * color1.alpha;
    });
    color2.coords = /** @type {[number, number, number]} */
    color2.coords.map(function (c) {
      return c * color2.alpha;
    });
  }
  return Object.assign(function (p) {
    p = progression ? progression(p) : p;
    var coords = color1.coords.map(function (start, i) {
      var end = color2.coords[i];
      return interpolate(start, end, p);
    });
    var alpha = interpolate(color1.alpha, color2.alpha, p);
    var ret = {
      space: space,
      coords: coords,
      alpha: alpha
    };
    if (premultiplied) {
      // undo premultiplication
      ret.coords = ret.coords.map(function (c) {
        return c / alpha;
      });
    }
    if (outputSpace !== space) {
      ret = to(ret, outputSpace);
    }
    return ret;
  }, {
    rangeArgs: rangeArgs
  });
}

/**
 * @param {any} val
 * @returns {val is Range}
 */
function isRange(val) {
  return type(val) === "function" && !!val.rangeArgs;
}
defaults.interpolationSpace = "lab";

/**
 * @param {typeof import("./color.js").default} Color
 */
function register(Color) {
  Color.defineFunction("mix", mix, {
    returns: "color"
  });
  Color.defineFunction("range", range, {
    returns: "function<color>"
  });
  Color.defineFunction("steps", steps, {
    returns: "array<color>"
  });
}
var interpolation = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isRange: isRange,
  mix: mix,
  range: range,
  register: register,
  steps: steps
});
var hsl = new ColorSpace({
  id: "hsl",
  name: "HSL",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: sRGB,
  // Adapted from https://drafts.csswg.org/css-color-4/better-rgbToHsl.js
  fromBase: function fromBase(rgb) {
    var max = Math.max.apply(Math, _toConsumableArray(rgb));
    var min = Math.min.apply(Math, _toConsumableArray(rgb));
    var _rgb = _slicedToArray(rgb, 3),
      r = _rgb[0],
      g = _rgb[1],
      b = _rgb[2];
    var h = null,
      s = 0,
      l = (min + max) / 2;
    var d = max - min;
    if (d !== 0) {
      s = l === 0 || l === 1 ? 0 : (max - l) / Math.min(l, 1 - l);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
      }
      h = h * 60;
    }

    // Very out of gamut colors can produce negative saturation
    // If so, just rotate the hue by 180 and use a positive saturation
    // see https://github.com/w3c/csswg-drafts/issues/9222
    if (s < 0) {
      h += 180;
      s = Math.abs(s);
    }
    if (h >= 360) {
      h -= 360;
    }
    return [h, s * 100, l * 100];
  },
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
  toBase: function toBase(hsl) {
    var _hsl = _slicedToArray(hsl, 3),
      h = _hsl[0],
      s = _hsl[1],
      l = _hsl[2];
    h = h % 360;
    if (h < 0) {
      h += 360;
    }
    s /= 100;
    l /= 100;
    function f(n) {
      var k = (n + h / 30) % 12;
      var a = s * Math.min(l, 1 - l);
      return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    }
    return [f(0), f(8), f(4)];
  },
  formats: {
    hsl: {
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    },
    hsla: {
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
      commas: true,
      alpha: true
    }
  }
});

// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.

var HSV = new ColorSpace({
  id: "hsv",
  name: "HSV",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    v: {
      range: [0, 100],
      name: "Value"
    }
  },
  base: sRGB,
  // https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation
  fromBase: function fromBase(rgb) {
    var max = Math.max.apply(Math, _toConsumableArray(rgb));
    var min = Math.min.apply(Math, _toConsumableArray(rgb));
    var _rgb2 = _slicedToArray(rgb, 3),
      r = _rgb2[0],
      g = _rgb2[1],
      b = _rgb2[2];
    var h = null,
      s = 0,
      v = max;
    var d = max - min;
    if (d !== 0) {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
      }
      h = h * 60;
    }
    if (v) {
      s = d / v;
    }
    if (h >= 360) {
      h -= 360;
    }
    return [h, s * 100, v * 100];
  },
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB_alternative
  toBase: function toBase(hsv) {
    var _hsv = _slicedToArray(hsv, 3),
      h = _hsv[0],
      s = _hsv[1],
      v = _hsv[2];
    h = h % 360;
    if (h < 0) {
      h += 360;
    }
    s /= 100;
    v /= 100;
    function f(n) {
      var k = (n + h / 60) % 6;
      return v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
    }
    return [f(5), f(3), f(1)];
  },
  formats: {
    color: {
      id: "--hsv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});

// The Hue, Whiteness Blackness (HWB) colorspace
// See https://drafts.csswg.org/css-color-4/#the-hwb-notation
// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.

var hwb = new ColorSpace({
  id: "hwb",
  name: "HWB",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    w: {
      range: [0, 100],
      name: "Whiteness"
    },
    b: {
      range: [0, 100],
      name: "Blackness"
    }
  },
  base: HSV,
  fromBase: function fromBase(hsv) {
    var _hsv2 = _slicedToArray(hsv, 3),
      h = _hsv2[0],
      s = _hsv2[1],
      v = _hsv2[2];
    return [h, v * (100 - s) / 100, 100 - v];
  },
  toBase: function toBase(hwb) {
    var _hwb = _slicedToArray(hwb, 3),
      h = _hwb[0],
      w = _hwb[1],
      b = _hwb[2];

    // Now convert percentages to [0..1]
    w /= 100;
    b /= 100;

    // Achromatic check (white plus black >= 1)
    var sum = w + b;
    if (sum >= 1) {
      var gray = w / sum;
      return [h, 0, gray * 100];
    }
    var v = 1 - b;
    var s = v === 0 ? 0 : 1 - w / v;
    return [h, s * 100, v * 100];
  },
  formats: {
    hwb: {
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});

/** @import { Matrix3x3 } from "../types.js" */

// convert an array of linear-light a98-rgb values to CIE XYZ
// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
// has greater numerical precision than section 4.3.5.3 of
// https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
// but the values below were calculated from first principles
// from the chromaticity coordinates of R G B W

/** @type {Matrix3x3} */
// prettier-ignore
var toXYZ_M$2 = [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]];

/** @type {Matrix3x3} */
// prettier-ignore
var fromXYZ_M$2 = [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]];
var A98Linear = new RGBColorSpace({
  id: "a98rgb-linear",
  cssId: "--a98-rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: toXYZ_M$2,
  fromXYZ_M: fromXYZ_M$2
});
var a98rgb = new RGBColorSpace({
  id: "a98rgb",
  cssId: "a98-rgb",
  name: "Adobe® 98 RGB compatible",
  base: A98Linear,
  toBase: function toBase(RGB) {
    return RGB.map(function (val) {
      return Math.pow(Math.abs(val), 563 / 256) * Math.sign(val);
    });
  },
  fromBase: function fromBase(RGB) {
    return RGB.map(function (val) {
      return Math.pow(Math.abs(val), 256 / 563) * Math.sign(val);
    });
  }
});

/** @import { Matrix3x3 } from "../types.js" */

// convert an array of  prophoto-rgb values to CIE XYZ
// using  D50 (so no chromatic adaptation needed afterwards)
// matrix cannot be expressed in rational form, but is calculated to 64 bit accuracy
// see https://github.com/w3c/csswg-drafts/issues/7675
/** @type {Matrix3x3} */
// prettier-ignore
var toXYZ_M$1 = [[0.79776664490064230, 0.13518129740053308, 0.03134773412839220], [0.28807482881940130, 0.71183523424187300, 0.00008993693872564], [0.00000000000000000, 0.00000000000000000, 0.82510460251046020]];

/** @type {Matrix3x3} */
// prettier-ignore
var fromXYZ_M$1 = [[1.34578688164715830, -0.25557208737979464, -0.05110186497554526], [-0.54463070512490190, 1.50824774284514680, 0.02052744743642139], [0.00000000000000000, 0.00000000000000000, 1.21196754563894520]];
var ProPhotoLinear = new RGBColorSpace({
  id: "prophoto-linear",
  cssId: "--prophoto-rgb-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: XYZ_D50,
  toXYZ_M: toXYZ_M$1,
  fromXYZ_M: fromXYZ_M$1
});
var Et = 1 / 512;
var Et2 = 16 / 512;
var prophoto = new RGBColorSpace({
  id: "prophoto",
  cssId: "prophoto-rgb",
  name: "ProPhoto",
  base: ProPhotoLinear,
  toBase: function toBase(RGB) {
    // Transfer curve is gamma 1.8 with a small linear portion
    return RGB.map(function (v) {
      var sign = v < 0 ? -1 : 1;
      var abs = v * sign;
      if (abs < Et2) {
        return v / 16;
      }
      return sign * Math.pow(abs, 1.8);
    });
  },
  fromBase: function fromBase(RGB) {
    return RGB.map(function (v) {
      var sign = v < 0 ? -1 : 1;
      var abs = v * sign;
      if (abs >= Et) {
        return sign * Math.pow(abs, 1 / 1.8);
      }
      return 16 * v;
    });
  }
});

// import sRGB from "./srgb.js";

var α = 1.09929682680944;
var β = 0.018053968510807;
var rec2020Oetf = new RGBColorSpace({
  id: "--rec2020-oetf",
  name: "REC.2020_Scene_Referred",
  base: REC_2020_Linear,
  referred: "scene",
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase: function toBase(RGB) {
    return RGB.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = val * sign;
      if (abs < β * 4.5) {
        return val / 4.5;
      }
      return sign * Math.pow((abs + α - 1) / α, 1 / 0.45);
    });
  },
  fromBase: function fromBase(RGB) {
    return RGB.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = val * sign;
      if (abs >= β) {
        return sign * (α * Math.pow(abs, 0.45) - (α - 1));
      }
      return 4.5 * val;
    });
  }
});
var oklch = new ColorSpace({
  id: "oklch",
  name: "OkLCh",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    c: {
      refRange: [0, 0.4],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  white: "D65",
  base: Oklab,
  fromBase: lch.fromBase,
  toBase: lch.toBase,
  formats: {
    oklch: {
      coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
});

// Okhsl class.
//
// ---- License ----
//
// Copyright (c) 2021 Björn Ottosson
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is furnished to do
// so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/** @import { Matrix3x3, Vector3 } from "../types.js" */

// Type re-exports
/** @typedef {import("../types.js").OKCoeff} OKCoeff */

var tau = 2 * Math.PI;

/** @type {Matrix3x3} */
// prettier-ignore
var toSRGBLinear = [[4.0767416360759583, -3.3077115392580629, 0.2309699031821043], [-1.2684379732850315, 2.6097573492876882, -0.3413193760026570], [-0.0041960761386756, -0.7034186179359362, 1.7076146940746117]];

/** @type {OKCoeff} */
var RGBCoeff = [
// Red
[
// Limit
[-1.8817031, -0.80936501],
// `Kn` coefficients
[1.19086277, 1.76576728, 0.59662641, 0.75515197, 0.56771245]],
// Green
[
// Limit
[1.8144408, -1.19445267],
// `Kn` coefficients
[0.73956515, -0.45954404, 0.08285427, 0.12541073, -0.14503204]],
// Blue
[
// Limit
[0.13110758, 1.81333971],
// `Kn` coefficients
[1.35733652, -0.00915799, -1.1513021, -0.50559606, 0.00692167]]];
var floatMax = Number.MAX_VALUE;
var K1 = 0.206;
var K2 = 0.03;
var K3 = (1.0 + K1) / (1.0 + K2);
function vdot(a, b) {
  // Dot two vectors

  var l = a.length;
  if (l !== b.length) {
    throw new Error("Vectors of size ".concat(l, " and ").concat(b.length, " are not aligned"));
  }
  var s = 0.0;
  a.forEach(function (c, i) {
    s += c * b[i];
  });
  return s;
}

/**
 * Toe function for L_r
 * @param {number} x
 */
function toe(x) {
  return 0.5 * (K3 * x - K1 + Math.sqrt((K3 * x - K1) * (K3 * x - K1) + 4 * K2 * K3 * x));
}

/**
 * Inverse toe function for L_r
 * @param {number} x
 */
function toeInv(x) {
  return (Math.pow(x, 2) + K1 * x) / (K3 * (x + K2));
}

/**
 * @param {readonly [number, number]} cusp
 * @returns {[number, number]}
 */
function toSt(cusp) {
  // To ST.

  var _cusp = _slicedToArray(cusp, 2),
    l = _cusp[0],
    c = _cusp[1];
  return [c / l, c / (1 - l)];
}
function getStMid(a, b) {
  // Returns a smooth approximation of the location of the cusp.
  //
  // This polynomial was created by an optimization process.
  // It has been designed so that S_mid < S_max and T_mid < T_max.

  // prettier-ignore
  var s = 0.11516993 + 1.0 / (7.44778970 + 4.15901240 * b + a * (-2.19557347 + 1.75198401 * b + a * (-2.13704948 - 10.02301043 * b + a * (-4.24894561 + 5.38770819 * b + 4.69891013 * a))));

  // prettier-ignore
  var t = 0.11239642 + 1.0 / (1.61320320 - 0.68124379 * b + a * (0.40370612 + 0.90148123 * b + a * (-0.27087943 + 0.61223990 * b + a * (0.00299215 - 0.45399568 * b - 0.14661872 * a))));
  return [s, t];
}

/**
 * @param {Vector3} lab
 * @param {Matrix3x3} lmsToRgb
 */
function oklabToLinearRGB(lab, lmsToRgb) {
  // Convert from Oklab to linear RGB.
  //
  // Can be any gamut as long as `lmsToRgb` is a matrix
  // that transform the LMS values to the linear RGB space.

  var lms = multiply_v3_m3x3(lab, LabtoLMS_M);
  lms[0] = Math.pow(lms[0], 3);
  lms[1] = Math.pow(lms[1], 3);
  lms[2] = Math.pow(lms[2], 3);
  return multiply_v3_m3x3(lms, lmsToRgb, lms);
}

/**
 * @param {number} a
 * @param {number} b
 * @param {Matrix3x3} lmsToRgb
 * @param {OKCoeff} okCoeff
 * @returns {[number, number]}
 * @todo Could probably make these types more specific/better-documented if desired
 */
function findCusp(a, b, lmsToRgb, okCoeff) {
  // Finds L_cusp and C_cusp for a given hue.
  //
  // `a` and `b` must be normalized so `a^2 + b^2 == 1`.

  // First, find the maximum saturation (saturation `S = C/L`)
  var sCusp = computeMaxSaturation(a, b, lmsToRgb, okCoeff);

  // Convert to linear RGB to find the first point where at least one of r, g or b >= 1:
  var rgb = oklabToLinearRGB([1, sCusp * a, sCusp * b], lmsToRgb);
  var lCusp = spow(1.0 / Math.max.apply(Math, _toConsumableArray(rgb)), 1 / 3);
  var cCusp = lCusp * sCusp;
  return [lCusp, cCusp];
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} l1
 * @param {number} c1
 * @param {number} l0
 * @param {Matrix3x3} lmsToRgb
 * @param {OKCoeff} okCoeff
 * @param {[number, number]} cusp
 * @returns {Number}
 * @todo Could probably make these types more specific/better-documented if desired
 */
function findGamutIntersection(a, b, l1, c1, l0, lmsToRgb, okCoeff, cusp) {
  // Finds intersection of the line.
  //
  // Defined by the following:
  //
  // ```
  // L = L0 * (1 - t) + t * L1
  // C = t * C1
  // ```
  //
  // `a` and `b` must be normalized so `a^2 + b^2 == 1`.

  var t;
  if (cusp === undefined) {
    cusp = findCusp(a, b, lmsToRgb, okCoeff);
  }

  // Find the intersection for upper and lower half separately
  if ((l1 - l0) * cusp[1] - (cusp[0] - l0) * c1 <= 0.0) {
    // Lower half
    t = cusp[1] * l0 / (c1 * cusp[0] + cusp[1] * (l0 - l1));
  } else {
    // Upper half

    // First intersect with triangle
    t = cusp[1] * (l0 - 1.0) / (c1 * (cusp[0] - 1.0) + cusp[1] * (l0 - l1));

    // Then one step Halley's method
    var dl = l1 - l0;
    var dc = c1;
    var kl = vdot(LabtoLMS_M[0].slice(1), [a, b]);
    var km = vdot(LabtoLMS_M[1].slice(1), [a, b]);
    var ks = vdot(LabtoLMS_M[2].slice(1), [a, b]);
    var ldt_ = dl + dc * kl;
    var mdt_ = dl + dc * km;
    var sdt_ = dl + dc * ks;

    // If higher accuracy is required, 2 or 3 iterations of the following block can be used:
    var L = l0 * (1.0 - t) + t * l1;
    var C = t * c1;
    var l_ = L + C * kl;
    var m_ = L + C * km;
    var s_ = L + C * ks;
    var l = Math.pow(l_, 3);
    var _m3 = Math.pow(m_, 3);
    var s = Math.pow(s_, 3);
    var ldt = 3 * ldt_ * Math.pow(l_, 2);
    var mdt = 3 * mdt_ * Math.pow(m_, 2);
    var sdt = 3 * sdt_ * Math.pow(s_, 2);
    var ldt2 = 6 * Math.pow(ldt_, 2) * l_;
    var mdt2 = 6 * Math.pow(mdt_, 2) * m_;
    var sdt2 = 6 * Math.pow(sdt_, 2) * s_;
    var r_ = vdot(lmsToRgb[0], [l, _m3, s]) - 1;
    var r1 = vdot(lmsToRgb[0], [ldt, mdt, sdt]);
    var r2 = vdot(lmsToRgb[0], [ldt2, mdt2, sdt2]);
    var ur = r1 / (r1 * r1 - 0.5 * r_ * r2);
    var tr = -r_ * ur;
    var g_ = vdot(lmsToRgb[1], [l, _m3, s]) - 1;
    var g1 = vdot(lmsToRgb[1], [ldt, mdt, sdt]);
    var g2 = vdot(lmsToRgb[1], [ldt2, mdt2, sdt2]);
    var ug = g1 / (g1 * g1 - 0.5 * g_ * g2);
    var tg = -g_ * ug;
    var b_ = vdot(lmsToRgb[2], [l, _m3, s]) - 1;
    var b1 = vdot(lmsToRgb[2], [ldt, mdt, sdt]);
    var b2 = vdot(lmsToRgb[2], [ldt2, mdt2, sdt2]);
    var ub = b1 / (b1 * b1 - 0.5 * b_ * b2);
    var tb = -b_ * ub;
    tr = ur >= 0.0 ? tr : floatMax;
    tg = ug >= 0.0 ? tg : floatMax;
    tb = ub >= 0.0 ? tb : floatMax;
    t += Math.min(tr, Math.min(tg, tb));
  }
  return t;
}
function getCs(lab, lmsToRgb, okCoeff) {
  // Get Cs

  var _lab = _slicedToArray(lab, 3),
    l = _lab[0],
    a = _lab[1],
    b = _lab[2];
  var cusp = findCusp(a, b, lmsToRgb, okCoeff);
  var cMax = findGamutIntersection(a, b, l, 1, l, lmsToRgb, okCoeff, cusp);
  var stMax = toSt(cusp);

  // Scale factor to compensate for the curved part of gamut shape:
  var k = cMax / Math.min(l * stMax[0], (1 - l) * stMax[1]);
  var stMid = getStMid(a, b);

  // Use a soft minimum function, instead of a sharp triangle shape to get a smooth value for chroma.
  var ca = l * stMid[0];
  var cb = (1.0 - l) * stMid[1];
  var cMid = 0.9 * k * Math.sqrt(Math.sqrt(1.0 / (1.0 / Math.pow(ca, 4) + 1.0 / Math.pow(cb, 4))));

  // For `C_0`, the shape is independent of hue, so `ST` are constant.
  // Values picked to roughly be the average values of `ST`.
  ca = l * 0.4;
  cb = (1.0 - l) * 0.8;

  // Use a soft minimum function, instead of a sharp triangle shape to get a smooth value for chroma.
  var c0 = Math.sqrt(1.0 / (1.0 / Math.pow(ca, 2) + 1.0 / Math.pow(cb, 2)));
  return [c0, cMid, cMax];
}
function computeMaxSaturation(a, b, lmsToRgb, okCoeff) {
  // Finds the maximum saturation possible for a given hue that fits in RGB.
  //
  // Saturation here is defined as `S = C/L`.
  // `a` and `b` must be normalized so `a^2 + b^2 == 1`.

  // Max saturation will be when one of r, g or b goes below zero.

  // Select different coefficients depending on which component goes below zero first.

  var k0, k1, k2, k3, k4, wl, wm, ws;
  if (vdot(okCoeff[0][0], [a, b]) > 1) {
    // Red component
    var _okCoeff$0$ = _slicedToArray(okCoeff[0][1], 5);
    k0 = _okCoeff$0$[0];
    k1 = _okCoeff$0$[1];
    k2 = _okCoeff$0$[2];
    k3 = _okCoeff$0$[3];
    k4 = _okCoeff$0$[4];
    var _lmsToRgb$ = _slicedToArray(lmsToRgb[0], 3);
    wl = _lmsToRgb$[0];
    wm = _lmsToRgb$[1];
    ws = _lmsToRgb$[2];
  } else if (vdot(okCoeff[1][0], [a, b]) > 1) {
    // Green component
    var _okCoeff$1$ = _slicedToArray(okCoeff[1][1], 5);
    k0 = _okCoeff$1$[0];
    k1 = _okCoeff$1$[1];
    k2 = _okCoeff$1$[2];
    k3 = _okCoeff$1$[3];
    k4 = _okCoeff$1$[4];
    var _lmsToRgb$2 = _slicedToArray(lmsToRgb[1], 3);
    wl = _lmsToRgb$2[0];
    wm = _lmsToRgb$2[1];
    ws = _lmsToRgb$2[2];
  } else {
    // Blue component
    var _okCoeff$2$ = _slicedToArray(okCoeff[2][1], 5);
    k0 = _okCoeff$2$[0];
    k1 = _okCoeff$2$[1];
    k2 = _okCoeff$2$[2];
    k3 = _okCoeff$2$[3];
    k4 = _okCoeff$2$[4];
    var _lmsToRgb$3 = _slicedToArray(lmsToRgb[2], 3);
    wl = _lmsToRgb$3[0];
    wm = _lmsToRgb$3[1];
    ws = _lmsToRgb$3[2];
  }

  // Approximate max saturation using a polynomial:
  var sat = k0 + k1 * a + k2 * b + k3 * Math.pow(a, 2) + k4 * a * b;

  // Do one step Halley's method to get closer.
  // This gives an error less than 10e6, except for some blue hues where the `dS/dh` is close to infinite.
  // This should be sufficient for most applications, otherwise do two/three steps.

  var kl = vdot(LabtoLMS_M[0].slice(1), [a, b]);
  var km = vdot(LabtoLMS_M[1].slice(1), [a, b]);
  var ks = vdot(LabtoLMS_M[2].slice(1), [a, b]);
  var l_ = 1.0 + sat * kl;
  var m_ = 1.0 + sat * km;
  var s_ = 1.0 + sat * ks;
  var l = Math.pow(l_, 3);
  var m = Math.pow(m_, 3);
  var s = Math.pow(s_, 3);
  var lds = 3.0 * kl * Math.pow(l_, 2);
  var mds = 3.0 * km * Math.pow(m_, 2);
  var sds = 3.0 * ks * Math.pow(s_, 2);
  var lds2 = 6.0 * Math.pow(kl, 2) * l_;
  var mds2 = 6.0 * Math.pow(km, 2) * m_;
  var sds2 = 6.0 * Math.pow(ks, 2) * s_;
  var f = wl * l + wm * m + ws * s;
  var f1 = wl * lds + wm * mds + ws * sds;
  var f2 = wl * lds2 + wm * mds2 + ws * sds2;
  sat = sat - f * f1 / (Math.pow(f1, 2) - 0.5 * f * f2);
  return sat;
}
function okhslToOklab(hsl, lmsToRgb, okCoeff) {
  // Convert Okhsl to Oklab.

  var _hsl2 = _slicedToArray(hsl, 3),
    h = _hsl2[0],
    s = _hsl2[1],
    l = _hsl2[2];
  var L = toeInv(l);
  var a = null;
  var b = null;
  h = constrain(h) / 360.0;
  if (L !== 0.0 && L !== 1.0 && s !== 0) {
    var a_ = Math.cos(tau * h);
    var b_ = Math.sin(tau * h);
    var _getCs = getCs([L, a_, b_], lmsToRgb, okCoeff),
      _getCs2 = _slicedToArray(_getCs, 3),
      c0 = _getCs2[0],
      cMid = _getCs2[1],
      cMax = _getCs2[2];

    // Interpolate the three values for C so that:
    // ```
    // At s=0: dC/ds = C_0, C=0
    // At s=0.8: C=C_mid
    // At s=1.0: C=C_max
    // ```

    var mid = 0.8;
    var midInv = 1.25;
    var t, k0, k1, k2;
    if (s < mid) {
      t = midInv * s;
      k0 = 0.0;
      k1 = mid * c0;
      k2 = 1.0 - k1 / cMid;
    } else {
      t = 5 * (s - 0.8);
      k0 = cMid;
      k1 = 0.2 * Math.pow(cMid, 2) * Math.pow(1.25, 2) / c0;
      k2 = 1.0 - k1 / (cMax - cMid);
    }
    var _c2 = k0 + t * k1 / (1.0 - k2 * t);
    a = _c2 * a_;
    b = _c2 * b_;
  }
  return [L, a, b];
}
function oklabToOkhsl(lab, lmsToRgb, okCoeff) {
  // Oklab to Okhsl.

  // Epsilon for lightness should approach close to 32 bit lightness
  // Epsilon for saturation just needs to be sufficiently close when denoting achromatic
  var εL = 1e-7;
  var εS = 1e-4;
  var L = lab[0];
  var s = 0.0;
  var l = toe(L);
  var c = Math.sqrt(Math.pow(lab[1], 2) + Math.pow(lab[2], 2));
  var h = 0.5 + Math.atan2(-lab[2], -lab[1]) / tau;
  if (l !== 0.0 && l !== 1.0 && c !== 0) {
    var a_ = lab[1] / c;
    var b_ = lab[2] / c;
    var _getCs3 = getCs([L, a_, b_], lmsToRgb, okCoeff),
      _getCs4 = _slicedToArray(_getCs3, 3),
      c0 = _getCs4[0],
      cMid = _getCs4[1],
      cMax = _getCs4[2];
    var mid = 0.8;
    var midInv = 1.25;
    var k0, k1, k2, t;
    if (c < cMid) {
      k1 = mid * c0;
      k2 = 1.0 - k1 / cMid;
      t = c / (k1 + k2 * c);
      s = t * mid;
    } else {
      k0 = cMid;
      k1 = 0.2 * Math.pow(cMid, 2) * Math.pow(midInv, 2) / c0;
      k2 = 1.0 - k1 / (cMax - cMid);
      t = (c - k0) / (k1 + k2 * (c - k0));
      s = mid + 0.2 * t;
    }
  }
  var achromatic = Math.abs(s) < εS;
  if (achromatic || l === 0.0 || Math.abs(1 - l) < εL) {
    h = null;
    // Due to floating point imprecision near lightness of 1, we can end up
    // with really high around white, this is to provide consistency as
    // saturation can be really high for white due this imprecision.
    if (!achromatic) {
      s = 0.0;
    }
  } else {
    h = constrain(h * 360);
  }
  return [h, s, l];
}
var okhsl = new ColorSpace({
  id: "okhsl",
  name: "Okhsl",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 1],
      name: "Saturation"
    },
    l: {
      range: [0, 1],
      name: "Lightness"
    }
  },
  base: Oklab,
  gamutSpace: "self",
  // Convert Oklab to Okhsl
  fromBase: function fromBase(lab) {
    return oklabToOkhsl(lab, toSRGBLinear, RGBCoeff);
  },
  // Convert Okhsl to Oklab
  toBase: function toBase(hsl) {
    return okhslToOklab(hsl, toSRGBLinear, RGBCoeff);
  },
  formats: {
    color: {
      id: "--okhsl",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
var OKLrab = new ColorSpace({
  id: "oklrab",
  name: "Oklrab",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    a: {
      refRange: [-0.4, 0.4]
    },
    b: {
      refRange: [-0.4, 0.4]
    }
  },
  // Note that XYZ is relative to D65
  white: "D65",
  base: Oklab,
  fromBase: function fromBase(oklab) {
    return [toe(oklab[0]), oklab[1], oklab[2]];
  },
  toBase: function toBase(oklrab) {
    return [toeInv(oklrab[0]), oklrab[1], oklrab[2]];
  },
  formats: {
    color: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
var oklrch = new ColorSpace({
  id: "oklrch",
  name: "Oklrch",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    c: {
      refRange: [0, 0.4],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  white: "D65",
  base: OKLrab,
  fromBase: lch.fromBase,
  toBase: lch.toBase,
  formats: {
    color: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"]
    }
  }
});

// Okhsv class.
//
// ---- License ----
//
// Copyright (c) 2021 Björn Ottosson
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is furnished to do
// so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/** @import { Coords, Matrix3x3, OKCoeff, Vector3 } from "../types.js" */

/**
 *
 * @param {Vector3} hsv
 * @param {Matrix3x3} lmsToRgb
 * @param {OKCoeff} okCoeff
 * @returns {Coords}
 */
function okhsvToOklab(hsv, lmsToRgb, okCoeff) {
  // Convert from Okhsv to Oklab."""

  var _hsv3 = _slicedToArray(hsv, 3),
    h = _hsv3[0],
    s = _hsv3[1],
    v = _hsv3[2];
  h = constrain(h) / 360.0;
  var l = toeInv(v);
  var a = null;
  var b = null;

  // Avoid processing gray or colors with undefined hues
  if (l !== 0.0 && s !== 0.0) {
    var a_ = Math.cos(tau * h);
    var b_ = Math.sin(tau * h);
    var cusp = findCusp(a_, b_, lmsToRgb, okCoeff);
    var _toSt = toSt(cusp),
      _toSt2 = _slicedToArray(_toSt, 2),
      sMax = _toSt2[0],
      tMax = _toSt2[1];
    var s0 = 0.5;
    var k = 1 - s0 / sMax;

    // first we compute L and V as if the gamut is a perfect triangle:

    // L, C when v==1:
    var lv = 1 - s * s0 / (s0 + tMax - tMax * k * s);
    var cv = s * tMax * s0 / (s0 + tMax - tMax * k * s);
    l = v * lv;
    var _c3 = v * cv;

    // then we compensate for both toe and the curved top part of the triangle:
    var lvt = toeInv(lv);
    var cvt = cv * lvt / lv;
    var lNew = toeInv(l);
    _c3 = _c3 * lNew / l;
    l = lNew;

    // RGB scale
    var _oklabToLinearRGB = oklabToLinearRGB([lvt, a_ * cvt, b_ * cvt], lmsToRgb),
      _oklabToLinearRGB2 = _slicedToArray(_oklabToLinearRGB, 3),
      rs = _oklabToLinearRGB2[0],
      gs = _oklabToLinearRGB2[1],
      bs = _oklabToLinearRGB2[2];
    var scaleL = spow(1.0 / Math.max(Math.max(rs, gs), Math.max(bs, 0.0)), 1 / 3);
    l = l * scaleL;
    _c3 = _c3 * scaleL;
    a = _c3 * a_;
    b = _c3 * b_;
  }
  return [l, a, b];
}

/**
 *
 * @param {Vector3} lab
 * @param {Matrix3x3} lmsToRgb
 * @param {OKCoeff} okCoeff
 * @returns {Coords}
 */
function oklabToOkhsv(lab, lmsToRgb, okCoeff) {
  // Oklab to Okhsv.

  // Epsilon for saturation just needs to be sufficiently close when denoting achromatic
  var ε = 1e-4;
  var l = lab[0];
  var s = 0.0;
  var v = toe(l);
  var c = Math.sqrt(Math.pow(lab[1], 2) + Math.pow(lab[2], 2));
  var h = 0.5 + Math.atan2(-lab[2], -lab[1]) / tau;
  if (l !== 0.0 && l !== 1 && c !== 0.0) {
    var a_ = lab[1] / c;
    var b_ = lab[2] / c;
    var cusp = findCusp(a_, b_, lmsToRgb, okCoeff);
    var _toSt3 = toSt(cusp),
      _toSt4 = _slicedToArray(_toSt3, 2),
      sMax = _toSt4[0],
      tMax = _toSt4[1];
    var s0 = 0.5;
    var k = 1 - s0 / sMax;

    // first we find `L_v`, `C_v`, `L_vt` and `C_vt`
    var t = tMax / (c + l * tMax);
    var lv = t * l;
    var cv = t * c;
    var lvt = toeInv(lv);
    var cvt = cv * lvt / lv;

    // we can then use these to invert the step that compensates
    // for the toe and the curved top part of the triangle:
    var _oklabToLinearRGB3 = oklabToLinearRGB([lvt, a_ * cvt, b_ * cvt], lmsToRgb),
      _oklabToLinearRGB4 = _slicedToArray(_oklabToLinearRGB3, 3),
      rs = _oklabToLinearRGB4[0],
      gs = _oklabToLinearRGB4[1],
      bs = _oklabToLinearRGB4[2];
    var scaleL = spow(1.0 / Math.max(Math.max(rs, gs), Math.max(bs, 0.0)), 1 / 3);
    l = l / scaleL;
    c = c / scaleL;
    c = c * toe(l) / l;
    l = toe(l);

    // we can now compute v and s:
    v = l / lv;
    s = (s0 + tMax) * cv / (tMax * s0 + tMax * k * cv);
  }
  if (Math.abs(s) < ε || v === 0.0) {
    h = null;
  } else {
    h = constrain(h * 360);
  }
  return [h, s, v];
}
var okhsv = new ColorSpace({
  id: "okhsv",
  name: "Okhsv",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 1],
      name: "Saturation"
    },
    v: {
      range: [0, 1],
      name: "Value"
    }
  },
  base: Oklab,
  gamutSpace: "self",
  // Convert Oklab to Okhsl
  fromBase: function fromBase(lab) {
    return oklabToOkhsv(lab, toSRGBLinear, RGBCoeff);
  },
  // Convert Okhsl to Oklab
  toBase: function toBase(hsl) {
    return okhsvToOklab(hsl, toSRGBLinear, RGBCoeff);
  },
  formats: {
    color: {
      id: "--okhsv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
var white = WHITES.D65;
var ε$2 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var κ$1 = 24389 / 27; // 29^3/3^3
var _uv = uv({
    space: xyz_d65,
    coords: white
  }),
  _uv2 = _slicedToArray(_uv, 2),
  U_PRIME_WHITE = _uv2[0],
  V_PRIME_WHITE = _uv2[1];
var Luv = new ColorSpace({
  id: "luv",
  name: "Luv",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    // Reference ranges from https://facelessuser.github.io/coloraide/colors/luv/
    u: {
      refRange: [-215, 215]
    },
    v: {
      refRange: [-215, 215]
    }
  },
  white: white,
  base: xyz_d65,
  // Convert D65-adapted XYZ to Luv
  // https://en.wikipedia.org/wiki/CIELUV#The_forward_transformation
  fromBase: function fromBase(XYZ) {
    var xyz = /** @type {[number, number, number]} */[skipNone(XYZ[0]), skipNone(XYZ[1]), skipNone(XYZ[2])];
    var y = xyz[1];
    var _uv3 = uv({
        space: xyz_d65,
        coords: xyz
      }),
      _uv4 = _slicedToArray(_uv3, 2),
      up = _uv4[0],
      vp = _uv4[1];

    // Protect against XYZ of [0, 0, 0]
    if (!Number.isFinite(up) || !Number.isFinite(vp)) {
      return [0, 0, 0];
    }
    var L = y <= ε$2 ? κ$1 * y : 116 * Math.cbrt(y) - 16;
    return [L, 13 * L * (up - U_PRIME_WHITE), 13 * L * (vp - V_PRIME_WHITE)];
  },
  // Convert Luv to D65-adapted XYZ
  // https://en.wikipedia.org/wiki/CIELUV#The_reverse_transformation
  toBase: function toBase(Luv) {
    var _Luv = _slicedToArray(Luv, 3),
      L = _Luv[0],
      u = _Luv[1],
      v = _Luv[2];

    // Protect against division by zero and none Lightness
    if (L === 0 || isNone(L)) {
      return [0, 0, 0];
    }
    u = skipNone(u);
    v = skipNone(v);
    var up = u / (13 * L) + U_PRIME_WHITE;
    var vp = v / (13 * L) + V_PRIME_WHITE;
    var y = L <= 8 ? L / κ$1 : Math.pow((L + 16) / 116, 3);
    return [y * (9 * up / (4 * vp)), y, y * ((12 - 3 * up - 20 * vp) / (4 * vp))];
  },
  formats: {
    color: {
      id: "--luv",
      coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <percentage>"]
    }
  }
});
var LCHuv = new ColorSpace({
  id: "lchuv",
  name: "LChuv",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    c: {
      refRange: [0, 220],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Luv,
  fromBase: lch.fromBase,
  toBase: lch.toBase,
  formats: {
    color: {
      id: "--lchuv",
      coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
});

/*
Adapted from: https://github.com/hsluv/hsluv-javascript/blob/14b49e6cf9a9137916096b8487a5372626b57ba4/src/hsluv.ts

Copyright (c) 2012-2022 Alexei Boronine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var ε$1 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var κ = 24389 / 27; // 29^3/3^3

var m_r0 = fromXYZ_M$3[0][0];
var m_r1 = fromXYZ_M$3[0][1];
var m_r2 = fromXYZ_M$3[0][2];
var m_g0 = fromXYZ_M$3[1][0];
var m_g1 = fromXYZ_M$3[1][1];
var m_g2 = fromXYZ_M$3[1][2];
var m_b0 = fromXYZ_M$3[2][0];
var m_b1 = fromXYZ_M$3[2][1];
var m_b2 = fromXYZ_M$3[2][2];
function distanceFromOriginAngle(slope, intercept, angle) {
  var d = intercept / (Math.sin(angle) - slope * Math.cos(angle));
  return d < 0 ? Infinity : d;
}

/**
 * @param {number} l
 */
function calculateBoundingLines(l) {
  var sub1 = Math.pow(l + 16, 3) / 1560896;
  var sub2 = sub1 > ε$1 ? sub1 : l / κ;
  var s1r = sub2 * (284517 * m_r0 - 94839 * m_r2);
  var s2r = sub2 * (838422 * m_r2 + 769860 * m_r1 + 731718 * m_r0);
  var s3r = sub2 * (632260 * m_r2 - 126452 * m_r1);
  var s1g = sub2 * (284517 * m_g0 - 94839 * m_g2);
  var s2g = sub2 * (838422 * m_g2 + 769860 * m_g1 + 731718 * m_g0);
  var s3g = sub2 * (632260 * m_g2 - 126452 * m_g1);
  var s1b = sub2 * (284517 * m_b0 - 94839 * m_b2);
  var s2b = sub2 * (838422 * m_b2 + 769860 * m_b1 + 731718 * m_b0);
  var s3b = sub2 * (632260 * m_b2 - 126452 * m_b1);
  return {
    r0s: s1r / s3r,
    r0i: s2r * l / s3r,
    r1s: s1r / (s3r + 126452),
    r1i: (s2r - 769860) * l / (s3r + 126452),
    g0s: s1g / s3g,
    g0i: s2g * l / s3g,
    g1s: s1g / (s3g + 126452),
    g1i: (s2g - 769860) * l / (s3g + 126452),
    b0s: s1b / s3b,
    b0i: s2b * l / s3b,
    b1s: s1b / (s3b + 126452),
    b1i: (s2b - 769860) * l / (s3b + 126452)
  };
}
function calcMaxChromaHsluv(lines, h) {
  var hueRad = h / 360 * Math.PI * 2;
  var r0 = distanceFromOriginAngle(lines.r0s, lines.r0i, hueRad);
  var r1 = distanceFromOriginAngle(lines.r1s, lines.r1i, hueRad);
  var g0 = distanceFromOriginAngle(lines.g0s, lines.g0i, hueRad);
  var g1 = distanceFromOriginAngle(lines.g1s, lines.g1i, hueRad);
  var b0 = distanceFromOriginAngle(lines.b0s, lines.b0i, hueRad);
  var b1 = distanceFromOriginAngle(lines.b1s, lines.b1i, hueRad);
  return Math.min(r0, r1, g0, g1, b0, b1);
}
var hsluv = new ColorSpace({
  id: "hsluv",
  name: "HSLuv",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: LCHuv,
  gamutSpace: sRGB,
  // Convert LCHuv to HSLuv
  fromBase: function fromBase(lch) {
    var _ref26 = [skipNone(lch[0]), skipNone(lch[1]), skipNone(lch[2])],
      l = _ref26[0],
      c = _ref26[1],
      h = _ref26[2];
    var s;
    if (l > 99.9999999) {
      s = 0;
      l = 100;
    } else if (l < 0.00000001) {
      s = 0;
      l = 0;
    } else {
      var lines = calculateBoundingLines(l);
      var _max5 = calcMaxChromaHsluv(lines, h);
      s = c / _max5 * 100;
    }
    return [h, s, l];
  },
  // Convert HSLuv to LCHuv
  toBase: function toBase(hsl) {
    var _ref27 = [skipNone(hsl[0]), skipNone(hsl[1]), skipNone(hsl[2])],
      h = _ref27[0],
      s = _ref27[1],
      l = _ref27[2];
    var c;
    if (l > 99.9999999) {
      l = 100;
      c = 0;
    } else if (l < 0.00000001) {
      l = 0;
      c = 0;
    } else {
      var lines = calculateBoundingLines(l);
      var _max6 = calcMaxChromaHsluv(lines, h);
      c = _max6 / 100 * s;
    }
    return [l, c, h];
  },
  formats: {
    color: {
      id: "--hsluv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});

/*
Adapted from: https://github.com/hsluv/hsluv-javascript/blob/14b49e6cf9a9137916096b8487a5372626b57ba4/src/hsluv.ts

Copyright (c) 2012-2022 Alexei Boronine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

fromXYZ_M$3[0][0];
fromXYZ_M$3[0][1];
fromXYZ_M$3[0][2];
fromXYZ_M$3[1][0];
fromXYZ_M$3[1][1];
fromXYZ_M$3[1][2];
fromXYZ_M$3[2][0];
fromXYZ_M$3[2][1];
fromXYZ_M$3[2][2];
function distanceFromOrigin(slope, intercept) {
  return Math.abs(intercept) / Math.sqrt(Math.pow(slope, 2) + 1);
}
function calcMaxChromaHpluv(lines) {
  var r0 = distanceFromOrigin(lines.r0s, lines.r0i);
  var r1 = distanceFromOrigin(lines.r1s, lines.r1i);
  var g0 = distanceFromOrigin(lines.g0s, lines.g0i);
  var g1 = distanceFromOrigin(lines.g1s, lines.g1i);
  var b0 = distanceFromOrigin(lines.b0s, lines.b0i);
  var b1 = distanceFromOrigin(lines.b1s, lines.b1i);
  return Math.min(r0, r1, g0, g1, b0, b1);
}
var hpluv = new ColorSpace({
  id: "hpluv",
  name: "HPLuv",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: LCHuv,
  gamutSpace: "self",
  // Convert LCHuv to HPLuv
  fromBase: function fromBase(lch) {
    var _ref28 = [skipNone(lch[0]), skipNone(lch[1]), skipNone(lch[2])],
      l = _ref28[0],
      c = _ref28[1],
      h = _ref28[2];
    var s;
    if (l > 99.9999999) {
      s = 0;
      l = 100;
    } else if (l < 0.00000001) {
      s = 0;
      l = 0;
    } else {
      var lines = calculateBoundingLines(l);
      var _max7 = calcMaxChromaHpluv(lines);
      s = c / _max7 * 100;
    }
    return [h, s, l];
  },
  // Convert HPLuv to LCHuv
  toBase: function toBase(hsl) {
    var _ref29 = [skipNone(hsl[0]), skipNone(hsl[1]), skipNone(hsl[2])],
      h = _ref29[0],
      s = _ref29[1],
      l = _ref29[2];
    var c;
    if (l > 99.9999999) {
      l = 100;
      c = 0;
    } else if (l < 0.00000001) {
      l = 0;
      c = 0;
    } else {
      var lines = calculateBoundingLines(l);
      var _max8 = calcMaxChromaHpluv(lines);
      c = _max8 / 100 * s;
    }
    return [l, c, h];
  },
  formats: {
    color: {
      id: "--hpluv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
var REC_2100_Linear = new RGBColorSpace({
  id: "rec2100-linear",
  name: "Linear REC.2100",
  white: "D65",
  toBase: REC_2020_Linear.toBase,
  fromBase: REC_2020_Linear.fromBase
});
var Yw = 203; // absolute luminance of media white, cd/m²
var n = 2610 / Math.pow(2, 14);
var ninv = Math.pow(2, 14) / 2610;
var m = 2523 / Math.pow(2, 5);
var minv = Math.pow(2, 5) / 2523;
var c1 = 3424 / Math.pow(2, 12);
var c2 = 2413 / Math.pow(2, 7);
var c3 = 2392 / Math.pow(2, 7);
var rec2100Pq = new RGBColorSpace({
  id: "rec2100pq",
  cssId: "rec2100-pq",
  name: "REC.2100-PQ",
  base: REC_2100_Linear,
  toBase: function toBase(RGB) {
    // given PQ encoded component in range [0, 1]
    // return media-white relative linear-light
    return RGB.map(function (val) {
      var x = Math.pow(Math.max(Math.pow(val, minv) - c1, 0) / (c2 - c3 * Math.pow(val, minv)), ninv);
      return x * 10000 / Yw; // luminance relative to diffuse white, [0, 70 or so].
    });
  },
  fromBase: function fromBase(RGB) {
    // given media-white relative linear-light
    // returnPQ encoded component in range [0, 1]
    return RGB.map(function (val) {
      var x = Math.max(val * Yw / 10000, 0); // absolute luminance of peak white is 10,000 cd/m².
      var num = c1 + c2 * Math.pow(x, n);
      var denom = 1 + c3 * Math.pow(x, n);
      return Math.pow(num / denom, m);
    });
  }
});
var a = 0.17883277;
var b = 0.28466892; // 1 - (4 * a)
var c = 0.55991073; // 0.5 - a * Math.log(4 *a)

var scale = 3.7743; // Place 18% grey at HLG 0.38, so media white at 0.75

var rec2100Hlg = new RGBColorSpace({
  id: "rec2100hlg",
  cssId: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: REC_2100_Linear,
  toBase: function toBase(RGB) {
    // given HLG encoded component in range [0, 1]
    // return media-white relative linear-light
    return RGB.map(function (val) {
      // first the HLG EOTF
      // ITU-R BT.2390-10 p.30 section
      // 6.3 The hybrid log-gamma electro-optical transfer function (EOTF)
      // Then scale by 3 so media white is 1.0
      if (val <= 0.5) {
        return Math.pow(val, 2) / 3 * scale;
      }
      return (Math.exp((val - c) / a) + b) / 12 * scale;
    });
  },
  fromBase: function fromBase(RGB) {
    // given media-white relative linear-light
    // where diffuse white is 1.0,
    // return HLG encoded component in range [0, 1]
    return RGB.map(function (val) {
      // first scale to put linear-light media white at 1/3
      val /= scale;
      // now the HLG OETF
      // ITU-R BT.2390-10 p.23
      // 6.1 The hybrid log-gamma opto-electronic transfer function (OETF)
      if (val <= 1 / 12) {
        return spow(3 * val, 0.5);
      }
      return a * Math.log(12 * val - b) + c;
    });
  }
});

/** @import { White } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").CAT} CAT */

/** @type {Record<string, CAT>} */
var CATs = {};
hooks.add("chromatic-adaptation-start", function (env) {
  if (env.options.method) {
    env.M = adapt(env.W1, env.W2, env.options.method);
  }
});
hooks.add("chromatic-adaptation-end", function (env) {
  if (!env.M) {
    env.M = adapt(env.W1, env.W2, env.options.method);
  }
});
function defineCAT(/** @type {CAT} */_ref30) {
  var id = _ref30.id,
    toCone_M = _ref30.toCone_M,
    fromCone_M = _ref30.fromCone_M;
  // Use id, toCone_M, fromCone_M like variables
  CATs[id] = arguments[0];
}

/**
 *
 * @param {White} W1
 * @param {White} W2
 * @param {string} id
 * @returns {number[][]}
 */
function adapt(W1, W2) {
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Bradford";
  // adapt from a source whitepoint or illuminant W1
  // to a destination whitepoint or illuminant W2,
  // using the given chromatic adaptation transform (CAT)
  // debugger;
  var method = CATs[id];
  var _multiplyMatrices = multiplyMatrices(method.toCone_M, W1),
    _multiplyMatrices2 = _slicedToArray(_multiplyMatrices, 3),
    ρs = _multiplyMatrices2[0],
    γs = _multiplyMatrices2[1],
    βs = _multiplyMatrices2[2];
  var _multiplyMatrices3 = multiplyMatrices(method.toCone_M, W2),
    _multiplyMatrices4 = _slicedToArray(_multiplyMatrices3, 3),
    ρd = _multiplyMatrices4[0],
    γd = _multiplyMatrices4[1],
    βd = _multiplyMatrices4[2];

  // all practical illuminants have non-zero XYZ so no division by zero can occur below
  // prettier-ignore
  var scale = [[ρd / ρs, 0, 0], [0, γd / γs, 0], [0, 0, βd / βs]];
  // console.log({scale});

  var scaled_cone_M = multiplyMatrices(scale, method.toCone_M);
  var adapt_M = multiplyMatrices(method.fromCone_M, scaled_cone_M);
  // console.log({scaled_cone_M, adapt_M});
  return adapt_M;
}

// prettier-ignore
defineCAT({
  id: "von Kries",
  toCone_M: [[0.4002400, 0.7076000, -0.0808100], [-0.2263000, 1.1653200, 0.0457000], [0.0000000, 0.0000000, 0.9182200]],
  fromCone_M: [[1.8599363874558397, -1.1293816185800916, 0.21989740959619328], [0.3611914362417676, 0.6388124632850422, -0.000006370596838649899], [0, 0, 1.0890636230968613]]
});

// prettier-ignore
defineCAT({
  id: "Bradford",
  // Convert an array of XYZ values in the range 0.0 - 1.0
  // to cone fundamentals
  toCone_M: [[0.8951000, 0.2664000, -0.1614000], [-0.7502000, 1.7135000, 0.0367000], [0.0389000, -0.0685000, 1.0296000]],
  // and back
  fromCone_M: [[0.9869929054667121, -0.14705425642099013, 0.15996265166373122], [0.4323052697233945, 0.5183602715367774, 0.049291228212855594], [-0.00852866457517732, 0.04004282165408486, 0.96848669578755]]
});

// prettier-ignore
defineCAT({
  id: "CAT02",
  // with complete chromatic adaptation to W2, so D = 1.0
  toCone_M: [[0.7328000, 0.4296000, -0.1624000], [-0.7036000, 1.6975000, 0.0061000], [0.0030000, 0.0136000, 0.9834000]],
  fromCone_M: [[1.0961238208355142, -0.27886900021828726, 0.18274517938277307], [0.4543690419753592, 0.4735331543074117, 0.07209780371722911], [-0.009627608738429355, -0.00569803121611342, 1.0153256399545427]]
});

// prettier-ignore
defineCAT({
  id: "CAT16",
  toCone_M: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-0.002079, 0.048952, 0.953127]],
  // the extra precision is needed to avoid roundtripping errors
  fromCone_M: [[1.862067855087233, -1.0112546305316845, 0.14918677544445172], [0.3875265432361372, 0.6214474419314753, -0.008973985167612521], [-0.01584149884933386, -0.03412293802851557, 1.0499644368778496]]
});

// prettier-ignore
Object.assign(WHITES, {
  // whitepoint values from ASTM E308-01 with 10nm spacing, 1931 2 degree observer
  // all normalized to Y (luminance) = 1.00000
  // Illuminant A is a tungsten electric light, giving a very warm, orange light.
  A: [1.09850, 1.00000, 0.35585],
  // Illuminant C was an early approximation to daylight: illuminant A with a blue filter.
  C: [0.98074, 1.000000, 1.18232],
  // The daylight series of illuminants simulate natural daylight.
  // The color temperature (in degrees Kelvin/100) ranges from
  // cool, overcast daylight (D50) to bright, direct sunlight (D65).
  D55: [0.95682, 1.00000, 0.92149],
  D75: [0.94972, 1.00000, 1.22638],
  // Equal-energy illuminant, used in two-stage CAT16
  E: [1.00000, 1.00000, 1.00000],
  // The F series of illuminants represent fluorescent lights
  F2: [0.99186, 1.00000, 0.67393],
  F7: [0.95041, 1.00000, 1.08747],
  F11: [1.00962, 1.00000, 0.64350]
});

/** @import { Matrix3x3 } from "../types.js" */

// The ACES whitepoint
// see TB-2018-001 Derivation of the ACES White Point CIE Chromaticity Coordinates
// also https://github.com/ampas/aces-dev/blob/master/documents/python/TB-2018-001/aces_wp.py
// Similar to D60
WHITES.ACES = [0.32168 / 0.33767, 1.0, (1.0 - 0.32168 - 0.33767) / 0.33767];

// convert an array of linear-light ACEScc values to CIE XYZ
/** @type {Matrix3x3} */
// prettier-ignore
var toXYZ_M = [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]];
/** @type {Matrix3x3} */
// prettier-ignore
var fromXYZ_M = [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]];
var ACEScg = new RGBColorSpace({
  id: "acescg",
  cssId: "--acescg",
  name: "ACEScg",
  // ACEScg – A scene-referred, linear-light encoding of ACES Data
  // https://docs.acescentral.com/specifications/acescg/
  // uses the AP1 primaries, see section 4.3.1 Color primaries
  coords: {
    r: {
      range: [0, 65504],
      name: "Red"
    },
    g: {
      range: [0, 65504],
      name: "Green"
    },
    b: {
      range: [0, 65504],
      name: "Blue"
    }
  },
  referred: "scene",
  white: WHITES.ACES,
  toXYZ_M: toXYZ_M,
  fromXYZ_M: fromXYZ_M
});

// export default Color;

var ε = Math.pow(2, -16);

// the smallest value which, in the 32bit IEEE 754 float encoding,
// decodes as a non-negative value
var ACES_min_nonzero = -0.35828683;

// brightest encoded value, decodes to 65504
var ACES_cc_max = (Math.log2(65504) + 9.72) / 17.52; // 1.468

var acescc = new RGBColorSpace({
  id: "acescc",
  cssId: "--acescc",
  name: "ACEScc",
  // see S-2014-003 ACEScc – A Logarithmic Encoding of ACES Data
  // https://docs.acescentral.com/specifications/acescc/
  // uses the AP1 primaries, see section 4.3.1 Color primaries

  // Appendix A: "Very small ACES scene referred values below 7 1/4 stops
  // below 18% middle gray are encoded as negative ACEScc values.
  // These values should be preserved per the encoding in Section 4.4
  // so that all positive ACES values are maintained."
  coords: {
    r: {
      range: [ACES_min_nonzero, ACES_cc_max],
      name: "Red"
    },
    g: {
      range: [ACES_min_nonzero, ACES_cc_max],
      name: "Green"
    },
    b: {
      range: [ACES_min_nonzero, ACES_cc_max],
      name: "Blue"
    }
  },
  referred: "scene",
  base: ACEScg,
  // from section 4.4.2 Decoding Function
  toBase: function toBase(RGB) {
    var low = (9.72 - 15) / 17.52; // -0.3014

    return RGB.map(function (val) {
      if (val <= low) {
        return (Math.pow(2, val * 17.52 - 9.72) - ε) * 2; // very low values, below -0.3014
      } else if (val < ACES_cc_max) {
        return Math.pow(2, val * 17.52 - 9.72);
      } else {
        // val >= ACES_cc_max
        return 65504;
      }
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase: function fromBase(RGB) {
    return RGB.map(function (val) {
      if (val <= 0) {
        return (Math.log2(ε) + 9.72) / 17.52; // -0.3584
      } else if (val < ε) {
        return (Math.log2(ε + val * 0.5) + 9.72) / 17.52;
      } else {
        // val >= ε
        return (Math.log2(val) + 9.72) / 17.52;
      }
    });
  } // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
});

/**
 * @packageDocumentation
 * Re-exports all the spaces built into Color.js.
 */

var spaces = /*#__PURE__*/Object.freeze({
  __proto__: null,
  A98RGB: a98rgb,
  A98RGB_Linear: A98Linear,
  ACEScc: acescc,
  ACEScg: ACEScg,
  CAM16_JMh: cam16,
  HCT: hct,
  HPLuv: hpluv,
  HSL: hsl,
  HSLuv: hsluv,
  HSV: HSV,
  HWB: hwb,
  ICTCP: ictcp,
  JzCzHz: jzczhz,
  Jzazbz: Jzazbz,
  LCH: lch,
  LCHuv: LCHuv,
  Lab: lab,
  Lab_D65: lab_d65,
  Luv: Luv,
  OKLCH: oklch,
  OKLab: Oklab,
  OKLrCH: oklrch,
  OKLrab: OKLrab,
  Okhsl: okhsl,
  Okhsv: okhsv,
  P3: P3,
  P3_Linear: P3Linear,
  ProPhoto: prophoto,
  ProPhoto_Linear: ProPhotoLinear,
  REC_2020: REC2020,
  REC_2020_Linear: REC_2020_Linear,
  REC_2020_Scene_Referred: rec2020Oetf,
  REC_2100_HLG: rec2100Hlg,
  REC_2100_Linear: REC_2100_Linear,
  REC_2100_PQ: rec2100Pq,
  XYZ_ABS_D65: XYZ_Abs_D65,
  XYZ_D50: XYZ_D50,
  XYZ_D65: xyz_d65,
  sRGB: sRGB,
  sRGB_Linear: sRGBLinear
});

/**
 * @packageDocumentation
 * @class Color
 * Class that represents a single color.
 * All of Color.js’s tree-shakeable methods are also available as instance methods on this class,
 * as well as static methods that take the color as the first argument.
 */
var Color = /*#__PURE__*/function () {
  /**
   * Creates an instance of Color.
   * Signatures:
   * - `new Color(stringToParse)`
   * - `new Color(otherColor)`
   * - `new Color({space, coords, alpha})`
   * - `new Color(space, coords, alpha)`
   * - `new Color(spaceId, coords, alpha)`
   */
  function Color() {
    var _this5 = this;
    _classCallCheck(this, Color);
    var color;
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (args.length === 1) {
      var parseMeta = {};
      // Clone simple objects to avoid mutating original in getColor
      if (_typeof(args[0]) === "object" && Object.getPrototypeOf(args[0]).constructor === Object) {
        args[0] = _objectSpread({}, args[0]);
      }
      color = getColor(args[0], {
        parseMeta: parseMeta
      });
      if (parseMeta.format) {
        // Color actually came from a string
        this.parseMeta = parseMeta;
      }
    }
    var space, coords, alpha;
    if (color) {
      space = color.space || color.spaceId;
      coords = color.coords;
      alpha = color.alpha;
    } else {
      // default signature new Color(ColorSpace, array [, alpha])
      space = args[0];
      coords = args[1];
      alpha = args[2];
    }
    Object.defineProperty(this, "space", {
      value: ColorSpace.get(space),
      writable: false,
      enumerable: true,
      configurable: true // see note in https://262.ecma-international.org/8.0/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver
    });
    this.coords = coords ? coords.slice() : [0, 0, 0];

    // Clamp alpha to [0, 1]
    this.alpha = isNone(alpha) ? alpha : alpha === undefined ? 1 : clamp(0, alpha, 1);

    // Define getters and setters for each coordinate
    var _loop2 = function _loop2(id) {
      Object.defineProperty(_this5, id, {
        get: function get() {
          return _this5.get(id);
        },
        set: function set(value) {
          return _this5.set(id, value);
        }
      });
    };
    for (var id in this.space.coords) {
      _loop2(id);
    }
  }
  return _createClass(Color, [{
    key: "spaceId",
    get: function get() {
      return this.space.id;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Color(this.space, this.coords, this.alpha);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        spaceId: this.spaceId,
        coords: this.coords,
        alpha: this.alpha
      };
    }
  }, {
    key: "display",
    value: function display() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var ret = _display.apply(void 0, [this].concat(args));

      // Convert color object to Color instance
      ret.color = new Color(ret.color);
      return ret;
    }

    /**
     * Get a color from the argument(s) passed
     * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
     */
  }], [{
    key: "get",
    value: function get(color) {
      if (isInstance(color, this)) {
        return color;
      }
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      return _construct(Color, [color].concat(args));
    }

    /**
     * Get a color instance from the argument passed or `null` if resolution fails (instead of throwing an error).
     * Additionally, it supports passing an element to resolve complex CSS colors through the DOM (slow).
     * @see {@link tryColor} for more details
     */
  }, {
    key: "try",
    value: function _try(color, options) {
      if (isInstance(color, this)) {
        return color;
      }
      var ret = tryColor(color, options);
      if (ret) {
        return new Color(ret);
      }
      return null;
    }
  }, {
    key: "defineFunction",
    value: function defineFunction(name, code) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : code;
      var _o$instance = o.instance,
        instance = _o$instance === void 0 ? true : _o$instance,
        returns = o.returns;
      var func = function func() {
        var ret = code.apply(void 0, arguments);
        if (returns === "color") {
          ret = Color.get(ret);
        } else if (returns === "function<color>") {
          var f = ret;
          ret = function ret() {
            var ret = f.apply(void 0, arguments);
            return Color.get(ret);
          };
          // Copy any function metadata
          Object.assign(ret, f);
        } else if (returns === "array<color>") {
          ret = ret.map(function (c) {
            return Color.get(c);
          });
        }
        return ret;
      };
      if (!(name in Color)) {
        Color[name] = func;
      }
      if (instance) {
        Color.prototype[name] = function () {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          return func.apply(void 0, [this].concat(args));
        };
      }
    }
  }, {
    key: "defineFunctions",
    value: function defineFunctions(o) {
      for (var name in o) {
        Color.defineFunction(name, o[name], o[name]);
      }
    }
  }, {
    key: "extend",
    value: function extend(exports) {
      if (exports.register) {
        exports.register(Color);
      } else {
        // No register method, just add the module's functions
        for (var name in exports) {
          Color.defineFunction(name, exports[name]);
        }
      }
    }
  }]);
}();
Color.defineFunctions({
  get: get,
  getAll: getAll,
  set: set,
  setAll: setAll,
  to: to,
  equals: equals,
  inGamut: inGamut,
  toGamut: toGamut,
  distance: distance,
  deltas: deltas,
  toString: serialize
});
Object.assign(Color, {
  util: util,
  hooks: hooks,
  WHITES: WHITES,
  Space: ColorSpace,
  spaces: ColorSpace.registry,
  parse: parse,
  // Global defaults one may want to configure
  defaults: defaults
});

/**
 * @packageDocumentation
 * This module contains {@link spaces a namespace} with all the spaces built into Color.js.
 */

for (var _i5 = 0, _Object$keys = Object.keys(spaces); _i5 < _Object$keys.length; _i5++) {
  var key = _Object$keys[_i5];
  ColorSpace.register(spaces[key]);
}

/**
 * This plugin defines getters and setters for color[spaceId]
 * e.g. color.lch on *any* color gives us the lch coords
 */

// Add space accessors to existing color spaces
for (var id in ColorSpace.registry) {
  addSpaceAccessors(id, ColorSpace.registry[id]);
}

// Add space accessors to color spaces not yet created
hooks.add("colorspace-init-end", function (space) {
  var _space$aliases;
  addSpaceAccessors(space.id, space);
  (_space$aliases = space.aliases) === null || _space$aliases === void 0 || _space$aliases.forEach(function (alias) {
    addSpaceAccessors(alias, space);
  });
});
function addSpaceAccessors(id, space) {
  var propId = id.replace(/-/g, "_");
  Object.defineProperty(Color.prototype, propId, {
    // Convert coords to coords in another colorspace and return them
    // Source colorspace: this.spaceId
    // Target colorspace: id
    get: function get() {
      var _this6 = this;
      var ret = this.getAll(id);
      if (typeof Proxy === "undefined") {
        // If proxies are not supported, just return a static array
        return ret;
      }

      // Enable color.spaceId.coordName syntax
      var proxy = new Proxy(ret, {
        has: /** @param {string} property */function has(obj, property) {
          try {
            ColorSpace.resolveCoord([space, property]);
            return true;
          } catch (e) {}
          return Reflect.has(obj, property);
        },
        get: function get(obj, property, receiver) {
          if (property && _typeof(property) !== "symbol" && !(property in obj) && property in proxy) {
            var _ColorSpace$resolveCo3 = ColorSpace.resolveCoord([space, property]),
              index = _ColorSpace$resolveCo3.index;
            if (index >= 0) {
              return obj[index];
            }
          }
          return Reflect.get(obj, property, receiver);
        },
        set: function set(obj, property, value, receiver) {
          if (property && _typeof(property) !== "symbol" && !(property in obj) || Number(property) >= 0) {
            var _ColorSpace$resolveCo4 = ColorSpace.resolveCoord([space, (/** @type {string} */property)]),
              index = _ColorSpace$resolveCo4.index;
            if (index >= 0) {
              obj[index] = value;

              // Update color.coords
              _this6.setAll(id, obj);
              return true;
            }
          }
          return Reflect.set(obj, property, value, receiver);
        }
      });
      return proxy;
    },
    // Convert coords in another colorspace to internal coords and set them
    // Target colorspace: this.spaceId
    // Source colorspace: id
    set: function set(coords) {
      this.setAll(id, coords);
    },
    configurable: true,
    enumerable: true
  });
}

/**
 * Entry point for the OOP flavor of the API
 * Import as `colorjs.io`
 */

Color.extend(deltaEMethods);
Color.extend({
  deltaE: deltaE
});
Object.assign(Color, {
  deltaEMethods: deltaEMethods
});
Color.extend(variations);
Color.extend({
  contrast: contrast
});
Color.extend(chromaticity);
Color.extend(luminance);
Color.extend(interpolation);
Color.extend(contrastMethods);


/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPossiblePrototype = __webpack_require__(/*! ../internals/is-possible-prototype */ "./node_modules/core-js/internals/is-possible-prototype.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-non-extensible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
// eslint-disable-next-line es/no-array-prototype-fill -- fallback included
module.exports = [].fill || function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var setArrayLength = __webpack_require__(/*! ../internals/array-set-length */ "./node_modules/core-js/internals/array-set-length.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator-internal */ "./node_modules/core-js/internals/get-iterator-internal.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method-internal */ "./node_modules/core-js/internals/get-iterator-method-internal.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var O = toObject(arrayLike);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call(next, iterator)).done; index++) {
      try {
        doesNotExceedSafeInteger(index);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      try {
        createProperty(result, index, value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  setArrayLength(result, index);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var resIndex = 0;
    var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) createProperty(target, index, result);    // map
        else if (result) switch (TYPE) {
          case 3: return true;                                // some
          case 5: return value;                               // find
          case 6: return index;                               // findIndex
          case 2: createProperty(target, resIndex++, value);  // filter
        } else switch (TYPE) {
          case 4: return false;                               // every
          case 7: createProperty(target, resIndex++, value);  // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-set-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/array-set-length.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fastKey = (__webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: null,
        last: null,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: null,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = null;
          entry = entry.next;
        }
        state.first = state.last = null;
        state.index = create(null);
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first === entry) state.first = next;
          if (state.last === entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: null
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = null;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind === 'keys') return createIterResultObject(entry.key, false);
      if (kind === 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-weak.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/collection-weak.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var getWeakData = (__webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").getWeakData);
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var ArrayIterationModule = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (state) {
  return state.frozen || (state.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: null
      });
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          if (data) return data[state.id];
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = globalThis[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iter-result-object.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iter-result-object.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in-accessor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in-accessor.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/core-js/internals/make-built-in.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-ins.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-ins.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-global-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/define-global-property.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw new $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/environment-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/environment-user-agent.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ "./node_modules/core-js/internals/environment-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/environment-v8-version.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/core-js/internals/environment-user-agent.js");

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () { /* empty */ }.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() { /* empty */ }.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-accessor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-accessor.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-clause.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-internal.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-internal.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method-internal */ "./node_modules/core-js/internals/get-iterator-method-internal.js");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method-internal.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method-internal.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || (classof(it) === 'Arguments' ? ArrayPrototype[ITERATOR] : undefined);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/global-this.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/global-this.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "./node_modules/core-js/internals/object-is-extensible.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "./node_modules/core-js/internals/weak-map-basic-detection.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-null-or-undefined.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-null-or-undefined.js ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-possible-prototype.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-possible-prototype.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-raw-json.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-raw-json.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var getInternalState = (__webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").get);

module.exports = function isRawJSON(O) {
  if (!isObject(O)) return false;
  var state = getInternalState(O);
  return !!state && state.type === 'RawJSON';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator-internal */ "./node_modules/core-js/internals/get-iterator-internal.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method-internal */ "./node_modules/core-js/internals/get-iterator-method-internal.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    var $iterator = iterator;
    iterator = undefined;
    if ($iterator) iteratorClose($iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    // `IteratorValue` errors should propagate without closing the iterator
    var value = step.value;
    try {
      result = callFn(value);
    } catch (error) {
      if (iterator) iteratorClose(iterator, 'throw', error);
      else throw error;
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-create-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-create-constructor.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-define.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-define.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ "./node_modules/core-js/internals/iterator-create-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";

module.exports = Object.create ? Object.create(null) : {};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/make-built-in.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/make-built-in.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "./node_modules/core-js/internals/math-log2.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/math-log2.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";

var log = Math.log;
var LN2 = Math.LN2;

// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
// eslint-disable-next-line es/no-math-log2 -- safe
module.exports = Math.log2 || function log2(x) {
  return log(x) / LN2;
};


/***/ }),

/***/ "./node_modules/core-js/internals/math-sign.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/math-sign.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
module.exports = Math.sign || function sign(x) {
  var n = +x;
  // eslint-disable-next-line no-self-compare -- NaN check
  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/internals/math-trunc.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-trunc.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-raw-json.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-raw-json.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-json -- safe */
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  var unsafeInt = '9007199254740993';
  // eslint-disable-next-line es/no-json-rawjson -- feature detection
  var raw = JSON.rawJSON(unsafeInt);
  // eslint-disable-next-line es/no-json-israwjson -- feature detection
  return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
});


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-extensible.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-extensible.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ "./node_modules/core-js/internals/array-buffer-non-extensible.js");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ "./node_modules/core-js/internals/function-uncurry-this-accessor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var objectGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $propertyIsEnumerable = (__webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/parse-json-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/parse-json-string.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var $SyntaxError = SyntaxError;
var $parseInt = parseInt;
var fromCharCode = String.fromCharCode;
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);

var codePoints = {
  '\\"': '"',
  '\\\\': '\\',
  '\\/': '/',
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t'
};

var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
// eslint-disable-next-line regexp/no-control-character -- safe
var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

module.exports = function (source, i) {
  var unterminated = true;
  var value = '';
  while (i < source.length) {
    var chr = at(source, i);
    if (chr === '\\') {
      var twoChars = slice(source, i, i + 2);
      if (hasOwn(codePoints, twoChars)) {
        value += codePoints[twoChars];
        i += 2;
      } else if (twoChars === '\\u') {
        i += 2;
        var fourHexDigits = slice(source, i, i + 4);
        if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
        value += fromCharCode($parseInt(fourHexDigits, 16));
        i += 4;
      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
    } else if (chr === '"') {
      unterminated = false;
      i++;
      break;
    } else {
      if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
      value += chr;
      i++;
    }
  }
  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
  return { value: value, end: i };
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

module.exports = globalThis;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags-detection.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags-detection.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = globalThis.RegExp;

var FLAGS_GETTER_IS_CORRECT = !fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

module.exports = { correct: FLAGS_GETTER_IS_CORRECT };


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.51.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
// eslint-disable-next-line es/no-object-create -- safe
var create = Object.create || Object;

module.exports = function (key, value) {
  return store[key] || (store[key] = value || create(null));
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-pad-webkit-bug.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/string-pad-webkit-bug.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/core-js/internals/environment-user-agent.js");

module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/string-pad.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/string-pad.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var $repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    if (intMaxLength <= stringLength) return S;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (fillStr === '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $RangeError = RangeError;
var floor = Math.floor;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n = floor(n / 2)) && (str += str)) if (n % 2) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/symbol-constructor-detection.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/core-js/internals/environment-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/symbol-define-to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-define-to-primitive.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/symbol-registry-detection.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-registry-detection.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.1.valueOf);


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "./node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "./node_modules/core-js/internals/weak-map-basic-detection.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-define.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-define.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "./node_modules/core-js/modules/es.global-this.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.global-this.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true, forced: globalThis.globalThis !== globalThis }, {
  globalThis: globalThis
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var isRawJSON = __webpack_require__(/*! ../internals/is-raw-json */ "./node_modules/core-js/internals/is-raw-json.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var includes = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes);
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var parseJSONString = __webpack_require__(/*! ../internals/parse-json-string */ "./node_modules/core-js/internals/parse-json-string.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");
var NATIVE_RAW_JSON = __webpack_require__(/*! ../internals/native-raw-json */ "./node_modules/core-js/internals/native-raw-json.js");

var $String = String;
var $TypeError = TypeError;
var $stringify = getBuiltIn('JSON', 'stringify');
var $BigInt = getBuiltIn('BigInt');
var stringValueOf = uncurryThis(''.valueOf);
var booleanValueOf = uncurryThis(true.valueOf);
var bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf);
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var slice = uncurryThis(''.slice);
var push = uncurryThis([].push);
var pop = uncurryThis([].pop);
var numberToString = uncurryThis(1.1.toString);

var surrogates = /[\uD800-\uDFFF]/g;
var leadingSurrogates = /^[\uD800-\uDBFF]$/;
var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
var digits = /^\d+$/;

// a placeholder of a raw JSON value
var RAW_MARK = uid();
// a prefix of keys of a reordered object, see `createOrderedObject`
var KEY_MARK = uid();
// the last key of a reordered object, marks the end of its serialization
var END_MARK = uid();
var RAW_MARK_LENGTH = RAW_MARK.length;
var KEY_MARK_LENGTH = KEY_MARK.length;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn('JSON', 'isRawJSON') : isRawJSON;

var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer, space) {
  return $stringify(it, function (key, value) {
    var replaced = call(replacer, this, key, value);
    if (!isSymbol(replaced)) return replaced;
  }, space);
} : $stringify;

var fixIllFormedJSON = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if (
    (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next)) ||
    (exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev))
  ) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

// `PropertyList` of `JSON.stringify`
// https://tc39.es/ecma262/#sec-json.stringify
var getPropertyList = function (replacer) {
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var propertyList = [];
  // a null prototype object is used as a set of already added keys to keep the deduplication linear
  var addedKeys = create(null);
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    var key;
    if (typeof element == 'string') key = element;
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') key = toString(element);
    else continue;
    if (!hasOwn(addedKeys, key)) {
      addedKeys[key] = true;
      push(propertyList, key);
    }
  }
  return propertyList;
};

// values with such an internal slot are unwrapped by `SerializeJSONProperty` instead of being serialized as objects
var hasInternalSlot = function (valueOf, it) {
  try {
    valueOf(it);
    return true;
  } catch (error) {
    return false;
  }
};

// the slot check is expensive, so it's performed only for the kind reported by the value itself -
// a value lying about its kind via `Symbol.toStringTag` is serialized as an ordinary object
var isBoxedPrimitive = function (it) {
  var kind = classof(it);
  return (kind === 'Number' && hasInternalSlot(thisNumberValue, it))
    || (kind === 'String' && hasInternalSlot(stringValueOf, it))
    || (kind === 'Boolean' && hasInternalSlot(booleanValueOf, it))
    || (!!bigIntValueOf && kind === 'BigInt' && hasInternalSlot(bigIntValueOf, it));
};

// only objects serialized by `SerializeJSONObject` are affected by the property list
var isSerializedAsObject = function (it) {
  if (!isObject(it) || isCallable(it) || isArray(it)) return false;
  try {
    return !isBoxedPrimitive(it);
  // `classof` reads `Symbol.toStringTag`, so a proxy could throw - it has no internal slots anyway
  } catch (error) {
    return true;
  }
};

// the engine unwraps it in the same order as it would read the original property,
// so the property is read lazily and `toJSON` is called once and with the original key
var createElementHolder = function (holder, key) {
  return {
    toJSON: function () {
      var element = holder[key];
      if (isObject(element) || typeof element == 'bigint') {
        var elementToJSON = element.toJSON;
        if (isCallable(elementToJSON)) element = call(elementToJSON, element, key);
      } return element;
    }
  };
};

// own keys of objects are sorted - integer-like keys are moved to the beginning,
// so such keys should be marked and restored in the serialized string
var getKeyPrefix = function (propertyList) {
  for (var i = 0, length = propertyList.length; i < length; i++) {
    if (exec(digits, propertyList[i])) return KEY_MARK;
  } return '';
};

// `SerializeJSONObject` iterates the property list, so the value is replaced with an object with keys in this order
var createOrderedObject = function (value, propertyList, keyPrefix) {
  // keys are not marked if the property list has no integer-like keys, so `Object.prototype`
  // with a setter, a non-writable property or `__proto__` should not intercept the assignment
  var ordered = create(null);
  for (var i = 0, length = propertyList.length; i < length; i++) {
    var key = propertyList[i];
    ordered[keyPrefix + key] = createElementHolder(value, key);
  }
  ordered[END_MARK] = null;
  return ordered;
};

// `JSON.stringify` method
// https://tc39.es/ecma262/#sec-json.stringify
// https://github.com/tc39/proposal-json-parse-with-source
if ($stringify) $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
  stringify: function stringify(text, replacer, space) {
    var replacerFunction = isCallable(replacer) ? replacer : undefined;
    var propertyList = replacerFunction ? undefined : getPropertyList(replacer);
    var keyPrefix = propertyList && getKeyPrefix(propertyList);
    var rawStrings = [];
    var openObjects = [];
    var parentOrdered = [];
    var currentOrdered;
    var marked = false;
    var root = true;

    var json = stringifyWithProperSymbolsConversion(text, function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      key = $String(key);

      if (propertyList) {
        if (key === END_MARK) {
          pop(openObjects);
          currentOrdered = pop(parentOrdered);
          return;
        }
        if (root) root = false;
        // the innermost reordered object already contains only keys of the property list and arrays are not
        // affected by it, the rest of objects (like objects with a fake `Symbol.toStringTag`) are filtered here
        else if (this !== currentOrdered && !isArray(this) && !includes(propertyList, key)) return;
      } else if (replacerFunction) value = call(replacerFunction, this, key, value);

      if (isRawJSONValue(value)) {
        if (NATIVE_RAW_JSON) return value;
        marked = true;
        return RAW_MARK + (push(rawStrings, value.rawJSON) - 1);
      }

      if (propertyList && isSerializedAsObject(value)) {
        // reordered objects are new each time, so cycles should be detected before the engine does it
        if (includes(openObjects, value)) throw new $TypeError('Converting circular structure to JSON');
        var ordered = createOrderedObject(value, propertyList, keyPrefix);
        push(openObjects, value);
        push(parentOrdered, currentOrdered);
        currentOrdered = ordered;
        if (keyPrefix) marked = true;
        return ordered;
      }

      return value;
    }, space);

    if (typeof json != 'string') return json;

    if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);

    if (!marked) return json;

    var result = '';
    var length = json.length;

    for (var i = 0; i < length; i++) {
      var chr = charAt(json, i);
      if (chr === '"') {
        var end = parseJSONString(json, ++i).end - 1;
        var string = slice(json, i, end);
        if (slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice(string, RAW_MARK_LENGTH)];
        else if (slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice(string, KEY_MARK_LENGTH) + '"';
        else result += '"' + string + '"';
        i = end;
      } else result += chr;
    }

    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.cbrt.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.cbrt.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var sign = __webpack_require__(/*! ../internals/math-sign */ "./node_modules/core-js/internals/math-sign.js");

// eslint-disable-next-line es/no-math-cbrt -- required for testing
var $cbrt = Math.cbrt;
var abs = Math.abs;
var pow = Math.pow;

// imprecise in FF < 48 (`cbrt(64)`) and with glibc `cbrt` (`cbrt(27)`), each check catches only one of them
var FORCED = !$cbrt || $cbrt(27) !== 3 || $cbrt(64) !== 4;

// `Math.cbrt` method
// https://tc39.es/ecma262/#sec-math.cbrt
$({ target: 'Math', stat: true, forced: FORCED }, {
  cbrt: function cbrt(x) {
    var n = +x;
    var y = sign(n) * pow(abs(n), 1 / 3);
    // Newton-Raphson refinement for better precision
    return n !== 0 && isFinite(n) ? (2 * y + n / (y * y)) / 3 : y;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.log2.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.log2.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var log2 = __webpack_require__(/*! ../internals/math-log2 */ "./node_modules/core-js/internals/math-log2.js");

// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
$({ target: 'Math', stat: true }, {
  log2: log2
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.sign.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.sign.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var sign = __webpack_require__(/*! ../internals/math-sign */ "./node_modules/core-js/internals/math-sign.js");

// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
$({ target: 'Math', stat: true }, {
  sign: sign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $entries = (__webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").entries);

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-symbols.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = (__webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values);

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.flags.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.flags.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var regExpFlagsDetection = __webpack_require__(/*! ../internals/regexp-flags-detection */ "./node_modules/core-js/internals/regexp-flags-detection.js");
var regExpFlagsGetterImplementation = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (DESCRIPTORS && !regExpFlagsDetection.correct) {
  defineBuiltInAccessor(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlagsGetterImplementation
  });

  regExpFlagsDetection.correct = true;
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.constructor.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.constructor.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(/*! ../modules/es.set.constructor */ "./node_modules/core-js/modules/es.set.constructor.js");


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt);
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.pad-start.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.pad-start.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $padStart = (__webpack_require__(/*! ../internals/string-pad */ "./node_modules/core-js/internals/string-pad.js").start);
var WEBKIT_BUG = __webpack_require__(/*! ../internals/string-pad-webkit-bug */ "./node_modules/core-js/internals/string-pad-webkit-bug.js");

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var search = toString(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    return stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.constructor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "./node_modules/core-js/internals/well-known-symbol-define.js");
var defineSymbolToPrimitive = __webpack_require__(/*! ../internals/symbol-define-to-primitive */ "./node_modules/core-js/internals/symbol-define-to-primitive.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = globalThis.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError = globalThis.RangeError;
var TypeError = globalThis.TypeError;
var QObject = globalThis.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var fallbackDefineProperty = function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  } return O;
};

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    // first definition - default non-enumerable; redefinition - preserve existing state
    if (!('enumerable' in Attributes) ? !hasOwn(O, key) || (hasOwn(O, HIDDEN) && O[HIDDEN][key]) : !Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      var $this = this === undefined ? globalThis : this;
      if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://tc39.es/ecma262/#sec-symbol.prototype.description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.for.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.for.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(/*! ../internals/symbol-registry-detection */ "./node_modules/core-js/internals/symbol-registry-detection.js");

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/es.symbol.constructor */ "./node_modules/core-js/modules/es.symbol.constructor.js");
__webpack_require__(/*! ../modules/es.symbol.for */ "./node_modules/core-js/modules/es.symbol.for.js");
__webpack_require__(/*! ../modules/es.symbol.key-for */ "./node_modules/core-js/modules/es.symbol.key-for.js");
__webpack_require__(/*! ../modules/es.json.stringify */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! ../modules/es.object.get-own-property-symbols */ "./node_modules/core-js/modules/es.object.get-own-property-symbols.js");


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.key-for.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.key-for.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(/*! ../internals/symbol-registry-detection */ "./node_modules/core-js/internals/symbol-registry-detection.js");

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.weak-map.constructor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.weak-map.constructor.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ "./node_modules/core-js/internals/collection-weak.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").enforce);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "./node_modules/core-js/internals/weak-map-basic-detection.js");

var $Object = Object;
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = $Object.isExtensible;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = $Object.isFrozen;
// eslint-disable-next-line es/no-object-issealed -- safe
var isSealed = $Object.isSealed;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = $Object.freeze;
// eslint-disable-next-line es/no-object-seal -- safe
var seal = $Object.seal;

var IS_IE11 = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
var WeakMapPrototype = $WeakMap.prototype;
var nativeSet = uncurryThis(WeakMapPrototype.set);

// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
var hasMSEdgeFreezingBug = function () {
  return FREEZING && fails(function () {
    var frozenArray = freeze([]);
    nativeSet(new $WeakMap(), frozenArray, 1);
    return !isFrozen(frozenArray);
  });
};

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP) if (IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  defineBuiltIns(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
// Chakra Edge frozen keys fix
} else if (hasMSEdgeFreezingBug()) {
  defineBuiltIns(WeakMapPrototype, {
    set: function set(key, value) {
      var arrayIntegrityLevel;
      if (isArray(key)) {
        if (isFrozen(key)) arrayIntegrityLevel = freeze;
        else if (isSealed(key)) arrayIntegrityLevel = seal;
      }
      nativeSet(this, key, value);
      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
      return this;
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.weak-map.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.weak-map.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(/*! ../modules/es.weak-map.constructor */ "./node_modules/core-js/modules/es.weak-map.constructor.js");


/***/ }),

/***/ "./node_modules/define-data-property/index.js":
/*!****************************************************!*\
  !*** ./node_modules/define-data-property/index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");
var $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "./node_modules/es-errors/syntax.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");
var gopd = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

/** @type {import('.')} */
module.exports = function defineDataProperty(obj, property, value) {
  if (!obj || _typeof(obj) !== 'object' && typeof obj !== 'function') {
    throw new $TypeError('`obj` must be an object or a function`');
  }
  if (typeof property !== 'string' && _typeof(property) !== 'symbol') {
    throw new $TypeError('`property` must be a string or a symbol`');
  }
  if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
    throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
  }
  if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
    throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
  }
  if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
    throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
  }
  if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
    throw new $TypeError('`loose`, if provided, must be a boolean');
  }
  var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
  var nonWritable = arguments.length > 4 ? arguments[4] : null;
  var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
  var loose = arguments.length > 6 ? arguments[6] : false;

  /* @type {false | TypedPropertyDescriptor<unknown>} */
  var desc = !!gopd && gopd(obj, property);
  if ($defineProperty) {
    $defineProperty(obj, property, {
      configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
      enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
      value: value,
      writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
  } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
    // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
    obj[property] = value; // eslint-disable-line no-param-reassign
  } else {
    throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
  }
};

/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && _typeof(Symbol('foo')) === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = __webpack_require__(/*! define-data-property */ "./node_modules/define-data-property/index.js");
var isFunction = function isFunction(fn) {
  return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};
var supportsDescriptors = __webpack_require__(/*! has-property-descriptors */ "./node_modules/has-property-descriptors/index.js")();
var defineProperty = function defineProperty(object, name, value, predicate) {
  if (name in object) {
    if (predicate === true) {
      if (object[name] === value) {
        return;
      }
    } else if (!isFunction(predicate) || !predicate()) {
      return;
    }
  }
  if (supportsDescriptors) {
    defineDataProperty(object, name, value, true);
  } else {
    defineDataProperty(object, name, value);
  }
};
var defineProperties = function defineProperties(object, map) {
  var predicates = arguments.length > 2 ? arguments[2] : {};
  var props = keys(map);
  if (hasSymbols) {
    props = concat.call(props, Object.getOwnPropertySymbols(map));
  }
  for (var i = 0; i < props.length; i += 1) {
    defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
  }
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

/***/ }),

/***/ "./node_modules/dunder-proto/get.js":
/*!******************************************!*\
  !*** ./node_modules/dunder-proto/get.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var callBind = __webpack_require__(/*! call-bind-apply-helpers */ "./node_modules/call-bind-apply-helpers/index.js");
var gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");
var hasProtoAccessor;
try {
  // eslint-disable-next-line no-extra-parens, no-proto
  hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */[].__proto__ === Array.prototype;
} catch (e) {
  if (!e || _typeof(e) !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
    throw e;
  }
}

// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */'__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;

/** @type {import('./get')} */
module.exports = desc && typeof desc.get === 'function' ? callBind([desc.get]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */function getDunder(value) {
  // eslint-disable-next-line eqeqeq
  return $getPrototypeOf(value == null ? value : $Object(value));
} : false;

/***/ }),

/***/ "./node_modules/es-abstract-get/GetMethod.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract-get/GetMethod.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");
var isCallable = __webpack_require__(/*! is-callable */ "./node_modules/is-callable/index.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");
var GetV = __webpack_require__(/*! ./GetV */ "./node_modules/es-abstract-get/GetV.js");
var isPropertyKey = __webpack_require__(/*! ./isPropertyKey */ "./node_modules/es-abstract-get/isPropertyKey.js");

// https://262.ecma-international.org/6.0/#sec-getmethod

/** @type {import('./GetMethod')} */
module.exports = function GetMethod(O, P) {
  // 7.3.9.1
  if (!isPropertyKey(P)) {
    throw new $TypeError('Assertion failed: P is not a Property Key');
  }

  // 7.3.9.2
  var func = GetV(O, P);

  // 7.3.9.4
  if (func == null) {
    return void 0;
  }

  // 7.3.9.5
  if (!isCallable(func)) {
    throw new $TypeError(inspect(P) + ' is not a function: ' + inspect(func));
  }

  // 7.3.9.6
  return func;
};

/***/ }),

/***/ "./node_modules/es-abstract-get/GetV.js":
/*!**********************************************!*\
  !*** ./node_modules/es-abstract-get/GetV.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");
var isPropertyKey = __webpack_require__(/*! ./isPropertyKey */ "./node_modules/es-abstract-get/isPropertyKey.js");

// https://262.ecma-international.org/6.0/#sec-getv

/** @type {import('./GetV')} */
module.exports = function GetV(V, P) {
  // 7.3.2.1
  if (!isPropertyKey(P)) {
    throw new $TypeError('Assertion failed: P is not a Property Key, got ' + inspect(P));
  }

  // 7.3.2.2-3
  // var O = ToObject(V);

  // 7.3.2.4
  return /** @type {Record<typeof P, unknown>} */V[P]; // O.[[Get]](P, V)
};

/***/ }),

/***/ "./node_modules/es-abstract-get/isPropertyKey.js":
/*!*******************************************************!*\
  !*** ./node_modules/es-abstract-get/isPropertyKey.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./isPropertyKey')} */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
module.exports = function isPropertyKey(argument) {
  return typeof argument === 'string' || _typeof(argument) === 'symbol';
};

/***/ }),

/***/ "./node_modules/es-abstract/2024/HasOwnProperty.js":
/*!*********************************************************!*\
  !*** ./node_modules/es-abstract/2024/HasOwnProperty.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");
var hasOwn = __webpack_require__(/*! hasown */ "./node_modules/hasown/index.js");
var isObject = __webpack_require__(/*! es-object-atoms/isObject */ "./node_modules/es-object-atoms/isObject.js");
var isPropertyKey = __webpack_require__(/*! ../helpers/isPropertyKey */ "./node_modules/es-abstract/helpers/isPropertyKey.js");

// https://262.ecma-international.org/6.0/#sec-hasownproperty

module.exports = function HasOwnProperty(O, P) {
  if (!isObject(O)) {
    throw new $TypeError('Assertion failed: `O` must be an Object');
  }
  if (!isPropertyKey(P)) {
    throw new $TypeError('Assertion failed: `P` must be a Property Key');
  }
  return hasOwn(O, P);
};

/***/ }),

/***/ "./node_modules/es-abstract/2024/ToPrimitive.js":
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToPrimitive.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(/*! es-to-primitive/es2015 */ "./node_modules/es-to-primitive/es2015.js");

// https://262.ecma-international.org/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
  if (arguments.length > 1) {
    return toPrimitive(input, arguments[1]);
  }
  return toPrimitive(input);
};

/***/ }),

/***/ "./node_modules/es-abstract/2024/ToPropertyKey.js":
/*!********************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToPropertyKey.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var $String = GetIntrinsic('%String%');
var ToPrimitive = __webpack_require__(/*! ./ToPrimitive */ "./node_modules/es-abstract/2024/ToPrimitive.js");
var ToString = __webpack_require__(/*! ./ToString */ "./node_modules/es-abstract/2024/ToString.js");

// https://262.ecma-international.org/6.0/#sec-topropertykey

module.exports = function ToPropertyKey(argument) {
  var key = ToPrimitive(argument, $String);
  return _typeof(key) === 'symbol' ? key : ToString(key);
};

/***/ }),

/***/ "./node_modules/es-abstract/2024/ToString.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToString.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var $String = GetIntrinsic('%String%');
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");

// https://262.ecma-international.org/6.0/#sec-tostring

module.exports = function ToString(argument) {
  if (_typeof(argument) === 'symbol') {
    throw new $TypeError('Cannot convert a Symbol value to a string');
  }
  return $String(argument);
};

/***/ }),

/***/ "./node_modules/es-abstract/helpers/isPropertyKey.js":
/*!***********************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isPropertyKey.js ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
module.exports = function isPropertyKey(argument) {
  return typeof argument === 'string' || _typeof(argument) === 'symbol';
};

/***/ }),

/***/ "./node_modules/es-define-property/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es-define-property/index.js ***!
  \**************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
  try {
    $defineProperty({}, 'a', {
      value: 1
    });
  } catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = false;
  }
}
module.exports = $defineProperty;

/***/ }),

/***/ "./node_modules/es-errors/eval.js":
/*!****************************************!*\
  !*** ./node_modules/es-errors/eval.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./eval')} */
module.exports = EvalError;

/***/ }),

/***/ "./node_modules/es-errors/index.js":
/*!*****************************************!*\
  !*** ./node_modules/es-errors/index.js ***!
  \*****************************************/
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
module.exports = Error;

/***/ }),

/***/ "./node_modules/es-errors/range.js":
/*!*****************************************!*\
  !*** ./node_modules/es-errors/range.js ***!
  \*****************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./range')} */
module.exports = RangeError;

/***/ }),

/***/ "./node_modules/es-errors/ref.js":
/*!***************************************!*\
  !*** ./node_modules/es-errors/ref.js ***!
  \***************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./ref')} */
module.exports = ReferenceError;

/***/ }),

/***/ "./node_modules/es-errors/syntax.js":
/*!******************************************!*\
  !*** ./node_modules/es-errors/syntax.js ***!
  \******************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./syntax')} */
module.exports = SyntaxError;

/***/ }),

/***/ "./node_modules/es-errors/type.js":
/*!****************************************!*\
  !*** ./node_modules/es-errors/type.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./type')} */
module.exports = TypeError;

/***/ }),

/***/ "./node_modules/es-errors/uri.js":
/*!***************************************!*\
  !*** ./node_modules/es-errors/uri.js ***!
  \***************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./uri')} */
module.exports = URIError;

/***/ }),

/***/ "./node_modules/es-object-atoms/RequireObjectCoercible.js":
/*!****************************************************************!*\
  !*** ./node_modules/es-object-atoms/RequireObjectCoercible.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");

/** @type {import('./RequireObjectCoercible')} */
module.exports = function RequireObjectCoercible(value) {
  if (value == null) {
    throw new $TypeError(arguments.length > 0 && arguments[1] || 'Cannot call method on ' + value);
  }
  return value;
};

/***/ }),

/***/ "./node_modules/es-object-atoms/ToObject.js":
/*!**************************************************!*\
  !*** ./node_modules/es-object-atoms/ToObject.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $Object = __webpack_require__(/*! ./ */ "./node_modules/es-object-atoms/index.js");
var RequireObjectCoercible = __webpack_require__(/*! ./RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");

/** @type {import('./ToObject')} */
module.exports = function ToObject(value) {
  RequireObjectCoercible(value);
  return $Object(value);
};

/***/ }),

/***/ "./node_modules/es-object-atoms/index.js":
/*!***********************************************!*\
  !*** ./node_modules/es-object-atoms/index.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
module.exports = Object;

/***/ }),

/***/ "./node_modules/es-object-atoms/isObject.js":
/*!**************************************************!*\
  !*** ./node_modules/es-object-atoms/isObject.js ***!
  \**************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./isObject')} */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
module.exports = function isObject(x) {
  return !!x && (typeof x === 'function' || _typeof(x) === 'object');
};

/***/ }),

/***/ "./node_modules/es-to-primitive/es2015.js":
/*!************************************************!*\
  !*** ./node_modules/es-to-primitive/es2015.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var hasSymbols = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol';
var isCallable = __webpack_require__(/*! is-callable */ "./node_modules/is-callable/index.js");
var isDate = __webpack_require__(/*! is-date-object */ "./node_modules/is-date-object/index.js");
var isSymbol = __webpack_require__(/*! is-symbol */ "./node_modules/is-symbol/index.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");
var isPrimitive = __webpack_require__(/*! ./helpers/isPrimitive */ "./node_modules/es-to-primitive/helpers/isPrimitive.js");

/** @import { primitiveES6 } from './es2015' */

/** @type {(O: { valueOf?: () => unknown, toString?: () => unknown }, hint: 'number' | 'string') => primitiveES6} */
function OrdinaryToPrimitive(O, hint) {
  if (typeof O === 'undefined' || O === null) {
    throw new $TypeError('Cannot call method on ' + O);
  }
  if (typeof hint !== 'string' || hint !== 'number' && hint !== 'string') {
    throw new $TypeError('hint must be "string" or "number"');
  }
  /** @type {('toString' | 'valueOf')[]} */
  var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
  var method, result, i;
  for (i = 0; i < methodNames.length; ++i) {
    method = O[methodNames[i]];
    if (isCallable(method)) {
      result = method.call(O);
      if (isPrimitive(result)) {
        return /** @type {primitiveES6} */result;
      }
    }
  }
  throw new $TypeError('No default value');
}
var GetMethod = __webpack_require__(/*! es-abstract-get/GetMethod */ "./node_modules/es-abstract-get/GetMethod.js");

/** @type {import('./es2015')} */
// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
  if (isPrimitive(input)) {
    return /** @type {primitiveES6} */input;
  }
  /** @type {'default' | 'string' | 'number'} */
  var hint = 'default';
  if (arguments.length > 1) {
    if (arguments[1] === String) {
      hint = 'string';
    } else if (arguments[1] === Number) {
      hint = 'number';
    }
  }
  var exoticToPrim;
  if (hasSymbols) {
    if (Symbol.toPrimitive) {
      exoticToPrim = GetMethod(/** @type {{ [k in SymbolConstructor['toPrimitive']]?: Function }} */
      input, Symbol.toPrimitive);
    } else if (isSymbol(input)) {
      exoticToPrim = Symbol.prototype.valueOf;
    }
  }
  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);
    if (isPrimitive(result)) {
      return /** @type {primitiveES6} */result;
    }
    throw new $TypeError('unable to convert exotic object to primitive');
  }
  if (hint === 'default' && (isDate(input) || isSymbol(input))) {
    hint = /** @type {const} */'string';
  }
  return OrdinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};

/***/ }),

/***/ "./node_modules/es-to-primitive/helpers/isPrimitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/es-to-primitive/helpers/isPrimitive.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";


/** @import { primitive } from '../' */
/** @import { primitiveES5 } from '../es5' */

/** @type {<T extends primitive | primitiveES5>(value: unknown) => value is T} */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
module.exports = function isPrimitive(value) {
  return value === null || typeof value !== 'function' && _typeof(value) !== 'object';
};

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
  var arr = [];
  for (var i = 0; i < a.length; i += 1) {
    arr[i] = a[i];
  }
  for (var j = 0; j < b.length; j += 1) {
    arr[j + a.length] = b[j];
  }
  return arr;
};
var slicy = function slicy(arrLike, offset) {
  var arr = [];
  for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
    arr[j] = arrLike[i];
  }
  return arr;
};
var joiny = function joiny(arr, joiner) {
  var str = '';
  for (var i = 0; i < arr.length; i += 1) {
    str += arr[i];
    if (i + 1 < arr.length) {
      str += joiner;
    }
  }
  return str;
};
module.exports = function bind(that) {
  var target = this;
  if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slicy(arguments, 1);
  var bound;
  var binder = function binder() {
    if (this instanceof bound) {
      var result = target.apply(this, concatty(args, arguments));
      if (Object(result) === result) {
        return result;
      }
      return this;
    }
    return target.apply(that, concatty(args, arguments));
  };
  var boundLength = max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs[i] = '$' + i;
  }
  bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
  if (target.prototype) {
    var Empty = function Empty() {};
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};

/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");
module.exports = Function.prototype.bind || implementation;

/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var undefined;
var $Object = __webpack_require__(/*! es-object-atoms */ "./node_modules/es-object-atoms/index.js");
var $Error = __webpack_require__(/*! es-errors */ "./node_modules/es-errors/index.js");
var $EvalError = __webpack_require__(/*! es-errors/eval */ "./node_modules/es-errors/eval.js");
var $RangeError = __webpack_require__(/*! es-errors/range */ "./node_modules/es-errors/range.js");
var $ReferenceError = __webpack_require__(/*! es-errors/ref */ "./node_modules/es-errors/ref.js");
var $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "./node_modules/es-errors/syntax.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");
var $URIError = __webpack_require__(/*! es-errors/uri */ "./node_modules/es-errors/uri.js");
var abs = __webpack_require__(/*! math-intrinsics/abs */ "./node_modules/math-intrinsics/abs.js");
var floor = __webpack_require__(/*! math-intrinsics/floor */ "./node_modules/math-intrinsics/floor.js");
var max = __webpack_require__(/*! math-intrinsics/max */ "./node_modules/math-intrinsics/max.js");
var min = __webpack_require__(/*! math-intrinsics/min */ "./node_modules/math-intrinsics/min.js");
var pow = __webpack_require__(/*! math-intrinsics/pow */ "./node_modules/math-intrinsics/pow.js");
var round = __webpack_require__(/*! math-intrinsics/round */ "./node_modules/math-intrinsics/round.js");
var sign = __webpack_require__(/*! math-intrinsics/sign */ "./node_modules/math-intrinsics/sign.js");
var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function getEvalledConstructor(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
  } catch (e) {}
};
var $gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");
var $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");
var throwTypeError = function throwTypeError() {
  throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function () {
  try {
    // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
    arguments.callee; // IE 8 does not throw here
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
      return $gOPD(arguments, 'callee').get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();
var getProto = __webpack_require__(/*! get-proto */ "./node_modules/get-proto/index.js");
var $ObjectGPO = __webpack_require__(/*! get-proto/Object.getPrototypeOf */ "./node_modules/get-proto/Object.getPrototypeOf.js");
var $ReflectGPO = __webpack_require__(/*! get-proto/Reflect.getPrototypeOf */ "./node_modules/get-proto/Reflect.getPrototypeOf.js");
var $apply = __webpack_require__(/*! call-bind-apply-helpers/functionApply */ "./node_modules/call-bind-apply-helpers/functionApply.js");
var $call = __webpack_require__(/*! call-bind-apply-helpers/functionCall */ "./node_modules/call-bind-apply-helpers/functionCall.js");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
  __proto__: null,
  '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
  '%Array%': Array,
  '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
  '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
  '%AsyncFromSyncIteratorPrototype%': undefined,
  '%AsyncFunction%': needsEval,
  '%AsyncGenerator%': needsEval,
  '%AsyncGeneratorFunction%': needsEval,
  '%AsyncIteratorPrototype%': needsEval,
  '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
  '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
  '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
  '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
  '%Boolean%': Boolean,
  '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
  '%Date%': Date,
  '%decodeURI%': decodeURI,
  '%decodeURIComponent%': decodeURIComponent,
  '%encodeURI%': encodeURI,
  '%encodeURIComponent%': encodeURIComponent,
  '%Error%': $Error,
  '%eval%': eval,
  // eslint-disable-line no-eval
  '%EvalError%': $EvalError,
  '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
  '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
  '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
  '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
  '%Function%': $Function,
  '%GeneratorFunction%': needsEval,
  '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
  '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
  '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
  '%isFinite%': isFinite,
  '%isNaN%': isNaN,
  '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
  '%JSON%': (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) === 'object' ? JSON : undefined,
  '%Map%': typeof Map === 'undefined' ? undefined : Map,
  '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
  '%Math%': Math,
  '%Number%': Number,
  '%Object%': $Object,
  '%Object.getOwnPropertyDescriptor%': $gOPD,
  '%parseFloat%': parseFloat,
  '%parseInt%': parseInt,
  '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
  '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
  '%RangeError%': $RangeError,
  '%ReferenceError%': $ReferenceError,
  '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
  '%RegExp%': RegExp,
  '%Set%': typeof Set === 'undefined' ? undefined : Set,
  '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
  '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
  '%String%': String,
  '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
  '%Symbol%': hasSymbols ? Symbol : undefined,
  '%SyntaxError%': $SyntaxError,
  '%ThrowTypeError%': ThrowTypeError,
  '%TypedArray%': TypedArray,
  '%TypeError%': $TypeError,
  '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
  '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
  '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
  '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
  '%URIError%': $URIError,
  '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
  '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
  '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
  '%Function.prototype.call%': $call,
  '%Function.prototype.apply%': $apply,
  '%Object.defineProperty%': $defineProperty,
  '%Object.getPrototypeOf%': $ObjectGPO,
  '%Math.abs%': abs,
  '%Math.floor%': floor,
  '%Math.max%': max,
  '%Math.min%': min,
  '%Math.pow%': pow,
  '%Math.round%': round,
  '%Math.sign%': sign,
  '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
  try {
    null.error; // eslint-disable-line no-unused-expressions
  } catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS['%Error.prototype%'] = errorProto;
  }
}
var doEval = function doEval(name) {
  var value;
  if (name === '%AsyncFunction%') {
    value = getEvalledConstructor('async function () {}');
  } else if (name === '%GeneratorFunction%') {
    value = getEvalledConstructor('function* () {}');
  } else if (name === '%AsyncGeneratorFunction%') {
    value = getEvalledConstructor('async function* () {}');
  } else if (name === '%AsyncGenerator%') {
    var fn = doEval('%AsyncGeneratorFunction%');
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === '%AsyncIteratorPrototype%') {
    var gen = doEval('%AsyncGenerator%');
    if (gen && getProto) {
      value = getProto(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  __proto__: null,
  '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
  '%ArrayPrototype%': ['Array', 'prototype'],
  '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
  '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
  '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
  '%ArrayProto_values%': ['Array', 'prototype', 'values'],
  '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
  '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
  '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
  '%BooleanPrototype%': ['Boolean', 'prototype'],
  '%DataViewPrototype%': ['DataView', 'prototype'],
  '%DatePrototype%': ['Date', 'prototype'],
  '%ErrorPrototype%': ['Error', 'prototype'],
  '%EvalErrorPrototype%': ['EvalError', 'prototype'],
  '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
  '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
  '%FunctionPrototype%': ['Function', 'prototype'],
  '%Generator%': ['GeneratorFunction', 'prototype'],
  '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
  '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
  '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
  '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
  '%JSONParse%': ['JSON', 'parse'],
  '%JSONStringify%': ['JSON', 'stringify'],
  '%MapPrototype%': ['Map', 'prototype'],
  '%NumberPrototype%': ['Number', 'prototype'],
  '%ObjectPrototype%': ['Object', 'prototype'],
  '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
  '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
  '%PromisePrototype%': ['Promise', 'prototype'],
  '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
  '%Promise_all%': ['Promise', 'all'],
  '%Promise_reject%': ['Promise', 'reject'],
  '%Promise_resolve%': ['Promise', 'resolve'],
  '%RangeErrorPrototype%': ['RangeError', 'prototype'],
  '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
  '%RegExpPrototype%': ['RegExp', 'prototype'],
  '%SetPrototype%': ['Set', 'prototype'],
  '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
  '%StringPrototype%': ['String', 'prototype'],
  '%SymbolPrototype%': ['Symbol', 'prototype'],
  '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
  '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
  '%TypeErrorPrototype%': ['TypeError', 'prototype'],
  '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
  '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
  '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
  '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
  '%URIErrorPrototype%': ['URIError', 'prototype'],
  '%WeakMapPrototype%': ['WeakMap', 'prototype'],
  '%WeakSetPrototype%': ['WeakSet', 'prototype']
};
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! hasown */ "./node_modules/hasown/index.js");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === '%' && last !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
  } else if (last === '%' && first !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
  }
  var result = [];
  $replace(string, rePropName, function (match, number, quote, subString) {
    result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
  });
  return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = '%' + alias[0] + '%';
  }
  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === 'undefined' && !allowMissing) {
      throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
    }
    return {
      alias: alias,
      name: intrinsicName,
      value: value
    };
  }
  throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new $TypeError('intrinsic name must be a non-empty string');
  }
  if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
    throw new $TypeError('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
  var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
      throw new $SyntaxError('property names with quotes must have matching quotes');
    }
    if (part === 'constructor' || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += '.' + part;
    intrinsicRealName = '%' + intrinsicBaseName + '%';
    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
        }
        return void undefined;
      }
      if ($gOPD && i + 1 >= parts.length) {
        var desc = $gOPD(value, part);
        isOwn = !!desc;

        // By convention, when a data property is converted to an accessor
        // property to emulate a data property that does not suffer from
        // the override mistake, that accessor's getter is marked with
        // an `originalValue` property. Here, when we detect this, we
        // uphold the illusion by pretending to see that original data
        // property, i.e., returning the value rather than the getter
        // itself.
        if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};

/***/ }),

/***/ "./node_modules/get-proto/Object.getPrototypeOf.js":
/*!*********************************************************!*\
  !*** ./node_modules/get-proto/Object.getPrototypeOf.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $Object = __webpack_require__(/*! es-object-atoms */ "./node_modules/es-object-atoms/index.js");

/** @type {import('./Object.getPrototypeOf')} */
module.exports = $Object.getPrototypeOf || null;

/***/ }),

/***/ "./node_modules/get-proto/Reflect.getPrototypeOf.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-proto/Reflect.getPrototypeOf.js ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./Reflect.getPrototypeOf')} */
module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;

/***/ }),

/***/ "./node_modules/get-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-proto/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var reflectGetProto = __webpack_require__(/*! ./Reflect.getPrototypeOf */ "./node_modules/get-proto/Reflect.getPrototypeOf.js");
var originalGetProto = __webpack_require__(/*! ./Object.getPrototypeOf */ "./node_modules/get-proto/Object.getPrototypeOf.js");
var getDunderProto = __webpack_require__(/*! dunder-proto/get */ "./node_modules/dunder-proto/get.js");

/** @type {import('.')} */
module.exports = reflectGetProto ? function getProto(O) {
  // @ts-expect-error TS can't narrow inside a closure, for some reason
  return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
  if (!O || _typeof(O) !== 'object' && typeof O !== 'function') {
    throw new TypeError('getProto: not an object');
  }
  // @ts-expect-error TS can't narrow inside a closure, for some reason
  return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
  // @ts-expect-error TS can't narrow inside a closure, for some reason
  return getDunderProto(O);
} : null;

/***/ }),

/***/ "./node_modules/gopd/gOPD.js":
/*!***********************************!*\
  !*** ./node_modules/gopd/gOPD.js ***!
  \***********************************/
/***/ (function(module) {

"use strict";


/** @type {import('./gOPD')} */
module.exports = Object.getOwnPropertyDescriptor;

/***/ }),

/***/ "./node_modules/gopd/index.js":
/*!************************************!*\
  !*** ./node_modules/gopd/index.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/** @type {import('.')} */
var $gOPD = __webpack_require__(/*! ./gOPD */ "./node_modules/gopd/gOPD.js");
if ($gOPD) {
  try {
    $gOPD([], 'length');
  } catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
  }
}
module.exports = $gOPD;

/***/ }),

/***/ "./node_modules/has-property-descriptors/index.js":
/*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");
var hasPropertyDescriptors = function hasPropertyDescriptors() {
  return !!$defineProperty;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  // node v0.6 has a bug where array lengths can be Set but not Defined
  if (!$defineProperty) {
    return null;
  }
  try {
    return $defineProperty([], 'length', {
      value: 1
    }).length !== 1;
  } catch (e) {
    // In Firefox 4-22, defining length on an array throws an exception.
    return true;
  }
};
module.exports = hasPropertyDescriptors;

/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

/** @type {import('.')} */
module.exports = function hasNativeSymbols() {
  if (typeof origSymbol !== 'function') {
    return false;
  }
  if (typeof Symbol !== 'function') {
    return false;
  }
  if (_typeof(origSymbol('foo')) !== 'symbol') {
    return false;
  }
  if (_typeof(Symbol('bar')) !== 'symbol') {
    return false;
  }
  return hasSymbolSham();
};

/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./shams')} */
/* eslint complexity: [2, 18], max-statements: [2, 33] */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
module.exports = function hasSymbols() {
  if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
    return false;
  }
  if (_typeof(Symbol.iterator) === 'symbol') {
    return true;
  }

  /** @type {{ [k in symbol]?: unknown }} */
  var obj = {};
  var sym = Symbol('test');
  var symObj = Object(sym);
  if (typeof sym === 'string') {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
    return false;
  }

  // temp disabled per https://github.com/ljharb/object.assign/issues/17
  // if (sym instanceof Symbol) { return false; }
  // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  // if (!(symObj instanceof Symbol)) { return false; }

  // if (typeof Symbol.prototype.toString !== 'function') { return false; }
  // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  var symVal = 42;
  obj[sym] = symVal;
  for (var _ in obj) {
    return false;
  } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
  if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === 'function') {
    // eslint-disable-next-line no-extra-parens
    var descriptor = /** @type {PropertyDescriptor} */Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ "./node_modules/has-tostringtag/shams.js":
/*!***********************************************!*\
  !*** ./node_modules/has-tostringtag/shams.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js");

/** @type {import('.')} */
module.exports = function hasToStringTagShams() {
  return hasSymbols() && !!Symbol.toStringTag;
};

/***/ }),

/***/ "./node_modules/hasown/index.js":
/*!**************************************!*\
  !*** ./node_modules/hasown/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

/** @type {import('.')} */
module.exports = bind.call(call, $hasOwn);

/***/ }),

/***/ "./node_modules/is-callable/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-callable/index.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var fnToStr = Function.prototype.toString;
var reflectApply = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
  try {
    badArrayLike = Object.defineProperty({}, 'length', {
      get: function get() {
        throw isCallableMarker;
      }
    });
    isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    reflectApply(function () {
      throw 42;
    }, null, badArrayLike);
  } catch (_) {
    if (_ !== isCallableMarker) {
      reflectApply = null;
    }
  }
} else {
  reflectApply = null;
}
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
  try {
    var fnStr = fnToStr.call(value);
    return constructorRegex.test(fnStr);
  } catch (e) {
    return false; // not a function
  }
};
var tryFunctionObject = function tryFunctionToStr(value) {
  try {
    if (isES6ClassFn(value)) {
      return false;
    }
    fnToStr.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
var toStr = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() {
  return false;
};
if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object') {
  // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
  var all = document.all;
  if (toStr.call(all) === toStr.call(document.all)) {
    isDDA = function isDocumentDotAll(value) {
      /* globals document: false */
      // in IE 6-8, typeof document.all is "object" and it's truthy
      if ((isIE68 || !value) && (typeof value === 'undefined' || _typeof(value) === 'object')) {
        try {
          var str = toStr.call(value);
          return (str === ddaClass || str === ddaClass2 || str === ddaClass3 // opera 12.16
          || str === objectClass // IE 6-8
          ) && value('') == null; // eslint-disable-line eqeqeq
        } catch (e) {/**/}
      }
      return false;
    };
  }
}
module.exports = reflectApply ? function isCallable(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== 'function' && _typeof(value) !== 'object') {
    return false;
  }
  try {
    reflectApply(value, null, badArrayLike);
  } catch (e) {
    if (e !== isCallableMarker) {
      return false;
    }
  }
  return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== 'function' && _typeof(value) !== 'object') {
    return false;
  }
  if (hasToStringTag) {
    return tryFunctionObject(value);
  }
  if (isES6ClassFn(value)) {
    return false;
  }
  var strClass = toStr.call(value);
  if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
    return false;
  }
  return tryFunctionObject(value);
};

/***/ }),

/***/ "./node_modules/is-date-object/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var getDay = callBound('Date.prototype.getDay');
/** @type {import('.')} */
var tryDateObject = function tryDateGetDayCall(value) {
  try {
    getDay(value);
    return true;
  } catch (e) {
    return false;
  }
};

/** @type {(value: unknown) => string} */
var toStr = callBound('Object.prototype.toString');
var dateClass = '[object Date]';
var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();

/** @type {import('.')} */
module.exports = function isDateObject(value) {
  if (_typeof(value) !== 'object' || value === null) {
    return false;
  }
  return hasToStringTag ? tryDateObject(value) : toStr(value) === dateClass;
};

/***/ }),

/***/ "./node_modules/is-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();
var hasOwn = __webpack_require__(/*! hasown */ "./node_modules/hasown/index.js");
var gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

/** @type {import('.')} */
var fn;
if (hasToStringTag) {
  /** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */
  var $exec = callBound('RegExp.prototype.exec');
  /** @type {object} */
  var isRegexMarker = {};
  var throwRegexMarker = function throwRegexMarker() {
    throw isRegexMarker;
  };
  /** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */
  var badStringifier = {
    toString: throwRegexMarker,
    valueOf: throwRegexMarker
  };
  if (_typeof(Symbol.toPrimitive) === 'symbol') {
    badStringifier[Symbol.toPrimitive] = throwRegexMarker;
  }

  /** @type {import('.')} */
  // @ts-expect-error TS can't figure out that the $exec call always throws
  // eslint-disable-next-line consistent-return
  fn = function isRegex(value) {
    if (!value || _typeof(value) !== 'object') {
      return false;
    }

    // eslint-disable-next-line no-extra-parens
    var descriptor = /** @type {NonNullable<typeof gOPD>} */gOPD(/** @type {{ lastIndex?: unknown }} */value, 'lastIndex');
    var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
    if (!hasLastIndexDataProperty) {
      return false;
    }
    try {
      // eslint-disable-next-line no-extra-parens
      $exec(value, /** @type {string} */ /** @type {unknown} */badStringifier);
    } catch (e) {
      return e === isRegexMarker;
    }
  };
} else {
  /** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
  var $toString = callBound('Object.prototype.toString');
  /** @const @type {'[object RegExp]'} */
  var regexClass = '[object RegExp]';

  /** @type {import('.')} */
  fn = function isRegex(value) {
    // In older browsers, typeof regex incorrectly returns 'function'
    if (!value || _typeof(value) !== 'object' && typeof value !== 'function') {
      return false;
    }
    return $toString(value) === regexClass;
  };
}
module.exports = fn;

/***/ }),

/***/ "./node_modules/is-symbol/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-symbol/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();
var safeRegexTest = __webpack_require__(/*! safe-regex-test */ "./node_modules/safe-regex-test/index.js");
if (hasSymbols) {
  var $symToStr = callBound('Symbol.prototype.toString');
  var isSymString = safeRegexTest(/^Symbol\(.*\)$/);

  /** @type {(value: object) => value is Symbol} */
  var isSymbolObject = function isRealSymbolObject(value) {
    if (_typeof(value.valueOf()) !== 'symbol') {
      return false;
    }
    return isSymString($symToStr(value));
  };

  /** @type {import('.')} */
  module.exports = function isSymbol(value) {
    if (_typeof(value) === 'symbol') {
      return true;
    }
    if (!value || _typeof(value) !== 'object' || $toString(value) !== '[object Symbol]') {
      return false;
    }
    try {
      return isSymbolObject(value);
    } catch (e) {
      return false;
    }
  };
} else {
  /** @type {import('.')} */
  module.exports = function isSymbol(value) {
    // this environment does not support Symbols.
    return  false && 0;
  };
}

/***/ }),

/***/ "./node_modules/math-intrinsics/abs.js":
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/abs.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./abs')} */
module.exports = Math.abs;

/***/ }),

/***/ "./node_modules/math-intrinsics/floor.js":
/*!***********************************************!*\
  !*** ./node_modules/math-intrinsics/floor.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./floor')} */
module.exports = Math.floor;

/***/ }),

/***/ "./node_modules/math-intrinsics/isNaN.js":
/*!***********************************************!*\
  !*** ./node_modules/math-intrinsics/isNaN.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./isNaN')} */
module.exports = Number.isNaN || function isNaN(a) {
  return a !== a;
};

/***/ }),

/***/ "./node_modules/math-intrinsics/max.js":
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/max.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./max')} */
module.exports = Math.max;

/***/ }),

/***/ "./node_modules/math-intrinsics/min.js":
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/min.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./min')} */
module.exports = Math.min;

/***/ }),

/***/ "./node_modules/math-intrinsics/pow.js":
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/pow.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./pow')} */
module.exports = Math.pow;

/***/ }),

/***/ "./node_modules/math-intrinsics/round.js":
/*!***********************************************!*\
  !*** ./node_modules/math-intrinsics/round.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./round')} */
module.exports = Math.round;

/***/ }),

/***/ "./node_modules/math-intrinsics/sign.js":
/*!**********************************************!*\
  !*** ./node_modules/math-intrinsics/sign.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(/*! ./isNaN */ "./node_modules/math-intrinsics/isNaN.js");

/** @type {import('./sign')} */
module.exports = function sign(number) {
  if ($isNaN(number) || number === 0) {
    return number;
  }
  return number < 0 ? -1 : +1;
};

/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (_typeof(Symbol.toStringTag) === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
? function (O) {
  return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
  if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
    return str;
  }
  var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof num === 'number') {
    var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
    if (int !== num) {
      var intStr = String(int);
      var dec = $slice.call(str, intStr.length + 1);
      return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
    }
  }
  return $replace.call(str, sepRegex, '$&_');
}
var utilInspect = __webpack_require__(/*! ./util.inspect */ "?4f7e");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var quotes = {
  __proto__: null,
  'double': '"',
  single: "'"
};
var quoteREs = {
  __proto__: null,
  'double': /(["\\])/g,
  single: /(['\\])/g
};
module.exports = function inspect_(obj, options, depth, seen) {
  var opts = options || {};
  if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
  if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
    throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
  }
  if (has(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  }
  if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  }
  var numericSeparator = opts.numericSeparator;
  if (typeof obj === 'undefined') {
    return 'undefined';
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return obj ? 'true' : 'false';
  }
  if (typeof obj === 'string') {
    return inspectString(obj, opts);
  }
  if (typeof obj === 'number') {
    if (obj === 0) {
      return Infinity / obj > 0 ? '0' : '-0';
    }
    var str = String(obj);
    return numericSeparator ? addNumericSeparator(obj, str) : str;
  }
  if (typeof obj === 'bigint') {
    var bigIntStr = String(obj) + 'n';
    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
  }
  var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
  if (typeof depth === 'undefined') {
    depth = 0;
  }
  if (depth >= maxDepth && maxDepth > 0 && _typeof(obj) === 'object') {
    return isArray(obj) ? '[Array]' : '[Object]';
  }
  var indent = getIndent(opts, depth);
  if (typeof seen === 'undefined') {
    seen = [];
  } else if (indexOf(seen, obj) >= 0) {
    return '[Circular]';
  }
  function inspect(value, from, noIndent) {
    if (from) {
      seen = $arrSlice.call(seen);
      seen.push(from);
    }
    if (noIndent) {
      var newOpts = {
        depth: opts.depth
      };
      if (has(opts, 'quoteStyle')) {
        newOpts.quoteStyle = opts.quoteStyle;
      }
      return inspect_(value, newOpts, depth + 1, seen);
    }
    return inspect_(value, opts, depth + 1, seen);
  }
  if (typeof obj === 'function' && !isRegExp(obj)) {
    // in older engines, regexes are callable
    var name = nameOf(obj);
    var keys = arrObjKeys(obj, inspect);
    return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
  }
  if (isSymbol(obj)) {
    var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
    return _typeof(obj) === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
  }
  if (isElement(obj)) {
    var s = '<' + $toLowerCase.call(String(obj.nodeName));
    var attrs = obj.attributes || [];
    for (var i = 0; i < attrs.length; i++) {
      s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
    }
    s += '>';
    if (obj.childNodes && obj.childNodes.length) {
      s += '...';
    }
    s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
    return s;
  }
  if (isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    var xs = arrObjKeys(obj, inspect);
    if (indent && !singleLineValues(xs)) {
      return '[' + indentedJoin(xs, indent) + ']';
    }
    return '[ ' + $join.call(xs, ', ') + ' ]';
  }
  if (isError(obj)) {
    var parts = arrObjKeys(obj, inspect);
    if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
      return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
    }
    if (parts.length === 0) {
      return '[' + String(obj) + ']';
    }
    return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
  }
  if (_typeof(obj) === 'object' && customInspect) {
    if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
      return utilInspect(obj, {
        depth: maxDepth - depth
      });
    } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
      return obj.inspect();
    }
  }
  if (isMap(obj)) {
    var mapParts = [];
    if (mapForEach) {
      mapForEach.call(obj, function (value, key) {
        mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
      });
    }
    return collectionOf('Map', mapSize.call(obj), mapParts, indent);
  }
  if (isSet(obj)) {
    var setParts = [];
    if (setForEach) {
      setForEach.call(obj, function (value) {
        setParts.push(inspect(value, obj));
      });
    }
    return collectionOf('Set', setSize.call(obj), setParts, indent);
  }
  if (isWeakMap(obj)) {
    return weakCollectionOf('WeakMap');
  }
  if (isWeakSet(obj)) {
    return weakCollectionOf('WeakSet');
  }
  if (isWeakRef(obj)) {
    return weakCollectionOf('WeakRef');
  }
  if (isNumber(obj)) {
    return markBoxed(inspect(Number(obj)));
  }
  if (isBigInt(obj)) {
    return markBoxed(inspect(bigIntValueOf.call(obj)));
  }
  if (isBoolean(obj)) {
    return markBoxed(booleanValueOf.call(obj));
  }
  if (isString(obj)) {
    return markBoxed(inspect(String(obj)));
  }
  // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
  /* eslint-env browser */
  if (typeof window !== 'undefined' && obj === window) {
    return '{ [object Window] }';
  }
  if (typeof globalThis !== 'undefined' && obj === globalThis || typeof __webpack_require__.g !== 'undefined' && obj === __webpack_require__.g) {
    return '{ [object globalThis] }';
  }
  if (!isDate(obj) && !isRegExp(obj)) {
    var ys = arrObjKeys(obj, inspect);
    var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
    var protoTag = obj instanceof Object ? '' : 'null prototype';
    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
    var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
    var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
    if (ys.length === 0) {
      return tag + '{}';
    }
    if (indent) {
      return tag + '{' + indentedJoin(ys, indent) + '}';
    }
    return tag + '{ ' + $join.call(ys, ', ') + ' }';
  }
  return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
  var style = opts.quoteStyle || defaultStyle;
  var quoteChar = quotes[style];
  return quoteChar + s + quoteChar;
}
function quote(s) {
  return $replace.call(String(s), /"/g, '&quot;');
}
function canTrustToString(obj) {
  return !toStringTag || !(_typeof(obj) === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) {
  return toStr(obj) === '[object Array]' && canTrustToString(obj);
}
function isDate(obj) {
  return toStr(obj) === '[object Date]' && canTrustToString(obj);
}
function isRegExp(obj) {
  return toStr(obj) === '[object RegExp]' && canTrustToString(obj);
}
function isError(obj) {
  return toStr(obj) === '[object Error]' && canTrustToString(obj);
}
function isString(obj) {
  return toStr(obj) === '[object String]' && canTrustToString(obj);
}
function isNumber(obj) {
  return toStr(obj) === '[object Number]' && canTrustToString(obj);
}
function isBoolean(obj) {
  return toStr(obj) === '[object Boolean]' && canTrustToString(obj);
}

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
  if (hasShammedSymbols) {
    return obj && _typeof(obj) === 'object' && obj instanceof Symbol;
  }
  if (_typeof(obj) === 'symbol') {
    return true;
  }
  if (!obj || _typeof(obj) !== 'object' || !symToString) {
    return false;
  }
  try {
    symToString.call(obj);
    return true;
  } catch (e) {}
  return false;
}
function isBigInt(obj) {
  if (!obj || _typeof(obj) !== 'object' || !bigIntValueOf) {
    return false;
  }
  try {
    bigIntValueOf.call(obj);
    return true;
  } catch (e) {}
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function (key) {
  return key in this;
};
function has(obj, key) {
  return hasOwn.call(obj, key);
}
function toStr(obj) {
  return objectToString.call(obj);
}
function nameOf(f) {
  if (f.name) {
    return f.name;
  }
  var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
  if (m) {
    return m[1];
  }
  return null;
}
function indexOf(xs, x) {
  if (xs.indexOf) {
    return xs.indexOf(x);
  }
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) {
      return i;
    }
  }
  return -1;
}
function isMap(x) {
  if (!mapSize || !x || _typeof(x) !== 'object') {
    return false;
  }
  try {
    mapSize.call(x);
    try {
      setSize.call(x);
    } catch (s) {
      return true;
    }
    return x instanceof Map; // core-js workaround, pre-v2.5.0
  } catch (e) {}
  return false;
}
function isWeakMap(x) {
  if (!weakMapHas || !x || _typeof(x) !== 'object') {
    return false;
  }
  try {
    weakMapHas.call(x, weakMapHas);
    try {
      weakSetHas.call(x, weakSetHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
  } catch (e) {}
  return false;
}
function isWeakRef(x) {
  if (!weakRefDeref || !x || _typeof(x) !== 'object') {
    return false;
  }
  try {
    weakRefDeref.call(x);
    return true;
  } catch (e) {}
  return false;
}
function isSet(x) {
  if (!setSize || !x || _typeof(x) !== 'object') {
    return false;
  }
  try {
    setSize.call(x);
    try {
      mapSize.call(x);
    } catch (m) {
      return true;
    }
    return x instanceof Set; // core-js workaround, pre-v2.5.0
  } catch (e) {}
  return false;
}
function isWeakSet(x) {
  if (!weakSetHas || !x || _typeof(x) !== 'object') {
    return false;
  }
  try {
    weakSetHas.call(x, weakSetHas);
    try {
      weakMapHas.call(x, weakMapHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
  } catch (e) {}
  return false;
}
function isElement(x) {
  if (!x || _typeof(x) !== 'object') {
    return false;
  }
  if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
    return true;
  }
  return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
  if (str.length > opts.maxStringLength) {
    var remaining = str.length - opts.maxStringLength;
    var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
    return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
  }
  var quoteRE = quoteREs[opts.quoteStyle || 'single'];
  quoteRE.lastIndex = 0;
  // eslint-disable-next-line no-control-regex
  var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
  var n = c.charCodeAt(0);
  var x = {
    8: 'b',
    9: 't',
    10: 'n',
    12: 'f',
    13: 'r'
  }[n];
  if (x) {
    return '\\' + x;
  }
  return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
  return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
  return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
  var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
  return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
  for (var i = 0; i < xs.length; i++) {
    if (indexOf(xs[i], '\n') >= 0) {
      return false;
    }
  }
  return true;
}
function getIndent(opts, depth) {
  var baseIndent;
  if (opts.indent === '\t') {
    baseIndent = '\t';
  } else if (typeof opts.indent === 'number' && opts.indent > 0) {
    baseIndent = $join.call(Array(opts.indent + 1), ' ');
  } else {
    return null;
  }
  return {
    base: baseIndent,
    prev: $join.call(Array(depth + 1), baseIndent)
  };
}
function indentedJoin(xs, indent) {
  if (xs.length === 0) {
    return '';
  }
  var lineJoiner = '\n' + indent.prev + indent.base;
  return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
  var isArr = isArray(obj);
  var xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++) {
      xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
    }
  }
  var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
  var symMap;
  if (hasShammedSymbols) {
    symMap = {};
    for (var k = 0; k < syms.length; k++) {
      symMap['$' + syms[k]] = syms[k];
    }
  }
  for (var key in obj) {
    // eslint-disable-line no-restricted-syntax
    if (!has(obj, key)) {
      continue;
    } // eslint-disable-line no-restricted-syntax, no-continue
    if (isArr && String(Number(key)) === key && key < obj.length) {
      continue;
    } // eslint-disable-line no-restricted-syntax, no-continue
    if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
      // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
      continue; // eslint-disable-line no-restricted-syntax, no-continue
    } else if ($test.call(/[^\w$]/, key)) {
      xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
    } else {
      xs.push(key + ': ' + inspect(obj[key], obj));
    }
  }
  if (typeof gOPS === 'function') {
    for (var j = 0; j < syms.length; j++) {
      if (isEnumerable.call(obj, syms[j])) {
        xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
      }
    }
  }
  return xs;
}

/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var keysShim;
if (!Object.keys) {
  // modified from https://github.com/es-shims/es5-shim
  var has = Object.prototype.hasOwnProperty;
  var toStr = Object.prototype.toString;
  var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var hasDontEnumBug = !isEnumerable.call({
    toString: null
  }, 'toString');
  var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
  var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
  var equalsConstructorPrototype = function equalsConstructorPrototype(o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
  };
  var excludedKeys = {
    $applicationCache: true,
    $console: true,
    $external: true,
    $frame: true,
    $frameElement: true,
    $frames: true,
    $innerHeight: true,
    $innerWidth: true,
    $onmozfullscreenchange: true,
    $onmozfullscreenerror: true,
    $outerHeight: true,
    $outerWidth: true,
    $pageXOffset: true,
    $pageYOffset: true,
    $parent: true,
    $scrollLeft: true,
    $scrollTop: true,
    $scrollX: true,
    $scrollY: true,
    $self: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $window: true
  };
  var hasAutomationEqualityBug = function () {
    /* global window */
    if (typeof window === 'undefined') {
      return false;
    }
    for (var k in window) {
      try {
        if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && _typeof(window[k]) === 'object') {
          try {
            equalsConstructorPrototype(window[k]);
          } catch (e) {
            return true;
          }
        }
      } catch (e) {
        return true;
      }
    }
    return false;
  }();
  var equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(o) {
    /* global window */
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
      return equalsConstructorPrototype(o);
    }
    try {
      return equalsConstructorPrototype(o);
    } catch (e) {
      return false;
    }
  };
  keysShim = function keys(object) {
    var isObject = object !== null && _typeof(object) === 'object';
    var isFunction = toStr.call(object) === '[object Function]';
    var isArguments = isArgs(object);
    var isString = isObject && toStr.call(object) === '[object String]';
    var theKeys = [];
    if (!isObject && !isFunction && !isArguments) {
      throw new TypeError('Object.keys called on a non-object');
    }
    var skipProto = hasProtoEnumBug && isFunction;
    if (isString && object.length > 0 && !has.call(object, 0)) {
      for (var i = 0; i < object.length; ++i) {
        theKeys.push(String(i));
      }
    }
    if (isArguments && object.length > 0) {
      for (var j = 0; j < object.length; ++j) {
        theKeys.push(String(j));
      }
    } else {
      for (var name in object) {
        if (!(skipProto && name === 'prototype') && has.call(object, name)) {
          theKeys.push(String(name));
        }
      }
    }
    if (hasDontEnumBug) {
      var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
      for (var k = 0; k < dontEnums.length; ++k) {
        if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
          theKeys.push(dontEnums[k]);
        }
      }
    }
    return theKeys;
  };
}
module.exports = keysShim;

/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
  return origKeys(o);
} : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
  if (Object.keys) {
    var keysWorksWithArguments = function () {
      // Safari 5.0 bug
      var args = Object.keys(arguments);
      return args && args.length === arguments.length;
    }(1, 2);
    if (!keysWorksWithArguments) {
      Object.keys = function keys(object) {
        // eslint-disable-line func-name-matching
        if (isArgs(object)) {
          return originalKeys(slice.call(object));
        }
        return originalKeys(object);
      };
    }
  } else {
    Object.keys = keysShim;
  }
  return Object.keys || keysShim;
};
module.exports = keysShim;

/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
  var str = toStr.call(value);
  var isArgs = str === '[object Arguments]';
  if (!isArgs) {
    isArgs = str !== '[object Array]' && value !== null && _typeof(value) === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
  }
  return isArgs;
};

/***/ }),

/***/ "./node_modules/object.hasown/auto.js":
/*!********************************************!*\
  !*** ./node_modules/object.hasown/auto.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./shim */ "./node_modules/object.hasown/shim.js")();

/***/ }),

/***/ "./node_modules/object.hasown/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.hasown/implementation.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var ToObject = __webpack_require__(/*! es-object-atoms/ToObject */ "./node_modules/es-object-atoms/ToObject.js");
var ToPropertyKey = __webpack_require__(/*! es-abstract/2024/ToPropertyKey */ "./node_modules/es-abstract/2024/ToPropertyKey.js");
var HasOwnProperty = __webpack_require__(/*! es-abstract/2024/HasOwnProperty */ "./node_modules/es-abstract/2024/HasOwnProperty.js");
module.exports = function hasOwn(O, P) {
  var obj = ToObject(O);
  var key = ToPropertyKey(P);
  return HasOwnProperty(obj, key);
};

/***/ }),

/***/ "./node_modules/object.hasown/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.hasown/polyfill.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.hasown/implementation.js");
module.exports = function getPolyfill() {
  return Object.hasOwn || implementation;
};

/***/ }),

/***/ "./node_modules/object.hasown/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.hasown/shim.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.hasown/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
module.exports = function shimObjectHasOwn() {
  var polyfill = getPolyfill();
  define(Object, {
    hasOwn: polyfill
  }, {
    hasOwn: function hasOwn() {
      return Object.hasOwn !== polyfill;
    }
  });
  return polyfill;
};

/***/ }),

/***/ "./node_modules/safe-regex-test/index.js":
/*!***********************************************!*\
  !*** ./node_modules/safe-regex-test/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var isRegex = __webpack_require__(/*! is-regex */ "./node_modules/is-regex/index.js");
var $exec = callBound('RegExp.prototype.exec');
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");

/** @type {import('.')} */
module.exports = function regexTester(regex) {
  if (!isRegex(regex)) {
    throw new $TypeError('`regex` must be a RegExp');
  }
  return function test(s) {
    return $exec(regex, s) !== null;
  };
};

/***/ }),

/***/ "./src/darkmode.d.ts":
/*!***************************!*\
  !*** ./src/darkmode.d.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLUGIN_HOOK: function() { return /* binding */ PLUGIN_HOOK; },
/* harmony export */   PluginAbstract: function() { return /* binding */ PluginAbstract; },
/* harmony export */   PluginBaseAbstract: function() { return /* binding */ PluginBaseAbstract; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
// getStyle 的 prop 取值：
// - 'cssText'：读取整串内联样式（算法从内联样式提取 cssKVList 时使用）
// - 单个样式属性，统一为【驼峰】写法，如 'color' / 'visibility' / 'display' / 'backgroundImage' / 'webkitBorderImage' / 'borderImage'
// 自定义 getStyle 时必须同时支持 'cssText' 整串与上述驼峰单属性，否则会导致样式提取失败、转换静默失效

// 算法内部的颜色对象（结构由内部颜色库决定，对外只作透传，不建议业务依赖其字段）

var PluginBaseAbstract = /*#__PURE__*/_createClass(function PluginBaseAbstract() {
  _classCallCheck(this, PluginBaseAbstract);
});
var PLUGIN_HOOK = /*#__PURE__*/function (PLUGIN_HOOK) {
  // 插件钩子
  PLUGIN_HOOK["BEFORE_CONVERT_NODE"] = "beforeConvertNode";
  PLUGIN_HOOK["AFTER_CONVERT_TEXT_COLOR"] = "afterConvertTextColor";
  PLUGIN_HOOK["AFTER_CONVERT_NODE"] = "afterConvertNode";
  PLUGIN_HOOK["BEFORE_CONVERT_NODE_BY_UPDATE_STYLE"] = "beforeConvertNodeByUpdateStyle";
  PLUGIN_HOOK["AFTER_CONVERT_TEXT_COLOR_BY_UPDATE_STYLE"] = "afterConvertTextColorByUpdateStyle";
  PLUGIN_HOOK["AFTER_CONVERT_NODE_BY_UPDATE_STYLE"] = "afterConvertNodeByUpdateStyle";
  PLUGIN_HOOK["BEFORE_CONVERT_NODE_BY_RESET"] = "beforeConvertNodeByReset";
  PLUGIN_HOOK["AFTER_CONVERT_TEXT_COLOR_BY_RESET"] = "afterConvertTextColorByReset";
  PLUGIN_HOOK["AFTER_CONVERT_NODE_BY_RESET"] = "afterConvertNodeByReset";
  return PLUGIN_HOOK;
}({});
var PluginAbstract = /*#__PURE__*/function (_PluginBaseAbstract) {
  function PluginAbstract() {
    _classCallCheck(this, PluginAbstract);
    return _callSuper(this, PluginAbstract, arguments);
  }
  _inherits(PluginAbstract, _PluginBaseAbstract);
  return _createClass(PluginAbstract);
}(PluginBaseAbstract);

// --- 以下为运行时导出声明（与 src/darkmode.ts 的 export 一一对应） ---
// 说明：dist 产物为 UMD，且入口处没有 __esModule 标记，因此：
// 1. `import Darkmode from 'mp-darkmode'` 仅在开启 esModuleInterop / allowSyntheticDefaultImports 时可用；
// 2. 未开启时请用 `import * as Darkmode from 'mp-darkmode'` 或具名导入。

// 具名导出：import { run, init, ConfigOption } from 'mp-darkmode'

// 默认导出：import Darkmode from 'mp-darkmode'

// UMD 全局：直接以 <script> 引入 dist/darkmode.min.js 时挂到 window 上的变量

/***/ }),

/***/ "./src/modules/bgNodeStack.ts":
/*!************************************!*\
  !*** ./src/modules/bgNodeStack.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BgNodeStack; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @name 需要判断位置的背景节点堆栈
 *
 * @class BgNodeStack
 * @attr {RegExp} classNameReg 类名正则表达式
 *
 * @constructor
 * @param {string} prefix 类名前缀
 *
 * @method push 背景节点入栈
 * @param {HTMLElement} el    背景节点对象
 * @param {string}      cssKV css键值对
 * @param {Callback}    [cb]  如果在背景节点区域内，则执行该回调函数
 * @return void
 *
 * @method contains 判断节点是否在背景节点的区域
 * @param {HTMLElement} el       要判断的节点对象（非背景节点）
 * @param {Callback}    callback 如果在背景节点区域内，则执行该回调函数
 * @return void
 *
 * @method update 更新堆栈的节点对象，主要解决前后节点不一致的问题
 * @param {HTMLElement[]} els 要更新的节点对象列表
 * @return void
 *
 * @method reset 重置
 * @return void
 *
 */

// Darkmode配置

var BgNodeStack = /*#__PURE__*/function () {
  // 索引值

  function BgNodeStack(prefix) {
    _classCallCheck(this, BgNodeStack);
    _defineProperty(this, "classNameReg", void 0);
    _defineProperty(this, "_prefix", void 0);
    _defineProperty(this, "_stack", []);
    // 需要判断位置的背景堆栈
    _defineProperty(this, "_idx", 0);
    this._prefix = prefix;
    this.classNameReg = new RegExp("".concat(this._prefix, "\\d+"));
  }

  // 背景节点入栈
  return _createClass(BgNodeStack, [{
    key: "push",
    value: function push(el, cssKV, cb) {
      var className = "".concat(this._prefix).concat(this._idx++);
      (0,_config__WEBPACK_IMPORTED_MODULE_0__.addClass)(el, className);
      this._stack.unshift({
        elOld: el,
        el: el,
        className: className,
        cssKV: cssKV,
        updated: !_config__WEBPACK_IMPORTED_MODULE_0__["default"].delayBgJudge,
        cb: cb
      });
    }

    // 判断节点是否在背景节点的区域
  }, {
    key: "contains",
    value: function contains(el, callback) {
      var rect = el.getBoundingClientRect();
      var idxStack = [];
      this._stack.forEach(function (item, i) {
        if (item.updated) {
          if (!item.rect) item.rect = item.el.getBoundingClientRect();
          var bgRect = item.rect;
          if (!(rect.top >= bgRect.bottom || rect.bottom <= bgRect.top || rect.left >= bgRect.right || rect.right <= bgRect.left)) {
            // 表示节点在背景图内
            idxStack.unshift(i);
          }
        }
      });
      while (idxStack.length) {
        var idx = idxStack.shift();
        if (idx === undefined) continue;
        var _item = this._stack.splice(idx, 1)[0];
        callback(_item);
      }
    }

    // 更新堆栈的节点对象，主要解决前后节点不一致的问题
  }, {
    key: "update",
    value: function update(els) {
      this._stack.forEach(function (item) {
        if (!item.updated) {
          Array.prototype.some.call(els, function (el) {
            if (el.nodeType === 1 && (0,_config__WEBPACK_IMPORTED_MODULE_0__.getClass)(el, true).indexOf(item.className) > -1) {
              item.el = el;
              item.updated = true;
              return true;
            }
            return false;
          });
        }
      });
    }

    // 重置
  }, {
    key: "reset",
    value: function reset() {
      this._stack = [];
      this._idx = 0;
    }
  }]);
}();

;

/***/ }),

/***/ "./src/modules/color.ts":
/*!******************************!*\
  !*** ./src/modules/color.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorParser: function() { return /* binding */ ColorParser; },
/* harmony export */   adjustBrightnessTo: function() { return /* binding */ adjustBrightnessTo; },
/* harmony export */   colorFromHsl: function() { return /* binding */ colorFromHsl; },
/* harmony export */   colorFromRgb: function() { return /* binding */ colorFromRgb; },
/* harmony export */   colorToCssString: function() { return /* binding */ colorToCssString; },
/* harmony export */   colorToHex: function() { return /* binding */ colorToHex; },
/* harmony export */   getColorPerceivedBrightness: function() { return /* binding */ getColorPerceivedBrightness; },
/* harmony export */   getContrast: function() { return /* binding */ getContrast; },
/* harmony export */   getFrontColor: function() { return /* binding */ getFrontColor; },
/* harmony export */   getHslArray: function() { return /* binding */ getHslArray; },
/* harmony export */   getRgbArray: function() { return /* binding */ getRgbArray; },
/* harmony export */   getRgbObject: function() { return /* binding */ getRgbObject; },
/* harmony export */   mixColors: function() { return /* binding */ mixColors; },
/* harmony export */   mixSassLike: function() { return /* binding */ mixSassLike; },
/* harmony export */   parseColorName: function() { return /* binding */ parseColorName; },
/* harmony export */   parseWebkitFillColorAndStrokeColor: function() { return /* binding */ parseWebkitFillColorAndStrokeColor; }
/* harmony export */ });
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
/* harmony import */ var color_blend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-blend */ "./node_modules/color-blend/dist/index.modern.js");
/* harmony import */ var colorjs_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! colorjs.io */ "./node_modules/colorjs.io/dist/color.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @name 颜色操作相关API
 *
 * @function ColorParser 实例化Color对象，传参非法时返回null
 * @param {ColorParam} color css色值
 * @return {ColorInstance | null} 实例化结果
 *
 * @function parseColorName 处理颜色，包括清除!important和转换英文定义颜色
 * @param {string}  color                      css色值
 * @param {boolean} [supportTransparent=false] 是否支持转换transparent
 * @return {string} 处理后的rgb(a)格式css色值
 *
 * @function parseWebkitFillColorAndStrokeColor 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
 * @param {string} color css色值
 * @return {string} 处理后的rgb(a)格式css色值，无则返回空字符串
 *
 * @function mixColors 计算混合颜色
 * @param {ColorParam[]} colors          用于计算的颜色数组
 * @param {string}       [type='normal'] 使用的混合颜色算法，支持 mix | normal | multiply | screen | overlay | darken | lighten | colorDodge | colorBurn | hardLight | softLight | difference | exclusion | hue | saturation | color | luminosity
 * @return {ColorInstance | null} 混合结果
 *
 * @function getFrontColor 根据混合色、背景色和前景色透明度，反推前景色rgba，目前混合模式只支持'normal'
 * @param {ColorParam}                retColor 混合色，透明度恒为1
 * @param {ColorParam | ColorParam[]} bgColor  背景色，透明度恒为1
 * @param {number}                    alpha    前景色透明度
 * @return {ColorInstance} 前景色，反推值超出[0, 255]时返回混合色
 *
 * @function getColorPerceivedBrightness 计算感知亮度
 * @param {RGBAArray} rgba 要计算的颜色rgba数组，如：[255, 0, 0, 1]
 * @return {number} 感知亮度
 *
 * @function adjustBrightnessTo 调整为指定感知亮度
 * @param {number}    target 指定的感知亮度值
 * @param {RGBAArray} rgba   要调整的颜色rgba数组，如：[255, 0, 0, 1]
 * @return {ColorInstance} 调整后的颜色
 *
 */



 // 统一使用 colorjs.io 做颜色的解析/转换，不再依赖 color 库

// 常量

var COLOR_NAME = _objectSpread(_objectSpread({}, color_name__WEBPACK_IMPORTED_MODULE_0__["default"]), {}, {
  // 补上这些colorName
  windowtext: [0, 0, 0],
  // windows特有的colorName
  transparent: [255, 255, 255, 0] // 透明，暂定用白色透明度0来表示
});
var COLOR_NAME_REG = new RegExp(Object.keys(COLOR_NAME).map(function (colorName) {
  return "\\b".concat(colorName, "\\b");
}).join('|'), 'ig'); // 生成正则表达式来匹配这些colorName

// Color对象 => ColorBlend对象
var color2ColorBlend = function color2ColorBlend(color) {
  // ColorInstance 可能是 hsl/lch 等非srgb空间，直接取通道拿不到 r/g/b，
  // ColorBlend 会据此算出黑色，因此统一先转到 srgb 空间再取（会保留透明度）
  return getRgbObject(color);
};

// ColorBlend对象 => Color对象
var colorBlend2Color = function colorBlend2Color(colorBlend) {
  colorBlend.alpha = colorBlend.a;
  delete colorBlend.a;
  return ColorParser(colorBlend);
};

// 实例化Color对象，传参非法时返回null
// colorjs.io 原生支持 rgb/rgba/hex/hsl/lch/oklch/lab/color() 等全部 CSS 色值，无需再用其它库兜底
var ColorParser = function ColorParser(color) {
  if (!color) return null;
  try {
    if (color instanceof colorjs_io__WEBPACK_IMPORTED_MODULE_2__["default"]) return color;
    if (typeof color === 'string') return new colorjs_io__WEBPACK_IMPORTED_MODULE_2__["default"](color);
    // {r,g,b,a} 形式的入参是 0-255 的通道值，colorjs.io 的 srgb 空间用 0-1
    var _ref = color,
      _ref$r = _ref.r,
      r = _ref$r === void 0 ? 0 : _ref$r,
      _ref$g = _ref.g,
      g = _ref$g === void 0 ? 0 : _ref$g,
      _ref$b = _ref.b,
      b = _ref$b === void 0 ? 0 : _ref$b,
      a = _ref.a,
      alpha = _ref.alpha;
    return new colorjs_io__WEBPACK_IMPORTED_MODULE_2__["default"]('srgb', [r / 255, g / 255, b / 255], a === undefined ? alpha === undefined ? 1 : alpha : a);
  } catch (err) {
    console.log("ignore the invalid color: `".concat(color, "`, err: ").concat(err));
    return null;
  }
};

// 取指定空间的通道值，colorjs.io 的 to() 在无法转换时返回 null
var getCoords = function getCoords(color, space) {
  var _color$to;
  return ((_color$to = color.to(space)) === null || _color$to === void 0 ? void 0 : _color$to.coords) || [0, 0, 0];
};

// 取 srgb 通道值（0-255），返回 [r, g, b, a]
var getRgbArray = function getRgbArray(color) {
  var _getCoords = getCoords(color, 'srgb'),
    _getCoords2 = _slicedToArray(_getCoords, 3),
    r = _getCoords2[0],
    g = _getCoords2[1],
    b = _getCoords2[2];
  return [r * 255, g * 255, b * 255, color.alpha === null ? 1 : color.alpha];
};

// 取 hsl 通道值，返回 [h(0-360), s(0-100), l(0-100), a]
var getHslArray = function getHslArray(color) {
  var _getCoords3 = getCoords(color, 'hsl'),
    _getCoords4 = _slicedToArray(_getCoords3, 3),
    h = _getCoords4[0],
    s = _getCoords4[1],
    l = _getCoords4[2];
  return [h, s, l, color.alpha === null ? 1 : color.alpha];
};

// 取 srgb 通道对象（0-255），供 color-blend 使用
var getRgbObject = function getRgbObject(color) {
  var _getRgbArray = getRgbArray(color),
    _getRgbArray2 = _slicedToArray(_getRgbArray, 4),
    r = _getRgbArray2[0],
    g = _getRgbArray2[1],
    b = _getRgbArray2[2],
    a = _getRgbArray2[3];
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
};

// 由 rgb 通道值（0-255）构造Color对象
var colorFromRgb = function colorFromRgb(r, g, b) {
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  return new colorjs_io__WEBPACK_IMPORTED_MODULE_2__["default"]('srgb', [r / 255, g / 255, b / 255], alpha);
};

// 由 hsl 通道值（h: 0-360，s/l: 0-100）构造Color对象
// 注意 colorjs.io 的 hsl 空间通道值与 to('hsl').coords 同量纲（h: 0-360，s/l: 0-100），只有 srgb 是 0-1
var colorFromHsl = function colorFromHsl(h, s, l) {
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  return new colorjs_io__WEBPACK_IMPORTED_MODULE_2__["default"]('hsl', [h, s, l], alpha);
};

// 输出 css 色值，统一成 rgb()/rgba() 形式（避免输出 hsl/lab 等老 webview 兼容风险更高的写法）
var colorToCssString = function colorToCssString(color) {
  var _getRgbArray3 = getRgbArray(color),
    _getRgbArray4 = _slicedToArray(_getRgbArray3, 4),
    r = _getRgbArray4[0],
    g = _getRgbArray4[1],
    b = _getRgbArray4[2],
    a = _getRgbArray4[3];
  // 通道取整；透明度保留 3 位小数（很小的透明度如 0.004 不能被舍成 0）
  var roundAlpha = function roundAlpha(value) {
    return Math.round(value * 1000) / 1000;
  };
  return a >= 1 ? "rgb(".concat(Math.round(r), ", ").concat(Math.round(g), ", ").concat(Math.round(b), ")") : "rgba(".concat(Math.round(r), ", ").concat(Math.round(g), ", ").concat(Math.round(b), ", ").concat(roundAlpha(a), ")");
};

// 输出 hex 色值：不透明（alpha = 1）时返回 6 位 #RRGGBB，带透明度时返回 8 位 #RRGGBBAA
// 旧实现的 .hex() 恒定忽略透明度（只出 6 位），这里把透明度也支持上，便于后续拓展到带透明度的场景；
// 当前使用场景（config 里的默认色）透明度恒为 1，因此实际输出与旧实现一致
var colorToHex = function colorToHex(color) {
  var _getRgbArray5 = getRgbArray(color),
    _getRgbArray6 = _slicedToArray(_getRgbArray5, 4),
    r = _getRgbArray6[0],
    g = _getRgbArray6[1],
    b = _getRgbArray6[2],
    a = _getRgbArray6[3];
  var hex = function hex(value) {
    return Math.round(value).toString(16).padStart(2, '0');
  };
  var rgbHex = "".concat(hex(r)).concat(hex(g)).concat(hex(b));
  return "#".concat(a >= 1 ? rgbHex : "".concat(rgbHex).concat(hex(a * 255))).toUpperCase();
};

// 按 sass mix 算法混合两个颜色（旧实现里 color 库的 .mix() 就是 port 自 libsass，
// 直接线性插值结果不同），weight 为后一个颜色的权重
var mixSassLike = function mixSassLike(color1, color2, weight) {
  var rgb1 = getRgbArray(color1);
  var rgb2 = getRgbArray(color2);
  var w = 2 * weight - 1;
  var a = rgb2[3] - rgb1[3];
  var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
  var w2 = 1 - w1;
  return colorFromRgb(w1 * rgb2[0] + w2 * rgb1[0], w1 * rgb2[1] + w2 * rgb1[1], w1 * rgb2[2] + w2 * rgb1[2], rgb2[3] * weight + rgb1[3] * (1 - weight));
};

// WCAG 相对亮度
var getRelativeLuminance = function getRelativeLuminance(rgba) {
  var channel = function channel(value) {
    var v = value / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(rgba[0]) + 0.7152 * channel(rgba[1]) + 0.0722 * channel(rgba[2]);
};

// 计算两个颜色的对比度（WCAG）
var getContrast = function getContrast(color1, color2) {
  var luminance1 = getRelativeLuminance(getRgbArray(color1));
  var luminance2 = getRelativeLuminance(getRgbArray(color2));
  return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
};

// 处理颜色，包括清除!important和转换英文定义颜色
var parseColorName = function parseColorName(color) {
  var supportTransparent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return color.replace(_constant__WEBPACK_IMPORTED_MODULE_3__.IMPORTANT_REGEXP, '').replace(COLOR_NAME_REG, function (match) {
    if (!supportTransparent && match === 'transparent') return match; // 如果不支持转换transparent，直接返回transparent

    var color = COLOR_NAME[match.toLowerCase()];
    return "".concat(color.length > 3 ? 'rgba' : 'rgb', "(").concat(color.toString(), ")");
  });
};

// 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
var parseWebkitFillColorAndStrokeColor = function parseWebkitFillColorAndStrokeColor(color) {
  var newValue = parseColorName(color);
  return _constant__WEBPACK_IMPORTED_MODULE_3__.COLOR_REGEXP.test(newValue) ? newValue : '';
};

// 计算混合颜色
var mixColors = function mixColors(colors) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal';
  if (Object.prototype.toString.call(colors) !== '[object Array]') return null;
  var filterColors = colors.filter(function (color) {
    return !!color;
  });
  if (filterColors.length < 1) return null;
  if (filterColors.length === 1) return ColorParser(filterColors[0]);
  var color1 = ColorParser(filterColors.shift() || null);
  var color2 = ColorParser(filterColors.shift() || null);
  while (color2) {
    if (!color1 && color2) {
      // 如果当前色值非法，混入色值合法，则直接使用混入色值
      color1 = color2;
    } else if (!color1 && !color2) {
      // 如果两个色值都非法，则使用下一批色值
      if (filterColors.length === 0) break;
      color1 = ColorParser(filterColors.shift() || null);
    } else if (color1 && color2) {
      // 如果两个色值都合法，执行mix
      color1 = type === 'mix' ? mixSassLike(color1, color2, color2.alpha === null ? 1 : color2.alpha) : colorBlend2Color(color_blend__WEBPACK_IMPORTED_MODULE_1__[type](color2ColorBlend(color1), color2ColorBlend(color2)));
    } // 如果当前色值合法，混入色值非法，无需处理

    if (filterColors.length === 0) break;
    color2 = ColorParser(filterColors.shift() || null);
  }
  return color1 || null;
};

// 根据混合色、背景色和前景色透明度，反推前景色rgba，目前混合模式只支持'normal'
// 混合色与背景色的透明度恒为1，只有入参alpha（前景色自身透明度）可能小于1：
// 混合色是normal混合（取反/限幅）后的结果，背景色来自BGCOLORATTR或defaultDarkBgColor，
// 内部只通过mixColors([不透明底, ...])更新，两者normal混合后都是不透明色
var getFrontColor = function getFrontColor(retColor, bgColor, alpha) {
  var retColorObj = ColorParser(retColor);
  if (!retColorObj) return null;
  var retColorRgb = getRgbArray(retColorObj).slice(0, 3);
  var bgColorObj = Object.prototype.toString.call(bgColor) === '[object Array]' ? mixColors(bgColor) : ColorParser(bgColor);
  if (!bgColorObj) return null;
  var bgColorRgb = getRgbArray(bgColorObj).slice(0, 3);
  var frontColorRgb = retColorRgb.map(function (r, idx) {
    return Math.round(bgColorRgb[idx] + (r - bgColorRgb[idx]) / alpha);
  });

  // 反推值超出[0, 255]：说明在这个前景色透明度下，前景色无论取什么都合成不出混合色（目标色不可达，
  // 常见于alpha < 0.5的半透明前景，此时混合色的可达上限bg + 255 * alpha低于目标色）
  if (frontColorRgb.some(function (rgb) {
    return rgb < 0 || rgb > 255;
  })) return retColorObj; // 无法通过反推得到正确的前景色，返回混合色

  return ColorParser("rgba(".concat(frontColorRgb.join(', '), ", ").concat(alpha, ")"));
};

// 计算感知亮度
var getColorPerceivedBrightness = function getColorPerceivedBrightness(rgba) {
  return (rgba[0] * 299 + rgba[1] * 587 + rgba[2] * 114) / 1000;
};

// 调整为指定感知亮度
var adjustBrightnessTo = function adjustBrightnessTo(target, rgba) {
  target = Math.max(target, 0); // 防御：target 为负会反算出非法颜色（感知亮度最小为0）
  var relativeBrightnessRatio = target / (getColorPerceivedBrightness(rgba) || 1);
  var newTextR = Math.min(255, rgba[0] * relativeBrightnessRatio);
  var newTextG = Math.min(255, rgba[1] * relativeBrightnessRatio);
  var newTextB = Math.min(255, rgba[2] * relativeBrightnessRatio);
  if (newTextG === 0 || newTextR === 255 || newTextB === 255) {
    newTextG = (target * 1000 - newTextR * 299 - newTextB * 114) / 587;
  } else if (newTextR === 0) {
    newTextR = (target * 1000 - newTextG * 587 - newTextB * 114) / 299;
  } else if (newTextB === 0 || newTextG === 255) {
    newTextB = (target * 1000 - newTextR * 299 - newTextG * 587) / 114;
  }
  return colorFromRgb(newTextR, newTextG, newTextB, rgba[3] || 1);
};

/***/ }),

/***/ "./src/modules/config.ts":
/*!*******************************!*\
  !*** ./src/modules/config.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: function() { return /* binding */ addClass; },
/* harmony export */   getAttr: function() { return /* binding */ getAttr; },
/* harmony export */   getClass: function() { return /* binding */ getClass; },
/* harmony export */   getStyle: function() { return /* binding */ getStyle; },
/* harmony export */   removeAttr: function() { return /* binding */ removeAttr; },
/* harmony export */   removeClass: function() { return /* binding */ removeClass; },
/* harmony export */   setAttr: function() { return /* binding */ setAttr; },
/* harmony export */   setClass: function() { return /* binding */ setClass; },
/* harmony export */   setStyle: function() { return /* binding */ setStyle; },
/* harmony export */   trim: function() { return /* binding */ trim; }
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/modules/color.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @name Darkmode配置
 *
 * @attr {boolean}      hasInit                  是否初始化过配置
 * @attr {Function}     begin                    开始处理时触发的回调
 * @attr {Function}     showFirstPage            首屏处理完成时触发的回调
 * @attr {Function}     error                    发生error时触发的回调
 * @attr {string}       mode                     强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
 * @attr {Object}       whitelist                节点白名单
 * @attr {string Array} whitelist.tagName        标签名列表
 * @attr {string Array} whitelist.attribute      属性列表
 * @attr {boolean}      needJudgeFirstPage       是否需要判断首屏
 * @attr {boolean}      delayBgJudge             是否延迟背景判断
 * @attr {boolean}      noEmit                   是否不产出style标签
 * @attr {HTMLElement}  container                延迟运行js时使用的容器
 * @attr {string}       cssSelectorsPrefix       css选择器前缀
 * @attr {string}       defaultLightWebviewColor Light Mode下webview颜色
 * @attr {string}       defaultLightBgColor      Light Mode下背景颜色
 * @attr {string}       defaultLightTextColor    Light Mode下字体颜色
 * @attr {string}       defaultDarkWebviewColor  Dark Mode下webview颜色
 * @attr {string}       defaultDarkBgColor       Dark Mode下背景颜色
 * @attr {string}       defaultDarkTextColor     Dark Mode下字体颜色
 * @attr {Function}     getStyle                 使用自定义的获取样式的方法
 * @attr {Function}     setStyle                 使用自定义的设置样式的方法
 * @attr {Function}     getClass                 使用自定义的获取类的方法
 * @attr {Function}     setClass                 使用自定义的设置类的方法
 * @attr {Function}     getAttr                  使用自定义的获取属性的方法
 * @attr {Function}     setAttr                  使用自定义的设置属性的方法
 *
 * @method set 设置配置
 * @param {ConfigType}   type 配置类型，'boolean' | 'string' | 'function' | 'dom'
 * @param {ConfigOption} opt  传入的配置对象
 * @param {ConfigKey}    key  配置名
 * @return void
 *
 * @method setDefaultColor 设置默认颜色
 * @param {ConfigOption} opt 传入的配置对象
 * @return void
 *
 * @method reset 重置配置
 * @return void
 *
 */

// 常量


// 默认配置（用工厂函数每次返回全新对象，避免 whitelist 等引用类型被 config 共享后遭 init 的 push 污染）
var getDefaultConfig = function getDefaultConfig() {
  return {
    // hooks
    begin: null,
    // 开始处理时触发的回调
    showFirstPage: null,
    // 首屏处理完成时触发的回调
    error: null,
    // 发生error时触发的回调

    mode: '',
    // 强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
    whitelist: {
      // 节点白名单
      tagName: ['MPCPS', 'IFRAME'],
      // 标签名列表
      attribute: [] // 属性列表
    },
    needJudgeFirstPage: true,
    // 是否需要判断首屏
    delayBgJudge: false,
    // 是否延迟背景判断
    noEmit: false,
    // 是否不产出style标签
    container: null,
    // 延迟运行js时使用的容器
    cssSelectorsPrefix: '',
    // css选择器前缀
    defaultLightWebviewColor: _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LIGHT_WEBVIEWCOLOR,
    // Light Mode下webview颜色
    defaultLightBgColor: _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LIGHT_BGCOLOR,
    // Light Mode下背景颜色
    defaultLightTextColor: _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LIGHT_TEXTCOLOR,
    // Light Mode下字体颜色
    defaultDarkWebviewColor: _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DARK_WEBVIEWCOLOR,
    // Dark Mode下webview颜色
    defaultDarkBgColor: _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DARK_BGCOLOR,
    // Dark Mode下背景颜色
    defaultDarkTextColor: _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DARK_TEXTCOLOR,
    // Dark Mode下字体颜色
    getStyle: null,
    // 使用自定义的获取样式的方法
    setStyle: null,
    // 使用自定义的设置样式的方法
    getClass: null,
    // 使用自定义的获取类的方法
    setClass: null,
    // 使用自定义的设置类的方法
    getAttr: null,
    // 使用自定义的获取属性的方法
    setAttr: null // 使用自定义的设置属性的方法
  };
};
var config = _objectSpread(_objectSpread({
  hasInit: false
}, getDefaultConfig()), {}, {
  // 设置配置
  set: function set(type, opt, key) {
    var value = opt[key];
    switch (type) {
      case 'boolean':
        typeof value === 'boolean' && (this[key] = value);
        break;
      case 'string':
        typeof value === 'string' && value !== '' && (this[key] = value);
        break;
      case 'function':
        typeof value === 'function' && (this[key] = value);
        break;
      case 'dom':
        value instanceof HTMLElement && (this[key] = value);
        break;
      default:
    }
  },
  // 设置默认颜色
  setDefaultColor: function setDefaultColor(opt) {
    this.set('string', opt, 'defaultLightWebviewColor');
    this.set('string', opt, 'defaultDarkWebviewColor');
    var newDefaultLightBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([this.defaultLightWebviewColor, opt.defaultLightBgColor || this.defaultLightBgColor]);
    if (newDefaultLightBgColor) this.defaultLightBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToHex)(newDefaultLightBgColor);
    var newDefaultDarkBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([this.defaultDarkWebviewColor, opt.defaultDarkBgColor || this.defaultDarkBgColor]);
    if (newDefaultDarkBgColor) this.defaultDarkBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToHex)(newDefaultDarkBgColor);
    var newDefaultLightTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([this.defaultLightWebviewColor, this.defaultLightBgColor, opt.defaultLightTextColor || this.defaultLightTextColor]);
    if (newDefaultLightTextColor) this.defaultLightTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToHex)(newDefaultLightTextColor);
    var newDefaultDarkTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([this.defaultDarkWebviewColor, this.defaultDarkBgColor, opt.defaultDarkTextColor || this.defaultDarkTextColor]);
    if (newDefaultDarkTextColor) this.defaultDarkTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToHex)(newDefaultDarkTextColor);
  },
  // 重置配置
  reset: function reset() {
    this.hasInit = false;
    Object.assign(this, getDefaultConfig()); // 用全新默认对象覆盖，whitelist 等引用类型不会残留上次 push 的内容
  }
});
var trim = function trim(str) {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
var getStyle = function getStyle(node, prop) {
  return config.getStyle === null ? node.style[prop] : config.getStyle(node, prop);
};
var setStyle = function setStyle(node, styles) {
  if (config.setStyle === null) {
    Object.assign(node.style, styles);
  } else {
    config.setStyle(node, styles);
  }
};

// 获取节点 class。toArray 为 true 时返回按空白分割的数组，否则返回原始字符串

function getClass(node) {
  var _node$classList;
  var toArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var className = config.getClass === null ? ((_node$classList = node.classList) === null || _node$classList === void 0 ? void 0 : _node$classList.toString()) || '' : config.getClass(node);
  return toArray ? className.split(/\s+/) : className;
}
var setClass = function setClass(node, className) {
  if (config.setClass === null) {
    node.setAttribute('class', className);
  } else {
    config.setClass(node, trim(className));
  }
};
var filterClass = function filterClass(node, className) {
  return getClass(node, true).filter(function (cls) {
    return cls && cls !== className;
  });
};
var addClass = function addClass(node, className) {
  if (config.setClass === null) {
    node.classList.add(className);
  } else {
    config.setClass(node, [].concat(_toConsumableArray(filterClass(node, className)), [className]).join(' '));
  }
};
var removeClass = function removeClass(node, className) {
  if (config.setClass === null) {
    node.classList.remove(className);
  } else {
    config.setClass(node, filterClass(node, className).join(' '));
  }
};
var getAttr = function getAttr(node, attr) {
  return config.getAttr === null ? node[attr] : config.getAttr(node, attr);
};
var setAttr = function setAttr(node, attr, value) {
  if (config.setAttr === null) {
    node[attr] = value;
  } else {
    config.setAttr(node, attr, value);
  }
};
var removeAttr = function removeAttr(node, attr) {
  if (config.setAttr === null) {
    delete node[attr];
  } else {
    config.setAttr(node, attr, null);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/modules/constant.ts":
/*!*********************************!*\
  !*** ./src/modules/constant.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BGCOLORATTR: function() { return /* binding */ BGCOLORATTR; },
/* harmony export */   BGGRADIENT_MIXCOLORATTR: function() { return /* binding */ BGGRADIENT_MIXCOLORATTR; },
/* harmony export */   BGIMAGEATTR: function() { return /* binding */ BGIMAGEATTR; },
/* harmony export */   CLASS_PREFIX: function() { return /* binding */ CLASS_PREFIX; },
/* harmony export */   COLORATTR: function() { return /* binding */ COLORATTR; },
/* harmony export */   COLOR_REGEXP: function() { return /* binding */ COLOR_REGEXP; },
/* harmony export */   COLOR_REGEXP_GLOBAL: function() { return /* binding */ COLOR_REGEXP_GLOBAL; },
/* harmony export */   COMPLEMENTARY_BGIMAGECOLORATTR: function() { return /* binding */ COMPLEMENTARY_BGIMAGECOLORATTR; },
/* harmony export */   CSS_PROP_LIST: function() { return /* binding */ CSS_PROP_LIST; },
/* harmony export */   CSS_PROP_SERIES: function() { return /* binding */ CSS_PROP_SERIES; },
/* harmony export */   DEFAULT_DARK_BGCOLOR: function() { return /* binding */ DEFAULT_DARK_BGCOLOR; },
/* harmony export */   DEFAULT_DARK_TEXTCOLOR: function() { return /* binding */ DEFAULT_DARK_TEXTCOLOR; },
/* harmony export */   DEFAULT_DARK_WEBVIEWCOLOR: function() { return /* binding */ DEFAULT_DARK_WEBVIEWCOLOR; },
/* harmony export */   DEFAULT_LIGHT_BGCOLOR: function() { return /* binding */ DEFAULT_LIGHT_BGCOLOR; },
/* harmony export */   DEFAULT_LIGHT_TEXTCOLOR: function() { return /* binding */ DEFAULT_LIGHT_TEXTCOLOR; },
/* harmony export */   DEFAULT_LIGHT_WEBVIEWCOLOR: function() { return /* binding */ DEFAULT_LIGHT_WEBVIEWCOLOR; },
/* harmony export */   DM_CLASSNAME_REGEXP: function() { return /* binding */ DM_CLASSNAME_REGEXP; },
/* harmony export */   HIGH_BGCOLOR_BRIGHTNESS: function() { return /* binding */ HIGH_BGCOLOR_BRIGHTNESS; },
/* harmony export */   HIGH_BLACKWHITE_HSL_BRIGHTNESS: function() { return /* binding */ HIGH_BLACKWHITE_HSL_BRIGHTNESS; },
/* harmony export */   HTML_CLASS: function() { return /* binding */ HTML_CLASS; },
/* harmony export */   IGNORE_ALPHA: function() { return /* binding */ IGNORE_ALPHA; },
/* harmony export */   IMPORTANT_REGEXP: function() { return /* binding */ IMPORTANT_REGEXP; },
/* harmony export */   LOW_BLACKWHITE_HSL_BRIGHTNESS: function() { return /* binding */ LOW_BLACKWHITE_HSL_BRIGHTNESS; },
/* harmony export */   MAX_LIMIT_BGCOLOR_BRIGHTNESS: function() { return /* binding */ MAX_LIMIT_BGCOLOR_BRIGHTNESS; },
/* harmony export */   MEDIA_QUERY: function() { return /* binding */ MEDIA_QUERY; },
/* harmony export */   MIN_LIMIT_OFFSET_BRIGHTNESS: function() { return /* binding */ MIN_LIMIT_OFFSET_BRIGHTNESS; },
/* harmony export */   ORIGINAL_BGCOLORATTR: function() { return /* binding */ ORIGINAL_BGCOLORATTR; },
/* harmony export */   ORIGINAL_COLORATTR: function() { return /* binding */ ORIGINAL_COLORATTR; },
/* harmony export */   PAGE_HEIGHT: function() { return /* binding */ PAGE_HEIGHT; },
/* harmony export */   PLUGIN_PAGE_STYLE_ATTR: function() { return /* binding */ PLUGIN_PAGE_STYLE_ATTR; },
/* harmony export */   SEMICOLON_PLACEHOLDER: function() { return /* binding */ SEMICOLON_PLACEHOLDER; },
/* harmony export */   SEMICOLON_PLACEHOLDER_REGEXP: function() { return /* binding */ SEMICOLON_PLACEHOLDER_REGEXP; },
/* harmony export */   STYLE_ID: function() { return /* binding */ STYLE_ID; },
/* harmony export */   TABLE_NAME: function() { return /* binding */ TABLE_NAME; },
/* harmony export */   URL_REGEXP: function() { return /* binding */ URL_REGEXP; },
/* harmony export */   VALIDATE_IGNORE_RULES: function() { return /* binding */ VALIDATE_IGNORE_RULES; },
/* harmony export */   WHITE_LIKE_COLOR_BRIGHTNESS: function() { return /* binding */ WHITE_LIKE_COLOR_BRIGHTNESS; }
/* harmony export */ });
var _window$getInnerHeigh, _window;
/**
 * @name 常量
 *
 */

var RANDOM = "".concat(new Date().getTime()).concat(Math.floor(Math.random() * 10000)); // 生成个随机数，格式为时间戳+随机数

var MEDIA_QUERY = '(prefers-color-scheme: dark)'; // Dark Mode的CSS媒体查询

var CLASS_PREFIX = 'js_darkmode__'; // Dark Mode class前缀
var DM_CLASSNAME_REGEXP = new RegExp("".concat(CLASS_PREFIX, "\\d+"));
var STYLE_ID = "js_darkmode_style__".concat(RANDOM); // Dark Mode 样式表id
var HTML_CLASS = 'data_color_scheme_dark'; // 强制设置暗黑模式时给html加的class

var COLORATTR = "data-darkmode-color-".concat(RANDOM); // dm color，即算法生成的已mix新色值
var BGCOLORATTR = "data-darkmode-bgcolor-".concat(RANDOM); // dm bg-color，即算法生成的已mix新色值
var ORIGINAL_COLORATTR = "data-darkmode-original-color-".concat(RANDOM); // lm color，即原色值
var ORIGINAL_BGCOLORATTR = "data-darkmode-original-bgcolor-".concat(RANDOM); // lm bg-color，即原色值
var BGIMAGEATTR = "data-darkmode-bgimage-".concat(RANDOM); // 是否有背景图片的标记
var BGGRADIENT_MIXCOLORATTR = "data-darkmode-bggradient-mix-color-".concat(RANDOM); // 背景渐变进行mix混合后的色值
var COMPLEMENTARY_BGIMAGECOLORATTR = "data-darkmode-complementary-bgimagecolor-".concat(RANDOM); // 背景图片的补色色值

var DEFAULT_LIGHT_WEBVIEWCOLOR = '#fff'; // Light Mode下webView颜色
var DEFAULT_LIGHT_BGCOLOR = '#fff'; // Light Mode下背景颜色
var DEFAULT_LIGHT_TEXTCOLOR = '#191919'; // Light Mode下字体颜色
var DEFAULT_DARK_WEBVIEWCOLOR = '#191919'; // Dark Mode下webView颜色
var DEFAULT_DARK_BGCOLOR = '#191919'; // Dark Mode下背景颜色
var DEFAULT_DARK_TEXTCOLOR = 'rgba(255,255,255,0.6)'; // Dark Mode下字体颜色

var WHITE_LIKE_COLOR_BRIGHTNESS = 250; // 接近白色的感知亮度阈值
var MAX_LIMIT_BGCOLOR_BRIGHTNESS = 190;
var MIN_LIMIT_OFFSET_BRIGHTNESS = 65;
var HIGH_BGCOLOR_BRIGHTNESS = 100;
var HIGH_BLACKWHITE_HSL_BRIGHTNESS = 40;
var LOW_BLACKWHITE_HSL_BRIGHTNESS = 22;
var IGNORE_ALPHA = 0.05; // 忽略的透明度阈值

var PAGE_HEIGHT = ((_window$getInnerHeigh = (_window = window).getInnerHeight) === null || _window$getInnerHeigh === void 0 ? void 0 : _window$getInnerHeigh.call(_window)) || window.innerHeight || document.documentElement.clientHeight;
var CSS_PROP_SERIES = {
  // 支持的css属性，按类型做分类
  BG_COLOR: ['background-color', 'background-image', 'background'],
  TEXT_SHADOW: ['text-shadow'],
  TEXT_COLOR: ['-webkit-text-stroke', '-webkit-text-stroke-color', 'text-decoration', 'text-decoration-color', 'text-emphasis-color', 'color', '-webkit-text-fill-color'],
  BORDER_COLOR: ['border-image', '-webkit-border-image', 'border', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'border-block-color', 'border-block-start-color', 'border-block-end-color', 'border-inline-color', 'border-inline-start-color', 'border-inline-end-color', 'outline', 'outline-color', 'box-shadow',
  // TODO: 不知道为啥之前没处理，后面需要留意下
  'column-rule', 'column-rule-color']
  // SVG_COLOR: [ // TODO: SVG后面再处理
  //   'fill',
  //   'stroke',
  //   'stop-color',
  //   'flood-color',
  //   'lighting-color',
  // ],
  // FILTER: [ // TODO: filter后面再考虑要不要处理
  //   'filter'
  // ],
};
var CSS_PROP_LIST = Object.keys(CSS_PROP_SERIES).map(function (key) {
  return CSS_PROP_SERIES[key].join('|');
}).join('|').split('|'); // 支持的css属性平铺列表
var TABLE_NAME = ['TABLE', 'TR', 'TD', 'TH']; // 支持bgcolor属性的table标签列表

var IMPORTANT_REGEXP = / !important$/; // !important

var SEMICOLON_PLACEHOLDER = '<$#_SEMICOLON_#$>'; // 分号占位符
var SEMICOLON_PLACEHOLDER_REGEXP = /<\$#_SEMICOLON_#\$>/g;
var COLOR_REGEXP_STR = '\\b((rgba?)|((ok)?lch)|((ok)?lab)|(color))\\([^)]+\\)';
var COLOR_REGEXP = new RegExp(COLOR_REGEXP_STR, 'i');
var COLOR_REGEXP_GLOBAL = new RegExp(COLOR_REGEXP_STR, 'ig');
var URL_REGEXP = /url\([^)]*\)/i;
var PLUGIN_PAGE_STYLE_ATTR = /*#__PURE__*/function (PLUGIN_PAGE_STYLE_ATTR) {
  // 插件页面样式属性
  PLUGIN_PAGE_STYLE_ATTR["FIRST_PAGE_STYLE"] = "firstPageStyle";
  // 首屏样式
  PLUGIN_PAGE_STYLE_ATTR["OTHER_PAGE_STYLE"] = "otherPageStyle";
  // 非首屏样式
  PLUGIN_PAGE_STYLE_ATTR["FIRST_PAGE_STYLE_NO_MQ"] = "firstPageStyleNoMQ";
  // 首屏样式（不需要加媒体查询）
  PLUGIN_PAGE_STYLE_ATTR["OTHER_PAGE_STYLE_NO_MQ"] = "otherPageStyleNoMQ"; // 非首屏样式（不需要加媒体查询）
  return PLUGIN_PAGE_STYLE_ATTR;
}({});
;
var VALIDATE_IGNORE_RULES = /*#__PURE__*/function (VALIDATE_IGNORE_RULES) {
  // 校验忽略规则
  VALIDATE_IGNORE_RULES["LOW_CONTRAST"] = "low-contrast";
  // 忽略低对比度
  VALIDATE_IGNORE_RULES["TEXT_BG_GRADIENT"] = "text-bg-gradient"; // 忽略文字背景渐变
  return VALIDATE_IGNORE_RULES;
}({});
;

/***/ }),

/***/ "./src/modules/cssUtils.ts":
/*!*********************************!*\
  !*** ./src/modules/cssUtils.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CssUtils; }
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/modules/global.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _CssUtilsPrivateAttr$, _CssUtilsPrivateAttr$2;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @name 样式相关操作工具对象
 *
 * @class CssUtils
 *
 * @attr {boolean} isFinish 是否运行过Dark Mode处理逻辑（写入过非首屏样式表则表示已运行过）
 *
 * @method genCssKV 生成css键值对
 * @param {string} key css属性
 * @param {string} val css值
 * @return {string} css键值对
 *
 * @method genCss 生成css，包括css选择器
 * @param {string} className DOM节点类名
 * @param {string} cssKV     css键值对
 * @return {string} css
 *
 * @method addCss 加入css
 * @param {string}  css                      css样式
 * @param {boolean} [isFirstPageStyle=false] 是否首屏样式
 * @return void
 *
 * @method writeStyle 写入样式表
 * @param {boolean} [isFirstPageStyle=false] 是否首屏样式
 * @return void
 *
 * @method watch 监听生成css键值对
 * @param {string} key  css属性
 * @param {Function} cb 回调函数
 * @return void
 *
 * @method unwatch 取消监听生成css键值对
 * @param {string} key css属性
 * @return void
 *
 * @method reset 移除已写入的样式表
 * @return void
 *
 */

// 常量


// Darkmode配置


var CssUtilsPrivateAttr = /*#__PURE__*/function (CssUtilsPrivateAttr) {
  CssUtilsPrivateAttr["FIRST_PAGE_STYLE"] = "_firstPageStyle";
  CssUtilsPrivateAttr["OTHER_PAGE_STYLE"] = "_otherPageStyle";
  return CssUtilsPrivateAttr;
}(CssUtilsPrivateAttr || {});
_CssUtilsPrivateAttr$ = CssUtilsPrivateAttr.FIRST_PAGE_STYLE;
_CssUtilsPrivateAttr$2 = CssUtilsPrivateAttr.OTHER_PAGE_STYLE;
var CssUtils = /*#__PURE__*/function () {
  // 是否运行过Dark Mode处理逻辑（写入过非首屏样式表则表示已运行过）

  function CssUtils() {
    _classCallCheck(this, CssUtils);
    _defineProperty(this, _CssUtilsPrivateAttr$, '');
    // 首屏样式
    _defineProperty(this, _CssUtilsPrivateAttr$2, '');
    // 非首屏样式
    _defineProperty(this, "_watcher", {});
    // 监听器，用于监听生成css键值对
    _defineProperty(this, "_styleIdx", 0);
    // 样式表索引值
    _defineProperty(this, "isFinish", false);
  }

  // 生成css键值对
  return _createClass(CssUtils, [{
    key: "genCssKV",
    value: function genCssKV(key, val) {
      var _this$_watcher$key, _this$_watcher;
      (_this$_watcher$key = (_this$_watcher = this._watcher)[key]) === null || _this$_watcher$key === void 0 || _this$_watcher$key.call(_this$_watcher);
      return "".concat(key, ": ").concat(val, " !important;");
    }

    // 生成css，包括css选择器
  }, {
    key: "genCss",
    value: function genCss(className, cssKV) {
      return "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].mode === 'dark' ? "html.".concat(_constant__WEBPACK_IMPORTED_MODULE_0__.HTML_CLASS, " ") : '').concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].cssSelectorsPrefix && "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].cssSelectorsPrefix, " "), ".").concat(className, "{").concat(cssKV, "}");
    }

    // 加入css
  }, {
    key: "addCss",
    value: function addCss(css) {
      var isFirstPageStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this[isFirstPageStyle ? CssUtilsPrivateAttr.FIRST_PAGE_STYLE : CssUtilsPrivateAttr.OTHER_PAGE_STYLE] += css;
      _global__WEBPACK_IMPORTED_MODULE_2__.plugins.addCss(isFirstPageStyle);
    }

    // 写入样式表
  }, {
    key: "writeStyle",
    value: function writeStyle() {
      var isFirstPageStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      !isFirstPageStyle && _global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode && (this.isFinish = true); // 在Dark Mode下一旦写入了非首屏样式表，则认为已经运行过Dark Mode处理逻辑

      // 获取样式表内容
      var styles = [].concat(_toConsumableArray(_global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode ? [{
        target: this,
        key: [CssUtilsPrivateAttr.FIRST_PAGE_STYLE, CssUtilsPrivateAttr.OTHER_PAGE_STYLE],
        needMediaQuery: true
      }] : []), [{
        target: _global__WEBPACK_IMPORTED_MODULE_2__.plugins,
        key: [_constant__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE, _constant__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE],
        needMediaQuery: true
      }, {
        target: _global__WEBPACK_IMPORTED_MODULE_2__.plugins,
        key: [_constant__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE_NO_MQ, _constant__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE_NO_MQ],
        needMediaQuery: false
      }]).map(function (_ref) {
        var target = _ref.target,
          _ref$key = _slicedToArray(_ref.key, 2),
          first = _ref$key[0],
          other = _ref$key[1],
          needMediaQuery = _ref.needMediaQuery;
        var style = '';
        if (!isFirstPageStyle) {
          // 如果是写入非首屏样式表，则连同首屏样式一起写入
          if (target instanceof CssUtils) {
            style = target[other] = target[first] + target[other];
            // 清空内存中的数据
            target[first] = '';
            target[other] = '';
          } else {
            style = target[other] = target[first] + target[other];
            // 清空内存中的数据
            target[first] = '';
            target[other] = '';
          }
        } else {
          if (target instanceof CssUtils) {
            style = target[first];
            // 清空内存中的数据
            target[first] = '';
          } else {
            style = target[first];
            // 清空内存中的数据
            target[first] = '';
          }
        }
        if (style) return _config__WEBPACK_IMPORTED_MODULE_1__["default"].mode === 'dark' || !needMediaQuery ? style : "@media ".concat(_constant__WEBPACK_IMPORTED_MODULE_0__.MEDIA_QUERY, " {").concat(style, "}");
        return '';
      }).join('');

      // 写入样式表
      styles && !_config__WEBPACK_IMPORTED_MODULE_1__["default"].noEmit && document.head.insertAdjacentHTML('beforeend', "<style id=\"".concat(_constant__WEBPACK_IMPORTED_MODULE_0__.STYLE_ID, "_").concat(this._styleIdx++, "\" type=\"text/css\">").concat(styles, "</style>"));
    }

    // 监听生成css键值对
  }, {
    key: "watch",
    value: function watch(key, cb) {
      this._watcher[key] = cb;
    }

    // 取消监听生成css键值对
  }, {
    key: "unwatch",
    value: function unwatch(key) {
      delete this._watcher[key];
    }

    // 移除已写入的样式表
  }, {
    key: "reset",
    value: function reset() {
      for (var i = 0; i < this._styleIdx; i++) {
        var _style$parentNode;
        var style = document.getElementById("".concat(_constant__WEBPACK_IMPORTED_MODULE_0__.STYLE_ID, "_").concat(i));
        style === null || style === void 0 || (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style);
      }
      this.isFinish = false;
      this._styleIdx = 0;
    }
  }]);
}();

;

/***/ }),

/***/ "./src/modules/domUtils.ts":
/*!*********************************!*\
  !*** ./src/modules/domUtils.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomUtils: function() { return /* binding */ DomUtils; },
/* harmony export */   getChildrenAndIt: function() { return /* binding */ getChildrenAndIt; },
/* harmony export */   hasTableClass: function() { return /* binding */ hasTableClass; },
/* harmony export */   hasTextNode: function() { return /* binding */ hasTextNode; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/modules/global.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @name 节点相关操作工具API
 *
 * @function getChildrenAndIt 获取某个节点及它的所有子节点
 * @param {HTMLElement} el 节点对象
 * @param {boolean} exceptIt 是否排除自身
 * @return {HTMLElement[]} 节点对象列表
 *
 * @function hasTextNode 判断某个节点里是否包含文字节点
 * @param {HTMLElement} el 节点对象
 * @return {boolean} 判断结果
 *
 * @function hasTableClass 判断table相关元素有没有指定class
 * @param {HTMLElement} el 节点对象
 * @return {string | null} 判断结果，如果有，返回class对应的lm色值，否则返回null
 *
 */

// Darkmode配置



// 获取某个节点及它的所有子节点
function getChildrenAndIt(el) {
  var exceptIt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (exceptIt ? [] : [el]).concat(Array.from(el.querySelectorAll('*')));
}
;

// 判断某个节点里是否包含文字节点
function hasTextNode(el) {
  // let cnt = '';
  // Array.prototype.forEach.call(el.childNodes, child => {
  //   if (child.nodeType === 3) {
  //     cnt += child.nodeValue.replace(/\s/g, ''); // 不考虑空白字符
  //   }
  // });
  // return cnt.length > 0;
  return (el.textContent || '').replace(/\s/g, '').length > 0;
}
;

// table的内部样式类对应的lm背景色
var tableClassObj = {
  'ue-table-interlace-color-single': '#fcfcfc',
  'ue-table-interlace-color-double': '#f7faff'
};
// 判断table相关元素有没有指定class
function hasTableClass(el) {
  var color = null;
  (0,_config__WEBPACK_IMPORTED_MODULE_0__.getClass)(el, true).some(function (className) {
    if (tableClassObj.hasOwnProperty(className)) {
      color = tableClassObj[className];
      return true;
    }
    return false;
  });
  return color;
}
;

/**
 * @name 节点相关操作工具对象
 *
 * @class DomUtils
 *
 * @attr {number} length 要处理的节点列表长度
 * @attr {boolean} showFirstPage 是否已显示首屏
 *
 * @method set 设置要处理的节点列表
 * @param {HTMLElement[]} [els=[]] 要处理的节点列表
 * @return void
 *
 * @method get 获取要处理的节点列表（包含延迟节点、容器节点等逻辑）
 * @return {HTMLElement[]} 要处理的节点列表
 *
 * @method delay 将所有要处理的节点转移到延迟处理队列里
 * @return void
 *
 * @method hasDelay 判断是否包含延迟处理的节点
 * @return {boolean} 判断结果
 *
 * @method addFirstPageNode 添加首屏节点
 * @param {HTMLElement} el 要添加的首屏节点
 * @return void
 *
 * @method showFirstPageNodes 显示所有首屏节点
 * @return void
 *
 * @method emptyFirstPageNodes 清空记录的首屏节点
 * @return void
 *
 * @method reset 重置
 * @return void
 *
 */

var DomUtils = /*#__PURE__*/function () {
  // 是否已显示首屏

  function DomUtils() {
    _classCallCheck(this, DomUtils);
    _defineProperty(this, "_els", []);
    // 要处理的节点列表
    _defineProperty(this, "_firstPageEls", []);
    // 首屏节点列表
    _defineProperty(this, "_delayEls", []);
    // 延迟处理的节点列表
    _defineProperty(this, "showFirstPage", false);
  }

  // 要处理的节点列表长度
  return _createClass(DomUtils, [{
    key: "length",
    get: function get() {
      return this._els.length;
    }

    // 设置要处理的节点列表
  }, {
    key: "set",
    value: function set() {
      var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this._els = els;
    }

    // 获取要处理的节点列表（包含延迟节点、容器节点等逻辑）
  }, {
    key: "get",
    value: function get() {
      var res = [];
      if (this._els.length) {
        // 有节点
        res = this._els;
        _global__WEBPACK_IMPORTED_MODULE_1__.sdk.isDarkmode && (this._els = []);
      } else {
        // 如果没有节点
        if (this._delayEls.length) {
          // 有延迟节点，则使用延迟节点
          res = this._delayEls;
          this._delayEls = [];
        } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].container) {
          // 没有延迟节点，但有容器，重新获取容器内的节点
          res = Array.from(_config__WEBPACK_IMPORTED_MODULE_0__["default"].container.querySelectorAll('*'));
        }
      }
      return res;
    }

    // 将所有要处理的节点转移到延迟处理队列里
  }, {
    key: "delay",
    value: function delay() {
      var _this = this;
      Array.prototype.forEach.call(this._els, function (el) {
        return _this._delayEls.push(el);
      }); // 转移到延迟处理的节点里
      this._els = []; // 转移后清空列表
    }

    // 判断是否包含延迟处理的节点
  }, {
    key: "hasDelay",
    value: function hasDelay() {
      if (this._els.length) return false; // 有节点，即不含延迟处理的节点
      return this._delayEls.length > 0 || _config__WEBPACK_IMPORTED_MODULE_0__["default"].container !== null; // 否则需要判断延迟节点的列表和容器
    }

    // 添加首屏节点
  }, {
    key: "addFirstPageNode",
    value: function addFirstPageNode(el) {
      this._firstPageEls.push(el);
    }

    // 显示所有首屏节点
  }, {
    key: "showFirstPageNodes",
    value: function showFirstPageNodes() {
      this._firstPageEls.forEach(function (el) {
        // 显示首屏节点
        !(0,_config__WEBPACK_IMPORTED_MODULE_0__.getStyle)(el, 'visibility') && (0,_config__WEBPACK_IMPORTED_MODULE_0__.setStyle)(el, {
          visibility: 'visible'
        });
      });
      this.showFirstPage = true; // 记录为已显示首屏
    }

    // 清空记录的首屏节点
  }, {
    key: "emptyFirstPageNodes",
    value: function emptyFirstPageNodes() {
      this._firstPageEls = [];
    }

    // 重置
  }, {
    key: "reset",
    value: function reset() {
      this._els = [];
      this._firstPageEls = [];
      this._delayEls = [];
      this.showFirstPage = false;
    }
  }]);
}();
;

/***/ }),

/***/ "./src/modules/global.ts":
/*!*******************************!*\
  !*** ./src/modules/global.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bgStack: function() { return /* binding */ bgStack; },
/* harmony export */   cssUtils: function() { return /* binding */ cssUtils; },
/* harmony export */   domUtils: function() { return /* binding */ domUtils; },
/* harmony export */   plugins: function() { return /* binding */ plugins; },
/* harmony export */   sdk: function() { return /* binding */ sdk; },
/* harmony export */   tnQueue: function() { return /* binding */ tnQueue; },
/* harmony export */   validator: function() { return /* reexport module object */ _validator__WEBPACK_IMPORTED_MODULE_7__; }
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "./src/modules/plugins.ts");
/* harmony import */ var _textNodeQueue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textNodeQueue */ "./src/modules/textNodeQueue.ts");
/* harmony import */ var _bgNodeStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bgNodeStack */ "./src/modules/bgNodeStack.ts");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cssUtils */ "./src/modules/cssUtils.ts");
/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUtils */ "./src/modules/domUtils.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sdk */ "./src/modules/sdk.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validator */ "./src/modules/validator.ts");
/**
 * @name 全局作用域
 *
 */

// 常量


// 插件系统

var plugins = new _plugins__WEBPACK_IMPORTED_MODULE_1__["default"]();

// 文本节点队列

var tnQueue = new _textNodeQueue__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(_constant__WEBPACK_IMPORTED_MODULE_0__.CLASS_PREFIX, "text__"));

// 需要判断位置的背景节点堆栈

var bgStack = new _bgNodeStack__WEBPACK_IMPORTED_MODULE_3__["default"]("".concat(_constant__WEBPACK_IMPORTED_MODULE_0__.CLASS_PREFIX, "bg__"));

// 样式相关操作工具对象

var cssUtils = new _cssUtils__WEBPACK_IMPORTED_MODULE_4__["default"]();

// 节点相关操作工具对象

var domUtils = new _domUtils__WEBPACK_IMPORTED_MODULE_5__.DomUtils();

// sdk

var sdk = new _sdk__WEBPACK_IMPORTED_MODULE_6__["default"]();

// 校验器



/***/ }),

/***/ "./src/modules/plugins.ts":
/*!********************************!*\
  !*** ./src/modules/plugins.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Plugins; }
/* harmony export */ });
/* harmony import */ var _darkmode_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../darkmode.d */ "./src/darkmode.d.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/modules/global.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _PLUGIN_PAGE_STYLE_AT, _PLUGIN_PAGE_STYLE_AT2, _PLUGIN_PAGE_STYLE_AT3, _PLUGIN_PAGE_STYLE_AT4;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * @name 插件基类
 *
 * @class Plugin
 *
 * @attr {number}  loopTimes  已遍历次数（全部节点遍历结束算一次）
 * @attr {boolean} isDarkmode 是否为Dark Mode
 *
 * @method addCss 添加样式
 * @param {string}   className             DOM节点类名
 * @param {KvList[]} kvList                css键值对列表
 * @param {string}   kvList[0].key         css属性
 * @param {string}   kvList[0].value       css值
 * @param {boolean}  [needMediaQuery=true] 是否需要添加Dark Mode媒体查询
 * @return void
 *
 */



// 常量


var cssNeedMQ = [];
var cssNoMQ = [];
var Plugin = /*#__PURE__*/function (_PluginBaseAbstract) {
  function Plugin() {
    _classCallCheck(this, Plugin);
    return _callSuper(this, Plugin);
  }

  // 遍历次数（全部节点遍历结束算一次）
  _inherits(Plugin, _PluginBaseAbstract);
  return _createClass(Plugin, [{
    key: "loopTimes",
    get: function get() {
      return _global__WEBPACK_IMPORTED_MODULE_2__.plugins.loopTimes;
    }

    // 是否为Dark Mode
  }, {
    key: "isDarkmode",
    get: function get() {
      return _global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode;
    }

    // 添加样式
  }, {
    key: "addCss",
    value: function addCss(className, kvList) {
      var needMediaQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      (needMediaQuery ? cssNeedMQ : cssNoMQ).push(_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.genCss(className, kvList.map(function (_ref) {
        var key = _ref.key,
          value = _ref.value;
        return _global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.genCssKV(key, value);
      }).join('')));
    }
  }]);
}(_darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PluginBaseAbstract);
/**
 * @name 插件系统
 *
 * @class Plugins
 *
 * @attr {number} length             已挂载的插件数量
 * @attr {number} loopTimes          已遍历次数（全部节点遍历结束算一次）
 * @attr {string} firstPageStyle     首屏样式
 * @attr {string} otherPageStyle     非首屏样式
 * @attr {string} firstPageStyleNoMQ 首屏样式（不需要加媒体查询）
 * @attr {string} otherPageStyleNoMQ 非首屏样式（不需要加媒体查询）
 *
 * @method extend 挂载插件
 * @param {PluginConstructor} plugin 插件构造函数
 * @return void
 *
 * @method emit 执行插件钩子
 * @param {PLUGIN_HOOK} name 钩子名称
 * @param {any[]}       args 钩子参数
 * @return void
 *
 * @method addCss 写入插件样式
 * @param {boolean} [isFirstPageStyle=false] 是否首屏样式
 * @return void
 *
 * @method resetCss 重置插件样式
 * @return void
 *
 * @method reset 重置
 * @return void
 *
 */
_PLUGIN_PAGE_STYLE_AT = _constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE;
_PLUGIN_PAGE_STYLE_AT2 = _constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE;
_PLUGIN_PAGE_STYLE_AT3 = _constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE_NO_MQ;
_PLUGIN_PAGE_STYLE_AT4 = _constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE_NO_MQ;
var Plugins = /*#__PURE__*/function () {
  function Plugins() {
    _classCallCheck(this, Plugins);
    _defineProperty(this, "_plugins", []);
    // 已挂载的插件列表
    _defineProperty(this, "length", 0);
    // 已挂载的插件数量
    _defineProperty(this, "loopTimes", 0);
    // 已遍历次数（全部节点遍历结束算一次）
    _defineProperty(this, _PLUGIN_PAGE_STYLE_AT, '');
    _defineProperty(this, _PLUGIN_PAGE_STYLE_AT2, '');
    _defineProperty(this, _PLUGIN_PAGE_STYLE_AT3, '');
    _defineProperty(this, _PLUGIN_PAGE_STYLE_AT4, '');
  }

  // 挂载插件
  return _createClass(Plugins, [{
    key: "extend",
    value: function extend(plugin) {
      this._plugins.push(new (plugin(Plugin))());
      this.length++;
    }

    // 执行插件钩子
  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      this._plugins.forEach(function (plugin) {
        var _plugin$name;
        (_plugin$name = plugin[name]) === null || _plugin$name === void 0 || _plugin$name.call.apply(_plugin$name, [plugin].concat(args));
      });
    }

    // 写入插件样式
  }, {
    key: "addCss",
    value: function addCss() {
      var isFirstPageStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (isFirstPageStyle) {
        this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE] += cssNeedMQ.join('');
        this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE_NO_MQ] += cssNoMQ.join('');
      } else {
        this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE] += cssNeedMQ.join('');
        this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE_NO_MQ] += cssNoMQ.join('');
      }
    }

    // 重置插件样式
  }, {
    key: "resetCss",
    value: function resetCss() {
      cssNeedMQ = [];
      cssNoMQ = [];
    }

    // 重置
  }, {
    key: "reset",
    value: function reset() {
      this._plugins = [];
      this.length = 0;
      this.loopTimes = 0;
      this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE] = '';
      this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE] = '';
      this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE_NO_MQ] = '';
      this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE_NO_MQ] = '';
      this.resetCss();
    }
  }]);
}();

;

/***/ }),

/***/ "./src/modules/sdk.ts":
/*!****************************!*\
  !*** ./src/modules/sdk.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SDK; }
/* harmony export */ });
/* harmony import */ var _darkmode_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../darkmode.d */ "./src/darkmode.d.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/modules/color.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global */ "./src/modules/global.ts");
/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUtils */ "./src/modules/domUtils.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @name 算法SDK
 *
 * @class SDK
 *
 * @attr {boolean} isDarkmode 当前是否需要运行Darkmode处理
 *
 * @method init 初始化
 * @return void
 *
 * @method rebuildAncestorExpando 重建祖先节点的expando
 * @param {HTMLElement[]} nodes 要处理的节点
 * @param {HTMLElement} container 要重建的祖先容器
 * @return void
 *
 * @method convert 处理节点
 * @param {HTMLElement} el                要处理的节点
 * @param {CssKV[]}     [cssKVList=[]]    要处理的css属性列表
 * @param {boolean}     [isUpdate=false]  是否更新
 * @param {boolean}     [needReset=false] 是否重置
 * @return {string} 处理后的css，包含css选择器
 *
 * @method adjustBackgroundBrightness 调整背景明度
 * @param {ColorParam} bgColor      要调整的背景颜色
 * @param {ColorParam} bgColorExist 已有的背景颜色
 * @return {ColorInstance | null} 调整后的背景颜色
 *
 * @method adjustTextBrightness 调整文本明度
 * @param {ColorParam}                  textColor 要调整的字体颜色
 * @param {ColorParam}                  bgColor   背景颜色
 * @param {AdjustTextBrightnessOptions} [opt]     调整选项
 * @return {ColorInstance | null} 调整后的字体颜色
 *
 * @method getContrast 获取两个颜色的对比度
 * @param {ColorParam} colorStr1 颜色1
 * @param {ColorParam} colorStr2 颜色2
 * @return {number} 颜色对比度，取值范围为`[1, 21]`
 *
 * @method reset 重置
 * @return void
 *
 */



// 颜色操作相关API


// 常量


// Darkmode配置



// 节点相关操作工具API

var SDK = /*#__PURE__*/function () {
  // 当前是否需要运行Darkmode处理

  function SDK() {
    _classCallCheck(this, SDK);
    _defineProperty(this, "_idx", 0);
    // 索引值
    _defineProperty(this, "_defaultDarkTextColorRgb", [0, 0, 0, 0]);
    _defineProperty(this, "_defaultDarkBgColorRgb", [0, 0, 0, 0]);
    _defineProperty(this, "_defaultDarkBgColorHSL", []);
    _defineProperty(this, "_defaultDarkTextColorBrightness", 0);
    _defineProperty(this, "_defaultDarkBgColorBrightness", 0);
    _defineProperty(this, "_defaultDarkBgColorHslBrightness", 0);
    _defineProperty(this, "_maxLimitOffsetBrightness", 0);
    _defineProperty(this, "_inheritTargets", null);
    // convert 继承传递时的目标白名单（仅 rebuildAncestorExpando 场景使用，null 时走整子树）
    _defineProperty(this, "isDarkmode", false);
  }

  // convert 继承传递（setAttr/removeAttr 给子树）时的目标节点集合
  // 默认（_inheritTargets 为 null）走原逻辑 getChildrenAndIt(el) 覆盖整个子树；
  // rebuildAncestorExpando 场景下限定为 inheritTargets 中 el 的后代（含自身），避免遍历整子树 + 污染旁支。
  return _createClass(SDK, [{
    key: "_inheritNodes",
    value: function _inheritNodes(el) {
      return this._inheritTargets ? this._inheritTargets.filter(function (t) {
        return el.contains(t);
      }) : (0,_domUtils__WEBPACK_IMPORTED_MODULE_5__.getChildrenAndIt)(el);
    }

    // 是否是「黑白灰且亮度需要取反」的颜色
  }, {
    key: "_isInvertGrayColor",
    value: function _isInvertGrayColor(color) {
      var colorInstance = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(color);
      if (!colorInstance) return false;
      var colorHsl = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getHslArray)(colorInstance);
      var colorRgb = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getRgbArray)(colorInstance);
      return colorHsl[1] === 0 && colorHsl[2] > _constant__WEBPACK_IMPORTED_MODULE_2__.HIGH_BLACKWHITE_HSL_BRIGHTNESS || (0,_color__WEBPACK_IMPORTED_MODULE_1__.getColorPerceivedBrightness)(colorRgb) > _constant__WEBPACK_IMPORTED_MODULE_2__.WHITE_LIKE_COLOR_BRIGHTNESS;
    }

    // 调整明度
  }, {
    key: "_adjustBrightness",
    value: function _adjustBrightness(color, el, options) {
      var isUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var needReset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      // 背景：
      // 处理原则：白背景改黑，其他高感知亮度背景调暗，低亮度适当提高亮度（感知亮度：https://www.w3.org/TR/AERT/#color-contrast）
      // 处理方法：
      // 黑白灰色（h=0，s=0）亮度大于HIGH_BLACKWHITE_HSL_BRIGHTNESS时，做取反处理；
      // 感知亮度大于MAX_LIMIT_BGCOLOR_BRIGHTNESS，取MAX_LIMIT_BGCOLOR_BRIGHTNESS；
      // 其他亮度小于LOW_BLACKWHITE_HSL_BRIGHTNESS时，设为LOW_BLACKWHITE_HSL_BRIGHTNESS。

      // 字体、边框：
      // 处理原则：根据调整后的背景颜色和最小亮度差值算出字体颜色，接近白色字体颜色保持不变，带背景图片子元素字体颜色不变
      // 处理方法：亮度小于HIGH_BLACKWHITE_HSL_BRIGHTNESS时，用（90%-该亮度），大于等于HIGH_BLACKWHITE_HSL_BRIGHTNESS则保持不变；

      // 字体阴影
      // 处理方法：按照背景的处理方法来处理

      var newColor = null;
      var extStyle = '';
      if (options.isBgColor) {
        // 背景色
        // 如果有背景颜色，取消背景图片的影响
        if (color.alpha >= _constant__WEBPACK_IMPORTED_MODULE_2__.IGNORE_ALPHA && (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGIMAGEATTR)) {
          this._inheritNodes(el).forEach(function (dom) {
            (0,_config__WEBPACK_IMPORTED_MODULE_3__.removeAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.BGIMAGEATTR);
          });
        }

        // 如果有背景图片补色
        if ((0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.COMPLEMENTARY_BGIMAGECOLORATTR)) {
          // 背景图片补色和当前背景色一致，则无需处理
          // 根据最小可觉差Just-noticeable difference(即JND，表示人类或动物对于某一特定的感官刺激所能察觉的最小改变）和韦伯-费希纳定律，在特定条件下，人类能感知小至 0.5% - 2% 的变化，0.5%换算成对比度为1.1
          // https://zh.wikipedia.org/wiki/%E6%9C%80%E5%B0%8F%E5%8F%AF%E8%A6%BA%E5%B7%AE 最小可觉差wiki
          // https://zh.wikipedia.org/wiki/%E9%9F%8B%E4%BC%AF-%E8%B2%BB%E5%B8%8C%E7%B4%8D%E5%AE%9A%E7%90%86 韦伯-费希纳定理wiki
          if ((0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.COMPLEMENTARY_BGIMAGECOLORATTR) === (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(color) || this.getContrast((0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.COMPLEMENTARY_BGIMAGECOLORATTR), (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(color)) < 1.1) {
            return {
              newColor: needReset ? color : null,
              extStyle: extStyle
            };
          }

          // 否则取消背景图片补色的影响
          this._inheritNodes(el).forEach(function (dom) {
            (0,_config__WEBPACK_IMPORTED_MODULE_3__.removeAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.COMPLEMENTARY_BGIMAGECOLORATTR);
          });
        }
        var bgColor = (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor;
        newColor = this.adjustBackgroundBrightness(color, bgColor);

        // 如果内联样式没有color，使用继承的原字体颜色和当前背景色算出合适的字体颜色
        if (!options.hasInlineColor) {
          var parentElementBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([bgColor, newColor || color]);
          var parentTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)((0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_COLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightTextColor);
          if (parentTextColor) {
            var ret = this._adjustBrightness(parentTextColor, el, {
              isBgColor: false,
              isTextShadow: false,
              isTextColor: true,
              isBorderColor: false,
              hasInlineColor: true,
              parentElementBgColor: parentElementBgColor
            }, isUpdate, needReset);
            extStyle += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV('color', (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(ret.newColor || parentTextColor));

            // 对文字颜色做继承传递，用于文字亮度计算
            this._inheritNodes(el).forEach(function (dom) {
              (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.COLORATTR, (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([parentElementBgColor, ret.newColor || parentTextColor]));
              (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_COLORATTR, parentTextColor);
            });
          }
        }
      } else if (options.isTextColor || options.isBorderColor) {
        // 字体色、边框色
        var _parentElementBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(options.parentElementBgColor || options.isTextColor && (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor);

        // 无背景图片，或背景底色不属于「黑白灰需取反」时才转换（按底色判断，与所在区域的 LM/DM 观感一致）
        if (_parentElementBgColor && (!(0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGIMAGEATTR) || !this._isInvertGrayColor((0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightBgColor))) {
          newColor = this.adjustTextBrightness(color, _parentElementBgColor);
          var afterConvertTextColorHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR;
          if (isUpdate) {
            afterConvertTextColorHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_UPDATE_STYLE;
          } else if (needReset) {
            afterConvertTextColorHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_RESET;
          }
          _global__WEBPACK_IMPORTED_MODULE_4__.plugins.emit(afterConvertTextColorHookName, el, {
            fontColor: newColor,
            bgColor: _parentElementBgColor
          });
        }
      } else if (options.isTextShadow) {
        // 字体阴影，当背景色处理
        // 无背景图片，或阴影色值不属于「黑白灰需取反」时才转换（按阴影自身色值判断，与底色/补色无关）
        if (!(0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGIMAGEATTR) || !this._isInvertGrayColor(color)) {
          newColor = this.adjustBackgroundBrightness(color, (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor);
        }
      }
      return {
        newColor: newColor && (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(color) !== (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(newColor) ? newColor : null,
        extStyle: extStyle
      };
    }

    // 叠加渐变色到背景色中，并更新背景色相关属性值以及文本颜色
    // gradientColor       Light Mode 下的渐变混合色，用于叠加 Light Mode 背景色（ORIGINAL_BGCOLORATTR）
    // dmGradientColor     该渐变实际写进样式的混合色（可能已被转换成 Dark Mode 色，也可能因背景图等原因保持原色），
    //                     用于叠加 Dark Mode 背景色（BGCOLORATTR）。不传时退化为 gradientColor（如 rebuildAncestorExpando 场景）
  }, {
    key: "_updateBgWithGradient",
    value: function _updateBgWithGradient(gradientColor, el, className, cssKVList) {
      var isUpdate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var needReset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var dmGradientColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      // 节点在 Dark Mode 下的真实底色取决于「实际写进样式的渐变色」，而不是 Light Mode 原色：
      // 用原色会把 BGCOLORATTR 记成浅色，导致后代算文字颜色时误判为「浅底上的深色字」而不做转换（黑底黑字）；
      // 反过来，若渐变实际没有被转换成深色（例如节点带背景图时渐变保持原样），用转换后的色又会误判成深底（浅底浅字）。
      var bgColorExist = (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor;
      var newBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([bgColorExist, dmGradientColor || gradientColor]);
      var newOriginalBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([(0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightBgColor, gradientColor]);
      this._inheritNodes(el).forEach(function (dom) {
        (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.BGCOLORATTR, newBgColor);
        (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_BGCOLORATTR, newOriginalBgColor);
      });
      var lastKV = cssKVList.slice(-1)[0];
      if (!lastKV) return ''; // 防御：cssKVList 为空时 lastKV 为 undefined，避免后续取 lastKV[0] 报错
      var color = null;
      var hasInlineColor = _constant__WEBPACK_IMPORTED_MODULE_2__.CSS_PROP_SERIES.TEXT_COLOR.indexOf(lastKV[0]) >= 5;
      if (hasInlineColor) {
        color = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)((0,_color__WEBPACK_IMPORTED_MODULE_1__.parseColorName)(lastKV[1]));
      } else if (el.nodeName === 'FONT') {
        // 如果是font标签且没有内联文本颜色样式
        this._try(function () {
          var colorStr = el.getAttribute('color'); // 获取color的色值
          if (colorStr) {
            // 有色值，则当做内联样式来处理
            var tmpColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(colorStr);
            if (tmpColor) {
              color = tmpColor;
              hasInlineColor = true;
            }
          }
        });
      } else {
        color = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)((0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_COLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightTextColor);
      }
      if (color === null) return '';
      var ret = this._adjustBrightness(color, el, {
        isBgColor: false,
        isTextShadow: false,
        isTextColor: true,
        isBorderColor: false,
        hasInlineColor: hasInlineColor
      }, isUpdate, needReset);
      var newColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([newBgColor, ret.newColor || color]);
      var newOriginColor = color;
      this._inheritNodes(el).forEach(function (dom) {
        (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.COLORATTR, newColor);
        (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_COLORATTR, newOriginColor);
      });
      if (ret.newColor) return _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCss(className, _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV('color', (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(ret.newColor)));
      return '';
    }
  }, {
    key: "_try",
    value: function _try(func) {
      try {
        return func();
      } catch (e) {
        var _config$error;
        console.log('An error occurred when running the dark mode conversion algorithm\n', e);
        (_config$error = _config__WEBPACK_IMPORTED_MODULE_3__["default"].error) === null || _config$error === void 0 || _config$error.call(_config__WEBPACK_IMPORTED_MODULE_3__["default"], e);
      }
    }

    // 初始化
  }, {
    key: "init",
    value: function init() {
      var defaultDarkTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(_config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkTextColor);
      defaultDarkTextColor && (this._defaultDarkTextColorRgb = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getRgbArray)(defaultDarkTextColor));
      var defaultDarkBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(_config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor);
      if (defaultDarkBgColor) {
        this._defaultDarkBgColorRgb = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getRgbArray)(defaultDarkBgColor);
        this._defaultDarkBgColorHSL = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getHslArray)(defaultDarkBgColor);
      }
      this._defaultDarkTextColorBrightness = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getColorPerceivedBrightness)(this._defaultDarkTextColorRgb);
      this._defaultDarkBgColorBrightness = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getColorPerceivedBrightness)(this._defaultDarkBgColorRgb);
      this._defaultDarkBgColorHslBrightness = this._defaultDarkBgColorHSL[2];
      this._maxLimitOffsetBrightness = Math.max(this._defaultDarkTextColorBrightness - this._defaultDarkBgColorBrightness, 0);
    }

    // 重建祖先继承上下文（用于粘贴等增量场景）
    // 片段节点（nodes）已在 container 内，但其继承 expando（背景色/字体色上下文）尚未建立，直接 convert 会用默认底色算错颜色。
    // 做法：从 container 沿 parentElement 向上收集祖先链（到 config.container 为止，否则到根），
    // 以「祖先链 + nodes」为继承目标白名单，自顶向下对每个祖先跑「仅 expando」的 convert——
    // 继承沿祖先链逐级传递、最终到达 nodes，完全复用 convert 的继承逻辑，且不碰 container 子树里的其它旧节点。
    // 背景图补色（COMPLEMENTARY_BGIMAGECOLORATTR）与渐变标记（BGGRADIENT_MIXCOLORATTR）在 onlyExpando 下
    // 改用 DOM 包含关系直接继承，绕开 bgStack 的位置判断（见 convert）。
  }, {
    key: "rebuildAncestorExpando",
    value: function rebuildAncestorExpando(nodes, container) {
      var _this = this;
      if (!nodes || !nodes.length || !container) return;

      // 收集祖先链（含 container 自身），自顶向下排列
      var ancestors = [];
      var cur = container;
      while (cur) {
        ancestors.unshift(cur);
        if (cur === _config__WEBPACK_IMPORTED_MODULE_3__["default"].container) break; // 到达配置的容器即停止向上
        cur = cur.parentElement;
      }

      // 继承目标白名单 = 祖先链 + 片段节点；逐级 convert（仅做 expando 继承传递）
      var inheritTargets = [].concat(ancestors, _toConsumableArray(nodes));
      ancestors.forEach(function (ancestor) {
        return _this.convert(ancestor, [], false, false, true, inheritTargets);
      });
    }

    // 处理节点
    // onlyExpando 为 true 时：仅做 expando 继承传递（setAttr），跳过所有产出副作用
    //   （className/样式生成、bgStack/tnQueue 入栈、setStyle 清 important、插件钩子），用于 rebuildAncestorExpando 补算祖先继承。
    //   其中背景图补色（COMPLEMENTARY_BGIMAGECOLORATTR）与渐变继承/标记（BGGRADIENT_MIXCOLORATTR）原走 bgStack 延迟位置判断，
    //   onlyExpando 下改用 DOM 包含关系（_inheritNodes）直接继承，绕开 getBoundingClientRect。
    //   inheritTargets：继承传递的目标白名单（仅 onlyExpando 场景传入），限定 setAttr/removeAttr 只作用于其中的节点，避免遍历整子树。
  }, {
    key: "convert",
    value: function convert(el) {
      var _this2 = this;
      var cssKVList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var isUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var needReset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var onlyExpando = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var inheritTargets = arguments.length > 5 ? arguments[5] : undefined;
      this._inheritTargets = inheritTargets || null;
      if (!onlyExpando) {
        _global__WEBPACK_IMPORTED_MODULE_4__.plugins.resetCss();
        var beforeConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.BEFORE_CONVERT_NODE;
        if (isUpdate) {
          beforeConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_UPDATE_STYLE;
        } else if (needReset) {
          beforeConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_RESET;
        }
        _global__WEBPACK_IMPORTED_MODULE_4__.plugins.emit(beforeConvertNodeHookName, el);
      }
      var css = ''; // css
      var bgCss = ''; // 文字底图css

      if (this.isDarkmode || isUpdate || needReset || onlyExpando) {
        var nodeName = el.nodeName;
        if (_config__WEBPACK_IMPORTED_MODULE_3__["default"].whitelist.tagName.indexOf(nodeName) > -1) return '';
        if (_config__WEBPACK_IMPORTED_MODULE_3__["default"].whitelist.attribute.some(function (attribute) {
          return el.hasAttribute(attribute);
        })) return '';
        if (cssKVList.length === 0) {
          // 没有传入cssKVList就从内联样式中提取
          // cssText 读出来的颜色统一是rgba格式，除了用英文定义颜色（如：black、white）
          var cssText = (0,_config__WEBPACK_IMPORTED_MODULE_3__.getStyle)(el, 'cssText');
          cssKVList = (cssText && cssText.replace(/("[^;]*);([^;]*")|('[^;]*);([^;]*')/g, "$1$3".concat(_constant__WEBPACK_IMPORTED_MODULE_2__.SEMICOLON_PLACEHOLDER, "$2$4")).split(';') || []).map(function (cssStr) {
            // 将cssStr转换为[key, value]，并清除各个元素的前后空白字符
            var splitIdx = cssStr.indexOf(':');
            return [(0,_config__WEBPACK_IMPORTED_MODULE_3__.trim)(cssStr.slice(0, splitIdx).toLowerCase() || ''), (0,_config__WEBPACK_IMPORTED_MODULE_3__.trim)(cssStr.slice(splitIdx + 1).replace(_constant__WEBPACK_IMPORTED_MODULE_2__.SEMICOLON_PLACEHOLDER_REGEXP, ';') || '')];
          });
        }
        var hasInlineColor = false; // 是否有自定义字体颜色
        var hasInlineBackground = false;
        var hasInlineBackgroundImage = false;
        var elBackgroundPositionAttr = '';
        var elBackgroundSizeAttr = '';
        cssKVList = cssKVList.filter(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          if (key === 'color') {
            hasInlineColor = true;
          } else if (/background/i.test(key)) {
            hasInlineBackground = true;
            if (key === 'background-position') {
              elBackgroundPositionAttr = value;
            } else if (key === 'background-size') {
              elBackgroundSizeAttr = value;
            }
          }
          if ((/background/i.test(key) || /^(-webkit-)?border-image/.test(key)) && _constant__WEBPACK_IMPORTED_MODULE_2__.URL_REGEXP.test(value)) {
            hasInlineBackgroundImage = true;
          }

          // 过滤掉一些key
          return _constant__WEBPACK_IMPORTED_MODULE_2__.CSS_PROP_LIST.indexOf(key) > -1;
        }).sort(function (_ref3, _ref4) {
          var _ref5 = _slicedToArray(_ref3, 1),
            key1 = _ref5[0];
          var _ref6 = _slicedToArray(_ref4, 1),
            key2 = _ref6[0];
          // color属性放在最后
          if (key1 === 'color') {
            return 1;
          } else if (key1 === 'background-image' && key2 === 'background-color') {
            // 确保 background-image 在 background-color 后面
            return 1;
          } else if (key2.indexOf('-webkit-text') === 0) {
            // 把-webkit-text的属性放在最前面
            return 1;
          }
          return -1;
        });
        if (_constant__WEBPACK_IMPORTED_MODULE_2__.TABLE_NAME.indexOf(nodeName) > -1 && !hasInlineBackground) {
          // 如果table没有内联样式
          this._try(function () {
            var colorStr = (0,_domUtils__WEBPACK_IMPORTED_MODULE_5__.hasTableClass)(el); // 获取class对应的lm色值
            if (!colorStr) colorStr = el.getAttribute('bgcolor'); // 如果没有class则获取bgcolor的色值
            if (colorStr) {
              // 有色值（class对应的lm色值或者是bgcolor色值），则当做内联样式来处理
              var color = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(colorStr);
              if (color) {
                cssKVList.unshift(['background-color', (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(color)]);
                hasInlineBackground = true;
              }
            }
          });
        }
        if (nodeName === 'FONT' && !hasInlineColor) {
          // 如果是font标签且没有内联文本颜色样式
          this._try(function () {
            var colorStr = el.getAttribute('color'); // 获取color的色值
            if (colorStr) {
              // 有色值，则当做内联样式来处理
              var color = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(colorStr);
              if (color) {
                cssKVList.push(['color', (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(color)]);
                hasInlineColor = true;
              }
            }
          });
        }

        // 处理-webkit-text相关样式
        var webkitFillColor = '';
        var webkitStrokeColor = '';
        var webkitTextLen = 0;
        cssKVList.some(function (_ref7, idx) {
          var _ref8 = _slicedToArray(_ref7, 2),
            key = _ref8[0],
            value = _ref8[1];
          return _this2._try(function () {
            if (key.indexOf('-webkit-text') !== 0) {
              // 遍历到非-webkit-text样式
              webkitTextLen = idx; // 记录-webkit-text相关样式的长度
              return true; // 结束遍历
            }
            switch (key) {
              case '-webkit-text-fill-color':
                webkitFillColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.parseWebkitFillColorAndStrokeColor)(value);
                break;
              case '-webkit-text-stroke':
                {
                  // 有-webkit-text-stroke时就不会有-webkit-text-stroke-color
                  var newValue = value.split(' ');
                  newValue.length === 2 && (webkitStrokeColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.parseWebkitFillColorAndStrokeColor)(newValue[1]));
                  break;
                }
              case '-webkit-text-stroke-color':
                // 有-webkit-text-stroke-color时就不会有-webkit-text-stroke
                webkitStrokeColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.parseWebkitFillColorAndStrokeColor)(value);
                break;
            }
            return false; // 继续遍历
          });
        });
        if (webkitFillColor) {
          // 有-webkit-text-fill-color，当做color对待
          if (hasInlineColor) {
            // 本来有color，替换为-webkit-text-fill-color
            cssKVList[cssKVList.length - 1] = ['-webkit-text-fill-color', webkitFillColor];
          } else {
            // 没有color，push一个-webkit-text-fill-color
            cssKVList.push(['-webkit-text-fill-color', webkitFillColor]);
            hasInlineColor = true;
          }
        }
        if (webkitTextLen) {
          cssKVList.splice(0, webkitTextLen); // 删掉-webkit-text相关样式
          webkitStrokeColor && cssKVList.unshift(['-webkit-text-stroke-color', webkitStrokeColor]); // 如果有-webkit-text-stroke-color，则插入到最前面
        }
        var dmClassName = '';
        var dmBgClassName = '';
        var elClassName = isUpdate || needReset ? (0,_config__WEBPACK_IMPORTED_MODULE_3__.getClass)(el) : '';
        if (elClassName) {
          // 先提取dm className
          var matches = elClassName.match(_constant__WEBPACK_IMPORTED_MODULE_2__.DM_CLASSNAME_REGEXP);
          if (matches) {
            dmClassName = matches[0];
          }

          // 再提取dm bg className
          matches = elClassName.match(_global__WEBPACK_IMPORTED_MODULE_4__.bgStack.classNameReg);
          if (matches) {
            dmBgClassName = matches[0];
          }
        }
        var cssKV = ''; // css键值对
        var noColor = needReset;
        noColor && _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.watch('color', function () {
          noColor = false;
          _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.unwatch('color');
        });
        cssKVList.forEach(function (_ref9) {
          var _ref0 = _slicedToArray(_ref9, 2),
            key = _ref0[0],
            value = _ref0[1];
          return _this2._try(function () {
            var oldValue = value;
            var cssChange = false;

            // 找出色值来处理
            var isBgColor = _constant__WEBPACK_IMPORTED_MODULE_2__.CSS_PROP_SERIES.BG_COLOR.indexOf(key) > -1;
            var isTextShadow = _constant__WEBPACK_IMPORTED_MODULE_2__.CSS_PROP_SERIES.TEXT_SHADOW.indexOf(key) > -1;
            var textColorIdx = _constant__WEBPACK_IMPORTED_MODULE_2__.CSS_PROP_SERIES.TEXT_COLOR.indexOf(key);
            var isBorderColor = _constant__WEBPACK_IMPORTED_MODULE_2__.CSS_PROP_SERIES.BORDER_COLOR.indexOf(key) > -1;
            var isGradient = /gradient/.test(value);
            var gradientColors = [];
            var extStyle = '';
            var gradientMixColor = null;
            var appliedGradientMixColor = null; // 渐变实际写进样式的混合色

            // 将英文定义颜色转换为rgb格式
            value = (0,_color__WEBPACK_IMPORTED_MODULE_1__.parseColorName)(value, isGradient); // 渐变需要处理透明

            if (_constant__WEBPACK_IMPORTED_MODULE_2__.COLOR_REGEXP.test(value)) {
              if (isGradient) {
                // 把原渐变色取出来
                // COLOR_REGEXP_GLOBAL 带 g 标志，lastIndex 有状态：exec 循环跑完（返回 null）会自动归零，
                // 但循环体或 replace 回调里抛异常（会被 _try 吞掉）、或 convert 重入时，lastIndex 会残留并静默污染后续节点，
                // 因此每次使用前显式重置
                _constant__WEBPACK_IMPORTED_MODULE_2__.COLOR_REGEXP_GLOBAL.lastIndex = 0;
                var _matches = _constant__WEBPACK_IMPORTED_MODULE_2__.COLOR_REGEXP_GLOBAL.exec(value);
                while (_matches) {
                  gradientColors.push(_matches[0]);
                  _matches = _constant__WEBPACK_IMPORTED_MODULE_2__.COLOR_REGEXP_GLOBAL.exec(value);
                }

                // 计算出一个mix颜色
                gradientMixColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)(gradientColors, 'mix');
              }
              var replaceIndex = 0;
              // 渐变的转换结果：所有 color stop 都是同一个 mix 色，只需要算第一个，后续直接复用
              // （逐个 stop 重算时，第一个 stop 会走继承传递写回 BGCOLORATTR，后续 stop 的底色基准就变了，
              //   同一个输入会算出不同的值，渐变被拆成多种颜色，达不到"渐变统一改成 mix 纯色"的目的）
              var gradientResultColor = '';
              value = value.replace(_constant__WEBPACK_IMPORTED_MODULE_2__.COLOR_REGEXP_GLOBAL, function (match) {
                var matchColor = null;

                // 渐变色统一改成mix纯色
                if (isGradient) {
                  matchColor = gradientMixColor;
                  cssChange = true;
                  if (gradientResultColor) {
                    // 后续 stop 直接复用第一个 stop 的结果
                    replaceIndex++;
                    return gradientResultColor;
                  }
                } else {
                  matchColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(match);
                }
                if (matchColor && matchColor.alpha >= _constant__WEBPACK_IMPORTED_MODULE_2__.IGNORE_ALPHA) {
                  // 忽略透明度低的色值 // TODO: 后面要干掉这个逻辑
                  // 使用颜色处理算法
                  var ret = _this2._adjustBrightness(matchColor, el, {
                    isBgColor: isBgColor,
                    isTextShadow: isTextShadow,
                    isTextColor: textColorIdx > -1,
                    isBorderColor: isBorderColor,
                    hasInlineColor: hasInlineColor
                  }, isUpdate, needReset);
                  // 背景图区域是否保持 Light Mode 观感，判据与图片补色一致（同为 _isInvertGrayColor）：
                  // 保持 LM 时整个区域（背景色/文字色/边框色）不转换；否则按 Dark Mode 正常转换。
                  // ORIGINAL_BGCOLORATTR 要到下面的继承传递才写入，因此处理首个背景色色值时用当前色值兜底
                  var keepLmForBgImage = hasInlineBackgroundImage && _this2._isInvertGrayColor(isBgColor ? matchColor : (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightBgColor);
                  var retColor = !keepLmForBgImage && ret.newColor;
                  extStyle += ret.extStyle;

                  // 对背景颜色和文字颜色做继承传递，用于文字亮度计算
                  if ((isBgColor || textColorIdx >= 5) && replaceIndex === 0) {
                    // 只处理color及之后的属性
                    var newColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([(0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor, retColor || matchColor]);
                    var newOriginalColor = isBgColor ? (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([(0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightBgColor, matchColor]) : matchColor;
                    _this2._inheritNodes(el).forEach(function (dom) {
                      if (isBgColor) {
                        (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.BGCOLORATTR, newColor);
                        (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_BGCOLORATTR, newOriginalColor);
                      } else {
                        (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.COLORATTR, newColor);
                        (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_COLORATTR, newOriginalColor);
                      }
                    });
                  }
                  retColor && (cssChange = true);
                  replaceIndex++;
                  var convertedColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(retColor || matchColor);
                  if (isGradient) gradientResultColor = convertedColor; // 记录，后续 stop 复用
                  return convertedColor;
                }
                if (!isGradient) return match;
                var mixColorStr = gradientMixColor === null ? match : (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorToCssString)(gradientMixColor);
                if (isGradient) gradientResultColor = mixColorStr; // 记录，后续 stop 复用
                return mixColorStr;
              }).replace(/\s?!\s?important/ig, '');
              if (isGradient) {
                // 取替换后渐变（即实际写进样式的那个渐变）的颜色：
                // 渐变可能被转换成 Dark Mode 色，也可能因为该节点带了背景图（补色与当前色差异小于 JND）等原因保持 Light Mode 原色，
                // 只有实际生效的那个色才能代表节点在 Dark Mode 下的真实底色，后代的文字颜色要基于它来算
                //
                // 上面 replace 时同一个 mix 色只算了一次、所有 stop 复用其结果，因此这里各 stop 已经是同一个纯色，
                // 取第一个即可（对所有 stop 做 mixColors 的结果也等于第一个）
                _constant__WEBPACK_IMPORTED_MODULE_2__.COLOR_REGEXP_GLOBAL.lastIndex = 0; // 全局正则带 lastIndex 状态，使用前重置（同上）
                var appliedMatch = _constant__WEBPACK_IMPORTED_MODULE_2__.COLOR_REGEXP_GLOBAL.exec(value);
                appliedGradientMixColor = appliedMatch ? (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(appliedMatch[0]) : gradientMixColor;
              }
            }
            extStyle && (cssKV += extStyle);
            if (!(el instanceof SVGElement)) {
              // 先不处理SVG
              // 背景图片、边框图片
              var isBackgroundAttr = /^background/.test(key);
              var isBorderImageAttr = /^(-webkit-)?border-image/.test(key);
              if ((isBackgroundAttr || isBorderImageAttr) && _constant__WEBPACK_IMPORTED_MODULE_2__.URL_REGEXP.test(value)) {
                cssChange = true;

                // 在背景图片下加一层底色，即图片补色：背景图算法无法处理，用这一层兜底保证底色正确
                // 默认用 Dark Mode 下该节点的底色（BGCOLORATTR 或 defaultDarkBgColor），否则背景图区域会补出一块浅色，
                // 和父容器转换后的深色底不一致（见 case「图片阴影bad case」）；
                // 但如果这个底色属于「黑白灰且需要取反」的一类（判据见 _isInvertGrayColor，
                // 与 adjustBackgroundBrightness 的取反分支一致），Dark Mode 色是取反后的结果，拿来补色会和背景图区域的观感不符，
                // 这种情况退回 Light Mode 原色（ORIGINAL_BGCOLORATTR 或 defaultLightBgColor）
                // background-image使用多层背景(注意background-position也要多加一层 https://www.w3.org/TR/css-backgrounds-3/#layering)
                // border-image不支持多层背景，需要添加background-image
                var lmImgBgColor = (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightBgColor;
                var dmImgBgColor = (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor;
                var imgBgColor = _this2._isInvertGrayColor(lmImgBgColor) ? lmImgBgColor : dmImgBgColor;
                if (/^(.*?)url\(([^)]*)\)(.*)$/i.test(value)) {
                  var tmpCssKvStr = '';

                  // 标记为有背景图片
                  !(0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGIMAGEATTR) && _this2._inheritNodes(el).forEach(function (dom) {
                    (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.BGIMAGEATTR, true);
                  });

                  // background-image
                  if (isBackgroundAttr) {
                    tmpCssKvStr = _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV(key, "".concat(value, ",linear-gradient(").concat(imgBgColor, ", ").concat(imgBgColor, ")"));
                    if (elBackgroundPositionAttr) {
                      cssKV += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV('background-position', elBackgroundPositionAttr);
                      tmpCssKvStr += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV('background-position', "".concat(elBackgroundPositionAttr, ",top left"));
                    }
                    if (elBackgroundSizeAttr) {
                      cssKV += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV('background-size', elBackgroundSizeAttr);
                      tmpCssKvStr += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV('background-size', "".concat(elBackgroundSizeAttr, ",100%"));
                    }
                    if (!needReset) {
                      if (onlyExpando) {
                        // onlyExpando（rebuildAncestorExpando）：粘贴节点在背景图祖先的 DOM 内即视为落在背景图区域，
                        // 用 DOM 包含关系（_inheritNodes）直接继承补色，绕开 bgStack 的 getBoundingClientRect 位置判断
                        _this2._inheritNodes(el).forEach(function (dom) {
                          (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.COMPLEMENTARY_BGIMAGECOLORATTR, imgBgColor);
                        });
                      } else if (dmBgClassName) {
                        // 如果是文字底图，则直接加样式
                        bgCss += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                        _this2._inheritNodes(el).forEach(function (dom) {
                          (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.COMPLEMENTARY_BGIMAGECOLORATTR, imgBgColor);
                        });
                      } else {
                        // 否则背景图入栈
                        _global__WEBPACK_IMPORTED_MODULE_4__.bgStack.push(el, tmpCssKvStr, function (bgStackItem) {
                          var els = [bgStackItem.elOld];
                          bgStackItem.el !== bgStackItem.elOld && els.push(bgStackItem.el);
                          els.forEach(function (bgEl) {
                            // 新老节点都要处理
                            (0,_domUtils__WEBPACK_IMPORTED_MODULE_5__.getChildrenAndIt)(bgEl).forEach(function (dom) {
                              (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.COMPLEMENTARY_BGIMAGECOLORATTR, imgBgColor);
                            });
                          });
                        });
                      }
                    }
                  } else {
                    // border-image元素，如果当前元素没有背景颜色，补背景颜色
                    if (imgBgColor && !hasInlineBackground && !needReset && !onlyExpando) {
                      tmpCssKvStr = _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV('background-image', "linear-gradient(".concat(imgBgColor, ", ").concat(imgBgColor, ")"));
                      if (dmBgClassName) {
                        // 如果是文字底图，则直接加样式
                        bgCss += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                      } else {
                        // 否则边框图入栈
                        _global__WEBPACK_IMPORTED_MODULE_4__.bgStack.push(el, tmpCssKvStr);
                      }
                    }
                  }
                }

                // 没有设置自定义字体颜色，则使用 Light Mode 下默认字体颜色
                if (!hasInlineColor) {
                  var textColor = (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.ORIGINAL_COLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightTextColor;
                  cssKV += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV('color', textColor);
                  _this2._inheritNodes(el).forEach(function (dom) {
                    (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(dom, _constant__WEBPACK_IMPORTED_MODULE_2__.COLORATTR, textColor);
                  });
                }
              }
            }
            if (cssChange || needReset) {
              !isUpdate && !needReset && !onlyExpando && _constant__WEBPACK_IMPORTED_MODULE_2__.IMPORTANT_REGEXP.test(oldValue) && (0,_config__WEBPACK_IMPORTED_MODULE_3__.setStyle)(el, _defineProperty({}, key, oldValue.replace(_constant__WEBPACK_IMPORTED_MODULE_2__.IMPORTANT_REGEXP, ''))); // 清除inline style的!important
              if (isGradient) {
                if (onlyExpando) {
                  // onlyExpando（rebuildAncestorExpando）：渐变背景的继承传递——复用 _updateBgWithGradient 的 expando 部分
                  // （产出的 css 丢弃），并重建渐变标记 BGGRADIENT_MIXCOLORATTR，绕开 bgStack 位置判断
                  if (gradientMixColor && /^background/.test(key) && !_constant__WEBPACK_IMPORTED_MODULE_2__.URL_REGEXP.test(value)) {
                    _this2._updateBgWithGradient(gradientMixColor, el, '', cssKVList, isUpdate, needReset);
                    (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGGRADIENT_MIXCOLORATTR, gradientMixColor);
                  }
                } else if (!needReset) {
                  if (dmBgClassName) {
                    // 如果是文字底图，则直接加样式
                    bgCss += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCss(dmBgClassName, _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV(key, value));
                    if (gradientMixColor && /^background/.test(key) && !_constant__WEBPACK_IMPORTED_MODULE_2__.URL_REGEXP.test(value)) {
                      // 是无背景图的渐变，需要重新计算背景色
                      css += _this2._updateBgWithGradient(gradientMixColor, el, dmBgClassName, cssKVList, isUpdate, needReset, appliedGradientMixColor);
                    }
                  } else {
                    // 否则渐变入栈
                    _global__WEBPACK_IMPORTED_MODULE_4__.bgStack.push(el, _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV(key, value), function (item) {
                      if (gradientMixColor && /^background/.test(key) && !_constant__WEBPACK_IMPORTED_MODULE_2__.URL_REGEXP.test(value)) {
                        // 是无背景图的渐变，需要重新计算背景色
                        css += _this2._updateBgWithGradient(gradientMixColor, el, item.className, cssKVList, isUpdate, needReset, appliedGradientMixColor);
                        (0,_config__WEBPACK_IMPORTED_MODULE_3__.setAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.BGGRADIENT_MIXCOLORATTR, gradientMixColor);
                      }
                    });
                  }
                }
              } else {
                if (key === 'color') {
                  noColor = false;
                  _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.unwatch('color');
                }
                cssKV += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV(key, !cssChange && needReset ? (0,_config__WEBPACK_IMPORTED_MODULE_3__.getStyle)(el, key) : value);
              }
            }
          });
        });
        if (noColor) {
          cssKV += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCssKV('color', (0,_config__WEBPACK_IMPORTED_MODULE_3__.getStyle)(el, 'color') || (0,_config__WEBPACK_IMPORTED_MODULE_3__.getAttr)(el, _constant__WEBPACK_IMPORTED_MODULE_2__.COLORATTR) || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkTextColor);
          _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.unwatch('color');
        }
        if (cssKV && !onlyExpando) {
          // 有处理过或者是背景图片就加class以及css
          if (!dmClassName) {
            dmClassName = "".concat(_constant__WEBPACK_IMPORTED_MODULE_2__.CLASS_PREFIX).concat(this._idx++);
            (0,_config__WEBPACK_IMPORTED_MODULE_3__.addClass)(el, dmClassName);
          }
          css += cssKV ? _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCss(dmClassName, cssKV) : '';
        }
        css += bgCss; // 追加文字底图样式，要在添加cssKV之后添加，避免被覆盖

        if (!isUpdate && (0,_domUtils__WEBPACK_IMPORTED_MODULE_5__.hasTextNode)(el) && !needReset && !onlyExpando) {
          // 如果节点里有文本，要判断是否在背景图里
          if (_config__WEBPACK_IMPORTED_MODULE_3__["default"].delayBgJudge) {
            // 延迟背景判断
            _global__WEBPACK_IMPORTED_MODULE_4__.tnQueue.push(el); // 文字入队
          } else {
            _global__WEBPACK_IMPORTED_MODULE_4__.bgStack.contains(el, function (item) {
              var _item$cb;
              css += _global__WEBPACK_IMPORTED_MODULE_4__.cssUtils.genCss(item.className, item.cssKV);
              (_item$cb = item.cb) === null || _item$cb === void 0 || _item$cb.call(item, item);
            });
          }
        }
      }
      if (!onlyExpando) {
        var afterConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_NODE;
        if (isUpdate) {
          afterConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_UPDATE_STYLE;
        } else if (needReset) {
          afterConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_RESET;
        }
        _global__WEBPACK_IMPORTED_MODULE_4__.plugins.emit(afterConvertNodeHookName, el);
      }
      return css;
    }

    // 调整背景明度
  }, {
    key: "adjustBackgroundBrightness",
    value: function adjustBackgroundBrightness(bgColor, bgColorExist) {
      var bgColorInstance = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(bgColor);
      if (bgColorInstance === null) return null;
      var mixColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([bgColorExist, bgColorInstance]);
      if (mixColor === null) return null;
      var mixColorRgb = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getRgbArray)(mixColor);
      var mixColorHsl = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getHslArray)(mixColor);
      var mixColorPerceivedBrightness = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getColorPerceivedBrightness)(mixColorRgb);
      var newColor = mixColor;
      if (this._isInvertGrayColor(mixColor)) {
        // 饱和度为0（黑白灰色），亮度大于HIGH_BLACKWHITE_HSL_BRIGHTNESS或感知亮度大于WHITE_LIKE_COLOR_BRIGHTNESS（白色）时，做亮度取反处理
        newColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorFromHsl)(0, 0, Math.min(100, 100 + this._defaultDarkBgColorHslBrightness - mixColorHsl[2]), mixColorHsl[3]);
      } else if (mixColorPerceivedBrightness > _constant__WEBPACK_IMPORTED_MODULE_2__.MAX_LIMIT_BGCOLOR_BRIGHTNESS) {
        // 感知亮度大于MAX_LIMIT_BGCOLOR_BRIGHTNESS，将感知亮度设为MAX_LIMIT_BGCOLOR_BRIGHTNESS
        newColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.adjustBrightnessTo)(_constant__WEBPACK_IMPORTED_MODULE_2__.MAX_LIMIT_BGCOLOR_BRIGHTNESS, mixColorRgb);
      } else if (mixColorHsl[2] < _constant__WEBPACK_IMPORTED_MODULE_2__.LOW_BLACKWHITE_HSL_BRIGHTNESS) {
        // 亮度小于LOW_BLACKWHITE_HSL_BRIGHTNESS，将亮度设为LOW_BLACKWHITE_HSL_BRIGHTNESS，适当提高亮度
        mixColorHsl[2] = _constant__WEBPACK_IMPORTED_MODULE_2__.LOW_BLACKWHITE_HSL_BRIGHTNESS;
        newColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorFromHsl)(mixColorHsl[0], mixColorHsl[1], mixColorHsl[2], mixColorHsl[3]);
      }
      return (0,_color__WEBPACK_IMPORTED_MODULE_1__.getFrontColor)(newColor, bgColorExist, bgColorInstance.alpha === null ? 1 : bgColorInstance.alpha);
    }

    // 调整文本明度
  }, {
    key: "adjustTextBrightness",
    value: function adjustTextBrightness(textColor, bgColor, opt) {
      var textColorInstance = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(textColor);
      var bgColorInstance = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(bgColor);
      if (textColorInstance === null || bgColorInstance === null) return null;
      var textColorAlpha = (opt === null || opt === void 0 ? void 0 : opt.alpha) || (textColorInstance.alpha === null ? 1 : textColorInstance.alpha);
      var textColorMix = opt ? textColorInstance : (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([bgColorInstance, textColorInstance]);
      if (textColorMix === null) return null;
      var textColorMixRgb = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getRgbArray)(textColorMix);
      var textColorMixHsl = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getHslArray)(textColorMix);
      var textPerceivedBrightness = (0,_color__WEBPACK_IMPORTED_MODULE_1__.getColorPerceivedBrightness)(textColorMixRgb);
      var bgColorPerceivedBrightness = (opt === null || opt === void 0 ? void 0 : opt.bgColorPerceivedBrightness) || (0,_color__WEBPACK_IMPORTED_MODULE_1__.getColorPerceivedBrightness)((0,_color__WEBPACK_IMPORTED_MODULE_1__.getRgbArray)(bgColorInstance));
      var offsetPerceivedBrightness = Math.abs(bgColorPerceivedBrightness - textPerceivedBrightness);

      // 用户设置为高亮字体颜色（接近白色亮度），不处理，保持高亮
      if (textPerceivedBrightness >= _constant__WEBPACK_IMPORTED_MODULE_2__.WHITE_LIKE_COLOR_BRIGHTNESS) return opt ? (0,_color__WEBPACK_IMPORTED_MODULE_1__.getFrontColor)(textColorInstance, bgColorInstance, textColorAlpha) : textColorInstance;
      if (offsetPerceivedBrightness > this._maxLimitOffsetBrightness && bgColorPerceivedBrightness <= this._defaultDarkBgColorBrightness + 2) {
        return (0,_color__WEBPACK_IMPORTED_MODULE_1__.getFrontColor)((0,_color__WEBPACK_IMPORTED_MODULE_1__.adjustBrightnessTo)(this._maxLimitOffsetBrightness + bgColorPerceivedBrightness, textColorMixRgb), bgColorInstance, textColorAlpha);
      }

      // 如果感知亮度差大于阈值，无需调整
      if (offsetPerceivedBrightness >= _constant__WEBPACK_IMPORTED_MODULE_2__.MIN_LIMIT_OFFSET_BRIGHTNESS) return opt ? (0,_color__WEBPACK_IMPORTED_MODULE_1__.getFrontColor)(textColorInstance, bgColorInstance, textColorAlpha) : textColorInstance;
      if (bgColorPerceivedBrightness >= _constant__WEBPACK_IMPORTED_MODULE_2__.HIGH_BGCOLOR_BRIGHTNESS) {
        // 亮背景，调暗字体
        if (textColorMixHsl[2] > 90 - _constant__WEBPACK_IMPORTED_MODULE_2__.HIGH_BLACKWHITE_HSL_BRIGHTNESS) {
          // 优先调字体的亮度已带到降低感知亮度的目的
          textColorMixHsl[2] = 90 - textColorMixHsl[2];
          return this.adjustTextBrightness((0,_color__WEBPACK_IMPORTED_MODULE_1__.colorFromHsl)(textColorMixHsl[0], textColorMixHsl[1], textColorMixHsl[2], textColorMixHsl[3]), bgColorInstance, {
            alpha: textColorAlpha,
            bgColorPerceivedBrightness: bgColorPerceivedBrightness
          });
        }
        return (0,_color__WEBPACK_IMPORTED_MODULE_1__.getFrontColor)((0,_color__WEBPACK_IMPORTED_MODULE_1__.adjustBrightnessTo)(Math.min(this._maxLimitOffsetBrightness, bgColorPerceivedBrightness - _constant__WEBPACK_IMPORTED_MODULE_2__.MIN_LIMIT_OFFSET_BRIGHTNESS), textColorMixRgb), bgColorInstance, textColorAlpha);
      } else {
        // 暗背景，调亮字体
        if (textColorMixHsl[2] <= _constant__WEBPACK_IMPORTED_MODULE_2__.HIGH_BLACKWHITE_HSL_BRIGHTNESS) {
          // 优先调字体的亮度已带到提高感知亮度的目的
          textColorMixHsl[2] = 90 - textColorMixHsl[2];
          return this.adjustTextBrightness((0,_color__WEBPACK_IMPORTED_MODULE_1__.colorFromHsl)(textColorMixHsl[0], textColorMixHsl[1], textColorMixHsl[2], textColorMixHsl[3]), bgColorInstance, {
            alpha: textColorAlpha,
            bgColorPerceivedBrightness: bgColorPerceivedBrightness
          });
        }
        return (0,_color__WEBPACK_IMPORTED_MODULE_1__.getFrontColor)((0,_color__WEBPACK_IMPORTED_MODULE_1__.adjustBrightnessTo)(Math.min(this._maxLimitOffsetBrightness, bgColorPerceivedBrightness + _constant__WEBPACK_IMPORTED_MODULE_2__.MIN_LIMIT_OFFSET_BRIGHTNESS), textColorMixRgb), bgColorInstance, textColorAlpha);
      }
    }

    // 获取两个颜色的对比度
  }, {
    key: "getContrast",
    value: function getContrast(colorStr1, colorStr2) {
      var color1 = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(colorStr1);
      var color2 = (0,_color__WEBPACK_IMPORTED_MODULE_1__.ColorParser)(colorStr2);
      return color1 && color2 ? (0,_color__WEBPACK_IMPORTED_MODULE_1__.getContrast)(color1, color2) : 0;
    }

    // 重置
  }, {
    key: "reset",
    value: function reset() {
      this._idx = 0;
      this._defaultDarkTextColorRgb = [0, 0, 0, 0];
      this._defaultDarkBgColorRgb = [0, 0, 0, 0];
      this._defaultDarkBgColorHSL = [];
      this._defaultDarkTextColorBrightness = 0;
      this._defaultDarkBgColorBrightness = 0;
      this._defaultDarkBgColorHslBrightness = 0;
      this._maxLimitOffsetBrightness = 0;
      this.isDarkmode = false;
    }
  }]);
}();

;

/***/ }),

/***/ "./src/modules/textNodeQueue.ts":
/*!**************************************!*\
  !*** ./src/modules/textNodeQueue.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextNodeQueue; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @name 文本节点队列
 *
 * @class TextNodeQueue
 *
 * @constructor
 * @param {string} prefix 类名前缀
 *
 * @attr {number} length 队列长度
 *
 * @method push 文本节点入队
 * @param {HTMLElement} el 文本节点对象
 * @return void
 *
 * @method forEach 遍历，遍历过的文本节点出队
 * @param {Callback} callback 回调
 * @return void
 *
 * @method update 更新队列的节点对象，主要解决前后节点不一致的问题
 * @param {HTMLElement[]} els 要更新的节点对象列表
 * @return void
 *
 * @method reset 重置
 * @return void
 *
 */

// Darkmode配置

var TextNodeQueue = /*#__PURE__*/function () {
  // 索引值

  function TextNodeQueue(prefix) {
    _classCallCheck(this, TextNodeQueue);
    _defineProperty(this, "_prefix", void 0);
    _defineProperty(this, "_queue", []);
    // 文本节点队列
    _defineProperty(this, "_idx", 0);
    this._prefix = prefix;
  }

  // 队列长度
  return _createClass(TextNodeQueue, [{
    key: "length",
    get: function get() {
      return this._queue.length;
    }

    // 文本节点入队
  }, {
    key: "push",
    value: function push(el) {
      var className = "".concat(this._prefix).concat(this._idx++);
      (0,_config__WEBPACK_IMPORTED_MODULE_0__.addClass)(el, className);
      this._queue.push({
        el: el,
        className: className,
        updated: !_config__WEBPACK_IMPORTED_MODULE_0__["default"].delayBgJudge
      });
    }

    // 遍历，遍历过的文本节点出队
  }, {
    key: "forEach",
    value: function forEach(callback) {
      var idxStack = [];
      this._queue.forEach(function (item, idx) {
        if (item.updated) {
          idxStack.unshift(idx);
          _typeof(callback) && callback(item.el);
        }
      });
      while (idxStack.length) {
        // 处理完之后删除部分节点
        var idx = idxStack.shift();
        if (idx === undefined) continue;
        this._queue.splice(idx, 1);
      }
    }

    // 更新队列的节点对象，主要解决前后节点不一致的问题
  }, {
    key: "update",
    value: function update(els) {
      this._queue.forEach(function (item) {
        if (!item.updated) {
          Array.prototype.some.call(els, function (el) {
            if (el.nodeType === 1 && (0,_config__WEBPACK_IMPORTED_MODULE_0__.getClass)(el, true).indexOf(item.className) > -1) {
              item.el = el;
              item.updated = true;
              return true;
            }
            return false;
          });
        }
      });
    }

    // 重置
  }, {
    key: "reset",
    value: function reset() {
      this._queue = [];
      this._idx = 0;
    }
  }]);
}();

;

/***/ }),

/***/ "./src/modules/validator.ts":
/*!**********************************!*\
  !*** ./src/modules/validator.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate: function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/modules/global.ts");
/**
 * @name 校验器
 *
 * @function validate 校验
 * @param {HTMLElement}    container 要校验的容器节点
 * @param {ValidateOption} opt       校验配置
 * @param {ValidateFilter} [filter]  过滤器
 * @return {ValidateResult[]} 校验结果
 *
 */

// 常量


// Darkmode配置


function validate(container) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var filter = arguments.length > 2 ? arguments[2] : undefined;
  // 全文级忽略规则：取值与节点级 data-ignore-dm 一致（空格分隔），两者取并集
  var globalIgnoreRules = (opt.ignoreRules || '').split(/\s+/).filter(Boolean);
  var treeWalker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, function (node) {
    if (!(node instanceof HTMLElement)) return NodeFilter.FILTER_REJECT; // 忽略非元素节点
    if ((0,_config__WEBPACK_IMPORTED_MODULE_1__.getStyle)(node, 'display') === 'none') return NodeFilter.FILTER_REJECT; // 忽略不可见节点以及其所有子节点
    if (_constant__WEBPACK_IMPORTED_MODULE_0__.URL_REGEXP.test((0,_config__WEBPACK_IMPORTED_MODULE_1__.getStyle)(node, 'backgroundImage') || '') || _constant__WEBPACK_IMPORTED_MODULE_0__.URL_REGEXP.test((0,_config__WEBPACK_IMPORTED_MODULE_1__.getStyle)(node, 'webkitBorderImage') || (0,_config__WEBPACK_IMPORTED_MODULE_1__.getStyle)(node, 'borderImage') || '')) return NodeFilter.FILTER_REJECT; // 忽略有背景图片的节点以及其所有子节点
    if (node instanceof SVGElement) return NodeFilter.FILTER_REJECT; // 忽略SVG节点以及其所有子节点
    if (filter !== null && filter !== void 0 && filter(node)) return NodeFilter.FILTER_SKIP; // 忽略filter(node)返回true的节点
    return NodeFilter.FILTER_ACCEPT;
  });
  var cases = [];
  var _loop = function _loop() {
    var currentNode = treeWalker.currentNode;
    if (currentNode instanceof HTMLElement) {
      var ignoreRules = globalIgnoreRules.concat((currentNode.dataset.ignoreDm || '').split(/\s+/).filter(Boolean));
      if (!ignoreRules.includes(_constant__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_IGNORE_RULES.LOW_CONTRAST) && Array.prototype.some.call(currentNode.childNodes, function (child) {
        return child.nodeType === 3 && child.nodeValue.replace(/\s/g, '').length;
      })) {
        // 有文本内容，校验对比度
        var dmContrast = _global__WEBPACK_IMPORTED_MODULE_2__.sdk.getContrast((0,_config__WEBPACK_IMPORTED_MODULE_1__.getAttr)(currentNode, _constant__WEBPACK_IMPORTED_MODULE_0__.COLORATTR) || _config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultDarkTextColor, (0,_config__WEBPACK_IMPORTED_MODULE_1__.getAttr)(currentNode, _constant__WEBPACK_IMPORTED_MODULE_0__.BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultDarkBgColor);
        // 只报「转换后对比度不达标且比 Light Mode 更差」的节点：原文自身就低对比度时，
        // 说明问题来自内容而非算法，不该算作 Dark Mode 转换的违规
        if (dmContrast < (opt.minContrast || 1.5)) {
          var lmContrast = _global__WEBPACK_IMPORTED_MODULE_2__.sdk.getContrast((0,_config__WEBPACK_IMPORTED_MODULE_1__.getAttr)(currentNode, _constant__WEBPACK_IMPORTED_MODULE_0__.ORIGINAL_COLORATTR) || _config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultLightTextColor, (0,_config__WEBPACK_IMPORTED_MODULE_1__.getAttr)(currentNode, _constant__WEBPACK_IMPORTED_MODULE_0__.ORIGINAL_BGCOLORATTR) || _config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultLightBgColor);
          if (dmContrast < lmContrast) {
            cases.push({
              dom: currentNode,
              key: 'darkmode-low-contrast',
              violateRules: '文字与背景色对比度太低（参考文档#4.1.1使用对比度适中的颜色）'
            });
          }
        }
      }
      if (!ignoreRules.includes(_constant__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_IGNORE_RULES.TEXT_BG_GRADIENT) && (0,_config__WEBPACK_IMPORTED_MODULE_1__.getAttr)(currentNode, _constant__WEBPACK_IMPORTED_MODULE_0__.BGGRADIENT_MIXCOLORATTR)) {
        cases.push({
          dom: currentNode,
          key: 'darkmode-no-gradient',
          violateRules: '文字背景尽量不要使用渐变（参考文档#4.1.2如非必要，文字背景尽量不要使用渐变）'
        });
      }
      if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].whitelist.attribute.some(function (attribute) {
        return currentNode.hasAttribute(attribute);
      })) {
        cases.push({
          dom: currentNode,
          key: 'darkmode-whitelist',
          violateRules: '注意，此处包含白名单属性，会跳过darkmode算法转换（参考文档#4.5.1 指定节点跳过算法转换）'
        });
      }
    }
  };
  while (treeWalker.nextNode()) {
    _loop();
  }
  return cases;
}
;

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./build/polyfills.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_global_this_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.global-this.js */ "./node_modules/core-js/modules/es.global-this.js");
/* harmony import */ var core_js_modules_es_global_this_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_global_this_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_math_cbrt_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.math.cbrt.js */ "./node_modules/core-js/modules/es.math.cbrt.js");
/* harmony import */ var core_js_modules_es_math_cbrt_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_cbrt_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_math_log2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.math.log2.js */ "./node_modules/core-js/modules/es.math.log2.js");
/* harmony import */ var core_js_modules_es_math_log2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.math.sign.js */ "./node_modules/core-js/modules/es.math.sign.js");
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.flags.js */ "./node_modules/core-js/modules/es.regexp.flags.js");
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_18__);
// 纯 ES5 引擎（IE11 级）缺少的内建 API，由构建入口统一补齐。
// preset-env 只转语法、不补 API；core-js 仅在宿主缺失时才安装。
// 清单是 Babel usage 分析后，用「屏蔽全部 ES6+ 内建的 IE11 沙箱」逐项裁剪得到的最小集合；
// 增删模块后必须回归：产物需能在该沙箱加载，且核心 API 输出与现环境一致。



















}();
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/darkmode.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorToCssString: function() { return /* binding */ colorToCssString; },
/* harmony export */   convertBg: function() { return /* binding */ convertBg; },
/* harmony export */   extend: function() { return /* binding */ extend; },
/* harmony export */   getContrast: function() { return /* binding */ getContrast; },
/* harmony export */   getDmBgColor: function() { return /* binding */ getDmBgColor; },
/* harmony export */   getDmFontColor: function() { return /* binding */ getDmFontColor; },
/* harmony export */   htmlClass: function() { return /* reexport safe */ _modules_constant__WEBPACK_IMPORTED_MODULE_1__.HTML_CLASS; },
/* harmony export */   init: function() { return /* binding */ init; },
/* harmony export */   reset: function() { return /* binding */ reset; },
/* harmony export */   run: function() { return /* binding */ run; },
/* harmony export */   updateStyle: function() { return /* binding */ updateStyle; },
/* harmony export */   validate: function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var object_hasown_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object.hasown/auto */ "./node_modules/object.hasown/auto.js");
/* harmony import */ var object_hasown_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_hasown_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/constant */ "./src/modules/constant.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/config */ "./src/modules/config.ts");
/* harmony import */ var _modules_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/global */ "./src/modules/global.ts");
/* harmony import */ var _modules_domUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/domUtils */ "./src/modules/domUtils.ts");
/* harmony import */ var _modules_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/color */ "./src/modules/color.ts");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * @name Darkmode主入口
 *
 * @function run 初始化Dark Mode配置并运行Dark Mode处理
 * @param {HTMLElement[]} nodes       要处理的节点列表
 * @param {ConfigOption}  [opt={}]    Dark Mode配置，详见init配置说明
 * @param {HTMLElement}   [container] 新增节点所属的容器节点，传入时会从该容器的祖先链重建样式继承关系
 * @return void
 *
 * @function init 初始化Dark Mode配置
 * @param {ConfigOption} [opt={}] Dark Mode配置
 * @return void
 *
 * @function convertBg 处理背景
 * @param {HTMLElement[]} nodes 要处理的节点列表
 * @return void
 *
 * @function updateStyle 更新节点Dark Mode样式
 * @param {HTMLElement}            node   要更新的节点
 * @param {Record<string, string>} styles 更新的样式键值对对象，如：{ color: '#ddd' }
 * @return void
 *
 * @function getContrast 获取两个颜色的对比度
 * @param {string} color1 要计算颜色对比度的颜色1，支持css颜色格式
 * @param {string} color2 要计算颜色对比度的颜色2，支持css颜色格式
 * @return {number} 颜色对比度，取值范围为`[1, 21]`
 *
 * @function getDmBgColor 根据 Light Mode 背景色转换生成 Dark Mode 背景色
 * @param {string} lmBgColor 要转换的背景颜色，支持css颜色格式
 * @param {string} [dmBgColorExist=config.defaultDarkBgColor] 已有的背景颜色，支持css颜色格式，不传则用默认底色
 * @return {string | null} Dark Mode背景颜色，传入值非法则返回null
 *
 * @function getDmFontColor 根据 Light Mode 前景色转换生成 Dark Mode 前景色
 * @param {string} lmFontColor 要转换的字体颜色，支持css颜色格式
 * @param {string} [dmBgColor=config.defaultDarkFontColor] 背景颜色，支持css颜色格式，不传则用默认底色
 * @return {string | null} Dark Mode字体颜色，传入值非法则返回null
 *
 * @function colorToCssString 把颜色对象转成 css 色值（rgb()/rgba()）
 * @param {ColorInstance} color 颜色实例
 * @return {string} css字符串
 *
 * @function extend 挂载插件
 * @param {Array} pluginList 插件列表
 * @return void
 *
 * @function reset 重置
 * @param {HTMLElement[]} [nodes] 要重置的节点列表
 * @return void
 *
 * @function validate 校验
 * @param {HTMLElement}    container 要校验的容器节点
 * @param {ValidateOption} [opt]     校验配置
 * @param {ValidateFilter} [filter]  过滤器
 * @return {ValidateResult[]} 校验结果
 *
 * @string htmlClass 强制暗黑模式时给 html 添加的 class，供调用方自行控制开关时机（如编辑器场景）
 *
 */

// Object.hasOwn polyfill：color-string / colorjs.io 等依赖在模块初始化时即调用 Object.hasOwn，
// 而该 API 在 iOS 15.4 以下不支持，因此必须作为最顶部、最先执行的 import

// 常量

var classReg = new RegExp("".concat(_modules_constant__WEBPACK_IMPORTED_MODULE_1__.CLASS_PREFIX, "[^ ]+"), 'g');

// Darkmode配置




// 颜色操作相关API

// Dark Mode切换
var mql = null;
var switchToDarkmode = function switchToDarkmode(mqlObj) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    type: 'dom'
  };
  opt.force && (_modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.isFinish = false); // 如果是强制运行Dark Mode处理逻辑，则重置为未运行

  if (_modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.isFinish) return; // 已运行过Dark Mode处理逻辑则不再运行

  try {
    if (_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].mode) {
      _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode = _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].mode === 'dark';
    } else {
      if (!mqlObj) return;
      _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode = mqlObj.matches;
    }
    if (opt.type === 'dom') {
      var _config$begin;
      // 处理节点
      _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode && ((_config$begin = _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].begin) === null || _config$begin === void 0 ? void 0 : _config$begin.call(_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.hasDelay()));
      Array.prototype.forEach.call(_modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.get(), function (node) {
        if (_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode) {
          var className = (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.getClass)(node);
          if (className) {
            (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.setClass)(node, className.replace(classReg, '')); // 过滤掉原有的Dark Mode class，避免外部复制文章时把文章内的Dark Mode class也复制过去导致新文章在Dark Mode下样式错乱
          }
        }
        if (_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode || _modules_global__WEBPACK_IMPORTED_MODULE_3__.plugins.length) {
          if (!_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].needJudgeFirstPage) {
            // 不需要判断首屏
            _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node)); // 写入非首屏样式
          } else {
            // 判断首屏
            var rect = node.getBoundingClientRect();
            var top = rect.top;
            var bottom = rect.bottom;
            if (top <= 0 && bottom <= 0) {
              // 首屏前面
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node)); // 写入非首屏样式
            } else if (top > 0 && top < _modules_constant__WEBPACK_IMPORTED_MODULE_1__.PAGE_HEIGHT || bottom > 0 && bottom < _modules_constant__WEBPACK_IMPORTED_MODULE_1__.PAGE_HEIGHT) {
              // 首屏
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.addFirstPageNode(node); // 记录首屏节点
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node), true); // 写入首屏样式
            } else {
              var _config$showFirstPage;
              // 首屏后面，理论上，这里最多只会进来一次
              _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].needJudgeFirstPage = false; // 至此，不需要再判断首屏了

              // 显示首屏
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.writeStyle(true); // 写入首屏样式表
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.showFirstPageNodes(); // 显示首屏节点
              (_config$showFirstPage = _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].showFirstPage) === null || _config$showFirstPage === void 0 || _config$showFirstPage.call(_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"]); // 执行首屏回调

              _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node)); // 写入非首屏样式
            }
          }
        }
      });
      _modules_global__WEBPACK_IMPORTED_MODULE_3__.plugins.loopTimes++;
    } else if (opt.type === 'bg') {
      // 处理背景
      _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode && _modules_global__WEBPACK_IMPORTED_MODULE_3__.tnQueue.forEach(function (text) {
        return _modules_global__WEBPACK_IMPORTED_MODULE_3__.bgStack.contains(text, function (bg) {
          _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.genCss(bg.className, bg.cssKV)); // 写入非首屏样式
          typeof bg.cb === 'function' && bg.cb(bg);

          // 还得处理该背景下的所有新老节点
          var els = [bg.elOld];
          bg.elOld !== bg.el && els.push(bg.el);
          els.forEach(function (el) {
            var _getAttr, _getAttr2, _getAttr3, _getAttr4, _getAttr5, _getAttr6;
            var inheritAttrs = [[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.COLORATTR, (_getAttr = (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.COLORATTR)) !== null && _getAttr !== void 0 ? _getAttr : null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGCOLORATTR, (_getAttr2 = (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGCOLORATTR)) !== null && _getAttr2 !== void 0 ? _getAttr2 : null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_COLORATTR, (_getAttr3 = (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_COLORATTR)) !== null && _getAttr3 !== void 0 ? _getAttr3 : null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_BGCOLORATTR, (_getAttr4 = (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_BGCOLORATTR)) !== null && _getAttr4 !== void 0 ? _getAttr4 : null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGIMAGEATTR, (_getAttr5 = (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGIMAGEATTR)) !== null && _getAttr5 !== void 0 ? _getAttr5 : null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.COMPLEMENTARY_BGIMAGECOLORATTR, (_getAttr6 = (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.COMPLEMENTARY_BGIMAGECOLORATTR)) !== null && _getAttr6 !== void 0 ? _getAttr6 : null]];
            var children = (0,_modules_domUtils__WEBPACK_IMPORTED_MODULE_4__.getChildrenAndIt)(el, true);
            children.forEach(function (child) {
              // 重置继承属性
              inheritAttrs.forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                  attr = _ref2[0],
                  value = _ref2[1];
                if (value === null) {
                  (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(child, attr);
                } else {
                  (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.setAttr)(child, attr, value);
                }
              });
            });
            children.forEach(function (child) {
              // 重新运行Dark Mode处理逻辑
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(child, undefined, false, true));
            });
          });
        });
      });
    }
    if (_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].needJudgeFirstPage || !_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].needJudgeFirstPage && !_modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.showFirstPage) {
      var _config$showFirstPage2;
      // config.needJudgeFirstPage === ture，表示需要判断首屏但是正文长度没超过一屏
      // config.needJudgeFirstPage === false && domUtils.showFirstPage === false，表示不需要判断首屏且没有做首屏优化
      (_config$showFirstPage2 = _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].showFirstPage) === null || _config$showFirstPage2 === void 0 || _config$showFirstPage2.call(_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"]); // 执行首屏回调
    }
    _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.writeStyle(); // 写入非首屏样式表
    _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.emptyFirstPageNodes(); // 清空记录的首屏节点

    if (!_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode) {
      // Light Mode
      // 首次加载页面时为Light Mode，标记为不需要判断首屏
      _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].needJudgeFirstPage = false;

      // 首次加载页面时为Light Mode，标记为不延迟判断背景
      _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].delayBgJudge = false;
      if (_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].container === null && opt.type === 'dom' && _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.length) {
        _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.delay(); // 将节点转移到延迟处理队列里
      }
    }
  } catch (e) {
    var _config$error;
    console.log('An error occurred when running the dark mode conversion algorithm\n', e);
    (_config$error = _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].error) === null || _config$error === void 0 || _config$error.call(_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"], e);
  }
};

// 初始化Dark Mode配置并运行Dark Mode处理
// nodes 传空数组时，会从 config.container 动态读取要处理的节点（见 domUtils.get）
// container 用于粘贴等增量场景：传入时会从该容器的祖先链重建继承上下文（nodes 须已在 container 内）
function run(nodes) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = arguments.length > 2 ? arguments[2] : undefined;
  init(opt); // 初始化配置

  _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.set(nodes);

  // 粘贴等增量场景：传入 container 时，从祖先链重建继承上下文，使片段节点获得正确的继承色
  // （须放在 set 之后、switchToDarkmode 之前；不能放 init，因第二次 run 的 init 会被 hasInit 跳过）
  if (container && nodes.length) {
    _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.rebuildAncestorExpando(nodes, container);
  }
  switchToDarkmode(mql, {
    force: true,
    type: 'dom'
  });
}
;

// 初始化Dark Mode配置
function init() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].hasInit) {
    // 只可设置一次配置
    console.log('Dark Mode can only be initialized once');
    return;
  }
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].hasInit = true; // 记录为配置已设置

  var tagName = _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].whitelist.tagName;
  var attribute = _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].whitelist.attribute;
  if (opt.whitelist) {
    opt.whitelist.tagName instanceof Array && opt.whitelist.tagName.forEach(function (item) {
      item = item.toUpperCase();
      tagName.indexOf(item) === -1 && tagName.push(item);
    });
    opt.whitelist.attribute instanceof Array && opt.whitelist.attribute.forEach(function (item) {
      attribute.indexOf(item) === -1 && attribute.push(item);
    });
  }
  if (opt.mode && ['dark', 'light'].indexOf(opt.mode) > -1) {
    _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('string', opt, 'mode');
    opt.mode === 'dark' && (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.addClass)(document.getElementsByTagName('html')[0], _modules_constant__WEBPACK_IMPORTED_MODULE_1__.HTML_CLASS);
  }
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('function', opt, 'begin');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('function', opt, 'showFirstPage');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('function', opt, 'error');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('boolean', opt, 'needJudgeFirstPage');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('boolean', opt, 'delayBgJudge');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('boolean', opt, 'noEmit');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('dom', opt, 'container');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('string', opt, 'cssSelectorsPrefix');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].setDefaultColor(opt);
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('function', opt, 'getStyle');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('function', opt, 'setStyle');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('function', opt, 'getClass');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('function', opt, 'setClass');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('function', opt, 'getAttr');
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('function', opt, 'setAttr');
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.init();
  if (!_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].mode && !mql && window.matchMedia) {
    // 匹配媒体查询
    mql = window.matchMedia(_modules_constant__WEBPACK_IMPORTED_MODULE_1__.MEDIA_QUERY);
    mql.addListener(switchToDarkmode); // 监听
  }
}
;

// 处理背景
function convertBg(nodes) {
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.set(nodes);
  if (_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].container !== null) {
    _modules_global__WEBPACK_IMPORTED_MODULE_3__.bgStack.update(nodes); // 更新背景堆栈
    _modules_global__WEBPACK_IMPORTED_MODULE_3__.tnQueue.update(nodes); // 更新文字队列
  }
  switchToDarkmode(mql, {
    force: true,
    type: 'bg'
  });
}
;

// 更新节点Dark Mode样式
function updateStyle(node, styles) {
  if (!_modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.isFinish) return; // 没有运行过Dark Mode处理逻辑则无需运行
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node, styles ? Object.keys(styles).map(function (key) {
    return [key, styles[key]];
  }) : undefined, true));
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.writeStyle();
}
;

// 获取两个颜色的对比度
function getContrast(color1, color2) {
  return _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.getContrast(color1, color2);
}
;

// 根据 Light Mode 背景色转换生成 Dark Mode 背景色
function getDmBgColor(lmBgColor) {
  var dmBgColorExist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].defaultDarkBgColor;
  if (!_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].hasInit) {
    // 未初始化则阈值未预计算，结果会出错，提示业务方先调用 init
    console.warn('Dark Mode should be initialized by calling `init()` or `run()` before using `getDmBgColor()`');
    return null;
  }
  var dmBgColor = _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.adjustBackgroundBrightness(lmBgColor, dmBgColorExist);
  return dmBgColor ? (0,_modules_color__WEBPACK_IMPORTED_MODULE_5__.colorToCssString)(dmBgColor) : null;
}
;

// 根据 Light Mode 前景色转换生成 Dark Mode 前景色
function getDmFontColor(lmFontColor) {
  var dmBgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].defaultDarkBgColor;
  if (!_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].hasInit) {
    // 未初始化则阈值未预计算，结果会出错，提示业务方先调用 init
    console.warn('Dark Mode should be initialized by calling `init()` or `run()` before using `getDmFontColor()`');
    return null;
  }
  var dmFontColor = _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.adjustTextBrightness(lmFontColor, dmBgColor);
  return dmFontColor ? (0,_modules_color__WEBPACK_IMPORTED_MODULE_5__.colorToCssString)(dmFontColor) : null;
}
;

// 把颜色对象转成 css 色值（rgb()/rgba()）
// 算法内部的颜色对象（节点上的 data-darkmode-* 属性、插件钩子回调里的 fontColor/bgColor 等）
// 直接 toString() 可能输出 hsl()/百分比等老 webview 不支持的写法，用这个统一转成 rgb()/rgba()
function colorToCssString(color) {
  return (0,_modules_color__WEBPACK_IMPORTED_MODULE_5__.colorToCssString)(color);
}

// 挂载插件
function extend(pluginList) {
  pluginList.forEach(function (plugin) {
    return _modules_global__WEBPACK_IMPORTED_MODULE_3__.plugins.extend(plugin);
  });
}
;

// 重置
function reset(nodes) {
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].reset(); // 内部会重置 config.hasInit = false，使下次可重新 init
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.plugins.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.tnQueue.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.bgStack.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.reset();
  (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.removeClass)(document.getElementsByTagName('html')[0], _modules_constant__WEBPACK_IMPORTED_MODULE_1__.HTML_CLASS);
  if (mql) {
    mql.removeListener(switchToDarkmode); // 取消监听
    mql = null;
  }
  nodes === null || nodes === void 0 || nodes.forEach(function (node) {
    (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(node, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.COLORATTR);
    (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(node, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGCOLORATTR);
    (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(node, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_COLORATTR);
    (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(node, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_BGCOLORATTR);
    (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(node, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGIMAGEATTR);
    (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(node, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGGRADIENT_MIXCOLORATTR);
    (0,_modules_config__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(node, _modules_constant__WEBPACK_IMPORTED_MODULE_1__.COMPLEMENTARY_BGIMAGECOLORATTR);
  });
}
;

// 校验
function validate(container, opt, filter) {
  return _modules_global__WEBPACK_IMPORTED_MODULE_3__.validator.validate(container, opt, filter);
}
;

// 对外暴露强制暗黑模式时给 html 添加的 class，供调用方自行控制开关时机（如编辑器场景）

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=darkmode.js.map