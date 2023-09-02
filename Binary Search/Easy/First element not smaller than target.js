/**
 * Given an array of integers sorted in increasing order and a target, find the index of the first
 * element in the array that is larger than or equal to the target. Assume that it is guaranteed to find a
 * satisfying number.
 */

/**
 * Without using extra variable
 */
function firstNotSmaller(arr, target) {
  let left = 0,
      right = arr.length - 1
  while(left <= right){
  let mid = left + Math.floor((right - left) / 2);
        if(arr[mid] >= target){
            right = mid-1;
        }else{
            left = mid+1;
        }
  }
  return left
}

/**
 * With using extra variable
 */
function firstNotSmaller(arr, target) {
  let left = 0,
      right = arr.length - 1,
      firstIndex = -1
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2)
        if(arr[mid] >= target){
            firstIndex = mid
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return firstIndex
}