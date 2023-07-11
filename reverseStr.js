const revStr = (str) => {
	const arr = str.split("");
	const len = arr.length;
	for (let i = 0; i <= len / 2; i++) {
		let j = len - i - 1;

		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr.join("");
};
console.log(revStr("tareq"));

const revStr2 = (str) => {
	let newStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newStr = newStr + str[i];
	}
	return newStr;
};

console.log(revStr2("adel"));
