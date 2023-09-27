/**
 * https://leetcode.com/problems/reverse-only-letters/
 */

var reverseOnlyLetters = function(s) {
  let arr = s.split(''),
      left = 0,
      right = arr.length-1;
  while(left<right){
      if(isLetter(arr[left]) && isLetter(arr[right])){
          [arr[left], arr[right]] = [arr[right], arr[left]]
          left++
          right--
      }else if(!isLetter(arr[left])){
          left++
      }else if(!isLetter(arr[right])){
          right--
      }
  }
  return arr.join('')
};

const isLetter = (char)=>{
  return (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
  (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
}