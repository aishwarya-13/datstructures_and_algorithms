/**
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 */

/**
Inuition:
By comparing original array to its sorted version, we can find first and last indices where the two arrays differ.
Everything between those two indices must be part of unsorted region.
Indices 'start' and 'end' will calculate the region

Time: Sort -> O(NlogN) + for loop -> O(N)
Space: Sort takes O(N)
 */
var findUnsortedSubarray = function (nums) {
  let sortedArr = [...nums].sort((a, b) => a - b),
    start = -1,
    end = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (start === -1 && nums[i] !== sortedArr[i]) {
      //found first mismatch
      start = i; //this will be the start of the region that needs to be sorted in nums
      end = i; //this 'could be' the end of the region that needs to be sorted in nums
    }

    if (start > -1 && nums[i] !== sortedArr[i]) {
      end = i; //expand the end index because we found a mismatch
    }
  }
  if (start === -1 && end === nums.length - 1) {
    //original array was sorted
    return 0;
  }
  return end - start + 1;
};
