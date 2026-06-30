<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Demo</title>
  <link rel="stylesheet" href="./light.css">
  <link rel="stylesheet" href="./dark.css">
  <style>
    .demo_title {
      margin: 20px;
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
      margin: 0 20px;
      padding: 16px;
    }
    @media screen and (min-width: 1024px) {
      .rich_media_area_primary_inner {
        max-width: none;
      }
    }
  </style>
</head>

<body class="zh_CN mm_appmsg discuss_tab appmsg_skin_default appmsg_style_default not_in_mm">
  <div class="rich_media">
    <div class="rich_media_inner">
      <div class="rich_media_area_primary">
        <div class="rich_media_area_primary_inner">
          <div>
            <h2 class="demo_title">Light Mode</h2>
            <div class="rich_media_wrp article_light">
              <div class="rich_media_content" id="light">
                <cases />
              </div>
            </div>
          </div>

          <div>
            <h2 class="demo_title" id="dark_online_title">Dark Mode online</h2>
            <div class="rich_media_wrp article_dark">
              <div class="rich_media_content" id="dark_online">
                <cases />
              </div>
            </div>
          </div>

          <div>
            <h2 class="demo_title" id="dark_title">Dark Mode</h2>
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
    var begin, fp;

    // online对比版本
    var containerOnline = document.getElementById('dark_online');
    begin = new Date();
    DarkmodeOnline.run(containerOnline.querySelectorAll('*'), { // 运行Dark Mode转换算法
      mode: 'dark',
      cssSelectorsPrefix: '#dark_online',
      whitelist: {
        attribute: ['data-no-dark']
      },
      showFirstPage: function() {
        fp = new Date() - begin;
      }
    });
    document.getElementById('dark_online_title').innerText += ' (cost: ' + (new Date() - begin) + 'ms, first page: ' + fp + 'ms)';

    // H5本地版本
    var container = document.getElementById('dark');
    begin = new Date();
    Darkmode.run(container.querySelectorAll('*'), { // 运行Dark Mode转换算法
      mode: 'dark',
      cssSelectorsPrefix: '#dark',
      whitelist: {
        attribute: ['data-no-dark']
      },
      showFirstPage: function() {
        fp = new Date() - begin;
      }
    });
    document.getElementById('dark_title').innerText += ' (cost: ' + (new Date() - begin) + 'ms, first page: ' + fp + 'ms)';

    // 秒开本地版本
    // var container = document.getElementById('dark');
    // begin = new Date();
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
  </script>
</body>
</html>