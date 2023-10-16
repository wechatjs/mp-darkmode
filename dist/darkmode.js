(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Darkmode", [], factory);
	else if(typeof exports === 'object')
		exports["Darkmode"] = factory();
	else
		root["Darkmode"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/darkmode.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/color-convert/node_modules/color-name/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/color-convert/node_modules/color-name/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/color-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");
var hasOwnProperty = Object.hasOwnProperty;

var reverseNames = {};

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


/***/ }),

/***/ "./node_modules/color/index.js":
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/is-arrayish/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-arrayish/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/*! exports provided: run, init, convertBg, extend, updateStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertBg", function() { return convertBg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStyle", function() { return updateStyle; });
/* harmony import */ var _modules_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/constant */ "./src/modules/constant.js");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/config */ "./src/modules/config.js");
/* harmony import */ var _modules_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/global */ "./src/modules/global.js");
/**
 * @name Darkmode主入口
 *
 * @function run 配置并处理
 * @param {DOM Object Array} nodes 要处理的节点列表
 * @param {Object}           opt   Dark Mode配置，详见init配置说明
 *
 * @function init 初始化Dark Mode配置
 * @param {Function}   opt.begin                 开始处理时触发的回调
 * @param {Function}   opt.showFirstPage         首屏处理完成时触发的回调
 * @param {Function}   opt.error                 发生error时触发的回调
 * @param {string}     opt.mode                  强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
 * @param {Object}     opt.whitelist             节点白名单
 * @param {Array}      opt.whitelist.tagName     标签名列表
 * @param {boolean}    opt.needJudgeFirstPage    是否需要判断首屏
 * @param {boolean}    opt.delayBgJudge          是否延迟背景判断
 * @param {DOM Object} opt.container             延迟运行js时使用的容器
 * @param {string}     opt.cssSelectorsPrefix    css选择器前缀
 * @param {string}     opt.defaultLightTextColor 非Dark Mode下字体颜色
 * @param {string}     opt.defaultLightBgColor   非Dark Mode下背景颜色
 * @param {string}     opt.defaultDarkTextColor  Dark Mode下字体颜色
 * @param {string}     opt.defaultDarkBgColor    Dark Mode下背景颜色
 *
 * @function convertBg 处理背景
 * @param {DOM Object Array} nodes 要处理的节点列表
 *
 * @function extend 挂载插件
 * @param {Array} pluginList 插件列表
 *
 * @function updateStyle 更新节点Dark Mode样式
 * @param {DOM Object} node   要更新的节点
 * @param {Object}     styles 更新的样式键值对对象，如：{ color: '#ddd' }
 *
 */

var classReg = new RegExp("".concat(_modules_constant__WEBPACK_IMPORTED_MODULE_0__["CLASS_PREFIX"], "[^ ]+"), 'g'); // Darkmode配置


 // Dark Mode切换

var mql = null;

var switchToDarkmode = function switchToDarkmode(mqlObj) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    type: 'dom'
  };
  opt.force && (_modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].isFinish = false); // 如果是强制运行Dark Mode处理逻辑，则重置为未运行

  if (_modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].isFinish) return; // 已运行过Dark Mode处理逻辑则不再运行

  try {
    _modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].isDarkmode = _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].mode ? _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].mode === 'dark' : mqlObj.matches;

    if (opt.type === 'dom') {
      // 处理节点
      _modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].isDarkmode && typeof _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].begin === 'function' && _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].begin(_modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].hasDelay());
      Array.prototype.forEach.call(_modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].get(), function (node) {
        if (_modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].isDarkmode && node.className && typeof node.className === 'string') {
          node.className = node.className.replace(classReg, ''); // 过滤掉原有的Dark Mode class，避免外部复制文章时把文章内的Dark Mode class也复制过去导致新文章在Dark Mode下样式错乱
        }

        if (_modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].isDarkmode || _modules_global__WEBPACK_IMPORTED_MODULE_2__["plugins"].length) {
          if (!_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage) {
            // 不需要判断首屏
            _modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].convert(node)); // 写入非首屏样式
          } else {
            // 判断首屏
            var rect = node.getBoundingClientRect();
            var top = rect.top;
            var bottom = rect.bottom;

            if (top <= 0 && bottom <= 0) {
              // 首屏前面
              _modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].convert(node)); // 写入非首屏样式
            } else if (top > 0 && top < _modules_constant__WEBPACK_IMPORTED_MODULE_0__["PAGE_HEIGHT"] || bottom > 0 && bottom < _modules_constant__WEBPACK_IMPORTED_MODULE_0__["PAGE_HEIGHT"]) {
              // 首屏
              _modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].addFirstPageNode(node); // 记录首屏节点

              _modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].convert(node), true); // 写入首屏样式
            } else {
              // 首屏后面，理论上，这里最多只会进来一次
              _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage = false; // 至此，不需要再判断首屏了
              // 显示首屏

              _modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].writeStyle(true); // 写入首屏样式表

              _modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].showFirstPageNodes(); // 显示首屏节点

              typeof _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].showFirstPage === 'function' && _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].showFirstPage(); // 执行首屏回调

              _modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].convert(node)); // 写入非首屏样式
            }
          }
        }
      });
      _modules_global__WEBPACK_IMPORTED_MODULE_2__["plugins"].loopTimes++;
    } else if (opt.type === 'bg') {
      // 处理背景
      _modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].isDarkmode && _modules_global__WEBPACK_IMPORTED_MODULE_2__["tnQueue"].forEach(function (text) {
        return _modules_global__WEBPACK_IMPORTED_MODULE_2__["bgStack"].contains(text, function (bg) {
          _modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].genCss(bg.className, bg.cssKV)); // 写入非首屏样式
        });
      });
    }

    if (_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage || !_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage && !_modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].showFirstPage) {
      // config.needJudgeFirstPage === ture，表示需要判断首屏但是正文长度没超过一屏
      // config.needJudgeFirstPage === false && domUtils.showFirstPage === false，表示不需要判断首屏且没有做首屏优化
      typeof _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].showFirstPage === 'function' && _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].showFirstPage(); // 执行首屏回调
    }

    _modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].writeStyle(); // 写入非首屏样式表

    _modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].emptyFirstPageNodes(); // 清空记录的首屏节点

    if (!_modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].isDarkmode) {
      // 非Dark Mode
      // 首次加载页面时为非Dark Mode，标记为不需要判断首屏
      _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].needJudgeFirstPage = false; // 首次加载页面时为非Dark Mode，标记为不延迟判断背景

      _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].delayBgJudge = false;

      if (_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].container === null && opt.type === 'dom' && _modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].length) {
        _modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].delay(); // 将节点转移到延迟处理队列里
      }
    }
  } catch (e) {
    console.log('An error occurred when running the dark mode conversion algorithm\n', e);
    typeof _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].error === 'function' && _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].error(e);
  }
};

function run(nodes, opt) {
  init(opt); // 初始化配置

  _modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].set(nodes);
  switchToDarkmode(mql, {
    force: true,
    type: 'dom'
  });
}
;
function init() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].hasInit) return; // 只可设置一次配置

  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].hasInit = true; // 记录为配置已设置

  var tagName = _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].whitelist.tagName;
  opt.whitelist && opt.whitelist.tagName instanceof Array && opt.whitelist.tagName.forEach(function (item) {
    item = item.toUpperCase();
    tagName.indexOf(item) === -1 && tagName.push(item);
  });

  if (['dark', 'light'].indexOf(opt.mode) > -1) {
    _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('string', opt, 'mode');
    opt.mode === 'dark' && document.getElementsByTagName('html')[0].classList.add(_modules_constant__WEBPACK_IMPORTED_MODULE_0__["HTML_CLASS"]);
  }

  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('function', opt, 'begin');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('function', opt, 'showFirstPage');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('function', opt, 'error');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('boolean', opt, 'needJudgeFirstPage');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('boolean', opt, 'delayBgJudge');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('dom', opt, 'container');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('string', opt, 'cssSelectorsPrefix');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('string', opt, 'defaultLightTextColor');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('string', opt, 'defaultLightBgColor');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('string', opt, 'defaultDarkTextColor');
  _modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].set('string', opt, 'defaultDarkBgColor');

  if (!_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].mode && mql === null && window.matchMedia) {
    // 匹配媒体查询
    mql = window.matchMedia(_modules_constant__WEBPACK_IMPORTED_MODULE_0__["MEDIA_QUERY"]);
    mql.addListener(switchToDarkmode); // 监听
  }
}
;
function convertBg(nodes) {
  _modules_global__WEBPACK_IMPORTED_MODULE_2__["domUtils"].set(nodes);

  if (_modules_config__WEBPACK_IMPORTED_MODULE_1__["default"].container !== null) {
    _modules_global__WEBPACK_IMPORTED_MODULE_2__["bgStack"].update(nodes); // 更新背景堆栈

    _modules_global__WEBPACK_IMPORTED_MODULE_2__["tnQueue"].update(nodes); // 更新文字队列
  }

  switchToDarkmode(mql, {
    force: true,
    type: 'bg'
  });
}
;
function extend(pluginList) {
  pluginList.forEach(function (plugin) {
    return _modules_global__WEBPACK_IMPORTED_MODULE_2__["plugins"].extend(plugin);
  });
}
;
function updateStyle(node, styles) {
  if (!_modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].isFinish) return; // 没有运行过Dark Mode处理逻辑则无需运行

  _modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].addCss(_modules_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].convert(node, styles ? Object.keys(styles).map(function (key) {
    return [key, styles[key]];
  }) : undefined, true), false);
  _modules_global__WEBPACK_IMPORTED_MODULE_2__["cssUtils"].writeStyle();
}
;

