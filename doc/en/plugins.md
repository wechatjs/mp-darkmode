English | [简体中文](../cn/plugins.md)

Plugins
==============================

## How to use

```javascript
Darkmode.extend([pluginA, pluginB, pluginC]);
```

**Note:** `Darkmode.extend()` must be executed before `Darkmode.run()`, otherwise the plugin will not work.

## Make your plugin

### Overview

Darkmode will provide the plugin base class `Plugin` parameter through the `extend` method. When you write your own plugins, you need to inherit the plugin base class. You can use some built-in properties and methods by the plugin base class, and you can use plugin hooks to write your own logic.

```javascript
export default function (Plugin) {
  return class extends Plugin {
    constructor() {
      super(); // The plugin base class contains some built-in properties and methods

      ... // Plugin properties can be customized here
    }

    // BEGIN: Plugin Hook
    beforeConvertNode(el) {}

    afterConvertNode(el) {}

    afterConvertTextColor(el, opt) {}
    // END: Plugin Hook

    ... // Plugin methods can be customized here
  }
};
```

### Built-in properties and methods

All built-in properties and methods can be accessed in plugins via `this`.

#### Built-in properties

- `loopTimes` &lt;number&gt; The number of times it has been traversed (one time when all nodes are traversed).
- `isDarkmode` &lt;boolean&gt; Whether it is Dark Mode.

#### Built-in methods

##### `addCss(className, kvList, needMediaQuery)`

- `className` &lt;string&gt; DOM class name.
- `kvList` &lt;Array&gt; List of css key-value pairs.
  - `kvList[0].key` &lt;string&gt; CSS property.
  - `kvList[0].value` &lt;string&gt; CSS value.
- `needMediaQuery` &lt;boolean&gt; Whether the Dark Mode media query needs to be added.

Add styles.

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

// Result
// @media (prefers-color-scheme: dark) {.test_class1{color: #DDD !important;text-align: center !important;}.test_class2{cursor: pointer !important;}}
```

### Hooks

![Lifecycle Diagram](../imgs/hooks.png)

#### `beforeConvertNode(el)`

- `el` &lt;DOM Object&gt; The currently transformed node.

Hook before the node starts transforming.

**Note:** If you operate on the node in this hook (such as modifying the inline style), it will affect the subsequent conversion results. If you don't want to affect the conversion result, it is recommended to use the [afterConvertNode()](#afterconvertnodeel) hook.



#### `afterConvertTextColor(el, opt)`

- `el` &lt;DOM Object&gt; The currently transformed node.
- `opt` &lt;Object&gt; Text color object.
  - `opt.fontColor` &lt;Color Object&gt; The text foreground color `Color` object.
  - `opt.bgColor` &lt;Color Object&gt; Text background color `Color` object.

Hook after the text style conversion.

**Note:** The `Color` object is based on [color](https://www.npmjs.com/package/color). Please keep the same version when using it(refer to [package.json](../../package.json#L7) for the version).

#### `afterConvertNode(el)`

- `el` &lt;DOM Object&gt; The currently transformed node.

Hook after the node conversion.
