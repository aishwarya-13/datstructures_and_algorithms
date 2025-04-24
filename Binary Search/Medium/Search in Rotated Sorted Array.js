/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * Solution: https://www.youtube.com/watch?v=NiM1B0M6YRE
 */

/**
 Check if from mid if left part or right part is sorted (ascending)
 Then check if target lies within the boundaries
  */
var search = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[left] <= arr[mid]) {
      //left is sorted
      if (target >= arr[left] && target <= arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      //right is sorted
      if (target >= arr[mid] && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
Approach 1: Find pivot and then binary search
1. Find pivot index(index where the array is rotated)
2. 0th to pivot index forms one array AND pivot index to n - 1 forms another array
3. Perform binary search on both these arrays to find the target

Time: The algorithm requires one binary search to locate pivot, and at most 2 binary searches to find target. Each binary search takes O(logn) time.
O(log n)
Space: O(1)
 */

var search = function (nums, target) {
  const pivotIndex = findPivotIndex(nums);
  console.log("pivotIndex", pivotIndex);
  //Binary search on left side of the pivot element
  const targetIndex = binarySearch(0, pivotIndex, nums, target);
  if (targetIndex !== -1) return targetIndex;
  //Binary search on right side of pivot element
  return binarySearch(pivotIndex, nums.length - 1, nums, target);
};

const binarySearch = (left, right, nums, target) => {
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

const findPivotIndex = (nums) => {
  let n = nums.length;
  (left = 0), (right = n - 1);
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[n - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
