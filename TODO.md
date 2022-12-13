# TODO

## Bug

1. afterConvertTextColor lm 下不触发的问题
1. 处理background-size和background-position有问题
1. 渐变目前是先mix再反色，应该改成先反色再mix，有文字时mix，无文字时不mix（只有反色）

## 优化

1. 利用 Virtual DOM 减少 DOM 操作
1. 首屏优化处理长尾
1. 去掉 visibility: visible ？
1. 获取真正convert耗时（排除渲染）

## Feature

1. 支持小程序
