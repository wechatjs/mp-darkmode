# TODO

## Bug

1. afterConvertTextColor lm 下不触发的问题
1. 完善API updateStyle，当修改背景色相关属性时，需要递归更新后续节点的色值，以及补充该API相关文档
1. 对比度算法加入透明度维度计算（现在是暂时通过忽略低透明度的色值来曲线救国）
1. covert() 的 cssKVList 参数只支持 rgb() 或 rgba() 颜色，不支持 hex/hsl等等
1. 父元素用了-webkit-text-fill-color，应该忽略子元素的color
1. 对background-image的渐变色和background-color的mix顺序估计不对，应该先前者再后者（现在应该是反过来了，并且现在的算法应该区分不了是否有background-color）
1. background-image渐变色mix叠加数量不对
1. 渐变（background-image: linear-gradient）的各 color stop 换算结果不一致：`value.replace` 回调里第一次替换（`replaceIndex === 0`）会走继承传递，把混合色写回 `BGCOLORATTR`（`_inheritNodes` 含 el 自身），后续 stop 再调 `_adjustBrightness` 时底色基准已经变了。不透明色不受影响（`#f1f1f1` 各 stop 都是 `rgb(39,39,39)`），带 alpha 的色会漂移（`rgba(255,255,255,0.68)` → `134/64/64`）。已试过把写回延后到 replace 之后让各 stop 统一，结果渐变被压成纯色且整体变亮一档（底色 `rgb(67,67,67)` → `rgb(99,99,99)`），文字色判定翻转成深字，对比度 4.6 → 2.1，故维持现状。要统一 stop，需先解决下一条的底色模型与文字色阈值问题
1. 底色是单一标量（BGCOLORATTR），表达不了渐变的几何分布，目前用各 stop 的平均色近似；落在背景图上（祖先带 `background-image: url()`）的渐变还会因 `COMPLEMENTARY_BGIMAGECOLORATTR` 与当前色对比度 < JND(1.1) 被 `_adjustBrightness` 短路、完全不转换（Dark Mode 下保留纯白渐变，此时文字保持深色反而是对的）。另：中间灰底色（如 `rgb(99,99,99)`）会被文字色阈值判成"深色字可用"，导致对比度只有 2.1，阈值本身也需重新校准
1. 背景图区域「是否保持 Light Mode 观感」的判据有时序不一致（src/modules/sdk.ts 色值替换回调的 `keepLmForBgImage` 与图片补色取色的 `imgBgColor`）：处理 `background-color` 时 `ORIGINAL_BGCOLORATTR` 还没写入（要到色值替换回调里的 `setAttr(dom, ORIGINAL_BGCOLORATTR, ...)` 继承传递才写），前者拿到的是原始 `matchColor`；而处理 `background-image` 时后者的 `lmImgBgColor` 已经是和 `defaultLightBgColor`(#fff) 混合后的值，两者对同一节点可能给出相反结论。复现：同节点 `background-color: rgba(255,255,200,0.5)` + `background-image: url(...)`，前者判 `keepLm=false`（走 DM），后者判 `_isInvertGrayColor(rgb(100% 100% 89.412%))=true`（补色退回 LM），因为混合后的近白色感知亮度跨过了 WHITE_LIKE_COLOR_BRIGHTNESS(250)
   当前无可见后果：半透明色经「合成→反推」后 `ret.newColor ≈ 原色`，前者抑制与否输出相同（实测对比度 12.44、demo 全量 diff=0、文章指标不变）；但不透明彩色 + 祖先白底、updateStyle 重入等场景也可能让两处取到不同色值，改动这块时需一并验证
   另：同一节点上的 `text-shadow` 也会被这个兜底影响——色值替换回调（`keepLmForBgImage`）对非 `isBgColor` 色值走 `getAttr(ORIGINAL_BGCOLORATTR) || config.defaultLightBgColor`，而 `text-shadow` 在 cssKVList 里排在 `background-color` 之前，此时 ORIGINAL 还没写入、落到默认白，`_isInvertGrayColor(白)=true` 于是 `retColor=false`，把 `_adjustBrightness` 的 `isTextShadow` 分支（按阴影自身色值判断）放行的转换结果整个丢掉。打点证据（色值替换回调）：`key=text-shadow | isBgColor=false | ret.newColor=null | keepLm=true | retColor=false`。也就是说 `isTextShadow` 分支的新判据只在「后代节点」（自身无背景图、BGIMAGEATTR 继承而来、色值替换回调不抑制）上生效，同节点上是空操作；demo 里没有这类结构故全量 diff=0，定点构造可见差异（黄底·后代白阴影保持白 / 白底·后代黑阴影提亮到 `rgb(56,56,56)`）
   修法建议：让色值替换回调（`keepLmForBgImage`）用与图片补色（`imgBgColor`）同一份色值，例如预先算 `mixColors([config.defaultLightBgColor, matchColor])` 再做 `_isInvertGrayColor` 判断；或把 `ORIGINAL_BGCOLORATTR` 的写入提前到色值替换之前。注意此前抽出的共用方法 `_shouldKeepLmForBgImage()`（内部同样是 `getAttr(ORIGINAL) || fallback`）也躲不开这个时序问题，不是某次改动引入的

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
1. 优化颜色转换规则（见 demo case「优化转换规则」）：`background-color: rgb(106, 91, 85)` + `color: rgb(77, 76, 76)` 这一组，转换后文字与底色的对比度偏低，需要重新校准背景色与文字色的亮度映射（含 adjustBackgroundBrightness 的取反/限幅阈值、adjustTextBrightness 的 MIN_LIMIT_OFFSET_BRIGHTNESS / _maxLimitOffsetBrightness 取值）。该 case 是从线上文章中摘出的真实结构，可作为调规则时的基准样例。
   补充：该 case 的文字走的是 adjustTextBrightness 的「分支5 暗背景调亮」，先按 L = 90 - L 递归一次，再落到 `adjustBrightnessTo(Math.min(_maxLimitOffsetBrightness, bgPerceived + MIN_LIMIT_OFFSET_BRIGHTNESS), ...)` 得出 `rgb(128,127,127)`；底色 `bgPerceived = 94.8` 与 HIGH_BGCOLOR_BRIGHTNESS(100) 只差 5.2，是它被判成「暗背景」从而调亮字体的直接原因
1. adjustBrightnessTo（src/modules/color.ts）改造尝试记录，四版实测对比（均未落地，代码已回退到原始实现）：
   原始实现的问题：等比缩放是对的（误差<0.5），但修正分支用「某通道 === 0」触发会误伤本色纯色（红变橙、蓝变天蓝）、反解出的通道没有 clamp 会越界（纯黑 target 200 反解 G=340 被截断，亮度误差 -50）、感知亮度为0时 `|| 1` 兜底导致纯黑被转成纯绿。
   - 补单通道（clamp 触发 + 反解值夹取 + 纯黑走灰度）：亮度达标、demo 全量 diff=0（只修边界不动现有输出），但纯色仍被改色相
   - 保色相（只做等比缩放+截顶）：色相严格保持，但饱和色提不亮（纯蓝感知亮度上限只有 29），demo 22 处变暗、深色下几乎不可读
   - 混白（缩放后按亮度缺口向白色混合）：亮度达标、色相基本保持（个别 ±10°）、饱和度下降更柔和，demo 影响面最小（22 处）——综合最优，后续要改建议从这版入手
   - HSL 解 L（转 hsl 后求 L 使感知亮度达标，H/S 严格不变）：色相保持最好且亮度精确，但保留了饱和度，demo 351 处变化且部分底色变鲜艳（如 rgb(195,189,181) -> rgb(229,185,114)），不合适。
   另注意「等比缩放 L」这条路不通：饱和色在 L=50% 时感知亮度很低，比例一放就冲到 100% 变白（纯蓝 target 127 -> 白，误差 +128）
1. 半透明前景色在反推溢出时会被实色化（丢失透明度）：getFrontColor 反推出的前景色超出[0, 255]时（alpha < 0.5 的半透明前景常见，此时目标色超过可达上限 `bg + 255 * alpha`），当前直接返回不透明的混合色，于是半透明色被改成实色（demo 上有 16 处，如 `rgba(255,200,255,0.42)` -> `rgb(188,99,199)`）。目前接受这个取舍，后续可考虑更好的方案：把目标色按 alpha 夹到可达区间 `[bg * (1 - alpha), bg * (1 - alpha) + 255 * alpha]` 后再反推，在保留透明度的前提下逼近目标；更彻底的做法是让 adjustBackgroundBrightness 算目标色时就考虑 alpha 的可达范围——现在的取反规则（`100 + defaultDarkBgL - mixL`，不动点约 54.9%）在 mid-tone 上是把颜色调亮的，对 alpha < 0.5 的半透明前景必然导致目标不可达
1. COLOR_REGEXP_GLOBAL 是带 g 标志的模块级正则，lastIndex 有状态：exec 循环跑完、String.replace 都会自动归零，但循环体或 replace 回调里抛异常（会被 `_try` 吞掉）、或 convert 重入时，lastIndex 会残留并静默污染后续节点。目前只在使用前显式 `lastIndex = 0` 兜底，更彻底的做法是改用 `matchAll` 或每次新建正则实例

## Feature

1. 支持小程序
