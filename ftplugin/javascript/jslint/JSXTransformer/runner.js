/*global process:false*/
"use strict";
// runner for class desugar tranformation
// check classes.js for more info

var transform = require('jstransform').transform;
var reactVisitors = require('react-tools/vendor/fbtransform/visitors').getAllVisitors();

var source = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
  source += chunk;
});
process.stdin.on('end', function () {
  var transformResult = transform(reactVisitors, source).code;
  process.stdout.write(transformResult);
});
