/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 */

 /**
    Create a map with operator as key and function as value. Ex. {'+': (a,b)=> a+b}
    1] Push the numbers onto stack
    2] Once you encounter an operand then pop two elements from stack.
    3] Perform operation on those two numbers depending on the operator and push the result onto stack.
    
    Time:O(N)
    Space:O(1)
  */
    var evalRPN = function(tokens) {
      let evalMap = {
          '+': (a,b)=> a + b,
          '-': (a,b)=> a - b,
          '*': (a,b)=> a * b ,
          '/': (a,b)=> Math.trunc(a / b)
      }
      let stack = [];
      for(let token of tokens){
          if(!(token in evalMap)){
              stack.push(token)
          }else{
              let op1 = parseInt(stack.pop()),
                  op2 = parseInt(stack.pop())
              stack.push(evalMap[token](op2, op1))
          }
      }
      return stack.pop()
  };