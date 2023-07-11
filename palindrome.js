const isPalindrome = (str) => {
	const len = str.length;
	for (let i = 0; i < len / 2; i++) {
		let j = len - (i + 1);
		if (str[i] == str[j]) {
			continue;
		}
		return false;
	}
	return true;
};

console.log(isPalindrome("abba"));
