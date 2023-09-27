/**
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
 */
 /**
 Time: O(N*W) N is the length of worda array and W is the length of a single word in the array
 Space:O(1)
  */
 var firstPalindrome = function(words) {
  for(let word of words){
      if(isPalindrome(word)){
          return word
      }
  }
  return ''
};

const isPalindrome = (str)=>{
  let left = 0,
      right = str.length - 1;
  while(left <= right){
      if(str[left] !== str[right]){
          return false
      }else{
          left++
          right--
      }
  }
  return true
}
