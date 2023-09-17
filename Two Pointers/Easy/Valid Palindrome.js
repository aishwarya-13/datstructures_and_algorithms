/**
 * https://leetcode.com/problems/valid-palindrome/
 */

/**
    Without using regular expression
 */
var isPalindrome = function(s) {
    let left = 0,
        right = s.length - 1,
        str = s.toLowerCase();
    while(left <= right){
        if(isChar(str[left]) && isChar(str[right])){
            if(str[left] === str[right]){
                left++;
                right--;
            }else{
                return false
            }
        }else if(!isChar(str[left]) && isChar(str[right])){
            left++
        }else{
            right--
        }
    }
    return true
};

const isChar = (char)=>{
    if((char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || //its an alphabet
        (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)){//its a number
        return true
    }
    return false
}
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
