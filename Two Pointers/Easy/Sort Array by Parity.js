/**
 * https://leetcode.com/problems/sort-array-by-parity/
 */

/**
    Time: O(N)
    Space: O(1)
  */
var sortArrayByParity = function (nums) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    if (isEven(nums[end]) && !isEven(nums[start])) {
      //if both pointers are at wrong places then swap
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
    if (isEven(nums[start])) {
      //start pointer is at correct position so move ahead
      start++;
    }
    if (!isEven(nums[end])) {
      //end pointer is at correct position so move ahead
      end--;
    }
  }
  return nums;
};

/**
 * Using O(N) space and two pointers
 */
var sortArrayByParity = function (nums) {
  let result = [],
    even = 0,
    odd = nums.length - 1;
  for (let num of nums) {
    if (isEven(num)) {
      result[even] = num;
      even++;
    } else {
      result[odd] = num;
      odd--;
    }
  }
  return result;
};

const isEven = (num) => {
  return num % 2 === 0;
};
