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
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/constant'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
 * @param {ValidateFilter} [filter]  过滤器
 *
 */
// 常量

var classReg = new RegExp("".concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/constant'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), "[^ ]+"), 'g');
// Darkmode配置


// Dark Mode切换
var mql;
var switchToDarkmode = function (mqlObj, opt) {
    var _a, _b, _c;
    if (opt === void 0) { opt = {
        type: 'dom'
    }; }
    opt.force && (Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isFinish = false); // 如果是强制运行Dark Mode处理逻辑，则重置为未运行
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isFinish)
        return; // 已运行过Dark Mode处理逻辑则不再运行
    try {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isDarkmode = Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) ? (Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === 'dark') : mqlObj.matches;
        if (opt.type === 'dom') { // 处理节点
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isDarkmode && ((_a = Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) === null || _a === void 0 ? void 0 : _a.call(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).hasDelay()));
            Array.prototype.forEach.call(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get(), function (node) {
                var _a;
                if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isDarkmode && node.className && typeof node.className === 'string') {
                    node.className = node.className.replace(classReg, ''); // 过滤掉原有的Dark Mode class，避免外部复制文章时把文章内的Dark Mode class也复制过去导致新文章在Dark Mode下样式错乱
                }
                if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isDarkmode || Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).length) {
                    if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) { // 不需要判断首屏
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).addCss(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).convert(node)); // 写入非首屏样式
                    }
                    else { // 判断首屏
                        var rect = node.getBoundingClientRect();
                        var top_1 = rect.top;
                        var bottom = rect.bottom;
                        if (top_1 <= 0 && bottom <= 0) { // 首屏前面
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).addCss(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).convert(node)); // 写入非首屏样式
                        }
                        else if ((top_1 > 0 && top_1 < Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/constant'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) || (bottom > 0 && bottom < Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/constant'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) { // 首屏
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).addFirstPageNode(node); // 记录首屏节点
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).addCss(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).convert(node), true); // 写入首屏样式
                        }
                        else { // 首屏后面，理论上，这里最多只会进来一次
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) = false; // 至此，不需要再判断首屏了
                            // 显示首屏
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).writeStyle(true); // 写入首屏样式表
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).showFirstPageNodes(); // 显示首屏节点
                            (_a = Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) === null || _a === void 0 ? void 0 : _a.call(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // 执行首屏回调
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).addCss(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).convert(node)); // 写入非首屏样式
                        }
                    }
                }
            });
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).loopTimes++;
        }
        else if (opt.type === 'bg') { // 处理背景
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isDarkmode && Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).forEach(function (text) { return Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).contains(text, function (bg) {
                Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).addCss(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).genCss(bg.className, bg.cssKV)); // 写入非首屏样式
            }); });
        }
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) || (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) && !Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).showFirstPage)) {
            // config.needJudgeFirstPage === ture，表示需要判断首屏但是正文长度没超过一屏
            // config.needJudgeFirstPage === false && domUtils.showFirstPage === false，表示不需要判断首屏且没有做首屏优化
            (_b = Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) === null || _b === void 0 ? void 0 : _b.call(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // 执行首屏回调
        }
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).writeStyle(); // 写入非首屏样式表
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).emptyFirstPageNodes(); // 清空记录的首屏节点
        if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isDarkmode) { // Light Mode
            // 首次加载页面时为Light Mode，标记为不需要判断首屏
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) = false;
            // 首次加载页面时为Light Mode，标记为不延迟判断背景
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) = false;
            if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === null && opt.type === 'dom' && Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).length) {
                Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).delay(); // 将节点转移到延迟处理队列里
            }
        }
    }
    catch (e) {
        console.log('An error occurred when running the dark mode conversion algorithm\n', e);
        (_c = Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) === null || _c === void 0 ? void 0 : _c.call(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), e);
    }
};
// 初始化Dark Mode配置并运行Dark Mode处理
function run(nodes, opt) {
    if (opt === void 0) { opt = {}; }
    init(opt); // 初始化配置
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).set(nodes);
    switchToDarkmode(mql, {
        force: true,
        type: 'dom'
    });
}
;
// 初始化Dark Mode配置
function init(opt) {
    if (opt === void 0) { opt = {}; }
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) { // 只可设置一次配置
        console.log('Dark Mode can only be initialized once');
        return;
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) = true; // 记录为配置已设置
    var tagName = Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).tagName;
    var attribute = Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).attribute;
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
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('string', opt, 'mode');
        opt.mode === 'dark' && document.getElementsByTagName('html')[0].classList.add(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/constant'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('function', opt, 'begin');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('function', opt, 'showFirstPage');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('function', opt, 'error');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('boolean', opt, 'needJudgeFirstPage');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('boolean', opt, 'delayBgJudge');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('dom', opt, 'container');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('string', opt, 'cssSelectorsPrefix');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(opt);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).init();
    if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) && !mql && window.matchMedia) {
        // 匹配媒体查询
        mql = window.matchMedia(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/constant'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        mql.addListener(switchToDarkmode); // 监听
    }
}
;
// 处理背景
function convertBg(nodes) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).set(nodes);
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) !== null) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).update(nodes); // 更新背景堆栈
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).update(nodes); // 更新文字队列
    }
    switchToDarkmode(mql, {
        force: true,
        type: 'bg'
    });
}
;
// 更新节点Dark Mode样式
function updateStyle(node, styles) {
    if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isFinish)
        return; // 没有运行过Dark Mode处理逻辑则无需运行
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).addCss(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).convert(node, styles ? Object.keys(styles).map(function (key) { return [key, styles[key]]; }) : undefined, true));
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).writeStyle();
}
;
// 获取两个颜色的对比度
function getContrast(color1, color2) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getContrast(color1, color2);
}
;
// 挂载插件
function extend(pluginList) {
    pluginList.forEach(function (plugin) { return Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend(plugin); });
}
;
// 校验
function validate(container, filter) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/global'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).validate(container, filter);
}
;

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=darkmode.js.map