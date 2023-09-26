/**
 * https://leetcode.com/problems/backspace-string-compare/
 */
var backspaceCompare = function(s, t) {
  let stack1 = [],
      stack2 = [];
  for(let char of s){
      if(char === '#'){
          stack1.pop()
      }else{
          stack1.push(char)
      }
  }
  for(let char of t){
      if(char === '#'){
          stack2.pop()
      }else{
          stack2.push(char)
      }
  }
  return stack1.join('') === stack2.join('')
};