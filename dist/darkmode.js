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
(module, __unused_webpack_exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-convert/node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

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
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
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
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

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
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ },

/***/ "./node_modules/color-convert/index.js"
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ },

/***/ "./node_modules/color-convert/node_modules/color-name/index.js"
/*!*********************************************************************!*\
  !*** ./node_modules/color-convert/node_modules/color-name/index.js ***!
  \*********************************************************************/
(module) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ },

/***/ "./node_modules/color-convert/route.js"
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

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
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ },

/***/ "./node_modules/color-name/index.js"
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
(module) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ },

/***/ "./node_modules/color-string/index.js"
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");
var hasOwnProperty = Object.hasOwnProperty;

var reverseNames = Object.create(null);

// create a list of reverse color names
for (var name in colorNames) {
	if (hasOwnProperty.call(colorNames, name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var keyword = /^(\w+)$/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!hasOwnProperty.call(colorNames, match[1])) {
			return null;
		}

		rgb = colorNames[match[1]];
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

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

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

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = Math.round(num).toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ },

/***/ "./node_modules/color/index.js"
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
var convert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
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
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

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

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
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

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ },

/***/ "./node_modules/is-arrayish/index.js"
/*!*******************************************!*\
  !*** ./node_modules/is-arrayish/index.js ***!
  \*******************************************/
(module) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ },

/***/ "./node_modules/simple-swizzle/index.js"
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(/*! is-arrayish */ "./node_modules/is-arrayish/index.js");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
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
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color_blend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color-blend */ "./node_modules/color-blend/dist/index.modern.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.ts");
/**
 * @name 颜色操作相关API
 *
 * @function ColorParser 实例化Color对象，传参非法时返回null
 * @param {ColorParam} color css色值
 * @return {Color | null} 实例化结果
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
 * @return {Color | null} 混合结果
 *
 * @function getFrontColor 根据混合色、背景色和前景色透明度，反推前景色rgba，目前混合模式只支持'normal'
 * @param {ColorParam}                retColor 混合色
 * @param {ColorParam | ColorParam[]} bgColor  背景色
 * @param {number}                    alpha    前景色透明度
 * @return {Color} 前景色
 *
 * @function getColorPerceivedBrightness 计算感知亮度
 * @param {RGBAArray} rgba 要计算的颜色rgba数组，如：[255, 0, 0, 1]
 * @return {number} 感知亮度
 *
 * @function adjustBrightnessTo 调整为指定感知亮度
 * @param {number}    target 指定的感知亮度值
 * @param {RGBAArray} rgba   要调整的颜色rgba数组，如：[255, 0, 0, 1]
 * @return {Color} 调整后的颜色
 *
 */




const ColorName = {
  ...color_name__WEBPACK_IMPORTED_MODULE_0__,
  // 补上这些colorName
  windowtext: [0, 0, 0],
  // windows特有的colorName
  transparent: [255, 255, 255, 0] // 透明，暂定用白色透明度0来表示
};
// 常量

const COLOR_NAME_REG = new RegExp(Object.keys(ColorName).map(colorName => `\\b${colorName}\\b`).join('|'), 'ig'); // 生成正则表达式来匹配这些colorName

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
    res = color instanceof color__WEBPACK_IMPORTED_MODULE_1__ ? color : color__WEBPACK_IMPORTED_MODULE_1__(color);
  } catch (e) {
    console.log(`ignore the invalid color: \`${color}\`, error: ${e}`);
  }
  return res;
};

// 处理颜色，包括清除!important和转换英文定义颜色
const parseColorName = (color, supportTransparent = false) => color.replace(_constant__WEBPACK_IMPORTED_MODULE_3__.IMPORTANT_REGEXP, '').replace(COLOR_NAME_REG, match => {
  if (!supportTransparent && match === 'transparent') return match; // 如果不支持转换transparent，直接返回transparent

  const color = ColorName[match.toLowerCase()];
  return `${color.length > 3 ? 'rgba' : 'rgb'}(${color.toString()})`;
});

// 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
const parseWebkitFillColorAndStrokeColor = color => {
  const newValue = parseColorName(color);
  return _constant__WEBPACK_IMPORTED_MODULE_3__.COLOR_REGEXP.test(newValue) ? newValue : '';
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
  return color__WEBPACK_IMPORTED_MODULE_1__.rgb(newTextR, newTextG, newTextB, rgba[3] || 1);
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
 */

// 常量


const config = {
  hasInit: false,
  // 是否初始化过配置

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
/* harmony export */   TABLE_NAME: () => (/* binding */ TABLE_NAME),
/* harmony export */   URL_REGEXP: () => (/* binding */ URL_REGEXP),
/* harmony export */   WHITE_LIKE_COLOR_BRIGHTNESS: () => (/* binding */ WHITE_LIKE_COLOR_BRIGHTNESS)
/* harmony export */ });
/**
 * @name 常量
 *
 */

