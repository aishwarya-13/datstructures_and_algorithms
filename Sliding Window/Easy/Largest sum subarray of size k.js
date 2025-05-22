/**
 * Given an array (list) nums consisted of only non-negative integers, find the largest sum among all subarrays of length k in nums.
 * For example, if the input is nums = [1, 2, 3, 7, 4, 1], k = 3, then the output would be 14 as the largest length 3 subarray sum is given by [3, 7, 4] which sums to 14.
 */

function subarraySumFixed(nums, k) {
  let maxSum = 0,
    end = k,
    currSum = 0;
  for (let i = 0; i < k; i++) {
    currSum += nums[i];
  }
  for (let end = k; end < nums.length; end++) {
    let start = end - k;
    currSum -= nums[start];
    currSum += nums[end];
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

console.log(subarraySumFixed([1, 2, 3, 7, 4, 1], 3));
