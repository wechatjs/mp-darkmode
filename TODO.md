# TODO

## Bug

1. afterConvertTextColor lm 下不触发的问题
1. 完善API updateStyle，当修改背景色相关属性时，需要递归更新后续节点的色值，以及补充该API相关文档
1. 对比度算法加入透明度维度计算（现在是暂时通过忽略低透明度的色值来曲线救国）
1. covert() 的 cssKVList 参数只支持 rgb() 或 rgba() 颜色，不支持 hex/hsl等等
1. 父元素用了-webkit-text-fill-color，应该忽略子元素的color

## 优化

1. 利用 Virtual DOM 减少 DOM 操作
1. 首屏优化处理长尾
1. 去掉 visibility: visible ？
1. 获取真正convert耗时（排除渲染）

## Feature

1. 支持小程序
