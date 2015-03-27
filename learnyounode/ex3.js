var fs = require('fs');
var fName = process.argv[2];

var contents = fs.readFileSync(fName);
console.log(contents.toString().split('\n').length - 1);