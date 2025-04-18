/**
 *https://leetcode.com/problems/arranging-coins/description/
 */
/**
 This is a good question on Binary Search
 To calculate the sum of 1 to n numbers. there is a formula -> (n/2) * (n+1) - Why this formula? Refer to Neetcode solution on this.
  */
var arrangeCoins = function (n) {
  let result = 0,
    left = 1,
    right = n;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2),
      coins = (mid / 2) * (mid + 1);
    if (coins > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
      result = Math.max(result, mid);
    }
  }
  return result;
};
