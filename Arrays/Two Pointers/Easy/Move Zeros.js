/**
 * https://leetcode.com/problems/move-zeroes/
 */

/**
    1] Use slow and fast pointers - point to 0 initally
    2] Move fast ahead if value is 0
    3] When value at fast is non-zero
        a] swap fast and slow values
        b] MOve slow ahead

    Time: O(N)
    Space: O(1)
  */
    const moveZeroes = (nums)=>{
      let slow  = 0,
          fast = 0;
      while(fast < nums.length){
          if(nums[fast] !== 0){
              [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
              slow++
          }
          fast++
      }
      return slow;
  };