/**
 * https://leetcode.com/problems/partition-array-according-to-given-pivot/description/
 */

/**
 Iterate through the array from both the ends and compare each element with pivot.
After the initial pass, all elements < pivot are placed at the beginning of the array
and all elements > pivot are placed at the end of the array

Time: O(N)
Space: O(N)
  */
var pivotArray = function (nums, pivot) {
  let result = [],
    start = 0,
    end = nums.length - 1,
    left = 0,
    right = nums.length - 1;
  while (start < nums.length) {
    //Imp to iterate till end of array. NOT i < j
    if (nums[start] < pivot) {
      result[left] = nums[start];
      left++;
    }
    if (nums[end] > pivot) {
      result[right] = nums[end];
      right--;
    }
    start++;
    end--;
  }
  while (left <= right) {
    result[left] = pivot;
    left++;
  }
  return result;
};

/**
    Brute force self
    3 passes
    1st pass to place ele < pivot
    2nd pass to place ele == pivot
    3rd pass to place ele > pivot

    Time:O(N)
    Space:O(N)
  */
var pivotArray = function (nums, pivot) {
  let result = [],
    j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      result[j] = nums[i];
      j++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === pivot) {
      result[j] = nums[i];
      j++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      result[j] = nums[i];
      j++;
    }
  }
  return result;
};
