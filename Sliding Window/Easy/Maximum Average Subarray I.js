/**
 * https://leetcode.com/problems/maximum-average-subarray-i/description/
 */

//Mistakes - maxAvg = -Infinity; //IMP to take -Infinity here not zero

/**
     Sliding window
    Time: O(N)
    Space: O(1)
  */
var findMaxAverage = function (nums, k) {
  let start = 0,
    sum = 0,
    maxAvg = -Infinity; //IMP to take -Infinity here not zero
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    const windowSize = end - start + 1; //can also use count variable to count the number of elemente in a window
    if (windowSize >= k) {
      maxAvg = Math.max(maxAvg, sum / k);
      sum -= nums[start];
      start++;
    }
  }
  return maxAvg;
};

/**
    Sliding window
    Time: O(N)
    Space: O(1)
  */
var findMaxAverage = function (nums, k) {
  let start = 0,
    sum = 0,
    count = k,
    max = -Infinity;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    count--;
    if (count <= 0) {
      max = Math.max(max, sum / k);
      sum -= nums[start++];
      count--;
    }
  }
  return max;
};
