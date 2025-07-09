/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
/**
    Create a map with operator as key and function as value. Ex. {'+': (a,b)=> a+b}
    1] Push the numbers onto stack
    2] Once you encounter an operand then pop two elements from stack.
    3] Perform operation on those two numbers depending on the operator and push the result onto stack.
    
    Time:O(N)
    Space:O(1)
  */
var evalRPN = function (tokens) {
  let evalMap = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  let stack = [];
  for (let token of tokens) {
    if (!(token in evalMap)) {
      stack.push(parseInt(token));
    } else {
      let operand1 = stack.pop();
      let operand2 = stack.pop();
      let result = evalMap[token](operand2, operand1); //imp to pass operand2 first then operand1
      stack.push(result);
    }
  }
  return stack.pop();
};
