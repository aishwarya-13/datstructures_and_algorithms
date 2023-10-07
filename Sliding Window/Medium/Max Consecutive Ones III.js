/**
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 */

/**
Solution same as Max Consecutive Ones II with difference k=some value here
Sliding Window
1] If current ele is 0 decrease k
2] When k becomes negative start shrinking the window
 */

var longestOnes = function(nums, k) {
  let result = 0,
      start = 0;
  for(let end=0; end<nums.length; end++){
      if(nums[end] === 0){
          k--
      }
      while(k<0){
          if(nums[start] === 0){
              k++
          }
          start++
      }
      result = Math.max(result, (end - start + 1))
  }
  return result
};