# Dark Mode 最佳实践

微信公众平台 Dark Mode 转换算法秉承**尽可能保留原文信息**的原则（颜色也是一种信息，我们不会将红色转成橙色），仅当信息在 Dark Mode 下**看不清**（对比度不够）或**看得不舒服**（亮度太高）时才进行调整。

因此，如果创作者的内容调校得足够好，那么它在 Dark Mode 下将会获得更好的阅读体验，而这也正是本文《最佳实践》的愿景。

本文将从「颜色」、「结构」、「图片」、「SVG」和「排版技巧 & 注意事项」五个维度分别阐述，文中出现的 case 均可在浏览器的开发者工具中查看结构及样式源码。

## 1. 颜色

### 1.1 使用对比度适中的颜色

尽管平台对颜色方面没有任何的限制，但是为了让文本在 Dark Mode 下看得更清楚、看得更舒服，算法会检测文本和背景的对比度，如果过低或过高，会进行相应的平衡调整。

![case 1](https://res.wx.qq.com/op_res/OrcPOrqCHUZIUCn-gvS_MAhnuABnAYRzNUjs-5eI0PSV6vp-oXOwqTfpfolK06xG08ONQ7_WURnuUYMHONO05g)

↑ [case 1](https://codepen.io/jaminqian/pen/EaPEJVq)

### 1.2 如非必要，文字背景尽量不要使用渐变

先用 css 定义一个简单的渐变，比如 `background-image: linear-gradient(rgb(248, 245, 247), rgb(194, 43, 76))` ，表示从白色渐变到红色。

如果只是简单对渐变的两个颜色进行算法转换的话，算法无法保证渐变过程中的颜色是否能在 Dark Mode 下保持良好的阅读体验（想象一下如果这个渐变有透明度，而渐变背后还有其它的渐变背景色，或者渐变上方有带有渐变的文本，就有可能导致文本不可阅读了），因此算法会先对渐变进行 mix 混合计算，将渐变转换成纯色，再进行算法转换，来减少不确定性。

![case 2](https://res.wx.qq.com/op_res/OrcPOrqCHUZIUCn-gvS_MK0ZC1hZzoM_-SWicIWNAwYYnYEiW8BWftUEFwv6F_8HNMdv5sUHfTN-K0fR_jWpHA)

↑ [case 2](https://codepen.io/jaminqian/pen/PwZRgpO)

下面这个 bad case 也是由渐变带来的，由于使用了渐变来实现格子背景，所以在 Dark Mode 下没有了格子背景。

![case 3](https://res.wx.qq.com/op_res/OrcPOrqCHUZIUCn-gvS_MGb_4kfsuEBvlN8F5VahEcUibX1zQgepk9WuocfqYPaSSmdCystjKLBBrmIcMGI9Kw)

↑ [case 3](https://codepen.io/jaminqian/pen/emJMorO)

### 1.3 纯背景可以使用渐变

渐变背景上方如果没有文字的话，算法将不会对该渐变做处理。

![case 4](https://res.wx.qq.com/op_res/OrcPOrqCHUZIUCn-gvS_MJA5WB30lpi3k2Gd3hpJQhdABcHm_Ur1crT-kph1ARpvD8bLZYrmznyO_07T77Db7Q)

↑ [case 4](https://codepen.io/jaminqian/pen/ZYQxZMz)

## 2. 结构

### 2.1 建议使用背景容器 + 多文本节点的结构

如果需要给多个文本添加同一个背景（背景颜色或渐变），建议将这些文本节点包裹在一个容器里，背景样式写到这个容器上，而非给每个文本节点添加相同的背景样式。这样既可以提高算法性能，减少重复计算，也可以避免以下 bad case。

![case 5](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-pl1ol1lX_YbO8-fMBfRXEGxOo29d5TNJT6AQl3-9jP5Tm6vAsi32qcIC8hIB4qUOw)

↑ [case 5](https://codepen.io/jaminqian/pen/QwymPJo)

正确的做法是把背景样式写在容器上。

![case 6](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-lbWDwvPjSBNF2QDa9ZA-BFYT6x78qX25I5uhcBsQv4z7Xbfus4C9Q18HkMima9x_A)

↑ [case 6](https://codepen.io/jaminqian/pen/QwymPPP)

### 2.2 保持正确的嵌套关系

由于算法是深度优先遍历（可以简单理解为跟视觉顺序一致，自上而下，从左至右），因此，切忌使用绝对定位或变形等手段破坏视觉与结构顺序的一致性（比如将结构上靠前的节点通过绝对定位挪到后面，抑或是将文本定位到没有从属关系的背景色区域）。

![case 7](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-pMkv2EY5NEwb8VSdCTqvzvvP7Xma0A-vaue-tm-Xe4KhTZ6meYPNGLvTVPjW0Of7A)

↑ [case 7](https://codepen.io/jaminqian/pen/GgoxLbG)

## 3. 图片

### 3.1 如非必要，不要使用图片来承载纯文本

出于对性能方面的考虑，算法目前没有对图片进行内容识别，因此无法提取图片中的文本做转换，并且也不建议使用图片来承载纯文本。

![case 8](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-naG0kTCUYaKcuxIofO6jM0l49u7rwkofPyUhm59dRFMd0wdqsXInc362SQDc74q1A)

↑ [case 8](https://codepen.io/jaminqian/pen/xbZWNKg)

### 3.2 谨慎使用透明底色图片

创作过程中免不了会使用到透明底色图片，但需要注意的是，如果图片中使用到了黑色相关的颜色，需要注意在 Dark Mode 下是否和正文的黑底 `#191919` 有足够的对比度，否则会无法看清。

![case 9](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-gX9wrx3UnmFPDQQZPTFkbFn0wEJgrrLGH0zI2EXJ6OXukmdVsKhlKqoEPncAFpoLA)

↑ [case 9](https://codepen.io/jaminqian/pen/jEWzoEg)

### 3.3 简单了解一下背景图片的补色机制

注意，这里特指**背景图片**，即 `background-image` 而非 `<img>`，顺带一说，背景图片上方的文字颜色会保留 Light Mode 原色。

我们注意到，有些创作者会在文字底部加背景图片做装饰（比如条纹、网格），当这些背景图片是透明底色时，可能会导致文字无法阅读，因此算法对背景图片加上了独特的“补色”机制。

![case 10](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-tsobj6JpfQiZQbgr5wC_VLoeJFVqHoYAjK9VZfPRW6pU-X6P1zcZpoaA8vAn5EiIw)

↑ [case 10](https://codepen.io/jaminqian/pen/LEGdopz)

补色机制的具体细节（如何检测文字、补什么颜色等等）就不在这里赘述了，感兴趣的话可以看算法源码。

## 4. SVG

算法目前不会对 SVG 进行处理，绝大部分 SVG 在 Dark Mode 下都和 Light Mode 表现一致。

但也因此，会出现以下 bad case。

![case 11](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-qtCt0vaXfhgC06_1qxYCt60klUbj5ZsQyCDoIbQ-MLkZYR-FmikK_Un3Tjxn2E_wQ)

↑ [case 11](https://codepen.io/jaminqian/pen/zxrWQZZ)

想要规避上述 bad case，可以指定 `stroke="currentColor" fill="currentColor"`，或者加上底色。

## 5. 排版技巧 & 注意事项

### 5.1 指定节点跳过算法转换

可以使用 `data-no-dark` 属性来指定当前节点跳过算法转换，但仅针对当前节点生效，其后代节点如果有内联样式，依然会进行算法转换。

```HTML
<ul style="color: #000;" data-no-dark>
  <li>这是黑色字体</li>
  <li style="color: #000;">这也是黑色字体，但是有style="color: #000;"</li>
</ul>
```

![case 12](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-sRyP9sdreDpNCJhXpHoloep8fJhSWBUYQSdtG7aXoSgNeBrj0JrNhgbBKotEINY3g)

↑ [case 12](https://codepen.io/jaminqian/pen/Ggoxamw)

### 5.2 不要使用 `!important`

无论是什么场景，我们都不建议创作者在排版时使用 `!important`，这会使平台添加的公共样式失效，并且 Dark Mode 算法也需要搭配 `!important` 来实现样式覆盖。

## 相关内容

- [cases 合集](https://codepen.io/collection/adBbBM?sort_by=ItemCreatedAt&grid_type=LIST)
- [Dark Mode 处理原则](https://github.com/wechatjs/mp-darkmode/blob/master/doc/cn/principle.md)
- [微信公众平台 Dark Mode 最佳实践 公众号文章](https://mp.weixin.qq.com/s/jgipW2ihmXJBj-4WuiV_rw)
- [微信公众平台 Dark Mode 转换算法 源码](https://github.com/wechatjs/mp-darkmode)
- [微信公众平台 Dark Mode 转换算法 npm](https://www.npmjs.com/package/mp-darkmode)
