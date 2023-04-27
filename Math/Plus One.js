/**
 * https://leetcode.com/problems/plus-one/
 */

 /**
 We only need to add one to the last element. So iterate from the end.
 If current ele is not 9 then add one to it and return the result
 else replace current ele by 0
 If it reaches at the end of iteration, simply add 1 to result and return
    Time: for loop will take O(N) + ununshift takes O(N) time to insert element at the start of the array
    So two passes ~ O(N)
    Space: O(1)
  */
    var plusOne = function(digits) {
        for(let i=digits.length-1; i>=0; i--){
            if(digits[i] !== 9){
                digits[i]++;
                return digits;
            }else{
                digits[i] = 0;
            }
        }
        //if we reach this point means all digits were 9 and we need to add one to the start
        digits.unshift(1);//unshift takes O(N) time to insert element at the start of the array
        return digits;
    };