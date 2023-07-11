/*Q:
Two Sum.
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
You can return the answer in any order.
*/

var twoSum = function (nums, target) {
	let hashMap = {};
	for (let i = 0; i < nums.length; i++) hashMap[nums[i]] = i;
	for (let i = 0; i < nums.length; i++) {
		if (hashMap[target - nums[i]] && hashMap[target - nums[i]] != i) {
			return [i, hashMap[target - nums[i]]];
		}
	}
};

console.log(twoSum([3, 3], 6));
