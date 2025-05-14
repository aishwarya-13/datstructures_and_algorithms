/**
 * https://leetcode.com/problems/rotate-array/description/
 */

/**
Approach 1: Rotate the array k number of times

If k is greater than the length of the array then optimize the number of rotations by k % len (n)
Why?
k = k % nums.length;) optimizes the rotation by eliminating unnecessary work when the number of 
rotations k is greater than or equal to the length of the array.

When rotating an array of length n, rotating it by n, 2n, 3n, etc., brings the array back to its original configuration.
So:
Rotating by k = n is the same as rotating by k = 0
Rotating by k = n + 1 is the same as rotating by k = 1
Rotating by k = 2n + 3 is the same as rotating by k = 3
That’s why k % nums.length ensures we do the minimum number of rotations needed to get the final result.



Time: O(N * k). All numbers are shifted by one step O(N) times
Space: O(1)

Gives time limit excceeded error
  */
var rotate = function (nums, k) {
  let n = nums.length;
  if (k >= n) {
    k = k % n;
  }
  for (let j = 0; j < k; j++) {
    let prev = nums[n - 1];
    for (let i = 0; i < n; i++) {
      let temp = nums[i];
      nums[i] = prev;
      prev = temp;
    }
  }
};
