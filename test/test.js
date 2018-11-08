const test = require('ava');

const pAll = require('..');

test('returns itself', t => {
  t.true(typeof pAll === 'function');
});
