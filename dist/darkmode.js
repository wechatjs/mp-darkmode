(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Darkmode", [], factory);
	else if(typeof exports === 'object')
		exports["Darkmode"] = factory();
	else
		root["Darkmode"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/call-bind-apply-helpers/actualApply.js"
/*!*************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/actualApply.js ***!
  \*************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var $apply = __webpack_require__(/*! ./functionApply */ "./node_modules/call-bind-apply-helpers/functionApply.js");
var $call = __webpack_require__(/*! ./functionCall */ "./node_modules/call-bind-apply-helpers/functionCall.js");
var $reflectApply = __webpack_require__(/*! ./reflectApply */ "./node_modules/call-bind-apply-helpers/reflectApply.js");

/** @type {import('./actualApply')} */
module.exports = $reflectApply || bind.call($call, $apply);


/***/ },

/***/ "./node_modules/call-bind-apply-helpers/functionApply.js"
/*!***************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/functionApply.js ***!
  \***************************************************************/
(module) {

"use strict";


/** @type {import('./functionApply')} */
module.exports = Function.prototype.apply;


/***/ },

/***/ "./node_modules/call-bind-apply-helpers/functionCall.js"
/*!**************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/functionCall.js ***!
  \**************************************************************/
(module) {

"use strict";


/** @type {import('./functionCall')} */
module.exports = Function.prototype.call;


/***/ },

/***/ "./node_modules/call-bind-apply-helpers/index.js"
/*!*******************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/index.js ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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


/***/ },

/***/ "./node_modules/call-bind-apply-helpers/reflectApply.js"
/*!**************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/reflectApply.js ***!
  \**************************************************************/
(module) {

"use strict";


/** @type {import('./reflectApply')} */
module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;


/***/ },

/***/ "./node_modules/call-bound/index.js"
/*!******************************************!*\
  !*** ./node_modules/call-bound/index.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBindBasic = __webpack_require__(/*! call-bind-apply-helpers */ "./node_modules/call-bind-apply-helpers/index.js");

/** @type {(thisArg: string, searchString: string, position?: number) => number} */
var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

/** @type {import('.')} */
module.exports = function callBoundIntrinsic(name, allowMissing) {
	/* eslint no-extra-parens: 0 */

	var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBindBasic(/** @type {const} */ ([intrinsic]));
	}
	return intrinsic;
};


/***/ },

/***/ "./node_modules/color-blend/dist/index.modern.js"
/*!*******************************************************!*\
  !*** ./node_modules/color-blend/dist/index.modern.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: () => (/* binding */ R),
/* harmony export */   colorBurn: () => (/* binding */ H),
/* harmony export */   colorDodge: () => (/* binding */ G),
/* harmony export */   darken: () => (/* binding */ E),
/* harmony export */   difference: () => (/* binding */ L),
/* harmony export */   exclusion: () => (/* binding */ N),
/* harmony export */   hardLight: () => (/* binding */ J),
/* harmony export */   hue: () => (/* binding */ P),
/* harmony export */   lighten: () => (/* binding */ F),
/* harmony export */   luminosity: () => (/* binding */ S),
/* harmony export */   multiply: () => (/* binding */ B),
/* harmony export */   normal: () => (/* binding */ A),
/* harmony export */   overlay: () => (/* binding */ D),
/* harmony export */   saturation: () => (/* binding */ Q),
/* harmony export */   screen: () => (/* binding */ C),
/* harmony export */   softLight: () => (/* binding */ K)
/* harmony export */ });
function n(n,r,t){return{r:255*t(n.r/255,r.r/255),g:255*t(n.g/255,r.g/255),b:255*t(n.b/255,r.b/255)}}function r(n,r){return r}function t(n,r){return n*r}function u(n,r){return n+r-n*r}function i(n,r){return a(r,n)}function o(n,r){return Math.min(n,r)}function e(n,r){return Math.min(Math.max(n,r),1)}function c(n,r){return 0===n?0:1===r?1:Math.min(1,n/(1-r))}function f(n,r){return 1===n?1:0===r?0:1-Math.min(1,(1-n)/r)}function a(n,r){return r<=.5?t(n,2*r):u(n,2*r-1)}function b(n,r){return r<=.5?n-(1-2*r)*n*(1-n):n+(2*r-1)*((n<=.25?((16*n-12)*n+4)*n:Math.sqrt(n))-n)}function g(n,r){return Math.abs(n-r)}function h(n,r){return n+r-2*n*r}function M(n,r,t){return Math.min(Math.max(n||0,r),t)}function m(n){return{r:M(n.r,0,255),g:M(n.g,0,255),b:M(n.b,0,255),a:M(n.a,0,1)}}function d(n){return{r:255*n.r,g:255*n.g,b:255*n.b,a:n.a}}function p(n){return{r:n.r/255,g:n.g/255,b:n.b/255,a:n.a}}function v(n,r){void 0===r&&(r=0);var t=Math.pow(10,r);return{r:Math.round(n.r*t)/t,g:Math.round(n.g*t)/t,b:Math.round(n.b*t)/t,a:n.a}}function x(n,r,t,u,i,o){return(1-r/t)*u+r/t*Math.round((1-n)*i+n*o)}function O(n,r,t,u,i){void 0===i&&(i={unitInput:!1,unitOutput:!1,roundOutput:!0}),i.unitInput&&(n=d(n),r=d(r)),n=m(n);var o=(r=m(r)).a+n.a-r.a*n.a,e=t(n,r,u),c=m({r:x(n.a,r.a,o,n.r,r.r,e.r),g:x(n.a,r.a,o,n.g,r.g,e.g),b:x(n.a,r.a,o,n.b,r.b,e.b),a:o});return c=i.unitOutput?p(c):i.roundOutput?v(c):function(n){return v(n,9)}(c),c}function s(n,r,t){return d(t(p(n),p(r)))}function I(n){return.3*n.r+.59*n.g+.11*n.b}function q(n,r){var t=r-I(n);return function(n){var r=I(n),t=n.r,u=n.g,i=n.b,o=Math.min(t,u,i),e=Math.max(t,u,i);function c(n){return r+(n-r)*r/(r-o)}function f(n){return r+(n-r)*(1-r)/(e-r)}return o<0&&(t=c(t),u=c(u),i=c(i)),e>1&&(t=f(t),u=f(u),i=f(i)),{r:t,g:u,b:i}}({r:n.r+t,g:n.g+t,b:n.b+t})}function w(n){return Math.max(n.r,n.g,n.b)-Math.min(n.r,n.g,n.b)}function j(n,r){var t=["r","g","b"].sort(function(r,t){return n[r]-n[t]}),u=t[0],i=t[1],o=t[2],e={r:n.r,g:n.g,b:n.b};return e[o]>e[u]?(e[i]=(e[i]-e[u])*r/(e[o]-e[u]),e[o]=r):e[i]=e[o]=0,e[u]=0,e}function k(n,r){return q(j(r,w(n)),I(n))}function l(n,r){return q(j(n,w(r)),I(n))}function y(n,r){return q(r,I(n))}function z(n,r){return q(n,I(r))}function A(t,u){return O(t,u,n,r)}function B(r,u){return O(r,u,n,t)}function C(r,t){return O(r,t,n,u)}function D(r,t){return O(r,t,n,i)}function E(r,t){return O(r,t,n,o)}function F(r,t){return O(r,t,n,e)}function G(r,t){return O(r,t,n,c)}function H(r,t){return O(r,t,n,f)}function J(r,t){return O(r,t,n,a)}function K(r,t){return O(r,t,n,b)}function L(r,t){return O(r,t,n,g)}function N(r,t){return O(r,t,n,h)}function P(n,r){return O(n,r,s,k)}function Q(n,r){return O(n,r,s,l)}function R(n,r){return O(n,r,s,y)}function S(n,r){return O(n,r,s,z)}
//# sourceMappingURL=index.modern.js.map


/***/ },

/***/ "./node_modules/color-convert/conversions.js"
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-name */ "./node_modules/color-convert/node_modules/color-name/index.js");
/* MIT license */
/* eslint-disable no-mixed-operators */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(color_name__WEBPACK_IMPORTED_MODULE_0__["default"])) {
	reverseKeywords[color_name__WEBPACK_IMPORTED_MODULE_0__["default"][key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	oklab: {channels: 3, labels: ['okl', 'oka', 'okb']},
	lch: {channels: 3, labels: 'lch'},
	oklch: {channels: 3, labels: ['okl', 'okc', 'okh']},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convert);

// LAB f(t) constant
const LAB_FT = (6 / 29) ** 3;

// SRGB non-linear transform functions
function srgbNonlinearTransform(c) {
	const cc = c > 0.003_130_8
		? ((1.055 * (c ** (1 / 2.4))) - 0.055)
		: c * 12.92;
	return Math.min(Math.max(0, cc), 1);
}

function srgbNonlinearTransformInv(c) {
	return c > 0.040_45 ? (((c + 0.055) / 1.055) ** 2.4) : (c / 12.92);
}

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	switch (max) {
		case min: {
			h = 0;

			break;
		}

		case r: {
			h = (g - b) / delta;

			break;
		}

		case g: {
			h = 2 + (b - r) / delta;

			break;
		}

		case b: {
			h = 4 + (r - g) / delta;

			break;
		}
	// No default
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		switch (v) {
			case r: {
				h = bdif - gdif;

				break;
			}

			case g: {
				h = (1 / 3) + rdif - bdif;

				break;
			}

			case b: {
				h = (2 / 3) + gdif - rdif;

				break;
			}
		// No default
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100,
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.oklab = function (rgb) {
	// Assume sRGB
	const r = srgbNonlinearTransformInv(rgb[0] / 255);
	const g = srgbNonlinearTransformInv(rgb[1] / 255);
	const b = srgbNonlinearTransformInv(rgb[2] / 255);

	const lp = Math.cbrt(0.412_221_470_8 * r + 0.536_332_536_3 * g + 0.051_445_992_9 * b);
	const mp = Math.cbrt(0.211_903_498_2 * r + 0.680_699_545_1 * g + 0.107_396_956_6 * b);
	const sp = Math.cbrt(0.088_302_461_9 * r + 0.281_718_837_6 * g + 0.629_978_700_5 * b);

	const l = 0.210_454_255_3 * lp + 0.793_617_785 * mp - 0.004_072_046_8 * sp;
	const aa = 1.977_998_495_1 * lp - 2.428_592_205 * mp + 0.450_593_709_9 * sp;
	const bb = 0.025_904_037_1 * lp + 0.782_771_766_2 * mp - 0.808_675_766 * sp;

	return [l * 100, aa * 100, bb * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Number.POSITIVE_INFINITY;
	let currentClosestKeyword;

	for (const keyword of Object.keys(color_name__WEBPACK_IMPORTED_MODULE_0__["default"])) {
		const value = color_name__WEBPACK_IMPORTED_MODULE_0__["default"][keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return [...color_name__WEBPACK_IMPORTED_MODULE_0__["default"][keyword]];
};

convert.rgb.xyz = function (rgb) {
	// Assume sRGB
	const r = srgbNonlinearTransformInv(rgb[0] / 255);
	const g = srgbNonlinearTransformInv(rgb[1] / 255);
	const b = srgbNonlinearTransformInv(rgb[2] / 255);

	const x = (r * 0.412_456_4) + (g * 0.357_576_1) + (b * 0.180_437_5);
	const y = (r * 0.212_672_9) + (g * 0.715_152_2) + (b * 0.072_175);
	const z = (r * 0.019_333_9) + (g * 0.119_192) + (b * 0.950_304_1);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > LAB_FT ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > LAB_FT ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > LAB_FT ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t3;
	let value;

	if (s === 0) {
		value = l * 255;
		return [value, value, value];
	}

	const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			value = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			value = t2;
		} else if (3 * t3 < 2) {
			value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			value = t1;
		}

		rgb[i] = value * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0: {
			return [v, t, p];
		}

		case 1: {
			return [q, v, p];
		}

		case 2: {
			return [p, v, t];
		}

		case 3: {
			return [p, q, v];
		}

		case 4: {
			return [t, p, v];
		}

		case 5: {
			return [v, p, q];
		}
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	// eslint-disable-next-line no-bitwise
	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces, default-case-last */
	switch (i) {
		default:
		case 6:
		case 0: { r = v;  g = n;  b = wh; break;
		}

		case 1: { r = n;  g = v;  b = wh; break;
		}

		case 2: { r = wh; g = v;  b = n; break;
		}

		case 3: { r = wh; g = n;  b = v; break;
		}

		case 4: { r = n;  g = wh; b = v; break;
		}

		case 5: { r = v;  g = wh; b = n; break;
		}
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces, default-case-last */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.240_454_2) + (y * -1.537_138_5) + (z * -0.498_531_4);
	g = (x * -0.969_266) + (y * 1.876_010_8) + (z * 0.041_556);
	b = (x * 0.055_643_4) + (y * -0.204_025_9) + (z * 1.057_225_2);

	// Assume sRGB
	r = srgbNonlinearTransform(r);
	g = srgbNonlinearTransform(g);
	b = srgbNonlinearTransform(b);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > LAB_FT ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > LAB_FT ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > LAB_FT ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.xyz.oklab = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;

	const lp = Math.cbrt(0.818_933_010_1 * x + 0.361_866_742_4 * y - 0.128_859_713_7 * z);
	const mp = Math.cbrt(0.032_984_543_6 * x + 0.929_311_871_5 * y + 0.036_145_638_7 * z);
	const sp = Math.cbrt(0.048_200_301_8 * x + 0.264_366_269_1 * y + 0.633_851_707 * z);

	const l = 0.210_454_255_3 * lp + 0.793_617_785 * mp - 0.004_072_046_8 * sp;
	const a = 1.977_998_495_1 * lp - 2.428_592_205 * mp + 0.450_593_709_9 * sp;
	const b = 0.025_904_037_1 * lp + 0.782_771_766_2 * mp - 0.808_675_766 * sp;

	return [l * 100, a * 100, b * 100];
};

convert.oklab.oklch = function (oklab) {
	return convert.lab.lch(oklab);
};

convert.oklab.xyz = function (oklab) {
	const ll = oklab[0] / 100;
	const a = oklab[1] / 100;
	const b = oklab[2] / 100;

	const l = (0.999_999_998 * ll + 0.396_337_792 * a + 0.215_803_758 * b) ** 3;
	const m = (1.000_000_008 * ll - 0.105_561_342 * a - 0.063_854_175 * b) ** 3;
	const s = (1.000_000_055 * ll - 0.089_484_182 * a - 1.291_485_538 * b) ** 3;

	const x = 1.227_013_851 * l - 0.557_799_98 * m + 0.281_256_149 * s;
	const y = -0.040_580_178 * l + 1.112_256_87 * m - 0.071_676_679 * s;
	const z = -0.076_381_285 * l - 0.421_481_978 * m + 1.586_163_22 * s;

	return [x * 100, y * 100, z * 100];
};

convert.oklab.rgb = function (oklab) {
	const ll = oklab[0] / 100;
	const aa = oklab[1] / 100;
	const bb = oklab[2] / 100;

	const l = (ll + 0.396_337_777_4 * aa + 0.215_803_757_3 * bb) ** 3;
	const m = (ll - 0.105_561_345_8 * aa - 0.063_854_172_8 * bb) ** 3;
	const s = (ll - 0.089_484_177_5 * aa - 1.291_485_548 * bb) ** 3;

	// Assume sRGB
	const r = srgbNonlinearTransform(4.076_741_662_1 * l - 3.307_711_591_3 * m + 0.230_969_929_2 * s);
	const g = srgbNonlinearTransform(-1.268_438_004_6 * l + 2.609_757_401_1 * m - 0.341_319_396_5 * s);
	const b = srgbNonlinearTransform(-0.004_196_086_3 * l - 0.703_418_614_7 * m + 1.707_614_701 * s);

	return [r * 255, g * 255, b * 255];
};

convert.oklch.oklab = function (oklch) {
	return convert.lch.lab(oklch);
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;

	// Illuminant D65 XYZ Tristrimulus Values
	// https://en.wikipedia.org/wiki/CIE_1931_color_space
	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		/* eslint-disable no-bitwise */
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));
		/* eslint-enable no-bitwise */

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	// eslint-disable-next-line no-bitwise
	if (r >> 4 === g >> 4 && g >> 4 === b >> 4) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	args = args[0];

	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (Math.trunc(args > 50) + 1) * 0.5;
	/* eslint-disable no-bitwise */
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;
	/* eslint-enable no-bitwise */

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	args = args[0];

	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	/* eslint-disable no-bitwise */
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);
	/* eslint-enable no-bitwise */

	const string = integer.toString(16).toUpperCase();
	return '000000'.slice(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = [...colorString].map(char => char + char).join('');
	}

	const integer = Number.parseInt(colorString, 16);
	/* eslint-disable no-bitwise */
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;
	/* eslint-enable no-bitwise */

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let hue;

	const grayscale = chroma < 1 ? min / (1 - chroma) : 0;

	if (chroma <= 0) {
		hue = 0;
	} else if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2 * s * l) : (2 * s * (1 - l));

	let f = 0;
	if (c < 1) {
		f = (l - 0.5 * c) / (1 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0: {
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		}

		case 1: {
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		}

		case 2: {
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		}

		case 3: {
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		}

		case 4: {
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		}

		default: {
			pure[0] = 1; pure[1] = 0; pure[2] = w;
		}
	}
	/* eslint-enable max-statements-per-line */

	mg = (1 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255,
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1 - c);
	let f = 0;

	if (v > 0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1 - c) + 0.5 * c;
	let s = 0;

	if (l > 0 && l < 0.5) {
		s = c / (2 * l);
	} else if (l >= 0.5 && l < 1) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65_535) * 255, (apple[1] / 65_535) * 255, (apple[2] / 65_535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65_535, (rgb[1] / 255) * 65_535, (rgb[2] / 255) * 65_535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	/* eslint-disable no-bitwise */
	const value = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (value << 16) + (value << 8) + value;
	/* eslint-enable no-bitwise */

	const string = integer.toString(16).toUpperCase();
	return '000000'.slice(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const value = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [value / 255 * 100];
};


/***/ },

/***/ "./node_modules/color-convert/index.js"
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _conversions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversions.js */ "./node_modules/color-convert/conversions.js");
/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.js */ "./node_modules/color-convert/route.js");



const convert = {};

const models = Object.keys(_conversions_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let {length} = result, i = 0; i < length; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

for (const fromModel of models) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: _conversions_js__WEBPACK_IMPORTED_MODULE_0__["default"][fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: _conversions_js__WEBPACK_IMPORTED_MODULE_0__["default"][fromModel].labels});

	const routes = (0,_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fromModel);
	const routeModels = Object.keys(routes);

	for (const toModel of routeModels) {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convert);


/***/ },

/***/ "./node_modules/color-convert/node_modules/color-name/index.js"
/*!*********************************************************************!*\
  !*** ./node_modules/color-convert/node_modules/color-name/index.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const colors = {
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
	yellowgreen: [154, 205, 50],
}

for (const key in colors) Object.freeze(colors[key]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze(colors));

/***/ },

/***/ "./node_modules/color-convert/route.js"
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _conversions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversions.js */ "./node_modules/color-convert/conversions.js");


/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(_conversions_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

	for (let {length} = models, i = 0; i < length; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null,
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length > 0) {
		const current = queue.pop();
		const adjacents = Object.keys(_conversions_js__WEBPACK_IMPORTED_MODULE_0__["default"][current]);

		for (let {length} = adjacents, i = 0; i < length; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = _conversions_js__WEBPACK_IMPORTED_MODULE_0__["default"][graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(_conversions_js__WEBPACK_IMPORTED_MODULE_0__["default"][graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

function route(fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let {length} = models, i = 0; i < length; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (route);


/***/ },

/***/ "./node_modules/color-name/index.js"
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const colors = {
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
	yellowgreen: [154, 205, 50],
}

for (const key in colors) Object.freeze(colors[key]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze(colors));

/***/ },

/***/ "./node_modules/color-string/index.js"
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-name */ "./node_modules/color-string/node_modules/color-name/index.js");


const reverseNames = Object.create(null);

// Create a list of reverse color names
for (const name in color_name__WEBPACK_IMPORTED_MODULE_0__["default"]) {
	if (Object.hasOwn(color_name__WEBPACK_IMPORTED_MODULE_0__["default"], name)) {
		reverseNames[color_name__WEBPACK_IMPORTED_MODULE_0__["default"][name]] = name;
	}
}

const cs = {
	to: {},
	get: {},
};

cs.get = function (string) {
	const prefix = string.slice(0, 3).toLowerCase();
	let value;
	let model;
	switch (prefix) {
		case 'hsl': {
			value = cs.get.hsl(string);
			model = 'hsl';
			break;
		}

		case 'hwb': {
			value = cs.get.hwb(string);
			model = 'hwb';
			break;
		}

		default: {
			value = cs.get.rgb(string);
			model = 'rgb';
			break;
		}
	}

	if (!value) {
		return null;
	}

	return {model, value};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	const abbr = /^#([a-f\d]{3,4})$/i;
	const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
	const rgba = /^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i;
	const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i;
	const keyword = /^(\w+)$/;

	let rgb = [0, 0, 0, 1];
	let match;
	let i;
	let hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			const i2 = i * 2;
			rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = Number.parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Number.parseFloat(match[i + 1]);
		}

		if (match[4]) {
			rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
		}
	} else if (match = string.toLowerCase().match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!Object.hasOwn(color_name__WEBPACK_IMPORTED_MODULE_0__["default"], match[1])) {
			return null;
		}

		// eslint-disable-next-line unicorn/prefer-spread
		rgb = color_name__WEBPACK_IMPORTED_MODULE_0__["default"][match[1]].slice();
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}

	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
	const match = string.match(hsl);

	if (match) {
		const alpha = Number.parseFloat(match[4]);
		const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
		const s = clamp(Number.parseFloat(match[2]), 0, 100);
		const l = clamp(Number.parseFloat(match[3]), 0, 100);
		const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
	const match = string.match(hwb);

	if (match) {
		const alpha = Number.parseFloat(match[4]);
		const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
		const w = clamp(Number.parseFloat(match[2]), 0, 100);
		const b = clamp(Number.parseFloat(match[3]), 0, 100);
		const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function (...rgba) {
	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function (...rgba) {
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function (...rgba) {
	const r = Math.round(rgba[0] / 255 * 100);
	const g = Math.round(rgba[1] / 255 * 100);
	const b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function (...hsla) {
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// Hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function (...hwba) {
	let a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (...rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// Helpers
function clamp(number_, min, max) {
	return Math.min(Math.max(min, number_), max);
}

function hexDouble(number_) {
	const string_ = Math.round(number_).toString(16).toUpperCase();
	return (string_.length < 2) ? '0' + string_ : string_;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cs);


/***/ },

/***/ "./node_modules/color-string/node_modules/color-name/index.js"
/*!********************************************************************!*\
  !*** ./node_modules/color-string/node_modules/color-name/index.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const colors = {
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
	yellowgreen: [154, 205, 50],
}

for (const key in colors) Object.freeze(colors[key]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze(colors));

/***/ },

/***/ "./node_modules/color/index.js"
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var color_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");



const skippedModels = [
	// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// Gray conflicts with some method names, and has its own method defined.
	'gray',

	// Shouldn't really be in color-convert either...
	'hex',
];

const hashedModelKeys = {};
for (const model of Object.keys(color_convert__WEBPACK_IMPORTED_MODULE_1__["default"])) {
	hashedModelKeys[[...color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][model].labels].sort().join('')] = model;
}

const limiters = {};

function Color(object, model) {
	if (!(this instanceof Color)) {
		return new Color(object, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in color_convert__WEBPACK_IMPORTED_MODULE_1__["default"])) {
		throw new Error('Unknown model: ' + model);
	}

	let i;
	let channels;

	if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = [...object.color];
		this.valpha = object.valpha;
	} else if (typeof object === 'string') {
		const result = color_string__WEBPACK_IMPORTED_MODULE_0__["default"].get(object);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + object);
		}

		this.model = result.model;
		channels = color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || 'rgb';
		channels = color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][this.model].channels;
		const newArray = Array.prototype.slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	} else if (typeof object === 'number') {
		// This is always RGB - can be converted later on.
		this.model = 'rgb';
		this.color = [
			(object >> 16) & 0xFF,
			(object >> 8) & 0xFF,
			object & 0xFF,
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		const keys = Object.keys(object);
		if ('alpha' in object) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
		}

		const hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
		}

		this.model = hashedModelKeys[hashedKeys];

		const {labels} = color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][this.model];
		const color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(object[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// Perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString() {
		return this.string();
	},

	toJSON() {
		return this[this.model]();
	},

	string(places) {
		let self = this.model in color_string__WEBPACK_IMPORTED_MODULE_0__["default"].to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return color_string__WEBPACK_IMPORTED_MODULE_0__["default"].to[self.model](...arguments_);
	},

	percentString(places) {
		const self = this.rgb().round(typeof places === 'number' ? places : 1);
		const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return color_string__WEBPACK_IMPORTED_MODULE_0__["default"].to.rgb.percent(...arguments_);
	},

	array() {
		return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
	},

	object() {
		const result = {};
		const {channels} = color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][this.model];
		const {labels} = color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][this.model];

		for (let i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round(places) {
		places = Math.max(places || 0, 0);
		return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
	},

	alpha(value) {
		if (value !== undefined) {
			return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
		}

		return this.valpha;
	},

	// Rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(95.047)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(108.833)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][this.model].keyword(this.color);
	},

	hex(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return color_string__WEBPACK_IMPORTED_MODULE_0__["default"].to.hex(...this.rgb().round().color);
	},

	hexa(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		const rgbArray = this.rgb().round().color;

		let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
		if (alphaHex.length === 1) {
			alphaHex = '0' + alphaHex;
		}

		return color_string__WEBPACK_IMPORTED_MODULE_0__["default"].to.hex(...rgbArray) + alphaHex;
	},

	rgbNumber() {
		const rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		const rgb = this.rgb().color;

		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = (chan <= 0.04045) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level(color2) {
		// https://www.w3.org/TR/WCAG/#contrast-enhanced
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const rgb = this.rgb().color;
		const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
		return yiq < 128;
	},

	isLight() {
		return !this.isDark();
	},

	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}

		return rgb;
	},

	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_colour_to_grayscale
		const rgb = this.rgb().color;
		const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(value, value, value);
	},

	fade(ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer(ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix(mixinColor, weight) {
		// Ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}

		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === undefined ? 0.5 : weight;

		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();

		const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;

		return Color.rgb(
			w1 * color1.red() + w2 * color2.red(),
			w1 * color1.green() + w2 * color2.green(),
			w1 * color1.blue() + w2 * color2.blue(),
			color1.alpha() * p + color2.alpha() * (1 - p));
	},
};

// Model conversion methods and static constructors
for (const model of Object.keys(color_convert__WEBPACK_IMPORTED_MODULE_1__["default"])) {
	if (skippedModels.includes(model)) {
		continue;
	}

	const {channels} = color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][model];

	// Conversion methods
	Color.prototype[model] = function (...arguments_) {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments_.length > 0) {
			return new Color(arguments_, model);
		}

		return new Color([...assertArray(color_convert__WEBPACK_IMPORTED_MODULE_1__["default"][this.model][model].raw(this.color)), this.valpha], model);
	};

	// 'static' construction methods
	Color[model] = function (...arguments_) {
		let color = arguments_[0];
		if (typeof color === 'number') {
			color = zeroArray(arguments_, channels);
		}

		return new Color(color, model);
	};
}

function roundTo(number, places) {
	return Number(number.toFixed(places));
}

