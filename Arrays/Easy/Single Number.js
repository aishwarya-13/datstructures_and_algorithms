/**
 * https://leetcode.com/problems/single-number/
 */

 /**
 XOR operation: The bitwise XOR operator compares two numbers bit by bit and returns a new number where each bit is set to 1 if the corresponding bits of the two numbers are different, and 0 if they are the same.
 //
 We apply the extended version of this gate in our bitwise XOR operator.
If we do "a^b" , it means that we are applying the XOR gate on the 2 numbers in a bitwise fashion 
( on each of the corresponding bits of the numbers).
Similarly , if we observe ,

A^A=0
A^B^A=B
(A^A^B) = (B^A^A) = (A^B^A) = B This shows that position doesn't matter.
Similarly , if we see , a^a^a......... (even times)=0 and a^a^a........(odd times)=a
Ex: [4,1,2,1,2]
result = 0
i = 0 --> 0^4 = 4
i = 1 ---> 4^1
i = 2 ----> 4^1^2
i = 3 -----> 4^1^2^1 = 4^2
i = 4 -----> 4^2^2 = 4
  */
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i]; // using the XOR operator
    }
    return result;
};

/**
var singleNumber = function(nums) {
    let obj = {};
        for(let ele of nums){
            if(!obj.hasOwnProperty(ele)){
                obj[ele] = 1;
            }else{
                obj[ele]++;
            }
        };
        for(let i in obj){
            if(obj[i] === 1) return i;
        }
};
 */