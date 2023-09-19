/**
 * https://leetcode.com/problems/is-subsequence/description/
 */

 /**
    Place one pointer at start of s and other at start of t
    Move both the pointers ahead when both chars are equal
    Move only t pointer if both chars are not equal
    If s is a subsequence then s pointer will reach till end. If not then pointer will be less than s's length
    Time: O(M) Length of t
    Space: O(1)
  */
    var isSubsequence = function(s, t) {
      let p1 = 0,
          p2 = 0;
      while(p2 < t.length){
          if(s[p1] === t[p2]){
              p1++
          }
          p2++
      }
      return p1 === s.length
  };