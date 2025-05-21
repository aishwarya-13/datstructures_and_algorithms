/**
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/description/
 */

/**
    Using sorting and two sum pointers
    Time: O(N) - for loop, sorting - O(NlogN)
    Space: O(1)
  */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0,
    left = 0,
    right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return count;
};

/**
Self
 Intuition: For each element we check if difference between current ele and k exists.
 Use map to store the differences.

 Using map
1. If the current ele is in map then we found a pair
2. If not then store the diff in the map

Time: O(N)
Space: O(N)

Note: There could be duplicates in the array. Since there could be duplicates, its imp to keep count in the map as well
{diff: freq} Frequency of occurrence of the diff
  */
var maxOperations = function (nums, k) {
  let map = {},
    count = 0;
  for (let ele of nums) {
    if (map[ele] === undefined) {
      let diff = k - ele;
      if (map[diff] === undefined) {
        map[diff] = 0;
      }
      map[diff]++;
    } else {
      map[ele]--;
      if (map[ele] === 0) delete map[ele];
      count++;
    }
  }
  return count;
};
