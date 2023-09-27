/**
 * https://leetcode.com/problems/reverse-prefix-of-word/
 */

 //Time: O(N), Space: O(N) for array
 var reversePrefix = function(word, ch) {
  let arr = word.split(''),
      firstIndex = -1;
  //Find first index
  for(let i=0; i<word.length; i++){
      if(word[i] === ch){
          firstIndex = i
          break
      }
  }
  //reverse
  let start = 0,
      end = firstIndex;
  while(start < end){
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
  }
  return arr.join('')
};