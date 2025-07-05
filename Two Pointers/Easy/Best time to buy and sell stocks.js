/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

/**

 Approach: Sliding Window / Two pointers
    You're using two pointers: buy (implicitly) and sell.
    buy keeps track of the lowest price seen so far.
    You're effectively "sliding" through the array while adjusting buy and checking for the best possible sell day.

 Time: O(N)
 Space: O(1)
 We need to sell in a future date that is why start with buy from 1st and day and start selling from 2nd day
 Take the profit
 Now buy needs to be of min value. So, between the first and second price choose the min value between those as next buying price
  */
var maxProfit = function (prices) {
  let maxProfit = 0,
    buy = 0;
  for (let sell = 1; sell < prices.length; sell++) {
    maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
    buy = prices[sell] < prices[buy] ? sell : buy;
  }
  return maxProfit;
};
