/**
 * https://leetcode.com/problems/maximum-average-subarray-i/description/
 */

 /**
    Sliding window
    Time: O(N)
    Space: O(1)
  */
    var findMaxAverage = function(nums, k) {
      let start = 0,
          sum = 0,
          count = k,
          max = -Infinity;
      for(let end=0; end<nums.length; end++){
          sum+= nums[end];
          count--;
          if(count <= 0){
              max = Math.max(max, (sum / k));
              sum-= nums[start++];
              count--;
          }
      }
      return max;
  };