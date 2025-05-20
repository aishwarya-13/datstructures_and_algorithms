/**
 * https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/
 */
/**
Count how badly the string becomes unbalanced with too many ]s.
The peak imbalance is what determines how many swaps are needed. (maxClose)
Each swap can correct two unmatched brackets.

Why do we need maxClose?
To track the worst (maximum) imbalance of ] over [ at any point in the string.
A balanced string can temporarily become imbalanced partway through.
What matters is the maximum imbalance at any point — because that determines how many swaps are
needed up to that point to keep the string valid.

Time: O(N)
Space: O(1)
  */
var minSwaps = function (s) {
  let maxClose = 0,
    extraClose = 0;
  for (let bracket of s) {
    bracket === "]" ? extraClose++ : extraClose--; //cal extra closing brackets at a given point of time
    maxClose = Math.max(maxClose, extraClose); //calculate max of closing brackets at any given point of time
  }
  return Math.ceil(maxClose / 2);
};
