/**
 * https://leetcode.com/problems/reverse-string/description/
 */

 /**
    Time: O(N)
    Space: O(1)
  */
    var reverseString = function(s) {
      let left = 0,
          right = s.length - 1;
      while(left < right){
          [s[left], s[right]] = [s[right], s[left]]
          left++;
          right--;
      }
  };