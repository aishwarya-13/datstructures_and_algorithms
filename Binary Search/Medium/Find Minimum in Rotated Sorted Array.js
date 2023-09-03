/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 */

 /**
 The numbers are divided in 2 sections. 1. Numbers larger than the last element 2. Numbers smaller than the last element
 The min element is at the boundary between two sections
 We can apply a feasible function of < the last element and get the boolean array that characterizes the two sections
 Now the problem is yet again reduced to finding the first true element in a boolean array. And we already know how to do this from Find the First True in a Sorted Boolean Array module.

Time Complexity: O(log(n))
Space Complexity: O(1)
  */
var findMin = function(arr) {
  let left = 0,
      right = arr.length - 1,
      last = arr[right]
  while(left <= right){
      let mid = left + Math.floor((right - left) / 2)
      if(arr[mid] > last){
          left = mid + 1
      }else{
          right = mid - 1
      }
  }
  return arr[left]
};