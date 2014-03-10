/*global process:false*/
"use strict";
// runner for class desugar tranformation
// check classes.js for more info


var transform = require('jstransform').transform;
var reactVisitors = require('react-tools/vendor/fbtransform/visitors').getVisitorsList();
var es6Classes = require('jstransform/visitors/es6-class-visitors').visitorList;
var es6RestParameters = require('jstransform/visitors/es6-rest-param-visitors').visitorList;
var es6ArrowFunctions = require('jstransform/visitors/es6-arrow-function-visitors').visitorList;
var es6ObjectShortNotation = require('jstransform/visitors/es6-object-short-notation-visitors').visitorList;

var visitorList = reactVisitors.concat(
  es6Classes, es6RestParameters, es6ArrowFunctions, es6ObjectShortNotation
);

var source = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
  source += chunk;
});
process.stdin.on('end', function () {
  var transformResult = transform(visitorList, source).code;
  process.stdout.write(transformResult);
});