const MEDIA_QUERY = '(prefers-color-scheme: dark)'; // Dark Mode的CSS媒体查询

const CLASS_PREFIX = 'js_darkmode__'; // Dark Mode class前缀
const DM_CLASSNAME_REGEXP = new RegExp(`${CLASS_PREFIX}\\d+`);
const HTML_CLASS = 'data_color_scheme_dark'; // 强制设置暗黑模式时给html加的class

const RANDOM = `${new Date().getTime()}${Math.floor(Math.random() * 10000)}`; // 生成个随机数，格式为时间戳+随机数
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
const COLOR_REGEXP = /\brgba?\([^)]+\)/i;
const COLOR_REGEXP_GLOBAL = /\brgba?\([^)]+\)/ig;
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
    _defineProperty(this, "isFinish", false);
  }

  // 生成css键值对
  genCssKV(key, val) {
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
    styles && document.head.insertAdjacentHTML('beforeend', `<style type="text/css">${styles}</style>`);
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
  return [el].concat(Array.from(el.querySelectorAll('*')));
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
      this.firstPageStyle += cssNeedMQ.join('');
      this.firstPageStyleNoMQ += cssNoMQ.join('');
    } else {
      this.otherPageStyle += cssNeedMQ.join('');
      this.otherPageStyleNoMQ += cssNoMQ.join('');
    }
  }

  // 重置插件样式
  resetCss() {
    cssNeedMQ = [];
    cssNoMQ = [];
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
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
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
  _adjustBrightness(color, el, options, isUpdate = false) {
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
        if (el[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR] === color.toString() || this.getContrast(el[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR], color.toString()) < 1.1) return {
          newColor: null,
          extStyle
        };

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
          }, isUpdate);
          if (ret.newColor) {
            extStyle += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('color', ret.newColor.toString());
          } else {
            extStyle += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV('color', parentTextColor.toString());
          }

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
        _global__WEBPACK_IMPORTED_MODULE_5__.plugins.emit(isUpdate ? _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_UPDATE_STYLE : _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR, el, {
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
        return this._adjustTextBrightness(color__WEBPACK_IMPORTED_MODULE_1__.hsl(...textColorMixHsl), bgColor, {
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
        return this._adjustTextBrightness(color__WEBPACK_IMPORTED_MODULE_1__.hsl(...textColorMixHsl), bgColor, {
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
      newColor = color__WEBPACK_IMPORTED_MODULE_1__.hsl(0, 0, Math.min(100, 100 + this._defaultDarkBgColorHslBrightness - mixColorHsl[2]), mixColorHsl[3] || 1);
    } else if (mixColorPerceivedBrightness > _constant__WEBPACK_IMPORTED_MODULE_3__.MAX_LIMIT_BGCOLOR_BRIGHTNESS) {
      // 感知亮度大于MAX_LIMIT_BGCOLOR_BRIGHTNESS，将感知亮度设为MAX_LIMIT_BGCOLOR_BRIGHTNESS
      newColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.adjustBrightnessTo)(_constant__WEBPACK_IMPORTED_MODULE_3__.MAX_LIMIT_BGCOLOR_BRIGHTNESS, mixColorRgb);
    } else if (mixColorHsl[2] < _constant__WEBPACK_IMPORTED_MODULE_3__.LOW_BLACKWHITE_HSL_BRIGHTNESS) {
      // 亮度小于LOW_BLACKWHITE_HSL_BRIGHTNESS，将亮度设为LOW_BLACKWHITE_HSL_BRIGHTNESS，适当提高亮度
      mixColorHsl[2] = _constant__WEBPACK_IMPORTED_MODULE_3__.LOW_BLACKWHITE_HSL_BRIGHTNESS;
      newColor = color__WEBPACK_IMPORTED_MODULE_1__.hsl(...mixColorHsl);
    }
    return (0,_color__WEBPACK_IMPORTED_MODULE_2__.getFrontColor)(newColor, bgColorMix, bgColor.alpha());
  }

  // 叠加渐变色到背景色中，并更新背景色相关属性值以及文本颜色
  _updateBgWithGradient(gradientColor, el, className, cssKVList, isUpdate = false) {
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
    }, isUpdate);
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
  convert(el, cssKVList = [], isUpdate = false) {
    _global__WEBPACK_IMPORTED_MODULE_5__.plugins.resetCss();
    _global__WEBPACK_IMPORTED_MODULE_5__.plugins.emit(isUpdate ? _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_UPDATE_STYLE : _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.BEFORE_CONVERT_NODE, el);
    let css = ''; // css
    let bgCss = ''; // 文字底图css

    if (this.isDarkmode || isUpdate) {
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
      if (isUpdate && el.className && typeof el.className === 'string') {
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
              }, isUpdate);
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
                if (dmBgClassName) {
                  // 如果是文字底图，则直接加样式
                  bgCss += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                  (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
                    dom[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR] = imgBgColor;
                  });
                } else {
                  // 否则背景图入栈
                  _global__WEBPACK_IMPORTED_MODULE_5__.bgStack.push(el, tmpCssKvStr, () => {
                    (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.getChildrenAndIt)(el).forEach(dom => {
                      dom[_constant__WEBPACK_IMPORTED_MODULE_3__.COMPLEMENTARY_BGIMAGECOLORATTR] = imgBgColor;
                    });
                  });
                }
              } else {
                // border-image元素，如果当前元素没有背景颜色，补背景颜色
                if (imgBgColor && !hasInlineBackground) {
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
        if (cssChange) {
          !isUpdate && _constant__WEBPACK_IMPORTED_MODULE_3__.IMPORTANT_REGEXP.test(oldValue) && (styles[key] = oldValue.replace(_constant__WEBPACK_IMPORTED_MODULE_3__.IMPORTANT_REGEXP, '')); // 清除inline style的!important
          if (isGradient) {
            if (dmBgClassName) {
              // 如果是文字底图，则直接加样式
              bgCss += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCss(dmBgClassName, _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV(key, value));
              if (gradientMixColor && /^background/.test(key) && !_constant__WEBPACK_IMPORTED_MODULE_3__.URL_REGEXP.test(value)) {
                // 是无背景图的渐变，需要重新计算背景色
                css += this._updateBgWithGradient(gradientMixColor, el, dmBgClassName, cssKVList, isUpdate);
              }
            } else {
              // 否则渐变入栈
              _global__WEBPACK_IMPORTED_MODULE_5__.bgStack.push(el, _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV(key, value), item => {
                if (gradientMixColor && /^background/.test(key) && !_constant__WEBPACK_IMPORTED_MODULE_3__.URL_REGEXP.test(value)) {
                  // 是无背景图的渐变，需要重新计算背景色
                  css += this._updateBgWithGradient(gradientMixColor, el, item.className, cssKVList, isUpdate);
                  el[_constant__WEBPACK_IMPORTED_MODULE_3__.BGGRADIENT_MIXCOLORATTR] = gradientMixColor;
                }
              });
            }
          } else {
            cssKV += _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCssKV(key, value);
          }
        }
      }));
      if (cssKV) {
        // 有处理过或者是背景图片就加class以及css
        if (!dmClassName) {
          dmClassName = `${_constant__WEBPACK_IMPORTED_MODULE_3__.CLASS_PREFIX}${this._idx++}`;
          el.classList.add(dmClassName);
        }
        css += cssKV ? _global__WEBPACK_IMPORTED_MODULE_5__.cssUtils.genCss(dmClassName, cssKV) : '';
      }
      css += bgCss; // 追加文字底图样式，要在添加cssKV之后添加，避免被覆盖

      if (!isUpdate && (0,_domUtils__WEBPACK_IMPORTED_MODULE_6__.hasTextNode)(el)) {
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
    _global__WEBPACK_IMPORTED_MODULE_5__.plugins.emit(isUpdate ? _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_UPDATE_STYLE : _darkmode_d__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_HOOK.AFTER_CONVERT_NODE, el);
    return css;
  }

  // 获取两个颜色的对比度
  getContrast(colorStr1, colorStr2) {
    const color1 = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(colorStr1);
    const color2 = (0,_color__WEBPACK_IMPORTED_MODULE_2__.ColorParser)(colorStr2);
    return color1 && color2 ? color1.contrast(color2) : 0;
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


function validate(container, opt, filter) {
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
      if (Array.prototype.some.call(currentNode.childNodes, child => child.nodeType === 3 && child.nodeValue.replace(/\s/g, '').length)) {
        // 有文本内容，校验对比度
        const contrast = _global__WEBPACK_IMPORTED_MODULE_2__.sdk.getContrast(currentNode[_constant__WEBPACK_IMPORTED_MODULE_0__.COLORATTR] || _config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultDarkTextColor, currentNode[_constant__WEBPACK_IMPORTED_MODULE_0__.BGCOLORATTR] || _config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultDarkBgColor);
        if (contrast < (opt.minContrast || 1.5)) {
          cases.push({
            dom: currentNode,
            key: 'darkmode-low-contrast',
            violateRules: '文字与背景色对比度太低（参考文档#1.1使用对比度适中的颜色）'
          });
        }
      }
      if (currentNode[_constant__WEBPACK_IMPORTED_MODULE_0__.BGGRADIENT_MIXCOLORATTR]) {
        cases.push({
          dom: currentNode,
          key: 'darkmode-no-gradient',
          violateRules: '文字背景尽量不要使用渐变（参考文档#1.2如非必要，文字背景尽量不要使用渐变）'
        });
      }
      if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].whitelist.attribute.some(attribute => currentNode.hasAttribute(attribute))) {
        cases.push({
          dom: currentNode,
          key: 'darkmode-whitelist',
          violateRules: '注意，此处包含白名单属性，会跳过darkmode算法转换（参考文档#5.1 指定节点跳过算法转换）'
        });
      }
    }
  }
  return cases;
}
;

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
/* harmony export */   run: () => (/* binding */ run),
/* harmony export */   updateStyle: () => (/* binding */ updateStyle),
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var _modules_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/constant */ "./src/modules/constant.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/config */ "./src/modules/config.ts");
/* harmony import */ var _modules_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/global */ "./src/modules/global.ts");
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
 * @function validate 校验
 * @param {HTMLElement}    container 要校验的容器节点
 * @param {ValidateOption} opt       校验配置
 * @param {ValidateFilter} [filter]  过滤器
 * @return {ValidateResult[]} 校验结果
 *
 */