/***/ }),

/***/ "./src/modules/bgNodeStack.js":
/*!************************************!*\
  !*** ./src/modules/bgNodeStack.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BgNodeStack; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @name 需要判断位置的背景节点堆栈
 *
 * @class BgNodeStack
 *
 * @constructor
 * @param {string} prefix 类名前缀
 *
 * @method push 背景节点入栈
 * @param {DOM Object} el    背景节点对象
 * @param {string}     cssKV css键值对
 *
 * @method contains 判断节点是否在背景节点的区域
 * @param {DOM Object} el       要判断的节点对象（非背景节点）
 * @param {Function}   callback 如果在背景节点区域内，则执行该回调函数
 *
 * @method update 更新堆栈的节点对象，主要解决前后节点不一致的问题
 * @param {DOM Object Array} nodes 要更新的节点对象列表
 *
 */
// Darkmode配置


var BgNodeStack = /*#__PURE__*/function () {
  // 需要判断位置的背景堆栈，{ el, className, cssKV, updated, rect }
  // 索引值
  function BgNodeStack(prefix) {
    _classCallCheck(this, BgNodeStack);

    _defineProperty(this, "_stack", []);

    _defineProperty(this, "_idx", 0);

    this._prefix = prefix;
    this.classNameReg = new RegExp("".concat(this._prefix, "\\d+"));
  }

  _createClass(BgNodeStack, [{
    key: "push",
    value: function push(el, cssKV) {
      var className = "".concat(this._prefix).concat(this._idx++);
      el.classList.add(className);

      this._stack.unshift({
        el: el,
        className: className,
        cssKV: cssKV,
        updated: !_config__WEBPACK_IMPORTED_MODULE_0__["default"].delayBgJudge
      });
    }
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
        var item = this._stack.splice(idxStack.shift(), 1)[0];

        typeof callback === 'function' && callback(item);
      }
    }
  }, {
    key: "update",
    value: function update(nodes) {
      this._stack.forEach(function (item) {
        if (!item.updated) {
          Array.prototype.some.call(nodes, function (node) {
            if (node.nodeType === 1 && node.classList.contains(item.className)) {
              item.el = node;
              item.updated = true;
              return true;
            }

            return false;
          });
        }
      });
    }
  }]);

  return BgNodeStack;
}();


;

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.js");
/**
 * @name Darkmode配置
 *
 * @attr {boolean}      hasInit               是否初始化过配置
 * @attr {Function}     begin                 开始处理时触发的回调
 * @attr {Function}     showFirstPage         首屏处理完成时触发的回调
 * @attr {Function}     error                 发生error时触发的回调
 * @attr {string}       mode                  强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
 * @attr {Object}       whitelist             节点白名单
 * @attr {string Array} whitelist.tagName     标签名列表
 * @attr {boolean}      needJudgeFirstPage    是否需要判断首屏
 * @attr {boolean}      delayBgJudge          是否延迟背景判断
 * @attr {DOM Object}   container             延迟运行js时使用的容器
 * @attr {string}       cssSelectorsPrefix    css选择器前缀
 * @attr {string}       defaultLightTextColor 非Dark Mode下字体颜色
 * @attr {string}       defaultLightBgColor   非Dark Mode下背景颜色
 * @attr {string}       defaultDarkTextColor  Dark Mode下字体颜色
 * @attr {string}       defaultDarkBgColor    Dark Mode下背景颜色
 *
 * @method set 设置配置
 * @param {string} type 要处理的节点
 * @param {Object} opt  传入的配置对象
 * @param {string} key  配置名
 *
 */

var config = {
  hasInit: false,
  // hooks
  begin: null,
  showFirstPage: null,
  error: null,
  mode: '',
  whitelist: {
    tagName: ['MPCPS', 'IFRAME']
  },
  needJudgeFirstPage: true,
  delayBgJudge: false,
  container: null,
  cssSelectorsPrefix: '',
  defaultLightTextColor: _constant__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_LIGHT_TEXTCOLOR"],
  defaultLightBgColor: _constant__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_LIGHT_BGCOLOR"],
  defaultDarkTextColor: _constant__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DARK_TEXTCOLOR"],
  defaultDarkBgColor: _constant__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DARK_BGCOLOR"],
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
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/modules/constant.js":
/*!*********************************!*\
  !*** ./src/modules/constant.js ***!
  \*********************************/
/*! exports provided: MEDIA_QUERY, CLASS_PREFIX, HTML_CLASS, COLORATTR, BGCOLORATTR, ORIGINAL_COLORATTR, ORIGINAL_BGCOLORATTR, BGIMAGEATTR, DEFAULT_LIGHT_TEXTCOLOR, DEFAULT_LIGHT_BGCOLOR, DEFAULT_DARK_TEXTCOLOR, DEFAULT_DARK_BGCOLOR, GRAY_MASK_COLOR, WHITE_LIKE_COLOR_BRIGHTNESS, MAX_LIMIT_BGCOLOR_BRIGHTNESS, MIN_LIMIT_OFFSET_BRIGHTNESS, HIGH_BGCOLOR_BRIGHTNESS, HIGH_BLACKWHITE_HSL_BRIGHTNESS, LOW_BLACKWHITE_HSL_BRIGHTNESS, IGNORE_ALPHA, PAGE_HEIGHT, TABLE_NAME, IMPORTANT_REGEXP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_QUERY", function() { return MEDIA_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_PREFIX", function() { return CLASS_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_CLASS", function() { return HTML_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORATTR", function() { return COLORATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BGCOLORATTR", function() { return BGCOLORATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_COLORATTR", function() { return ORIGINAL_COLORATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_BGCOLORATTR", function() { return ORIGINAL_BGCOLORATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BGIMAGEATTR", function() { return BGIMAGEATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LIGHT_TEXTCOLOR", function() { return DEFAULT_LIGHT_TEXTCOLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LIGHT_BGCOLOR", function() { return DEFAULT_LIGHT_BGCOLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DARK_TEXTCOLOR", function() { return DEFAULT_DARK_TEXTCOLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DARK_BGCOLOR", function() { return DEFAULT_DARK_BGCOLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAY_MASK_COLOR", function() { return GRAY_MASK_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITE_LIKE_COLOR_BRIGHTNESS", function() { return WHITE_LIKE_COLOR_BRIGHTNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_LIMIT_BGCOLOR_BRIGHTNESS", function() { return MAX_LIMIT_BGCOLOR_BRIGHTNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_LIMIT_OFFSET_BRIGHTNESS", function() { return MIN_LIMIT_OFFSET_BRIGHTNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGH_BGCOLOR_BRIGHTNESS", function() { return HIGH_BGCOLOR_BRIGHTNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGH_BLACKWHITE_HSL_BRIGHTNESS", function() { return HIGH_BLACKWHITE_HSL_BRIGHTNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOW_BLACKWHITE_HSL_BRIGHTNESS", function() { return LOW_BLACKWHITE_HSL_BRIGHTNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_ALPHA", function() { return IGNORE_ALPHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_HEIGHT", function() { return PAGE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NAME", function() { return TABLE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPORTANT_REGEXP", function() { return IMPORTANT_REGEXP; });
/**
 * @name 常量
 *
 */
var MEDIA_QUERY = '(prefers-color-scheme: dark)'; // Dark Mode的CSS媒体查询

var CLASS_PREFIX = 'js_darkmode__'; // Dark Mode class前缀

var HTML_CLASS = 'data_color_scheme_dark'; // 强制设置暗黑模式时给html加的class

var RANDOM = "".concat(new Date() * 1).concat(Math.round(Math.random() * 10)); // 生成个随机数，格式为时间戳+随机数

var COLORATTR = "data-darkmode-color-".concat(RANDOM);
var BGCOLORATTR = "data-darkmode-bgcolor-".concat(RANDOM);
var ORIGINAL_COLORATTR = "data-darkmode-original-color-".concat(RANDOM);
var ORIGINAL_BGCOLORATTR = "data-darkmode-original-bgcolor-".concat(RANDOM);
var BGIMAGEATTR = "data-darkmode-bgimage-".concat(RANDOM);
var DEFAULT_LIGHT_TEXTCOLOR = '#191919'; // 非Dark Mode下字体颜色

var DEFAULT_LIGHT_BGCOLOR = '#fff'; // 非Dark Mode下背景颜色

var DEFAULT_DARK_TEXTCOLOR = '#a3a3a3'; // 前景色：rgba(255,255,255,0.6) 背景色：#191919

var DEFAULT_DARK_BGCOLOR = '#191919'; // Dark Mode下背景颜色

var GRAY_MASK_COLOR = 'rgba(0,0,0,0.2)'; // 灰色蒙层色值

var WHITE_LIKE_COLOR_BRIGHTNESS = 250; // 接近白色的感知亮度阈值

var MAX_LIMIT_BGCOLOR_BRIGHTNESS = 190;
var MIN_LIMIT_OFFSET_BRIGHTNESS = 65;
var HIGH_BGCOLOR_BRIGHTNESS = 100;
var HIGH_BLACKWHITE_HSL_BRIGHTNESS = 40;
var LOW_BLACKWHITE_HSL_BRIGHTNESS = 22;
var IGNORE_ALPHA = 0.05; // 忽略的透明度阈值

var PAGE_HEIGHT = window.getInnerHeight && window.getInnerHeight() || window.innerHeight || document.documentElement.clientHeight;
var TABLE_NAME = ['TABLE', 'TR', 'TD', 'TH']; // 支持bgcolor属性的table标签列表

var IMPORTANT_REGEXP = / !important$/; // !important

/***/ }),

