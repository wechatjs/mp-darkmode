// 纯 ES5 引擎（IE11 级）缺少的内建 API，由构建入口统一补齐。
// preset-env 只转语法、不补 API；core-js 仅在宿主缺失时才安装。
// 清单是 Babel usage 分析后，用「屏蔽全部 ES6+ 内建的 IE11 沙箱」逐项裁剪得到的最小集合；
// 增删模块后必须回归：产物需能在该沙箱加载，且核心 API 输出与现环境一致。
import 'core-js/modules/es.array.fill.js';
import 'core-js/modules/es.array.find.js';
import 'core-js/modules/es.array.from.js';
import 'core-js/modules/es.array.iterator.js';
import 'core-js/modules/es.global-this.js';
import 'core-js/modules/es.math.cbrt.js';
import 'core-js/modules/es.math.log2.js';
import 'core-js/modules/es.math.sign.js';
import 'core-js/modules/es.object.assign.js';
import 'core-js/modules/es.object.entries.js';
import 'core-js/modules/es.object.values.js';
import 'core-js/modules/es.regexp.flags.js';
import 'core-js/modules/es.set.js';
import 'core-js/modules/es.string.includes.js';
import 'core-js/modules/es.string.iterator.js';
import 'core-js/modules/es.string.pad-start.js';
import 'core-js/modules/es.string.starts-with.js';
import 'core-js/modules/es.symbol.js';
import 'core-js/modules/es.weak-map.js';