// 常量

const classReg = new RegExp(`${_modules_constant__WEBPACK_IMPORTED_MODULE_0__.CLASS_PREFIX}[^ ]+`, 'g');

// Darkmode配置


// Dark Mode切换
let mql;
const switchToDarkmode = (mqlObj, opt = {
  type: 'dom'
}) => {
  opt.force && (_modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.isFinish = false); // 如果是强制运行Dark Mode处理逻辑，则重置为未运行

  if (_modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.isFinish) return; // 已运行过Dark Mode处理逻辑则不再运行

  try {
    _modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode = _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].mode ? _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].mode === 'dark' : mqlObj.matches;
    if (opt.type === 'dom') {
      // 处理节点
      _modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode && _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].begin?.(_modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.hasDelay());
      Array.prototype.forEach.call(_modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.get(), node => {
        if (_modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode && node.className && typeof node.className === 'string') {
          node.className = node.className.replace(classReg, ''); // 过滤掉原有的Dark Mode class，避免外部复制文章时把文章内的Dark Mode class也复制过去导致新文章在Dark Mode下样式错乱
        }
        if (_modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode || _modules_global__WEBPACK_IMPORTED_MODULE_2__.plugins.length) {
          if (!_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage) {
            // 不需要判断首屏
            _modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.convert(node)); // 写入非首屏样式
          } else {
            // 判断首屏
            const rect = node.getBoundingClientRect();
            const top = rect.top;
            const bottom = rect.bottom;
            if (top <= 0 && bottom <= 0) {
              // 首屏前面
              _modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.convert(node)); // 写入非首屏样式
            } else if (top > 0 && top < _modules_constant__WEBPACK_IMPORTED_MODULE_0__.PAGE_HEIGHT || bottom > 0 && bottom < _modules_constant__WEBPACK_IMPORTED_MODULE_0__.PAGE_HEIGHT) {
              // 首屏
              _modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.addFirstPageNode(node); // 记录首屏节点
              _modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.convert(node), true); // 写入首屏样式
            } else {
              // 首屏后面，理论上，这里最多只会进来一次
              _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage = false; // 至此，不需要再判断首屏了

              // 显示首屏
              _modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.writeStyle(true); // 写入首屏样式表
              _modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.showFirstPageNodes(); // 显示首屏节点
              _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].showFirstPage?.(); // 执行首屏回调

              _modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.convert(node)); // 写入非首屏样式
            }
          }
        }
      });
      _modules_global__WEBPACK_IMPORTED_MODULE_2__.plugins.loopTimes++;
    } else if (opt.type === 'bg') {
      // 处理背景
      _modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode && _modules_global__WEBPACK_IMPORTED_MODULE_2__.tnQueue.forEach(text => _modules_global__WEBPACK_IMPORTED_MODULE_2__.bgStack.contains(text, bg => {
        _modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.genCss(bg.className, bg.cssKV)); // 写入非首屏样式
      }));
    }
    if (_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage || !_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage && !_modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.showFirstPage) {
      // config.needJudgeFirstPage === ture，表示需要判断首屏但是正文长度没超过一屏
      // config.needJudgeFirstPage === false && domUtils.showFirstPage === false，表示不需要判断首屏且没有做首屏优化
      _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].showFirstPage?.(); // 执行首屏回调
    }
    _modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.writeStyle(); // 写入非首屏样式表
    _modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.emptyFirstPageNodes(); // 清空记录的首屏节点

    if (!_modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.isDarkmode) {
      // Light Mode
      // 首次加载页面时为Light Mode，标记为不需要判断首屏
      _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage = false;

      // 首次加载页面时为Light Mode，标记为不延迟判断背景
      _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].delayBgJudge = false;
      if (_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].container === null && opt.type === 'dom' && _modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.length) {
        _modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.delay(); // 将节点转移到延迟处理队列里
      }
    }
  } catch (e) {
    console.log('An error occurred when running the dark mode conversion algorithm\n', e);
    _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].error?.(e);
  }
};