/***/ "./src/modules/cssUtils.js":
/*!*********************************!*\
  !*** ./src/modules/cssUtils.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CssUtils; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/modules/config.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/modules/global.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * @param {string}  css              css样式
 * @param {boolean} isFirstPageStyle 是否首屏样式
 *
 * @method writeStyle 写入样式表
 * @param {boolean} isFirstPageStyle 是否首屏样式
 *
 */
 // Darkmode配置




var CssUtils = /*#__PURE__*/function () {
  // 首屏样式
  // 非首屏样式
  function CssUtils() {
    _classCallCheck(this, CssUtils);

    _defineProperty(this, "_firstPageStyle", '');

    _defineProperty(this, "_otherPageStyle", '');

    _defineProperty(this, "isFinish", false);
  }

  _createClass(CssUtils, [{
    key: "genCssKV",
    value: function genCssKV(key, val) {
      return "".concat(key, ": ").concat(val, " !important;");
    }
  }, {
    key: "genCss",
    value: function genCss(className, cssKV) {
      return "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].mode === 'dark' ? "html.".concat(_constant__WEBPACK_IMPORTED_MODULE_0__["HTML_CLASS"], " ") : '').concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].cssSelectorsPrefix && "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].cssSelectorsPrefix, " "), ".").concat(className, "{").concat(cssKV, "}");
    }
  }, {
    key: "addCss",
    value: function addCss(css) {
      var isFirstPageStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this[isFirstPageStyle ? '_firstPageStyle' : '_otherPageStyle'] += css;
      _global__WEBPACK_IMPORTED_MODULE_2__["plugins"].addCss(isFirstPageStyle);
    }
  }, {
    key: "writeStyle",
    value: function writeStyle() {
      var isFirstPageStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      !isFirstPageStyle && _global__WEBPACK_IMPORTED_MODULE_2__["sdk"].isDarkmode && (this.isFinish = true); // 在Dark Mode下一旦写入了非首屏样式表，则认为已经运行过Dark Mode处理逻辑
      // 获取样式表内容

      var styles = (_global__WEBPACK_IMPORTED_MODULE_2__["sdk"].isDarkmode ? [{
        target: this,
        key: ['_firstPageStyle', '_otherPageStyle'],
        needMediaQuery: true
      }] : []).concat([{
        target: _global__WEBPACK_IMPORTED_MODULE_2__["plugins"],
        key: ['firstPageStyle', 'otherPageStyle'],
        needMediaQuery: true
      }, {
        target: _global__WEBPACK_IMPORTED_MODULE_2__["plugins"],
        key: ['firstPageStyleNoMQ', 'otherPageStyleNoMQ'],
        needMediaQuery: false
      }]).map(function (_ref) {
        var target = _ref.target,
            _ref$key = _slicedToArray(_ref.key, 2),
            first = _ref$key[0],
            other = _ref$key[1],
            needMediaQuery = _ref.needMediaQuery;

        var styleKey = '';

        if (!isFirstPageStyle) {
          // 如果是写入非首屏样式表，则连同首屏样式一起写入
          target[other] = target[first] + target[other];
          target[first] = '';
          styleKey = other;
        } else {
          styleKey = first;
        }

        var style = target[styleKey];

        if (style) {
          target[styleKey] = ''; // 写入样式表后清空内存中的数据

          return _config__WEBPACK_IMPORTED_MODULE_1__["default"].mode === 'dark' || !needMediaQuery ? style : "@media ".concat(_constant__WEBPACK_IMPORTED_MODULE_0__["MEDIA_QUERY"], " {").concat(style, "}");
        }

        return '';
      }).join(''); // 写入样式表

      styles && document.head.insertAdjacentHTML('beforeend', "<style type=\"text/css\">".concat(styles, "</style>"));
    }
  }]);

  return CssUtils;
}();


;

/***/ }),

/***/ "./src/modules/domUtils.js":
/*!*********************************!*\
  !*** ./src/modules/domUtils.js ***!
  \*********************************/
/*! exports provided: getChildrenAndIt, hasTextNode, hasTableClass, DomUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildrenAndIt", function() { return getChildrenAndIt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTextNode", function() { return hasTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTableClass", function() { return hasTableClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomUtils", function() { return DomUtils; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/modules/global.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @name 节点相关操作工具API
 *
 * @function getChildrenAndIt 获取某个节点及它的所有子节点
 * @param {DOM Object} dom 节点对象
 * @return {DOM Object Array} 节点对象列表
 *
 * @function hasTextNode 判断某个节点里是否包含文字节点
 * @param {DOM Object} dom 节点对象
 * @return {boolean} 判断结果
 *
 * @function hasTableClass 判断table相关元素有没有指定class
 * @param {DOM Object} dom 节点对象
 * @return {string | null} 判断结果，如果有，返回class对应的lm色值，否则返回null
 *
 */
// Darkmode配置


function getChildrenAndIt(dom) {
  var _ref;

  return (_ref = [dom]).concat.apply(_ref, _toConsumableArray(dom.querySelectorAll('*')));
}
;
function hasTextNode(dom) {
  var cnt = '';
  Array.prototype.forEach.call(dom.childNodes, function (node) {
    if (node.nodeType === 3) {
      cnt += node.nodeValue.replace(/\s/g, ''); // 不考虑空白字符
    }
  });
  return cnt.length > 0;
}
; // table的内部样式类对应的lm背景色

