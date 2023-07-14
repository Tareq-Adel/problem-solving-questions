const majority = (str) => {
	const el = {};
	str = str.split("");

	for (const char of str) {
		el[char] = el[char] + 1 || 1;
	}

	for (const key in el) {
		if (el[key] > Math.floor(str.length / 2)) return key;
	}

	return null;
};

console.log(majority("aababbve"));
