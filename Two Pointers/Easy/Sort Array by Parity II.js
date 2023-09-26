/**
 * 
 */
//Using two pointers
/**
    Time: O(N)
    Space: O(1)
**/
var sortArrayByParityII = function(nums) {
  let even = 0,
      odd = 1;
  while(even < nums.length && odd<nums.length){
      if(isEven(nums[even])){//even is at its correct position so move ahead
          even+=2
      }else if(!isEven(nums[odd])){//odd is at its correct position so move ahead
          odd+=2
      }else if(isEven(nums[odd]) && !isEven(nums[even])){//even and odd are at wrong places so swap
          [nums[even], nums[odd]] = [nums[odd], nums[even]]
          even+=2
          odd+=2
      }
  }
  return nums
};

const isEven = (num)=>{
  return num % 2 == 0
}

var sortArrayByParityII = function(nums) {
  const result = []; // create a new array to store the result
  let evenIndex = 0; // index for even numbers
  let oddIndex = 1; // index for odd numbers
  
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
          // current number is even, add it to the even index
          result[evenIndex] = nums[i];
          evenIndex += 2; // move the even index to the next even position
      } else {
          // current number is odd, add it to the odd index
          result[oddIndex] = nums[i];
          oddIndex += 2; // move the odd index to the next odd position
      }
  }
  
  return result;
};