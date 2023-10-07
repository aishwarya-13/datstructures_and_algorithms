/**
 * https://leetcode.com/problems/subarray-product-less-than-k/
 */

/**
Use sliding window technique
Slide the window when product becomes >= target
The count is calculated by (end - start + 1)
Why?
Lets say we have [1,2,3] and 4 to it. Now the new subarrays newly introduced here are
[1,2,3,4] [2,3,4] [3,4] [4] which is the number of elements in the new list.
If we were to remove some from left say 1 from the window. then the subarrays are:
[2,3,4] [3,4] [4] ->it is the number of elements in the array.
Hence end - start + 1;

How to explain?
	• To find the longest subarray with product less than k we might need to find all the subarrays first. But do we really need to do that? If we find all the subarrays we are essentially finding out so many unnecessary overlapping subarrays too.
	• We can use a simple sliding window approach to solve this problem.
	• In any sliding window based problem we have two pointers. One right pointer whose job is to expand the current window and then we have the left pointer whose job is to contract a given window. At any point in time only one of these pointers move and the other one remains fixed.
    Here in this problem, the right pointer will keep on incrementing until the product becomes >= k. Ill also record the length of array as this is happening.
    Now the left pointer comes in picture. The left pointer will shrink the window.
    It will keep on incrementing until product becomes less than k.
    And while the window is being shrunk, the product will decrease. 
**/
var numSubarrayProductLessThanK = function(nums, k) {
  if(k <= 1){
      return 0
  }
  let result = 0,
      start = 0,
      product = 1;
  for(let end=0; end<nums.length; end++){
      product*= nums[end]
      while(product >= k){
          product/= nums[start]
          start++
      }
      result+= (end - start + 1)
  }
  return result
};