/**
 * https://leetcode.com/problems/3sum-smaller/
 */
/**
 Time: O(N^2)
 Space: O(1)
  */
var threeSumSmaller = function (nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum < target) {
        //If sum is smaller than target then for current left and right, there can be (right - left) possible triplets with smaller sum than target
        count += right - left;
        //go on to find another triplets by moving the left pointer ex.[-1,1,2,3,4] here when left = 1 and right = 4 we will have 3 triplets. Now increase left to 2 to check for other triplets
        left++;
      } else {
        //If sum is greater than or equal to the target, then we need a smaller sum thus decrease the end pointer to get smaller sum
        right--;
      }
    }
  }
  return count;
};