function roundToPlace(places) {
	return function (number) {
		return roundTo(number, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	for (const m of model) {
		(limiters[m] ||= [])[channel] = modifier;
	}

	model = model[0];

	return function (value) {
		let result;

		if (value !== undefined) {
			if (modifier) {
				value = modifier(value);
			}

			result = this[model]();
			result.color[channel] = value;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}

function zeroArray(array, length) {
	for (let i = 0; i < length; i++) {
		if (typeof array[i] !== 'number') {
			array[i] = 0;
		}
	}

	return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Color);


/***/ },

/***/ "./node_modules/colorjs.io/dist/color.js"
/*!***********************************************!*\
  !*** ./node_modules/colorjs.io/dist/color.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Color)
/* harmony export */ });
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
function multiplyMatrices (A, B) {
	let m = A.length;
	/** @type {number[][]} */
	let AM;
	/** @type {number[][]} */
	let BM;
	let aVec = false;
	let bVec = false;

	if (!Array.isArray(A[0])) {
		// A is vector, convert to [[a, b, c, ...]]
		AM = [/** @type {number[]} */ (A)];
		m = AM.length;
		aVec = true;
	}
	else {
		AM = /** @type {number[][]} */ (A);
	}

	if (!Array.isArray(B[0])) {
		// B is vector, convert to [[a], [b], [c], ...]]
		BM = B.length > 0 ? B.map(x => [x]) : [[]]; // Avoid mapping empty array
		bVec = true;
	}
	else {
		BM = /** @type {number[][]} */ (B);
	}

	let p = BM[0].length;
	let BM_cols = BM[0].map((_, i) => BM.map(x => x[i])); // transpose B
	/** @type {number[] | number[][]} */
	let product = AM.map(row =>
		BM_cols.map(col => {
			let ret = 0;

			if (!Array.isArray(row)) {
				for (let c of col) {
					ret += row * c;
				}

				return ret;
			}

			for (let i = 0; i < row.length; i++) {
				ret += row[i] * (col[i] || 0);
			}

			return ret;
		}));

	if (m === 1 && aVec) {
		product = product[0]; // Avoid [[a, b, c, ...]]
	}
	if (p === 1 && bVec) {
		if (m === 1 && aVec) {
			return product[0]; // Avoid [[a]], return a number
		}
		else {
			return product.map(x => x[0]); // Avoid [[a], [b], [c], ...]]
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
function dot3 (a, b) {
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
function multiply_v3_m3x3 (input, matrix, out = [0, 0, 0]) {
	const x = dot3(input, matrix[0]);
	const y = dot3(input, matrix[1]);
	const z = dot3(input, matrix[2]);
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
function isString (str) {
	return type(str) === "string";
}

/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @param {any} o - Value to check
 * @returns {string}
 */
function type (o) {
	let str = Object.prototype.toString.call(o);

	return (str.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}

/**
 * @param {number} n
 * @param {{ precision?: number | undefined, unit?: string | undefined }} options
 * @returns {string}
 */
function serializeNumber (n, { precision = 16, unit }) {
	if (isNone(n)) {
		return "none";
	}

	n = +toPrecision(n, precision);

	return n + (unit ?? "");
}

/**
 * Check if a value corresponds to a none argument
 * @param {any} n - Value to check
 * @returns {n is null}
 */
function isNone (n) {
	return n === null;
}

/**
 * Replace none values with 0
 * @param {number | null} n
 * @returns {number}
 */
function skipNone (n) {
	return isNone(n) ? 0 : n;
}

/**
 * Round a number to a certain number of significant digits
 * @param {number} n - The number to round
 * @param {number} precision - Number of significant digits
 */
function toPrecision (n, precision) {
	if (n === 0) {
		return 0;
	}
	let integer = ~~n;
	let digits = 0;
	if (integer && precision) {
		digits = ~~Math.log10(Math.abs(integer)) + 1;
	}
	const multiplier = 10.0 ** (precision - digits);
	return Math.floor(n * multiplier + 0.5) / multiplier;
}

/**
 * @param {number} start
 * @param {number} end
 * @param {number} p
 */
function interpolate (start, end, p) {
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
function interpolateInv (start, end, value) {
	return (value - start) / (end - start);
}

/**
 * @param {[number, number]} from
 * @param {[number, number]} to
 * @param {number} value
 */
function mapRange (from, to, value) {
	if (
		!from ||
		!to ||
		from === to ||
		(from[0] === to[0] && from[1] === to[1]) ||
		isNaN(value) ||
		value === null
	) {
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
function clamp (min, val, max) {
	return Math.max(Math.min(max, val), min);
}

/**
 * Copy sign of one value to another.
 * @param {number} to - Number to copy sign to
 * @param {number} from - Number to copy sign from
 */
function copySign (to, from) {
	return Math.sign(to) === Math.sign(from) ? to : -to;
}

/**
 * Perform pow on a signed number and copy sign to result
 * @param {number} base The base number
 * @param {number} exp The exponent
 */
function spow (base, exp) {
	return copySign(Math.abs(base) ** exp, base);
}

/**
 * Perform a divide, but return zero if the denominator is zero
 * @param {number} n The numerator
 * @param {number} d The denominator
 */
function zdiv (n, d) {
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
function bisectLeft (arr, value, lo = 0, hi = arr.length) {
	while (lo < hi) {
		const mid = (lo + hi) >> 1;
		if (arr[mid] < value) {
			lo = mid + 1;
		}
		else {
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
function isInstance (arg, constructor) {
	if (arg instanceof constructor) {
		return true;
	}

	const targetName = constructor.name;

	while (arg) {
		const proto = Object.getPrototypeOf(arg);
		const constructorName = proto?.constructor?.name;
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
class Hooks {
	add (name, callback, first) {
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

	run (name, env) {
		this[name] = this[name] || [];
		this[name].forEach(function (callback) {
			callback.call(env && env.context ? env.context : env, env);
		});
	}
}

/**
 * The instance of {@link Hooks} used throughout Color.js
 */
const hooks = new Hooks();

// Global defaults one may want to configure
var defaults = {
	gamut_mapping: "css",
	precision: 5,
	deltaE: "76", // Default deltaE method
	verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
	warn: function warn (msg) {
		if (this.verbose) {
			globalThis?.console?.warn?.(msg);
		}
	},
};

class Type {
	// Class properties - declared here so that type inference works
	type;
	coordMeta;
	coordRange;
	/** @type {[number, number]} */
	range;

	/**
	 * @param {any} type
	 * @param {import("./types.js").CoordMeta} coordMeta
	 */
	constructor (type, coordMeta) {
		if (typeof type === "object") {
			this.coordMeta = type;
		}

		if (coordMeta) {
			this.coordMeta = coordMeta;
			this.coordRange = coordMeta.range ?? coordMeta.refRange;
		}

		if (typeof type === "string") {
			let params = type
				.trim()
				.match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);

			if (!params) {
				throw new TypeError(`Cannot parse ${type} as a type definition.`);
			}

			this.type = params.groups.type;
			let { min, max } = params.groups;

			if (min || max) {
				this.range = [+min, +max];
			}
		}
	}

	/** @returns {[number, number]} */
	get computedRange () {
		if (this.range) {
			return this.range;
		}
		if (this.type === "<percentage>") {
			return this.percentageRange();
		}
		else if (this.type === "<angle>") {
			return [0, 360];
		}
		return null;
	}

	get unit () {
		if (this.type === "<percentage>") {
			return "%";
		}
		else if (this.type === "<angle>") {
			return "deg";
		}

		return "";
	}

	/**
	 * Map a number to the internal representation
	 * @param {number} number
	 */
	resolve (number) {
		if (this.type === "<angle>") {
			return number;
		}

		let fromRange = this.computedRange;
		let toRange = this.coordRange;

		if (this.type === "<percentage>") {
			toRange ??= this.percentageRange();
		}

		return mapRange(fromRange, toRange, number);
	}

	/**
	 * Serialize a number from the internal representation to a string
	 * @param {number} number
	 * @param {number} [precision]
	 */
	serialize (number, precision) {
		let toRange = this.type === "<percentage>" ? this.percentageRange(100) : this.computedRange;

		let unit = this.unit;

		number = mapRange(this.coordRange, toRange, number);
		return serializeNumber(number, { unit, precision });
	}

	toString () {
		let ret = this.type;

		if (this.range) {
			let [min = "", max = ""] = this.range;
			ret += `[${min},${max}]`;
		}

		return ret;
	}

	/**
	 * Returns a percentage range for values of this type
	 * @param {number} scale
	 * @returns {[number, number]}
	 */
	percentageRange (scale = 1) {
		let range;
		if (
			(this.coordMeta && this.coordMeta.range) ||
			(this.coordRange && this.coordRange[0] >= 0)
		) {
			range = [0, 1];
		}
		else {
			range = [-1, 1];
		}
		return [range[0] * scale, range[1] * scale];
	}

	static get (type, coordMeta) {
		if (isInstance(type, this)) {
			return type;
		}

		return new this(type, coordMeta);
	}
}

/** @import { ColorSpace, Coords } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").Format} FormatInterface */

/**
 * @internal
 * Used to index {@link FormatInterface Format} objects and store an instance.
 * Not meant for external use
 */
const instance = Symbol("instance");

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
class Format {
	// Class properties - declared here so that type inference works
	type;
	name;
	spaceCoords;
	/** @type {Type[][]} */
	coords;
	/** @type {string | undefined} */
	id;
	/** @type {boolean | undefined} */
	alpha;

	/**
	 * @param {FormatInterface} format
	 * @param {ColorSpace} space
	 */
	constructor (format, space = format.space) {
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
			this.coords = this.spaceCoords.map(coordMeta => {
				let ret = ["<number>", "<percentage>"];

				if (coordMeta.type === "angle") {
					ret.push("<angle>");
				}

				return ret;
			});
		}

		this.coords = this.coords.map(
			/** @param {string | string[] | Type[]} types */ (types, i) => {
				let coordMeta = this.spaceCoords[i];

				if (typeof types === "string") {
					types = types.trim().split(/\s*\|\s*/);
				}

				return types.map(type => Type.get(type, coordMeta));
			},
		);
	}

	/**
	 * @param {Coords} coords
	 * @param {number} precision
	 * @param {Type[]} types
	 */
	serializeCoords (coords, precision, types) {
		types = coords.map((_, i) =>
			Type.get(types?.[i] ?? this.coords[i][0], this.spaceCoords[i]));
		return coords.map((c, i) => types[i].serialize(c, precision));
	}

	/**
	 * Validates the coordinates of a color against a format's coord grammar and
	 * maps the coordinates to the range or refRange of the coordinates.
	 * @param {Coords} coords
	 * @param {[string, string, string]} types
	 */
	coerceCoords (coords, types) {
		return Object.entries(this.space.coords).map(([id, coordMeta], i) => {
			let arg = coords[i];

			if (isNone(arg) || isNaN(arg)) {
				// Nothing to do here
				return arg;
			}

			// Find grammar alternative that matches the provided type
			// Non-strict equals is intentional because we are comparing w/ string objects
			let providedType = types[i];
			let type = this.coords[i].find(c => c.type == providedType);

			// Check that each coord conforms to its grammar
			if (!type) {
				// Type does not exist in the grammar, throw
				let coordName = coordMeta.name || id;
				throw new TypeError(
					`${providedType ?? /** @type {any} */ (arg)?.raw ?? arg} not allowed for ${coordName} in ${this.name}()`,
				);
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
	canSerialize () {
		return this.type === "function" || /** @type {any} */ (this).serialize;
	}

	/**
	 * @param {string} str
	 * @returns {(import("./types.js").ColorConstructor) | undefined | null}
	 */
	parse (str) {
		return null;
	}

	/**
	 * @param {Format | FormatInterface} format
	 * @param {RemoveFirstElement<ConstructorParameters<typeof Format>>} args
	 * @returns {Format}
	 */
	static get (format, ...args) {
		if (!format || isInstance(format, this)) {
			return /** @type {Format} */ (format);
		}

		if (format[instance]) {
			return format[instance];
		}

		return new Format(format, ...args);
	}
}

// Type re-exports
/** @typedef {import("./types.js").White} White */

/** @type {Record<string, White>} */
// prettier-ignore
const WHITES = {
	// for compatibility, the four-digit chromaticity-derived ones everyone else uses
	D50: [0.3457 / 0.3585, 1.00000, (1.0 - 0.3457 - 0.3585) / 0.3585],
	D65: [0.3127 / 0.3290, 1.00000, (1.0 - 0.3127 - 0.3290) / 0.3290],
};

/**
 *
 * @param {string | White} name
 * @returns {White}
 */
function getWhite (name) {
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
function adapt$2 (W1, W2, XYZ, options = {}) {
	W1 = getWhite(W1);
	W2 = getWhite(W2);

	if (!W1 || !W2) {
		throw new TypeError(
			`Missing white point to convert ${!W1 ? "from" : ""}${!W1 && !W2 ? "/" : ""}${!W2 ? "to" : ""}`,
		);
	}

	if (W1 === W2) {
		// Same whitepoints, no conversion needed
		return XYZ;
	}

	let env = { W1, W2, XYZ, options };

	hooks.run("chromatic-adaptation-start", env);

	if (!env.M) {
		if (env.W1 === WHITES.D65 && env.W2 === WHITES.D50) {
			// prettier-ignore
			env.M = [
				[  1.0479297925449969,   0.022946870601609652, -0.05019226628920524  ],
				[  0.02962780877005599,  0.9904344267538799,   -0.017073799063418826 ],
				[ -0.009243040646204504, 0.015055191490298152,  0.7518742814281371   ],
			];
		}
		else if (env.W1 === WHITES.D50 && env.W2 === WHITES.D65) {
			// prettier-ignore
			env.M = [
				[  0.955473421488075,    -0.02309845494876471,  0.06325924320057072  ],
				[ -0.0283697093338637,    1.0099953980813041,   0.021041441191917323 ],
				[  0.012314014864481998, -0.020507649298898964, 1.330365926242124    ],
			];
		}
	}

	hooks.run("chromatic-adaptation-end", env);

	if (env.M) {
		return multiply_v3_m3x3(env.XYZ, env.M);
	}
	else {
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
function parse (str, options) {
	let env = {
		str: String(str)?.trim(),
		options,
	};

	hooks.run("parse-start", env);

	if (env.color) {
		return env.color;
	}

	env.parsed = parseFunction(env.str);
	let ret;
	let meta = env.options ? (env.options.parseMeta ?? env.options.meta) : null;

	if (env.parsed) {
		// Is a functional syntax
		let name = env.parsed.name;
		let format;
		let space;
		let coords = env.parsed.args;
		let types = coords.map((c, i) => env.parsed.argMeta[i]?.type);

		if (name === "color") {
			// color() function
			let id = coords.shift();
			types.shift();
			// Check against both <dashed-ident> and <ident> versions
			let alternateId = id.startsWith("--") ? id.substring(2) : `--${id}`;
			let ids = [id, alternateId];
			format = ColorSpace.findFormat({ name, id: ids, type: "function" });

			if (!format) {
				// Not found
				let didYouMean;

				let registryId = id in ColorSpace.registry ? id : alternateId;
				if (registryId in ColorSpace.registry) {
					// Used color space id instead of color() id, these are often different
					let cssId = ColorSpace.registry[registryId].formats?.color?.id;

					if (cssId) {
						let altColor = str.replace("color(" + id, "color(" + cssId);
						didYouMean = `Did you mean ${altColor}?`;
					}
				}

				throw new TypeError(
					`Cannot parse ${env.str}. ` + (didYouMean ?? "Missing a plugin?"),
				);
			}

			space = format.space;

			if (format.id.startsWith("--") && !id.startsWith("--")) {
				defaults.warn(
					`${space.name} is a non-standard space and not currently supported in the CSS spec. ` +
						`Use prefixed color(${format.id}) instead of color(${id}).`,
				);
			}
			if (id.startsWith("--") && !format.id.startsWith("--")) {
				defaults.warn(
					`${space.name} is a standard space and supported in the CSS spec. ` +
						`Use color(${format.id}) instead of prefixed color(${id}).`,
				);
			}
		}
		else {
			format = ColorSpace.findFormat({ name, type: "function" });
			space = format.space;
		}

		if (meta) {
			Object.assign(meta, {
				format,
				formatId: format.name,
				types,
				commas: env.parsed.commas,
			});
		}

		let alpha = 1;

		if (env.parsed.lastAlpha) {
			alpha = env.parsed.args.pop();

			if (meta) {
				meta.alphaType = types.pop();
			}
		}

		let coordCount = format.coords.length;

		if (coords.length !== coordCount) {
			throw new TypeError(
				`Expected ${coordCount} coordinates for ${space.id} in ${env.str}), got ${coords.length}`,
			);
		}

		coords = format.coerceCoords(coords, types);

		ret = { spaceId: space.id, coords, alpha };
	}
	else {
		// Custom, colorspace-specific format
		spaceloop: for (let space of ColorSpace.all) {
			for (let formatId in space.formats) {
				let format = space.formats[formatId];

				if (format.type !== "custom") {
					continue;
				}

				if (format.test && !format.test(env.str)) {
					continue;
				}

				// Convert to Format object
				let formatObject = space.getFormat(format);

				let color = formatObject.parse(env.str);

				if (color) {
					if (meta) {
						Object.assign(meta, { format: formatObject, formatId });
					}

					ret = color;
					break spaceloop;
				}
			}
		}
	}

	if (!ret) {
		// If we're here, we couldn't parse
		throw new TypeError(`Could not parse ${str} as a color. Missing a plugin?`);
	}

	// Clamp alpha to [0, 1]
	ret.alpha = isNone(ret.alpha)
		? ret.alpha
		: ret.alpha === undefined
			? 1
			: clamp(0, ret.alpha, 1);

	return ret;
}

/**
 * Units and multiplication factors for the internally stored numbers
 */
const units = {
	"%": 0.01,
	deg: 1,
	grad: 0.9,
	rad: 180 / Math.PI,
	turn: 360,
};

const regex = {
	// Need to list calc(NaN) explicitly as otherwise its ending paren would terminate the function call
	function: /^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,
	number: /^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,
	unitValue: RegExp(`(${Object.keys(units).join("|")})$`),

	// NOTE The -+ are not just for prefix, but also for idents, and e+N notation!
	singleArgument: /\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g,
};

/**
 * Parse a single function argument
 * @param {string} rawArg
 * @returns {{value: number, meta: ArgumentMeta}}
 */
function parseArgument (rawArg) {
	/** @type {Partial<ArgumentMeta>} */
	let meta = {};
	let unit = rawArg.match(regex.unitValue)?.[0];
	/** @type {string | number} */
	let value = (meta.raw = rawArg);

	if (unit) {
		// It’s a dimension token
		meta.type = unit === "%" ? "<percentage>" : "<angle>";
		meta.unit = unit;
		meta.unitless = Number(value.slice(0, -unit.length)); // unitless number

		value = meta.unitless * units[unit];
	}
	else if (regex.number.test(value)) {
		// It's a number
		// Convert numerical args to numbers
		value = Number(value);
		meta.type = "<number>";
	}
	else if (value === "none") {
		value = null;
	}
	else if (value === "NaN" || value === "calc(NaN)") {
		value = NaN;
		meta.type = "<number>";
	}
	else {
		meta.type = "<ident>";
	}

	return { value: /** @type {number} */ (value), meta: /** @type {ArgumentMeta} */ (meta) };
}

/**
 * Parse a CSS function, regardless of its name and arguments
 * @param {string} str String to parse
 * @return {ParseFunctionReturn | void}
 */
function parseFunction (str) {
	if (!str) {
		return;
	}

	str = str.trim();

	let parts = str.match(regex.function);

	if (parts) {
		// It is a function, parse args
		let args = [];
		let argMeta = [];
		let lastAlpha = false;
		let name = parts[1].toLowerCase();

		let separators = parts[2].replace(regex.singleArgument, ($0, rawArg) => {
			let { value, meta } = parseArgument(rawArg);

			if (
				// If there's a slash here, it's modern syntax
				$0.startsWith("/") ||
				// If there's still elements to process after there's already 3 in `args` (and the we're not dealing with "color()"), it's likely to be a legacy color like "hsl(0, 0%, 0%, 0.5)"
				(name !== "color" && args.length === 3)
			) {
				// It's alpha
				lastAlpha = true;
			}

			args.push(value);
			argMeta.push(meta);
			return "";
		});

		return {
			name,
			args,
			argMeta,
			lastAlpha,
			commas: separators.includes(","),
			rawName: parts[1],
			rawArgs: parts[2],
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
function getColor (color, options) {
	if (Array.isArray(color)) {
		return color.map(c => getColor(c, options));
	}

	if (!color) {
		throw new TypeError("Empty color reference");
	}

	if (isString(color)) {
		color = parse(color, options);
	}

	// Object fixup
	let space = color.space || color.spaceId;

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

const ε$7 = 0.000075;

/**
 * Class to represent a color space
 */
class ColorSpace {
	constructor (options) {
		this.id = options.id;
		this.name = options.name;
		this.base = options.base ? ColorSpace.get(options.base) : null;
		this.aliases = options.aliases;

		if (this.base) {
			this.fromBase = options.fromBase;
			this.toBase = options.toBase;
		}

		// Coordinate metadata

		let coords = options.coords ?? this.base.coords;

		for (let name in coords) {
			if (!("name" in coords[name])) {
				coords[name].name = name;
			}
		}
		this.coords = coords;

		// White point

		let white = options.white ?? this.base.white ?? "D65";
		this.white = getWhite(white);

		// Sort out formats

		this.formats = options.formats ?? {};

		for (let name in this.formats) {
			let format = this.formats[name];
			format.type ||= "function";
			format.name ||= name;
		}

		if (!this.formats.color?.id) {
			this.formats.color = {
				...(this.formats.color ?? {}),
				id: options.cssId || this.id,
			};
		}

		// Gamut space

		if (options.gamutSpace) {
			// Gamut space explicitly specified
			this.gamutSpace =
				options.gamutSpace === "self" ? this : ColorSpace.get(options.gamutSpace);
		}
		else {
			// No gamut space specified, calculate a sensible default
			if (this.isPolar) {
				// Do not check gamut through polar coordinates
				this.gamutSpace = this.base;
			}
			else {
				this.gamutSpace = this;
			}
		}

		// Optimize inGamut for unbounded spaces
		if (this.gamutSpace.isUnbounded) {
			this.inGamut = (coords, options) => {
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
			configurable: true,
		});

		hooks.run("colorspace-init-end", this);
	}

	inGamut (coords, { epsilon = ε$7 } = {}) {
		if (!this.equals(this.gamutSpace)) {
			coords = this.to(this.gamutSpace, coords);
			return this.gamutSpace.inGamut(coords, { epsilon });
		}

		let coordMeta = Object.values(this.coords);

		return coords.every((c, i) => {
			let meta = coordMeta[i];

			if (meta.type !== "angle" && meta.range) {
				if (isNone(c)) {
					// NaN is always in gamut
					return true;
				}

				let [min, max] = meta.range;
				return (
					(min === undefined || c >= min - epsilon) &&
					(max === undefined || c <= max + epsilon)
				);
			}

			return true;
		});
	}

	get isUnbounded () {
		return Object.values(this.coords).every(coord => !("range" in coord));
	}

	get cssId () {
		return this.formats?.color?.id || this.id;
	}

	get isPolar () {
		for (let id in this.coords) {
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
	getFormat (format) {
		if (!format) {
			return null;
		}

		if (format === "default") {
			format = Object.values(this.formats)[0];
		}
		else if (typeof format === "string") {
			format = this.formats[format];
		}

		let ret = Format.get(format, this);

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
	equals (space) {
		if (!space) {
			return false;
		}

		return this === space || this.id === space || this.id === space.id;
	}

	to (space, coords) {
		if (arguments.length === 1) {
			const color = getColor(space);
			[space, coords] = [color.space, color.coords];
		}

		space = ColorSpace.get(space);

		if (this.equals(space)) {
			// Same space, no change needed
			return coords;
		}

		// Convert NaN to 0, which seems to be valid in every coordinate of every color space
		coords = coords.map(c => (isNone(c) ? 0 : c));

		// Find connection space = lowest common ancestor in the base tree
		let myPath = this.path;
		let otherPath = space.path;

		let connectionSpace, connectionSpaceIndex;

		for (let i = 0; i < myPath.length; i++) {
			if (myPath[i].equals(otherPath[i])) {
				connectionSpace = myPath[i];
				connectionSpaceIndex = i;
			}
			else {
				break;
			}
		}

		if (!connectionSpace) {
			// This should never happen
			throw new Error(
				`Cannot convert between color spaces ${this} and ${space}: no connection space was found`,
			);
		}

		// Go up from current space to connection space
		for (let i = myPath.length - 1; i > connectionSpaceIndex; i--) {
			coords = myPath[i].toBase(coords);
		}

		// Go down from connection space to target space
		for (let i = connectionSpaceIndex + 1; i < otherPath.length; i++) {
			coords = otherPath[i].fromBase(coords);
		}

		return coords;
	}

	from (space, coords) {
		if (arguments.length === 1) {
			const color = getColor(space);
			[space, coords] = [color.space, color.coords];
		}

		space = ColorSpace.get(space);

		return space.to(this, coords);
	}

	toString () {
		return `${this.name} (${this.id})`;
	}

	getMinCoords () {
		let ret = [];

		for (let id in this.coords) {
			let meta = this.coords[id];
			let range = meta.range || meta.refRange;
			ret.push(range?.min ?? 0);
		}

		return ret;
	}

	static registry = {};

	// Returns array of unique color spaces
	static get all () {
		return [...new Set(Object.values(ColorSpace.registry))];
	}

	static register (id, space) {
		if (arguments.length === 1) {
			space = arguments[0];
			id = space.id;
		}

		space = this.get(space);

		if (this.registry[id] && this.registry[id] !== space) {
			throw new Error(`Duplicate color space registration: '${id}'`);
		}
		this.registry[id] = space;

		// Register aliases when called without an explicit ID.
		if (arguments.length === 1 && space.aliases) {
			for (let alias of space.aliases) {
				this.register(alias, space);
			}
		}

		return space;
	}

	/**
	 * Lookup ColorSpace object by name
	 * @param {ColorSpace | string} name
	 */
	static get (space, ...alternatives) {
		if (!space || isInstance(space, this)) {
			return space;
		}

		let argType = type(space);

		if (argType === "string") {
			// It's a color space id
			let ret = ColorSpace.registry[space.toLowerCase()];

			if (!ret) {
				throw new TypeError(`No color space found with id = "${space}"`);
			}

			return ret;
		}

		if (alternatives.length) {
			return ColorSpace.get(...alternatives);
		}

		throw new TypeError(`${space} is not a valid color space`);
	}

	/**
	 * Look up all color spaces for a format that matches certain criteria
	 * @param {object | string} filters
	 * @param {Array<ColorSpace>} [spaces=ColorSpace.all]
	 * @returns {Format | null}
	 */
	static findFormat (filters, spaces = ColorSpace.all) {
		if (!filters) {
			return null;
		}

		if (typeof filters === "string") {
			filters = { name: filters };
		}

		for (let space of spaces) {
			for (let [name, format] of Object.entries(space.formats)) {
				format.name ??= name;
				format.type ??= "function";

				let matches =
					(!filters.name || format.name === filters.name) &&
					(!filters.type || format.type === filters.type);

				if (filters.id) {
					let ids = format.ids || [format.id];
					let filterIds = Array.isArray(filters.id) ? filters.id : [filters.id];
					matches &&= filterIds.some(id => ids.includes(id));
				}

				if (matches) {
					let ret = Format.get(format, space);

					if (ret !== format) {
						space.formats[format.name] = ret;
					}

					return ret;
				}
			}
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
	static resolveCoord (ref, workingSpace) {
		let coordType = type(ref);
		let space, coord;

		if (coordType === "string") {
			if (ref.includes(".")) {
				// Absolute coordinate
				[space, coord] = ref.split(".");
			}
			else {
				// Relative coordinate
				[space, coord] = [, ref];
			}
		}
		else if (Array.isArray(ref)) {
			[space, coord] = ref;
		}
		else {
			// Object
			space = ref.space;
			coord = ref.coordId;
		}

		space = ColorSpace.get(space);

		if (!space) {
			space = workingSpace;
		}

		if (!space) {
			throw new TypeError(
				`Cannot resolve coordinate reference ${ref}: No color space specified and relative references are not allowed here`,
			);
		}

		coordType = type(coord);

		if (coordType === "number" || (coordType === "string" && coord >= 0)) {
			// Resolve numerical coord
			let meta = Object.entries(space.coords)[coord];

			if (meta) {
				return { space, id: meta[0], index: coord, ...meta[1] };
			}
		}

		space = ColorSpace.get(space);

		let normalizedCoord = coord.toLowerCase();

		let i = 0;
		for (let id in space.coords) {
			let meta = space.coords[id];

			if (
				id.toLowerCase() === normalizedCoord ||
				meta.name?.toLowerCase() === normalizedCoord
			) {
				return { space, id, index: i, ...meta };
			}

			i++;
		}

		throw new TypeError(
			`No "${coord}" coordinate found in ${space.name}. Its coordinates are: ${Object.keys(space.coords).join(", ")}`,
		);
	}

	static DEFAULT_FORMAT = {
		type: "functions",
		name: "color",
	};
}

function getPath (space) {
	let ret = [space];

	for (let s = space; (s = s.base); ) {
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
			name: "X",
		},
		y: {
			refRange: [0, 1],
			name: "Y",
		},
		z: {
			refRange: [0, 1],
			name: "Z",
		},
	},
	white: "D65",
	formats: {
		color: {
			ids: ["xyz-d65", "xyz"],
		},
	},
	aliases: ["xyz"],
});

// Type re-exports
/** @typedef {import("./types.js").RGBOptions} RGBOptions */

/** Convenience class for RGB color spaces */
class RGBColorSpace extends ColorSpace {
	/**
	 * Creates a new RGB ColorSpace.
	 * If coords are not specified, they will use the default RGB coords.
	 * Instead of `fromBase()` and `toBase()` functions,
	 * you can specify to/from XYZ matrices and have `toBase()` and `fromBase()` automatically generated.
	 * @param {RGBOptions} options
	 */
	constructor (options) {
		if (!options.coords) {
			options.coords = {
				r: {
					range: [0, 1],
					name: "Red",
				},
				g: {
					range: [0, 1],
					name: "Green",
				},
				b: {
					range: [0, 1],
					name: "Blue",
				},
			};
		}

		if (!options.base) {
			options.base = xyz_d65;
		}

		if (options.toXYZ_M && options.fromXYZ_M) {
			options.toBase ??= rgb => {
				let xyz = multiply_v3_m3x3(rgb, options.toXYZ_M);

				if (this.white !== this.base.white) {
					// Perform chromatic adaptation
					xyz = adapt$2(this.white, this.base.white, xyz);
				}

				return xyz;
			};

			options.fromBase ??= xyz => {
				xyz = adapt$2(this.base.white, this.white, xyz);
				return multiply_v3_m3x3(xyz, options.fromXYZ_M);
			};
		}

		options.referred ??= "display";

		super(options);
	}
}

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
function tryColor (color, options = {}) {
	if (Array.isArray(color)) {
		return color.map(c => tryColor(c, options));
	}

	let { cssProperty = "background-color", element, ...getColorOptions } = options;
	let error = null;
	try {
		return getColor(color, getColorOptions);
	}
	catch (e) {
		error = e;
	}

	let { CSS, getComputedStyle } = globalThis;
	if (isString(color) && element && CSS && getComputedStyle) {
		// Try resolving the color using the DOM, if supported in CSS
		if (CSS.supports(cssProperty, color)) {
			let previousValue = element.style[cssProperty];

			if (color !== previousValue) {
				element.style[cssProperty] = color;
			}

			let computedColor = getComputedStyle(element).getPropertyValue(cssProperty);

			if (color !== previousValue) {
				element.style[cssProperty] = previousValue;
			}

			if (computedColor !== color) {
				// getComputedStyle() changed the color, try again
				try {
					return getColor(computedColor, getColorOptions);
				}
				catch (e) {
					error = e;
				}
			}
			else {
				// Still not resolved
				error = {
					message: "Color value is a valid CSS color, but it could not be resolved :(",
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
function getAll (color, options) {
	color = getColor(color);

	let space = ColorSpace.get(options, options?.space);
	let precision = options?.precision;

	let coords;
	if (!space || color.space.equals(space)) {
		// No conversion needed
		coords = color.coords.slice();
	}
	else {
		coords = space.from(color);
	}

	return precision === undefined ? coords : coords.map(coord => toPrecision(coord, precision));
}

/** @import { ColorTypes, Ref } from "./types.js" */

/**
 * @param {ColorTypes} color
 * @param {Ref} prop
 * @returns {number}
 */
function get (color, prop) {
	color = getColor(color);

	if (prop === "alpha") {
		return color.alpha ?? 1;
	}

	let { space, index } = ColorSpace.resolveCoord(prop, color.space);
	let coords = getAll(color, space);
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
function setAll (color, space, coords, alpha) {
	color = getColor(color);

	if (Array.isArray(space)) {
		// Space is omitted
		[space, coords, alpha] = [color.space, space, coords];
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
function set (color, prop, value) {
	color = getColor(color);

	if (arguments.length === 2 && type(arguments[1]) === "object") {
		// Argument is an object literal
		let object = arguments[1];
		for (let p in object) {
			set(color, p, object[p]);
		}
	}
	else {
		if (typeof value === "function") {
			value = value(get(color, prop));
		}

		if (prop === "alpha") {
			color.alpha = value;
		}
		else {
			let { space, index } = ColorSpace.resolveCoord(prop, color.space);
			let coords = getAll(color, space);
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
	fromBase: coords => adapt$2(xyz_d65.white, "D50", coords),
	toBase: coords => adapt$2("D50", xyz_d65.white, coords),
});

// κ * ε  = 2^3 = 8
const ε$6 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const ε3$1 = 24 / 116;
const κ$4 = 24389 / 27; // 29^3/3^3

let white$4 = WHITES.D50;

var lab = new ColorSpace({
	id: "lab",
	name: "Lab",
	coords: {
		l: {
			refRange: [0, 100],
			name: "Lightness",
		},
		a: {
			refRange: [-125, 125],
		},
		b: {
			refRange: [-125, 125],
		},
	},

	// Assuming XYZ is relative to D50, convert to CIE Lab
	// from CIE standard, which now defines these as a rational fraction
	white: white$4,

	base: XYZ_D50,
	// Convert D50-adapted XYX to Lab
	// CIE 15.3:2004 section 8.2.1.1
	fromBase (XYZ) {
		// XYZ scaled relative to reference white
		let xyz = XYZ.map((value, i) => value / white$4[i]);
		let f = xyz.map(value => (value > ε$6 ? Math.cbrt(value) : (κ$4 * value + 16) / 116));

		let L = 116 * f[1] - 16;
		let a = 500 * (f[0] - f[1]);
		let b = 200 * (f[1] - f[2]);

		return [L, a, b];
	},
	// Convert Lab to D50-adapted XYZ
	// Same result as CIE 15.3:2004 Appendix D although the derivation is different
	// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	toBase (Lab) {
		// compute f, starting with the luminance-related term
		let [L, a, b] = Lab;
		let f = [];
		f[1] = (L + 16) / 116;
		f[0] = a / 500 + f[1];
		f[2] = f[1] - b / 200;

		// compute xyz
		// prettier-ignore
		let xyz = [
			f[0]   > ε3$1 ? Math.pow(f[0], 3)                : (116 * f[0] - 16) / κ$4,
			Lab[0] > 8  ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / κ$4,
			f[2]   > ε3$1 ? Math.pow(f[2], 3)                : (116 * f[2] - 16) / κ$4,
		];

		// Compute XYZ by scaling xyz by reference white
		return xyz.map((value, i) => value * white$4[i]);
	},

	formats: {
		lab: {
			coords: [
				"<percentage> | <number>",
				"<number> | <percentage>",
				"<number> | <percentage>",
			],
		},
	},
});

/**
 * Constrain an angle to 360 degrees
 * @param {number} angle
 * @returns {number}
 */
function constrain (angle) {
	if (typeof angle !== "number") {
		return angle;
	}

	return ((angle % 360) + 360) % 360;
}

/**
 * @param {"raw" | "increasing" | "decreasing" | "longer" | "shorter"} arc
 * @param {[number, number]} angles
 * @returns {[number, number]}
 */
function adjust (arc, angles) {
	let [a1, a2] = angles;

	let none1 = isNone(a1);
	let none2 = isNone(a2);

	if (none1 && none2) {
		return [a1, a2];
	}
	else if (none1) {
		a1 = a2;
	}
	else if (none2) {
		a2 = a1;
	}

	if (arc === "raw") {
		return angles;
	}

	a1 = constrain(a1);
	a2 = constrain(a2);

	let angleDiff = a2 - a1;

	if (arc === "increasing") {
		if (angleDiff < 0) {
			a2 += 360;
		}
	}
	else if (arc === "decreasing") {
		if (angleDiff > 0) {
			a1 += 360;
		}
	}
	else if (arc === "longer") {
		if (-180 < angleDiff && angleDiff < 180) {
			if (angleDiff > 0) {
				a1 += 360;
			}
			else {
				a2 += 360;
			}
		}
	}
	else if (arc === "shorter") {
		if (angleDiff > 180) {
			a1 += 360;
		}
		else if (angleDiff < -180) {
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
			name: "Lightness",
		},
		c: {
			refRange: [0, 150],
			name: "Chroma",
		},
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		},
	},

	base: lab,
	fromBase (Lab) {
		// These methods are used for other polar forms as well, so we can't hardcode the ε
		if (this.ε === undefined) {
			// @ts-expect-error Property 'coords' does not exist on type 'string | ColorSpace'
			let range = Object.values(this.base.coords)[1].refRange;
			let extent = range[1] - range[0];
			this.ε = extent / 100000;
		}

		// Convert to polar form
		let [L, a, b] = Lab;
		let isAchromatic = Math.abs(a) < this.ε && Math.abs(b) < this.ε;
		let h = isAchromatic ? null : constrain((Math.atan2(b, a) * 180) / Math.PI);
		let C = isAchromatic ? 0 : Math.sqrt(a ** 2 + b ** 2);

		return [L, C, h];
	},
	toBase (lch) {
		// Convert from polar form
		let [L, C, h] = lch;
		let a = null,
			b = null;

		if (!isNone(h)) {
			C = C < 0 ? 0 : C; // Clamp negative Chroma
			a = C * Math.cos((h * Math.PI) / 180);
			b = C * Math.sin((h * Math.PI) / 180);
		}

		return [L, a, b];
	},

	formats: {
		lch: {
			coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <angle>"],
		},
	},
});

// deltaE2000 is a statistically significant improvement
// and is recommended by the CIE and Idealliance
// especially for color differences less than 10 deltaE76
// but is wicked complicated
// and many implementations have small errors!
// DeltaE2000 is also discontinuous; in case this
// matters to you, use deltaECMC instead.

const Gfactor = 25 ** 7;
const π$1 = Math.PI;
const r2d = 180 / π$1;
const d2r$1 = π$1 / 180;

function pow7 (x) {
	// Faster than x ** 7 or Math.pow(x, 7)

	const x2 = x * x;
	const x7 = x2 * x2 * x2 * x;

	return x7;
}

/**
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @param {{ kL?: number | undefined; kC?: number | undefined; kH?: number | undefined }} options
 * @returns {number}
 */
function deltaE2000 (color, sample, { kL = 1, kC = 1, kH = 1 } = {}) {
	[color, sample] = getColor([color, sample]);

	// Given this color as the reference
	// and the function parameter as the sample,
	// calculate deltaE 2000.

	// This implementation assumes the parametric
	// weighting factors kL, kC and kH
	// for the influence of viewing conditions
	// are all 1, as sadly seems typical.
	// kL should be increased for lightness texture or noise
	// and kC increased for chroma noise

	let [L1, a1, b1] = lab.from(color);
	let C1 = lch.from(lab, [L1, a1, b1])[1];
	let [L2, a2, b2] = lab.from(sample);
	let C2 = lch.from(lab, [L2, a2, b2])[1];

	// Check for negative Chroma,
	// which might happen through
	// direct user input of LCH values

	if (C1 < 0) {
		C1 = 0;
	}
	if (C2 < 0) {
		C2 = 0;
	}

	let Cbar = (C1 + C2) / 2; // mean Chroma

	// calculate a-axis asymmetry factor from mean Chroma
	// this turns JND ellipses for near-neutral colors back into circles
	let C7 = pow7(Cbar);

	let G = 0.5 * (1 - Math.sqrt(C7 / (C7 + Gfactor)));

	// scale a axes by asymmetry factor
	// this by the way is why there is no Lab2000 colorspace
	let adash1 = (1 + G) * a1;
	let adash2 = (1 + G) * a2;

	// calculate new Chroma from scaled a and original b axes
	let Cdash1 = Math.sqrt(adash1 ** 2 + b1 ** 2);
	let Cdash2 = Math.sqrt(adash2 ** 2 + b2 ** 2);

	// calculate new hues, with zero hue for true neutrals
	// and in degrees, not radians

	let h1 = adash1 === 0 && b1 === 0 ? 0 : Math.atan2(b1, adash1);
	let h2 = adash2 === 0 && b2 === 0 ? 0 : Math.atan2(b2, adash2);

	if (h1 < 0) {
		h1 += 2 * π$1;
	}
	if (h2 < 0) {
		h2 += 2 * π$1;
	}

	h1 *= r2d;
	h2 *= r2d;

	// Lightness and Chroma differences; sign matters
	let ΔL = L2 - L1;
	let ΔC = Cdash2 - Cdash1;

	// Hue difference, getting the sign correct
	let hdiff = h2 - h1;
	let hsum = h1 + h2;
	let habs = Math.abs(hdiff);
	let Δh;

	if (Cdash1 * Cdash2 === 0) {
		Δh = 0;
	}
	else if (habs <= 180) {
		Δh = hdiff;
	}
	else if (hdiff > 180) {
		Δh = hdiff - 360;
	}
	else if (hdiff < -180) {
		Δh = hdiff + 360;
	}
	else {
		defaults.warn("the unthinkable has happened");
	}

	// weighted Hue difference, more for larger Chroma
	let ΔH = 2 * Math.sqrt(Cdash2 * Cdash1) * Math.sin((Δh * d2r$1) / 2);

	// calculate mean Lightness and Chroma
	let Ldash = (L1 + L2) / 2;
	let Cdash = (Cdash1 + Cdash2) / 2;
	let Cdash7 = pow7(Cdash);

	// Compensate for non-linearity in the blue region of Lab.
	// Four possibilities for hue weighting factor,
	// depending on the angles, to get the correct sign
	let hdash;
	if (Cdash1 * Cdash2 === 0) {
		hdash = hsum; // which should be zero
	}
	else if (habs <= 180) {
		hdash = hsum / 2;
	}
	else if (hsum < 360) {
		hdash = (hsum + 360) / 2;
	}
	else {
		hdash = (hsum - 360) / 2;
	}

	// positional corrections to the lack of uniformity of CIELAB
	// These are all trying to make JND ellipsoids more like spheres

	// SL Lightness crispening factor
	// a background with L=50 is assumed
	let lsq = (Ldash - 50) ** 2;
	let SL = 1 + (0.015 * lsq) / Math.sqrt(20 + lsq);

	// SC Chroma factor, similar to those in CMC and deltaE 94 formulae
	let SC = 1 + 0.045 * Cdash;

	// Cross term T for blue non-linearity
	let T = 1;
	T -= 0.17 * Math.cos((hdash - 30) * d2r$1);
	T += 0.24 * Math.cos(2 * hdash * d2r$1);
	T += 0.32 * Math.cos((3 * hdash + 6) * d2r$1);
	T -= 0.2 * Math.cos((4 * hdash - 63) * d2r$1);

	// SH Hue factor depends on Chroma,
	// as well as adjusted hue angle like deltaE94.
	let SH = 1 + 0.015 * Cdash * T;

	// RT Hue rotation term compensates for rotation of JND ellipses
	// and Munsell constant hue lines
	// in the medium-high Chroma blue region
	// (Hue 225 to 315)
	let Δθ = 30 * Math.exp(-1 * ((hdash - 275) / 25) ** 2);
	let RC = 2 * Math.sqrt(Cdash7 / (Cdash7 + Gfactor));
	let RT = -1 * Math.sin(2 * Δθ * d2r$1) * RC;

	// Finally calculate the deltaE, term by term as root sume of squares
	let dE = (ΔL / (kL * SL)) ** 2;
	dE += (ΔC / (kC * SC)) ** 2;
	dE += (ΔH / (kH * SH)) ** 2;
	dE += RT * (ΔC / (kC * SC)) * (ΔH / (kH * SH));
	return Math.sqrt(dE);
	// Yay!!!
}

/** @import { Matrix3x3 } from "../types.js" */

// Recalculated for consistent reference white
// see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
/** @type {Matrix3x3} */
// prettier-ignore
const XYZtoLMS_M$1 = [
	[ 0.8190224379967030, 0.3619062600528904, -0.1288737815209879 ],
	[ 0.0329836539323885, 0.9292868615863434,  0.0361446663506424 ],
	[ 0.0481771893596242, 0.2642395317527308,  0.6335478284694309 ],
];
// inverse of XYZtoLMS_M
/** @type {Matrix3x3} */
// prettier-ignore
const LMStoXYZ_M$1 = [
	[  1.2268798758459243, -0.5578149944602171,  0.2813910456659647 ],
	[ -0.0405757452148008,  1.1122868032803170, -0.0717110580655164 ],
	[ -0.0763729366746601, -0.4214933324022432,  1.5869240198367816 ],
];
/** @type {Matrix3x3} */
// prettier-ignore
const LMStoLab_M = [
	[ 0.2104542683093140,  0.7936177747023054, -0.0040720430116193 ],
	[ 1.9779985324311684, -2.4285922420485799,  0.4505937096174110 ],
	[ 0.0259040424655478,  0.7827717124575296, -0.8086757549230774 ],
];
// LMStoIab_M inverted
/** @type {Matrix3x3} */
// prettier-ignore
const LabtoLMS_M = [
	[ 1.0000000000000000,  0.3963377773761749,  0.2158037573099136 ],
	[ 1.0000000000000000, -0.1055613458156586, -0.0638541728258133 ],
	[ 1.0000000000000000, -0.0894841775298119, -1.2914855480194092 ],
];

var Oklab = new ColorSpace({
	id: "oklab",
	name: "Oklab",
	coords: {
		l: {
			refRange: [0, 1],
			name: "Lightness",
		},
		a: {
			refRange: [-0.4, 0.4],
		},
		b: {
			refRange: [-0.4, 0.4],
		},
	},

	// Note that XYZ is relative to D65
	white: "D65",
	base: xyz_d65,
	fromBase (XYZ) {
		// move to LMS cone domain
		let LMS = multiply_v3_m3x3(XYZ, XYZtoLMS_M$1);

		// non-linearity
		LMS[0] = Math.cbrt(LMS[0]);
		LMS[1] = Math.cbrt(LMS[1]);
		LMS[2] = Math.cbrt(LMS[2]);

		return multiply_v3_m3x3(LMS, LMStoLab_M, LMS);
	},
	toBase (OKLab) {
		// move to LMS cone domain
		let LMSg = multiply_v3_m3x3(OKLab, LabtoLMS_M);

		// restore linearity
		LMSg[0] = LMSg[0] ** 3;
		LMSg[1] = LMSg[1] ** 3;
		LMSg[2] = LMSg[2] ** 3;

		return multiply_v3_m3x3(LMSg, LMStoXYZ_M$1, LMSg);
	},

	formats: {
		oklab: {
			coords: [
				"<percentage> | <number>",
				"<number> | <percentage>",
				"<number> | <percentage>",
			],
		},
	},
});

/**
 * More accurate color-difference formulae
 * than the simple 1976 Euclidean distance in CIE Lab
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @returns {number}
 */
function deltaEOK (color, sample) {
	[color, sample] = getColor([color, sample]);

	// Given this color as the reference
	// and a sample,
	// calculate deltaEOK, term by term as root sum of squares
	let [L1, a1, b1] = Oklab.from(color);
	let [L2, a2, b2] = Oklab.from(sample);
	let ΔL = L1 - L2;
	let Δa = a1 - a2;
	let Δb = b1 - b2;
	return Math.sqrt(ΔL ** 2 + Δa ** 2 + Δb ** 2);
}

/** @import { ColorTypes } from "./types.js" */

const ε$5 = 0.000075;

/**
 * Check if a color is in gamut of either its own or another color space
 * @param {ColorTypes} color
 * @param {string | ColorSpace} [space]
 * @param {{ epsilon?: number | undefined }} [param2]
 * @returns {boolean}
 */
function inGamut (color, space, { epsilon = ε$5 } = {}) {
	color = getColor(color);

	if (!space) {
		space = color.space;
	}

	space = ColorSpace.get(space);
	let coords = color.coords;

	if (space !== color.space) {
		coords = space.from(color);
	}

	return space.inGamut(coords, { epsilon });
}

/** @import { Coords, PlainColorObject } from "./types.js" */

/**
 * @param {PlainColorObject} color
 * @returns {PlainColorObject}
 */
function clone (color) {
	return {
		space: color.space,
		coords: /** @type {Coords} */ (color.coords.slice()),
		alpha: color.alpha,
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
function distance (color1, color2, space = "lab") {
	space = ColorSpace.get(space);

	// Assume getColor() is called on color in space.from()
	let coords1 = space.from(color1);
	let coords2 = space.from(color2);

	return Math.sqrt(
		coords1.reduce((acc, c1, i) => {
			let c2 = coords2[i];
			if (isNone(c1) || isNone(c2)) {
				return acc;
			}

			return acc + (c2 - c1) ** 2;
		}, 0),
	);
}

/**
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @returns {number}
 */
function deltaE76 (color, sample) {
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
const π = Math.PI;
const d2r = π / 180;

/**
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @param {{ l?: number | undefined; c?: number | undefined }} options
 * @returns {number}
 */
function deltaECMC (color, sample, { l = 2, c = 1 } = {}) {
	[color, sample] = getColor([color, sample]);

	// Given this color as the reference
	// and a sample,
	// calculate deltaE CMC.

	// This implementation assumes the parametric
	// weighting factors l:c are 2:1
	// which is typical for non-textile uses.

	let [L1, a1, b1] = lab.from(color);
	let [, C1, H1] = lch.from(lab, [L1, a1, b1]);
	let [L2, a2, b2] = lab.from(sample);
	let C2 = lch.from(lab, [L2, a2, b2])[1];

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
	let ΔL = L1 - L2;
	let ΔC = C1 - C2;

	let Δa = a1 - a2;
	let Δb = b1 - b2;

	// weighted Hue difference, less for larger Chroma difference

	let H2 = Δa ** 2 + Δb ** 2 - ΔC ** 2;
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
	let SL = 0.511; // linear portion of the Y to L transfer function
	if (L1 >= 16) {
		// cubic portion
		SL = (0.040975 * L1) / (1 + 0.01765 * L1);
	}

	// SC Chroma factor
	let SC = (0.0638 * C1) / (1 + 0.0131 * C1) + 0.638;

	// Cross term T for blue non-linearity
	let T;
	if (isNone(H1)) {
		H1 = 0;
	}

	if (H1 >= 164 && H1 <= 345) {
		T = 0.56 + Math.abs(0.2 * Math.cos((H1 + 168) * d2r));
	}
	else {
		T = 0.36 + Math.abs(0.4 * Math.cos((H1 + 35) * d2r));
	}
	// console.log({T});

	// SH Hue factor also depends on C1,
	let C4 = Math.pow(C1, 4);
	let F = Math.sqrt(C4 / (C4 + 1900));
	let SH = SC * (F * T + 1 - F);

	// Finally calculate the deltaE, term by term as root sume of squares
	let dE = (ΔL / (l * SL)) ** 2;
	dE += (ΔC / (c * SC)) ** 2;
	dE += H2 / SH ** 2;
	// dE += (ΔH / SH)  ** 2;
	return Math.sqrt(dE);
	// Yay!!!
}

const Yw$1 = 203; // absolute luminance of media white

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
			name: "Xa",
		},
		y: {
			refRange: [0, 10000],
			name: "Ya",
		},
		z: {
			refRange: [0, 10888.3],
			name: "Za",
		},
	},

	base: xyz_d65,
	fromBase (XYZ) {
		// Make XYZ absolute, not relative to media white
		// Maximum luminance in PQ is 10,000 cd/m²
		// Relative XYZ has Y=1 for media white
		return XYZ.map(v => v * Yw$1);
	},
	toBase (AbsXYZ) {
		// Convert to media-white relative XYZ
		return AbsXYZ.map(v => v / Yw$1);
	},
});

/** @import { Matrix3x3, Vector3 } from "../types.js" */

const b$1 = 1.15;
const g = 0.66;
const n$1 = 2610 / 2 ** 14;
const ninv$1 = 2 ** 14 / 2610;
const c1$2 = 3424 / 2 ** 12;
const c2$2 = 2413 / 2 ** 7;
const c3$2 = 2392 / 2 ** 7;
const p = (1.7 * 2523) / 2 ** 5;
const pinv = 2 ** 5 / (1.7 * 2523);
const d = -0.56;
const d0 = 1.6295499532821566e-11;

/** @type {Matrix3x3} */
// prettier-ignore
const XYZtoCone_M = [
	[  0.41478972, 0.579999,  0.0146480 ],
	[ -0.2015100,  1.120649,  0.0531008 ],
	[ -0.0166008,  0.264800,  0.6684799 ],
];
// XYZtoCone_M inverted
/** @type {Matrix3x3} */
// prettier-ignore
const ConetoXYZ_M = [
	[  1.9242264357876067,  -1.0047923125953657,  0.037651404030618   ],
	[  0.35031676209499907,  0.7264811939316552, -0.06538442294808501 ],
	[ -0.09098281098284752, -0.3127282905230739,  1.5227665613052603  ],
];
/** @type {Matrix3x3} */
// prettier-ignore
const ConetoIab_M = [
	[  0.5,       0.5,       0        ],
	[  3.524000, -4.066708,  0.542708 ],
	[  0.199076,  1.096799, -1.295875 ],
];
// ConetoIab_M inverted
/** @type {Matrix3x3} */
// prettier-ignore
const IabtoCone_M = [
	[ 1,                   0.13860504327153927,   0.05804731615611883 ],
	[ 1,                  -0.1386050432715393,   -0.058047316156118904 ],
	[ 1,                  -0.09601924202631895,  -0.81189189605603900  ],
];

var Jzazbz = new ColorSpace({
	id: "jzazbz",
	name: "Jzazbz",
	coords: {
		jz: {
			refRange: [0, 1],
			name: "Jz",
		},
		az: {
			refRange: [-0.21, 0.21],
		},
		bz: {
			refRange: [-0.21, 0.21],
		},
	},

	base: XYZ_Abs_D65,
	fromBase (XYZ) {
		// First make XYZ absolute, not relative to media white
		// Maximum luminance in PQ is 10,000 cd/m²
		// Relative XYZ has Y=1 for media white
		// BT.2048 says media white Y=203 at PQ 58

		let [Xa, Ya, Za] = XYZ;

		// modify X and Y to minimize blue curvature
		let Xm = b$1 * Xa - (b$1 - 1) * Za;
		let Ym = g * Ya - (g - 1) * Xa;

		// move to LMS cone domain
		let LMS = multiply_v3_m3x3([Xm, Ym, Za], XYZtoCone_M);

		// PQ-encode LMS
		let PQLMS = /** @type {Vector3} } */ (
			LMS.map(function (val) {
				let num = c1$2 + c2$2 * spow(val / 10000, n$1);
				let denom = 1 + c3$2 * spow(val / 10000, n$1);

				return spow(num / denom, p);
			})
		);

		// almost there, calculate Iz az bz
		let [Iz, az, bz] = multiply_v3_m3x3(PQLMS, ConetoIab_M);
		// console.log({Iz, az, bz});

		let Jz = ((1 + d) * Iz) / (1 + d * Iz) - d0;
		return [Jz, az, bz];
	},
	toBase (Jzazbz) {
		let [Jz, az, bz] = Jzazbz;
		let Iz = (Jz + d0) / (1 + d - d * (Jz + d0));

		// bring into LMS cone domain
		let PQLMS = multiply_v3_m3x3([Iz, az, bz], IabtoCone_M);

		// convert from PQ-coded to linear-light
		let LMS = /** @type {Vector3} } */ (
			PQLMS.map(function (val) {
				let num = c1$2 - spow(val, pinv);
				let denom = c3$2 * spow(val, pinv) - c2$2;
				let x = 10000 * spow(num / denom, ninv$1);

				return x; // luminance relative to diffuse white, [0, 70 or so].
			})
		);

		// modified abs XYZ
		let [Xm, Ym, Za] = multiply_v3_m3x3(LMS, ConetoXYZ_M);

		// un-modify X and Y to get D65 XYZ, relative to media white
		let Xa = (Xm + (b$1 - 1) * Za) / b$1;
		let Ya = (Ym + (g - 1) * Xa) / g;
		return [Xa, Ya, Za];
	},

	formats: {
		// https://drafts.csswg.org/css-color-hdr/#Jzazbz
		jzazbz: {
			coords: [
				"<percentage> | <number>",
				"<number> | <percentage>",
				"<number> | <percentage>",
			],
		},
	},
});

var jzczhz = new ColorSpace({
	id: "jzczhz",
	name: "JzCzHz",
	coords: {
		jz: {
			refRange: [0, 1],
			name: "Jz",
		},
		cz: {
			refRange: [0, 0.26],
			name: "Chroma",
		},
		hz: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		},
	},

	base: Jzazbz,
	fromBase: lch.fromBase,
	toBase: lch.toBase,

	formats: {
		// https://drafts.csswg.org/css-color-hdr/#JzCzhz
		jzczhz: {
			coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <angle>"],
		},
	},
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
function deltaEJz (color, sample) {
	[color, sample] = getColor([color, sample]);

	// Given this color as the reference
	// and a sample,
	// calculate deltaE in JzCzHz.
	let [Jz1, Cz1, Hz1] = jzczhz.from(color);
	let [Jz2, Cz2, Hz2] = jzczhz.from(sample);

	// Lightness and Chroma differences
	// sign does not matter as they are squared.
	let ΔJ = Jz1 - Jz2;
	let ΔC = Cz1 - Cz2;

	// length of chord for ΔH
	if (isNone(Hz1) && isNone(Hz2)) {
		// both undefined hues
		Hz1 = 0;
		Hz2 = 0;
	}
	else if (isNone(Hz1)) {
		// one undefined, set to the defined hue
		Hz1 = Hz2;
	}
	else if (isNone(Hz2)) {
		Hz2 = Hz1;
	}

	let Δh = Hz1 - Hz2;
	let ΔH = 2 * Math.sqrt(Cz1 * Cz2) * Math.sin((Δh / 2) * (Math.PI / 180));

	return Math.sqrt(ΔJ ** 2 + ΔC ** 2 + ΔH ** 2);
}

/** @import { Matrix3x3, Vector3 } from "../types.js" */

const c1$1 = 3424 / 4096;
const c2$1 = 2413 / 128;
const c3$1 = 2392 / 128;
const m1$1 = 2610 / 16384;
const m2 = 2523 / 32;
const im1 = 16384 / 2610;
const im2 = 32 / 2523;

// The matrix below includes the 4% crosstalk components
// and is from the Dolby "What is ICtCp" paper"
/** @type {Matrix3x3} */
// prettier-ignore
const XYZtoLMS_M = [
	[  0.3592832590121217,  0.6976051147779502, -0.0358915932320290 ],
	[ -0.1920808463704993,  1.1004767970374321,  0.0753748658519118 ],
	[  0.0070797844607479,  0.0748396662186362,  0.8433265453898765 ],
];
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
const LMStoIPT_M = [
	[  2048 / 4096,   2048 / 4096,       0      ],
	[  6610 / 4096, -13613 / 4096,  7003 / 4096 ],
	[ 17933 / 4096, -17390 / 4096,  -543 / 4096 ],
];

// inverted matrices, calculated from the above
/** @type {Matrix3x3} */
// prettier-ignore
const IPTtoLMS_M = [
	[ 0.9999999999999998,  0.0086090370379328,  0.1110296250030260 ],
	[ 0.9999999999999998, -0.0086090370379328, -0.1110296250030259 ],
	[ 0.9999999999999998,  0.5600313357106791, -0.3206271749873188 ],
];
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
const LMStoXYZ_M = [
	[  2.0701522183894223, -1.3263473389671563,  0.2066510476294053 ],
	[  0.3647385209748072,  0.6805660249472273, -0.0453045459220347 ],
	[ -0.0497472075358123, -0.0492609666966131,  1.1880659249923042 ],
];

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
			refRange: [0, 1], // Constant luminance,
			name: "I",
		},
		ct: {
			refRange: [-0.5, 0.5], // Full BT.2020 gamut in range [-0.5, 0.5]
			name: "CT",
		},
		cp: {
			refRange: [-0.5, 0.5],
			name: "CP",
		},
	},

	base: XYZ_Abs_D65,
	fromBase (XYZ) {
		// move to LMS cone domain
		let LMS = multiply_v3_m3x3(XYZ, XYZtoLMS_M);

		return LMStoICtCp(LMS);
	},
	toBase (ICtCp) {
		let LMS = ICtCptoLMS(ICtCp);

		return multiply_v3_m3x3(LMS, LMStoXYZ_M);
	},

	formats: {
		ictcp: {
			coords: [
				"<percentage> | <number>",
				"<number> | <percentage>",
				"<number> | <percentage>",
			],
		},
	},
});

/**
 *
 * @param {Vector3} LMS
 * @returns {Vector3}
 */
function LMStoICtCp (LMS) {
	// apply the PQ EOTF
	// we can't ever be dividing by zero because of the "1 +" in the denominator
	let PQLMS = /** @type {Vector3} */ (
		LMS.map(function (val) {
			let num = c1$1 + c2$1 * (val / 10000) ** m1$1;
			let denom = 1 + c3$1 * (val / 10000) ** m1$1;

			return (num / denom) ** m2;
		})
	);

	// LMS to IPT, with rotation for Y'C'bC'r compatibility
	return multiply_v3_m3x3(PQLMS, LMStoIPT_M);
}

/**
 *
 * @param {Vector3} ICtCp
 * @returns {Vector3}
 */
function ICtCptoLMS (ICtCp) {
	let PQLMS = multiply_v3_m3x3(ICtCp, IPTtoLMS_M);

	// From BT.2124-0 Annex 2 Conversion 3
	let LMS = /** @type {Vector3} */ (
		PQLMS.map(function (val) {
			let num = Math.max(val ** im2 - c1$1, 0);
			let denom = c2$1 - c3$1 * val ** im2;
			return 10000 * (num / denom) ** im1;
		})
	);

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
function deltaEITP (color, sample) {
	[color, sample] = getColor([color, sample]);

	// Given this color as the reference
	// and a sample,
	// calculate deltaE in ICtCp
	// which is simply the Euclidean distance

	let [I1, T1, P1] = ictcp.from(color);
	let [I2, T2, P2] = ictcp.from(sample);

	// the 0.25 factor is to undo the encoding scaling in Ct
	// the 720 is so that 1 deltaE = 1 JND
	// per  ITU-R BT.2124-0 p.3

	return 720 * Math.sqrt((I1 - I2) ** 2 + 0.25 * (T1 - T2) ** 2 + (P1 - P2) ** 2);
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
function deltaEOK2 (color, sample) {
	[color, sample] = getColor([color, sample]);

	// Given this color as the reference
	// and a sample,
	// calculate deltaEOK2, term by term as root sum of squares
	let abscale = 2;
	let [L1, a1, b1] = Oklab.from(color);
	let [L2, a2, b2] = Oklab.from(sample);
	let ΔL = L1 - L2;
	let Δa = abscale * (a1 - a2);
	let Δb = abscale * (b1 - b2);
	return Math.sqrt(ΔL ** 2 + Δa ** 2 + Δb ** 2);
}

/** @import { Coords, Matrix3x3, Vector3 } from "../types.js" */

// Type re-exports
/** @typedef {import("../types.js").Cam16Object} Cam16Object */
/** @typedef {import("../types.js").Cam16Input} Cam16Input */
/** @typedef {import("../types.js").Cam16Environment} Cam16Environment */

const white$3 = WHITES.D65;
const adaptedCoef = 0.42;
const adaptedCoefInv = 1 / adaptedCoef;
const tau$1 = 2 * Math.PI;

/** @type {Matrix3x3} */
// prettier-ignore
const cat16 = [
	[  0.401288,  0.650173, -0.051461 ],
	[ -0.250268,  1.204414,  0.045854 ],
	[ -0.002079,  0.048952,  0.953127 ],
];

/** @type {Matrix3x3} */
const cat16Inv = [
	[1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
	[0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
	[-0.015841498849333856, -0.03412293802851557, 1.0499644368778496],
];

/** @type {Matrix3x3} */
const m1 = [
	[460.0, 451.0, 288.0],
	[460.0, -891.0, -261.0],
	[460.0, -220.0, -6300.0],
];

const surroundMap = {
	dark: [0.8, 0.525, 0.8],
	dim: [0.9, 0.59, 0.9],
	average: [1, 0.69, 1],
};

const hueQuadMap = {
	// Red, Yellow, Green, Blue, Red
	h: [20.14, 90.0, 164.25, 237.53, 380.14],
	e: [0.8, 0.7, 1.0, 1.2, 0.8],
	H: [0.0, 100.0, 200.0, 300.0, 400.0],
};

const rad2deg = 180 / Math.PI;
const deg2rad$1 = Math.PI / 180;

/**
 * @param {Coords} coords
 * @param {number} fl
 * @returns {[number, number, number]}
 */
function adapt$1 (coords, fl) {
	const temp = /** @type {[number, number, number]} */ (
		coords.map(c => {
			const x = spow(fl * Math.abs(c) * 0.01, adaptedCoef);
			return (400 * copySign(x, c)) / (x + 27.13);
		})
	);
	return temp;
}

/**
 * @param {Coords} adapted
 * @param {number} fl
 * @returns {[number, number, number]}
 */
function unadapt (adapted, fl) {
	const constant = (100 / fl) * 27.13 ** adaptedCoefInv;
	return /** @type {[number, number, number]} */ (
		adapted.map(c => {
			const cabs = Math.abs(c);
			return copySign(constant * spow(cabs / (400 - cabs), adaptedCoefInv), c);
		})
	);
}

/**
 * @param {number} h
 */
function hueQuadrature (h) {
	let hp = constrain(h);
	if (hp <= hueQuadMap.h[0]) {
		hp += 360;
	}

	const i = bisectLeft(hueQuadMap.h, hp) - 1;
	const [hi, hii] = hueQuadMap.h.slice(i, i + 2);
	const [ei, eii] = hueQuadMap.e.slice(i, i + 2);
	const Hi = hueQuadMap.H[i];

	const t = (hp - hi) / ei;
	return Hi + (100 * t) / (t + (hii - hp) / eii);
}

/**
 * @param {number} H
 */
function invHueQuadrature (H) {
	let Hp = ((H % 400) + 400) % 400;
	const i = Math.floor(0.01 * Hp);
	Hp = Hp % 100;
	const [hi, hii] = hueQuadMap.h.slice(i, i + 2);
	const [ei, eii] = hueQuadMap.e.slice(i, i + 2);

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
function environment (
	refWhite,
	adaptingLuminance,
	backgroundLuminance,
	surround,
	discounting,
) {
	const env = {};

	env.discounting = discounting;
	env.refWhite = refWhite;
	env.surround = surround;
	const xyzW = /** @type {Vector3} */ (
		refWhite.map(c => {
			return c * 100;
		})
	);

	// The average luminance of the environment in `cd/m^2cd/m` (a.k.a. nits)
	env.la = adaptingLuminance;
	// The relative luminance of the nearby background
	env.yb = backgroundLuminance;
	// Absolute luminance of the reference white.
	const yw = xyzW[1];

	// Cone response for reference white
	const rgbW = multiply_v3_m3x3(xyzW, cat16);

	// Surround: dark, dim, and average
	let values = surroundMap[env.surround];
	const f = values[0];
	env.c = values[1];
	env.nc = values[2];

	const k = 1 / (5 * env.la + 1);
	const k4 = k ** 4;

	// Factor of luminance level adaptation
	env.fl = k4 * env.la + 0.1 * (1 - k4) * (1 - k4) * Math.cbrt(5 * env.la);
	env.flRoot = env.fl ** 0.25;

	env.n = env.yb / yw;
	env.z = 1.48 + Math.sqrt(env.n);
	env.nbb = 0.725 * env.n ** -0.2;
	env.ncb = env.nbb;

	// Degree of adaptation calculating if not discounting
	// illuminant (assumed eye is fully adapted)
	const d = Math.max(Math.min(f * (1 - (1 / 3.6) * Math.exp((-env.la - 42) / 92)), 1), 0);
	env.dRgb = /** @type {[number, number, number]} */ (
		rgbW.map(c => {
			return interpolate(1, yw / c, d);
		})
	);
	env.dRgbInv = /** @type {[number, number, number]} */ (
		env.dRgb.map(c => {
			return 1 / c;
		})
	);

	// Achromatic response
	const rgbCW = /** @type {[number, number, number]} */ (
		rgbW.map((c, i) => {
			return c * env.dRgb[i];
		})
	);
	const rgbAW = adapt$1(rgbCW, env.fl);
	env.aW = env.nbb * (2 * rgbAW[0] + rgbAW[1] + 0.05 * rgbAW[2]);

	// console.log(env);

	return env;
}

// Pre-calculate everything we can with the viewing conditions
const viewingConditions$1 = environment(white$3, (64 / Math.PI) * 0.2, 20, "average", false);

/**
 * @param {Cam16Input} cam16
 * @param {Cam16Environment} env
 * @returns {[number, number, number]}
 */
function fromCam16 (cam16, env) {
	// These check ensure one, and only one attribute for a
	// given category is provided.
	// @ts-expect-error The '^` operator is not allowed for boolean types
	if (!((cam16.J !== undefined) ^ (cam16.Q !== undefined))) {
		throw new Error("Conversion requires one and only one: 'J' or 'Q'");
	}

	// @ts-expect-error - The '^` operator is not allowed for boolean types
	if (!((cam16.C !== undefined) ^ (cam16.M !== undefined) ^ (cam16.s !== undefined))) {
		throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");
	}

	// Hue is absolutely required
	// @ts-expect-error - The '^` operator is not allowed for boolean types
	if (!((cam16.h !== undefined) ^ (cam16.H !== undefined))) {
		throw new Error("Conversion requires one and only one: 'h' or 'H'");
	}

	// Black
	if (cam16.J === 0.0 || cam16.Q === 0.0) {
		return [0.0, 0.0, 0.0];
	}

	// Break hue into Cartesian components
	let hRad = 0.0;
	if (cam16.h !== undefined) {
		hRad = constrain(cam16.h) * deg2rad$1;
	}
	else {
		hRad = invHueQuadrature(cam16.H) * deg2rad$1;
	}

	const cosh = Math.cos(hRad);
	const sinh = Math.sin(hRad);

	// Calculate `Jroot` from one of the lightness derived coordinates.
	let Jroot = 0.0;
	if (cam16.J !== undefined) {
		Jroot = spow(cam16.J, 1 / 2) * 0.1;
	}
	else if (cam16.Q !== undefined) {
		Jroot = (0.25 * env.c * cam16.Q) / ((env.aW + 4) * env.flRoot);
	}

	// Calculate the `t` value from one of the chroma derived coordinates
	let alpha = 0.0;
	if (cam16.C !== undefined) {
		alpha = cam16.C / Jroot;
	}
	else if (cam16.M !== undefined) {
		alpha = cam16.M / env.flRoot / Jroot;
	}
	else if (cam16.s !== undefined) {
		alpha = (0.0004 * cam16.s ** 2 * (env.aW + 4)) / env.c;
	}
	const t = spow(alpha * Math.pow(1.64 - Math.pow(0.29, env.n), -0.73), 10 / 9);

	// Eccentricity
	const et = 0.25 * (Math.cos(hRad + 2) + 3.8);

	// Achromatic response
	const A = env.aW * spow(Jroot, 2 / env.c / env.z);

	// Calculate red-green and yellow-blue components
	const p1 = (5e4 / 13) * env.nc * env.ncb * et;
	const p2 = A / env.nbb;
	const r = 23 * (p2 + 0.305) * zdiv(t, 23 * p1 + t * (11 * cosh + 108 * sinh));
	const a = r * cosh;
	const b = r * sinh;

	// Calculate back from cone response to XYZ
	const rgb_c = unadapt(
		/** @type {Vector3} */
		(
			multiply_v3_m3x3([p2, a, b], m1).map(c => {
				return (c * 1) / 1403;
			})
		),
		env.fl,
	);
	return /** @type {Vector3} */ (
		multiply_v3_m3x3(
			/** @type {Vector3} */ (
				rgb_c.map((c, i) => {
					return c * env.dRgbInv[i];
				})
			),
			cat16Inv,
		).map(c => {
			return c / 100;
		})
	);
}

/**
 * @param {[number, number, number]} xyzd65
 * @param {Cam16Environment} env
 * @returns {Cam16Object}
 */
function toCam16 (xyzd65, env) {
	// Cone response
	const xyz100 = /** @type {Vector3} */ (
		xyzd65.map(c => {
			return c * 100;
		})
	);
	const rgbA = adapt$1(
		/** @type {[number, number, number]} */
		(
			multiply_v3_m3x3(xyz100, cat16).map((c, i) => {
				return c * env.dRgb[i];
			})
		),
		env.fl,
	);

	// Calculate hue from red-green and yellow-blue components
	const a = rgbA[0] + (-12 * rgbA[1] + rgbA[2]) / 11;
	const b = (rgbA[0] + rgbA[1] - 2 * rgbA[2]) / 9;
	const hRad = ((Math.atan2(b, a) % tau$1) + tau$1) % tau$1;

	// Eccentricity
	const et = 0.25 * (Math.cos(hRad + 2) + 3.8);

	const t =
		(5e4 / 13) *
		env.nc *
		env.ncb *
		zdiv(et * Math.sqrt(a ** 2 + b ** 2), rgbA[0] + rgbA[1] + 1.05 * rgbA[2] + 0.305);
	const alpha = spow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, env.n), 0.73);

	// Achromatic response
	const A = env.nbb * (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]);

	const Jroot = spow(A / env.aW, 0.5 * env.c * env.z);

	// Lightness
	const J = 100 * spow(Jroot, 2);

	// Brightness
	const Q = (4 / env.c) * Jroot * (env.aW + 4) * env.flRoot;

	// Chroma
	const C = alpha * Jroot;

	// Colorfulness
	const M = C * env.flRoot;

	// Hue
	const h = constrain(hRad * rad2deg);

	// Hue quadrature
	const H = hueQuadrature(h);

	// Saturation
	const s = 50 * spow((env.c * alpha) / (env.aW + 4), 1 / 2);

	// console.log({J: J, C: C, h: h, s: s, Q: Q, M: M, H: H});

	return { J: J, C: C, h: h, s: s, Q: Q, M: M, H: H };
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
			name: "J",
		},
		m: {
			refRange: [0, 105.0],
			name: "Colorfulness",
		},
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		},
	},

	base: xyz_d65,

	fromBase (xyz) {
		// If another derivation is created, ε could vary, so we can't hardcode
		if (this.ε === undefined) {
			this.ε = Object.values(this.coords)[1].refRange[1] / 100000;
		}
		const cam16 = toCam16(xyz, viewingConditions$1);
		const isAchromatic = Math.abs(cam16.M) < this.ε;
		return [cam16.J, isAchromatic ? 0 : cam16.M, isAchromatic ? null : cam16.h];
	},
	toBase (cam16) {
		return fromCam16({ J: cam16[0], M: cam16[1], h: cam16[2] }, viewingConditions$1);
	},
});

const white$2 = WHITES.D65;
const ε$4 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const κ$3 = 24389 / 27; // 29^3/3^3

function toLstar (y) {
	// Convert XYZ Y to L*

	const fy = y > ε$4 ? Math.cbrt(y) : (κ$3 * y + 16) / 116;
	return 116.0 * fy - 16.0;
}

function fromLstar (lstar) {
	// Convert L* back to XYZ Y

	return lstar > 8 ? Math.pow((lstar + 16) / 116, 3) : lstar / κ$3;
}

function fromHct (coords, env) {
	// Use Newton's method to try and converge as quick as possible or
	// converge as close as we can. While the requested precision is achieved
	// most of the time, it may not always be achievable. Especially past the
	// visible spectrum, the algorithm will likely struggle to get the same
	// precision. If, for whatever reason, we cannot achieve the accuracy we
	// seek in the allotted iterations, just return the closest we were able to
	// get.

	let [h, c, t] = coords;
	let xyz = [];
	let j = 0;

	// Shortcut out for black
	if (t === 0) {
		return [0.0, 0.0, 0.0];
	}

	// Calculate the Y we need to target
	let y = fromLstar(t);

	// A better initial guess yields better results. Polynomials come from
	// curve fitting the T vs J response.
	if (t > 0) {
		j = 0.00379058511492914 * t ** 2 + 0.608983189401032 * t + 0.9155088574762233;
	}
	else {
		j = 9.514440756550361e-6 * t ** 2 + 0.08693057439788597 * t - 21.928975842194614;
	}

	// Threshold of how close is close enough, and max number of attempts.
	// More precision and more attempts means more time spent iterating. Higher
	// required precision gives more accuracy but also increases the chance of
	// not hitting the goal. 2e-12 allows us to convert round trip with
	// reasonable accuracy of six decimal places or more.
	const threshold = 2e-12;
	const max_attempts = 15;

	let attempt = 0;
	let last = Infinity;

	// Try to find a J such that the returned y matches the returned y of the L*
	while (attempt <= max_attempts) {
		xyz = fromCam16({ J: j, C: c, h: h }, env);

		// If we are within range, return XYZ
		// If we are closer than last time, save the values
		const delta = Math.abs(xyz[1] - y);
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
		j = j - ((xyz[1] - y) * j) / (2 * xyz[1]);

		attempt += 1;
	}

	// We could not acquire the precision we desired,
	// return our closest attempt.
	return fromCam16({ J: j, C: c, h: h }, env);
}

function toHct (xyz, env) {
	// Calculate HCT by taking the L* of CIE LCh D65 and CAM16 chroma and hue.

	const t = toLstar(xyz[1]);
	if (t === 0.0) {
		return [0.0, 0.0, 0.0];
	}
	const cam16 = toCam16(xyz, viewingConditions);
	return [constrain(cam16.h), cam16.C, t];
}

// Pre-calculate everything we can with the viewing conditions
const viewingConditions = environment(
	white$2,
	(200 / Math.PI) * fromLstar(50.0),
	fromLstar(50.0) * 100,
	"average",
	false,
);

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
			name: "Hue",
		},
		c: {
			refRange: [0, 145],
			name: "Colorfulness",
		},
		t: {
			refRange: [0, 100],
			name: "Tone",
		},
	},

	base: xyz_d65,

	fromBase (xyz) {
		if (this.ε === undefined) {
			this.ε = Object.values(this.coords)[1].refRange[1] / 100000;
		}
		let hct = toHct(xyz);
		if (hct[1] < this.ε) {
			hct[1] = 0.0;
			hct[0] = null;
		}
		return hct;
	},
	toBase (hct) {
		return fromHct(hct, viewingConditions);
	},
	formats: {
		color: {
			id: "--hct",
			coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
		},
	},
});

const deg2rad = Math.PI / 180;
const ucsCoeff = [1.0, 0.007, 0.0228];

/**
 * Convert HCT chroma and hue (CAM16 JMh colorfulness and hue) using UCS logic for a and b.
 * @param {Coords} coords - HCT coordinates.
 * @return {number[]}
 */
function convertUcsAb (coords) {
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
	const M =
		Math.log(Math.max(1 + ucsCoeff[2] * coords[1] * viewingConditions.flRoot, 1.0)) /
		ucsCoeff[2];
	const hrad = coords[0] * deg2rad;
	const a = M * Math.cos(hrad);
	const b = M * Math.sin(hrad);

	return [coords[2], a, b];
}

/**
 * Color distance using HCT.
 * @param {import("../types.js").ColorTypes} color
 * @param {import("../types.js").ColorTypes} sample
 * @returns {number}
 */
function deltaEHCT (color, sample) {
	[color, sample] = getColor([color, sample]);

	let [t1, a1, b1] = convertUcsAb(hct.from(color));
	let [t2, a2, b2] = convertUcsAb(hct.from(sample));

	// Use simple euclidean distance with a and b using UCS conversion
	// and LCh lightness (HCT tone).
	return Math.sqrt((t1 - t2) ** 2 + (a1 - a2) ** 2 + (b1 - b2) ** 2);
}

/**
 * @packageDocumentation
 * This module defines all the builtin deltaE methods.
 */

var deltaEMethods = {
	deltaE76,
	deltaECMC,
	deltaE2000,
	deltaEJz,
	deltaEITP,
	deltaEOK,
	deltaEOK2,
	deltaEHCT,
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
function calcEpsilon (jnd) {
	// Calculate the epsilon to 2 degrees smaller than the specified JND.

	const order = !jnd ? 0 : Math.floor(Math.log10(Math.abs(jnd)));
	// Limit to an arbitrary value to ensure value is never too small and causes infinite loops.
	return Math.max(parseFloat(`1e${order - 2}`), 1e-6);
}

const GMAPPRESET = {
	hct: {
		method: "hct.c",
		jnd: 2,
		deltaEMethod: "hct",
		blackWhiteClamp: {},
	},
	"hct-tonal": {
		method: "hct.c",
		jnd: 0,
		deltaEMethod: "hct",
		blackWhiteClamp: { channel: "hct.t", min: 0, max: 100 },
	},
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
function toGamut (
	color,
	{
		method = defaults.gamut_mapping,
		space = undefined,
		deltaEMethod = "",
		jnd = 2,
		blackWhiteClamp = undefined,
	} = {},
) {
	color = getColor(color);

	if (isString(arguments[1])) {
		space = arguments[1];
	}
	else if (!space) {
		space = color.space;
	}

	space = ColorSpace.get(space);

	// 3 spaces:
	// color.space: current color space
	// space: space whose gamut we are mapping to
	// mapSpace: space with the coord we're reducing

	if (inGamut(color, space, { epsilon: 0 })) {
		return /** @type {PlainColorObject} */ (color);
	}

	let spaceColor;
	if (method === "css") {
		spaceColor = toGamutCSS(color, { space });
	}
	else {
		if (method !== "clip" && !inGamut(color, space)) {
			if (Object.prototype.hasOwnProperty.call(GMAPPRESET, method)) {
				({ method, jnd, deltaEMethod, blackWhiteClamp } = GMAPPRESET[method]);
			}

			// Get the correct delta E method
			let de = deltaE2000;
			if (deltaEMethod !== "") {
				for (let m in deltaEMethods) {
					if ("deltae" + deltaEMethod.toLowerCase() === m.toLowerCase()) {
						de = deltaEMethods[m];
						break;
					}
				}
			}

			if (jnd === 0) {
				jnd = 1e-16;
			}

			let clipped = toGamut(to(color, space), { method: "clip", space });
			if (de(color, clipped) > jnd) {
				// Clamp to SDR white and black if required
				if (blackWhiteClamp && Object.keys(blackWhiteClamp).length === 3) {
					let channelMeta = ColorSpace.resolveCoord(blackWhiteClamp.channel);
					let channel = get(to(color, channelMeta.space), channelMeta.id);
					if (isNone(channel)) {
						channel = 0;
					}
					if (channel >= blackWhiteClamp.max) {
						return to({ space: "xyz-d65", coords: WHITES["D65"] }, color.space);
					}
					else if (channel <= blackWhiteClamp.min) {
						return to({ space: "xyz-d65", coords: [0, 0, 0] }, color.space);
					}
				}

				// Reduce a coordinate of a certain color space until the color is in gamut
				let coordMeta = ColorSpace.resolveCoord(method);
				let mapSpace = coordMeta.space;
				let coordId = coordMeta.id;

				let mappedColor = to(color, mapSpace);
				// If we were already in the mapped color space, we need to resolve undefined channels
				mappedColor.coords.forEach((c, i) => {
					if (isNone(c)) {
						mappedColor.coords[i] = 0;
					}
				});
				let bounds = coordMeta.range || coordMeta.refRange;
				let min = bounds[0];
				let ε = calcEpsilon(jnd);
				let low = min;
				let high = get(mappedColor, coordId);

				while (high - low > ε) {
					let clipped = clone(mappedColor);
					clipped = toGamut(clipped, { space, method: "clip" });
					let deltaE = de(mappedColor, clipped);

					if (deltaE - jnd < ε) {
						low = get(mappedColor, coordId);
					}
					else {
						high = get(mappedColor, coordId);
					}

					set(mappedColor, coordId, (low + high) / 2);
				}

				spaceColor = to(mappedColor, space);
			}
			else {
				spaceColor = clipped;
			}
		}
		else {
			spaceColor = to(color, space);
		}

		if (
			method === "clip" || // Dumb coord clipping
			// finish off smarter gamut mapping with clip to get rid of ε, see #17
			!inGamut(spaceColor, space, { epsilon: 0 })
		) {
			let bounds = Object.values(space.coords).map(c => c.range || []);

			spaceColor.coords = /** @type {[number, number, number]} */ (
				spaceColor.coords.map((c, i) => {
					let [min, max] = bounds[i];

					if (min !== undefined) {
						c = Math.max(min, c);
					}

					if (max !== undefined) {
						c = Math.min(c, max);
					}

					return c;
				})
			);
		}
	}

	if (space !== color.space) {
		spaceColor = to(spaceColor, color.space);
	}

	color.coords = spaceColor.coords;
	return /** @type {PlainColorObject} */ (color);
}

/** @type {"color"} */
toGamut.returns = "color";

/**
 * The reference colors to be used if lightness is out of the range 0-1 in the
 * `Oklch` space. These are created in the `Oklab` space, as it is used by the
 * DeltaEOK calculation, so it is guaranteed to be imported.
 * @satisfies {Record<string, ColorTypes>}
 */
const COLORS = {
	WHITE: { space: Oklab, coords: [1, 0, 0], alpha: 1 },
	BLACK: { space: Oklab, coords: [0, 0, 0], alpha: 1 },
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
function toGamutCSS (origin, { space } = {}) {
	const JND = 0.02;
	const ε = 0.0001;

	origin = getColor(origin);

	if (!space) {
		space = origin.space;
	}

	space = ColorSpace.get(space);
	const oklchSpace = ColorSpace.get("oklch");

	if (space.isUnbounded) {
		return to(origin, space);
	}

	const origin_OKLCH = to(origin, oklchSpace);
	let L = origin_OKLCH.coords[0];

	// return media white or black, if lightness is out of range
	if (L >= 1) {
		const white = to(COLORS.WHITE, space);
		white.alpha = origin.alpha;
		return to(white, space);
	}
	if (L <= 0) {
		const black = to(COLORS.BLACK, space);
		black.alpha = origin.alpha;
		return to(black, space);
	}

	if (inGamut(origin_OKLCH, space, { epsilon: 0 })) {
		return to(origin_OKLCH, space);
	}

	function clip (_color) {
		const destColor = to(_color, space);
		const spaceCoords = Object.values(/** @type {ColorSpace} */ (space).coords);
		destColor.coords = /** @type {[number, number, number]} */ (
			destColor.coords.map((coord, index) => {
				if ("range" in spaceCoords[index]) {
					const [min, max] = spaceCoords[index].range;
					return clamp(min, coord, max);
				}
				return coord;
			})
		);
		return destColor;
	}
	let min = 0;
	let max = origin_OKLCH.coords[1];
	let min_inGamut = true;
	let current = clone(origin_OKLCH);
	let clipped = clip(current);

	let E = deltaEOK(clipped, current);
	if (E < JND) {
		return clipped;
	}

	while (max - min > ε) {
		const chroma = (min + max) / 2;
		current.coords[1] = chroma;
		if (min_inGamut && inGamut(current, space, { epsilon: 0 })) {
			min = chroma;
		}
		else {
			clipped = clip(current);
			E = deltaEOK(clipped, current);
			if (E < JND) {
				if (JND - E < ε) {
					break;
				}
				else {
					min_inGamut = false;
					min = chroma;
				}
			}
			else {
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
function to (color, space, { inGamut } = {}) {
	color = getColor(color);
	space = ColorSpace.get(space);

	let coords = space.from(color);
	let ret = { space, coords, alpha: color.alpha };

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
function serialize (color, options = {}) {
	let {
		precision = defaults.precision,
		format,
		inGamut: inGamut$1 = true,
		coords: coordFormat,
		alpha: alphaFormat,
		commas,
	} = options;
	let ret;

	let colorWithMeta = /** @type {PlainColorObject & ParseOptions} */ (getColor(color));

	let formatId = format;
	let parseMeta = colorWithMeta.parseMeta;

	if (parseMeta && !format) {
		if (parseMeta.format.canSerialize()) {
			format = parseMeta.format;
			formatId = parseMeta.formatId;
		}

		coordFormat ??= parseMeta.types;
		alphaFormat ??= parseMeta.alphaType;
		commas ??= parseMeta.commas;
	}

	if (formatId) {
		// A format is explicitly specified
		format = colorWithMeta.space.getFormat(format) ?? ColorSpace.findFormat(formatId);
	}

	if (!format) {
		// No format specified, or format not found
		format = colorWithMeta.space.getFormat("default") ?? ColorSpace.DEFAULT_FORMAT;
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

	let coords = colorWithMeta.coords.slice(); // clone so we can manipulate it

	inGamut$1 ||= format.toGamut;

	if (inGamut$1 && !inGamut(colorWithMeta)) {
		// FIXME what happens if the color contains none values?
		coords = toGamut(clone(colorWithMeta), inGamut$1 === true ? undefined : inGamut$1).coords;
	}

	if (format.type === "custom") {
		if (format.serialize) {
			ret = format.serialize(coords, colorWithMeta.alpha, options);
		}
		else {
			throw new TypeError(
				`format ${formatId} can only be used to parse colors, not for serialization`,
			);
		}
	}
	else {
		// Functional syntax
		let name = format.name || "color";

		let args = format.serializeCoords(coords, precision, coordFormat);

		if (name === "color") {
			// If output is a color() function, add colorspace id as first argument
			let cssId =
				format.id || format.ids?.[0] || colorWithMeta.space.cssId || colorWithMeta.space.id;
			args.unshift(cssId);
		}

		// Serialize alpha?
		/** @type {string | number} */
		let alpha = colorWithMeta.alpha;

		if (alphaFormat !== undefined && !(typeof alphaFormat === "object")) {
			alphaFormat =
				typeof alphaFormat === "string" ? { type: alphaFormat } : { include: alphaFormat };
		}

		let alphaType = alphaFormat?.type ?? "<number>";
		let serializeAlpha =
			alphaFormat?.include === true ||
			format.alpha === true ||
			(alphaFormat?.include !== false && format.alpha !== false && alpha < 1);
		let strAlpha = "";

		commas ??= format.commas;

		if (serializeAlpha) {
			if (precision !== null) {
				let unit;

				if (alphaType === "<percentage>") {
					unit = "%";
					alpha *= 100;
				}

				alpha = serializeNumber(alpha, { precision, unit });
			}

			strAlpha = `${commas ? "," : " /"} ${alpha}`;
		}

		ret = `${name}(${args.join(commas ? ", " : " ")}${strAlpha})`;
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
const toXYZ_M$5 = [
	[ 0.6369580483012914, 0.14461690358620832,  0.1688809751641721  ],
	[ 0.2627002120112671, 0.6779980715188708,   0.05930171646986196 ],
	[ 0.000000000000000,  0.028072693049087428, 1.060985057710791   ],
];

// from ITU-R BT.2124-0 Annex 2 p.3
/** @type {Matrix3x3} */
// prettier-ignore
const fromXYZ_M$5 = [
	[  1.716651187971268,  -0.355670783776392, -0.253366281373660  ],
	[ -0.666684351832489,   1.616481236634939,  0.0157685458139111 ],
	[  0.017639857445311,  -0.042770613257809,  0.942103121235474  ],
];

var REC_2020_Linear = new RGBColorSpace({
	id: "rec2020-linear",
	cssId: "--rec2020-linear",
	name: "Linear REC.2020",
	white: "D65",
	toXYZ_M: toXYZ_M$5,
	fromXYZ_M: fromXYZ_M$5,
});

// import sRGB from "./srgb.js";

var REC2020 = new RGBColorSpace({
	id: "rec2020",
	name: "REC.2020",
	base: REC_2020_Linear,
	//  Reference electro-optical transfer function from Rec. ITU-R BT.1886 Annex 1
	//  with b (black lift) = 0 and a (user gain) = 1
	//  defined over the extended range, not clamped
	toBase (RGB) {
		return RGB.map(function (val) {
			let sign = val < 0 ? -1 : 1;
			let abs = val * sign;
			return sign * Math.pow(abs, 2.4);
		});
	},
	fromBase (RGB) {
		return RGB.map(function (val) {
			let sign = val < 0 ? -1 : 1;
			let abs = val * sign;
			return sign * Math.pow(abs, 1 / 2.4);
		});
	},
});

/** @import { Matrix3x3 } from "../types.js" */

/** @type {Matrix3x3} */
// prettier-ignore
const toXYZ_M$4 = [
	[0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
	[0.2289745640697488, 0.6917385218365064,  0.079286914093745],
	[0.0000000000000000, 0.04511338185890264, 1.043944368900976],
];

/** @type {Matrix3x3} */
// prettier-ignore
const fromXYZ_M$4 = [
	[ 2.493496911941425,   -0.9313836179191239, -0.40271078445071684],
	[-0.8294889695615747,   1.7626640603183463,  0.023624685841943577],
	[ 0.03584583024378447, -0.07617238926804182, 0.9568845240076872],
];

var P3Linear = new RGBColorSpace({
	id: "p3-linear",
	cssId: "display-p3-linear",
	name: "Linear P3",
	white: "D65",
	toXYZ_M: toXYZ_M$4,
	fromXYZ_M: fromXYZ_M$4,
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
const toXYZ_M$3 = [
	[ 0.41239079926595934, 0.357584339383878,   0.1804807884018343  ],
	[ 0.21263900587151027, 0.715168678767756,   0.07219231536073371 ],
	[ 0.01933081871559182, 0.11919477979462598, 0.9505321522496607  ],
];

// This matrix is the inverse of the above;
// again it agrees with the official definition when rounded to 8 decimal places
/** @type {Matrix3x3} */
// prettier-ignore
const fromXYZ_M$3 = [
	[  3.2409699419045226,  -1.537383177570094,   -0.4986107602930034  ],
	[ -0.9692436362808796,   1.8759675015077202,   0.04155505740717559 ],
	[  0.05563007969699366, -0.20397695888897652,  1.0569715142428786  ],
];

var sRGBLinear = new RGBColorSpace({
	id: "srgb-linear",
	name: "Linear sRGB",
	white: "D65",
	toXYZ_M: toXYZ_M$3,
	fromXYZ_M: fromXYZ_M$3,
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
	yellowgreen: [154 / 255, 205 / 255, 50 / 255],
};

/** @import { Coords } from "../types.js" */

let coordGrammar = Array(3).fill("<percentage> | <number>[0, 255]");
let coordGrammarNumber = Array(3).fill("<number>[0, 255]");

var sRGB = new RGBColorSpace({
	id: "srgb",
	name: "sRGB",
	base: sRGBLinear,
	fromBase: rgb => {
		// convert an array of linear-light sRGB values in the range 0.0-1.0
		// to gamma corrected form
		// https://en.wikipedia.org/wiki/SRGB
		return rgb.map(val => {
			let sign = val < 0 ? -1 : 1;
			let abs = val * sign;

			if (abs > 0.0031308) {
				return sign * (1.055 * abs ** (1 / 2.4) - 0.055);
			}

			return 12.92 * val;
		});
	},
	toBase: rgb => {
		// convert an array of sRGB values in the range 0.0 - 1.0
		// to linear light (un-companded) form.
		// https://en.wikipedia.org/wiki/SRGB
		return rgb.map(val => {
			let sign = val < 0 ? -1 : 1;
			let abs = val * sign;

			if (abs <= 0.04045) {
				return val / 12.92;
			}

			return sign * ((abs + 0.055) / 1.055) ** 2.4;
		});
	},
	formats: {
		rgb: {
			coords: coordGrammar,
		},
		rgb_number: {
			name: "rgb",
			commas: true,
			coords: coordGrammarNumber,
			alpha: false,
		},
		color: {
			/* use defaults */
		},
		rgba: {
			coords: coordGrammar,
			commas: true,
			alpha: true,
		},
		rgba_number: {
			name: "rgba",
			commas: true,
			coords: coordGrammarNumber,
		},
		hex: {
			type: "custom",
			toGamut: true,
			test: str => /^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(str),
			parse (str) {
				if (str.length <= 5) {
					// #rgb or #rgba, duplicate digits
					str = str.replace(/[a-f0-9]/gi, "$&$&");
				}

				/** @type {number[]} */
				let rgba = [];
				// @ts-expect-error Type 'void' is not assignable to type 'string'
				str.replace(/[a-f0-9]{2}/gi, component => {
					rgba.push(parseInt(component, 16) / 255);
				});

				return {
					spaceId: "srgb",
					coords: /** @type {Coords} */ (rgba.slice(0, 3)),
					alpha: /** @type {number} */ (rgba.slice(3)[0]),
				};
			},
			serialize: (
				coords,
				alpha,
				{
					collapse = true, // collapse to 3-4 digit hex when possible?
					alpha: alphaFormat,
				} = {},
			) => {
				if ((alphaFormat !== false && alpha < 1) || alphaFormat === true) {
					coords.push(alpha);
				}

				coords = /** @type {[number, number, number]} */ (
					coords.map(c => Math.round(c * 255))
				);

				let collapsible = collapse && coords.every(c => c % 17 === 0);

				let hex = coords
					.map(c => {
						if (collapsible) {
							return (c / 17).toString(16);
						}

						return c.toString(16).padStart(2, "0");
					})
					.join("");

				return "#" + hex;
			},
		},
		keyword: {
			type: "custom",
			test: str => /^[a-z]+$/i.test(str),
			parse (str) {
				str = str.toLowerCase();
				let ret = { spaceId: "srgb", coords: null, alpha: 1 };

				if (str === "transparent") {
					ret.coords = KEYWORDS.black;
					ret.alpha = 0;
				}
				else {
					ret.coords = KEYWORDS[str];
				}

				if (ret.coords) {
					return ret;
				}
			},
		},
	},
});

var P3 = new RGBColorSpace({
	id: "p3",
	cssId: "display-p3",
	name: "P3",
	base: P3Linear,
	// Gamma encoding/decoding is the same as sRGB
	fromBase: sRGB.fromBase,
	toBase: sRGB.toBase,
});

/** @import ColorSpace from "./ColorSpace.js" */
/** @import { ColorTypes, PlainColorObject } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").Display} Display */

// Default space for CSS output. Code in Color.js makes this wider if there's a DOM available
defaults.display_space = sRGB;

let supportsNone;

if (typeof CSS !== "undefined" && CSS.supports) {
	// Find widest supported color space for CSS
	for (let space of [lab, REC2020, P3]) {
		let coords = space.getMinCoords();
		let color = { space, coords, alpha: 1 };
		let str = serialize(color);

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
function display (color, { space = defaults.display_space, ...options } = {}) {
	color = getColor(color);

	let ret = /** @type {Display} */ (serialize(color, options));

	if (
		typeof CSS === "undefined" ||
		CSS.supports("color", /** @type {string} */ (ret)) ||
		!defaults.display_space
	) {
		ret = /** @type {Display} */ (new String(ret));
		ret.color = /** @type {PlainColorObject} */ (color);
	}
	else {
		// If we're here, what we were about to output is not supported
		let fallbackColor = /** @type {PlainColorObject} */ (color);

		// First, check if the culprit is none values
		let hasNone = color.coords.some(isNone) || isNone(color.alpha);

		if (hasNone) {
			// Does the browser support none values?
			if (!(supportsNone ??= CSS.supports("color", "hsl(none 50% 50%)"))) {
				// Nope, try again without none
				fallbackColor = clone(/** @type {PlainColorObject} */ (color));
				fallbackColor.coords = /** @type {[number, number, number]} */ (
					fallbackColor.coords.map(skipNone)
				);
				fallbackColor.alpha = skipNone(fallbackColor.alpha);

				// @ts-expect-error This is set to the correct type later
				ret = serialize(fallbackColor, options);

				if (CSS.supports("color", /** @type {string} */ (ret))) {
					// We're done, now it's supported
					ret = /** @type {Display} */ (new String(ret));
					ret.color = fallbackColor;
					return ret;
				}
			}
		}

		// If we're here, the color function is not supported
		// Fall back to fallback space
		fallbackColor = to(fallbackColor, space);
		ret = /** @type {Display} */ (new String(serialize(fallbackColor, options)));
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
function deltas (c1, c2, { space, hue = "shorter" } = {}) {
	c1 = getColor(c1);
	space ||= c1.space;
	space = ColorSpace.get(space);
	let spaceCoords = Object.values(space.coords);

	[c1, c2] = [c1, c2].map(c => to(c, space));
	let [coords1, coords2] = [c1, c2].map(c => c.coords);

	let coords = /** @type {[number, number, number]} */ (
		coords1.map((coord1, i) => {
			let coordMeta = spaceCoords[i];
			let coord2 = coords2[i];

			if (coordMeta.type === "angle") {
				[coord1, coord2] = adjust(hue, [coord1, coord2]);
			}

			return subtractCoords(coord1, coord2);
		})
	);

	let alpha = subtractCoords(c1.alpha, c2.alpha);

	return { space: /** @type {ColorSpace} */ (space), coords, alpha };
}

function subtractCoords (c1, c2) {
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
function equals (color1, color2) {
	color1 = getColor(color1);
	color2 = getColor(color2);

	return (
		color1.space === color2.space &&
		color1.alpha === color2.alpha &&
		color1.coords.every((c, i) => c === color2.coords[i])
	);
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
function getLuminance (color) {
	// Assume getColor() is called on color in get()
	return get(color, [xyz_d65, "y"]);
}

/**
 * @param {ColorTypes} color
 * @param {number | ((coord: number) => number)} value
 */
function setLuminance (color, value) {
	// Assume getColor() is called on color in set()
	set(color, [xyz_d65, "y"], value);
}

/**
 * @param {typeof import("./color.js").default} Color
 */
function register$2 (Color) {
	Object.defineProperty(Color.prototype, "luminance", {
		get () {
			return getLuminance(this);
		},
		set (value) {
			setLuminance(this, value);
		},
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
function contrastWCAG21 (color1, color2) {
	color1 = getColor(color1);
	color2 = getColor(color2);

	let Y1 = Math.max(getLuminance(color1), 0);
	let Y2 = Math.max(getLuminance(color2), 0);

	if (Y2 > Y1) {
		[Y1, Y2] = [Y2, Y1];
	}

	return (Y1 + 0.05) / (Y2 + 0.05);
}

// APCA 0.0.98G
// https://github.com/Myndex/apca-w3
// see also https://github.com/w3c/silver/issues/643


// exponents
const normBG = 0.56;
const normTXT = 0.57;
const revTXT = 0.62;
const revBG = 0.65;

// clamps
const blkThrs = 0.022;
const blkClmp = 1.414;
const loClip = 0.1;
const deltaYmin = 0.0005;

// scalers
// see https://github.com/w3c/silver/issues/645
const scaleBoW = 1.14;
const loBoWoffset = 0.027;
const scaleWoB = 1.14;

function fclamp (Y) {
	if (Y >= blkThrs) {
		return Y;
	}
	return Y + (blkThrs - Y) ** blkClmp;
}

function linearize (val) {
	let sign = val < 0 ? -1 : 1;
	let abs = Math.abs(val);
	return sign * Math.pow(abs, 2.4);
}

/**
 * Not symmetric, requires a foreground (text) color, and a background color
 * @param {import("../types.js").ColorTypes} background
 * @param {import("../types.js").ColorTypes} foreground
 * @returns {number}
 */
function contrastAPCA (background, foreground) {
	foreground = getColor(foreground);
	background = getColor(background);

	let S;
	let C;
	let Sapc;

	// Myndex as-published, assumes sRGB inputs
	let R, G, B;

	foreground = to(foreground, "srgb");
	// Should these be clamped to in-gamut values?

	// Calculates "screen luminance" with non-standard simple gamma EOTF
	// weights should be from CSS Color 4, not the ones here which are via Myndex and copied from Lindbloom
	[R, G, B] = foreground.coords.map(c => {
		return isNone(c) ? 0 : c;
	});
	let lumTxt = linearize(R) * 0.2126729 + linearize(G) * 0.7151522 + linearize(B) * 0.072175;

	background = to(background, "srgb");
	[R, G, B] = background.coords.map(c => {
		return isNone(c) ? 0 : c;
	});
	let lumBg = linearize(R) * 0.2126729 + linearize(G) * 0.7151522 + linearize(B) * 0.072175;

	// toe clamping of very dark values to account for flare
	let Ytxt = fclamp(lumTxt);
	let Ybg = fclamp(lumBg);

	// are we "Black on White" (dark on light), or light on dark?
	let BoW = Ybg > Ytxt;

	// why is this a delta, when Y is not perceptually uniform?
	// Answer: it is a noise gate, see
	// https://github.com/LeaVerou/color.js/issues/208
	if (Math.abs(Ybg - Ytxt) < deltaYmin) {
		C = 0;
	}
	else {
		if (BoW) {
			// dark text on light background
			S = Ybg ** normBG - Ytxt ** normTXT;
			C = S * scaleBoW;
		}
		else {
			// light text on dark background
			S = Ybg ** revBG - Ytxt ** revTXT;
			C = S * scaleWoB;
		}
	}
	if (Math.abs(C) < loClip) {
		Sapc = 0;
	}
	else if (C > 0) {
		// not clear whether Woffset is loBoWoffset or loWoBoffset
		// but they have the same value
		Sapc = C - loBoWoffset;
	}
	else {
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
function contrastMichelson (color1, color2) {
	color1 = getColor(color1);
	color2 = getColor(color2);

	let Y1 = Math.max(getLuminance(color1), 0);
	let Y2 = Math.max(getLuminance(color2), 0);

	if (Y2 > Y1) {
		[Y1, Y2] = [Y2, Y1];
	}

	let denom = Y1 + Y2;
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
const max = 50000;

/**
 * @param {import("../types.js").ColorTypes} color1
 * @param {import("../types.js").ColorTypes} color2
 * @returns {number}
 */
function contrastWeber (color1, color2) {
	color1 = getColor(color1);
	color2 = getColor(color2);

	let Y1 = Math.max(getLuminance(color1), 0);
	let Y2 = Math.max(getLuminance(color2), 0);

	if (Y2 > Y1) {
		[Y1, Y2] = [Y2, Y1];
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
function contrastLstar (color1, color2) {
	color1 = getColor(color1);
	color2 = getColor(color2);

	let L1 = get(color1, [lab, "l"]);
	let L2 = get(color2, [lab, "l"]);

	return Math.abs(L1 - L2);
}

// κ * ε  = 2^3 = 8
const ε$3 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const ε3 = 24 / 116;
const κ$2 = 24389 / 27; // 29^3/3^3

let white$1 = WHITES.D65;

var lab_d65 = new ColorSpace({
	id: "lab-d65",
	name: "Lab D65",
	coords: {
		l: {
			refRange: [0, 100],
			name: "Lightness",
		},
		a: {
			refRange: [-125, 125],
		},
		b: {
			refRange: [-125, 125],
		},
	},

	// Assuming XYZ is relative to D65, convert to CIE Lab
	// from CIE standard, which now defines these as a rational fraction
	white: white$1,

	base: xyz_d65,
	// Convert D65-adapted XYZ to Lab
	//  CIE 15.3:2004 section 8.2.1.1
	fromBase (XYZ) {
		// compute xyz, which is XYZ scaled relative to reference white
		let xyz = XYZ.map((value, i) => value / white$1[i]);

		// now compute f
		let f = xyz.map(value => (value > ε$3 ? Math.cbrt(value) : (κ$2 * value + 16) / 116));

		return [
			116 * f[1] - 16, // L
			500 * (f[0] - f[1]), // a
			200 * (f[1] - f[2]), // b
		];
	},
	// Convert Lab to D65-adapted XYZ
	// Same result as CIE 15.3:2004 Appendix D although the derivation is different
	// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	toBase (Lab) {
		// compute f, starting with the luminance-related term
		let f = [];
		f[1] = (Lab[0] + 16) / 116;
		f[0] = Lab[1] / 500 + f[1];
		f[2] = f[1] - Lab[2] / 200;

		// compute xyz
		let xyz = [
			f[0] > ε3 ? Math.pow(f[0], 3) : (116 * f[0] - 16) / κ$2,
			Lab[0] > 8 ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / κ$2,
			f[2] > ε3 ? Math.pow(f[2], 3) : (116 * f[2] - 16) / κ$2,
		];

		// Compute XYZ by scaling xyz by reference white
		return xyz.map((value, i) => value * white$1[i]);
	},

	formats: {
		"lab-d65": {
			coords: [
				"<number> | <percentage>",
				"<number> | <percentage>",
				"<number> | <percentage>",
			],
		},
	},
});

// Delta Phi Star perceptual lightness contrast
// See https://github.com/Myndex/deltaphistar
// The (difference between two Lstars each raised to phi) raised to (1/phi)
// Symmetric, does not matter which is foreground and which is background


const phi = Math.pow(5, 0.5) * 0.5 + 0.5; // Math.phi can be used if Math.js

/**
 * @param {import("../types.js").ColorTypes} color1
 * @param {import("../types.js").ColorTypes} color2
 * @returns {number}
 */
function contrastDeltaPhi (color1, color2) {
	color1 = getColor(color1);
	color2 = getColor(color2);

	let Lstr1 = get(color1, [lab_d65, "l"]);
	let Lstr2 = get(color2, [lab_d65, "l"]);

	let deltaPhiStar = Math.abs(Math.pow(Lstr1, phi) - Math.pow(Lstr2, phi));

	let contrast = Math.pow(deltaPhiStar, 1 / phi) * Math.SQRT2 - 40;

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
function contrast (background, foreground, o) {
	if (isString(o)) {
		o = { algorithm: o };
	}

	let { algorithm, ...rest } = o || {};

	if (!algorithm) {
		let algorithms = Object.keys(contrastMethods)
			.map(a => a.replace(/^contrast/, ""))
			.join(", ");
		throw new TypeError(
			`contrast() function needs a contrast algorithm. Please specify one of: ${algorithms}`,
		);
	}

	background = getColor(background);
	foreground = getColor(foreground);

	for (let a in contrastMethods) {
		if ("contrast" + algorithm.toLowerCase() === a.toLowerCase()) {
			return contrastMethods[a](background, foreground, rest);
		}
	}

	throw new TypeError(`Unknown contrast algorithm: ${algorithm}`);
}

/** @import Color, { ColorTypes } from "./color.js" */

// Chromaticity coordinates
/**
 * @param {ColorTypes} color
 * @returns {[number, number]}
 */
function uv (color) {
	// Assumes getAll() calls getColor() on color
	let [X, Y, Z] = getAll(color, xyz_d65);
	let denom = X + 15 * Y + 3 * Z;
	return [(4 * X) / denom, (9 * Y) / denom];
}

/**
 * @param {ColorTypes} color
 * @returns {[number, number]}
 */
function xy (color) {
	// Assumes getAll() calls getColor() on color
	let [X, Y, Z] = getAll(color, xyz_d65);
	let sum = X + Y + Z;
	return [X / sum, Y / sum];
}

/**
 * @param {typeof Color} Color
 */
function register$1 (Color) {
	// no setters, as lightness information is lost
	// when converting color to chromaticity
	Object.defineProperty(Color.prototype, "uv", {
		get () {
			return uv(this);
		},
	});

	Object.defineProperty(Color.prototype, "xy", {
		get () {
			return xy(this);
		},
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
function deltaE (c1, c2, o = {}) {
	if (isString(o)) {
		o = { method: o };
	}

	let { method = defaults.deltaE, ...rest } = o;

	for (let m in deltaEMethods) {
		if ("deltae" + method.toLowerCase() === m.toLowerCase()) {
			return deltaEMethods[m](c1, c2, rest);
		}
	}

	throw new TypeError(`Unknown deltaE method: ${method}`);
}

/** @import { ColorTypes, PlainColorObject, Ref } from "./types.js" */

/**
 * @param {ColorTypes} color
 * @param {number} amount
 * @returns {PlainColorObject}
 */
function lighten (color, amount = 0.25) {
	let space = ColorSpace.get("oklch", "lch");
	let /** @type {Ref} */ lightness = [space, "l"];
	return set(color, lightness, l => l * (1 + amount));
}

/**
 * @param {ColorTypes} color
 * @param {number} amount
 * @returns {PlainColorObject}
 */
function darken (color, amount = 0.25) {
	let space = ColorSpace.get("oklch", "lch");
	let /** @type {Ref} */ lightness = [space, "l"];
	return set(color, lightness, l => l * (1 - amount));
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
function mix (c1, c2, p, o = {}) {
	[c1, c2] = [getColor(c1), getColor(c2)];

	if (type(p) === "object") {
		[p, o] = [0.5, p];
	}

	let r = range(c1, c2, o);
	return r(p ?? 0.5); // why not give p a default value like we do for options? Overloading doesn't work, and TS complains
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
function steps (c1, c2, options = {}) {
	let colorRange;

	if (isRange(c1)) {
		// Tweaking existing range
		[colorRange, options] = [c1, c2];
		[c1, c2] = colorRange.rangeArgs.colors;
	}

	let { maxDeltaE, deltaEMethod, steps = 2, maxSteps = 1000, ...rangeOptions } = options;

	if (!colorRange) {
		[c1, c2] = [getColor(c1), getColor(c2)];
		colorRange = range(c1, c2, rangeOptions);
	}

	let totalDelta = deltaE(c1, c2);
	let actualSteps =
		maxDeltaE > 0 ? Math.max(steps, Math.ceil(totalDelta / maxDeltaE) + 1) : steps;
	let ret = [];

	if (maxSteps !== undefined) {
		actualSteps = Math.min(actualSteps, maxSteps);
	}

	if (actualSteps === 1) {
		ret = [{ p: 0.5, color: colorRange(0.5) }];
	}
	else {
		let step = 1 / (actualSteps - 1);
		ret = Array.from({ length: actualSteps }, (_, i) => {
			let p = i * step;
			return { p, color: colorRange(p) };
		});
	}

	if (maxDeltaE > 0) {
		// Iterate over all stops and find max deltaE
		let maxDelta = ret.reduce((acc, cur, i) => {
			if (i === 0) {
				return 0;
			}

			let ΔΕ = deltaE(cur.color, ret[i - 1].color, deltaEMethod);
			return Math.max(acc, ΔΕ);
		}, 0);

		while (maxDelta > maxDeltaE) {
			// Insert intermediate stops and measure maxDelta again
			// We need to do this for all pairs, otherwise the midpoint shifts
			maxDelta = 0;

			for (let i = 1; i < ret.length && ret.length < maxSteps; i++) {
				let prev = ret[i - 1];
				let cur = ret[i];

				let p = (cur.p + prev.p) / 2;
				let color = colorRange(p);
				maxDelta = Math.max(maxDelta, deltaE(color, prev.color), deltaE(color, cur.color));
				ret.splice(i, 0, { p, color: colorRange(p) });
				i++;
			}
		}
	}

	ret = ret.map(a => a.color);

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
function range (color1, color2, options = {}) {
	if (isRange(color1)) {
		// Tweaking existing range
		let [r, options] = [color1, color2];

		return range(...r.rangeArgs.colors, { ...r.rangeArgs.options, ...options });
	}

	let { space, outputSpace, progression, premultiplied } = options;

	color1 = getColor(color1);
	color2 = getColor(color2);

	// Make sure we're working on copies of these colors
	color1 = clone(color1);
	color2 = clone(color2);

	let rangeArgs = { colors: [color1, color2], options };

	if (space) {
		space = ColorSpace.get(space);
	}
	else {
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
		let arc = (options.hue = options.hue || "shorter");

		let /** @type {Ref} */ hue = [space, "h"];
		let [θ1, θ2] = [get(color1, hue), get(color2, hue)];
		// Undefined hues must be evaluated before hue fix-up to properly
		// calculate hue arcs between undefined and defined hues.
		// See https://github.com/w3c/csswg-drafts/issues/9436#issuecomment-1746957545
		if (isNone(θ1) && !isNone(θ2)) {
			θ1 = θ2;
		}
		else if (isNone(θ2) && !isNone(θ1)) {
			θ2 = θ1;
		}
		[θ1, θ2] = adjust(arc, [θ1, θ2]);
		set(color1, hue, θ1);
		set(color2, hue, θ2);
	}

	if (premultiplied) {
		// not coping with polar spaces yet
		color1.coords = /** @type {[number, number, number]} */ (
			color1.coords.map(c => c * color1.alpha)
		);
		color2.coords = /** @type {[number, number, number]} */ (
			color2.coords.map(c => c * color2.alpha)
		);
	}

	return Object.assign(
		p => {
			p = progression ? progression(p) : p;
			let coords = color1.coords.map((start, i) => {
				let end = color2.coords[i];
				return interpolate(start, end, p);
			});

			let alpha = interpolate(color1.alpha, color2.alpha, p);
			let ret = { space, coords, alpha };

			if (premultiplied) {
				// undo premultiplication
				ret.coords = ret.coords.map(c => c / alpha);
			}

			if (outputSpace !== space) {
				ret = to(ret, outputSpace);
			}

			return ret;
		},
		{
			rangeArgs,
		},
	);
}

/**
 * @param {any} val
 * @returns {val is Range}
 */
function isRange (val) {
	return type(val) === "function" && !!val.rangeArgs;
}

defaults.interpolationSpace = "lab";

/**
 * @param {typeof import("./color.js").default} Color
 */
function register (Color) {
	Color.defineFunction("mix", mix, { returns: "color" });
	Color.defineFunction("range", range, { returns: "function<color>" });
	Color.defineFunction("steps", steps, { returns: "array<color>" });
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
			name: "Hue",
		},
		s: {
			range: [0, 100],
			name: "Saturation",
		},
		l: {
			range: [0, 100],
			name: "Lightness",
		},
	},

	base: sRGB,

	// Adapted from https://drafts.csswg.org/css-color-4/better-rgbToHsl.js
	fromBase: rgb => {
		let max = Math.max(...rgb);
		let min = Math.min(...rgb);
		let [r, g, b] = rgb;
		let [h, s, l] = [null, 0, (min + max) / 2];
		let d = max - min;

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
	toBase: hsl => {
		let [h, s, l] = hsl;
		h = h % 360;

		if (h < 0) {
			h += 360;
		}

		s /= 100;
		l /= 100;

		function f (n) {
			let k = (n + h / 30) % 12;
			let a = s * Math.min(l, 1 - l);
			return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
		}

		return [f(0), f(8), f(4)];
	},

	formats: {
		hsl: {
			coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
		},
		hsla: {
			coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
			commas: true,
			alpha: true,
		},
	},
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
			name: "Hue",
		},
		s: {
			range: [0, 100],
			name: "Saturation",
		},
		v: {
			range: [0, 100],
			name: "Value",
		},
	},

	base: sRGB,
	// https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation
	fromBase (rgb) {
		let max = Math.max(...rgb);
		let min = Math.min(...rgb);
		let [r, g, b] = rgb;
		let [h, s, v] = [null, 0, max];
		let d = max - min;

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
	toBase (hsv) {
		let [h, s, v] = hsv;
		h = h % 360;

		if (h < 0) {
			h += 360;
		}

		s /= 100;
		v /= 100;

		function f (n) {
			let k = (n + h / 60) % 6;
			return v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
		}

		return [f(5), f(3), f(1)];
	},

	formats: {
		color: {
			id: "--hsv",
			coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
		},
	},
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
			name: "Hue",
		},
		w: {
			range: [0, 100],
			name: "Whiteness",
		},
		b: {
			range: [0, 100],
			name: "Blackness",
		},
	},

	base: HSV,
	fromBase (hsv) {
		let [h, s, v] = hsv;

		return [h, (v * (100 - s)) / 100, 100 - v];
	},
	toBase (hwb) {
		let [h, w, b] = hwb;

		// Now convert percentages to [0..1]
		w /= 100;
		b /= 100;

		// Achromatic check (white plus black >= 1)
		let sum = w + b;
		if (sum >= 1) {
			let gray = w / sum;
			return [h, 0, gray * 100];
		}

		let v = 1 - b;
		let s = v === 0 ? 0 : 1 - w / v;
		return [h, s * 100, v * 100];
	},

	formats: {
		hwb: {
			coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
		},
	},
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
const toXYZ_M$2 = [
	[ 0.5766690429101305,   0.1855582379065463,   0.1882286462349947  ],
	[ 0.29734497525053605,  0.6273635662554661,   0.07529145849399788 ],
	[ 0.02703136138641234,  0.07068885253582723,  0.9913375368376388  ],
];

/** @type {Matrix3x3} */
// prettier-ignore
const fromXYZ_M$2 = [
	[  2.0415879038107465,    -0.5650069742788596,   -0.34473135077832956 ],
	[ -0.9692436362808795,     1.8759675015077202,    0.04155505740717557 ],
	[  0.013444280632031142,  -0.11836239223101838,   1.0151749943912054  ],
];

var A98Linear = new RGBColorSpace({
	id: "a98rgb-linear",
	cssId: "--a98-rgb-linear",
	name: "Linear Adobe® 98 RGB compatible",
	white: "D65",
	toXYZ_M: toXYZ_M$2,
	fromXYZ_M: fromXYZ_M$2,
});

var a98rgb = new RGBColorSpace({
	id: "a98rgb",
	cssId: "a98-rgb",
	name: "Adobe® 98 RGB compatible",
	base: A98Linear,
	toBase: RGB => RGB.map(val => Math.pow(Math.abs(val), 563 / 256) * Math.sign(val)),
	fromBase: RGB => RGB.map(val => Math.pow(Math.abs(val), 256 / 563) * Math.sign(val)),
});

/** @import { Matrix3x3 } from "../types.js" */

// convert an array of  prophoto-rgb values to CIE XYZ
// using  D50 (so no chromatic adaptation needed afterwards)
// matrix cannot be expressed in rational form, but is calculated to 64 bit accuracy
// see https://github.com/w3c/csswg-drafts/issues/7675
/** @type {Matrix3x3} */
// prettier-ignore
const toXYZ_M$1 = [
	[ 0.79776664490064230,  0.13518129740053308,  0.03134773412839220 ],
	[ 0.28807482881940130,  0.71183523424187300,  0.00008993693872564 ],
	[ 0.00000000000000000,  0.00000000000000000,  0.82510460251046020 ],
];

/** @type {Matrix3x3} */
// prettier-ignore
const fromXYZ_M$1 = [
	[  1.34578688164715830, -0.25557208737979464, -0.05110186497554526 ],
	[ -0.54463070512490190,  1.50824774284514680,  0.02052744743642139 ],
	[  0.00000000000000000,  0.00000000000000000,  1.21196754563894520 ],
];

var ProPhotoLinear = new RGBColorSpace({
	id: "prophoto-linear",
	cssId: "--prophoto-rgb-linear",
	name: "Linear ProPhoto",
	white: "D50",
	base: XYZ_D50,
	toXYZ_M: toXYZ_M$1,
	fromXYZ_M: fromXYZ_M$1,
});

const Et = 1 / 512;
const Et2 = 16 / 512;

var prophoto = new RGBColorSpace({
	id: "prophoto",
	cssId: "prophoto-rgb",
	name: "ProPhoto",
	base: ProPhotoLinear,
	toBase (RGB) {
		// Transfer curve is gamma 1.8 with a small linear portion
		return RGB.map(v => {
			let sign = v < 0 ? -1 : 1;
			let abs = v * sign;

			if (abs < Et2) {
				return v / 16;
			}

			return sign * abs ** 1.8;
		});
	},
	fromBase (RGB) {
		return RGB.map(v => {
			let sign = v < 0 ? -1 : 1;
			let abs = v * sign;

			if (abs >= Et) {
				return sign * abs ** (1 / 1.8);
			}

			return 16 * v;
		});
	},
});

// import sRGB from "./srgb.js";

const α = 1.09929682680944;
const β = 0.018053968510807;

var rec2020Oetf = new RGBColorSpace({
	id: "--rec2020-oetf",
	name: "REC.2020_Scene_Referred",
	base: REC_2020_Linear,
	referred: "scene",
	// Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
	toBase (RGB) {
		return RGB.map(function (val) {
			let sign = val < 0 ? -1 : 1;
			let abs = val * sign;

			if (abs < β * 4.5) {
				return val / 4.5;
			}

			return sign * Math.pow((abs + α - 1) / α, 1 / 0.45);
		});
	},
	fromBase (RGB) {
		return RGB.map(function (val) {
			let sign = val < 0 ? -1 : 1;
			let abs = val * sign;

			if (abs >= β) {
				return sign * (α * Math.pow(abs, 0.45) - (α - 1));
			}

			return 4.5 * val;
		});
	},
});

var oklch = new ColorSpace({
	id: "oklch",
	name: "OkLCh",
	coords: {
		l: {
			refRange: [0, 1],
			name: "Lightness",
		},
		c: {
			refRange: [0, 0.4],
			name: "Chroma",
		},
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		},
	},
	white: "D65",

	base: Oklab,
	fromBase: lch.fromBase,
	toBase: lch.toBase,

	formats: {
		oklch: {
			coords: ["<percentage> | <number>", "<number> | <percentage>", "<number> | <angle>"],
		},
	},
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

const tau = 2 * Math.PI;

/** @type {Matrix3x3} */
// prettier-ignore
const toSRGBLinear = [
	[ 4.0767416360759583, -3.3077115392580629,  0.2309699031821043],
	[-1.2684379732850315,  2.6097573492876882, -0.3413193760026570],
	[-0.0041960761386756, -0.7034186179359362,  1.7076146940746117],
];

/** @type {OKCoeff} */
const RGBCoeff = [
	// Red
	[
		// Limit
		[-1.8817031, -0.80936501],
		// `Kn` coefficients
		[1.19086277, 1.76576728, 0.59662641, 0.75515197, 0.56771245],
	],
	// Green
	[
		// Limit
		[1.8144408, -1.19445267],
		// `Kn` coefficients
		[0.73956515, -0.45954404, 0.08285427, 0.12541073, -0.14503204],
	],
	// Blue
	[
		// Limit
		[0.13110758, 1.81333971],
		// `Kn` coefficients
		[1.35733652, -0.00915799, -1.1513021, -0.50559606, 0.00692167],
	],
];

const floatMax = Number.MAX_VALUE;
const K1 = 0.206;
const K2 = 0.03;
const K3 = (1.0 + K1) / (1.0 + K2);

function vdot (a, b) {
	// Dot two vectors

	let l = a.length;
	if (l !== b.length) {
		throw new Error(`Vectors of size ${l} and ${b.length} are not aligned`);
	}

	let s = 0.0;
	a.forEach((c, i) => {
		s += c * b[i];
	});

	return s;
}

/**
 * Toe function for L_r
 * @param {number} x
 */
function toe (x) {
	return 0.5 * (K3 * x - K1 + Math.sqrt((K3 * x - K1) * (K3 * x - K1) + 4 * K2 * K3 * x));
}

/**
 * Inverse toe function for L_r
 * @param {number} x
 */
function toeInv (x) {
	return (x ** 2 + K1 * x) / (K3 * (x + K2));
}

/**
 * @param {readonly [number, number]} cusp
 * @returns {[number, number]}
 */
function toSt (cusp) {
	// To ST.

	let [l, c] = cusp;
	return [c / l, c / (1 - l)];
}

function getStMid (a, b) {
	// Returns a smooth approximation of the location of the cusp.
	//
	// This polynomial was created by an optimization process.
	// It has been designed so that S_mid < S_max and T_mid < T_max.

	// prettier-ignore
	let s = 0.11516993 + 1.0 / (
		7.44778970 + 4.15901240 * b +
		a * (
			-2.19557347 + 1.75198401 * b +
			a * (
				-2.13704948 - 10.02301043 * b +
				a * (
					-4.24894561 + 5.38770819 * b + 4.69891013 * a
				)
			)
		)
	);

	// prettier-ignore
	let t = 0.11239642 + 1.0 / (
		1.61320320 - 0.68124379 * b +
		a * (
			0.40370612 + 0.90148123 * b +
			a * (
				-0.27087943 + 0.61223990 * b +
				a * (
					0.00299215 - 0.45399568 * b - 0.14661872 * a
				)
			)
		)
	);

	return [s, t];
}

/**
 * @param {Vector3} lab
 * @param {Matrix3x3} lmsToRgb
 */
function oklabToLinearRGB (lab, lmsToRgb) {
	// Convert from Oklab to linear RGB.
	//
	// Can be any gamut as long as `lmsToRgb` is a matrix
	// that transform the LMS values to the linear RGB space.

	let lms = multiply_v3_m3x3(lab, LabtoLMS_M);

	lms[0] = lms[0] ** 3;
	lms[1] = lms[1] ** 3;
	lms[2] = lms[2] ** 3;

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
function findCusp (a, b, lmsToRgb, okCoeff) {
	// Finds L_cusp and C_cusp for a given hue.
	//
	// `a` and `b` must be normalized so `a^2 + b^2 == 1`.

	// First, find the maximum saturation (saturation `S = C/L`)
	let sCusp = computeMaxSaturation(a, b, lmsToRgb, okCoeff);

	// Convert to linear RGB to find the first point where at least one of r, g or b >= 1:
	let rgb = oklabToLinearRGB([1, sCusp * a, sCusp * b], lmsToRgb);
	let lCusp = spow(1.0 / Math.max(...rgb), 1 / 3);
	let cCusp = lCusp * sCusp;

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
function findGamutIntersection (a, b, l1, c1, l0, lmsToRgb, okCoeff, cusp) {
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

	let t;

	if (cusp === undefined) {
		cusp = findCusp(a, b, lmsToRgb, okCoeff);
	}

	// Find the intersection for upper and lower half separately
	if ((l1 - l0) * cusp[1] - (cusp[0] - l0) * c1 <= 0.0) {
		// Lower half
		t = (cusp[1] * l0) / (c1 * cusp[0] + cusp[1] * (l0 - l1));
	}
	else {
		// Upper half

		// First intersect with triangle
		t = (cusp[1] * (l0 - 1.0)) / (c1 * (cusp[0] - 1.0) + cusp[1] * (l0 - l1));

		// Then one step Halley's method
		let dl = l1 - l0;
		let dc = c1;

		let kl = vdot(LabtoLMS_M[0].slice(1), [a, b]);
		let km = vdot(LabtoLMS_M[1].slice(1), [a, b]);
		let ks = vdot(LabtoLMS_M[2].slice(1), [a, b]);

		let ldt_ = dl + dc * kl;
		let mdt_ = dl + dc * km;
		let sdt_ = dl + dc * ks;

		// If higher accuracy is required, 2 or 3 iterations of the following block can be used:
		let L = l0 * (1.0 - t) + t * l1;
		let C = t * c1;

		let l_ = L + C * kl;
		let m_ = L + C * km;
		let s_ = L + C * ks;

		let l = l_ ** 3;
		let m = m_ ** 3;
		let s = s_ ** 3;

		let ldt = 3 * ldt_ * l_ ** 2;
		let mdt = 3 * mdt_ * m_ ** 2;
		let sdt = 3 * sdt_ * s_ ** 2;

		let ldt2 = 6 * ldt_ ** 2 * l_;
		let mdt2 = 6 * mdt_ ** 2 * m_;
		let sdt2 = 6 * sdt_ ** 2 * s_;

		let r_ = vdot(lmsToRgb[0], [l, m, s]) - 1;
		let r1 = vdot(lmsToRgb[0], [ldt, mdt, sdt]);
		let r2 = vdot(lmsToRgb[0], [ldt2, mdt2, sdt2]);

		let ur = r1 / (r1 * r1 - 0.5 * r_ * r2);
		let tr = -r_ * ur;

		let g_ = vdot(lmsToRgb[1], [l, m, s]) - 1;
		let g1 = vdot(lmsToRgb[1], [ldt, mdt, sdt]);
		let g2 = vdot(lmsToRgb[1], [ldt2, mdt2, sdt2]);

		let ug = g1 / (g1 * g1 - 0.5 * g_ * g2);
		let tg = -g_ * ug;

		let b_ = vdot(lmsToRgb[2], [l, m, s]) - 1;
		let b1 = vdot(lmsToRgb[2], [ldt, mdt, sdt]);
		let b2 = vdot(lmsToRgb[2], [ldt2, mdt2, sdt2]);

		let ub = b1 / (b1 * b1 - 0.5 * b_ * b2);
		let tb = -b_ * ub;

		tr = ur >= 0.0 ? tr : floatMax;
		tg = ug >= 0.0 ? tg : floatMax;
		tb = ub >= 0.0 ? tb : floatMax;

		t += Math.min(tr, Math.min(tg, tb));
	}

	return t;
}

function getCs (lab, lmsToRgb, okCoeff) {
	// Get Cs

	let [l, a, b] = lab;

	let cusp = findCusp(a, b, lmsToRgb, okCoeff);

	let cMax = findGamutIntersection(a, b, l, 1, l, lmsToRgb, okCoeff, cusp);
	let stMax = toSt(cusp);

	// Scale factor to compensate for the curved part of gamut shape:
	let k = cMax / Math.min(l * stMax[0], (1 - l) * stMax[1]);

	let stMid = getStMid(a, b);

	// Use a soft minimum function, instead of a sharp triangle shape to get a smooth value for chroma.
	let ca = l * stMid[0];
	let cb = (1.0 - l) * stMid[1];
	let cMid = 0.9 * k * Math.sqrt(Math.sqrt(1.0 / (1.0 / ca ** 4 + 1.0 / cb ** 4)));

	// For `C_0`, the shape is independent of hue, so `ST` are constant.
	// Values picked to roughly be the average values of `ST`.
	ca = l * 0.4;
	cb = (1.0 - l) * 0.8;

	// Use a soft minimum function, instead of a sharp triangle shape to get a smooth value for chroma.
	let c0 = Math.sqrt(1.0 / (1.0 / ca ** 2 + 1.0 / cb ** 2));

	return [c0, cMid, cMax];
}

function computeMaxSaturation (a, b, lmsToRgb, okCoeff) {
	// Finds the maximum saturation possible for a given hue that fits in RGB.
	//
	// Saturation here is defined as `S = C/L`.
	// `a` and `b` must be normalized so `a^2 + b^2 == 1`.

	// Max saturation will be when one of r, g or b goes below zero.

	// Select different coefficients depending on which component goes below zero first.

	let k0, k1, k2, k3, k4, wl, wm, ws;

	if (vdot(okCoeff[0][0], [a, b]) > 1) {
		// Red component
		[k0, k1, k2, k3, k4] = okCoeff[0][1];
		[wl, wm, ws] = lmsToRgb[0];
	}
	else if (vdot(okCoeff[1][0], [a, b]) > 1) {
		// Green component
		[k0, k1, k2, k3, k4] = okCoeff[1][1];
		[wl, wm, ws] = lmsToRgb[1];
	}
	else {
		// Blue component
		[k0, k1, k2, k3, k4] = okCoeff[2][1];
		[wl, wm, ws] = lmsToRgb[2];
	}

	// Approximate max saturation using a polynomial:
	let sat = k0 + k1 * a + k2 * b + k3 * a ** 2 + k4 * a * b;

	// Do one step Halley's method to get closer.
	// This gives an error less than 10e6, except for some blue hues where the `dS/dh` is close to infinite.
	// This should be sufficient for most applications, otherwise do two/three steps.

	let kl = vdot(LabtoLMS_M[0].slice(1), [a, b]);
	let km = vdot(LabtoLMS_M[1].slice(1), [a, b]);
	let ks = vdot(LabtoLMS_M[2].slice(1), [a, b]);

	let l_ = 1.0 + sat * kl;
	let m_ = 1.0 + sat * km;
	let s_ = 1.0 + sat * ks;

	let l = l_ ** 3;
	let m = m_ ** 3;
	let s = s_ ** 3;

	let lds = 3.0 * kl * l_ ** 2;
	let mds = 3.0 * km * m_ ** 2;
	let sds = 3.0 * ks * s_ ** 2;

	let lds2 = 6.0 * kl ** 2 * l_;
	let mds2 = 6.0 * km ** 2 * m_;
	let sds2 = 6.0 * ks ** 2 * s_;

	let f = wl * l + wm * m + ws * s;
	let f1 = wl * lds + wm * mds + ws * sds;
	let f2 = wl * lds2 + wm * mds2 + ws * sds2;

	sat = sat - (f * f1) / (f1 ** 2 - 0.5 * f * f2);

	return sat;
}

function okhslToOklab (hsl, lmsToRgb, okCoeff) {
	// Convert Okhsl to Oklab.

	let [h, s, l] = hsl;
	let L = toeInv(l);
	let a = null;
	let b = null;
	h = constrain(h) / 360.0;

	if (L !== 0.0 && L !== 1.0 && s !== 0) {
		let a_ = Math.cos(tau * h);
		let b_ = Math.sin(tau * h);

		let [c0, cMid, cMax] = getCs([L, a_, b_], lmsToRgb, okCoeff);

		// Interpolate the three values for C so that:
		// ```
		// At s=0: dC/ds = C_0, C=0
		// At s=0.8: C=C_mid
		// At s=1.0: C=C_max
		// ```

		let mid = 0.8;
		let midInv = 1.25;
		let t, k0, k1, k2;

		if (s < mid) {
			t = midInv * s;
			k0 = 0.0;
			k1 = mid * c0;
			k2 = 1.0 - k1 / cMid;
		}
		else {
			t = 5 * (s - 0.8);
			k0 = cMid;
			k1 = (0.2 * cMid ** 2 * 1.25 ** 2) / c0;
			k2 = 1.0 - k1 / (cMax - cMid);
		}

		let c = k0 + (t * k1) / (1.0 - k2 * t);

		a = c * a_;
		b = c * b_;
	}

	return [L, a, b];
}

function oklabToOkhsl (lab, lmsToRgb, okCoeff) {
	// Oklab to Okhsl.

	// Epsilon for lightness should approach close to 32 bit lightness
	// Epsilon for saturation just needs to be sufficiently close when denoting achromatic
	let εL = 1e-7;
	let εS = 1e-4;
	let L = lab[0];
	let s = 0.0;
	let l = toe(L);

	let c = Math.sqrt(lab[1] ** 2 + lab[2] ** 2);
	let h = 0.5 + Math.atan2(-lab[2], -lab[1]) / tau;

	if (l !== 0.0 && l !== 1.0 && c !== 0) {
		let a_ = lab[1] / c;
		let b_ = lab[2] / c;

		let [c0, cMid, cMax] = getCs([L, a_, b_], lmsToRgb, okCoeff);

		let mid = 0.8;
		let midInv = 1.25;
		let k0, k1, k2, t;

		if (c < cMid) {
			k1 = mid * c0;
			k2 = 1.0 - k1 / cMid;

			t = c / (k1 + k2 * c);
			s = t * mid;
		}
		else {
			k0 = cMid;
			k1 = (0.2 * cMid ** 2 * midInv ** 2) / c0;
			k2 = 1.0 - k1 / (cMax - cMid);

			t = (c - k0) / (k1 + k2 * (c - k0));
			s = mid + 0.2 * t;
		}
	}

	const achromatic = Math.abs(s) < εS;
	if (achromatic || l === 0.0 || Math.abs(1 - l) < εL) {
		h = null;
		// Due to floating point imprecision near lightness of 1, we can end up
		// with really high around white, this is to provide consistency as
		// saturation can be really high for white due this imprecision.
		if (!achromatic) {
			s = 0.0;
		}
	}
	else {
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
			name: "Hue",
		},
		s: {
			range: [0, 1],
			name: "Saturation",
		},
		l: {
			range: [0, 1],
			name: "Lightness",
		},
	},

	base: Oklab,
	gamutSpace: "self",

	// Convert Oklab to Okhsl
	fromBase (lab) {
		return oklabToOkhsl(lab, toSRGBLinear, RGBCoeff);
	},

	// Convert Okhsl to Oklab
	toBase (hsl) {
		return okhslToOklab(hsl, toSRGBLinear, RGBCoeff);
	},

	formats: {
		color: {
			id: "--okhsl",
			coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
		},
	},
});

var OKLrab = new ColorSpace({
	id: "oklrab",
	name: "Oklrab",
	coords: {
		l: {
			refRange: [0, 1],
			name: "Lightness",
		},
		a: {
			refRange: [-0.4, 0.4],
		},
		b: {
			refRange: [-0.4, 0.4],
		},
	},

	// Note that XYZ is relative to D65
	white: "D65",

	base: Oklab,
	fromBase (oklab) {
		return [toe(oklab[0]), oklab[1], oklab[2]];
	},
	toBase (oklrab) {
		return [toeInv(oklrab[0]), oklrab[1], oklrab[2]];
	},

	formats: {
		color: {
			coords: [
				"<percentage> | <number>",
				"<number> | <percentage>[-1,1]",
				"<number> | <percentage>[-1,1]",
			],
		},
	},
});

var oklrch = new ColorSpace({
	id: "oklrch",
	name: "Oklrch",
	coords: {
		l: {
			refRange: [0, 1],
			name: "Lightness",
		},
		c: {
			refRange: [0, 0.4],
			name: "Chroma",
		},
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		},
	},
	white: "D65",

	base: OKLrab,
	fromBase: lch.fromBase,
	toBase: lch.toBase,

	formats: {
		color: {
			coords: [
				"<percentage> | <number>",
				"<number> | <percentage>[0,1]",
				"<number> | <angle>",
			],
		},
	},
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
function okhsvToOklab (hsv, lmsToRgb, okCoeff) {
	// Convert from Okhsv to Oklab."""

	let [h, s, v] = hsv;
	h = constrain(h) / 360.0;

	let l = toeInv(v);
	let a = null;
	let b = null;

	// Avoid processing gray or colors with undefined hues
	if (l !== 0.0 && s !== 0.0) {
		let a_ = Math.cos(tau * h);
		let b_ = Math.sin(tau * h);

		let cusp = findCusp(a_, b_, lmsToRgb, okCoeff);
		let [sMax, tMax] = toSt(cusp);
		let s0 = 0.5;
		let k = 1 - s0 / sMax;

		// first we compute L and V as if the gamut is a perfect triangle:

		// L, C when v==1:
		let lv = 1 - (s * s0) / (s0 + tMax - tMax * k * s);
		let cv = (s * tMax * s0) / (s0 + tMax - tMax * k * s);

		l = v * lv;
		let c = v * cv;

		// then we compensate for both toe and the curved top part of the triangle:
		let lvt = toeInv(lv);
		let cvt = (cv * lvt) / lv;

		let lNew = toeInv(l);
		c = (c * lNew) / l;
		l = lNew;

		// RGB scale
		let [rs, gs, bs] = oklabToLinearRGB([lvt, a_ * cvt, b_ * cvt], lmsToRgb);
		let scaleL = spow(1.0 / Math.max(Math.max(rs, gs), Math.max(bs, 0.0)), 1 / 3);

		l = l * scaleL;
		c = c * scaleL;

		a = c * a_;
		b = c * b_;
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
function oklabToOkhsv (lab, lmsToRgb, okCoeff) {
	// Oklab to Okhsv.

	// Epsilon for saturation just needs to be sufficiently close when denoting achromatic
	let ε = 1e-4;
	let l = lab[0];
	let s = 0.0;
	let v = toe(l);
	let c = Math.sqrt(lab[1] ** 2 + lab[2] ** 2);
	let h = 0.5 + Math.atan2(-lab[2], -lab[1]) / tau;

	if (l !== 0.0 && l !== 1 && c !== 0.0) {
		let a_ = lab[1] / c;
		let b_ = lab[2] / c;

		let cusp = findCusp(a_, b_, lmsToRgb, okCoeff);
		let [sMax, tMax] = toSt(cusp);
		let s0 = 0.5;
		let k = 1 - s0 / sMax;

		// first we find `L_v`, `C_v`, `L_vt` and `C_vt`
		let t = tMax / (c + l * tMax);
		let lv = t * l;
		let cv = t * c;

		let lvt = toeInv(lv);
		let cvt = (cv * lvt) / lv;

		// we can then use these to invert the step that compensates
		// for the toe and the curved top part of the triangle:
		let [rs, gs, bs] = oklabToLinearRGB([lvt, a_ * cvt, b_ * cvt], lmsToRgb);
		let scaleL = spow(1.0 / Math.max(Math.max(rs, gs), Math.max(bs, 0.0)), 1 / 3);

		l = l / scaleL;
		c = c / scaleL;

		c = (c * toe(l)) / l;
		l = toe(l);

		// we can now compute v and s:
		v = l / lv;
		s = ((s0 + tMax) * cv) / (tMax * s0 + tMax * k * cv);
	}

	if (Math.abs(s) < ε || v === 0.0) {
		h = null;
	}
	else {
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
			name: "Hue",
		},
		s: {
			range: [0, 1],
			name: "Saturation",
		},
		v: {
			range: [0, 1],
			name: "Value",
		},
	},

	base: Oklab,
	gamutSpace: "self",

	// Convert Oklab to Okhsl
	fromBase (lab) {
		return oklabToOkhsv(lab, toSRGBLinear, RGBCoeff);
	},

	// Convert Okhsl to Oklab
	toBase (hsl) {
		return okhsvToOklab(hsl, toSRGBLinear, RGBCoeff);
	},

	formats: {
		color: {
			id: "--okhsv",
			coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
		},
	},
});

let white = WHITES.D65;

const ε$2 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const κ$1 = 24389 / 27; // 29^3/3^3
const [U_PRIME_WHITE, V_PRIME_WHITE] = uv({ space: xyz_d65, coords: white });

var Luv = new ColorSpace({
	id: "luv",
	name: "Luv",
	coords: {
		l: {
			refRange: [0, 100],
			name: "Lightness",
		},
		// Reference ranges from https://facelessuser.github.io/coloraide/colors/luv/
		u: {
			refRange: [-215, 215],
		},
		v: {
			refRange: [-215, 215],
		},
	},

	white: white,
	base: xyz_d65,

	// Convert D65-adapted XYZ to Luv
	// https://en.wikipedia.org/wiki/CIELUV#The_forward_transformation
	fromBase (XYZ) {
		let xyz = /** @type {[number, number, number]} */ ([
			skipNone(XYZ[0]),
			skipNone(XYZ[1]),
			skipNone(XYZ[2]),
		]);
		let y = xyz[1];

		let [up, vp] = uv({ space: xyz_d65, coords: xyz });

		// Protect against XYZ of [0, 0, 0]
		if (!Number.isFinite(up) || !Number.isFinite(vp)) {
			return [0, 0, 0];
		}

		let L = y <= ε$2 ? κ$1 * y : 116 * Math.cbrt(y) - 16;
		return [L, 13 * L * (up - U_PRIME_WHITE), 13 * L * (vp - V_PRIME_WHITE)];
	},

	// Convert Luv to D65-adapted XYZ
	// https://en.wikipedia.org/wiki/CIELUV#The_reverse_transformation
	toBase (Luv) {
		let [L, u, v] = Luv;

		// Protect against division by zero and none Lightness
		if (L === 0 || isNone(L)) {
			return [0, 0, 0];
		}

		u = skipNone(u);
		v = skipNone(v);

		let up = u / (13 * L) + U_PRIME_WHITE;
		let vp = v / (13 * L) + V_PRIME_WHITE;

		let y = L <= 8 ? L / κ$1 : Math.pow((L + 16) / 116, 3);

		return [y * ((9 * up) / (4 * vp)), y, y * ((12 - 3 * up - 20 * vp) / (4 * vp))];
	},

	formats: {
		color: {
			id: "--luv",
			coords: [
				"<number> | <percentage>",
				"<number> | <percentage>",
				"<number> | <percentage>",
			],
		},
	},
});

var LCHuv = new ColorSpace({
	id: "lchuv",
	name: "LChuv",
	coords: {
		l: {
			refRange: [0, 100],
			name: "Lightness",
		},
		c: {
			refRange: [0, 220],
			name: "Chroma",
		},
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		},
	},

	base: Luv,
	fromBase: lch.fromBase,
	toBase: lch.toBase,

	formats: {
		color: {
			id: "--lchuv",
			coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"],
		},
	},
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


const ε$1 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const κ = 24389 / 27; // 29^3/3^3

const m_r0 = fromXYZ_M$3[0][0];
const m_r1 = fromXYZ_M$3[0][1];
const m_r2 = fromXYZ_M$3[0][2];
const m_g0 = fromXYZ_M$3[1][0];
const m_g1 = fromXYZ_M$3[1][1];
const m_g2 = fromXYZ_M$3[1][2];
const m_b0 = fromXYZ_M$3[2][0];
const m_b1 = fromXYZ_M$3[2][1];
const m_b2 = fromXYZ_M$3[2][2];

function distanceFromOriginAngle (slope, intercept, angle) {
	const d = intercept / (Math.sin(angle) - slope * Math.cos(angle));
	return d < 0 ? Infinity : d;
}

/**
 * @param {number} l
 */
function calculateBoundingLines (l) {
	const sub1 = Math.pow(l + 16, 3) / 1560896;
	const sub2 = sub1 > ε$1 ? sub1 : l / κ;
	const s1r = sub2 * (284517 * m_r0 - 94839 * m_r2);
	const s2r = sub2 * (838422 * m_r2 + 769860 * m_r1 + 731718 * m_r0);
	const s3r = sub2 * (632260 * m_r2 - 126452 * m_r1);
	const s1g = sub2 * (284517 * m_g0 - 94839 * m_g2);
	const s2g = sub2 * (838422 * m_g2 + 769860 * m_g1 + 731718 * m_g0);
	const s3g = sub2 * (632260 * m_g2 - 126452 * m_g1);
	const s1b = sub2 * (284517 * m_b0 - 94839 * m_b2);
	const s2b = sub2 * (838422 * m_b2 + 769860 * m_b1 + 731718 * m_b0);
	const s3b = sub2 * (632260 * m_b2 - 126452 * m_b1);

	return {
		r0s: s1r / s3r,
		r0i: (s2r * l) / s3r,
		r1s: s1r / (s3r + 126452),
		r1i: ((s2r - 769860) * l) / (s3r + 126452),
		g0s: s1g / s3g,
		g0i: (s2g * l) / s3g,
		g1s: s1g / (s3g + 126452),
		g1i: ((s2g - 769860) * l) / (s3g + 126452),
		b0s: s1b / s3b,
		b0i: (s2b * l) / s3b,
		b1s: s1b / (s3b + 126452),
		b1i: ((s2b - 769860) * l) / (s3b + 126452),
	};
}

function calcMaxChromaHsluv (lines, h) {
	const hueRad = (h / 360) * Math.PI * 2;
	const r0 = distanceFromOriginAngle(lines.r0s, lines.r0i, hueRad);
	const r1 = distanceFromOriginAngle(lines.r1s, lines.r1i, hueRad);
	const g0 = distanceFromOriginAngle(lines.g0s, lines.g0i, hueRad);
	const g1 = distanceFromOriginAngle(lines.g1s, lines.g1i, hueRad);
	const b0 = distanceFromOriginAngle(lines.b0s, lines.b0i, hueRad);
	const b1 = distanceFromOriginAngle(lines.b1s, lines.b1i, hueRad);

	return Math.min(r0, r1, g0, g1, b0, b1);
}

var hsluv = new ColorSpace({
	id: "hsluv",
	name: "HSLuv",
	coords: {
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		},
		s: {
			range: [0, 100],
			name: "Saturation",
		},
		l: {
			range: [0, 100],
			name: "Lightness",
		},
	},

	base: LCHuv,
	gamutSpace: sRGB,

	// Convert LCHuv to HSLuv
	fromBase (lch) {
		let [l, c, h] = [skipNone(lch[0]), skipNone(lch[1]), skipNone(lch[2])];
		let s;

		if (l > 99.9999999) {
			s = 0;
			l = 100;
		}
		else if (l < 0.00000001) {
			s = 0;
			l = 0;
		}
		else {
			let lines = calculateBoundingLines(l);
			let max = calcMaxChromaHsluv(lines, h);
			s = (c / max) * 100;
		}

		return [h, s, l];
	},

	// Convert HSLuv to LCHuv
	toBase (hsl) {
		let [h, s, l] = [skipNone(hsl[0]), skipNone(hsl[1]), skipNone(hsl[2])];
		let c;

		if (l > 99.9999999) {
			l = 100;
			c = 0;
		}
		else if (l < 0.00000001) {
			l = 0;
			c = 0;
		}
		else {
			let lines = calculateBoundingLines(l);
			let max = calcMaxChromaHsluv(lines, h);
			c = (max / 100) * s;
		}

		return [l, c, h];
	},

	formats: {
		color: {
			id: "--hsluv",
			coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
		},
	},
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

function distanceFromOrigin (slope, intercept) {
	return Math.abs(intercept) / Math.sqrt(Math.pow(slope, 2) + 1);
}

function calcMaxChromaHpluv (lines) {
	let r0 = distanceFromOrigin(lines.r0s, lines.r0i);
	let r1 = distanceFromOrigin(lines.r1s, lines.r1i);
	let g0 = distanceFromOrigin(lines.g0s, lines.g0i);
	let g1 = distanceFromOrigin(lines.g1s, lines.g1i);
	let b0 = distanceFromOrigin(lines.b0s, lines.b0i);
	let b1 = distanceFromOrigin(lines.b1s, lines.b1i);

	return Math.min(r0, r1, g0, g1, b0, b1);
}

var hpluv = new ColorSpace({
	id: "hpluv",
	name: "HPLuv",
	coords: {
		h: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		},
		s: {
			range: [0, 100],
			name: "Saturation",
		},
		l: {
			range: [0, 100],
			name: "Lightness",
		},
	},

	base: LCHuv,
	gamutSpace: "self",

	// Convert LCHuv to HPLuv
	fromBase (lch) {
		let [l, c, h] = [skipNone(lch[0]), skipNone(lch[1]), skipNone(lch[2])];
		let s;

		if (l > 99.9999999) {
			s = 0;
			l = 100;
		}
		else if (l < 0.00000001) {
			s = 0;
			l = 0;
		}
		else {
			let lines = calculateBoundingLines(l);
			let max = calcMaxChromaHpluv(lines);
			s = (c / max) * 100;
		}
		return [h, s, l];
	},

	// Convert HPLuv to LCHuv
	toBase (hsl) {
		let [h, s, l] = [skipNone(hsl[0]), skipNone(hsl[1]), skipNone(hsl[2])];
		let c;

		if (l > 99.9999999) {
			l = 100;
			c = 0;
		}
		else if (l < 0.00000001) {
			l = 0;
			c = 0;
		}
		else {
			let lines = calculateBoundingLines(l);
			let max = calcMaxChromaHpluv(lines);
			c = (max / 100) * s;
		}

		return [l, c, h];
	},

	formats: {
		color: {
			id: "--hpluv",
			coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
		},
	},
});

var REC_2100_Linear = new RGBColorSpace({
	id: "rec2100-linear",
	name: "Linear REC.2100",
	white: "D65",
	toBase: REC_2020_Linear.toBase,
	fromBase: REC_2020_Linear.fromBase,
});

const Yw = 203; // absolute luminance of media white, cd/m²
const n = 2610 / 2 ** 14;
const ninv = 2 ** 14 / 2610;
const m = 2523 / 2 ** 5;
const minv = 2 ** 5 / 2523;
const c1 = 3424 / 2 ** 12;
const c2 = 2413 / 2 ** 7;
const c3 = 2392 / 2 ** 7;

var rec2100Pq = new RGBColorSpace({
	id: "rec2100pq",
	cssId: "rec2100-pq",
	name: "REC.2100-PQ",
	base: REC_2100_Linear,
	toBase (RGB) {
		// given PQ encoded component in range [0, 1]
		// return media-white relative linear-light
		return RGB.map(function (val) {
			let x = (Math.max(val ** minv - c1, 0) / (c2 - c3 * val ** minv)) ** ninv;
			return (x * 10000) / Yw; // luminance relative to diffuse white, [0, 70 or so].
		});
	},
	fromBase (RGB) {
		// given media-white relative linear-light
		// returnPQ encoded component in range [0, 1]
		return RGB.map(function (val) {
			let x = Math.max((val * Yw) / 10000, 0); // absolute luminance of peak white is 10,000 cd/m².
			let num = c1 + c2 * x ** n;
			let denom = 1 + c3 * x ** n;

			return (num / denom) ** m;
		});
	},
});

const a = 0.17883277;
const b = 0.28466892; // 1 - (4 * a)
const c = 0.55991073; // 0.5 - a * Math.log(4 *a)

const scale = 3.7743; // Place 18% grey at HLG 0.38, so media white at 0.75

var rec2100Hlg = new RGBColorSpace({
	id: "rec2100hlg",
	cssId: "rec2100-hlg",
	name: "REC.2100-HLG",
	referred: "scene",

	base: REC_2100_Linear,
	toBase (RGB) {
		// given HLG encoded component in range [0, 1]
		// return media-white relative linear-light
		return RGB.map(function (val) {
			// first the HLG EOTF
			// ITU-R BT.2390-10 p.30 section
			// 6.3 The hybrid log-gamma electro-optical transfer function (EOTF)
			// Then scale by 3 so media white is 1.0
			if (val <= 0.5) {
				return (val ** 2 / 3) * scale;
			}
			return ((Math.exp((val - c) / a) + b) / 12) * scale;
		});
	},
	fromBase (RGB) {
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
	},
});

/** @import { White } from "./types.js" */

// Type re-exports
/** @typedef {import("./types.js").CAT} CAT */

/** @type {Record<string, CAT>} */
const CATs = {};

hooks.add("chromatic-adaptation-start", env => {
	if (env.options.method) {
		env.M = adapt(env.W1, env.W2, env.options.method);
	}
});

hooks.add("chromatic-adaptation-end", env => {
	if (!env.M) {
		env.M = adapt(env.W1, env.W2, env.options.method);
	}
});

function defineCAT (/** @type {CAT} */ { id, toCone_M, fromCone_M }) {
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
function adapt (W1, W2, id = "Bradford") {
	// adapt from a source whitepoint or illuminant W1
	// to a destination whitepoint or illuminant W2,
	// using the given chromatic adaptation transform (CAT)
	// debugger;
	let method = CATs[id];

	let [ρs, γs, βs] = multiplyMatrices(method.toCone_M, W1);
	let [ρd, γd, βd] = multiplyMatrices(method.toCone_M, W2);

	// all practical illuminants have non-zero XYZ so no division by zero can occur below
	// prettier-ignore
	let scale = [
		[ρd / ρs,  0,        0      ],
		[0,        γd / γs,  0      ],
		[0,        0,        βd / βs],
	];
	// console.log({scale});

	let scaled_cone_M = multiplyMatrices(scale, method.toCone_M);
	let adapt_M = multiplyMatrices(method.fromCone_M, scaled_cone_M);
	// console.log({scaled_cone_M, adapt_M});
	return adapt_M;
}

// prettier-ignore
defineCAT({
	id: "von Kries",
	toCone_M: [
		[  0.4002400,  0.7076000, -0.0808100 ],
		[ -0.2263000,  1.1653200,  0.0457000 ],
		[  0.0000000,  0.0000000,  0.9182200 ],
	],
	fromCone_M: [
		[ 1.8599363874558397, -1.1293816185800916,   0.21989740959619328     ],
		[ 0.3611914362417676,  0.6388124632850422,  -0.000006370596838649899 ],
		[ 0,                   0,                    1.0890636230968613      ],
	],
});

// prettier-ignore
defineCAT({
	id: "Bradford",
	// Convert an array of XYZ values in the range 0.0 - 1.0
	// to cone fundamentals
	toCone_M: [
		[  0.8951000,  0.2664000, -0.1614000 ],
		[ -0.7502000,  1.7135000,  0.0367000 ],
		[  0.0389000, -0.0685000,  1.0296000 ],
	],
	// and back
	fromCone_M: [
		[  0.9869929054667121, -0.14705425642099013, 0.15996265166373122  ],
		[  0.4323052697233945,  0.5183602715367774,  0.049291228212855594 ],
		[ -0.00852866457517732, 0.04004282165408486, 0.96848669578755     ],
	],
});

// prettier-ignore
defineCAT({
	id: "CAT02",
	// with complete chromatic adaptation to W2, so D = 1.0
	toCone_M: [
		[  0.7328000,  0.4296000, -0.1624000 ],
		[ -0.7036000,  1.6975000,  0.0061000 ],
		[  0.0030000,  0.0136000,  0.9834000 ],
	],
	fromCone_M: [
		[  1.0961238208355142,   -0.27886900021828726, 0.18274517938277307 ],
		[  0.4543690419753592,    0.4735331543074117,  0.07209780371722911 ],
		[ -0.009627608738429355, -0.00569803121611342, 1.0153256399545427  ],
	],
});

// prettier-ignore
defineCAT({
	id: "CAT16",
	toCone_M: [
		[  0.401288,  0.650173, -0.051461 ],
		[ -0.250268,  1.204414,  0.045854 ],
		[ -0.002079,  0.048952,  0.953127 ],
	],
	// the extra precision is needed to avoid roundtripping errors
	fromCone_M: [
		[  1.862067855087233,   -1.0112546305316845,  0.14918677544445172  ],
		[  0.3875265432361372,   0.6214474419314753, -0.008973985167612521 ],
		[ -0.01584149884933386, -0.03412293802851557, 1.0499644368778496   ],
	],
});

// prettier-ignore
Object.assign(WHITES, {
	// whitepoint values from ASTM E308-01 with 10nm spacing, 1931 2 degree observer
	// all normalized to Y (luminance) = 1.00000
	// Illuminant A is a tungsten electric light, giving a very warm, orange light.
	A:   [1.09850, 1.00000, 0.35585],

	// Illuminant C was an early approximation to daylight: illuminant A with a blue filter.
	C:   [0.98074, 1.000000, 1.18232],

	// The daylight series of illuminants simulate natural daylight.
	// The color temperature (in degrees Kelvin/100) ranges from
	// cool, overcast daylight (D50) to bright, direct sunlight (D65).
	D55: [0.95682, 1.00000, 0.92149],
	D75: [0.94972, 1.00000, 1.22638],

	// Equal-energy illuminant, used in two-stage CAT16
	E:   [1.00000, 1.00000, 1.00000],

	// The F series of illuminants represent fluorescent lights
	F2:  [0.99186, 1.00000, 0.67393],
	F7:  [0.95041, 1.00000, 1.08747],
	F11: [1.00962, 1.00000, 0.64350],
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
const toXYZ_M = [
	[  0.6624541811085053,   0.13400420645643313,  0.1561876870049078  ],
	[  0.27222871678091454,  0.6740817658111484,   0.05368951740793705 ],
	[ -0.005574649490394108, 0.004060733528982826, 1.0103391003129971  ],
];
/** @type {Matrix3x3} */
// prettier-ignore
const fromXYZ_M = [
	[  1.6410233796943257,   -0.32480329418479,    -0.23642469523761225  ],
	[ -0.6636628587229829,    1.6153315916573379,   0.016756347685530137 ],
	[  0.011721894328375376, -0.008284441996237409, 0.9883948585390215   ],
];

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
			name: "Red",
		},
		g: {
			range: [0, 65504],
			name: "Green",
		},
		b: {
			range: [0, 65504],
			name: "Blue",
		},
	},

	referred: "scene",

	white: WHITES.ACES,

	toXYZ_M,
	fromXYZ_M,
});

// export default Color;

const ε = 2 ** -16;

// the smallest value which, in the 32bit IEEE 754 float encoding,
// decodes as a non-negative value
const ACES_min_nonzero = -0.35828683;

// brightest encoded value, decodes to 65504
const ACES_cc_max = (Math.log2(65504) + 9.72) / 17.52; // 1.468

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
			name: "Red",
		},
		g: {
			range: [ACES_min_nonzero, ACES_cc_max],
			name: "Green",
		},
		b: {
			range: [ACES_min_nonzero, ACES_cc_max],
			name: "Blue",
		},
	},
	referred: "scene",

	base: ACEScg,
	// from section 4.4.2 Decoding Function
	toBase (RGB) {
		const low = (9.72 - 15) / 17.52; // -0.3014

		return RGB.map(function (val) {
			if (val <= low) {
				return (2 ** (val * 17.52 - 9.72) - ε) * 2; // very low values, below -0.3014
			}
			else if (val < ACES_cc_max) {
				return 2 ** (val * 17.52 - 9.72);
			}
			else {
				// val >= ACES_cc_max
				return 65504;
			}
		});
	},

	// Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
	fromBase (RGB) {
		return RGB.map(function (val) {
			if (val <= 0) {
				return (Math.log2(ε) + 9.72) / 17.52; // -0.3584
			}
			else if (val < ε) {
				return (Math.log2(ε + val * 0.5) + 9.72) / 17.52;
			}
			else {
				// val >= ε
				return (Math.log2(val) + 9.72) / 17.52;
			}
		});
	},
	// encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
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


class Color {
	/**
	 * Creates an instance of Color.
	 * Signatures:
	 * - `new Color(stringToParse)`
	 * - `new Color(otherColor)`
	 * - `new Color({space, coords, alpha})`
	 * - `new Color(space, coords, alpha)`
	 * - `new Color(spaceId, coords, alpha)`
	 */
	constructor (...args) {
		let color;

		if (args.length === 1) {
			let parseMeta = {};
			// Clone simple objects to avoid mutating original in getColor
			if (
				typeof args[0] === "object" &&
				Object.getPrototypeOf(args[0]).constructor === Object
			) {
				args[0] = { ...args[0] };
			}
			color = getColor(args[0], { parseMeta });

			if (parseMeta.format) {
				// Color actually came from a string
				this.parseMeta = parseMeta;
			}
		}

		let space, coords, alpha;

		if (color) {
			space = color.space || color.spaceId;
			coords = color.coords;
			alpha = color.alpha;
		}
		else {
			// default signature new Color(ColorSpace, array [, alpha])
			[space, coords, alpha] = args;
		}

		Object.defineProperty(this, "space", {
			value: ColorSpace.get(space),
			writable: false,
			enumerable: true,
			configurable: true, // see note in https://262.ecma-international.org/8.0/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver
		});

		this.coords = coords ? coords.slice() : [0, 0, 0];

		// Clamp alpha to [0, 1]
		this.alpha = isNone(alpha) ? alpha : alpha === undefined ? 1 : clamp(0, alpha, 1);

		// Define getters and setters for each coordinate
		for (let id in this.space.coords) {
			Object.defineProperty(this, id, {
				get: () => this.get(id),
				set: value => this.set(id, value),
			});
		}
	}

	get spaceId () {
		return this.space.id;
	}

	clone () {
		return new Color(this.space, this.coords, this.alpha);
	}

	toJSON () {
		return {
			spaceId: this.spaceId,
			coords: this.coords,
			alpha: this.alpha,
		};
	}

	display (...args) {
		let ret = display(this, ...args);

		// Convert color object to Color instance
		ret.color = new Color(ret.color);

		return ret;
	}

	/**
	 * Get a color from the argument(s) passed
	 * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
	 */
	static get (color, ...args) {
		if (isInstance(color, this)) {
			return color;
		}

		return new Color(color, ...args);
	}

	/**
	 * Get a color instance from the argument passed or `null` if resolution fails (instead of throwing an error).
	 * Additionally, it supports passing an element to resolve complex CSS colors through the DOM (slow).
	 * @see {@link tryColor} for more details
	 */
	static try (color, options) {
		if (isInstance(color, this)) {
			return color;
		}

		let ret = tryColor(color, options);

		if (ret) {
			return new Color(ret);
		}

		return null;
	}

	static defineFunction (name, code, o = code) {
		let { instance = true, returns } = o;

		let func = function (...args) {
			let ret = code(...args);

			if (returns === "color") {
				ret = Color.get(ret);
			}
			else if (returns === "function<color>") {
				let f = ret;
				ret = function (...args) {
					let ret = f(...args);
					return Color.get(ret);
				};
				// Copy any function metadata
				Object.assign(ret, f);
			}
			else if (returns === "array<color>") {
				ret = ret.map(c => Color.get(c));
			}

			return ret;
		};

		if (!(name in Color)) {
			Color[name] = func;
		}

		if (instance) {
			Color.prototype[name] = function (...args) {
				return func(this, ...args);
			};
		}
	}

	static defineFunctions (o) {
		for (let name in o) {
			Color.defineFunction(name, o[name], o[name]);
		}
	}

	static extend (exports) {
		if (exports.register) {
			exports.register(Color);
		}
		else {
			// No register method, just add the module's functions
			for (let name in exports) {
				Color.defineFunction(name, exports[name]);
			}
		}
	}
}

Color.defineFunctions({
	get,
	getAll,
	set,
	setAll,
	to,
	equals,
	inGamut,
	toGamut,
	distance,
	deltas,
	toString: serialize,
});

Object.assign(Color, {
	util,
	hooks,
	WHITES,
	Space: ColorSpace,
	spaces: ColorSpace.registry,
	parse,

	// Global defaults one may want to configure
	defaults,
});

/**
 * @packageDocumentation
 * This module contains {@link spaces a namespace} with all the spaces built into Color.js.
 */

for (let key of Object.keys(spaces)) {
	ColorSpace.register(spaces[key]);
}

/**
 * This plugin defines getters and setters for color[spaceId]
 * e.g. color.lch on *any* color gives us the lch coords
 */

// Add space accessors to existing color spaces
for (let id in ColorSpace.registry) {
	addSpaceAccessors(id, ColorSpace.registry[id]);
}

// Add space accessors to color spaces not yet created
hooks.add("colorspace-init-end", space => {
	addSpaceAccessors(space.id, space);
	space.aliases?.forEach(alias => {
		addSpaceAccessors(alias, space);
	});
});

function addSpaceAccessors (id, space) {
	let propId = id.replace(/-/g, "_");

	Object.defineProperty(Color.prototype, propId, {
		// Convert coords to coords in another colorspace and return them
		// Source colorspace: this.spaceId
		// Target colorspace: id
		get () {
			let ret = this.getAll(id);

			if (typeof Proxy === "undefined") {
				// If proxies are not supported, just return a static array
				return ret;
			}

			// Enable color.spaceId.coordName syntax
			let proxy = new Proxy(ret, {
				has: /** @param {string} property */ (obj, property) => {
					try {
						ColorSpace.resolveCoord([space, property]);
						return true;
					}
					catch (e) {}

					return Reflect.has(obj, property);
				},
				get: (obj, property, receiver) => {
					if (
						property &&
						typeof property !== "symbol" &&
						!(property in obj) &&
						property in proxy
					) {
						let { index } = ColorSpace.resolveCoord([space, property]);

						if (index >= 0) {
							return obj[index];
						}
					}

					return Reflect.get(obj, property, receiver);
				},
				set: (obj, property, value, receiver) => {
					if (
						(property && typeof property !== "symbol" && !(property in obj)) ||
						Number(property) >= 0
					) {
						let { index } = ColorSpace.resolveCoord([
							space,
							/** @type {string} */ (property),
						]);

						if (index >= 0) {
							obj[index] = value;

							// Update color.coords
							this.setAll(id, obj);

							return true;
						}
					}

					return Reflect.set(obj, property, value, receiver);
				},
			});

			return proxy;
		},
		// Convert coords in another colorspace to internal coords and set them
		// Target colorspace: this.spaceId
		// Source colorspace: id
		set (coords) {
			this.setAll(id, coords);
		},
		configurable: true,
		enumerable: true,
	});
}

/**
 * Entry point for the OOP flavor of the API
 * Import as `colorjs.io`
 */

Color.extend(deltaEMethods);
Color.extend({ deltaE });
Object.assign(Color, { deltaEMethods });
Color.extend(variations);
Color.extend({ contrast });
Color.extend(chromaticity);
Color.extend(luminance);
Color.extend(interpolation);
Color.extend(contrastMethods);


//# sourceMappingURL=color.js.map


/***/ },

/***/ "./node_modules/define-data-property/index.js"
/*!****************************************************!*\
  !*** ./node_modules/define-data-property/index.js ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");

var $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "./node_modules/es-errors/syntax.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");

var gopd = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

/** @type {import('.')} */
module.exports = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
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
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};


/***/ },

/***/ "./node_modules/define-properties/index.js"
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = __webpack_require__(/*! define-data-property */ "./node_modules/define-data-property/index.js");

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var supportsDescriptors = __webpack_require__(/*! has-property-descriptors */ "./node_modules/has-property-descriptors/index.js")();

var defineProperty = function (object, name, value, predicate) {
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

var defineProperties = function (object, map) {
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


/***/ },

/***/ "./node_modules/dunder-proto/get.js"
/*!******************************************!*\
  !*** ./node_modules/dunder-proto/get.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var callBind = __webpack_require__(/*! call-bind-apply-helpers */ "./node_modules/call-bind-apply-helpers/index.js");
var gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

var hasProtoAccessor;
try {
	// eslint-disable-next-line no-extra-parens, no-proto
	hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}

// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;

/** @type {import('./get')} */
module.exports = desc && typeof desc.get === 'function'
	? callBind([desc.get])
	: typeof $getPrototypeOf === 'function'
		? /** @type {import('./get')} */ function getDunder(value) {
			// eslint-disable-next-line eqeqeq
			return $getPrototypeOf(value == null ? value : $Object(value));
		}
		: false;


/***/ },

/***/ "./node_modules/es-abstract-get/GetMethod.js"
/*!***************************************************!*\
  !*** ./node_modules/es-abstract-get/GetMethod.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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


/***/ },

/***/ "./node_modules/es-abstract-get/GetV.js"
/*!**********************************************!*\
  !*** ./node_modules/es-abstract-get/GetV.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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
	return /** @type {Record<typeof P, unknown>} */ (V)[P]; // O.[[Get]](P, V)
};


/***/ },

/***/ "./node_modules/es-abstract-get/isPropertyKey.js"
/*!*******************************************************!*\
  !*** ./node_modules/es-abstract-get/isPropertyKey.js ***!
  \*******************************************************/
(module) {

"use strict";


/** @type {import('./isPropertyKey')} */
module.exports = function isPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};


/***/ },

/***/ "./node_modules/es-abstract/2024/HasOwnProperty.js"
/*!*********************************************************!*\
  !*** ./node_modules/es-abstract/2024/HasOwnProperty.js ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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


/***/ },

/***/ "./node_modules/es-abstract/2024/ToPrimitive.js"
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToPrimitive.js ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(/*! es-to-primitive/es2015 */ "./node_modules/es-to-primitive/es2015.js");

// https://262.ecma-international.org/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};


/***/ },

/***/ "./node_modules/es-abstract/2024/ToPropertyKey.js"
/*!********************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToPropertyKey.js ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $String = GetIntrinsic('%String%');

var ToPrimitive = __webpack_require__(/*! ./ToPrimitive */ "./node_modules/es-abstract/2024/ToPrimitive.js");
var ToString = __webpack_require__(/*! ./ToString */ "./node_modules/es-abstract/2024/ToString.js");

// https://262.ecma-international.org/6.0/#sec-topropertykey

module.exports = function ToPropertyKey(argument) {
	var key = ToPrimitive(argument, $String);
	return typeof key === 'symbol' ? key : ToString(key);
};


/***/ },

/***/ "./node_modules/es-abstract/2024/ToString.js"
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToString.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $String = GetIntrinsic('%String%');
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");

// https://262.ecma-international.org/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};


/***/ },

/***/ "./node_modules/es-abstract/helpers/isPropertyKey.js"
/*!***********************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isPropertyKey.js ***!
  \***********************************************************/
(module) {

"use strict";


module.exports = function isPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};


/***/ },

/***/ "./node_modules/es-define-property/index.js"
/*!**************************************************!*\
  !*** ./node_modules/es-define-property/index.js ***!
  \**************************************************/
(module) {

"use strict";


/** @type {import('.')} */
var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

module.exports = $defineProperty;


/***/ },

/***/ "./node_modules/es-errors/eval.js"
/*!****************************************!*\
  !*** ./node_modules/es-errors/eval.js ***!
  \****************************************/
(module) {

"use strict";


/** @type {import('./eval')} */
module.exports = EvalError;


/***/ },

/***/ "./node_modules/es-errors/index.js"
/*!*****************************************!*\
  !*** ./node_modules/es-errors/index.js ***!
  \*****************************************/
(module) {

"use strict";


/** @type {import('.')} */
module.exports = Error;


/***/ },

/***/ "./node_modules/es-errors/range.js"
/*!*****************************************!*\
  !*** ./node_modules/es-errors/range.js ***!
  \*****************************************/
(module) {

"use strict";


/** @type {import('./range')} */
module.exports = RangeError;


/***/ },

/***/ "./node_modules/es-errors/ref.js"
/*!***************************************!*\
  !*** ./node_modules/es-errors/ref.js ***!
  \***************************************/
(module) {

"use strict";


/** @type {import('./ref')} */
module.exports = ReferenceError;


/***/ },

/***/ "./node_modules/es-errors/syntax.js"
/*!******************************************!*\
  !*** ./node_modules/es-errors/syntax.js ***!
  \******************************************/
(module) {

"use strict";


/** @type {import('./syntax')} */
module.exports = SyntaxError;


/***/ },

/***/ "./node_modules/es-errors/type.js"
/*!****************************************!*\
  !*** ./node_modules/es-errors/type.js ***!
  \****************************************/
(module) {

"use strict";


/** @type {import('./type')} */
module.exports = TypeError;


/***/ },

/***/ "./node_modules/es-errors/uri.js"
/*!***************************************!*\
  !*** ./node_modules/es-errors/uri.js ***!
  \***************************************/
(module) {

"use strict";


/** @type {import('./uri')} */
module.exports = URIError;


/***/ },

/***/ "./node_modules/es-object-atoms/RequireObjectCoercible.js"
/*!****************************************************************!*\
  !*** ./node_modules/es-object-atoms/RequireObjectCoercible.js ***!
  \****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");

/** @type {import('./RequireObjectCoercible')} */
module.exports = function RequireObjectCoercible(value) {
	if (value == null) {
		throw new $TypeError((arguments.length > 0 && arguments[1]) || ('Cannot call method on ' + value));
	}
	return value;
};


/***/ },

/***/ "./node_modules/es-object-atoms/ToObject.js"
/*!**************************************************!*\
  !*** ./node_modules/es-object-atoms/ToObject.js ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $Object = __webpack_require__(/*! ./ */ "./node_modules/es-object-atoms/index.js");
var RequireObjectCoercible = __webpack_require__(/*! ./RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");

/** @type {import('./ToObject')} */
module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};


/***/ },

/***/ "./node_modules/es-object-atoms/index.js"
/*!***********************************************!*\
  !*** ./node_modules/es-object-atoms/index.js ***!
  \***********************************************/
(module) {

"use strict";


/** @type {import('.')} */
module.exports = Object;


/***/ },

/***/ "./node_modules/es-object-atoms/isObject.js"
/*!**************************************************!*\
  !*** ./node_modules/es-object-atoms/isObject.js ***!
  \**************************************************/
(module) {

"use strict";


/** @type {import('./isObject')} */
module.exports = function isObject(x) {
	return !!x && (typeof x === 'function' || typeof x === 'object');
};


/***/ },

/***/ "./node_modules/es-to-primitive/es2015.js"
/*!************************************************!*\
  !*** ./node_modules/es-to-primitive/es2015.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

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
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
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
				return /** @type {primitiveES6} */ (result);
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
		return /** @type {primitiveES6} */ (input);
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

			exoticToPrim = GetMethod(
				/** @type {{ [k in SymbolConstructor['toPrimitive']]?: Function }} */
				(input),
				Symbol.toPrimitive
			);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return /** @type {primitiveES6} */ (result);
		}
		throw new $TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = /** @type {const} */ ('string');
	}

	return OrdinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ },

/***/ "./node_modules/es-to-primitive/helpers/isPrimitive.js"
/*!*************************************************************!*\
  !*** ./node_modules/es-to-primitive/helpers/isPrimitive.js ***!
  \*************************************************************/
(module) {

"use strict";


/** @import { primitive } from '../' */
/** @import { primitiveES5 } from '../es5' */

/** @type {<T extends primitive | primitiveES5>(value: unknown) => value is T} */
module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ },

/***/ "./node_modules/function-bind/implementation.js"
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
(module) {

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

var joiny = function (arr, joiner) {
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
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

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


/***/ },

/***/ "./node_modules/function-bind/index.js"
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ },

/***/ "./node_modules/get-intrinsic/index.js"
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


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
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");
var $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
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
	}())
	: throwTypeError;

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
	'%eval%': eval, // eslint-disable-line no-eval
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
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
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
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
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
			if ($gOPD && (i + 1) >= parts.length) {
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


/***/ },

/***/ "./node_modules/get-proto/Object.getPrototypeOf.js"
/*!*********************************************************!*\
  !*** ./node_modules/get-proto/Object.getPrototypeOf.js ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $Object = __webpack_require__(/*! es-object-atoms */ "./node_modules/es-object-atoms/index.js");

/** @type {import('./Object.getPrototypeOf')} */
module.exports = $Object.getPrototypeOf || null;


/***/ },

/***/ "./node_modules/get-proto/Reflect.getPrototypeOf.js"
/*!**********************************************************!*\
  !*** ./node_modules/get-proto/Reflect.getPrototypeOf.js ***!
  \**********************************************************/
(module) {

"use strict";


/** @type {import('./Reflect.getPrototypeOf')} */
module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;


/***/ },

/***/ "./node_modules/get-proto/index.js"
/*!*****************************************!*\
  !*** ./node_modules/get-proto/index.js ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reflectGetProto = __webpack_require__(/*! ./Reflect.getPrototypeOf */ "./node_modules/get-proto/Reflect.getPrototypeOf.js");
var originalGetProto = __webpack_require__(/*! ./Object.getPrototypeOf */ "./node_modules/get-proto/Object.getPrototypeOf.js");

var getDunderProto = __webpack_require__(/*! dunder-proto/get */ "./node_modules/dunder-proto/get.js");

/** @type {import('.')} */
module.exports = reflectGetProto
	? function getProto(O) {
		// @ts-expect-error TS can't narrow inside a closure, for some reason
		return reflectGetProto(O);
	}
	: originalGetProto
		? function getProto(O) {
			if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
				throw new TypeError('getProto: not an object');
			}
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return originalGetProto(O);
		}
		: getDunderProto
			? function getProto(O) {
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return getDunderProto(O);
			}
			: null;


/***/ },

/***/ "./node_modules/gopd/gOPD.js"
/*!***********************************!*\
  !*** ./node_modules/gopd/gOPD.js ***!
  \***********************************/
(module) {

"use strict";


/** @type {import('./gOPD')} */
module.exports = Object.getOwnPropertyDescriptor;


/***/ },

/***/ "./node_modules/gopd/index.js"
/*!************************************!*\
  !*** ./node_modules/gopd/index.js ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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


/***/ },

/***/ "./node_modules/has-property-descriptors/index.js"
/*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;


/***/ },

/***/ "./node_modules/has-symbols/index.js"
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

/** @type {import('.')} */
module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ },

/***/ "./node_modules/has-symbols/shams.js"
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
(module) {

"use strict";


/** @type {import('./shams')} */
/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	/** @type {{ [k in symbol]?: unknown }} */
	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ },

/***/ "./node_modules/has-tostringtag/shams.js"
/*!***********************************************!*\
  !*** ./node_modules/has-tostringtag/shams.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js");

/** @type {import('.')} */
module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};


/***/ },

/***/ "./node_modules/hasown/index.js"
/*!**************************************!*\
  !*** ./node_modules/hasown/index.js ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

/** @type {import('.')} */
module.exports = bind.call(call, $hasOwn);


/***/ },

/***/ "./node_modules/is-callable/index.js"
/*!*******************************************!*\
  !*** ./node_modules/is-callable/index.js ***!
  \*******************************************/
(module) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
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
		if (isES6ClassFn(value)) { return false; }
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

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};


/***/ },

/***/ "./node_modules/is-date-object/index.js"
/*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


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
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr(value) === dateClass;
};


/***/ },

/***/ "./node_modules/is-regex/index.js"
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


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

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	/** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */
	var badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}

	/** @type {import('.')} */
	// @ts-expect-error TS can't figure out that the $exec call always throws
	// eslint-disable-next-line consistent-return
	fn = function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {NonNullable<typeof gOPD>} */ (gOPD)(/** @type {{ lastIndex?: unknown }} */ (value), 'lastIndex');
		var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			// eslint-disable-next-line no-extra-parens
			$exec(value, /** @type {string} */ (/** @type {unknown} */ (badStringifier)));
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
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};
}

module.exports = fn;


/***/ },

/***/ "./node_modules/is-symbol/index.js"
/*!*****************************************!*\
  !*** ./node_modules/is-symbol/index.js ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();
var safeRegexTest = __webpack_require__(/*! safe-regex-test */ "./node_modules/safe-regex-test/index.js");

if (hasSymbols) {
	var $symToStr = callBound('Symbol.prototype.toString');
	var isSymString = safeRegexTest(/^Symbol\(.*\)$/);

	/** @type {(value: object) => value is Symbol} */
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return isSymString($symToStr(value));
	};

	/** @type {import('.')} */
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (!value || typeof value !== 'object' || $toString(value) !== '[object Symbol]') {
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


/***/ },

/***/ "./node_modules/math-intrinsics/abs.js"
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/abs.js ***!
  \*********************************************/
(module) {

"use strict";


/** @type {import('./abs')} */
module.exports = Math.abs;


/***/ },

/***/ "./node_modules/math-intrinsics/floor.js"
/*!***********************************************!*\
  !*** ./node_modules/math-intrinsics/floor.js ***!
  \***********************************************/
(module) {

"use strict";


/** @type {import('./floor')} */
module.exports = Math.floor;


/***/ },

/***/ "./node_modules/math-intrinsics/isNaN.js"
/*!***********************************************!*\
  !*** ./node_modules/math-intrinsics/isNaN.js ***!
  \***********************************************/
(module) {

"use strict";


/** @type {import('./isNaN')} */
module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ },

/***/ "./node_modules/math-intrinsics/max.js"
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/max.js ***!
  \*********************************************/
(module) {

"use strict";


/** @type {import('./max')} */
module.exports = Math.max;


/***/ },

/***/ "./node_modules/math-intrinsics/min.js"
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/min.js ***!
  \*********************************************/
(module) {

"use strict";


/** @type {import('./min')} */
module.exports = Math.min;


/***/ },

/***/ "./node_modules/math-intrinsics/pow.js"
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/pow.js ***!
  \*********************************************/
(module) {

"use strict";


/** @type {import('./pow')} */
module.exports = Math.pow;


/***/ },

/***/ "./node_modules/math-intrinsics/round.js"
/*!***********************************************!*\
  !*** ./node_modules/math-intrinsics/round.js ***!
  \***********************************************/
(module) {

"use strict";


/** @type {import('./round')} */
module.exports = Math.round;


/***/ },

/***/ "./node_modules/math-intrinsics/sign.js"
/*!**********************************************!*\
  !*** ./node_modules/math-intrinsics/sign.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(/*! ./isNaN */ "./node_modules/math-intrinsics/isNaN.js");

/** @type {import('./sign')} */
module.exports = function sign(number) {
	if ($isNaN(number) || number === 0) {
		return number;
	}
	return number < 0 ? -1 : +1;
};


/***/ },

/***/ "./node_modules/object-inspect/index.js"
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
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
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
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
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
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

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
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
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
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
    if (
        (typeof globalThis !== 'undefined' && obj === globalThis)
        || (typeof __webpack_require__.g !== 'undefined' && obj === __webpack_require__.g)
    ) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
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
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) { return toStr(obj) === '[object Array]' && canTrustToString(obj); }
function isDate(obj) { return toStr(obj) === '[object Date]' && canTrustToString(obj); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && canTrustToString(obj); }
function isError(obj) { return toStr(obj) === '[object Error]' && canTrustToString(obj); }
function isString(obj) { return toStr(obj) === '[object String]' && canTrustToString(obj); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && canTrustToString(obj); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && canTrustToString(obj); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
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
    if (!weakMapHas || !x || typeof x !== 'object') {
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
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
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
    if (!weakSetHas || !x || typeof x !== 'object') {
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
    if (!x || typeof x !== 'object') { return false; }
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
    if (x) { return '\\' + x; }
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
    if (xs.length === 0) { return ''; }
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

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
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


/***/ },

/***/ "./node_modules/object-keys/implementation.js"
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
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
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
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
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
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
		var isObject = object !== null && typeof object === 'object';
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


/***/ },

/***/ "./node_modules/object-keys/index.js"
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
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


/***/ },

/***/ "./node_modules/object-keys/isArguments.js"
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
(module) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ },

/***/ "./node_modules/object.hasown/auto.js"
/*!********************************************!*\
  !*** ./node_modules/object.hasown/auto.js ***!
  \********************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./shim */ "./node_modules/object.hasown/shim.js")();


/***/ },

/***/ "./node_modules/object.hasown/implementation.js"
/*!******************************************************!*\
  !*** ./node_modules/object.hasown/implementation.js ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var ToObject = __webpack_require__(/*! es-object-atoms/ToObject */ "./node_modules/es-object-atoms/ToObject.js");
var ToPropertyKey = __webpack_require__(/*! es-abstract/2024/ToPropertyKey */ "./node_modules/es-abstract/2024/ToPropertyKey.js");
var HasOwnProperty = __webpack_require__(/*! es-abstract/2024/HasOwnProperty */ "./node_modules/es-abstract/2024/HasOwnProperty.js");

module.exports = function hasOwn(O, P) {
	var obj = ToObject(O);
	var key = ToPropertyKey(P);
	return HasOwnProperty(obj, key);
};


/***/ },

/***/ "./node_modules/object.hasown/polyfill.js"
/*!************************************************!*\
  !*** ./node_modules/object.hasown/polyfill.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.hasown/implementation.js");

module.exports = function getPolyfill() {
	return Object.hasOwn || implementation;
};


/***/ },

/***/ "./node_modules/object.hasown/shim.js"
/*!********************************************!*\
  !*** ./node_modules/object.hasown/shim.js ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.hasown/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

module.exports = function shimObjectHasOwn() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ hasOwn: polyfill },
		{ hasOwn: function () { return Object.hasOwn !== polyfill; } }
	);
	return polyfill;
};


/***/ },

/***/ "./node_modules/safe-regex-test/index.js"
/*!***********************************************!*\
  !*** ./node_modules/safe-regex-test/index.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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


/***/ },

/***/ "./src/darkmode.d.ts"
/*!***************************!*\
  !*** ./src/darkmode.d.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLUGIN_HOOK: () => (/* binding */ PLUGIN_HOOK),
/* harmony export */   PluginAbstract: () => (/* binding */ PluginAbstract),
/* harmony export */   PluginBaseAbstract: () => (/* binding */ PluginBaseAbstract)
/* harmony export */ });
class PluginBaseAbstract {}
let PLUGIN_HOOK = /*#__PURE__*/function (PLUGIN_HOOK) {
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
class PluginAbstract extends PluginBaseAbstract {}

/***/ },

/***/ "./src/modules/bgNodeStack.ts"
/*!************************************!*\
  !*** ./src/modules/bgNodeStack.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BgNodeStack)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

class BgNodeStack {
  // 索引值

  constructor(prefix) {
    _defineProperty(this, "classNameReg", void 0);
    _defineProperty(this, "_prefix", void 0);
    _defineProperty(this, "_stack", []);
    // 需要判断位置的背景堆栈
    _defineProperty(this, "_idx", 0);
    this._prefix = prefix;
    this.classNameReg = new RegExp(`${this._prefix}\\d+`);
  }

  // 背景节点入栈
  push(el, cssKV, cb) {
    const className = `${this._prefix}${this._idx++}`;
    el.classList.add(className);
    this._stack.unshift({
      elOld: el,
      el,
      className,
      cssKV,
      updated: !_config__WEBPACK_IMPORTED_MODULE_0__["default"].delayBgJudge,
      cb
    });
  }

  // 判断节点是否在背景节点的区域
  contains(el, callback) {
    const rect = el.getBoundingClientRect();
    const idxStack = [];
    this._stack.forEach((item, i) => {
      if (item.updated) {
        if (!item.rect) item.rect = item.el.getBoundingClientRect();
        const bgRect = item.rect;
        if (!(rect.top >= bgRect.bottom || rect.bottom <= bgRect.top || rect.left >= bgRect.right || rect.right <= bgRect.left)) {
          // 表示节点在背景图内
          idxStack.unshift(i);
        }
      }
    });
    while (idxStack.length) {
      const idx = idxStack.shift();
      if (idx === undefined) continue;
      const item = this._stack.splice(idx, 1)[0];
      callback(item);
    }
  }

  // 更新堆栈的节点对象，主要解决前后节点不一致的问题
  update(els) {
    this._stack.forEach(item => {
      if (!item.updated) {
        Array.prototype.some.call(els, el => {
          if (el.nodeType === 1 && el.classList.contains(item.className)) {
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
  reset() {
    this._stack = [];
    this._idx = 0;
  }
}
;

/***/ },

/***/ "./src/modules/color.ts"
/*!******************************!*\
  !*** ./src/modules/color.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorParser: () => (/* binding */ ColorParser),
