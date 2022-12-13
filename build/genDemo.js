const fs = require('fs');
const path = require('path');

const TPL_PATH = path.join(__dirname, '../test/tpl');
const LAYOUT_PATH = path.join(TPL_PATH, 'layout.tpl');
const CASES_PATH = path.join(TPL_PATH, 'cases.tpl');
const DEMO_PATH = path.join(__dirname, '../test/demo.html');

fs.writeFileSync(DEMO_PATH, fs.readFileSync(LAYOUT_PATH, 'utf8').replace(/<cases \/>/g, fs.readFileSync(CASES_PATH, 'utf8')), 'utf8');

console.log('\033[30;32mdone\033[0m');
