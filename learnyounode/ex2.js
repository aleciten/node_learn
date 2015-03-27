var args = process.argv.slice(2);
var sum = args
			.map(function(i) { return parseInt(i); })
			.reduce(function(a,b) { return a + b; });
console.log(sum);
