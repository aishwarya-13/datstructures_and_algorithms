/**
 * https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 */

/**
  pair up the smallest integer with the greatest integer and then second-smallest with the 
  second-greatest and so on. This method ensures we don't end up pairing the two greatest integers
  one might deduce that pairing the largest number with the smallest, the second-largest with the 
  second-smallest, and so on, would produce the most balanced pairs. This ensures that the maximum pair 
  sum is kept as small as possible.

  Time: O(N)
  Space: O(1)

  Notes: Keep the solution in mind
  */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 0,
    left = 0,
    right = nums.length - 1;
  while (left < right) {
    max = Math.max(max, nums[left] + nums[right]);
    left++;
    right--;
  }
  return max;
};
