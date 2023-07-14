/**
 * You are given two non-empty linked lists representing two non-negative integers.
 *  The digits are stored in reverse order, and each of their nodes contains a single digit.
 *  Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */

var addTwoNumbers = function (l1, l2) {
	const result = ListNode();
	let rest = false;
	let curr1 = l1;
	let curr2 = l2;

	while (curr1 || curr2) {
		if (curr1 && curr2) {
			let sumValue = curr1.value + curr2.value;
			if (rest) {
				++sumValue;
				rest = !rest;
			}

			if (sumValue > 9) {
				sumValue %= 10;
				rest = !rest;
			}
		} else {
			if (curr1) {
			} else if (curr2) {
			}
		}
	}
	return result;
};
