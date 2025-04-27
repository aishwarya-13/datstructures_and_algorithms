/**
 * https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/description/
 */

/**
 This is BS problem.
 The only difference here is that right bounds are unknown.
 But in the constraints it is given -> 1 <= secret.length <= 10 ** 4
 That means min array lenght is 1 and max lenght is 10 ** 4.
 So, 10 ** 4 can be the right bound

 Time: O(log N)
 Space: O(1)
  */
var search = function (reader, target) {
  let left = 0,
    right = 10 ** 4;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2),
      valAtMid = reader.get(mid);
    if (valAtMid === target) {
      return mid;
    } else if (valAtMid > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
