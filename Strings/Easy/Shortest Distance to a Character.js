/**
 * https://leetcode.com/problems/shortest-distance-to-a-character/
 */

/**
Keep a variable to track the latest index of char.
Calculate the distance by charIndex - i. Initialise charIndex to +Infinity (because we want min)
2 passes
1]In 1st pass calculate the distance from left to right
2] i) In 2nd pass calculate the distance from right to left.
  ii) Take min between the result array and current calculation
For ex: s = "loveleetcode", c = "e"
1st pass result array: [+Infinity, +Infinity, +Infinity, 0, 1, 0, 0, 1, 2, 3, 4, 0]
2nd pass result array: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
We need to to keep track of char index while iterating from left to right and from right to left.
 Time:O(N)
 Space:O(1)
**/
var shortestToChar = function (s, c) {
  let charIndex = +Infinity,
    result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      charIndex = i;
    }
    result[i] = Math.abs(i - charIndex);
  }
  charIndex = +Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      charIndex = i;
    }
    result[i] = Math.min(Math.abs(i - charIndex), result[i]);
  }
  return result;
};
