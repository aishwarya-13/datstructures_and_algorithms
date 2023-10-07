/**
 * https://leetcode.com/problems/max-consecutive-ones/description/
 */

/**
  Have solved it using sliding window similar technique also
 */

 /**
    Count the 1's when current ele is not a 1, record the max till now and reset the counter to 0.
    Time: O(N)
    Space: O(1)
  */
    var findMaxConsecutiveOnes = function(nums) {
      let count = 0,
          max = 0;
      for(let i=0; i<nums.length; i++){
          //if 1 increase count
          if(nums[i] === 1){
              count++;
          }else{//when 0 record the max and reset count to 0
              max = Math.max(max, count);
              count = 0;
          }
      }
      max = Math.max(max, count);//count the last 1
      return max;
  };