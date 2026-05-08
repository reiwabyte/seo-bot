const _require = require;
globalThis.require = _require;

const vmp = globalThis.vmp_5057d1 = globalThis.vmp_5057d1 || {};
const neededGlobals = [
  'require', 'module', 'exports', '__dirname', '__filename',
  'Buffer', 'process', 'console', 'setTimeout', 'setInterval',
  'clearTimeout', 'clearInterval', 'setImmediate', 'clearImmediate',
  'global', 'globalThis'
];
for (const key of neededGlobals) {
  if (key in globalThis) vmp[key] = globalThis[key];
}

require('./index.js');
