// Sample test using 'tap' - see https://www.npmjs.com/package/tap for documentation.

var test = require('tap').test;

// Require this package's main module.
var main = require('../lib/awf-speak-selection.js');

test('sample test', function (t) {

  // Other tests supported: t.deepEqual(), t.strictDeepEqual(), t.type(), t.ok(), ... - see https://www.npmjs.com/package/tap
  t.equal(true, true, 'passes equality test');

  t.end() // Required to report end of test.

})
