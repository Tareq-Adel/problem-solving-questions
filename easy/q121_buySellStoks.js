/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one 
stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let L = 0;
	let curr = 1;
	let bestSell = 0;

	while (curr < prices.length) {
		if (prices[curr] - prices[L] >= bestSell) {
			bestSell = prices[curr] - prices[L];
		} else if (prices[curr] - prices[L] < 0) {
			L = curr;
		}

		curr++;
	}

	return bestSell;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