/* harmony export */   adjustBrightnessTo: () => (/* binding */ adjustBrightnessTo),
/* harmony export */   getColorPerceivedBrightness: () => (/* binding */ getColorPerceivedBrightness),
/* harmony export */   getFrontColor: () => (/* binding */ getFrontColor),
/* harmony export */   mixColors: () => (/* binding */ mixColors),
/* harmony export */   parseColorName: () => (/* binding */ parseColorName),
/* harmony export */   parseWebkitFillColorAndStrokeColor: () => (/* binding */ parseWebkitFillColorAndStrokeColor)
/* harmony export */ });
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
/* harmony import */ var color_blend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color-blend */ "./node_modules/color-blend/dist/index.modern.js");
/* harmony import */ var colorjs_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! colorjs.io */ "./node_modules/colorjs.io/dist/color.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
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
 * @param {ColorParam}                retColor 混合色
 * @param {ColorParam | ColorParam[]} bgColor  背景色
 * @param {number}                    alpha    前景色透明度
 * @return {ColorInstance} 前景色
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





// 常量

const COLOR_NAME = {
  ...color_name__WEBPACK_IMPORTED_MODULE_1__["default"],
  // 补上这些colorName
  windowtext: [0, 0, 0],
  // windows特有的colorName
  transparent: [255, 255, 255, 0] // 透明，暂定用白色透明度0来表示
};
const COLOR_NAME_REG = new RegExp(Object.keys(COLOR_NAME).map(colorName => `\\b${colorName}\\b`).join('|'), 'ig'); // 生成正则表达式来匹配这些colorName