// 初始化Dark Mode配置并运行Dark Mode处理
function run(nodes, opt = {}) {
  init(opt); // 初始化配置

  _modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.set(nodes);
  switchToDarkmode(mql, {
    force: true,
    type: 'dom'
  });
}
;

// 初始化Dark Mode配置
function init(opt = {}) {
  if (_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].hasInit) {
    // 只可设置一次配置
    console.log('Dark Mode can only be initialized once');
    return;
  }
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].hasInit = true; // 记录为配置已设置

  const tagName = _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].whitelist.tagName;
  const attribute = _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].whitelist.attribute;
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
    _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('string', opt, 'mode');
    opt.mode === 'dark' && document.getElementsByTagName('html')[0].classList.add(_modules_constant__WEBPACK_IMPORTED_MODULE_0__.HTML_CLASS);
  }
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('function', opt, 'begin');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('function', opt, 'showFirstPage');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('function', opt, 'error');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('boolean', opt, 'needJudgeFirstPage');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('boolean', opt, 'delayBgJudge');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('dom', opt, 'container');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('string', opt, 'cssSelectorsPrefix');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].setDefaultColor(opt);
  _modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.init();
  if (!_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].mode && !mql && window.matchMedia) {
    // 匹配媒体查询
    mql = window.matchMedia(_modules_constant__WEBPACK_IMPORTED_MODULE_0__.MEDIA_QUERY);
    mql.addListener(switchToDarkmode); // 监听
  }
}
;

