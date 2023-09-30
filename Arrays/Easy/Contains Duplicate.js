/**
 * https://leetcode.com/problems/contains-duplicate/description/
 */

 /**
 Using hasmap
 Time = O(n)
 Space = O(n)
  */
 var containsDuplicate = function(nums) {
  let map = {}
  for(let num of nums){
      if(map[num] === undefined){
          map[num] = num
      }else{
          return true
      }
  }
  return false
};

 /**
 Using sorting
 Time = O(nlogn) + O(n)
 Space = O(1)
  */
 var containsDuplicate = function(nums) {
  nums.sort((a,b)=> a-b)
  for(let i=0; i<nums.length; i++){
      if(nums[i] === nums[i+1]){
          return true
      }
  }
  return false
};

