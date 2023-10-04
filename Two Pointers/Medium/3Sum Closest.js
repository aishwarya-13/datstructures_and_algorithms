/**
 * https://leetcode.com/problems/3sum-closest/description/
 */

 /**
    Time: Outer for loop: O(N) * Inner while loop: O(N) = O(N^2)
    Space: O(NLogN)
  */
    var threeSumClosest = function(nums, target) {
      nums.sort((a,b)=> a-b)
      let result = 0,
          min = +Infinity;
      for(let i=0; i<nums.length; i++){
          let left = i+1,
              right = nums.length - 1;
          while(left < right){
              let sum = nums[i] + nums[left] + nums[right],
                  diff = Math.abs(sum - target)
              if(diff<min){
                  min = diff
                  result = sum
              }
              //Found exact sum
              if(sum === target){
                  return sum
              }else if(sum > target){
                  right--
              }else{
                  left++
              }
          }
      }
      return result
  };