/**
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 */
//Solution using map also exists

/**
This is a sliding window problem because, the given criteria is (abs(i - j) <= k) So, here k defines the window.

Time: O(N)
Space: (min(N, k))
N - length of array
k - max distance between two equal numbers
 */

var containsNearbyDuplicate = function (nums, k) {
  let window = new Set(),
    start = 0;
  for (let end = 0; end < nums.length; end++) {
    let windowSize = end - start;
    if (windowSize > k) {
      //if window size exceeds k
      window.delete(nums[start]); //remove start
      start++; //move start ahead
    }
    if (window.has(nums[end])) {
      //if window has current ele then duplicate found
      return true;
    }
    window.add(nums[end]);
  }
  return false;
};