// Color对象 => ColorBlend对象
const color2ColorBlend = color => {
  const obj = color.object();
  obj.a = obj.alpha || 1;
  delete obj.alpha;
  return obj;
};

// ColorBlend对象 => Color对象
const colorBlend2Color = colorBlend => {
  colorBlend.alpha = colorBlend.a;
  delete colorBlend.a;
  return ColorParser(colorBlend);
};

// 实例化Color对象，传参非法时返回null
const ColorParser = color => {
  if (!color) return null;
  let res = null;
  try {
    res = color instanceof color__WEBPACK_IMPORTED_MODULE_0__["default"] ? color : (0,color__WEBPACK_IMPORTED_MODULE_0__["default"])(color);
  } catch (err1) {
    try {
      res = ColorParser(new colorjs_io__WEBPACK_IMPORTED_MODULE_3__["default"](color).to('srgb').toString()); // 对于lch、oklch、lab、oklab、color等色值尝试使用colorjs.io来解析，然后再转成Color对象
    } catch (err2) {
      console.log(`ignore the invalid color: \`${color}\`, err1: ${err1}, err2: ${err2}`);
    }
  }
  return res;
};

// 处理颜色，包括清除!important和转换英文定义颜色
const parseColorName = (color, supportTransparent = false) => color.replace(_constant__WEBPACK_IMPORTED_MODULE_4__.IMPORTANT_REGEXP, '').replace(COLOR_NAME_REG, match => {
  if (!supportTransparent && match === 'transparent') return match; // 如果不支持转换transparent，直接返回transparent

  const color = COLOR_NAME[match.toLowerCase()];
  return `${color.length > 3 ? 'rgba' : 'rgb'}(${color.toString()})`;
});

