/**
 * Given a sorted array of integers and a target integer, find the first occurrence of the target and return
 * its index. Return -1 if the target is not in the array.
 */

function findFirstOccurrence(arr, target) {
  let left = 0,
      right = arr.length - 1
      firstIndex = -1
  while(left <=right){
      let mid = left + Math.floor((right - left) / 2)
      if(arr[mid] === target){
          firstIndex = mid
          right = mid - 1
      }else if(arr[mid] > target){
          right = mid - 1
      }
      else{
          left = mid + 1
      }
  }
   return firstIndex
}