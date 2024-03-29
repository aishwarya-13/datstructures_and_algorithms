/**
 * https://leetcode.com/problems/find-peak-element/description/ - THis is peak element in an array
 * and
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/description/ - This is peak element in a mountain array
 */

/**
  Note peak element problem in leetcode is different and peak in mountain array problem is different
 */
var findPeakElement = function(arr) {
  let left = 0,
       right = arr.length - 1;
   while(left <= right){
       let mid = left + Math.floor((right - left) / 2)
       if(arr[mid] < arr[mid + 1]){
           left = mid + 1
       }else if(arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]){
           return mid
       }else{
           right = mid - 1
       }
   }
   return left; 
};

/**
 * Improved below
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
    Time: O(log N)
    Space: O(1)
  */
var findPeakElement = function(arr) {
   let left = 0,
        right = arr.length - 1;
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2)
        if(arr[mid] < arr[mid + 1]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return left; 
};