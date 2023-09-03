//https://leetcode.com/problems/missing-number/description/
/**
Instead of two passes to get the actual and expected sums we can do it in 1 loop
The actual sum will be the sum of numbers present in the array
The expected sum will be sum of the indices +1

Time: O(n)
Space: O(1)
 */
var missingNumber = function(nums) {
  let actualSum = 0,
      expectedSum = 0;
  for(let i=0; i<nums.length; i++){
      actualSum+= nums[i]
      expectedSum+= i+1
  }
  return expectedSum - actualSum;
};

/**
 * Using Binary Search
 */

var missingNumber = function(nums) {
  nums.sort((a,b)=> a-b)
  let left = 0,
      right = nums.length
  while(left < right){
      mid = left + Math.floor((right - left) / 2)
      if(nums[mid] > mid){
          right = mid
      }else{
          left = mid + 1
      }
  }
  return left
};