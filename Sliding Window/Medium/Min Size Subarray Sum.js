/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 */
/**
    Time: Outer for loop= O(N) + Inner while loop = O(N) Each element is processed exactly once
    Space: O(1)
 */
    var minSubArrayLen = function(target, nums) {
      let sum = 0,
          start = 0,
          result = +Infinity;
      for(let end = 0; end<nums.length; end++){
          sum+= nums[end]
          while(sum >= target){
              result = Math.min((end - start + 1), result)
              sum-= nums[start]
              start++
          }
      }
      return result === Infinity ? 0 : result
  };
