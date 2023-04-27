/**
 * https://leetcode.com/problems/valid-parentheses/description/
 */

/**
    Push opening brace onto stack
    If a closing brace then pop and check for the type. If not same type return false.
    Time: O(N)
    Space: O(N)
 */
var isValid = (str)=>{
    let stack = [];
    for(let c of str){
        if(c === '(' || c === '[' || c === '{'){
            stack.push(c);
        }
        if((c === ')' && stack.pop() !== '(') ||
            (c === ']' && stack.pop() !== '[') ||
            (c === '}' && stack.pop() !== '{')){
                return false;
        }
    }
    if(stack.length === 0){
        return true;
    }
    return false;
};