// 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
const parseWebkitFillColorAndStrokeColor = color => {
  const newValue = parseColorName(color);
  return _constant__WEBPACK_IMPORTED_MODULE_4__.COLOR_REGEXP.test(newValue) ? newValue : '';
};

// 计算混合颜色
const mixColors = (colors, type = 'normal') => {
  if (Object.prototype.toString.call(colors) !== '[object Array]') return null;
  const filterColors = colors.filter(color => !!color);
  if (filterColors.length < 1) return null;
  if (filterColors.length === 1) return ColorParser(filterColors[0]);
  let color1 = ColorParser(filterColors.shift() || null);
  let color2 = ColorParser(filterColors.shift() || null);
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
      color1 = type === 'mix' ? color1.mix(color2, color2.alpha()) : colorBlend2Color(color_blend__WEBPACK_IMPORTED_MODULE_2__[type](color2ColorBlend(color1), color2ColorBlend(color2)));
    } // 如果当前色值合法，混入色值非法，无需处理

    if (filterColors.length === 0) break;
    color2 = ColorParser(filterColors.shift() || null);
  }
  return color1 || null;
};

// 根据混合色、背景色和前景色透明度，反推前景色rgba，目前混合模式只支持'normal'
const getFrontColor = (retColor, bgColor, alpha) => {
  const retColorObj = ColorParser(retColor);
  if (!retColorObj) return null;
  const retColorRgb = retColorObj.rgb().array().slice(0, 3);
  const bgColorObj = Object.prototype.toString.call(bgColor) === '[object Array]' ? mixColors(bgColor) : ColorParser(bgColor);
  if (!bgColorObj) return null;
  const bgColorRgb = bgColorObj.rgb().array().slice(0, 3);
  const bgColorAlpha = bgColorObj.alpha();
  return ColorParser(`rgba(${retColorRgb.map((r, idx) => Math.round(r + bgColorAlpha * (1 - alpha) * (r - bgColorRgb[idx]) / alpha)).join(', ')}, ${alpha})`);
};

