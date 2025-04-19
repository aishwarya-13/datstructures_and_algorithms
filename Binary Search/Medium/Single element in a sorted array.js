/**
 * https://leetcode.com/problems/single-element-in-a-sorted-array/description/
 */

//Binary Search - O(log N) - Solution: Neetcode
var singleNonDuplicate = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    //if ele at mid is not equal to its previous and next ele then its the single element
    //at mid if ele is either equal to its previous value or next value then it is not the single element
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }
    //We need to calculate only one side of the array
    //If mid ele is equal to previous ele then we can exclude mid ele form counting the number of elements.Thats why we count until mid - 1
    //Else we count till mid
    let leftSize = nums[mid - 1] === nums[mid] ? mid - 1 : mid;
    //Now divide the number of elements in the left subarray. If its odd then 'single element' is present on the left side
    if (leftSize % 2 !== 0) {
      // if odd
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
