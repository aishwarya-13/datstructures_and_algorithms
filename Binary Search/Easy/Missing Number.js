/**
 * https://leetcode.com/problems/missing-number/
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

var missingNumber = function(nums) {
  let actualSum = 0,
      expectedSum = 0;
  for(let i=0; i<nums.length; i++){
      actualSum+= nums[i]
      expectedSum+= i+1
  }
  return expectedSum - actualSum;
};