// 计算感知亮度
const getColorPerceivedBrightness = rgba => (rgba[0] * 299 + rgba[1] * 587 + rgba[2] * 114) / 1000;

// 调整为指定感知亮度
const adjustBrightnessTo = (target, rgba) => {
  const relativeBrightnessRatio = target / (getColorPerceivedBrightness(rgba) || 1);
  let newTextR = Math.min(255, rgba[0] * relativeBrightnessRatio);
  let newTextG = Math.min(255, rgba[1] * relativeBrightnessRatio);
  let newTextB = Math.min(255, rgba[2] * relativeBrightnessRatio);
  if (newTextG === 0 || newTextR === 255 || newTextB === 255) {
    newTextG = (target * 1000 - newTextR * 299 - newTextB * 114) / 587;
  } else if (newTextR === 0) {
    newTextR = (target * 1000 - newTextG * 587 - newTextB * 114) / 299;
  } else if (newTextB === 0 || newTextG === 255) {
    newTextB = (target * 1000 - newTextR * 299 - newTextG * 587) / 114;
  }
  return color__WEBPACK_IMPORTED_MODULE_0__["default"].rgb(newTextR, newTextG, newTextB, rgba[3] || 1);
};

/***/ },

/***/ "./src/modules/config.ts"
/*!*******************************!*\
  !*** ./src/modules/config.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/modules/color.ts");
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


// 默认配置
const defaultConfig = {
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
  defaultDarkTextColor: _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DARK_TEXTCOLOR // Dark Mode下字体颜色
};
const config = {
  hasInit: false,
  // 是否初始化过配置

  ...defaultConfig,
  // 设置配置
  set(type, opt, key) {
    const value = opt[key];
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
  setDefaultColor(opt) {
    this.set('string', opt, 'defaultLightWebviewColor');
    this.set('string', opt, 'defaultDarkWebviewColor');
    const newDefaultLightBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([this.defaultLightWebviewColor, opt.defaultLightBgColor || this.defaultLightBgColor]);
    if (newDefaultLightBgColor) this.defaultLightBgColor = newDefaultLightBgColor.hex();
    const newDefaultDarkBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([this.defaultDarkWebviewColor, opt.defaultDarkBgColor || this.defaultDarkBgColor]);
    if (newDefaultDarkBgColor) this.defaultDarkBgColor = newDefaultDarkBgColor.hex();
    const newDefaultLightTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([this.defaultLightWebviewColor, this.defaultLightBgColor, opt.defaultLightTextColor || this.defaultLightTextColor]);
    if (newDefaultLightTextColor) this.defaultLightTextColor = newDefaultLightTextColor.hex();
    const newDefaultDarkTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.mixColors)([this.defaultDarkWebviewColor, this.defaultDarkBgColor, opt.defaultDarkTextColor || this.defaultDarkTextColor]);
    if (newDefaultDarkTextColor) this.defaultDarkTextColor = newDefaultDarkTextColor.hex();
  },
  // 重置配置
  reset() {
    this.hasInit = false;
    Object.assign(this, defaultConfig);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ },

/***/ "./src/modules/constant.ts"
/*!*********************************!*\
  !*** ./src/modules/constant.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BGCOLORATTR: () => (/* binding */ BGCOLORATTR),
