/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let i = 10;
	let result = 0;
	let conFlag = true;
	do {
		let currNum = parseInt((x % i) / (i / 10));
		result = result * 10 + currNum;
		i *= 10;
		if (parseInt(x / i) === parseInt(x / (i / 10))) conFlag = !conFlag;
	} while (conFlag);

	if (result < Math.pow(2, 31) - 1 && result > -Math.pow(2, 31)) {
		return result;
	} else {
		return 0;
	}
};
