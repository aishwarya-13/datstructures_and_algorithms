/**
 * https://leetcode.com/problems/container-with-most-water/description/
 */

/**
 Place one pointer at start and one at end
 Get distance between them and calculate water capacity
 Move that pointer who has less height

 Time: O(N)
 Space: O(1)

 Note: Brute force will give Time Limit Exceeded error
  */
var maxArea = function (height) {
  let water = 0,
    left = 0,
    right = height.length - 1;
  while (left < right) {
    let distance = right - left,
      waterCollected = distance * Math.min(height[left], height[right]);
    //record max water
    water = Math.max(water, waterCollected);
    //move the pointer that points to lower height
    height[left] < height[right] ? left++ : right--;
  }
  return water;
};
