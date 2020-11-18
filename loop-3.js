function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя
	While (m!==n) {
		if m>n m = m-n;
		if n>m n = n-m;
	}
	res = m;
	console.log (res);
	return res;
}
module.exports = gcd;
