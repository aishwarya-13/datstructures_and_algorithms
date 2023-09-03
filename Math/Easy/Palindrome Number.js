/**
 * https://leetcode.com/problems/palindrome-number/
 */

 /**
 Create a reverse number.
 Compare original and reverse number
  */
 var isPalindrome = function(x) {
    let reverse = 0,
        copy = x;
    while(copy > 0){
        let rightmostDigit = copy % 10;
        reverse = reverse * 10 + rightmostDigit;
        copy = Math.floor(copy / 10);//get the left part
        console.log(copy)
    }
    return reverse === x;
};

/**
Rightmost digit: i=1 ==> 1141 % 10 = 1 |i=2 ==> 114 % 10 = 4 | i=3 ==> 11 % 10 = 1| i=4  ==> 1 % 10 = 1

i=1 ==> 0 * 10 + 1 =1| i=2 ==> 1 * 10 + 4 = 14| i=3 ==> 14 * 10 + 1 = 141 | i=4 ==> 141 * 10 + 1 = 1411

Leftmost digit: Math.floor(copy / 10) |/|/ i=1 ==>  1141 / 10 (rounded down) = 114 |i=2  ==> 114/10 = 11| i=3 ==> 11/10  = 1| i=4 ==> 1/10 = 0
 */



/**
 * Converting number to string
var isPalindrome = function(x) {
    let num = '' + x,//x.toString(),
            left = 0,
            right = num.length - 1,
            status = false;

        while(left<=right){
            if(num[left] === num[right]){
                status = true;
            }else{
                return false;
            };
            left++;
            right--;
        };
        return status;
};
 */