var tableClassObj = {
  'ue-table-interlace-color-single': '#fcfcfc',
  'ue-table-interlace-color-double': '#f7faff'
};
function hasTableClass(dom) {
  var color = null;
  Array.prototype.some.call(dom.classList, function (className) {
    if (tableClassObj[className]) {
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
 * @param {DOM Object Array} nodes 要处理的节点列表
 *
 * @method get 获取要处理的节点列表（包含延迟节点、容器节点等逻辑）
 * @return {DOM Object Array} 要处理的节点列表
 *
 * @method delay 将所有要处理的节点转移到延迟处理队列里
 *
 * @method hasDelay 判断是否包含延迟处理的节点
 * @return {boolean} 判断结果
 *
 * @method addFirstPageNode 添加首屏节点
 * @param {DOM Object} node 要添加的首屏节点
 *
 * @method showFirstPageNodes 显示所有首屏节点
 *
 * @method emptyFirstPageNodes 清空记录的首屏节点
 *
 */

var DomUtils = /*#__PURE__*/function () {
  // 要处理的节点列表
  // 首屏节点列表
  // 延迟处理的节点列表
  // 是否已显示首屏
  function DomUtils() {
    _classCallCheck(this, DomUtils);

    _defineProperty(this, "_nodes", []);

    _defineProperty(this, "_firstPageNodes", []);

    _defineProperty(this, "_delayNodes", []);

    _defineProperty(this, "showFirstPage", false);
  }

  _createClass(DomUtils, [{
    key: "length",
    get: function get() {
      return this._nodes.length;
    }
  }, {
    key: "set",
    value: function set() {
      var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this._nodes = nodes;
    }
  }, {
    key: "get",
    value: function get() {
      var res = [];

      if (this._nodes.length) {
        // 有节点
        res = this._nodes;
        _global__WEBPACK_IMPORTED_MODULE_1__["sdk"].isDarkmode && (this._nodes = []);
      } else {
        // 如果没有节点
        if (this._delayNodes.length) {
          // 有延迟节点，则使用延迟节点
          res = this._delayNodes;
          this._delayNodes = [];
        } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].container) {
          // 没有延迟节点，但有容器，重新获取容器内的节点
          res = _config__WEBPACK_IMPORTED_MODULE_0__["default"].container.querySelectorAll('*');
        }
      }

      return res;
    }
  }, {
    key: "delay",
    value: function delay() {
      var _this = this;

      Array.prototype.forEach.call(this._nodes, function (node) {
        return _this._delayNodes.push(node);
      }); // 转移到延迟处理的节点里

      this._nodes = []; // 转移后清空列表
    }
  }, {
    key: "hasDelay",
    value: function hasDelay() {
      return this._delayNodes.length > 0;
    }
  }, {
    key: "addFirstPageNode",
    value: function addFirstPageNode(node) {
      this._firstPageNodes.push(node);
    }
  }, {
    key: "showFirstPageNodes",
    value: function showFirstPageNodes() {
      this._firstPageNodes.forEach(function (node) {
        return !node.style.visibility && (node.style.visibility = 'visible');
      }); // 显示首屏节点


      this.showFirstPage = true; // 记录为已显示首屏
    }
  }, {
    key: "emptyFirstPageNodes",
    value: function emptyFirstPageNodes() {
      this._firstPageNodes = [];
    }
  }]);

  return DomUtils;
}();
;

/***/ }),

/***/ "./src/modules/global.js":
/*!*******************************!*\
  !*** ./src/modules/global.js ***!
  \*******************************/
/*! exports provided: plugins, tnQueue, bgStack, cssUtils, domUtils, sdk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tnQueue", function() { return tnQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgStack", function() { return bgStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssUtils", function() { return cssUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domUtils", function() { return domUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sdk", function() { return sdk; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "./src/modules/plugins.js");
/* harmony import */ var _textNodeQueue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textNodeQueue */ "./src/modules/textNodeQueue.js");
/* harmony import */ var _bgNodeStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bgNodeStack */ "./src/modules/bgNodeStack.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cssUtils */ "./src/modules/cssUtils.js");
/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUtils */ "./src/modules/domUtils.js");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sdk */ "./src/modules/sdk.js");
/**
 * @name 全局作用域
 *
 */
 // 插件系统


var plugins = new _plugins__WEBPACK_IMPORTED_MODULE_1__["default"](); // 文本节点队列


var tnQueue = new _textNodeQueue__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(_constant__WEBPACK_IMPORTED_MODULE_0__["CLASS_PREFIX"], "text__")); // 需要判断位置的背景节点堆栈


var bgStack = new _bgNodeStack__WEBPACK_IMPORTED_MODULE_3__["default"]("".concat(_constant__WEBPACK_IMPORTED_MODULE_0__["CLASS_PREFIX"], "bg__")); // 样式相关操作工具对象


var cssUtils = new _cssUtils__WEBPACK_IMPORTED_MODULE_4__["default"](); // 节点相关操作工具对象


var domUtils = new _domUtils__WEBPACK_IMPORTED_MODULE_5__["DomUtils"](); // sdk


var sdk = new _sdk__WEBPACK_IMPORTED_MODULE_6__["default"]();

/***/ }),

/***/ "./src/modules/plugins.js":
/*!********************************!*\
  !*** ./src/modules/plugins.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plugins; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/modules/global.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * @name 插件基类
 *
 * @class Plugin
 *
 * @attr {number}  loopTimes  遍历次数（全部节点遍历结束算一次）
 * @attr {boolean} isDarkmode 是否为Dark Mode
 *
 * @method addCss 添加样式
 * @param {string}  className       DOM节点类名
 * @param {Array}   kvList          css键值对列表
 * @param {string}  kvList[0].key   css属性
 * @param {string}  kvList[0].value css值
 * @param {boolean} needMediaQuery  是否需要添加Dark Mode媒体查询
 *
 */

var cssNeedMQ = [];
var cssNoMQ = [];

var Plugin = /*#__PURE__*/function () {
  function Plugin() {
    _classCallCheck(this, Plugin);
  }

  _createClass(Plugin, [{
    key: "loopTimes",
    get: function get() {
      return _global__WEBPACK_IMPORTED_MODULE_0__["plugins"].loopTimes;
    }
  }, {
    key: "isDarkmode",
    get: function get() {
      return _global__WEBPACK_IMPORTED_MODULE_0__["sdk"].isDarkmode;
    }
  }, {
    key: "addCss",
    value: function addCss(className, kvList) {
      var needMediaQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      (needMediaQuery ? cssNeedMQ : cssNoMQ).push(_global__WEBPACK_IMPORTED_MODULE_0__["cssUtils"].genCss(className, kvList.map(function (_ref) {
        var key = _ref.key,
            value = _ref.value;
        return _global__WEBPACK_IMPORTED_MODULE_0__["cssUtils"].genCssKV(key, value);
      }).join('')));
    }
  }]);

  return Plugin;
}();
/**
 * @name 插件系统
 *
 * @class Plugins
 *
 * @attr {number} length             已挂载的插件数量
 * @attr {string} firstPageStyle     首屏样式
 * @attr {string} otherPageStyle     非首屏样式
 * @attr {string} firstPageStyleNoMQ 首屏样式（不需要加媒体查询）
 * @attr {string} otherPageStyleNoMQ 非首屏样式（不需要加媒体查询）
 *
 * @method extend 挂载插件
 * @param {Function} plugin 插件构造函数
 *
 * @method emit 执行插件钩子
 * @param {string} name 钩子名称
 * @param {Any}    args 钩子参数
 *
 * @method addCss 写入插件样式
 * @param {boolean} isFirstPageStyle 是否首屏样式
 *
 * @method resetCss 重置插件样式
 *
 */


var Plugins = /*#__PURE__*/function () {
  // 已挂载的插件列表
  // 已挂载的插件数量
  // 已遍历次数
  // 首屏样式
  // 非首屏样式
  // 首屏样式（不需要加媒体查询）
  // 非首屏样式（不需要加媒体查询）
  function Plugins() {
    _classCallCheck(this, Plugins);

    _defineProperty(this, "_plugins", []);

    _defineProperty(this, "length", 0);

    _defineProperty(this, "loopTimes", 0);

    _defineProperty(this, "firstPageStyle", '');

    _defineProperty(this, "otherPageStyle", '');

    _defineProperty(this, "firstPageStyleNoMQ", '');

    _defineProperty(this, "otherPageStyleNoMQ", '');
  }

  _createClass(Plugins, [{
    key: "extend",
    value: function extend(plugin) {
      this._plugins.push(new (plugin(Plugin))());

      this.length++;
    }
  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this._plugins.forEach(function (plugin) {
        typeof plugin[name] === 'function' && plugin[name].apply(plugin, args);
      });
    }
  }, {
    key: "addCss",
    value: function addCss(isFirstPageStyle) {
      if (isFirstPageStyle) {
        this.firstPageStyle += cssNeedMQ.join('');
        this.firstPageStyleNoMQ += cssNoMQ.join('');
      } else {
        this.otherPageStyle += cssNeedMQ.join('');
        this.otherPageStyleNoMQ += cssNoMQ.join('');
      }
    }
  }, {
    key: "resetCss",
    value: function resetCss() {
      cssNeedMQ = [];
      cssNoMQ = [];
    }
  }]);

  return Plugins;
}();


