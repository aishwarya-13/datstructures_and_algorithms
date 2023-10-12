/**
 * https://leetcode.com/problems/backspace-string-compare/
 */

//Using stack
var backspaceCompare = function(s, t) {
    let stack1 = [],
        stack2 = [],
        i = 0,
        j = 0;
    while(i<s.length || j<t.length){
        if(s[i] === '#'){
            stack1.pop(s[i])
        }else{
            stack1.push(s[i])
        }
        if(t[j] === '#'){
            stack2.pop(t[j])
        }else{
            stack2.push(t[j])
        }
        i++
        j++
    }
    return stack1.join('') === stack2.join('')
};

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