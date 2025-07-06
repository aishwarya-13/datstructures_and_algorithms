/**
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 */

//Solution using Sliding window also exists. It is more effecient

/**
 Time: O(N)
 Space: O(N)
  */
var containsNearbyDuplicate = function (nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      let index = map[nums[i]],
        diff = Math.abs(index - i);
      if (diff <= k) {
        return true;
      }
    }
    map[nums[i]] = i; //update the index if an ele occurs more than once
  }
  return false;
};
