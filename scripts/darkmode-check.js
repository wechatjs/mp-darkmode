#!/usr/bin/env node
/**
 * @name mp-darkmode 文章 Dark Mode 体检工具
 *
 * 输入一个公众号文章 URL，用 Playwright 打开并：
 *   1. 截取 Light Mode 分屏截图（基准）
 *   2. 注入 dist 产物运行 Dark Mode 转换算法，截取 Dark Mode 分屏截图
 *   3. 量化检查：残留浅色底块、文字对比度、算法自身 validate() 结果
 *   4. 输出 report.html（可视化）+ report.json（结构化数据）
 *
 * 用法：
 *   node scripts/darkmode-check.js <url> [选项]
 *
 * 选项：
 *   -o, --out <dir>        输出目录，默认 ./dm-check-output
 *   -s, --selector <sel>   正文容器选择器，默认 #js_content
 *   -w, --width <px>       视口宽度，默认 390（iPhone）
 *   -b, --bundle <path>    注入的转换算法产物，默认 dist/darkmode.min.js
 *       --no-dark-css      不注入 test/dark.css + article_dark（模拟“算法裸跑”）
 *       --keep-open        跑完不关闭浏览器（调试用）
 *
 * 依赖：playwright（不写进 package.json，避免给所有开发者强塞浏览器下载）。
 *   缺失时会提示安装方式，也会自动尝试从全局 node_modules 解析。
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// 参数
// ---------------------------------------------------------------------------
const argv = process.argv.slice(2);
const getOpt = (names, def) => {
  for (let i = 0; i < argv.length; i++) {
    if (names.includes(argv[i])) return argv[i + 1];
  }
  return def;
};
const hasFlag = (names) => names.some((n) => argv.includes(n));

if (!argv.length || hasFlag(['-h', '--help'])) {
  console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0].replace(/^\/\*\*?/, '').replace(/^ \* ?/gm, ''));
  process.exit(0);
}

const URL_ARG = argv[0];
const OUT_DIR = path.resolve(getOpt(['-o', '--out'], path.join(ROOT, 'dm-check-output')));
const SELECTOR = getOpt(['-s', '--selector'], '#js_content');
const WIDTH = Number(getOpt(['-w', '--width'], 390));
const BUNDLE = path.resolve(getOpt(['-b', '--bundle'], path.join(ROOT, 'dist/darkmode.min.js')));
const USE_DARK_CSS = !hasFlag(['--no-dark-css']);
const KEEP_OPEN = hasFlag(['--keep-open']);

const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003128) NetType/WIFI Language/zh_CN';
const VIEWPORT = { width: WIDTH, height: 844 };
const SEG_STEP = 780; // 每屏截图滚动步长
const SEG_MAX = 30;

// ---------------------------------------------------------------------------
// 依赖解析：本地 → 全局 npm root → @playwright/cli 内置
// ---------------------------------------------------------------------------
function resolvePlaywright() {
  const candidates = [];
  try { candidates.push(require.resolve('playwright')); } catch (e) { /* ignore */ }
  try {
    const globalRoot = execSync('npm root -g', { encoding: 'utf8' }).trim();
    candidates.push(path.join(globalRoot, 'playwright'));
    candidates.push(path.join(globalRoot, '@playwright/cli/node_modules/playwright'));
  } catch (e) { /* ignore */ }
  for (const c of candidates) {
    try { return require(c); } catch (e) { /* ignore */ }
  }
  console.error('\x1b[31m找不到 playwright。\x1b[0m 请先安装：\n  npm i -D playwright\n  npx playwright install chromium\n');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 页面内分析（注入浏览器执行）
