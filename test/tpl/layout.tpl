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
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      width: 572px;
      line-height: 26px;
      display: flex;
      gap: 4px;
    }
    .column:nth-child(2) .demo_title {
      left: 572px;
    }
    .column:nth-child(3) .demo_title {
      left: 1144px;
    }
    .mp_artical_style_section_title {
      margin: 40px 0 10px 0;
    }
    .mp_artical_style_section {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 20px;
      overflow: hidden;
    }
    .rich_media_area_primary {
      overflow-x: scroll;
    }
    .rich_media_area_primary_inner {
      display: flex;
    }
    .rich_media_wrp {
      width: 500px;
      margin: 66px 20px 0;
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
      top: 0;
      right: 10px;
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
              <a id="validate_online" href="javascript:;">校验</a>
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
              <a id="validate" href="javascript:;">校验</a>
            </h2>
            <div id="dark_marker" class="marker">
              <div class="marker_line">
                <span class="marker_color"></span>
                <span>前景色：</span>
                <span></span>
              </div>
              <div class="marker_line">
                <span class="marker_color"></span>
                <span>背景色：</span>
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
                <span>对比度：</span>
                <span></span>
              </div>
            </div>
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

    // H5本地版本
    var defaultDarkTextColor = 'rgba(255, 255, 255, 0.55)';
    var defaultDarkBgColor = '#191919';
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
      }
    });
    document.getElementById('dark_title').innerText += ' (cost: ' + (new Date() - begin) + 'ms, first page: ' + fp + 'ms)';

    // 秒开本地版本
    // Darkmode.init({ // 初始化Dark Mode配置
    //   mode: 'dark',
    //   cssSelectorsPrefix: '#dark',
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

    // 校验
    var validateOpt = {
      minContrast: 1.5
    };
    var validateFilter = function(node) {
      return node.classList.contains('validate_ignore');
    };
    document.getElementById('reset_online').addEventListener('click', function() {
      DarkmodeOnline.reset();
    });
    document.getElementById('reset').addEventListener('click', function() {
      Darkmode.reset();
    });
    document.getElementById('validate_online').addEventListener('click', function() {
      console.log(DarkmodeOnline.validate(container, validateOpt, validateFilter));
    });
    document.getElementById('validate').addEventListener('click', function() {
      console.log(Darkmode.validate(container, validateOpt, validateFilter));
    });

    // hover显示颜色
    var marker = document.getElementById('dark_marker');
    var markerLines = marker.querySelectorAll('.marker_line');
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
          colorObj.color = target[key].toString();
        } else if (key.indexOf('data-darkmode-bgcolor-') === 0) {
          colorObj.bgcolor = target[key].toString();
        } else if (key.indexOf('data-darkmode-bgimage-') === 0) {
          colorObj.bgimage = true;
        } else if (key.indexOf('data-darkmode-complementary-bgimagecolor-') === 0) {
          colorObj.complementary = target[key].toString();
        }
      });
      markerLines.forEach(function(line, idx) {
        switch (idx) {
          case 0:
            if (colorObj.color) {
              line.children[0].style.backgroundColor = colorObj.color;
              line.children[2].innerHTML = colorObj.color;
              line.style.display = 'flex';
            } else {
              line.children[0].style.backgroundColor = defaultDarkTextColor;
              line.children[2].innerHTML = '默认';
              line.style.display = 'flex';
            }
            break;
          case 1:
            if (colorObj.bgcolor) {
              line.children[0].style.backgroundColor = colorObj.bgcolor;
              line.children[2].innerHTML = colorObj.bgcolor;
              line.style.display = 'flex';
            } else {
              line.children[0].style.backgroundColor = defaultDarkBgColor;
              line.children[2].innerHTML = '默认';
              line.style.display = 'flex';
            }
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
            line.children[1].innerHTML = Darkmode.getContrast(colorObj.color || defaultDarkTextColor, colorObj.bgcolor || defaultDarkBgColor);
            line.style.display = 'flex';
            break;
        }
      });
    }, false);
  </script>
</body>
</html>