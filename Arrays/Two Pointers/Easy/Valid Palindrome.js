/**
 * https://leetcode.com/problems/valid-palindrome/
 */
 /**
    Time: O(N)
    Space: O(N) -> to store modified string ???
  */
    var isPalindrome = function(s) {
      let str = s.replace(/[^0-9a-z]/gi, '').toLowerCase(),
          left = 0,
          right = str.length - 1;
      while(left <= right){
          if(str[left] !== str[right]){
              return false;
          }
          left++;
          right--;
      }
      return true;
  };
