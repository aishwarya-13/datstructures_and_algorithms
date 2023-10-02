/**
 * https://leetcode.com/problems/4sum/description/
 */

//Time complexity = O(N*logN + N**3) ~ O(N**3)
var fourSum = function(nums, target) {
  nums.sort((a,b)=> a-b)
  let result = [];
  for(let i=0; i<nums.length; i++){
      if(i>0 && nums[i] === nums[i-1]) continue
      for(let j=i+1; j<nums.length; j++){
          if(j>i+1 && nums[j] === nums[j-1]) continue
          let left = j+1,
              right = nums.length - 1;
          while(left < right){
              let sum = nums[i] + nums[j] + nums[left] + nums[right]
              if(sum === target){
                  result.push([nums[i], nums[j], nums[left], nums[right]])
                  while(nums[left] === nums[left+1]) left++
                  while(nums[right] === nums[right-1]) right--
                  left++
                  right--
              }else if(sum > target){
                  right--
              }else{
                  left++
              }
          }
      }
  }
  return result
};