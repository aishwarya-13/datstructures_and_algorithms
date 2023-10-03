/**
 * https://leetcode.com/problems/sort-colors/description/
 */
/**
 * Two pointer
 We will loop normally and have two pointers at the start and at the end
 We will place 0's to the left of start pointer and 2's to the right of end pointer
 We will place 1's in the middle of the start and end pointer
 mid pointer will use for iterating the array
 if mid encounters 0 -> swap left and mid and increment both the pointers
 if mid encounters 1 -> just increment the mid pointer
 if mid encounters 2 -> swap mid and right, decrement the right pointer but not mid because mid could have beewn swapped with a 0 (which was at the far right) and would be left behind.
 */

 var sortColors = function(nums) {
  let low = 0,
      mid = 0,
      high = nums.length - 1;
  while(mid <= high){
      if(nums[mid] === 0){
          [nums[mid], nums[low]] = [nums[low], nums[mid]]
          low++
          mid++
      }else if(nums[mid] === 1){
          mid++
      }else{
          [nums[mid], nums[high]] = [nums[high], nums[mid]]
          high--
      }
  }
};