// ---------------------------------------------------------------------------
const ANALYZE = ({ selectors }) => {
  const parse = (c) => {
    const m = String(c).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(',').map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const blend = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });
  const ratio = (a, b) => {
    const l1 = lum(a); const l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };
  const rgb = (c) => `rgb(${Math.round(c.r)},${Math.round(c.g)},${Math.round(c.b)})`;

  const root = document.querySelector(selectors.root);
  if (!root) return { error: `找不到正文容器 ${selectors.root}` };

  // 深色兜底底色：算法默认 defaultDarkBgColor
  const PAGE_BG = { r: 25, g: 25, b: 25, a: 1 };

  const effBg = (el) => {
    let cur = el;
    let acc = null;
    while (cur && cur !== document.documentElement) {
      const cs = getComputedStyle(cur);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') {
        return { color: acc ? blend(acc, PAGE_BG) : PAGE_BG, el: cur, onImg: true };
      }
      const c = parse(cs.backgroundColor);
      if (c && c.a > 0) {
        if (c.a >= 0.999) {
          acc = acc ? blend(acc, c) : c;
          return { color: acc, el: cur, onImg: false };
        }
        acc = acc ? blend(acc, c) : c;
      }
      cur = cur.parentElement;
    }
    return { color: acc ? blend(acc, PAGE_BG) : PAGE_BG, el: null, onImg: false };
  };

  const pathOf = (el) => {
    const arr = [];
    let cur = el;
    for (let i = 0; i < 4 && cur && cur !== root; i++) {
      const tools = cur.getAttribute && cur.getAttribute('data-tools');
      const ign = cur.getAttribute && cur.getAttribute('data-ignore-dm');
      arr.push(cur.tagName.toLowerCase() + (tools ? `[${tools}]` : '') + (ign ? `{ignore:${ign}}` : ''));
      cur = cur.parentElement;
    }
    return arr.join(' < ');
  };

  const out = {
    rootColor: getComputedStyle(root).color,
    nodeCount: 0,
    lightBlock: [],
    lowContrast: [],
    ignoreDm: [],
    images: [],
    validate: [],
  };

  const all = [root, ...root.querySelectorAll('*')];
  out.nodeCount = all.length;

  all.forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    const ign = el.getAttribute('data-ignore-dm');
    if (ign) out.ignoreDm.push({ tag: el.tagName.toLowerCase(), rule: ign, path: pathOf(el) });

    const bg = effBg(el);

    // 1) 深色下仍是浅底的块（算法漏转）
    if (!bg.onImg && bg.el && lum(bg.color) > 0.5) {
      out.lightBlock.push({
        tag: el.tagName.toLowerCase(),
        path: pathOf(el),
        bg: rgb(bg.color),
        text: (el.innerText || '').replace(/\s+/g, ' ').slice(0, 40),
        inline: (el.getAttribute('style') || '').slice(0, 160),
      });
    }

    // 2) 有直接文本的节点做对比度检查
    const hasText = Array.prototype.some.call(el.childNodes, (n) => n.nodeType === 3 && n.nodeValue.replace(/\s/g, '').length);
    if (!hasText) return;
    const fgRaw = parse(cs.color);
    if (!fgRaw) return;
    const fg = fgRaw.a < 1 ? blend(fgRaw, bg.color) : fgRaw;
    const r = ratio(fg, bg.color);
    if (r >= 4.5) return;
    out.lowContrast.push({
      ratio: Number(r.toFixed(2)),
      tag: el.tagName.toLowerCase(),
      path: pathOf(el),
      color: cs.color,
      bg: rgb(bg.color),
      onImg: bg.onImg, // true 表示文字落在渐变/背景图容器内，实际底色取决于图案
      text: (el.innerText || '').replace(/\s+/g, ' ').slice(0, 40),
      inline: (el.getAttribute('style') || '').slice(0, 160),
    });
  });

  out.lowContrast.sort((a, b) => a.ratio - b.ratio);

  // 3) 图片（白底截图类在深色下会形成亮块，只能人工确认，这里统计数量）
  out.images = [...root.querySelectorAll('img')].map((img) => ({
    src: (img.getAttribute('data-src') || img.currentSrc || img.src || '').slice(0, 120),
    w: img.naturalWidth,
    h: img.naturalHeight,
  }));

  // 4) 算法自带的校验器
  try {
    out.validate = (window.Darkmode.validate(root) || []).map((r) => ({
      key: r.key,
      msg: r.violateRules,
      text: (r.dom.innerText || '').replace(/\s+/g, ' ').slice(0, 40),
      path: pathOf(r.dom),
    }));
  } catch (e) {
    out.validate = [{ key: 'error', msg: String(e && e.message) }];
  }

  return out;
};

