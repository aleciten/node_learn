module.exports = function curryN (fn, n) {
	n = n||fn.length;

	var inner = function (ctx) {
		return function (arg) {
			if (ctx.length === n-1) {
				return fn.apply(this, ctx.concat(arg));
			}
			else {
				return inner(ctx.concat(arg));
			}
		}
	}

	return inner([]);
}

/*var f = curryN(function(a,b,c,d) {}, 4);
var f1 = f(a);
var f2 = f1(b);
var f3 = f2(c);
f3(d);*/