/* harmony export */   BGGRADIENT_MIXCOLORATTR: () => (/* binding */ BGGRADIENT_MIXCOLORATTR),
/* harmony export */   BGIMAGEATTR: () => (/* binding */ BGIMAGEATTR),
/* harmony export */   CLASS_PREFIX: () => (/* binding */ CLASS_PREFIX),
/* harmony export */   COLORATTR: () => (/* binding */ COLORATTR),
/* harmony export */   COLOR_REGEXP: () => (/* binding */ COLOR_REGEXP),
/* harmony export */   COLOR_REGEXP_GLOBAL: () => (/* binding */ COLOR_REGEXP_GLOBAL),
/* harmony export */   COMPLEMENTARY_BGIMAGECOLORATTR: () => (/* binding */ COMPLEMENTARY_BGIMAGECOLORATTR),
/* harmony export */   CSS_PROP_LIST: () => (/* binding */ CSS_PROP_LIST),
/* harmony export */   CSS_PROP_SERIES: () => (/* binding */ CSS_PROP_SERIES),
/* harmony export */   DEFAULT_DARK_BGCOLOR: () => (/* binding */ DEFAULT_DARK_BGCOLOR),
/* harmony export */   DEFAULT_DARK_TEXTCOLOR: () => (/* binding */ DEFAULT_DARK_TEXTCOLOR),
/* harmony export */   DEFAULT_DARK_WEBVIEWCOLOR: () => (/* binding */ DEFAULT_DARK_WEBVIEWCOLOR),
/* harmony export */   DEFAULT_LIGHT_BGCOLOR: () => (/* binding */ DEFAULT_LIGHT_BGCOLOR),
/* harmony export */   DEFAULT_LIGHT_TEXTCOLOR: () => (/* binding */ DEFAULT_LIGHT_TEXTCOLOR),
/* harmony export */   DEFAULT_LIGHT_WEBVIEWCOLOR: () => (/* binding */ DEFAULT_LIGHT_WEBVIEWCOLOR),
/* harmony export */   DM_CLASSNAME_REGEXP: () => (/* binding */ DM_CLASSNAME_REGEXP),
/* harmony export */   HIGH_BGCOLOR_BRIGHTNESS: () => (/* binding */ HIGH_BGCOLOR_BRIGHTNESS),
/* harmony export */   HIGH_BLACKWHITE_HSL_BRIGHTNESS: () => (/* binding */ HIGH_BLACKWHITE_HSL_BRIGHTNESS),
/* harmony export */   HTML_CLASS: () => (/* binding */ HTML_CLASS),
/* harmony export */   IGNORE_ALPHA: () => (/* binding */ IGNORE_ALPHA),
/* harmony export */   IMPORTANT_REGEXP: () => (/* binding */ IMPORTANT_REGEXP),
/* harmony export */   LOW_BLACKWHITE_HSL_BRIGHTNESS: () => (/* binding */ LOW_BLACKWHITE_HSL_BRIGHTNESS),
/* harmony export */   MAX_LIMIT_BGCOLOR_BRIGHTNESS: () => (/* binding */ MAX_LIMIT_BGCOLOR_BRIGHTNESS),
/* harmony export */   MEDIA_QUERY: () => (/* binding */ MEDIA_QUERY),
/* harmony export */   MIN_LIMIT_OFFSET_BRIGHTNESS: () => (/* binding */ MIN_LIMIT_OFFSET_BRIGHTNESS),
/* harmony export */   ORIGINAL_BGCOLORATTR: () => (/* binding */ ORIGINAL_BGCOLORATTR),
/* harmony export */   ORIGINAL_COLORATTR: () => (/* binding */ ORIGINAL_COLORATTR),
/* harmony export */   PAGE_HEIGHT: () => (/* binding */ PAGE_HEIGHT),
/* harmony export */   PLUGIN_PAGE_STYLE_ATTR: () => (/* binding */ PLUGIN_PAGE_STYLE_ATTR),
/* harmony export */   SEMICOLON_PLACEHOLDER: () => (/* binding */ SEMICOLON_PLACEHOLDER),
/* harmony export */   SEMICOLON_PLACEHOLDER_REGEXP: () => (/* binding */ SEMICOLON_PLACEHOLDER_REGEXP),
/* harmony export */   STYLE_ID: () => (/* binding */ STYLE_ID),
/* harmony export */   TABLE_NAME: () => (/* binding */ TABLE_NAME),
/* harmony export */   URL_REGEXP: () => (/* binding */ URL_REGEXP),
/* harmony export */   VALIDATE_IGNORE_RULES: () => (/* binding */ VALIDATE_IGNORE_RULES),
/* harmony export */   WHITE_LIKE_COLOR_BRIGHTNESS: () => (/* binding */ WHITE_LIKE_COLOR_BRIGHTNESS)
/* harmony export */ });
/**
 * @name 常量
 *
 */

const RANDOM = `${new Date().getTime()}${Math.floor(Math.random() * 10000)}`; // 生成个随机数，格式为时间戳+随机数

const MEDIA_QUERY = '(prefers-color-scheme: dark)'; // Dark Mode的CSS媒体查询

const CLASS_PREFIX = 'js_darkmode__'; // Dark Mode class前缀
const DM_CLASSNAME_REGEXP = new RegExp(`${CLASS_PREFIX}\\d+`);
const STYLE_ID = `js_darkmode_style__${RANDOM}`; // Dark Mode 样式表id
const HTML_CLASS = 'data_color_scheme_dark'; // 强制设置暗黑模式时给html加的class

const COLORATTR = `data-darkmode-color-${RANDOM}`; // dm color，即算法生成的已mix新色值
const BGCOLORATTR = `data-darkmode-bgcolor-${RANDOM}`; // dm bg-color，即算法生成的已mix新色值
const ORIGINAL_COLORATTR = `data-darkmode-original-color-${RANDOM}`; // lm color，即原色值
const ORIGINAL_BGCOLORATTR = `data-darkmode-original-bgcolor-${RANDOM}`; // lm bg-color，即原色值
const BGIMAGEATTR = `data-darkmode-bgimage-${RANDOM}`; // 是否有背景图片的标记
const BGGRADIENT_MIXCOLORATTR = `data-darkmode-bggradient-mix-color-${RANDOM}`; // 背景渐变进行mix混合后的色值
const COMPLEMENTARY_BGIMAGECOLORATTR = `data-darkmode-complementary-bgimagecolor-${RANDOM}`; // 背景图片的补色色值

const DEFAULT_LIGHT_WEBVIEWCOLOR = '#fff'; // Light Mode下webView颜色
const DEFAULT_LIGHT_BGCOLOR = '#fff'; // Light Mode下背景颜色
const DEFAULT_LIGHT_TEXTCOLOR = '#191919'; // Light Mode下字体颜色
const DEFAULT_DARK_WEBVIEWCOLOR = '#191919'; // Dark Mode下webView颜色
const DEFAULT_DARK_BGCOLOR = '#191919'; // Dark Mode下背景颜色
const DEFAULT_DARK_TEXTCOLOR = 'rgba(255,255,255,0.6)'; // Dark Mode下字体颜色

const WHITE_LIKE_COLOR_BRIGHTNESS = 250; // 接近白色的感知亮度阈值
const MAX_LIMIT_BGCOLOR_BRIGHTNESS = 190;
const MIN_LIMIT_OFFSET_BRIGHTNESS = 65;
const HIGH_BGCOLOR_BRIGHTNESS = 100;
const HIGH_BLACKWHITE_HSL_BRIGHTNESS = 40;
const LOW_BLACKWHITE_HSL_BRIGHTNESS = 22;
const IGNORE_ALPHA = 0.05; // 忽略的透明度阈值

const PAGE_HEIGHT = window.getInnerHeight?.() || window.innerHeight || document.documentElement.clientHeight;
const CSS_PROP_SERIES = {
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
const CSS_PROP_LIST = Object.keys(CSS_PROP_SERIES).map(key => CSS_PROP_SERIES[key].join('|')).join('|').split('|'); // 支持的css属性平铺列表
const TABLE_NAME = ['TABLE', 'TR', 'TD', 'TH']; // 支持bgcolor属性的table标签列表

const IMPORTANT_REGEXP = / !important$/; // !important

const SEMICOLON_PLACEHOLDER = '<$#_SEMICOLON_#$>'; // 分号占位符
const SEMICOLON_PLACEHOLDER_REGEXP = /<\$#_SEMICOLON_#\$>/g;
const COLOR_REGEXP_STR = '\\b((rgba?)|((ok)?lch)|((ok)?lab)|(color))\\([^)]+\\)';
const COLOR_REGEXP = new RegExp(COLOR_REGEXP_STR, 'i');
const COLOR_REGEXP_GLOBAL = new RegExp(COLOR_REGEXP_STR, 'ig');
const URL_REGEXP = /url\([^)]*\)/i;
let PLUGIN_PAGE_STYLE_ATTR = /*#__PURE__*/function (PLUGIN_PAGE_STYLE_ATTR) {
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
let VALIDATE_IGNORE_RULES = /*#__PURE__*/function (VALIDATE_IGNORE_RULES) {
  // 校验忽略规则
  VALIDATE_IGNORE_RULES["LOW_CONTRAST"] = "low-contrast";
  // 忽略低对比度
  VALIDATE_IGNORE_RULES["TEXT_BG_GRADIENT"] = "text-bg-gradient"; // 忽略文字背景渐变
  return VALIDATE_IGNORE_RULES;
}({});
;

/***/ },

/***/ "./src/modules/cssUtils.ts"
/*!*********************************!*\
  !*** ./src/modules/cssUtils.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CssUtils)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/modules/global.ts");
let _CssUtilsPrivateAttr$, _CssUtilsPrivateAttr$2;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
class CssUtils {
  // 是否运行过Dark Mode处理逻辑（写入过非首屏样式表则表示已运行过）

  constructor() {
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
  genCssKV(key, val) {
    this._watcher[key]?.();
    return `${key}: ${val} !important;`;
  }

  // 生成css，包括css选择器
  genCss(className, cssKV) {
    return `${_config__WEBPACK_IMPORTED_MODULE_1__["default"].mode === 'dark' ? `html.${_constant__WEBPACK_IMPORTED_MODULE_0__.HTML_CLASS} ` : ''}${_config__WEBPACK_IMPORTED_MODULE_1__["default"].cssSelectorsPrefix && `${_config__WEBPACK_IMPORTED_MODULE_1__["default"].cssSelectorsPrefix} `}.${className}{${cssKV}}`;
  }

  // 加入css
  addCss(css, isFirstPageStyle = false) {
    this[isFirstPageStyle ? CssUtilsPrivateAttr.FIRST_PAGE_STYLE : CssUtilsPrivateAttr.OTHER_PAGE_STYLE] += css;
    _global__WEBPACK_IMPORTED_MODULE_2__.plugins.addCss(isFirstPageStyle);
  }

  // 写入样式表
  writeStyle(isFirstPageStyle = false) {
    !isFirstPageStyle && _global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode && (this.isFinish = true); // 在Dark Mode下一旦写入了非首屏样式表，则认为已经运行过Dark Mode处理逻辑

    // 获取样式表内容
    const styles = [...(_global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode ? [{
      target: this,
      key: [CssUtilsPrivateAttr.FIRST_PAGE_STYLE, CssUtilsPrivateAttr.OTHER_PAGE_STYLE],
      needMediaQuery: true
    }] : []), {
      target: _global__WEBPACK_IMPORTED_MODULE_2__.plugins,
      key: [_constant__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE, _constant__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE],
      needMediaQuery: true
    }, {
      target: _global__WEBPACK_IMPORTED_MODULE_2__.plugins,
      key: [_constant__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE_NO_MQ, _constant__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE_NO_MQ],
      needMediaQuery: false
    }].map(({
      target,
      key: [first, other],
      needMediaQuery
    }) => {
      let style = '';
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
      if (style) return _config__WEBPACK_IMPORTED_MODULE_1__["default"].mode === 'dark' || !needMediaQuery ? style : `@media ${_constant__WEBPACK_IMPORTED_MODULE_0__.MEDIA_QUERY} {${style}}`;
      return '';
    }).join('');

    // 写入样式表
    styles && !_config__WEBPACK_IMPORTED_MODULE_1__["default"].noEmit && document.head.insertAdjacentHTML('beforeend', `<style id="${_constant__WEBPACK_IMPORTED_MODULE_0__.STYLE_ID}_${this._styleIdx++}" type="text/css">${styles}</style>`);
  }

  // 监听生成css键值对
  watch(key, cb) {
    this._watcher[key] = cb;
  }

  // 取消监听生成css键值对
  unwatch(key) {
    delete this._watcher[key];
  }

  // 移除已写入的样式表
  reset() {
    for (let i = 0; i < this._styleIdx; i++) {
      const style = document.getElementById(`${_constant__WEBPACK_IMPORTED_MODULE_0__.STYLE_ID}_${i}`);
      style?.parentNode?.removeChild(style);
    }
    this.isFinish = false;
    this._styleIdx = 0;
  }
}
;

/***/ },

/***/ "./src/modules/domUtils.ts"
/*!*********************************!*\
  !*** ./src/modules/domUtils.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomUtils: () => (/* binding */ DomUtils),
/* harmony export */   getChildrenAndIt: () => (/* binding */ getChildrenAndIt),
/* harmony export */   hasTableClass: () => (/* binding */ hasTableClass),
/* harmony export */   hasTextNode: () => (/* binding */ hasTextNode)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/modules/global.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
function getChildrenAndIt(el, exceptIt = false) {
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
  return el.textContent.replace(/\s/g, '').length > 0;
}
;

// table的内部样式类对应的lm背景色
const tableClassObj = {
  'ue-table-interlace-color-single': '#fcfcfc',
  'ue-table-interlace-color-double': '#f7faff'
};
// 判断table相关元素有没有指定class
function hasTableClass(el) {
  let color = null;
  Array.prototype.some.call(el.classList, className => {
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

class DomUtils {
  // 是否已显示首屏

  constructor() {
    _defineProperty(this, "_els", []);
    // 要处理的节点列表
    _defineProperty(this, "_firstPageEls", []);
    // 首屏节点列表
    _defineProperty(this, "_delayEls", []);
    // 延迟处理的节点列表
    _defineProperty(this, "showFirstPage", false);
  }

  // 要处理的节点列表长度
  get length() {
    return this._els.length;
  }

  // 设置要处理的节点列表
  set(els = []) {
    this._els = els;
  }

  // 获取要处理的节点列表（包含延迟节点、容器节点等逻辑）
  get() {
    let res = [];
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
  delay() {
    Array.prototype.forEach.call(this._els, el => this._delayEls.push(el)); // 转移到延迟处理的节点里
    this._els = []; // 转移后清空列表
  }

  // 判断是否包含延迟处理的节点
  hasDelay() {
    if (this._els.length) return false; // 有节点，即不含延迟处理的节点
    return this._delayEls.length > 0 || _config__WEBPACK_IMPORTED_MODULE_0__["default"].container !== null; // 否则需要判断延迟节点的列表和容器
  }

  // 添加首屏节点
  addFirstPageNode(el) {
    this._firstPageEls.push(el);
  }

  // 显示所有首屏节点
  showFirstPageNodes() {
    this._firstPageEls.forEach(el => !el.style.visibility && (el.style.visibility = 'visible')); // 显示首屏节点
    this.showFirstPage = true; // 记录为已显示首屏
  }

  // 清空记录的首屏节点
  emptyFirstPageNodes() {
    this._firstPageEls = [];
  }

  // 重置
  reset() {
    this._els = [];
    this._firstPageEls = [];
    this._delayEls = [];
    this.showFirstPage = false;
  }
}
;

/***/ },

/***/ "./src/modules/global.ts"
/*!*******************************!*\
  !*** ./src/modules/global.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bgStack: () => (/* binding */ bgStack),
/* harmony export */   cssUtils: () => (/* binding */ cssUtils),
/* harmony export */   domUtils: () => (/* binding */ domUtils),
/* harmony export */   plugins: () => (/* binding */ plugins),
/* harmony export */   sdk: () => (/* binding */ sdk),
/* harmony export */   tnQueue: () => (/* binding */ tnQueue),
/* harmony export */   validator: () => (/* reexport module object */ _validator__WEBPACK_IMPORTED_MODULE_7__)
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

const plugins = new _plugins__WEBPACK_IMPORTED_MODULE_1__["default"]();

// 文本节点队列

const tnQueue = new _textNodeQueue__WEBPACK_IMPORTED_MODULE_2__["default"](`${_constant__WEBPACK_IMPORTED_MODULE_0__.CLASS_PREFIX}text__`);

// 需要判断位置的背景节点堆栈

const bgStack = new _bgNodeStack__WEBPACK_IMPORTED_MODULE_3__["default"](`${_constant__WEBPACK_IMPORTED_MODULE_0__.CLASS_PREFIX}bg__`);

// 样式相关操作工具对象

const cssUtils = new _cssUtils__WEBPACK_IMPORTED_MODULE_4__["default"]();

// 节点相关操作工具对象

const domUtils = new _domUtils__WEBPACK_IMPORTED_MODULE_5__.DomUtils();

// sdk

const sdk = new _sdk__WEBPACK_IMPORTED_MODULE_6__["default"]();

// 校验器


/***/ },

/***/ "./src/modules/plugins.ts"
/*!********************************!*\
  !*** ./src/modules/plugins.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Plugins)
/* harmony export */ });
/* harmony import */ var _darkmode_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../darkmode.d */ "./src/darkmode.d.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/modules/global.ts");
let _PLUGIN_PAGE_STYLE_AT, _PLUGIN_PAGE_STYLE_AT2, _PLUGIN_PAGE_STYLE_AT3, _PLUGIN_PAGE_STYLE_AT4;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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


let cssNeedMQ = [];
let cssNoMQ = [];
class Plugin extends _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PluginBaseAbstract {
  constructor() {
    super();
  }

  // 遍历次数（全部节点遍历结束算一次）
  get loopTimes() {
    return _global__WEBPACK_IMPORTED_MODULE_2__.plugins.loopTimes;
  }

  // 是否为Dark Mode
  get isDarkmode() {
    return _global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode;
  }

  // 添加样式
  addCss(className, kvList, needMediaQuery = true) {
    (needMediaQuery ? cssNeedMQ : cssNoMQ).push(_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.genCss(className, kvList.map(({
      key,
      value
    }) => _global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.genCssKV(key, value)).join('')));
  }
}

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
class Plugins {
  constructor() {
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
  extend(plugin) {
    this._plugins.push(new (plugin(Plugin))());
    this.length++;
  }

  // 执行插件钩子
  emit(name, ...args) {
    this._plugins.forEach(plugin => {
      plugin[name]?.(...args);
    });
  }

  // 写入插件样式
  addCss(isFirstPageStyle = false) {
    if (isFirstPageStyle) {
      this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE] += cssNeedMQ.join('');
      this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE_NO_MQ] += cssNoMQ.join('');
    } else {
      this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE] += cssNeedMQ.join('');
      this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE_NO_MQ] += cssNoMQ.join('');
    }
  }

  // 重置插件样式
  resetCss() {
    cssNeedMQ = [];
    cssNoMQ = [];
  }

  // 重置
  reset() {
    this._plugins = [];
    this.length = 0;
    this.loopTimes = 0;
    this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE] = '';
    this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE] = '';
    this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE_NO_MQ] = '';
    this[_constant__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE_NO_MQ] = '';
    this.resetCss();
  }
}
;

/***/ },

/***/ "./src/modules/sdk.ts"
/*!****************************!*\
  !*** ./src/modules/sdk.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SDK)
/* harmony export */ });
/* harmony import */ var _darkmode_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../darkmode.d */ "./src/darkmode.d.ts");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ "./src/modules/color.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global */ "./src/modules/global.ts");
/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domUtils */ "./src/modules/domUtils.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
 * @method convert 处理节点
 * @param {HTMLElement} el               要处理的节点
 * @param {CssKV[]}     [cssKVList=[]]   要处理的css属性列表
 * @param {boolean}     [isUpdate=false] 是否更新
 * @return {string} 处理后的css，包含css选择器
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

const trim = str => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
class SDK {
  // 当前是否需要运行Darkmode处理

  constructor() {
    _defineProperty(this, "_idx", 0);
    // 索引值
    _defineProperty(this, "_defaultDarkTextColorRgb", [0, 0, 0, 0]);
    _defineProperty(this, "_defaultDarkBgColorRgb", [0, 0, 0, 0]);
    _defineProperty(this, "_defaultDarkBgColorHSL", []);
    _defineProperty(this, "_defaultDarkTextColorBrightness", 0);
    _defineProperty(this, "_defaultDarkBgColorBrightness", 0);
    _defineProperty(this, "_defaultDarkBgColorHslBrightness", 0);
    _defineProperty(this, "_maxLimitOffsetBrightness", 0);
    _defineProperty(this, "isDarkmode", false);
  }

  // 调整明度
  _adjustBrightness(color, el, options, isUpdate = false, needReset = false) {
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

    let newColor = null;
    let extStyle = '';
    if (options.isBgColor) {
      // 背景色
      // 如果有背景颜色，取消背景图片的影响
      if (color.alpha() >= _constant__WEBPACK_IMPORTED_MODULE_3__.IGNORE_ALPHA && el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGIMAGEATTR]) {
        (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
          delete dom[_constant__WEBPACK_IMPORTED_MODULE_3__.BGIMAGEATTR];
        });
      }