// ---------------------------------------------------------------------------
// 主流程
// ---------------------------------------------------------------------------
(async () => {
  if (!fs.existsSync(BUNDLE)) {
    console.error(`\x1b[31m找不到转换算法产物：${BUNDLE}\x1b[0m\n先执行 npm run build`);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const { chromium } = resolvePlaywright();
  const lib = fs.readFileSync(BUNDLE, 'utf8');
  const darkCssPath = path.join(ROOT, 'test/dark.css');
  const darkCss = USE_DARK_CSS && fs.existsSync(darkCssPath) ? fs.readFileSync(darkCssPath, 'utf8') : '';

  const browser = await chromium.launch();
  const result = { url: URL_ARG, selector: SELECTOR, viewport: VIEWPORT, bundle: path.relative(ROOT, BUNDLE), startedAt: new Date().toISOString() };

  const newPage = async () => {
    const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1, userAgent: UA, isMobile: true, hasTouch: true, colorScheme: 'light' });
    const page = await ctx.newPage();
    await page.goto(URL_ARG, { waitUntil: 'load', timeout: 60000 });
    // 公众号图片走 data-src 懒加载，强制拉起来，否则截图全是占位图
    await page.evaluate(async ({ sel }) => {
      const fix = () => document.querySelectorAll(`${sel} img`).forEach((img) => {
        const s = img.getAttribute('data-src');
        if (s && img.src !== s) img.src = s;
      });
      fix();
      const h = document.body.scrollHeight;
      for (let y = 0; y < h; y += 500) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 70));
        fix();
      }
      window.scrollTo(0, 0);
    }, { sel: SELECTOR });
    try {
      await page.waitForFunction((sel) => [...document.querySelectorAll(`${sel} img`)].every((i) => i.complete && i.naturalWidth > 1), SELECTOR, { timeout: 25000 });
    } catch (e) { /* 有图挂了也继续 */ }
    return { ctx, page };
  };

  const shoot = async (page, prefix) => {
    for (let i = 0; i < SEG_MAX; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), i * SEG_STEP);
      await page.waitForTimeout(220);
      const atBottom = await page.evaluate(() => window.scrollY + window.innerHeight >= document.body.scrollHeight - 2);
      await page.screenshot({ path: path.join(OUT_DIR, `${prefix}-${String(i).padStart(2, '0')}.png`) });
      if (atBottom) return i + 1;
    }
    return SEG_MAX;
  };

  // ---- Light ----
  process.stdout.write('Light Mode 截图 ... ');
  let { ctx, page } = await newPage();
  const lightShots = await shoot(page, 'L');
  result.light = { shots: lightShots };
  await ctx.close();
  console.log(`\x1b[32m${lightShots} 屏\x1b[0m`);

  // ---- Dark ----
  process.stdout.write('Dark Mode 转换 + 截图 ... ');
  ({ ctx, page } = await newPage());
  if (darkCss) {
    // 把客户端 dark.css 的 media query 打开，模拟微信客户端深色环境
    await page.addStyleTag({ content: darkCss.replace(/@media \(prefers-color-scheme: dark\)\s*\{/, '@media all {') });
    await page.addStyleTag({ content: 'html, body, #page-content, #img-content, .rich_media, .rich_media_area_primary, .rich_media_area_primary_inner { background-color:#191919 !important; }' });
    await page.evaluate(() => {
      document.querySelector('#page-content')?.classList.add('article_dark');
      document.body.classList.add('article_dark');
    });
  }
  await page.addScriptTag({ content: lib });
  const runInfo = await page.evaluate((sel) => {
    const root = document.querySelector(sel);
    if (!root) return { error: `找不到 ${sel}` };
    try {
      window.Darkmode.run([root, ...root.querySelectorAll('*')], { mode: 'dark' });
      return { ok: true };
    } catch (e) {
      return { error: String(e && e.message) };
    }
  }, SELECTOR);
  await page.waitForTimeout(1200);
  result.dark = { run: runInfo, ...(await page.evaluate(ANALYZE, { selectors: { root: SELECTOR } })) };
  result.dark.shots = await shoot(page, 'D');
  if (!KEEP_OPEN) await ctx.close();
  console.log(`\x1b[32m${result.dark.shots} 屏\x1b[0m`);

  if (!KEEP_OPEN) await browser.close();
  result.finishedAt = new Date().toISOString();

  // ---------------------------------------------------------------------------
  // 输出
  // ---------------------------------------------------------------------------
  const jsonPath = path.join(OUT_DIR, 'report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2), 'utf8');
  const htmlPath = path.join(OUT_DIR, 'report.html');
  fs.writeFileSync(htmlPath, renderHtml(result), 'utf8');

  const d = result.dark;
  console.log('\n================ 结果 ================');
  if (runInfo.error) console.log(`\x1b[31m算法运行失败：${runInfo.error}\x1b[0m`);
  console.log(`正文节点数        : ${d.nodeCount}`);
  console.log(`残留浅色底块      : ${d.lightBlock.length}${d.lightBlock.length ? '  \x1b[33m← 需要关注\x1b[0m' : ''}`);
  console.log(`低对比度文本(<4.5): ${d.lowContrast.length}（其中落在渐变/背景图内 ${d.lowContrast.filter((x) => x.onImg).length}）`);
  console.log(`data-ignore-dm 标记: ${d.ignoreDm.length}`);
  console.log(`validate() 告警    : ${d.validate.length}`);
  if (d.lowContrast.length) {
    console.log('\n最差的 10 处：');
    d.lowContrast.slice(0, 10).forEach((x) => {
      console.log(`  ${String(x.ratio).padStart(5)}  <${x.tag}> ${x.color} on ${x.bg}${x.onImg ? ' (在背景图/渐变上)' : ''}`);
      console.log(`         ${x.text}`);
      console.log(`         ${x.path}`);
    });
  }
  console.log(`\n报告：${htmlPath}`);
  console.log(`数据：${jsonPath}`);
  console.log(`截图：${OUT_DIR}/L-*.png（Light）、D-*.png（Dark）`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

// ---------------------------------------------------------------------------
// HTML 报告
// ---------------------------------------------------------------------------
function renderHtml(r) {
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const d = r.dark || {};
  const lc = d.lowContrast || [];
  const lb = d.lightBlock || [];

  const rows = lc.map((x) => `
      <tr class="${x.onImg ? 'on-img' : ''}">
        <td class="num ${x.ratio < 2 ? 'bad' : x.ratio < 3 ? 'mid' : ''}">${x.ratio}</td>
        <td><code>${esc(x.tag)}</code><br><span class="muted">${esc(x.path)}</span></td>
        <td>${esc(x.color)}<br><span class="muted">on ${esc(x.bg)}${x.onImg ? '（背景图/渐变）' : ''}</span></td>
        <td>${esc(x.text)}</td>
      </tr>`).join('');

  const lbRows = lb.map((x) => `
      <tr>
        <td><code>${esc(x.tag)}</code><br><span class="muted">${esc(x.path)}</span></td>
        <td>${esc(x.bg)}</td>
        <td>${esc(x.text)}</td>
      </tr>`).join('');

  const shots = (prefix, n) => Array.from({ length: n || 0 }, (_, i) => `<img src="${prefix}-${String(i).padStart(2, '0')}.png">`).join('');

  return `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><title>Dark Mode 体检报告</title>
<style>
  body{margin:0;padding:24px;background:#111;color:#ddd;font:14px/1.6 -apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}
  h1{font-size:20px;margin:0 0 4px} a{color:#7d90a9}
  .meta{color:#888;font-size:12px;margin-bottom:20px;word-break:break-all}
  .cards{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px}
  .card{background:#1c1c1c;border:1px solid #2c2c2c;border-radius:10px;padding:14px 18px;min-width:150px}
  .card b{display:block;font-size:24px;font-weight:600}
  .card span{color:#888;font-size:12px}
  .card.warn b{color:#f0a020}
  table{width:100%;border-collapse:collapse;margin:8px 0 28px;background:#181818;border-radius:8px;overflow:hidden}
  th,td{text-align:left;padding:8px 10px;border-bottom:1px solid #262626;vertical-align:top}
  th{background:#202020;font-weight:500;color:#aaa;font-size:12px}
  tr.on-img td{background:#1e1a14}
  .num{font-variant-numeric:tabular-nums;font-weight:600}
  .num.bad{color:#ff5f56}.num.mid{color:#f0a020}
  .muted{color:#777;font-size:12px}
  .shots{display:flex;gap:10px;overflow-x:auto;padding-bottom:10px}
  .shots img{width:260px;border-radius:8px;border:1px solid #2c2c2c;flex:0 0 auto}
  section{margin-bottom:28px}
  h2{font-size:15px;color:#bbb;border-left:3px solid #444;padding-left:8px}
  code{background:#242424;padding:1px 5px;border-radius:4px;font-size:12px}
</style></head>
<body>
  <h1>Dark Mode 体检报告</h1>
  <div class="meta">${esc(r.url)}<br>正文选择器 ${esc(r.selector)} · 视口 ${r.viewport.width}×${r.viewport.height} · 产物 ${esc(r.bundle)} · ${esc(r.finishedAt)}</div>

  <div class="cards">
    <div class="card"><b>${d.nodeCount || 0}</b><span>正文节点</span></div>
    <div class="card ${lb.length ? 'warn' : ''}"><b>${lb.length}</b><span>残留浅色底块</span></div>
    <div class="card ${lc.filter((x) => !x.onImg).length ? 'warn' : ''}"><b>${lc.filter((x) => !x.onImg).length}</b><span>低对比度文本</span></div>
    <div class="card ${lc.filter((x) => x.onImg).length ? 'warn' : ''}"><b>${lc.filter((x) => x.onImg).length}</b><span>背景图/渐变上低对比</span></div>
    <div class="card"><b>${(d.validate || []).length}</b><span>validate() 告警</span></div>
  </div>

  ${lb.length ? `<section><h2>残留浅色底块（算法应转未转）</h2>
  <table><tr><th>节点</th><th>背景色</th><th>文本</th></tr>${lbRows}</table></section>` : ''}

  <section><h2>低对比度文本（&lt; 4.5:1，按对比度升序）</h2>
  ${lc.length ? `<table><tr><th>对比度</th><th>节点</th><th>颜色</th><th>文本</th></tr>${rows}</table>` : '<p class="muted">无</p>'}
  </section>

  <section><h2>Dark Mode 截图</h2><div class="shots">${shots('D', d.shots)}</div></section>
  <section><h2>Light Mode 截图（基准）</h2><div class="shots">${shots('L', r.light && r.light.shots)}</div></section>
</body></html>`;
}
