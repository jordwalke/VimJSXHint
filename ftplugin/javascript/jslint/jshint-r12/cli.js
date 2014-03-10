



var JSHINT  = require('./jshint.js').JSHINT,
    fs      = require('fs');
var res = JSHINT(fs.readFileSync("/Users/jwalke/test.js", "utf8"), {});
console.log(JSHINT.errors);
console.log(res);
