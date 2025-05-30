/**
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/
 */

/**
Without using sliding window

What I learnt? How to use indices in calculation
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let result = +Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    result = Math.min(result, nums[i + k - 1] - nums[i]);
  }
  return result;
};

/**
 * Without using extra variable for counting
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let result = +Infinity,
    start = 0;
  for (let end = 0; end < nums.length; end++) {
    k--;
    if (k === 0) {
      result = Math.min(result, nums[end] - nums[start]);
      start++;
      k++;
    }
  }
  return result;
};

var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let start = 0,
    result = +Infinity,
    count = 0;
  for (let end = 0; end < nums.length; end++) {
    count++;
    if (count >= k) {
      result = Math.min(nums[end] - nums[start], result);
      start++;
      count--;
    }
  }
  return result;
};
