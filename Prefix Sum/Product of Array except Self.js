/**
 * https://leetcode.com/problems/product-of-array-except-self/description/
 */

/**
 Using prefix product and sufix product
 [a0, a1, a2, a3, a4, a5, ...., an-1]
 So here a3 is a product of a0 to a2 (left sufix product) and a4, a5 to an-1(right sufix product)
 We optimize the solution here by using the result array itself for calculation

 Time: O(N)
 Space: O(1) result array is not counted
  */
var productExceptSelf = function (nums) {
  let result = [],
    mul = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = mul; //here result array will hold left prefix product
    mul *= nums[i];
  }
  mul = 1; //this variable keeps track of running product from right
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= mul;
    mul *= nums[i];
  }
  return result;
};

/**
 Using prefix product and sufix product
 [a0, a1, a2, a3, a4, a5, ...., an-1]
 So here a3 is a product of a0 to a2 (left sufix product) and a4, a5 to an-1(right sufix product)
 So, in first iteration calculate left sufix products of all the elements
 In second iteration calculate right sufix product of all the elements
 In third iteration multiply left and right sufix product to get the answer

 Time: O(N)
 Space: O(N)
  */
var productExceptSelf = function (nums) {
  let leftSufixproduct = [],
    rightSufixproduct = [],
    result = [],
    mul = 1;
  for (let i = 0; i < nums.length; i++) {
    leftSufixproduct[i] = mul;
    mul *= nums[i];
  }
  mul = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightSufixproduct[i] = mul;
    //This line is improvement over the 3rd loop (while loop)
    result[i] = leftSufixproduct[i] * rightSufixproduct[i];
    mul *= nums[i];
  }

  // let i = 0;
  // while (i < nums.length) {
  //   result[i] = leftSufixproduct[i] * rightSufixproduct[i];
  //   i++;
  // }
  return result;
};
