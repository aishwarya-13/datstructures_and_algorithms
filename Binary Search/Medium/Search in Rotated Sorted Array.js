/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * 
 * Solution: https://www.youtube.com/watch?v=NiM1B0M6YRE
 */
/**
 Check if from mid if left part or right part is sorted (ascending)
 Then check if target lies within the boundaries
  */
var search = function(arr, target) {
  let left = 0,
      right = arr.length - 1
  while(left <= right){
      let mid = left + Math.floor((right - left) / 2)
      if(arr[mid] === target){
          return mid
      }else if(arr[left] <= arr[mid]){//left is sorted
          if(target >= arr[left] && target <= arr[mid]){
              right = mid - 1
          }else{
              left = mid + 1
          }
      }else{//right is sorted
          if(target >= arr[mid] && target <= arr[right]){
              left = mid + 1
          }else{
              right = mid - 1
          }
      }
  }
  return -1
};