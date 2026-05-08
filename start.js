const { PassThrough } = require('stream');
const readline = require('readline');

// Fix require is not defined error in obfuscated code
globalThis.require = require;

const phoneNumber = '6283891882373';

const fakeStdin = new PassThrough();

process.stdin.on('data', chunk => {
  fakeStdin.write(chunk.toString());
});

setTimeout(() => {
  fakeStdin.write(phoneNumber + '\n');
}, 500);

const origCreate = readline.createInterface;
readline.createInterface = function(opts) {
  if (opts && (opts.input === process.stdin)) {
    opts.input = fakeStdin;
  }
  return origCreate.call(this, opts);
};

require('./index.js');
