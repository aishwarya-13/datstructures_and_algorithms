/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

 /**
 Since the array is sorted, we can compare the squares on either sides, square it and place the greater one in result array and move the respective pointer.
 Time: O(N)
 Space: O(N)
  */
 var sortedSquares = function(nums) {
  let left = 0,
      right = nums.length - 1,
      result = [],
      p = right;
  while(left <= right){
      let leftSq = nums[left] * nums[left],
          rightSq = nums[right] * nums[right];
      if(leftSq >= rightSq){
          result[p] = leftSq
          p--
          left++
      }else{
          result[p] = rightSq
          p--
          right--
      }
  }
  return result
};