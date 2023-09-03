/**
 * https://leetcode.com/problems/add-binary/description/
 */

 /**
 1 + 1 = 0 carry 1
 1 + 0 = 1
 0 + 1 = 1
 0 + 0 = 0
  */
var addBinary = function(a, b) {
    let result = '',
        i = a.length - 1,
        j = b.length - 1,
        carry = 0;
    while(i>=0 || j>=0 || carry > 0){
        const num1 = i>=0 ? parseInt(a[i]) : 0;
        const num2 = j>=0 ? parseInt(b[j]) : 0;
        const sum = num1 + num2 + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }
    return result;
};