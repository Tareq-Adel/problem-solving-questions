/*
Q3:
Given a string s, find the length of the longest substring without repeating characters.
 */

var lengthOfLongestSubstring = function (s) {
	let hashTable = {};
	let max = 0;
	let temp = 0;
	let start = 0;
	for (let i = 0; i < s.length; i++) {
		let x = s[i];
		if (x == " ") {
			x = "space";
		}

		if (hashTable[x] != true) {
			hashTable[x] = true;
			temp++;
		} else {
			hashTable = {};
			temp = 0;
			i = start;
			start = start + 1;
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
};
