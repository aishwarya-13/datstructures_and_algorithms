/**
 * https://leetcode.com/problems/container-with-most-water/description/
 */

/**
 * Place one pointer at start and other at end
 * Find min height and calculate the area
 * Increment/ Decrement that pointer whose height is smaller because we want max area
 */
 //Time: O(N), Space: O(1)
 var maxArea = function(height) {
  let result = -Infinity,
      left = 0,
      right = height.length - 1;
  while(left < right){
      result = Math.max(result, (Math.min(height[left], height[right]) * (right - left)))
      height[left] < height[right] ? left++ : right--
  }
  return result
};