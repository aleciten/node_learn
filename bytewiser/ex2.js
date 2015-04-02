var args = process.argv.slice(2).map(function (n) { return parseInt(n); });
var hex = new Buffer(args).toString('hex');
console.log(hex);