// 处理背景
function convertBg(nodes) {
  _modules_global__WEBPACK_IMPORTED_MODULE_2__.domUtils.set(nodes);
  if (_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].container !== null) {
    _modules_global__WEBPACK_IMPORTED_MODULE_2__.bgStack.update(nodes); // 更新背景堆栈
    _modules_global__WEBPACK_IMPORTED_MODULE_2__.tnQueue.update(nodes); // 更新文字队列
  }
  switchToDarkmode(mql, {
    force: true,
    type: 'bg'
  });
}
;

// 更新节点Dark Mode样式
function updateStyle(node, styles) {
  if (!_modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.isFinish) return; // 没有运行过Dark Mode处理逻辑则无需运行
  _modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.convert(node, styles ? Object.keys(styles).map(key => [key, styles[key]]) : undefined, true));
  _modules_global__WEBPACK_IMPORTED_MODULE_2__.cssUtils.writeStyle();
}
;

// 获取两个颜色的对比度
function getContrast(color1, color2) {
  return _modules_global__WEBPACK_IMPORTED_MODULE_2__.sdk.getContrast(color1, color2);
}
;

// 挂载插件
function extend(pluginList) {
  pluginList.forEach(plugin => _modules_global__WEBPACK_IMPORTED_MODULE_2__.plugins.extend(plugin));
}
;

// 校验
function validate(container, opt, filter) {
  return _modules_global__WEBPACK_IMPORTED_MODULE_2__.validator.validate(container, opt, filter);
}
;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=darkmode.js.map