/**
 * https://leetcode.com/problems/valid-palindrome-ii/
 */
 /**
     Once either side character is not equal we skip a left character and see if the remaining string is palindrome. Repeat same for right side.
     
    Time: O(N)
The main while loop we use can iterate up to N / 2 times, since each iteration represents a pair of characters. On any given iteration, we may find a mismatch and call checkPalindrome twice. checkPalindrome can also iterate up to N / 2 times, in the worst case where the first and last character of s do not match.
Because we are only allowed up to one deletion, the algorithm only considers one mismatch. This means that checkPalindrome will never be called more than twice.As such, we have a time complexity of O(N).
    Space: O(1)

  */
    var validPalindrome = function(s) {
      let left = 0,
          right = s.length - 1;
      while(left<= right){
          if(s[left] !== s[right]){
              const isLeftValid = checkPalindrome(s, left+1, right)
              const isRightValid = checkPalindrome(s, left, right - 1)
              return isLeftValid || isRightValid
          }
          left++
          right--
      }
      return true
  };
  
  const checkPalindrome = (str, left, right) =>{
      while(left <= right){
          if(str[left] !== str[right]){
              return false
          }
          left++
          right--
      }
      return true
  }