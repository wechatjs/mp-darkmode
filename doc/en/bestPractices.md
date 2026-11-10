# Dark Mode Best Practices

The Dark Mode conversion algorithm of WeChat Official Accounts Platform follows the principle of **preserving as much of the original information as possible** (color is information too — we do not turn red into orange). It only adjusts content when that information is **hard to read** in Dark Mode (insufficient contrast) or **uncomfortable to look at** (too bright).

Therefore, if a creator tunes their content well, it will offer a better reading experience in Dark Mode. That is exactly what this *Best Practices* guide is about.

This guide covers five aspects: **colors**, **structure**, **images**, **SVG** and **layout techniques & caveats**. The structure and styles of every case shown here can be inspected in your browser's developer tools.

## 1. Colors

### 1.1 Use colors with moderate contrast

The platform places no restrictions on colors, but to make text clearer and more comfortable to read in Dark Mode, the algorithm checks the contrast between text and background and rebalances it when it is too low or too high.

![case 1](https://res.wx.qq.com/op_res/OrcPOrqCHUZIUCn-gvS_MAhnuABnAYRzNUjs-5eI0PSV6vp-oXOwqTfpfolK06xG08ONQ7_WURnuUYMHONO05g)

↑ [case 1](https://codepen.io/jaminqian/pen/EaPEJVq)

### 1.2 Avoid gradients behind text unless necessary

Start with a simple CSS gradient, for example `background-image: linear-gradient(rgb(248, 245, 247), rgb(194, 43, 76))`, which goes from white to red.

Simply converting the two endpoint colors cannot guarantee that the colors *in between* will remain readable in Dark Mode (imagine a gradient with transparency, another gradient behind it, or gradient-filled text on top of it — the text may become unreadable). The algorithm therefore mixes the gradient into a single color first, then converts that solid color, reducing uncertainty.

![case 2](https://res.wx.qq.com/op_res/OrcPOrqCHUZIUCn-gvS_MK0ZC1hZzoM_-SWicIWNAwYYnYEiW8BWftUEFwv6F_8HNMdv5sUHfTN-K0fR_jWpHA)

↑ [case 2](https://codepen.io/jaminqian/pen/PwZRgpO)

The following bad case is also caused by a gradient: a grid background implemented with a gradient disappears in Dark Mode.

![case 3](https://res.wx.qq.com/op_res/OrcPOrqCHUZIUCn-gvS_MGb_4kfsuEBvlN8F5VahEcUibX1zQgepk9WuocfqYPaSSmdCystjKLBBrmIcMGI9Kw)

↑ [case 3](https://codepen.io/jaminqian/pen/emJMorO)

### 1.3 Gradients are fine for pure backgrounds

If there is no text above a gradient background, the algorithm leaves that gradient untouched.

![case 4](https://res.wx.qq.com/op_res/OrcPOrqCHUZIUCn-gvS_MJA5WB30lpi3k2Gd3hpJQhdABcHm_Ur1crT-kph1ARpvD8bLZYrmznyO_07T77Db7Q)

↑ [case 4](https://codepen.io/jaminqian/pen/ZYQxZMz)

## 2. Structure

### 2.1 Prefer a background container with multiple text nodes

If several text nodes need the same background (a solid color or a gradient), wrap them in a container and put the background style on that container, instead of repeating the same background on every text node. This improves algorithm performance by avoiding repeated computation, and also prevents the bad case below.

![case 5](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-pl1ol1lX_YbO8-fMBfRXEGxOo29d5TNJT6AQl3-9jP5Tm6vAsi32qcIC8hIB4qUOw)

↑ [case 5](https://codepen.io/jaminqian/pen/QwymPJo)

The correct approach is to put the background style on the container.

![case 6](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-lbWDwvPjSBNF2QDa9ZA-BFYT6x78qX25I5uhcBsQv4z7Xbfus4C9Q18HkMima9x_A)

↑ [case 6](https://codepen.io/jaminqian/pen/QwymPPP)

### 2.2 Keep the nesting relationship correct

The algorithm walks the DOM depth-first (roughly in visual order: top to bottom, left to right). Do not use absolute positioning or transforms to break the correspondence between visual order and DOM structure — for example, moving a structurally earlier node to a later position via absolute positioning, or placing text over a background-colored area it does not belong to.

![case 7](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-pMkv2EY5NEwb8VSdCTqvzvvP7Xma0A-vaue-tm-Xe4KhTZ6meYPNGLvTVPjW0Of7A)

↑ [case 7](https://codepen.io/jaminqian/pen/GgoxLbG)

## 3. Images

### 3.1 Avoid using images to carry plain text unless necessary

For performance reasons the algorithm does not analyze image content, so it cannot extract and convert text inside an image. Using images to carry plain text is not recommended.

![case 8](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-naG0kTCUYaKcuxIofO6jM0l49u7rwkofPyUhm59dRFMd0wdqsXInc362SQDc74q1A)

↑ [case 8](https://codepen.io/jaminqian/pen/xbZWNKg)

### 3.2 Be careful with images that have transparent backgrounds

Transparent-background images are common in real content, but if the image contains black or near-black colors, check that they still have enough contrast against the `#191919` Dark Mode body background — otherwise they will become invisible.

![case 9](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-gX9wrx3UnmFPDQQZPTFkbFn0wEJgrrLGH0zI2EXJ6OXukmdVsKhlKqoEPncAFpoLA)

↑ [case 9](https://codepen.io/jaminqian/pen/jEWzoEg)

### 3.3 A brief look at the background-image complementary color mechanism

Note that this refers specifically to **background images** — `background-image`, not `<img>`. Incidentally, the text color above a background image depends on the complementary color: grayscale complementary-color areas keep the original Light Mode color, while chromatic areas are converted to Dark Mode.

Some creators place a background image behind text as decoration (stripes, grids, and so on). When such an image has a transparent background, the text may become unreadable, so the algorithm applies a special **complementary color** mechanism to background images.

![case 10](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-tsobj6JpfQiZQbgr5wC_VLoeJFVqHoYAjK9VZfPRW6pU-X6P1zcZpoaA8vAn5EiIw)

↑ [case 10](https://codepen.io/jaminqian/pen/LEGdopz)

The details of that mechanism (how text is detected, which color is chosen, and so on) are beyond the scope of this guide; see the algorithm source if you are interested.

## 4. SVG

The algorithm does not process SVG at present, so most SVGs look the same in Dark Mode as they do in Light Mode.

That also leads to the bad case below.

![case 11](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-qtCt0vaXfhgC06_1qxYCt60klUbj5ZsQyCDoIbQ-MLkZYR-FmikK_Un3Tjxn2E_wQ)

↑ [case 11](https://codepen.io/jaminqian/pen/zxrWQZZ)

To avoid it, set `stroke="currentColor" fill="currentColor"`, or add a background color.

## 5. Layout techniques & caveats

### 5.1 Mark a node to skip the conversion

Use the `data-no-dark` attribute to make a node skip the conversion. It applies only to that node: descendants with inline styles are still converted.

```html
<ul style="color: #000;" data-no-dark>
  <li>This text is black</li>
  <li style="color: #000;">This text is black too, but it has style="color: #000;"</li>
</ul>
```

![case 12](https://res.wx.qq.com/op_res/coOfx8lhv5jNDzvOHXSt-sRyP9sdreDpNCJhXpHoloep8fJhSWBUYQSdtG7aXoSgNeBrj0JrNhgbBKotEINY3g)

↑ [case 12](https://codepen.io/jaminqian/pen/Ggoxamw)

### 5.2 Do not use `!important`

We advise against using `!important` in content layout in any scenario. It overrides the platform's shared styles, and the Dark Mode algorithm also relies on `!important` to apply its overrides.

## Related content

- [Case collection](https://codepen.io/collection/adBbBM?sort_by=ItemCreatedAt&grid_type=LIST)
- [Dark Mode Principles](https://github.com/wechatjs/mp-darkmode/blob/master/doc/en/principle.md)
- [WeChat Official Accounts Dark Mode Best Practices (article, in Chinese)](https://mp.weixin.qq.com/s/jgipW2ihmXJBj-4WuiV_rw)
- [mp-darkmode source code](https://github.com/wechatjs/mp-darkmode)
- [mp-darkmode on npm](https://www.npmjs.com/package/mp-darkmode)
