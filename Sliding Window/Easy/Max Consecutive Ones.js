/**
 * https://leetcode.com/problems/max-consecutive-ones/description/
 */

 /**
    Using sliding window technique
  */
    var findMaxConsecutiveOnes = function(nums) {
        let result = 0,
            start = 0;
        for(let end=0; end<nums.length; end++){
            if(nums[end] !== 1){
                start = end + 1
            }
            result = Math.max(result, (end - start + 1))
        }
        return result
    };