;

/***/ }),

/***/ "./src/modules/sdk.js":
/*!****************************!*\
  !*** ./src/modules/sdk.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SDK; });
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./src/modules/constant.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/modules/config.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global */ "./src/modules/global.js");
/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUtils */ "./src/modules/domUtils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @name 算法SDK
 *
 * @class SDK
 *
 * @method convert 处理节点
 * @param {DOM Object} el 要处理的节点
 * @return {string} 处理后的css，包含css选择器
 *
 */
// dependencies


color_name__WEBPACK_IMPORTED_MODULE_1___default.a.windowtext = [0, 0, 0]; // 补上这个colorName

color_name__WEBPACK_IMPORTED_MODULE_1___default.a.transparent = [255, 255, 255, 0]; // 支持透明，暂定用白色透明度0来表示

 // Darkmode配置


 // 节点相关操作工具API


var SEMICOLON_PLACEHOLDER = '<$#_SEMICOLON_#$>'; // 分号占位符

var SEMICOLON_PLACEHOLDER_REGEXP = /<\$#_SEMICOLON_#\$>/g;
var DM_CLASSNAME_REGEXP = new RegExp("".concat(_constant__WEBPACK_IMPORTED_MODULE_2__["CLASS_PREFIX"], "\\d+"));
var colorNameReg = new RegExp(Object.keys(color_name__WEBPACK_IMPORTED_MODULE_1___default.a).map(function (colorName) {
  return "\\b".concat(colorName, "\\b");
}).join('|'), 'ig'); // 生成正则表达式来匹配这些colorName

var colorReg = /\brgba?\([^)]+\)/i;
var colorRegGlobal = /\brgba?\([^)]+\)/ig;

var removeImportant = function removeImportant(value) {
  return value.replace(_constant__WEBPACK_IMPORTED_MODULE_2__["IMPORTANT_REGEXP"], '');
}; // 清除!important


var parseColor = function parseColor(value, parseTransparent) {
  return removeImportant(value).replace(colorNameReg, function (match) {
    // 处理颜色，包括清除!important和转换英文定义颜色
    if (!parseTransparent && match === 'transparent') return match; // 如果不转换transparent，直接返回transparent

    var color = color_name__WEBPACK_IMPORTED_MODULE_1___default.a[match.toLowerCase()];
    return "".concat(color.length > 3 ? 'rgba' : 'rgb', "(").concat(color.toString(), ")");
  });
};

var BG_COLOR_DELIMITER = '|'; // 计算mix颜色

var mixColor = function mixColor(colors) {
  if (!colors || colors.length < 1) return '';
  if (colors.length === 1) return colors[0];
  var retColor = colors.shift();
  var nextColor = colors.shift();

  while (nextColor) {
    var nextColorObj = color__WEBPACK_IMPORTED_MODULE_0___default()(nextColor);
    retColor = color__WEBPACK_IMPORTED_MODULE_0___default()(retColor).mix(nextColorObj, nextColorObj.alpha());
    nextColor = colors.shift();
  }

  return retColor;
}; // 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串


var parseWebkitFillColorAndStrokeColor = function parseWebkitFillColorAndStrokeColor(value) {
  var newValue = parseColor(value);
  return colorReg.test(newValue) ? newValue : '';
}; // 计算感知亮度


var getColorPerceivedBrightness = function getColorPerceivedBrightness(rgb) {
  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}; // 调整为指定感知亮度


var adjustBrightnessByLimit = function adjustBrightnessByLimit(limitBright, rgb) {
  var relativeBrightnessRatio = limitBright / getColorPerceivedBrightness(rgb);
  var newTextR = Math.min(255, rgb[0] * relativeBrightnessRatio);
  var newTextG = Math.min(255, rgb[1] * relativeBrightnessRatio);
  var newTextB = Math.min(255, rgb[2] * relativeBrightnessRatio);

  if (newTextG === 0 || newTextR === 255 || newTextB === 255) {
    newTextG = (limitBright * 1000 - newTextR * 299 - newTextB * 114) / 587;
  } else if (newTextR === 0) {
    newTextR = (limitBright * 1000 - newTextG * 587 - newTextB * 114) / 299;
  } else if (newTextB === 0 || newTextG === 255) {
    newTextB = (limitBright * 1000 - newTextR * 299 - newTextG * 587) / 114;
  }

  return color__WEBPACK_IMPORTED_MODULE_0___default.a.rgb(newTextR, newTextG, newTextB);
};

