function *factorial(n) {
	ret = 1;
	for (var i=1; i <= n; i++) {
		ret = ret * i;
		yield ret;
	}	
}

for (var n of factorial(5))
	console.log(n);