      // 如果有背景图片补色
      if (el[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR]) {
        // 背景图片补色和当前背景色一致，则无需处理
        // 根据最小可觉差Just-noticeable difference(即JND，表示人类或动物对于某一特定的感官刺激所能察觉的最小改变）和韦伯-费希纳定律，在特定条件下，人类能感知小至 0.5% - 2% 的变化，0.5%换算成对比度为1.1
        // https://zh.wikipedia.org/wiki/%E6%9C%80%E5%B0%8F%E5%8F%AF%E8%A6%BA%E5%B7%AE 最小可觉差wiki
        // https://zh.wikipedia.org/wiki/%E9%9F%8B%E4%BC%AF-%E8%B2%BB%E5%B8%8C%E7%B4%8D%E5%AE%9A%E7%90%86 韦伯-费希纳定理wiki
        if (el[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR] === color.toString() || this.getContrast(el[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR], color.toString()) < 1.1) {
          return {
            newColor: needReset ? color : null,
            extStyle
          };
        }

        // 否则取消背景图片补色的影响
        (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
          delete dom[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR];
        });
      }
      const bgColor = el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultDarkBgColor;
      newColor = this._adjustBackgroundBrightness(color, bgColor);

      // 如果内联样式没有color，使用继承的原字体颜色和当前背景色算出合适的字体颜色
      if (!options.hasInlineColor) {
        const parentElementBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)([bgColor, newColor || color]);
        const parentTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(el[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_COLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultLightTextColor);
        if (parentTextColor) {
          const ret = this._adjustBrightness(parentTextColor, el, {
            isBgColor: false,
            isTextShadow: false,
            isTextColor: true,
            isBorderColor: false,
            hasInlineColor: true,
            parentElementBgColor
          }, isUpdate, needReset);
          extStyle += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('color', (ret.newColor || parentTextColor).toString());

          // 对文字颜色做继承传递，用于文字亮度计算
          (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
            dom[_constant__WEBPACK_IMPORTED_MODULE_3__.COLORATTR] = (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)([parentElementBgColor, ret.newColor || parentTextColor]);
            dom[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_COLORATTR] = parentTextColor;
          });
        }
      }
    } else if (options.isTextColor || options.isBorderColor) {
      // 字体色、边框色
      const parentElementBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(options.parentElementBgColor || options.isTextColor && el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultDarkBgColor);

      // 无背景图片
      if (parentElementBgColor && !el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGIMAGEATTR]) {
        newColor = this._adjustTextBrightness(color, parentElementBgColor);
        let afterConvertTextColorHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR;
        if (isUpdate) {
          afterConvertTextColorHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_UPDATE_STYLE;
        } else if (needReset) {
          afterConvertTextColorHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_RESET;
        }
        _global__WEBPACK_IMPORTED_MODULE_5__.plugins.emit(afterConvertTextColorHookName, el, {
          fontColor: newColor,
          bgColor: parentElementBgColor
        });
      }
    } else if (options.isTextShadow) {
      // 字体阴影，当背景色处理
      // 无背景图片
      if (!el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGIMAGEATTR]) {
        newColor = this._adjustBackgroundBrightness(color, el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultDarkBgColor);
      }
    }
    return {
      newColor: newColor && color.toString() !== newColor.toString() ? newColor.rgb() : null,
      extStyle
    };
  }

  // 调整文本明度
  _adjustTextBrightness(textColor, bgColor, opt) {
    const textColorAlpha = opt?.alpha || textColor.alpha();
    const textColorMix = opt ? textColor : (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)([bgColor, textColor]);
    if (textColorMix === null) return null;
    const textColorMixRgb = textColorMix.rgb().array();
    const textColorMixHsl = textColorMix.hsl().array();
    const textPerceivedBrightness = (0,_color__WEBPACK_IMPORTED_MODULE_2__.getColorPerceivedBrightness)(textColorMixRgb);
    const bgColorPerceivedBrightness = opt?.bgColorPerceivedBrightness || (0,_color__WEBPACK_IMPORTED_MODULE_2__.getColorPerceivedBrightness)(bgColor.rgb().array());
    const offsetPerceivedBrightness = Math.abs(bgColorPerceivedBrightness - textPerceivedBrightness);

    // 用户设置为高亮字体颜色（接近白色亮度），不处理，保持高亮
    if (textPerceivedBrightness >= _constant__WEBPACK_IMPORTED_MODULE_3__.WHITE_LIKE_COLOR_BRIGHTNESS) return opt ? (0,_color__WEBPACK_IMPORTED_MODULE_2__.getFrontColor)(textColor, bgColor, textColorAlpha) : textColor;
    if (offsetPerceivedBrightness > this._maxLimitOffsetBrightness && bgColorPerceivedBrightness <= this._defaultDarkBgColorBrightness + 2) {
      return (0,_color__WEBPACK_IMPORTED_MODULE_2__.getFrontColor)((0,_color__WEBPACK_IMPORTED_MODULE_2__.adjustBrightnessTo)(this._maxLimitOffsetBrightness + bgColorPerceivedBrightness, textColorMixRgb), bgColor, textColorAlpha);
    }

    // 如果感知亮度差大于阈值，无需调整
    if (offsetPerceivedBrightness >= _constant__WEBPACK_IMPORTED_MODULE_3__.MIN_LIMIT_OFFSET_BRIGHTNESS) return opt ? (0,_color__WEBPACK_IMPORTED_MODULE_2__.getFrontColor)(textColor, bgColor, textColorAlpha) : textColor;
    if (bgColorPerceivedBrightness >= _constant__WEBPACK_IMPORTED_MODULE_3__.HIGH_BGCOLOR_BRIGHTNESS) {
      // 亮背景，调暗字体
      if (textColorMixHsl[2] > 90 - _constant__WEBPACK_IMPORTED_MODULE_3__.HIGH_BLACKWHITE_HSL_BRIGHTNESS) {
        // 优先调字体的亮度已带到降低感知亮度的目的
        textColorMixHsl[2] = 90 - textColorMixHsl[2];
        return this._adjustTextBrightness(color__WEBPACK_IMPORTED_MODULE_1__["default"].hsl(...textColorMixHsl), bgColor, {
          alpha: textColorAlpha,
          bgColorPerceivedBrightness
        });
      }
      return (0,_color__WEBPACK_IMPORTED_MODULE_2__.getFrontColor)((0,_color__WEBPACK_IMPORTED_MODULE_2__.adjustBrightnessTo)(Math.min(this._maxLimitOffsetBrightness, bgColorPerceivedBrightness - _constant__WEBPACK_IMPORTED_MODULE_3__.MIN_LIMIT_OFFSET_BRIGHTNESS), textColorMixRgb), bgColor, textColorAlpha);
    } else {
      // 暗背景，调亮字体
      if (textColorMixHsl[2] <= _constant__WEBPACK_IMPORTED_MODULE_3__.HIGH_BLACKWHITE_HSL_BRIGHTNESS) {
        // 优先调字体的亮度已带到提高感知亮度的目的
        textColorMixHsl[2] = 90 - textColorMixHsl[2];
        return this._adjustTextBrightness(color__WEBPACK_IMPORTED_MODULE_1__["default"].hsl(...textColorMixHsl), bgColor, {
          alpha: textColorAlpha,
          bgColorPerceivedBrightness
        });
      }
      return (0,_color__WEBPACK_IMPORTED_MODULE_2__.getFrontColor)((0,_color__WEBPACK_IMPORTED_MODULE_2__.adjustBrightnessTo)(Math.min(this._maxLimitOffsetBrightness, bgColorPerceivedBrightness + _constant__WEBPACK_IMPORTED_MODULE_3__.MIN_LIMIT_OFFSET_BRIGHTNESS), textColorMixRgb), bgColor, textColorAlpha);
    }
  }

  // 调整背景明度
  _adjustBackgroundBrightness(bgColor, bgColorMix) {
    const mixColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)([bgColorMix, bgColor]);
    if (mixColor === null) return null;
    const mixColorRgb = mixColor.rgb().array();
    const mixColorHsl = mixColor.hsl().array();
    const mixColorPerceivedBrightness = (0,_color__WEBPACK_IMPORTED_MODULE_2__.getColorPerceivedBrightness)(mixColorRgb);
    let newColor = mixColor;
    if (mixColorHsl[1] === 0 && mixColorHsl[2] > _constant__WEBPACK_IMPORTED_MODULE_3__.HIGH_BLACKWHITE_HSL_BRIGHTNESS || mixColorPerceivedBrightness > _constant__WEBPACK_IMPORTED_MODULE_3__.WHITE_LIKE_COLOR_BRIGHTNESS) {
      // 饱和度为0（黑白灰色），亮度大于HIGH_BLACKWHITE_HSL_BRIGHTNESS或感知亮度大于WHITE_LIKE_COLOR_BRIGHTNESS（白色）时，做亮度取反处理
      newColor = color__WEBPACK_IMPORTED_MODULE_1__["default"].hsl(0, 0, Math.min(100, 100 + this._defaultDarkBgColorHslBrightness - mixColorHsl[2]), mixColorHsl[3] || 1);
    } else if (mixColorPerceivedBrightness > _constant__WEBPACK_IMPORTED_MODULE_3__.MAX_LIMIT_BGCOLOR_BRIGHTNESS) {
      // 感知亮度大于MAX_LIMIT_BGCOLOR_BRIGHTNESS，将感知亮度设为MAX_LIMIT_BGCOLOR_BRIGHTNESS
      newColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.adjustBrightnessTo)(_constant__WEBPACK_IMPORTED_MODULE_3__.MAX_LIMIT_BGCOLOR_BRIGHTNESS, mixColorRgb);
    } else if (mixColorHsl[2] < _constant__WEBPACK_IMPORTED_MODULE_3__.LOW_BLACKWHITE_HSL_BRIGHTNESS) {
      // 亮度小于LOW_BLACKWHITE_HSL_BRIGHTNESS，将亮度设为LOW_BLACKWHITE_HSL_BRIGHTNESS，适当提高亮度
      mixColorHsl[2] = _constant__WEBPACK_IMPORTED_MODULE_3__.LOW_BLACKWHITE_HSL_BRIGHTNESS;
      newColor = color__WEBPACK_IMPORTED_MODULE_1__["default"].hsl(...mixColorHsl);
    }
    return (0,_color__WEBPACK_IMPORTED_MODULE_2__.getFrontColor)(newColor, bgColorMix, bgColor.alpha());
  }

  // 叠加渐变色到背景色中，并更新背景色相关属性值以及文本颜色
  _updateBgWithGradient(gradientColor, el, className, cssKVList, isUpdate = false, needReset = false) {
    const newBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)([el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultDarkBgColor, gradientColor]);
    const newOriginalBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)([el[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultLightBgColor, gradientColor]);
    (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
      dom[_constant__WEBPACK_IMPORTED_MODULE_3__.BGCOLORATTR] = newBgColor;
      dom[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_BGCOLORATTR] = newOriginalBgColor;
    });
    const lastKV = cssKVList.slice(-1)[0];
    let color = null;
    let hasInlineColor = _constant__WEBPACK_IMPORTED_MODULE_3__.CSS_PROP_SERIES.TEXT_COLOR.indexOf(lastKV[0]) >= 5;
    if (hasInlineColor) {
      color = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)((0,_color__WEBPACK_IMPORTED_MODULE_2__.parseColorName)(lastKV[1]));
    } else if (el.nodeName === 'FONT') {
      // 如果是font标签且没有内联文本颜色样式
      this._try(() => {
        const colorStr = el.getAttribute('color'); // 获取color的色值
        if (colorStr) {
          // 有色值，则当做内联样式来处理
          const tmpColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(colorStr);
          if (tmpColor) {
            color = tmpColor;
            hasInlineColor = true;
          }
        }
      });
    } else {
      color = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(el[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_COLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultLightTextColor);
    }
    if (color === null) return '';
    const ret = this._adjustBrightness(color, el, {
      isBgColor: false,
      isTextShadow: false,
      isTextColor: true,
      isBorderColor: false,
      hasInlineColor
    }, isUpdate, needReset);
    const newColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)([newBgColor, ret.newColor || color]);
    const newOriginColor = color;
    (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
      dom[_constant__WEBPACK_IMPORTED_MODULE_3__.COLORATTR] = newColor;
      dom[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_COLORATTR] = newOriginColor;
    });
    if (ret.newColor) return _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCss(className, _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV(lastKV[0], ret.newColor.toString()));
    return '';
  }
  _try(func) {
    try {
      return func();
    } catch (e) {
      console.log('An error occurred when running the dark mode conversion algorithm\n', e);
      _config__WEBPACK_IMPORTED_MODULE_4__["default"].error?.(e);
    }
  }

  // 初始化
  init() {
    const defaultDarkTextColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(_config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultDarkTextColor);
    defaultDarkTextColor && (this._defaultDarkTextColorRgb = defaultDarkTextColor.rgb().array());
    const defaultDarkBgColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(_config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultDarkBgColor);
    if (defaultDarkBgColor) {
      this._defaultDarkBgColorRgb = defaultDarkBgColor.rgb().array();
      this._defaultDarkBgColorHSL = defaultDarkBgColor.hsl().array();
    }
    this._defaultDarkTextColorBrightness = (0,_color__WEBPACK_IMPORTED_MODULE_2__.getColorPerceivedBrightness)(this._defaultDarkTextColorRgb);
    this._defaultDarkBgColorBrightness = (0,_color__WEBPACK_IMPORTED_MODULE_2__.getColorPerceivedBrightness)(this._defaultDarkBgColorRgb);
    this._defaultDarkBgColorHslBrightness = this._defaultDarkBgColorHSL[2];
    this._maxLimitOffsetBrightness = Math.max(this._defaultDarkTextColorBrightness - this._defaultDarkBgColorBrightness, 0);
  }

  // 处理节点
  convert(el, cssKVList = [], isUpdate = false, needReset = false) {
    _global__WEBPACK_IMPORTED_MODULE_5__.plugins.resetCss();
    let beforeConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.BEFORE_CONVERT_NODE;
    if (isUpdate) {
      beforeConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_UPDATE_STYLE;
    } else if (needReset) {
      beforeConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_RESET;
    }
    _global__WEBPACK_IMPORTED_MODULE_5__.plugins.emit(beforeConvertNodeHookName, el);
    let css = ''; // css
    let bgCss = ''; // 文字底图css

    if (this.isDarkmode || isUpdate || needReset) {
      const nodeName = el.nodeName;
      if (_config__WEBPACK_IMPORTED_MODULE_4__["default"].whitelist.tagName.indexOf(nodeName) > -1) return '';
      if (_config__WEBPACK_IMPORTED_MODULE_4__["default"].whitelist.attribute.some(attribute => el.hasAttribute(attribute))) return '';
      const styles = el.style;
      if (cssKVList.length === 0) {
        // 没有传入cssKVList就从内联样式中提取
        // styles.cssText 读出来的颜色统一是rgba格式，除了用英文定义颜色（如：black、white）
        cssKVList = (styles.cssText && styles.cssText.replace(/("[^;]*);([^;]*")|('[^;]*);([^;]*')/g, `$1$3${_constant__WEBPACK_IMPORTED_MODULE_3__.SEMICOLON_PLACEHOLDER}$2$4`).split(';') || []).map(cssStr => {
          // 将cssStr转换为[key, value]，并清除各个元素的前后空白字符
          const splitIdx = cssStr.indexOf(':');
          return [trim(cssStr.slice(0, splitIdx).toLowerCase() || ''), trim(cssStr.slice(splitIdx + 1).replace(_constant__WEBPACK_IMPORTED_MODULE_3__.SEMICOLON_PLACEHOLDER_REGEXP, ';') || '')];
        });
      }
      let hasInlineColor = false; // 是否有自定义字体颜色
      let hasInlineBackground = false;
      let hasInlineBackgroundImage = false;
      let elBackgroundPositionAttr = '';
      let elBackgroundSizeAttr = '';
      cssKVList = cssKVList.filter(([key, value]) => {
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
        if ((/background/i.test(key) || /^(-webkit-)?border-image/.test(key)) && _constant__WEBPACK_IMPORTED_MODULE_3__.URL_REGEXP.test(value)) {
          hasInlineBackgroundImage = true;
        }

        // 过滤掉一些key
        return _constant__WEBPACK_IMPORTED_MODULE_3__.CSS_PROP_LIST.indexOf(key) > -1;
      }).sort(([key1], [key2]) => {
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
      if (_constant__WEBPACK_IMPORTED_MODULE_3__.TABLE_NAME.indexOf(nodeName) > -1 && !hasInlineBackground) {
        // 如果table没有内联样式
        this._try(() => {
          let colorStr = (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.hasTableClass)(el); // 获取class对应的lm色值
          if (!colorStr) colorStr = el.getAttribute('bgcolor'); // 如果没有class则获取bgcolor的色值
          if (colorStr) {
            // 有色值（class对应的lm色值或者是bgcolor色值），则当做内联样式来处理
            const color = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(colorStr);
            if (color) {
              cssKVList.unshift(['background-color', color.toString()]);
              hasInlineBackground = true;
            }
          }
        });
      }
      if (nodeName === 'FONT' && !hasInlineColor) {
        // 如果是font标签且没有内联文本颜色样式
        this._try(() => {
          const colorStr = el.getAttribute('color'); // 获取color的色值
          if (colorStr) {
            // 有色值，则当做内联样式来处理
            const color = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(colorStr);
            if (color) {
              cssKVList.push(['color', color.toString()]);
              hasInlineColor = true;
            }
          }
        });
      }

      // 处理-webkit-text相关样式
      let webkitFillColor = '';
      let webkitStrokeColor = '';
      let webkitTextLen = 0;
      cssKVList.some(([key, value], idx) => this._try(() => {
        if (key.indexOf('-webkit-text') !== 0) {
          // 遍历到非-webkit-text样式
          webkitTextLen = idx; // 记录-webkit-text相关样式的长度
          return true; // 结束遍历
        }
        switch (key) {
          case '-webkit-text-fill-color':
            webkitFillColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.parseWebkitFillColorAndStrokeColor)(value);
            break;
          case '-webkit-text-stroke':
            {
              // 有-webkit-text-stroke时就不会有-webkit-text-stroke-color
              const newValue = value.split(' ');
              newValue.length === 2 && (webkitStrokeColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.parseWebkitFillColorAndStrokeColor)(newValue[1]));
              break;
            }
          case '-webkit-text-stroke-color':
            // 有-webkit-text-stroke-color时就不会有-webkit-text-stroke
            webkitStrokeColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.parseWebkitFillColorAndStrokeColor)(value);
            break;
        }
        return false; // 继续遍历
      }));
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
      let dmClassName = '';
      let dmBgClassName = '';
      if ((isUpdate || needReset) && el.className && typeof el.className === 'string') {
        // 先提取dm className
        let matches = el.className.match(_constant__WEBPACK_IMPORTED_MODULE_3__.DM_CLASSNAME_REGEXP);
        if (matches) {
          dmClassName = matches[0];
        }

        // 再提取dm bg className
        matches = el.className.match(_global__WEBPACK_IMPORTED_MODULE_5__.bgStack.classNameReg);
        if (matches) {
          dmBgClassName = matches[0];
        }
      }
      let cssKV = ''; // css键值对
      let noColor = needReset;
      noColor && _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.watch('color', () => {
        noColor = false;
        _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.unwatch('color');
      });
      cssKVList.forEach(([key, value]) => this._try(() => {
        const oldValue = value;
        let cssChange = false;

        // 找出色值来处理
        const isBgColor = _constant__WEBPACK_IMPORTED_MODULE_3__.CSS_PROP_SERIES.BG_COLOR.indexOf(key) > -1;
        const isTextShadow = _constant__WEBPACK_IMPORTED_MODULE_3__.CSS_PROP_SERIES.TEXT_SHADOW.indexOf(key) > -1;
        const textColorIdx = _constant__WEBPACK_IMPORTED_MODULE_3__.CSS_PROP_SERIES.TEXT_COLOR.indexOf(key);
        const isBorderColor = _constant__WEBPACK_IMPORTED_MODULE_3__.CSS_PROP_SERIES.BORDER_COLOR.indexOf(key) > -1;
        const isGradient = /gradient/.test(value);
        const gradientColors = [];
        let extStyle = '';
        let gradientMixColor = null;

        // 将英文定义颜色转换为rgb格式
        value = (0,_color__WEBPACK_IMPORTED_MODULE_2__.parseColorName)(value, isGradient); // 渐变需要处理透明

        if (_constant__WEBPACK_IMPORTED_MODULE_3__.COLOR_REGEXP.test(value)) {
          if (isGradient) {
            // 把原渐变色取出来
            let matches = _constant__WEBPACK_IMPORTED_MODULE_3__.COLOR_REGEXP_GLOBAL.exec(value);
            while (matches) {
              gradientColors.push(matches[0]);
              matches = _constant__WEBPACK_IMPORTED_MODULE_3__.COLOR_REGEXP_GLOBAL.exec(value);
            }

            // 计算出一个mix颜色
            gradientMixColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)(gradientColors, 'mix');
          }
          let replaceIndex = 0;
          value = value.replace(_constant__WEBPACK_IMPORTED_MODULE_3__.COLOR_REGEXP_GLOBAL, match => {
            let matchColor = null;

            // 渐变色统一改成mix纯色
            if (isGradient) {
              matchColor = gradientMixColor;
              cssChange = true;
            } else {
              matchColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(match);
            }
            if (matchColor && matchColor.alpha() >= _constant__WEBPACK_IMPORTED_MODULE_3__.IGNORE_ALPHA) {
              // 忽略透明度低的色值 // TODO: 后面要干掉这个逻辑
              // 使用颜色处理算法
              const ret = this._adjustBrightness(matchColor, el, {
                isBgColor,
                isTextShadow,
                isTextColor: textColorIdx > -1,
                isBorderColor,
                hasInlineColor
              }, isUpdate, needReset);
              const retColor = !hasInlineBackgroundImage && ret.newColor;
              extStyle += ret.extStyle;

              // 对背景颜色和文字颜色做继承传递，用于文字亮度计算
              if ((isBgColor || textColorIdx >= 5) && replaceIndex === 0) {
                // 只处理color及之后的属性
                const newColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)([el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultDarkBgColor, retColor || matchColor]);
                const newOriginalColor = isBgColor ? (0,_color__WEBPACK_IMPORTED_MODULE_2__.mixColors)([el[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultLightBgColor, matchColor]) : matchColor;
                (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
                  if (isBgColor) {
                    dom[_constant__WEBPACK_IMPORTED_MODULE_3__.BGCOLORATTR] = newColor;
                    dom[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_BGCOLORATTR] = newOriginalColor;
                  } else {
                    dom[_constant__WEBPACK_IMPORTED_MODULE_3__.COLORATTR] = newColor;
                    dom[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_COLORATTR] = newOriginalColor;
                  }
                });
              }
              retColor && (cssChange = true);
              replaceIndex++;
              return (retColor || matchColor).toString();
            }
            if (!isGradient) return match;
            return gradientMixColor === null ? match : gradientMixColor.toString();
          }).replace(/\s?!\s?important/ig, '');
        }
        extStyle && (cssKV += extStyle);
        if (!(el instanceof SVGElement)) {
          // 先不处理SVG
          // 背景图片、边框图片
          const isBackgroundAttr = /^background/.test(key);
          const isBorderImageAttr = /^(-webkit-)?border-image/.test(key);
          if ((isBackgroundAttr || isBorderImageAttr) && _constant__WEBPACK_IMPORTED_MODULE_3__.URL_REGEXP.test(value)) {
            cssChange = true;

            // 在背景图片下加一层原背景颜色，即图片补色：
            // background-image使用多层背景(注意background-position也要多加一层 https://www.w3.org/TR/css-backgrounds-3/#layering)
            // border-image不支持多层背景，需要添加background-image
            const imgBgColor = el[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultLightBgColor;
            if (/^(.*?)url\(([^)]*)\)(.*)$/i.test(value)) {
              let tmpCssKvStr = '';

              // 标记为有背景图片
              !el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGIMAGEATTR] && (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
                dom[_constant__WEBPACK_IMPORTED_MODULE_3__.BGIMAGEATTR] = true;
              });

              // background-image
              if (isBackgroundAttr) {
                tmpCssKvStr = _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV(key, `${value},linear-gradient(${imgBgColor}, ${imgBgColor})`);
                if (elBackgroundPositionAttr) {
                  cssKV += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('background-position', elBackgroundPositionAttr);
                  tmpCssKvStr += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('background-position', `${elBackgroundPositionAttr},top left`);
                }
                if (elBackgroundSizeAttr) {
                  cssKV += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('background-size', elBackgroundSizeAttr);
                  tmpCssKvStr += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('background-size', `${elBackgroundSizeAttr},100%`);
                }
                if (!needReset) {
                  if (dmBgClassName) {
                    // 如果是文字底图，则直接加样式
                    bgCss += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                    (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
                      dom[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR] = imgBgColor;
                    });
                  } else {
                    // 否则背景图入栈
                    _global__WEBPACK_IMPORTED_MODULE_5__.bgStack.push(el, tmpCssKvStr, bgStackItem => {
                      const els = [bgStackItem.elOld];
                      bgStackItem.el !== bgStackItem.elOld && els.push(bgStackItem.el);
                      els.forEach(bgEl => {
                        // 新老节点都要处理
                        (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(bgEl).forEach(dom => {
                          dom[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR] = imgBgColor;
                        });
                      });
                    });
                  }
                }
              } else {
                // border-image元素，如果当前元素没有背景颜色，补背景颜色
                if (imgBgColor && !hasInlineBackground && !needReset) {
                  tmpCssKvStr = _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('background-image', `linear-gradient(${imgBgColor}, ${imgBgColor})`);
                  if (dmBgClassName) {
                    // 如果是文字底图，则直接加样式
                    bgCss += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                  } else {
                    // 否则边框图入栈
                    _global__WEBPACK_IMPORTED_MODULE_5__.bgStack.push(el, tmpCssKvStr);
                  }
                }
              }
            }

            // 没有设置自定义字体颜色，则使用 Light Mode 下默认字体颜色
            if (!hasInlineColor) {
              const textColor = el[_constant__WEBPACK_IMPORTED_MODULE_3__.ORIGINAL_COLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultLightTextColor;
              cssKV += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('color', textColor);
              (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
                dom[_constant__WEBPACK_IMPORTED_MODULE_3__.COLORATTR] = textColor;
              });
            }
          }
        }
        if (cssChange || needReset) {
          !isUpdate && !needReset && _constant__WEBPACK_IMPORTED_MODULE_3__.IMPORTANT_REGEXP.test(oldValue) && (styles[key] = oldValue.replace(_constant__WEBPACK_IMPORTED_MODULE_3__.IMPORTANT_REGEXP, '')); // 清除inline style的!important
          if (isGradient) {
            if (!needReset) {
              if (dmBgClassName) {
                // 如果是文字底图，则直接加样式
                bgCss += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCss(dmBgClassName, _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV(key, value));
                if (gradientMixColor && /^background/.test(key) && !_constant__WEBPACK_IMPORTED_MODULE_3__.URL_REGEXP.test(value)) {
                  // 是无背景图的渐变，需要重新计算背景色
                  css += this._updateBgWithGradient(gradientMixColor, el, dmBgClassName, cssKVList, isUpdate, needReset);
                }
              } else {
                // 否则渐变入栈
                _global__WEBPACK_IMPORTED_MODULE_5__.bgStack.push(el, _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV(key, value), item => {
                  if (gradientMixColor && /^background/.test(key) && !_constant__WEBPACK_IMPORTED_MODULE_3__.URL_REGEXP.test(value)) {
                    // 是无背景图的渐变，需要重新计算背景色
                    css += this._updateBgWithGradient(gradientMixColor, el, item.className, cssKVList, isUpdate, needReset);
                    el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGGRADIENT_MIXCOLORATTR] = gradientMixColor;
                  }
                });
              }
            }
          } else {
            if (key === 'color') {
              noColor = false;
              _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.unwatch('color');
            }
            cssKV += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV(key, !cssChange && needReset ? el.style[key] : value);
          }
        }
      }));
      if (noColor) {
        cssKV += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('color', el.style.color || el[_constant__WEBPACK_IMPORTED_MODULE_3__.COLORATTR] || _config__WEBPACK_IMPORTED_MODULE_4__["default"].defaultDarkTextColor);
        _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.unwatch('color');
      }
      if (cssKV) {
        // 有处理过或者是背景图片就加class以及css
        if (!dmClassName) {
          dmClassName = `${_constant__WEBPACK_IMPORTED_MODULE_3__.CLASS_PREFIX}${this._idx++}`;
          el.classList.add(dmClassName);
        }
        css += cssKV ? _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCss(dmClassName, cssKV) : '';
      }
      css += bgCss; // 追加文字底图样式，要在添加cssKV之后添加，避免被覆盖

      if (!isUpdate && (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.hasTextNode)(el) && !needReset) {
        // 如果节点里有文本，要判断是否在背景图里
        if (_config__WEBPACK_IMPORTED_MODULE_4__["default"].delayBgJudge) {
          // 延迟背景判断
          _global__WEBPACK_IMPORTED_MODULE_5__.tnQueue.push(el); // 文字入队
        } else {
          _global__WEBPACK_IMPORTED_MODULE_5__.bgStack.contains(el, item => {
            css += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCss(item.className, item.cssKV);
            item.cb?.(item);
          });
        }
      }
    }
    let afterConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_NODE;
    if (isUpdate) {
      afterConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_UPDATE_STYLE;
    } else if (needReset) {
      afterConvertNodeHookName = _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_RESET;
    }
    _global__WEBPACK_IMPORTED_MODULE_5__.plugins.emit(afterConvertNodeHookName, el);
    return css;
  }

  // 获取两个颜色的对比度
  getContrast(colorStr1, colorStr2) {
    const color1 = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(colorStr1);
    const color2 = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(colorStr2);
    return color1 && color2 ? color1.contrast(color2) : 0;
  }

  // 重置
  reset() {
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
}
;

/***/ },

/***/ "./src/modules/textNodeQueue.ts"
/*!**************************************!*\
  !*** ./src/modules/textNodeQueue.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextNodeQueue)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

class TextNodeQueue {
  // 索引值

  constructor(prefix) {
    _defineProperty(this, "_prefix", void 0);
    _defineProperty(this, "_queue", []);
    // 文本节点队列
    _defineProperty(this, "_idx", 0);
    this._prefix = prefix;
  }

  // 队列长度
  get length() {
    return this._queue.length;
  }

  // 文本节点入队
  push(el) {
    const className = `${this._prefix}${this._idx++}`;
    el.classList.add(className);
    this._queue.push({
      el,
      className,
      updated: !_config__WEBPACK_IMPORTED_MODULE_0__["default"].delayBgJudge
    });
  }

  // 遍历，遍历过的文本节点出队
  forEach(callback) {
    const idxStack = [];
    this._queue.forEach((item, idx) => {
      if (item.updated) {
        idxStack.unshift(idx);
        typeof callback && callback(item.el);
      }
    });
    while (idxStack.length) {
      // 处理完之后删除部分节点
      const idx = idxStack.shift();
      if (idx === undefined) continue;
      this._queue.splice(idx, 1);
    }
  }

  // 更新队列的节点对象，主要解决前后节点不一致的问题
  update(els) {
    this._queue.forEach(item => {
      if (!item.updated) {
        Array.prototype.some.call(els, el => {
          if (el.nodeType === 1 && el.classList.contains(item.className)) {
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
  reset() {
    this._queue = [];
    this._idx = 0;
  }
}
;

/***/ },

/***/ "./src/modules/validator.ts"
/*!**********************************!*\
  !*** ./src/modules/validator.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate: () => (/* binding */ validate)
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


function validate(container, opt = {}, filter) {
  const treeWalker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, node => {
    if (!(node instanceof HTMLElement)) return NodeFilter.FILTER_REJECT; // 忽略非元素节点
    if (node.style.display === 'none') return NodeFilter.FILTER_REJECT; // 忽略不可见节点以及其所有子节点
    if (_constant__WEBPACK_IMPORTED_MODULE_0__.URL_REGEXP.test(node.style.backgroundImage || '') || _constant__WEBPACK_IMPORTED_MODULE_0__.URL_REGEXP.test(node.style.webkitBorderImage || node.style.borderImage || '')) return NodeFilter.FILTER_REJECT; // 忽略有背景图片的节点以及其所有子节点
    if (node instanceof SVGElement) return NodeFilter.FILTER_REJECT; // 忽略SVG节点以及其所有子节点
    if (filter?.(node)) return NodeFilter.FILTER_SKIP; // 忽略filter(node)返回true的节点
    return NodeFilter.FILTER_ACCEPT;
  });
  const cases = [];
  while (treeWalker.nextNode()) {
    const currentNode = treeWalker.currentNode;
    if (currentNode instanceof HTMLElement) {
      const ignoreRules = (currentNode.dataset.ignoreDm || '').split(/\s+/);
      if (!ignoreRules.includes(_constant__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_IGNORE_RULES.LOW_CONTRAST) && Array.prototype.some.call(currentNode.childNodes, child => child.nodeType === 3 && child.nodeValue.replace(/\s/g, '').length)) {
        // 有文本内容，校验对比度
        const contrast = _global__WEBPACK_IMPORTED_MODULE_2__.sdk.getContrast(currentNode[_constant__WEBPACK_IMPORTED_MODULE_0__.COLORATTR] || _config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultDarkTextColor, currentNode[_constant__WEBPACK_IMPORTED_MODULE_0__.BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultDarkBgColor);
        if (contrast < (opt.minContrast || 1.5)) {
          cases.push({
            dom: currentNode,
            key: 'darkmode-low-contrast',
            violateRules: '文字与背景色对比度太低（参考文档#4.1.1使用对比度适中的颜色）'
          });
        }
      }
      if (!ignoreRules.includes(_constant__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_IGNORE_RULES.TEXT_BG_GRADIENT) && currentNode[_constant__WEBPACK_IMPORTED_MODULE_0__.BGGRADIENT_MIXCOLORATTR]) {
        cases.push({
          dom: currentNode,
          key: 'darkmode-no-gradient',
          violateRules: '文字背景尽量不要使用渐变（参考文档#4.1.2如非必要，文字背景尽量不要使用渐变）'
        });
      }
      if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].whitelist.attribute.some(attribute => currentNode.hasAttribute(attribute))) {
        cases.push({
          dom: currentNode,
          key: 'darkmode-whitelist',
          violateRules: '注意，此处包含白名单属性，会跳过darkmode算法转换（参考文档#4.5.1 指定节点跳过算法转换）'
        });
      }
    }
  }
  return cases;
}
;

/***/ },

/***/ "?4f7e"
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
() {

/* (ignored) */

/***/ }

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/darkmode.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertBg: () => (/* binding */ convertBg),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   getContrast: () => (/* binding */ getContrast),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   reset: () => (/* binding */ reset),
/* harmony export */   run: () => (/* binding */ run),
/* harmony export */   updateStyle: () => (/* binding */ updateStyle),
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var object_hasown_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object.hasown/auto */ "./node_modules/object.hasown/auto.js");
/* harmony import */ var object_hasown_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_hasown_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/constant */ "./src/modules/constant.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/config */ "./src/modules/config.ts");
/* harmony import */ var _modules_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/global */ "./src/modules/global.ts");
/* harmony import */ var _modules_domUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/domUtils */ "./src/modules/domUtils.ts");
/**
 * @name Darkmode主入口
 *
 * @function run 初始化Dark Mode配置并运行Dark Mode处理
 * @param {HTMLElement[]} nodes    要处理的节点列表
 * @param {ConfigOption}  [opt={}] Dark Mode配置，详见init配置说明
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
 * @param {ValidateOption} opt       校验配置
 * @param {ValidateFilter} [filter]  过滤器
 * @return {ValidateResult[]} 校验结果
 *
 */

// Object.hasOwn polyfill：color-string / colorjs.io 等依赖在模块初始化时即调用 Object.hasOwn，
// 而该 API 在 iOS 15.4 以下不支持，因此必须作为最顶部、最先执行的 import

// 常量

const classReg = new RegExp(`${_modules_constant__WEBPACK_IMPORTED_MODULE_1__.CLASS_PREFIX}[^ ]+`, 'g');

// Darkmode配置



// Dark Mode切换
let mql = null;
const switchToDarkmode = (mqlObj, opt = {
  type: 'dom'
}) => {
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
      // 处理节点
      _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode && _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].begin?.(_modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.hasDelay());
      Array.prototype.forEach.call(_modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.get(), node => {
        if (_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode && node.className && typeof node.className === 'string') {
          node.className = node.className.replace(classReg, ''); // 过滤掉原有的Dark Mode class，避免外部复制文章时把文章内的Dark Mode class也复制过去导致新文章在Dark Mode下样式错乱
        }
        if (_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode || _modules_global__WEBPACK_IMPORTED_MODULE_3__.plugins.length) {
          if (!_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].needJudgeFirstPage) {
            // 不需要判断首屏
            _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node)); // 写入非首屏样式
          } else {
            // 判断首屏
            const rect = node.getBoundingClientRect();
            const top = rect.top;
            const bottom = rect.bottom;
            if (top <= 0 && bottom <= 0) {
              // 首屏前面
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node)); // 写入非首屏样式
            } else if (top > 0 && top < _modules_constant__WEBPACK_IMPORTED_MODULE_1__.PAGE_HEIGHT || bottom > 0 && bottom < _modules_constant__WEBPACK_IMPORTED_MODULE_1__.PAGE_HEIGHT) {
              // 首屏
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.addFirstPageNode(node); // 记录首屏节点
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node), true); // 写入首屏样式
            } else {
              // 首屏后面，理论上，这里最多只会进来一次
              _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].needJudgeFirstPage = false; // 至此，不需要再判断首屏了

              // 显示首屏
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.writeStyle(true); // 写入首屏样式表
              _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.showFirstPageNodes(); // 显示首屏节点
              _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].showFirstPage?.(); // 执行首屏回调

              _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node)); // 写入非首屏样式
            }
          }
        }
      });
      _modules_global__WEBPACK_IMPORTED_MODULE_3__.plugins.loopTimes++;
    } else if (opt.type === 'bg') {
      // 处理背景
      _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.isDarkmode && _modules_global__WEBPACK_IMPORTED_MODULE_3__.tnQueue.forEach(text => _modules_global__WEBPACK_IMPORTED_MODULE_3__.bgStack.contains(text, bg => {
        _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.genCss(bg.className, bg.cssKV)); // 写入非首屏样式
        typeof bg.cb === 'function' && bg.cb(bg);

        // 还得处理该背景下的所有新老节点
        const els = [bg.elOld];
        bg.elOld !== bg.el && els.push(bg.el);
        els.forEach(el => {
          const inheritAttrs = [[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.COLORATTR, el[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.COLORATTR] ?? null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGCOLORATTR, el[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGCOLORATTR] ?? null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_COLORATTR, el[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_COLORATTR] ?? null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_BGCOLORATTR, el[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_BGCOLORATTR] ?? null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGIMAGEATTR, el[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGIMAGEATTR] ?? null], [_modules_constant__WEBPACK_IMPORTED_MODULE_1__.COMPLEMENTARY_BGIMAGECOLORATTR, el[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.COMPLEMENTARY_BGIMAGECOLORATTR] ?? null]];
          const children = (0,_modules_domUtils__WEBPACK_IMPORTED_MODULE_4__.getChildrenAndIt)(el, true);
          children.forEach(child => {
            // 重置继承属性
            inheritAttrs.forEach(([attr, value]) => {
              if (value === null) {
                delete child[attr];
              } else {
                child[attr] = value;
              }
            });
          });
          children.forEach(child => {
            // 重新运行Dark Mode处理逻辑
            _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(child, undefined, false, true));
          });
        });
      }));
    }
    if (_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].needJudgeFirstPage || !_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].needJudgeFirstPage && !_modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.showFirstPage) {
      // config.needJudgeFirstPage === ture，表示需要判断首屏但是正文长度没超过一屏
      // config.needJudgeFirstPage === false && domUtils.showFirstPage === false，表示不需要判断首屏且没有做首屏优化
      _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].showFirstPage?.(); // 执行首屏回调
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
    console.log('An error occurred when running the dark mode conversion algorithm\n', e);
    _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].error?.(e);
  }
};

// 初始化Dark Mode配置并运行Dark Mode处理
function run(nodes, opt = {}) {
  init(opt); // 初始化配置

  _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.set(nodes);
  switchToDarkmode(mql, {
    force: true,
    type: 'dom'
  });
}
;

// 初始化Dark Mode配置
function init(opt = {}) {
  if (_modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].hasInit) {
    // 只可设置一次配置
    console.log('Dark Mode can only be initialized once');
    return;
  }
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].hasInit = true; // 记录为配置已设置

  const tagName = _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].whitelist.tagName;
  const attribute = _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].whitelist.attribute;
  if (opt.whitelist) {
    opt.whitelist.tagName instanceof Array && opt.whitelist.tagName.forEach(item => {
      item = item.toUpperCase();
      tagName.indexOf(item) === -1 && tagName.push(item);
    });
    opt.whitelist.attribute instanceof Array && opt.whitelist.attribute.forEach(item => {
      attribute.indexOf(item) === -1 && attribute.push(item);
    });
  }
  if (opt.mode && ['dark', 'light'].indexOf(opt.mode) > -1) {
    _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('string', opt, 'mode');
    opt.mode === 'dark' && document.getElementsByTagName('html')[0].classList.add(_modules_constant__WEBPACK_IMPORTED_MODULE_1__.HTML_CLASS);
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
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.convert(node, styles ? Object.keys(styles).map(key => [key, styles[key]]) : undefined, true));
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.writeStyle();
}
;

// 获取两个颜色的对比度
function getContrast(color1, color2) {
  return _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.getContrast(color1, color2);
}
;

// 挂载插件
function extend(pluginList) {
  pluginList.forEach(plugin => _modules_global__WEBPACK_IMPORTED_MODULE_3__.plugins.extend(plugin));
}
;

// 重置
function reset(nodes) {
  _modules_config__WEBPACK_IMPORTED_MODULE_2__["default"].reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.plugins.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.tnQueue.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.bgStack.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.cssUtils.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.domUtils.reset();
  _modules_global__WEBPACK_IMPORTED_MODULE_3__.sdk.reset();
  document.getElementsByTagName('html')[0].classList.remove(_modules_constant__WEBPACK_IMPORTED_MODULE_1__.HTML_CLASS);
  if (mql) {
    mql.removeListener(switchToDarkmode); // 取消监听
    mql = null;
  }
  nodes?.forEach(node => {
    delete node[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.COLORATTR];
    delete node[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGCOLORATTR];
    delete node[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_COLORATTR];
    delete node[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.ORIGINAL_BGCOLORATTR];
    delete node[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGIMAGEATTR];
    delete node[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.BGGRADIENT_MIXCOLORATTR];
    delete node[_modules_constant__WEBPACK_IMPORTED_MODULE_1__.COMPLEMENTARY_BGIMAGECOLORATTR];
  });
}
;

// 校验
function validate(container, opt, filter) {
  return _modules_global__WEBPACK_IMPORTED_MODULE_3__.validator.validate(container, opt, filter);
}
;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=darkmode.js.map