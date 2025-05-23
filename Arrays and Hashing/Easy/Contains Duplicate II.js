/**
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 */

//Solution using Sliding window also exists and is more effecient

const containsNearbyDuplicate = (nums, k) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(map[nums[i]] - i) <= k) {
      return true;
    }
    map[nums[i]] = i;
  }
  return false;
};

/**
    1] Add ele as key and index as value in map
    2] If ele exists in map then calculate the distance between the indices and chekc for criteria. If criteria matches then return true. Else replace the current index in the map
  */
const containsNearbyDuplicate = (nums, k) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = i;
    } else {
      let diff = Math.abs(map[nums[i]] - i);
      if (diff <= k) {
        return true;
      } else {
        map[nums[i]] = i;
      }
    }
  }
  return false;
};
