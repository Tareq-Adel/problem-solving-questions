function solution(num) {
	const hashMap = {};
	const len = num.length;
	for (let i = 0; i < len; i++) {
		if (num[i] != 0) {
			hashMap[num[i]] = hashMap[num[i]] + 1 || 1;
		} else {
			hashMap[num[i]] = hashMap[num[i]] + 1 || 1;
			if (i != 0) hashMap[i] = 0;
		}
	}

	for (let i = 0; i < len; i++) {
		if (num[i] != hashMap[i]) {
			return false;
		}
	}

	console.log("hashMap");
	return true;
}

console.log(solution("0"));