var SDK = /*#__PURE__*/function () {
  // 索引值
  // 当前是否需要运行Darkmode处理
  function SDK() {
    _classCallCheck(this, SDK);

    _defineProperty(this, "_idx", 0);

    _defineProperty(this, "_defaultDarkTextColorRgb", color__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkTextColor).rgb().array());

    _defineProperty(this, "_defaultDarkBgColorRgb", color__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor).rgb().array());

    _defineProperty(this, "_defaultDarkBgColorHSL", color__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor).hsl().array());

    _defineProperty(this, "_defaultDarkTextColorBrightness", getColorPerceivedBrightness(this._defaultDarkTextColorRgb));

    _defineProperty(this, "_defaultDarkBgColorBrightness", getColorPerceivedBrightness(this._defaultDarkBgColorRgb));

    _defineProperty(this, "_defaultDarkBgColorHslBrightness", this._defaultDarkBgColorHSL[2]);

    _defineProperty(this, "_maxLimitOffsetBrightness", this._defaultDarkTextColorBrightness - this._defaultDarkBgColorBrightness);

    _defineProperty(this, "isDarkmode", false);
  }

  _createClass(SDK, [{
    key: "_adjustTextBrightness",
    value: function _adjustTextBrightness(textColor, bgColor) {
      var bgColorRgb = bgColor.rgb().array();
      var bgColorAlpha = bgColor.alpha();
      var bgColorPerceivedBrightness = getColorPerceivedBrightness(bgColorRgb);
      var bgColorWithOpacityPerceivedBrightness = bgColorPerceivedBrightness * bgColorAlpha + this._defaultDarkBgColorBrightness * (1 - bgColorAlpha);
      var textColorRgb = textColor.rgb().array();
      var textColorHSL = textColor.hsl().array();
      var textColorAlpha = textColor.alpha();
      var textPerceivedBrightness = getColorPerceivedBrightness(textColorRgb);
      var offsetPerceivedBrightness = Math.abs(bgColorWithOpacityPerceivedBrightness - textPerceivedBrightness); // 用户设置为高亮字体颜色（接近白色亮度），不处理，保持高亮

      if (textPerceivedBrightness >= _constant__WEBPACK_IMPORTED_MODULE_2__["WHITE_LIKE_COLOR_BRIGHTNESS"]) return textColor;

      if (offsetPerceivedBrightness > this._maxLimitOffsetBrightness && bgColorWithOpacityPerceivedBrightness <= this._defaultDarkBgColorBrightness + 2) {
        return adjustBrightnessByLimit(this._maxLimitOffsetBrightness + bgColorWithOpacityPerceivedBrightness, textColorRgb).alpha(textColorAlpha);
      } // 如果感知亮度差大于阈值，无需调整


      if (offsetPerceivedBrightness >= _constant__WEBPACK_IMPORTED_MODULE_2__["MIN_LIMIT_OFFSET_BRIGHTNESS"]) return textColor;

      if (bgColorWithOpacityPerceivedBrightness >= _constant__WEBPACK_IMPORTED_MODULE_2__["HIGH_BGCOLOR_BRIGHTNESS"]) {
        // 亮背景，调暗字体
        if (textColorHSL[2] > 90 - _constant__WEBPACK_IMPORTED_MODULE_2__["HIGH_BLACKWHITE_HSL_BRIGHTNESS"]) {
          // 优先调字体的亮度已带到降低感知亮度的目的
          textColorHSL[2] = 90 - textColorHSL[2];
          var tmpTextColor = color__WEBPACK_IMPORTED_MODULE_0___default.a.hsl.apply(color__WEBPACK_IMPORTED_MODULE_0___default.a, _toConsumableArray(textColorHSL)).alpha(textColorAlpha);
          return this._adjustTextBrightness(tmpTextColor, bgColor);
        }

        return adjustBrightnessByLimit(Math.min(this._maxLimitOffsetBrightness, bgColorWithOpacityPerceivedBrightness - _constant__WEBPACK_IMPORTED_MODULE_2__["MIN_LIMIT_OFFSET_BRIGHTNESS"]), textColorRgb).alpha(textColorAlpha);
      } else {
        // 暗背景，调亮字体
        if (textColorHSL[2] <= _constant__WEBPACK_IMPORTED_MODULE_2__["HIGH_BLACKWHITE_HSL_BRIGHTNESS"]) {
          // 优先调字体的亮度已带到提高感知亮度的目的
          textColorHSL[2] = 90 - textColorHSL[2];

          var _tmpTextColor = color__WEBPACK_IMPORTED_MODULE_0___default.a.hsl.apply(color__WEBPACK_IMPORTED_MODULE_0___default.a, _toConsumableArray(textColorHSL)).alpha(textColorAlpha);

          return this._adjustTextBrightness(_tmpTextColor, bgColor);
        }

        return adjustBrightnessByLimit(Math.min(this._maxLimitOffsetBrightness, bgColorWithOpacityPerceivedBrightness + _constant__WEBPACK_IMPORTED_MODULE_2__["MIN_LIMIT_OFFSET_BRIGHTNESS"]), textColorRgb).alpha(textColorAlpha);
      }
    }
  }, {
    key: "_adjustBackgroundBrightness",
    value: function _adjustBackgroundBrightness(bgColor) {
      var bgColorRgb = bgColor.rgb().array();
      var bgColorHsl = bgColor.hsl().array();
      var bgColorAlpha = bgColor.alpha();
      var bgColorPerceivedBrightness = getColorPerceivedBrightness(bgColorRgb);
      var newColor = bgColor;

      if (bgColorHsl[1] === 0 && bgColorHsl[2] > _constant__WEBPACK_IMPORTED_MODULE_2__["HIGH_BLACKWHITE_HSL_BRIGHTNESS"] || bgColorPerceivedBrightness > _constant__WEBPACK_IMPORTED_MODULE_2__["WHITE_LIKE_COLOR_BRIGHTNESS"]) {
        // 饱和度为0（黑白灰色），亮度大于HIGH_BLACKWHITE_HSL_BRIGHTNESS或感知亮度大于WHITE_LIKE_COLOR_BRIGHTNESS（白色）时，做亮度取反处理
        newColor = color__WEBPACK_IMPORTED_MODULE_0___default.a.hsl(0, 0, Math.min(100, 100 + this._defaultDarkBgColorHslBrightness - bgColorHsl[2]));
      } else if (bgColorPerceivedBrightness > _constant__WEBPACK_IMPORTED_MODULE_2__["MAX_LIMIT_BGCOLOR_BRIGHTNESS"]) {
        // 感知亮度大于MAX_LIMIT_BGCOLOR_BRIGHTNESS，将感知亮度设为MAX_LIMIT_BGCOLOR_BRIGHTNESS
        newColor = adjustBrightnessByLimit(_constant__WEBPACK_IMPORTED_MODULE_2__["MAX_LIMIT_BGCOLOR_BRIGHTNESS"], bgColorRgb).alpha(bgColorAlpha); // const ratio = (MAX_LIMIT_BGCOLOR_BRIGHTNESS * 1000)
        //   / (bgColorRgb[0] * 299 + bgColorRgb[1] * 587 + bgColorRgb[2] * 114);
        // newColor = Color.rgb(bgColorRgb[0] * ratio, bgColorRgb[1] * ratio, bgColorRgb[2] * ratio);
      } else if (bgColorHsl[2] < _constant__WEBPACK_IMPORTED_MODULE_2__["LOW_BLACKWHITE_HSL_BRIGHTNESS"]) {
        // 亮度小于LOW_BLACKWHITE_HSL_BRIGHTNESS，将亮度设为LOW_BLACKWHITE_HSL_BRIGHTNESS，适当提高亮度
        bgColorHsl[2] = _constant__WEBPACK_IMPORTED_MODULE_2__["LOW_BLACKWHITE_HSL_BRIGHTNESS"];
        newColor = color__WEBPACK_IMPORTED_MODULE_0___default.a.hsl.apply(color__WEBPACK_IMPORTED_MODULE_0___default.a, _toConsumableArray(bgColorHsl));
      }

      return newColor.alpha(bgColorAlpha).rgb();
    } // 调整明度

  }, {
    key: "_adjustBrightness",
    value: function _adjustBrightness(color, el, options, isUpdate) {
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
      var alpha = color.alpha();
      var newColor;
      var extStyle = '';

      if (options.isBgColor) {
        // 背景色
        // 如果设置背景颜色，取消背景图片的影响
        if (el[_constant__WEBPACK_IMPORTED_MODULE_2__["BGIMAGEATTR"]] && alpha >= _constant__WEBPACK_IMPORTED_MODULE_2__["IGNORE_ALPHA"]) {
          delete el[_constant__WEBPACK_IMPORTED_MODULE_2__["BGIMAGEATTR"]];
        }

        newColor = this._adjustBackgroundBrightness(color);

        if (!options.hasInlineColor) {
          var parentTextColor = el[_constant__WEBPACK_IMPORTED_MODULE_2__["COLORATTR"]] || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightTextColor;
          var parentBgColorStr = newColor || color;

          var ret = this._adjustBrightness(color__WEBPACK_IMPORTED_MODULE_0___default()(parentTextColor), el, {
            isTextColor: true,
            parentElementBgColorStr: parentBgColorStr
          }, isUpdate);

          if (ret.newColor) {
            extStyle += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV('color', ret.newColor);
          } else {
            extStyle += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV('color', parentTextColor);
          }
        }
      } else if (options.isTextColor || options.isBorderColor) {
        // 字体色、边框色
        var parentElementBgColorStr = options.parentElementBgColorStr || options.isTextColor && el[_constant__WEBPACK_IMPORTED_MODULE_2__["BGCOLORATTR"]] || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultDarkBgColor;
        var parentElementBgColor = color__WEBPACK_IMPORTED_MODULE_0___default()(parentElementBgColorStr); // 无背景图片

        if (!el[_constant__WEBPACK_IMPORTED_MODULE_2__["BGIMAGEATTR"]]) {
          newColor = this._adjustTextBrightness(color, parentElementBgColor);
          _global__WEBPACK_IMPORTED_MODULE_4__["plugins"].emit("afterConvertTextColor".concat(isUpdate ? 'ByUpdateStyle' : ''), el, {
            // fontColor: color,
            fontColor: newColor,
            bgColor: parentElementBgColor
          });
        }
      } else if (options.isTextShadow) {
        // 字体阴影
        // 无背景图片
        if (!el[_constant__WEBPACK_IMPORTED_MODULE_2__["BGIMAGEATTR"]]) {
          newColor = this._adjustBackgroundBrightness(color); // 按照背景色的方法来处理
        }
      }

      return {
        newColor: newColor && color.toString() !== newColor.toString() && newColor.alpha(alpha).rgb(),
        extStyle: extStyle
      };
    }
  }, {
    key: "_try",
    value: function _try(func) {
      try {
        return func();
      } catch (e) {
        console.log('An error occurred when running the dark mode conversion algorithm\n', e);
        typeof _config__WEBPACK_IMPORTED_MODULE_3__["default"].error === 'function' && _config__WEBPACK_IMPORTED_MODULE_3__["default"].error(e);
      }
    }
  }, {
    key: "convert",
    value: function convert(el, cssKVList, isUpdate) {
      var _this = this;

      _global__WEBPACK_IMPORTED_MODULE_4__["plugins"].resetCss();
      _global__WEBPACK_IMPORTED_MODULE_4__["plugins"].emit("beforeConvertNode".concat(isUpdate ? 'ByUpdateStyle' : ''), el);
      var css = ''; // css

      var bgCss = ''; // 文字底图css

      if (this.isDarkmode || isUpdate) {
        var nodeName = el.nodeName;
        if (_config__WEBPACK_IMPORTED_MODULE_3__["default"].whitelist.tagName.indexOf(nodeName) > -1) return '';
        var styles = el.style;

        if (!cssKVList) {
          // 没有传入cssKVList就从内联样式中提取
          // styles.cssText 读出来的颜色统一是rgba格式，除了用英文定义颜色（如：black、white）
          cssKVList = (styles.cssText && styles.cssText.replace(/("[^;]*);([^;]*")|('[^;]*);([^;]*')/g, "$1$3".concat(SEMICOLON_PLACEHOLDER, "$2$4")).split(';') || []).map(function (cssStr) {
            // 将cssStr转换为[key, value]，并清除各个元素的前后空白字符
            var splitIdx = cssStr.indexOf(':');
            return [cssStr.slice(0, splitIdx).toLowerCase(), cssStr.slice(splitIdx + 1).replace(SEMICOLON_PLACEHOLDER_REGEXP, ';')].map(function (item) {
              return (item || '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            });
          });
        }

        var hasInlineColor = false; // 是否有自定义字体颜色

        var hasInlineBackground = false;
        var hasInlineBackgroundImage = false;
        var elBackgroundPositionAttr;
        var elBackgroundSizeAttr;
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

          if ((/background/i.test(key) || /^(-webkit-)?border-image/.test(key)) && /url\([^)]*\)/i.test(value)) {
            hasInlineBackgroundImage = true;
          } // 过滤掉一些key


          return ['-webkit-border-image', 'border-image', 'color', 'background-color', 'background-image', 'background', 'border', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', '-webkit-text-fill-color', '-webkit-text-stroke', '-webkit-text-stroke-color', 'text-shadow'].indexOf(key) > -1;
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

        if (_constant__WEBPACK_IMPORTED_MODULE_2__["TABLE_NAME"].indexOf(nodeName) > -1 && !hasInlineBackground) {
          // 如果table没有内联样式
          this._try(function () {
            var color = Object(_domUtils__WEBPACK_IMPORTED_MODULE_5__["hasTableClass"])(el); // 获取class对应的lm色值

            if (!color) color = el.getAttribute('bgcolor'); // 如果没有class则获取bgcolor的色值

            if (color) {
              // 有色值（class对应的lm色值或者是bgcolor色值），则当做内联样式来处理
              cssKVList.unshift(['background-color', color__WEBPACK_IMPORTED_MODULE_0___default()(color).toString()]);
              hasInlineBackground = true;
            }
          });
        }

        if (nodeName === 'FONT' && !hasInlineColor) {
          // 如果是font标签且没有内联样式
          this._try(function () {
            var color = el.getAttribute('color'); // 获取color的色值

            if (color) {
              // 有色值，则当做内联样式来处理
              cssKVList.push(['color', color__WEBPACK_IMPORTED_MODULE_0___default()(color).toString()]);
              hasInlineColor = true;
            }
          });
        } // 处理-webkit-text相关样式


        var webkitFillColor = '';
        var webkitStrokeColor = '';
        var webkitTextLen = 0;
        cssKVList.some(function (_ref7, idx) {
          var _ref8 = _slicedToArray(_ref7, 2),
              key = _ref8[0],
              value = _ref8[1];

          return _this._try(function () {
            if (key.indexOf('-webkit-text') !== 0) {
              // 遍历到非-webkit-text样式
              webkitTextLen = idx; // 记录-webkit-text相关样式的长度

              return true; // 结束遍历
            }

            switch (key) {
              case '-webkit-text-fill-color':
                webkitFillColor = parseWebkitFillColorAndStrokeColor(value);
                break;

              case '-webkit-text-stroke':
                {
                  // 有-webkit-text-stroke时就不会有-webkit-text-stroke-color
                  var newValue = value.split(' ');
                  newValue.length === 2 && (webkitStrokeColor = parseWebkitFillColorAndStrokeColor(newValue[1]));
                  break;
                }

              case '-webkit-text-stroke-color':
                // 有-webkit-text-stroke-color时就不会有-webkit-text-stroke
                webkitStrokeColor = parseWebkitFillColorAndStrokeColor(value);
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

        if (isUpdate && el.className && typeof el.className === 'string') {
          // 先提取dm className
          var matches = el.className.match(DM_CLASSNAME_REGEXP);

          if (matches) {
            dmClassName = matches[0];
          } // 再提取dm bg className


          matches = el.className.match(_global__WEBPACK_IMPORTED_MODULE_4__["bgStack"].classNameReg);

          if (matches) {
            dmBgClassName = matches[0];
          }
        }

        var cssKV = ''; // css键值对

        cssKVList.forEach(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              key = _ref10[0],
              value = _ref10[1];

          return _this._try(function () {
            var oldValue = value;
            var cssChange = false; // 找出色值来处理

            var isBgColor = /^background/.test(key);
            var isTextShadow = key === 'text-shadow';
            var textColorIdx = ['-webkit-text-stroke-color', 'color', '-webkit-text-fill-color'].indexOf(key);
            var isBorderColor = /^border/.test(key);
            var isGradient = /gradient/.test(value);
            var gradientColors = [];
            var extStyle = '';
            var gradientMixColor; // 将英文定义颜色转换为rgb格式

            value = parseColor(value, isGradient); // 渐变需要处理透明

            if (colorReg.test(value)) {
              if (isGradient) {
                // 把原渐变色取出来
                var _matches = colorRegGlobal.exec(value);

                while (_matches) {
                  gradientColors.push(_matches[0]);
                  _matches = colorRegGlobal.exec(value);
                } // 计算出一个mix颜色


                gradientMixColor = mixColor(gradientColors);
              }

              var replaceIndex = 0;
              value = value.replace(colorRegGlobal, function (match) {
                // 渐变色统一改成mix纯色
                if (isGradient) {
                  match = gradientMixColor;
                  cssChange = true;
                }

                var matchColor = color__WEBPACK_IMPORTED_MODULE_0___default()(match);

                if (matchColor.alpha() >= _constant__WEBPACK_IMPORTED_MODULE_2__["IGNORE_ALPHA"]) {
                  // 忽略透明度低的色值
                  // 使用颜色处理算法
                  var ret = _this._adjustBrightness(matchColor, el, {
                    isBgColor: isBgColor,
                    isTextShadow: isTextShadow,
                    isTextColor: textColorIdx > -1,
                    isBorderColor: isBorderColor,
                    hasInlineColor: hasInlineColor
                  }, isUpdate);

                  var retColor = !hasInlineBackgroundImage && ret.newColor;
                  extStyle += ret.extStyle; // 对背景颜色和文字颜色做继承传递，用于文字亮度计算

                  if (isBgColor || textColorIdx > 0) {
                    // 不处理-webkit-text-stroke-color
                    var attrName = isBgColor ? _constant__WEBPACK_IMPORTED_MODULE_2__["BGCOLORATTR"] : _constant__WEBPACK_IMPORTED_MODULE_2__["COLORATTR"];
                    var originalAttrName = isBgColor ? _constant__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_BGCOLORATTR"] : _constant__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_COLORATTR"];
                    var retColorStr = retColor ? retColor.toString() : match;
                    replaceIndex === 0 && Object(_domUtils__WEBPACK_IMPORTED_MODULE_5__["getChildrenAndIt"])(el).forEach(function (dom) {
                      var originalAttrValue = dom[originalAttrName] || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightBgColor;
                      dom[attrName] = retColorStr;
                      dom[originalAttrName] = originalAttrValue.split(BG_COLOR_DELIMITER).concat(match).join(BG_COLOR_DELIMITER); // 如果设置背景颜色，取消背景图片的影响

                      if (isBgColor && color__WEBPACK_IMPORTED_MODULE_0___default()(retColorStr).alpha() >= _constant__WEBPACK_IMPORTED_MODULE_2__["IGNORE_ALPHA"] && dom[_constant__WEBPACK_IMPORTED_MODULE_2__["BGIMAGEATTR"]]) {
                        delete dom[_constant__WEBPACK_IMPORTED_MODULE_2__["BGIMAGEATTR"]];
                      }
                    });
                  }

                  retColor && (cssChange = true);
                  replaceIndex += 1;
                  return retColor || match;
                }

                return match;
              }).replace(/\s?!\s?important/ig, '');
            }

            extStyle && (cssKV += extStyle);

            if (!(el instanceof SVGElement)) {
              // 先不处理SVG
              // 背景图片、边框图片
              var isBackgroundAttr = /^background/.test(key);
              var isBorderImageAttr = /^(-webkit-)?border-image/.test(key);

              if ((isBackgroundAttr || isBorderImageAttr) && /url\([^)]*\)/i.test(value)) {
                cssChange = true;
                var imgBgColor = mixColor((el[_constant__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_BGCOLORATTR"]] || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightBgColor).split(BG_COLOR_DELIMITER)); // 在背景图片下加一层原背景颜色：
                // background-image使用多层背景(注意background-position也要多加一层 https://www.w3.org/TR/css-backgrounds-3/#layering)；
                // border-image不支持多层背景，需要添加background-color

                value = value.replace(/^(.*?)url\(([^)]*)\)(.*)$/i, function (matches) {
                  var newValue = matches;
                  var newBackgroundPositionValue = '';
                  var newBackgroundSizeValue = '';
                  var tmpCssKvStr = '';

                  if (!el[_constant__WEBPACK_IMPORTED_MODULE_2__["BGIMAGEATTR"]]) {
                    // 避免重复set
                    Object(_domUtils__WEBPACK_IMPORTED_MODULE_5__["getChildrenAndIt"])(el).forEach(function (dom) {
                      dom[_constant__WEBPACK_IMPORTED_MODULE_2__["BGIMAGEATTR"]] = true;
                    });
                  } // background-image


                  if (isBackgroundAttr) {
                    newValue = "linear-gradient(".concat(_constant__WEBPACK_IMPORTED_MODULE_2__["GRAY_MASK_COLOR"], ", ").concat(_constant__WEBPACK_IMPORTED_MODULE_2__["GRAY_MASK_COLOR"], "),").concat(matches);
                    tmpCssKvStr = _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV(key, "".concat(newValue, ",linear-gradient(").concat(imgBgColor, ", ").concat(imgBgColor, ")"));

                    if (elBackgroundPositionAttr) {
                      newBackgroundPositionValue = "top left,".concat(elBackgroundPositionAttr);
                      cssKV += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV('background-position', "".concat(newBackgroundPositionValue));
                      tmpCssKvStr += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV('background-position', "".concat(newBackgroundPositionValue, ",top left"));
                    }

                    if (elBackgroundSizeAttr) {
                      newBackgroundSizeValue = "100%,".concat(elBackgroundSizeAttr);
                      cssKV += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV('background-size', "".concat(newBackgroundSizeValue));
                      tmpCssKvStr += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV('background-size', "".concat(newBackgroundSizeValue, ",100%"));
                    }

                    if (dmBgClassName) {
                      // 如果是文字底图，则直接加样式
                      bgCss += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCss(dmBgClassName, tmpCssKvStr);
                    } else {
                      // 否则背景图入栈
                      _global__WEBPACK_IMPORTED_MODULE_4__["bgStack"].push(el, tmpCssKvStr);
                    }
                  } else {
                    // border-image元素，如果当前元素没有背景颜色，补背景颜色
                    if (!hasInlineBackground) {
                      tmpCssKvStr = _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV('background-image', "linear-gradient(".concat(_constant__WEBPACK_IMPORTED_MODULE_2__["GRAY_MASK_COLOR"], ", ").concat(_constant__WEBPACK_IMPORTED_MODULE_2__["GRAY_MASK_COLOR"], "),linear-gradient(").concat(imgBgColor, ", ").concat(imgBgColor, ")"));

                      if (dmBgClassName) {
                        // 如果是文字底图，则直接加样式
                        bgCss += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCss(dmBgClassName, tmpCssKvStr);
                      } else {
                        // 否则背景图入栈
                        _global__WEBPACK_IMPORTED_MODULE_4__["bgStack"].push(el, tmpCssKvStr); // 背景图入栈
                      }
                    }
                  }

                  return newValue;
                }); // 没有设置自定义字体颜色，则使用非 Dark Mode 下默认字体颜色

                if (!hasInlineColor) {
                  var textColor = mixColor((el[_constant__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_COLORATTR"]] || _config__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLightTextColor).split(BG_COLOR_DELIMITER));
                  cssKV += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV('color', textColor);
                  Object(_domUtils__WEBPACK_IMPORTED_MODULE_5__["getChildrenAndIt"])(el).forEach(function (dom) {
                    dom[_constant__WEBPACK_IMPORTED_MODULE_2__["COLORATTR"]] = textColor;
                  });
                }
              }
            }

            if (cssChange) {
              !isUpdate && _constant__WEBPACK_IMPORTED_MODULE_2__["IMPORTANT_REGEXP"].test(oldValue) && (styles[key] = removeImportant(oldValue)); // 清除inline style的!important

              if (isGradient) {
                if (dmBgClassName) {
                  // 如果是文字底图，则直接加样式
                  bgCss += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCss(dmBgClassName, _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV(key, value));
                } else {
                  // 否则背景图入栈
                  _global__WEBPACK_IMPORTED_MODULE_4__["bgStack"].push(el, _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV(key, value)); // 渐变入栈
                }
              } else {
                cssKV += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCssKV(key, value);
              }
            }
          });
        });

        if (cssKV) {
          // 有处理过或者是背景图片就加class以及css
          // TODO: 备份应该写到插件里
          el.setAttribute('data-style', styles.cssText); // 备份内联样式到data-style里，供编辑器做反处理

          if (!dmClassName) {
            dmClassName = "".concat(_constant__WEBPACK_IMPORTED_MODULE_2__["CLASS_PREFIX"]).concat(this._idx++);
            el.classList.add(dmClassName);
          }

          css += cssKV ? _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCss(dmClassName, cssKV) : '';
        }

        css += bgCss; // 追加文字底图样式，要在添加cssKV之后添加，避免被覆盖

        if (!isUpdate && Object(_domUtils__WEBPACK_IMPORTED_MODULE_5__["hasTextNode"])(el)) {
          // 如果节点里有文本，要判断是否在背景图里
          if (_config__WEBPACK_IMPORTED_MODULE_3__["default"].delayBgJudge) {
            // 延迟背景判断
            _global__WEBPACK_IMPORTED_MODULE_4__["tnQueue"].push(el); // 文字入队
          } else {
            _global__WEBPACK_IMPORTED_MODULE_4__["bgStack"].contains(el, function (item) {
              css += _global__WEBPACK_IMPORTED_MODULE_4__["cssUtils"].genCss(item.className, item.cssKV);
            });
          }
        }
      }

      _global__WEBPACK_IMPORTED_MODULE_4__["plugins"].emit("afterConvertNode".concat(isUpdate ? 'ByUpdateStyle' : ''), el);
      return css;
    }
  }]);

  return SDK;
}();


;

/***/ }),

/***/ "./src/modules/textNodeQueue.js":
/*!**************************************!*\
  !*** ./src/modules/textNodeQueue.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextNodeQueue; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @name 文本节点队列
 *
 * @class TextNodeQueue
 *
 * @constructor
 * @param {string} prefix 类名前缀
 *
 * @method push 文本节点入队
 * @param {DOM Object} el 文本节点对象
 *
 * @method forEach 遍历，遍历过的文本节点出队
 * @param {Function} callback 回调
 *
 * @method update 更新队列的节点对象，主要解决前后节点不一致的问题
 * @param {DOM Object Array} nodes 要更新的节点对象列表
 *
 */
// Darkmode配置


var TextNodeQueue = /*#__PURE__*/function () {
  // 文本节点队列，{ el, className, updated }
  // 索引值
  function TextNodeQueue(prefix) {
    _classCallCheck(this, TextNodeQueue);

    _defineProperty(this, "_queue", []);

    _defineProperty(this, "_idx", 0);

    this._prefix = prefix;
  }

  _createClass(TextNodeQueue, [{
    key: "push",
    value: function push(el) {
      var className = "".concat(this._prefix).concat(this._idx++);
      el.classList.add(className);

      this._queue.push({
        el: el,
        className: className,
        updated: !_config__WEBPACK_IMPORTED_MODULE_0__["default"].delayBgJudge
      });
    }
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
        this._queue.splice(idxStack.shift(), 1);
      }
    }
  }, {
    key: "update",
    value: function update(nodes) {
      this._queue.forEach(function (item) {
        if (!item.updated) {
          Array.prototype.some.call(nodes, function (node) {
            if (node.nodeType === 1 && node.classList.contains(item.className)) {
              item.el = node;
              item.updated = true;
              return true;
            }

            return false;
          });
        }
      });
    }
  }]);

  return TextNodeQueue;
}();


;

/***/ })

/******/ });
});
//# sourceMappingURL=darkmode.js.map