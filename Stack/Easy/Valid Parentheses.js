/**
 * https://leetcode.com/problems/valid-parentheses/description/
 */

/**
    Time: O(N) - We traverse the string one character at a time and push, pop and peek operations are O(1)
    Space: O(N) 
 */
var isValid = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === ")" && stack[stack.length - 1] !== "(") ||
      (str[i] === "]" && stack[stack.length - 1] !== "[") ||
      (str[i] === "}" && stack[stack.length - 1] !== "{")
    ) {
      stack.pop();
    } else {
      stack.push(str[i]); //imp to push any string onto the stack. DO NOT put this condition in if loop
    }
  }
  return stack.length === 0;
};

/**
    Push opening brace onto stack
    If a closing brace then pop and check for the type. If not same type return false.
    Time: O(N)
    Space: O(N)
 */
var isValid = (str) => {
  let stack = [];
  for (let c of str) {
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    }
    if (
      (c === ")" && stack.pop() !== "(") ||
      (c === "]" && stack.pop() !== "[") ||
      (c === "}" && stack.pop() !== "{")
    ) {
      return false;
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};
