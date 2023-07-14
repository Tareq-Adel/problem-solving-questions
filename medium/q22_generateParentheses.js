/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let result = [];
	let stack = [];
	let i = 0;

	const backtrack = (prePCount, postPCount) => {
		if (prePCount === n && postPCount === n) {
			result[i] = stack.join("");
			i++;
			return;
		}

		if (prePCount < n) {
			stack.push("(");
			backtrack(prePCount + 1, postPCount);
			stack.pop();
		}

		if (postPCount < prePCount) {
			stack.push(")");
			backtrack(prePCount, postPCount + 1);
			stack.pop();
		}
	};
	backtrack(0, 0);
	return result;
};

console.log(generateParenthesis(5));
