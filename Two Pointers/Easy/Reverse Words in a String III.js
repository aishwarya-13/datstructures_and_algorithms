/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */
 /**
 Time :O(N^2) 
 the time complexity of the reverseWords function is O(n^2) because it calls the reverse        function once for each word in the input string, and the total length of all the words is proportional to n.
  */
var reverseWords = function(s) {
  let result = [],
      str = s.split(' ')
  for(let word of str){
      result.push(reverse(word))
  }
  return result.join(' ')
};

const reverse = (word)=>{
  let result = '';
  for(let i=word.length-1; i>=0; i--){
      result+= word[i]
  }
  return result
}