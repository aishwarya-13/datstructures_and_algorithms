/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 */

var search = function(arr, target) {
  let left = 0,
      right = arr.length - 1
  while(left <= right){
      //skip the duplicates
      while(arr[left] === arr[left + 1]) left++
      while(arr[right] === arr[right - 1]) right --
      let mid = left + Math.floor((right - left) / 2)
      if(arr[mid] === target){
          return true
      }else if(arr[left] <= arr[mid]){
          if(target >= arr[left] && target <= arr[mid]){
              right = mid - 1
          }else{
              left = mid + 1
          }
      }else{
          if(target >= arr[mid] && target <= arr[right]){
              left = mid + 1
          }else{
              right = mid - 1
          }
      }
  }
  return false
};