# TODO

## Bug

1. afterConvertTextColor lm 下不触发的问题
1. 完善API updateStyle，当修改背景色相关属性时，需要递归更新后续节点的色值，以及补充该API相关文档
1. 对比度算法加入透明度维度计算（现在是暂时通过忽略低透明度的色值来曲线救国）
1. covert() 的 cssKVList 参数只支持 rgb() 或 rgba() 颜色，不支持 hex/hsl等等
1. 父元素用了-webkit-text-fill-color，应该忽略子元素的color
1. 对background-image的渐变色和background-color的mix顺序估计不对，应该先前者再后者（现在应该是反过来了，并且现在的算法应该区分不了是否有background-color）
1. background-image渐变色mix叠加数量不对

## 优化

1. 利用 Virtual DOM 减少 DOM 操作
1. 首屏优化处理长尾
1. 去掉 visibility: visible ？
1. 获取真正convert耗时（排除渲染）
1. mql.addListener 已不推荐使用，看看怎么使用新方式做监听（src/darkmode.ts 的 mql.addListener/removeListener 为废弃 API，为兼容老 webview 暂留，后续有空用 addEventListener('change') 优雅降级）
1. 想办法把COLORATTR这类属性的 as any干掉
1. 可以优化convertBg，处理老节点时可以不处理未update的bg以及其后代节点
1. 可以尝试把dm_css记录在节点对象上，方便回溯dm_css，否则只能去style里做字符串匹配
1. 把完整的秒开模拟逻辑补到test里（cloneNode再append）
1. 后续可以考虑把color库直接迁为colorjs.io库，不用再做转换
1. sdk.ts 的 adjustBackgroundBrightness 里 `Color.hsl(...mixColorHsl)`（取反处理分支显式传了 alpha，低亮度分支依赖数组展开隐式带 alpha）两种写法不一致，可统一为显式传 alpha 提升可读性（非 bug，后续再看要不要优化）

## Feature

1. 支持小程序
