/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
Here we need to 
i)find one day to buy a stock and another day in the future to sell the stock.
ii)find one profit from the combinations of above requirement and get the maximum profit
Time: O(N)
Space: O(1)
 */
const maxProfit = (prices)=>{
    let buy = prices[0],
        maxProfit = 0;
    for(let sell=1; sell<prices.length; sell++){
        maxProfit = Math.max(maxProfit, (prices[sell] - buy));
        buy = Math.min(buy, prices[sell]);
    }
    return maxProfit;
};