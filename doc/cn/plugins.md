[English](../en/plugins.md) | 简体中文

插件
==============================

## 使用插件

```javascript
Darkmode.extend([pluginA, pluginB, pluginC]);
```

**注意：**

- `Darkmode.extend()` 需要在对应的转换之前执行（例如首屏转换前），否则该次转换不会有插件参与。
- `Darkmode.reset()` 会**清空已挂载的插件**（同时清空插件样式），重置后需要重新 `extend`。

## 编写插件

### 概览

Darkmode 会通过 `extend` 方法传入插件基类 `Plugin`，开发者在编写自己的插件时，需要继承插件基类。通过插件基类，开发者可以访问一些插件内置属性和方法，并且可以使用插件钩子来编写自己的逻辑。

```javascript
export default function (Plugin) {
  return class extends Plugin {
    constructor() {
      super(); // 插件基类包含一些内置属性和方法

      ... // 可以在这里自定义插件属性
    }

    // BEGIN: 插件钩子
    beforeConvertNode(el) {}

    afterConvertNode(el) {}

    afterConvertTextColor(el, opt) {}
    // END: 插件钩子

    ... // 可以在这里自定义插件方法
  }
};
```

### 内置属性和方法

所有内置属性和方法都可以在插件里通过 `this` 访问。

#### 内置属性

- `loopTimes` &lt;number&gt; 已遍历次数（全部节点遍历结束算一次）。
- `isDarkmode` &lt;boolean&gt; 是否为 Dark Mode。

#### 内置方法

##### `addCss(className, kvList, needMediaQuery)`

- `className` &lt;string&gt; DOM 节点类名。
- `kvList` &lt;Array&gt; css 键值对列表。
  - `kvList[0].key` &lt;string&gt; css 属性。
  - `kvList[0].value` &lt;string&gt; css 值。
- `needMediaQuery` &lt;boolean&gt; 是否需要添加 Dark Mode 媒体查询，默认 `true`。

添加样式。

```javascript
this.addCss('test_class1', [{
  key: 'color',
  value: '#DDD'
}, {
  key: 'text-align',
  value: 'center'
}], true);

this.addCss('test_class2', [{
  key: 'cursor',
  value: 'pointer'
}], true);

// 运行结果
// @media (prefers-color-scheme: dark) {.test_class1{color: #DDD !important;text-align: center !important;}.test_class2{cursor: pointer !important;}}
```

### 插件钩子

![生命周期图](../imgs/hooks.png)

钩子分三组，分别对应三种转换来源。同一节点在一次转换中**只会命中其中一组**：

| | 首次转换（`Darkmode.run()`） | 更新样式（`Darkmode.updateStyle()`） | 背景区域重跑（`Darkmode.convertBg()`） |
| --- | --- | --- | --- |
| 节点转换前 | `beforeConvertNode` | `beforeConvertNodeByUpdateStyle` | `beforeConvertNodeByReset` |
| 文字色转换后 | `afterConvertTextColor` | `afterConvertTextColorByUpdateStyle` | `afterConvertTextColorByReset` |
| 节点转换后 | `afterConvertNode` | `afterConvertNodeByUpdateStyle` | `afterConvertNodeByReset` |

第三组的触发时机：`Darkmode.convertBg()` 处理背景（渐变 / 背景图）区域时，会**先重置**该区域下新老节点的继承属性，再重跑一次转换——重跑的这次命中的就是 `ByReset` 这一组，而不是首次转换那组。

下面按首次转换的三个钩子说明参数，另外两组参数完全一致。

#### `beforeConvertNode(el)`

- `el` &lt;HTMLElement&gt; 当前转换的 DOM 节点。

节点开始转换前的钩子。

**注意：** 如果在这个钩子里对节点进行操作（如修改内联样式），将会影响后续的转换结果。如果不希望对转换结果造成影响，建议使用 [afterConvertNode()](#afterconvertnodeel) 钩子。

#### `afterConvertTextColor(el, opt)`

- `el` &lt;HTMLElement&gt; 当前转换的 DOM 节点。
- `opt` &lt;Object&gt; 文本颜色对象。
  - `opt.fontColor` &lt;Color Object | null&gt; 转换后的文本前景色；算法算不出时为 `null`。
  - `opt.bgColor` &lt;Color Object&gt; 用于计算对比度的背景色。

文本样式转换结束后的钩子。

**注意：**

- `Color` 对象基于 [colorjs.io](https://www.npmjs.com/package/colorjs.io)，**不要**按其它颜色库的 API 使用。需要 css 色值时用 [`Darkmode.colorToCssString()`](./API.md#darkmodecolortocssstringcolor--csscolor) 转换——直接 `toString()` 可能得到 `hsl()`、百分比等老 webview 不支持的写法。
- 该钩子只在节点**没有背景图**、且能取到父级底色时触发。

```javascript
afterConvertTextColor(el, opt) {
  if (!opt.fontColor) return; // 算法没能算出前景色
  const fontColor = Darkmode.colorToCssString(opt.fontColor); // 'rgb(128, 127, 127)'
  const bgColor = Darkmode.colorToCssString(opt.bgColor);
}
```

#### `afterConvertNode(el)`

- `el` &lt;HTMLElement&gt; 当前转换的 DOM 节点。

节点转换结束后的钩子。
