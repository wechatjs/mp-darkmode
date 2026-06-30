# TODO

## Bug

1. afterConvertTextColor lm 下不触发的问题
1. 处理background-size和background-position有问题
1. 渐变目前是先mix再反色，应该改成先反色再mix，有文字时mix，无文字时不mix（只有反色）
1. 完善API updateStyle，当修改背景色相关属性时，需要递归更新后续节点的色值，以及补充该API相关文档
1. 对比度算法加入透明度维度计算（现在是暂时通过忽略低透明度的色值来曲线救国）

## 优化

1. 利用 Virtual DOM 减少 DOM 操作
1. 首屏优化处理长尾
1. 去掉 visibility: visible ？
1. 获取真正convert耗时（排除渲染）
1. 可以把过滤attr属性的逻辑去掉了
1. 可以优化convertBg，处理老节点时可以不处理未update的bg以及其后代节点
1. 可以尝试把dm_css记录在节点对象上，方便回溯dm_css，否则只能去style里做字符串匹配
1. 把完整的秒开模拟逻辑补到test里（cloneNode再append）

## Feature

1. 支持小程序
