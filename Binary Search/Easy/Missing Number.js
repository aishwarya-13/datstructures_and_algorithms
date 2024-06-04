/**
 * https://leetcode.com/problems/missing-number/
 */

/**
    Using hash table
    Time: O(N)
    Space: O(N)
  */
var missingNumber = function (nums) {
  let map = {};
  for (let num of nums) {
    map[num] = num;
  }
  console.log(map);
  for (let i = 0; i <= nums.length; i++) {
    if (map[i] === undefined) {
      return i;
    }
  }
  return -1;
};

/**
    Math
    Time: O(N)
    Space: O(1)
  */
var missingNumber = function (nums) {
  let actualSum = 0;
  let expectedSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
    expectedSum += i + 1;
  }
  return expectedSum - actualSum;
};

/**
    Binary Search
    Time: O(Nlog(N))
    Space: O(1)
  */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    //if index and element at index is correct then move right
    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      //if index and element at index is incorrect then go left
      right = mid - 1;
    }
  }
  return left;
};
