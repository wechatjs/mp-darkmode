<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Demo</title>
  <link rel="stylesheet" href="./light.css">
  <link rel="stylesheet" href="./dark.css">
  <style>
    .column {
      position: relative;
    }
    .demo_title {
      box-sizing: border-box;
      padding: 20px;
      background-color: #fff;
      position: sticky;
      top: 0;
      /* 需盖过 .marker（同为绝对定位），否则「校验结果」浮层会被 hover 后常驻的 marker 文字穿透 */
      z-index: 20;
      width: 100%;
      line-height: 26px;
      display: flex;
      gap: 4px;
    }
    .mp_artical_style_section_title {
      margin: 40px 0 10px 0;
    }
    .mp_artical_style_section_title:first-child {
      margin-top: 0;
    }
    .mp_artical_style_section {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 20px;
      overflow: hidden;
    }

    /* 环形 contextMenu（同心多环扇形，内环放不下就往外扩环） */
    .ring_menu {
      position: fixed;
      z-index: 9999;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(8, 26, 44, 0.92) 0%, rgba(8, 26, 44, 0) 72%);
      filter: drop-shadow(0 0 18px rgba(0, 190, 255, 0.3)) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.55));
      transform-origin: center;
      animation: ring_menu_in 0.12s ease-out;
    }
    @keyframes ring_menu_in {
      from {
        transform: scale(0.9);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    .ring_menu svg {
      display: block;
    }
    .ring_menu_sector {
      fill: rgba(10, 28, 48, 0.92);
      stroke: rgba(90, 220, 255, 0.3);
      stroke-width: 1;
      cursor: pointer;
      transition: fill 0.08s ease-out, stroke 0.08s ease-out;
    }
    .ring_menu_sector:hover {
      fill: rgba(0, 178, 255, 0.88);
      stroke: rgba(190, 248, 255, 0.95);
    }
    .ring_menu_label {
      fill: #7fe3ff;
      font: 11px Menlo, Consolas, monospace;
      text-anchor: middle;
      dominant-baseline: central;
      pointer-events: none;
      user-select: none;
    }
    .ring_menu_sector:hover + .ring_menu_label {
      fill: #04121d; /* 高亮底上换深色字，保证对比度 */
    }
    .ring_menu_hint {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 74px;
      height: 74px;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      box-sizing: border-box;
      text-align: center;
      font-size: 11px;
      line-height: 1.35;
      color: #7fe3ff;
      text-shadow: 0 0 8px rgba(0, 190, 255, 0.55);
      word-break: break-all;
      pointer-events: none;
      user-select: none;
    }

    /* case 编号，浅色/深色下都要能看清 */
    .case_no {
      display: inline-block;
      margin-right: 6px;
      padding: 0 5px;
      border-radius: 4px;
      background-color: rgba(128, 128, 128, 0.28);
      font-family: Menlo, Consolas, monospace;
      font-weight: 600;
    }
    .rich_media_area_primary {
      /* 这里不能用 overflow-x: scroll：会让它变成滚动容器，导致 .demo_title 的 sticky 失效
         （它本身不垂直滚动，sticky 便没有可依附的滚动视口）。横向滚动交给文档自己处理 */
      overflow: visible;
    }
    .rich_media_area_primary_inner {
      display: flex;
      gap: 10px;
    }
    .rich_media_wrp {
      width: 450px;
      margin: 0 20px;
      padding: 16px;
    }
    @media screen and (min-width: 1024px) {
      .rich_media_area_primary_inner {
        max-width: none;
      }
    }

    .marker {
      /* margin-top: 66px; */
      position: absolute;
      padding-right: 16px;
      top: 0;
      right: 0;
      font-size: 14px;
      /* background-color: white; */
      z-index: 1;
      transform: translateX(100%);
    }
    .marker_line {
      display: none;
      align-items: center;
    }
    .marker_color {
      width: 20px;
      height: 16px;
      margin-right: 4px;
      background-color: black;
      border: 1px solid #757575;
    }
    .marker_line_separator {
      border-top: 1px solid #c8c8c8;
      margin-top: 10px;
      padding-top: 10px;
    }

    #validate {
      display: flex;
      align-items: center;
    }
    /* 校验结果：按钮上的数量角标 + hover 结果列表 */
    .validate_wrp {
      position: relative;
      display: inline-block;
    }
    .validate_badge {
      display: none;
      margin-left: 3px;
      padding: 0 4px;
      border-radius: 8px;
      background-color: #dc2626;
      color: #fff;
      font-size: 11px;
      line-height: 16px;
      font-weight: 600;
      height: 16px;
      min-width: 16px;
      text-align: center;
      box-sizing: border-box;
    }
    .validate_panel {
      display: none;
      position: absolute;
      top: 24px;
      /* 按钮在最右列，向左展开避免浮层超出视口右边 */
      right: 0;
      z-index: 20;
      width: 330px;
      max-height: 380px;
      overflow-y: auto;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #d5d5d5;
      border-radius: 6px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
      font-size: 12px;
      line-height: 1.45;
      color: #333;
    }
    .validate_wrp:hover .validate_panel { display: block; }
    .validate_item {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      padding: 6px 8px;
      border-bottom: 1px solid #f0f0f0;
      color: #333;
      text-decoration: none;
      cursor: pointer;
    }
    .validate_item:last-child { border-bottom: none; }
    .validate_item:hover { background-color: #eef5ff; }
    .validate_idx {
      flex: none;
      color: #999;
      font-family: Menlo, Consolas, monospace;
    }
    .validate_key {
      flex: none;
      color: #b91c1c;
      font-family: Menlo, Consolas, monospace;
    }
    .validate_text {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .validate_empty {
      display: block;
      padding: 10px;
      color: #666;
    }
    .validate_flash {
      outline: 2px solid #dc2626 !important;
      outline-offset: 2px;
    }

    /* 常驻红点：绝对定位在列左侧 gutter，按纵向位置聚合 */
    .validate_dots {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      z-index: 2;
    }
    .validate_dot {
      position: absolute;
      left: 0;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #dc2626;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.9);
      cursor: pointer;
    }
    .validate_dot:hover { transform: scale(1.3); }
  </style>
</head>

<body class="zh_CN mm_appmsg discuss_tab appmsg_skin_default appmsg_style_default not_in_mm">
  <div class="rich_media">
    <div class="rich_media_inner">
      <div class="rich_media_area_primary">
        <div class="rich_media_area_primary_inner">
          <div class="column">
            <h2 class="demo_title"><span id="mode_name"></span> Mode <a id="switch_mode" href="javascript:;">切换</a></h2>
            <div id="original_wrp" class="rich_media_wrp">
              <div class="rich_media_content" id="light">
                <cases />
              </div>
            </div>
          </div>

          <div class="column">
            <h2 class="demo_title">
              <span id="dark_online_title">Dark Mode online</span>
              <a id="reset_online" href="javascript:;">重置</a>
            </h2>
            <div class="rich_media_wrp article_dark">
              <div class="rich_media_content" id="dark_online">
                <cases />
              </div>
            </div>
          </div>

          <div class="column">
            <h2 class="demo_title">
              <span id="dark_title">Dark Mode</span>
              <a id="reset" href="javascript:;">重置</a>
              <span class="validate_wrp">
                <a id="validate" href="javascript:;">校验结果<span id="validate_badge" class="validate_badge"></span></a>
                <span id="validate_panel" class="validate_panel"></span>
              </span>
            </h2>
            <div id="dark_marker" class="marker">
              <div class="marker_line">
                <span class="marker_color"></span>
                <span>DM 前景色：</span>
                <span></span>
              </div>
              <div class="marker_line">
                <span class="marker_color"></span>
                <span>DM 背景色：</span>
                <span></span>
              </div>
              <div class="marker_line">
                <span>有背景图</span>
              </div>
              <div class="marker_line">
                <span class="marker_color"></span>
                <span>补色：</span>
                <span></span>
              </div>
              <div class="marker_line">
                <span>DM 对比度：</span>
                <span></span>
              </div>
              <div class="marker_line marker_line_separator">
                <span class="marker_color"></span>
                <span>LM 前景色：</span>
                <span></span>
              </div>
              <div class="marker_line">
                <span class="marker_color"></span>
                <span>LM 背景色：</span>
                <span></span>
              </div>
              <div class="marker_line">
                <span>LM 对比度：</span>
                <span></span>
              </div>
            </div>
            <div id="validate_dots" class="validate_dots"></div>
            <div class="rich_media_wrp article_dark">
              <div class="rich_media_content" id="dark">
                <cases />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script type="text/javascript" src="./darkmode_online.js"></script>
  <script type="text/javascript" src="../dist/darkmode.js"></script>
  <!-- <script type="text/javascript" src="../dist/darkmode.min.js"></script> -->
  <script type="text/javascript">
    // 给每一列的 case 标题补上编号（#1、#2 ...），方便按编号在三列之间定位同一个 case
    // 必须在 Dark Mode 转换之前执行，这样编号节点也会被一并转换
    ['light', 'dark_online', 'dark'].forEach(function (id) {
      var column = document.getElementById(id);
      if (!column) return;
      var titles = column.querySelectorAll('.mp_artical_style_section_title');
      for (var i = 0; i < titles.length; i++) {
        var caseNo = document.createElement('span');
        caseNo.className = 'case_no';
        caseNo.textContent = '#' + (i + 1);
        titles[i].insertBefore(caseNo, titles[i].firstChild);
      }
    });

    // 支持切换未处理逻辑的 LM、DM
    var LM = 'Light';
    var DM = 'Dark';
    var LM_CLASSNAME = 'article_light';
    var DM_CLASSNAME = 'article_dark';
    var modeName = document.getElementById('mode_name');
    var originalWrpClassList = document.getElementById('original_wrp').classList;
    modeName.innerText = LM;
    originalWrpClassList.add(LM_CLASSNAME);
    // modeName.innerText = DM;
    // originalWrpClassList.add(DM_CLASSNAME);
    document.getElementById('switch_mode').addEventListener('click', function(e) {
      if (modeName.innerText === LM) {
        modeName.innerText = DM;
        originalWrpClassList.remove(LM_CLASSNAME);
        originalWrpClassList.add(DM_CLASSNAME);
      } else {
        modeName.innerText = LM;
        originalWrpClassList.remove(DM_CLASSNAME);
        originalWrpClassList.add(LM_CLASSNAME);
      }
    });

    var begin, fp;

    // online对比版本
    var containerOnline = document.getElementById('dark_online');
    begin = new Date();
    DarkmodeOnline.run(containerOnline.querySelectorAll('*'), { // 运行Dark Mode转换算法
      mode: 'dark',
      cssSelectorsPrefix: '#dark_online',
      defaultDarkTextColor: '#989898',
      whitelist: {
        attribute: ['data-no-dark']
      },
      showFirstPage: function() {
        fp = new Date() - begin;
      }
    });
    document.getElementById('dark_online_title').innerText += ' (cost: ' + (new Date() - begin) + 'ms, first page: ' + fp + 'ms)';

    var container = document.getElementById('dark');
    begin = new Date();

    var defaultDarkTextColor = 'rgba(255, 255, 255, 0.55)';
    var defaultDarkBgColor = '#191919';
    // 与算法默认 LM 色一致（constant.ts 的 DEFAULT_LIGHT_TEXTCOLOR / DEFAULT_LIGHT_BGCOLOR），
    // 用于节点上没有 ORIGINAL_* expando 时的兜底显示
    var defaultLightTextColor = '#191919';
    var defaultLightBgColor = '#fff';
    // DM 与对应 LM 色值不一致时，把 DM 那行标成蓝色，方便看出哪些色被算法改过
    // marker 落在页面右侧的白底区域，用较深的蓝保证可读性
    var changedColor = '#2563eb';
    // DM 对比度过低且比 LM 更差时，把 DM 对比度那行标红（转换后可读性反而下降）
    var warnColor = '#dc2626';

    // H5本地版本
    Darkmode.run(container.querySelectorAll('*'), { // 运行Dark Mode转换算法
      mode: 'dark',
      cssSelectorsPrefix: '#dark',
      defaultDarkTextColor: defaultDarkTextColor,
      defaultDarkBgColor: defaultDarkBgColor,
      whitelist: {
        attribute: ['data-no-dark']
      },
      showFirstPage: function() {
        fp = new Date() - begin;
      },
      // setStyle: function(node, styles) {
      //   Object.assign(node.style, styles);
      // },
      // setClass: function(node, className) {
      //   node.setAttribute('class', className);
      // },
      // setAttr: function(node, attr, value) {
      //   node.setAttribute(attr, value);
      // },
      // getAttr: function(node, attr) {
      //   return node.getAttribute(attr);
      // },
    });
    document.getElementById('dark_title').innerText += ' (cost: ' + (new Date() - begin) + 'ms, first page: ' + fp + 'ms)';

    // 秒开本地版本
    // Darkmode.init({ // 初始化Dark Mode配置
    //   mode: 'dark',
    //   cssSelectorsPrefix: '#dark',
    //   defaultDarkTextColor: defaultDarkTextColor,
    //   defaultDarkBgColor: defaultDarkBgColor,
    //   whitelist: {
    //     attribute: ['data-no-dark']
    //   },
    //   showFirstPage: function() {
    //     fp = new Date() - begin;
    //   },
    //   needJudgeFirstPage: false, // 不需要判断首屏
    //   delayBgJudge: true, // 延迟背景判断
    //   container: container, // 延迟运行js时的容器
    // });
    // Darkmode.run(container.querySelectorAll('*')); // 运行Dark Mode转换算法
    // document.getElementById('dark_title').innerText += ' (cost: ' + (new Date() - begin) + 'ms, first page: ' + fp + 'ms)';
    // Array.prototype.forEach.call(container.getElementsByClassName('mp_artical_style_section'), function(el) {
    //   Darkmode.convertBg(el.querySelectorAll('*'));
    // }); // 模拟秒开分批渲染

    // 测试getDmBgColor和getDmFontColor
    console.log('getDmBgColor: rgb(254, 233, 94) →', Darkmode.getDmBgColor('rgb(254, 233, 94)'));
    console.log('getDmFontColor: red →', Darkmode.getDmFontColor('red'));
    console.log('getDmBgColor: #2B77BF →', Darkmode.getDmBgColor('#2B77BF'));
    console.log('getDmFontColor: #48A6E2 →', Darkmode.getDmFontColor('#48A6E2'));

    // 校验
    var validateOpt = {
      minContrast: 2,
      ignoreRules: 'text-bg-gradient',
    };
    var validateFilter = function(node) {
      return node.classList.contains('validate_ignore');
    };
    document.getElementById('reset_online').addEventListener('click', function() {
      DarkmodeOnline.reset();
    });

    // 校验：run 之后自动执行，按钮只作为「查看结果」的入口
    var validatePanel = document.getElementById('validate_panel');
    var validateBadge = document.getElementById('validate_badge');
    var validateDots = document.getElementById('validate_dots');
    var validateResults = [];

    var jumpToValidateNode = function(dom) {
      dom.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      dom.classList.add('validate_flash');
      setTimeout(function() { dom.classList.remove('validate_flash'); }, 1600);
    };

    var renderValidatePanel = function() {
      validatePanel.innerHTML = '';
      validateBadge.textContent = validateResults.length ? String(validateResults.length) : '';
      validateBadge.style.display = validateResults.length ? 'inline-block' : 'none';
      if (!validateResults.length) {
        var empty = document.createElement('span');
        empty.className = 'validate_empty';
        empty.textContent = '校验通过，无问题';
        validatePanel.appendChild(empty);
        return;
      }
      validateResults.forEach(function(item, idx) {
        var row = document.createElement('a');
        row.href = 'javascript:;';
        row.className = 'validate_item';
        row.title = item.violateRules;
        var no = document.createElement('span');
        no.className = 'validate_idx';
        no.textContent = String(idx + 1);
        var key = document.createElement('span');
        key.className = 'validate_key';
        key.textContent = String(item.key || '').replace('darkmode-', '');
        var text = document.createElement('span');
        text.className = 'validate_text';
        text.textContent = (item.dom.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 20) || item.dom.tagName.toLowerCase();
        row.appendChild(no);
        row.appendChild(key);
        row.appendChild(text);
        row.addEventListener('click', function(e) {
          e.preventDefault();
          jumpToValidateNode(item.dom);
        });
        validatePanel.appendChild(row);
      });
    };

    // 相近位置的多个失败节点合并成一个红点，避免刷屏；红点表示该位置附近有问题
    var renderValidateDots = function() {
      validateDots.innerHTML = '';
      if (!validateResults.length) return;
      var baseTop = validateDots.parentElement.getBoundingClientRect().top;
      var positions = validateResults.map(function(item) {
        return { dom: item.dom, y: item.dom.getBoundingClientRect().top - baseTop };
      }).sort(function(a, b) { return a.y - b.y; });
      var groups = [];
      positions.forEach(function(p) {
        var last = groups[groups.length - 1];
        // 与组内「最后一个」节点比较（滑动窗口），一串相邻节点才会聚成一个点
        if (last && p.y - last.lastY < 48) {
          last.count++;
          last.lastY = p.y;
        } else {
          groups.push({ y: p.y, lastY: p.y, count: 1, dom: p.dom });
        }
      });
      groups.forEach(function(g) {
        var dot = document.createElement('span');
        dot.className = 'validate_dot';
        dot.style.top = g.y + 'px';
        dot.title = '附近 ' + g.count + ' 个校验问题（点击跳转）';
        dot.addEventListener('click', function() { jumpToValidateNode(g.dom); });
        validateDots.appendChild(dot);
      });
    };

    // 图片/字体加载、内容插入、窗口缩放都会改变问题节点的纵向位置，load 事件太早且只触发一次，
    // 用 ResizeObserver 持续跟随布局变化重算红点位置
    var dotRaf = 0;
    var scheduleDots = function() {
      if (dotRaf) return; // 同一帧内的多次通知合并成一次，避免 ResizeObserver loop
      dotRaf = requestAnimationFrame(function() {
        dotRaf = 0;
        renderValidateDots();
      });
    };
    var validateObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(scheduleDots) : null;

    var refreshValidate = function() {
      validateResults = Darkmode.validate(container, validateOpt, validateFilter) || [];
      renderValidatePanel();
      renderValidateDots();
      // 问题节点自身尺寸变化也要能触发重算（容器总高度不变但内部重排的情况）
      if (validateObserver) {
        validateResults.forEach(function(item) { validateObserver.observe(item.dom); });
      }
    };

    document.getElementById('reset').addEventListener('click', function() {
      Darkmode.reset();
      validateResults = [];
      renderValidatePanel();
      renderValidateDots();
    });

    // run 之后立即出结果；observe() 会立即回调一次，此后布局每次变化都会重算红点
    setTimeout(refreshValidate, 0);
    if (validateObserver) {
      validateObserver.observe(container);
      validateObserver.observe(container.parentElement);
      validateObserver.observe(document.body);
    } else {
      window.addEventListener('resize', scheduleDots);
    }

    // hover显示颜色
    var marker = document.getElementById('dark_marker');
    var markerLines = marker.querySelectorAll('.marker_line');
    var toFixed2 = function (num) {
      return Math.trunc(num * 1000) / 1000;
    }
    var color2str = function (color) {
      // 算法内部存的是颜色对象（不是库里的 rgb 实例），直接用它的 toString() 可能输出 hsl()/百分比等
      // 老 webview 不支持的写法，统一用对外 API 转成 rgb()/rgba()
      if (typeof color === 'string') return color;
      return Darkmode.colorToCssString(color);
    };
    // 借 CSSOM 把配置里的 hex / rgba 默认色规范化成 rgb()/rgba()，才能和 expando 的色值直接比较
    var normalizeCssColor = function(css) {
      var probe = document.createElement('span');
      probe.style.color = css;
      return probe.style.color || css;
    };
    var dmTextDefault = normalizeCssColor(defaultDarkTextColor);
    var dmBgDefault = normalizeCssColor(defaultDarkBgColor);
    var lmTextDefault = normalizeCssColor(defaultLightTextColor);
    var lmBgDefault = normalizeCssColor(defaultLightBgColor);
    container.addEventListener('mouseover', function(e) {
      var target = e.target;

      if (validateFilter(target)) return;

      var rect = target.getBoundingClientRect();
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      marker.style.top = scrollTop + rect.top + 'px';

      var colorObj = {};
      var keys = Object.keys(target);
      keys.forEach(function(key) {
        if (key.indexOf('data-darkmode-color-') === 0) {
          colorObj.color = color2str(target[key]);
        } else if (key.indexOf('data-darkmode-bgcolor-') === 0) {
          colorObj.bgcolor = color2str(target[key]);
        } else if (key.indexOf('data-darkmode-bgimage-') === 0) {
          colorObj.bgimage = true;
        } else if (key.indexOf('data-darkmode-complementary-bgimagecolor-') === 0) {
          colorObj.complementary = color2str(target[key]);
        } else if (key.indexOf('data-darkmode-original-color-') === 0) {
          colorObj.originalColor = color2str(target[key]);
        } else if (key.indexOf('data-darkmode-original-bgcolor-') === 0) {
          colorObj.originalBgcolor = color2str(target[key]);
        }
      });
      var dmContrast = Darkmode.getContrast(colorObj.color || defaultDarkTextColor, colorObj.bgcolor || defaultDarkBgColor);
      var lmContrast = Darkmode.getContrast(colorObj.originalColor || defaultLightTextColor, colorObj.originalBgcolor || defaultLightBgColor);
      markerLines.forEach(function(line, idx) {
        switch (idx) {
          case 0:
            // 显示「默认」说明没有算法记录的具体色值，此时不参与 DM/LM 差异高亮
            var showDmColor = colorObj.color && colorObj.color !== dmTextDefault;
            if (showDmColor) {
              line.children[0].style.backgroundColor = colorObj.color;
              line.children[2].innerHTML = colorObj.color;
              line.style.display = 'flex';
            } else {
              line.children[0].style.backgroundColor = defaultDarkTextColor;
              line.children[2].innerHTML = '默认';
              line.style.display = 'flex';
            }
            line.style.color = (showDmColor && (colorObj.color || defaultDarkTextColor) !== (colorObj.originalColor || defaultLightTextColor)) ? changedColor : '';
            break;
          case 1:
            var showDmBgColor = colorObj.bgcolor && colorObj.bgcolor !== dmBgDefault;
            if (showDmBgColor) {
              line.children[0].style.backgroundColor = colorObj.bgcolor;
              line.children[2].innerHTML = colorObj.bgcolor;
              line.style.display = 'flex';
            } else {
              line.children[0].style.backgroundColor = defaultDarkBgColor;
              line.children[2].innerHTML = '默认';
              line.style.display = 'flex';
            }
            line.style.color = (showDmBgColor && (colorObj.bgcolor || defaultDarkBgColor) !== (colorObj.originalBgcolor || defaultLightBgColor)) ? changedColor : '';
            break;
          case 2:
            if (colorObj.bgimage) {
              line.style.display = 'flex';
            } else {
              line.style.display = 'none';
            }
            break;
          case 3:
            if (colorObj.complementary) {
              line.children[0].style.backgroundColor = colorObj.complementary;
              line.children[2].innerHTML = colorObj.complementary;
              line.style.display = 'flex';
            } else {
              line.style.display = 'none';
            }
            break;
          case 4:
            line.children[1].innerHTML = toFixed2(dmContrast);
            line.style.color = (dmContrast < validateOpt.minContrast && dmContrast < lmContrast) ? warnColor : '';
            line.style.display = 'flex';
            break;
          case 5:
            if (colorObj.originalColor && colorObj.originalColor !== lmTextDefault) {
              line.children[0].style.backgroundColor = colorObj.originalColor;
              line.children[2].innerHTML = colorObj.originalColor;
            } else {
              line.children[0].style.backgroundColor = defaultLightTextColor;
              line.children[2].innerHTML = '默认';
            }
            line.style.display = 'flex';
            break;
          case 6:
            if (colorObj.originalBgcolor && colorObj.originalBgcolor !== lmBgDefault) {
              line.children[0].style.backgroundColor = colorObj.originalBgcolor;
              line.children[2].innerHTML = colorObj.originalBgcolor;
            } else {
              line.children[0].style.backgroundColor = defaultLightBgColor;
              line.children[2].innerHTML = '默认';
            }
            line.style.display = 'flex';
            break;
          case 7:
            line.children[1].innerHTML = toFixed2(lmContrast);
            line.style.display = 'flex';
            break;
        }
      });
    }, false);

    // 环形 contextMenu：页面右键在点击位置弹出同心多环扇形菜单，
    // case 从 0°（12 点方向）起顺时针排：内环 6 个，之后每环容量翻倍（6 / 12 / 24 / 48 ...），
    // 放不下就自动往外扩一环；点击扇形后平滑滚动到对应 case
    (function () {
      var MENU_ID = 'ring_context_menu';
      var COLUMN_ID = 'dark'; // 三列结构一致，取其中一列枚举 case
      var SVG_NS = 'http://www.w3.org/2000/svg';
      var HOLE_RADIUS = 42; // 中心空洞半径
      var RING_WIDTH = 36; // 每环厚度
      var BASE_CAPACITY = 6; // 内环容量
      var LABEL_MIN_ANGLE = 9; // 小于这个角度就不显示编号，避免挤成一团
      var HUD_MARGIN = 14; // 外圈刻度/描边留白
      var HINT_DEFAULT = '点击跳转<br>对应case'; // 未悬停时的中心提示（一行放不下，拆两行）

      function closeMenu() {
        var menu = document.getElementById(MENU_ID);
        if (menu && menu.parentNode) menu.parentNode.removeChild(menu);
      }

      // case 名称：去掉标题里我们自己插入的编号，避免和前缀的 #N 重复
      function caseName(el) {
        var text = '';
        Array.prototype.forEach.call(el.childNodes, function (node) {
          if (node.nodeType === 1 && node.classList && node.classList.contains('case_no')) return;
          text += node.textContent;
        });
        return text.replace(/\s+/g, ' ').trim();
      }

      // 规划每一环放几个 case：内环 6 个，往外每环容量翻倍，最后一环装剩余
      function planRings(total) {
        var rings = [];
        var capacity = BASE_CAPACITY;
        var rest = total;
        while (rest > 0) {
          var idx = rings.length;
          var count = Math.min(capacity, rest);
          rings.push({
            count: count,
            r1: HOLE_RADIUS + idx * RING_WIDTH,
            r2: HOLE_RADIUS + (idx + 1) * RING_WIDTH,
          });
          rest -= count;
          capacity *= 2;
        }
        return rings;
      }

      // 角度转坐标：0° 指向 12 点，顺时针为正
      function polar(radius, angle) {
        var rad = (angle - 90) * Math.PI / 180;
        return [radius * Math.cos(rad), radius * Math.sin(rad)];
      }

      // 环形扇形的 path
      function sectorPath(r1, r2, a1, a2) {
        var p1 = polar(r2, a1);
        var p2 = polar(r2, a2);
        var p3 = polar(r1, a2);
        var p4 = polar(r1, a1);
        var largeArc = a2 - a1 > 180 ? 1 : 0;
        return 'M' + p1[0].toFixed(2) + ',' + p1[1].toFixed(2) +
          'A' + r2 + ',' + r2 + ' 0 ' + largeArc + ' 1 ' + p2[0].toFixed(2) + ',' + p2[1].toFixed(2) +
          'L' + p3[0].toFixed(2) + ',' + p3[1].toFixed(2) +
          'A' + r1 + ',' + r1 + ' 0 ' + largeArc + ' 0 ' + p4[0].toFixed(2) + ',' + p4[1].toFixed(2) + 'Z';
      }

      function openMenu(clientX, clientY) {
        closeMenu();

        var column = document.getElementById(COLUMN_ID);
        if (!column) return;
        var targets = Array.prototype.slice.call(column.querySelectorAll('.mp_artical_style_section_title'));
        var total = targets.length;
        if (!total) return;

        var rings = planRings(total);
        var radius = rings[rings.length - 1].r2; // 整圈外半径
        var outer = radius + HUD_MARGIN; // 留出外圈刻度/描边的空间

        // 圆心收敛到视口内，避免贴边时被裁掉
        var pad = outer + 8;
        var cx = Math.min(Math.max(clientX, pad), Math.max(pad, window.innerWidth - pad));
        var cy = Math.min(Math.max(clientY, pad), Math.max(pad, window.innerHeight - pad));

        var menu = document.createElement('div');
        menu.className = 'ring_menu';
        menu.id = MENU_ID;
        menu.style.left = (cx - outer) + 'px';
        menu.style.top = (cy - outer) + 'px';

        var svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('width', outer * 2);
        svg.setAttribute('height', outer * 2);
        svg.setAttribute('viewBox', (-outer) + ' ' + (-outer) + ' ' + (outer * 2) + ' ' + (outer * 2));

        // 中心孔底色，避免透出页面内容
        var hole = document.createElementNS(SVG_NS, 'circle');
        hole.setAttribute('r', HOLE_RADIUS);
        hole.setAttribute('fill', 'rgba(5, 17, 30, 0.96)');
        svg.appendChild(hole);

        var hint = document.createElement('div');
        hint.className = 'ring_menu_hint';
        hint.innerHTML = HINT_DEFAULT;

        // 单个扇形 + 编号；用独立函数作用域，避免 var 在循环里被所有回调共享
        function addSector(ring, sectorIndex, targetIndex) {
          var step = 360 / ring.count; // 每个扇形占的角度，如 12 个就是 30°
          var labelRadius = (ring.r1 + ring.r2) / 2;
          var startAngle = sectorIndex * step;
          var endAngle = startAngle + step;
          var midAngle = (startAngle + endAngle) / 2;
          var target = targets[targetIndex];
          var no = targetIndex + 1;

          var sector = document.createElementNS(SVG_NS, 'path');
          sector.setAttribute('d', sectorPath(ring.r1, ring.r2, startAngle, endAngle));
          sector.setAttribute('class', 'ring_menu_sector');
          sector.addEventListener('mouseenter', function () {
            hint.textContent = '#' + no + ' ' + caseName(target);
          });
          sector.addEventListener('mouseleave', function () {
            hint.innerHTML = HINT_DEFAULT;
          });
          sector.addEventListener('click', function (e) {
            e.stopPropagation();
            closeMenu();
            // 标题是 sticky 的，滚动位置要减掉它占的高度
            var stickyTitle = document.querySelector('.demo_title');
            var stickyHeight = stickyTitle ? stickyTitle.offsetHeight : 0;
            var top = target.getBoundingClientRect().top + window.pageYOffset - stickyHeight - 8;
            window.scrollTo({ top: top < 0 ? 0 : top, behavior: 'smooth' });
          });
          svg.appendChild(sector);

          if (step >= LABEL_MIN_ANGLE) {
            var pos = polar(labelRadius, midAngle);
            var label = document.createElementNS(SVG_NS, 'text');
            label.setAttribute('x', Math.round(pos[0]));
            label.setAttribute('y', Math.round(pos[1]));
            label.setAttribute('class', 'ring_menu_label');
            label.textContent = '#' + no;
            svg.appendChild(label);
          }
        }

        var caseIndex = 0;
        rings.forEach(function (ring) {
          for (var i = 0; i < ring.count; i++) {
            addSector(ring, i, caseIndex + i);
          }
          caseIndex += ring.count;
        });

        // HUD 装饰：外圈细环 + 0°/90°/180°/270° 四个方位刻度
        var outline = document.createElementNS(SVG_NS, 'circle');
        outline.setAttribute('r', radius);
        outline.setAttribute('fill', 'none');
        outline.setAttribute('stroke', 'rgba(90, 220, 255, 0.5)');
        outline.setAttribute('stroke-width', '1');
        svg.appendChild(outline);

        [0, 90, 180, 270].forEach(function (angle) {
          var from = polar(radius + 3, angle);
          var to = polar(radius + 9, angle);
          var tick = document.createElementNS(SVG_NS, 'line');
          tick.setAttribute('x1', from[0].toFixed(2));
          tick.setAttribute('y1', from[1].toFixed(2));
          tick.setAttribute('x2', to[0].toFixed(2));
          tick.setAttribute('y2', to[1].toFixed(2));
          tick.setAttribute('stroke', 'rgba(130, 235, 255, 0.75)');
          tick.setAttribute('stroke-width', '2');
          svg.appendChild(tick);
        });

        menu.appendChild(svg);
        menu.appendChild(hint);
        document.body.appendChild(menu);
      }

      document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        openMenu(e.clientX, e.clientY);
      });
      document.addEventListener('click', function (e) {
        if (!e.target || !e.target.closest || !e.target.closest('#' + MENU_ID)) closeMenu();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) closeMenu();
      });
      window.addEventListener('resize', closeMenu);
    })();
  </script>
</body>
</html>