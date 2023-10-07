/**
 * https://leetcode.com/problems/max-consecutive-ones-ii/description/
 */

  /**
 AISHWARYA'S
    Sliding Window
    1]When number of zeros becomes greater than 1 we will shrink the window
    2]Shrink the window until number of zeros is less than 1
  */
  /**
    Time: O(N)
    Space: O(1)
   */
    var findMaxConsecutiveOnes = function(nums) {
      let result = 0,
          start = 0,
          k = 1;
      for(let end=0; end<nums.length; end++){
          if(nums[end] === 0){
              k--
          }
          while(k < 0){
              if(nums[start] === 0){
                  k++
              }
              start++
          }
          result = Math.max(result, (end - start + 1))
      }
      return result
  };